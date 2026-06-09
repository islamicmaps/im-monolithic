/**
 * Client-side search over the prebuilt offline index (`search/index.json`).
 *
 * Pure functions: the index is loaded by `data.js` and passed in. Matching uses
 * the same Arabic-aware tokenization as the build step, plus prefix matching for
 * typeahead. No server, no per-query network.
 */

import { tokenize } from "./arabic.js";

/**
 * Search the index for `q`, returning ranked story hits.
 *
 * Each query token matches index tokens exactly and by prefix (typeahead). A hit's
 * score is the number of distinct query tokens it matched.
 *
 * @param {{docs:object[], index:Object<string,number[]>}} index The search index.
 * @param {string} q Raw query text.
 * @param {number} [limit=20] Max results.
 * @returns {object[]} Story doc entries (from `index.docs`) with a `_score` field.
 */
export function query(index, q, limit = 20) {
  const tokens = tokenize(q);
  if (!tokens.length || !index || !index.index) return [];
  const allTokens = Object.keys(index.index);
  const scores = new Map(); // docIndex -> matched-token count

  for (const tok of tokens) {
    const hits = new Set(index.index[tok] || []);
    if (tok.length >= 2) {
      for (const t of allTokens) {
        if (t !== tok && t.startsWith(tok)) {
          for (const d of index.index[t]) hits.add(d);
        }
      }
    }
    for (const d of hits) scores.set(d, (scores.get(d) || 0) + 1);
  }

  return [...scores.entries()]
    .sort((a, b) => b[1] - a[1] || a[0] - b[0])
    .slice(0, limit)
    .map(([i, score]) => ({ ...index.docs[i], _score: score }));
}
