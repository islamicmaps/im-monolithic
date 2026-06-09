/**
 * Online deep/semantic search client.
 *
 * Pure: `fetchImpl` and `apiBase` are injectable so this is testable in Node.
 * Result hit shape mirrors the offline `search.query()` so a UI can merge by id.
 *
 * The online path is purely additive — a network failure or empty `apiBase`
 * resolves to an empty result, leaving the offline lexical index in charge.
 */

import { SEARCH_API } from "./config.js";

/**
 * POST /v1/search against the deployed API.
 *
 * @param {string} q Raw query text.
 * @param {object} [opts]
 * @param {"lexical"|"semantic"|"hybrid"} [opts.mode="hybrid"]
 * @param {number} [opts.k=10] Max results.
 * @param {string[]} [opts.themes] Theme filter.
 * @param {string} [opts.locale] Caller locale (used for snippet selection only).
 * @param {string} [opts.apiBase] Override the configured base URL.
 * @param {Function} [opts.fetchImpl] Override `fetch` (Node tests).
 * @param {AbortSignal} [opts.signal] Cancel the request.
 * @returns {Promise<object[]>} Hits (`[{id,type,score,title,subtitle,snippet,themes,url}]`),
 *   or `[]` on disabled/empty/failed.
 */
export async function serverSearch(q, opts = {}) {
  const {
    mode = "hybrid",
    k = 10,
    themes,
    locale,
    apiBase = SEARCH_API,
    fetchImpl = globalThis.fetch,
    signal,
  } = opts;

  if (!q || !apiBase) return [];

  const url = (apiBase.endsWith("/") ? apiBase.slice(0, -1) : apiBase) + "/v1/search";
  const body = { q, mode, k };
  if (themes && themes.length) body.themes = themes;
  if (locale) body.locale = locale;

  try {
    const res = await fetchImpl(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
      signal,
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data?.hits) ? data.hits : [];
  } catch {
    // Offline-first: any failure (CORS, network, abort) is non-fatal.
    return [];
  }
}

/**
 * Merge offline + online hits by `id`, preferring the online entry when both exist
 * (it carries `score`, `snippet`, and a richer match). Offline-only hits keep their
 * place at the top of the list (they're typeahead-fast). Returns at most `limit`.
 *
 * @param {object[]} offline Hits from the offline index (`{id,title,subtitle,...}`).
 * @param {object[]} online  Hits from `serverSearch` (`{id,score,snippet,...}`).
 * @param {number} [limit=20]
 * @returns {object[]} Merged hits, with `_origin` ∈ {"offline","online","both"}.
 */
export function mergeHits(offline, online, limit = 20) {
  const out = [];
  const seen = new Set();
  const onlineById = new Map((online || []).map((h) => [h.id, h]));

  for (const h of offline || []) {
    if (seen.has(h.id)) continue;
    const o = onlineById.get(h.id);
    out.push({ ...h, ...(o || {}), _origin: o ? "both" : "offline" });
    seen.add(h.id);
  }
  for (const h of online || []) {
    if (seen.has(h.id)) continue;
    out.push({ ...h, _origin: "online" });
    seen.add(h.id);
  }
  return out.slice(0, limit);
}
