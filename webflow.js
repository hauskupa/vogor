#!/usr/bin/env node
// npm run webflow: ber vefinn saman við nýjasta commit og prentar kóðann sem
// fer í Webflow (Site settings → Custom code).
//
// main.js og CSS-ið eru læst á commit (@<sha>), ekki @main, því jsDelivr
// getur verið klukkutímum á eftir með @main. Allt á sama commit svo JS og
// CSS séu alltaf úr sömu útgáfu. Nafir-síðurnar sjá um sig sjálfar
// (src/nafir/hledsla.js).

import { execSync } from "child_process";

const VEFUR = "https://www.vogorrecords.com/";
const CDN = "https://cdn.jsdelivr.net/gh/hauskupa/vogor@";
const CSS = ["styles.css", "albumMixer.css", "vogorPlayer.css"];
// Allt í dist/ nema Nafir-skrárnar, sem fara í loftið sjálfar
const SKRAR = ["dist", ":!dist/nafir*", ":!dist/*.map", ":!dist/sidur/*.map"];

const git = (c) => execSync("git " + c, { encoding: "utf8" }).trim();

if (git("status --porcelain -- dist")) {
  console.error("dist/ er með óvistaðar breytingar. Keyrðu build, commit-aðu og push-aðu fyrst.");
  process.exit(1);
}
git("fetch -q origin main");
const sha = git("rev-parse --short HEAD");
if (!git("branch -r --contains HEAD").includes("origin/main")) {
  console.error(`${sha} er ekki komið á GitHub. Push-aðu fyrst, annars finnur jsDelivr það ekki.`);
  process.exit(1);
}

// Hvaða commit er vefurinn á núna, og hleðst eitthvað enn af @main?
let lifandi = null;
let aMain = false;
try {
  const html = await (await fetch(VEFUR)).text();
  lifandi = (/hauskupa\/vogor@([0-9a-f]{7,40})\/dist\/main\.js/.exec(html) || [])[1] || null;
  aMain = /hauskupa\/vogor@main\/dist\//.test(html);
} catch {
  console.warn("Náði ekki í vefinn til að bera saman.\n");
}

if (lifandi) {
  const breytt = git(`diff --name-only ${lifandi} HEAD -- ${SKRAR.map((s) => `"${s}"`).join(" ")}`);
  if (!breytt && !aMain) {
    console.log(`Vefurinn er á ${lifandi} og ekkert hefur breyst síðan. Ekkert að gera.`);
    process.exit(0);
  }
  if (breytt) console.log(`Vefurinn er á ${lifandi}. Breytt síðan:\n  ${breytt.split("\n").join("\n  ")}\n`);
}
if (aMain) console.log("Eitthvað á vefnum hleðst enn af @main og getur verið úr annarri útgáfu en main.js.\n");

console.log("Setja í stað vogor-línanna í Site settings → Custom code, vista og publish-a:\n");
for (const f of CSS) console.log(`<link rel="stylesheet" href="${CDN}${sha}/dist/${f}">`);
console.log(`<script src="${CDN}${sha}/dist/main.js" defer></script>`);
