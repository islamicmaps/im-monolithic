/**
 * Service worker — offline support.
 *
 * App shell: cache-first (instant load, works offline). Content under dist/:
 * network-first with cache fallback (fresh when online; available when not).
 * This is the PWA half of the low/no-bandwidth requirement.
 */

const SHELL = "imaps-shell-v5";
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
