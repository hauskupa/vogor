// src/asleep.js (NO WAVEFORM VERSION)
import {
  FLY_SLOTS_DESKTOP,
  FLY_SLOTS_MOBILE,
  SONG_LAYOUT as STATIC_LAYOUT,
} from "./asleepPositions.js";


// -------------------------------------------------------------
// Fade helper
// -------------------------------------------------------------
function fadeVolume(audio, target, duration = 500) {
  const steps = 30;
  const stepTime = duration / steps;
  const start = audio.volume;
  const delta = target - start;
  let i = 0;

  const timer = setInterval(() => {
    i++;
    audio.volume = start + (delta * (i / steps));
    if (i >= steps) {
      audio.volume = target;
      clearInterval(timer);
    }
  }, stepTime);
}

// -------------------------------------------------------------
// Stem-nafn
// -------------------------------------------------------------
function getStemName(track) {
  const fromAttr = track.el.dataset.mtStem;
  if (fromAttr) return fromAttr;

  const url =
    track.el.dataset.mtAudio ||
    track.audio?.src ||
    "";

  if (!url) return "Stem";

  let filename = url.split("/").pop();
  let base = filename.replace(/\.[^/.]+$/, "");
  base = base.replace(/^(Mars|Palli|Agust|Siggi)[0-9\-_]*/i, "");
  base = base.replace(/[_-]+/g, " ").trim();
  return base.charAt(0).toUpperCase() + base.slice(1);
}

