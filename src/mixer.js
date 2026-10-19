// src/mixer.js
//
// Mixerinn á /permixer. Hver rás er sér <audio>-element og hvert element
// hefur sína eigin klukku, svo rásirnar ræsast ekki á sama augnabliki og
// reka í sundur með tímanum. Þess vegna:
//  - allar rásir eru stilltar á sama punkt og beðið eftir að ALLAR séu
//    tilbúnar áður en nokkur fer af stað (líka eftir spólun),
//  - lykkja mælir rek hverrar rásar gegn miðgildi rásanna og togar hana til
//    baka með örlítilli breytingu á playbackRate,
//  - ef ein rás bíður eftir gögnum stoppa allar og ræsast aftur saman.
// Styrkur, mute og solo fara í gegnum GainNode, ekki audio.volume.

const SYNC_INTERVAL = 200; // ms milli mælinga
const DEADBAND = 0.006; // rek undir 6 ms er látið kyrrt
const CORRECT_GAIN = 1.0; // hraðaleiðrétting á hverja sekúndu af reki
const MAX_NUDGE = 0.04; // aldrei meira en ±4 % hraðabreyting
const HARD_LIMIT = 0.25; // yfir 250 ms -> allar stoppa og ræsast saman
const EMA_ALPHA = 0.35;
const READY_TIMEOUT = 8000;
const FADE = 0.015;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = sorted.length >> 1;
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

// Bíður eftir atburði á elementinu; false ef villa eða tími rennur út.
function waitFor(audio, eventName, isDone, timeoutMs = READY_TIMEOUT) {
  return new Promise((resolve) => {
    if (isDone()) return resolve(true);
    let timer = null;
    const finish = (ok) => {
      clearTimeout(timer);
      audio.removeEventListener(eventName, onEvent);
      audio.removeEventListener("error", onError);
      resolve(ok);
    };
    const onEvent = () => {
      if (isDone()) finish(true);
    };
    const onError = () => finish(false);
    audio.addEventListener(eventName, onEvent);
    audio.addEventListener("error", onError);
    timer = setTimeout(() => finish(isDone()), timeoutMs);
  });
}

// Setur rásina á `time` og bíður þar til hún getur spilað án þess að stoppa.
async function prepare(audio, time) {
  const hasMeta = await waitFor(audio, "loadedmetadata", () => audio.readyState >= 1);
  if (!hasMeta) return false;

  if (Math.abs(audio.currentTime - time) > 0.001) {
    audio.currentTime = time;
  }
  await waitFor(audio, "seeked", () => !audio.seeking);

  // HAVE_ENOUGH_DATA helst. Rennur tíminn út er samt spilað (iOS hleður
  // pásuð element ekki alltaf svo langt) og sync-lykkjan grípur afganginn.
  await waitFor(audio, "canplaythrough", () => audio.readyState >= 4, 4000);
  return true;
}

