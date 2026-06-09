# islamicmaps.org — Project Handoff & Continuation Guide

> **Read this first.** It is the single, self-contained brief for anyone (human or AI)
> picking up this project on a new machine. It records the vision, every decision and
> *why*, what is built, what is tested, what is **not** tested, what should be tested,
> known shortcuts, and a prioritized TODO. After this, read `SUMMARY.md` (snapshot),
> `CODEBASE_MAP.md` (file-by-file), then the per-component READMEs (`schema/README.md`,
> `pipeline/README.md`, `app/README.md`, `serverless/README.md`).

**Last updated:** 2026-06-09
**Status:** **Live MVP at https://app.islamicmaps.org.** Four CloudFormation
stacks deployed in `us-east-1` (search Lambda, static site, observability,
CI/CD); 78 pure-core tests pass; every "scalable functionality" claim has a
matching live verification (PMTiles range-fetched, Bedrock semantic search,
animated story playback, procedural 3D Kaaba, observability dashboard,
GitHub Actions CI green). Source at https://github.com/islamicmaps/im-monolithic
(public). See §0 for what changed since 2026-06-08, §6 for what's live now.

> Owner action still pending: set repo variable `AWS_ROLE_ARN` to
> `arn:aws:iam::803129122420:role/islamicmaps-cicd-github-deploy` so the
> deploy workflow can OIDC-assume on push-to-main. CI workflow is already green.

---

