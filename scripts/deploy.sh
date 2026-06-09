#!/usr/bin/env bash
# Deploy islamicmaps.org: build content, sync to S3, reindex search, invalidate CF.
#
# Idempotent — safe to re-run. Uses AWS_REGION + the stack outputs to discover
# bucket / distribution / API names instead of hard-coding them. Designed to be
# called both from GitHub Actions and from a local terminal.
#
# Why this exists: a naive `aws s3 sync app/ s3://… --delete` will WIPE
# /dist/* (because dist/ isn't under app/). This script syncs the two prefixes
# separately, each with its own --delete scope, so they can't clobber each other.
#
# Required env (or pass via flag):
#   AWS_REGION                   default: us-east-1
#   SITE_STACK                   default: islamicmaps-app
#   SEARCH_STACK                 default: islamicmaps-search
# Flags:
#   --skip-build      Skip `python3 -m pipeline.build` (use existing dist/)
#   --skip-reindex    Skip the search-index rebuild + S3 upload
#   --force-reindex   Reindex even when the source hash matches (overrides skip)
#   --skip-invalidate Skip CloudFront invalidation
#   --dry-run         Print planned commands, do not execute

set -euo pipefail

# ------------------------------------------------------------------ args
SKIP_BUILD=0
SKIP_REINDEX=0
FORCE_REINDEX=0
SKIP_INVALIDATE=0
REBUILD_VENDOR=0
DRY_RUN=0
for a in "$@"; do
  case "$a" in
    --skip-build)      SKIP_BUILD=1 ;;
    --skip-reindex)    SKIP_REINDEX=1 ;;
    --force-reindex)   FORCE_REINDEX=1 ;;
    --skip-invalidate) SKIP_INVALIDATE=1 ;;
    --rebuild-vendor)  REBUILD_VENDOR=1 ;;
    --dry-run)         DRY_RUN=1 ;;
    -h|--help)
      sed -n '2,/^$/p' "$0" | sed 's/^# \?//'
      exit 0 ;;
    *) echo "unknown arg: $a" >&2; exit 2 ;;
  esac
done

run() { if [[ $DRY_RUN -eq 1 ]]; then echo "+ $*"; else "$@"; fi; }

# ------------------------------------------------------------------ config
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
export AWS_REGION="${AWS_REGION:-us-east-1}"
SITE_STACK="${SITE_STACK:-islamicmaps-app}"
SEARCH_STACK="${SEARCH_STACK:-islamicmaps-search}"

echo "==> islamicmaps.org deploy ($(date -u +%FT%TZ))"
echo "    region=$AWS_REGION  site=$SITE_STACK  search=$SEARCH_STACK"

# ------------------------------------------------------------------ resolve outputs
get_output() {  # stack key -> value
  aws cloudformation describe-stacks --region "$AWS_REGION" --stack-name "$1" \
    --query "Stacks[0].Outputs[?OutputKey=='$2'].OutputValue" --output text
}

SITE_BUCKET="$(get_output "$SITE_STACK" SiteBucket)"
DIST_ID="$(get_output "$SITE_STACK" DistributionId)"
INDEX_BUCKET="$(get_output "$SEARCH_STACK" IndexBucket)"

if [[ -z "$SITE_BUCKET" || -z "$DIST_ID" || -z "$INDEX_BUCKET" ]]; then
  echo "ERROR: could not resolve stack outputs (SiteBucket=$SITE_BUCKET DistributionId=$DIST_ID IndexBucket=$INDEX_BUCKET)" >&2
  exit 1
fi
echo "    site bucket    = $SITE_BUCKET"
echo "    cf distribution= $DIST_ID"
echo "    index bucket   = $INDEX_BUCKET"

# ------------------------------------------------------------------ 1) build
if [[ $SKIP_BUILD -eq 0 ]]; then
  echo "==> [1/4] python pipeline build"
  run python3 -m pipeline.build --clean
else
  echo "==> [1/4] skip pipeline build"
fi

if [[ $REBUILD_VENDOR -eq 1 ]]; then
  echo "==> [1b/4] rebuild vendor bundles (esbuild)"
  if [[ $DRY_RUN -eq 0 ]]; then
    if [[ ! -d .vendor-build/node_modules ]]; then
      ( cd .vendor-build && npm install --silent --no-audit --no-fund )
    fi
    BUILT_AT="$(date -u +%FT%TZ)" node .vendor-build/build.mjs
  else
    echo "+ ( cd .vendor-build && [npm install if needed] && node build.mjs )"
  fi
fi

