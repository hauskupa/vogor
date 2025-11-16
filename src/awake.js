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
        // Attach small UI-sync handlers if Howl supports events
        try {
          const slideEl = document.querySelector(`.slide[data-slide="${key}"]`);
          if (slideEl && typeof howls[key].on === 'function') {
            const onPlay = () => {
              slideEl.classList.add('playing');
              slideEl.classList.remove('paused');
            };
            const onPause = () => {
              slideEl.classList.remove('playing');
              slideEl.classList.add('paused');
            };
            const onStopOrEnd = () => {
              slideEl.classList.remove('playing');
              slideEl.classList.remove('paused');
            };

            howls[key].on('play', onPlay);
            howls[key].on('pause', onPause);
            howls[key].on('stop', onStopOrEnd);
            howls[key].on('end', onStopOrEnd);
          }
        } catch (e) {
          // ignore event-binding errors
        }
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
    // Prefer an explicit "splash" slide if present, otherwise keep any
    // element that already has `.active`, otherwise fall back to index 0.
    const splashIndex = slides.findIndex((s) => s.dataset && s.dataset.slide === 'splash');
    const activeIndex = slides.findIndex((s) => s.classList && s.classList.contains('active'));
    let currentIndex = splashIndex >= 0 ? splashIndex : (activeIndex >= 0 ? activeIndex : 0);

    function updateAria(index) {
      slides.forEach((s, i) => {
        const isActive = i === index;
        s.classList.toggle('active', isActive);
        s.setAttribute('aria-hidden', String(!isActive));
      });
      const name = slides[index].dataset.slide;
      if (name) body.dataset.awakeCurrent = name;
    }

    const ANIM_DURATION = 480; // ms, should match CSS transition

    function goTo(index, { autoPlay = false } = {}) {
      const i = Math.max(0, Math.min(slides.length - 1, index));
      if (i === currentIndex) return;
      const oldIdx = currentIndex;
      const oldSlide = slides[oldIdx];
      const newSlide = slides[i];
      if (!newSlide) return;

      // Always stop/reset other audio when a new slide becomes active.
      Object.values(howls).forEach((h) => {
        try {
          if (typeof h.stop === 'function') h.stop();
          if (typeof h.seek === 'function') h.seek(0);
        } catch (e) {
          // ignore
        }
      });

      const forward = i > oldIdx;
      const exitClass = forward ? 'exit-left' : 'exit-right';

      // Mark new slide active so it animates in from CSS (it was non-active before)
      newSlide.classList.add('active');
      newSlide.setAttribute('aria-hidden', 'false');

      // Add exit class to old slide so it animates out
      if (oldSlide) {
        oldSlide.classList.add(exitClass);
      }

      // Smooth scroll the new slide into view
      try {
        newSlide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      } catch (e) {
        newSlide.scrollIntoView();
      }

      // After animation completes, clean up classes and update aria/current index
      setTimeout(() => {
        if (oldSlide) {
          oldSlide.classList.remove('active');
          oldSlide.classList.remove(exitClass);
          oldSlide.setAttribute('aria-hidden', 'true');
        }
        // ensure newSlide is active and aria updated
        newSlide.classList.add('active');
        newSlide.setAttribute('aria-hidden', 'false');
        currentIndex = i;
        const name = newSlide.dataset && newSlide.dataset.slide;
        if (name) body.dataset.awakeCurrent = name;

        // Optionally auto-play
        if (autoPlay) {
          const name = newSlide.dataset && newSlide.dataset.slide;
          if (name && howls[name] && typeof howls[name].play === 'function') {
            try { howls[name].play(); } catch (e) {}
          }
        }
      }, ANIM_DURATION + 20);
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

    // initialize first active slide (set active/aria without running nav animation)
    updateAria(currentIndex);
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
    // expose destroy on window for quick debugging (optional)
    try {
      window.__awake_howls = howls;
    } catch (e) {}
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
