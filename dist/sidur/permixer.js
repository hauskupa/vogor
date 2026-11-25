import{a as ot}from"./chunk-IQVD34ZK.js";import"./chunk-FW4363Y4.js";function W(r){try{return localStorage.getItem(r)||""}catch{return""}}function H(r,s){try{s?localStorage.setItem(r,s):localStorage.removeItem(r)}catch{}}function pt(r,s){let m=new URL(location.href),l=(m.searchParams.get(r)||"").trim();if(!l)return{lykill:W(s),nyr:!1};H(s,l),m.searchParams.delete(r);try{history.replaceState(history.state,"",m.href)}catch{}return{lykill:l,nyr:!0}}var St="Ekkert samband.";function lt(r,s){return fetch(r,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(s)}).then(m=>m.json().catch(()=>{throw new Error("Bakendinn svara\xF0i ekki eins og hann \xE1 a\xF0 gera.")}),()=>{throw new Error(St)})}var Et="https://script.google.com/macros/s/AKfycbzQ-oaSyVQpcWQO2UkB0BkZToo-RlIdZR2Ap3iYBsb7BnAH4wkpNlWotDb_b9rdFHnG/exec",dt="per-yfirlestur-lykill",mt="per-yfirlestur-hver";function ct(){let{lykill:r,nyr:s}=pt("k",dt);return{key:r,fresh:s}}var T={get:()=>W(mt),set:r=>H(mt,r)};async function K(r,s){let m=await lt(Et,{...s,k:r});if(m.rangurLykill){H(dt,"");let l=new Error("Hlekkurinn gildir ekki.");throw l.badKey=!0,l}return m}function ut(r){let s=/^(\d{1,2}):(\d\d)$/.exec((r||"").trim());return s?Number(s[1])*60+Number(s[2]):null}var At=["jan","feb","mar","apr","ma\xED","j\xFAn","j\xFAl","\xE1g\xFA","sep","okt","n\xF3v","des"];function gt(r){let s=/^(\d{4})-(\d\d)-(\d\d) (\d\d:\d\d)/.exec(r||"");return s?`${Number(s[3])}. ${At[Number(s[2])-1]} kl. ${s[4]}`:""}var ft=`/* \xC6fingas\xED\xF0an (permixer.js). Sprauta\xF0 inn \xFAr JS, allt undir .pm */

.pm {
  --pm-bg: #111;
  --pm-fg: #ececec;
  --pm-muted: #8c8c8c;
  --pm-line: #2a2a2a;
  --pm-accent: #f2a33a;
  --pm-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;

  display: grid;
  grid-template-columns: 240px minmax(0, 1fr) 320px;
  gap: 48px;
  /* Fyllir gluggann; Webflow-umgj\xF6r\xF0in m\xE1 ekki takmarka breiddina heldur */
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 40px 32px 80px;
  background: var(--pm-bg);
  color: var(--pm-fg);
  font-size: 16px;
  line-height: 1.5;
  box-sizing: border-box;
}

.pm *,
.pm *::before,
.pm *::after {
  box-sizing: inherit;
}

.pm button {
  font: inherit;
  color: inherit;
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
}

.pm button:disabled {
  cursor: default;
  opacity: 0.35;
}

.pm button:focus-visible,
.pm input:focus-visible {
  outline: 2px solid var(--pm-accent);
  outline-offset: 2px;
}

.pm input[type="range"] {
  accent-color: var(--pm-accent);
  margin: 0;
  cursor: pointer;
}

.pm [hidden] {
  display: none !important;
}

/* Lagalisti. Allur d\xE1lkurinn er festur \xED einu lagi (ekki bara <ol>), annars
   skrunar \u201EUtan lagalista\u201C upp yfir listann. Hann skrunar sj\xE1lfur ef hann er
   h\xE6rri en glugginn. */
.pm-songs {
  position: sticky;
  top: 24px;
  align-self: start;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  overscroll-behavior: contain;
  min-width: 0;
}

.pm-songs ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

.pm-songs button {
  display: flex;
  gap: 12px;
  width: 100%;
  padding: 6px 0;
  text-align: left;
  font-size: 14px;
  line-height: 1.35;
  color: var(--pm-muted);
}

.pm-songs button:hover,
.pm-songs button[aria-current="true"] {
  color: var(--pm-fg);
}

.pm-songs button[aria-current="true"] .pm-num {
  color: var(--pm-accent);
}

.pm-num {
  font-family: var(--pm-mono);
  font-size: 12px;
  padding-top: 2px;
  flex: none;
}

/* T\xF3nleikar\xF6\xF0in (me\xF0 lykli) */
.pm-songs-head {
  display: grid;
  gap: 8px;
  padding-bottom: 12px;
  margin-bottom: 8px;
  border-bottom: 1px solid var(--pm-line);
  font-size: 13px;
  color: var(--pm-muted);
}

.pm-total {
  font-family: var(--pm-mono);
  color: var(--pm-fg);
}

.pm-total small {
  color: var(--pm-muted);
  font-size: 11px;
}

.pm-who select,
.pm-per textarea,
.pm-per input {
  font: inherit;
  color: var(--pm-fg);
  background: #1b1b1b;
  border: 1px solid var(--pm-line);
  border-radius: 4px;
}

.pm-who select {
  margin-left: 6px;
  padding: 2px 4px;
}

.pm-songs-head .pm-link {
  justify-self: start;
}

.pm-songs li {
  display: flex;
  align-items: center;
  gap: 6px;
}

.pm-songs li > button {
  flex: 1;
  min-width: 0;
}

.pm-songs-sub {
  margin: 20px 0 4px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--pm-muted);
}

.pm-songs ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.pm-order {
  display: flex;
  gap: 2px;
  flex: none;
}

.pm-order button {
  width: 26px;
  height: 26px;
  border: 1px solid var(--pm-line) !important;
  border-radius: 4px;
  font-size: 13px;
  line-height: 1;
}

/* Dregi\xF0 til \xED \u201EBreyta r\xF6\xF0\u201C: haldfangi\xF0 tekur vi\xF0 snertingu svo s\xED\xF0an
   skruni ekki \xE1 me\xF0an */
.pm-grip {
  flex: none;
  align-self: stretch;
  display: grid;
  place-items: center;
  width: 18px;
  color: var(--pm-muted);
  cursor: grab;
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
}

.pm-grip svg {
  width: 10px;
  height: 16px;
  fill: currentColor;
}

.pm-grip:hover {
  color: var(--pm-fg);
}

.pm-songs.is-dragging {
  user-select: none;
  -webkit-user-select: none;
  cursor: grabbing;
}

/* \xDAr fl\xE6\xF0inu, sta\xF0sett mi\xF0a\xF0 vi\xF0 .pm-songs (top \xFAr JS) */
.pm-songs li.is-dragging {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;
  background: #1f1f1f;
  border-radius: 4px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6);
}

.pm-songs li.is-dragging .pm-grip {
  color: var(--pm-accent);
  cursor: grabbing;
}

.pm-songs li.pm-drop {
  border: 1px dashed var(--pm-accent);
  border-radius: 4px;
  opacity: 0.5;
}

.pm-order-foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
  font-size: 13px;
}

.pm-save {
  padding: 6px 14px !important;
  border-radius: 4px;
  background: var(--pm-accent) !important;
  color: var(--pm-bg) !important;
  font-weight: 600;
}

.pm-status {
  margin: 0;
  width: 100%;
  font-size: 13px;
  color: var(--pm-muted);
}

.pm-status.is-warning {
  color: var(--pm-accent);
}

/* Fyrra og n\xE6sta lag */
.pm-step {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  font-size: 13px;
  color: var(--pm-muted);
}

.pm-step button:hover {
  color: var(--pm-fg);
}

.pm-step button[data-pm-step="1"] {
  margin-left: auto;
}

/* Kynning og n\xF3tur */
.pm-per {
  display: grid;
  gap: 14px;
  margin-top: 24px;
  padding: 16px;
  border: 1px solid var(--pm-line);
  border-radius: 6px;
}

.pm-intro summary {
  cursor: pointer;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--pm-muted);
}

.pm-intro[open] summary {
  margin-bottom: 8px;
  color: var(--pm-fg);
}

.pm-field {
  display: grid;
  gap: 6px;
}

.pm-field > span,
.pm-length {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--pm-muted);
}

.pm-per textarea {
  width: 100%;
  padding: 8px 10px;
  line-height: 1.5;
  resize: vertical;
}

.pm-per input {
  width: 5em;
  margin-left: 6px;
  padding: 4px 6px;
  font-family: var(--pm-mono);
}

.pm-per-foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 16px;
}

.pm-per-foot .pm-status {
  width: auto;
  flex: 1;
}

/* Spilari */
.pm-title {
  margin: 0 0 20px;
  font-size: 32px;
  line-height: 1.15;
  font-weight: 700;
  color: var(--pm-fg);
}

.pm-transport {
  display: flex;
  align-items: center;
  gap: 16px;
}

.pm-play {
  width: 44px;
  height: 44px;
  flex: none;
  border-radius: 50%;
  border: 1px solid var(--pm-fg) !important;
  display: grid;
  place-items: center;
}

.pm-play svg {
  width: 18px;
  height: 18px;
  fill: currentColor;
}

.pm-play .pm-icon-pause,
.pm-play[data-state="playing"] .pm-icon-play {
  display: none;
}

.pm-play[data-state="playing"] .pm-icon-pause {
  display: block;
}

.pm-play[data-state="playing"] {
  background: var(--pm-fg);
  color: var(--pm-bg);
}

.pm-play[data-state="loading"] {
  animation: pm-pulse 1s ease-in-out infinite;
}

@keyframes pm-pulse {
  50% {
    opacity: 0.4;
  }
}

.pm-time {
  font-family: var(--pm-mono);
  font-size: 13px;
  color: var(--pm-muted);
  white-space: nowrap;
  min-width: 92px;
}

.pm-seek {
  flex: 1;
  min-width: 0;
}

.pm-note {
  margin: 16px 0 0;
  font-size: 14px;
  color: var(--pm-muted);
}

/* Uppbygging */
.pm-structure {
  --pm-progress: 0%;
  position: relative;
  display: flex;
  gap: 3px;
  margin-top: 28px;
}

.pm-structure::after {
  content: "";
  position: absolute;
  left: var(--pm-progress);
  top: 0;
  height: 3px;
  width: 2px;
  background: var(--pm-fg);
  pointer-events: none;
}

.pm-seg {
  flex: 1 1 0;
  min-width: 0;
  border-top: 3px solid var(--pm-line) !important;
  padding-top: 6px !important;
  text-align: left;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--pm-muted);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

button.pm-seg:hover {
  color: var(--pm-fg);
}

.pm-seg.is-current {
  border-top-color: var(--pm-accent) !important;
  color: var(--pm-fg);
}

/* S\xFDn og transpose */
.pm-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 36px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--pm-line);
  font-size: 13px;
}

.pm-views {
  display: flex;
  gap: 16px;
}

.pm-views button {
  color: var(--pm-muted);
}

.pm-views button[aria-pressed="true"] {
  color: var(--pm-fg);
  text-decoration: underline;
  text-underline-offset: 5px;
}

.pm-transpose {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--pm-mono);
}

.pm-transpose button {
  width: 28px;
  height: 28px;
  border: 1px solid var(--pm-line) !important;
  border-radius: 4px;
  font-size: 16px;
  line-height: 1;
}

.pm-transpose span {
  min-width: 56px;
  text-align: center;
}

/* Kaflar */
.pm-section {
  padding: 24px 0;
  border-bottom: 1px solid var(--pm-line);
}

.pm-section-head {
  display: flex;
  gap: 12px;
  align-items: baseline;
  text-align: left;
}

.pm-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--pm-muted);
}

button.pm-section-head:hover .pm-label,
.pm-section.is-current .pm-label {
  color: var(--pm-accent);
}

.pm-start {
  font-family: var(--pm-mono);
  font-size: 12px;
  color: var(--pm-muted);
}

.pm-chords {
  margin-top: 8px;
  font-family: var(--pm-mono);
  font-size: 16px;
  font-weight: 600;
  color: var(--pm-fg);
}

.pm-lyrics {
  margin-top: 12px;
  font-size: 18px;
  line-height: 1.65;
  color: var(--pm-fg);
}

.pm-lyrics > * {
  margin: 0 0 0.8em;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
}

.pm-lyrics h5,
.pm-lyrics strong {
  font-size: 13px;
  color: var(--pm-muted);
  font-weight: 500;
}

.pm-sections[data-view="chords"] .pm-lyrics,
.pm-sections[data-view="lyrics"] .pm-chords {
  display: none;
}

/* Mixer */
.pm-mixer {
  position: sticky;
  top: 24px;
  align-self: start;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  overflow-x: hidden;
  /* Pl\xE1ss fyrir skrunstikuna fr\xE1 byrjun, svo h\xFAn leggist ekki yfir sle\xF0ana */
  scrollbar-gutter: stable;
  padding-right: 6px;
  min-width: 0;
}

.pm-mixer-head > *,
.pm-strip > * {
  min-width: 0;
}

.pm-mixer-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 13px;
  color: var(--pm-muted);
  padding-bottom: 12px;
  border-bottom: 1px solid var(--pm-line);
}

.pm-link {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.pm-group-name {
  margin: 20px 0 6px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--pm-muted);
}

.pm-strip {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto;
  grid-template-areas:
    "name m s"
    "vol vol pan";
  gap: 6px 6px;
  align-items: center;
  padding: 8px 0;
}

.pm-strip.is-silent .pm-strip-name,
.pm-strip.is-silent .pm-vol {
  opacity: 0.4;
}

.pm-strip-name {
  grid-area: name;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pm-ms {
  width: 26px;
  height: 26px;
  border: 1px solid var(--pm-line) !important;
  border-radius: 4px;
  font-family: var(--pm-mono);
  font-size: 11px;
  color: var(--pm-muted) !important;
}

.pm-ms[data-pm-mute] {
  grid-area: m;
}

.pm-ms[data-pm-solo] {
  grid-area: s;
}

.pm-ms[data-pm-mute][aria-pressed="true"] {
  background: var(--pm-fg);
  border-color: var(--pm-fg) !important;
  color: var(--pm-bg) !important;
}

.pm-ms[data-pm-solo][aria-pressed="true"] {
  background: var(--pm-accent);
  border-color: var(--pm-accent) !important;
  color: var(--pm-bg) !important;
}

.pm-vol {
  grid-area: vol;
  width: 100%;
}

.pm-pan {
  grid-area: pan;
  width: 56px;
}

.pm input.pm-vol,
.pm input.pm-pan {
  accent-color: #b5b5b5;
}

@media (max-width: 1100px) {
  .pm {
    grid-template-columns: 220px minmax(0, 1fr);
  }

  .pm-mixer {
    grid-column: 1 / -1;
    position: static;
    max-height: none;
  }
}

@media (max-width: 700px) {
  .pm {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
    padding: 24px 16px 64px;
  }

  .pm-songs {
    position: relative;
    max-height: none;
    overflow: visible;
  }
}
`;var ht=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],bt={Db:"C#",Eb:"D#",Gb:"F#",Ab:"G#",Bb:"A#"},Tt=[["Taktur",/drum|kick|snare|perc|trommu|slagverk|bass/],["Kassag\xEDtarar",/acoustic|akust|kassa/],["Rafg\xEDtarar",/guit|gítar|gitar|gtr/],["Hlj\xF3mbor\xF0",/piano|píanó|keys|organ|orgel|synth|rhodes|hljómb/],["S\xF6ngur",/vocal|vox|voice|söng|rödd|kór|choir|backing/],["Bl\xE1stur",/trombone|trumpet|sax|horn|básún|trompet|brass|blást/],["Anna\xF0",/.*/]],Ct=["Taktur","Rafg\xEDtarar","Kassag\xEDtarar","Hlj\xF3mbor\xF0","S\xF6ngur","Bl\xE1stur","Anna\xF0"],zt=`<svg viewBox="0 0 10 16" aria-hidden="true">${[3,8,13].map(r=>`<circle cx="2.5" cy="${r}" r="1.5"/><circle cx="7.5" cy="${r}" r="1.5"/>`).join("")}</svg>`,jt=[["both","B\xE6\xF0i"],["chords","Hlj\xF3mar"],["lyrics","Texti"]];function $(r){return(r||"").replace(/[​-‏﻿]/g,"").trim()}var Mt={\u00F0:"d",\u00FE:"th",\u00E6:"ae",\u00F6:"o"};function J(r){return $(r).toLowerCase().replace(/[ðþæö]/g,s=>Mt[s]).normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}function Nt(r){let s=[],m=/([^\s:,;][^:,;\n]*?)\s*:\s*(https?:\/\/[^\s,;]+)/g,l;for(;l=m.exec(r.getAttribute("data-pm-stems")||"");)s.push([$(l[1]),l[2]]);Array.from(r.attributes).forEach(h=>{let o=$(h.value);h.name.startsWith("data-stem-")&&/^https?:\/\//.test(o)&&s.push([h.name.slice(10),o])});let x=new Set;return s.map(([h,o],L)=>{let y=J(h)||`stem-${L+1}`;for(;x.has(y);)y+="-2";return x.add(y),{id:y,name:h,url:o}})}function Bt(r){let s=r.split(":").map(Number);return!s.length||s.some(m=>!Number.isFinite(m))?null:s.reduce((m,l)=>m*60+l,0)}function Ot(r){return $(r).split(/[\s,;]+/).filter(Boolean).map(Bt)}function qt(r){return Array.from(r.querySelectorAll("[data-chords]")).map(s=>{let m=s.parentElement,l=$(s.getAttribute("data-chords")||s.textContent),x=m.querySelector(".w-richtext"),h=!!$(x?.textContent);if(!l&&!h)return null;let o=$(m.querySelector(".kafli-repeat")?.lastElementChild?.textContent);return{label:$(m.querySelector("h1, h2, h3, h4")?.textContent),chords:l,repeat:/^\d+$/.test(o)?Number(o):null,lyrics:h?x:null,start:null}}).filter(Boolean)}function Pt(){return Array.from(document.querySelectorAll("[data-pm-song]")).map((r,s)=>{let m=r.closest(".w-dyn-item")||r.parentElement,l=$(r.getAttribute("data-pm-title"))||$(m.querySelector("h1, h2")?.textContent)||`Lag ${s+1}`,x=J(r.getAttribute("data-pm-song"))||J(l)||`lag-${s+1}`,h=qt(m),o=Ot(r.getAttribute("data-pm-times"));return h.forEach((L,y)=>{L.start=o[y]??null}),{id:x,title:l,stems:Nt(r),sections:h}})}function f(r){return String(r).replace(/[&<>"']/g,s=>`&#${s.charCodeAt(0)};`)}function M(r){if(!Number.isFinite(r))return"0:00";let s=Math.max(0,Math.floor(r));return`${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`}function Rt(r){let s=r.replace(/([a-zA-Zþæöðáéíóúý])(\d+)$/,"$1 $2");return s.charAt(0).toUpperCase()+s.slice(1)}function Ht(r){let s=r.name.toLowerCase();return Tt.find(([,m])=>m.test(s))[0]}function xt(r,s){return r.split("/").map(m=>{let l=m.match(/^([A-G])([#b]?)(.*)$/);if(!l)return m;let x=bt[l[1]+l[2]]||l[1]+l[2],h=ht.indexOf(x);return h<0?m:ht[((h+s)%12+12)%12]+l[3]}).join("/")}function Kt(r,s){return s?r.split(/(\s+|-+)/).map(m=>/^(\s+|-+)?$/.test(m)?m:xt(m,s)).join(""):r}function Dt(r){for(let s of r.sections){let m=s.chords.match(/[A-G][#b]?/);if(m)return bt[m[0]]||m[0]}return null}function Ft(){let r=Pt();if(!r.length)return;if(!document.querySelector("style[data-pm-style]")){let t=document.createElement("style");t.setAttribute("data-pm-style",""),t.textContent=ft,document.head.appendChild(t)}let s=document.querySelector("[data-pm-song]").closest(".w-dyn-list"),m=document.querySelector("[data-pm-app]");m||(m=document.createElement("div"),(s||document.body).before(m)),s&&(s.hidden=!0),m.classList.add("pm");let l=ot();r.forEach(t=>{l.define({id:t.id,tracks:t.stems.map(({id:n,url:e})=>({id:n,url:e}))})});let x=new Map,h="both",o=r.find(t=>`#${t.id}`===location.hash)||r[0],L=!1,y=-1,C=new Map(r.map(t=>[t.id,t])),u=null,g=null,S=null,z=new Map;m.innerHTML=`
    <nav class="pm-songs" aria-label="Lagalisti" data-pm-el="nav"></nav>
    <main class="pm-main">
      <div class="pm-step" data-pm-el="step" hidden>
        <button type="button" data-pm-step="-1"></button>
        <button type="button" data-pm-step="1"></button>
      </div>
      <h1 class="pm-title" data-pm-el="title"></h1>
      <div class="pm-transport">
        <button type="button" class="pm-play" data-pm-el="play" aria-label="Spila">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="pm-icon-play"><path d="M8 5v14l11-7z"/></svg>
          <svg viewBox="0 0 24 24" aria-hidden="true" class="pm-icon-pause"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>
        </button>
        <span class="pm-time" data-pm-el="time">0:00 / 0:00</span>
        <input type="range" class="pm-seek" data-pm-el="seek" min="0" max="1000" value="0" aria-label="Sta\xF0setning \xED laginu">
      </div>
      <p class="pm-note" data-pm-el="note" hidden></p>
      <form class="pm-per" data-pm-el="per" hidden>
        <details class="pm-intro" data-pm-el="intro-box">
          <summary>Kynning <span data-pm-el="intro-hint"></span></summary>
          <textarea data-pm-field="kynning" rows="8" aria-label="Kynning \xE1 undan laginu"></textarea>
        </details>
        <label class="pm-field">
          <span>N\xF3tur fr\xE1 \xE6fingum</span>
          <textarea data-pm-field="notur" rows="2" placeholder="T.d. styttum outro, N\xF3i telur inn, n\xFD l\xEDna \xED \xF6\xF0ru erindi"></textarea>
        </label>
        <div class="pm-per-foot">
          <label class="pm-length">Lengd <input data-pm-field="lengd" placeholder="m:ss" size="5"></label>
          <button type="submit" class="pm-save" data-pm-el="save">Vista</button>
          <p class="pm-status" data-pm-el="status" aria-live="polite"></p>
        </div>
      </form>
      <div class="pm-structure" data-pm-el="structure"></div>
      <div class="pm-toolbar" data-pm-el="toolbar">
        <div class="pm-views" role="group" aria-label="S\xFDn">${jt.map(([t,n])=>`<button type="button" data-pm-view="${t}">${n}</button>`).join("")}</div>
        <div class="pm-transpose">
          <button type="button" data-pm-transpose="-1" aria-label="L\xE6kka um h\xE1lft\xF3n">\u2212</button>
          <span data-pm-el="key"></span>
          <button type="button" data-pm-transpose="1" aria-label="H\xE6kka um h\xE1lft\xF3n">+</button>
        </div>
      </div>
      <div class="pm-sections" data-pm-el="sections"></div>
    </main>
    <aside class="pm-mixer" aria-label="Mixer">
      <div class="pm-mixer-head">
        <span data-pm-el="count"></span>
        <button type="button" class="pm-link" data-pm-el="reset">Endurstilla</button>
      </div>
      <div data-pm-el="strips"></div>
    </aside>`;let b=t=>m.querySelector(`[data-pm-el="${t}"]`),p={nav:b("nav"),step:b("step"),per:b("per"),introBox:b("intro-box"),introHint:b("intro-hint"),save:b("save"),status:b("status"),toolbar:b("toolbar"),title:b("title"),play:b("play"),time:b("time"),seek:b("seek"),note:b("note"),structure:b("structure"),key:b("key"),sections:b("sections"),count:b("count"),reset:b("reset"),strips:b("strips")};function A(t=o){return l.getSong(t.id)?.duration||0}function vt(t,n){let e=t.sections.slice(n+1).find(a=>a.start!==null);return e?e.start:A(t)}function E(t){return u?.rows.get(t)?.lag||C.get(t)?.title||t}function Y(){if(!u)return{listed:r.map(n=>n.id),other:[]};let t=g||u.order;return{listed:t,other:r.map(n=>n.id).filter(n=>!t.includes(n))}}function k(){let{listed:t,other:n}=Y(),e=!!g,a=(d,j)=>{let w=t.indexOf(d),v=e?w===-1?`<span class="pm-order"><button type="button" data-pm-add="${f(d)}" aria-label="Setja ${f(E(d))} \xE1 listann">+</button></span>`:`<span class="pm-order">
              <button type="button" data-pm-move="${f(d)}" data-pm-by="-1" ${w===0?"disabled":""} aria-label="F\xE6ra ${f(E(d))} upp">\u2191</button>
              <button type="button" data-pm-move="${f(d)}" data-pm-by="1" ${w===t.length-1?"disabled":""} aria-label="F\xE6ra ${f(E(d))} ni\xF0ur">\u2193</button>
              <button type="button" data-pm-remove="${f(d)}" aria-label="Taka ${f(E(d))} af listanum">\xD7</button>
            </span>`:"";return`<li>${e?`<span class="pm-grip" data-pm-grip="${f(d)}" title="Draga til" aria-hidden="true">${zt}</span>`:""}<button type="button" data-pm-pick="${f(d)}" aria-current="${d===o.id}">
          <span class="pm-num">${j===null?"\u2013":String(j+1).padStart(2,"0")}</span>
          <span>${f(E(d))}</span></button>${v}</li>`},i="";if(u){let d=t.map(v=>ut(u.rows.get(v)?.lengd)),j=d.filter(v=>v===null).length,w=d.reduce((v,B)=>v+(B||0),0);i=`<div class="pm-songs-head">
          <span class="pm-total">${t.length} l\xF6g \xB7 ${M(w)}${j?` <small>(${j} \xE1n lengdar)</small>`:""}</span>
          <label class="pm-who">\xC9g er <select data-pm-who>
            <option value="">veldu</option>
            ${u.names.map(v=>`<option ${v===T.get()?"selected":""}>${f(v)}</option>`).join("")}
          </select></label>
          ${e?"":'<button type="button" class="pm-link" data-pm-order="edit">Breyta r\xF6\xF0</button>'}
        </div>`}let c=e?`<div class="pm-order-foot">
          <button type="button" class="pm-save" data-pm-order="save">Vista r\xF6\xF0</button>
          <button type="button" class="pm-link" data-pm-order="cancel">H\xE6tta vi\xF0</button>
          <p class="pm-status" data-pm-el="order-status" aria-live="polite"></p>
        </div>`:"";S=null,p.nav.classList.remove("is-dragging"),p.nav.classList.toggle("is-editing",e),p.nav.innerHTML=`${i}
      <ol>${t.filter(d=>C.has(d)).map(d=>a(d,t.indexOf(d))).join("")}</ol>
      ${n.length?`<p class="pm-songs-sub">Utan lagalista</p><ul>${n.map(d=>a(d,null)).join("")}</ul>`:""}
      ${c}`}function _(){let{listed:t}=Y(),n=t.indexOf(o.id);return n===-1?[null,null]:[t[n-1]||null,t[n+1]||null]}function D(){let[t,n]=_();p.step.hidden=!u||!t&&!n;let[e,a]=p.step.querySelectorAll("button");e.hidden=!t,a.hidden=!n,e.dataset.pmTarget=t||"",a.dataset.pmTarget=n||"",e.textContent=t?`\u2190 ${E(t)}`:"",a.textContent=n?`N\xE6st: ${E(n)} \u2192`:""}let F=["kynning","notur","lengd"],O=t=>p.per.querySelector(`[data-pm-field="${t}"]`);function q(t=o.id){return u?.rows.get(t)||null}function Q(){let t=q();return t?F.filter(n=>O(n).value!==(t[n]||"")):[]}function I(t){let n=q();if(p.per.hidden=!n,!n)return;let e=z.get(o.id)||n;F.forEach(a=>{O(a).value=e[a]||""}),p.introHint.textContent=n.kynning.trim()?"":"(engin enn)",N(t)}function N(t){let n=q(),e=Q();e.length?z.set(o.id,Object.fromEntries(F.map(a=>[a,O(a).value]))):z.delete(o.id),p.save.disabled=!e.length,p.status.classList.toggle("is-warning",!!t||e.length>0),p.status.textContent=t||(e.length?"\xD3vista\xF0ar breytingar":n.breytt&&n.breyttAf?`S\xED\xF0ast vista\xF0 ${gt(n.breytt)} af ${n.breyttAf}`:"")}function G(){let t=o;k(),D(),I(),p.title.textContent=E(t.id),p.play.disabled=!t.stems.length,p.note.hidden=!!t.stems.length,p.note.textContent=t.missing?"Ekki komi\xF0 \xED mixerinn: bara kynning og n\xF3tur.":"Engin stem fyrir \xFEetta lag \u2014 bara hlj\xF3mar og texti.",p.toolbar.hidden=!t.sections.length,y=-1,Z(),V(),X(),tt(),P(l.getTime(t.id))}function Z(){let t=o,e=!!A(t)&&t.sections.some(a=>a.start!==null);p.structure.hidden=!t.sections.length,p.structure.innerHTML=t.sections.map((a,i)=>{let c=e&&a.start!==null?Math.max(1,vt(t,i)-a.start):1,d=e&&a.start!==null?"button":"div";return`<${d} ${d==="button"?'type="button"':""} class="pm-seg" data-pm-seg="${i}"
          style="flex-grow:${c}"><span>${f(a.label||`Kafli ${i+1}`)}</span></${d}>`}).join("")}function V(){let t=o,n=x.get(t.id)||0;p.sections.dataset.view=h,p.sections.innerHTML="",t.sections.forEach((e,a)=>{let i=document.createElement("section");i.className="pm-section",i.dataset.pmSection=a;let c=e.start!==null&&t.stems.length;if(i.innerHTML=`
        <${c?'button type="button"':"div"} class="pm-section-head" ${c?`data-pm-jump="${a}"`:""}>
          <span class="pm-label">${f(e.label||`Kafli ${a+1}`)}${e.repeat?` \xD7${e.repeat}`:""}</span>
          ${e.start!==null?`<span class="pm-start">${M(e.start)}</span>`:""}
        </${c?"button":"div"}>
        ${e.chords?`<div class="pm-chords">${f(Kt(e.chords,n))}</div>`:""}`,e.lyrics){let d=document.createElement("div");d.className="pm-lyrics",d.append(...Array.from(e.lyrics.cloneNode(!0).childNodes)),i.appendChild(d)}p.sections.appendChild(i)}),m.querySelectorAll("[data-pm-view]").forEach(e=>{e.setAttribute("aria-pressed",e.dataset.pmView===h?"true":"false")})}function X(){let t=x.get(o.id)||0,n=Dt(o),e=t>0?`+${t}`:t<0?`${t}`:"";p.key.textContent=n?`${xt(n,t)}${e?` (${e})`:""}`:e||"T\xF3nn"}function tt(){let t=o,n=l.getSong(t.id);if(!t.stems.length){p.strips.innerHTML="",p.count.textContent="Engar r\xE1sir",p.reset.hidden=!0;return}p.reset.hidden=!1;let e=new Map;t.stems.forEach((a,i)=>{let c=Ht(a);e.has(c)||e.set(c,[]),e.get(c).push({stem:a,track:n.tracks[i]})}),p.strips.innerHTML=Ct.filter(a=>e.has(a)).map(a=>`<div class="pm-group"><div class="pm-group-name">${a}</div>${e.get(a).map(({stem:i,track:c})=>`<div class="pm-strip" data-pm-strip="${f(i.id)}">
              <span class="pm-strip-name">${f(Rt(i.name))}</span>
              <button type="button" class="pm-ms" data-pm-mute aria-pressed="${c.muted}" aria-label="\xDEagga ${f(i.name)}">M</button>
              <button type="button" class="pm-ms" data-pm-solo aria-pressed="${c.soloed}" aria-label="S\xF3l\xF3 ${f(i.name)}">S</button>
              <input type="range" class="pm-vol" data-pm-vol min="0" max="1" step="0.01" value="${c.volume}" aria-label="Styrkur ${f(i.name)}">
              <input type="range" class="pm-pan" data-pm-pan min="-1" max="1" step="0.01" value="${c.pan}" aria-label="Pan ${f(i.name)}">
            </div>`).join("")}</div>`).join(""),et()}function et(){let t=l.getSong(o.id);if(!t)return;let n=t.tracks.some(a=>a.soloed),e=0;t.tracks.forEach(a=>{let i=p.strips.querySelector(`[data-pm-strip="${CSS.escape(a.id)}"]`),c=a.muted||n&&!a.soloed;c||(e+=1),i&&(i.classList.toggle("is-silent",c),i.querySelector("[data-pm-mute]").setAttribute("aria-pressed",a.muted),i.querySelector("[data-pm-solo]").setAttribute("aria-pressed",a.soloed))}),p.count.textContent=`${e} af ${t.tracks.length} r\xE1sum`}function P(t){let n=A();p.time.textContent=`${M(t)} / ${M(n)}`,L||(p.seek.value=n?Math.round(t/n*1e3):0),p.structure.style.setProperty("--pm-progress",n?`${t/n*100}%`:"0%");let e=-1;o.sections.forEach((a,i)=>{a.start!==null&&t>=a.start&&(e=i)}),e!==y&&(y=e,m.querySelectorAll("[data-pm-seg], [data-pm-section]").forEach(a=>{let i=Number(a.dataset.pmSeg??a.dataset.pmSection);a.classList.toggle("is-current",i===e)}))}function U(t){let n=r.find(i=>i.id===t);if(!n||n===o)return;let e=l.isPlaying(o.id);o=n;let a=new URL(location.href);a.hash=n.id,history.replaceState(history.state,"",a.href),n.stems.length?e?l.play(n.id):l.select(n.id):l.pause(),G()}function nt(){o.stems.length&&(l.isPlaying(o.id)?l.pause(o.id):l.play(o.id))}function at(t){let n=o.sections[t]?.start;n!=null&&(l.isPlaying(o.id)?l.seek(n,o.id):(l.seek(n,o.id),l.play(o.id)))}function yt(t){let n=_()[t<0?0:1];n&&U(n)}function rt(t){let n=new Map(t.map(e=>[e.id,e]));t.forEach(e=>{if(C.has(e.id))return;let a={id:e.id,title:e.lag,stems:[],sections:[],missing:!0};r.push(a),C.set(e.id,a)}),u={...u,rows:n,order:t.filter(e=>e.rod!==null).map(e=>e.id)}}async function kt(){let{key:t,fresh:n}=ct();if(t)try{let e=await K(t,{action:"lagalisti"});if(!e.ok)throw new Error(e.villa);u={key:t,names:e.nofn},rt(e.log),!location.hash&&u.order.length&&!l.isPlaying(o.id)&&(o=C.get(u.order[0])),G()}catch(e){(n||e.badKey)&&(p.note.hidden=!1,p.note.textContent=e.badKey?"Hlekkurinn gildir ekki, svo t\xF3nleikar\xF6\xF0in s\xE9st ekki. Biddu \xD3la um n\xFDjan.":"N\xE1\xF0i ekki \xED t\xF3nleikar\xF6\xF0ina. Reyndu a\xF0 endurhla\xF0a s\xED\xF0una.")}}async function wt(){let t=q(),n=Q();if(!t||!n.length)return;if(!T.get()){N("Veldu fyrst hver \xFE\xFA ert, efst \xED lagalistanum.");return}let e=o.id,a=Object.fromEntries(n.map(i=>[i,O(i).value]));p.save.disabled=!0,p.status.textContent="Vista \u2026";try{let i=await K(u.key,{action:"lagVista",id:e,hver:T.get(),breytt:t.breytt,reitir:a});if(i.arekstur){u.rows.set(e,i.lag),o.id===e&&N(i.villa);return}if(!i.ok)throw new Error(i.villa);u.rows.set(e,i.lag),z.delete(e),o.id===e&&I(),k()}catch(i){o.id===e&&N(`T\xF3kst ekki a\xF0 vista. ${i.message}`)}}function R(t){let n=m.querySelector('[data-pm-el="order-status"]');n&&(n.textContent=t)}async function $t(){if(!T.get()){R("Veldu fyrst hver \xFE\xFA ert.");return}let t=u.order,n=g;if(n.join(`
`)===t.join(`
`)){g=null,k();return}R("Vista \u2026");try{let e=await K(u.key,{action:"rodVista",hver:T.get(),adur:t,rod:n.map(a=>({id:a,lag:E(a)}))});if(!e.ok&&!e.arekstur)throw new Error(e.villa);rt(e.log),g=e.arekstur?[...u.order]:null,k(),D(),z.has(o.id)||I(),e.arekstur&&R(e.villa)}catch(e){R(`T\xF3kst ekki a\xF0 vista. ${e.message}`)}}m.addEventListener("click",t=>{let n=t.target.closest("button");if(!n||!m.contains(n))return;let e=n.dataset;if(e.pmPick)U(e.pmPick);else if(e.pmTarget)U(e.pmTarget);else if(e.pmOrder==="edit")g=[...u.order],k();else if(e.pmOrder==="cancel")g=null,k(),D();else if(e.pmOrder==="save")$t();else if(e.pmMove){let a=g.indexOf(e.pmMove),i=a+Number(e.pmBy);a!==-1&&i>=0&&i<g.length&&([g[a],g[i]]=[g[i],g[a]],k(),m.querySelector(`[data-pm-move="${CSS.escape(e.pmMove)}"][data-pm-by="${e.pmBy}"]:not(:disabled)`)?.focus())}else if(e.pmRemove)g=g.filter(a=>a!==e.pmRemove),k();else if(e.pmAdd)g=[...g,e.pmAdd],k();else if(e.pmEl==="play")nt();else if(e.pmSeg!==void 0)at(Number(e.pmSeg));else if(e.pmJump!==void 0)at(Number(e.pmJump));else if(e.pmView)h=e.pmView,V(),y=-1,P(l.getTime(o.id));else if(e.pmTranspose)x.set(o.id,(x.get(o.id)||0)+Number(e.pmTranspose)),V(),X(),y=-1,P(l.getTime(o.id));else if(e.pmEl==="reset")l.resetMix(o.id),tt();else if(e.pmMute!==void 0||e.pmSolo!==void 0){let a=n.closest("[data-pm-strip]").dataset.pmStrip,i=l.getSong(o.id).tracks.find(d=>d.id===a),c=e.pmMute!==void 0?"muted":"soloed";l.setTrack(o.id,a,{[c]:!i[c]}),et()}});function it(t){let{li:n,ph:e,offset:a}=S,i=p.nav,c=i.getBoundingClientRect();t<c.top+32?i.scrollTop-=12:t>c.bottom-32&&(i.scrollTop+=12),n.style.top=`${t-c.top+i.scrollTop-a}px`;let d=i.querySelector("ol"),w=[...i.querySelectorAll("ol > li, .pm-songs-sub, ul > li")].filter(v=>v!==n&&v!==e).find(v=>{let B=v.getBoundingClientRect();return t<B.top+B.height/2});w?w.matches(".pm-songs-sub")?d.append(e):w.previousElementSibling!==e&&w.before(e):(i.querySelector("ul")||d).append(e)}p.nav.addEventListener("pointerdown",t=>{let n=t.target.closest("[data-pm-grip]");if(!n||!g||S||t.button!==0)return;t.preventDefault();let e=n.closest("li"),a=e.getBoundingClientRect(),i=document.createElement("li");i.className="pm-drop",i.style.height=`${a.height}px`,e.after(i),S={li:e,ph:i,id:n.dataset.pmGrip,offset:t.clientY-a.top,pointer:t.pointerId},n.setPointerCapture(t.pointerId),e.classList.add("is-dragging"),p.nav.classList.add("is-dragging"),it(t.clientY)}),p.nav.addEventListener("pointermove",t=>{S&&t.pointerId===S.pointer&&it(t.clientY)});function st(t){if(!S||t.pointerId!==S.pointer)return;let{li:n,ph:e,id:a}=S;t.type==="pointerup"&&p.nav.contains(e)&&(g=[...p.nav.querySelectorAll("ol > li")].filter(c=>c!==n).map(c=>c===e?a:c.querySelector("[data-pm-grip]")?.dataset.pmGrip).filter(Boolean).concat(g.filter(c=>!C.has(c)))),k()}p.nav.addEventListener("pointerup",st),p.nav.addEventListener("pointercancel",st),p.per.addEventListener("submit",t=>{t.preventDefault(),wt()}),m.addEventListener("change",t=>{t.target.matches("[data-pm-who]")&&T.set(t.target.value)}),window.addEventListener("beforeunload",t=>{z.size&&(t.preventDefault(),t.returnValue="")}),m.addEventListener("input",t=>{if(t.target.closest("[data-pm-field]")){N();return}let n=t.target.closest("[data-pm-strip]");if(n){let e=t.target.matches("[data-pm-vol]")?"volume":"pan";l.setTrack(o.id,n.dataset.pmStrip,{[e]:parseFloat(t.target.value)})}else t.target===p.seek&&(L=!0,p.time.textContent=`${M(p.seek.value/1e3*A())} / ${M(A())}`)}),p.seek.addEventListener("change",()=>{L=!1;let t=A();t&&l.seek(p.seek.value/1e3*t,o.id)}),document.addEventListener("keydown",t=>{if(!(t.repeat||t.altKey||t.ctrlKey||t.metaKey)){if(t.code==="Space"){if(t.target.closest?.("textarea, select, [contenteditable], input:not([type=range])"))return;t.preventDefault(),nt()}else if((t.key==="ArrowLeft"||t.key==="ArrowRight")&&u&&!g){if(t.target.closest?.("textarea, select, input, [contenteditable]"))return;t.preventDefault(),yt(t.key==="ArrowLeft"?-1:1)}}}),l.on("state",({songId:t,state:n})=>{t===o.id&&(p.play.dataset.state=n,p.play.setAttribute("aria-label",n==="playing"?"Gera hl\xE9":"Spila"))}),l.on("time",({songId:t,time:n})=>{t===o.id&&(p.structure.dataset.duration!==String(A())&&(p.structure.dataset.duration=String(A()),Z(),y=-1),P(n))}),G(),kt(),console.log(`permixer: ${r.length} l\xF6g`)}export{Ft as default};
//# sourceMappingURL=permixer.js.map