# ------------------------------------------------------------------ 1c) stamp SW
#
# Service-worker cache invalidation is the only thing standing between a deploy
# and existing visitors actually picking it up. `app/sw.js`'s SHELL constant
# carries a `__SHELL_HASH__` sentinel that we replace IN-PLACE with a digest
# of every file the SW caches (SHELL_ASSETS in sw.js). When any of those files
# changes, the digest changes, the SW notices a new SHELL on next page load,
# and runs `install` → `addAll(SHELL_ASSETS)` to refresh the cache.
#
# The substitution is reversed by an EXIT trap so the working tree stays
# clean even if a later step fails or you Ctrl-C.
SW_FILE="app/sw.js"
SW_BACKUP=""

restore_sw() {
  if [[ -n "$SW_BACKUP" && -f "$SW_BACKUP" ]]; then
    mv -f "$SW_BACKUP" "$SW_FILE"
    SW_BACKUP=""
  fi
}
trap restore_sw EXIT

compute_shell_hash() {  # echoes 12-char hex digest
  # MUST match SHELL_ASSETS in app/sw.js. Sort for cross-machine determinism.
  {
    LC_ALL=C shasum -a 256 \
      app/index.html \
      app/manifest.webmanifest \
      app/css/style.css \
      app/js/main.js app/js/map.js app/js/layers.js app/js/ui.js \
      app/js/playback.js app/js/search.js app/js/searchApi.js \
      app/js/data.js app/js/i18n.js app/js/arabic.js app/js/config.js \
      app/vendor/maplibre-gl.css app/vendor/maplibre-gl.mjs \
      app/vendor/deck.gl.mjs app/vendor/pmtiles.mjs \
      app/vendor/basemap-style.json 2>/dev/null
  } | shasum -a 256 | awk '{print substr($1,1,12)}'
}

if [[ $DRY_RUN -eq 1 ]]; then
  echo "+ stamp $SW_FILE: replace __SHELL_HASH__ with computed digest"
else
  if ! grep -q "__SHELL_HASH__" "$SW_FILE"; then
    echo "ERROR: $SW_FILE has no __SHELL_HASH__ sentinel — was it already substituted? Check git status." >&2
    exit 1
  fi
  SHELL_HASH="$(compute_shell_hash)"
  SW_BACKUP="${SW_FILE}.deploy.bak"
  cp -f "$SW_FILE" "$SW_BACKUP"
  # In-place sed; portable form for both BSD (macOS) and GNU sed.
  sed "s/__SHELL_HASH__/${SHELL_HASH}/g" "$SW_BACKUP" > "$SW_FILE"
  echo "==> [1c/4] stamped $SW_FILE: SHELL=imaps-shell-${SHELL_HASH}"
fi

# ------------------------------------------------------------------ 2) sync site
# IMPORTANT: app/ and dist/ are synced SEPARATELY so --delete of one cannot
# remove files of the other.
echo "==> [2/4] sync app/ -> s3://$SITE_BUCKET/  (excluding /dist/*)"
run aws s3 sync app/ "s3://$SITE_BUCKET/" \
  --region "$AWS_REGION" \
  --delete \
  --exclude ".DS_Store" --exclude "*.DS_Store" \
  --exclude "test/*" --exclude "package*.json" --exclude "node_modules/*" --exclude "README.md" \
  --exclude "dist/*" \
  --cache-control "public, max-age=300, stale-while-revalidate=86400" \
  --no-progress

echo "==> [2/4] sync dist/ -> s3://$SITE_BUCKET/dist/  (separate --delete scope)"
# `basemap/*` is excluded from --delete because the 89 MB hijaz.pmtiles is
# built out-of-band (see pipeline/basemap.py — search order is env var,
# ~/.cache/imaps/basemap-hijaz.pmtiles, /tmp/pmtiles-work/...). On a CI
# runner that lacks the cached file, pipeline.build emits an empty dist/basemap/,
# and a naive `--delete` would WIPE the live basemap from S3 — exactly what
# happened on 2026-06-09 19:51 UTC. The exclude makes the live basemap
# resilient to dev-machine vs CI environment drift; basemap updates are now
# always uploaded directly with `aws s3 cp` (or via this sync if dist/basemap
# IS populated). Same logic for the search index: dist/search/index.json is
# the offline lexical index which is build-time generated, but the search
# Lambda's index.json.gz lives in a SEPARATE bucket so this scope isn't
# at risk for it.
run aws s3 sync dist/ "s3://$SITE_BUCKET/dist/" \
  --region "$AWS_REGION" \
  --delete \
  --exclude "*.gz" --exclude "*.br" --exclude ".DS_Store" --exclude "*.DS_Store" \
  --exclude "basemap/*" \
  --cache-control "public, max-age=86400, stale-while-revalidate=604800" \
  --no-progress

