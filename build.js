import { build } from "esbuild";
import { mkdirSync, readdirSync, copyFileSync } from "fs";

mkdirSync("dist", { recursive: true });

// Time-stamp bara fyrir comment/debug
const v = Date.now().toString().slice(-6);

// Build JS
await build({
  entryPoints: ["src/main.js"],
  bundle: true,
  minify: true,
  sourcemap: true,
  format: "iife",
  target: ["es2019"],
  outfile: "dist/main.js",
  banner: {
    js: `// Build version: ${v} (${new Date().toISOString()})`,
  },
});

// CSS + LRC yfir í dist
for (const f of readdirSync("src")) {
  if (f.endsWith(".css") || f.endsWith(".lrc")) {
    copyFileSync(`src/${f}`, `dist/${f}`);
  }
}

// Info bara fyrir þig í terminal
const USER = "hauskupa";
const REPO = "vogor";
const REF = "main";

console.log("\nUse in Webflow (set once, keep forever):");
for (const f of readdirSync("dist")) {
  if (f.endsWith(".css")) {
    console.log(
      `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/${USER}/${REPO}@${REF}/dist/${f}">`
    );
  }
}
console.log(
  `<script src="https://cdn.jsdelivr.net/gh/${USER}/${REPO}@${REF}/dist/main.js" defer></script>`
);
