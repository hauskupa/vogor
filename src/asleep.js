// src/asleep.js
// -------------------------------------------------------------
// Asleep artwork logic: positions + default drone + status UI
// + old-school mini waveform + preload + resync
// -------------------------------------------------------------

import { FLY_SLOTS, SONG_LAYOUT } from "./asleepPositions.js";

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
// Stem-nafn úr data-attribute eða skráarheiti
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

  // fjarlægja prefixes eins og Mars18_, Palli_, etc.
  base = base.replace(/^(Mars|Palli|Agust|Siggi)[0-9\-_]*/i, "");
  base = base.replace(/[_-]+/g, " ").trim();

  return base.charAt(0).toUpperCase() + base.slice(1);
}

// -------------------------------------------------------------
// 🎛 WAVEFORM HELPER (global state fyrir einn canvas)
// -------------------------------------------------------------
let audioCtx = null;
let analyser = null;
let waveformData = null;
let waveCanvas = null;
let waveCtx = null;
let waveSource = null;
let waveRunning = false;

function initWaveCanvas(canvas) {
  if (!canvas) return;
  waveCanvas = canvas;
  waveCtx = canvas.getContext("2d");
}

function getAudioElementFromTrack(track) {
  // reyna nokkur property-nöfn til að vera safe
  return (
    track.audio ||
    track.audioEl ||
    track.media ||
    track._audio ||
    null
  );
}

function startWaveformForTrack(track) {
  if (!waveCanvas || !waveCtx) return;

  const audioEl = getAudioElementFromTrack(track);
  if (!audioEl) {
    console.warn("asleep: no audio element for waveform");
    return;
  }

  // ✅ Sleppum waveform ef hljóðið er ekki á sama origin (t.d. Dropbox)
  const src = audioEl.currentSrc || audioEl.src || "";
  const sameOrigin = src.startsWith(window.location.origin);
  if (!sameOrigin) {
    // hljóð spilar samt, við bara teiknum ekki waveform til að forðast CORS-warnings
    return;
  }

  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    audioCtx = new AC();
  }

  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  if (!analyser) {
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 512;
    waveformData = new Uint8Array(analyser.fftSize);
  }

  // disconnect previous source ef til
  if (waveSource) {
    try { waveSource.disconnect(); } catch (e) {}
  }

  // ekki leyfilegt að kalla createMediaElementSource tvisvar á sama element
  if (audioEl._waveSource) {
    waveSource = audioEl._waveSource;
  } else {
    try {
      waveSource = audioCtx.createMediaElementSource(audioEl);
      audioEl._waveSource = waveSource;
    } catch (e) {
      console.warn("asleep: cannot create media element source", e);
      return;
    }
  }

  waveSource.connect(analyser);
  analyser.connect(audioCtx.destination);

  if (!waveRunning) {
    waveRunning = true;
    requestAnimationFrame(renderWaveform);
  }
}


function stopWaveform() {
  waveRunning = false;
  if (waveCtx && waveCanvas) {
    waveCtx.clearRect(0, 0, waveCanvas.width, waveCanvas.height);
  }
}

function renderWaveform() {
  if (!waveRunning || !analyser || !waveCtx || !waveCanvas) return;

  analyser.getByteTimeDomainData(waveformData);

  const { width, height } = waveCanvas;
  waveCtx.clearRect(0, 0, width, height);
  waveCtx.lineWidth = 2;
  waveCtx.strokeStyle = "rgba(255,255,255,0.9)";

  waveCtx.beginPath();
  const slice = width / waveformData.length;
  let x = 0;

  for (let i = 0; i < waveformData.length; i++) {
    const v = waveformData[i] / 128.0 - 1.0;
    const y = height / 2 + v * (height * 0.4);

    if (i === 0) waveCtx.moveTo(x, y);
    else waveCtx.lineTo(x, y);

    x += slice;
  }

  waveCtx.stroke();
  requestAnimationFrame(renderWaveform);
}

