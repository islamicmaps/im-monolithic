/**
 * Node tests for the render-agnostic core, run against the REAL pipeline output
 * in ../../dist. No browser/WebGL needed.
 *
 *   node app/test/logic.test.mjs      (or: npm test, from app/)
 */

import { readFile } from "node:fs/promises";
import { normalize, tokenize } from "../js/arabic.js";
import { query } from "../js/search.js";
import { createPlayback } from "../js/playback.js";
import { loadJSON, deref } from "../js/data.js";
import { t, dir, pickLocale } from "../js/i18n.js";
import { serverSearch, mergeHits } from "../js/searchApi.js";

const DIST = new URL("../../dist/", import.meta.url);
const readDist = async (p) => JSON.parse(await readFile(new URL(p, DIST), "utf8"));

let pass = 0,
  fail = 0;
function ok(name, cond) {
  if (cond) {
    pass++;
    console.log("  ok  ", name);
  } else {
    fail++;
    console.error("  FAIL", name);
  }
}

// --- Arabic normalization must match the build step ---
ok("normalize ta-marbuta مكة -> مكه", normalize("مكة") === "مكه");
ok("normalize alef+ta المدينة -> المدينه", normalize("المدينة") === "المدينه");
ok("normalize latin diacritic Madīnah -> madinah", normalize("Madīnah") === "madinah");
ok("tokenize mixed script", JSON.stringify(tokenize("Mecca المدينة")) === JSON.stringify(["mecca", "المدينه"]));

// --- Search against the real index ---
const idx = await readDist("search/index.json");
ok("search 'medina' -> hijra", query(idx, "medina").some((d) => d.id === "hijra"));
ok("search 'yathrib' -> hijra", query(idx, "yathrib").some((d) => d.id === "hijra"));
ok("search arabic 'العمرة' -> umrah", query(idx, "العمرة").some((d) => d.id === "umrah-steps"));
ok("search prefix 'taw' -> umrah", query(idx, "taw").some((d) => d.id === "umrah-steps"));
ok("search gibberish -> empty", query(idx, "zzzzqx").length === 0);

// --- Data loader via a file-backed fetch shim ---
const fetchImpl = async (url) => ({ ok: true, json: async () => JSON.parse(await readFile(url, "utf8")) });
const base = DIST.pathname;
const catalog = await loadJSON("catalog.json", { fetchImpl, base });
ok("loadJSON catalog has 2 stories", catalog.stories.length === 2);

// --- Playback: temporal (Hijra) ---
const hijra = await readDist("stories/hijra.json");
const pbH = createPlayback(hijra);
ok("hijra mode temporal", pbH.getState().mode === "temporal");
ok("hijra starts at 'depart'", pbH.getState().stepId === "depart");
ok("hijra depart animates the route (trip)", pbH.getState().animations.some((a) => a.feature === "feature:hijra-route" && a.kind === "trip"));
pbH.play();
pbH.tick(1e9); // run to the end
ok("hijra stops at end (pos=1, paused)", pbH.getState().pos >= 1 && pbH.getState().playing === false);
ok("hijra ends on 'arrive'", pbH.getState().stepId === "arrive");
ok("hijra keeps route visible at end", pbH.getState().visibleFeatures.includes("feature:hijra-route"));
ok("hijra clock advances to ~max", pbH.getState().clock > 622.7);

// --- Playback: sequential (Umrah) ---
const umrah = await readDist("stories/umrah-steps.json");
const pbU = createPlayback(umrah);
ok("umrah mode sequential", pbU.getState().mode === "sequential");
ok("umrah step 1 = ihram", pbU.getState().stepId === "ihram");
pbU.seekToStep(1);
const stTawaf = pbU.getState();
ok("umrah seek to step 2 = tawaf", stTawaf.stepId === "tawaf");
ok("umrah tawaf reveals the Kaaba", stTawaf.visibleFeatures.includes("feature:kaaba"));
ok("umrah tawaf moves a marker", stTawaf.animations.some((a) => a.kind === "move_marker"));
ok("umrah has no temporal clock", stTawaf.clock === null);

