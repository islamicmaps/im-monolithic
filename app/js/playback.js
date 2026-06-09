/**
 * Story playback engine — the heart of the "play button".
 *
 * Pure, render-agnostic state machine. It turns a story's `playback` (temporal
 * timeline or sequential steps) into a normalized clock, and at any position
 * reports the active step, accumulated visible features, in-flight animations,
 * camera target and narration. The renderer reads {@link Playback#getState} each
 * frame; tests drive it with {@link Playback#tick}.
 */

const DEFAULT_STEP_MS = 6000;

/**
 * @typedef {Object} PlaybackState
 * @property {"temporal"|"sequential"|"none"} mode
 * @property {boolean} playing
 * @property {number} speed
 * @property {number} pos Normalized position in [0,1] (drives the slider).
 * @property {number} stepIndex Active step index, or -1.
 * @property {?string} stepId Active step id.
 * @property {number} stepCount
 * @property {?Object} narration LocalizedString.
 * @property {?Object} title LocalizedString.
 * @property {?Object} camera Camera pose for the active step.
 * @property {string[]} visibleFeatures Accumulated `show`/`hide` refs up to `pos`.
 * @property {{feature:string,kind:string,marker?:string,t:number}[]} animations
 * @property {?Object} timeDisplay LocalizedString (temporal) — the date label.
 * @property {?number} clock Interpolated sort_key (temporal) else null.
 */

/**
 * Create a playback controller for a story.
 * @param {object} story A story document/bundle.
 * @returns {{
 *   getState: function():PlaybackState,
 *   play: function():PlaybackState,
 *   pause: function():PlaybackState,
 *   toggle: function():PlaybackState,
 *   setSpeed: function(number):PlaybackState,
 *   seek: function(number):PlaybackState,
 *   seekToStep: function(number):PlaybackState,
 *   tick: function(number):PlaybackState,
 *   steps: function():object[],
 * }}
 */
export function createPlayback(story) {
  const pb = (story && story.playback) || { mode: "none", steps: [] };
  const mode = pb.mode || "none";
  const steps = (pb.steps || []).slice();

  // Order steps: by date (temporal) or by `order` (sequential).
  if (mode === "temporal") {
    steps.sort((a, b) => (a.at_time?.sort_key ?? 0) - (b.at_time?.sort_key ?? 0));
  } else {
    steps.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  }

  // Per-step durations and cumulative start offsets (in ms).
  const durs = steps.map((s) => Math.max(1, s.duration_ms || DEFAULT_STEP_MS));
  const total = durs.reduce((a, b) => a + b, 0) || 1;
  const starts = [];
  let acc = 0;
  for (const d of durs) {
    starts.push(acc);
    acc += d;
  }

  // Temporal clock bounds.
  const tl = pb.timeline || {};
  const minK = tl.min?.sort_key ?? steps[0]?.at_time?.sort_key ?? 0;
  const maxK = tl.max?.sort_key ?? steps[steps.length - 1]?.at_time?.sort_key ?? 1;

  let pos = 0; // ms in [0, total]
  let playing = false;
  let speed = 1;

  /** Index of the last step whose start is <= pos. */
  function activeIndex() {
    let i = 0;
    for (let k = 0; k < steps.length; k++) {
      if (starts[k] <= pos + 1e-6) i = k;
      else break;
    }
    return i;
  }

  /** Features visible at step `idx` after applying all show/hide up to it. */
  function visibleAt(idx) {
    const set = new Set();
    for (let k = 0; k <= idx; k++) {
      for (const r of steps[k].show || []) set.add(r);
      for (const r of steps[k].hide || []) set.delete(r);
    }
    return [...set];
  }

  /** Progress within the active step, in [0,1]. */
  function localT(idx) {
    return Math.min(1, Math.max(0, (pos - starts[idx]) / durs[idx]));
  }

  /** Active step's animations with their current interpolated `t`. */
  function animationsAt(idx) {
    const lt = localT(idx);
    return (steps[idx].animate || []).map((a) => {
      const s = a.t_start ?? 0;
      const e = a.t_end ?? 1;
      return { feature: a.feature, kind: a.kind, marker: a.marker, t: s + (e - s) * lt };
    });
  }

  /** @returns {PlaybackState} */
  function getState() {
    const idx = steps.length ? activeIndex() : -1;
    const s = idx >= 0 ? steps[idx] : null;
    return {
      mode,
      playing,
      speed,
      pos: pos / total,
      stepIndex: idx,
      stepId: s?.id ?? null,
      stepCount: steps.length,
      narration: s?.narration ?? null,
      title: s?.title ?? null,
      camera: s?.camera ?? null,
      visibleFeatures: idx >= 0 ? visibleAt(idx) : [],
      animations: idx >= 0 ? animationsAt(idx) : [],
      timeDisplay:
        mode === "temporal" ? s?.at_time?.display ?? null : idx >= 0 ? { en: `${idx + 1} / ${steps.length}` } : null,
      clock: mode === "temporal" ? minK + (pos / total) * (maxK - minK) : null,
    };
  }

  return {
    getState,
    play() {
      if (pos >= total) pos = 0;
      playing = true;
      return getState();
    },
    pause() {
      playing = false;
      return getState();
    },
    toggle() {
      return playing ? this.pause() : this.play();
    },
    setSpeed(s) {
      speed = Math.max(0.1, s);
      return getState();
    },
    seek(p) {
      pos = Math.min(total, Math.max(0, p * total));
      return getState();
    },
    seekToStep(i) {
      i = Math.min(steps.length - 1, Math.max(0, i));
      pos = starts[i];
      return getState();
    },
    tick(dtMs) {
      if (playing) {
        pos += dtMs * speed;
        if (pos >= total) {
          pos = total;
          playing = false;
        }
      }
      return getState();
    },
    steps() {
      return steps;
    },
  };
}
