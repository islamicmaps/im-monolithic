# Vendor build (build-time, not runtime)

The live app at `https://app.islamicmaps.org` loads `maplibre-gl`, `deck.gl`,
and `@deck.gl/mapbox` from same-origin paths under `app/vendor/`. This dir
is the **build-time** glue that produces those bundles from npm. The runtime
itself remains zero-build (no bundler, no third-party CDN dependency).

## Re-build

```
cd .vendor-build
npm install            # one-time, populates node_modules/
node build.mjs         # writes to ../app/vendor/
```

After that, `scripts/deploy.sh` will sync `app/vendor/*` to S3 like any other
shell asset.

## What it does

- esbuild pulls each package from `node_modules/`, tree-shakes to ONLY the
  symbols `app/js/*.js` actually imports, and emits one self-contained `.mjs`
  per logical entry. No deep `/@deck.gl/core@9.3.3/...` imports survive.
- `maplibre-gl.css` is copied verbatim from the package's `dist/`.

## Bumping versions

Edit the version pins in `package.json`, run `npm install`, run `node build.mjs`.
Smoke-test the live app (search, story open, play, locale flip).

## Why not just use `esm.sh` at runtime?

The site's promise is "free forever, low/no bandwidth, works offline." A
third-party CDN runtime dep (esm.sh) is a real availability risk — when it
goes down, the site dies. Self-hosting a single bundled file per logical
entry removes that risk and enables proper PWA offline (the service worker
shell-caches them) and HTTP/2 push-style preloads.

## Why is `node_modules/` gitignored but `app/vendor/` checked in?

`app/vendor/` is the artifact the live site serves — pinned, byte-stable,
deterministic. `.vendor-build/node_modules/` is several hundred MB of
regenerable churn.
