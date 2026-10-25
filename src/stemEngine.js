// src/stemEngine.js
//
// Spilar mörg stem í takti. Hver rás er sér <audio>-element og hvert
// element hefur sína eigin klukku, svo rásirnar ræsast ekki á sama
// augnabliki og reka í sundur með tímanum. Þess vegna:
//  - allar rásir eru stilltar á sama punkt og beðið eftir að ALLAR séu
//    tilbúnar áður en nokkur fer af stað (líka eftir spólun),
//  - lykkja mælir rek hverrar rásar gegn miðgildi rásanna og togar hana til
//    baka með örlítilli breytingu á playbackRate,
//  - ef ein rás bíður eftir gögnum stoppa allar og ræsast aftur saman.
// Styrkur, mute og solo fara í gegnum GainNode, ekki audio.volume.
//
// Vélin veit ekkert um DOM-ið. Lag er { id, tracks: [{ id, url }] };
// viðmótið hlustar á atburði: "state" ({ songId, state }: idle | loading |
// playing | paused), "time" ({ songId, time, duration }) og "ended".
//
// Notuð af gamla mixernum (mixer.js), æfingasíðunni (permixer.js), album
// mixernum (albumMixerEngine.js) og multitrack á /asleep (multitrackplayer.js).
// Valkostir createStemEngine:
//   context         AudioContext sem á að nota (annars búinn til við fyrstu notkun)
//   destination     hnútur sem lögin tengjast í (annars context.destination)
//   channel         (ctx, track) => { input, output }: rásakeðja á hverja rás.
//                   Sjálfgefið bara pan. Album mixerinn setur EQ og tape hér.
//   preservesPitch  false: hraðabreyting (setSpeed) breytir líka tónhæð, eins og teip
//   unloadPrevious  false: fyrra lag heldur gögnunum þegar skipt er (multitrack)
//   mixFade         tímafasti í sek. þegar styrk, mute eða solo er breytt

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