// -------------------------------------------------------------
// MAIN
// -------------------------------------------------------------
export function setupAsleepArtwork(multitrack) {
  if (!multitrack) return;

  const { container, tracks, ensureStarted } = multitrack;

  const uiSong = container.querySelector("[data-mt-activesong]");
  const uiStemList = container.querySelector("[data-mt-activestems]");
  const waveCanvasEl = container.querySelector("[data-waveform-canvas]");
  initWaveCanvas(waveCanvasEl);
  const uiStatus = container.querySelector(".asleep-status"); // 👈 BÆTA VIÐ

  // Reikna stem-nöfn einu sinni
  tracks.forEach((track) => {
    track.stemName = getStemName(track);
  });

  // -----------------------------------------------------------
  // 🔁 PRELOAD ALL AUDIO ELEMENTS
  // -----------------------------------------------------------
  function preloadAllAudio() {
    tracks.forEach((t) => {
      const audio = getAudioElementFromTrack(t);
      if (!audio) return;

      audio.preload = "auto";
      if (audio.readyState < 3) {
        audio.load();
      }
    });
  }

  // -----------------------------------------------------------
  // ⏱ RESYNC STEMS Í EINU LAGI
  // -----------------------------------------------------------
  function resyncSong(songId) {
    const songTracks = tracks.filter(
      (t) => t.songId === songId && getAudioElementFromTrack(t)
    );
    if (!songTracks.length) return;

    const masterAudio = getAudioElementFromTrack(songTracks[0]);
    if (!masterAudio) return;

    const masterTime = masterAudio.currentTime;

    songTracks.forEach((t) => {
      const a = getAudioElementFromTrack(t);
      if (!a || a === masterAudio) return;

      if (Math.abs(a.currentTime - masterTime) > 0.04) {
        try {
          a.currentTime = masterTime;
        } catch (err) {
          // sum devices geta verið pirruð á seek — bara hunsa
        }
      }
    });
  }

  // --------------------------
  // POSITION FLIES
  // --------------------------
  function applyFlyPositions() {
    const perSong = new Map();

    tracks.forEach((t) => {
      if (!t.songId) return;
      if (!perSong.has(t.songId)) perSong.set(t.songId, []);
      perSong.get(t.songId).push(t.el);
    });

    perSong.forEach((els, songId) => {
      const layout = SONG_LAYOUT[songId];
      if (!layout) return;

      const start = layout.slotStart;

      for (let i = 0; i < els.length; i++) {
        const slot = FLY_SLOTS[start + i];
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
  preloadAllAudio(); // 🔁 pre-load strax eftir að við höfum mappað allt

  // --------------------------
  // DEFAULT DRONE
  // --------------------------
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
        console.log("asleep: default mix playing");
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
    console.log("asleep: default mix stopped");
  }

  // --------------------------
  // STATUS UI HELPERS
  // --------------------------
  function setActiveSong(songId) {
    if (uiSong) uiSong.textContent = songId || "–";
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

  // --------------------------
  // HOVER HIGHLIGHT
  // --------------------------
  function highlightSong(songId) {
    tracks.forEach((t) => {
      if (t.songId === songId) t.el.classList.add("song-hover");
      else t.el.classList.remove("song-hover");
    });
  }

  function clearSongHighlight() {
    tracks.forEach((t) => t.el.classList.remove("song-hover"));
  }

  // --------------------------
  // DROP DRONE ON FIRST CLICK
  // --------------------------
  let hasUserInteractedWithStems = false;

  function handleFirstStemInteraction() {
    if (hasUserInteractedWithStems) return;
    hasUserInteractedWithStems = true;

    dropDefault();
    ensureStarted();
    // sýna status-boxið við fyrstu interaction 👇
    if (uiStatus) {
      uiStatus.classList.add("is-visible");
    }
  }

  // --------------------------
  // BIND INTERACTIONS
  // --------------------------
  tracks.forEach((track) => {
    const el = track.el;

    el.addEventListener("click", () => {
      handleFirstStemInteraction();

      const songId = track.songId || "–";
      const stemLabel = track.stemName || "Stem";

      // ef user hoppar í annað lag -> clear lista
      if (currentSongId !== songId) {
        currentSongId = songId;
        activeStems.clear();
      }

      // er stem virkt eftir click? (multitrack setur .is-active)
      const isOn = el.classList.contains("is-active");
      if (isOn) activeStems.add(stemLabel);
      else activeStems.delete(stemLabel);

      setActiveSong(songId);
      renderStemList();

      // mini oscilloscope fyrir fyrsta stem lagsins
      const firstStem = tracks.find((t) => t.songId === songId);
      if (firstStem) startWaveformForTrack(firstStem);

      // halda öllum stems í sync við master
      resyncSong(songId);
    });

    el.addEventListener("mouseenter", () => highlightSong(track.songId));
    el.addEventListener("mouseleave", clearSongHighlight);
  });

  // --------------------------
  // STOP BUTTON
  // --------------------------
  const stopBtn = container.querySelector("[data-mt-stop]");
  stopBtn?.addEventListener("click", () => {
    dropDefault();
    stopWaveform();
  });

  console.log("asleep: ready (slots + drone + status + waveform + preload + resync)");
}
