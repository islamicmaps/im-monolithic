/**
 * App entry point: wires data → search → map → deck.gl overlay → playback → UI.
 *
 * Render-agnostic logic (search.js, playback.js, i18n.js, arabic.js, data.js) is
 * unit-tested in Node; this module is the thin browser glue that drives MapLibre +
 * deck.gl and the per-frame loop.
 */

import { MapboxOverlay } from "@deck.gl/mapbox";
import { DEFAULT_LOCALE, QUALITY, SEARCH_API } from "./config.js";
import { loadCatalog, loadStory, loadSearchIndex } from "./data.js";
import { query } from "./search.js";
import { serverSearch, mergeHits } from "./searchApi.js";
import { createPlayback } from "./playback.js";
import { createMap, setBasemap, flyTo } from "./map.js";
import { buildLayers } from "./layers.js";
import { mountUI } from "./ui.js";
import { pickLocale } from "./i18n.js";

const app = {
  /** @type {object} */ catalog: null,
  /** @type {Promise<object>|null} */ searchIndexP: null,
  /** @type {string} */ locale: DEFAULT_LOCALE,
  /** @type {import("maplibre-gl").Map|null} */ map: null,
  /** @type {object|null} */ overlay: null,
  /** @type {object|null} */ bundle: null,
  /** @type {object|null} */ pb: null,
  /** @type {string|null} */ lastStep: null,
  /** @type {string} */ themeFilter: null,
  /** @type {AbortController|null} */ searchAbort: null,
  /** @type {number} */ searchSeq: 0,
};

/** Adaptive rendering options from the network/device. */
function qualityOpts() {
  const c = navigator.connection || {};
  const et = c.effectiveType;
  const allow3d = !c.saveData && (QUALITY.allow3d[et] ?? true);
  const lod = QUALITY.lod[et] ?? "medium";
  return { allow3d, lod };
}

/** Stories matching the current theme filter (or all). */
function filteredStories() {
  const all = app.catalog.stories || [];
  return app.themeFilter ? all.filter((s) => (s.themes || []).includes(app.themeFilter)) : all;
}

async function main() {
  app.catalog = await loadCatalog();
  app.locale = pickLocale(app.catalog.locales, navigator.language, DEFAULT_LOCALE);

  const root = document.getElementById("app");
  const handlers = {
    onSearch: async (q) => {
      // Cancel any in-flight online query so only the latest keystroke wins.
      if (app.searchAbort) app.searchAbort.abort();
      const seq = ++app.searchSeq;

      if (!q) return uiApi.renderResults(filteredStories().map(toHit), app.locale);

      // Cache the PROMISE not the result (the previous `if (!searchIndex)` check
      // fired one fetch per keystroke while the first was still in flight — fixed).
      if (!app.searchIndexP) app.searchIndexP = loadSearchIndex();

      // Offline first: instant typeahead, no network needed.
      const idx = await app.searchIndexP;
      if (seq !== app.searchSeq) return; // a newer keystroke landed
      const offline = query(idx, q);
      uiApi.renderResults(offline, app.locale);

      // Online augments: deep + semantic. Failure / disabled / aborted = no-op.
      if (!SEARCH_API) return;
      const ctl = (app.searchAbort = new AbortController());
      const online = await serverSearch(q, { mode: "hybrid", k: 10, locale: app.locale, signal: ctl.signal });
      if (seq !== app.searchSeq) return;
      if (online.length) uiApi.renderResults(mergeHits(offline, online), app.locale);
    },
    onSelectStory: (id) => openStory(id),
    onTheme: (id) => {
      app.themeFilter = app.themeFilter === id ? null : id;
      uiApi.renderResults(filteredStories().map(toHit), app.locale);
    },
    onTogglePlay: () => app.pb && app.pb.toggle(),
    onSeek: (p) => app.pb && app.pb.seek(p),
    onSpeed: (s) => app.pb && app.pb.setSpeed(s),
    onLocale: (l) => {
      app.locale = l;
      uiApi.setLocale(l);
      uiApi.renderThemes(app.catalog.themes || [], l);
      uiApi.renderResults(filteredStories().map(toHit), l);
      if (app.bundle) uiApi.showStory(app.bundle, l);
    },
    onBasemap: (kind) => app.map && setBasemap(app.map, kind),
    onSources: () => app.bundle && uiApi.showSources(app.bundle.info, app.bundle, app.locale),
  };

  const uiApi = mountUI(root, handlers);
  uiApi.setLocale(app.locale, app.catalog.locales);
  uiApi.renderThemes(app.catalog.themes || [], app.locale);
  uiApi.renderResults(filteredStories().map(toHit), app.locale);

  app.map = await createMap("map");
  app.overlay = new MapboxOverlay({ interleaved: true, layers: [] });
  app.map.addControl(app.overlay);

  /** Minimal hit shape from a catalog story entry. */
  function toHit(s) {
    return { id: s.id, title: s.title, subtitle: s.subtitle };
  }

  /** Load a story bundle and start its playback. */
  async function openStory(id) {
    app.bundle = await loadStory(id);
    app.pb = createPlayback(app.bundle);
    app.lastStep = null;
    uiApi.showStory(app.bundle, app.locale);
    if (!app.map) return; // map may still be initializing on a fast click
    if (Array.isArray(app.bundle.bbox)) {
      const [w, s, e, n] = app.bundle.bbox;
      app.map.fitBounds([[w, s], [e, n]], { padding: 80, duration: 1500, pitch: app.bundle.default_view?.pitch || 0 });
    } else if (app.bundle.default_view) {
      flyTo(app.map, { ...app.bundle.default_view, duration_ms: 1500 });
    }
  }

  // Per-frame loop: advance playback, rebuild layers, sync UI + camera.
  let last = performance.now();
  function frame(now) {
    const dt = now - last;
    last = now;
    if (app.pb) {
      const st = app.pb.getState().playing ? app.pb.tick(dt) : app.pb.getState();
      app.overlay.setProps({ layers: buildLayers(app.bundle, st, qualityOpts()) });
      uiApi.updatePlayback(st, app.locale);
      if (st.stepId !== app.lastStep) {
        app.lastStep = st.stepId;
        if (st.camera) flyTo(app.map, st.camera);
      }
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
}

main().catch((err) => {
  console.error(err);
  const root = document.getElementById("app");
  if (root) root.append(Object.assign(document.createElement("div"), { className: "fatal", textContent: String(err) }));
});