// -------------------------------------------------------------
// MAIN
// -------------------------------------------------------------
export function setupAsleepArtwork(multitrack) {
  if (!multitrack) return;

  const { container, tracks, ensureStarted } = multitrack;

  const uiSong = container.querySelector("[data-mt-activesong]");
  const uiStemList = container.querySelector("[data-mt-activestems]");
  const uiStatus = container.querySelector("[data-mt-status]");

  // 🔹 Mappa songId -> track-image element (template)
  const trackImgMap = {};
  container.querySelectorAll("[data-mt-trackimg]").forEach((el) => {
    const id = el.dataset.mtTrackimg;
    if (!id) return;
    trackImgMap[id] = el;
    el.style.display = "none"; // notum bara sem template
  });

  // 🔹 Litir per lag – lesnir úr parent [data-mt-track][data-mt-color]
  const songColorMap = {};
  const songLayout = { ...STATIC_LAYOUT }; // copy af default-values

  container.querySelectorAll("[data-mt-track]").forEach((wrap) => {
    const id = wrap.dataset.mtTrack;
    if (!id) return;

    // 🎨 litur per lag
    const color = wrap.dataset.mtColor;
    if (color) {
      songColorMap[id] = color;
    }

    // 📍 layout per lag (slotStart / count) úr Webflow
    const slotStartAttr = wrap.dataset.mtSlotstart;
    const countAttr = wrap.dataset.mtCount;

    if (slotStartAttr != null || countAttr != null) {
      const prev = songLayout[id] || {};
      const slotStart =
        slotStartAttr != null
          ? parseInt(slotStartAttr, 10)
          : prev.slotStart ?? 0;
      const count =
        countAttr != null ? parseInt(countAttr, 10) : prev.count ?? 0;

      songLayout[id] = { slotStart, count };
    }
  });

  // Nafn fyrir hverja rás
  tracks.forEach((t) => {
    t.stemName = getStemName(t);
  });

  // -----------------------------------------------------------
  // Preload
  // -----------------------------------------------------------
  function preloadAllAudio() {
    tracks.forEach((t) => {
      const audio = t.audio;
      if (!audio) return;
      audio.preload = "auto";
      // create a ready promise per track so we can await full readiness
      if (!t._readyPromise) {
        t._readyPromise = new Promise((res) => {
          t._readyResolve = res;
        });
        const onReady = () => {
          try { t._readyResolve(); } catch (e) {}
          audio.removeEventListener("canplaythrough", onReady);
          audio.removeEventListener("loadedmetadata", onReady);
        };
        audio.addEventListener("canplaythrough", onReady, { passive: true });
        audio.addEventListener("loadedmetadata", onReady, { passive: true });
        // safety fallback: resolve after 5s so we don't block forever
        setTimeout(() => { try { t._readyResolve(); } catch (e) {} }, 5000);
      }
      if (audio.readyState < 3) {
        try {
          audio.load();
        } catch (e) {}
      }
    });
  }

  // await readiness for all tracks of a song (resolve even on timeout)
  function awaitSongReady(songId) {
    const songTracks = tracks.filter((t) => t.songId === songId && t._readyPromise);
    if (!songTracks.length) return Promise.resolve();
    return Promise.all(songTracks.map((t) => t._readyPromise));
  }

  // -----------------------------------------------------------
  // Resync (haldið inni fyrir mögulega framtíðarnotkun)
  // -----------------------------------------------------------
  function resyncSong(songId) {
    const songTracks = tracks.filter((t) => t.songId === songId);
    if (!songTracks.length) return;

    // choose a master track: prefer an active stem, otherwise first
    let masterTrack = songTracks.find((t) => t.el.classList.contains("is-active")) || songTracks[0];
    const master = masterTrack && masterTrack.audio;
    if (!master || master.paused) return; // nothing to sync to

    const masterTime = master.currentTime;

    // resync tuning constants
    const EMA_ALPHA = 0.25; // smoothing for measured drift
    const SMALL_TOL = 0.05; // ignore tiny differences (<50ms)
    const SEEK_TOL = 0.25; // if drift > 250ms -> hard seek
    const NUDGE_RATE = 0.02; // adjust playbackRate by +-2%
    const NUDGE_DURATION = 600; // how long to keep the nudge (ms)

    songTracks.forEach((t) => {
      if (t === masterTrack) return;
      const a = t.audio;
      if (!a || a.paused) return;

      // compute instantaneous drift (track - master)
      let measured = a.currentTime - masterTime;
      if (!Number.isFinite(measured)) measured = 0;

      // init EMA accumulator
      if (typeof t._driftEMA === "undefined") t._driftEMA = measured;
      else t._driftEMA = EMA_ALPHA * measured + (1 - EMA_ALPHA) * t._driftEMA;

      const drift = t._driftEMA;

      // If drift is tiny, ensure normal playbackRate and skip
      if (Math.abs(drift) <= SMALL_TOL) {
        if (t._nudgeTimeout) {
          clearTimeout(t._nudgeTimeout);
          t._nudgeTimeout = null;
        }
        if (a.playbackRate && a.playbackRate !== 1) try { a.playbackRate = 1; } catch (e) {}
        return;
      }

      // Large drift -> hard seek to master time (safe fallback)
      if (Math.abs(drift) >= SEEK_TOL) {
        try {
          a.currentTime = masterTime;
        } catch (e) {
          // some browsers may throw on seek; ignore
        }
        // reset EMA after a big correction
        t._driftEMA = 0;
        if (t._nudgeTimeout) { clearTimeout(t._nudgeTimeout); t._nudgeTimeout = null; }
        try { if (a.playbackRate) a.playbackRate = 1; } catch (e) {}
        return;
      }

      // Moderate drift -> gently nudge playbackRate for a short period
      // positive drift means this track is ahead; slow it down
      const sign = drift > 0 ? 1 : -1;
      const targetRate = 1 - sign * NUDGE_RATE; // e.g. 0.98 or 1.02

      try {
        if (a.playbackRate !== targetRate) a.playbackRate = targetRate;
      } catch (e) {}

      // clear any existing timeout and set a new one to restore rate
      if (t._nudgeTimeout) clearTimeout(t._nudgeTimeout);
      t._nudgeTimeout = setTimeout(() => {
        try { if (a.playbackRate) a.playbackRate = 1; } catch (e) {}
        t._nudgeTimeout = null;
      }, NUDGE_DURATION);
    });
  }

  let resyncTimer = null;

  function startResyncLoop(_songId) {
    // run periodic resync to correct small drifts between tracks
    stopResyncLoop();
    resyncTimer = setInterval(() => {
      try { resyncSong(_songId); } catch (e) {}
    }, 800);
  }

  function stopResyncLoop() {
    if (resyncTimer) {
      clearInterval(resyncTimer);
      resyncTimer = null;
    }
  }
  // Veljum slots miðað við layout
  const isMobileLayout = window.matchMedia("(max-width: 991px)").matches;
  const activeSlots =
    isMobileLayout && FLY_SLOTS_MOBILE && FLY_SLOTS_MOBILE.length
      ? FLY_SLOTS_MOBILE
      : FLY_SLOTS_DESKTOP;

  // -----------------------------------------------------------
  // Fly positions
  // -----------------------------------------------------------
  function applyFlyPositions() {
    const perSong = new Map();

    tracks.forEach((t) => {
      if (!t.songId) return;
      if (!perSong.has(t.songId)) perSong.set(t.songId, []);
      perSong.get(t.songId).push(t.el);
    });

    perSong.forEach((els, songId) => {
       const layout = songLayout[songId]; // 👈 í stað SONG_LAYOUT
      if (!layout) return;

      const start = layout.slotStart;

      for (let i = 0; i < els.length; i++) {
        const slot = activeSlots[start + i];
        if (!slot) continue;

        const el = els[i];
        el.removeAttribute("style");

        el.style.position = "absolute";
        el.style.left = slot.x * 100 + "%";
        el.style.top = slot.y * 100 + "%";
        el.style.pointerEvents = "auto";
      }
    });
  }

  applyFlyPositions();
  preloadAllAudio();
  // show preloader for all tracks (or pass only the current song id)
  showPreloaderUntilReady(null, 5000);

  // -----------------------------------------------------------
  // Default drone
  // -----------------------------------------------------------
  const defaultEl = container.querySelector("[data-mt-default]");
  const defaultUrl = defaultEl?.dataset.mtDefault || "";
  let defaultAudio = null;
  let defaultActive = false;

  if (defaultUrl) {
    defaultAudio = new Audio(defaultUrl);
    defaultAudio.loop = true;
    defaultAudio.volume = 1;

    // Try to play right away. If the browser blocks autoplay, wait for
    // the first user gesture (pointerdown) and attempt to play then.
    const tryPlayDefault = async () => {
      try {
        await defaultAudio.play();
        defaultActive = true;
      } catch (e) {
        // Autoplay blocked by browser policy — start on first user gesture
        const onFirstGesture = () => {
          defaultAudio.play().then(() => {
            defaultActive = true;
          }).catch(() => {});
        };

        // Use a once listener so it cleans itself up automatically
        window.addEventListener("pointerdown", onFirstGesture, { once: true, passive: true });
      }
    };

    tryPlayDefault();
  }

  function dropDefault() {
    if (!defaultActive || !defaultAudio) return;

    fadeVolume(defaultAudio, 0, 500);
    setTimeout(() => {
      defaultAudio.pause();
      defaultAudio.currentTime = 0;
    }, 550);

    defaultActive = false;
  }

  // -----------------------------------------------------------
  // Status UI
  // -----------------------------------------------------------
  function setActiveSong(songId) {
    if (!uiSong) return;

    // hreinsa gamla content (texta/mynd)
    uiSong.innerHTML = "";

    const id = songId || "";
    const templateImg = trackImgMap[id];

    if (templateImg) {
      // klónum myndina svo við tökum hana ekki úr CMS listanum
      const img = templateImg.cloneNode(true);
      img.removeAttribute("data-mt-trackimg");
      img.style.display = "block";
      img.loading = "lazy";
      uiSong.appendChild(img);
    } else {
      // fallback: texti
      uiSong.textContent = id || "–";
    }

    // uppfæra glow-litin fyrir þetta lag
    const color = songColorMap[id] || "#cdb5b0";
    container.style.setProperty("--asleep-glow", color);
  }

  let currentSongId = null;
  const activeStems = new Set();

  function renderStemList() {
    if (!uiStemList) return;

    uiStemList.innerHTML = "";

    if (activeStems.size === 0) {
      const li = document.createElement("li");
      li.textContent = "–";
      uiStemList.appendChild(li);
      return;
    }

    activeStems.forEach((name) => {
      const li = document.createElement("li");
      li.textContent = name;
      uiStemList.appendChild(li);
    });
  }

  let statusHideTimer = null;

  function showStatusBox() {
    if (!uiStatus) return;
    uiStatus.classList.add("is-visible");

    if (statusHideTimer) clearTimeout(statusHideTimer);

    statusHideTimer = setTimeout(() => {
      if (activeStems.size === 0) {
        uiStatus.classList.remove("is-visible");
      }
    }, 5000);
  }

  // -----------------------------------------------------------
  // Hover highlight
  // -----------------------------------------------------------
  function highlightSong(songId) {
    tracks.forEach((t) => {
      if (t.songId === songId) t.el.classList.add("song-hover");
      else t.el.classList.remove("song-hover");
    });
  }

  function clearSongHighlight() {
    tracks.forEach((t) => t.el.classList.remove("song-hover"));
  }

  // -----------------------------------------------------------
  // Drop drone on first click
  // -----------------------------------------------------------
  let hasUserInteractedWithStems = false;

  function handleFirstStemInteraction() {
    if (hasUserInteractedWithStems) return;
    hasUserInteractedWithStems = true;

    dropDefault();
    ensureStarted();
    showStatusBox();
  }

  // -----------------------------------------------------------
  // Bind interactions
  // -----------------------------------------------------------
  tracks.forEach((track) => {
    const el = track.el;

    el.addEventListener("click", async () => {
      // simple debounce: ignore clicks while locked
      if (el.dataset._mtLock === "1") return;
      el.dataset._mtLock = "1";
      setTimeout(() => { delete el.dataset._mtLock; }, 300);

      handleFirstStemInteraction();

      const songId = track.songId || "–";
      const stemLabel = track.stemName || "Stem";

      // ensure all tracks for this song are ready (or timeout)
      await awaitSongReady(songId);

      // if switching to a new song, clear active stems
      if (currentSongId !== songId) {
        currentSongId = songId;
        activeStems.clear();
      }

      const isActiveNow = el.classList.contains("is-active");

      // find song tracks and a master reference (existing active or the first)
      const songTracks = tracks.filter((t) => t.songId === songId);
      const masterTrack = songTracks.find((t) => t.el.classList.contains("is-active")) || songTracks[0];
      const masterTime = masterTrack?.audio?.currentTime || 0;

      if (!isActiveNow) {
        // turning ON: align new track to master time, start with volume 0, then fade up
        try {
          const a = track.audio;
          if (a) {
            try { a.currentTime = Math.min(masterTime, Math.max(0, a.duration || Infinity)); } catch (e) {}
            a.volume = 0;
            const p = a.play();
            if (p && typeof p.then === "function") {
              p.then(() => fadeVolume(a, 1, 300)).catch(() => { /* play failed */ });
            } else {
              fadeVolume(a, 1, 300);
            }
          }
          el.classList.add("is-active");
          activeStems.add(stemLabel);
        } catch (e) {
          console.warn("asleep: failed to enable stem", e);
          el.classList.add("is-active");
          activeStems.add(stemLabel);
        }
      } else {
        // turning OFF: fade out then pause
        try {
          const a = track.audio;
          if (a) {
            fadeVolume(a, 0, 300);
            setTimeout(() => {
              try { a.pause(); } catch (e) {}
            }, 320);
          }
          el.classList.remove("is-active");
          activeStems.delete(stemLabel);
        } catch (e) {
          console.warn("asleep: failed to disable stem", e);
          el.classList.remove("is-active");
          activeStems.delete(stemLabel);
        }
      }

      setActiveSong(songId);
      renderStemList();
      showStatusBox();

      const anyActiveInSong = tracks.some((t) => t.songId === songId && t.el.classList.contains("is-active"));
      if (anyActiveInSong) startResyncLoop(songId);
      else stopResyncLoop();
    });

    el.addEventListener("mouseenter", () => highlightSong(track.songId));
    el.addEventListener("mouseleave", clearSongHighlight);
  });

  // -----------------------------------------------------------
  // Stop button
  // -----------------------------------------------------------
  const stopBtn = container.querySelector("[data-mt-stop]");
  stopBtn?.addEventListener("click", () => {
    dropDefault();
    stopResyncLoop();
    activeStems.clear();
    renderStemList();
    setActiveSong("–");
  });

  console.log(
    "asleep: ready (no waveform, slots + drone + status + preload + soft glow)"
  );

    // -----------------------------------------------------------
  // Preloader helper
  // -----------------------------------------------------------
    console.log(
    "asleep: ready (no waveform, slots + drone + status + preload + soft glow)"
  );

   async function showPreloaderUntilReady(songIdList = null, timeout = 5000) {
    const el =
      container.querySelector("[data-asleep-preloader]") ||
      document.querySelector("[data-asleep-preloader]");

    console.log("asleep: preloader element =", el);
    if (!el) return;

    const started = performance.now();
    el.setAttribute("aria-hidden", "false");
    console.log("asleep: preloader ON");

    const promises = tracks
      .filter((t) => !songIdList || songIdList.includes(t.songId))
      .map((t) => t._readyPromise || Promise.resolve());

    await Promise.race([
      Promise.all(promises),
      new Promise((resolve) => setTimeout(resolve, timeout)),
    ]);

    // tryggjum MIN display time, t.d. 800ms
    const elapsed = performance.now() - started;
    const minShow = 800; // ms
    if (elapsed < minShow) {
      await new Promise((res) => setTimeout(res, minShow - elapsed));
    }

    el.setAttribute("aria-hidden", "true");
    console.log("asleep: preloader OFF after", performance.now() - started, "ms");
  }

  // -----------------------------------------------------------
  // Ræsum allt
  // -----------------------------------------------------------
  applyFlyPositions();
  preloadAllAudio();

  // smá delay svo DOM/Paint nái að klárast áður en við sýnum overlay
  setTimeout(() => {
    showPreloaderUntilReady(null, 5000);
  }, 50);
}



