# Codebase Map

```
mapsorg/
├── HANDOFF.md                  START HERE — full brief: vision, decisions, tested/untested, TODO
├── SUMMARY.md                  Project overview, locked decisions, MVP scope
├── CODEBASE_MAP.md             This file
├── schema/                     Content model — the platform-agnostic keystone
│   ├── README.md               Design rationale + AI authoring guide + build pipeline
│   ├── common.schema.json      Shared $defs: Id, Ref, LocalizedString, DateValue,
│   │                             GeoJSONGeometry, GeometrySource, CameraState,
│   │                             InfoBlock, ReviewStatus
│   ├── place.schema.json       Geographic anchor (gazetteer), usually atemporal
│   ├── asset.schema.json       Media: 3D model (LOD variants), image, audio, video, icon
│   ├── source.schema.json      Citation backing the "i" panel
│   ├── feature.schema.json     One renderable geometry: render2d + optional render3d
│   ├── event.schema.json       Composes places + features + time extent
│   ├── story.schema.json       Composes features + events + playback (incl. Step $def)
│   └── catalog.schema.json     Lean manifest + theme taxonomy + offline search seed
├── examples/                   Worked instances (both MVP stories, end-to-end) — 18 docs total
│   ├── source.sealed-nectar.json
│   ├── place.makkah.json
│   ├── place.madinah.json
│   ├── feature.hijra-route.json
│   ├── event.hijra.json
│   ├── asset.kaaba-model.json
│   ├── asset.kaaba-icon.json
│   ├── feature.kaaba.json      2D Point + icon (atemporal Kaaba marker)
│   ├── feature.kaaba-volume.json  3D Polygon footprint + render3d.extrude (item 9 of HANDOFF §0)
│   ├── feature.tawaf-circle.json
│   ├── feature.pilgrim-marker.json
│   ├── feature.safa-marwa-path.json
│   ├── asset.hijra-cover.json     inline-SVG cover (item 10 of HANDOFF §0)
│   ├── asset.umrah-cover.json     inline-SVG cover (item 10 of HANDOFF §0)
│   ├── asset.talbiyah-audio.json  placeholder audio doc (item 10 of HANDOFF §0)
│   ├── story.hijra.json        Temporal playback — animated route + time slider
│   ├── story.umrah.json        Sequential playback — 3D ritual walkthrough
│   └── catalog.json            Both stories + theme taxonomy
├── docs/                       Architecture & design docs + smoke-test screenshots
│   ├── architecture.{dot,png,svg}
│   └── 0[1-5]-*.png            Headless-Chrome smoke screenshots
├── pipeline/                   Content build pipeline (run: python3 -m pipeline.build)
│   ├── build.py                CLI orchestrator: validate -> compile -> dist/
│   ├── validate.py             JSON Schema conformance + referential integrity
│   ├── loader.py               Load schemas/docs, offline $ref store, id index, ref scan
│   ├── bundle.py               Resolve a story's transitive refs into one payload
│   ├── search_index.py         Build offline inverted search index from catalog
│   ├── arabic.py               Arabic normalization (harakat strip, letter unify)
│   ├── compress.py             Emit plain + gzip + brotli; report sizes
│   ├── geometry.py             Features -> GeoJSON; -> PMTiles via GDAL if available
│   ├── basemap.py              Copy ~/.cache/imaps/basemap-hijaz.pmtiles into dist/basemap/
│   ├── models.py               3D model LOD manifest (gltf-transform if available)
│   ├── config.py               Paths, schema mapping, cache rules
│   ├── publish.py              Legacy — superseded by scripts/deploy.sh
│   └── README.md
├── dist/                       Build output (gitignored)
├── infra/                      CloudFormation for the static-first hot path + ops
│   ├── site.yaml               S3 + CloudFront + WAF + ACM + Route53 (stack: islamicmaps-app)
│   ├── observability.yaml      CloudWatch dashboard + 6 alarms + SNS (stack: islamicmaps-observability)
│   └── cicd.yaml               GitHub OIDC provider + scoped deploy IAM role (stack: islamicmaps-cicd)
├── serverless/                 Deep/semantic search API (SAM; stack: islamicmaps-search)
│   ├── infra/template.yaml     HTTP API + Lambda + S3 (index bucket) + Bedrock IAM
│   ├── src/search/             handler / service / store / text / indexer / config
│   ├── tests/test_search.py    34 pure-core assertions
│   └── README.md
├── scripts/
│   └── deploy.sh               Idempotent: build → sync app/ → sync dist/ → reindex → invalidate
├── .github/workflows/
│   ├── ci.yml                  PR + push validation: schema, pipeline, tests, cfn-lint
│   └── deploy.yml              Push-to-main auto-deploy via OIDC (needs AWS_ROLE_ARN repo var)
├── .vendor-build/              Build-time esbuild glue (NOT a runtime path)
│   ├── package.json            Pinned: maplibre-gl 5.24.0, deck.gl 9.3.3, pmtiles 4.4.1, …
│   ├── build.mjs               Tree-shaken bundles → app/vendor/
│   └── README.md
└── app/                        Web client (zero-build ESM PWA: MapLibre + deck.gl + Protomaps)
    ├── index.html              Shell + importmap pointing at ./vendor/*
    ├── manifest.webmanifest    PWA manifest (icons + maskable variants)
    ├── favicon.ico
    ├── sw.js                   Service worker (shell cache-first, data network-first)
    ├── icons/                  192/512 (any+maskable), apple-touch, favicon-{16,32}, .ico
    ├── css/style.css           Map-first UI, RTL-aware (logical properties)
    ├── vendor/                 Self-hosted bundles (built by .vendor-build, checked in)
    │   ├── maplibre-gl.{mjs,css}
    │   ├── deck.gl.mjs         Combined deck.gl + @deck.gl/mapbox (one @deck.gl/core copy)
    │   ├── pmtiles.mjs         pmtiles:// protocol handler
    │   ├── basemap-style.json  Pre-baked Protomaps light theme
    │   └── VERSIONS.json
    ├── js/
    │   ├── main.js             Orchestrator: data → search → map → deck → playback → UI
    │   ├── config.js           Data base, basemap sources, SEARCH_API resolver
    │   ├── arabic.js           Arabic normalization (mirrors pipeline/arabic.py)
    │   ├── i18n.js             RTL direction, LocalizedString lookup, UI strings
    │   ├── data.js             Fetch catalog/bundles/index (cache + deref)
    │   ├── search.js           Offline search over the prebuilt index (pure)
    │   ├── searchApi.js        Online deep/semantic search client (pure, fetch-injectable)
    │   ├── playback.js         Story playback state machine (pure) — the play button
    │   ├── map.js              MapLibre setup + pmtiles:// protocol + basemap toggle + flyTo
    │   ├── layers.js           deck.gl layers: 2D/3D extrude/glTF + animated route/marker
    │   └── ui.js               DOM: search, themes, story panel, play bar, sources modal
    └── test/logic.test.mjs     Node tests against real dist/ (44 assertions)
```

