import{a as nt}from"./chunk-GVUDIESM.js";import"./chunk-FW4363Y4.js";function I(r){try{return localStorage.getItem(r)||""}catch{return""}}function B(r,s){try{s?localStorage.setItem(r,s):localStorage.removeItem(r)}catch{}}function rt(r,s){let p=new URL(location.href),o=(p.searchParams.get(r)||"").trim();if(!o)return{lykill:I(s),nyr:!1};B(s,o),p.searchParams.delete(r);try{history.replaceState(history.state,"",p.href)}catch{}return{lykill:o,nyr:!0}}var kt="Ekkert samband.";function st(r,s){return fetch(r,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(s)}).then(p=>p.json().catch(()=>{throw new Error("Bakendinn svara\xF0i ekki eins og hann \xE1 a\xF0 gera.")}),()=>{throw new Error(kt)})}var wt="https://script.google.com/macros/s/AKfycbzQ-oaSyVQpcWQO2UkB0BkZToo-RlIdZR2Ap3iYBsb7BnAH4wkpNlWotDb_b9rdFHnG/exec",ot="per-yfirlestur-lykill",it="per-yfirlestur-hver";function pt(){let{lykill:r,nyr:s}=rt("k",ot);return{key:r,fresh:s}}var A={get:()=>I(it),set:r=>B(it,r)};async function H(r,s){let p=await st(wt,{...s,k:r});if(p.rangurLykill){B(ot,"");let o=new Error("Hlekkurinn gildir ekki.");throw o.badKey=!0,o}return p}function lt(r){let s=/^(\d{1,2}):(\d\d)$/.exec((r||"").trim());return s?Number(s[1])*60+Number(s[2]):null}var $t=["jan","feb","mar","apr","ma\xED","j\xFAn","j\xFAl","\xE1g\xFA","sep","okt","n\xF3v","des"];function mt(r){let s=/^(\d{4})-(\d\d)-(\d\d) (\d\d:\d\d)/.exec(r||"");return s?`${Number(s[3])}. ${$t[Number(s[2])-1]} kl. ${s[4]}`:""}var dt=`/* \xC6fingas\xED\xF0an (permixer.js). Sprauta\xF0 inn \xFAr JS, allt undir .pm */

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

/* Lagalisti */
.pm-songs ol {
  list-style: none;
  margin: 0;
  padding: 0;
  position: sticky;
  top: 24px;
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

.pm-songs.is-editing ol {
  position: static;
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

  .pm-songs ol {
    position: static;
  }
}
`;var ct=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],ut={Db:"C#",Eb:"D#",Gb:"F#",Ab:"G#",Bb:"A#"},Et=[["Taktur",/drum|kick|snare|perc|trommu|slagverk|bass/],["Kassag\xEDtarar",/acoustic|akust|kassa/],["Rafg\xEDtarar",/guit|gítar|gitar|gtr/],["Hlj\xF3mbor\xF0",/piano|píanó|keys|organ|orgel|synth|rhodes|hljómb/],["S\xF6ngur",/vocal|vox|voice|söng|rödd|kór|choir|backing/],["Bl\xE1stur",/trombone|trumpet|sax|horn|básún|trompet|brass|blást/],["Anna\xF0",/.*/]],At=["Taktur","Rafg\xEDtarar","Kassag\xEDtarar","Hlj\xF3mbor\xF0","S\xF6ngur","Bl\xE1stur","Anna\xF0"],Tt=[["both","B\xE6\xF0i"],["chords","Hlj\xF3mar"],["lyrics","Texti"]];function k(r){return(r||"").replace(/[​-‏﻿]/g,"").trim()}var zt={\u00F0:"d",\u00FE:"th",\u00E6:"ae",\u00F6:"o"};function U(r){return k(r).toLowerCase().replace(/[ðþæö]/g,s=>zt[s]).normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}function Ct(r){let s=[],p=/([^\s:,;][^:,;\n]*?)\s*:\s*(https?:\/\/[^\s,;]+)/g,o;for(;o=p.exec(r.getAttribute("data-pm-stems")||"");)s.push([k(o[1]),o[2]]);Array.from(r.attributes).forEach(f=>{let i=k(f.value);f.name.startsWith("data-stem-")&&/^https?:\/\//.test(i)&&s.push([f.name.slice(10),i])});let x=new Set;return s.map(([f,i],E)=>{let y=U(f)||`stem-${E+1}`;for(;x.has(y);)y+="-2";return x.add(y),{id:y,name:f,url:i}})}function Lt(r){let s=r.split(":").map(Number);return!s.length||s.some(p=>!Number.isFinite(p))?null:s.reduce((p,o)=>p*60+o,0)}function Mt(r){return k(r).split(/[\s,;]+/).filter(Boolean).map(Lt)}function jt(r){return Array.from(r.querySelectorAll("[data-chords]")).map(s=>{let p=s.parentElement,o=k(s.getAttribute("data-chords")||s.textContent),x=p.querySelector(".w-richtext"),f=!!k(x?.textContent);if(!o&&!f)return null;let i=k(p.querySelector(".kafli-repeat")?.lastElementChild?.textContent);return{label:k(p.querySelector("h1, h2, h3, h4")?.textContent),chords:o,repeat:/^\d+$/.test(i)?Number(i):null,lyrics:f?x:null,start:null}}).filter(Boolean)}function Nt(){return Array.from(document.querySelectorAll("[data-pm-song]")).map((r,s)=>{let p=r.closest(".w-dyn-item")||r.parentElement,o=k(r.getAttribute("data-pm-title"))||k(p.querySelector("h1, h2")?.textContent)||`Lag ${s+1}`,x=U(r.getAttribute("data-pm-song"))||U(o)||`lag-${s+1}`,f=jt(p),i=Mt(r.getAttribute("data-pm-times"));return f.forEach((E,y)=>{E.start=i[y]??null}),{id:x,title:o,stems:Ct(r),sections:f}})}function g(r){return String(r).replace(/[&<>"']/g,s=>`&#${s.charCodeAt(0)};`)}function z(r){if(!Number.isFinite(r))return"0:00";let s=Math.max(0,Math.floor(r));return`${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`}function Ot(r){let s=r.replace(/([a-zA-Zþæöðáéíóúý])(\d+)$/,"$1 $2");return s.charAt(0).toUpperCase()+s.slice(1)}function Kt(r){let s=r.name.toLowerCase();return Et.find(([,p])=>p.test(s))[0]}function gt(r,s){return r.split("/").map(p=>{let o=p.match(/^([A-G])([#b]?)(.*)$/);if(!o)return p;let x=ut[o[1]+o[2]]||o[1]+o[2],f=ct.indexOf(x);return f<0?p:ct[((f+s)%12+12)%12]+o[3]}).join("/")}function Pt(r,s){return s?r.split(/(\s+|-+)/).map(p=>/^(\s+|-+)?$/.test(p)?p:gt(p,s)).join(""):r}function Bt(r){for(let s of r.sections){let p=s.chords.match(/[A-G][#b]?/);if(p)return ut[p[0]]||p[0]}return null}function Ht(){let r=Nt();if(!r.length)return;if(!document.querySelector("style[data-pm-style]")){let t=document.createElement("style");t.setAttribute("data-pm-style",""),t.textContent=dt,document.head.appendChild(t)}let s=document.querySelector("[data-pm-song]").closest(".w-dyn-list"),p=document.querySelector("[data-pm-app]");p||(p=document.createElement("div"),(s||document.body).before(p)),s&&(s.hidden=!0),p.classList.add("pm");let o=nt();r.forEach(t=>{o.define({id:t.id,tracks:t.stems.map(({id:a,url:e})=>({id:a,url:e}))})});let x=new Map,f="both",i=r.find(t=>`#${t.id}`===location.hash)||r[0],E=!1,y=-1,C=new Map(r.map(t=>[t.id,t])),u=null,b=null,T=new Map;p.innerHTML=`
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
        <div class="pm-views" role="group" aria-label="S\xFDn">${Tt.map(([t,a])=>`<button type="button" data-pm-view="${t}">${a}</button>`).join("")}</div>
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
    </aside>`;let h=t=>p.querySelector(`[data-pm-el="${t}"]`),m={nav:h("nav"),step:h("step"),per:h("per"),introBox:h("intro-box"),introHint:h("intro-hint"),save:h("save"),status:h("status"),toolbar:h("toolbar"),title:h("title"),play:h("play"),time:h("time"),seek:h("seek"),note:h("note"),structure:h("structure"),key:h("key"),sections:h("sections"),count:h("count"),reset:h("reset"),strips:h("strips")};function S(t=i){return o.getSong(t.id)?.duration||0}function ft(t,a){let e=t.sections.slice(a+1).find(n=>n.start!==null);return e?e.start:S(t)}function w(t){return u?.rows.get(t)?.lag||C.get(t)?.title||t}function W(){if(!u)return{listed:r.map(a=>a.id),other:[]};let t=b||u.order;return{listed:t,other:r.map(a=>a.id).filter(a=>!t.includes(a))}}function $(){let{listed:t,other:a}=W(),e=!!b,n=(d,M)=>{let j=t.indexOf(d),v=e?j===-1?`<span class="pm-order"><button type="button" data-pm-add="${g(d)}" aria-label="Setja ${g(w(d))} \xE1 listann">+</button></span>`:`<span class="pm-order">
              <button type="button" data-pm-move="${g(d)}" data-pm-by="-1" ${j===0?"disabled":""} aria-label="F\xE6ra ${g(w(d))} upp">\u2191</button>
              <button type="button" data-pm-move="${g(d)}" data-pm-by="1" ${j===t.length-1?"disabled":""} aria-label="F\xE6ra ${g(w(d))} ni\xF0ur">\u2193</button>
              <button type="button" data-pm-remove="${g(d)}" aria-label="Taka ${g(w(d))} af listanum">\xD7</button>
            </span>`:"";return`<li><button type="button" data-pm-pick="${g(d)}" aria-current="${d===i.id}">
          <span class="pm-num">${M===null?"\u2013":String(M+1).padStart(2,"0")}</span>
          <span>${g(w(d))}</span></button>${v}</li>`},l="";if(u){let d=t.map(v=>lt(u.rows.get(v)?.lengd)),M=d.filter(v=>v===null).length,j=d.reduce((v,vt)=>v+(vt||0),0);l=`<div class="pm-songs-head">
          <span class="pm-total">${t.length} l\xF6g \xB7 ${z(j)}${M?` <small>(${M} \xE1n lengdar)</small>`:""}</span>
          <label class="pm-who">\xC9g er <select data-pm-who>
            <option value="">veldu</option>
            ${u.names.map(v=>`<option ${v===A.get()?"selected":""}>${g(v)}</option>`).join("")}
          </select></label>
          ${e?"":'<button type="button" class="pm-link" data-pm-order="edit">Breyta r\xF6\xF0</button>'}
        </div>`}let c=e?`<div class="pm-order-foot">
          <button type="button" class="pm-save" data-pm-order="save">Vista r\xF6\xF0</button>
          <button type="button" class="pm-link" data-pm-order="cancel">H\xE6tta vi\xF0</button>
          <p class="pm-status" data-pm-el="order-status" aria-live="polite"></p>
        </div>`:"";m.nav.classList.toggle("is-editing",e),m.nav.innerHTML=`${l}
      <ol>${t.filter(d=>C.has(d)).map(d=>n(d,t.indexOf(d))).join("")}</ol>
      ${a.length?`<p class="pm-songs-sub">Utan lagalista</p><ul>${a.map(d=>n(d,null)).join("")}</ul>`:""}
      ${c}`}function _(){let{listed:t}=W(),a=t.indexOf(i.id);return a===-1?[null,null]:[t[a-1]||null,t[a+1]||null]}function R(){let[t,a]=_();m.step.hidden=!u||!t&&!a;let[e,n]=m.step.querySelectorAll("button");e.hidden=!t,n.hidden=!a,e.dataset.pmTarget=t||"",n.dataset.pmTarget=a||"",e.textContent=t?`\u2190 ${w(t)}`:"",n.textContent=a?`N\xE6st: ${w(a)} \u2192`:""}let q=["kynning","notur","lengd"],N=t=>m.per.querySelector(`[data-pm-field="${t}"]`);function O(t=i.id){return u?.rows.get(t)||null}function J(){let t=O();return t?q.filter(a=>N(a).value!==(t[a]||"")):[]}function F(t){let a=O();if(m.per.hidden=!a,!a)return;let e=T.get(i.id)||a;q.forEach(n=>{N(n).value=e[n]||""}),m.introHint.textContent=a.kynning.trim()?"":"(engin enn)",L(t)}function L(t){let a=O(),e=J();e.length?T.set(i.id,Object.fromEntries(q.map(n=>[n,N(n).value]))):T.delete(i.id),m.save.disabled=!e.length,m.status.classList.toggle("is-warning",!!t||e.length>0),m.status.textContent=t||(e.length?"\xD3vista\xF0ar breytingar":a.breytt&&a.breyttAf?`S\xED\xF0ast vista\xF0 ${mt(a.breytt)} af ${a.breyttAf}`:"")}function D(){let t=i;$(),R(),F(),m.title.textContent=w(t.id),m.play.disabled=!t.stems.length,m.note.hidden=!!t.stems.length,m.note.textContent=t.missing?"Ekki komi\xF0 \xED mixerinn: bara kynning og n\xF3tur.":"Engin stem fyrir \xFEetta lag \u2014 bara hlj\xF3mar og texti.",m.toolbar.hidden=!t.sections.length,y=-1,Q(),V(),Z(),Y(),K(o.getTime(t.id))}function Q(){let t=i,e=!!S(t)&&t.sections.some(n=>n.start!==null);m.structure.hidden=!t.sections.length,m.structure.innerHTML=t.sections.map((n,l)=>{let c=e&&n.start!==null?Math.max(1,ft(t,l)-n.start):1,d=e&&n.start!==null?"button":"div";return`<${d} ${d==="button"?'type="button"':""} class="pm-seg" data-pm-seg="${l}"
          style="flex-grow:${c}"><span>${g(n.label||`Kafli ${l+1}`)}</span></${d}>`}).join("")}function V(){let t=i,a=x.get(t.id)||0;m.sections.dataset.view=f,m.sections.innerHTML="",t.sections.forEach((e,n)=>{let l=document.createElement("section");l.className="pm-section",l.dataset.pmSection=n;let c=e.start!==null&&t.stems.length;if(l.innerHTML=`
        <${c?'button type="button"':"div"} class="pm-section-head" ${c?`data-pm-jump="${n}"`:""}>
          <span class="pm-label">${g(e.label||`Kafli ${n+1}`)}${e.repeat?` \xD7${e.repeat}`:""}</span>
          ${e.start!==null?`<span class="pm-start">${z(e.start)}</span>`:""}
        </${c?"button":"div"}>
        ${e.chords?`<div class="pm-chords">${g(Pt(e.chords,a))}</div>`:""}`,e.lyrics){let d=document.createElement("div");d.className="pm-lyrics",d.append(...Array.from(e.lyrics.cloneNode(!0).childNodes)),l.appendChild(d)}m.sections.appendChild(l)}),p.querySelectorAll("[data-pm-view]").forEach(e=>{e.setAttribute("aria-pressed",e.dataset.pmView===f?"true":"false")})}function Z(){let t=x.get(i.id)||0,a=Bt(i),e=t>0?`+${t}`:t<0?`${t}`:"";m.key.textContent=a?`${gt(a,t)}${e?` (${e})`:""}`:e||"T\xF3nn"}function Y(){let t=i,a=o.getSong(t.id);if(!t.stems.length){m.strips.innerHTML="",m.count.textContent="Engar r\xE1sir",m.reset.hidden=!0;return}m.reset.hidden=!1;let e=new Map;t.stems.forEach((n,l)=>{let c=Kt(n);e.has(c)||e.set(c,[]),e.get(c).push({stem:n,track:a.tracks[l]})}),m.strips.innerHTML=At.filter(n=>e.has(n)).map(n=>`<div class="pm-group"><div class="pm-group-name">${n}</div>${e.get(n).map(({stem:l,track:c})=>`<div class="pm-strip" data-pm-strip="${g(l.id)}">
              <span class="pm-strip-name">${g(Ot(l.name))}</span>
              <button type="button" class="pm-ms" data-pm-mute aria-pressed="${c.muted}" aria-label="\xDEagga ${g(l.name)}">M</button>
              <button type="button" class="pm-ms" data-pm-solo aria-pressed="${c.soloed}" aria-label="S\xF3l\xF3 ${g(l.name)}">S</button>
              <input type="range" class="pm-vol" data-pm-vol min="0" max="1" step="0.01" value="${c.volume}" aria-label="Styrkur ${g(l.name)}">
              <input type="range" class="pm-pan" data-pm-pan min="-1" max="1" step="0.01" value="${c.pan}" aria-label="Pan ${g(l.name)}">
            </div>`).join("")}</div>`).join(""),X()}function X(){let t=o.getSong(i.id);if(!t)return;let a=t.tracks.some(n=>n.soloed),e=0;t.tracks.forEach(n=>{let l=m.strips.querySelector(`[data-pm-strip="${CSS.escape(n.id)}"]`),c=n.muted||a&&!n.soloed;c||(e+=1),l&&(l.classList.toggle("is-silent",c),l.querySelector("[data-pm-mute]").setAttribute("aria-pressed",n.muted),l.querySelector("[data-pm-solo]").setAttribute("aria-pressed",n.soloed))}),m.count.textContent=`${e} af ${t.tracks.length} r\xE1sum`}function K(t){let a=S();m.time.textContent=`${z(t)} / ${z(a)}`,E||(m.seek.value=a?Math.round(t/a*1e3):0),m.structure.style.setProperty("--pm-progress",a?`${t/a*100}%`:"0%");let e=-1;i.sections.forEach((n,l)=>{n.start!==null&&t>=n.start&&(e=l)}),e!==y&&(y=e,p.querySelectorAll("[data-pm-seg], [data-pm-section]").forEach(n=>{let l=Number(n.dataset.pmSeg??n.dataset.pmSection);n.classList.toggle("is-current",l===e)}))}function G(t){let a=r.find(l=>l.id===t);if(!a||a===i)return;let e=o.isPlaying(i.id);i=a;let n=new URL(location.href);n.hash=a.id,history.replaceState(history.state,"",n.href),a.stems.length?e?o.play(a.id):o.select(a.id):o.pause(),D()}function tt(){i.stems.length&&(o.isPlaying(i.id)?o.pause(i.id):o.play(i.id))}function et(t){let a=i.sections[t]?.start;a!=null&&(o.isPlaying(i.id)?o.seek(a,i.id):(o.seek(a,i.id),o.play(i.id)))}function ht(t){let a=_()[t<0?0:1];a&&G(a)}function at(t){let a=new Map(t.map(e=>[e.id,e]));t.forEach(e=>{if(C.has(e.id))return;let n={id:e.id,title:e.lag,stems:[],sections:[],missing:!0};r.push(n),C.set(e.id,n)}),u={...u,rows:a,order:t.filter(e=>e.rod!==null).map(e=>e.id)}}async function bt(){let{key:t,fresh:a}=pt();if(t)try{let e=await H(t,{action:"lagalisti"});if(!e.ok)throw new Error(e.villa);u={key:t,names:e.nofn},at(e.log),!location.hash&&u.order.length&&!o.isPlaying(i.id)&&(i=C.get(u.order[0])),D()}catch(e){(a||e.badKey)&&(m.note.hidden=!1,m.note.textContent=e.badKey?"Hlekkurinn gildir ekki, svo t\xF3nleikar\xF6\xF0in s\xE9st ekki. Biddu \xD3la um n\xFDjan.":"N\xE1\xF0i ekki \xED t\xF3nleikar\xF6\xF0ina. Reyndu a\xF0 endurhla\xF0a s\xED\xF0una.")}}async function xt(){let t=O(),a=J();if(!t||!a.length)return;if(!A.get()){L("Veldu fyrst hver \xFE\xFA ert, efst \xED lagalistanum.");return}let e=i.id,n=Object.fromEntries(a.map(l=>[l,N(l).value]));m.save.disabled=!0,m.status.textContent="Vista \u2026";try{let l=await H(u.key,{action:"lagVista",id:e,hver:A.get(),breytt:t.breytt,reitir:n});if(l.arekstur){u.rows.set(e,l.lag),i.id===e&&L(l.villa);return}if(!l.ok)throw new Error(l.villa);u.rows.set(e,l.lag),T.delete(e),i.id===e&&F(),$()}catch(l){i.id===e&&L(`T\xF3kst ekki a\xF0 vista. ${l.message}`)}}function P(t){let a=p.querySelector('[data-pm-el="order-status"]');a&&(a.textContent=t)}async function yt(){if(!A.get()){P("Veldu fyrst hver \xFE\xFA ert.");return}let t=u.order,a=b;if(a.join(`
`)===t.join(`
`)){b=null,$();return}P("Vista \u2026");try{let e=await H(u.key,{action:"rodVista",hver:A.get(),adur:t,rod:a.map(n=>({id:n,lag:w(n)}))});if(!e.ok&&!e.arekstur)throw new Error(e.villa);at(e.log),b=e.arekstur?[...u.order]:null,$(),R(),T.has(i.id)||F(),e.arekstur&&P(e.villa)}catch(e){P(`T\xF3kst ekki a\xF0 vista. ${e.message}`)}}p.addEventListener("click",t=>{let a=t.target.closest("button");if(!a||!p.contains(a))return;let e=a.dataset;if(e.pmPick)G(e.pmPick);else if(e.pmTarget)G(e.pmTarget);else if(e.pmOrder==="edit")b=[...u.order],$();else if(e.pmOrder==="cancel")b=null,$(),R();else if(e.pmOrder==="save")yt();else if(e.pmMove){let n=b.indexOf(e.pmMove),l=n+Number(e.pmBy);n!==-1&&l>=0&&l<b.length&&([b[n],b[l]]=[b[l],b[n]],$(),p.querySelector(`[data-pm-move="${CSS.escape(e.pmMove)}"][data-pm-by="${e.pmBy}"]:not(:disabled)`)?.focus())}else if(e.pmRemove)b=b.filter(n=>n!==e.pmRemove),$();else if(e.pmAdd)b=[...b,e.pmAdd],$();else if(e.pmEl==="play")tt();else if(e.pmSeg!==void 0)et(Number(e.pmSeg));else if(e.pmJump!==void 0)et(Number(e.pmJump));else if(e.pmView)f=e.pmView,V(),y=-1,K(o.getTime(i.id));else if(e.pmTranspose)x.set(i.id,(x.get(i.id)||0)+Number(e.pmTranspose)),V(),Z(),y=-1,K(o.getTime(i.id));else if(e.pmEl==="reset")o.resetMix(i.id),Y();else if(e.pmMute!==void 0||e.pmSolo!==void 0){let n=a.closest("[data-pm-strip]").dataset.pmStrip,l=o.getSong(i.id).tracks.find(d=>d.id===n),c=e.pmMute!==void 0?"muted":"soloed";o.setTrack(i.id,n,{[c]:!l[c]}),X()}}),m.per.addEventListener("submit",t=>{t.preventDefault(),xt()}),p.addEventListener("change",t=>{t.target.matches("[data-pm-who]")&&A.set(t.target.value)}),window.addEventListener("beforeunload",t=>{T.size&&(t.preventDefault(),t.returnValue="")}),p.addEventListener("input",t=>{if(t.target.closest("[data-pm-field]")){L();return}let a=t.target.closest("[data-pm-strip]");if(a){let e=t.target.matches("[data-pm-vol]")?"volume":"pan";o.setTrack(i.id,a.dataset.pmStrip,{[e]:parseFloat(t.target.value)})}else t.target===m.seek&&(E=!0,m.time.textContent=`${z(m.seek.value/1e3*S())} / ${z(S())}`)}),m.seek.addEventListener("change",()=>{E=!1;let t=S();t&&o.seek(m.seek.value/1e3*t,i.id)}),document.addEventListener("keydown",t=>{if(!(t.repeat||t.altKey||t.ctrlKey||t.metaKey)){if(t.code==="Space"){if(t.target.closest?.("textarea, select, [contenteditable], input:not([type=range])"))return;t.preventDefault(),tt()}else if((t.key==="ArrowLeft"||t.key==="ArrowRight")&&u&&!b){if(t.target.closest?.("textarea, select, input, [contenteditable]"))return;t.preventDefault(),ht(t.key==="ArrowLeft"?-1:1)}}}),o.on("state",({songId:t,state:a})=>{t===i.id&&(m.play.dataset.state=a,m.play.setAttribute("aria-label",a==="playing"?"Gera hl\xE9":"Spila"))}),o.on("time",({songId:t,time:a})=>{t===i.id&&(m.structure.dataset.duration!==String(S())&&(m.structure.dataset.duration=String(S()),Q(),y=-1),K(a))}),D(),bt(),console.log(`permixer: ${r.length} l\xF6g`)}export{Ht as default};
//# sourceMappingURL=permixer.js.map
