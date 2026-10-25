import { createStemEngine } from "./stemEngine.js";

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

// Unity-markið situr á 0.7, þ.e. þar sem borðið sýnir 7.0 — eins og á
// alvöru borði þar sem strikið er ofarlega í ferlinum og nokkur dB eftir
// fyrir ofan. Í sjálfgefinni stöðu skila stemin því mixinu óbreyttu.
const UNITY_FADER = 0.7;

function faderGain(position) {
  return clamp(position, 0, 1) / UNITY_FADER;
}

function createTapeCurve(amount = 0) {
  const samples = 2048;
  const curve = new Float32Array(samples);
  const drive = clamp(amount, 0, 1);
  // Enginn grunnur: amount 0 skilar beinni línu. Fastur grunnur hér gerði
  // hnappinn í botni jafn brenglaðan og í toppi.
  const k = drive * 24;

  for (let i = 0; i < samples; i += 1) {
    const x = (i / (samples - 1)) * 2 - 1;
    curve[i] = ((1 + k) * x) / (1 + k * Math.abs(x));
  }

  return curve;
}

function applyTrackColor(nodes, audioContext, gain = 0) {
  if (!nodes || !audioContext) return;

  const normalizedGain = clamp(gain, 0, 2) / 2;
  const drive = normalizedGain * normalizedGain;
  const inputGain = 1 + drive * 0.85;
  const outputTrim = 1 / (1 + drive * 0.2);
  const toneFrequency = 17500 - drive * 1200;
  const threshold = -18 - drive * 3;
  // Hlutfall 1 er hrein framhjáhlaup, svo núllstaðan þjappar ekki neitt.
  // Toppurinn lendir þar sem hann var (2.45).
  const ratio = 1 + drive * 1.45;
  const knee = 22 - drive * 2;

  // Keep the neutral position close to clean and make coloration ramp in gradually.
  nodes.gainNode.gain.setValueAtTime(1, audioContext.currentTime);
  nodes.colorInNode.gain.setValueAtTime(inputGain, audioContext.currentTime);
  nodes.compressorNode.threshold.setValueAtTime(threshold, audioContext.currentTime);
  nodes.compressorNode.ratio.setValueAtTime(ratio, audioContext.currentTime);
  nodes.compressorNode.knee.setValueAtTime(knee, audioContext.currentTime);
  nodes.makeupNode.gain.setValueAtTime(outputTrim, audioContext.currentTime);
  nodes.toneNode.frequency.setValueAtTime(toneFrequency, audioContext.currentTime);
  nodes.saturatorNode.curve = createTapeCurve(drive * 0.35);
}

// Ein rásakeðja. Bæði lifandi spilunin og offline-útflutningurinn smíða hana
// hér, svo útflutta mixið geti ekki hljómað öðruvísi en það sem heyrðist.
// Uppspretta rásarinnar er ólík — media element í rauntíma, buffer offline —
// svo hún tengist utan frá inn í `input`.
export function createChannelChain(audioContext) {
  const gainNode = audioContext.createGain();
  const colorInNode = audioContext.createGain();
  const compressorNode = audioContext.createDynamicsCompressor();
  const eqLowNode = audioContext.createBiquadFilter();
  const eqHighNode = audioContext.createBiquadFilter();
  const toneNode = audioContext.createBiquadFilter();
  const saturatorNode = audioContext.createWaveShaper();
  const makeupNode = audioContext.createGain();
  const panNode = audioContext.createStereoPanner();
  const faderNode = audioContext.createGain();

  gainNode.gain.value = 1;
  colorInNode.gain.value = 1;
  compressorNode.threshold.value = -18;
  compressorNode.knee.value = 22;
  compressorNode.ratio.value = 1;
  compressorNode.attack.value = 0.01;
  compressorNode.release.value = 0.08;
  eqLowNode.type = "lowshelf";
  eqLowNode.frequency.value = 180;
  eqLowNode.gain.value = 0;
  eqHighNode.type = "highshelf";
  eqHighNode.frequency.value = 3200;
  eqHighNode.gain.value = 0;
  toneNode.type = "lowpass";
  toneNode.frequency.value = 17500;
  toneNode.Q.value = 0.0001;
  saturatorNode.curve = createTapeCurve(0);
  saturatorNode.oversample = "2x";
  makeupNode.gain.value = 1;
  panNode.pan.value = 0;
  faderNode.gain.value = faderGain(UNITY_FADER);

  gainNode.connect(colorInNode);
  colorInNode.connect(compressorNode);
  compressorNode.connect(eqLowNode);
  eqLowNode.connect(eqHighNode);
  eqHighNode.connect(toneNode);
  toneNode.connect(saturatorNode);
  saturatorNode.connect(makeupNode);
  makeupNode.connect(panNode);
  panNode.connect(faderNode);

  const nodes = {
    gainNode,
    colorInNode,
    compressorNode,
    eqLowNode,
    eqHighNode,
    toneNode,
    saturatorNode,
    makeupNode,
    panNode,
    faderNode,
  };

  return { input: gainNode, output: faderNode, nodes };
}

