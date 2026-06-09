/**
 * Internationalization helpers: locale direction (RTL), localized-string lookup,
 * and a small UI string table. Content strings are `LocalizedString` objects
 * (BCP-47 -> string) resolved with {@link t}.
 */

/** Locales rendered right-to-left. */
export const RTL_LOCALES = new Set(["ar", "ur", "fa", "he", "ps", "sd", "ckb"]);

/**
 * Text direction for a locale.
 * @param {string} locale BCP-47 code.
 * @returns {"rtl"|"ltr"}
 */
export function dir(locale) {
  return RTL_LOCALES.has(String(locale || "").split("-")[0]) ? "rtl" : "ltr";
}

/**
 * Resolve a LocalizedString to the best available string for `locale`.
 * Falls back to the base language, then `fallback`, then any present value.
 * @param {Object<string,string>|null|undefined} dict LocalizedString map.
 * @param {string} locale Preferred locale.
 * @param {string} [fallback="en"] Fallback locale.
 * @returns {string}
 */
export function t(dict, locale, fallback = "en") {
  if (!dict || typeof dict !== "object") return "";
  const base = String(locale || "").split("-")[0];
  return (
    dict[locale] ?? dict[base] ?? dict[fallback] ?? Object.values(dict)[0] ?? ""
  );
}

/**
 * Choose the best UI locale given what's available.
 * @param {string[]} available Locales the catalog supports.
 * @param {string} preferred Preferred locale (e.g. navigator.language).
 * @param {string} [fallback="en"]
 * @returns {string}
 */
export function pickLocale(available, preferred, fallback = "en") {
  if (!available || !available.length) return preferred || fallback;
  const base = String(preferred || "").split("-")[0];
  return (
    available.find((l) => l === preferred) ??
    available.find((l) => l.split("-")[0] === base) ??
    (available.includes(fallback) ? fallback : available[0])
  );
}

/** UI chrome strings (extend per locale as the app grows). */
export const UI = {
  en: {
    search: "Search places, events, journeys…",
    results: "Results",
    noResults: "No matches",
    play: "Play",
    pause: "Pause",
    speed: "Speed",
    themes: "Themes",
    source: "Sources",
    language: "Language",
    basemap: "Basemap",
    vector: "Map",
    satellite: "Satellite",
    close: "Close",
    step: "Step",
  },
  ar: {
    search: "ابحث عن الأماكن والأحداث والرحلات…",
    results: "النتائج",
    noResults: "لا نتائج",
    play: "تشغيل",
    pause: "إيقاف",
    speed: "السرعة",
    themes: "المواضيع",
    source: "المصادر",
    language: "اللغة",
    basemap: "الخريطة الأساسية",
    vector: "خريطة",
    satellite: "قمر صناعي",
    close: "إغلاق",
    step: "خطوة",
  },
};

/**
 * Look up a UI string for `key` in `locale` (falls back to English).
 * @param {string} key UI string key.
 * @param {string} locale BCP-47 code.
 * @returns {string}
 */
export function ui(key, locale) {
  const base = String(locale || "").split("-")[0];
  return (UI[locale] || UI[base] || UI.en)[key] ?? UI.en[key] ?? key;
}
