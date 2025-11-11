// src/player.js
export function setupPlayer() {
  console.log("player: init");

  const wrapper = document.querySelector("[data-player]");
  if (!wrapper) {
    console.warn("player: no [data-player] found");
    return;
  }

  const audio = wrapper.querySelector("audio") || document.getElementById("audio");
  if (!audio) {
    console.warn("player: no <audio> element found");
    return;
  }

const lrcUrl =
  wrapper.dataset.lrc ||
  "https://cdn.jsdelivr.net/gh/hauskupa/vogor@main/dist/sodkaffi.lrc";


  audio.autoplay = false;
  audio.preload = "none";
  audio.pause();
  audio.currentTime = 0;
  audio.volume = 1.0;

  // --- LRC ---
  function parseLRC(lrc) {
    const lines = lrc.split("\n");
    const rx = /\[(\d{2}):(\d{2})\.(\d{2})\]/;
    const out = [];
    for (let line of lines) {
      const m = line.match(rx);
      if (m) {
        const t = +m[1] * 60 + +m[2] + +m[3] / 100;
        const txt = line.replace(rx, "").trim();
        if (txt) out.push({ time: t, text: txt });
      }
    }
    return out;
  }

  fetch(lrcUrl)
    .then((res) => res.text())
    .then((txt) => setupControls(parseLRC(txt)))
    .catch(() => setupControls([]));

  function setupControls(parsedLyrics) {
    const el = (id) => wrapper.querySelector(`#${id}`) || document.getElementById(id);

    const playBtn = el("playBtn");
    const pauseBtn = el("pauseBtn");
    const stopBtn = el("stopBtn");
    const nextTrackBtn = el("nextTrackBtn");
    const prevTrackBtn = el("prevTrackBtn");
    const volDownBtn = el("volDownBtn");
    const volUpBtn = el("volUpBtn");
    const playIcon = el("playIcon");
    const pauseIcon = el("pauseIcon");
    const timeDisplay = el("timeDisplay");
    const trackTitle = el("trackTitle");
    const lyricsDisplay = el("lyricsDisplay");

    const step = 0.1;

    const tracks = [
      { start: 0, end: 237.64, title: "Soðkaffi" },
      { start: 237.64, end: 430.374, title: "Að vera einn" },
      { start: 430.374, end: 613.12, title: "Hvaða fólk býr í svona blokk?" },
      { start: 613.12, end: 847.4, title: "Vofusund í sálinni" },
      { start: 847.4, end: 1043.734, title: "03:16" },
      { start: 1043.734, end: 1275.361, title: "Skýjaðar stjörnur" },
      { start: 1275.361, end: 1443.201, title: "Það gerist allt í leiðinni" },
      { start: 1443.201, end: 1592.574, title: "Ég átta mig á því" },
      { start: 1592.574, end: 1753.548, title: "Boomerangsafn af axarsköftum" },
      { start: 1753.548, end: 1e5, title: "Langtímalíkindi fín" },
    ];

    function formatTime(sec) {
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return m + ":" + (s < 10 ? "0" : "") + s;
    }
    function getCurrentTrack(now) {
      for (let i = tracks.length - 1; i >= 0; i--) if (now >= tracks[i].start) return tracks[i];
      return tracks[0];
    }

    let lastLyric = "";
    let fadeOut;

    function updateLyrics(now) {
      if (!lyricsDisplay) return;
      const ct = getCurrentTrack(now);
      let line = "";
      for (let { time, text } of parsedLyrics) {
        if (time >= ct.end) break;
        if (time >= ct.start && time <= now) line = text;
      }
      if (line !== lastLyric) {
        lastLyric = line;
        clearTimeout(fadeOut);
        lyricsDisplay.style.opacity = 0;
        setTimeout(() => {
          lyricsDisplay.textContent = line;
          lyricsDisplay.style.opacity = 1;
          fadeOut = setTimeout(() => (lyricsDisplay.style.opacity = 0), 5000);
        }, 300);
      }
    }

    function updateTime() {
      const now = audio.currentTime;
      if (timeDisplay && audio.duration)
        timeDisplay.textContent = `${formatTime(now)} / ${formatTime(audio.duration)}`;
      if (trackTitle) trackTitle.textContent = getCurrentTrack(now).title;
      updateLyrics(now);
    }

    function showPlayState() {
      playIcon?.setAttribute("aria-hidden", "false");
      pauseIcon?.setAttribute("aria-hidden", "true");
      playBtn?.setAttribute("aria-hidden", "false");
      pauseBtn?.setAttribute("aria-hidden", "true");
    }
    function showPauseState() {
      playIcon?.setAttribute("aria-hidden", "true");
      pauseIcon?.setAttribute("aria-hidden", "false");
      playBtn?.setAttribute("aria-hidden", "true");
      pauseBtn?.setAttribute("aria-hidden", "false");
    }

    const playAudio = () => {
      audio.play().catch(() => {});
      showPauseState();
    };
    const pauseAudio = () => {
      audio.pause();
      showPlayState();
    };
    const stopAudio = () => {
      audio.pause();
      audio.currentTime = 0;
      showPlayState();
      updateTime();
    };
    const next = () => {
      const now = audio.currentTime;
      const n = tracks.find((t) => t.start > now);
      if (n) audio.currentTime = n.start;
      if (audio.paused) playAudio();
    };
    const prev = () => {
      const now = audio.currentTime;
      let idx = tracks.findIndex((t) => now < t.start) - 1;
      if (idx < 0) idx = tracks.length - 1;
      const p =
        now - tracks[idx].start > 3 || idx === 0 ? tracks[idx] : tracks[idx - 1] || tracks[0];
      audio.currentTime = p.start;
      if (audio.paused) playAudio();
    };

    volUpBtn?.addEventListener("click", () => (audio.volume = Math.min(1, audio.volume + step)));
    volDownBtn?.addEventListener("click", () => (audio.volume = Math.max(0, audio.volume - step)));

    playBtn?.addEventListener("click", playAudio);
    pauseBtn?.addEventListener("click", pauseAudio);
    stopBtn?.addEventListener("click", stopAudio);
    nextTrackBtn?.addEventListener("click", next);
    prevTrackBtn?.addEventListener("click", prev);

    audio.addEventListener("loadedmetadata", updateTime);
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("ended", stopAudio);

    console.log("player: ready");
  }
}
