#!/usr/bin/env node

/**
 * purge.js – Purge jsDelivr CDN cache for vogor@latest
 */

import https from "https";

const url = "https://purge.jsdelivr.net/gh/hauskupa/vogor@latest/dist/";

console.log(`Purging CDN cache: ${url}`);

https.get(url, (res) => {
  if (res.statusCode === 200) {
    console.log("✓ CDN cache purged successfully");
  } else {
    console.warn(`Warning: CDN returned status ${res.statusCode}`);
  }
}).on("error", (err) => {
  console.error("Error purging CDN:", err.message);
});
