import { build } from "esbuild";
import { mkdirSync, readdirSync, copyFileSync } from "fs";

mkdirSync("dist", { recursive: true });

// Simple cache-busting version (timestamp)
const v = Date.now().toString().slice(-6);

// Build JS (always dist/main.js)
await build({
  entryPoints: ["src/main.js"],
  bundle: true,
  minify: true,
  sourcemap: true,
  format: "iife",
  target: ["es2019"],
  outfile: "dist/main.js",
  drop: [], // ekki strip-a console.log
  banner: {
    js: `// Build version: ${v} (${new Date().toISOString()})`
  }
});

// Copy any CSS from src → dist
for (const f of readdirSync("src")) {
  if (f.endsWith(".css")) copyFileSync(`src/${f}`, `dist/${f}`);
}

// ----- Webflow tags -----
const USER = "hauskupa";
const REPO = "vogor";
const REF = "main";

console.log("\nUse in Webflow:");
for (const f of readdirSync("dist")) {
  if (f.endsWith(".css")) {
    console.log(
      `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/${USER}/${REPO}@${REF}/dist/${f}?v=${v}">`
    );
  }
}

console.log(
  `<script src="https://cdn.jsdelivr.net/gh/${USER}/${REPO}@${REF}/dist/main.js?v=${v}" defer></script>`
);