export function createStemEngine({
  context = null,
  destination = null,
  channel = null,
  preservesPitch = true,
  unloadPrevious = true,
  mixFade = FADE,
} = {}) {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  const events = new EventTarget();
  const songs = new Map();
  let ctx = context;
  let current = null;
  let syncTimer = null;
  // Hraði allra rása (setSpeed). Sync-lykkjan nuddar í kringum hann.
  let speed = 1;

  function emit(type, detail) {
    events.dispatchEvent(new CustomEvent(type, { detail }));
  }

  function setState(song, state) {
    if (song.state === state) return;
    song.state = state;
    emit("state", { songId: song.id, state });
  }

  // Context má búa til hvenær sem er (hann byrjar þá í bið), en bara ræsa
  // innan smells, svo resumeContext er kallað úr select/play.
  function ensureContext() {
    if (!ctx) ctx = new AudioCtx();
    return ctx;
  }

  function resumeContext() {
    ensureContext();
    if (ctx.state === "suspended") {
      ctx.resume().catch((err) => console.warn("stems: resume failed", err));
    }
  }

  // -----------------------------------------------------------
  // Lög og rásir
  // -----------------------------------------------------------

  // Skráir lagið og stöðu rásanna, en sækir ekkert fyrr en það er spilað.
  function define(def) {
    if (songs.has(def.id)) return songs.get(def.id);
    const song = {
      id: def.id,
      tracks: def.tracks
        .filter((t) => t.url)
        .map((t) => ({
          id: t.id,
          url: t.url,
          audio: null,
          gain: null,
          panner: null,
          channel: null,
          volume: t.volume ?? 1,
          pan: t.pan ?? 0,
          muted: t.muted ?? false,
          soloed: false,
          dead: false,
          primed: false,
          drift: null,
        })),
      out: null,
      playing: false,
      starting: false,
      position: 0,
      duration: 0,
      token: 0,
      state: "idle",
    };
    songs.set(song.id, song);
    return song;
  }

  // Elementin eru smíðuð við fyrstu notkun lagsins, ekki öll við init;
  // annars færu öll stem allra laga að sækjast í einu.
  function build(song) {
    ensureContext();
    if (!song.out) {
      song.out = ctx.createGain();
      song.out.gain.value = 0;
      song.out.connect(destination || ctx.destination);
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
      if (!preservesPitch) {
        audio.preservesPitch = false;
        audio.mozPreservesPitch = false;
        audio.webkitPreservesPitch = false;
      }
      audio.src = track.url;

      // uppspretta -> rásakeðja -> styrkur (mute/solo) -> lagið
      const source = ctx.createMediaElementSource(audio);
      if (channel) {
        track.channel = channel(ctx, track);
      } else if (ctx.createStereoPanner) {
        track.panner = ctx.createStereoPanner();
        track.panner.pan.value = track.pan;
        track.channel = { input: track.panner, output: track.panner };
      }
      track.gain = ctx.createGain();
      if (track.channel) {
        source.connect(track.channel.input);
        track.channel.output.connect(track.gain);
      } else {
        source.connect(track.gain);
      }
      track.gain.connect(song.out);

      audio.addEventListener("loadedmetadata", () => {
        song.duration = Math.max(song.duration, audio.duration || 0);
        emitTime(song, song.position);
      });
      audio.addEventListener("waiting", () => onStall(song));
      audio.addEventListener("ended", () => onEnded(song));
      audio.addEventListener("error", () => {
        if (!audio.getAttribute("src")) return; // afhlaðið viljandi
        track.dead = true;
        console.warn(`stems: track ${track.id} failed to load`, track.url);
      });

      track.audio = audio;
    });

    applyMix(song, true);
  }

  function liveTracks(song) {
    return song.tracks.filter((t) => t.audio && !t.dead);
  }

  function applyMix(song, immediate = false) {
    if (!ctx) return;
    const anySolo = song.tracks.some((t) => t.soloed);
    song.tracks.forEach((t) => {
      if (!t.gain) return;
      const value = t.muted || (anySolo && !t.soloed) ? 0 : t.volume;
      if (immediate) t.gain.gain.value = value;
      else t.gain.gain.setTargetAtTime(value, ctx.currentTime, mixFade);
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

  function emitTime(song, time) {
    emit("time", { songId: song.id, time, duration: song.duration });
  }

  // -----------------------------------------------------------
  // Spilun
  // -----------------------------------------------------------

  // Gerir lagið að því virka og byrjar að sækja það; fyrra lag er afhlaðið
  // svo minnið fyllist ekki af stemum.
  function select(songId) {
    const song = songs.get(songId);
    if (!song) return null;
    resumeContext();
    if (current && current !== song) {
      if (unloadPrevious) unload(current);
      else stop(current);
    }
    current = song;
    build(song);
    return song;
  }

  // Byrjar að sækja lag án þess að velja það, t.d. næsta lag á plötunni
  function load(songId) {
    const song = songs.get(songId);
    if (!song) return null;
    build(song);
    return song;
  }

  function play(songId = current?.id) {
    const song = select(songId);
    if (!song || !song.tracks.length) return;

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
    setState(song, "loading");
    fadeOut(song);

    const tracks = liveTracks(song);
    tracks.forEach((t) => t.audio.pause());

    const ready = await Promise.all(tracks.map((t) => prepare(t.audio, time)));
    if (token !== song.token) return;

    ready.forEach((ok, i) => {
      if (!ok) {
        tracks[i].dead = true;
        console.warn(`stems: track ${tracks[i].id} not ready, skipping it`);
      }
    });

    const startable = liveTracks(song);
    if (!startable.length) {
      console.error(`stems: no tracks could start for ${song.id}`);
      song.playing = false;
      song.starting = false;
      setState(song, "idle");
      return;
    }

    // Öll play() í sömu lotu; það sem eftir stendur af misræmi tekur
    // sync-lykkjan.
    startable.forEach((t) => {
      t.drift = null;
      t.audio.playbackRate = speed;
    });
    await Promise.all(
      startable.map((t) =>
        t.audio.play().catch((err) => {
          if (err?.name !== "AbortError") {
            console.warn(`stems: track ${t.id} play failed`, err);
          }
        })
      )
    );
    if (token !== song.token) return;

    song.starting = false;
    fadeIn(song);
    setState(song, "playing");
    startSync(song);
  }

  function pause(songId = current?.id) {
    const song = songs.get(songId);
    if (!song) return;
    song.token += 1;
    if (song.playing) song.position = songTime(song);
    song.playing = false;
    song.starting = false;
    stopSync();
    if (ctx) fadeOut(song);
    setState(song, "paused");

    const token = song.token;
    setTimeout(() => {
      if (token !== song.token) return;
      liveTracks(song).forEach((t) => t.audio.pause());
    }, 60);
  }

  // Stoppar lagið og setur það á byrjun, en heldur gögnunum
  function stop(song) {
    song.token += 1;
    song.playing = false;
    song.starting = false;
    song.position = 0;
    if (current === song) stopSync();
    if (song.out) song.out.gain.value = 0;
    setState(song, "idle");
    emitTime(song, 0);
    song.tracks.forEach((t) => {
      if (!t.audio) return;
      t.audio.pause();
      t.drift = null;
    });
  }

  // Stoppar lagið og sleppir gögnunum, svo minnið fyllist ekki af stemum
  function unload(song) {
    stop(song);
    song.tracks.forEach((t) => {
      if (!t.audio) return;
      t.audio.removeAttribute("src");
      t.audio.load();
      t.primed = false;
    });
  }

  function seek(time, songId = current?.id) {
    const song = songs.get(songId);
    if (!song || !Number.isFinite(time)) return;
    const end = song.duration ? song.duration - 0.05 : Infinity;
    const safeTime = clamp(time, 0, Math.max(0, end));
    song.position = safeTime;
    emitTime(song, safeTime);
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

    pause(song.id);
    song.position = 0;
    emitTime(song, 0);
    emit("ended", { songId: song.id });
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
    emitTime(song, ref);
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
        speed *
        (Math.abs(t.drift) < DEADBAND ? 1 : 1 - clamp(t.drift * CORRECT_GAIN, -MAX_NUDGE, MAX_NUDGE));

      if (Math.abs(t.audio.playbackRate - rate) > 0.0005) {
        t.audio.playbackRate = rate;
      }
    });

    if (realign) startAligned(song, ref);
  }

  // -----------------------------------------------------------
  // Mix
  // -----------------------------------------------------------
  function setTrack(songId, trackId, patch) {
    const song = songs.get(songId);
    const track = song?.tracks.find((t) => t.id === trackId);
    if (!track) return;
    Object.assign(track, patch);
    if ("pan" in patch && track.panner) track.panner.pan.value = track.pan;
    applyMix(song);
  }

  function resetMix(songId) {
    const song = songs.get(songId);
    if (!song) return;
    song.tracks.forEach((t) => {
      t.volume = 1;
      t.pan = 0;
      t.muted = false;
      t.soloed = false;
      if (t.panner) t.panner.pan.value = 0;
    });
    applyMix(song);
  }

  // Á meðan lag er ekki í spilun tekur næsta ræsing hraðann upp
  function setSpeed(value) {
    speed = clamp(value, 0.5, 2);
    if (!current) return;
    liveTracks(current).forEach((t) => {
      t.drift = null;
      t.audio.playbackRate = speed;
    });
  }

  return {
    // Skilar falli sem hættir að hlusta
    on: (type, fn) => {
      const handler = (e) => fn(e.detail);
      events.addEventListener(type, handler);
      return () => events.removeEventListener(type, handler);
    },
    define,
    select,
    load,
    play,
    pause,
    stop: (songId = current?.id) => {
      const song = songs.get(songId);
      if (song) stop(song);
    },
    seek,
    setSpeed,
    setTrack,
    resetMix,
    getSong: (songId) => songs.get(songId) || null,
    getCurrentId: () => current?.id ?? null,
    getTime: (songId = current?.id) => {
      const song = songs.get(songId);
      if (!song) return 0;
      return song.playing && !song.starting ? songTime(song) : song.position;
    },
    isPlaying: (songId = current?.id) => !!songs.get(songId)?.playing,
  };
}