// --- Bundle self-containment + deref ---
ok("hijra bundle is self-contained", deref(hijra, "feature:hijra-route") !== null && deref(hijra, "event:hijra") !== null);
ok("hijra bundle resolves transitive place", deref(hijra, "place:madinah") !== null);

// --- Online search client (pure, fetch-injected) ---
{
  const fakeApi = "https://api.example.test";
  let lastReq = null;
  const fakeFetch = async (url, init) => {
    lastReq = { url, init };
    return {
      ok: true,
      json: async () => ({
        query: JSON.parse(init.body).q,
        mode: JSON.parse(init.body).mode,
        count: 1,
        hits: [{
          id: "hijra", type: "story", score: 0.81,
          title: { en: "The Hijra: Mecca to Medina" },
          subtitle: { en: "The migration that began the Islamic calendar" },
          snippet: "Follow the Prophet's ﷺ migration in 622 CE…",
          themes: ["seerah"], url: "/stories/hijra.json",
        }],
      }),
    };
  };
  const hits = await serverSearch("hijra", { apiBase: fakeApi, fetchImpl: fakeFetch, locale: "en" });
  ok("serverSearch hits length", hits.length === 1);
  ok("serverSearch posts to /v1/search", lastReq.url === fakeApi + "/v1/search");
  ok("serverSearch sends q + mode in body",
    JSON.parse(lastReq.init.body).q === "hijra" && JSON.parse(lastReq.init.body).mode === "hybrid");
  ok("serverSearch sets content-type", lastReq.init.headers["content-type"] === "application/json");
  ok("serverSearch returns [] when apiBase blank",
    (await serverSearch("hijra", { apiBase: "", fetchImpl: fakeFetch })).length === 0);
  ok("serverSearch returns [] on failed fetch",
    (await serverSearch("hijra", {
      apiBase: fakeApi,
      fetchImpl: async () => { throw new Error("network"); },
    })).length === 0);
  ok("serverSearch returns [] on non-2xx",
    (await serverSearch("hijra", {
      apiBase: fakeApi,
      fetchImpl: async () => ({ ok: false, json: async () => ({}) }),
    })).length === 0);
}

// --- mergeHits: offline+online by id ---
{
  const offline = [
    { id: "hijra", title: { en: "The Hijra" }, subtitle: { en: "x" } },
    { id: "umrah-steps", title: { en: "Umrah" }, subtitle: { en: "y" } },
  ];
  const online = [
    { id: "hijra", score: 0.9, snippet: "Migration of the Prophet…", title: { en: "The Hijra" } },
    { id: "newone", score: 0.5, title: { en: "Other" } },
  ];
  const merged = mergeHits(offline, online);
  ok("mergeHits returns 3 entries", merged.length === 3);
  ok("mergeHits hijra is 'both' with snippet",
    merged.find((m) => m.id === "hijra")._origin === "both" &&
      merged.find((m) => m.id === "hijra").snippet === "Migration of the Prophet…");
  ok("mergeHits umrah is 'offline'",
    merged.find((m) => m.id === "umrah-steps")._origin === "offline");
  ok("mergeHits newone is 'online'",
    merged.find((m) => m.id === "newone")._origin === "online");
  ok("mergeHits empty offline keeps online",
    mergeHits([], online).length === 2 && mergeHits([], online)[0]._origin === "online");
  ok("mergeHits empty online keeps offline",
    mergeHits(offline, []).length === 2 && mergeHits(offline, [])[0]._origin === "offline");
  ok("mergeHits limit honored", mergeHits(offline, online, 1).length === 1);
}

// --- i18n ---
ok("dir(ar) = rtl", dir("ar") === "rtl");
ok("dir(en) = ltr", dir("en") === "ltr");
ok("t() falls back to en", t({ en: "Mecca" }, "ar") === "Mecca");
ok("t() picks ar when present", t({ en: "Mecca", ar: "مكة" }, "ar") === "مكة");
ok("pickLocale prefers exact", pickLocale(["en", "ar"], "ar") === "ar");

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