# Basemap upload — separate from the sync because we WANT it to no-op when
# the source file is missing (rather than wipe the live basemap). When the
# local basemap exists (dev machine), this uploads it; when it doesn't (CI),
# this prints a single line and moves on, preserving whatever's already on S3.
if [[ -f dist/basemap/hijaz.pmtiles ]]; then
  echo "==> [2b/4] upload dist/basemap/hijaz.pmtiles ($(du -h dist/basemap/hijaz.pmtiles | awk '{print $1}'))"
  run aws s3 cp dist/basemap/hijaz.pmtiles "s3://$SITE_BUCKET/dist/basemap/hijaz.pmtiles" \
    --region "$AWS_REGION" \
    --content-type "application/vnd.pmtiles" \
    --cache-control "public, max-age=2592000" \
    --no-progress
else
  echo "==> [2b/4] no local dist/basemap/hijaz.pmtiles — leaving the live basemap in place"
fi

# Per-file overrides for content-type + cache-control where the bulk values are wrong.
override() {  # key  content-type  cache-control
  if [[ $DRY_RUN -eq 1 ]]; then
    echo "+ aws s3 cp s3://$SITE_BUCKET/$1 ... --content-type \"$2\" --cache-control \"$3\""
    return
  fi
  # Only override if the object exists.
  if aws s3api head-object --bucket "$SITE_BUCKET" --key "$1" --region "$AWS_REGION" >/dev/null 2>&1; then
    aws s3 cp "s3://$SITE_BUCKET/$1" "s3://$SITE_BUCKET/$1" \
      --region "$AWS_REGION" \
      --metadata-directive REPLACE \
      --content-type "$2" \
      --cache-control "$3" >/dev/null
  fi
}
override "index.html"            "text/html; charset=utf-8"        "no-cache"
override "sw.js"                 "application/javascript; charset=utf-8" "no-cache"
override "manifest.webmanifest"  "application/manifest+json"       "public, max-age=300"
override "dist/catalog.json"     "application/json"                "public, max-age=300, stale-while-revalidate=86400"
override "dist/geometry/features.pmtiles" "application/vnd.pmtiles" "public, max-age=86400"
override "dist/basemap/hijaz.pmtiles"     "application/vnd.pmtiles" "public, max-age=2592000"
# Vendor bundles are version-pinned in build.mjs — far-future cacheable.
override "vendor/maplibre-gl.mjs"      "application/javascript; charset=utf-8" "public, max-age=31536000, immutable"
override "vendor/maplibre-gl.css"      "text/css; charset=utf-8"               "public, max-age=31536000, immutable"
override "vendor/deck.gl.mjs"          "application/javascript; charset=utf-8" "public, max-age=31536000, immutable"
override "vendor/pmtiles.mjs"          "application/javascript; charset=utf-8" "public, max-age=31536000, immutable"
override "vendor/basemap-style.json"   "application/json"                       "public, max-age=86400"
# Icons / favicon — large TTL, content-stable.
override "favicon.ico"                            "image/x-icon"  "public, max-age=86400"
override "icons/favicon.ico"                      "image/x-icon"  "public, max-age=86400"
override "icons/favicon-16.png"                   "image/png"     "public, max-age=86400"
override "icons/favicon-32.png"                   "image/png"     "public, max-age=86400"
override "icons/apple-touch-icon.png"             "image/png"     "public, max-age=86400"
override "icons/icon-192.png"                     "image/png"     "public, max-age=86400"
override "icons/icon-512.png"                     "image/png"     "public, max-age=86400"
override "icons/icon-192-maskable.png"            "image/png"     "public, max-age=86400"
override "icons/icon-512-maskable.png"            "image/png"     "public, max-age=86400"
# SEO discovery files
override "robots.txt"                             "text/plain; charset=utf-8"  "public, max-age=86400"
override "sitemap.xml"                            "application/xml; charset=utf-8"  "public, max-age=86400"

# ------------------------------------------------------------------ 3) re-index search
#
# Idempotency: the indexer re-embeds every doc through Bedrock on every run.
# At 30 docs that's pennies; at 1000 it's not, and every push-to-main re-runs
# this. Skip the loop when nothing that affects the embedding has changed.
#
# The hash covers:
#   - every doc the indexer reads (catalog + story bundles)
#   - the Python that produces the embedding input (indexer/text/service)
#   - the embed model id + dim (changing model = corpus must re-embed)
# Sentinel: s3://INDEX_BUCKET/.last-source-hash. If it matches AND the index
# artifact itself exists, skip. Override with --force-reindex.
EMBED_MODEL="${EMBED_MODEL:-cohere.embed-multilingual-v3}"
EMBED_DIM="${EMBED_DIM:-1024}"
INDEX_KEY="${INDEX_KEY:-search-index.json.gz}"
HASH_KEY=".last-source-hash"

