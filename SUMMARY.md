# islamicmaps.org

A free, community webmap of Islamic geography — historical places, events, expeditions,
prophets' journeys, Hajj/Umrah guidance, and 3D landmarks — with animated playback,
multilingual (RTL) content, and rigorous sourcing. Free forever, built for low/no
bandwidth, extendable to native iOS/Android with zero backend change.

> **New here (or a fresh model on another machine)? Read [`HANDOFF.md`](HANDOFF.md)
> first** — the full brief: vision, every decision + rationale, what's implemented,
> what's tested vs untested, and the prioritized TODO.

## Status

**Live MVP at https://app.islamicmaps.org** (deployed 2026-06-09). Source at
https://github.com/islamicmaps/im-monolithic. Four CloudFormation stacks in
`us-east-1`: search Lambda (`islamicmaps-search`), static site
(`islamicmaps-app`), observability (`islamicmaps-observability`), CI/CD
(`islamicmaps-cicd`). 78 pure-core tests pass; CI workflow is green.

Working features today:
- **Static-first hot path** — S3 + CloudFront + WAF + ACM + Route53; brotli auto-compression; HTTP/2+H/3.
- **Self-hosted** MapLibre + deck.gl + pmtiles + Protomaps style (zero third-party CDN runtime deps).
- **Real Protomaps PMTiles vector basemap** (Hijaz region z0-14, 89 MB, range-fetched).
- **Bedrock-powered semantic search** via `/v1/search` (Cohere multilingual, hybrid RRF), wired to the offline lexical index with parallel merge.
- **deck.gl story playback** — Hijra route animation (PathLayer + ScatterplotLayer); procedural 3D Kaaba (PolygonLayer extrude) at the tawaf step.
- **Observability** — CloudWatch dashboard + 6 alarms + SNS topic.
- **CI/CD** — GitHub Actions OIDC + scoped deploy IAM role; `scripts/deploy.sh` for local + CI use.

See `HANDOFF.md` §0 for the per-item story of what shipped 2026-06-09.

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

- `schema/` — JSON Schema (draft 2020-12) for all content types. See `CODEBASE_MAP.md`.
- `examples/` — 18 worked, internally-consistent instances for both MVP stories.
- `docs/` — `architecture.{dot,png,svg}` + smoke-test screenshots.
- `pipeline/` — Python build pipeline (`python3 -m pipeline.build`).
- `dist/` — build output (gitignored).
- `app/` — web client (zero-build ESM PWA: MapLibre + deck.gl + pmtiles + Protomaps style). Pure logic Node-tested; vendored bundles in `app/vendor/`.
- `.vendor-build/` — build-time esbuild glue that produces `app/vendor/*.mjs`. Not a runtime path.
- `serverless/` — deep/semantic search API (HTTP API + Lambda + S3-hosted vector index + Bedrock embeddings).
- `infra/` — CloudFormation: `site.yaml` (S3+CF+WAF+ACM+R53), `observability.yaml` (dashboard+alarms+SNS), `cicd.yaml` (OIDC + deploy role).
- `scripts/` — `deploy.sh` (idempotent end-to-end deploy).
- `.github/workflows/` — `ci.yml` (PR validation), `deploy.yml` (push-to-main auto-deploy via OIDC).

## Open / next

See `HANDOFF.md` §14 for the prioritized list. Most-pressing:
1. Set the GitHub repo variable `AWS_ROLE_ARN` so deploys auto-fire on push to main.
2. Subscribe an email to the SNS alarm topic.
3. Real-device smoke (iPhone/Android/PWA-offline).
