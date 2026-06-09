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
#   --skip-invalidate Skip CloudFront invalidation
#   --dry-run         Print planned commands, do not execute

set -euo pipefail

# ------------------------------------------------------------------ args
SKIP_BUILD=0
SKIP_REINDEX=0
SKIP_INVALIDATE=0
REBUILD_VENDOR=0
DRY_RUN=0
for a in "$@"; do
  case "$a" in
    --skip-build)      SKIP_BUILD=1 ;;
    --skip-reindex)    SKIP_REINDEX=1 ;;
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
run aws s3 sync dist/ "s3://$SITE_BUCKET/dist/" \
  --region "$AWS_REGION" \
  --delete \
  --exclude "*.gz" --exclude "*.br" --exclude ".DS_Store" --exclude "*.DS_Store" \
  --cache-control "public, max-age=86400, stale-while-revalidate=604800" \
  --no-progress

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

# ------------------------------------------------------------------ 3) re-index search
if [[ $SKIP_REINDEX -eq 0 ]]; then
  echo "==> [3/4] rebuild + upload search index -> s3://$INDEX_BUCKET/"
  run env \
    INDEX_BUCKET="$INDEX_BUCKET" \
    INDEX_KEY="search-index.json.gz" \
    EMBED_MODEL="cohere.embed-multilingual-v3" \
    EMBED_DIM=1024 \
    AWS_REGION="$AWS_REGION" \
    PYTHONPATH=serverless/src \
    python3 -m search.indexer --dist dist
else
  echo "==> [3/4] skip search reindex"
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
