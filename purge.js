#!/usr/bin/env node

/**
 * purge.js – Purge jsDelivr CDN cache for the files Webflow actually loads.
 *
 * Síðurnar hlaða `@main`, ekki `@latest`. Þetta eru sitthvor cache-færslan hjá
 * jsDelivr, svo purge á `@latest` snerti aldrei það sem gestir fá. Purge-API-ið
 * vill líka staka skrá — mappa gerir ekkert.
 */

import { readdirSync } from "fs";

const USER = "hauskupa";
const REPO = "vogor";
const REF = "main";

const files = readdirSync("dist").filter(
  (file) => file.endsWith(".js") || file.endsWith(".css")
);

if (!files.length) {
  console.warn("Ekkert í dist/ til að purge-a. Keyrðu `npm run build` fyrst.");
  process.exit(0);
}

const results = await Promise.all(
  files.map(async (file) => {
    const url = `https://purge.jsdelivr.net/gh/${USER}/${REPO}@${REF}/dist/${file}`;
    try {
      const response = await fetch(url);
      return { file, ok: response.ok, status: response.status };
    } catch (error) {
      return { file, ok: false, status: error.message };
    }
  })
);

results.forEach(({ file, ok, status }) => {
  console.log(`${ok ? "✓" : "✗"} ${file}${ok ? "" : `  (${status})`}`);
});

const failed = results.filter((result) => !result.ok);
console.log(`\n${results.length - failed.length}/${results.length} purge-að á @${REF}`);
if (failed.length) process.exitCode = 1;