export function setupMixer() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  let ctx = null;
  let current = null;
  let syncTimer = null;

  function ensureContext() {
    if (!ctx) ctx = new AudioCtx();
    if (ctx.state === "suspended") {
      ctx.resume().catch((err) => console.warn("mixer: resume failed", err));
    }
  }

  // -----------------------------------------------------------
  // Lög og rásir
  // -----------------------------------------------------------
  const songs = Array.from(document.querySelectorAll("[data-song]"))
    .map(createSong)
    .filter(Boolean);

  function createSong(el) {
    const song = {
      id: el.getAttribute("data-song"),
      el,
      button: el.querySelector("[data-play-button]"),
      progress: el.querySelector("[data-progress-bar]"),
      tracks: [],
      out: null,
      playing: false,
      starting: false,
      position: 0,
      duration: 0,
      token: 0,
      dragging: false,
    };

    song.tracks = Array.from(el.querySelectorAll("[data-track-url]"))
      .map((trackEl) => createTrack(song, trackEl))
      .filter(Boolean);

    if (!song.tracks.length) return null;

    song.button?.addEventListener("click", () => {
      if (current === song && song.playing) pause(song);
      else play(song);
    });

    if (song.progress) {
      song.progress.addEventListener("input", () => {
        song.dragging = true;
      });
      song.progress.addEventListener("change", (e) => {
        song.dragging = false;
        seek(song, (parseFloat(e.target.value) / 100) * song.duration);
      });
    }

    return song;
  }

  function createTrack(song, el) {
    const url = (el.getAttribute("data-track-url") || "").trim();
    if (!url) return null;

    const volumeControl = el.querySelector("[data-volume-control]");
    const panControl = el.querySelector("[data-pan-control]");
    const muteButton = el.querySelector("[data-mute-button]");
    const soloButton = el.querySelector("[data-solo-button]");

    const track = {
      id: el.getAttribute("data-track-id"),
      el,
      url,
      audio: null,
      gain: null,
      panner: null,
      volume: volumeControl ? parseFloat(volumeControl.value) : 1,
      pan: panControl ? parseFloat(panControl.value) : 0,
      muted: false,
      soloed: false,
      dead: false,
      primed: false,
      drift: null,
    };

    volumeControl?.addEventListener("input", (e) => {
      track.volume = parseFloat(e.target.value);
      applyMix(song);
    });

    panControl?.addEventListener("input", (e) => {
      track.pan = parseFloat(e.target.value);
      if (track.panner) track.panner.pan.value = track.pan;
    });

    muteButton?.addEventListener("click", () => {
      track.muted = !track.muted;
      muteButton.classList.toggle("mute-active", track.muted);
      applyMix(song);
    });

    soloButton?.addEventListener("click", () => {
      track.soloed = !track.soloed;
      soloButton.classList.toggle("solo-active", track.soloed);
      applyMix(song);
    });

    return track;
  }

  // Elementin eru smíðuð við fyrstu spilun lagsins, ekki öll við init;
  // annars færu ~110 rásir að sækjast frá Dropbox í einu.
  function ensureAudio(song) {
    if (!song.out) {
      song.out = ctx.createGain();
      song.out.gain.value = 0;
      song.out.connect(ctx.destination);
    }

    song.tracks.forEach((track) => {
      if (track.audio) {
        if (!track.audio.getAttribute("src")) {
          track.dead = false;
          track.audio.src = track.url;
          track.audio.load();
        }
        return;
      }

      const audio = new Audio();
      audio.crossOrigin = "anonymous";
      audio.preload = "auto";
      audio.src = track.url;

      const source = ctx.createMediaElementSource(audio);
      track.gain = ctx.createGain();
      source.connect(track.gain);

      if (ctx.createStereoPanner) {
        track.panner = ctx.createStereoPanner();
        track.panner.pan.value = track.pan;
        track.gain.connect(track.panner);
        track.panner.connect(song.out);
      } else {
        track.gain.connect(song.out);
      }

      audio.addEventListener("loadedmetadata", () => {
        song.duration = Math.max(song.duration, audio.duration || 0);
      });
      audio.addEventListener("waiting", () => onStall(song));
      audio.addEventListener("ended", () => onEnded(song));
      audio.addEventListener("error", () => {
        if (!audio.getAttribute("src")) return; // afhlaðið viljandi
        track.dead = true;
        console.warn(`mixer: track ${track.id} failed to load`, track.url);
      });

      track.audio = audio;
    });

    applyMix(song, true);
  }

  function liveTracks(song) {
    return song.tracks.filter((t) => t.audio && !t.dead);
  }

  function applyMix(song, immediate = false) {
    const anySolo = song.tracks.some((t) => t.soloed);
    song.tracks.forEach((t) => {
      if (!t.gain) return;
      const value = t.muted || (anySolo && !t.soloed) ? 0 : t.volume;
      if (immediate) t.gain.gain.value = value;
      else t.gain.gain.setTargetAtTime(value, ctx.currentTime, FADE);
    });
  }

  function fadeOut(song) {
    song.out?.gain.setTargetAtTime(0, ctx.currentTime, FADE / 2);
  }

  function fadeIn(song) {
    song.out?.gain.setTargetAtTime(1, ctx.currentTime, FADE);
  }

  function songTime(song) {
    const times = liveTracks(song)
      .filter((t) => !t.audio.ended)
      .map((t) => t.audio.currentTime);
    return times.length ? median(times) : song.position;
  }

  function setButton(song, state) {
    if (!song.button) return;
    song.button.classList.toggle("playing", state === "playing");
    song.button.classList.toggle("loading", state === "loading");
  }

  function updateProgress(song, time) {
    if (!song.progress || song.dragging || !song.duration) return;
    song.progress.value = (time / song.duration) * 100;
  }

  // -----------------------------------------------------------
  // Spilun
  // -----------------------------------------------------------
  function play(song) {
    ensureContext();

    if (current && current !== song) unload(current);
    current = song;
    ensureAudio(song);

    // iOS leyfir bara play() innan smellsins sjálfs; hér er það kallað
    // hljóðlaust (song.out er á 0) og rásirnar svo stilltar saman.
    liveTracks(song).forEach((t) => {
      if (t.primed) return;
      t.primed = true;
      t.audio.play().catch(() => {});
    });

    startAligned(song, song.position);
  }

  async function startAligned(song, time) {
    const token = ++song.token;
    song.playing = true;
    song.starting = true;
    stopSync();
    setButton(song, "loading");
    fadeOut(song);

    const tracks = liveTracks(song);
    tracks.forEach((t) => t.audio.pause());

    const ready = await Promise.all(tracks.map((t) => prepare(t.audio, time)));
    if (token !== song.token) return;

    ready.forEach((ok, i) => {
      if (!ok) {
        tracks[i].dead = true;
        console.warn(`mixer: track ${tracks[i].id} not ready, skipping it`);
      }
    });

    const startable = liveTracks(song);
    if (!startable.length) {
      console.error(`mixer: no tracks could start for ${song.id}`);
      song.playing = false;
      song.starting = false;
      setButton(song, null);
      return;
    }

    // Öll play() í sömu lotu; það sem eftir stendur af misræmi tekur
    // sync-lykkjan.
    startable.forEach((t) => {
      t.drift = null;
      t.audio.playbackRate = 1;
    });
    await Promise.all(
      startable.map((t) =>
        t.audio.play().catch((err) => {
          if (err?.name !== "AbortError") {
            console.warn(`mixer: track ${t.id} play failed`, err);
          }
        })
      )
    );
    if (token !== song.token) return;

    song.starting = false;
    fadeIn(song);
    setButton(song, "playing");
    startSync(song);
  }

  function pause(song) {
    song.token += 1;
    song.position = songTime(song);
    song.playing = false;
    song.starting = false;
    stopSync();
    fadeOut(song);
    setButton(song, null);

    const token = song.token;
    setTimeout(() => {
      if (token !== song.token) return;
      liveTracks(song).forEach((t) => t.audio.pause());
    }, 60);
  }

  // Lag sem skipt er frá er afhlaðið svo minnið fyllist ekki af stemum.
  function unload(song) {
    song.token += 1;
    song.playing = false;
    song.starting = false;
    song.position = 0;
    stopSync();
    if (song.out) song.out.gain.value = 0;
    setButton(song, null);
    if (song.progress) song.progress.value = 0;

    song.tracks.forEach((t) => {
      if (!t.audio) return;
      t.audio.pause();
      t.audio.removeAttribute("src");
      t.audio.load();
      t.drift = null;
    });
  }

  function seek(song, time) {
    if (!Number.isFinite(time) || !song.duration) {
      updateProgress(song, song.position);
      return;
    }
    const safeTime = clamp(time, 0, Math.max(0, song.duration - 0.05));
    song.position = safeTime;
    updateProgress(song, safeTime);
    if (current === song && song.playing) startAligned(song, safeTime);
  }

  function onStall(song) {
    if (current !== song || !song.playing || song.starting) return;
    startAligned(song, songTime(song));
  }

  function onEnded(song) {
    if (current !== song || !song.playing) return;
    const finished = liveTracks(song).every(
      (t) => t.audio.ended || t.audio.currentTime >= (t.audio.duration || 0) - 0.3
    );
    if (!finished) return;

    pause(song);
    song.position = 0;
    updateProgress(song, 0);
  }

  // -----------------------------------------------------------
  // Sync-lykkjan
  // -----------------------------------------------------------
  function startSync(song) {
    stopSync();
    syncTimer = setInterval(() => syncTick(song), SYNC_INTERVAL);
  }

  function stopSync() {
    if (syncTimer) {
      clearInterval(syncTimer);
      syncTimer = null;
    }
  }

  function syncTick(song) {
    if (current !== song || !song.playing || song.starting) return;

    // Rásir sem eru að klárast eru utan mælingar (stemin eru misjafnlega löng)
    const tracks = liveTracks(song).filter(
      (t) =>
        !t.audio.ended &&
        !t.audio.paused &&
        t.audio.currentTime < (t.audio.duration || Infinity) - 0.5
    );
    const times = tracks.map((t) => t.audio.currentTime);
    const ref = times.length ? median(times) : songTime(song);
    updateProgress(song, ref);
    if (tracks.length < 2) return;

    let realign = false;

    tracks.forEach((t, i) => {
      const raw = times[i] - ref;
      if (Math.abs(raw) > HARD_LIMIT) {
        realign = true;
        return;
      }

      t.drift = t.drift === null ? raw : t.drift + EMA_ALPHA * (raw - t.drift);

      const rate =
        Math.abs(t.drift) < DEADBAND
          ? 1
          : 1 - clamp(t.drift * CORRECT_GAIN, -MAX_NUDGE, MAX_NUDGE);

      if (Math.abs(t.audio.playbackRate - rate) > 0.0005) {
        t.audio.playbackRate = rate;
      }
    });

    if (realign) startAligned(song, ref);
  }

  console.log(`mixer: ready (${songs.length} songs, synced)`);
}