// Setur heila rásarstöðu á keðjuna í einu. Offline-útflutningurinn notar þetta
// til að endurskapa nákvæmlega þær stillingar sem stóðu á borðinu.
export function applyChannelState(nodes, audioContext, state = {}) {
  if (!nodes || !audioContext) return;

  const at = audioContext.currentTime;
  applyTrackColor(nodes, audioContext, clamp(state.gain ?? 0, 0, 2));
  nodes.eqLowNode.gain.setValueAtTime(clamp(state.eqLow ?? 0, -1, 1) * 12, at);
  nodes.eqHighNode.gain.setValueAtTime(clamp(state.eqHigh ?? 0, -1, 1) * 12, at);
  nodes.panNode.pan.setValueAtTime(clamp(state.pan ?? 0, -1, 1), at);
  nodes.faderNode.gain.setValueAtTime(faderGain(state.fader ?? UNITY_FADER), at);
}

export { faderGain, UNITY_FADER };


// Vélin á bak við album mixerinn (albumMixer.js). Spilunin sjálf og
// samstilling rásanna er í stemEngine.js, sama vél og æfingasíðan notar:
// allar rásir bíða hver eftir annarri áður en þær fara af stað, rek er mælt
// gegn miðgildi rásanna og leiðrétt mjúklega, og ef ein rás hikstar stoppa
// allar og ræsast aftur saman. Hér bætist við það sem er sérstakt fyrir
// borðið: rásakeðjan (EQ, tape, pan, fader), mælar, master og pitch.
//
// Viðmótið talar við þetta eins og áður: loadSong, play, pause, stop, seek,
// setTrack* o.s.frv., og hlustar á songchange, timeupdate, playstatechange,
// songended, pitchchange, masterchange og trackchange.
export function createAlbumMixerEngine({ songs = [] } = {}) {
  const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContextCtor();
  const eventTarget = new EventTarget();
  const masterGain = audioContext.createGain();

  // Staðan á sleðanum er geymd sér; hnútinn ber unity-leiðrétta styrkinn.
  let masterPosition = UNITY_FADER;
  masterGain.gain.value = faderGain(masterPosition);
  masterGain.connect(audioContext.destination);

  let currentSongId = null;
  let currentPitch = 1;

  const stems = createStemEngine({
    context: audioContext,
    destination: masterGain,
    // Pitch-hnappurinn hægir á teipinu og lækkar tóninn, eins og á alvöru tæki
    preservesPitch: false,
    // Sama rásakeðja og útflutningurinn notar, auk mælis
    channel: (ctx, stemTrack) => {
      const chain = createChannelChain(ctx);
      const analyserNode = ctx.createAnalyser();
      analyserNode.fftSize = 256;
      analyserNode.smoothingTimeConstant = 0.82;
      chain.output.connect(analyserNode);
      applyTrackColor(chain.nodes, ctx, 0);
      stemTrack.nodes = { ...chain.nodes, analyserNode };
      return chain;
    },
  });

  function emit(type, detail = {}) {
    eventTarget.dispatchEvent(new CustomEvent(type, { detail }));
  }

  // Rásirnar eru smíðaðar við fyrstu notkun lagsins, ekki allar við init.
  // Annars myndi öll platan, 5 rásir sinnum 8 lög, byrja að sækjast í einu
  // og fyrsta lagið svelta í samkeppni um tengingarnar.
  const songDefs = new Map(songs.map((song) => [song.id, song]));
  const builtSongs = new Map();

  // Lagið eins og viðmótið sér það: gögnin úr CMS, staða hnappanna á hverri
  // rás, og audio-elementið og hnútarnir úr stemEngine.
  function ensureSong(songId) {
    if (builtSongs.has(songId)) return builtSongs.get(songId);
    const def = songDefs.get(songId);
    if (!def) return null;

    stems.define({ id: def.id, tracks: def.tracks.map((t) => ({ id: t.id, url: t.url })) });
    const stemSong = stems.load(def.id);
    const song = {
      ...def,
      tracks: def.tracks.map((track, index) => {
        const stemTrack = stemSong.tracks.find((t) => t.id === track.id);
        return {
          ...track,
          index,
          gain: 0,
          eqLow: 0,
          eqHigh: 0,
          pan: 0,
          fader: UNITY_FADER,
          audio: stemTrack?.audio || null,
          nodes: stemTrack?.nodes || null,
        };
      }),
    };
    builtSongs.set(def.id, song);
    return song;
  }

  function getCurrentSong() {
    return currentSongId ? builtSongs.get(currentSongId) || null : null;
  }

  function getCurrentTracks() {
    return getCurrentSong()?.tracks || [];
  }

  function isPlaying() {
    return currentSongId ? stems.isPlaying(currentSongId) : false;
  }

  function emitTimeUpdate() {
    emit("timeupdate", {
      songId: currentSongId,
      currentTime: stems.getTime(currentSongId),
      duration: stems.getSong(currentSongId)?.duration || 0,
    });
  }

  stems.on("state", ({ songId }) => {
    if (songId === currentSongId) emit("playstatechange", { isPlaying: isPlaying(), songId });
  });
  stems.on("time", ({ songId, time, duration }) => {
    if (songId === currentSongId) emit("timeupdate", { songId, currentTime: time, duration });
  });
  stems.on("ended", ({ songId }) => {
    if (songId === currentSongId) emit("songended", { songId, song: getCurrentSong() });
  });

  // -----------------------------------------------------------
  // Forhleðsla
  // -----------------------------------------------------------

  function whenReady(audio, timeout) {
    if (!audio || audio.readyState >= 3) return Promise.resolve();
    return new Promise((resolve) => {
      const done = () => {
        clearTimeout(timer);
        audio.removeEventListener("canplaythrough", done);
        audio.removeEventListener("error", done);
        resolve();
      };
      const timer = setTimeout(done, timeout);
      audio.addEventListener("canplaythrough", done);
      audio.addEventListener("error", done);
    });
  }

  // Byrjar að sækja lagið og bíður þar til allar rásir geta spilað, eða
  // `timeout` ms. Skilar true ef allt varð tilbúið.
  async function preload(songId, timeout = 3500) {
    const song = ensureSong(songId);
    if (!song) return false;
    stems.load(songId);
    await Promise.all(song.tracks.map((t) => whenReady(t.audio, timeout)));
    return isReady(songId);
  }

  function isReady(songId) {
    const song = builtSongs.get(songId);
    return Boolean(song?.tracks.length && song.tracks.every((t) => t.audio && t.audio.readyState >= 3));
  }

  // -----------------------------------------------------------
  // Spilun
  // -----------------------------------------------------------

  async function loadSong(songId, { autoplay = false } = {}) {
    const song = ensureSong(songId);
    if (!song) return null;

    const resume = autoplay || isPlaying();
    if (currentSongId !== songId) {
      currentSongId = songId;
      // Fyrra lagið stoppar og sleppir gögnunum
      stems.select(songId);
      emit("songchange", { songId, song });
      emitTimeUpdate();
    }

    if (resume) await play();
    return song;
  }

  // Leysist þegar spilun er hafin (eða notandinn hætti við). Hafnar ef engin
  // rás gat farið af stað.
  function untilStarted(songId) {
    return new Promise((resolve, reject) => {
      const check = () => {
        const state = stems.getSong(songId)?.state;
        if (state === "playing" || state === "paused") return resolve(), true;
        if (state === "idle") return reject(new Error(`album-mixer: no tracks started for song ${songId}`)), true;
        return false;
      };
      if (check()) return;
      const off = stems.on("state", (d) => {
        if (d.songId === songId && check()) off();
      });
    });
  }

  async function play() {
    if (!currentSongId) {
      const firstSong = songs[0];
      if (!firstSong) return;
      await loadSong(firstSong.id);
    }
    const songId = currentSongId;
    if (stems.isPlaying(songId)) return;
    // play() fer af stað hér, innan smellsins (iOS leyfir það bara þar)
    stems.play(songId);
    if (audioContext.state === "suspended") audioContext.resume().catch(() => {});
    await untilStarted(songId);
  }

  function pause() {
    if (currentSongId) stems.pause(currentSongId);
  }

  function stop() {
    if (!currentSongId) return;
    stems.stop(currentSongId);
    emitTimeUpdate();
  }

  function seek(time) {
    if (!currentSongId) return;
    stems.seek(Math.max(0, time || 0), currentSongId);
  }

  function setMasterVolume(value) {
    masterPosition = clamp(value, 0, 1);
    masterGain.gain.value = faderGain(masterPosition);
    emit("masterchange", { value: masterPosition });
  }

  function setPitch(value) {
    currentPitch = clamp(value, 0.75, 1.25);
    stems.setSpeed(currentPitch);
    emit("pitchchange", { value: currentPitch, songId: currentSongId });
  }

  // -----------------------------------------------------------
  // Mælar og rásir
  // -----------------------------------------------------------

  function getMeterLevels() {
    return getCurrentTracks().map((track) => {
      const analyserNode = track.nodes?.analyserNode;
      if (!analyserNode) return { trackId: track.id, level: 0 };

      const data = new Uint8Array(analyserNode.frequencyBinCount);
      analyserNode.getByteTimeDomainData(data);
      let sumSquares = 0;
      for (let i = 0; i < data.length; i += 1) {
        const centered = (data[i] - 128) / 128;
        sumSquares += centered * centered;
      }
      const rms = Math.sqrt(sumSquares / data.length);
      return { trackId: track.id, level: clamp(rms * 2.8, 0, 1) };
    });
  }

  function updateTrackValue(trackId, key, value) {
    const track = getCurrentTracks().find((item) => item.id === trackId);
    if (!track) return;
    const at = audioContext.currentTime;

    if (key === "gain") {
      track.gain = clamp(value, 0, 2);
      if (track.nodes) applyTrackColor(track.nodes, audioContext, track.gain);
    }
    if (key === "pan") {
      track.pan = clamp(value, -1, 1);
      track.nodes?.panNode.pan.setValueAtTime(track.pan, at);
    }
    if (key === "eqLow") {
      track.eqLow = clamp(value, -1, 1);
      track.nodes?.eqLowNode.gain.setValueAtTime(track.eqLow * 12, at);
    }
    if (key === "eqHigh") {
      track.eqHigh = clamp(value, -1, 1);
      track.nodes?.eqHighNode.gain.setValueAtTime(track.eqHigh * 12, at);
    }
    if (key === "fader") {
      track.fader = clamp(value, 0, 1);
      track.nodes?.faderNode.gain.setValueAtTime(faderGain(track.fader), at);
    }

    emit("trackchange", {
      songId: currentSongId,
      trackId,
      gain: track.gain,
      eqLow: track.eqLow,
      eqHigh: track.eqHigh,
      pan: track.pan,
      fader: track.fader,
    });
  }

  function getState() {
    const stemSong = currentSongId ? stems.getSong(currentSongId) : null;
    return {
      currentSongId,
      isPlaying: isPlaying(),
      // Í spilun en að bíða eftir gögnum (byrjun, spólun eða hik)
      buffering: stemSong?.state === "loading",
      currentTime: currentSongId ? stems.getTime(currentSongId) : 0,
      duration: stemSong?.duration || 0,
      masterVolume: masterPosition,
      pitch: currentPitch,
      song: getCurrentSong(),
    };
  }

  return {
    addEventListener: (...args) => eventTarget.addEventListener(...args),
    removeEventListener: (...args) => eventTarget.removeEventListener(...args),
    getSongs: () => songs.map((song) => ({ ...song })),
    ensureSong,
    preload,
    isReady,
    getState,
    loadSong,
    play,
    pause,
    stop,
    seek,
    setMasterVolume,
    setPitch,
    getMeterLevels,
    setTrackGain: (trackId, value) => updateTrackValue(trackId, "gain", value),
    setTrackEqLow: (trackId, value) => updateTrackValue(trackId, "eqLow", value),
    setTrackEqHigh: (trackId, value) => updateTrackValue(trackId, "eqHigh", value),
    setTrackPan: (trackId, value) => updateTrackValue(trackId, "pan", value),
    setTrackFader: (trackId, value) => updateTrackValue(trackId, "fader", value),
  };
}