## Web client (see `app/README.md`)

Render-agnostic logic (`search`, `playback`, `i18n`, `arabic`, `data`) is unit-tested
in Node against the real `dist/`; MapLibre + deck.gl + DOM are the thin browser layer.
Zero-build (CDN ESM via importmap) — serve repo root and open `/app/`. To re-test:
`cd app && npm test`. The browser layer (`map.js` / `layers.js` / `ui.js` / `main.js`)
was additionally end-to-end verified by a headless-Chrome smoke test on 2026-06-08
(see `HANDOFF.md` §7); the importmap now also includes `@deck.gl/mapbox` because the
`deck.gl` umbrella does not re-export `MapboxOverlay`.

## Deep/semantic search (see `serverless/README.md`)

The online-only complement to the offline index. Query embedding (Bedrock),
in-memory BM25 + cosine k-NN, hybrid RRF, multilingual extraction, and the HTTP
handler are pure and tested (`python3 serverless/tests/test_search.py`); same
hit schema so the client merges by id. **Vector store: S3 + in-memory-vector
Lambda** — the indexer publishes a single gzipped JSON artifact to S3
(`search-index.json.gz`); the Lambda downloads it once per container and serves
brute-force k-NN from process memory. Near-zero idle cost; OpenSearch Serverless
was rejected on idle-cost grounds.

## Architecture (see `docs/architecture.png`)

Static-first, serverless, platform-agnostic. Three paths, colour-coded in the diagram:
- **Green — static hot path (no server):** clients → Route 53 → CloudFront → S3
  (app bundle, brotli-JSON content, PMTiles, GLB/media, client search index).
  CDN-cached; works offline / low-bandwidth. Carries ~all normal traffic.
- **Purple — serverless, online-only:** CloudFront → WAF → API Gateway (`/v1`) →
  Lambda (loads gzipped vector index from S3 into memory; brute-force kNN +
  BM25). Only hop that needs a server; never blocks the low-bandwidth
  experience. DynamoDB/Cognito dashed (future).
- **Grey — build pipeline (offline CI):** GitHub (AI-authored JSON + scholar PRs) →
  CodeBuild → compile (tippecanoe→PMTiles, gltf-transform, client search index,
  Bedrock embeddings) → publish content + the gzipped vector index to S3.

No always-on servers anywhere → pennies at rest, scales to a huge audience, free-forever friendly.

To re-render: `dot -Tpng docs/architecture.dot -o docs/architecture.png`

## Reference resolution

`$ref` paths are relative within `schema/` (e.g. `common.schema.json#/$defs/DateValue`).
Content docs cross-reference by typed id string (`asset:kaaba-3d`), resolved by the
app/build step, not by JSON Schema.

## Conventions

- One JSON document per file; name content files `<type>.<id>.json`.
- Authoring format = JSON here; a build step compiles to delivery formats
  (brotli JSON, PMTiles, GLB+Draco+KTX2, client search index).
