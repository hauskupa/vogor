// src/mixer.js

export function setupMixer() {
  const audioPlayer = {
    tracks: {},
    audioContext: null,
    isPlaying: false,

    loadSong(songElement) {
      this.stopAllTracks();
      this.tracks = {};

      const songId = songElement.getAttribute("data-song");
      if (!songId) {
        console.error("Song ID not found");
        return;
      }

      if (!this.audioContext) {
        this.audioContext =
          new (window.AudioContext || window.webkitAudioContext)();
        console.log("AudioContext initialized");
      }

      const trackElements = songElement.querySelectorAll("[data-track-url]");
      trackElements.forEach((trackElement) => {
        const trackId = trackElement.getAttribute("data-track-id");
        const trackUrl = trackElement.getAttribute("data-track-url");

        if (!trackUrl) return;

        if (!this.tracks[trackId]) {
          const audioElement = new Audio(trackUrl);
          audioElement.crossOrigin = "anonymous";

          try {
            const audioSource =
              this.audioContext.createMediaElementSource(audioElement);
            const panner = this.audioContext.createStereoPanner();

            audioSource.connect(panner);
            panner.connect(this.audioContext.destination);
            console.log(`Track ${trackId} audio nodes connected`);

            this.tracks[trackId] = {
              element: trackElement,
              audio: audioElement,
              panner,
              volumeControl: trackElement.querySelector(
                "[data-volume-control]"
              ),
              panControl: trackElement.querySelector("[data-pan-control]"),
              muteButton: trackElement.querySelector("[data-mute-button]"),
              soloButton: trackElement.querySelector("[data-solo-button]"),
            };

            this.initTrackControls(trackId);
          } catch (err) {
            console.error(
              `Failed to initialize audio track ${trackId}: ${err.message}`
            );
          }
        }
      });
    },

    initTrackControls(trackId) {
      const track = this.tracks[trackId];

      if (!track) {
        console.error(`Track ID ${trackId} not found or not loaded.`);
        return;
      }

      // Volume
      if (track.volumeControl && track.audio) {
        track.volumeControl.addEventListener("input", (e) => {
          const volume = parseFloat(e.target.value);
          track.audio.volume = volume;
          console.log(`Track ${trackId} volume set to: ${volume}`);
        });
        track.audio.volume = track.volumeControl.value;
      }

      // Pan
      if (track.panControl && track.panner) {
        track.panControl.addEventListener("input", (e) => {
          const panValue = parseFloat(e.target.value);
          track.panner.pan.value = panValue;
          console.log(`Track ${trackId} panned to: ${panValue}`);
        });
      }

      // Mute
      if (track.muteButton) {
        track.muteButton.addEventListener("click", () => {
          track.audio.muted = !track.audio.muted;
          track.muteButton.classList.toggle("mute-active", track.audio.muted);
        });
      }

      // Solo
      if (track.soloButton) {
        track.soloButton.addEventListener("click", () => {
          const isSoloActive =
            track.soloButton.classList.contains("solo-active");

          for (let id in this.tracks) {
            const otherTrack = this.tracks[id];
            if (id !== trackId) {
              otherTrack.audio.muted = !isSoloActive;
            }
          }

          track.soloButton.classList.toggle("solo-active", !isSoloActive);
        });
      }
    },

    playAllTracks() {
      const promises = [];

      for (let trackId in this.tracks) {
        const track = this.tracks[trackId];
        const promise = new Promise((resolve) => {
          track.audio.addEventListener("canplaythrough", () => {
            console.log(`Track ${trackId} ready to play`);
            resolve();
          });
        });
        promises.push(promise);
      }

      Promise.all(promises)
        .then(() => {
          console.log("All tracks are ready. Playing now...");
          for (let trackId in this.tracks) {
            const track = this.tracks[trackId];
            track.audio
              .play()
              .then(() => console.log(`Playing track ${trackId}`))
              .catch((err) =>
                console.error(
                  `Error playing track ${trackId}: ${err.message}`
                )
              );
          }
          this.isPlaying = true;
        })
        .catch((err) => {
          console.error("Error preparing tracks for playback:", err);
        });
    },

    stopAllTracks() {
      for (let trackId in this.tracks) {
        const track = this.tracks[trackId];
        track.audio.pause();
        track.audio.currentTime = 0;
      }
      this.isPlaying = false;
    },
  };

  // Play buttons
  document.querySelectorAll("[data-play-button]").forEach((button) => {
    button.addEventListener("click", () => {
      const songElement = button.closest(".track-controls");

      if (audioPlayer.isPlaying) {
        audioPlayer.stopAllTracks();
        button.classList.remove("playing");
      } else {
        audioPlayer.loadSong(songElement);

        if (
          audioPlayer.audioContext &&
          audioPlayer.audioContext.state === "suspended"
        ) {
          audioPlayer.audioContext
            .resume()
            .then(() => console.log("AudioContext resumed"))
            .catch((err) =>
              console.error(`Error resuming AudioContext: ${err.message}`)
            );
        }

        audioPlayer.playAllTracks();
        button.classList.add("playing");
        updateSongProgress(songElement);
      }
    });
  });

  function updateSongProgress(songElement) {
    const firstTrack = songElement.querySelector("[data-track-url]");
    if (!firstTrack) return;

    const firstTrackId = firstTrack.getAttribute("data-track-id");
    const track = audioPlayer.tracks[firstTrackId];
    if (!track) return;

    const audio = track.audio;
    const progressBar = songElement.querySelector("[data-progress-bar]");

    if (!progressBar) return;

    audio.addEventListener("timeupdate", () => {
      if (audio.duration) {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;
      }
    });

    progressBar.addEventListener("input", (e) => {
      if (!audio.duration) return;
      const newTime = (e.target.value / 100) * audio.duration;
      for (let id in audioPlayer.tracks) {
        audioPlayer.tracks[id].audio.currentTime = newTime;
      }
    });
  }
}
