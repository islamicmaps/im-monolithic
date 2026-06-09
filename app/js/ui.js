/**
 * DOM UI: search panel, theme chips, results, story panel, playback bar, sources
 * modal, language + basemap controls. Plain DOM (no framework). All content text
 * goes through {@link t}; layout direction follows the locale (RTL-aware via CSS).
 */

import { t, ui as uiStr, dir } from "./i18n.js";

/** Small element factory. Keys with `-` (e.g. `aria-label`, `data-*`) become
 *  attributes; everything else is set as a DOM property (preserves the
 *  existing onclick/onchange/value/textContent behavior). */
function el(tag, props = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (k.includes("-")) node.setAttribute(k, v);
    else node[k] = v;
  }
  for (const c of [].concat(children)) node.append(c);
  return node;
}

/**
 * Mount the UI into `root` and wire event handlers.
 * @param {HTMLElement} root Container element.
 * @param {object} handlers Callbacks: onSearch, onSelectStory, onTheme,
 *   onTogglePlay, onSeek, onSpeed, onLocale, onBasemap, onSources.
 * @returns {object} UI API (setLocale, renderThemes, renderResults, showStory,
 *   updatePlayback, showSources, hideStory).
 */
export function mountUI(root, handlers) {
  let locale = "en";

  // --- Top bar ---
  const basemapBtn = el("button", {
    className: "btn",
    "aria-label": "Toggle basemap",
    onclick: () => {
      const sat = basemapBtn.dataset.kind !== "satellite";
      basemapBtn.dataset.kind = sat ? "satellite" : "vector";
      basemapBtn.textContent = uiStr(sat ? "vector" : "satellite", locale);
      handlers.onBasemap(sat ? "satellite" : "vector");
    },
  });
  basemapBtn.dataset.kind = "vector";

  const langSel = el("select", {
    className: "lang",
    "aria-label": "Language",
    title: "Language",
    onchange: (e) => handlers.onLocale(e.target.value),
  });

  const topbar = el("div", { id: "topbar" }, [
    el("div", { className: "brand", textContent: "islamicmaps.org" }),
    el("div", { className: "spacer" }),
    basemapBtn,
    langSel,
  ]);

  // --- Search panel ---
  const searchInput = el("input", {
    id: "search",
    type: "search",
    autocomplete: "off",
    "aria-label": "Search stories, places, events",
    oninput: (e) => handlers.onSearch(e.target.value),
  });
  const themes = el("div", { id: "themes" });
  const results = el("ul", { id: "results" });
  const searchPanel = el("div", { id: "search-panel" }, [searchInput, themes, results]);

  // --- Story panel ---
  const storyTitle = el("h2", {});
  const storyDesc = el("p", { className: "desc" });
  const sourcesBtn = el("button", { className: "btn info", onclick: () => handlers.onSources() });
  const storyPanel = el("div", { id: "story-panel", hidden: true }, [storyTitle, storyDesc, sourcesBtn]);

  // --- Playback bar ---
  const playBtn = el("button", {
    id: "playpause",
    className: "btn",
    "aria-label": "Play / pause story",
    onclick: () => handlers.onTogglePlay(),
  });
  const seek = el("input", {
    id: "seek",
    type: "range",
    min: "0",
    max: "1000",
    value: "0",
    "aria-label": "Story progress",
    oninput: (e) => handlers.onSeek(Number(e.target.value) / 1000),
  });
  const speedWrap = el("div", { className: "speeds" },
    [1, 2, 5].map((s) =>
      el("button", {
        className: "btn speed",
        textContent: `${s}×`,
        "aria-label": `Playback speed ${s} times`,
        onclick: () => handlers.onSpeed(s),
      })
    ));
  const timeLabel = el("span", { className: "time" });
  const narration = el("div", { id: "narration" });
  const playbar = el("div", { id: "playbar", hidden: true }, [
    el("div", { className: "controls" }, [playBtn, seek, timeLabel, speedWrap]),
    narration,
  ]);

  // --- Sources modal ---
  const modalBody = el("div", { className: "modal-body" });
  const modal = el("div", { id: "modal", role: "dialog", "aria-modal": "true", "aria-label": "Sources", hidden: true }, [
    el("div", { className: "modal-card" }, [
      el("button", {
        className: "btn close",
        textContent: "✕",
        "aria-label": "Close sources",
        onclick: () => (modal.hidden = true),
      }),
      modalBody,
    ]),
  ]);

  root.append(topbar, searchPanel, storyPanel, playbar, modal);

  /** Apply locale: direction, language attr, placeholder/labels. */
  function setLocale(l, locales) {
    locale = l;
    document.documentElement.lang = l;
    document.documentElement.dir = dir(l);
    searchInput.placeholder = uiStr("search", l);
    sourcesBtn.textContent = uiStr("source", l);
    basemapBtn.textContent = uiStr(basemapBtn.dataset.kind === "satellite" ? "vector" : "satellite", l);
    if (locales && !langSel.options.length) {
      for (const code of locales) langSel.append(el("option", { value: code, textContent: code }));
    }
    langSel.value = l;
  }

  return {
    setLocale,

    /** Render theme filter chips. */
    renderThemes(list, l = locale) {
      themes.replaceChildren(
        ...list.map((th) =>
          el("button", { className: "chip", textContent: t(th.label, l), onclick: () => handlers.onTheme(th.id) })
        )
      );
    },

    /** Render search results. Shows the API snippet/origin badge when present. */
    renderResults(items, l = locale) {
      results.replaceChildren(
        ...(items.length
          ? items.map((d) => {
              const children = [
                el("div", { className: "r-title", textContent: t(d.title, l) }),
                el("div", { className: "r-sub", textContent: t(d.subtitle, l) }),
              ];
              if (d.snippet) {
                children.push(el("div", { className: "r-snippet", textContent: d.snippet }));
              }
              if (d._origin && d._origin !== "offline") {
                children.push(el("span", {
                  className: "r-badge",
                  textContent: d._origin === "both" ? "★ semantic+lexical" : "★ semantic",
                  title: typeof d.score === "number" ? `score ${d.score.toFixed(3)}` : undefined,
                }));
              }
              return el("li", { className: "result", onclick: () => handlers.onSelectStory(d.id) }, children);
            })
          : [el("li", { className: "empty", textContent: uiStr("noResults", l) })])
      );
    },

    /** Show the story panel; reveal the play bar only if the story is playable. */
    showStory(bundle, l = locale) {
      storyTitle.textContent = t(bundle.title, l);
      storyDesc.textContent = t(bundle.description || bundle.subtitle, l);
      storyPanel.hidden = false;
      playbar.hidden = !(bundle.playback && bundle.playback.mode !== "none");
    },

    /** Update the play bar from a playback state. */
    updatePlayback(state, l = locale) {
      playBtn.textContent = state.playing ? uiStr("pause", l) : uiStr("play", l);
      playBtn.setAttribute("aria-pressed", String(state.playing));
      if (document.activeElement !== seek) seek.value = String(Math.round(state.pos * 1000));
      timeLabel.textContent = state.timeDisplay ? t(state.timeDisplay, l) : "";
      narration.textContent = state.narration ? t(state.narration, l) : "";
    },

    /** Populate and open the sources/"i" modal from InfoBlocks. */
    showSources(info, bundle, l = locale) {
      const blocks = (info || []).map((b) => {
        if (b.kind === "heading") return el("h3", { textContent: t(b.title, l) });
        if (b.kind === "text") return el("p", { textContent: t(b.body, l) });
        if (b.kind === "citation" && bundle && bundle._refs && bundle._refs[b.source]) {
          const s = bundle._refs[b.source];
          return el("p", { className: "cite", textContent: `${t(s.title, l)} — ${t(s.author, l)}` });
        }
        if (b.kind === "external_link") return el("a", { href: b.url, target: "_blank", textContent: b.url });
        return el("p", { textContent: t(b.body, l) });
      });
      modalBody.replaceChildren(el("h2", { textContent: uiStr("source", l) }), ...blocks);
      modal.hidden = false;
    },

    /** Hide the story panel + play bar. */
    hideStory() {
      storyPanel.hidden = true;
      playbar.hidden = true;
    },
  };
}
