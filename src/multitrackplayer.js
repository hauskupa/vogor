export function setupMultitrackPlayer() {
  console.log("multitrack: init");

  const root = document.querySelector("[data-multitrack-player]");
  if (!root) return;

  // All tracks (CMS items)
  const triggers = Array.from(root.querySelectorAll("[data-mt-trigger]"));

  const stems = [];   // audio elements
  const pairs = [];   // { trigger, audio }

  // Build audio elements dynamically
  triggers.forEach((trigger) => {
    const url = trigger.dataset.mtAudio;
    if (!url) return;

    const audio = new Audio(url);
    audio.preload = "auto";
    audio.volume = 0;

    stems.push(audio);
    pairs.push({ trigger, audio });
  });

  if (!stems.length) {
    console.warn("multitrack: no stems found");
    return;
  }

  const playBtn = root.querySelector("[data-mt-play]");
  const pauseBtn = root.querySelector("[data-mt-pause]");
  const stopBtn = root.querySelector("[data-mt-stop]");

  let isStarted = false;
  let isPlaying = false;

  function playAll() {
    stems.forEach((audio) => {
      if (audio.paused) {
        audio.play().catch((err) => console.warn("play failed:", err));
      }
    });
    isPlaying = true;
  }

  function pauseAll() {
    stems.forEach((audio) => audio.pause());
    isPlaying = false;
  }

  function stopAll() {
    stems.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
      audio.volume = 0;
    });
    isPlaying = false;

    // reset UI
    pairs.forEach(({ trigger }) => trigger.classList.remove("is-active"));
  }

  function ensureStarted() {
    if (!isStarted) {
      isStarted = true;
      playAll();
    }
  }

  function toggleStem(audio, triggerEl) {
    ensureStarted();

    if (!isPlaying) playAll();

    const isOn = audio.volume > 0;
    audio.volume = isOn ? 0 : 1;
    triggerEl.classList.toggle("is-active", !isOn);
  }

  // Connect triggers
  pairs.forEach(({ trigger, audio }) => {
    trigger.addEventListener("click", () => toggleStem(audio, trigger));
  });

  playBtn?.addEventListener("click", () => { ensureStarted(); playAll(); });
  pauseBtn?.addEventListener("click", pauseAll);
  stopBtn?.addEventListener("click", stopAll);

  console.log("multitrack: ready");
}

document.addEventListener("DOMContentLoaded", setupMultitrackPlayer);