## Table of contents
0. [What changed in the 2026-06-09 deploy session](#0-what-changed-in-the-2026-06-09-deploy-session)
1. [What we are building](#1-what-we-are-building)
2. [Positioning / competitors / the gap](#2-positioning--competitors--the-gap)
3. [Locked decisions and the reasoning behind them](#3-locked-decisions-and-the-reasoning-behind-them)
4. [Architecture](#4-architecture)
5. [The content model (the keystone) — in depth](#5-the-content-model-the-keystone--in-depth)
6. [What is IMPLEMENTED](#6-what-is-implemented)
7. [What is TESTED (and how to re-run)](#7-what-is-tested-and-how-to-re-run)
8. [What is NOT tested / unverified](#8-what-is-not-tested--unverified)
9. [What SHOULD be tested — concrete test plan](#9-what-should-be-tested--concrete-test-plan)
10. [Known shortcuts, scaffolding & tech debt](#10-known-shortcuts-scaffolding--tech-debt)
11. [The one big OPEN DECISION (vector store / cost)](#11-the-one-big-open-decision-vector-store--cost)
12. [Dev environment notes (tools present/absent)](#12-dev-environment-notes-tools-presentabsent)
13. [How to run everything](#13-how-to-run-everything)
14. [Prioritized TODO / next steps](#14-prioritized-todo--next-steps)
15. [Killer-feature backlog (product)](#15-killer-feature-backlog-product)
16. [Working conventions (must follow)](#16-working-conventions-must-follow)
17. [Glossary (domain + technical)](#17-glossary-domain--technical)

---

## 0. What changed in the 2026-06-09 deploy session

The 2026-06-08 brief said "Nothing deployed to AWS yet." This session put it
all on AWS. Eleven items shipped, in order. Each one is a self-contained,
reversible change; each ended with a live smoke test against
`app.islamicmaps.org` or the deployed `/v1/search` endpoint.

| # | Item | Lasting artifact / live state |
|---|---|---|
| 1 | Deploy search Lambda | CFN stack `islamicmaps-search`. Fixed a latent bug in `serverless/infra/template.yaml` (transform was `2016-10-09`, invalid → `2016-10-31`). Bedrock embeddings via `cohere.embed-multilingual-v3`. Live API at `https://klc37q0kng.execute-api.us-east-1.amazonaws.com`, `/v1/health` 200, all four `mode=` values (lexical/semantic/hybrid + Arabic) returning correct ranked hits. |
| 2 | Static site stack | CFN stack `islamicmaps-app` — `infra/site.yaml`. S3 (private, OAC, versioned) + CloudFront (HTTP/2+H/3, brotli auto-compression, SPA fallback) + WAFv2 (Common Rule Set + IP reputation + per-IP rate limit) + ACM (DNS-validated) + Route53 A/AAAA aliases. Live at `https://app.islamicmaps.org`. |
| 3 | Wire frontend → `/v1/search` | New `app/js/searchApi.js` (pure, fetch-injectable). `main.js` runs offline+online searches in parallel, aborts in-flight on each keystroke. UI shows ★ semantic / ★ semantic+lexical badges + snippet. CORS tightened: `AllowedOrigin=https://app.islamicmaps.org`. 14 new Node tests; the "search-index race" flagged in §10 is fixed (caches the *promise*, not the result). |
| 4 | Observability | CFN stack `islamicmaps-observability` — `infra/observability.yaml`. CloudWatch dashboard + 6 alarms (Lambda errors / throttles / p95 duration; API GW 5xx; CloudFront 5xx-rate; WAF blocked spike) + SNS topic. **Subscribe an email to the SNS topic to get paged.** |
| 5 | CI/CD foundation | CFN stack `islamicmaps-cicd` — `infra/cicd.yaml`. GitHub OIDC provider + scoped deploy IAM role (`arn:aws:iam::803129122420:role/islamicmaps-cicd-github-deploy`). `.github/workflows/{ci,deploy}.yml`. New `scripts/deploy.sh` — idempotent, separate `--delete` scopes for `app/` and `dist/` syncs (fixes a foot-gun where `--delete` wiped `/dist/*`), discovers stack outputs at runtime. |
| 6 | Self-host frontend libs | `.vendor-build/` (esbuild) → `app/vendor/{maplibre-gl,deck.gl,pmtiles}.mjs` + `maplibre-gl.css`. Zero third-party CDN runtime deps; the "free forever, low-bandwidth" claim is now actually true. ~617 KB brotli total over the wire. |
| 7 | Real Protomaps PMTiles basemap | Replaced the MapLibre demo style with a Protomaps light theme over a Hijaz-region PMTiles file (89 MB, z0–14, extracted from `build.protomaps.com` daily planet via `pmtiles extract --bbox 36,18,44,28 --maxzoom 14`). New `pipeline/basemap.py` step copies the cached file into `dist/basemap/` on each build. Live: 26+ HTTP 206 Range requests fetching tiles, valid `accept-ranges: bytes`. |
| 8 | Fix deck.gl shader-link error | Combined the deck.gl + @deck.gl/mapbox bundles into one (was producing two `@deck.gl/core` copies → DECKGL_FILTER_* macros undefined → vertex-shader-not-compiled). Story playback now actually animates on a real GPU. |
| 9 | 3D Kaaba via polygon extrusion | `examples/feature.kaaba-volume.json` — atemporal Polygon with `render3d.extrude { height_m: 13.1 }`. New extrude branch in `app/js/layers.js` (PolygonLayer with `extruded: true`). +3 KB to the bundle. Zero asset weight; the cuboid renders correctly at the real GPS coords. Tawaf step camera tightened to z19/pitch 70/bearing 30 so the 3D-ness is obvious. |
| 10 | PWA icons + missing media | Generated icon set from `docs/im_logo_small.png` via `sips` (192/512 regular + maskable, apple-touch 180, favicon 32/16, .ico). Authored 3 missing asset docs (`hijra-cover` + `umrah-cover` as inline-SVG-data-URI covers, zero S3 bytes; `talbiyah-audio` as a placeholder doc with `ext.status: "placeholder"`). **0 dangling refs left** (was 3); manifest validates, no more icon 404s. |
| 11 | Push to public GitHub | Local repo had zero commits. Initial commit `ec13d63` → `origin/main` of `islamicmaps/im-monolithic` (public). Follow-up commit `9a82791` fixed cfn-lint failures (`arn:aws:` literals → `arn:${AWS::Partition}` in 5 templates), dropped an unused `AllowedRefs` parameter, added a pre-flight `AWS_ROLE_ARN` check to deploy.yml. **CI workflow is now green** at https://github.com/islamicmaps/im-monolithic/actions. |
| 12 | Lighthouse audit + quick wins | Baseline mobile **81/100/100/100** (perf/a11y/bp/seo), desktop **99/100/100/100**. Quick wins applied: removed `user-scalable=no` (a11y), aria-labels on every interactive control (search input, basemap toggle, lang select, play, seek, speed, modal close), `meta description` + OpenGraph tags, `robots.txt` + `sitemap.xml`. New `scripts/audit.sh` for repeatable runs (`--mobile/--desktop/--both`, `--runs N --median` for noise reduction). Reports checked in at `docs/lighthouse/{mobile,desktop}.report.{json,html}`. |
| 13 | Search Lambda SnapStart | `SnapStart: PublishedVersions` + `AutoPublishAlias: live` on the search function. Eager-imported boto3 + Bedrock + S3 clients in `handler.py` when `AWS_LAMBDA_FUNCTION_NAME` is set, so the snapshot captures the boto3 startup tax (~200-400 ms). Pure-core tests still skip the priming. Measured cold-start latency from CloudWatch REPORT logs: **1406 ms (init) → 594 ms (Restore) — 57% reduction.** End-user-perceived TTFB on the first hit dropped from 2.3 s → 0.77 s; warm baseline unchanged at 0.4 s. API Gateway integrations now route to the `live` alias (was `$LATEST`). |
| 14 | Author Ibn Battuta story | New `story.battuta-rihla.json` — temporal-mode 9-step playback spanning 1325-1354 (~30 years). 7 new place docs (Tangier, Cairo, Damascus, Kilwa, Delhi, Quanzhou, Timbuktu), 1 feature (planet-scale route), 1 event, 1 source (Gibb's Rihla translation), 1 inline-SVG cover. Catalog grew 2 → 3 stories. **30 docs validate (was 18), 0 dangling refs.** Caught and fixed a real bug in `service.embed`: Bedrock's `cohere.embed-multilingual-v3` rejects inputs > 2048 chars at the input-validator (the `truncate=END` field is silently ignored). Embedder now pre-truncates to 2000 chars at the boundary. **Tests hardened:** `test_search.py` and `app/test/logic.test.mjs` had assumptions hardcoded to 2 stories and 2-dim vectors; rewrote to use subset checks and `n_docs`-sized one-hot vectors so they survive a growing corpus. Live: every Battuta-themed query (including "Quanzhou Zaytun", "Delhi qadi", "Mali pilgrimage" — words not in the doc verbatim) ranks `battuta-rihla` first. |

### Live AWS state (all `us-east-1`)

| Resource | Value |
|---|---|
| Site origin bucket | `s3://app.islamicmaps.org` (private, OAC) |
| CloudFront distribution | `E229ILRSBM7I4J` |
| Search API | `https://klc37q0kng.execute-api.us-east-1.amazonaws.com` |
| Search Lambda | `islamicmaps-search-SearchFunction-jJJwPsk2NAnK` (arm64, 1 GB, Python 3.12) |
| Search index bucket | `s3://islamicmaps-search-indexbucket-cwvzx7msvv1a` |
| WAF WebACL | `islamicmaps-app-cf-acl` (CLOUDFRONT scope) |
| Hosted zone | `islamicmaps.org.` (`Z00115081OG6U8JV61C2I`) |
| ACM cert | DNS-validated, auto-renewing |
| SNS alarm topic | `arn:aws:sns:us-east-1:803129122420:islamicmaps-observability-alarms` (no subscribers yet) |
| Dashboard | `https://us-east-1.console.aws.amazon.com/cloudwatch/home?region=us-east-1#dashboards:name=islamicmaps-observability` |
| Deploy IAM role | `arn:aws:iam::803129122420:role/islamicmaps-cicd-github-deploy` |

### Untouched

- The **legacy 2020 `s3://islamicmaps.org` bucket** (a previous static site) was deliberately left alone. The MVP runs on the new `app.islamicmaps.org` subdomain.
- The apex `islamicmaps.org` and `www.` Route 53 records were not modified.

### Things to verify when you next sit down

1. Set the GitHub repo variable `AWS_ROLE_ARN` (only manual step left to make
   push-to-main auto-deploy).
2. Subscribe an email to the SNS alarm topic (otherwise alarms fire silently).
3. Real-device smoke (real iPhone Safari, real Android Chrome, PWA-install,
   offline mode after install) — none of this session's smokes used a real
   touchscreen.
4. Scholar review of the two MVP stories. Especially the procedure of Umrah
   and the framing of Hijri↔Gregorian dates.

---

## 1. What we are building

**islamicmaps.org** — a free, community web map (and future native iOS/Android apps)
that puts *anything Islamic that can be shown on a map* onto one modern, clean,
Google-Maps-quality interface. Examples:

- **Historical journeys** with a **play button** that animates movement over time:
  the Hijra (Mecca→Medina), the route of Musa (Moses), expeditions, Ibn Battuta's
  travels, caliphate expansion, trade routes, battles.
- **Ritual guides**: step-by-step Hajj and Umrah, shown in **3D at the real sites**
  (tawaf around the Kaaba, sa'i between Safa and Marwa, Mina→Arafat→Muzdalifah).
- **3D landmarks**: Masjid al-Haram, Masjid an-Nabawi, al-Aqsa, the Kaaba.
- Layers appear/disappear via **search + theme filters** (not dropdowns).
- Every object has an **"i" (info) button** with sourcing — text, images, audio,
  video, scripture references — because credibility is everything here.

**Core principles (non-negotiable, repeated by the owner):**
- **Free forever** for users. Owner bears the cost; never charge.
- **Best possible UX.** Clean, modern, fast. Like Google Maps, not like old GIS tools.
- **Works on low / no bandwidth.** Many users are in poor-connectivity regions or on
  congested networks (e.g. during Hajj). Offline-capable.
- **Extendable to native** with **zero backend changes** (platform-agnostic API).
- **Built for scale; never make an MVP decision that forecloses a feature later.**
- **Sourced & credible.** AI-generated content now, scholar-reviewed progressively.
  Religious sensitivity (Sunni/Shia differences, contested sites, disputed dates) is
  an existential risk — sourcing rigor is the moat.
- **Multilingual + RTL** (Arabic, Urdu, Indonesian, Turkish, French, English, …).
- **3D-capable but bandwidth-adaptive** — never get "stuck in 2D"; degrade gracefully.

The domain is `islamicmaps.org` (already purchased by the owner). Infra = AWS.

---

## 2. Positioning / competitors / the gap

Existing Islamic-map content is almost entirely **in books / static atlases** (e.g.
Darussalam's *Atlas of the Qur'an* / *Atlas of the Prophet's Biography*). There is **no
one-stop interactive app**. Adjacent tools and why they don't fill the gap:

| Tool | What it is | Why it's not this |
|---|---|---|
| **Running Reality** | Historical time-map, 3D-ish, time slider | Not Islamic; dated, slow UX (owner confirmed: "very bad UX") |
| **ORBIS (Stanford)** | Roman travel/route model | Academic, single domain, dated UX |
| **Esri StoryMaps / Knight Lab StoryMapJS** | Scrollytelling map tooling | Tooling, not Islamic content |
| **Nusuk / Manasik apps** | Official Hajj/Umrah logistics & booking | Not historical maps; procedural/admin |
| **Muslim Pro / Quran apps** | Prayer times, qibla, Quran | Utilities, no maps |
| **Google Earth Voyager** | Generic narrated map stories | Few/no Islamic stories, generic |

**The gap we fill:** interactive **+** multilingual **+** sourced **+** animated **+**
3D **+** one-stop, spanning **both** history (interpretive) and ritual (procedural).
Nobody covers all of these. The defensible edge = modern UX (MapLibre + deck.gl) +
rigorous sourcing + i18n + scale-ready architecture.

---

## 3. Locked decisions and the reasoning behind them

Each was debated and settled. **Do not silently reverse these** without revisiting the
rationale.

1. **Rendering: MapLibre GL JS (+ deck.gl), NOT Mapbox.**
   *Why:* Mapbox bills per map load (~$5/1k loads after free tier). A free `.org` with
   a potentially huge Muslim audience could hit $1000s/month. MapLibre is the open
   fork: free, no per-load billing, does globe + 3D terrain. deck.gl layered on top
   provides the 3D models + animated routes + scrollytelling **identically regardless
   of basemap renderer**, so the "killer features" are renderer-agnostic. Owner
   accepted: use MapLibre, do not compromise UX (deck.gl closes most of the gap).

2. **Renderer ≠ data provider.** MapLibre can display *any* tile source. So basemap
   quality / satellite freshness depend on the **provider you choose**, not on
   MapLibre vs Mapbox. This dissolved the owner's worry that MapLibre couldn't show
   fresh satellite.

3. **Basemap: vector by default; satellite is an opt-in toggle.**
   - Vector default = **Protomaps PMTiles** (a whole vector basemap as a single file
     on S3, served via CloudFront range requests — near-zero cost, no tile server).
     *(Currently the app uses MapLibre's free demo style as a placeholder — see §10.)*
   - Satellite (heavy → conflicts with low-bandwidth → off by default) = free **EOX
     Sentinel-2 cloudless** (global, ~10m, CC-BY-NC-SA). Alternatives: Esri World
     Imagery, NASA GIBS. For holy sites specifically, pre-tile high-res satellite for
     just those bounding boxes into tiny raster PMTiles on S3 (cheap, offline-able).

4. **Infra: static-first on AWS; serverless only where needed.**
   Content is read-only and mostly static → S3 + CloudFront CDN carries ~all traffic
   (pennies, infinite scale, offline-cacheable). A serverless API (API Gateway +
   Lambda) is added **only** for deep/semantic search (and later: user features). No
   always-on servers anywhere.

5. **Backend is platform-agnostic by construction.** REST/JSON over HTTPS, versioned
   (`/v1`), CDN-cacheable. Web + iOS + Android consume identical endpoints → native
   needs **zero** backend change. REST (not GraphQL) for cacheability + simplicity on
   bad networks.

6. **Authoring format ≠ delivery format.** Author content as readable JSON/GeoJSON
   (AI-friendly, git-diffable, scholar-reviewable). A **build step compiles** it to
   lean delivery: brotli JSON (metadata), PMTiles vector tiles (geometry, visible-area
   + zoom LOD), GLB+Draco+KTX2 (3D, LOD tiers), a prebuilt search index. *You never
   hand-author binary.* This answers "isn't JSON too big?" — text brotli-compresses
   ~85–90%, and large geometry uses tiles, not raw GeoJSON.

7. **Content model is the keystone** (see §5). A normalized graph of small JSON docs
   linked by typed id, so the client lazy-loads only what a view needs (low-bandwidth).
   Designed for *everything* up front; the MVP merely renders a subset.

8. **Dates: EDTF + dual Hijri/Gregorian + `sort_key`.** Religious history needs
   uncertainty ("circa", "disputed"), BCE, and **both** calendars. We reuse the EDTF
   standard (ISO 8601-2) for uncertainty strings, store both calendar parts, and a
   numeric `sort_key` (proleptic-Gregorian ordinal) so the global time slider can
   order even uncertain/BCE/Hijri dates. Designed in from day 1 (painful to retrofit).

9. **i18n + RTL from day 1.** Every human string is a `LocalizedString` (BCP-47 →
   string). Direction (RTL for ar/ur/fa) resolved at render time from locale. Search
   normalizes Arabic (strip harakat, unify alef/ta-marbuta/etc.).

10. **Search: offline-first lexical + serverless deep/semantic.**
    - **Offline (always works):** a prebuilt inverted index shipped as a static file,
      loaded once, searched client-side, no server, no per-query bandwidth. Arabic-
      normalized at build time. Replaces dropdowns with search box + theme facets.
    - **Online-only (augments):** deep full-text + **semantic** (vector) search behind
      the serverless API. Never blocks the offline path.

11. **Sourcing & review.** Open-ended `InfoBlock` array (text/image/audio/video/
    quran/hadith/citation/link) behind the "i" button. Every story carries a `review`
    status (draft → ai-generated → scholar-reviewed → verified) + a `certainty` flag.
    Content is AI-generated now; owner has scholar contacts for progressive review.

12. **Adaptive 2D↔3D.** Every renderable feature carries a 2D representation **and**
    optional 3D (glTF model with LOD variants, or procedural polygon extrusion). The
    client picks by `navigator.connection` (effectiveType / saveData) + WebGL support.
    2D always works; 3D is progressive enhancement; never stuck.

13. **Reuse standards; don't reinvent.** GeoJSON (RFC 7946), EDTF, Linked Places
    Format / World Historical Gazetteer (place IDs), glTF/GLB (3D), JSON Schema
    (draft 2020-12) for the content schemas.

14. **MVP content = one history + one ritual story**, end-to-end, to validate both
    playback paths: **the Hijra** (temporal/animated route) and **Umrah** (sequential/
    3D walkthrough). Chosen by the owner.

---

## 4. Architecture

See the rendered diagram: **`docs/architecture.png`** (source `docs/architecture.dot`,
re-render with `dot -Tpng docs/architecture.dot -o docs/architecture.png`).

Three colour-coded paths:

- **Green — static hot path (no server).** clients → Route 53 → CloudFront → S3
  (app bundle, brotli-JSON content, PMTiles vector + holy-site raster, GLB/media LODs,
  prebuilt client search index). CDN-cached, offline-capable. Carries ~all traffic.
- **Purple — serverless, online-only.** CloudFront → WAF → API Gateway (`/v1`) →
  Lambda → OpenSearch Serverless (deep + semantic search). Only hop needing a server.
  DynamoDB/Cognito dashed (future: bookmarks, contributor auth).
- **Grey — build pipeline (offline CI).** GitHub (AI-authored JSON + scholar PRs) →
  CodeBuild → compile (tippecanoe/GDAL→PMTiles, gltf-transform→GLB, search index,
  Bedrock embeddings) → publish to S3 + index into OpenSearch.

Why: no always-on servers → pennies at rest, scales to a huge audience, free-forever
friendly; native-ready via the shared `/v1` API.

---

## 5. The content model (the keystone) — in depth

JSON Schemas live in `schema/` (draft 2020-12). Worked examples in `examples/`.
Full rationale + AI authoring guide in `schema/README.md`. Summary here so this doc
stands alone.

### Entity graph (how units compose)

Small documents referenced by **typed id** (`place:`, `feature:`, `event:`, `story:`,
`asset:`, `source:`). The client lazy-loads only what a view needs.

```
  Atoms (often timeless)        Renderable            Composites
  place    — geography ──┐
  asset    — 3D/img/aud ─┤──▶  feature  ──┐
  source   — citation ───┘   (2D + opt 3D) │──▶  event  ──┐  (atoms + time)
                                            └──────────────┤──▶  story (playback)
                              event ───────────────────────┘
  catalog — lean manifest + theme taxonomy + offline search seed (loaded first)
```

- **place** — geographic anchor (gazetteer), usually **atemporal**. Has `names` +
  `alt_names` (transliterations for search), `geometry`, external `gazetteer_ids`.
- **asset** — media: `model3d` (LOD `variants` + `anchor` + `fallback_2d`), image,
  audio, video, icon. Metadata only; binaries on S3/CDN.
- **source** — citation (quran/hadith/book/…); the provenance behind the "i" button.
- **feature** — one renderable geometry. Always `render2d`; optional `render3d`
  (`model` ref or polygon `extrude`). `temporal` is **optional** (atemporal allowed —
  e.g. the present-day Kaaba). `geometry` is inline GeoJSON *or* a tiles reference.
- **event** — *composes* `places` + `features` + a time extent (`temporal.start/end`).
  This is how individual units connect into a "happening". (A date is an attribute
  *of* an event — not the atomic unit.)
- **story** — the headline unit search returns and the **play button** drives.
  *Composes* features/events + **playback**. Carries title/subtitle/description
  (localized), category, themes, bbox, default_view, info/sources, `review`.
- **catalog** — the lean, always-loaded, offline-cached manifest: theme taxonomy +
  one lightweight entry per story (enough to search/filter/list without downloading
  full stories). The offline search index is built from this.

### Playback (the "play button") — two modes
- **`temporal`** — driven by real dates; shows the **global time slider** (play/pause/
  speed). Steps carry `at_time` (a `DateValue.sort_key` positions them). *Example:
  Hijra — animated route.*
- **`sequential`** — ordered `steps` with **no real dates** (procedural). *Example:
  Umrah — ihram → tawaf → sa'i → halq.*
- **`none`** — static (e.g. a single 3D landmark).

A **Step** has: `order`/`at_time`, localized `title` + `narration`, optional `audio`,
a `camera` pose (the client flies to it), `show`/`hide` feature refs (accumulated),
and `animate[]` (`draw_path` | `move_marker` | `trip`) along a path feature. The
client's `playback.js` turns all this into a normalized clock + per-frame render state.

### Dates — `common.schema.json#/$defs/DateValue`
`edtf` (uncertainty string e.g. `"0610?"`, `"062X"`, `"0622/0624"`, `-0001`),
`calendar`, `era`, `precision`, `certainty`, `gregorian{y,m,d}`, `hijri{y,m,d}`,
**`sort_key`** (required; numeric canonical ordinal for the time slider), localized
`display` + `note`.

### i18n — `LocalizedString`
`{ "en": "...", "ar": "...", ... }`. Always include `en`; `ar` strongly recommended.
RTL is a render concern, not stored.

### Sourcing — `InfoBlock`
Array of typed blocks (`text|heading|image|audio|video|quran|hadith|citation|
external_link`), deliberately extensible. Plus structured `source` docs.

### Schema files (8)
`common` (shared $defs: Id, Ref, LocalizedString, DateValue, GeoJSONGeometry,
GeometrySource, CameraState, InfoBlock, ReviewStatus) · `place` · `asset` · `source` ·
`feature` · `event` · `story` (incl. the `Step` $def) · `catalog`.

### Example instances (14 files in `examples/`)
`source.sealed-nectar`, `place.makkah`, `place.madinah`, `feature.hijra-route`,
`event.hijra`, `asset.kaaba-model`, `story.hijra` (temporal), `asset.kaaba-icon`,
`feature.kaaba`, `feature.tawaf-circle`, `feature.pilgrim-marker`,
`feature.safa-marwa-path`, `story.umrah` (sequential), `catalog`. These double as the
pipeline's default input and as the MVP content.

---

## 6. What is IMPLEMENTED

### A. Content schema — `schema/` ✅ complete
8 JSON Schemas + 14 example docs. All examples validate against their schemas
(cross-file `$ref` resolved offline). This is the stable contract everything else
targets.

### B. Build pipeline — `pipeline/` ✅ runs green
Python, stdlib + `jsonschema` + `brotli`; GDAL for geometry (per project policy: no
rasterio). Steps:
- **validate** — JSON Schema conformance + referential integrity (every `type:id` ref
  resolves) + catalog↔story consistency. CI gate (non-zero exit on failure).
- **bundle** — inline each story's transitive refs into a self-contained
  `stories/<id>.json` (one request per story).
- **search index** — compact inverted index from the catalog, Arabic-normalized
  (`pipeline/arabic.py`).
- **geometry** — inline features → one `features.geojson`; → PMTiles via `ogr2ogr`
  *if* the GDAL PMTiles driver exists (it didn't in dev — graceful skip, see §8).
- **models** — manifest of `model3d` assets + LOD variants (no binary transform; no
  local meshes + no gltf-transform in dev).
- **compress** — every artifact written plain + `.gz` + `.br`.
- **publish** (`pipeline/publish.py` — separate) — generates `aws s3 sync` +
  CloudFront invalidation commands; **dry-run by default**.
Result on the MVP set: 14 docs → 6 artifacts, **17.6 KB raw → 5.8 KB brotli (~67%
smaller)**. Output goes to `dist/` (gitignored).

### C. Web client — `app/` ✅ scaffold built; ⚠️ render layer unverified in a browser
Zero-build ESM PWA (no bundler / no `npm install`): MapLibre GL + deck.gl via CDN
importmap. **Deliberate split**: pure logic (testable in Node) vs browser render glue.
- **Pure (tested):** `arabic.js` (mirrors the Python normalizer), `search.js`
  (offline index search + prefix typeahead), `playback.js` (the playback state
  machine), `i18n.js`, `data.js`.
- **Browser-only (written, syntax-checked, NOT visually tested):** `map.js`
  (MapLibre + vector/satellite toggle + flyTo), `layers.js` (deck.gl GeoJsonLayer /
  PathLayer / ScatterplotLayer / ScenegraphLayer; progressive path draw + moving
  marker; adaptive 2D/3D), `ui.js` (search/themes/story panel/play bar/sources modal,
  RTL-aware), `main.js` (orchestrator + per-frame loop), `sw.js` (service worker),
  `index.html`, `css/style.css`, `manifest.webmanifest`.
- Features wired: offline search + theme chips, play/pause/speed + scrubber + per-step
  narration + camera fly-to, temporal vs sequential playback, adaptive 2D↔3D, RTL
  flip, PWA offline.

### D. Deep/semantic search API — `serverless/` ✅ built & pure-tested; ⚠️ not deployed
SAM/CloudFormation + Python Lambda. AWS SDK calls **lazily imported** so the pure core
tests without boto3.
- **Pure (tested):** `service.py` (build_knn_query / build_lexical_query / make_filters
  / format_hits / **rrf_merge** for hybrid / `search` orchestration), `text.py`
  (extract searchable docs from `dist/`, multilingual), `indexer.py` doc-building +
  index mapping, `handler.py` (HTTP API event parse + responses).
- **AWS-backed (NOT exercised):** Bedrock embedding (`embed`), OpenSearch client +
  search (`os_client`/`_os_search`), bulk indexing.
- **IaC** `infra/template.yaml`: HTTP API + Lambda (`/v1/search`, `/v1/health`) +
  OpenSearch Serverless VECTORSEARCH collection + encryption/network/data-access
  policies + IAM (bedrock:InvokeModel, aoss:APIAccessAll). Structurally validated
  (pyyaml), **not** `sam validate`/`cfn-lint`/deployed.
- **API contract:** `POST /v1/search {q, mode:lexical|semantic|hybrid, k, themes,
  locale}` → `{query, mode, count, hits:[{id,type,score,title,snippet,themes,url}]}`.
  Same hit schema as the offline client → results merge by `id`.

### E. Docs
`SUMMARY.md`, `CODEBASE_MAP.md`, `docs/architecture.{dot,png,svg}`, per-component
READMEs, and this file.

---

## 7. What is TESTED (and how to re-run)

All three suites pass and run against **real artifacts**, no mocks of our own code.

1. **Pipeline (de-facto integration):** `python3 -m pipeline.build --clean` — validates
   14 docs, emits 6 artifacts, reports sizes. A one-off verification script also
   confirmed: Arabic normalization, story bundle self-containment, cross-script search
   tokens, and presence of `.gz`/`.br` siblings. *(No dedicated unit-test file yet — see
   TODO.)*
2. **Web client core — 30 assertions:** `cd app && npm test` (or
   `node app/test/logic.test.mjs`). Covers: Arabic normalize/tokenize; search exact +
   prefix + Arabic + empty; data loader (fetch shim); **temporal playback** (Hijra:
   start step, trip animation present, run-to-end stops on `arrive`, route stays
   visible, clock advances); **sequential playback** (Umrah: ihram start, seek to
   tawaf, reveals Kaaba, move_marker animation, no clock); bundle deref (transitive);
   i18n (dir, fallback, locale pick).
3. **Search API core — 27 assertions:** `python3 serverless/tests/test_search.py`.
   Covers: multilingual document extraction from real `dist/` (incl. Arabic); knn +
   lexical query construction + filters; format_hits; **RRF merge**; hybrid search
   (embeds once, both stories returned); lexical (no embed); indexer doc-building +
   knn_vector mapping; HTTP handler (200/400-missing-q/400-bad-mode/health/OPTIONS-204/
   CORS/params).
4. **Schema:** every example validated against its schema; re-validated on every
   pipeline build.
5. **Template:** `serverless/infra/template.yaml` parsed + structurally checked with a
   CFN-tolerant pyyaml loader (resources, routes, policies, outputs present).
6. **Browser smoke test (headless Chrome via puppeteer-core, 2026-06-08).** Drove the
   built app end-to-end on a real browser engine. **Verified:** module graph loads
   (importmap + esm.sh resolution all green); MapLibre map initializes + canvas
   renders; UI mounts (search, 7 theme chips, 2 stories listed); search `"hijra"` →
   "The Hijra: Mecca to Medina"; clicking a result opens the story panel + playbar;
   pressing **Play** advances the seek slider, draws the green route progressively,
   moves the red marker along it, sets per-step narration ("Under cover of night, the
   Prophet ﷺ and Abu Bakr leave Mecca."), flips the button to "Pause"; switching the
   locale to `ar` flips `<html dir>` to `rtl`, swaps the side panels, translates the
   theme chips and playback button to Arabic. Zero `pageerror`s and zero failed network
   requests after the fixes (other than the known PWA-icon 404s in §10). PMTiles file
   was generated by the pipeline (this machine has GDAL with the PMTiles driver) but
   was not yet wired into a vector style, so its actual rendering is still untested.
   Two bugs were found and fixed during this run — see the new entries in §10/§7
   ("Smoke-test fixes applied").

**Smoke-test fixes applied (2026-06-08):**
- `app/js/main.js` — changed `import { MapboxOverlay } from "deck.gl"` →
  `from "@deck.gl/mapbox"`. The umbrella `deck.gl@9` package on esm.sh re-exports
  layers but **not** `MapboxOverlay` (which lives in `@deck.gl/mapbox`); the wrong
  import threw `SyntaxError: ... does not provide an export named 'MapboxOverlay'`
  at module-load time, so `main.js` never executed and **the entire UI failed to
  mount**. Confirmed by inspecting the esm.sh-served umbrella source (no
  `MapboxOverlay` re-export). `app/index.html` importmap now includes
  `"@deck.gl/mapbox": "https://esm.sh/@deck.gl/mapbox@9"`.
- `app/css/style.css` — added `#modal[hidden] { display: none; }` to override
  `#modal { display: grid; ... }`. The `display: grid` rule was beating the HTML
  `hidden` attribute, so the (initially hidden) sources modal was visible as a stray
  centered ✕ button on every screen.

**Total automated: 57 assertions across the two pure cores + the build gate, plus the
headless-browser smoke pass.**

---

## 8. What is NOT tested / unverified

Most of the 2026-06-08 list has been verified — see §0. What remains:

- **Real iPhone Safari / Android Chrome / real-touchscreen smoke** — every
  browser smoke this session ran in headless or windowed Chrome on macOS
  (Apple Silicon). A real phone (cellular network, finger taps, install-as-PWA)
  hasn't seen the live site.
- **PWA offline** — service worker registers and shell-caches everything, but
  the offline experience hasn't been exercised end-to-end (needs a second load
  with the network cut).
- **Satellite raster toggle** — the EOX Sentinel-2 path is wired but the
  toggle wasn't clicked in any smoke; tile loading + attribution display
  unconfirmed.
- **3D `ScenegraphLayer` with a real `.glb`** — the procedural extrude branch
  (item 9 of §0) covers the Kaaba; a real glTF model + Draco/KTX2 + the glTF
  loader registration is still untried (the metadata path in `pipeline/models.py`
  exists, but no binary produced).
- **GitHub Actions deploy workflow** — the CI workflow is green; the deploy
  workflow has only been exercised up to the OIDC pre-flight (which fails
  cleanly because `AWS_ROLE_ARN` isn't set yet). End-to-end push-to-main →
  auto-deploy hasn't fired once.
- ~~**Lighthouse / Core Web Vitals**~~ — DONE 2026-06-09 (item 12 of §0).
  Mobile **81/100/100/100**, desktop **99/100/100/100**, LCP 3.8 s, TBT 70 ms,
  CLS 0.022 on Moto G Power-class hardware over simulated 4G. Re-run any time
  with `./scripts/audit.sh`.
- **Search quality at scale** — corpus is 2 stories. Hybrid RRF tuning, kNN
  ranking sanity, and search-relevance evaluation will need real content to
  judge.
- **3D / GLB optimization** — `gltf-transform` still absent; if a real .glb
  ever lands, the Draco/KTX2 step in the pipeline is untried.
- **`pipeline/publish.py`** — superseded by `scripts/deploy.sh`; left in the
  repo as historical reference but not the path anyone should call now.

---

## 9. What SHOULD be tested — concrete test plan

**(a) Browser smoke test (highest priority — unblocks everything visual).**
Serve repo root (`python3 -m http.server 8000`), open `http://localhost:8000/app/`,
and verify in Chrome + Safari + Firefox + a real phone:
- [ ] Map loads; default world view; no console errors; importmap modules resolve.
- [ ] Search box returns Hijra/Umrah; Arabic query works; theme chips filter.
- [ ] Selecting **Hijra**: fits bbox; Play animates the route (path draws + marker
      moves); time label updates; pause/speed work; per-step narration + camera fly.
- [ ] Selecting **Umrah**: steps advance ihram→tawaf→sa'i→halq; Kaaba appears (3D on
      good connection, 2D fallback when throttled); marker moves along paths.
- [ ] "i" sources modal opens with citation.
- [ ] Basemap toggle loads EOX satellite tiles; toggles back.
- [ ] Switch locale to Arabic → layout flips RTL, strings localize.
- [ ] DevTools → throttle to "Slow 3G" + Save-Data → 3D disabled, app still usable.
- [ ] Install as PWA; go offline; previously-viewed story still loads (service worker).

**(b) AWS deploy verification.**
- [ ] `sam build && sam deploy --guided`; enable the Bedrock embedding model in-region.
- [ ] `GET /v1/health` → 200.
- [ ] Run `search.indexer` against `dist/`; confirm docs indexed.
- [ ] `POST /v1/search` lexical / semantic / hybrid return sensible hits; CORS works
      from the site origin; latency acceptable; check cost in Billing.

**(c) Pipeline hardening.**
- [ ] Add a `pipeline/tests/` suite (validate failure cases, bundle transitivity,
      compression determinism, search-index correctness).
- [ ] On a machine with GDAL ≥ 3.8 (or tippecanoe), verify real PMTiles output renders
      in MapLibre.

**(d) Content QA.** Scholar review of the two MVP stories (esp. Umrah procedure and
the Musa-route framing when added); verify Hijri↔Gregorian conversions.

**(e) Non-functional.** Lighthouse (PWA/perf/a11y), bundle/data sizes on 3G, screen-
reader pass, keyboard nav, large-catalog search latency.

---

## 10. Known shortcuts, scaffolding & tech debt

**Resolved in 2026-06-09 (see §0):**
- ~~CDN ESM via esm.sh~~ — vendor bundles via esbuild → `app/vendor/*.mjs`. Zero third-party CDN runtime deps.
- ~~Demo basemap style~~ — Protomaps `light` theme over a Hijaz PMTiles file.
- ~~PWA icons missing~~ — generated from `docs/im_logo_small.png` via `sips` (192/512 regular + maskable, apple-touch, favicon).
- ~~Dangling media refs (`hijra-cover`, `umrah-cover`, `talbiyah-audio`)~~ — authored as inline-SVG-data-URI covers + a placeholder audio doc. Pipeline reports 0 dangling refs.
- ~~Search-index race in `app/js/main.js`~~ — caches the promise, not the result; in-flight requests aborted on each keystroke.
- ~~`#modal[hidden]` CSS guard~~ — still in place from 2026-06-08.
- ~~OpenSearch Serverless cost~~ — see §11; the S3 + in-memory-vector Lambda backend is live.

**Still active:**
- **3D ScenegraphLayer with a real `.glb`.** The procedural extrude branch (the live Kaaba) covers the immediate need, but a real glTF model + glTF loader registration is untried. The model3d schema fields are ready.
- **Client search is exact + prefix only**; no fuzzy/typo tolerance. Mitigated by the deployed semantic backend, which catches near-misses.
- **`app/js/arabic.js` must stay in sync with `pipeline/arabic.py`** — same normalization, or queries won't match index tokens. Both currently aligned + tested.
- **`AWS_REGION`** is provided by Lambda at runtime; the indexer reads `config.AWS_REGION`
  (default us-east-1) — set env appropriately when running locally.

---

## 11. Vector store decision (DECIDED 2026-06-08)

**Decided:** **S3 + in-memory-vector Lambda.** OpenSearch Serverless was rejected by
the project owner over its non-zero idle cost (OCU minimum ~ hundreds of USD/month),
which is irreconcilable with "free forever". The serverless module's `service.py` /
`text.py` / `handler.py` are already pure and backend-agnostic, so the swap is a
backend implementation, not a redesign — the API contract and client integration
stay identical. The existing OpenSearch SAM template (`serverless/infra/template.yaml`)
stays in the repo as a future option for when corpus / query load justifies it.

**Scalability sanity-check** (recorded so the decision can be revisited if it stops
fitting): brute-force kNN over 10k vectors × 1024 dims (≈ 40 MB) is sub-millisecond
in a Lambda; even 100k docs (≈ 400 MB) fits within the 10 GB Lambda memory ceiling
and runs in single-digit ms. Concurrency: default Lambda quota of 1,000 concurrent
executions × ~100–200 ms per search ≈ 5–10k QPS sustained without quota changes —
far above realistic search QPS for a content site whose offline client index already
absorbs the easy queries. Cost at 1M searches/month ≈ a few USD all-in (API Gateway
$1, Lambda invocations + compute ~$3, query embeddings on Bedrock a few dollars),
**vs. ~hundreds USD/month idle** for OpenSearch Serverless. Cold starts are the only
real risk; mitigations if it bites: SnapStart (free), or modest Provisioned
Concurrency during peak. Migration triggers: corpus > ~500k docs, sustained > ~10k
QPS, or features that need OpenSearch's BM25-side scoring (none currently planned).

---

## 12. Dev environment notes (tools present/absent)

Recorded so a fresh machine knows what to install. In the original dev environment:
- **Present:** Python 3.11 (+ `jsonschema`, `brotli`, `pyyaml`), Node v24, **GDAL**
  (`ogr2ogr`, but a version *without* the PMTiles driver), Graphviz (`dot`).
- **Absent:** `tippecanoe`, `gltf-transform`, AWS CLI, AWS SAM CLI, `cfn-lint`,
  `boto3`, `opensearch-py`, a browser/headless Chromium, `referencing` (intermittently).

**Current dev machine (macOS, 2026-06-08):**
- **Present:** Python 3.11, Node v25, npm 11, AWS CLI, Homebrew. **GDAL** with the
  **PMTiles driver** (built `features.pmtiles` successfully — better than the
  original env). Real Chrome.app for the smoke test. Python deps (`jsonschema`,
  `brotli`, `pyyaml`) installed by the owner during this session.
- **Absent:** `tippecanoe` (not needed — GDAL covers PMTiles here), `gltf-transform`,
  AWS SAM CLI, Graphviz `dot` (only needed to re-render the diagram), `boto3` /
  `opensearch-py` (only needed for AWS-touching code paths).

To continue you will likely need: a browser; AWS CLI + SAM CLI + AWS account/creds
with Bedrock model access; `pip install boto3 opensearch-py`; GDAL ≥ 3.8 **or**
tippecanoe for PMTiles; Node + `@gltf-transform/cli` for 3D optimization. The pipeline
+ both test suites + the headless smoke run with just Python + Node + a system Chrome.

---

## 13. How to run everything

```bash
# from the repo root

# 1) Build content -> dist/
python3 -m pipeline.build --clean
python3 -m pipeline.build --validate-only       # CI gate only

# 2) Web client: test the pure core, then serve locally
( cd app && npm test )                          # 44 assertions (node)
python3 -m http.server 8000                     # open http://localhost:8000/app/

# 3) Search API: test the pure core (run from repo root!)
python3 serverless/tests/test_search.py         # 34 assertions

# 4) END-TO-END DEPLOY (idempotent, ~30 s if no infra changes)
./scripts/deploy.sh                             # build → sync app/ → sync dist/ → reindex → invalidate
./scripts/deploy.sh --dry-run                   # print planned commands, do nothing
./scripts/deploy.sh --skip-build --skip-reindex # tweak-and-republish loop
./scripts/deploy.sh --rebuild-vendor            # rerun esbuild on the vendor bundles

# 5) Lighthouse audit (mobile by default; reports written to docs/lighthouse/)
./scripts/audit.sh                              # one mobile run (~60s)
./scripts/audit.sh --both                       # mobile + desktop
./scripts/audit.sh --runs 5 --median            # 5 mobile runs, take median (noise reduction)

# 6) Rebuild the vendor bundles (one-time, after npm version bumps)
( cd .vendor-build && npm install && BUILT_AT=$(date -u +%FT%TZ) node build.mjs )

# 7) Build / refresh the Protomaps PMTiles basemap (out-of-band, ~2 min)
brew install pmtiles                            # one-time
mkdir -p ~/.cache/imaps
pmtiles extract https://build.protomaps.com/$(date -u -v-3d +%Y%m%d).pmtiles \
  ~/.cache/imaps/basemap-hijaz.pmtiles \
  --bbox 36,18,44,28 --maxzoom 14
# pipeline/basemap.py picks it up on the next pipeline.build

# 8) Deploy / update IaC stacks (rare — most edits go via scripts/deploy.sh)
aws cloudformation deploy --region us-east-1 --stack-name islamicmaps-app          --template-file infra/site.yaml          --tags project=islamicmaps environment=mvp
aws cloudformation deploy --region us-east-1 --stack-name islamicmaps-observability --template-file infra/observability.yaml --tags project=islamicmaps environment=mvp
aws cloudformation deploy --region us-east-1 --stack-name islamicmaps-cicd          --template-file infra/cicd.yaml          --capabilities CAPABILITY_NAMED_IAM
( cd serverless && sam build -t infra/template.yaml && \
  sam deploy --stack-name islamicmaps-search --region us-east-1 --resolve-s3 \
             --capabilities CAPABILITY_IAM --no-confirm-changeset )

# 9) Subscribe to the alarm topic (one-time)
aws sns subscribe --region us-east-1 \
  --topic-arn arn:aws:sns:us-east-1:803129122420:islamicmaps-observability-alarms \
  --protocol email --notification-endpoint you@example.com

# 10) Re-render the architecture diagram (optional)
dot -Tpng docs/architecture.dot -o docs/architecture.png
```

Repo: https://github.com/islamicmaps/im-monolithic (public). CI runs on every
push (44+34 tests + cfn-lint + template structural-validate). Deploy fires on
push-to-main once the `AWS_ROLE_ARN` repo variable is set — see §0.

---

## 14. Prioritized TODO / next steps

**P0 — DONE in 2026-06-09 session (see §0):** browser smoke; vector-store decision +
implementation; search backend deploy; client→/v1/search wire-up; PWA icons;
self-host frontend libs; PMTiles basemap; deck.gl shader fix; 3D Kaaba; static
site stack; observability; CI/CD scaffolding; GitHub push.

**P0 — what's still left for the owner:**
1. **Set the GitHub repo variable `AWS_ROLE_ARN`** = `arn:aws:iam::803129122420:role/islamicmaps-cicd-github-deploy`.
   That's the only manual click between the current state and "every push to main
   auto-deploys." See §0 last paragraph.
2. **Subscribe an email to the SNS alarm topic** (otherwise alarms fire silently):
   `aws sns subscribe --region us-east-1 --topic-arn arn:aws:sns:us-east-1:803129122420:islamicmaps-observability-alarms --protocol email --notification-endpoint you@example.com`
3. **Real-device smoke** — a real iPhone Safari, a real Android Chrome, a real
   touchscreen, and a "install as PWA → cut wifi → reload" round.

**P1 — known polish:**
4. Add a `pipeline/tests/` unit suite (the build itself is the de-facto integration test, but failure-case unit tests would harden it).
5. A real glTF Kaaba .glb (the procedural extrude is correct geometry, but a textured glTF would be visually striking; the pipeline `models.py` is ready for it).
6. Lighthouse / Core Web Vitals audit. The static-first hot path *should* be fast; numbers would lock the claim.
7. ~~SnapStart on the search Lambda~~ — DONE 2026-06-09 (item 13 of §0).
8. Real `talbiyah-audio` recording. Today the asset doc is a placeholder.

**P2 — content + credibility:**
8. Point agentic AI at `schema/` + `schema/README.md` to author more stories (one JSON
   doc per file, validate, cite sources, set `review.stage`/`certainty`). Candidate
   next stories: Ibn Battuta's travels, the route of Musa (frame carefully — disputed),
   the Rightly-Guided Caliphate expansion, Badr/Uhud, Masjid an-Nabawi 3D.
9. Build the scholar-review workflow (PR-based; `review` status transitions).
10. Produce 3D models (commission / photogrammetry / agentic-AI generation) for the
    hero landmarks; wire LOD + Draco/KTX2 via gltf-transform in CI.

**P3 — UX depth (see §15).**

---

## 15. Killer-feature backlog (product)

All were agreed as desirable; the schema is designed to support them — they're build-
order, not redesign. Not yet implemented in the client:
- **Global time slider** polish (multi-era scrubbing, speed presets) — basic engine
  exists in `playback.js`; needs richer UI.
- **Scrollytelling** — scroll-driven story sections bound to playback steps (`scrolly`
  is already in the schema).
- **Audio narration + Quran recitation** per step/locale (schema supports `audio` +
  per-language caption tracks).
- **Globe projection** for cross-continent journeys (MapLibre supports it).
- **Offline map tiles** for Hajj areas (pre-cached PMTiles) — critical for congested
  networks on-site.
- **AR on-site** (native apps) — overlay ritual guidance at the real locations.
- **Deep-link sharing** — URL encodes map state + layer + time.
- **Daily-use hooks** to drive retention: prayer times, qibla, mosque finder.
- **Bookmarks/favorites, kids/classroom mode, madrasa licensing.**
- **Certainty/dispute labels** surfaced in the UI; richer "i" media.
- **Community contributions** (later; GitHub-based, moderated).
- **Semantic search UI** once the backend is deployed.

---

## 16. Working conventions (must follow)

From the owner's global instructions (`CLAUDE.md`) and decisions here:
- **Use GDAL, not rasterio**, for geospatial work.
- **Notebook/app code must work in VS Code + a browser.**
- **Always add/update docstrings** on functions you add or change (JSDoc / Python
  docstrings — the codebase already does this consistently).
- **Keep `SUMMARY.md` + `CODEBASE_MAP.md` updated** whenever you add/change code. Update
  this `HANDOFF.md` for any decision or status change.
- **Don't delete comments** unless explicitly asked.
- **Ask if something is unclear** rather than guessing.
- **Authoring discipline:** one JSON document per file named `<type>.<id>.json`;
  validate against the schema; reference other docs by typed id; always populate `en`
  + add `ar`/transliterations; cite sources; set honest `review`/`certainty`; provide
  `sort_key` on every `DateValue`.
- **Build for scale; never let an MVP shortcut foreclose a planned feature.**
- **Pure logic vs render/AWS:** keep business logic in pure, testable modules; isolate
  browser/AWS calls (lazy-import the heavy/external bits) so the core stays testable.

---

## 17. Glossary (domain + technical)

**Domain**
- **Hijra** — the Prophet Muhammad's ﷺ migration from Mecca to Medina (622 CE / 1 AH);
  start of the Islamic (Hijri) calendar.
- **Umrah** — the "lesser pilgrimage" (any time of year): ihram → tawaf → sa'i → halq.
- **Hajj** — the annual pilgrimage; adds Mina/Arafat/Muzdalifah rites.
- **Ihram** — the sacred state/intention (and garments) a pilgrim enters.
- **Tawaf** — circling the Kaaba seven times.
- **Sa'i** — walking seven times between the hills of Safa and Marwa.
- **Halq / Taqsir** — shaving / shortening hair to exit ihram.
- **Miqat** — the boundary where pilgrims enter ihram.
- **Kaaba / Masjid al-Haram** — the cuboid structure in Mecca / the mosque around it;
  direction of prayer (qibla).
- **Yathrib** — the historical name for Medina.
- **Seerah** — the biography of the Prophet ﷺ.

**Technical**
- **MapLibre GL** — open-source WebGL map renderer (Mapbox GL fork).
- **deck.gl** — WebGL data-viz layer framework; provides 3D models + animated layers
  on top of MapLibre via `MapboxOverlay`.
- **PMTiles** — single-file tiled archive (vector or raster) served from S3 via HTTP
  range requests; no tile server.
- **GeoJSON** — RFC 7946 geometry format (coordinates are `[lng, lat]`).
- **EDTF** — Extended Date/Time Format (ISO 8601-2); encodes uncertainty.
- **LOD** — Level of Detail (here: 3D model quality tiers low/medium/high).
- **glTF / GLB / Draco / KTX2** — 3D model format / binary form / mesh compression /
  texture compression.
- **RRF** — Reciprocal Rank Fusion; merges ranked lists (used for hybrid search).
- **Bedrock** — AWS managed foundation-model service (used here for text embeddings;
  default model `cohere.embed-multilingual-v3`, 1024-dim).
- **OpenSearch Serverless / aoss** — managed search with vector (kNN) support;
  `aoss` is its IAM service prefix.
- **SAM** — AWS Serverless Application Model (CloudFormation superset for serverless).
- **brotli / gzip** — text compression; metadata artifacts ship pre-compressed.
- **`LocalizedString`** — `{ locale: string }` map for translatable text.
- **`sort_key`** — numeric proleptic-Gregorian ordinal on a date, for timeline ordering.
- **Bundle** — a story with all its transitively-referenced docs inlined under `_refs`.