compute_source_hash() {  # echoes hex digest
  {
    printf 'model=%s\ndim=%s\n' "$EMBED_MODEL" "$EMBED_DIM"
    # sort keeps the digest stable across machines / locales
    find dist/catalog.json dist/stories -type f -name '*.json' 2>/dev/null \
      | LC_ALL=C sort \
      | xargs shasum -a 256 2>/dev/null
    LC_ALL=C shasum -a 256 \
      serverless/src/search/indexer.py \
      serverless/src/search/text.py \
      serverless/src/search/service.py 2>/dev/null
  } | shasum -a 256 | awk '{print $1}'
}

if [[ $SKIP_REINDEX -eq 1 ]]; then
  echo "==> [3/4] skip search reindex (--skip-reindex)"
elif [[ $DRY_RUN -eq 1 ]]; then
  echo "+ compute source hash; compare to s3://$INDEX_BUCKET/$HASH_KEY; reindex iff changed"
else
  CURRENT_HASH="$(compute_source_hash)"
  REMOTE_HASH=""
  if aws s3api head-object --bucket "$INDEX_BUCKET" --key "$HASH_KEY" \
       --region "$AWS_REGION" >/dev/null 2>&1; then
    REMOTE_HASH="$(aws s3 cp "s3://$INDEX_BUCKET/$HASH_KEY" - --region "$AWS_REGION" 2>/dev/null \
                   | tr -d '[:space:]')"
  fi
  ARTIFACT_PRESENT=0
  if aws s3api head-object --bucket "$INDEX_BUCKET" --key "$INDEX_KEY" \
       --region "$AWS_REGION" >/dev/null 2>&1; then
    ARTIFACT_PRESENT=1
  fi

  if [[ $FORCE_REINDEX -eq 0 \
        && "$CURRENT_HASH" = "$REMOTE_HASH" \
        && $ARTIFACT_PRESENT -eq 1 ]]; then
    echo "==> [3/4] skip reindex — source hash unchanged (${CURRENT_HASH:0:12}…)"
  else
    if [[ $FORCE_REINDEX -eq 1 ]]; then
      reason="--force-reindex"
    elif [[ $ARTIFACT_PRESENT -eq 0 ]]; then
      reason="index artifact missing"
    elif [[ -z "$REMOTE_HASH" ]]; then
      reason="no prior hash on s3"
    else
      reason="hash drift (${REMOTE_HASH:0:12}… → ${CURRENT_HASH:0:12}…)"
    fi
    echo "==> [3/4] rebuild + upload search index -> s3://$INDEX_BUCKET/  [$reason]"
    env \
      INDEX_BUCKET="$INDEX_BUCKET" \
      INDEX_KEY="$INDEX_KEY" \
      EMBED_MODEL="$EMBED_MODEL" \
      EMBED_DIM="$EMBED_DIM" \
      AWS_REGION="$AWS_REGION" \
      PYTHONPATH=serverless/src \
      python3 -m search.indexer --dist dist
    # Persist the hash AFTER a successful reindex. Lose-the-write means we
    # reindex once next time — strictly safer than skipping a real diff.
    printf '%s\n' "$CURRENT_HASH" \
      | aws s3 cp - "s3://$INDEX_BUCKET/$HASH_KEY" \
          --region "$AWS_REGION" \
          --content-type "text/plain" \
          --cache-control "no-cache" \
          --no-progress
  fi
fi

# ------------------------------------------------------------------ 4) invalidate CF
if [[ $SKIP_INVALIDATE -eq 0 ]]; then
  echo "==> [4/4] CloudFront invalidation /index.html /catalog.json /search/*"
  run aws cloudfront create-invalidation \
    --region "$AWS_REGION" \
    --distribution-id "$DIST_ID" \
    --paths "/index.html" "/sw.js" "/manifest.webmanifest" \
            "/js/*" "/css/*" "/vendor/*" \
            "/dist/catalog.json" "/dist/search/*" "/dist/stories/*" "/dist/basemap/*" \
    --query 'Invalidation.[Id,Status]' --output text
else
  echo "==> [4/4] skip invalidation"
fi

echo "==> done. https://app.islamicmaps.org"
