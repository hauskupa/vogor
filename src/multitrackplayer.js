// src/multitrackplayer.js
//
// Multitrack-spilarinn á /asleep: hvert lag hefur nokkur stem og smellur á
// stem kveikir eða slekkur á því. Spilun og samstilling eru í stemEngine.js,
// sömu vél og album mixerinn og æfingasíðan nota. Bara lagið sem er valið
// spilar, og kveikt og slökkt er með GainNode, því iOS hunsar audio.volume.
//
// Markup: [data-multitrack-player] með [data-mt-trigger][data-mt-audio] innan
// [data-mt-track="<lag>"], og [data-mt-play], [data-mt-pause], [data-mt-stop].
// asleep.js sér um myndverkið og hlustar á mt:song:change, mt:stem:change,
// mt:stem:hover og mt:stem:leave á window.
import { createStemEngine } from "./stemEngine.js";

export function setupMultitrackPlayer(root = document) {
  const container = root.querySelector("[data-multitrack-player]");
  if (!container) {
    console.warn("multitrack: no [data-multitrack-player] found");
    return null;
  }

  const playBtn = container.querySelector("[data-mt-play]");
  const pauseBtn = container.querySelector("[data-mt-pause]");
  const stopBtn = container.querySelector("[data-mt-stop]");

  // Öll lög haldast hlaðin svo skipti séu snögg, eins og áður. Kveikt og
  // slökkt á stemi rennur á um 300 ms.
  const engine = createStemEngine({ unloadPrevious: false, mixFade: 0.1 });

  const tracks = []; // { id, songId, el, audio, on }
  const bySong = new Map();

  container.querySelectorAll("[data-mt-trigger]").forEach((el, index) => {
    const url = (el.dataset.mtAudio || "").trim();
    if (!url) {
      el.classList.add("is-disabled");
      return;
    }
    const songId = el.closest("[data-mt-track]")?.dataset.mtTrack || null;
    const track = { id: `t-${index}`, songId, el, url, audio: null, on: false };
    tracks.push(track);
    const key = songId || "";
    if (!bySong.has(key)) bySong.set(key, []);
    bySong.get(key).push(track);
  });

  if (!tracks.length) {
    console.warn("multitrack: no usable tracks found (check data-mt-audio)");
    return null;
  }

  // Öll stem byrja þögul. Elementin verða til strax svo asleep.js geti
  // fylgst með hleðslunni (preloader-inn)
  bySong.forEach((list, key) => {
    engine.define({ id: key, tracks: list.map((t) => ({ id: t.id, url: t.url, muted: true })) });
    const song = engine.load(key);
    list.forEach((t) => {
      t.audio = song.tracks.find((s) => s.id === t.id)?.audio || null;
    });
  });

  let currentSongId = null;

  // Á meðan rásirnar hlaðast, áður en hljóð heyrist; Webflow getur stílað það
  engine.on("state", ({ state }) => container.classList.toggle("is-loading", state === "loading"));

  function songKey(track) {
    return track.songId || "";
  }

  function setOn(track, on) {
    track.on = on;
    track.el.classList.toggle("is-active", on);
    engine.setTrack(songKey(track), track.id, { muted: !on });
  }

  function emitActiveState() {
    const songId = currentSongId;
    const activeStems = tracks
      .filter((t) => t.on && (!songId || t.songId === songId))
      .map((t) => t.el.dataset.mtStem || "Stem");
    window.dispatchEvent(new CustomEvent("mt:stem:change", { detail: { songId, activeStems } }));
  }

  function playAll() {
    const key = currentSongId ?? songKey(tracks[0]);
    if (!engine.isPlaying(key)) engine.play(key);
  }

  function pauseAll() {
    if (currentSongId !== null) engine.pause(currentSongId);
  }

  function stopAll() {
    bySong.forEach((_, key) => engine.stop(key));
    tracks.forEach((t) => setOn(t, false));
    currentSongId = null;
    window.dispatchEvent(new CustomEvent("mt:song:change", { detail: { songId: null } }));
    window.dispatchEvent(new CustomEvent("mt:stem:change", { detail: { songId: null, activeStems: [] } }));
  }

  // Ekkert hefur verið valið: play byrjar fyrsta lagið (þögult þar til kveikt er á stemi)
  function ensureStarted() {
    if (currentSongId === null) currentSongId = songKey(tracks[0]);
    playAll();
  }

  function toggleTrack(track) {
    const key = songKey(track);
    const prevSongId = currentSongId;

    // Annað lag: það fyrra stoppar og slökkt er á stemum þess
    if (prevSongId !== null && key !== prevSongId) {
      engine.stop(prevSongId);
      (bySong.get(prevSongId) || []).forEach((t) => setOn(t, false));
    }
    currentSongId = key;

    setOn(track, !track.on);
    playAll();

    if (track.songId && track.songId !== prevSongId) {
      window.dispatchEvent(new CustomEvent("mt:song:change", { detail: { songId: track.songId } }));
    }
    emitActiveState();
  }

  tracks.forEach((track) => {
    track.el.addEventListener("click", () => toggleTrack(track));

    // Hover fyrir asleep.js (highlightSong)
    track.el.addEventListener("mouseenter", () => {
      if (!track.songId) return;
      window.dispatchEvent(new CustomEvent("mt:stem:hover", { detail: { songId: track.songId } }));
    });
    track.el.addEventListener("mouseleave", () => {
      window.dispatchEvent(new CustomEvent("mt:stem:leave"));
    });
  });

  playBtn?.addEventListener("click", () => {
    ensureStarted();
    emitActiveState();
  });
  pauseBtn?.addEventListener("click", pauseAll);
  stopBtn?.addEventListener("click", stopAll);

  console.log(`multitrack: ${bySong.size} lög, ${tracks.length} stem`);

  return {
    container,
    tracks,
    playAll,
    pauseAll,
    stopAll,
    toggleTrack,
    ensureStarted,
  };
}
