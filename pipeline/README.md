# Content build pipeline

Turns AI-authored, schema-validated JSON into lean, CDN-ready artifacts. Pure
Python + stdlib, plus `jsonschema` and `brotli`; geometry uses **GDAL** (not
tippecanoe/rasterio). Every external tool is optional — the build degrades
gracefully and reports what it skipped.

## Quick start

```bash
python3 -m pipeline.build --clean          # validate + compile -> dist/
python3 -m pipeline.build --validate-only  # CI gate: schemas + referential integrity
python3 -m pipeline.build --strict         # dangling refs become errors
python3 -m pipeline.publish                # dry-run S3 + CloudFront commands
```

Defaults: input `examples/`, schemas `schema/`, output `dist/`. Override with
`--src` / `--schema` / `--dist`.

## Steps

1. **Validate** (`validate.py`) — every doc against its JSON Schema (cross-file
   `$ref` resolved offline) + referential integrity (every `type:id` reference
   resolves) + catalog↔story consistency. Non-zero exit on failure → CI gate.
2. **Bundle** (`bundle.py`) — for each story, inline its transitive references
   (`feature`/`event`/`place`/`asset`/`source`) into a single self-contained
   `stories/<id>.json` so the client makes **one** request per story.
3. **Search index** (`search_index.py` + `arabic.py`) — a compact inverted index
   (token → story positions) from the catalog, **Arabic-normalized** at build time.
4. **Geometry** (`geometry.py`) — inline feature geometry → one `features.geojson`;
   → vector **PMTiles** via `ogr2ogr` when the GDAL PMTiles driver is present.
5. **Models** (`models.py`) — manifest of `model3d` assets and their LOD variants
   (binary optimization runs here when local meshes + gltf-transform exist).
6. **Compress** (`compress.py`) — every JSON artifact written plain + `.gz` + `.br`.

## Output (`dist/`)

```
catalog.json              lean manifest (loaded first, cached offline)
stories/<id>.json         self-contained story bundle (story + _refs)
search/index.json         offline inverted search index
geometry/features.geojson all inline geometry (+ features.pmtiles when GDAL can)
models-manifest.json      3D model LOD inventory
build-manifest.json       what was built: counts, tool availability, sizes
*.gz, *.br                pre-compressed siblings of every JSON artifact
```

## Tool requirements & degradation

| Capability            | Needs                          | If absent                             |
|-----------------------|--------------------------------|---------------------------------------|
| validate + compile    | Python, `jsonschema`           | (required)                            |
| brotli sizes          | `brotli` (pip)                 | `.br` omitted; brotli col = gzip      |
| PMTiles               | GDAL ≥ 3.8 (or tippecanoe)     | GeoJSON only; PMTiles skipped (noted) |
| 3D optimization       | `gltf-transform` + source mesh | metadata-only manifest                |
| publish               | AWS CLI + env vars             | dry-run prints the commands           |

## How the client consumes this

- **First load:** fetch `catalog.json` (themes + lightweight story list); cache for
  offline. Drives the search box + faceted theme filters (no dropdown).
- **Search (offline):** fetch `search/index.json` once; normalize the query with the
  **same rules** as `arabic.py` (strip harakat/tatweel; unify أإآٱ→ا, ة→ه, ى→ي,
  ؤ→و, ئ→ي; NFKD-fold Latin accents; lowercase); look up tokens → union/intersect
  the returned story indices → rank by match count. Works with no server.
- **Open a story:** fetch `stories/<id>.json` — already self-contained via `_refs`,
  so one request renders the whole story (features, events, places, sources, assets).
- **Geometry:** small data inlined in the bundle; large data served from
  `features.pmtiles` (visible-area + zoom LOD).
- **3D:** pick a `model3d` variant by connection/device; fall back to `fallback_2d`.

## Out of scope (serverless, online-only)

Deep full-text and **semantic** search run behind the REST API (API Gateway →
Lambda, with a prebuilt vector index in S3 loaded into Lambda memory), never
blocking the offline path. Build-time embeddings (Bedrock) feed that index.
Same platform-agnostic API for web + native.

## Publish

`publish.py` defaults to uploading **plain** artifacts and letting CloudFront
compress at the edge (simplest). To upload pre-compressed instead, push the `.br`
files with `Content-Encoding: br`. Catalog gets a short TTL + is invalidated;
everything else is long-lived. Set `IMAPS_BUCKET` and `IMAPS_DISTRIBUTION_ID`,
then `python3 -m pipeline.publish --execute`.
