/**
 * Arabic-aware text normalization — a faithful port of `pipeline/arabic.py`.
 *
 * The client MUST normalize queries with the exact same rules used to build the
 * search index, or Arabic/transliterated queries won't match. Codepoints are
 * written as \u escapes (matching the Python ranges) so the two stay in sync.
 */

// Harakat / Quranic marks + tatweel (same codepoint ranges as the build step).
const HARAKAT =
  /[ؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۨ-ۭـ]/g;

// Orthographic letter unifications (variants that should compare equal).
const LETTER_MAP = {
  "أ": "ا", // أ -> ا
  "إ": "ا", // إ -> ا
  "آ": "ا", // آ -> ا
  "ٱ": "ا", // ٱ -> ا
  "ة": "ه", // ة -> ه
  "ى": "ي", // ى -> ي
  "ؤ": "و", // ؤ -> و
  "ئ": "ي", // ئ -> ي
};
const LETTER_RE = /[أإآٱةىؤئ]/g;

// A token: a run of Unicode letters/digits/underscore (covers Latin + Arabic).
const TOKEN_RE = /[\p{L}\p{N}_]+/gu;

/**
 * Normalize a string for indexing/matching.
 * @param {string} text Raw input (any script).
 * @returns {string} Case-folded, diacritic-free, letter-unified text.
 */
export function normalize(text) {
  if (!text) return "";
  let s = String(text).replace(HARAKAT, "");
  s = s.replace(LETTER_RE, (ch) => LETTER_MAP[ch] || ch);
  s = s.normalize("NFKD").replace(/\p{M}/gu, ""); // fold Latin accents + residual marks
  return s.toLowerCase().trim();
}

/**
 * Normalize then split into search tokens (length >= 2).
 * @param {string} text Raw input.
 * @returns {string[]} Normalized tokens.
 */
export function tokenize(text) {
  return (normalize(text).match(TOKEN_RE) || []).filter((t) => t.length >= 2);
}
