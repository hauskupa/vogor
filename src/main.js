import { setupMixer } from "./mixer.js";

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("[data-mixer]")) {
    console.log("Found mixer element, initializing...");
    setupMixer();
  }
});
