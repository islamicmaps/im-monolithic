# islamicmaps.org

A free, community webmap of Islamic geography — historical places, events, expeditions,
prophets' journeys, Hajj/Umrah guidance, and 3D landmarks — with animated playback,
multilingual (RTL) content, and rigorous sourcing. Free forever, built for low/no
bandwidth, extendable to native iOS/Android with zero backend change.

> **New here (or a fresh model on another machine)? Read [`HANDOFF.md`](HANDOFF.md)
> first** — the full brief: vision, every decision + rationale, what's implemented,
> what's tested vs untested, and the prioritized TODO.

## Status

Design + tooling phase. The **content schema** (the platform-agnostic keystone) is
defined and exemplified end-to-end for the two MVP stories, and the **build pipeline**
runs green: it validates content, compiles self-contained story bundles + an offline
Arabic-normalized search index + GeoJSON geometry + a 3D manifest, and emits each
artifact plain + gzip + brotli (~67% smaller over the wire on the MVP set). The
**web client** scaffold (MapLibre + deck.gl, zero-build PWA) consumes those artifacts;
its render-agnostic core (search, playback, i18n, Arabic normalization) passes 30 Node
tests against the real `dist/`, and a **headless Chrome smoke test (2026-06-08) drives
the whole app end-to-end** — module graph loads, MapLibre + deck.gl render, search →
story → Play animates the Hijra route (PathLayer progressive draw + ScatterplotLayer
moving marker), and the Arabic locale flips RTL correctly. The **deep/semantic search
API** (serverless) is built — its pure core (query build, hybrid RRF, multilingual
extraction, HTTP handler) passes 27 tests and the SAM template validates; deploy +
content indexing remain. **Vector-store decision (2026-06-08):** S3 +
in-memory-vector Lambda (not OpenSearch Serverless) — same pure core, near-zero
idle cost; implementation is now the top P1.

## Decisions locked

- **Render:** MapLibre GL + deck.gl (free, no per-load billing; deck.gl gives 3D
  models / TripsLayer animation / scrollytelling identically across renderers).
- **Basemap:** vector default (Protomaps PMTiles on S3); satellite as opt-in toggle
  (EOX Sentinel-2 cloudless free, or Esri; holy sites pre-tiled as raster PMTiles).
- **Infra:** AWS, static-first (S3 + CloudFront). Serverless API (API Gateway +
  Lambda) added only for deep/semantic search + future contributions. REST/JSON,
  versioned, platform-agnostic.
- **Content:** read-only, authored as JSON, AI-generated then scholar-reviewed,
  compiled to lean delivery formats (brotli JSON, PMTiles, GLB+Draco+KTX2).
- **Search:** offline client index for metadata (always works); serverless for deep.
- **Dates:** EDTF + dual Hijri/Gregorian + `sort_key` for the global time slider.
- **i18n/RTL, adaptive 2D↔3D, extensible "i" sourcing:** designed in from day 1.

## MVP

One history + one ritual story, end-to-end, on web/PWA:
- **The Hijra** (Mecca→Medina) — temporal playback, animated route, time slider.
- **How to Perform Umrah** — sequential playback, 3D walkthrough at the Masjid al-Haram.

Built for scale: the MVP implements a subset; the schema/architecture foreclose nothing.

## Layout

- `schema/` — JSON Schema (draft 2020-12) for all content types + `README.md`
  (also the AI authoring guide). See `CODEBASE_MAP.md`.
- `examples/` — worked, internally-consistent instances for both MVP stories
  (also the pipeline's default input set).
- `docs/` — `architecture.{dot,png,svg}`: the AWS architecture (static-first hot path,
  serverless online-only deep search, offline build pipeline). See `CODEBASE_MAP.md`.
- `pipeline/` — Python build pipeline (`python3 -m pipeline.build`): validate → compile
  → `dist/`. See `pipeline/README.md` (incl. the client consumption contract).
- `dist/` — build output (gitignored): catalog, story bundles, search index, geometry,
  manifests; each plain + gzip + brotli.
- `app/` — web client (zero-build ESM PWA: MapLibre + deck.gl). Pure logic Node-tested;
  serve repo root, open `/app/`. See `app/README.md`.
- `serverless/` — deep/semantic search API (HTTP API + Lambda + OpenSearch + Bedrock).
  Pure core Python-tested; SAM template validated. See `serverless/README.md`.

## Open / next

- **Top P1: build the S3 + in-memory-vector Lambda search backend** (vector-store
  decision is locked; reuses the existing `service` / `text` / `handler`).
- Replace scaffold shortcuts: self-host maplibre/deck (off CDN), swap demo basemap
  for a Protomaps PMTiles style, add PWA icons, wire the glTF loader for real
  `.glb` models, fix the multi-fire search-index fetch race in `main.js` (cache
  the promise, not the result).
- Owner / on-device smoke test (real GPU / Safari / mobile / PWA-offline / EOX
  satellite toggle) — the headless smoke covered the module + UI + playback layer
  but not the real-device surface.
- CI when git is initialized: PMTiles + GLB optimization (gltf-transform; GDAL ≥ 3.8
  is already on the dev machine).
- Scholar review workflow + more content (point AI authoring at the schema).
