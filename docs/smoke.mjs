/**
 * Headless browser smoke test for islamicmaps.org client.
 *
 * Drives system Chrome via puppeteer-core. Captures console + network failures,
 * verifies UI mount + key behaviors, screenshots state.
 */
import puppeteer from "puppeteer-core";
import { mkdirSync, writeFileSync } from "node:fs";

const BASE = "http://localhost:8000/app/";
const OUT = "/tmp/imaps-smoke";
mkdirSync(OUT, { recursive: true });

/** Locate system Chrome on macOS. */
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const events = { console: [], pageerror: [], requestfailed: [], requestlog: [] };
const log = (kind, payload) => events[kind].push({ t: Date.now(), ...payload });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: [
    "--no-sandbox",
    "--disable-dev-shm-usage",
    "--enable-webgl",
    "--ignore-gpu-blocklist",
    "--enable-unsafe-swiftshader",
    "--use-angle=swiftshader",
  ],
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });

  page.on("console", (m) => log("console", { type: m.type(), text: m.text() }));
  page.on("pageerror", (e) => log("pageerror", { message: e.message, stack: e.stack }));
  page.on("requestfailed", (r) => log("requestfailed", { url: r.url(), errorText: r.failure()?.errorText }));
  page.on("response", (r) => {
    const u = r.url();
    if (u.startsWith("http://localhost:8000/")) log("requestlog", { url: u, status: r.status() });
  });

  console.log("→ navigating to", BASE);
  await page.goto(BASE, { waitUntil: "networkidle2", timeout: 30000 });

  /** Wait for the app to mount the search input (created by ui.js mountUI). */
  const mounted = await page
    .waitForSelector("#search", { timeout: 10000 })
    .then(() => true)
    .catch(() => false);

  await new Promise((r) => setTimeout(r, 1500)); // settle
  await page.screenshot({ path: `${OUT}/01-initial.png`, fullPage: false });

  /** Probe app/map state after mount. */
  const initialState = await page.evaluate(() => {
    const fatal = document.querySelector(".fatal");
    return {
      title: document.title,
      hasMap: !!document.querySelector("#map canvas"),
      hasMapDiv: !!document.querySelector("#map"),
      hasSearch: !!document.querySelector("#search"),
      hasResults: !!document.querySelector("#results"),
      hasThemes: !!document.querySelector("#themes"),
      themeChipCount: document.querySelectorAll("#themes .chip").length,
      resultCount: document.querySelectorAll("#results .result").length,
      lang: document.documentElement.lang,
      dir: document.documentElement.dir,
      fatalText: fatal ? fatal.textContent : null,
    };
  });
  console.log("→ initial state:", JSON.stringify(initialState, null, 2));

  /** Try a search. */
  if (initialState.hasSearch) {
    await page.type("#search", "hijra");
    await new Promise((r) => setTimeout(r, 600));
    const searchResult = await page.evaluate(() => ({
      results: [...document.querySelectorAll("#results .result .r-title")].map((e) => e.textContent),
    }));
    console.log("→ search 'hijra' →", JSON.stringify(searchResult));
    await page.screenshot({ path: `${OUT}/02-search.png` });

    /** Click the first result if there is one. */
    const clicked = await page.evaluate(() => {
      const r = document.querySelector("#results .result");
      if (r) { r.click(); return true; }
      return false;
    });
    console.log("→ clicked first result:", clicked);
    await new Promise((r) => setTimeout(r, 2500));
    await page.screenshot({ path: `${OUT}/03-story-open.png` });

    /** Probe playback state. */
    const playbackVisible = await page.evaluate(() => {
      const playbar = document.querySelector("#playbar");
      const story = document.querySelector("#story-panel");
      return {
        storyOpen: !!story && !story.hidden,
        playbarVisible: !!playbar && !playbar.hidden,
        storyTitle: document.querySelector("#story-panel h2")?.textContent ?? null,
      };
    });
    console.log("→ after-click state:", JSON.stringify(playbackVisible, null, 2));

    /** Hit play, wait, screenshot. */
    if (playbackVisible.playbarVisible) {
      await page.click("#playpause");
      await new Promise((r) => setTimeout(r, 2500));
      await page.screenshot({ path: `${OUT}/04-playing.png` });
      const playingState = await page.evaluate(() => ({
        playBtnText: document.querySelector("#playpause")?.textContent,
        seekValue: document.querySelector("#seek")?.value,
        narrationText: document.querySelector("#narration")?.textContent,
      }));
      console.log("→ playing state:", JSON.stringify(playingState, null, 2));
    }
  }

  /** Try Arabic locale. */
  const localeChange = await page.evaluate(() => {
    const sel = document.querySelector("select.lang");
    if (!sel) return { ok: false, reason: "no lang select" };
    const hasAr = [...sel.options].some((o) => o.value === "ar");
    if (!hasAr) return { ok: false, reason: "no ar option", options: [...sel.options].map((o) => o.value) };
    sel.value = "ar";
    sel.dispatchEvent(new Event("change", { bubbles: true }));
    return { ok: true };
  });
  console.log("→ locale switch to ar:", JSON.stringify(localeChange));
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: `${OUT}/05-rtl.png` });
  const rtl = await page.evaluate(() => ({ lang: document.documentElement.lang, dir: document.documentElement.dir }));
  console.log("→ rtl state:", JSON.stringify(rtl));

  /** Identify mystery centered white element. */
  const mystery = await page.evaluate(() => {
    // Find absolutely-positioned visible elements roughly in screen center
    const cands = [...document.querySelectorAll("body *")].filter((e) => {
      const r = e.getBoundingClientRect();
      const cx = (r.left + r.right) / 2, cy = (r.top + r.bottom) / 2;
      const styles = getComputedStyle(e);
      const visible = r.width > 50 && r.height > 20 && styles.visibility !== "hidden" && styles.display !== "none" && styles.opacity !== "0";
      return visible && cx > 400 && cx < 900 && cy > 300 && cy < 500;
    });
    return cands.slice(0, 6).map((e) => ({
      tag: e.tagName,
      id: e.id,
      cls: e.className,
      hidden: e.hidden,
      rect: e.getBoundingClientRect(),
      text: (e.textContent || "").trim().slice(0, 60),
    }));
  });
  console.log("→ mystery centered elements:");
  for (const m of mystery) console.log("    ", JSON.stringify(m));
} catch (err) {
  console.error("FATAL test error:", err.message);
  console.error(err.stack);
  events.pageerror.push({ t: Date.now(), message: "TEST HARNESS: " + err.message, stack: err.stack });
} finally {
  writeFileSync(`${OUT}/events.json`, JSON.stringify(events, null, 2));
  console.log(`\n→ wrote ${OUT}/events.json`);
  console.log(`  console msgs: ${events.console.length}`);
  console.log(`  page errors:  ${events.pageerror.length}`);
  console.log(`  failed reqs:  ${events.requestfailed.length}`);
  console.log(`  responses:    ${events.requestlog.length}`);
  await browser.close();
}
