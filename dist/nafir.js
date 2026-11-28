(()=>{var Oe=`/* Nafir-s\xED\xF0urnar: yfirlit bandsins (.vst) og birtingars\xED\xF0an (.vbt).
   Sprauta\xF0 inn af src/nafir/index.js. Grunnurinn (beige t\xE6ki\xF0, Dymo-mi\xF0ar,
   lj\xF3s, teljarar) heitir vst-* og er sameiginlegur. */
  /* Sami grunnur og /nafir: beige t\xE6ki\xF0, d\xF6kkir skj\xE1ir, Dymo-mi\xF0ar */
  body.nafir-beige { background-color: #d0c3aa; }

  .vst { color: var(--black-800, #2e2e2e); font-family: "Open Sans", sans-serif; font-size: 1rem; font-weight: 400; line-height: 1.5; padding: 0 1rem 5rem; display: grid; gap: 2rem; }
  .vst [hidden] { display: none !important; }
  .vst p, .vst ul { margin: 0; }
  .vst ul { list-style: none; padding: 0; }
  .vst-body { display: grid; gap: 3rem; }
  .vst-small { font-size: .875rem; }

  .vst-head { display: flex; justify-content: space-between; align-items: center; gap: 1rem 2rem; flex-wrap: wrap; }
  /* Mi\xF0ar \xE1 k\xF6flum: \xFAtlit Dymo-l\xEDmbandsins me\xF0 venjulegu letri, \xFEv\xED Dymo-letri\xF0
     teiknar \xEDslenska stafi illa. Dymo m\xE1 bara nota sem skraut \xE1n \xEDslenskra stafa */
  .vst .vst-midi, .vbt .vst-midi { display: inline-block; width: fit-content; margin: 0 0 .75rem; padding: .3rem .65rem .25rem; font-family: "Open Sans", sans-serif; font-size: .875rem; font-weight: 700; line-height: 1.3; letter-spacing: .14em; text-transform: uppercase; color: #ece5d6; background: #2e2e2e; border-radius: .15rem; box-shadow: 0 1px 0 #00000040; }
  .vst-head .vst-midi, .vbt-head .vst-midi { margin-bottom: 0; }
  .vst .vst-midi--red, .vbt .vst-midi--red { background: var(--vogor-red, #75161c); color: #fff; font-size: 1.125rem; }

  /* Nafni\xF0 efst \xE1 yfirlitinu; gult \xE1 me\xF0an ekkert er vali\xF0 */
  .vst-eg-bar { display: grid; gap: .35rem; padding: .9rem 1rem; border-radius: .35rem; background: #ffffff40; border: 1px solid #2e2e2e30; }
  .vst-eg-bar .vst-eg { display: flex; flex-wrap: wrap; align-items: center; gap: .5rem .75rem; margin: 0; font-weight: 700; font-size: 1rem; }
  .vst-eg-bar select { width: auto; min-width: 10rem; font-size: 1rem; padding: .35rem .5rem; }
  .vst-eg-bar--tomt { background: #f2b63259; border-color: #c48a12; }
  .vst-hopp { display: flex; flex-wrap: wrap; gap: .4rem .9rem; margin-top: -1.5rem; font-size: .875rem; }
  .vst-hopp a { color: inherit; text-decoration: underline; text-decoration-color: #2e2e2e60; text-underline-offset: .2em; }
  .vst-hopp a:hover { text-decoration-color: currentColor; }
  .vst section[id] { scroll-margin-top: 1rem; }
  .vst .vst-tomt { display: block; opacity: .75; }
  .vst-counts { display: flex; flex-wrap: wrap; gap: .75rem 1.5rem; }
  .vst-count { display: flex; align-items: center; gap: .6rem; text-transform: uppercase; font-size: .6875rem; font-weight: 700; letter-spacing: .12em; }
  .vst-counter { display: inline-flex; align-items: center; justify-content: center; min-width: 3rem; background: #3d3c3c; color: #fff; border-radius: 4px; padding: .25rem .6rem; font-weight: 800; font-size: 1rem; letter-spacing: .2em; text-indent: .2em; font-variant-numeric: tabular-nums; }

  .vst-status { display: flex; align-items: center; gap: .6rem; text-transform: uppercase; font-size: .75rem; font-weight: 700; letter-spacing: .12em; margin-bottom: .5rem; }
  .vst-led { flex: 0 0 auto; display: inline-block; width: .75rem; height: .75rem; border-radius: 50%; border: 1px solid #2e2e2e80; background: #8d877a; }
  .vst-led--done { background: var(--play-green, #18e91c); box-shadow: 0 0 6px var(--play-green, #18e91c); }
  .vst-led--work { background: #f2b632; box-shadow: 0 0 6px #f2b63299; }
  .vst-led--hold { background: var(--vogor-blue, #85a8ac); }
  .vst-led--late { background: var(--stopp-red, #fc0000); box-shadow: 0 0 6px #fc000080; }
  .vst-led--wait { background: #f2b632; animation: vst-blink 1s steps(2, start) infinite; }
  @keyframes vst-blink { to { visibility: hidden; } }
  @media (prefers-reduced-motion: reduce) { .vst-led--wait { animation: none; } }

  .vst-screen { background-color: #494747; background-image: linear-gradient(#ffffff14, #ffffff05 10%, #0000000a); border-radius: .5rem; padding: 1.25rem 1.5rem 1.5rem; color: #fff; display: grid; gap: .75rem; box-shadow: inset 0 1px #ffffff1f, 0 1px 2px #0003; }
  .vst-screen-row { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; }
  .vst-screen-label { text-transform: uppercase; font-size: .6875rem; font-weight: 700; letter-spacing: .15em; }
  .vst-screen-value { font-weight: 800; font-size: 1.25rem; letter-spacing: .08em; font-variant-numeric: tabular-nums; }
  .vst-meter { display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 3px; height: 1.25rem; }
  .vst-meter span { background: #2b2824; border-radius: 1px; }
  .vst-meter span.on { background: var(--play-green, #18e91c); box-shadow: 0 0 5px #18e91c80; }

  .vst-list li, .vst-group li { display: grid; grid-template-columns: .75rem minmax(0, 1fr) auto 4.5rem; gap: .25rem .9rem; align-items: baseline; padding: .55rem 0; border-bottom: 1px solid #2e2e2e40; }
  .vst-list li > .vst-led, .vst-group li > .vst-led { align-self: center; }
  .vst-verk { font-weight: 600; }
  .vst-verk small { display: block; font-weight: 400; font-size: .8125rem; opacity: .85; }
  .vst-hver, .vst-frestur { font-family: "Courier Prime", Courier, monospace; font-size: .9375rem; }
  /* Sta\xF0a og eigandi verks: tveir fellilistar hli\xF0 vi\xF0 hli\xF0 */
  .vst-val { display: grid; grid-template-columns: 7.75rem 7rem; gap: .5rem; align-items: center; }
  .vst select { width: 100%; min-width: 0; padding: .2rem .25rem; font-family: "Courier Prime", Courier, monospace; font-size: .9375rem; color: inherit; background-color: transparent; border: 1px solid #2e2e2e40; border-radius: 3px; cursor: pointer; }
  .vst select:hover { border-color: #2e2e2e; background-color: #ffffff40; }
  .vst select:disabled { opacity: .5; cursor: default; }
  .vst-hint { margin-bottom: .5rem; }
  .vst-msg { color: #a30d0d; font-weight: 600; }
  .vst-msg:empty { display: none; }
  .vst-frestur { text-align: right; white-space: nowrap; }
  .vst-seint .vst-frestur { color: #a30d0d; font-weight: 700; }
  .vst-lokid .vst-verk { font-weight: 400; opacity: .6; text-decoration: line-through; text-decoration-thickness: 1px; }
  .vst-lokid .vst-val, .vst-lokid .vst-frestur { opacity: .6; }

  .vst-groups { display: grid; gap: .5rem; }
  .vst-group summary { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; cursor: pointer; list-style: none; padding: .6rem 0; border-bottom: 2px solid #2e2e2e; text-transform: uppercase; font-size: .8125rem; font-weight: 800; letter-spacing: .12em; }
  .vst-group summary::-webkit-details-marker { display: none; }
  .vst-group summary span:last-child { font-family: "Courier Prime", Courier, monospace; font-weight: 400; letter-spacing: 0; }
  .vst-group summary span:first-child::after { content: " +"; opacity: .55; }
  .vst-group[open] summary span:first-child::after { content: " \u2013"; }
  .vst-group ul { margin-bottom: 1rem; }

  .vst-scroll { overflow-x: auto; }
  .vst-table { border-collapse: collapse; width: 100%; margin-bottom: .75rem; }
  .vst-table th { text-align: left; text-transform: uppercase; font-size: .625rem; font-weight: 700; letter-spacing: .15em; padding: .4rem .75rem .4rem 0; border-bottom: 2px solid #2e2e2e; white-space: nowrap; }
  .vst-table td { padding: .5rem .75rem .5rem 0; border-bottom: 1px solid #2e2e2e40; font-family: "Courier Prime", Courier, monospace; font-size: .9375rem; white-space: nowrap; }
  .vst-table td:first-child { font-family: "Open Sans", sans-serif; font-weight: 600; }
  .vst-table tr.vst-flokkur th { padding-top: 1.25rem; border-bottom: 1px solid #2e2e2e; }
  /* Sta\xF0a p\xF3sts: gr\xE6nt sent, dekkra gr\xE6nt svara\xF0, rautt skoppa\xF0i, f\xF6lna\xF0 sleppt */
  .vst-table tr.vst-st-sent td { background: rgba(40, 160, 50, .16); }
  .vst-table tr.vst-st-svarad td { background: rgba(40, 160, 50, .34); }
  .vst-table tr.vst-st-skoppadi td { background: rgba(200, 30, 30, .14); }
  .vst-table tr.vst-st-sleppt td { opacity: .45; text-decoration: line-through; text-decoration-thickness: 1px; }
  .vst-table td:first-child { padding-left: .5rem; }
  .vst-table th:first-child { padding-left: .5rem; }

  /* Efni: einn b\xFAtur per kort, \xEDslenska og enska hli\xF0 vi\xF0 hli\xF0 */
  .vst-efni { display: grid; gap: 1rem; margin: .75rem 0 1.25rem; }
  .vst-but { border: 1px solid #2e2e2e40; border-radius: .375rem; padding: .9rem 1rem 1rem; background: #ffffff26; display: grid; gap: .6rem; }
  .vst-but-haus { display: flex; justify-content: space-between; align-items: baseline; gap: .5rem 1rem; flex-wrap: wrap; }
  .vst-but-heiti { font-weight: 700; }
  .vst-but-birta { font-family: "Courier Prime", Courier, monospace; font-size: .9375rem; white-space: nowrap; }
  .vst-but-birta.vst-idag { color: #a30d0d; font-weight: 700; }
  .vst-but-lidid { opacity: .6; }
  .vst-but-notur { font-size: .8125rem; opacity: .85; white-space: pre-wrap; }
  .vst-maltextar { display: grid; grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr)); gap: .75rem; }
  .vst-maltexti { display: grid; gap: .4rem; align-content: start; }
  .vst-mal { text-transform: uppercase; font-size: .625rem; font-weight: 700; letter-spacing: .15em; }
  .vst-texti { margin: 0; white-space: pre-wrap; overflow-wrap: anywhere; font-family: inherit; font-size: .875rem; line-height: 1.55; background: #ffffff59; border-radius: .25rem; padding: .6rem .75rem; max-height: 16rem; overflow-y: auto; }
  .vst-slod { display: flex; align-items: center; gap: .5rem .75rem; flex-wrap: wrap; font-family: "Courier Prime", Courier, monospace; font-size: .9375rem; overflow-wrap: anywhere; }
  .vst-slod a { color: inherit; }
  .vst-mynd { display: block; max-width: 12rem; max-height: 8rem; border-radius: .25rem; box-shadow: 0 1px 3px #0004; }
  .vst .vst-afrita { justify-self: start; display: inline-block; padding: .3rem .8rem; background: #494848; color: #fff; border: 0; border-radius: .25rem; font-family: "Open Sans", sans-serif; font-size: .6875rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; text-decoration: none; cursor: pointer; }
  .vst .vst-afrita:hover { background: #3d3c3c; }
  .vst .vst-afrita.vst-afritad { background: #1f7a24; }

  /* F\xE6rslur: sta\xF0a, breyta og n\xFD f\xE6rsla */
  .vst-eg { display: flex; align-items: center; gap: .5rem; margin-bottom: .75rem; }
  .vst-eg select { width: auto; }
  .vst-but-hlid { display: flex; align-items: center; gap: .5rem .75rem; flex-wrap: wrap; }
  .vst-but-hlid select { width: auto; }
  .vst-but-postad { background: rgba(40, 160, 50, .16); }
  .vst-but-sleppa { opacity: .5; }
  .vst-but-seint { color: #a30d0d; font-weight: 700; }
  .vst-but-breytt { font-size: .75rem; opacity: .7; }
  .vst .vst-but-takki { background: transparent; color: inherit; border: 1px solid #2e2e2e80; }
  .vst .vst-but-takki:hover { background: #ffffff59; }
  .vst-form { display: grid; gap: .6rem; }
  .vst-form label { display: grid; gap: .2rem; font-size: .75rem; font-weight: 700; text-transform: uppercase; letter-spacing: .1em; }
  .vst-form input, .vst-form textarea { font: inherit; font-size: .9375rem; text-transform: none; letter-spacing: 0; font-weight: 400; color: inherit; background: #ffffff8c; border: 1px solid #2e2e2e40; border-radius: .25rem; padding: .45rem .6rem; width: 100%; box-sizing: border-box; }
  .vst-form textarea { min-height: 9rem; resize: vertical; line-height: 1.5; }
  .vst-form textarea.vst-stutt { min-height: 3.5rem; }
  .vst-form-rod { display: grid; grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr)); gap: .6rem; }
  .vst-form-takkar { display: flex; gap: .5rem; flex-wrap: wrap; align-items: center; }
  .vst-form small { font-weight: 400; text-transform: none; letter-spacing: 0; opacity: .8; }
  .vst-meta-texti { max-width: 24rem; overflow: hidden; text-overflow: ellipsis; }
  .vst-meta-texti a { color: inherit; }
  .vst-table td.vst-tala { text-align: right; }
  .vst-but-meta { display: flex; flex-wrap: wrap; gap: .25rem 1rem; font-family: "Courier Prime", Courier, monospace; font-size: .875rem; }
  .vst-but-meta a { color: inherit; }

  .vst-foot { display: grid; gap: 1.25rem; }
  .vst-legend { display: flex; flex-wrap: wrap; gap: .5rem 1.5rem; font-size: .8125rem; }
  .vst-legend li { display: flex; align-items: center; gap: .5rem; }
  .vst-keys { display: flex; flex-wrap: wrap; gap: .75rem; }
  .vst .vst-key { display: inline-flex; align-items: center; justify-content: center; min-height: 3rem; padding: .5rem 1.5rem; background-color: #494848; color: #fff; border: 0; border-radius: .25rem; box-shadow: 2px 2px 11px #5f5f5fed; text-decoration: none; text-transform: uppercase; font-family: inherit; font-size: .8125rem; font-weight: 700; letter-spacing: .15em; cursor: pointer; }
  .vst .vst-key:hover { background-color: #3d3c3c; }
  .vst .vst-key:active { transform: translateY(1px); box-shadow: 1px 1px 5px #5f5f5fed; }
  .vst .vst-key:disabled { opacity: .6; cursor: default; }
  .vst a:focus-visible, .vst button:focus-visible, .vst summary:focus-visible { outline: 2px solid var(--vogor-red, #75161c); outline-offset: 2px; }

  @media (max-width: 767px) {
    .vst .vst-midi--red, .vbt .vst-midi--red { font-size: 1rem; }
    .vst-list li, .vst-group li { grid-template-columns: .75rem minmax(0, 1fr) auto; }
    .vst-val { grid-column: 2 / -1; grid-row: 2; grid-template-columns: repeat(2, minmax(0, 9rem)); margin-top: .15rem; }
    .vst-frestur { grid-column: 3; grid-row: 1; }
  }

  /* ---------- Birtingars\xED\xF0an ---------- */
  .vbt { color: #2e2e2e; font-family: "Open Sans", sans-serif; font-size: 1rem; line-height: 1.5; padding: 0 1rem 5rem; display: grid; gap: 2rem; }
  .vbt [hidden] { display: none !important; }
  .vbt p, .vbt ul { margin: 0; }
  .vbt ul { list-style: none; padding: 0; }
  .vbt a { color: inherit; }
  .vbt-app { display: grid; gap: 3rem; }
  .vbt-small { font-size: .875rem; }
  .vbt-hint { margin-bottom: 1rem; }
  .vbt-head { display: flex; justify-content: space-between; align-items: center; gap: 1rem 2rem; flex-wrap: wrap; }
  .vst-led--ok { background: #18e91c; box-shadow: 0 0 6px #18e91c; }
  .vst-led--bid { background: #f2b632; box-shadow: 0 0 6px #f2b63299; }
  .vst-led--villa { background: #fc0000; box-shadow: 0 0 6px #fc000080; }
  .vst-led--prufa { background: #85a8ac; }

  .vbt-gate { display: flex; flex-wrap: wrap; gap: .75rem; align-items: center; }
  .vbt-gate input { font: inherit; padding: .4rem .6rem; border: 1px solid #2e2e2e60; border-radius: .25rem; background: #ffffff8c; }
  .vbt-msg { color: #a30d0d; font-weight: 600; font-size: .875rem; }
  .vbt-msg:empty { display: none; }
  .vbt-msg--ok { color: #1f7a24; }
  .vbt .vbt-btn { display: inline-block; padding: .45rem 1rem; background: #494848; color: #fff; border: 0; border-radius: .25rem; font: inherit; font-size: .75rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; cursor: pointer; }
  .vbt .vbt-btn:hover { background: #3d3c3c; }
  .vbt .vbt-btn:disabled { opacity: .5; cursor: default; }
  .vbt .vbt-btn--ljos { background: transparent; color: inherit; border: 1px solid #2e2e2e80; }
  .vbt .vbt-btn--ljos:hover { background: #ffffff59; }
  .vbt-link { background: none; border: 0; padding: 0; font: inherit; color: inherit; text-decoration: underline; cursor: pointer; }

  .vbt-rod li { display: grid; grid-template-columns: .75rem 7.5rem 8rem minmax(0, 1fr) auto; gap: .25rem .9rem; align-items: center; padding: .55rem 0; border-bottom: 1px solid #2e2e2e40; }
  .vbt-rod .vbt-timi { font-family: "Courier Prime", Courier, monospace; font-size: .9375rem; }
  .vbt-rod .vbt-heiti { font-weight: 600; min-width: 0; }
  .vbt-rod .vbt-heiti small { display: block; font-weight: 400; font-size: .8125rem; overflow-wrap: anywhere; }
  .vbt-rod .vbt-buid { opacity: .65; }
  .vbt-rod li.vbt-tomt { display: block; }

  .vbt-listi { display: grid; gap: 1.5rem; }
  .vbt-kort { border: 1px solid #2e2e2e40; border-radius: .5rem; padding: 1rem; background: #ffffff26; display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 1.25rem; }
  .vbt-kort--postad { background: rgba(40, 160, 50, .12); }
  .vbt-kort-haus { grid-column: 1 / -1; display: flex; justify-content: space-between; gap: .5rem 1rem; flex-wrap: wrap; align-items: baseline; }
  .vbt-kort-haus b { font-size: 1.0625rem; }
  .vbt-merki { font-family: "Courier Prime", Courier, monospace; font-size: .875rem; }
  .vbt-stjorn { display: grid; gap: .7rem; align-content: start; }
  .vbt-stjorn label, .vbt-stjorn .vbt-hopur { display: grid; gap: .2rem; font-size: .6875rem; font-weight: 700; text-transform: uppercase; letter-spacing: .1em; }
  .vbt-stjorn input, .vbt-stjorn select, .vbt-stjorn textarea { font: inherit; font-size: .9375rem; text-transform: none; letter-spacing: 0; font-weight: 400; color: inherit; background: #ffffff8c; border: 1px solid #2e2e2e40; border-radius: .25rem; padding: .4rem .55rem; width: 100%; box-sizing: border-box; }
  .vbt-stjorn textarea { min-height: 10rem; resize: vertical; line-height: 1.5; }
  .vbt-tvo { display: grid; grid-template-columns: 1fr 1fr; gap: .6rem; }
  .vbt-klukka { display: flex; align-items: center; gap: .3rem; }
  .vbt-klukka select { flex: 1; }
  .vbt-midlar { display: flex; gap: 1.25rem; flex-wrap: wrap; font-size: .9375rem; }
  .vbt-midlar label { display: flex; flex-direction: row; align-items: center; gap: .4rem; font-size: .9375rem; text-transform: none; letter-spacing: 0; font-weight: 600; }
  .vbt-midlar input { width: auto; }
  .vbt-teljari { font-family: "Courier Prime", Courier, monospace; font-size: .8125rem; font-weight: 400; letter-spacing: 0; text-transform: none; opacity: .8; }
  .vbt-teljari.vbt-of { color: #a30d0d; font-weight: 700; opacity: 1; }
  .vbt-adv { font-size: .8125rem; color: #8a4b00; font-weight: 600; }
  .vbt-adv:empty { display: none; }
  .vbt-takkar { display: flex; gap: .5rem; flex-wrap: wrap; align-items: center; }
  .vbt-fyrri { display: grid; gap: .3rem; font-size: .8125rem; }
  .vbt-fyrri li { display: flex; gap: .5rem; align-items: center; flex-wrap: wrap; }
  .vbt-yfirferd { display: grid; gap: .5rem; padding: .75rem; border: 1px dashed #2e2e2e80; border-radius: .375rem; background: #ffffff40; }
  .vbt .vbt-btn--stadfesta { justify-self: start; background: #1f7a24; }
  .vbt .vbt-btn--stadfesta:hover { background: #18611c; }

  /* Forsko\xF0un: einfaldar eftirmyndir af f\xE6rslu \xE1 Instagram og Facebook */
  .vbt-boostform { margin-top: 1rem; max-width: 36rem; padding: 1rem; border: 1px solid #2e2e2e40; border-radius: .5rem; background: #ffffff26; }
  .vbt-boostform > b { font-size: 1.0625rem; }
  .vbt-forsk { display: grid; gap: .75rem; align-content: start; }
  .vbt-skipta { display: flex; gap: .4rem; }
  .vbt-skipta button { font: inherit; font-size: .6875rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; padding: .25rem .6rem; border: 1px solid #2e2e2e80; border-radius: 1rem; background: transparent; color: inherit; cursor: pointer; }
  .vbt-skipta button[aria-pressed="true"] { background: #2e2e2e; color: #fff; }
  .vbt-sima { background: #fff; color: #111; border-radius: .75rem; box-shadow: 0 2px 10px #0003; overflow: hidden; max-width: 22rem; font-family: -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: .8125rem; line-height: 1.35; }
  .vbt-sima-haus { display: flex; align-items: center; gap: .5rem; padding: .55rem .7rem; font-weight: 600; }
  .vbt-sima-haus i { width: 1.75rem; height: 1.75rem; border-radius: 50%; background: #75161c; flex: 0 0 auto; }
  .vbt-sima-haus small { display: block; font-weight: 400; color: #65676b; font-size: .6875rem; }
  .vbt-sima-mynd { background: #ddd; display: grid; place-items: center; color: #777; aspect-ratio: 4 / 5; overflow: hidden; }
  .vbt-sima-mynd img, .vbt-sima-mynd video { width: 100%; height: 100%; object-fit: cover; display: block; }
  .vbt-sima--fb .vbt-sima-mynd { aspect-ratio: auto; min-height: 8rem; }
  .vbt-sima--fb .vbt-sima-mynd img, .vbt-sima--fb .vbt-sima-mynd video { height: auto; max-height: 26rem; object-fit: contain; }
  .vbt-sima-texti { padding: .55rem .7rem .7rem; white-space: pre-wrap; overflow-wrap: anywhere; }
  .vbt-sima-texti b { margin-right: .3rem; }
  .vbt-sima-texti span.vbt-meira { color: #737373; }
  .vbt-sima--story { position: relative; max-width: 15rem; background: #111; }
  .vbt-sima--story .vbt-sima-mynd { aspect-ratio: 9 / 16; background: #222; color: #aaa; }
  .vbt-sima--story .vbt-sima-haus { position: absolute; top: 0; left: 0; right: 0; color: #fff; background: linear-gradient(#0008, transparent); }
  .vbt-sima-takkar { padding: .45rem .7rem 0; font-size: 1.05rem; letter-spacing: .4rem; }

  @media (max-width: 767px) {
    .vbt-kort { grid-template-columns: 1fr; }
    .vbt-rod li { grid-template-columns: .75rem 1fr auto; }
    .vbt-rod .vbt-heiti { grid-column: 2 / -1; }
  }

  /* ---------- Pressus\xED\xF0an (.vpp) ---------- */
  /* Sami grunnur og /nafir: beige t\xE6ki\xF0, d\xF6kkir skj\xE1ir, Dymo-mi\xF0ar */

  .vpp { color: var(--black-800, #2e2e2e); font-family: "Open Sans", sans-serif; font-size: 1rem; font-weight: 400; line-height: 1.6; padding: 0 1rem 5rem; display: grid; gap: 3rem; }
  .vpp [hidden], [data-promo-state][hidden] { display: none !important; }
  /* Tv\xF6 m\xE1l: enska nema data-mal="is" s\xE9 \xE1 .vpp. Me\xF0an be\xF0i\xF0 er eftir m\xE1li
     vi\xF0takandans er textinn falinn svo enskan blikki ekki \xE1 undan \xEDslenskunni */
  .vpp:not([data-mal="is"]) [data-mal="is"], .vpp[data-mal="is"] [data-mal="en"] { display: none !important; }
  .vpp[data-mal-bidur] [data-mal] { visibility: hidden; }

  .vpp-head-right { display: flex; align-items: center; gap: .75rem; }
  .vpp-mal { display: flex; border-radius: 4px; overflow: hidden; border: 1px solid #3d3c3c; }
  .vpp-mal button { appearance: none; border: 0; margin: 0; background: transparent; color: #3d3c3c; font: inherit; font-size: .75rem; font-weight: 800; letter-spacing: .15em; text-indent: .15em; padding: .25rem .6rem; cursor: pointer; }
  .vpp-mal button[aria-pressed="true"] { background: #3d3c3c; color: #fff; }
  .vpp-mal button:focus-visible { outline: 2px solid var(--vogor-red, #75161c); outline-offset: 2px; }
  .vpp p, .vpp h1, .vpp ol, .vpp ul, .vpp dl, .vpp dd { margin: 0; }
  .vpp a { color: inherit; }

  .vpp-head { display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap; }
  .vpp-dymo { font-family: Dymo, Arial, sans-serif; font-size: 1.625rem; line-height: 1.4; font-weight: 400; color: var(--black-800, #2e2e2e); user-select: none; margin-bottom: .75rem; }
  .vpp-head .vpp-dymo { margin-bottom: 0; }
  .vpp-dymo--red { color: var(--vogor-red, #75161c); font-size: 2rem; }
  .vpp-counter { display: inline-flex; align-items: center; justify-content: center; background: #3d3c3c; color: #fff; border-radius: 4px; padding: .25rem .75rem; font-weight: 800; letter-spacing: .3em; text-indent: .3em; font-size: .875rem; }
  .vpp-counter--code { letter-spacing: .15em; text-indent: .15em; margin-left: .25rem; }

  .vpp-top { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr); gap: 2.5rem; align-items: start; }
  .vpp-screen { background-color: #494747; background-image: linear-gradient(#ffffff14, #ffffff05 10%, #0000000a); border-radius: .5rem; padding: clamp(.75rem, 3vw, 1.75rem); box-shadow: inset 0 1px #ffffff1f, 0 1px 2px #0003; }
  .vpp-screen img { display: block; width: 100%; height: auto; border-radius: 2px; }

  .vpp-info { display: grid; gap: 1.25rem; }
  .vpp-artist { text-transform: uppercase; letter-spacing: .2em; font-weight: 700; font-size: .875rem; }
  .vpp-title { font-size: clamp(3rem, 8vw, 4.5rem); line-height: 1; font-weight: 800; letter-spacing: -.02em; margin-top: -.75rem; }

  .vpp-meta { display: grid; gap: .35rem; font-family: "Courier Prime", Courier, monospace; }
  .vpp-meta > div { display: flex; gap: 1rem; border-bottom: 1px solid #2e2e2e40; padding-bottom: .35rem; }
  .vpp-meta dt { flex: 0 0 6.5rem; font-family: "Open Sans", sans-serif; text-transform: uppercase; font-size: .625rem; font-weight: 700; letter-spacing: .15em; align-self: center; }

  .vpp-personal { display: grid; gap: .75rem; padding-top: .5rem; }
  .vpp-personal > div { display: grid; gap: .75rem; }
  .vpp-status { display: flex; align-items: center; gap: .6rem; text-transform: uppercase; font-size: .75rem; font-weight: 700; letter-spacing: .12em; }
  .vpp-led { flex: 0 0 auto; width: .75rem; height: .75rem; border-radius: 50%; border: 1px solid #2e2e2e80; background: #6b665c; }
  .vpp-led--ok { background: var(--play-green, #18e91c); box-shadow: 0 0 8px var(--play-green, #18e91c); }
  .vpp-led--stop { background: var(--stopp-red, #fc0000); box-shadow: 0 0 8px #fc000080; }
  .vpp-led--wait { background: #f2b632; animation: vpp-blink 1s steps(2, start) infinite; }
  @keyframes vpp-blink { to { visibility: hidden; } }
  @media (prefers-reduced-motion: reduce) { .vpp-led--wait { animation: none; } }

  .vpp-keys { display: flex; flex-wrap: wrap; gap: .75rem; }
  .vpp a.vpp-key { flex: 1 1 8rem; display: flex; align-items: center; justify-content: center; min-height: 3rem; padding: .5rem 1rem; background-color: #494848; color: #fff; border-radius: .25rem; box-shadow: 2px 2px 11px #5f5f5fed; text-decoration: none; text-transform: uppercase; font-size: .8125rem; font-weight: 700; letter-spacing: .15em; transition: transform .08s, box-shadow .08s; }
  .vpp a.vpp-key:hover { background-color: #3d3c3c; }
  .vpp a.vpp-key:active { transform: translateY(1px); box-shadow: 1px 1px 5px #5f5f5fed; }
  .vpp a:focus-visible { outline: 2px solid var(--vogor-red, #75161c); outline-offset: 2px; }
  .vpp-note, .vpp-small { font-size: .875rem; }

  .vpp-prose { display: grid; gap: 1rem; max-width: 42rem; }
  .vpp-quote { margin: 0; padding-left: 1rem; border-left: 2px solid #2e2e2e40; font-style: italic; }
  .vpp-quote footer { margin-top: .5rem; font-style: normal; font-family: "Courier Prime", Courier, monospace; font-size: .85em; }
  .vpp-quote footer::before { content: "\u2014 "; }
  .vpp-quote--kit { font-size: .9375rem; margin-bottom: 2rem; }
  .vpp-sides { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2.5rem; align-items: start; }
  .vpp-tracks, .vpp-credits, .vpp-links { list-style: none; padding: 0; font-family: "Courier Prime", Courier, monospace; }
  .vpp-tracks { counter-reset: vpp-track calc(var(--start, 1) - 1); }
  .vpp-tracks[start="5"] { --start: 5; }
  .vpp-tracks li { counter-increment: vpp-track; border-bottom: 1px solid #2e2e2e40; }
  /* Hvert lag er details-element: lagalistinn er l\xEDka textabla\xF0i\xF0 */
  .vpp-tracks summary { display: flex; justify-content: space-between; gap: 1rem; padding: .4rem 0; cursor: pointer; list-style: none; }
  .vpp-tracks summary::-webkit-details-marker { display: none; }
  .vpp-tracks summary span:first-child::before { content: counter(vpp-track) ". "; }
  .vpp-tracks summary span:first-child::after { content: " +"; opacity: .55; }
  .vpp-tracks details[open] summary span:first-child::after { content: " \u2013"; }
  .vpp summary:focus-visible { outline: 2px solid var(--vogor-red, #75161c); outline-offset: 2px; }
  .vpp-lyric { display: grid; gap: .75rem; padding: .25rem 0 1rem 1.75rem; font-family: "Open Sans", sans-serif; font-size: .875rem; }
  .vpp-hint { margin-top: -2rem; }
  .vpp-credits li, .vpp-links li { border-bottom: 1px solid #2e2e2e40; padding: .4rem 0; }
  .vpp-credits li > span, .vpp-links li > span { display: block; font-family: "Open Sans", sans-serif; font-size: .8125rem; opacity: .8; }
  .vpp-credits + .vpp-small { margin-top: 1rem; }
  .vpp-links { margin-bottom: 2rem; }
  .vpp-photo { display: block; width: 100%; height: auto; border-radius: 2px; margin-bottom: .75rem; }

  @media (max-width: 767px) {
    .vpp { gap: 2.25rem; }
    .vpp-top, .vpp-sides { grid-template-columns: minmax(0, 1fr); gap: 1.75rem; }
    .vpp-dymo--red { font-size: 1.5rem; }
  }

  /* ---------- Hlekkjas\xED\xF0an (.vhl, /nafir/links): bio-hlekkurinn \xE1 Instagram ---------- */
  /* Mj\xF3r d\xE1lkur fyrir s\xEDma; notar Dymo, teljara og skj\xE1 pressus\xED\xF0unnar */
  .vhl { color: var(--black-800, #2e2e2e); font-family: "Open Sans", sans-serif; font-size: 1rem; line-height: 1.5; max-width: 28rem; margin: 0 auto; padding: 1.5rem 1rem 4rem; display: grid; gap: 1.25rem; }
  .vhl p, .vhl h1 { margin: 0; }
  .vhl-head { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
  .vhl-head .vpp-dymo { margin-bottom: 0; }
  .vhl-top { display: grid; grid-template-columns: 8.5rem minmax(0, 1fr); gap: 1rem; align-items: center; }
  .vhl-screen { display: block; background-color: #494747; background-image: linear-gradient(#ffffff14, #ffffff05 10%, #0000000a); border-radius: .5rem; padding: .4rem; box-shadow: inset 0 1px #ffffff1f, 0 1px 2px #0003; }
  .vhl-screen img { display: block; width: 100%; height: auto; border-radius: 2px; }
  .vhl-titlar { display: grid; gap: .25rem; }
  .vhl-titlar .vpp-artist { font-size: .75rem; }
  .vhl-title { font-size: 2.75rem; line-height: 1; font-weight: 800; letter-spacing: -.02em; }
  .vhl-date { font-family: "Courier Prime", Courier, monospace; font-size: .875rem; line-height: 1.35; }

  .vhl-nytt-rauf { min-height: 5.25rem; }
  .vhl a.vhl-nytt { display: grid; gap: .15rem; padding: .85rem 1rem; background: var(--vogor-red, #75161c); color: #fff; border-radius: .25rem; box-shadow: 2px 2px 11px #5f5f5fed; text-decoration: none; transition: transform .08s, box-shadow .08s; }
  .vhl a.vhl-nytt:hover { background: #5e1116; }
  .vhl a.vhl-nytt:active { transform: translateY(1px); box-shadow: 1px 1px 5px #5f5f5fed; }
  .vhl-nytt-merki { font-family: Dymo, Arial, sans-serif; font-size: 1.125rem; line-height: 1.2; user-select: none; }
  .vhl-nytt-titill { font-weight: 700; font-size: 1.0625rem; line-height: 1.35; }
  .vhl-nytt-slod { font-family: "Courier Prime", Courier, monospace; font-size: .8125rem; opacity: .8; overflow-wrap: anywhere; }

  .vhl-listi { display: grid; gap: .75rem; }
  .vhl a.vhl-hlekkur { display: flex; align-items: center; justify-content: center; min-height: 3.25rem; padding: .5rem 1rem; background-color: #494848; color: #fff; border-radius: .25rem; box-shadow: 2px 2px 11px #5f5f5fed; text-decoration: none; text-align: center; text-transform: uppercase; font-size: .8125rem; font-weight: 700; letter-spacing: .15em; transition: transform .08s, box-shadow .08s; }
  .vhl a.vhl-hlekkur:hover { background-color: #3d3c3c; }
  .vhl a.vhl-hlekkur:active { transform: translateY(1px); box-shadow: 1px 1px 5px #5f5f5fed; }
  .vhl a:focus-visible { outline: 2px solid var(--vogor-red, #75161c); outline-offset: 2px; }
  @media (prefers-reduced-motion: reduce) { .vhl a { transition: none; } }

  /* ---------- Stj\xF3rns\xED\xF0an (.vp): \xFAtlit Webflow-s\xED\xF0unnar, enginn beige grunnur ---------- */
  .vp { max-width: 60rem; margin: 0 auto; display: grid; gap: 1rem; font: inherit; }
  .vp #vp-app { display: grid; gap: 1rem; }
  .vp [hidden] { display: none !important; }
  .vp-card { border: 1px solid rgba(128, 128, 128, .4); border-radius: 8px; padding: 1rem; display: grid; gap: .75rem; }
  .vp-row { display: flex; flex-wrap: wrap; gap: .75rem; align-items: end; }
  .vp-between { justify-content: space-between; align-items: center; }
  .vp label { display: grid; gap: .25rem; font-size: .85em; flex: 1 1 12rem; }
  .vp input, .vp select, .vp textarea { font: inherit; padding: .5rem; border: 1px solid rgba(128, 128, 128, .6); border-radius: 4px; width: 100%; box-sizing: border-box; background: transparent; color: inherit; }
  .vp textarea { font-family: ui-monospace, Consolas, monospace; font-size: .85em; }
  .vp button { font: inherit; padding: .5rem 1rem; border: 1px solid currentColor; border-radius: 4px; background: transparent; color: inherit; cursor: pointer; justify-self: start; }
  .vp button:disabled { opacity: .5; cursor: default; }
  .vp-scroll { overflow-x: auto; }
  .vp table { border-collapse: collapse; width: 100%; font-size: .85em; }
  .vp th, .vp td { text-align: left; padding: .4rem .6rem; border-bottom: 1px solid rgba(128, 128, 128, .3); white-space: nowrap; }
  .vp tbody tr { cursor: pointer; }
  .vp tbody tr:hover { background: rgba(128, 128, 128, .12); }
  /* Sta\xF0a l\xEDnu: h\xE1lfgagns\xE6ir litir svo \xFEeir virki \xE1 lj\xF3sum og d\xF6kkum bakgrunni */
  .vp tbody tr.vp-st-sent { background: rgba(40, 180, 60, .13); }
  .vp tbody tr.vp-st-svarad { background: rgba(40, 180, 60, .3); }
  .vp tbody tr.vp-st-skoppadi { background: rgba(220, 40, 40, .15); }
  .vp tbody tr.vp-st-sleppt { opacity: .45; }
  .vp tbody tr.vp-st-sent:hover, .vp tbody tr.vp-st-svarad:hover, .vp tbody tr.vp-st-skoppadi:hover { filter: brightness(1.1); }
  .vp tbody tr.vp-flokkur { cursor: default; }
  .vp tbody tr.vp-flokkur:hover { background: none; }
  .vp tr.vp-flokkur th { padding-top: 1rem; font-size: .8em; text-transform: uppercase; letter-spacing: .08em; border-bottom: 2px solid rgba(128, 128, 128, .6); }
  .vp-status { font-size: .85em; }
  .vp a { align-self: center; }
  /* Webflow feitletrar label, og reitirnir erfa \xFEa\xF0 me\xF0 font: inherit */
  .vp input, .vp select, .vp textarea { font-weight: 400; }
  #vp-post textarea#vp-p-meginmal { font-family: inherit; font-size: 1em; line-height: 1.5; }
  .vp details form { display: grid; gap: .75rem; }
  .vp summary { cursor: pointer; }
  /* Fimm fellilistar \xED einni r\xF6\xF0 \xED sta\xF0 \xFEess a\xF0 s\xE1 s\xED\xF0asti detti ni\xF0ur */
  #vp-post .vp-row label { flex-basis: 8rem; }

  /* ---------- Lei\xF0arstikan (sameiginlegt.js, leidir) ---------- */
  .vogor-leidir { display: flex; flex-wrap: wrap; gap: .5rem; margin: 0 0 1rem; }
  .vogor-leidir a { font-family: "Open Sans", sans-serif; font-size: .8125rem; font-weight: 700; line-height: 1.3; text-transform: uppercase; letter-spacing: .12em; padding: .35rem .65rem .3rem; border-radius: .2rem; background: #2e2e2e; color: #ece5d6; text-decoration: none; box-shadow: 0 1px 0 #00000040; }
  .vogor-leidir a:hover { background: #4a4a4a; }
  .vogor-leidir a[aria-current="page"] { background: var(--vogor-red, #75161c); color: #fff; }
  .vogor-leidir a:focus-visible { outline: 2px solid #e9b64c; outline-offset: 2px; }

  /* ---------- Dropbox-glugginn \xE1 birtingars\xED\xF0unni (dropboxVelja.js) ---------- */
  .vbt-dbx-takkar { margin-top: -.3rem; }
  .vbt-dbx { width: min(36rem, calc(100vw - 2rem)); max-height: 80vh; padding: 1rem; border: 1px solid #2e2e2e60; border-radius: .5rem; background: #e6dcc7; color: #2e2e2e; font-family: "Open Sans", sans-serif; font-size: .9375rem; }
  .vbt-dbx::backdrop { background: #0000004d; }
  .vbt-dbx .vbt-link { background: none; border: 0; padding: 0; font: inherit; color: inherit; text-decoration: underline; cursor: pointer; }
  .vbt-dbx .vbt-small { font-size: .8125rem; margin: .25rem 0 .5rem; }
  .vbt-dbx .vbt-msg { color: #a30d0d; font-weight: 600; }
  .vbt-dbx-haus { display: flex; gap: 1rem; align-items: baseline; }
  .vbt-dbx-haus b { flex: 1; overflow-wrap: anywhere; }
  .vbt-dbx-listi { list-style: none; margin: 0; padding: 0; display: grid; gap: .25rem; overflow-y: auto; max-height: calc(80vh - 6rem); }
  .vbt-dbx-listi button { display: flex; align-items: center; gap: .75rem; width: 100%; text-align: left; font: inherit; color: inherit; background: #ffffff8c; border: 1px solid #2e2e2e30; border-radius: .3rem; padding: .35rem .5rem; cursor: pointer; }
  .vbt-dbx-listi button:hover:not(:disabled) { background: #fff; }
  .vbt-dbx-listi button:disabled { opacity: .45; cursor: default; }
  .vbt-dbx-thumb { flex: 0 0 3rem; height: 3rem; border-radius: .2rem; background: #2e2e2e center / cover no-repeat; color: #ece5d6; font-size: .6875rem; font-weight: 700; display: grid; place-items: center; }
  .vbt-dbx-nafn { min-width: 0; overflow-wrap: anywhere; }
  .vbt-dbx-nafn small { display: block; opacity: .7; font-size: .75rem; }
`;var Re="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAABK2lDQ1BJQ0MgUHJvZmlsZQAAeJyVkT9Lw0AYh5+LouKgFUQcHDKJgmKjDmZMq4ggWKtD2635Q5TSJFyuaj+Eo1sHF3c/gZOj4KD4CfwGilMHuUTI4FD6LPfcj5f37t4Do+zsVw6MEnQjJeuHFbPRbJnTr0wxQUbbSxOnVjvWHsVRwD9+PhB6fdvUvRiPWS+RChgC236QeiDKQOdaJQrEAFh0O5k/apfn9SqIZ2AuzP1du5v7p3bZaLZAfOv6MHNjJuuT+4p2Fdzoc6nGSV9ehhfKtGzbNh0/dgPzrJ+qoJuaR5EXyySWbRX4QH6/jIW8UE9szbLtvfUx3z0S/Q+5fZ1m8xVLL0VW4PXk1Z8KY2f0vugxWIaTB5gcFtnuLdxvwPxdka1aUNqCp8EvwMZP/XkTGdQAAAkJSURBVHjaBcHJjl3XdQDQffpz29dWR7JKRVEUZUmG4ViwJs7ACdL8RwIE/jUPMs3EgBHACALEUgDHUSRDJEWx+nrdfe92p9s7a7Hf/Ppzc3ppiqKWYtXsVfK7fXO12QOwhCg4JwYAwBA4ZwCMAI/zQkn+7eP+etcqxurCvr3f/dMvbTumr2/VyWIy+hFiaClnAFIGRyl0fecR0bu+P1CIR7kZU4op1LmdZrXW3AJiSpqDYrzxqfX4tDbzadm2/VTAvZKaw4uFnufAtItIGuj9wRmKMiVGKXYhAmLFotBMkAjOF4VhzHIQTQgUOSXctX2u2K/O50CEwGcoDTEvxfnE/LDrXj+4yymAFOh6YLBPWPA++CQlwHa9efLBJQClbte1EZHyzD728cNpnUvugZwLXUJB9Paxvd31XxwVp9OCoUgJtm0fa73I1e9+6DCOmKJk3BOLREjAEMWnH55hUQsi8GNdFIXUA7Kv39wJH54fzQDRO284t1pVWpxXph3df13vqsKeVsX9vu2GMWestPKzD6YxBOecVUJJIQTTgnEgCUyWWSa5SBET0dOLS7ndvdo0F4tpndlDcMt6BgRZpmLvb7f7nz01Rm3/8G6FICqjLuosEhJyjclKRghMMG00S4iIgCi+eH7GlJpNaptnhTUJOQVX5tl8MkEibWxRl0WuXcA8My5i46OVYje4ZnDLTAvBGheBgVRsd3Db1gkOjIsizzJjGBHXRjPO3dArBvsRc82dc1pKxtjAeDktOGFmVZ2bAeHseHE0qUyeX85qRnC173cuVpkmxro+WiEYYwTMu8gABjfGGCT5FBR2PLJ+yIpq045911d5po0sOVOMlBH7NhzXNhHc94EbM+UEwXNMd4OzCqTkglQYhplRCZErxYXgTAffMQbSt12f6PLiYzK02m2MkALYNNMQY8aBIwEwK1nTO2SggIQRY+Q203kviqiEYDGilIJrpaMnxjmDSck638YQhQAOiDMIYnfnu/FuvSsY5ZnmTOxbt9oPWsrcCj+MPCUew2kuJUAEMEpHhsgQmUoJKUTOBCPQnBiGfTOG/iBYohj5QAQhrHY324frQittdVUXXDKj2NQqI9hufRj7UTHGkIiLSmtLhCmWmXHOIwMlBY/JaDZfVL0LzRhaHwaPY4jtGGQboxZUlIUU/Lvrh3ldHktZl6pGdbdugcF90wcGV1ePg/fLujzKzejiEOIQqVDcu1HUed+PLMKrTxdfrs7afkSPPhERZpkUXz5b9EQnZf7y4vSrqxWkWGU2JQJgzTA6F5bL6X++vf63//6f1w/br3+4VQrO57O73v3H97fN6LXgk9w4Hy8mdrbMfvJ0NomkZZ1Zq4FOMsV9ojrLLOHpLPvF5dn72w0hCqVer/blZHLvEgL8+qcvPnn29Mkk74b++/td54IA6Pr+vtn/5X7rU5rmhgAyq99/d/PVm/19jFufmLY360H86vzY5ryQ1AK8fP7BH795r3J9Opvc7ppvbm6UtXOtS2sWi3kb8MmsfHUyn0p+uagT583ovEvPFpOjPOMMz0/st3++9dJsvXu33nYJreLy4mTKoPMxZT5ux8RyHZrd5jFfH4bTcvLydJkxGAZXc3i1LGfZ7Nhmj83hD29uq9xeTCc7E1xMxuon04x7TyHm0r6QHK3auL7Thkc2emmMzp7lcnh4OHly7FAcS5clfLduNvtxJN7HuNu3S62jw/0Qv7pe/+sfv1kduo9nhaG07rppJc6mWaaExLR6XFejm0hxapUjEn//aiGJoZDnp0utxKDyq95bhIvFZOXifdMRYKE4EK36vu36u3b439uHrhsWk4IH93p7+PKjk786n9097OZHlsf053fbA3BP6QC8CST+5ZefExcrx1gS8zp/tpAHZq+33UVVXJ4ulaIu4KKwjKDOsrO63IfU+TB6/+K4vG3Di+PZP3x+IZEMD1wRaH22KFquxkRdoqVioioyz+Jffwj9PnXZ4otP7O0BVwdcFkJpzYSYKFlnejkpHlvHBGcI8zK/PD0Z3GiN+psXk9McuhFynvKaA3JbmvO5+WBpXh5nr84y+ds/vfu7z5b/vMhERD1Zh1AttOdC5pOceZJMFLl6t2kMZwLxvl3dtWtM/OBViPjhkbEydlHe927OfRpEM6R9F9uQXIyAaXBRLjO1d9ljL/dBlC27en339kbtutBjNVXiqFTbXfuXm+35PM+pP2M//GLeEolIbNPnyqoLjtv16sf71Njq4U1732KuRW645mIMCPlERkqa871/clJ99/XDcQIYg5eMdp2rZ5MfN61M8dOPziohDh3JbrwECIL/qRWXFZ1pNxxuU6qeT8uth6Nc7WKyAkolJeOZsVTUEkAI6NClLSuVfHzfVG3qzqpiOwSIG2SCM+iH0TEVxvbn0nlPCmjq+LeBjwWvJNuQefQKMLQ+WiUkJA2YkHGtPBKPxDPqz+13//doH0eBnJo+vVs3Y4jrtofgAiSKYd/trZn8mGZvqHgvy1cnNpC+xlJVM0FpKQdDjoCFBI4pEDKlGP2AwYtpaeZ5FuXpqGeC6YCJcbY+jJnRLqZvfrzRnDfdcLPerfbdtatu4uJxZP/+yH9/KyaTkmWLx5HfHtL1AEakn+W7Mz1UtC9Yp+I2G++lYNQRvx3gZrud5ubIKM7gcpkTOWPFIZP3TSsBRh9zJTbtuKK0sfy6EwurTox+vQ1j4JzbEb3k8aPCbRyOETFSxhA5yhSJU/jby2rP5lf7bjwMFwLuUNz1o2sOJ7VeD8kIfpZVrQ9rSF0QRGmR8X/87Gml1fXNmjOmpFCSDyE54ol4wvi2oYdMVzJK4OSjCFH1h02duGZs45NMNOVi0GazdyPjbULGUQIeWWUxVDw+P84XpX3/eKi04QIjUm5MDYMAyICuMTZWcAQAI5EIgCQQS8Eww4EGxr7v+sgo5zwlJIyFkpXgixBLxE6kFEeZhEQqhDyqjaR0s2mU5B/PSpm2GfKksejZzT6aqZQIEBPGGDCGGJFzNuNwLmGTMCZaSPYuwBJwlujlT14U1hQ296Epp4Wy5aui3F5dNYcmZgZNVhUt7KmQchTwyOiTfPI+uv8HxIutAeRDZhQAAAAASUVORK5CYII=";function St(l){try{return localStorage.getItem(l)||""}catch{return""}}function ut(l,i){try{i?localStorage.setItem(l,i):localStorage.removeItem(l)}catch{}}function zt(l,i){let m=new URL(location.href),s=(m.searchParams.get(l)||"").trim();if(!s)return{lykill:St(i),nyr:!1};ut(i,s),m.searchParams.delete(l);try{history.replaceState(history.state,"",m.href)}catch{}return{lykill:s,nyr:!0}}var De="Ekkert samband.";function ie(l,i){return fetch(l,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(i)}).then(m=>m.json().catch(()=>{throw new Error("Bakendinn svara\xF0i ekki eins og hann \xE1 a\xF0 gera.")}),()=>{throw new Error(De)})}var ha="https://script.google.com/macros/s/AKfycbw_fE_lhJqAbaLME9HlFK0A5LG_VL502y0AeKwSyC6A_fmCnRonmV4fAMfD3Pllg-_b/exec",ba="https://script.google.com/macros/s/AKfycbyHTw5yNxSQ48jXRgyBaRf58Tfox5MirIsKOJS0VzXPeGCfsa3ceZ05FoUALRyaHD-W/exec",ce=new URLSearchParams(location.search).has("prufa")?ba:ha,Vt=["jan","feb","mar","apr","ma\xED","j\xFAn","j\xFAl","\xE1g\xFA","sep","okt","n\xF3v","des"],se="https://script.google.com/macros/s/AKfycbzhu2dxScQqe5HT7wZZpdpOntDxWffkgORO0n7YH9fLs0K39h9g6LVUUXICe6F93iI2/exec";function Ht(l,i){return ie(i||ce,l)}function a(l,i,m){var s=document.createElement(l);return i&&(s.className=i),m!=null&&(s.textContent=m),s}function Nt(l,i,m){var s=a("a",i,m);return s.href=l,s.target="_blank",s.rel="noopener",s}function Ot(l,i){i.hasAttribute("data-merki")||i.setAttribute("data-merki",i.textContent);function m(){i.textContent="Afrita\xF0",i.classList.add("vst-afritad"),setTimeout(function(){i.textContent=i.getAttribute("data-merki"),i.classList.remove("vst-afritad")},1500)}function s(){var E=a("textarea");E.value=l,E.setAttribute("readonly",""),E.style.position="fixed",E.style.opacity="0",document.body.appendChild(E),E.select();try{document.execCommand("copy")&&m()}catch{}document.body.removeChild(E)}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(l).then(m,s):s()}function ve(l,i){var m=a("button","vst-afrita",i||"Afrita");return m.type="button",m.setAttribute("data-merki",m.textContent),m.addEventListener("click",function(){Ot(l,m)}),m}function Rt(l){try{var i=new URL(l);return/(^|\.)dropbox\.com$/.test(i.hostname)?(i.searchParams.delete("dl"),i.searchParams.set("raw","1"),i.href):l}catch{return l}}function Be(l){var i=/\.([a-z0-9]+)$/i.exec(String(l||"").split(/[?#]/)[0]),m=i?i[1].toLowerCase():"";return{e:m,t:/^(jpe?g|png|gif|webp)$/.test(m)?"mynd":/^(mp4|mov|m4v)$/.test(m)?"myndband":""}}function Ve(){Array.prototype.forEach.call(document.querySelectorAll('link[rel~="icon"]'),function(i){i.parentNode.removeChild(i)});var l=document.createElement("link");l.rel="icon",l.type="image/png",l.href=Re,document.head.appendChild(l)}var Ue={nafir:[["Yfirlit","/nafir/stada"],["Birta","/nafir/birta"],["Pl\xF6tus\xED\xF0a","/albums/nafir"]],per:[["Augl\xFDsingar","/per/auglysingar"],["Birta","/per/birta"],["\xC6fing","/per/jolamixer"]]};function Fe(l){var i=Ue[l]||Ue.nafir,m=location.pathname.replace(/\/$/,""),s=a("nav","vogor-leidir");return s.setAttribute("aria-label","S\xED\xF0ur verkefnisins"),i.forEach(function(E){var z=a("a","",E[0]);z.href=E[1],E[1]===m&&z.setAttribute("aria-current","page"),s.appendChild(z)}),s}var _e=`<div class="vst">
  <div class="vst-head">
    <h1 class="vst-midi vst-midi--red">Nafir yfirlit</h1>
    <div class="vst-counts">
      <div class="vst-count"><span class="vst-counter" data-st="dagar-preorder">--</span><span data-st="texti-preorder">dagar \xED pre-order</span></div>
      <div class="vst-count"><span class="vst-counter" data-st="dagar-utgafa">--</span><span data-st="texti-utgafa">dagar \xED \xFAtg\xE1fu</span></div>
    </div>
  </div>

  <p class="vst-status" data-st-state="loading"><span class="vst-led vst-led--wait"></span>S\xE6ki st\xF6\xF0una</p>

  <div data-st-state="invalid" hidden>
    <p class="vst-status"><span class="vst-led vst-led--late"></span>Hlekk vantar</p>
    <p>\xDEessi s\xED\xF0a opnast me\xF0 hlekknum sem \xD3li sendi \xE1 bandi\xF0. Biddu hann um hlekkinn ef \xFE\xFA finnur hann ekki.</p>
  </div>

  <div data-st-state="error" hidden>
    <p class="vst-status"><span class="vst-led vst-led--late"></span>N\xE1\xF0i ekki \xED st\xF6\xF0una</p>
    <p data-st="villa">Pr\xF3fa\xF0u a\xF0 endurhla\xF0a s\xED\xF0una.</p>
  </div>

  <div class="vst-body" data-st-state="ok" hidden>
    <section class="vst-eg-bar" data-st="eg-bar">
      <label class="vst-eg"><span>Hver ert \xFE\xFA?</span> <select data-st="eg"></select></label>
      <p class="vst-small" data-st="eg-texti">Veldu nafni\xF0 \xFEitt \xE1\xF0ur en \xFE\xFA breytir einhverju. \xDEa\xF0 er muna\xF0 \xED \xFEessum vafra.</p>
    </section>

    <nav class="vst-hopp" aria-label="Kaflar s\xED\xF0unnar">
      <a href="#nafir-dagskra">\xC1 dagskr\xE1</a>
      <a href="#nafir-min">\xDE\xEDn verk</a>
      <a href="#nafir-efni">Efni</a>
      <a href="#nafir-tolur">T\xF6lur</a>
      <a href="#nafir-pressa">Pressa</a>
      <a href="#nafir-oll">\xD6ll verk</a>
    </nav>

    <section class="vst-screen">
      <div class="vst-screen-row">
        <span class="vst-screen-label">Verk loki\xF0</span>
        <span class="vst-screen-value" data-st="hlutfall"></span>
      </div>
      <div class="vst-meter" data-st="maelir" role="img"></div>
    </section>

    <section id="nafir-dagskra">
      <h2 class="vst-midi">N\xE6st \xE1 dagskr\xE1</h2>
      <p class="vst-small vst-hint">Breyttu st\xF6\xF0u verks e\xF0a hver \xE1 \xFEa\xF0 me\xF0 fellilistunum. Breytingin vistast strax.</p>
      <p class="vst-small vst-msg" data-st="skilabod" role="status"></p>
      <ul class="vst-list" data-st="naest"></ul>
    </section>

    <section id="nafir-min">
      <h2 class="vst-midi">\xDE\xEDn verk</h2>
      <ul class="vst-list" data-st="min"></ul>
    </section>

    <section id="nafir-efni" data-st="efni-kafli" hidden>
      <h2 class="vst-midi">Efni til a\xF0 deila</h2>
      <p class="vst-small vst-hint">Textar, hlekkir og myndir til a\xF0 deila. Smelltu \xE1 hnapp til a\xF0 afrita. F\xE6rslur \xE1 samf\xE9lagsmi\xF0la m\xE1 laga h\xE9r og merkja \xFEegar \xFE\xE6r eru farnar \xFAt. Bio og lagatextar eru laga\xF0ir hj\xE1 \xD3la.</p>
      <div class="vst-groups" data-st="efni"></div>
    </section>

    <section id="nafir-tolur" data-st="meta-kafli" hidden>
      <h2 class="vst-midi">T\xF6lur: Facebook og Instagram</h2>
      <div class="vst-counts vst-hint" data-st="fylgjendur"></div>
      <div class="vst-scroll">
        <table class="vst-table">
          <thead><tr><th>Birt</th><th>Mi\xF0ill</th><th>Tegund</th><th>Texti</th><th>N\xE1</th><th>\xC1horf</th><th>Vi\xF0br\xF6g\xF0</th></tr></thead>
          <tbody data-st="meta"></tbody>
        </table>
      </div>
      <p class="vst-small">S\xF3tt af s\xED\xF0unni og Instagram \xE1 6 t\xEDma fresti, s\xED\xF0ast <span data-st="meta-sott"></span>. N\xE1 er hve margir s\xE1u f\xE6rsluna, vi\xF0br\xF6g\xF0 eru l\xEDkar, umm\xE6li, deilingar og vistanir. Stories lifa \xED s\xF3larhring og sj\xE1st h\xE9r ef \xFE\xE6r n\xE1\xF0ust.</p>
    </section>

    <section id="nafir-pressa">
      <h2 class="vst-midi">Pressa</h2>
      <div class="vst-scroll">
        <table class="vst-table">
          <thead><tr><th>Mi\xF0ill</th><th>Sta\xF0a</th><th>Hver</th><th>Sent</th><th>Opna\xF0i s\xED\xF0una</th><th>Hlusta\xF0i</th><th>S\xF3tti</th></tr></thead>
          <tbody data-st="pressa"></tbody>
        </table>
      </div>
      <p class="vst-small">Markh\xF3purinn: mi\xF0lar sem vi\xF0 \xE6tlum a\xF0 senda \xE1 og \xFEeir sem hafa \xFEegar fengi\xF0 p\xF3st. Opnun, hlustun og ni\xF0urhal sj\xE1st hj\xE1 \xFEeim sem fengu pers\xF3nulegan hlekk \xE1 pressus\xED\xF0una.</p>
    </section>

    <section id="nafir-oll">
      <h2 class="vst-midi">\xD6ll verkefni</h2>
      <div class="vst-groups" data-st="hopar"></div>
    </section>

    <section class="vst-foot">
      <ul class="vst-legend">
        <li><span class="vst-led vst-led--done"></span>Loki\xF0</li>
        <li><span class="vst-led vst-led--work"></span>\xCD vinnslu</li>
        <li><span class="vst-led vst-led--hold"></span>B\xED\xF0ur</li>
        <li><span class="vst-led"></span>\xD3byrja\xF0</li>
        <li><span class="vst-led vst-led--late"></span>Komi\xF0 fram yfir frest</li>
      </ul>
      <div class="vst-keys">
        <a class="vst-key" data-st="stream" target="_blank" rel="noopener">Hlusta \xE1 pl\xF6tuna</a>
        <button class="vst-key" type="button" data-st="uppfaera">Uppf\xE6ra</button>
      </div>
      <p class="vst-small">S\xF3tt <span data-st="uppfaert"></span>. Frestum, heitum og n\xFDjum verkum er breytt \xED Sheet-inu hj\xE1 \xD3la.</p>
    </section>
  </div>
</div>
`;function Ke(l){l.innerHTML=_e;var i="vogor-band-key",m="vogor-band-nafn",s={Loki\u00F0:"done","\xCD vinnslu":"work",B\u00ED\u00F0ur:"hold"},E=["\xD3byrja\xF0","\xCD vinnslu","B\xED\xF0ur","Loki\xF0"],z={Sent:"sent",Svara\u00F0:"svarad",Skoppa\u00F0i:"skoppadi",Sleppt:"sleppt"};function y(r){return l.querySelector('[data-st="'+r+'"]')}function B(r){Array.prototype.forEach.call(l.querySelectorAll("[data-st-state]"),function(d){d.hidden=d.getAttribute("data-st-state")!==r})}var Z=zt("b",i).lykill;function _(r){var d=/^(\d{4})-(\d\d)-(\d\d)$/.exec(r||"");return d?new Date(Number(d[1]),Number(d[2])-1,Number(d[3])):null}function F(r){var d=_(r);return d?d.getDate()+". "+Vt[d.getMonth()]:r||""}var J=new Date;J.setHours(0,0,0,0);function O(r){var d=_(r);return d?Math.round((d-J)/864e5):null}function at(r,d,j){var h=O(d);h!=null&&(y("dagar-"+r).textContent=h>0?h:"0",y("texti-"+r).textContent=h>1?"dagar \xED "+j:h===1?"dagur \xED "+j:h===0?j+" \xED dag":j+" komi\xF0")}function g(r){var d=r.stada==="Loki\xF0",j=O(r.frestur),h=!d&&j!=null&&j<0,n=a("li",d?"vst-lokid":h?"vst-seint":""),t=a("span","vst-led"+(h?" vst-led--late":s[r.stada]?" vst-led--"+s[r.stada]:""));t.title=h?r.stada+", komi\xF0 fram yfir frest":r.stada,n.appendChild(t);var e=a("span","vst-verk",r.verk);r.notur&&!d&&e.appendChild(a("small","",r.notur)),n.appendChild(e);var o=a("span","vst-val");return o.appendChild(T(r,"stada",E,"Sta\xF0a verksins: ")),o.appendChild(T(r,"hver",[""].concat(L.band||[]),"Hver \xE1 verki\xF0: ")),n.appendChild(o),n.appendChild(a("span","vst-frestur",F(r.frestur))),n}function T(r,d,j,h){var n=a("select");return n.setAttribute("aria-label",h+r.verk),j.indexOf(r[d])===-1&&(j=j.concat([r[d]])),j.forEach(function(t){var e=a("option","",t||"Enginn");e.value=t,n.appendChild(e)}),n.value=r[d],n.addEventListener("change",function(){k(r,d,n)}),n}function k(r,d,j){var h={action:"bandBreyta",b:Z,rod:r.rod,verk:r.verk};h[d]=j.value,j.disabled=!0,y("skilabod").textContent="",Ht(h).then(function(n){if(!n.ok)throw new Error(n.villa||"Hlekkurinn gildir ekki lengur.");r.hver=n.hver,r.stada=n.stada}).catch(function(n){y("skilabod").textContent="T\xF3kst ekki a\xF0 vista. "+n.message}).then(function(){Q(L)})}var L={};function Q(r){L=r,at("preorder",r.preorder,"pre-order"),at("utgafa",r.utgafa,"\xFAtg\xE1fu");var d=r.verkefni.length,j=r.verkefni.filter(function(x){return x.stada==="Loki\xF0"}).length;y("hlutfall").textContent=j+" / "+d;var h=y("maelir");h.textContent="",h.setAttribute("aria-label",j+" af "+d+" verkum loki\xF0");for(var n=0;n<d;n++)h.appendChild(a("span",n<j?"on":""));var t=y("naest");t.textContent="",r.verkefni.filter(function(x){return x.stada!=="Loki\xF0"&&_(x.frestur)}).sort(function(x,C){return _(x.frestur)-_(C.frestur)}).slice(0,7).forEach(function(x){t.appendChild(g(x))}),t.children.length||t.appendChild(a("li","","Ekkert \xE1 dagskr\xE1 me\xF0 fresti."));var e=y("hopar"),o={};Array.prototype.forEach.call(e.children,function(x){o[x.getAttribute("data-flokkur")]=x.open}),e.textContent="";var c=[],f={};r.verkefni.forEach(function(x){var C=x.flokkur||"Anna\xF0";f[C]||(f[C]=[],c.push(C)),f[C].push(x)}),c.forEach(function(x){var C=f[x],rt=C.filter(function(dt){return dt.stada==="Loki\xF0"}).length,q=a("details","vst-group");q.setAttribute("data-flokkur",x),q.open=x in o?o[x]:rt<C.length;var gt=a("summary");gt.appendChild(a("span","",x)),gt.appendChild(a("span","",rt+"/"+C.length)),q.appendChild(gt);var X=a("ul");C.forEach(function(dt){X.appendChild(g(dt))}),q.appendChild(X),e.appendChild(q)});var b=y("pressa");b.textContent="";var M=null,H=r.pressa.some(function(x){return x.flokkur});if(r.pressa.forEach(function(x){if(H&&(x.flokkur||"")!==M){M=x.flokkur||"";var C=a("tr","vst-flokkur"),rt=a("th","",M||"\xD3flokka\xF0");rt.colSpan=7,C.appendChild(rt),b.appendChild(C)}var q=a("tr",z[x.stada||"Sent"]?"vst-st-"+z[x.stada||"Sent"]:"");q.appendChild(a("td","",x.midill)),q.appendChild(a("td","",x.stada||"Sent")),q.appendChild(a("td","",x.hver||"\u2013")),q.appendChild(a("td","",F(x.sent)||"\u2013")),q.appendChild(a("td","",x.opnad?F(x.opnad)+(x.opnanir>1?" ("+x.opnanir+"\xD7)":""):"\u2013")),q.appendChild(a("td","",F(x.hlusta)||"\u2013")),q.appendChild(a("td","",F(x.saekja)||"\u2013")),b.appendChild(q)}),!r.pressa.length){var D=a("td","","Enginn \xE1 markh\xF3pslistanum enn\xFE\xE1.");D.colSpan=7,b.appendChild(a("tr")).appendChild(D)}kt(r.band||[]),Y(),vt(r.meta),wt(r.efni||[]),r.stream?y("stream").href=r.stream:y("stream").hidden=!0,y("uppfaert").textContent=r.uppfaert}var nt=/\.(jpe?g|png|gif|webp)$/i,u=/\.(mp4|mov|m4v|webm)$/i,v="Samf\xE9lagsmi\xF0lar",w=["Dr\xF6g","Sam\xFEykkt","P\xF3sta\xF0","Sleppa"],S={P\u00F3sta\u00F0:"postad",Sleppa:"sleppa"};function K(r){try{var d=new URL(r);return{nafn:decodeURIComponent(d.pathname.split("/").pop()||""),dropbox:/(^|\.)dropbox\.com$/.test(d.hostname),u:d}}catch{return{nafn:"",dropbox:!1,u:null}}}function A(r){var d=K(r.slod),j=a("div","vst-slod");if(nt.test(d.nafn)){var h=a("img","vst-mynd");h.src=Rt(r.slod),h.alt=r.heiti||"",h.loading="lazy";var n=Nt(r.slod);n.appendChild(h),j.appendChild(n),j.appendChild(Nt(r.slod,"vst-afrita","Opna \xED fullri st\xE6r\xF0"))}else if(d.dropbox){var t=/\/fo\//.test(d.u.pathname)?"Mappa \xED Dropbox":(u.test(d.nafn)?"Myndband: ":"Dropbox: ")+d.nafn;j.appendChild(Nt(r.slod,"",t))}else j.appendChild(Nt(r.slod,"",r.slod.replace(/^https?:\/\/(www\.)?/,"")));return j.appendChild(ve(r.slod,"Afrita hlekk")),j}function R(r,d){var j=a("button","vst-afrita"+(d?" "+d:""),r);return j.type="button",j}function I(r){return r.b=Z,Ht(r).catch(function(d){return{ok:!1,villa:d.message}})}function N(){return y("eg").value}function et(r,d){for(var j=L.efni||[],h=0;h<j.length;h++)j[h].id===r.id&&(j[h]=r);var n=st(r);return d.parentNode.replaceChild(n,d),n}function st(r){var d=r.flokkur===v,j=!/^md-/.test(r.id),h=a("article","vst-but"+(d&&S[r.stada]?" vst-but-"+S[r.stada]:"")),n=a("div","vst-but-haus");n.appendChild(a("span","vst-but-heiti",r.heiti||"\xC1n heitis"));var t=a("span","vst-but-hlid");if(r.birta){var e=O(r.birta),o=r.stada==="P\xF3sta\xF0"||r.stada==="Sleppa",c=d&&!o&&e!=null&&e<0;t.appendChild(a("span","vst-but-birta"+(e===0?" vst-idag":"")+(c?" vst-but-seint":""),e===0?"\xCD dag":F(r.birta)+(c?", ekki p\xF3sta\xF0":""))),e!=null&&e<0&&(!d||o)&&h.classList.add("vst-but-lidid")}if(d&&j&&r.birta){var f=a("select");f.setAttribute("aria-label","Sta\xF0a f\xE6rslunnar "+(r.heiti||"")),w.forEach(function(C){var rt=a("option","",C);rt.value=C,f.appendChild(rt)}),f.value=r.stada||w[0],f.addEventListener("change",function(){if(!N()){f.value=r.stada,ht(h,"Veldu nafni\xF0 \xFEitt efst \xE1 s\xED\xF0unni.");return}f.disabled=!0,I({action:"bandEfniVista",id:r.id,hver:N(),reitir:{stada:f.value}}).then(function(C){C.ok?et(C.but,h):(f.disabled=!1,f.value=r.stada,ht(h,C.villa))})}),t.appendChild(f)}if(j){var b=R("Breyta","vst-but-takki");b.addEventListener("click",function(){bt(r,h)}),t.appendChild(b)}n.appendChild(t),h.appendChild(n);var M=L.meta?L.meta.faerslur.filter(function(C){return C.efni===r.id}):[];if(M.length){var H=a("p","vst-but-meta");M.forEach(function(C){H.appendChild(Nt(C.hlekkur,"",C.midill+": "+(C.na!=null?"n\xE1 "+C.na+", ":"")+C.vidbrogd+" vi\xF0br\xF6g\xF0"))}),h.appendChild(H)}r.slod&&h.appendChild(A(r));var D=[["is","\xCDslenska"],["en","English"]].filter(function(C){return r[C[0]]});if(D.length){var x=a("div","vst-maltextar");D.forEach(function(C){var rt=a("div","vst-maltexti");D.length>1&&rt.appendChild(a("span","vst-mal",C[1])),rt.appendChild(a("pre","vst-texti",r[C[0]])),rt.appendChild(ve(r[C[0]])),x.appendChild(rt)}),h.appendChild(x)}return r.notur&&h.appendChild(a("p","vst-but-notur",r.notur)),r.breyttAf&&r.breytt&&h.appendChild(a("p","vst-but-breytt","S\xED\xF0ast breytt af "+r.breyttAf+", "+F(r.breytt.slice(0,10))+" kl. "+r.breytt.slice(11,16))),h}function ht(r,d){var j=r.querySelector(".vst-msg")||r.appendChild(a("p","vst-small vst-msg"));j.textContent=d||""}function bt(r,d){var j=r.flokkur===v,h=r,n=a("form","vst-but vst-form vst-but-form");n.appendChild(a("span","vst-but-heiti","Breyta: "+(r.heiti||"\xC1n heitis")));function t(D,x,C,rt,q,gt){var X=a("label","",D),dt=a(C,q||"");return C==="input"&&(dt.type=x==="birta"?"date":"text"),dt.name=x,dt.value=rt||"",X.appendChild(dt),gt&&X.appendChild(a("small","",gt)),X}n.appendChild(t("Heiti","heiti","input",r.heiti));var e=a("div","vst-form-rod");if(e.appendChild(t("Birta","birta","input",r.birta)),j){var o=a("label","","Sta\xF0a"),c=a("select");c.name="stada",w.forEach(function(D){var x=a("option","",D);x.value=D,c.appendChild(x)}),c.value=r.stada||w[0],o.appendChild(c),e.appendChild(o)}n.appendChild(e),n.appendChild(t("\xCDslenska","is","textarea",r.is)),n.appendChild(t("English","en","textarea",r.en)),n.appendChild(t("Mynd e\xF0a myndband","slod","input",r.slod,"","Dropbox-hlekkur \xE1 skr\xE1na e\xF0a m\xF6ppuna, e\xF0a sl\xF3\xF0 \xE1 mynd.")),n.appendChild(t("N\xF3tur","notur","textarea",r.notur,"vst-stutt","Hva\xF0a mynd fylgir, hvar \xE1 a\xF0 p\xF3sta, o.s.frv."));var f=a("div","vst-form-takkar"),b=R("Vista");b.type="submit";var M=R("H\xE6tta vi\xF0","vst-but-takki");f.appendChild(b),f.appendChild(M),n.appendChild(f);var H=n.appendChild(a("p","vst-small vst-msg"));M.addEventListener("click",function(){et(h,n)}),n.addEventListener("submit",function(D){if(D.preventDefault(),H.textContent="",!N()){H.textContent="Veldu nafni\xF0 \xFEitt efst \xE1 s\xED\xF0unni.";return}var x={};["heiti","birta","stada","is","en","slod","notur"].forEach(function(C){n.elements[C]&&(x[C]=n.elements[C].value)}),b.disabled=!0,b.textContent="Vista...",I({action:"bandEfniVista",id:r.id,hver:N(),breytt:h.breytt,reitir:x}).then(function(C){if(b.disabled=!1,b.textContent="Vista",C.ok){et(C.but,n);return}C.arekstur&&C.but&&(h=C.but),H.textContent=C.villa||"T\xF3kst ekki a\xF0 vista."})}),d.parentNode.replaceChild(n,d),n.elements.heiti.focus()}function W(r,d){return(r.birta?1:0)-(d.birta?1:0)||(r.birta<d.birta?-1:r.birta>d.birta?1:0)}var xt="vogor-efni-opid";function wt(r){var d=y("efni");if(y("efni-kafli").hidden=!r.length,!!r.length&&!d.querySelector(".vst-but-form")){var j={};try{j=JSON.parse(localStorage.getItem(xt)||"{}")||{}}catch{}d.textContent="";var h=[],n={};r.forEach(function(t){var e=t.flokkur||"Anna\xF0";n[e]||(n[e]=[],h.push(e)),n[e].push(t)}),h.indexOf(v)>0&&(h.splice(h.indexOf(v),1),h.unshift(v)),h.forEach(function(t){var e=a("details","vst-group");e.open=!!j[t];var o=a("summary");o.appendChild(a("span","",t));var c=String(n[t].length);if(t===v){var f=n[t].filter(function(D){return D.birta&&D.stada!=="Sleppa"}),b=f.filter(function(D){return D.stada==="P\xF3sta\xF0"}).length;c=b+"/"+f.length+" p\xF3sta\xF0ar",n[t].sort(W)}o.appendChild(a("span","",c)),e.appendChild(o);var M=a("div","vst-efni");if(n[t].forEach(function(D){M.appendChild(st(D))}),t===v){var H=R("N\xFD f\xE6rsla","vst-but-takki");H.addEventListener("click",function(){if(!N()){H.textContent="Veldu fyrst hver \xFE\xFA ert";return}H.disabled=!0,I({action:"bandEfniNytt",hver:N(),flokkur:v}).then(function(D){if(H.disabled=!1,!D.ok){H.textContent=D.villa||"T\xF3kst ekki";return}L.efni.push(D.but);var x=st(D.but);M.insertBefore(x,H),bt(D.but,x)})}),M.appendChild(H)}e.appendChild(M),e.addEventListener("toggle",function(){j[t]=e.open;try{localStorage.setItem(xt,JSON.stringify(j))}catch{}}),d.appendChild(e)})}}function vt(r){if(y("meta-kafli").hidden=!r,!!r){var d=r.fylgjendur||{},j=y("fylgjendur");j.textContent="",[["fb","Facebook"],["ig","Instagram"]].forEach(function(e){if(d[e[0]]!=null){var o=a("div","vst-count");o.appendChild(a("span","vst-counter",String(d[e[0]])));var c=d[e[0]+"Breyting"];o.appendChild(a("span","","fylgjendur \xE1 "+e[1]+(c!=null?" ("+(c>=0?"+":"")+c+" fr\xE1 "+F(d.fra)+")":""))),j.appendChild(o)}});var h={};(L.efni||[]).forEach(function(e){h[e.id]=e.heiti});var n=y("meta");if(n.textContent="",r.faerslur.forEach(function(e){var o=a("tr");o.appendChild(a("td","",F(e.birt.slice(0,10))+" "+e.birt.slice(11,16))),o.appendChild(a("td","",e.midill)),o.appendChild(a("td","",e.tegund));var c=a("td","vst-meta-texti"),f=h[e.efni]?h[e.efni]:e.texti||e.tegund;c.appendChild(e.hlekkur?Nt(e.hlekkur,"",f):a("span","",f)),c.title=e.texti,o.appendChild(c),[e.na,e.ahorf,e.vidbrogd].forEach(function(b){o.appendChild(a("td","vst-tala",b==null?"\u2013":String(b)))}),n.appendChild(o)}),!r.faerslur.length){var t=a("td","","Engar f\xE6rslur fundust fr\xE1 1. okt\xF3ber.");t.colSpan=7,n.appendChild(a("tr")).appendChild(t)}y("meta-sott").textContent=r.sott||"aldrei"}}function kt(r){var d=y("eg"),j=d.value;j||(j=St(m)),d.textContent="",[""].concat(r.filter(function(h){return h!=="Allir"})).forEach(function(h){var n=a("option","",h||"Veldu nafn");n.value=h,d.appendChild(n)}),d.value=r.indexOf(j)!==-1?j:""}Array.prototype.forEach.call(l.querySelectorAll(".vst-hopp a"),function(r){var d=r.getAttribute("href").slice(1);r.href=location.pathname+location.search+"#"+d,r.addEventListener("click",function(j){var h=document.getElementById(d);h&&(j.preventDefault(),h.scrollIntoView({behavior:"smooth",block:"start"}),history.replaceState&&history.replaceState(null,"",r.href))})}),y("eg").addEventListener("change",function(){ut(m,this.value),Y()});function Y(){var r=N();y("eg-bar").classList.toggle("vst-eg-bar--tomt",!r),y("eg-texti").textContent=r?"H\xE6 "+r+". Verkin sem eru merkt \xFE\xE9r eru undir \u201E\xDE\xEDn verk\u201C, og breytingar \xED Efni eru skr\xE1\xF0ar \xE1 \xFEig.":"Veldu nafni\xF0 \xFEitt \xE1\xF0ur en \xFE\xFA breytir einhverju. \xDEa\xF0 er muna\xF0 \xED \xFEessum vafra.";var d=y("min");if(d.textContent="",!r){d.appendChild(a("li","vst-tomt","Veldu nafni\xF0 \xFEitt efst til a\xF0 sj\xE1 verkin \xFE\xEDn."));return}var j=(L.verkefni||[]).filter(function(h){return h.stada!=="Loki\xF0"&&(h.hver===r||h.hver==="Allir")}).sort(function(h,n){return(_(h.frestur)||864e13)-(_(n.frestur)||864e13)});j.forEach(function(h){d.appendChild(g(h))}),j.length||d.appendChild(a("li","vst-tomt","Ekkert opi\xF0 verk er merkt \xFE\xE9r."))}function V(){return Ht({action:"bandStada",b:Z}).then(function(r){if(r.rangurLykill){ut(i,""),B("invalid");return}if(!r.ok){y("villa").textContent=r.villa||"\xD3\xFEekkt villa.",B("error");return}Q(r),B("ok")}).catch(function(r){y("villa").textContent=r.message+" Pr\xF3fa\xF0u a\xF0 endurhla\xF0a s\xED\xF0una.",B("error")})}if(y("uppfaera").addEventListener("click",function(){var r=this;r.disabled=!0,V().then(function(){r.disabled=!1})}),!Z){B("invalid");return}B("loading"),V()}var ya="rpghdz4ncwxr449";var ge=(l,i)=>{try{localStorage.setItem(l,i)}catch{}},oe=l=>{try{return localStorage.getItem(l)}catch{return null}},he=l=>{try{localStorage.removeItem(l)}catch{}};function Ge(){let l=new Uint8Array(32);return crypto.getRandomValues(l),Array.from(l,i=>i.toString(16).padStart(2,"0")).join("")}function xa(l){let i="";return new Uint8Array(l).forEach(m=>i+=String.fromCharCode(m)),btoa(i).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function wa(l){return JSON.stringify(l).replace(/[\u007f-￿]/g,i=>"\\u"+i.charCodeAt(0).toString(16).padStart(4,"0"))}function be(l,i){let m=l;try{m=JSON.parse(l).error_summary||l}catch{}let s=new Error(m);return s.status=i,s.vantarHeimild=/missing_scope/.test(m),s.utrunnid=i===401&&!s.vantarHeimild,s}function Je({appKey:l=ya,geymsla:i="rs"}={}){let m={refresh:i+"_refresh",verifier:i+"_verifier",state:i+"_state"},s=null,E=0,z=null,y=()=>location.origin+location.pathname;async function B(){let u=Ge(),v=Ge();ge(m.verifier,u),ge(m.state,v);let w=xa(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(u))),S="https://www.dropbox.com/oauth2/authorize?client_id="+encodeURIComponent(l)+"&response_type=code&token_access_type=offline&code_challenge="+w+"&code_challenge_method=S256&state="+v+"&redirect_uri="+encodeURIComponent(y());try{window.top.location.href=S}catch{location.href=S}}async function Z(u){let v=await fetch("https://api.dropboxapi.com/oauth2/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({client_id:l,...u}).toString()}),w=await v.json();if(!v.ok)throw new Error(w.error_description||w.error||"Dropbox-innskr\xE1ning mist\xF3kst");return s=w.access_token,E=Date.now()+Math.max(0,w.expires_in-60)*1e3,w}async function _(){let u=new URL(location.href),v=u.searchParams.get("code");if(!v)return!1;let w=u.searchParams.get("state"),S=oe(m.state);u.searchParams.delete("code"),u.searchParams.delete("state");try{history.replaceState(history.state,"",u.href)}catch{}if(S&&w!==S)throw new Error("Innskr\xE1ningin passa\xF0i ekki vi\xF0 \xFEessa s\xED\xF0u. Reyndu aftur.");let K=await Z({code:v,grant_type:"authorization_code",code_verifier:oe(m.verifier)||"",redirect_uri:y()});return he(m.verifier),he(m.state),K.refresh_token&&ge(m.refresh,K.refresh_token),!0}async function F(){if(s&&Date.now()<E)return s;let u=oe(m.refresh);if(!u)throw new Error("Ekki tengt vi\xF0 Dropbox");return await Z({grant_type:"refresh_token",refresh_token:u}),s}function J(){he(m.refresh),s=null,E=0,z=null}async function O(u){let v={Authorization:"Bearer "+await F()};return z&&u&&(v["Dropbox-API-Path-Root"]=z),v}async function at(u,v){let w=await O(u.startsWith("files/"));w["Content-Type"]="application/json";let S=await fetch("https://api.dropboxapi.com/2/"+u,{method:"POST",headers:w,body:v===null?"null":JSON.stringify(v)});if(!S.ok)throw be(await S.text(),S.status);return S.json()}async function g(){let u=await at("users/get_current_account",null),v=u.root_info;return v&&v.root_namespace_id&&v.home_namespace_id&&v.root_namespace_id!==v.home_namespace_id&&(z=JSON.stringify({".tag":"root",root:v.root_namespace_id})),u}async function T(u){let v=await at("files/list_folder",{path:u,recursive:!1}),w=v.entries;for(;v.has_more;)v=await at("files/list_folder/continue",{cursor:v.cursor}),w=w.concat(v.entries);return w}async function k(u,v,w,S){let K=await O(!0);return new Promise((A,R)=>{let I=new XMLHttpRequest;I.open("POST","https://content.dropboxapi.com/2/"+u),Object.entries(K).forEach(([N,et])=>I.setRequestHeader(N,et)),I.setRequestHeader("Content-Type","application/octet-stream"),I.setRequestHeader("Dropbox-API-Arg",wa(v)),S&&(I.upload.onprogress=N=>N.lengthComputable&&S(N.loaded)),I.onload=()=>I.status<300?A(I.responseText?JSON.parse(I.responseText):null):R(be(I.responseText,I.status)),I.onerror=()=>R(new Error("Ekkert samband vi\xF0 Dropbox.")),I.send(w)})}async function L(u,v,w=()=>{}){let K={path:v.replace(/\/$/,"")+"/"+u.name,mode:"add",autorename:!0,mute:!1};if(u.size<=157286400)return k("files/upload",K,u,N=>w(N/u.size));let A=0,R=await k("files/upload_session/start",{close:!1},u.slice(0,33554432),N=>w(N/u.size));for(A=Math.min(33554432,u.size);u.size-A>33554432;){let N=A;await k("files/upload_session/append_v2",{cursor:{session_id:R.session_id,offset:N},close:!1},u.slice(N,N+33554432),et=>w((N+et)/u.size)),A+=33554432}let I=A;return k("files/upload_session/finish",{cursor:{session_id:R.session_id,offset:I},commit:K},u.slice(I),N=>w((I+N)/u.size))}async function Q(u){try{return(await at("sharing/create_shared_link_with_settings",{path:u,settings:{requested_visibility:"public",audience:"public",access:"viewer"}})).url}catch(v){if(!/shared_link_already_exists/.test(v.message))throw v;let w=await at("sharing/list_shared_links",{path:u,direct_only:!0}),S=w.links.find(K=>!K.link_permissions||K.link_permissions.resolved_visibility?.[".tag"]==="public")||w.links[0];if(!S)throw v;return S.url}}async function nt(u){let v={};for(let w=0;w<u.length;w+=25){let S=u.slice(w,w+25),K=await O(!0);K["Content-Type"]="application/json";let A=await fetch("https://content.dropboxapi.com/2/files/get_thumbnail_batch",{method:"POST",headers:K,body:JSON.stringify({entries:S.map(R=>({path:R,format:"jpeg",size:"w128h128",mode:"fitone_bestfit"}))})});if(!A.ok)throw be(await A.text(),A.status);(await A.json()).entries.forEach((R,I)=>{R[".tag"]==="success"&&(v[S[I]]="data:image/jpeg;base64,"+R.thumbnail)})}return v}return{tengdur:()=>!!oe(m.refresh),innskra:B,ljukaInnskraningu:_,utskra:J,api:at,reikningur:g,listi:T,hlada:L,hlekkur:Q,smamyndir:nt}}var qe=/\.(jpe?g|png|mp4)$/i,Ye=/\.(jpe?g|png)$/i;function Ca(l){return l>1048576?(l/1048576).toFixed(1)+" MB":Math.round(l/1024)+" kB"}function Ze({mappa:l}){let i=Je(),m=null,s=null,E=i.ljukaInnskraningu().catch(u=>(console.warn("dropbox:",u.message),!1));function z(){return s||(s=E.then(async()=>i.tengdur()?(m=await i.reikningur(),m):null).catch(u=>{throw s=null,(u.vantarHeimild||u.utrunnid)&&i.utskra(),u})),s}let y=a("dialog","vbt-dbx"),B=a("div","vbt-dbx-haus"),Z=a("b"),_=a("button","vbt-link","Upp");_.type="button";let F=a("button","vbt-link","Loka");F.type="button",B.append(_,Z,F);let J=a("p","vbt-small"),O=a("ul","vbt-dbx-listi");y.append(B,J,O),document.body.appendChild(y);let at=l,g=null;F.addEventListener("click",()=>y.close()),y.addEventListener("close",()=>g&&g(null)),_.addEventListener("click",()=>{at.split("/").length>2&&k(at.replace(/\/[^/]+$/,""))});function T(){let u=a("button","vbt-link","Skr\xE1 \xFAt");return u.type="button",u.addEventListener("click",()=>{i.utskra(),m=null,s=null,y.close()}),u}async function k(u){at=u,Z.textContent=u,_.hidden=u===l,O.textContent="",O.appendChild(a("li","vbt-small","S\xE6ki \u2026"));try{let v=await i.listi(u),w=v.filter(A=>A[".tag"]==="folder").sort((A,R)=>A.name.localeCompare(R.name)),S=v.filter(A=>A[".tag"]==="file").sort((A,R)=>R.server_modified.localeCompare(A.server_modified));O.textContent="",w.forEach(A=>{let R=a("li","vbt-dbx-mappa"),I=a("button","","\u{1F4C1} "+A.name);I.type="button",I.addEventListener("click",()=>k(A.path_display)),R.appendChild(I),O.appendChild(R)});let K=[];S.forEach(A=>{let R=qe.test(A.name),I=a("li",R?"":"vbt-dbx-bannad"),N=a("button");N.type="button",N.disabled=!R;let et=a("span","vbt-dbx-thumb",Ye.test(A.name)?"":A.name.split(".").pop().toUpperCase());Ye.test(A.name)&&K.push([A.path_display,et]);let st=a("span","vbt-dbx-nafn",A.name);st.appendChild(a("small","",Ca(A.size)+" \xB7 "+A.server_modified.slice(0,10))),N.append(et,st),R&&N.addEventListener("click",()=>Q(A.path_display,N)),I.appendChild(N),O.appendChild(I)}),v.length||O.appendChild(a("li","vbt-small","Mappan er t\xF3m.")),i.smamyndir(K.map(A=>A[0])).then(A=>{K.forEach(([R,I])=>{A[R]&&(I.style.backgroundImage=`url(${A[R]})`)})}).catch(()=>{})}catch(v){O.textContent="",O.appendChild(a("li","vbt-msg",v.message))}}function L(u){return u.vantarHeimild?(i.utskra(),m=null,s=null,y.open&&y.close(),confirm("Dropbox \xFEarf n\xFDja innskr\xE1ningu svo s\xED\xF0an megi hla\xF0a upp og b\xFAa til hlekki. Skr\xE1 inn n\xFAna?")&&i.innskra(),!0):!1}async function Q(u,v){v.disabled=!0,J.textContent="B\xFD til hlekk \u2026";try{let w=await i.hlekkur(u),S=g;g=null,y.close(),S(w)}catch(w){if(L(w))return;J.textContent="T\xF3kst ekki a\xF0 b\xFAa til hlekk: "+w.message,v.disabled=!1}}async function nt(){try{if(await z())return!0}catch(u){if(i.tengdur())throw u}return confirm("Tengja Dropbox? \xDE\xFA fer\xF0 til Dropbox og kemur svo aftur hinga\xF0. Textinn \xED reitunum heldur s\xE9r.")&&await i.innskra(),!1}return{async velja(){return await nt()?(J.textContent="Tengt sem "+m.name.display_name+". ",J.appendChild(T()),y.showModal(),k(l),new Promise(u=>g=u)):null},async hlada(u,v){if(!qe.test(u.name))throw new Error("Bara .jpg, .png e\xF0a .mp4.");if(!await nt())return null;try{let w=await i.hlada(u,l,S=>v("Hle\xF0 upp "+Math.round(S*100)+" %"));return v("B\xFD til hlekk \u2026"),await i.hlekkur(w.path_display)}catch(w){if(L(w))return null;throw w}}}}var Qe=`<div class="vbt">
  <div class="vbt-head">
    <h1 class="vst-midi vst-midi--red">Nafir birta</h1>
    <div class="vst-count"><span class="vst-counter" data-bt="naesta">--</span><span data-bt="naesta-texti">ekkert \xED bi\xF0r\xF6\xF0</span></div>
  </div>

  <form class="vbt-gate" data-bt="gate" hidden>
    <p>Lykilor\xF0 (e\xF0a opna\xF0u hlekkinn sem \xD3li sendi \xFE\xE9r):</p>
    <input type="password" data-bt="lykill" autocomplete="current-password">
    <button class="vbt-btn" type="submit">Opna</button>
    <p class="vbt-msg" data-bt="gate-villa"></p>
  </form>

  <p class="vst-status" data-bt="hledur"><span class="vst-led vst-led--wait"></span>S\xE6ki</p>

  <div class="vbt-app" data-bt="app" hidden>
    <section>
      <h2 class="vst-midi">Bi\xF0r\xF6\xF0</h2>
      <ul class="vbt-rod" data-bt="rod"></ul>
      <p class="vbt-small">Tv\xF6 skref: \u201ESenda inn\u201C l\xE6tur Facebook og Instagram yfirfara myndina og textann (ekkert er birt), og \u201ESta\xF0festa og t\xEDmasetja\u201C opnast \xFEegar yfirfer\xF0in hefur sta\xF0ist. F\xE6rslan fer \xFAt \xED s\xED\xF0asta lagi 5 m\xEDn\xFAtum eftir t\xEDmann og \xFEa\xF0 m\xE1 h\xE6tta vi\xF0 h\xE9r \xFEanga\xF0 til.</p>
    </section>

    <section data-bt="boost-hluti" hidden>
      <h2 class="vst-midi">Boost</h2>
      <p class="vbt-small vbt-hint">Augl\xFDsing \xE1 f\xE6rslu sem er komin \xFAt, fyrir fasta upph\xE6\xF0 og fastan dagafj\xF6lda. Boosti\xF0 er b\xFAi\xF0 til st\xF6\xF0va\xF0; ekkert kostar neitt fyrr en \xFEa\xF0 er sett af sta\xF0, og \xFEa\xF0 h\xE6ttir sj\xE1lft \xE1 lokadeginum. Mest <span data-bt="boost-hamark">5.000 kr.</span> \xE1 hvert boost, og augl\xFDsingav\xF6r\xF0urinn st\xF6\xF0var allt sem fer yfir \xFEa\xF0.</p>
      <ul class="vbt-rod vbt-boostlisti" data-bt="boost-listi"></ul>
      <form class="vbt-stjorn vbt-boostform" data-bt="boost-form" hidden></form>
      <p class="vbt-small"><a data-bt="boost-ads" href="https://adsmanager.facebook.com/" target="_blank" rel="noopener">Opna \xED Ads Manager</a> (\xFEarf ekki, en \xFEar s\xE9st allt n\xE1nar)</p>
    </section>

    <section>
      <h2 class="vst-midi">F\xE6rslur</h2>
      <p class="vbt-small vbt-hint">Textunum er breytt \xE1 <a data-bt="yfirlit" href="/nafir/stada" target="_blank" rel="noopener">yfirliti bandsins</a>. H\xE9r velur\xF0u hva\xF0a texti fer \xE1 hvorn mi\xF0il, og textann m\xE1 laga fyrir \xFEessa birtingu \xE1n \xFEess a\xF0 breyta f\xE6rslunni.</p>
      <div class="vbt-listi" data-bt="faerslur"></div>
    </section>

    <p class="vbt-small">S\xF3tt <span data-bt="sott"></span>. <button class="vbt-link" type="button" data-bt="uppfaera">Uppf\xE6ra</button> \xB7 <button class="vbt-link" type="button" data-bt="utskra">Skr\xE1 \xFAt</button></p>
  </div>
</div>
`;var Sa={"":"/AUGLYSINGAR/SHAKON",per:"/AUGLYSINGAR/PER"};function Xe(l){l.innerHTML=Qe;var i=l.getAttribute("data-verkefni")||"",m=i?"vogor-birta-"+i:"vogor-promo-key",s="vogor-birta-mal",E={Birt:"ok","Prufa \xED lagi":"ok",T\u00EDmasett:"bid",Prufa:"prufa","B\xED\xF0ur Instagram":"bid",Sendi:"bid",Villa:"villa",\u00D3v\u00EDst:"villa",\u00DAtrunni\u00F0:"villa"},z=["T\xEDmasett","Prufa","B\xED\xF0ur Instagram"],y={Prufa:"\xCD yfirfer\xF0","Prufa \xED lagi":"Yfirfer\xF0 \xED lagi"};function B(t){return t.prufa&&y[t.stada]||t.stada}var Z=["Facebook","Instagram","Instagram Story","Facebook Story"],_="Stafr\xE6nn H\xE1kon",F="stafraennhakon",J=["is","en"],O=[{nafn:"Maggi",ig:"maggi_freyr",inn:!0},{nafn:"\xC1rni \xDE\xF3r",ig:"johliujv",inn:!0},{nafn:"R\xF3bert",ig:"robertrunolfs"},{nafn:"L\xE1rus",ig:"larussigurdsson_brimhof"},{nafn:"\xD3li",ig:"olafurjosephsson"}];function at(t){if(t){Z=t.midlar||Z,O=t.collab||O,_=t.sidaNafn||_,F=t.igNafn||F,J=t.tungumal||J;var e=l.querySelector(".vbt-head .vst-midi");e&&t.titill&&(e.textContent=t.titill+" birta");var o=g("yfirlit");o&&t.yfirlit&&(o.href=t.yfirlit,o.textContent="yfirlestrars\xED\xF0unni")}}function g(t){return l.querySelector('[data-bt="'+t+'"]')}var T=Ze({mappa:l.getAttribute("data-dropbox-mappa")||Sa[i]||"/AUGLYSINGAR"}),k=zt("l",m).lykill;function L(t,e){var o=Object.assign({action:t,key:k},e||{});return i&&(o.verkefni=i),Ht(o,i?se:null).then(function(c){return c.rangtLeyniord&&(k="",ut(m,""),Q("gate")),c}).catch(function(c){return{ok:!1,villa:c.message}})}function Q(t){g("gate").hidden=t!=="gate",g("hledur").hidden=t!=="hledur",g("app").hidden=t!=="app"}function nt(t){return t?new Date(t.replace(" ","T")+":00Z"):null}function u(t){var e=nt(t);return e?e.getUTCDate()+". "+Vt[e.getUTCMonth()]+" "+t.slice(11,16):""}function v(t){var e=Math.round((nt(t)-Date.now())/6e4);if(e<=0)return"n\xFAna";if(e<60)return e+" m\xEDn";if(e<2880)return Math.floor(e/60)+" klst "+e%60+" m\xEDn";var o=Math.round(e/1440);return o+(o===1?" dag":" daga")}function w(t){var e=Math.round((nt(t)-Date.now())/6e4);return e<60?Math.max(e,0)+" m\xEDn":e<2880?Math.round(e/60)+" klst":Math.round(e/1440)+" dagar"}var S={},K="vogor-birta-drog",A={};try{A=JSON.parse(sessionStorage.getItem(K)||"{}")||{}}catch{}function R(){try{sessionStorage.setItem(K,JSON.stringify(A))}catch{}}var I=[];function N(t){return L("birtingar").then(function(e){if(!e.ok){e.rangtLeyniord||(Q("gate"),g("gate-villa").textContent=e.villa||"N\xE1\xF0i ekki \xED g\xF6gnin.");return}S=e,at(e.verkefni),t===!0?d():(r(),wt()),Q("app")})}var et=null,st={},ht={PAUSED:"st\xF6\xF0va\xF0 hj\xE1 Meta",IN_PROCESS:"\xED yfirfer\xF0 hj\xE1 Meta",PENDING_REVIEW:"\xED yfirfer\xF0 hj\xE1 Meta",DISAPPROVED:"Meta hafna\xF0i augl\xFDsingunni",WITH_ISSUES:"vandam\xE1l hj\xE1 Meta",ARCHIVED:"\xED geymslu hj\xE1 Meta",DELETED:"eytt hj\xE1 Meta"},bt={"\xCD gangi":"ok",St\u00F6\u00F0va\u00F0:"bid",Villa:"villa",\u00D3v\u00EDst:"villa"};function W(t){return String(Math.round(t||0)).replace(/\B(?=(\d{3})+(?!\d))/g,".")+" kr."}function xt(t){var e=nt(t+" 00:00");return e?e.getUTCDate()+". "+Vt[e.getUTCMonth()]:t}function wt(){return i?L("boostListi").then(function(t){et=t&&t.ok?t:null,vt()}):Promise.resolve()}function vt(){var t=et,e=g("boost-hluti");if(e.hidden=!t||!t.leyft&&!t.boost.length,!e.hidden){g("boost-hamark").textContent=W(t.hamark),g("boost-ads").href=t.adsManager;var o={};(S.faerslur||[]).forEach(function(f){o[f.id]=f.heiti}),t.faerslur.forEach(function(f){o[f.id]=f.heiti});var c=g("boost-listi");c.textContent="",t.boost.filter(function(f){return f.stada!=="Villa"||f===t.boost[0]}).forEach(function(f){c.appendChild(kt(f,o))}),c.children.length||c.appendChild(a("li","vbt-tomt","Ekkert boost enn\xFE\xE1.")),V()}}function kt(t,e){var o=t.stada==="\xCD gangi"&&t.endar&&nt(t.endar)<Date.now(),c=o?"Loki\xF0":t.stada,f=a("li",c==="\xCD gangi"||c==="St\xF6\xF0va\xF0"?"":"vbt-buid");f.appendChild(a("span","vst-led vst-led--"+(bt[c]||""))),f.appendChild(a("span","vbt-timi",u(t.timi))),f.appendChild(a("span","",t.midill));var b=a("span","vbt-heiti",(e[t.efni]||t.efni)+" \xB7 "+t.hopurHeiti+" \xB7 "+W(t.upphaed)+" / "+t.dagar+(t.dagar===1?" dagur":" dagar")),M=[];c==="St\xF6\xF0va\xF0"?M.push(t.byrjar?"St\xF6\xF0va\xF0":"Tilb\xFAi\xF0, ekki komi\xF0 af sta\xF0"):c==="\xCD gangi"?M.push("\xCD gangi til "+u(t.endar)+(ht[t.meta]?" ("+ht[t.meta]+")":"")):c==="Loki\xF0"?M.push("Loki\xF0 "+u(t.endar)):M.push(c+(t.athugasemd?": "+t.athugasemd:"")),t.eytt!=null&&(t.eytt>0||c!=="St\xF6\xF0va\xF0")&&M.push("eytt "+W(t.eytt)+(t.na?", n\xE1\xF0i til "+t.na:"")+(t.smellir?", "+t.smellir+" smellir \xE1 hlekkinn":"")),t.hver&&t.hver!==S.eg&&M.push(t.hver),b.appendChild(a("small","",M.join(" \xB7 "))),f.appendChild(b);var H=a("span");return et.leyft&&c==="St\xF6\xF0va\xF0"&&t.ad?H=Y("Setja af sta\xF0","",t,"boostKveikja","Setja boosti\xF0 af sta\xF0? \xDEa\xF0 ey\xF0ir allt a\xF0 "+W(t.upphaed)+" \xE1 "+t.dagar+(t.dagar===1?" degi":" d\xF6gum")+" ("+t.hopurHeiti+") og h\xE6ttir sj\xE1lft."):et.leyft&&c==="\xCD gangi"&&(H=Y("St\xF6\xF0va","vbt-btn--ljos",t,"boostStodva","")),f.appendChild(H),f}function Y(t,e,o,c,f){var b=a("button","vbt-btn "+e,t);return b.type="button",b.addEventListener("click",function(){f&&!confirm(f)||(b.disabled=!0,L(c,{herferd:o.herferd}).then(function(M){if(!M.ok){b.disabled=!1,alert(M.villa||"T\xF3kst ekki.");return}wt()}))}),b}function V(){var t=et,e=g("boost-form");if(e.textContent="",e.hidden=!t.leyft,!t.leyft)return;if(e.appendChild(a("b","","N\xFDtt boost")),!t.faerslur.length){e.appendChild(a("p","vbt-small","Engin f\xE6rsla sem er komin \xFAt hefur fundist \xE1 Facebook e\xF0a Instagram enn\xFE\xE1. T\xF6lurnar eru s\xF3ttar \xE1 6 t\xEDma fresti."));return}var o=t.sjalfgefid||{},c=a("label","","F\xE6rsla"),f=a("select");t.faerslur.forEach(function(tt){var it=a("option","",tt.heiti+" ("+xt(tt.birta)+")");it.value=tt.id,f.appendChild(it)}),f.value=t.faerslur.some(function(tt){return tt.id===st.efni})?st.efni:t.faerslur[0].id,c.appendChild(f),e.appendChild(c);var b=a("div","vbt-tvo"),M=a("label","","Mi\xF0ill"),H=a("select");M.appendChild(H);var D=a("label","","H\xF3pur"),x=a("select");t.hopar.forEach(function(tt){var it=a("option","",tt.heiti);it.value=tt.id,x.appendChild(it)}),x.value=st.hopur||o.hopur||(t.hopar[0]||{}).id,D.appendChild(x),b.appendChild(M),b.appendChild(D),e.appendChild(b);var C=a("div","vbt-tvo"),rt=a("label","","Upph\xE6\xF0 (kr.)"),q=a("input");q.type="number",q.min=t.lagmark,q.max=t.hamark,q.step=500,q.value=st.upphaed||o.upphaed||3e3,rt.appendChild(q);var gt=a("label","","Dagar"),X=a("input");X.type="number",X.min=1,X.max=t.dagarMest,X.step=1,X.value=st.dagar||o.dagar||5,gt.appendChild(X),C.appendChild(rt),C.appendChild(gt),e.appendChild(C);var dt=a("label","","Hlekkurinn \xED hnappnum"),Et=a("input");Et.placeholder="https://",dt.appendChild(Et),e.appendChild(dt);var lt=a("p","vbt-small");e.appendChild(lt);var Ft=a("div","vbt-takkar"),jt=a("button","vbt-btn","B\xFAa til boost");jt.type="submit",Ft.appendChild(jt),e.appendChild(Ft);var Dt=a("p","vbt-msg");e.appendChild(Dt);var Lt=!0,yt=st.midill||o.midill;function Qt(){return t.faerslur.filter(function(tt){return tt.id===f.value})[0]}function _t(){var tt=Qt(),it=yt;H.textContent="",tt.midlar.forEach(function(ft){var pt=a("option","",ft);pt.value=ft,H.appendChild(pt)}),H.value=tt.midlar.indexOf(it)!==-1?it:tt.midlar[0]}function $(){var tt=Qt(),it=!!t.thurfaHlekk[H.value];dt.hidden=!it,it&&Lt&&(Et.value=tt.hlekkur||"");var ft=Math.round(Number(q.value))||0,pt=Math.round(Number(X.value))||0,Pt=t.hopar.filter(function(Wt){return Wt.id===x.value})[0],Xt=H.value==="Instagram"?"Instagram-f\xE6rslan sj\xE1lf ver\xF0ur augl\xFDsingin, me\xF0 \u201EListen now\u201C-hnappi \xE1 hlekkinn.":t.facebook==="faersla"?"Facebook-f\xE6rslan sj\xE1lf er boostu\xF0, eins og h\xFAn er.":"N\xFD Facebook-augl\xFDsing \xFAr mynd og texta f\xE6rslunnar, me\xF0 \u201EListen now\u201C-hnappi \xE1 hlekkinn.";lt.textContent="Allt a\xF0 "+W(ft)+" \xE1 "+pt+(pt===1?" degi":" d\xF6gum")+(pt?" (um "+W(ft/pt)+" \xE1 dag)":"")+(Pt?", "+Pt.heiti:"")+". "+Xt+" B\xFAi\xF0 til st\xF6\xF0va\xF0; \xFE\xFA setur \xFEa\xF0 af sta\xF0 \xED listanum.",st={efni:f.value,midill:H.value,hopur:x.value,upphaed:q.value,dagar:X.value}}f.addEventListener("change",function(){Lt=!0,_t(),$()}),H.addEventListener("change",function(){yt=H.value}),[H,x,q,X].forEach(function(tt){tt.addEventListener("input",$),tt.addEventListener("change",$)}),Et.addEventListener("input",function(){Lt=!1}),_t(),$(),e.onsubmit=function(tt){tt.preventDefault(),Dt.textContent="",jt.disabled=!0,L("boostBua",{efni:f.value,midill:H.value,hopur:x.value,upphaed:Number(q.value),dagar:Number(X.value),hlekkur:t.thurfaHlekk[H.value]?Et.value.trim():""}).then(function(it){if(jt.disabled=!1,!it.ok){Dt.textContent=it.villa||"T\xF3kst ekki.";return}wt().then(function(){var ft=g("boost-form").querySelector(".vbt-msg");ft&&(ft.textContent="Boosti\xF0 er tilb\xFAi\xF0 og st\xF6\xF0va\xF0. Settu \xFEa\xF0 af sta\xF0 \xED listanum h\xE9r fyrir ofan.",ft.classList.add("vbt-msg--ok"))})})}}function r(){I=[],d();var t=g("faerslur");t.textContent="",S.faerslur.slice().sort(function(e,o){return e.birta.localeCompare(o.birta)}).forEach(function(e){t.appendChild(h(e))})}function d(){var t={};S.faerslur.forEach(function(b){t[b.id]=b.heiti});var e=S.birtingar.filter(function(b){return z.indexOf(b.stada)!==-1}).sort(function(b,M){return b.timi.localeCompare(M.timi)}),o=S.birtingar.filter(function(b){return z.indexOf(b.stada)===-1&&b.stada!=="H\xE6tt vi\xF0"}).sort(function(b,M){return M.timi.localeCompare(b.timi)}).slice(0,15),c=g("rod");c.textContent="",e.concat(o).forEach(function(b){var M=a("li",z.indexOf(b.stada)===-1?"vbt-buid":"");M.appendChild(a("span","vst-led vst-led--"+(E[b.stada]||""))),M.appendChild(a("span","vbt-timi",u(b.timi))),M.appendChild(a("span","",b.midill));var H=a("span","vbt-heiti",(b.prufa?"Yfirfer\xF0: ":"")+(t[b.efni]||b.efni)),D=a("small");if(b.stada==="Birt"&&b.nidurstada){var x=a("a","","Birt, opna f\xE6rsluna");x.href=b.nidurstada,x.target="_blank",x.rel="noopener",D.appendChild(x)}else D.textContent=(b.stada==="T\xEDmasett"?"Fer \xFAt eftir "+v(b.timi):B(b)+(b.nidurstada?": "+b.nidurstada:""))+(b.hver&&b.hver!==S.eg?" \xB7 "+b.hver:"");H.appendChild(D),M.appendChild(H),z.indexOf(b.stada)!==-1?M.appendChild(j(b)):M.appendChild(a("span")),c.appendChild(M)}),c.children.length||c.appendChild(a("li","vbt-tomt","Ekkert \xED bi\xF0r\xF6\xF0 enn\xFE\xE1."));var f=e.filter(function(b){return!b.prufa})[0];g("naesta").textContent=f?w(f.timi):"--",g("naesta-texti").textContent=f?"\xED n\xE6stu birtingu":"ekkert \xED bi\xF0r\xF6\xF0",g("sott").textContent=S.nu+(S.eg?", innskr\xE1\xF0(ur): "+S.eg:""),I.forEach(function(b){b()})}function j(t){var e=a("button","vbt-btn vbt-btn--ljos","H\xE6tta vi\xF0");return e.type="button",e.addEventListener("click",function(){e.disabled=!0,L("birtingHaetta",{id:t.id}).then(function(o){o.ok?(S.birtingar=o.birtingar,d()):(e.disabled=!1,alert(o.villa))})}),e}function h(t){var e=A[t.id]||(A[t.id]={}),o=t.stada==="P\xF3sta\xF0",c=a("article","vbt-kort"+(o?" vbt-kort--postad":"")),f=a("div","vbt-kort-haus");f.appendChild(a("b","",t.heiti));var b=nt(t.birta+" 00:00");f.appendChild(a("span","vbt-merki",b.getUTCDate()+". "+Vt[b.getUTCMonth()]+" \xB7 "+t.stada)),c.appendChild(f);var M=a("div","vbt-forsk"),H=a("div","vbt-skipta"),D=Z.indexOf("Instagram")!==-1?"Instagram":"Facebook";["Instagram","Facebook","Story"].filter(function(p){return p!=="Instagram"||Z.indexOf("Instagram")!==-1}).forEach(function(p){var P=a("button","",p);P.type="button",P.addEventListener("click",function(){D=p,Ct()}),H.appendChild(P)}),M.appendChild(H);var x=a("div");M.appendChild(x),c.appendChild(M);var C=a("form","vbt-stjorn"),rt=a("div","vbt-midlar"),q={};Z.forEach(function(p){var P=a("label"),G=a("input");G.type="checkbox",G.checked=e[p]!==void 0?e[p]:!/ Story$/.test(p),q[p]=G,P.appendChild(G),P.appendChild(document.createTextNode(p)),rt.appendChild(P),G.addEventListener("change",function(){e[p]=G.checked,Ct()})}),C.appendChild(rt);var gt=a("label","","Texti"),X=a("select");[["en","English"],["is","\xCDslenska"],["baedi","\xCDslenska og enska"]].forEach(function(p){var P=a("option","",p[1]);P.value=p[0],X.appendChild(P)}),X.value=J.length===1?J[0]:e.mal||St(s)||"en",gt.hidden=J.length===1,gt.appendChild(X),C.appendChild(gt);var dt=a("label","","Textinn sem fer \xFAt "),Et=a("span","vbt-teljari");dt.appendChild(Et);var lt=a("textarea");dt.appendChild(lt),C.appendChild(dt);function Ft(){lt.value=X.value==="is"?t.is:X.value==="en"?t.en:[t.is,t.en].filter(Boolean).join(`

`),e.texti=lt.value,Ct()}X.addEventListener("change",function(){e.mal=X.value,ut(s,X.value),Ft()}),lt.addEventListener("input",function(){e.texti=lt.value,Ct()});var jt=a("div","vbt-hopur","Collab \xE1 Instagram ");jt.appendChild(a("span","vbt-teljari","mest 3"));var Dt=a("div","vbt-midlar"),Lt={};O.forEach(function(p){var P=a("label"),G=a("input");G.type="checkbox",Lt[p.ig]=G,P.title="@"+p.ig,P.appendChild(G),P.appendChild(document.createTextNode(p.nafn)),Dt.appendChild(P),G.addEventListener("change",function(){var mt=Bt().filter(function(U){return U!==p.ig});G.checked&&mt.push(p.ig),yt.value=mt.join(", "),e.collab=yt.value,Ct()})}),jt.appendChild(Dt);var yt=a("input");yt.value=e.collab!=null?e.collab:O.filter(function(p){return p.inn}).map(function(p){return p.ig}).join(", "),yt.placeholder="e\xF0a sl\xE1 inn n\xF6fn, a\xF0skilin me\xF0 kommu",yt.setAttribute("aria-label","Collab \xE1 Instagram"),jt.appendChild(yt),C.appendChild(jt),yt.addEventListener("input",function(){e.collab=yt.value,Ct()});function Qt(){var p=Bt();Object.keys(Lt).forEach(function(P){Lt[P].checked=p.indexOf(P)!==-1,Lt[P].disabled=!Lt[P].checked&&p.length>=3})}var _t=a("label","","Mynd e\xF0a myndband"),$=a("input");$.value=e.mynd!=null?e.mynd:t.slod||"",$.placeholder="Dropbox-hlekkur \xE1 .jpg e\xF0a .mp4",_t.appendChild($),C.appendChild(_t),$.addEventListener("input",function(){e.mynd=$.value}),$.addEventListener("change",Ct);var tt=a("div","vbt-takkar vbt-dbx-takkar"),it=a("button","vbt-btn vbt-btn--ljos","Velja \xFAr Dropbox");it.type="button";var ft=a("button","vbt-btn vbt-btn--ljos","Hla\xF0a upp");ft.type="button";var pt=a("input");pt.type="file",pt.accept=".jpg,.jpeg,.png,.mp4,image/jpeg,image/png,video/mp4",pt.hidden=!0;var Pt=a("span","vbt-small");tt.append(it,ft,pt,Pt),C.appendChild(tt);function Xt(p){p&&($.value=p,e.mynd=p,R(),Ct())}function Wt(p){Pt.textContent="Dropbox: "+p.message}it.addEventListener("click",function(){Pt.textContent="",T.velja().then(Xt,Wt)}),ft.addEventListener("click",function(){pt.click()}),pt.addEventListener("change",function(){var p=pt.files[0];pt.value="",p&&(ft.disabled=it.disabled=!0,T.hlada(p,function(P){Pt.textContent=P}).then(function(P){Pt.textContent=P?p.name+" er komin \xE1 Dropbox":"",Xt(P)},Wt).then(function(){ft.disabled=it.disabled=!1}))});var de=a("div","vbt-tvo"),xe=a("label","","Dagur"),At=a("input");At.type="date",At.value=e.dagur||t.birta,At.addEventListener("change",function(){e.dagur=At.value,Ct()}),xe.appendChild(At);var we=a("label","","Klukkan"),$t=a("span","vbt-klukka"),te=String(e.klukka||"12:00").split(":"),ee=a("select"),ae=a("select");function Ce(p){return(p<10?"0":"")+p}function je(p,P,G){P.forEach(function(mt){var U=a("option","",mt);U.value=mt,p.appendChild(U)}),p.value=G}for(var ne=[],pe=0;pe<60;pe+=5)ne.push(Ce(pe));ne.indexOf(te[1])===-1&&ne.push(te[1]),je(ee,Array.apply(null,Array(24)).map(function(p,P){return Ce(P)}),te[0]),je(ae,ne.sort(),te[1]);var Kt={get value(){return ee.value+":"+ae.value}};[ee,ae].forEach(function(p){p.addEventListener("change",function(){e.klukka=Kt.value,Ct()})}),$t.appendChild(ee),$t.appendChild(a("span","",":")),$t.appendChild(ae),we.appendChild($t),de.appendChild(xe),de.appendChild(we),C.appendChild(de);var Se=a("p","vbt-adv");C.appendChild(Se);var Ee=a("div","vbt-takkar"),Gt=a("button","vbt-btn","Senda inn");Gt.type="submit",Ee.appendChild(Gt),C.appendChild(Ee);var Jt=a("div","vbt-yfirferd"),ue=a("ul","vbt-fyrri"),Le=a("p","vbt-small"),It=a("button","vbt-btn vbt-btn--stadfesta","Sta\xF0festa");It.type="button",Jt.appendChild(ue),Jt.appendChild(Le),Jt.appendChild(It),C.appendChild(Jt);var Ut=a("p","vbt-msg"+(e.skilabod?" vbt-msg--ok":""),e.skilabod||"");e.skilabod="",C.appendChild(Ut);var Ae=S.birtingar.filter(function(p){return p.efni===t.id&&!p.prufa&&p.stada!=="H\xE6tt vi\xF0"});if(Ae.length){var Pe=a("ul","vbt-fyrri");Ae.forEach(function(p){var P=a("li");P.appendChild(a("span","vst-led vst-led--"+(E[p.stada]||""))),P.appendChild(document.createTextNode(p.midill+": "+p.stada+(p.stada==="T\xEDmasett"?" "+u(p.timi):"")+(p.hver?" \xB7 "+p.hver:""))),Pe.appendChild(P)}),C.appendChild(Pe)}var ca=S.meta?S.meta.faerslur.filter(function(p){return p.efni===t.id}):[];ca.forEach(function(p){C.appendChild(a("p","vbt-teljari",p.midill+": "+(p.na!=null?"n\xE1 "+p.na+", ":"")+(p.ahorf!=null?"\xE1horf "+p.ahorf+", ":"")+p.vidbrogd+" vi\xF0br\xF6g\xF0"))}),c.appendChild(C);function Tt(p){return!!(q[p]&&q[p].checked)}function fe(){return Z.filter(function(p){return q[p].checked})}function Ct(){Array.prototype.forEach.call(H.children,function(Ne){Ne.setAttribute("aria-pressed",String(Ne.textContent===D))});var p=Be($.value),P=Tt("Instagram");Et.textContent=lt.value.length+(P?" / 2200":"")+" stafir"+(P?", "+(lt.value.match(/#[^\s#]+/g)||[]).length+" / 30 myllumerki":""),Et.classList.toggle("vbt-of",P&&lt.value.length>2200);var G=[];fe().length||G.push("Veldu a\xF0 minnsta kosti einn mi\xF0il."),P&&!$.value&&G.push("Instagram \xFEarf mynd e\xF0a myndband."),$.value&&!p.t&&G.push("Sl\xF3\xF0in \xFEarf a\xF0 enda \xE1 .jpg, .png e\xF0a .mp4 (Dropbox-hlekkur \xE1 skr\xE1na sj\xE1lfa, ekki m\xF6ppu)."),P&&p.t==="mynd"&&!/^jpe?g$/.test(p.e)&&G.push("Instagram tekur bara JPG-myndir."),P&&/instagram\.com|ffm\.to|https?:\/\//.test(lt.value)&&G.push("Hlekkir virka ekki \xED texta \xE1 Instagram; skrifa\xF0u \u201Ehlekkur \xED bio\u201C."),jt.hidden=!P,Qt(),P&&Bt().length>3&&G.push("Instagram leyfir mest 3 \xED collab.");var mt=Tt("Instagram Story")||Tt("Facebook Story");if(mt&&!$.value&&G.push("Story \xFEarf mynd e\xF0a myndband."),Tt("Instagram Story")&&p.t==="mynd"&&!/^jpe?g$/.test(p.e)&&G.push("Instagram Story tekur bara JPG-myndir."),mt&&G.push("Textinn fer ekki me\xF0 \xED Story; hann \xFEarf a\xF0 vera \xED myndinni sj\xE1lfri (9:16)."),Se.textContent=G.join(" "),R(),He(),x.textContent="",D==="Story"){x.appendChild(va(p));return}var U=D==="Facebook",ct=a("div","vbt-sima"+(U?" vbt-sima--fb":"")),qt=a("div","vbt-sima-haus");qt.appendChild(a("i"));var Me=!U&&P?Bt():[],Ie=a("span","",U?_:F+(Me.length?" og "+Me.join(", "):""));U&&Ie.appendChild(a("small","",u(At.value+" "+(Kt.value||"12:00")))),qt.appendChild(Ie),ct.appendChild(qt);var Yt=a("div","vbt-sima-texti"),ze=U?lt.value:lt.value.split(`
`)[0].slice(0,125);U||Yt.appendChild(a("b","",F)),Yt.appendChild(document.createTextNode(ze)),!U&&lt.value.length>ze.length&&Yt.appendChild(a("span","vbt-meira","\u2026 meira")),U&&ct.appendChild(Yt);var re=a("div","vbt-sima-mynd");if(p.t==="mynd"){var me=a("img");me.src=Rt($.value),me.alt="",re.appendChild(me)}else if(p.t==="myndband"){var Zt=a("video");Zt.src=Rt($.value),Zt.muted=!0,Zt.controls=!0,Zt.preload="metadata",re.appendChild(Zt)}else re.textContent=$.value?"Sl\xF3\xF0 sem er hvorki mynd n\xE9 myndband":"Engin mynd";($.value||!U)&&ct.appendChild(re),U||(ct.appendChild(a("div","vbt-sima-takkar","\u2661 \u25EF \u27A4")),ct.appendChild(Yt)),x.appendChild(ct)}function va(p){var P=a("div","vbt-sima vbt-sima--story"),G=a("div","vbt-sima-mynd");if(p.t==="mynd"){var mt=a("img");mt.src=Rt($.value),mt.alt="",G.appendChild(mt)}else if(p.t==="myndband"){var U=a("video");U.src=Rt($.value),U.muted=!0,U.controls=!0,U.preload="metadata",G.appendChild(U)}else G.textContent="Engin mynd";P.appendChild(G);var ct=a("div","vbt-sima-haus");return ct.appendChild(a("i")),ct.appendChild(a("span","",Tt("Instagram Story")||!Tt("Facebook Story")?F:_)),P.appendChild(ct),P}function Bt(){return yt.value.split(/[\s,;]+/).map(function(p){return p.replace(/^@/,"").trim().toLowerCase()}).filter(Boolean)}function Te(){return JSON.stringify([fe(),lt.value,$.value.trim(),Tt("Instagram")?Bt():[]])}function He(){var p=e.hopur?S.birtingar.filter(function(U){return U.id.indexOf(e.hopur+"-")===0}):[];if(Jt.hidden=!p.length,Gt.textContent=p.length?"Senda inn aftur":"Senda inn",!!p.length){ue.textContent="",p.forEach(function(U){var ct=a("li");ct.appendChild(a("span","vst-led vst-led--"+(E[U.stada]||"")));var qt=U.stada!=="Prufa"&&U.stada!=="B\xED\xF0ur Instagram";ct.appendChild(document.createTextNode(U.midill+": "+B(U)+(qt&&U.nidurstada?" ("+U.nidurstada+")":""))),ue.appendChild(ct)});var P=Te()!==e.snid,G=p.every(function(U){return U.stada==="Prufa \xED lagi"}),mt=p.some(function(U){return["Villa","\xD3v\xEDst","\xDAtrunni\xF0","H\xE6tt vi\xF0"].indexOf(U.stada)!==-1});It.hidden=!G||P,It.textContent="Sta\xF0festa og t\xEDmasetja "+u(At.value+" "+(Kt.value||"12:00")),Le.textContent=P?"\xDE\xFA breyttir f\xE6rslunni eftir a\xF0 h\xFAn var send inn. Sendu hana inn aftur svo breytingin ver\xF0i yfirfarin.":mt?"Yfirfer\xF0in st\xF3\xF0st ekki. Laga\xF0u \xFEa\xF0 sem er a\xF0 og sendu inn aftur.":G?"Allt \xED lagi. Sta\xF0festu til a\xF0 t\xEDmasetja; \xFEa\xF0 m\xE1 h\xE6tta vi\xF0 \xED bi\xF0r\xF6\xF0inni \xFEanga\xF0 til.":(p.some(function(U){return/^Instagram/.test(U.midill)})?p.some(function(U){return/^Facebook/.test(U.midill)})?"Facebook og Instagram eru":"Instagram er":"Facebook er")+" a\xF0 yfirfara. \xDEa\xF0 tekur allt a\xF0 5 m\xEDn\xFAtur, myndband stundum lengur. S\xED\xF0an uppf\xE6rist sj\xE1lf."}}return I.push(He),C.addEventListener("submit",function(p){p.preventDefault(),Ut.textContent="",Ut.classList.remove("vbt-msg--ok"),Gt.disabled=!0,L("birtingVista",{efni:t.id,midlar:fe(),timi:At.value+" "+Kt.value,texti:lt.value,mynd:$.value.trim(),prufa:!0,collab:Tt("Instagram")?Bt().join(","):""}).then(function(P){if(Gt.disabled=!1,!P.ok){Ut.textContent=P.villa||"T\xF3kst ekki.";return}e.hopur=P.hopur,e.snid=Te(),R(),S.birtingar=P.birtingar,d()})}),It.addEventListener("click",function(){Ut.textContent="",It.disabled=!0,L("birtingStadfesta",{hopur:e.hopur,timi:At.value+" "+Kt.value}).then(function(p){if(It.disabled=!1,!p.ok){Ut.textContent=p.villa||"T\xF3kst ekki.";return}e.hopur=null,e.skilabod="T\xEDmasett. F\xE6rslan s\xE9st \xED bi\xF0r\xF6\xF0inni efst og m\xE1 h\xE6tta vi\xF0 \xFEar.",R(),S.birtingar=p.birtingar,r()})}),e.texti!=null?(lt.value=e.texti,Ct()):Ft(),c}g("gate").addEventListener("submit",function(t){t.preventDefault(),k=g("lykill").value.trim(),ut(m,k),g("gate-villa").textContent="",Q("hledur"),N()}),g("uppfaera").addEventListener("click",function(){N()}),g("utskra").addEventListener("click",function(){k="",ut(m,""),Q("gate")});var n=0;setInterval(function(){if(!(!k||g("app").hidden||document.hidden)){n++;var t=S.birtingar&&S.birtingar.some(function(e){return e.prufa&&(e.stada==="Prufa"||e.stada==="B\xED\xF0ur Instagram")});(t||n%3===0)&&N(!0)}},2e4),k?(Q("hledur"),N()):Q("gate")}var We=`<div class="vp" id="vp-admin">
  <form class="vp-card" id="vp-gate" hidden>
    <label>Leynior\xF0
      <input type="password" id="vp-key" autocomplete="current-password" required>
    </label>
    <button type="submit">Opna</button>
  </form>

  <div id="vp-app" hidden>
    <!-- P\xF3star: markh\xF3purinn og pitch-p\xF3starnir, \xFAr P\xF3star-flipanum \xED Sheet-inu -->
    <div class="vp-card">
      <div class="vp-row vp-between">
        <strong id="vp-postar-samtals">S\xE6ki p\xF3sta...</strong>
        <button type="button" id="vp-post-nyr">N\xFDr vi\xF0takandi</button>
      </div>
      <div class="vp-scroll">
        <table id="vp-postar">
          <thead>
            <tr>
              <th>Mi\xF0ill</th><th>Sta\xF0a</th><th>Hver</th><th>Lei\xF0</th><th>Sent</th>
              <th>Opna\xF0</th><th>Hlusta\xF0</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <small>Smelltu \xE1 l\xEDnu til a\xF0 opna p\xF3stinn.</small>
    </div>

    <form class="vp-card" id="vp-post" hidden>
      <div class="vp-row vp-between">
        <strong id="vp-post-titill"></strong>
        <button type="button" id="vp-p-loka">Loka</button>
      </div>
      <div class="vp-row">
        <label>Mi\xF0ill
          <input type="text" id="vp-p-midill" required>
        </label>
        <label>Tengili\xF0ur
          <input type="text" id="vp-p-tengilidur">
        </label>
        <label>Netfang e\xF0a sl\xF3\xF0
          <input type="text" id="vp-p-netfang">
        </label>
        <label>Flokkur
          <select id="vp-p-flokkur"></select>
        </label>
      </div>
      <div class="vp-row">
        <label>Lei\xF0
          <select id="vp-p-leid">
            <option>P\xF3stur</option>
            <option>Facebook</option>
            <option>Ey\xF0ubla\xF0</option>
            <option>Anna\xF0</option>
          </select>
        </label>
        <label>Senda fr\xE1
          <select id="vp-p-fra">
            <option value="">\u2013</option>
            <option>vogorrecords@vogorrecords.com</option>
            <option>shakon@shakon.com</option>
            <option>Eigi\xF0 netfang</option>
          </select>
        </label>
        <label>Hver sendir
          <select id="vp-p-hver"></select>
        </label>
        <label>M\xE1l
          <select id="vp-p-mal">
            <option value="en">English</option>
            <option value="is">\xCDslenska</option>
          </select>
        </label>
        <label>Sta\xF0a
          <select id="vp-p-stada"></select>
        </label>
      </div>
      <label>Efni
        <input type="text" id="vp-p-efni">
      </label>
      <label>Meginm\xE1l
        <textarea id="vp-p-meginmal" rows="18"></textarea>
      </label>
      <small>[BLOKK] og [PRESSUHLEKKUR] v\xEDkja fyrir hlekkjum vi\xF0takandans um lei\xF0 og hann f\xE6r k\xF3\xF0a. \xDEa\xF0 sem stendur h\xE9r er \xFEa\xF0 sem fer \xFAt.</small>
      <label>N\xF3tur
        <textarea id="vp-p-notur" rows="2"></textarea>
      </label>
      <div class="vp-row">
        <button type="submit" id="vp-p-vista">Vista</button>
        <button type="button" id="vp-p-gefa">Gefa k\xF3\xF0a</button>
        <button type="button" id="vp-p-opna">Opna \xED p\xF3stforriti</button>
        <button type="button" id="vp-p-eml">S\xE6kja sem dr\xF6g (.eml)</button>
        <button type="button" id="vp-p-afrita-efni">Afrita efni</button>
        <button type="button" id="vp-p-afrita-meginmal">Afrita meginm\xE1l</button>
        <button type="button" id="vp-p-sent">Merkja sent</button>
        <a id="vp-p-forskodun" target="_blank" rel="noopener">Forsko\xF0a s\xED\xF0una</a>
      </div>
      <span class="vp-status" id="vp-p-status" role="status"></span>
    </form>

    <!-- Eldri lei\xF0in: k\xF3\xF0i \xE1n p\xF3sts. P\xF3star f\xE1 k\xF3\xF0a \xED ritlinum h\xE9r fyrir ofan -->
    <details class="vp-card">
      <summary>Gefa k\xF3\xF0a \xE1n p\xF3sts</summary>
      <form id="vp-gefa">
        <div class="vp-row">
          <label>Vi\xF0takandi
            <input type="text" id="vp-nafn" placeholder="A Closer Listen" required>
          </label>
          <label>Netfang (valfrj\xE1lst)
            <input type="email" id="vp-netfang" placeholder="info@acloserlisten.com">
          </label>
          <label>M\xE1l
            <select id="vp-mal">
              <option value="en">English</option>
              <option value="is">\xCDslenska</option>
            </select>
          </label>
        </div>
        <button type="submit" id="vp-gefa-btn">Gefa k\xF3\xF0a</button>
        <span class="vp-status" id="vp-status" role="status"></span>
      </form>
    </details>

    <div class="vp-card" id="vp-nidurstada" hidden>
      <strong id="vp-titill"></strong>
      <textarea id="vp-blokk" rows="9" readonly></textarea>
      <div class="vp-row">
        <button type="button" id="vp-afrita-blokk">Afrita blokk</button>
        <button type="button" id="vp-afrita-hlekk">Afrita pressuhlekk</button>
        <a id="vp-forskodun" target="_blank" rel="noopener">Forsko\xF0a s\xED\xF0una</a>
      </div>
    </div>

    <div class="vp-card">
      <div class="vp-row vp-between">
        <strong id="vp-samtals">S\xE6ki st\xF6\xF0u...</strong>
        <button type="button" id="vp-uppfaera">Uppf\xE6ra</button>
      </div>
      <div class="vp-scroll">
        <table id="vp-tafla">
          <thead>
            <tr>
              <th>Vi\xF0takandi</th><th>K\xF3\xF0i</th><th>\xDAthluta\xF0</th><th>Opna\xF0 s\xED\xF0ast</th>
              <th>Opnanir</th><th>Hlusta</th><th>S\xE6kja</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <small>Smelltu \xE1 l\xEDnu til a\xF0 sj\xE1 blokkina aftur. \u201ES\xE6kja\u201C er smellur \xE1 ni\xF0urhalshnappinn \xE1 pressus\xED\xF0unni.</small>
    </div>

    <details class="vp-card">
      <summary>Flytja inn k\xF3\xF0a fr\xE1 Bandcamp</summary>
      <p>L\xEDmdu innihald export-skr\xE1rinnar (CSV) h\xE9r. K\xF3\xF0ar sem eru \xFEegar til eru ekki tv\xEDteknir.</p>
      <textarea id="vp-innflutningur" rows="6"></textarea>
      <button type="button" id="vp-flytja-btn">Flytja inn</button>
    </details>
  </div>
</div>
`;function $e(l){l.innerHTML=We;var i="vogor-promo-key",m={en:{pressa:`Your personal promo page (stream, download, press kit):
{pressa}

Direct links:
`,beint:`Listen (private stream): {stream}
Download: {download} (MP3, FLAC or WAV)`},is:{pressa:`\xDE\xEDn pers\xF3nulega promo-s\xED\xF0a (streymi, ni\xF0urhal, pressuefni):
{pressa}

Beinir hlekkir:
`,beint:`Hlusta (loka\xF0 streymi): {stream}
S\xE6kja: {download} (MP3, FLAC e\xF0a WAV)`}};function s(n){return document.getElementById(n)}var E={},z=null,y=St(i);function B(n,t){return Ht(Object.assign({action:n,key:y},t||{})).then(function(e){if(e.rangtLeyniord&&(y="",ut(i,""),Z(!1)),!e.ok)throw new Error(e.villa||"\xD3\xFEekkt villa");return e})}function Z(n){s("vp-gate").hidden=n,s("vp-app").hidden=!n}function _(n){return{pressa:E.press_page?E.press_page+"?k="+n:"",stream:E.private_stream||"",download:E.redeem?E.redeem+"?code="+n:""}}function F(n,t){return n.replace(/\{(\w+)\}/g,function(e,o){return t[o]})}function J(n,t){z=n;var e=_(n.kodi),o=m[s("vp-mal").value];s("vp-titill").textContent=n.vidtakandi+": "+n.kodi+(t?" ("+t+")":""),s("vp-blokk").value=(e.pressa?F(o.pressa,e):"")+F(o.beint,e),s("vp-afrita-hlekk").hidden=!e.pressa,s("vp-forskodun").hidden=!e.pressa,e.pressa&&(s("vp-forskodun").href=e.pressa+"&preview=1"),s("vp-nidurstada").hidden=!1}function O(n,t){var e=document.createElement("td");e.textContent=t||"-",n.appendChild(e)}function at(n){E=n.stillingar||{},s("vp-samtals").textContent=n.linur.length+" \xFAthluta\xF0, "+n.lausir+" lausir af "+n.alls;var t=s("vp-tafla").tBodies[0];t.textContent="",n.linur.forEach(function(e){var o=document.createElement("tr");O(o,e.vidtakandi),O(o,e.kodi),O(o,e.uthlutad),O(o,e.opnadSidast),O(o,e.opnanir?String(e.opnanir):""),O(o,e.hlusta),O(o,e.saekja),o.addEventListener("click",function(){J(e)}),t.appendChild(o)})}function g(){return B("stada").then(at).catch(function(n){s("vp-samtals").textContent="Villa: "+n.message})}var T=["midill","tengilidur","netfang","flokkur","leid","fra","hver","mal","stada","efni","meginmal","notur"],k={leid:"P\xF3stur",mal:"en",stada:"Dr\xF6g"},L={Sent:"sent",Svara\u00F0:"svarad",Skoppa\u00F0i:"skoppadi",Sleppt:"sleppt"},Q=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,nt=/\[(BLOKK|PRESSUHLEKKUR)\]/,u=null;function v(n){return s("vp-p-"+n)}function w(n){s("vp-p-status").textContent=n||""}function S(n){return n?n.slice(0,10):""}function K(n,t){n.options.length||t.forEach(function(e){var o=document.createElement("option");o.value=e,o.textContent=e||"\u2013",n.appendChild(o)})}function A(n,t){var e=Array.prototype.some.call(n.options,function(c){return c.value===t});if(!e){var o=document.createElement("option");o.value=t,o.textContent=t,n.appendChild(o)}n.value=t}function R(n){E=n.stillingar||E,K(v("stada"),n.stodur),K(v("hver"),[""].concat(n.band)),K(v("flokkur"),[""].concat(n.flokkar||[]));var t={};n.postar.forEach(function(f){t[f.stada]=(t[f.stada]||0)+1});var e=n.stodur.filter(function(f){return t[f]}).map(function(f){return t[f]+" "+f.toLowerCase()});s("vp-postar-samtals").textContent=n.postar.length?n.postar.length+" vi\xF0takendur: "+e.join(", "):"Enginn vi\xF0takandi skr\xE1\xF0ur enn";var o=s("vp-postar").tBodies[0];o.textContent="";var c=null;n.postar.forEach(function(f){if((f.flokkur||"")!==c){c=f.flokkur||"";var b=document.createElement("tr");b.className="vp-flokkur";var M=document.createElement("th");M.colSpan=7,M.textContent=c||"\xD3flokka\xF0",b.appendChild(M),o.appendChild(b)}var H=document.createElement("tr");L[f.stada]&&(H.className="vp-st-"+L[f.stada]),O(H,f.midill),O(H,f.stada),O(H,f.hver),O(H,f.leid),O(H,f.sent),O(H,f.opnad?S(f.opnad)+(f.opnanir>1?" ("+f.opnanir+"\xD7)":""):""),O(H,S(f.hlusta)),H.addEventListener("click",function(){wt(f)}),o.appendChild(H)})}function I(){return B("postar").then(R).catch(function(n){s("vp-postar-samtals").textContent="Villa: "+n.message})}function N(){var n=u||{};s("vp-post-titill").textContent=n.id?n.midill+(n.kodi?" \xB7 k\xF3\xF0i "+n.kodi:" \xB7 enginn k\xF3\xF0i"):"N\xFDr vi\xF0takandi",s("vp-p-gefa").hidden=!!n.kodi;var t=n.kodi?_(n.kodi).pressa:"";s("vp-p-forskodun").hidden=!t,t&&(s("vp-p-forskodun").href=t+"&preview=1");var e=v("leid").value==="P\xF3stur";s("vp-p-opna").textContent=e?"Opna \xED p\xF3stforriti":"Afrita og opna sl\xF3\xF0",s("vp-p-eml").hidden=!e}function et(n){for(var t="",e=0;e<n.length;e++)t+=String.fromCharCode(n[e]);return btoa(t)}function st(n,t){if(/^[\x20-\x7e]*$/.test(t))return n+": "+t;var e=new TextEncoder,o=[],c=[];return Array.from(t).forEach(function(f){var b=Array.from(e.encode(f));c.length+b.length>39&&(o.push("=?UTF-8?B?"+et(c)+"?="),c=[]),c=c.concat(b)}),c.length&&o.push("=?UTF-8?B?"+et(c)+"?="),n+": "+o.join(`\r
 `)}function ht(n,t,e,o){var c=["To: "+n];Q.test(t)&&c.push("From: "+t),c.push(st("Subject",e)),c.push("X-Unsent: 1","MIME-Version: 1.0","Content-Type: text/plain; charset=UTF-8","Content-Transfer-Encoding: base64");var f=et(new TextEncoder().encode(o.replace(/\r?\n/g,`\r
`)));return c.join(`\r
`)+`\r
\r
`+f.replace(/(.{76})/g,`$1\r
`)+`\r
`}function bt(n,t,e){var o=URL.createObjectURL(new Blob([t],{type:e})),c=document.createElement("a");c.href=o,c.download=n,document.body.appendChild(c),c.click(),c.remove(),setTimeout(function(){URL.revokeObjectURL(o)},1e3)}var W={};function xt(n){T.forEach(function(t){var e=v(t),o=n[t]||k[t]||"";e.tagName==="SELECT"?A(e,o):e.value=o,W[t]=e.value})}function wt(n){u=n,xt(n),w(V()?"Hlekkir vi\xF0takandans eru komnir inn \xED textann. \u201EVista\u201C geymir hann \xFEannig.":""),N(),s("vp-post").hidden=!1,s("vp-post").scrollIntoView({block:"nearest"})}function vt(){var n=!(u&&u.id),t={};return T.forEach(function(e){var o=v(e).value;(n||o!==W[e])&&(t[e]=o)}),t}function kt(){var n=vt();return u&&u.id&&(n.id=u.id),w("Vista..."),B("postVista",{post:n}).then(function(t){return u=t.postar[0],xt(u),V(),N(),w("Vista\xF0"),I().then(function(){return u})})}function Y(){var n=v("meginmal").value;if(!nt.test(n))return n;var t=u&&u.kodi;if(!t)return null;var e=_(t),o=m[v("mal").value]||m.en,c=(e.pressa?F(o.pressa,e):"")+F(o.beint,e);return n.split("[BLOKK]").join(c).split("[PRESSUHLEKKUR]").join(e.pressa)}function V(){var n=Y();return n===null||n===v("meginmal").value?!1:(v("meginmal").value=n,!0)}function r(n){var t=Y();if(t===null){w("Gef\xF0u k\xF3\xF0a fyrst: p\xF3sturinn notar [BLOKK] e\xF0a [PRESSUHLEKKUR].");return}n(t)}function d(n){w("Villa: "+n.message)}function j(n,t){n.disabled=!0,t().catch(d).then(function(){n.disabled=!1})}s("vp-post-nyr").addEventListener("click",function(){wt({})}),s("vp-p-loka").addEventListener("click",function(){u=null,s("vp-post").hidden=!0}),v("leid").addEventListener("change",N),s("vp-post").addEventListener("submit",function(n){n.preventDefault(),j(s("vp-p-vista"),kt)}),s("vp-p-gefa").addEventListener("click",function(){j(this,function(){return kt().then(function(n){return B("postGefa",{id:n.id})}).then(function(n){E=n.stillingar||E,u=n.post,N();var t=n.nyr?"N\xFDr k\xF3\xF0i: "+n.post.kodi:"Mi\xF0illinn \xE1tti k\xF3\xF0a fyrir: "+n.post.kodi,e=V();return(e?kt():Promise.resolve()).then(function(){return w(t+(e?". Hlekkirnir eru komnir inn \xED textann.":"")),Promise.all([g(),I()])})})})}),s("vp-p-opna").addEventListener("click",function(){var n=this;r(function(t){var e=v("netfang").value.trim(),o=v("fra").value;if(v("leid").value!=="P\xF3stur"){Ot(t,n);var c=/^https?:\/\//i.test(e)?e:"";c&&window.open(c,"_blank","noopener"),w(c?"Meginm\xE1li\xF0 er afrita\xF0 og sl\xF3\xF0in opnu\xF0.":"Meginm\xE1li\xF0 er afrita\xF0. Engin sl\xF3\xF0 er skr\xE1\xF0.");return}if(!Q.test(e)){w("Netfang vantar e\xF0a er ekki gilt.");return}var f="mailto:"+e+"?subject="+encodeURIComponent(v("efni").value)+"&body="+encodeURIComponent(t.replace(/\r?\n/g,`\r
`));w((o?"Sendu fr\xE1 "+o+". ":"")+(f.length>1900?"Langur p\xF3stur: ef meginm\xE1li\xF0 kemur klippt inn, nota\xF0u \u201ES\xE6kja sem dr\xF6g\u201C e\xF0a \u201EAfrita meginm\xE1l\u201C.":"")),location.href=f})}),s("vp-p-eml").addEventListener("click",function(){r(function(n){var t=v("netfang").value.trim();if(!Q.test(t)){w("Netfang vantar e\xF0a er ekki gilt.");return}var e="Nafir - "+v("midill").value.trim().replace(/[\\/:*?"<>|]+/g," ")+".eml";bt(e,ht(t,v("fra").value,v("efni").value,n),"message/rfc822"),w("Opna\xF0u skr\xE1na "+e+": h\xFAn \xE1 a\xF0 opnast sem \xF3sendur p\xF3stur \xED p\xF3stforritinu.")})}),s("vp-p-afrita-efni").addEventListener("click",function(){Ot(v("efni").value,this)}),s("vp-p-afrita-meginmal").addEventListener("click",function(){var n=this;r(function(t){Ot(t,n)})}),s("vp-p-sent").addEventListener("click",function(){j(this,function(){return kt().then(function(n){return B("postStada",{id:n.id,stada:"Sent"})}).then(function(n){return u=n.post,xt(n.post),N(),w("Merkt sent "+n.post.sent),I()})})});function h(){return Promise.all([g(),I()])}s("vp-gate").addEventListener("submit",function(n){n.preventDefault(),y=s("vp-key").value.trim(),ut(i,y),s("vp-key").value="",Z(!0),h()}),s("vp-gefa").addEventListener("submit",function(n){n.preventDefault();var t=s("vp-gefa-btn"),e=s("vp-status");t.disabled=!0,e.textContent="S\xE6ki k\xF3\xF0a...",B("gefa",{vidtakandi:s("vp-nafn").value,netfang:s("vp-netfang").value}).then(function(o){return E=o.stillingar||E,J(o.lina,o.nyr?"n\xFDr k\xF3\xF0i":"\xE1tti k\xF3\xF0a fyrir"),e.textContent="",s("vp-nafn").value="",s("vp-netfang").value="",g()}).catch(function(o){e.textContent="Villa: "+o.message}).then(function(){t.disabled=!1})}),s("vp-mal").addEventListener("change",function(){z&&J(z)}),s("vp-afrita-blokk").addEventListener("click",function(){Ot(s("vp-blokk").value,this)}),s("vp-afrita-hlekk").addEventListener("click",function(){Ot(_(z.kodi).pressa,this)}),s("vp-uppfaera").addEventListener("click",h),s("vp-flytja-btn").addEventListener("click",function(){var n=this;n.disabled=!0,B("flytjaInn",{texti:s("vp-innflutningur").value}).then(function(t){return s("vp-innflutningur").value="B\xE6tti vi\xF0 "+t.nyir+" k\xF3\xF0um (sett "+t.sett+"). Alls "+t.alls+".",g()}).catch(function(t){s("vp-innflutningur").value="Villa: "+t.message}).then(function(){n.disabled=!1})}),Z(!!y),y&&h()}var ta=`<div class="vpp" data-mal-bidur>
  <div class="vpp-head">
    <div class="vpp-dymo vpp-dymo--red">|NAFIR|PROMO|COPY|</div>
    <div class="vpp-head-right">
      <div class="vpp-mal" role="group" aria-label="Tungum\xE1l / Language">
        <button type="button" data-mal-val="is" lang="is" aria-pressed="false">\xCDS</button>
        <button type="button" data-mal-val="en" lang="en" aria-pressed="false">EN</button>
      </div>
      <div class="vpp-counter">VR046</div>
    </div>
  </div>

  <div class="vpp-top">
    <div class="vpp-screen">
      <img src="https://f4.bcbits.com/img/a3515151154_10.jpg" width="1200" height="1200"
           alt="Nafir cover: a sunlit workshop wall covered in painted portraits, with guitars and a drum kit in front of it"
           data-alt-en="Nafir cover: a sunlit workshop wall covered in painted portraits, with guitars and a drum kit in front of it"
           data-alt-is="Umslag Nafir: s\xF3lbjartur veggur \xED vinnustofu, \xFEakinn m\xE1lu\xF0um andlitsmyndum, og g\xEDtarar og trommusett fyrir framan">
    </div>

    <div class="vpp-info">
      <p class="vpp-artist">Stafr\xE6nn H\xE1kon</p>
      <h1 class="vpp-title">Nafir</h1>

      <dl class="vpp-meta">
        <div><dt><span data-mal="en">Label</span><span data-mal="is">\xDAtg\xE1fa</span></dt><dd>Vogor Records</dd></div>
        <div><dt><span data-mal="en">Release</span><span data-mal="is">Dagsetning</span></dt><dd><span data-mal="en">27 November 2026</span><span data-mal="is">27. n\xF3vember 2026</span></dd></div>
        <div><dt><span data-mal="en">Pre-order</span><span data-mal="is">Forsala</span></dt><dd><span data-mal="en">30 October 2026</span><span data-mal="is">30. okt\xF3ber 2026</span></dd></div>
        <div><dt><span data-mal="en">Length</span><span data-mal="is">Lengd</span></dt><dd><span data-mal="en">8 songs, 30 minutes</span><span data-mal="is">8 l\xF6g, 30 m\xEDn\xFAtur</span></dd></div>
      </dl>

      <div class="vpp-personal">
        <div data-promo-state="loading">
          <p class="vpp-status"><span class="vpp-led vpp-led--wait"></span><span data-mal="en">Loading your links</span><span data-mal="is">S\xE6ki hlekki..</span></p>
        </div>

        <div data-promo-state="ok" hidden>
          <p class="vpp-status"><span class="vpp-led vpp-led--ok"></span><span data-mal="en">Promo copy for</span><span data-mal="is">Kynningareintak fyrir</span><span data-promo="name"></span></p>
          <div class="vpp-keys">
            <a class="vpp-key" data-promo="listen" target="_blank" rel="noopener"><span data-mal="en">Listen</span><span data-mal="is">Hlusta</span></a>
            <a class="vpp-key" data-promo="download" target="_blank" rel="noopener"><span data-mal="en">Download</span><span data-mal="is">S\xE6kja</span></a>
          </div>
          <p class="vpp-note"><span data-mal="en">Download as MP3, FLAC or WAV. Your code is already filled in:</span><span data-mal="is">S\xE6kja sem MP3, FLAC e\xF0a WAV. K\xF3\xF0inn \xFEinn er \xFEegar fylltur inn:</span>
            <span class="vpp-counter vpp-counter--code" data-promo="code"></span></p>
          <p class="vpp-note"><span data-mal="en">Please don't share before 27 November 2026.</span><span data-mal="is">Vinsamlegast ekki deila fyrir 27. n\xF3vember 2026.</span></p>
        </div>

        <div data-promo-state="invalid" hidden>
          <p class="vpp-status"><span class="vpp-led vpp-led--stop"></span><span data-mal="en">Personal link needed</span><span data-mal="is">Hlekkinn \xFEinn vantar...</span></p>
          <p class="vpp-note" data-mal="en">The stream and download open with the personal link from the email you received. Reply to that email and we'll send you a new one.</p>
          <p class="vpp-note" data-mal="is">Streymi og ni\xF0urhal opnast me\xF0 \xFE\xEDnum hlekk sem \xFE\xFA f\xE9kkst sent \xED vefp\xF3sti. Svara\xF0u \xFEeim p\xF3sti og vi\xF0 sendum \xFE\xE9r n\xFDjan.</p>
        </div>

        <div data-promo-state="error" hidden>
          <p class="vpp-status"><span class="vpp-led vpp-led--stop"></span><span data-mal="en">Couldn't load your links</span><span data-mal="is">Ekki t\xF3kst a\xF0 s\xE6kja hlekkina</span></p>
          <p class="vpp-note" data-mal="en">Please reload the page, or reply to the email you received.</p>
          <p class="vpp-note" data-mal="is">Endurhla\xF0a s\xED\xF0una, e\xF0a svara\xF0u p\xF3stinum sem \xFE\xFA f\xE9kkst.</p>
        </div>
      </div>
    </div>
  </div>

  <section class="vpp-section">
    <div class="vpp-dymo">|ABOUT|</div>
    <div class="vpp-prose" data-mal="is" lang="is">
      <p><strong>Nafir</strong> \xE1 uppt\xF6k s\xEDn \xED heims\xF3kn til \xC1rna \xDE\xF3rs \xC1rnasonar \xED Sv\xED\xFEj\xF3\xF0. \xCD vinnustofu \xC1rna, B-h\xFAsinu, ur\xF0u lausleg dr\xF6g a\xF0 pl\xF6tunni a\xF0 veruleika. \xDEar skapa\xF0ist \xE1kve\xF0inn hlj\xF3\xF0grunnur sem var\xF0 svo a\xF0 rau\xF0ri l\xEDnu \xED gegnum pl\xF6tuna.</p>
      <p>Kassabassi og l\xE1gt str\xF6mma\xF0ur nylon-g\xEDtar ur\xF0u a\xF0 einskonar grunnt\xF3ni sem einkenndi l\xF6gin. Bassi \xC1rna \xDE\xF3rs og trommur R\xF3berts M\xE1s Run\xF3lfssonar fl\xE9ttast saman \xED hryggjars\xFAlu laganna, sem allt anna\xF0 hv\xEDlir \xE1. \xC1 l\xE1gstemmdan grunninn bygg\xF0i hlj\xF3msveitin l\xF6gin sm\xE1m saman og heildarsvipur t\xF3k a\xF0 myndast. \xDEegar hinn einkennandi fl\xE6\xF0andi g\xEDtarhlj\xF3mur, sem lengi hefur veri\xF0 st\xF3r hluti af hlj\xF3\xF0heimi Stafr\xE6ns H\xE1kons, var or\xF0inn hluti af l\xF6gunum t\xF3ku \xFEau \xE1 sig kunnuglegan brag. G\xEDtarl\xEDnur \xD3lafs og L\xE1rusar tala saman og vefjast hvor um a\xF0ra eins og lifandi skepnur sem mynda st\xF3ra heild.</p>
      <p>\xC1 <strong>Nafir</strong> st\xEDgur Magn\xFAs Freyr G\xEDslason fram sem texta- og lagah\xF6fundur sveitarinnar. Hr\xE1ar skissur hans voru unnar \xE1fram og fullm\xF3ta\xF0ar af sveitinni \xED sameiningu. R\xF6dd hans ver\xF0ur sem samofinn vefur sem lei\xF0ir pl\xF6tuna til enda. Magn\xFAs syngur alfari\xF0 \xE1 \xEDslensku og textarnir f\xE6rast \xE1 milli hversdagslegra sm\xE1atri\xF0a, h\xFAmors, n\xE1ndar og einhvers enn dularfyllra, en s\xF6ngurinn helst ofinn inn \xED t\xF3nlistina frekar en a\xF0 sitja ofan \xE1 henni. <strong>Nafir</strong> er fyrsta plata Stafr\xE6ns H\xE1kons me\xF0 s\xF6ng fr\xE1 upphafi til enda.</p>
      <blockquote class="vpp-quote"><p>\u201EL\xF6gin \xE1 Nafir eru samin \xE1 t\xEDmabili sem einkenndist af \xF3kyrr\xF0, efa og h\xF6fnun, en l\xEDka \xFEeirri uppg\xF6tvun a\xF0 f\xE1tt skiptir n\xF3gu miklu m\xE1li til a\xF0 l\xE1ta s\xE9r l\xED\xF0a illa yfir \xFEv\xED. \xDEa\xF0 sem amar a\xF0 er oft sj\xE1lfskapa\xF0 og minna m\xE1l en \xFEa\xF0 vir\xF0ist \xED augnablikinu. \xDEa\xF0 er hvort sem er enginn a\xF0 sp\xE1 svo miki\xF0 \xED manni, allir eru uppteknir af \xFEv\xED hva\xF0 \xF6\xF0rum finnst um \xFE\xE1. Nafir eru \xFEessar ystu nafir sem ma\xF0ur getur sta\xF0i\xF0 \xE1 alveg a\xF0 \xE1st\xE6\xF0ulausu. En \xFEa\xF0 er allavega gott \xFAts\xFDni \xFEa\xF0an.\u201C</p><footer>Magn\xFAs Freyr G\xEDslason</footer></blockquote>
      <p>Platan var tekin upp \xED Vogor Studios, fyrir utan bassann sem \xC1rni \xDE\xF3r t\xF3k upp \xED vinnustofu sinni \xED Sv\xED\xFEj\xF3\xF0. \xD3lafur Josephsson hlj\xF3\xF0blanda\xF0i pl\xF6tuna h\xE6gt og r\xF3lega, me\xF0 hl\xE9um yfir r\xFAmt \xE1r, og leyf\xF0i l\xF6gunum a\xF0 finna sitt eigi\xF0 jafnv\xE6gi milli l\xE1gstemmdrar n\xE1lgunar og \xFEunga.</p>
      <p>\xC1tta l\xF6g \xE1 r\xFAmum h\xE1lft\xEDma. <strong>Nafir</strong> er hl\xFD, n\xE1l\xE6g og l\xE1gstemmd \xED grunninn, me\xF0 st\xE6rri, andr\xFAmsloftskenndum hlj\xF3\xF0heimi Stafr\xE6ns H\xE1kons sem opnast sm\xE1m saman utan um hana.</p>
    </div>
    <div class="vpp-prose" data-mal="en" lang="en">
      <p><strong>Nafir</strong> began during a visit to \xC1rni \xDE\xF3r \xC1rnason\u2019s workshop in Sweden. A weekend of demoing ideas turned into a sound that became the foundation for the record.</p>
      <p>Acoustic bass replaced electric bass, while a gently strummed acoustic guitar became a bed beneath the drums. \xC1rni \xDE\xF3r\u2019s bass and R\xF3bert M\xE1r Run\xF3lfsson\u2019s drums lock together into the backbone of the songs, the part everything else rests on. Around that quieter, understated foundation, Stafr\xE6nn H\xE1kon gradually built the songs outward, bringing in the atmospheric guitar sound that has long been part of the band\u2019s identity. \xD3lafur\u2019s and L\xE1rus\u2019s guitar lines talk to each other and wind around one another like organic beings, becoming part of a wider texture.</p>
      <p>On <strong>Nafir</strong>, Magn\xFAs Freyr G\xEDslason steps forward as the band\u2019s lyricist and songwriter. His rough sketches were developed further and shaped by the band together. His voice becomes a constant thread through the record from beginning to end. Sung entirely in Icelandic, the lyrics shift between everyday detail, humour, intimacy, something darker and even mysterious, while the singing stays woven into the music rather than sitting above it. It is the first Stafr\xE6nn H\xE1kon record with vocals from start to finish.</p>
      <blockquote class="vpp-quote"><p>\u201CThe songs on Nafir were written during a period of unrest, doubt and rejection, but also with the realisation that very little is worth making yourself miserable over. The things that bother us are often of our own making, and less of a big deal than they seem at the time. Nobody\u2019s thinking about you that much anyway, everyone\u2019s busy wondering what other people think of them. Nafir refers to those edges we sometimes find ourselves standing on for no good reason. At least the view is good.\u201D</p><footer>Magn\xFAs Freyr G\xEDslason</footer></blockquote>
      <p>The album was recorded largely at Vogor Studios, with \xC1rni \xDE\xF3r recording his bass parts in Sweden. \xD3lafur Josephsson mixed the record slowly, on and off, over the course of a year, letting the songs find their own balance between restraint and weight.</p>
      <p>Eight songs and just over half an hour, <strong>Nafir</strong> is warm, close and understated at its core, with the wider atmospheric sound of Stafr\xE6nn H\xE1kon gradually opening around it.</p>
    </div>
  </section>

  <section class="vpp-section vpp-sides">
    <div>
      <div class="vpp-dymo">|SIDE|A|</div>
      <ol class="vpp-tracks">
        <li><details>
          <summary><span>Nafir</span><span>3:25</span></summary>
          <div class="vpp-lyric" lang="is">
            <p>H\xFAn l\xE6tur renna \xED ba\xF0<br>h\xFAn veit a\xF0 \xFEa\xF0 er eitthva\xF0 a\xF0<br>\xC9g fylgist grunlaus me\xF0,<br>me\xF0 b\xE1\xF0ar hendurnar<br>H\xFAn lei\xF0ir mig \xE1 betri sta\xF0<br>\xFEv\xED \xE9g \xFEurfti \xFEa\xF0</p>
            <p>H\xFAn kyndir kuldann burt<br>h\xFAn finnur \xFEegar er napurt<br>\xC9g fylgist \xFE\xF6gull me\xF0,<br>me\xF0 b\xE1\xF0ar f\xE6turnar<br>H\xFAn l\xE6tur mig hlaupa af sta\xF0<br>N\xFA er allt upphita\xF0</p>
            <p>H\xFAn leysir vandam\xE1l<br>Me\xF0 taugar eins og st\xE1l<br>H\xFAn leysir vandam\xE1l<br>H\xFAn r\xE6ktar stundum k\xE1l<br>H\xFAn leysir vandam\xE1l<br>Tendrar fallegt b\xE1l</p>
          </div>
        </details></li>
        <li><details>
          <summary><span>\xD3minni</span><span>4:24</span></summary>
          <div class="vpp-lyric" lang="is">
            <p>Veit, \xE9g \xE1 allt<br>\xE9g fann \xFEa\xF0 \xED dag.<br>Veit, hva\xF0 er a\xF0<br>\xC9g skapa\xF0i \xFEa\xF0.</p>
            <p>\xC9g mun deyfa, tilfinningarnar.<br>Myndi deyja, til a\xF0 finna \xFE\xE6r.</p>
            <p>Hey, \xFEa\xF0 er kalt<br>\xE9g fann \xFEa\xF0 \xED dag.<br>Hey, hva\xF0 me\xF0 \xFEa\xF0<br>orsaka\xF0i \xFEa\xF0.</p>
            <p>\xC9g vil teygja<br>eiga stundina<br>\xC9g finn eitthva\xF0<br>Tre\xF0 \xFEv\xED svo \xED kaf</p>
            <p>\xC9g \xE1 n\xFDja sk\xF3, n\xFDja sk\xF3<br>En \xE9g hef gengi\xF0 n\xF3g, gengi\xF0 n\xF3g<br>\xDE\xF3 a\xF0 dyrnar, dyrnar<br>Standi galopnar, galopnar</p>
          </div>
        </details></li>
        <li><details>
          <summary><span>Dj\xE1kninn</span><span>3:31</span></summary>
          <div class="vpp-lyric" lang="is">
            <p>H\xFAn veipar \xED innisk\xF3m<br>og leitar a\xF0 n\xFDjum t\xF3n<br>\xC9g reika inn\xED sk\xF3g<br>\xE9g raula \xFAt \xED t\xF3m</p>
            <p>Heilir, h\xE1lfir, sleipir, sm\xE1ir, veikir, h\xE1\xF0ir, steypir, s\xE1ir<br>Hugmyndir, fr\xE1veita, innisk\xF3r, hj\xE1veita.<br>Kveikir, b\xE1li\xF0, steikir, s\xE1lir, leysir, m\xE1li\xF0, kveikir, b\xE1li\xF0<br>Heildarmynd, steypiba\xF0, nor\xF0anvind, heyri \xFEa\xF0</p>
            <p>\xDEa\xF0 heyrist h\xE1tt \xED vindinum<br>\xDEa\xF0 leynist f\xE1tt i huganum</p>
          </div>
        </details></li>
        <li><details>
          <summary><span>F\xEDn</span><span>3:24</span></summary>
          <div class="vpp-lyric" lang="is">
            <p>Dj\xF6full er h\xFAn g\xF3\xF0<br>Dj\xF6full er h\xFAn f\xEDn<br>H\xFAn er st\xFAlkan m\xEDn<br>Semur stundum lj\xF3\xF0<br>Drekkur stundum v\xEDn<br>H\xFAn er st\xFAlkan m\xEDn</p>
          </div>
        </details></li>
      </ol>
    </div>
    <div>
      <div class="vpp-dymo">|SIDE|B|</div>
      <ol class="vpp-tracks" start="5">
        <li><details>
          <summary><span>Jafnari</span><span>3:14</span></summary>
          <div class="vpp-lyric" lang="is">
            <p>Holdi\xF0 hla\xF0i\xF0<br>svona l\xED\xF0ur m\xE9r oft \xED lendunum<br>Foldin falin<br>\xFEetta lifandi loft \xED lungunum</p>
            <p>\xC9g glefsa oft \xED ney\xF0<br>Hugsa allt of seint<br>Gli\xF0nar lei\xF0in grei\xF0<br>Ekki vera rei\xF0</p>
            <p>Holdi\xF0 hla\xF0i\xF0<br>svona l\xED\xF0ur m\xE9r oft \xED lendunum<br>Foldin falin<br>\xFEetta lifandi loft \xED lungunum</p>
          </div>
        </details></li>
        <li><details>
          <summary><span>L\xEDnurnar</span><span>4:38</span></summary>
          <div class="vpp-lyric" lang="is">
            <p>\xC9g teikna, reyni a\xF0 r\xE1\xF0a \xED l\xEDnurnar<br>\xC9g reikna, er a\xF0 m\xE6la g\xF6turnar<br>Vi\xF0 dyrnar, stend og b\xED\xF0 en ekkert svar<br>\xDEa\xF0 kviknar, lj\xF3s en engin b\xED\xF0ur \xFEar</p>
            <p>En eitt, l\xEDti\xF0 svar<br>\xDEa\xF0 leysir \xFErautina<br>\xCD eitt, andartak<br>\xC9g g\xE6ti fundi\xF0 \xFEa\xF0</p>
            <p>\xC9g reika, er a\xF0 horfa \xE1 stj\xF6rnurnar<br>\xC9g ry\xF0a, er a\xF0 gefa upp \xF6ndina<br>\xC9g hrasa, er a\xF0 missa f\xE6turnar<br>\xDE\xFA svarar, r\xE9ttir m\xE9r svo h\xF6ndina</p>
            <p>En eitt, l\xEDti\xF0 svar<br>\xDEa\xF0 leysir \xFErautina<br>\xCD eitt, andartak<br>\xC9g g\xE6ti fundi\xF0 \xFEa\xF0</p>
          </div>
        </details></li>
        <li><details>
          <summary><span>K\xFAbein</span><span>3:18</span></summary>
          <div class="vpp-lyric" lang="is">
            <p>\xC9g veit ekki hva\xF0<br>\xE9g er \xF3skrifa\xF0 bla\xF0<br>Legg af sta\xF0 engin veit, enginn veit<br>\xC9g veit ekki hva\xF0<br>\xE9g l\xE6t renna \xED ba\xF0<br>Legg af sta\xF0<br>engin veit, enginn veit</p>
            <p>\xCD dimman dal, m\xE1 \xE9g lei\xF0a \xFEig heim<br>\xCD dimman dal, og \xE9g rata \xFEessa lei\xF0<br>\xCD dimman dal, komdu heim komdu heim<br>\xCD dimman dal, komdu heim</p>
            <p>\xC9g s\xE1 \xFEig \xED dag<br>en skildi ekki hva\xF0<br>Hva\xF0 er a\xF0<br>engin veit, enginn veit<br>\xC9g veit ekki hva\xF0<br>en l\xE6t reyna \xE1 \xFEa\xF0<br>Legg af sta\xF0<br>engin veit, enginn veit</p>
            <p>\xCD dimman dal, viltu lei\xF0a mig heim<br>\xCD dimman dal, og \xE9g rata ekki heim<br>\xCD dimman dal, f\xF6rum heim f\xF6rum heim<br>\xCD dimman dal, f\xF6rum heim</p>
          </div>
        </details></li>
        <li><details>
          <summary><span>Mask\xEDna</span><span>4:22</span></summary>
          <div class="vpp-lyric" lang="is">
            <p>H\xFAn tifar eins og l\xEDtil mask\xEDna<br>Og hreyfir alla st\xF3ru v\xEDsana<br>Eins og j\xF6r\xF0in sn\xFDst \xED kringum \xFE\xFAfuna<br>H\xFAn vefur m\xE9r um fingur s\xE9r eins og s\xEDrena</p>
            <p>H\xFAn teymir heilan her<br>Me\xF0 t\xE1r \xE1 vanga s\xE9r<br>H\xFAn syrgir heilan her<br>H\xFAn er ei lengur h\xE9r<br>Me\xF0 himinskautum fer</p>
            <p>Eins og nor\xF0urstjarna v\xEDsar lei\xF0ina<br>H\xFAn er var\xF0an yfir dimma hei\xF0ina<br>Jar\xF0\xFDta \xE1 gr\xFDtta lei\xF0ina<br>H\xFAn heldur m\xE9r \xED \xF6rmum s\xE9r eins og hafalda</p>
            <p>H\xFAn teymir heilan her<br>Me\xF0 t\xE1r \xE1 vanga s\xE9r<br>H\xFAn syrgir heilan her<br>H\xFAn er ei lengur h\xE9r<br>Me\xF0 himinskautum fer</p>
          </div>
        </details></li>
      </ol>
    </div>
  </section>

  <p class="vpp-small vpp-hint"><span data-mal="en">Select a song to read its lyrics. All lyrics are in Icelandic.</span><span data-mal="is">Veldu lag til a\xF0 lesa textann.</span></p>

  <section class="vpp-section vpp-sides">
    <div>
      <div class="vpp-dymo">|CREDITS|</div>
      <ul class="vpp-credits">
        <li>\xC1rni \xDE\xF3r \xC1rnason<span data-mal="en">acoustic bass</span><span data-mal="is">kassabassi</span></li>
        <li>L\xE1rus Sigur\xF0sson<span data-mal="en">electric guitar</span><span data-mal="is">rafg\xEDtar</span></li>
        <li>Magn\xFAs Freyr G\xEDslason<span data-mal="en">vocals</span><span data-mal="is">s\xF6ngur</span></li>
        <li>\xD3lafur Josephsson<span data-mal="en">guitar, nylon-string guitar, piano, organ, percussion, drums on \xD3minni</span><span data-mal="is">g\xEDtar, kassag\xEDtar, p\xEDan\xF3, orgel, slagverk, trommur \xED laginu \xD3minni</span></li>
        <li>R\xF3bert M\xE1r Run\xF3lfsson<span data-mal="en">drums</span><span data-mal="is">trommur</span></li>
        <li>N\xF3i Steinn Einarsson<span data-mal="en">drums on L\xEDnurnar and Mask\xEDna</span><span data-mal="is">trommur \xED l\xF6gunum L\xEDnurnar og Mask\xEDna</span></li>
        <li>Fjalar Sigur\xF0sson<span data-mal="en">tuba on Mask\xEDna</span><span data-mal="is">t\xFAba \xED laginu Mask\xEDna</span></li>
      </ul>
      <p class="vpp-small" data-mal="en">Demos recorded at B-h\xFAsi\xF0, Sweden. Recorded at Vogor Studios; bass recorded by \xC1rni \xDE\xF3r in Sweden. Mixed by \xD3lafur Josephsson. Mastered by Justin Pizzoferrato at Sonelab. Artwork by \xC1rni \xDE\xF3r \xC1rnason.</p>
      <p class="vpp-small" data-mal="is">Prufuuppt\xF6kur \xED B-h\xFAsinu \xED Sv\xED\xFEj\xF3\xF0. Teki\xF0 upp \xED Vogor Studios; \xC1rni \xDE\xF3r t\xF3k bassann upp \xED Sv\xED\xFEj\xF3\xF0. Hlj\xF3\xF0bl\xF6ndun: \xD3lafur Josephsson. Hlj\xF3mj\xF6fnun: Justin Pizzoferrato \xED Sonelab. Umslag: \xC1rni \xDE\xF3r \xC1rnason.</p>
    </div>
    <div>
      <div class="vpp-dymo">|PRESS|KIT|</div>
      <a href="https://cdn.prod.website-files.com/598cdb87c327c10001ec59c2/6acd5866a4e56a4ade30b085_shakon-live-tjornarp-press.jpg" target="_blank" rel="noopener"><img class="vpp-photo" src="https://cdn.prod.website-files.com/598cdb87c327c10001ec59c2/6acd5864a44f525f940c8f37_shakon-live-tjornarp-web.jpg" width="2000" height="1110" loading="lazy"
           alt="Stafr\xE6nn H\xE1kon on a small stage in Sweden: five musicians in front of a star map backdrop, the singer in the light at the centre"
           data-alt-en="Stafr\xE6nn H\xE1kon on a small stage in Sweden: five musicians in front of a star map backdrop, the singer in the light at the centre"
           data-alt-is="Stafr\xE6nn H\xE1kon \xE1 litlu svi\xF0i \xED Sv\xED\xFEj\xF3\xF0: fimm t\xF3nlistarmenn fyrir framan stj\xF6rnukort, s\xF6ngvarinn \xED lj\xF3sinu fyrir mi\xF0ju"></a>
      <ul class="vpp-links">
        <li><a href="https://f4.bcbits.com/img/a3515151154_0.jpg" target="_blank" rel="noopener"><span data-mal="en">Cover art</span><span data-mal="is">Umslag</span>, 3000 \xD7 3000 (JPG, 5 MB)</a></li>
        <li><a href="https://f4.bcbits.com/img/a3515151154_10.jpg" target="_blank" rel="noopener"><span data-mal="en">Cover art</span><span data-mal="is">Umslag</span>, 1200 \xD7 1200 (JPG)</a></li>
        <li><a href="https://cdn.prod.website-files.com/598cdb87c327c10001ec59c2/6acd5866a4e56a4ade30b085_shakon-live-tjornarp-press.jpg" target="_blank" rel="noopener"><span data-mal="en">Band photo</span><span data-mal="is">Hlj\xF3msveitarmynd</span>, 3119 \xD7 1731 (JPG, 1 MB)</a></li>
        <li><a href="https://cdn.prod.website-files.com/598cdb87c327c10001ec59c2/6acd5864a44f525f940c8f37_shakon-live-tjornarp-web.jpg" target="_blank" rel="noopener"><span data-mal="en">Band photo</span><span data-mal="is">Hlj\xF3msveitarmynd</span>, 2000 \xD7 1110 (JPG)</a>
          <span data-mal="en">Stafr\xE6nn H\xE1kon live in Sweden, 11 April 2025. Photo: Hj\xF6rleifur J\xF3nsson.</span>
          <span data-mal="is">Stafr\xE6nn H\xE1kon \xE1 t\xF3nleikum \xED Sv\xED\xFEj\xF3\xF0, 11. apr\xEDl 2025. Lj\xF3smynd: Hj\xF6rleifur J\xF3nsson.</span></li>
      </ul>
      <div class="vpp-dymo">|ARTWORK|</div>
      <!-- \xCDslenska \xFAtg\xE1fan er br\xE1\xF0abirg\xF0a\xFE\xFD\xF0ing (18. okt) \xFEar til \xC1rni \xDE\xF3r sam\xFEykkir e\xF0a lei\xF0r\xE9ttir.
           Sami texti er \xED nafir/docs/bio.md. -->
      <blockquote class="vpp-quote vpp-quote--kit" data-mal="is" lang="is"><p>\u201EPl\xF6tuumslagi\xF0 fyrir Nafir vann \xE9g \xED vinnustofunni minni, B-h\xFAsinu, \xFEar sem fyrstu lagahugmyndir pl\xF6tunnar kviknu\xF0u. Platan var \xFE\xE1 fullunnin, textarnir komnir og pl\xF6tuheiti\xF0 l\xEDka, og \xE9g vann verkin \xED spunafl\xE6\xF0i me\xF0 hana a\xF0 lei\xF0arlj\xF3si og leyf\xF0i einst\xF6kum myndum a\xF0 skarast og mynda st\xE6rri heild. \xC9g vildi a\xF0 lj\xF3smyndin fanga\xF0i andr\xFAmslofti\xF0 \xED B-h\xFAsinu, kyrr\xF0ina og hl\xFDjuna, eins og langri og eftirminnilegri uppt\xF6kulotu v\xE6ri n\xFDloki\xF0.\u201C</p><footer>\xC1rni \xDE\xF3r \xC1rnason</footer></blockquote>
      <blockquote class="vpp-quote vpp-quote--kit" data-mal="en" lang="en"><p>\u201CI created the cover artwork for Nafir in my workshop, B-h\xFAsi\xF0, where the first ideas for the album originally took shape. Inspired by the finished music, lyrics and album title, I worked spontaneously, letting the individual pieces overlap and form a larger whole. I wanted the photograph to capture the atmosphere of the space, with a sense of warmth and stillness, as if a long and memorable session had just come to an end.\u201D</p><footer>\xC1rni \xDE\xF3r \xC1rnason</footer></blockquote>
      <div class="vpp-dymo">|CONTACT|</div>
      <p class="vpp-small">\xD3lafur Josephsson, Vogor Records<br>
        <a href="mailto:vogorrecords@vogorrecords.com">vogorrecords@vogorrecords.com</a></p>
    </div>
  </section>
</div>
`;function ea(y){y.innerHTML=ta;var i=new URLSearchParams(location.search),m=(i.get("k")||"").trim().toLowerCase(),s=i.has("preview");function E(k){return Array.prototype.slice.call(document.querySelectorAll(k))}var z="nafir-press-mal",y=document.querySelector(".vpp");function B(k){return k==="is"||k==="en"?k:""}function Z(){try{return B(localStorage.getItem(z))}catch{return""}}var _=B(i.get("mal"))||Z();function F(k){y.setAttribute("data-mal",k),y.setAttribute("lang",k),y.removeAttribute("data-mal-bidur"),E("[data-mal-val]").forEach(function(L){L.setAttribute("aria-pressed",String(L.getAttribute("data-mal-val")===k))}),E("[data-alt-"+k+"]").forEach(function(L){L.alt=L.getAttribute("data-alt-"+k)})}E("[data-mal-val]").forEach(function(k){k.addEventListener("click",function(){_=k.getAttribute("data-mal-val");try{localStorage.setItem(z,_)}catch{}F(_)})});function J(){return/^is\b/i.test(navigator.language||"")?"is":"en"}_&&F(_),setTimeout(function(){y.hasAttribute("data-mal-bidur")&&F(J())},4e3);function O(k){E("[data-promo-state]").forEach(function(L){L.hidden=L.getAttribute("data-promo-state")!==k})}function at(k,L){return fetch(ce,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(k),keepalive:!!L})}function g(k,L,Q){E('[data-promo="'+k+'"]').forEach(function(nt){nt.href=L,!s&&nt.addEventListener("click",function(){at({action:"smellur",k:m,hvad:Q},!0).catch(function(){})})})}function T(k,L){y.hasAttribute("data-mal-bidur")&&F(B(L)||J()),O(k)}if(!/^[a-z0-9]{4}-[a-z0-9]{4}$/.test(m)){T("invalid");return}O("loading"),at({action:"pressa",k:m,forskodun:s}).then(function(k){return k.json()}).then(function(k){if(!k.ok){T(k.villa?"error":"invalid");return}E('[data-promo="name"]').forEach(function(L){L.textContent=k.vidtakandi}),E('[data-promo="code"]').forEach(function(L){L.textContent=k.kodi}),g("listen",k.stream,"hlusta"),g("download",k.download,"saekja"),T("ok",k.mal||"en")}).catch(function(){T("error")})}var aa=`<div class="vhl">
  <div class="vhl-head">
    <div class="vpp-dymo vpp-dymo--red">|NAFIR|</div>
    <div class="vpp-counter">VR046</div>
  </div>

  <div class="vhl-top">
  <a class="vhl-screen" href="https://www.vogorrecords.com/albums/nafir">
    <img src="https://f4.bcbits.com/img/a3515151154_10.jpg" width="1200" height="1200"
         alt="Nafir cover: a sunlit workshop wall covered in painted portraits, with guitars and a drum kit in front of it">
  </a>

  <div class="vhl-titlar">
    <p class="vpp-artist">Stafr\xE6nn H\xE1kon</p>
    <h1 class="vhl-title">Nafir</h1>
    <p class="vhl-date" data-til="2026-11-27">Out 27 November 2026 on Vogor Records</p>
    <p class="vhl-date" data-fra="2026-11-27">Out now on Vogor Records</p>
  </div>
  </div>

  <!-- N\xFDjasta f\xE6rslan kemur hinga\xF0 \xFAr Vogor v\xE9l. Raufin heldur pl\xE1ssinu \xE1 me\xF0an
       svo hnapparnir fyrir ne\xF0an hoppi ekki undan fingrinum -->
  <div class="vhl-nytt-rauf" data-vhl="nytt" aria-live="polite"></div>

  <nav class="vhl-listi" aria-label="Links">
    <a class="vhl-hlekkur" href="https://ffm.to/nafir" data-til="2026-11-27">Pre-save the album</a>
    <a class="vhl-hlekkur" href="https://ffm.to/nafir" data-fra="2026-11-27">Listen to the album</a>
    <a class="vhl-hlekkur" href="https://elasticstage.com/shakon/releases/nafir-album">Vinyl and CD</a>
    <a class="vhl-hlekkur" href="https://shakon.bandcamp.com/album/nafir" data-til="2026-11-27">Pre-order on Bandcamp</a>
    <a class="vhl-hlekkur" href="https://shakon.bandcamp.com/album/nafir" data-fra="2026-11-27">Bandcamp</a>
    <a class="vhl-hlekkur" href="https://www.vogorrecords.com/albums/nafir">Lyrics, credits and the mixer</a>
  </nav>
</div>
`;function ke(l){return String(l).replace(/^https?:\/\/(www\.)?/i,"").replace(/\/$/,"")}function na(l){l.innerHTML=aa;var i=new Date().toLocaleDateString("sv-SE",{timeZone:"Atlantic/Reykjavik"});Array.prototype.forEach.call(l.querySelectorAll("[data-fra], [data-til]"),function(z){var y=z.getAttribute("data-fra"),B=z.getAttribute("data-til");(y&&i<y||B&&i>=B)&&z.remove()});var m=l.querySelector('[data-vhl="nytt"]'),s=l.getAttribute("data-verkefni")||"nafir";function E(){m.remove()}fetch(se+"?hlekkir="+encodeURIComponent(s)).then(function(z){return z.ok?z.json():Promise.reject(z.status)}).then(function(z){var y=z&&z.ok&&z.nyjast;if(!y||!/^https:\/\//.test(y.slod))return E();Array.prototype.forEach.call(l.querySelectorAll(".vhl-hlekkur"),function(Z){ke(Z.href)===ke(y.slod)&&Z.remove()});var B=a("a","vhl-nytt");B.href=y.slod,B.appendChild(a("span","vhl-nytt-merki","|NEW|")),B.appendChild(a("span","vhl-nytt-titill",y.titill||"Latest")),B.appendChild(a("span","vhl-nytt-slod",ke(y.slod))),m.appendChild(B),m.classList.add("vhl-nytt-rauf--komin")}).catch(E)}var ra="T\xF3nab\xED\xF3 \xB7 laugardaginn 12.&nbsp;desember kl.&nbsp;20";function Mt(l){return String(l??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ye(l){return Mt(l).replace(/(kl\.|\b\d+\.) (?=[a-záðéíóúýþæö\d])/g,"$1&nbsp;")}function Pa(l){let i=/[.?!] /.exec(l);return i?"<b>"+ye(l.slice(0,i.index+1))+"</b> "+ye(l.slice(i.index+2)):ye(l)}function ia(l,{saga:i=!1,plakat:m=""}={}){let s=String(l.meginmal||"").trim(),E=String(l.undirskrift||"").trim(),z=String(l.heimild||"").trim(),y=i&&m?` style="--plakat: url('${Mt(m)}')"`:"";return`<div class="spj${i?" spj--saga":""}"${y}><div class="urklippa"><div class="haus">Sm\xE1augl\xFDsingar <small>A\xF0venta 2026</small></div><div class="flokkur">${Mt(l.flokkur)}</div><div class="rammi"><p class="meginmal${s.length>=260?" meginmal--langt":""}">${Pa(s)}</p>`+(E?`<p class="undirskrift">${Mt(E)}</p>`:"")+"</div>"+(z?`<p class="heimild">${Mt(z)}</p>`:"")+`<div class="hvar-saga">${ra}</div></div><div class="merki"><div class="per">Per: Segulsvi\xF0</div><div class="stund">A\xF0ventustund</div><div class="hvar">${ra}</div></div></div>`}var sa=`<div class="yl">
  <div class="yl-innri">
    <header class="yl-haus">
      <h1>Sm\xE1augl\xFDsingar Per</h1>
      <p class="yl-undir">Yfirlestur fyrir A\xF0ventustundina 2026</p>
      <p class="yl-inngangur">\xDEetta eru augl\xFDsingarnar sem fara \xE1 s\xED\xF0u Per:Segulsvi\xF0s fram a\xF0 12. desember, \xED \xFEeirri r\xF6\xF0 sem \xFE\xE6r birtast. Laga\xF0u textann eins og \xFE\xE9r s\xFDnist; spjaldi\xF0 breytist um lei\xF0. \xDDttu \xE1 Vista \xFEegar \xFE\xFA ert s\xE1ttur. Allar breytingar eru skr\xE1\xF0ar, svo \xFEa\xF0 er \xF3h\xE6tt a\xF0 pr\xF3fa sig \xE1fram.</p>
      <div class="yl-hver" data-yl="hver" hidden><span>Hver ert \xFE\xFA?</span></div>
    </header>
    <p class="yl-stada" data-yl="stada">S\xE6ki augl\xFDsingarnar \u2026</p>
    <div data-yl="listi"></div>
  </div>
</div>
`;var oa=`/* \xDAtlit sm\xE1augl\xFDsingaspjaldsins hj\xE1 Per. Sama skr\xE1 teiknar spjaldi\xF0 \xE1
   yfirlestrars\xED\xF0unni (yfirlestur.js) og PNG-in (per-jolatonleikar/spjold/
   smaauglysingar.py, gegnum dist/per-spjald.js), svo breyting h\xE9r gildir \xE1
   b\xE1\xF0um st\xF6\xF0um. Allt er undir .spj svo st\xEDlar Webflow n\xE1i ekki inn.
   Spjaldi\xF0 er 1080 punktar \xE1 breidd; .spj--saga er Stories-\xFAtg\xE1fan (9:16). */
.spj {
  --graent: #9ab89c; --doppur: #4f8d60; --rautt: #a8183a; --gult: #e9b64c;
  --pappir: #f2ead8; --blek: #1d1a17;
  position: relative; box-sizing: border-box; width: 1080px; height: 1350px; overflow: hidden;
  background-color: var(--graent);
  background-image: radial-gradient(circle, var(--doppur) 1.5px, transparent 2.1px);
  background-size: 10px 10px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 44px; padding: 70px 0;
  font-family: 'Roboto Condensed', sans-serif; font-size: 30px; line-height: 1.3;
  color: var(--blek); text-align: left;
}
.spj * { margin: 0; box-sizing: border-box; }
.spj .urklippa {
  position: relative;
  width: 860px; background: var(--pappir); padding: 34px 40px 30px;
  transform: rotate(-1.4deg);
  box-shadow: 0 2px 0 rgba(0,0,0,.08), 10px 14px 0 rgba(40,60,45,.35);
}
.spj .urklippa::before, .spj .urklippa::after {
  content: ""; position: absolute; top: -22px; width: 150px; height: 46px;
  background: rgba(236,226,196,.78); box-shadow: 0 1px 2px rgba(0,0,0,.12);
}
.spj .urklippa::before { left: -30px; transform: rotate(-24deg); }
.spj .urklippa::after { right: -30px; transform: rotate(21deg); }
.spj .haus {
  background: var(--rautt); color: var(--pappir);
  font: 700 46px/1 'Oswald', sans-serif; letter-spacing: .06em; text-transform: uppercase;
  padding: 14px 20px 16px; display: flex; justify-content: space-between; align-items: baseline;
}
.spj .haus small { font-size: 24px; font-weight: 500; letter-spacing: .04em; }
.spj .flokkur {
  font: 700 34px/1 'Oswald', sans-serif; text-transform: uppercase; letter-spacing: .05em;
  border-bottom: 3px solid var(--blek); padding: 22px 0 10px; margin-bottom: 18px;
}
.spj .rammi { border: 2px solid var(--blek); padding: 24px 28px 22px; }
.spj .meginmal { font-size: 40px; line-height: 1.32; hyphens: auto; white-space: pre-line; }
.spj .meginmal--langt { font-size: 36px; }
.spj .meginmal b { font-weight: 700; }
.spj .undirskrift { font-weight: 700; font-size: 30px; text-align: right; margin-top: 16px; }
.spj .heimild { font-style: italic; font-size: 24px; margin-top: 14px; opacity: .8; }
.spj .merki { text-align: center; line-height: 1; }
.spj .merki .per { font: 700 50px/1 'Oswald', sans-serif; letter-spacing: .01em; }
.spj .merki .stund {
  font: 400 150px/1.05 'Yellowtail', cursive; color: var(--rautt);
  text-shadow: 5px 5px 0 var(--gult); margin-top: -4px;
}
.spj .merki .hvar { font: 500 34px/1.2 'Oswald', sans-serif; letter-spacing: .04em; margin-top: 10px; }
.spj .hvar-saga { display: none; }

/* Stories: \xFArklippan l\xEDmd ne\xF0st \xE1 plakati\xF0, merki\xF0 er \xE1 plakatinu sj\xE1lfu.
   Sl\xF3\xF0 plakatsins kemur \xED --plakat \xE1 spjaldinu. Ne\xF0stu ~200 punktarnir eru
   undir svarreit og link-sticker \xED Story, svo \xFArklippan stendur ofar. */
.spj--saga {
  height: 1920px; justify-content: flex-start; padding: 0;
  /* Plakati\xF0 hli\xF0ra\xF0 upp svo merki\xF0 standi ofan vi\xF0 \xFArklippuna, og st\xE6kka\xF0
     um 130 punkta svo \xFEa\xF0 n\xE1i samt alla lei\xF0 ni\xF0ur */
  background: var(--plakat) center -130px / 1154px auto no-repeat var(--graent);
}
.spj--saga .merki { display: none; }
.spj--saga .urklippa {
  position: absolute; left: 50%; bottom: 210px;
  transform: translateX(-50%) rotate(1.6deg) scale(.8); transform-origin: bottom center;
}
.spj--saga .hvar-saga {
  display: block; margin-top: 18px; text-align: center;
  background: var(--rautt); color: var(--pappir); padding: 10px 20px 12px;
  font: 500 36px/1.2 'Oswald', sans-serif; letter-spacing: .04em;
}
`;var la=`/* Yfirlestrars\xED\xF0an \xE1 /per/auglysingar (yfirlestur.js). Spjaldi\xF0 sj\xE1lft er \xED spjald.css. */
.yl {
  --graent: #9ab89c; --doppur: #4f8d60; --rautt: #a8183a; --gult: #e9b64c;
  --pappir: #f2ead8; --blek: #1d1a17; --dauft: #6b645a; --lina: #cfc4ab;
  font-family: 'Roboto Condensed', sans-serif; font-size: 18px; line-height: 1.45; color: var(--blek);
  background-color: var(--graent);
  background-image: radial-gradient(circle, var(--doppur) 1.2px, transparent 1.7px);
  background-size: 9px 9px;
  min-height: 100vh; padding: 32px 16px 80px; box-sizing: border-box;
}
.yl *, .yl *::before, .yl *::after { box-sizing: border-box; }
.yl p, .yl h1, .yl h2 { margin: 0; }
.yl-innri { max-width: 1100px; margin: 0 auto; }
.yl-haus { background: var(--pappir); padding: 28px 28px 24px; margin-bottom: 28px; box-shadow: 8px 10px 0 rgba(40,60,45,.35); }
.yl-haus h1 { font: 700 40px/1.05 'Oswald', sans-serif; text-transform: uppercase; letter-spacing: .04em; color: var(--rautt); }
.yl-haus .yl-undir { font: 500 20px/1.3 'Oswald', sans-serif; letter-spacing: .03em; margin-top: 6px; }
.yl-haus p.yl-inngangur { margin-top: 16px; max-width: 70ch; }
.yl-hver { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; margin-top: 18px; }
.yl-hver span { font-weight: 700; }
.yl button { font: inherit; cursor: pointer; }
.yl-hnappur {
  border: 2px solid var(--blek); background: transparent; color: var(--blek);
  padding: 6px 16px; font-family: 'Oswald', sans-serif !important; font-weight: 500; letter-spacing: .04em;
}
.yl-hnappur[aria-pressed="true"], .yl-hnappur--adal { background: var(--rautt); border-color: var(--rautt); color: var(--pappir); }
.yl-hnappur:disabled { opacity: .4; cursor: default; }
.yl-hnappur:focus-visible, .yl input:focus-visible, .yl textarea:focus-visible, .yl select:focus-visible { outline: 3px solid var(--gult); outline-offset: 2px; }
.yl-stada { background: var(--pappir); padding: 18px 22px; }
.yl-villa { color: var(--rautt); font-weight: 700; }

.yl-augl { background: var(--pappir); margin-bottom: 28px; box-shadow: 8px 10px 0 rgba(40,60,45,.35); }
.yl-augl-haus {
  display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px 14px;
  padding: 14px 22px; border-bottom: 2px solid var(--blek);
}
.yl-augl-haus h2 { font: 700 24px/1.2 'Oswald', sans-serif; text-transform: uppercase; letter-spacing: .04em; }
.yl-dags { color: var(--dauft); font-weight: 700; }
.yl-merki { margin-left: auto; font: 500 15px/1 'Oswald', sans-serif; letter-spacing: .05em; text-transform: uppercase; padding: 5px 10px; background: #ddd3bd; }
.yl-merki[data-stada="Sam\xFEykkt"] { background: #3f7d4f; color: #fff; }
.yl-merki[data-stada="P\xF3sta\xF0"] { background: var(--blek); color: var(--pappir); }
.yl-merki[data-stada="Sleppa"] { background: transparent; text-decoration: line-through; }
.yl-augl-efni { display: grid; grid-template-columns: minmax(0, 440px) minmax(0, 1fr); gap: 28px; padding: 22px; }
.yl-forskodun { position: relative; width: 100%; overflow: hidden; }
.yl-forskodun .spj { position: absolute; top: 0; left: 0; transform-origin: top left; }
/* Flokkurinn P\xF3stur: p\xF3stur \xE1n spjalds, bara textinn eins og hann fer \xFAt */
.yl-posttexti { white-space: pre-wrap; overflow-wrap: anywhere; background: #fff; color: #1c1e21; border-radius: 8px; padding: 16px 18px; font: 16px/1.5 -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; box-shadow: 0 1px 4px rgba(0,0,0,.25); }
.yl-posttexti small { display: block; margin-bottom: 8px; font-size: 13px; color: #65676b; }
.yl-form { display: grid; gap: 14px; align-content: start; }
.yl-form label { display: grid; gap: 4px; font-weight: 700; font-size: 16px; }
.yl-form label small { font-weight: 400; color: var(--dauft); }
.yl-tvennt { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.yl input, .yl textarea, .yl select {
  font: 18px/1.4 'Roboto Condensed', sans-serif; color: var(--blek); width: 100%;
  background: #fffaf0; border: 2px solid var(--lina); border-radius: 0; padding: 8px 10px; margin: 0;
}
.yl textarea { resize: vertical; }
.yl-adgerdir { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }
.yl-adgerdir p { color: var(--dauft); font-size: 16px; }
.yl-adgerdir p.yl-obreytt { color: var(--rautt); font-weight: 700; }

@media (max-width: 760px) {
  .yl { padding: 16px 16px 60px; }
  .yl-haus h1 { font-size: 30px; }
  .yl-augl-efni { grid-template-columns: minmax(0, 1fr); padding: 16px; }
  .yl-tvennt { grid-template-columns: minmax(0, 1fr); }
}
`;var Ia="https://script.google.com/macros/s/AKfycbzQ-oaSyVQpcWQO2UkB0BkZToo-RlIdZR2Ap3iYBsb7BnAH4wkpNlWotDb_b9rdFHnG/exec",da="per-yfirlestur-lykill",pa="per-yfirlestur-hver",za="https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Roboto+Condensed:ital,wght@0,400;0,700;1,400&family=Yellowtail&display=swap",Na=["sun","m\xE1n","\xFEri","mi\xF0","fim","f\xF6s","lau"],ua=["jan","feb","mar","apr","ma\xED","j\xFAn","j\xFAl","\xE1g\xFA","sep","okt","n\xF3v","des"],le=["flokkur","meginmal","undirskrift","heimild","postur","birta","stada","athugasemd"];function Oa(){if(document.getElementById("per-yfirlestur-css"))return;let l=document.createElement("link");l.rel="stylesheet",l.href=za,document.head.appendChild(l);let i=document.createElement("style");i.id="per-yfirlestur-css",i.textContent=oa+`
`+la,document.head.appendChild(i)}function ot(l,i,m){let s=document.createElement(l);return i&&(s.className=i),m!=null&&(s.textContent=m),s}function Ra(l){let i=/^(\d{4})-(\d\d)-(\d\d)$/.exec(l||"");if(!i)return"";let m=new Date(Number(i[1]),Number(i[2])-1,Number(i[3]));return Na[m.getDay()]+" "+m.getDate()+". "+ua[m.getMonth()]}function Da(l){let i=/^(\d{4})-(\d\d)-(\d\d) (\d\d:\d\d)/.exec(l||"");return i?Number(i[3])+". "+ua[Number(i[2])-1]+" kl. "+i[4]:""}function fa(l){Oa(),l.innerHTML=sa;let i=g=>l.querySelector('[data-yl="'+g+'"]'),{lykill:m}=zt("k",da),s=St(pa),E={auglysingar:[],stodur:[],nofn:[]},z={};function y(g,T){let k=i("stada");k.hidden=!g,k.textContent=g||"",k.classList.toggle("yl-villa",!!T)}function B(g){return ie(Ia,{...g,k:m}).then(T=>(T.rangurLykill&&ut(da,""),T))}function Z(g){let T=g.querySelector(".spj");if(!T){g.style.height="";return}let k=g.clientWidth/1080;g.style.height=Math.round(1350*k)+"px",T.style.transform="scale("+k+")"}let _=typeof ResizeObserver=="function"?new ResizeObserver(g=>g.forEach(T=>Z(T.target))):null;function F(){let g=i("hver");for(g.hidden=!1;g.children.length>1;)g.removeChild(g.lastChild);E.nofn.forEach(T=>{let k=ot("button","yl-hnappur",T);k.type="button",k.setAttribute("aria-pressed",String(T===s)),k.addEventListener("click",()=>{s=T,ut(pa,T),F()}),g.appendChild(k)})}function J(g,T,k){let L=ot("label");return L.appendChild(document.createTextNode(g)),k&&L.appendChild(ot("small","",k)),L.appendChild(T),L}function O(g){let T=g,k=ot("article","yl-augl"),L=ot("div","yl-augl-haus"),Q=ot("h2"),nt=ot("span","yl-dags"),u=ot("span","yl-merki");L.append(nt,Q,u),k.appendChild(L);let v=ot("div","yl-augl-efni"),w=ot("div","yl-forskodun");w.setAttribute("aria-label","Forsko\xF0un spjaldsins"),v.appendChild(w);let S=ot("form","yl-form"),K={};function A(Y,V,r){let d=ot(V);return r&&(d.type=r),V==="textarea"&&(d.rows=Y==="meginmal"?7:Y==="postur"?5:2),K[Y]=d,d}S.appendChild(J("Flokkur",A("flokkur","input","text")));let R=J("Augl\xFDsingin",A("meginmal","textarea"),"Fyrsta setningin ver\xF0ur feitletru\xF0");S.appendChild(R);let I=ot("div","yl-tvennt");I.appendChild(J("Undirskrift",A("undirskrift","input","text"),"Ne\xF0st til h\xE6gri, m\xE1 vera t\xF3m")),I.appendChild(J("Sm\xE1tt letur undir",A("heimild","input","text"),"M\xE1 vera t\xF3mt")),S.appendChild(I),S.appendChild(J("Texti me\xF0 p\xF3stinum",A("postur","textarea"),"Fer \xE1 Facebook og Instagram me\xF0 myndinni"));let N=ot("div","yl-tvennt");N.appendChild(J("Fer \xED lofti\xF0",A("birta","input","date")));let et=A("stada","select");E.stodur.forEach(Y=>{let V=ot("option","",Y);V.value=Y,et.appendChild(V)}),N.appendChild(J("Sta\xF0a",et)),S.appendChild(N),S.appendChild(J("Athugasemd",A("athugasemd","textarea"),"Til \xD3la, fer ekki \xE1 spjaldi\xF0"));let st=ot("div","yl-adgerdir"),ht=ot("button","yl-hnappur yl-hnappur--adal","Vista");ht.type="submit";let bt=ot("button","yl-hnappur","Afturkalla");bt.type="button";let W=ot("p");W.setAttribute("aria-live","polite"),st.append(ht,bt,W),S.appendChild(st),v.appendChild(S),k.appendChild(v);function xt(){let Y={};return le.forEach(V=>Y[V]=K[V].value),Y}function wt(){let Y=xt();return le.filter(V=>Y[V]!==(T[V]||""))}function vt(Y){let V=xt();Q.textContent=V.flokkur||T.nafn,nt.textContent=Ra(V.birta)||"Engin dagsetning",u.textContent=V.stada,u.setAttribute("data-stada",V.stada);let r=V.flokkur.trim()==="P\xF3stur";R.hidden=I.hidden=r,w.innerHTML=r?'<div class="yl-posttexti"><small>P\xF3stur \xE1n spjalds'+(V.athugasemd.trim()?". "+Mt(V.athugasemd.trim()):"")+"</small>"+Mt(V.postur)+"</div>":ia(V),Z(w);let d=wt();z[T.nafn]=d.length>0,ht.disabled=bt.disabled=!d.length,Y?(W.textContent=Y,W.className=""):d.length?(W.textContent="\xD3vista\xF0ar breytingar",W.className="yl-obreytt"):(W.textContent=T.breytt&&T.breyttAf?"S\xED\xF0ast vista\xF0 "+Da(T.breytt)+" af "+T.breyttAf:"",W.className="")}function kt(Y){le.forEach(V=>K[V].value=Y[V]||"")}return kt(g),le.forEach(Y=>{K[Y].addEventListener(Y==="stada"||Y==="birta"?"change":"input",()=>vt())}),bt.addEventListener("click",()=>{kt(T),vt()}),S.addEventListener("submit",Y=>{if(Y.preventDefault(),!s){vt("Veldu fyrst hver \xFE\xFA ert, efst \xE1 s\xED\xF0unni."),W.className="yl-obreytt",i("hver").scrollIntoView({behavior:"smooth",block:"center"});return}let V={};wt().forEach(r=>V[r]=K[r].value),ht.disabled=bt.disabled=!0,W.textContent="Vista \u2026",B({action:"vista",nafn:T.nafn,hver:s,breytt:T.breytt,reitir:V}).then(r=>{if(r.arekstur){T=r.auglysing,vt(r.villa),W.className="yl-obreytt";return}if(!r.ok)throw new Error(r.rangurLykill?"Hlekkurinn gildir ekki lengur.":r.villa);T=r.auglysing,kt(T),vt()}).catch(r=>{vt("T\xF3kst ekki a\xF0 vista. "+r.message),W.className="yl-obreytt"})}),_&&_.observe(w),setTimeout(vt,0),k}function at(){let g=i("listi");g.innerHTML="";let T=L=>L.birta||"9999",k=E.auglysingar.slice().sort((L,Q)=>T(L)<T(Q)?-1:T(L)>T(Q)?1:0);k.forEach(L=>g.appendChild(O(L))),y(k.length?"":"Engar augl\xFDsingar komnar inn enn\xFE\xE1.")}if(window.addEventListener("beforeunload",g=>{Object.values(z).some(Boolean)&&(g.preventDefault(),g.returnValue="")}),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>l.querySelectorAll(".yl-forskodun").forEach(Z)),!m){y("\xDEessi s\xED\xF0a opnast me\xF0 hlekknum sem \xD3li sendi. Biddu hann um hlekkinn.",!0);return}B({action:"lesa"}).then(g=>{if(!g.ok){y(g.rangurLykill?"Hlekkurinn gildir ekki. Biddu \xD3la um n\xFDjan.":"Villa: "+g.villa,!0);return}E=g,E.nofn.indexOf(s)===-1&&(s=""),F(),at()}).catch(g=>y(g.message+" Reyndu a\xF0 endurhla\xF0a s\xED\xF0una.",!0))}var Ua={stada:Ke,birta:Xe,stjorn:$e,pressa:ea,hlekkir:na,yfirlestur:fa},Ba={stada:!0,birta:!0,stjorn:!0,yfirlestur:!0},Va={stada:!0,birta:!0,pressa:!0,hlekkir:!0};function ma(){let l=document.querySelectorAll("[data-nafir]");if(l.length){if(!document.getElementById("nafir-css")){let i=document.createElement("style");i.id="nafir-css",i.textContent=Oe,document.head.appendChild(i)}document.querySelector('[data-verkefni]:not([data-verkefni="nafir"])')||Ve(),l.forEach(function(i){let m=i.getAttribute("data-nafir"),s=Ua[m];if(!(!s||i.hasAttribute("data-nafir-raest"))&&(i.setAttribute("data-nafir-raest",""),Va[m]&&document.body.classList.add("nafir-beige"),s(i),Ba[m])){let E=i.getAttribute("data-verkefni")==="per"?"per":"nafir";(i.querySelector(".yl-innri")||i.firstElementChild||i).prepend(Fe(E))}})}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ma):ma();})();
//# sourceMappingURL=nafir.js.map
