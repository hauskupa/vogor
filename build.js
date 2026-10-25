// npm run build: byggir dist/. npm run dev: sama, og byggir aftur við hverja breytingu.
import * as esbuild from "esbuild";
import { mkdirSync, rmSync, readdirSync, copyFileSync, readFileSync, writeFileSync } from "fs";

const VAKA = process.argv.includes("--watch");

// Enginn tímastimpill í skránum: sami kóði gefur sömu skrá, og commit-ið
// segir hvaða útgáfa er á vefnum (npm run webflow). es2020 því hleðslan
// notar import() og einingarnar import.meta.
const GRUNNUR = {
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ["es2020"],
  // CSS og HTML fara inn sem texti og sprautast inn úr JS
  loader: { ".css": "text", ".html": "text" },
  logLevel: "warning",
};

// Gamlar chunk-skrár mega ekki safnast upp í dist/sidur
rmSync("dist/sidur", { recursive: true, force: true });
mkdirSync("dist", { recursive: true });

const VERK = [
  // Hleðslan sem Webflow setur inn site-wide. Sjá src/main.js
  { ...GRUNNUR, entryPoints: ["src/main.js"], format: "iife", outfile: "dist/main.js" },

  // Ein skrá á hverja virkni. Kóði sem fleiri deila fer í chunk-skrár
  {
    ...GRUNNUR,
    entryPoints: readdirSync("src/sidur").map((f) => "src/sidur/" + f),
    format: "esm",
    splitting: true,
    outdir: "dist/sidur",
    chunkNames: "chunk-[hash]",
  },

  // Nafir-síðurnar. Sjá src/nafir/index.js
  { ...GRUNNUR, entryPoints: ["src/nafir/index.js"], format: "iife", outfile: "dist/nafir.js" },

  // Hleðslan sem embed-in á Nafir-síðunum vísa á (fest á commit). Hún sækir
  // dist/nafir.js á nýjasta commit, því jsDelivr @main getur verið langt á eftir
  {
    entryPoints: ["src/nafir/hledsla.js"],
    minify: true,
    format: "iife",
    target: ["es2020"],
    outfile: "dist/nafir-hledsla.js",
    logLevel: "warning",
  },
];

if (VAKA) {
  for (const verk of VERK) await (await esbuild.context(verk)).watch();
} else {
  await Promise.all(VERK.map((verk) => esbuild.build(verk)));
}

// MP3-kóðarinn er 156 kB og sækist bara þegar einhver flytur út.
// lame.min.js skilgreinir `lamejs` sem global, svo hún er límd framan við
// worker-kóðann í stað þess að vera import-uð (module-inngangur lamejs er
// brotinn: "MPEGMode is not defined").
const lame = readFileSync("node_modules/lamejs/lame.min.js", "utf8");
const worker = await esbuild.build({
  entryPoints: ["src/mp3worker.js"],
  bundle: true,
  minify: true,
  format: "iife",
  target: ["es2020"],
  write: false,
});
writeFileSync("dist/mp3worker.js", `${lame}\n${worker.outputFiles[0].text}`);

// CSS sem Webflow hleður beint, og LRC fyrir player.js
for (const f of readdirSync("src")) {
  if (/\.(css|lrc|svg|png)$/.test(f)) copyFileSync(`src/${f}`, `dist/${f}`);
}

console.log(VAKA ? "Fylgist með src/ …" : "Búið. Eftir commit og push: npm run webflow");
