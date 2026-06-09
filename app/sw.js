/**
 * Service worker — offline support.
 *
 * App shell: cache-first (instant load, works offline). Content under dist/:
 * network-first with cache fallback (fresh when online; available when not).
 * This is the PWA half of the low/no-bandwidth requirement.
 */

// SHELL is content-hashed at deploy time by scripts/deploy.sh — the literal
// string `__SHELL_HASH__` is replaced with a hex digest of every file in
// SHELL_ASSETS before the SW is uploaded to S3. That means every deploy
// where ANY shell asset changes produces a new SHELL value, which triggers
// the SW's `install` → `addAll(SHELL_ASSETS)` refresh path automatically.
// Local dev (where the sentinel is never substituted) gets a stable value
// so the SW behaves predictably under `python3 -m http.server`.
const SHELL = "imaps-shell-__SHELL_HASH__";
const DATA = "imaps-data-v1";

const SHELL_ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./css/style.css",
  "./js/main.js",
  "./js/map.js",
  "./js/layers.js",
  "./js/ui.js",
  "./js/playback.js",
  "./js/search.js",
  "./js/searchApi.js",
  "./js/data.js",
  "./js/i18n.js",
  "./js/arabic.js",
  "./js/config.js",
  "./vendor/maplibre-gl.css",
  "./vendor/maplibre-gl.mjs",
  "./vendor/deck.gl.mjs",
  "./vendor/pmtiles.mjs",
  "./vendor/basemap-style.json",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(SHELL).then((c) => c.addAll(SHELL_ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => ![SHELL, DATA].includes(k)).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;

  // Content artifacts: network-first, fall back to cache (offline).
  if (url.pathname.includes("/dist/")) {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          const copy = res.clone();
          caches.open(DATA).then((c) => c.put(e.request, copy));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // App shell + same-origin: cache-first.
  if (url.origin === location.origin) {
    e.respondWith(caches.match(e.request).then((hit) => hit || fetch(e.request)));
  }
});
