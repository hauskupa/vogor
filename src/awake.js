// src/awake.js
import { Howl } from "howler";

/**
 * Initialize awake voiceover tracks and bind controls.
 * Safe to call before or after DOMContentLoaded.
 * Returns the created `howls` map for testing or external control.
 */
export function setupAwake() {
  const VOL_STEP = 0.1;

  // Build tracksConfig from slide `data-awake-audio` attributes only.
  // If you want fallback/default URLs, store them in the HTML or a
  // separate config file; by default we will derive tracks from markup.
  let tracksConfig = {};

  const howls = {};

  function createHowls() {
    // Merge any `data-awake-audio` attributes found in `.slide` elements.
    // Slides in the markup may include `data-awake-audio="<url>"` which
    // should define or override the URL for that slide's audio.
    try {
      const slides = Array.from(document.querySelectorAll('.slide[data-slide]'));
      slides.forEach((s) => {
        const name = s.dataset && s.dataset.slide;
        const url = s.dataset && s.dataset.awakeAudio;
        if (name && url) tracksConfig[name] = url;
      });
    } catch (e) {
      // document might be unavailable in some environments — ignore.
    }

    for (const [key, url] of Object.entries(tracksConfig)) {
      try {
        howls[key] = new Howl({
          src: [url],
          volume: 0.5,
        });
      } catch (err) {
        // If Howl isn't available (e.g. during unit tests), provide a safe stub
        // so bindings won't throw.
        howls[key] = {
          _volume: 0.5,
          play() {},
          pause() {},
          stop() {},
          volume(v) {
            if (typeof v === "number") this._volume = Math.max(0, Math.min(1, v));
            return this._volume;
          },
        };
        // eslint-disable-next-line no-console
        console.warn(`Howl creation failed for ${key}:`, err && err.message);
      }
    }
  }

  function clampVolume(v) {
    return Math.max(0, Math.min(1, v));
  }

  // Bind controls by data-attributes inside each `.slide[data-slide]` element.
  function bindControlsForSlide(slideEl) {
    const name = slideEl && slideEl.dataset && slideEl.dataset.slide;
    if (!name) return;
    const howl = howls[name];
    if (!howl) return;

    const playBtn = slideEl.querySelector("[data-awake-play]");
    const pauseBtn = slideEl.querySelector("[data-awake-pause]");
    const stopBtn = slideEl.querySelector("[data-awake-stop]");
    const volUpBtn = slideEl.querySelector("[data-awake-vol-up]");
    const volDownBtn = slideEl.querySelector("[data-awake-vol-down]");

    const stopAllOnPlay = true; // change to false if you want overlapping audio

    if (playBtn)
      playBtn.addEventListener("click", () => {
        if (stopAllOnPlay) Object.values(howls).forEach((h) => { try { h.stop(); } catch (e) {} });
        howl.play();
      });
    if (pauseBtn) pauseBtn.addEventListener("click", () => howl.pause());
    if (stopBtn) stopBtn.addEventListener("click", () => howl.stop());

    if (volUpBtn)
      volUpBtn.addEventListener("click", () => {
        const current = typeof howl.volume === "function" ? howl.volume() : howl._volume || 0.5;
        const v = clampVolume(current + VOL_STEP);
        if (typeof howl.volume === "function") howl.volume(v);
      });

    if (volDownBtn)
      volDownBtn.addEventListener("click", () => {
        const current = typeof howl.volume === "function" ? howl.volume() : howl._volume || 0.5;
        const v = clampVolume(current - VOL_STEP);
        if (typeof howl.volume === "function") howl.volume(v);
      });
  }

  // Slide navigation: use slides with `data-slide` and next/prev buttons with
  // `data-next-slide` / `data-prev-slide` inside each slide.
  function setupSlideNavigation() {
    const slides = Array.from(document.querySelectorAll('.slide[data-slide]'));
    if (!slides.length) return;

    const body = document.body;
    let currentIndex = Math.max(0, slides.findIndex((s) => s.classList.contains('active')));
    if (currentIndex === -1) currentIndex = 0;

    function updateAria(index) {
      slides.forEach((s, i) => {
        const isActive = i === index;
        s.classList.toggle('active', isActive);
        s.setAttribute('aria-hidden', String(!isActive));
      });
      const name = slides[index].dataset.slide;
      if (name) body.dataset.awakeCurrent = name;
    }

    function goTo(index, { autoPlay = false } = {}) {
      const i = Math.max(0, Math.min(slides.length - 1, index));
      const slide = slides[i];
      if (!slide) return;

      // Always stop/reset other audio when a new slide becomes active.
      Object.values(howls).forEach((h) => {
        try {
          if (typeof h.stop === 'function') h.stop();
          // Reset playback position if supported
          if (typeof h.seek === 'function') h.seek(0);
        } catch (e) {
          // ignore
        }
      });

      updateAria(i);
      // Smooth scroll the slide into view
      try {
        slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      } catch (e) {
        // fall back
        slide.scrollIntoView();
      }

      // Optionally auto-play the slide's audio URL if requested. This
      // is off by default; user can enable by passing { autoPlay: true }.
      if (autoPlay) {
        const name = slide.dataset && slide.dataset.slide;
        if (name && howls[name] && typeof howls[name].play === 'function') {
          try { howls[name].play(); } catch (e) {}
        }
      }

      currentIndex = i;
    }

    // wire next/prev inside each slide
    slides.forEach((slide, idx) => {
      bindControlsForSlide(slide);

      const nextBtn = slide.querySelector('[data-next-slide]') || slide.querySelector('.next');
      const prevBtn = slide.querySelector('[data-prev-slide]') || slide.querySelector('.prev');

      if (nextBtn) nextBtn.addEventListener('click', () => goTo(idx + 1));
      if (prevBtn) prevBtn.addEventListener('click', () => goTo(idx - 1));
    });

    // global next/prev (useful for controls outside slides)
    document.querySelectorAll('[data-next]').forEach((el) => el.addEventListener('click', () => goTo(currentIndex + 1)));
    document.querySelectorAll('[data-prev]').forEach((el) => el.addEventListener('click', () => goTo(currentIndex - 1)));

    // keyboard navigation
    window.addEventListener('keydown', (ev) => {
      if (ev.key === 'ArrowRight') goTo(currentIndex + 1);
      if (ev.key === 'ArrowLeft') goTo(currentIndex - 1);
    });

    // Bind menu items (elements with `data-awake-song`) to slides.
    // These are located inside the awakemenu (markup: items with data-awake-song).
    try {
      const menuItems = Array.from(document.querySelectorAll('[data-awake-song]'));
      if (menuItems.length) {
        menuItems.forEach((mi) => {
          const target = mi.dataset && mi.dataset.awakeSong;
          const idx = slides.findIndex((s) => s.dataset && s.dataset.slide === target);
          if (idx >= 0) {
            mi.addEventListener('click', (ev) => {
              ev.preventDefault();
              goTo(idx);
              // Try to close the menu if there's a trigger element
              const trigger = document.querySelector('.awakemenutrigger');
              if (trigger) {
                try { trigger.click(); } catch (e) { /* ignore */ }
              }
            });
          }
        });
      }
    } catch (e) {
      // ignore if document not available
    }

    // initialize first active slide
    goTo(currentIndex);
  }

  function bindAll() {
    // Bind controls and slides together
    setupSlideNavigation();

    // Global stop – elements that should stop all audio (same selectors as before)
    const globalStopSelectors = [".awakemenuhidden"];
    const globalStopElements = document.querySelectorAll(globalStopSelectors.join(", "));

    if (globalStopElements.length) {
      globalStopElements.forEach((el) => {
        el.addEventListener("click", () => {
          Object.values(howls).forEach((h) => { try { h.stop(); } catch (e) {} });
        });
      });
    }
  }

  function init() {
    createHowls();
    bindAll();
    // eslint-disable-next-line no-console
    console.log("Awake setup ready");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  return howls;
}
