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
├── examples/                   Worked instances (both MVP stories, end-to-end)
│   ├── source.sealed-nectar.json
│   ├── place.makkah.json
│   ├── place.madinah.json
│   ├── feature.hijra-route.json
│   ├── event.hijra.json
│   ├── asset.kaaba-model.json
│   ├── story.hijra.json        Temporal playback — animated route + time slider
│   ├── story.umrah.json        Sequential playback — 3D ritual walkthrough
│   └── catalog.json            Both stories + theme taxonomy
├── docs/                       Architecture & design docs
│   ├── architecture.dot        Graphviz source (edit here, then re-render)
│   ├── architecture.png        Rendered AWS architecture diagram (PNG)
│   └── architecture.svg        Rendered AWS architecture diagram (SVG)
├── pipeline/                   Content build pipeline (run: python3 -m pipeline.build)
│   ├── build.py                CLI orchestrator: validate -> compile -> dist/
│   ├── validate.py             JSON Schema conformance + referential integrity
│   ├── loader.py               Load schemas/docs, offline $ref store, id index, ref scan
│   ├── bundle.py               Resolve a story's transitive refs into one payload
│   ├── search_index.py         Build offline inverted search index from catalog
│   ├── arabic.py               Arabic normalization (harakat strip, letter unify)
│   ├── compress.py             Emit plain + gzip + brotli; report sizes
│   ├── geometry.py             Features -> GeoJSON; -> PMTiles via GDAL if available
│   ├── models.py               3D model LOD manifest (gltf-transform if available)
│   ├── config.py               Paths, schema mapping, cache rules
│   ├── publish.py              Dry-run / execute S3 sync + CloudFront invalidation
│   └── README.md               Pipeline docs + client consumption contract
├── dist/                       Build output (gitignored): catalog, story bundles,
│                               search index, geometry, manifests (plain + .gz + .br)
├── serverless/                 Deep/semantic search API (online-only; SAM/CloudFormation)
│   ├── infra/template.yaml     HTTP API + Lambda + S3 (index bucket) + Bedrock IAM
│   ├── src/search/
│   │   ├── handler.py          Lambda entry: parse event, CORS, 200/400/health/preflight
│   │   ├── service.py          Bedrock embed (lazy), in-memory dispatch, hybrid RRF
│   │   ├── store.py            Load gzipped JSON index from S3 (or local); BM25 + cosine
│   │   ├── text.py             Extract searchable docs from dist/ (multilingual)
│   │   ├── indexer.py          CI: embed dist/ content, gzip, upload to S3 (or --out local)
│   │   └── config.py           Env config (model, dims, INDEX_BUCKET/KEY/LOCAL)
│   ├── src/requirements.txt    boto3 (sam build installs)
│   ├── tests/test_search.py    Pure-core tests vs real dist/ + fakes (34 assertions)
│   ├── samconfig.toml          Deploy defaults
│   └── README.md               Deploy, API contract, indexing, cost trade-offs
└── app/                        Web client (zero-build ESM PWA: MapLibre + deck.gl)
    ├── index.html              Shell + importmap (CDN ESM)
    ├── manifest.webmanifest    PWA manifest
    ├── sw.js                   Service worker (shell cache-first, data network-first)
    ├── package.json            type=module; `npm test`, `npm run serve`
    ├── css/style.css           Map-first UI, RTL-aware (logical properties)
    ├── js/
    │   ├── main.js             Orchestrator: data -> search -> map -> deck -> playback -> UI
    │   ├── config.js           Data base, basemap sources, adaptive-quality table
    │   ├── arabic.js           Arabic normalization (mirrors pipeline/arabic.py)
    │   ├── i18n.js             RTL direction, LocalizedString lookup, UI strings
    │   ├── data.js             Fetch catalog/bundles/index (cache + deref)
    │   ├── search.js           Offline search over the prebuilt index (pure)
    │   ├── playback.js         Story playback state machine (pure) — the play button
    │   ├── map.js              MapLibre setup + basemap toggle + flyTo
    │   ├── layers.js           deck.gl layers: 2D/3D + animated route/marker (pure geo helpers)
    │   └── ui.js               DOM: search, themes, story panel, play bar, sources modal
    └── test/logic.test.mjs     Node tests for the pure core vs real dist/ (30 assertions)
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
