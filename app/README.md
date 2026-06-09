# Web client

A zero-build ESM Progressive Web App: **MapLibre GL** (free basemaps) + **deck.gl**
(animated routes, 3D models) consuming the pipeline's `dist/` artifacts. No bundler,
no `npm install` — it runs by serving the folder.

## Run

```bash
# 1) build the content (from repo root)
python3 -m pipeline.build --clean

# 2) serve repo root so the app can fetch ../dist
python3 -m http.server 8000          # then open http://localhost:8000/app/

# logic tests (Node, against the real dist/)
cd app && npm test
```

Works in any modern browser, VS Code's built-in browser, and installs as a PWA.

## Architecture: logic vs. render

The render-agnostic core is **unit-tested in Node** (`test/logic.test.mjs`, 30
assertions against real built data); the browser layer is thin glue.

| Pure (tested in Node)                          | Browser-only (MapLibre/deck/DOM) |
|------------------------------------------------|----------------------------------|
| `arabic.js` — normalization (mirrors Python)   | `map.js` — MapLibre + basemaps   |
| `search.js` — offline index search             | `layers.js` — deck.gl layers     |
| `playback.js` — story playback state machine   | `ui.js` — DOM panels/controls    |
| `i18n.js` — RTL + LocalizedString              | `main.js` — wiring + frame loop  |
| `data.js` — fetch/cache (fetch injectable)     | `sw.js` — offline cache          |

## What works

- **Search** — offline, over `dist/search/index.json`, Arabic-normalized + prefix
  typeahead. Theme chips filter (no dropdown).
- **Playback** — the play button: temporal stories (Hijra) animate the route along a
  time-mapped clock; sequential stories (Umrah) step through ihram → tawaf → sa'i →
  halq. Play/pause, speed (1/2/5×), scrubber, per-step narration + camera fly-to.
- **Bundles** — one fetch per story (`dist/stories/<id>.json`, self-contained).
- **Adaptive 2D↔3D** — `config.QUALITY` + `navigator.connection`/`saveData` choose
  whether to load 3D models and which LOD; always falls back to 2D.
- **i18n / RTL** — locale switch flips direction via CSS logical properties; content
  resolved through `LocalizedString`.
- **PWA / offline** — service worker: shell cache-first, content network-first with
  cache fallback.

## Verify in a real browser (can't be done headless here)

Open the app and confirm: basemap renders; satellite toggle loads EOX tiles; the
Hijra route draws + marker moves on Play; the Umrah 3D Kaaba appears (good
connection) or 2D marker (throttled); RTL flips on Arabic.

## Production notes (scaffold shortcuts to replace)

- **CDN ESM** (`esm.sh` in the importmap) → self-host `maplibre-gl` + `deck.gl` on S3
  so there's no third-party runtime dependency.
- **Demo basemap style** (`config.BASEMAP.vectorStyle`) → the PMTiles vector style.
- **3D models** point at `cdn.islamicmaps.org` placeholders; `ScenegraphLayer` needs
  the glTF loader registered when real `.glb` assets exist.
- **PWA icons** (`icons/icon-{192,512}.png`) are referenced but not yet created.
- **Deep/semantic search** is the serverless, online-only path (out of this client).
