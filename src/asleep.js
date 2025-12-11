// src/asleep.js – VISUALS ONLY (no playback logic)
import {
  FLY_SLOTS_DESKTOP,
  FLY_SLOTS_MOBILE,
  SONG_LAYOUT as STATIC_LAYOUT,
} from "./asleepPositions.js";

// -------------------------------------------------------------
// Hjálparfall fyrir stem-nafn
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
// Lítill fade fyrir DRONE (ekki stems)
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
// MAIN
// -------------------------------------------------------------
export function setupAsleepArtwork(multitrack) {
  if (!multitrack) return;

  const { container, tracks } = multitrack;

  const uiSong = container.querySelector("[data-mt-activesong]");
  const uiStemList = container.querySelector("[data-mt-activestems]");
  const uiStatus = container.querySelector("[data-mt-status]");

  // 🔹 Mappa songId -> track-image element (template)
  const trackImgMap = {};
  container.querySelectorAll("[data-mt-trackimg]").forEach((el) => {
    const id = el.dataset.mtTrackimg;
    if (!id) return;
    trackImgMap[id] = el;
    el.style.display = "none"; // geymum sem template
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

  // Nafn fyrir hverja rás (fyrir stem-listann)
  tracks.forEach((t) => {
    t.stemName = getStemName(t);
  });

  // -----------------------------------------------------------
  // Preload (bara til að vita hvenær allt er "ready" fyrir preloader)
  // -----------------------------------------------------------
  function preloadAllAudio() {
    tracks.forEach((t) => {
      const audio = t.audio;
      if (!audio) return;
      audio.preload = "auto";

      if (!t._readyPromise) {
        t._readyPromise = new Promise((res) => {
          let settled = false;

          const cleanup = () => {
            audio.removeEventListener("canplaythrough", onReady);
            audio.removeEventListener("loadedmetadata", onReady);
            audio.removeEventListener("error", onError);
          };

          const done = (result) => {
            if (settled) return;
            settled = true;
            cleanup();
            try { res(result); } catch (e) {}
          };

          const onReady = () => done({ ok: true });
          const onError = (e) => {
            console.warn("asleep: preload error", audio.src || t.el?.dataset?.mtAudio || "", e);
            done({ ok: false, error: true });
          };

          // Already buffered (e.g., cache) – resolve immediately.
          if (audio.readyState >= 3) {
            done({ ok: true, cached: true });
            return;
          }

          audio.addEventListener("canplaythrough", onReady, { passive: true });
          audio.addEventListener("loadedmetadata", onReady, { passive: true });
          audio.addEventListener("error", onError, { passive: true });

          // safety fallback: resolve eftir 3.5s svo UI hangar ekki
          setTimeout(() => done({ ok: false, timeout: true }), 3500);
        });
      }

      if (audio.readyState < 3) {
        try {
          audio.load();
        } catch (e) {}
      }
    });
  }

  async function showPreloaderUntilReady(songIdList = null, timeout = 3500, minShow = 900) {
    const el =
      container.querySelector("[data-asleep-preloader]") ||
      document.querySelector("[data-asleep-preloader]");

    if (!el) return;

    const started = performance.now();
    el.setAttribute("aria-hidden", "false");
    console.log("asleep: preloader ON");

    const promises = tracks
      .filter((t) => !songIdList || songIdList.includes(t.songId))
      .map((t) => t._readyPromise || Promise.resolve({ ok: true }));

    await Promise.race([
      Promise.all(promises),
      new Promise((resolve) => setTimeout(resolve, timeout)),
    ]);

    const elapsed = performance.now() - started;
    if (elapsed < minShow) {
      await new Promise((res) => setTimeout(res, minShow - elapsed));
    }

    el.setAttribute("aria-hidden", "true");
    console.log("asleep: preloader OFF after", performance.now() - started, "ms");
  }

  // -----------------------------------------------------------
  // Veljum slots miðað við layout
  // -----------------------------------------------------------
  const isMobileLayout = window.matchMedia("(max-width: 991px)").matches;
  const activeSlots =
    isMobileLayout && FLY_SLOTS_MOBILE && FLY_SLOTS_MOBILE.length
      ? FLY_SLOTS_MOBILE
      : FLY_SLOTS_DESKTOP;

  function applyFlyPositions() {
    const perSong = new Map();

    tracks.forEach((t) => {
      if (!t.songId) return;
      if (!perSong.has(t.songId)) perSong.set(t.songId, []);
      perSong.get(t.songId).push(t.el);
    });

    perSong.forEach((els, songId) => {
      const layout = songLayout[songId];
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
        el.style.transform = "translate(-50%, -50%)";
      }
    });
  }

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

    const tryPlayDefault = async () => {
      try {
        await defaultAudio.play();
        defaultActive = true;
      } catch (e) {
        const onFirstGesture = () => {
          defaultAudio.play().then(() => {
            defaultActive = true;
          }).catch(() => {});
        };
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
  // Status UI (lag + stems)
  // -----------------------------------------------------------
  function setActiveSong(songId) {
    if (!uiSong) return;

    uiSong.innerHTML = "";

    const id = songId || "";
    const templateImg = trackImgMap[id];

    if (templateImg) {
      const img = templateImg.cloneNode(true);
      img.removeAttribute("data-mt-trackimg");
      img.style.display = "block";
      img.loading = "lazy";
      uiSong.appendChild(img);
    } else {
      uiSong.textContent = id || "–";
    }

    const color = songColorMap[id] || "#cdb5b0";
    container.style.setProperty("--asleep-glow", color);
  }

  const activeStems = new Set();
  let statusHideTimer = null;

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
  // Hover highlight (fyrir heilt lag)
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
  // Hookum okkur inn í ENGINE events frá multitrackplayer.js
  // -----------------------------------------------------------

  let hasUserInteractedWithStems = false;

  // Þegar notandi byrjar að nota stems – droppum drone
  window.addEventListener("mt:stem:change", (e) => {
    const detail = e.detail || {};
    const songId = detail.songId || null;
    const list = Array.isArray(detail.activeStems) ? detail.activeStems : [];

    activeStems.clear();
    list.forEach((name) => activeStems.add(name));

    if (songId) {
      setActiveSong(songId);
    } else {
      setActiveSong("–");
    }

    renderStemList();

    if (list.length > 0) {
      showStatusBox();

      if (!hasUserInteractedWithStems) {
        hasUserInteractedWithStems = true;
        dropDefault();
      }
    }
  });

  window.addEventListener("mt:song:change", (e) => {
    const songId = e.detail?.songId || "–";
    setActiveSong(songId);
    showStatusBox();
  });

  window.addEventListener("mt:stem:hover", (e) => {
    const songId = e.detail?.songId || null;
    if (!songId) return;
    highlightSong(songId);
  });

  window.addEventListener("mt:stem:leave", () => {
    clearSongHighlight();
  });

  // -----------------------------------------------------------
  // Stop takki – bara UI reset (hljóð er í multitrackplayer.js)
  // -----------------------------------------------------------
  const stopBtn = container.querySelector("[data-mt-stop]");
  stopBtn?.addEventListener("click", () => {
    activeStems.clear();
    renderStemList();
    setActiveSong("–");
  });

  // -----------------------------------------------------------
  // Ræsum visuals + preloader
  // -----------------------------------------------------------
  console.log(
    "asleep: ready (visuals only – slots + drone + status + preload + glow)"
  );

  applyFlyPositions();
  preloadAllAudio();

  setTimeout(() => {
    showPreloaderUntilReady();
  }, 50);
}
