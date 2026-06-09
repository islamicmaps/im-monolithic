/**
 * Data access: fetch catalog, story bundles and the search index from the CDN
 * (the pipeline's `dist/`), with a tiny in-memory cache. `fetch` and `base` are
 * injectable so the same code is testable in Node.
 */

import { DATA_BASE } from "./config.js";

const _cache = new Map();

/**
 * Fetch and parse a JSON artifact, with caching.
 * @param {string} path Path relative to the data base, e.g. "catalog.json".
 * @param {{fetchImpl?:Function, base?:string, cache?:boolean}} [opts]
 * @returns {Promise<any>}
 */
export async function loadJSON(path, opts = {}) {
  const { fetchImpl = globalThis.fetch, base = DATA_BASE, cache = true } = opts;
  const url = (base.endsWith("/") ? base : base + "/") + path;
  if (cache && _cache.has(url)) return _cache.get(url);
  const res = await fetchImpl(url);
  if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
  const data = await res.json();
  if (cache) _cache.set(url, data);
  return data;
}

/**
 * Load the lean catalog manifest (loaded first; cache offline).
 * @param {object} [opts] See {@link loadJSON}.
 * @returns {Promise<object>}
 */
export const loadCatalog = (opts) => loadJSON("catalog.json", opts);

/**
 * Load a self-contained story bundle by id.
 * @param {string} id Story id.
 * @param {object} [opts] See {@link loadJSON}.
 * @returns {Promise<object>}
 */
export const loadStory = (id, opts) => loadJSON(`stories/${id}.json`, opts);

/**
 * Load the prebuilt offline search index.
 * @param {object} [opts] See {@link loadJSON}.
 * @returns {Promise<object>}
 */
export const loadSearchIndex = (opts) => loadJSON("search/index.json", opts);

/**
 * Resolve a typed reference (e.g. "feature:kaaba") inside a story bundle's `_refs`.
 * @param {object} bundle A story bundle (has `_refs`).
 * @param {string} ref Typed reference.
 * @returns {object|null} The referenced document, or null if absent.
 */
export function deref(bundle, ref) {
  return (bundle && bundle._refs && bundle._refs[ref]) || null;
}
