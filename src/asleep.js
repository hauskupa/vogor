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
      if (audio.readyState < 3) {
        try {
          audio.load();
        } catch (e) {}
      }
    });
  }

  // -----------------------------------------------------------
  // Resync (haldið inni fyrir mögulega framtíðarnotkun)
  // -----------------------------------------------------------
  function resyncSong(songId) {
    const songTracks = tracks.filter((t) => t.songId === songId);
    if (!songTracks.length) return;

    let masterTrack =
      songTracks.find((t) => t.el.classList.contains("is-active")) ||
      songTracks[0];

    const master = masterTrack.audio;
    const t0 = master.currentTime;
    const TOL = 0.02;

    songTracks.forEach((t) => {
      if (t === masterTrack) return;
      const a = t.audio;
      if (Math.abs(a.currentTime - t0) > TOL) {
        try {
          a.currentTime = t0;
        } catch (e) {}
      }
    });
  }

  let resyncTimer = null;

  function startResyncLoop(_songId) {
    // tímabundið disable-að til að forðast hiccups
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

    defaultAudio
      .play()
      .then(() => {
        defaultActive = true;
      })
      .catch(() => {});
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

    el.addEventListener("click", () => {
      handleFirstStemInteraction();

      const songId = track.songId || "–";
      const stemLabel = track.stemName || "Stem";

      if (currentSongId !== songId) {
        currentSongId = songId;
        activeStems.clear();
      }

      const isOn = el.classList.contains("is-active");
      if (isOn) activeStems.add(stemLabel);
      else activeStems.delete(stemLabel);

      setActiveSong(songId);
      renderStemList();
      showStatusBox();

      const anyActiveInSong = tracks.some(
        (t) => t.songId === songId && t.el.classList.contains("is-active")
      );

      if (anyActiveInSong) {
        startResyncLoop(songId); // no-op eins og er
      } else {
        stopResyncLoop();
      }
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
}
