(()=>{var Ce=`/* Nafir-s\xED\xF0urnar: yfirlit bandsins (.vst) og birtingars\xED\xF0an (.vbt).
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
`;var je="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAABK2lDQ1BJQ0MgUHJvZmlsZQAAeJyVkT9Lw0AYh5+LouKgFUQcHDKJgmKjDmZMq4ggWKtD2635Q5TSJFyuaj+Eo1sHF3c/gZOj4KD4CfwGilMHuUTI4FD6LPfcj5f37t4Do+zsVw6MEnQjJeuHFbPRbJnTr0wxQUbbSxOnVjvWHsVRwD9+PhB6fdvUvRiPWS+RChgC236QeiDKQOdaJQrEAFh0O5k/apfn9SqIZ2AuzP1du5v7p3bZaLZAfOv6MHNjJuuT+4p2Fdzoc6nGSV9ehhfKtGzbNh0/dgPzrJ+qoJuaR5EXyySWbRX4QH6/jIW8UE9szbLtvfUx3z0S/Q+5fZ1m8xVLL0VW4PXk1Z8KY2f0vugxWIaTB5gcFtnuLdxvwPxdka1aUNqCp8EvwMZP/XkTGdQAAAkJSURBVHjaBcHJjl3XdQDQffpz29dWR7JKRVEUZUmG4ViwJs7ACdL8RwIE/jUPMs3EgBHACALEUgDHUSRDJEWx+nrdfe92p9s7a7Hf/Ppzc3ppiqKWYtXsVfK7fXO12QOwhCg4JwYAwBA4ZwCMAI/zQkn+7eP+etcqxurCvr3f/dMvbTumr2/VyWIy+hFiaClnAFIGRyl0fecR0bu+P1CIR7kZU4op1LmdZrXW3AJiSpqDYrzxqfX4tDbzadm2/VTAvZKaw4uFnufAtItIGuj9wRmKMiVGKXYhAmLFotBMkAjOF4VhzHIQTQgUOSXctX2u2K/O50CEwGcoDTEvxfnE/LDrXj+4yymAFOh6YLBPWPA++CQlwHa9efLBJQClbte1EZHyzD728cNpnUvugZwLXUJB9Paxvd31XxwVp9OCoUgJtm0fa73I1e9+6DCOmKJk3BOLREjAEMWnH55hUQsi8GNdFIXUA7Kv39wJH54fzQDRO284t1pVWpxXph3df13vqsKeVsX9vu2GMWestPKzD6YxBOecVUJJIQTTgnEgCUyWWSa5SBET0dOLS7ndvdo0F4tpndlDcMt6BgRZpmLvb7f7nz01Rm3/8G6FICqjLuosEhJyjclKRghMMG00S4iIgCi+eH7GlJpNaptnhTUJOQVX5tl8MkEibWxRl0WuXcA8My5i46OVYje4ZnDLTAvBGheBgVRsd3Db1gkOjIsizzJjGBHXRjPO3dArBvsRc82dc1pKxtjAeDktOGFmVZ2bAeHseHE0qUyeX85qRnC173cuVpkmxro+WiEYYwTMu8gABjfGGCT5FBR2PLJ+yIpq045911d5po0sOVOMlBH7NhzXNhHc94EbM+UEwXNMd4OzCqTkglQYhplRCZErxYXgTAffMQbSt12f6PLiYzK02m2MkALYNNMQY8aBIwEwK1nTO2SggIQRY+Q203kviqiEYDGilIJrpaMnxjmDSck638YQhQAOiDMIYnfnu/FuvSsY5ZnmTOxbt9oPWsrcCj+MPCUew2kuJUAEMEpHhsgQmUoJKUTOBCPQnBiGfTOG/iBYohj5QAQhrHY324frQittdVUXXDKj2NQqI9hufRj7UTHGkIiLSmtLhCmWmXHOIwMlBY/JaDZfVL0LzRhaHwaPY4jtGGQboxZUlIUU/Lvrh3ldHktZl6pGdbdugcF90wcGV1ePg/fLujzKzejiEOIQqVDcu1HUed+PLMKrTxdfrs7afkSPPhERZpkUXz5b9EQnZf7y4vSrqxWkWGU2JQJgzTA6F5bL6X++vf63//6f1w/br3+4VQrO57O73v3H97fN6LXgk9w4Hy8mdrbMfvJ0NomkZZ1Zq4FOMsV9ojrLLOHpLPvF5dn72w0hCqVer/blZHLvEgL8+qcvPnn29Mkk74b++/td54IA6Pr+vtn/5X7rU5rmhgAyq99/d/PVm/19jFufmLY360H86vzY5ryQ1AK8fP7BH795r3J9Opvc7ppvbm6UtXOtS2sWi3kb8MmsfHUyn0p+uagT583ovEvPFpOjPOMMz0/st3++9dJsvXu33nYJreLy4mTKoPMxZT5ux8RyHZrd5jFfH4bTcvLydJkxGAZXc3i1LGfZ7Nhmj83hD29uq9xeTCc7E1xMxuon04x7TyHm0r6QHK3auL7Thkc2emmMzp7lcnh4OHly7FAcS5clfLduNvtxJN7HuNu3S62jw/0Qv7pe/+sfv1kduo9nhaG07rppJc6mWaaExLR6XFejm0hxapUjEn//aiGJoZDnp0utxKDyq95bhIvFZOXifdMRYKE4EK36vu36u3b439uHrhsWk4IH93p7+PKjk786n9097OZHlsf053fbA3BP6QC8CST+5ZefExcrx1gS8zp/tpAHZq+33UVVXJ4ulaIu4KKwjKDOsrO63IfU+TB6/+K4vG3Di+PZP3x+IZEMD1wRaH22KFquxkRdoqVioioyz+Jffwj9PnXZ4otP7O0BVwdcFkJpzYSYKFlnejkpHlvHBGcI8zK/PD0Z3GiN+psXk9McuhFynvKaA3JbmvO5+WBpXh5nr84y+ds/vfu7z5b/vMhERD1Zh1AttOdC5pOceZJMFLl6t2kMZwLxvl3dtWtM/OBViPjhkbEydlHe927OfRpEM6R9F9uQXIyAaXBRLjO1d9ljL/dBlC27en339kbtutBjNVXiqFTbXfuXm+35PM+pP2M//GLeEolIbNPnyqoLjtv16sf71Njq4U1732KuRW645mIMCPlERkqa871/clJ99/XDcQIYg5eMdp2rZ5MfN61M8dOPziohDh3JbrwECIL/qRWXFZ1pNxxuU6qeT8uth6Nc7WKyAkolJeOZsVTUEkAI6NClLSuVfHzfVG3qzqpiOwSIG2SCM+iH0TEVxvbn0nlPCmjq+LeBjwWvJNuQefQKMLQ+WiUkJA2YkHGtPBKPxDPqz+13//doH0eBnJo+vVs3Y4jrtofgAiSKYd/trZn8mGZvqHgvy1cnNpC+xlJVM0FpKQdDjoCFBI4pEDKlGP2AwYtpaeZ5FuXpqGeC6YCJcbY+jJnRLqZvfrzRnDfdcLPerfbdtatu4uJxZP/+yH9/KyaTkmWLx5HfHtL1AEakn+W7Mz1UtC9Yp+I2G++lYNQRvx3gZrud5ubIKM7gcpkTOWPFIZP3TSsBRh9zJTbtuKK0sfy6EwurTox+vQ1j4JzbEb3k8aPCbRyOETFSxhA5yhSJU/jby2rP5lf7bjwMFwLuUNz1o2sOJ7VeD8kIfpZVrQ9rSF0QRGmR8X/87Gml1fXNmjOmpFCSDyE54ol4wvi2oYdMVzJK4OSjCFH1h02duGZs45NMNOVi0GazdyPjbULGUQIeWWUxVDw+P84XpX3/eKi04QIjUm5MDYMAyICuMTZWcAQAI5EIgCQQS8Eww4EGxr7v+sgo5zwlJIyFkpXgixBLxE6kFEeZhEQqhDyqjaR0s2mU5B/PSpm2GfKksejZzT6aqZQIEBPGGDCGGJFzNuNwLmGTMCZaSPYuwBJwlujlT14U1hQ296Epp4Wy5aui3F5dNYcmZgZNVhUt7KmQchTwyOiTfPI+uv8HxIutAeRDZhQAAAAASUVORK5CYII=";function gt(o){try{return localStorage.getItem(o)||""}catch{return""}}function dt(o,r){try{r?localStorage.setItem(o,r):localStorage.removeItem(o)}catch{}}function jt(o,r){let v=new URL(location.href),s=(v.searchParams.get(o)||"").trim();if(!s)return{lykill:gt(r),nyr:!1};dt(r,s),v.searchParams.delete(o);try{history.replaceState(history.state,"",v.href)}catch{}return{lykill:s,nyr:!0}}var Se="Ekkert samband.";function Gt(o,r){return fetch(o,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(r)}).then(v=>v.json().catch(()=>{throw new Error("Bakendinn svara\xF0i ekki eins og hann \xE1 a\xF0 gera.")}),()=>{throw new Error(Se)})}var na="https://script.google.com/macros/s/AKfycbw_fE_lhJqAbaLME9HlFK0A5LG_VL502y0AeKwSyC6A_fmCnRonmV4fAMfD3Pllg-_b/exec",ra="https://script.google.com/macros/s/AKfycbyHTw5yNxSQ48jXRgyBaRf58Tfox5MirIsKOJS0VzXPeGCfsa3ceZ05FoUALRyaHD-W/exec",te=new URLSearchParams(location.search).has("prufa")?ra:na,Ut=["jan","feb","mar","apr","ma\xED","j\xFAn","j\xFAl","\xE1g\xFA","sep","okt","n\xF3v","des"],Le="https://script.google.com/macros/s/AKfycbzhu2dxScQqe5HT7wZZpdpOntDxWffkgORO0n7YH9fLs0K39h9g6LVUUXICe6F93iI2/exec";function xt(o,r){return Gt(r||te,o)}function a(o,r,v){var s=document.createElement(o);return r&&(s.className=r),v!=null&&(s.textContent=v),s}function St(o,r,v){var s=a("a",r,v);return s.href=o,s.target="_blank",s.rel="noopener",s}function Et(o,r){r.hasAttribute("data-merki")||r.setAttribute("data-merki",r.textContent);function v(){r.textContent="Afrita\xF0",r.classList.add("vst-afritad"),setTimeout(function(){r.textContent=r.getAttribute("data-merki"),r.classList.remove("vst-afritad")},1500)}function s(){var E=a("textarea");E.value=o,E.setAttribute("readonly",""),E.style.position="fixed",E.style.opacity="0",document.body.appendChild(E),E.select();try{document.execCommand("copy")&&v()}catch{}document.body.removeChild(E)}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(o).then(v,s):s()}function ee(o,r){var v=a("button","vst-afrita",r||"Afrita");return v.type="button",v.setAttribute("data-merki",v.textContent),v.addEventListener("click",function(){Et(o,v)}),v}function Lt(o){try{var r=new URL(o);return/(^|\.)dropbox\.com$/.test(r.hostname)?(r.searchParams.delete("dl"),r.searchParams.set("raw","1"),r.href):o}catch{return o}}function Ae(o){var r=/\.([a-z0-9]+)$/i.exec(String(o||"").split(/[?#]/)[0]),v=r?r[1].toLowerCase():"";return{e:v,t:/^(jpe?g|png|gif|webp)$/.test(v)?"mynd":/^(mp4|mov|m4v)$/.test(v)?"myndband":""}}function Pe(){Array.prototype.forEach.call(document.querySelectorAll('link[rel~="icon"]'),function(r){r.parentNode.removeChild(r)});var o=document.createElement("link");o.rel="icon",o.type="image/png",o.href=je,document.head.appendChild(o)}var Ee={nafir:[["Yfirlit","/nafir/stada"],["Birta","/nafir/birta"],["Pl\xF6tus\xED\xF0a","/albums/nafir"]],per:[["Augl\xFDsingar","/per/auglysingar"],["Birta","/per/birta"],["\xC6fing","/per/jolamixer"]]};function Te(o){var r=Ee[o]||Ee.nafir,v=location.pathname.replace(/\/$/,""),s=a("nav","vogor-leidir");return s.setAttribute("aria-label","S\xED\xF0ur verkefnisins"),r.forEach(function(E){var V=a("a","",E[0]);V.href=E[1],E[1]===v&&V.setAttribute("aria-current","page"),s.appendChild(V)}),s}var He=`<div class="vst">
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
`;function Ie(o){o.innerHTML=He;var r="vogor-band-key",v="vogor-band-nafn",s={Loki\u00F0:"done","\xCD vinnslu":"work",B\u00ED\u00F0ur:"hold"},E=["\xD3byrja\xF0","\xCD vinnslu","B\xED\xF0ur","Loki\xF0"],V={Sent:"sent",Svara\u00F0:"svarad",Skoppa\u00F0i:"skoppadi",Sleppt:"sleppt"};function w(e){return o.querySelector('[data-st="'+e+'"]')}function Q(e){Array.prototype.forEach.call(o.querySelectorAll("[data-st-state]"),function(l){l.hidden=l.getAttribute("data-st-state")!==e})}var X=jt("b",r).lykill;function F(e){var l=/^(\d{4})-(\d\d)-(\d\d)$/.exec(e||"");return l?new Date(Number(l[1]),Number(l[2])-1,Number(l[3])):null}function U(e){var l=F(e);return l?l.getDate()+". "+Ut[l.getMonth()]:e||""}var G=new Date;G.setHours(0,0,0,0);function O(e){var l=F(e);return l?Math.round((l-G)/864e5):null}function at(e,l,y){var f=O(l);f!=null&&(w("dagar-"+e).textContent=f>0?f:"0",w("texti-"+e).textContent=f>1?"dagar \xED "+y:f===1?"dagur \xED "+y:f===0?y+" \xED dag":y+" komi\xF0")}function h(e){var l=e.stada==="Loki\xF0",y=O(e.frestur),f=!l&&y!=null&&y<0,t=a("li",l?"vst-lokid":f?"vst-seint":""),i=a("span","vst-led"+(f?" vst-led--late":s[e.stada]?" vst-led--"+s[e.stada]:""));i.title=f?e.stada+", komi\xF0 fram yfir frest":e.stada,t.appendChild(i);var n=a("span","vst-verk",e.verk);e.notur&&!l&&n.appendChild(a("small","",e.notur)),t.appendChild(n);var m=a("span","vst-val");return m.appendChild(I(e,"stada",E,"Sta\xF0a verksins: ")),m.appendChild(I(e,"hver",[""].concat(L.band||[]),"Hver \xE1 verki\xF0: ")),t.appendChild(m),t.appendChild(a("span","vst-frestur",U(e.frestur))),t}function I(e,l,y,f){var t=a("select");return t.setAttribute("aria-label",f+e.verk),y.indexOf(e[l])===-1&&(y=y.concat([e[l]])),y.forEach(function(i){var n=a("option","",i||"Enginn");n.value=i,t.appendChild(n)}),t.value=e[l],t.addEventListener("change",function(){g(e,l,t)}),t}function g(e,l,y){var f={action:"bandBreyta",b:X,rod:e.rod,verk:e.verk};f[l]=y.value,y.disabled=!0,w("skilabod").textContent="",xt(f).then(function(t){if(!t.ok)throw new Error(t.villa||"Hlekkurinn gildir ekki lengur.");e.hver=t.hver,e.stada=t.stada}).catch(function(t){w("skilabod").textContent="T\xF3kst ekki a\xF0 vista. "+t.message}).then(function(){W(L)})}var L={};function W(e){L=e,at("preorder",e.preorder,"pre-order"),at("utgafa",e.utgafa,"\xFAtg\xE1fu");var l=e.verkefni.length,y=e.verkefni.filter(function(P){return P.stada==="Loki\xF0"}).length;w("hlutfall").textContent=y+" / "+l;var f=w("maelir");f.textContent="",f.setAttribute("aria-label",y+" af "+l+" verkum loki\xF0");for(var t=0;t<l;t++)f.appendChild(a("span",t<y?"on":""));var i=w("naest");i.textContent="",e.verkefni.filter(function(P){return P.stada!=="Loki\xF0"&&F(P.frestur)}).sort(function(P,T){return F(P.frestur)-F(T.frestur)}).slice(0,7).forEach(function(P){i.appendChild(h(P))}),i.children.length||i.appendChild(a("li","","Ekkert \xE1 dagskr\xE1 me\xF0 fresti."));var n=w("hopar"),m={};Array.prototype.forEach.call(n.children,function(P){m[P.getAttribute("data-flokkur")]=P.open}),n.textContent="";var j=[],S={};e.verkefni.forEach(function(P){var T=P.flokkur||"Anna\xF0";S[T]||(S[T]=[],j.push(T)),S[T].push(P)}),j.forEach(function(P){var T=S[P],et=T.filter(function(mt){return mt.stada==="Loki\xF0"}).length,ot=a("details","vst-group");ot.setAttribute("data-flokkur",P),ot.open=P in m?m[P]:et<T.length;var ht=a("summary");ht.appendChild(a("span","",P)),ht.appendChild(a("span","",et+"/"+T.length)),ot.appendChild(ht);var $=a("ul");T.forEach(function(mt){$.appendChild(h(mt))}),ot.appendChild($),n.appendChild(ot)});var Y=w("pressa");Y.textContent="";var B=null,Z=e.pressa.some(function(P){return P.flokkur});if(e.pressa.forEach(function(P){if(Z&&(P.flokkur||"")!==B){B=P.flokkur||"";var T=a("tr","vst-flokkur"),et=a("th","",B||"\xD3flokka\xF0");et.colSpan=7,T.appendChild(et),Y.appendChild(T)}var ot=a("tr",V[P.stada||"Sent"]?"vst-st-"+V[P.stada||"Sent"]:"");ot.appendChild(a("td","",P.midill)),ot.appendChild(a("td","",P.stada||"Sent")),ot.appendChild(a("td","",P.hver||"\u2013")),ot.appendChild(a("td","",U(P.sent)||"\u2013")),ot.appendChild(a("td","",P.opnad?U(P.opnad)+(P.opnanir>1?" ("+P.opnanir+"\xD7)":""):"\u2013")),ot.appendChild(a("td","",U(P.hlusta)||"\u2013")),ot.appendChild(a("td","",U(P.saekja)||"\u2013")),Y.appendChild(ot)}),!e.pressa.length){var K=a("td","","Enginn \xE1 markh\xF3pslistanum enn\xFE\xE1.");K.colSpan=7,Y.appendChild(a("tr")).appendChild(K)}tt(e.band||[]),D(),q(e.meta),c(e.efni||[]),e.stream?w("stream").href=e.stream:w("stream").hidden=!0,w("uppfaert").textContent=e.uppfaert}var it=/\.(jpe?g|png|gif|webp)$/i,p=/\.(mp4|mov|m4v|webm)$/i,u="Samf\xE9lagsmi\xF0lar",x=["Dr\xF6g","Sam\xFEykkt","P\xF3sta\xF0","Sleppa"],C={P\u00F3sta\u00F0:"postad",Sleppa:"sleppa"};function _(e){try{var l=new URL(e);return{nafn:decodeURIComponent(l.pathname.split("/").pop()||""),dropbox:/(^|\.)dropbox\.com$/.test(l.hostname),u:l}}catch{return{nafn:"",dropbox:!1,u:null}}}function A(e){var l=_(e.slod),y=a("div","vst-slod");if(it.test(l.nafn)){var f=a("img","vst-mynd");f.src=Lt(e.slod),f.alt=e.heiti||"",f.loading="lazy";var t=St(e.slod);t.appendChild(f),y.appendChild(t),y.appendChild(St(e.slod,"vst-afrita","Opna \xED fullri st\xE6r\xF0"))}else if(l.dropbox){var i=/\/fo\//.test(l.u.pathname)?"Mappa \xED Dropbox":(p.test(l.nafn)?"Myndband: ":"Dropbox: ")+l.nafn;y.appendChild(St(e.slod,"",i))}else y.appendChild(St(e.slod,"",e.slod.replace(/^https?:\/\/(www\.)?/,"")));return y.appendChild(ee(e.slod,"Afrita hlekk")),y}function R(e,l){var y=a("button","vst-afrita"+(l?" "+l:""),e);return y.type="button",y}function M(e){return e.b=X,xt(e).catch(function(l){return{ok:!1,villa:l.message}})}function z(){return w("eg").value}function nt(e,l){for(var y=L.efni||[],f=0;f<y.length;f++)y[f].id===e.id&&(y[f]=e);var t=lt(e);return l.parentNode.replaceChild(t,l),t}function lt(e){var l=e.flokkur===u,y=!/^md-/.test(e.id),f=a("article","vst-but"+(l&&C[e.stada]?" vst-but-"+C[e.stada]:"")),t=a("div","vst-but-haus");t.appendChild(a("span","vst-but-heiti",e.heiti||"\xC1n heitis"));var i=a("span","vst-but-hlid");if(e.birta){var n=O(e.birta),m=e.stada==="P\xF3sta\xF0"||e.stada==="Sleppa",j=l&&!m&&n!=null&&n<0;i.appendChild(a("span","vst-but-birta"+(n===0?" vst-idag":"")+(j?" vst-but-seint":""),n===0?"\xCD dag":U(e.birta)+(j?", ekki p\xF3sta\xF0":""))),n!=null&&n<0&&(!l||m)&&f.classList.add("vst-but-lidid")}if(l&&y&&e.birta){var S=a("select");S.setAttribute("aria-label","Sta\xF0a f\xE6rslunnar "+(e.heiti||"")),x.forEach(function(T){var et=a("option","",T);et.value=T,S.appendChild(et)}),S.value=e.stada||x[0],S.addEventListener("change",function(){if(!z()){S.value=e.stada,ct(f,"Veldu nafni\xF0 \xFEitt efst \xE1 s\xED\xF0unni.");return}S.disabled=!0,M({action:"bandEfniVista",id:e.id,hver:z(),reitir:{stada:S.value}}).then(function(T){T.ok?nt(T.but,f):(S.disabled=!1,S.value=e.stada,ct(f,T.villa))})}),i.appendChild(S)}if(y){var Y=R("Breyta","vst-but-takki");Y.addEventListener("click",function(){ft(e,f)}),i.appendChild(Y)}t.appendChild(i),f.appendChild(t);var B=L.meta?L.meta.faerslur.filter(function(T){return T.efni===e.id}):[];if(B.length){var Z=a("p","vst-but-meta");B.forEach(function(T){Z.appendChild(St(T.hlekkur,"",T.midill+": "+(T.na!=null?"n\xE1 "+T.na+", ":"")+T.vidbrogd+" vi\xF0br\xF6g\xF0"))}),f.appendChild(Z)}e.slod&&f.appendChild(A(e));var K=[["is","\xCDslenska"],["en","English"]].filter(function(T){return e[T[0]]});if(K.length){var P=a("div","vst-maltextar");K.forEach(function(T){var et=a("div","vst-maltexti");K.length>1&&et.appendChild(a("span","vst-mal",T[1])),et.appendChild(a("pre","vst-texti",e[T[0]])),et.appendChild(ee(e[T[0]])),P.appendChild(et)}),f.appendChild(P)}return e.notur&&f.appendChild(a("p","vst-but-notur",e.notur)),e.breyttAf&&e.breytt&&f.appendChild(a("p","vst-but-breytt","S\xED\xF0ast breytt af "+e.breyttAf+", "+U(e.breytt.slice(0,10))+" kl. "+e.breytt.slice(11,16))),f}function ct(e,l){var y=e.querySelector(".vst-msg")||e.appendChild(a("p","vst-small vst-msg"));y.textContent=l||""}function ft(e,l){var y=e.flokkur===u,f=e,t=a("form","vst-but vst-form vst-but-form");t.appendChild(a("span","vst-but-heiti","Breyta: "+(e.heiti||"\xC1n heitis")));function i(K,P,T,et,ot,ht){var $=a("label","",K),mt=a(T,ot||"");return T==="input"&&(mt.type=P==="birta"?"date":"text"),mt.name=P,mt.value=et||"",$.appendChild(mt),ht&&$.appendChild(a("small","",ht)),$}t.appendChild(i("Heiti","heiti","input",e.heiti));var n=a("div","vst-form-rod");if(n.appendChild(i("Birta","birta","input",e.birta)),y){var m=a("label","","Sta\xF0a"),j=a("select");j.name="stada",x.forEach(function(K){var P=a("option","",K);P.value=K,j.appendChild(P)}),j.value=e.stada||x[0],m.appendChild(j),n.appendChild(m)}t.appendChild(n),t.appendChild(i("\xCDslenska","is","textarea",e.is)),t.appendChild(i("English","en","textarea",e.en)),t.appendChild(i("Mynd e\xF0a myndband","slod","input",e.slod,"","Dropbox-hlekkur \xE1 skr\xE1na e\xF0a m\xF6ppuna, e\xF0a sl\xF3\xF0 \xE1 mynd.")),t.appendChild(i("N\xF3tur","notur","textarea",e.notur,"vst-stutt","Hva\xF0a mynd fylgir, hvar \xE1 a\xF0 p\xF3sta, o.s.frv."));var S=a("div","vst-form-takkar"),Y=R("Vista");Y.type="submit";var B=R("H\xE6tta vi\xF0","vst-but-takki");S.appendChild(Y),S.appendChild(B),t.appendChild(S);var Z=t.appendChild(a("p","vst-small vst-msg"));B.addEventListener("click",function(){nt(f,t)}),t.addEventListener("submit",function(K){if(K.preventDefault(),Z.textContent="",!z()){Z.textContent="Veldu nafni\xF0 \xFEitt efst \xE1 s\xED\xF0unni.";return}var P={};["heiti","birta","stada","is","en","slod","notur"].forEach(function(T){t.elements[T]&&(P[T]=t.elements[T].value)}),Y.disabled=!0,Y.textContent="Vista...",M({action:"bandEfniVista",id:e.id,hver:z(),breytt:f.breytt,reitir:P}).then(function(T){if(Y.disabled=!1,Y.textContent="Vista",T.ok){nt(T.but,t);return}T.arekstur&&T.but&&(f=T.but),Z.textContent=T.villa||"T\xF3kst ekki a\xF0 vista."})}),l.parentNode.replaceChild(t,l),t.elements.heiti.focus()}function rt(e,l){return(e.birta?1:0)-(l.birta?1:0)||(e.birta<l.birta?-1:e.birta>l.birta?1:0)}var b="vogor-efni-opid";function c(e){var l=w("efni");if(w("efni-kafli").hidden=!e.length,!!e.length&&!l.querySelector(".vst-but-form")){var y={};try{y=JSON.parse(localStorage.getItem(b)||"{}")||{}}catch{}l.textContent="";var f=[],t={};e.forEach(function(i){var n=i.flokkur||"Anna\xF0";t[n]||(t[n]=[],f.push(n)),t[n].push(i)}),f.indexOf(u)>0&&(f.splice(f.indexOf(u),1),f.unshift(u)),f.forEach(function(i){var n=a("details","vst-group");n.open=!!y[i];var m=a("summary");m.appendChild(a("span","",i));var j=String(t[i].length);if(i===u){var S=t[i].filter(function(K){return K.birta&&K.stada!=="Sleppa"}),Y=S.filter(function(K){return K.stada==="P\xF3sta\xF0"}).length;j=Y+"/"+S.length+" p\xF3sta\xF0ar",t[i].sort(rt)}m.appendChild(a("span","",j)),n.appendChild(m);var B=a("div","vst-efni");if(t[i].forEach(function(K){B.appendChild(lt(K))}),i===u){var Z=R("N\xFD f\xE6rsla","vst-but-takki");Z.addEventListener("click",function(){if(!z()){Z.textContent="Veldu fyrst hver \xFE\xFA ert";return}Z.disabled=!0,M({action:"bandEfniNytt",hver:z(),flokkur:u}).then(function(K){if(Z.disabled=!1,!K.ok){Z.textContent=K.villa||"T\xF3kst ekki";return}L.efni.push(K.but);var P=lt(K.but);B.insertBefore(P,Z),ft(K.but,P)})}),B.appendChild(Z)}n.appendChild(B),n.addEventListener("toggle",function(){y[i]=n.open;try{localStorage.setItem(b,JSON.stringify(y))}catch{}}),l.appendChild(n)})}}function q(e){if(w("meta-kafli").hidden=!e,!!e){var l=e.fylgjendur||{},y=w("fylgjendur");y.textContent="",[["fb","Facebook"],["ig","Instagram"]].forEach(function(n){if(l[n[0]]!=null){var m=a("div","vst-count");m.appendChild(a("span","vst-counter",String(l[n[0]])));var j=l[n[0]+"Breyting"];m.appendChild(a("span","","fylgjendur \xE1 "+n[1]+(j!=null?" ("+(j>=0?"+":"")+j+" fr\xE1 "+U(l.fra)+")":""))),y.appendChild(m)}});var f={};(L.efni||[]).forEach(function(n){f[n.id]=n.heiti});var t=w("meta");if(t.textContent="",e.faerslur.forEach(function(n){var m=a("tr");m.appendChild(a("td","",U(n.birt.slice(0,10))+" "+n.birt.slice(11,16))),m.appendChild(a("td","",n.midill)),m.appendChild(a("td","",n.tegund));var j=a("td","vst-meta-texti"),S=f[n.efni]?f[n.efni]:n.texti||n.tegund;j.appendChild(n.hlekkur?St(n.hlekkur,"",S):a("span","",S)),j.title=n.texti,m.appendChild(j),[n.na,n.ahorf,n.vidbrogd].forEach(function(Y){m.appendChild(a("td","vst-tala",Y==null?"\u2013":String(Y)))}),t.appendChild(m)}),!e.faerslur.length){var i=a("td","","Engar f\xE6rslur fundust fr\xE1 1. okt\xF3ber.");i.colSpan=7,t.appendChild(a("tr")).appendChild(i)}w("meta-sott").textContent=e.sott||"aldrei"}}function tt(e){var l=w("eg"),y=l.value;y||(y=gt(v)),l.textContent="",[""].concat(e.filter(function(f){return f!=="Allir"})).forEach(function(f){var t=a("option","",f||"Veldu nafn");t.value=f,l.appendChild(t)}),l.value=e.indexOf(y)!==-1?y:""}Array.prototype.forEach.call(o.querySelectorAll(".vst-hopp a"),function(e){var l=e.getAttribute("href").slice(1);e.href=location.pathname+location.search+"#"+l,e.addEventListener("click",function(y){var f=document.getElementById(l);f&&(y.preventDefault(),f.scrollIntoView({behavior:"smooth",block:"start"}),history.replaceState&&history.replaceState(null,"",e.href))})}),w("eg").addEventListener("change",function(){dt(v,this.value),D()});function D(){var e=z();w("eg-bar").classList.toggle("vst-eg-bar--tomt",!e),w("eg-texti").textContent=e?"H\xE6 "+e+". Verkin sem eru merkt \xFE\xE9r eru undir \u201E\xDE\xEDn verk\u201C, og breytingar \xED Efni eru skr\xE1\xF0ar \xE1 \xFEig.":"Veldu nafni\xF0 \xFEitt \xE1\xF0ur en \xFE\xFA breytir einhverju. \xDEa\xF0 er muna\xF0 \xED \xFEessum vafra.";var l=w("min");if(l.textContent="",!e){l.appendChild(a("li","vst-tomt","Veldu nafni\xF0 \xFEitt efst til a\xF0 sj\xE1 verkin \xFE\xEDn."));return}var y=(L.verkefni||[]).filter(function(f){return f.stada!=="Loki\xF0"&&(f.hver===e||f.hver==="Allir")}).sort(function(f,t){return(F(f.frestur)||864e13)-(F(t.frestur)||864e13)});y.forEach(function(f){l.appendChild(h(f))}),y.length||l.appendChild(a("li","vst-tomt","Ekkert opi\xF0 verk er merkt \xFE\xE9r."))}function k(){return xt({action:"bandStada",b:X}).then(function(e){if(e.rangurLykill){dt(r,""),Q("invalid");return}if(!e.ok){w("villa").textContent=e.villa||"\xD3\xFEekkt villa.",Q("error");return}W(e),Q("ok")}).catch(function(e){w("villa").textContent=e.message+" Pr\xF3fa\xF0u a\xF0 endurhla\xF0a s\xED\xF0una.",Q("error")})}if(w("uppfaera").addEventListener("click",function(){var e=this;e.disabled=!0,k().then(function(){e.disabled=!1})}),!X){Q("invalid");return}Q("loading"),k()}var sa="rpghdz4ncwxr449";var ae=(o,r)=>{try{localStorage.setItem(o,r)}catch{}},qt=o=>{try{return localStorage.getItem(o)}catch{return null}},ne=o=>{try{localStorage.removeItem(o)}catch{}};function Me(){let o=new Uint8Array(32);return crypto.getRandomValues(o),Array.from(o,r=>r.toString(16).padStart(2,"0")).join("")}function oa(o){let r="";return new Uint8Array(o).forEach(v=>r+=String.fromCharCode(v)),btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function la(o){return JSON.stringify(o).replace(/[\u007f-￿]/g,r=>"\\u"+r.charCodeAt(0).toString(16).padStart(4,"0"))}function re(o,r){let v=o;try{v=JSON.parse(o).error_summary||o}catch{}let s=new Error(v);return s.status=r,s.vantarHeimild=/missing_scope/.test(v),s.utrunnid=r===401&&!s.vantarHeimild,s}function ze({appKey:o=sa,geymsla:r="rs"}={}){let v={refresh:r+"_refresh",verifier:r+"_verifier",state:r+"_state"},s=null,E=0,V=null,w=()=>location.origin+location.pathname;async function Q(){let p=Me(),u=Me();ae(v.verifier,p),ae(v.state,u);let x=oa(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(p))),C="https://www.dropbox.com/oauth2/authorize?client_id="+encodeURIComponent(o)+"&response_type=code&token_access_type=offline&code_challenge="+x+"&code_challenge_method=S256&state="+u+"&redirect_uri="+encodeURIComponent(w());try{window.top.location.href=C}catch{location.href=C}}async function X(p){let u=await fetch("https://api.dropboxapi.com/oauth2/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({client_id:o,...p}).toString()}),x=await u.json();if(!u.ok)throw new Error(x.error_description||x.error||"Dropbox-innskr\xE1ning mist\xF3kst");return s=x.access_token,E=Date.now()+Math.max(0,x.expires_in-60)*1e3,x}async function F(){let p=new URL(location.href),u=p.searchParams.get("code");if(!u)return!1;let x=p.searchParams.get("state"),C=qt(v.state);p.searchParams.delete("code"),p.searchParams.delete("state");try{history.replaceState(history.state,"",p.href)}catch{}if(C&&x!==C)throw new Error("Innskr\xE1ningin passa\xF0i ekki vi\xF0 \xFEessa s\xED\xF0u. Reyndu aftur.");let _=await X({code:u,grant_type:"authorization_code",code_verifier:qt(v.verifier)||"",redirect_uri:w()});return ne(v.verifier),ne(v.state),_.refresh_token&&ae(v.refresh,_.refresh_token),!0}async function U(){if(s&&Date.now()<E)return s;let p=qt(v.refresh);if(!p)throw new Error("Ekki tengt vi\xF0 Dropbox");return await X({grant_type:"refresh_token",refresh_token:p}),s}function G(){ne(v.refresh),s=null,E=0,V=null}async function O(p){let u={Authorization:"Bearer "+await U()};return V&&p&&(u["Dropbox-API-Path-Root"]=V),u}async function at(p,u){let x=await O(p.startsWith("files/"));x["Content-Type"]="application/json";let C=await fetch("https://api.dropboxapi.com/2/"+p,{method:"POST",headers:x,body:u===null?"null":JSON.stringify(u)});if(!C.ok)throw re(await C.text(),C.status);return C.json()}async function h(){let p=await at("users/get_current_account",null),u=p.root_info;return u&&u.root_namespace_id&&u.home_namespace_id&&u.root_namespace_id!==u.home_namespace_id&&(V=JSON.stringify({".tag":"root",root:u.root_namespace_id})),p}async function I(p){let u=await at("files/list_folder",{path:p,recursive:!1}),x=u.entries;for(;u.has_more;)u=await at("files/list_folder/continue",{cursor:u.cursor}),x=x.concat(u.entries);return x}async function g(p,u,x,C){let _=await O(!0);return new Promise((A,R)=>{let M=new XMLHttpRequest;M.open("POST","https://content.dropboxapi.com/2/"+p),Object.entries(_).forEach(([z,nt])=>M.setRequestHeader(z,nt)),M.setRequestHeader("Content-Type","application/octet-stream"),M.setRequestHeader("Dropbox-API-Arg",la(u)),C&&(M.upload.onprogress=z=>z.lengthComputable&&C(z.loaded)),M.onload=()=>M.status<300?A(M.responseText?JSON.parse(M.responseText):null):R(re(M.responseText,M.status)),M.onerror=()=>R(new Error("Ekkert samband vi\xF0 Dropbox.")),M.send(x)})}async function L(p,u,x=()=>{}){let _={path:u.replace(/\/$/,"")+"/"+p.name,mode:"add",autorename:!0,mute:!1};if(p.size<=157286400)return g("files/upload",_,p,z=>x(z/p.size));let A=0,R=await g("files/upload_session/start",{close:!1},p.slice(0,33554432),z=>x(z/p.size));for(A=Math.min(33554432,p.size);p.size-A>33554432;){let z=A;await g("files/upload_session/append_v2",{cursor:{session_id:R.session_id,offset:z},close:!1},p.slice(z,z+33554432),nt=>x((z+nt)/p.size)),A+=33554432}let M=A;return g("files/upload_session/finish",{cursor:{session_id:R.session_id,offset:M},commit:_},p.slice(M),z=>x((M+z)/p.size))}async function W(p){try{return(await at("sharing/create_shared_link_with_settings",{path:p,settings:{requested_visibility:"public",audience:"public",access:"viewer"}})).url}catch(u){if(!/shared_link_already_exists/.test(u.message))throw u;let x=await at("sharing/list_shared_links",{path:p,direct_only:!0}),C=x.links.find(_=>!_.link_permissions||_.link_permissions.resolved_visibility?.[".tag"]==="public")||x.links[0];if(!C)throw u;return C.url}}async function it(p){let u={};for(let x=0;x<p.length;x+=25){let C=p.slice(x,x+25),_=await O(!0);_["Content-Type"]="application/json";let A=await fetch("https://content.dropboxapi.com/2/files/get_thumbnail_batch",{method:"POST",headers:_,body:JSON.stringify({entries:C.map(R=>({path:R,format:"jpeg",size:"w128h128",mode:"fitone_bestfit"}))})});if(!A.ok)throw re(await A.text(),A.status);(await A.json()).entries.forEach((R,M)=>{R[".tag"]==="success"&&(u[C[M]]="data:image/jpeg;base64,"+R.thumbnail)})}return u}return{tengdur:()=>!!qt(v.refresh),innskra:Q,ljukaInnskraningu:F,utskra:G,api:at,reikningur:h,listi:I,hlada:L,hlekkur:W,smamyndir:it}}var Oe=/\.(jpe?g|png|mp4)$/i,Re=/\.(jpe?g|png)$/i;function da(o){return o>1048576?(o/1048576).toFixed(1)+" MB":Math.round(o/1024)+" kB"}function Ne({mappa:o}){let r=ze(),v=null,s=null,E=r.ljukaInnskraningu().catch(p=>(console.warn("dropbox:",p.message),!1));function V(){return s||(s=E.then(async()=>r.tengdur()?(v=await r.reikningur(),v):null).catch(p=>{throw s=null,(p.vantarHeimild||p.utrunnid)&&r.utskra(),p})),s}let w=a("dialog","vbt-dbx"),Q=a("div","vbt-dbx-haus"),X=a("b"),F=a("button","vbt-link","Upp");F.type="button";let U=a("button","vbt-link","Loka");U.type="button",Q.append(F,X,U);let G=a("p","vbt-small"),O=a("ul","vbt-dbx-listi");w.append(Q,G,O),document.body.appendChild(w);let at=o,h=null;U.addEventListener("click",()=>w.close()),w.addEventListener("close",()=>h&&h(null)),F.addEventListener("click",()=>{at.split("/").length>2&&g(at.replace(/\/[^/]+$/,""))});function I(){let p=a("button","vbt-link","Skr\xE1 \xFAt");return p.type="button",p.addEventListener("click",()=>{r.utskra(),v=null,s=null,w.close()}),p}async function g(p){at=p,X.textContent=p,F.hidden=p===o,O.textContent="",O.appendChild(a("li","vbt-small","S\xE6ki \u2026"));try{let u=await r.listi(p),x=u.filter(A=>A[".tag"]==="folder").sort((A,R)=>A.name.localeCompare(R.name)),C=u.filter(A=>A[".tag"]==="file").sort((A,R)=>R.server_modified.localeCompare(A.server_modified));O.textContent="",x.forEach(A=>{let R=a("li","vbt-dbx-mappa"),M=a("button","","\u{1F4C1} "+A.name);M.type="button",M.addEventListener("click",()=>g(A.path_display)),R.appendChild(M),O.appendChild(R)});let _=[];C.forEach(A=>{let R=Oe.test(A.name),M=a("li",R?"":"vbt-dbx-bannad"),z=a("button");z.type="button",z.disabled=!R;let nt=a("span","vbt-dbx-thumb",Re.test(A.name)?"":A.name.split(".").pop().toUpperCase());Re.test(A.name)&&_.push([A.path_display,nt]);let lt=a("span","vbt-dbx-nafn",A.name);lt.appendChild(a("small","",da(A.size)+" \xB7 "+A.server_modified.slice(0,10))),z.append(nt,lt),R&&z.addEventListener("click",()=>W(A.path_display,z)),M.appendChild(z),O.appendChild(M)}),u.length||O.appendChild(a("li","vbt-small","Mappan er t\xF3m.")),r.smamyndir(_.map(A=>A[0])).then(A=>{_.forEach(([R,M])=>{A[R]&&(M.style.backgroundImage=`url(${A[R]})`)})}).catch(()=>{})}catch(u){O.textContent="",O.appendChild(a("li","vbt-msg",u.message))}}function L(p){return p.vantarHeimild?(r.utskra(),v=null,s=null,w.open&&w.close(),confirm("Dropbox \xFEarf n\xFDja innskr\xE1ningu svo s\xED\xF0an megi hla\xF0a upp og b\xFAa til hlekki. Skr\xE1 inn n\xFAna?")&&r.innskra(),!0):!1}async function W(p,u){u.disabled=!0,G.textContent="B\xFD til hlekk \u2026";try{let x=await r.hlekkur(p),C=h;h=null,w.close(),C(x)}catch(x){if(L(x))return;G.textContent="T\xF3kst ekki a\xF0 b\xFAa til hlekk: "+x.message,u.disabled=!1}}async function it(){try{if(await V())return!0}catch(p){if(r.tengdur())throw p}return confirm("Tengja Dropbox? \xDE\xFA fer\xF0 til Dropbox og kemur svo aftur hinga\xF0. Textinn \xED reitunum heldur s\xE9r.")&&await r.innskra(),!1}return{async velja(){return await it()?(G.textContent="Tengt sem "+v.name.display_name+". ",G.appendChild(I()),w.showModal(),g(o),new Promise(p=>h=p)):null},async hlada(p,u){if(!Oe.test(p.name))throw new Error("Bara .jpg, .png e\xF0a .mp4.");if(!await it())return null;try{let x=await r.hlada(p,o,C=>u("Hle\xF0 upp "+Math.round(C*100)+" %"));return u("B\xFD til hlekk \u2026"),await r.hlekkur(x.path_display)}catch(x){if(L(x))return null;throw x}}}}var De=`<div class="vbt">
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

    <section>
      <h2 class="vst-midi">F\xE6rslur</h2>
      <p class="vbt-small vbt-hint">Textunum er breytt \xE1 <a data-bt="yfirlit" href="/nafir/stada" target="_blank" rel="noopener">yfirliti bandsins</a>. H\xE9r velur\xF0u hva\xF0a texti fer \xE1 hvorn mi\xF0il, og textann m\xE1 laga fyrir \xFEessa birtingu \xE1n \xFEess a\xF0 breyta f\xE6rslunni.</p>
      <div class="vbt-listi" data-bt="faerslur"></div>
    </section>

    <p class="vbt-small">S\xF3tt <span data-bt="sott"></span>. <button class="vbt-link" type="button" data-bt="uppfaera">Uppf\xE6ra</button> \xB7 <button class="vbt-link" type="button" data-bt="utskra">Skr\xE1 \xFAt</button></p>
  </div>
</div>
`;var ua={"":"/AUGLYSINGAR/SHAKON",per:"/AUGLYSINGAR/PER"};function Ue(o){o.innerHTML=De;var r=o.getAttribute("data-verkefni")||"",v=r?"vogor-birta-"+r:"vogor-promo-key",s="vogor-birta-mal",E={Birt:"ok","Prufa \xED lagi":"ok",T\u00EDmasett:"bid",Prufa:"prufa","B\xED\xF0ur Instagram":"bid",Sendi:"bid",Villa:"villa",\u00D3v\u00EDst:"villa",\u00DAtrunni\u00F0:"villa"},V=["T\xEDmasett","Prufa","B\xED\xF0ur Instagram"],w={Prufa:"\xCD yfirfer\xF0","Prufa \xED lagi":"Yfirfer\xF0 \xED lagi"};function Q(b){return b.prufa&&w[b.stada]||b.stada}var X=["Facebook","Instagram","Instagram Story","Facebook Story"],F="Stafr\xE6nn H\xE1kon",U="stafraennhakon",G=["is","en"],O=[{nafn:"Maggi",ig:"maggi_freyr",inn:!0},{nafn:"\xC1rni \xDE\xF3r",ig:"johliujv",inn:!0},{nafn:"R\xF3bert",ig:"robertrunolfs"},{nafn:"L\xE1rus",ig:"larussigurdsson_brimhof"},{nafn:"\xD3li",ig:"olafurjosephsson"}];function at(b){if(b){X=b.midlar||X,O=b.collab||O,F=b.sidaNafn||F,U=b.igNafn||U,G=b.tungumal||G;var c=o.querySelector(".vbt-head .vst-midi");c&&b.titill&&(c.textContent=b.titill+" birta");var q=h("yfirlit");q&&b.yfirlit&&(q.href=b.yfirlit,q.textContent="yfirlestrars\xED\xF0unni")}}function h(b){return o.querySelector('[data-bt="'+b+'"]')}var I=Ne({mappa:o.getAttribute("data-dropbox-mappa")||ua[r]||"/AUGLYSINGAR"}),g=jt("l",v).lykill;function L(b,c){var q=Object.assign({action:b,key:g},c||{});return r&&(q.verkefni=r),xt(q,r?Le:null).then(function(tt){return tt.rangtLeyniord&&(g="",dt(v,""),W("gate")),tt}).catch(function(tt){return{ok:!1,villa:tt.message}})}function W(b){h("gate").hidden=b!=="gate",h("hledur").hidden=b!=="hledur",h("app").hidden=b!=="app"}function it(b){return b?new Date(b.replace(" ","T")+":00Z"):null}function p(b){var c=it(b);return c?c.getUTCDate()+". "+Ut[c.getUTCMonth()]+" "+b.slice(11,16):""}function u(b){var c=Math.round((it(b)-Date.now())/6e4);if(c<=0)return"n\xFAna";if(c<60)return c+" m\xEDn";if(c<2880)return Math.floor(c/60)+" klst "+c%60+" m\xEDn";var q=Math.round(c/1440);return q+(q===1?" dag":" daga")}function x(b){var c=Math.round((it(b)-Date.now())/6e4);return c<60?Math.max(c,0)+" m\xEDn":c<2880?Math.round(c/60)+" klst":Math.round(c/1440)+" dagar"}var C={},_="vogor-birta-drog",A={};try{A=JSON.parse(sessionStorage.getItem(_)||"{}")||{}}catch{}function R(){try{sessionStorage.setItem(_,JSON.stringify(A))}catch{}}var M=[];function z(b){return L("birtingar").then(function(c){if(!c.ok){c.rangtLeyniord||(W("gate"),h("gate-villa").textContent=c.villa||"N\xE1\xF0i ekki \xED g\xF6gnin.");return}C=c,at(c.verkefni),b===!0?lt():nt(),W("app")})}function nt(){M=[],lt();var b=h("faerslur");b.textContent="",C.faerslur.slice().sort(function(c,q){return c.birta.localeCompare(q.birta)}).forEach(function(c){b.appendChild(ft(c))})}function lt(){var b={};C.faerslur.forEach(function(k){b[k.id]=k.heiti});var c=C.birtingar.filter(function(k){return V.indexOf(k.stada)!==-1}).sort(function(k,e){return k.timi.localeCompare(e.timi)}),q=C.birtingar.filter(function(k){return V.indexOf(k.stada)===-1&&k.stada!=="H\xE6tt vi\xF0"}).sort(function(k,e){return e.timi.localeCompare(k.timi)}).slice(0,15),tt=h("rod");tt.textContent="",c.concat(q).forEach(function(k){var e=a("li",V.indexOf(k.stada)===-1?"vbt-buid":"");e.appendChild(a("span","vst-led vst-led--"+(E[k.stada]||""))),e.appendChild(a("span","vbt-timi",p(k.timi))),e.appendChild(a("span","",k.midill));var l=a("span","vbt-heiti",(k.prufa?"Yfirfer\xF0: ":"")+(b[k.efni]||k.efni)),y=a("small");if(k.stada==="Birt"&&k.nidurstada){var f=a("a","","Birt, opna f\xE6rsluna");f.href=k.nidurstada,f.target="_blank",f.rel="noopener",y.appendChild(f)}else y.textContent=(k.stada==="T\xEDmasett"?"Fer \xFAt eftir "+u(k.timi):Q(k)+(k.nidurstada?": "+k.nidurstada:""))+(k.hver&&k.hver!==C.eg?" \xB7 "+k.hver:"");l.appendChild(y),e.appendChild(l),V.indexOf(k.stada)!==-1?e.appendChild(ct(k)):e.appendChild(a("span")),tt.appendChild(e)}),tt.children.length||tt.appendChild(a("li","","Ekkert \xED bi\xF0r\xF6\xF0 enn\xFE\xE1."));var D=c.filter(function(k){return!k.prufa})[0];h("naesta").textContent=D?x(D.timi):"--",h("naesta-texti").textContent=D?"\xED n\xE6stu birtingu":"ekkert \xED bi\xF0r\xF6\xF0",h("sott").textContent=C.nu+(C.eg?", innskr\xE1\xF0(ur): "+C.eg:""),M.forEach(function(k){k()})}function ct(b){var c=a("button","vbt-btn vbt-btn--ljos","H\xE6tta vi\xF0");return c.type="button",c.addEventListener("click",function(){c.disabled=!0,L("birtingHaetta",{id:b.id}).then(function(q){q.ok?(C.birtingar=q.birtingar,lt()):(c.disabled=!1,alert(q.villa))})}),c}function ft(b){var c=A[b.id]||(A[b.id]={}),q=b.stada==="P\xF3sta\xF0",tt=a("article","vbt-kort"+(q?" vbt-kort--postad":"")),D=a("div","vbt-kort-haus");D.appendChild(a("b","",b.heiti));var k=it(b.birta+" 00:00");D.appendChild(a("span","vbt-merki",k.getUTCDate()+". "+Ut[k.getUTCMonth()]+" \xB7 "+b.stada)),tt.appendChild(D);var e=a("div","vbt-forsk"),l=a("div","vbt-skipta"),y=X.indexOf("Instagram")!==-1?"Instagram":"Facebook";["Instagram","Facebook","Story"].filter(function(d){return d!=="Instagram"||X.indexOf("Instagram")!==-1}).forEach(function(d){var H=a("button","",d);H.type="button",H.addEventListener("click",function(){y=d,vt()}),l.appendChild(H)}),e.appendChild(l);var f=a("div");e.appendChild(f),tt.appendChild(e);var t=a("form","vbt-stjorn"),i=a("div","vbt-midlar"),n={};X.forEach(function(d){var H=a("label"),J=a("input");J.type="checkbox",J.checked=c[d]!==void 0?c[d]:!/ Story$/.test(d),n[d]=J,H.appendChild(J),H.appendChild(document.createTextNode(d)),i.appendChild(H),J.addEventListener("change",function(){c[d]=J.checked,vt()})}),t.appendChild(i);var m=a("label","","Texti"),j=a("select");[["en","English"],["is","\xCDslenska"],["baedi","\xCDslenska og enska"]].forEach(function(d){var H=a("option","",d[1]);H.value=d[0],j.appendChild(H)}),j.value=G.length===1?G[0]:c.mal||gt(s)||"en",m.hidden=G.length===1,m.appendChild(j),t.appendChild(m);var S=a("label","","Textinn sem fer \xFAt "),Y=a("span","vbt-teljari");S.appendChild(Y);var B=a("textarea");S.appendChild(B),t.appendChild(S);function Z(){B.value=j.value==="is"?b.is:j.value==="en"?b.en:[b.is,b.en].filter(Boolean).join(`

`),c.texti=B.value,vt()}j.addEventListener("change",function(){c.mal=j.value,dt(s,j.value),Z()}),B.addEventListener("input",function(){c.texti=B.value,vt()});var K=a("div","vbt-hopur","Collab \xE1 Instagram ");K.appendChild(a("span","vbt-teljari","mest 3"));var P=a("div","vbt-midlar"),T={};O.forEach(function(d){var H=a("label"),J=a("input");J.type="checkbox",T[d.ig]=J,H.title="@"+d.ig,H.appendChild(J),H.appendChild(document.createTextNode(d.nafn)),P.appendChild(H),J.addEventListener("change",function(){var pt=Pt().filter(function(N){return N!==d.ig});J.checked&&pt.push(d.ig),et.value=pt.join(", "),c.collab=et.value,vt()})}),K.appendChild(P);var et=a("input");et.value=c.collab!=null?c.collab:O.filter(function(d){return d.inn}).map(function(d){return d.ig}).join(", "),et.placeholder="e\xF0a sl\xE1 inn n\xF6fn, a\xF0skilin me\xF0 kommu",et.setAttribute("aria-label","Collab \xE1 Instagram"),K.appendChild(et),t.appendChild(K),et.addEventListener("input",function(){c.collab=et.value,vt()});function ot(){var d=Pt();Object.keys(T).forEach(function(H){T[H].checked=d.indexOf(H)!==-1,T[H].disabled=!T[H].checked&&d.length>=3})}var ht=a("label","","Mynd e\xF0a myndband"),$=a("input");$.value=c.mynd!=null?c.mynd:b.slod||"",$.placeholder="Dropbox-hlekkur \xE1 .jpg e\xF0a .mp4",ht.appendChild($),t.appendChild(ht),$.addEventListener("input",function(){c.mynd=$.value}),$.addEventListener("change",vt);var mt=a("div","vbt-takkar vbt-dbx-takkar"),Tt=a("button","vbt-btn vbt-btn--ljos","Velja \xFAr Dropbox");Tt.type="button";var Ht=a("button","vbt-btn vbt-btn--ljos","Hla\xF0a upp");Ht.type="button";var kt=a("input");kt.type="file",kt.accept=".jpg,.jpeg,.png,.mp4,image/jpeg,image/png,video/mp4",kt.hidden=!0;var It=a("span","vbt-small");mt.append(Tt,Ht,kt,It),t.appendChild(mt);function se(d){d&&($.value=d,c.mynd=d,R(),vt())}function oe(d){It.textContent="Dropbox: "+d.message}Tt.addEventListener("click",function(){It.textContent="",I.velja().then(se,oe)}),Ht.addEventListener("click",function(){kt.click()}),kt.addEventListener("change",function(){var d=kt.files[0];kt.value="",d&&(Ht.disabled=Tt.disabled=!0,I.hlada(d,function(H){It.textContent=H}).then(function(H){It.textContent=H?d.name+" er komin \xE1 Dropbox":"",se(H)},oe).then(function(){Ht.disabled=Tt.disabled=!1}))});var Zt=a("div","vbt-tvo"),le=a("label","","Dagur"),bt=a("input");bt.type="date",bt.value=c.dagur||b.birta,bt.addEventListener("change",function(){c.dagur=bt.value,vt()}),le.appendChild(bt);var de=a("label","","Klukkan"),Bt=a("span","vbt-klukka"),Vt=String(c.klukka||"12:00").split(":"),Ft=a("select"),_t=a("select");function pe(d){return(d<10?"0":"")+d}function ue(d,H,J){H.forEach(function(pt){var N=a("option","",pt);N.value=pt,d.appendChild(N)}),d.value=J}for(var Kt=[],Qt=0;Qt<60;Qt+=5)Kt.push(pe(Qt));Kt.indexOf(Vt[1])===-1&&Kt.push(Vt[1]),ue(Ft,Array.apply(null,Array(24)).map(function(d,H){return pe(H)}),Vt[0]),ue(_t,Kt.sort(),Vt[1]);var Mt={get value(){return Ft.value+":"+_t.value}};[Ft,_t].forEach(function(d){d.addEventListener("change",function(){c.klukka=Mt.value,vt()})}),Bt.appendChild(Ft),Bt.appendChild(a("span","",":")),Bt.appendChild(_t),de.appendChild(Bt),Zt.appendChild(le),Zt.appendChild(de),t.appendChild(Zt);var fe=a("p","vbt-adv");t.appendChild(fe);var ce=a("div","vbt-takkar"),zt=a("button","vbt-btn","Senda inn");zt.type="submit",ce.appendChild(zt),t.appendChild(ce);var Ot=a("div","vbt-yfirferd"),Xt=a("ul","vbt-fyrri"),me=a("p","vbt-small"),Ct=a("button","vbt-btn vbt-btn--stadfesta","Sta\xF0festa");Ct.type="button",Ot.appendChild(Xt),Ot.appendChild(me),Ot.appendChild(Ct),t.appendChild(Ot);var At=a("p","vbt-msg"+(c.skilabod?" vbt-msg--ok":""),c.skilabod||"");c.skilabod="",t.appendChild(At);var ve=C.birtingar.filter(function(d){return d.efni===b.id&&!d.prufa&&d.stada!=="H\xE6tt vi\xF0"});if(ve.length){var ge=a("ul","vbt-fyrri");ve.forEach(function(d){var H=a("li");H.appendChild(a("span","vst-led vst-led--"+(E[d.stada]||""))),H.appendChild(document.createTextNode(d.midill+": "+d.stada+(d.stada==="T\xEDmasett"?" "+p(d.timi):"")+(d.hver?" \xB7 "+d.hver:""))),ge.appendChild(H)}),t.appendChild(ge)}var ta=C.meta?C.meta.faerslur.filter(function(d){return d.efni===b.id}):[];ta.forEach(function(d){t.appendChild(a("p","vbt-teljari",d.midill+": "+(d.na!=null?"n\xE1 "+d.na+", ":"")+(d.ahorf!=null?"\xE1horf "+d.ahorf+", ":"")+d.vidbrogd+" vi\xF0br\xF6g\xF0"))}),tt.appendChild(t);function yt(d){return!!(n[d]&&n[d].checked)}function Wt(){return X.filter(function(d){return n[d].checked})}function vt(){Array.prototype.forEach.call(l.children,function(we){we.setAttribute("aria-pressed",String(we.textContent===y))});var d=Ae($.value),H=yt("Instagram");Y.textContent=B.value.length+(H?" / 2200":"")+" stafir"+(H?", "+(B.value.match(/#[^\s#]+/g)||[]).length+" / 30 myllumerki":""),Y.classList.toggle("vbt-of",H&&B.value.length>2200);var J=[];Wt().length||J.push("Veldu a\xF0 minnsta kosti einn mi\xF0il."),H&&!$.value&&J.push("Instagram \xFEarf mynd e\xF0a myndband."),$.value&&!d.t&&J.push("Sl\xF3\xF0in \xFEarf a\xF0 enda \xE1 .jpg, .png e\xF0a .mp4 (Dropbox-hlekkur \xE1 skr\xE1na sj\xE1lfa, ekki m\xF6ppu)."),H&&d.t==="mynd"&&!/^jpe?g$/.test(d.e)&&J.push("Instagram tekur bara JPG-myndir."),H&&/instagram\.com|ffm\.to|https?:\/\//.test(B.value)&&J.push("Hlekkir virka ekki \xED texta \xE1 Instagram; skrifa\xF0u \u201Ehlekkur \xED bio\u201C."),K.hidden=!H,ot(),H&&Pt().length>3&&J.push("Instagram leyfir mest 3 \xED collab.");var pt=yt("Instagram Story")||yt("Facebook Story");if(pt&&!$.value&&J.push("Story \xFEarf mynd e\xF0a myndband."),yt("Instagram Story")&&d.t==="mynd"&&!/^jpe?g$/.test(d.e)&&J.push("Instagram Story tekur bara JPG-myndir."),pt&&J.push("Textinn fer ekki me\xF0 \xED Story; hann \xFEarf a\xF0 vera \xED myndinni sj\xE1lfri (9:16)."),fe.textContent=J.join(" "),R(),be(),f.textContent="",y==="Story"){f.appendChild(ea(d));return}var N=y==="Facebook",ut=a("div","vbt-sima"+(N?" vbt-sima--fb":"")),Rt=a("div","vbt-sima-haus");Rt.appendChild(a("i"));var ke=!N&&H?Pt():[],ye=a("span","",N?F:U+(ke.length?" og "+ke.join(", "):""));N&&ye.appendChild(a("small","",p(bt.value+" "+(Mt.value||"12:00")))),Rt.appendChild(ye),ut.appendChild(Rt);var Nt=a("div","vbt-sima-texti"),xe=N?B.value:B.value.split(`
`)[0].slice(0,125);N||Nt.appendChild(a("b","",U)),Nt.appendChild(document.createTextNode(xe)),!N&&B.value.length>xe.length&&Nt.appendChild(a("span","vbt-meira","\u2026 meira")),N&&ut.appendChild(Nt);var Jt=a("div","vbt-sima-mynd");if(d.t==="mynd"){var $t=a("img");$t.src=Lt($.value),$t.alt="",Jt.appendChild($t)}else if(d.t==="myndband"){var Dt=a("video");Dt.src=Lt($.value),Dt.muted=!0,Dt.controls=!0,Dt.preload="metadata",Jt.appendChild(Dt)}else Jt.textContent=$.value?"Sl\xF3\xF0 sem er hvorki mynd n\xE9 myndband":"Engin mynd";($.value||!N)&&ut.appendChild(Jt),N||(ut.appendChild(a("div","vbt-sima-takkar","\u2661 \u25EF \u27A4")),ut.appendChild(Nt)),f.appendChild(ut)}function ea(d){var H=a("div","vbt-sima vbt-sima--story"),J=a("div","vbt-sima-mynd");if(d.t==="mynd"){var pt=a("img");pt.src=Lt($.value),pt.alt="",J.appendChild(pt)}else if(d.t==="myndband"){var N=a("video");N.src=Lt($.value),N.muted=!0,N.controls=!0,N.preload="metadata",J.appendChild(N)}else J.textContent="Engin mynd";H.appendChild(J);var ut=a("div","vbt-sima-haus");return ut.appendChild(a("i")),ut.appendChild(a("span","",yt("Instagram Story")||!yt("Facebook Story")?U:F)),H.appendChild(ut),H}function Pt(){return et.value.split(/[\s,;]+/).map(function(d){return d.replace(/^@/,"").trim().toLowerCase()}).filter(Boolean)}function he(){return JSON.stringify([Wt(),B.value,$.value.trim(),yt("Instagram")?Pt():[]])}function be(){var d=c.hopur?C.birtingar.filter(function(N){return N.id.indexOf(c.hopur+"-")===0}):[];if(Ot.hidden=!d.length,zt.textContent=d.length?"Senda inn aftur":"Senda inn",!!d.length){Xt.textContent="",d.forEach(function(N){var ut=a("li");ut.appendChild(a("span","vst-led vst-led--"+(E[N.stada]||"")));var Rt=N.stada!=="Prufa"&&N.stada!=="B\xED\xF0ur Instagram";ut.appendChild(document.createTextNode(N.midill+": "+Q(N)+(Rt&&N.nidurstada?" ("+N.nidurstada+")":""))),Xt.appendChild(ut)});var H=he()!==c.snid,J=d.every(function(N){return N.stada==="Prufa \xED lagi"}),pt=d.some(function(N){return["Villa","\xD3v\xEDst","\xDAtrunni\xF0","H\xE6tt vi\xF0"].indexOf(N.stada)!==-1});Ct.hidden=!J||H,Ct.textContent="Sta\xF0festa og t\xEDmasetja "+p(bt.value+" "+(Mt.value||"12:00")),me.textContent=H?"\xDE\xFA breyttir f\xE6rslunni eftir a\xF0 h\xFAn var send inn. Sendu hana inn aftur svo breytingin ver\xF0i yfirfarin.":pt?"Yfirfer\xF0in st\xF3\xF0st ekki. Laga\xF0u \xFEa\xF0 sem er a\xF0 og sendu inn aftur.":J?"Allt \xED lagi. Sta\xF0festu til a\xF0 t\xEDmasetja; \xFEa\xF0 m\xE1 h\xE6tta vi\xF0 \xED bi\xF0r\xF6\xF0inni \xFEanga\xF0 til.":(d.some(function(N){return/^Instagram/.test(N.midill)})?d.some(function(N){return/^Facebook/.test(N.midill)})?"Facebook og Instagram eru":"Instagram er":"Facebook er")+" a\xF0 yfirfara. \xDEa\xF0 tekur allt a\xF0 5 m\xEDn\xFAtur, myndband stundum lengur. S\xED\xF0an uppf\xE6rist sj\xE1lf."}}return M.push(be),t.addEventListener("submit",function(d){d.preventDefault(),At.textContent="",At.classList.remove("vbt-msg--ok"),zt.disabled=!0,L("birtingVista",{efni:b.id,midlar:Wt(),timi:bt.value+" "+Mt.value,texti:B.value,mynd:$.value.trim(),prufa:!0,collab:yt("Instagram")?Pt().join(","):""}).then(function(H){if(zt.disabled=!1,!H.ok){At.textContent=H.villa||"T\xF3kst ekki.";return}c.hopur=H.hopur,c.snid=he(),R(),C.birtingar=H.birtingar,lt()})}),Ct.addEventListener("click",function(){At.textContent="",Ct.disabled=!0,L("birtingStadfesta",{hopur:c.hopur,timi:bt.value+" "+Mt.value}).then(function(d){if(Ct.disabled=!1,!d.ok){At.textContent=d.villa||"T\xF3kst ekki.";return}c.hopur=null,c.skilabod="T\xEDmasett. F\xE6rslan s\xE9st \xED bi\xF0r\xF6\xF0inni efst og m\xE1 h\xE6tta vi\xF0 \xFEar.",R(),C.birtingar=d.birtingar,nt()})}),c.texti!=null?(B.value=c.texti,vt()):Z(),tt}h("gate").addEventListener("submit",function(b){b.preventDefault(),g=h("lykill").value.trim(),dt(v,g),h("gate-villa").textContent="",W("hledur"),z()}),h("uppfaera").addEventListener("click",function(){z()}),h("utskra").addEventListener("click",function(){g="",dt(v,""),W("gate")});var rt=0;setInterval(function(){if(!(!g||h("app").hidden||document.hidden)){rt++;var b=C.birtingar&&C.birtingar.some(function(c){return c.prufa&&(c.stada==="Prufa"||c.stada==="B\xED\xF0ur Instagram")});(b||rt%3===0)&&z(!0)}},2e4),g?(W("hledur"),z()):W("gate")}var Be=`<div class="vp" id="vp-admin">
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
`;function Ve(o){o.innerHTML=Be;var r="vogor-promo-key",v={en:{pressa:`Your personal promo page (stream, download, press kit):
{pressa}

Direct links:
`,beint:`Listen (private stream): {stream}
Download: {download} (MP3, FLAC or WAV)`},is:{pressa:`\xDE\xEDn pers\xF3nulega promo-s\xED\xF0a (streymi, ni\xF0urhal, pressuefni):
{pressa}

Beinir hlekkir:
`,beint:`Hlusta (loka\xF0 streymi): {stream}
S\xE6kja: {download} (MP3, FLAC e\xF0a WAV)`}};function s(t){return document.getElementById(t)}var E={},V=null,w=gt(r);function Q(t,i){return xt(Object.assign({action:t,key:w},i||{})).then(function(n){if(n.rangtLeyniord&&(w="",dt(r,""),X(!1)),!n.ok)throw new Error(n.villa||"\xD3\xFEekkt villa");return n})}function X(t){s("vp-gate").hidden=t,s("vp-app").hidden=!t}function F(t){return{pressa:E.press_page?E.press_page+"?k="+t:"",stream:E.private_stream||"",download:E.redeem?E.redeem+"?code="+t:""}}function U(t,i){return t.replace(/\{(\w+)\}/g,function(n,m){return i[m]})}function G(t,i){V=t;var n=F(t.kodi),m=v[s("vp-mal").value];s("vp-titill").textContent=t.vidtakandi+": "+t.kodi+(i?" ("+i+")":""),s("vp-blokk").value=(n.pressa?U(m.pressa,n):"")+U(m.beint,n),s("vp-afrita-hlekk").hidden=!n.pressa,s("vp-forskodun").hidden=!n.pressa,n.pressa&&(s("vp-forskodun").href=n.pressa+"&preview=1"),s("vp-nidurstada").hidden=!1}function O(t,i){var n=document.createElement("td");n.textContent=i||"-",t.appendChild(n)}function at(t){E=t.stillingar||{},s("vp-samtals").textContent=t.linur.length+" \xFAthluta\xF0, "+t.lausir+" lausir af "+t.alls;var i=s("vp-tafla").tBodies[0];i.textContent="",t.linur.forEach(function(n){var m=document.createElement("tr");O(m,n.vidtakandi),O(m,n.kodi),O(m,n.uthlutad),O(m,n.opnadSidast),O(m,n.opnanir?String(n.opnanir):""),O(m,n.hlusta),O(m,n.saekja),m.addEventListener("click",function(){G(n)}),i.appendChild(m)})}function h(){return Q("stada").then(at).catch(function(t){s("vp-samtals").textContent="Villa: "+t.message})}var I=["midill","tengilidur","netfang","flokkur","leid","fra","hver","mal","stada","efni","meginmal","notur"],g={leid:"P\xF3stur",mal:"en",stada:"Dr\xF6g"},L={Sent:"sent",Svara\u00F0:"svarad",Skoppa\u00F0i:"skoppadi",Sleppt:"sleppt"},W=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,it=/\[(BLOKK|PRESSUHLEKKUR)\]/,p=null;function u(t){return s("vp-p-"+t)}function x(t){s("vp-p-status").textContent=t||""}function C(t){return t?t.slice(0,10):""}function _(t,i){t.options.length||i.forEach(function(n){var m=document.createElement("option");m.value=n,m.textContent=n||"\u2013",t.appendChild(m)})}function A(t,i){var n=Array.prototype.some.call(t.options,function(j){return j.value===i});if(!n){var m=document.createElement("option");m.value=i,m.textContent=i,t.appendChild(m)}t.value=i}function R(t){E=t.stillingar||E,_(u("stada"),t.stodur),_(u("hver"),[""].concat(t.band)),_(u("flokkur"),[""].concat(t.flokkar||[]));var i={};t.postar.forEach(function(S){i[S.stada]=(i[S.stada]||0)+1});var n=t.stodur.filter(function(S){return i[S]}).map(function(S){return i[S]+" "+S.toLowerCase()});s("vp-postar-samtals").textContent=t.postar.length?t.postar.length+" vi\xF0takendur: "+n.join(", "):"Enginn vi\xF0takandi skr\xE1\xF0ur enn";var m=s("vp-postar").tBodies[0];m.textContent="";var j=null;t.postar.forEach(function(S){if((S.flokkur||"")!==j){j=S.flokkur||"";var Y=document.createElement("tr");Y.className="vp-flokkur";var B=document.createElement("th");B.colSpan=7,B.textContent=j||"\xD3flokka\xF0",Y.appendChild(B),m.appendChild(Y)}var Z=document.createElement("tr");L[S.stada]&&(Z.className="vp-st-"+L[S.stada]),O(Z,S.midill),O(Z,S.stada),O(Z,S.hver),O(Z,S.leid),O(Z,S.sent),O(Z,S.opnad?C(S.opnad)+(S.opnanir>1?" ("+S.opnanir+"\xD7)":""):""),O(Z,C(S.hlusta)),Z.addEventListener("click",function(){c(S)}),m.appendChild(Z)})}function M(){return Q("postar").then(R).catch(function(t){s("vp-postar-samtals").textContent="Villa: "+t.message})}function z(){var t=p||{};s("vp-post-titill").textContent=t.id?t.midill+(t.kodi?" \xB7 k\xF3\xF0i "+t.kodi:" \xB7 enginn k\xF3\xF0i"):"N\xFDr vi\xF0takandi",s("vp-p-gefa").hidden=!!t.kodi;var i=t.kodi?F(t.kodi).pressa:"";s("vp-p-forskodun").hidden=!i,i&&(s("vp-p-forskodun").href=i+"&preview=1");var n=u("leid").value==="P\xF3stur";s("vp-p-opna").textContent=n?"Opna \xED p\xF3stforriti":"Afrita og opna sl\xF3\xF0",s("vp-p-eml").hidden=!n}function nt(t){for(var i="",n=0;n<t.length;n++)i+=String.fromCharCode(t[n]);return btoa(i)}function lt(t,i){if(/^[\x20-\x7e]*$/.test(i))return t+": "+i;var n=new TextEncoder,m=[],j=[];return Array.from(i).forEach(function(S){var Y=Array.from(n.encode(S));j.length+Y.length>39&&(m.push("=?UTF-8?B?"+nt(j)+"?="),j=[]),j=j.concat(Y)}),j.length&&m.push("=?UTF-8?B?"+nt(j)+"?="),t+": "+m.join(`\r
 `)}function ct(t,i,n,m){var j=["To: "+t];W.test(i)&&j.push("From: "+i),j.push(lt("Subject",n)),j.push("X-Unsent: 1","MIME-Version: 1.0","Content-Type: text/plain; charset=UTF-8","Content-Transfer-Encoding: base64");var S=nt(new TextEncoder().encode(m.replace(/\r?\n/g,`\r
`)));return j.join(`\r
`)+`\r
\r
`+S.replace(/(.{76})/g,`$1\r
`)+`\r
`}function ft(t,i,n){var m=URL.createObjectURL(new Blob([i],{type:n})),j=document.createElement("a");j.href=m,j.download=t,document.body.appendChild(j),j.click(),j.remove(),setTimeout(function(){URL.revokeObjectURL(m)},1e3)}var rt={};function b(t){I.forEach(function(i){var n=u(i),m=t[i]||g[i]||"";n.tagName==="SELECT"?A(n,m):n.value=m,rt[i]=n.value})}function c(t){p=t,b(t),x(k()?"Hlekkir vi\xF0takandans eru komnir inn \xED textann. \u201EVista\u201C geymir hann \xFEannig.":""),z(),s("vp-post").hidden=!1,s("vp-post").scrollIntoView({block:"nearest"})}function q(){var t=!(p&&p.id),i={};return I.forEach(function(n){var m=u(n).value;(t||m!==rt[n])&&(i[n]=m)}),i}function tt(){var t=q();return p&&p.id&&(t.id=p.id),x("Vista..."),Q("postVista",{post:t}).then(function(i){return p=i.postar[0],b(p),k(),z(),x("Vista\xF0"),M().then(function(){return p})})}function D(){var t=u("meginmal").value;if(!it.test(t))return t;var i=p&&p.kodi;if(!i)return null;var n=F(i),m=v[u("mal").value]||v.en,j=(n.pressa?U(m.pressa,n):"")+U(m.beint,n);return t.split("[BLOKK]").join(j).split("[PRESSUHLEKKUR]").join(n.pressa)}function k(){var t=D();return t===null||t===u("meginmal").value?!1:(u("meginmal").value=t,!0)}function e(t){var i=D();if(i===null){x("Gef\xF0u k\xF3\xF0a fyrst: p\xF3sturinn notar [BLOKK] e\xF0a [PRESSUHLEKKUR].");return}t(i)}function l(t){x("Villa: "+t.message)}function y(t,i){t.disabled=!0,i().catch(l).then(function(){t.disabled=!1})}s("vp-post-nyr").addEventListener("click",function(){c({})}),s("vp-p-loka").addEventListener("click",function(){p=null,s("vp-post").hidden=!0}),u("leid").addEventListener("change",z),s("vp-post").addEventListener("submit",function(t){t.preventDefault(),y(s("vp-p-vista"),tt)}),s("vp-p-gefa").addEventListener("click",function(){y(this,function(){return tt().then(function(t){return Q("postGefa",{id:t.id})}).then(function(t){E=t.stillingar||E,p=t.post,z();var i=t.nyr?"N\xFDr k\xF3\xF0i: "+t.post.kodi:"Mi\xF0illinn \xE1tti k\xF3\xF0a fyrir: "+t.post.kodi,n=k();return(n?tt():Promise.resolve()).then(function(){return x(i+(n?". Hlekkirnir eru komnir inn \xED textann.":"")),Promise.all([h(),M()])})})})}),s("vp-p-opna").addEventListener("click",function(){var t=this;e(function(i){var n=u("netfang").value.trim(),m=u("fra").value;if(u("leid").value!=="P\xF3stur"){Et(i,t);var j=/^https?:\/\//i.test(n)?n:"";j&&window.open(j,"_blank","noopener"),x(j?"Meginm\xE1li\xF0 er afrita\xF0 og sl\xF3\xF0in opnu\xF0.":"Meginm\xE1li\xF0 er afrita\xF0. Engin sl\xF3\xF0 er skr\xE1\xF0.");return}if(!W.test(n)){x("Netfang vantar e\xF0a er ekki gilt.");return}var S="mailto:"+n+"?subject="+encodeURIComponent(u("efni").value)+"&body="+encodeURIComponent(i.replace(/\r?\n/g,`\r
`));x((m?"Sendu fr\xE1 "+m+". ":"")+(S.length>1900?"Langur p\xF3stur: ef meginm\xE1li\xF0 kemur klippt inn, nota\xF0u \u201ES\xE6kja sem dr\xF6g\u201C e\xF0a \u201EAfrita meginm\xE1l\u201C.":"")),location.href=S})}),s("vp-p-eml").addEventListener("click",function(){e(function(t){var i=u("netfang").value.trim();if(!W.test(i)){x("Netfang vantar e\xF0a er ekki gilt.");return}var n="Nafir - "+u("midill").value.trim().replace(/[\\/:*?"<>|]+/g," ")+".eml";ft(n,ct(i,u("fra").value,u("efni").value,t),"message/rfc822"),x("Opna\xF0u skr\xE1na "+n+": h\xFAn \xE1 a\xF0 opnast sem \xF3sendur p\xF3stur \xED p\xF3stforritinu.")})}),s("vp-p-afrita-efni").addEventListener("click",function(){Et(u("efni").value,this)}),s("vp-p-afrita-meginmal").addEventListener("click",function(){var t=this;e(function(i){Et(i,t)})}),s("vp-p-sent").addEventListener("click",function(){y(this,function(){return tt().then(function(t){return Q("postStada",{id:t.id,stada:"Sent"})}).then(function(t){return p=t.post,b(t.post),z(),x("Merkt sent "+t.post.sent),M()})})});function f(){return Promise.all([h(),M()])}s("vp-gate").addEventListener("submit",function(t){t.preventDefault(),w=s("vp-key").value.trim(),dt(r,w),s("vp-key").value="",X(!0),f()}),s("vp-gefa").addEventListener("submit",function(t){t.preventDefault();var i=s("vp-gefa-btn"),n=s("vp-status");i.disabled=!0,n.textContent="S\xE6ki k\xF3\xF0a...",Q("gefa",{vidtakandi:s("vp-nafn").value,netfang:s("vp-netfang").value}).then(function(m){return E=m.stillingar||E,G(m.lina,m.nyr?"n\xFDr k\xF3\xF0i":"\xE1tti k\xF3\xF0a fyrir"),n.textContent="",s("vp-nafn").value="",s("vp-netfang").value="",h()}).catch(function(m){n.textContent="Villa: "+m.message}).then(function(){i.disabled=!1})}),s("vp-mal").addEventListener("change",function(){V&&G(V)}),s("vp-afrita-blokk").addEventListener("click",function(){Et(s("vp-blokk").value,this)}),s("vp-afrita-hlekk").addEventListener("click",function(){Et(F(V.kodi).pressa,this)}),s("vp-uppfaera").addEventListener("click",f),s("vp-flytja-btn").addEventListener("click",function(){var t=this;t.disabled=!0,Q("flytjaInn",{texti:s("vp-innflutningur").value}).then(function(i){return s("vp-innflutningur").value="B\xE6tti vi\xF0 "+i.nyir+" k\xF3\xF0um (sett "+i.sett+"). Alls "+i.alls+".",h()}).catch(function(i){s("vp-innflutningur").value="Villa: "+i.message}).then(function(){t.disabled=!1})}),X(!!w),w&&f()}var Fe=`<div class="vpp" data-mal-bidur>
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
`;function _e(w){w.innerHTML=Fe;var r=new URLSearchParams(location.search),v=(r.get("k")||"").trim().toLowerCase(),s=r.has("preview");function E(g){return Array.prototype.slice.call(document.querySelectorAll(g))}var V="nafir-press-mal",w=document.querySelector(".vpp");function Q(g){return g==="is"||g==="en"?g:""}function X(){try{return Q(localStorage.getItem(V))}catch{return""}}var F=Q(r.get("mal"))||X();function U(g){w.setAttribute("data-mal",g),w.setAttribute("lang",g),w.removeAttribute("data-mal-bidur"),E("[data-mal-val]").forEach(function(L){L.setAttribute("aria-pressed",String(L.getAttribute("data-mal-val")===g))}),E("[data-alt-"+g+"]").forEach(function(L){L.alt=L.getAttribute("data-alt-"+g)})}E("[data-mal-val]").forEach(function(g){g.addEventListener("click",function(){F=g.getAttribute("data-mal-val");try{localStorage.setItem(V,F)}catch{}U(F)})});function G(){return/^is\b/i.test(navigator.language||"")?"is":"en"}F&&U(F),setTimeout(function(){w.hasAttribute("data-mal-bidur")&&U(G())},4e3);function O(g){E("[data-promo-state]").forEach(function(L){L.hidden=L.getAttribute("data-promo-state")!==g})}function at(g,L){return fetch(te,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(g),keepalive:!!L})}function h(g,L,W){E('[data-promo="'+g+'"]').forEach(function(it){it.href=L,!s&&it.addEventListener("click",function(){at({action:"smellur",k:v,hvad:W},!0).catch(function(){})})})}function I(g,L){w.hasAttribute("data-mal-bidur")&&U(Q(L)||G()),O(g)}if(!/^[a-z0-9]{4}-[a-z0-9]{4}$/.test(v)){I("invalid");return}O("loading"),at({action:"pressa",k:v,forskodun:s}).then(function(g){return g.json()}).then(function(g){if(!g.ok){I(g.villa?"error":"invalid");return}E('[data-promo="name"]').forEach(function(L){L.textContent=g.vidtakandi}),E('[data-promo="code"]').forEach(function(L){L.textContent=g.kodi}),h("listen",g.stream,"hlusta"),h("download",g.download,"saekja"),I("ok",g.mal||"en")}).catch(function(){I("error")})}var Ke="T\xF3nab\xED\xF3 \xB7 laugardaginn 12.&nbsp;desember kl.&nbsp;20";function wt(o){return String(o??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ie(o){return wt(o).replace(/(kl\.|\b\d+\.) (?=[a-záðéíóúýþæö\d])/g,"$1&nbsp;")}function ma(o){let r=/[.?!] /.exec(o);return r?"<b>"+ie(o.slice(0,r.index+1))+"</b> "+ie(o.slice(r.index+2)):ie(o)}function Je(o,{saga:r=!1,plakat:v=""}={}){let s=String(o.meginmal||"").trim(),E=String(o.undirskrift||"").trim(),V=String(o.heimild||"").trim(),w=r&&v?` style="--plakat: url('${wt(v)}')"`:"";return`<div class="spj${r?" spj--saga":""}"${w}><div class="urklippa"><div class="haus">Sm\xE1augl\xFDsingar <small>A\xF0venta 2026</small></div><div class="flokkur">${wt(o.flokkur)}</div><div class="rammi"><p class="meginmal${s.length>=260?" meginmal--langt":""}">${ma(s)}</p>`+(E?`<p class="undirskrift">${wt(E)}</p>`:"")+"</div>"+(V?`<p class="heimild">${wt(V)}</p>`:"")+`<div class="hvar-saga">${Ke}</div></div><div class="merki"><div class="per">Per: Segulsvi\xF0</div><div class="stund">A\xF0ventustund</div><div class="hvar">${Ke}</div></div></div>`}var Ge=`<div class="yl">
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
`;var qe=`/* \xDAtlit sm\xE1augl\xFDsingaspjaldsins hj\xE1 Per. Sama skr\xE1 teiknar spjaldi\xF0 \xE1
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
`;var Ye=`/* Yfirlestrars\xED\xF0an \xE1 /per/auglysingar (yfirlestur.js). Spjaldi\xF0 sj\xE1lft er \xED spjald.css. */
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
`;var ba="https://script.google.com/macros/s/AKfycbzQ-oaSyVQpcWQO2UkB0BkZToo-RlIdZR2Ap3iYBsb7BnAH4wkpNlWotDb_b9rdFHnG/exec",Ze="per-yfirlestur-lykill",Qe="per-yfirlestur-hver",ka="https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Roboto+Condensed:ital,wght@0,400;0,700;1,400&family=Yellowtail&display=swap",ya=["sun","m\xE1n","\xFEri","mi\xF0","fim","f\xF6s","lau"],Xe=["jan","feb","mar","apr","ma\xED","j\xFAn","j\xFAl","\xE1g\xFA","sep","okt","n\xF3v","des"],Yt=["flokkur","meginmal","undirskrift","heimild","postur","birta","stada","athugasemd"];function xa(){if(document.getElementById("per-yfirlestur-css"))return;let o=document.createElement("link");o.rel="stylesheet",o.href=ka,document.head.appendChild(o);let r=document.createElement("style");r.id="per-yfirlestur-css",r.textContent=qe+`
`+Ye,document.head.appendChild(r)}function st(o,r,v){let s=document.createElement(o);return r&&(s.className=r),v!=null&&(s.textContent=v),s}function wa(o){let r=/^(\d{4})-(\d\d)-(\d\d)$/.exec(o||"");if(!r)return"";let v=new Date(Number(r[1]),Number(r[2])-1,Number(r[3]));return ya[v.getDay()]+" "+v.getDate()+". "+Xe[v.getMonth()]}function Ca(o){let r=/^(\d{4})-(\d\d)-(\d\d) (\d\d:\d\d)/.exec(o||"");return r?Number(r[3])+". "+Xe[Number(r[2])-1]+" kl. "+r[4]:""}function We(o){xa(),o.innerHTML=Ge;let r=h=>o.querySelector('[data-yl="'+h+'"]'),{lykill:v}=jt("k",Ze),s=gt(Qe),E={auglysingar:[],stodur:[],nofn:[]},V={};function w(h,I){let g=r("stada");g.hidden=!h,g.textContent=h||"",g.classList.toggle("yl-villa",!!I)}function Q(h){return Gt(ba,{...h,k:v}).then(I=>(I.rangurLykill&&dt(Ze,""),I))}function X(h){let I=h.querySelector(".spj");if(!I){h.style.height="";return}let g=h.clientWidth/1080;h.style.height=Math.round(1350*g)+"px",I.style.transform="scale("+g+")"}let F=typeof ResizeObserver=="function"?new ResizeObserver(h=>h.forEach(I=>X(I.target))):null;function U(){let h=r("hver");for(h.hidden=!1;h.children.length>1;)h.removeChild(h.lastChild);E.nofn.forEach(I=>{let g=st("button","yl-hnappur",I);g.type="button",g.setAttribute("aria-pressed",String(I===s)),g.addEventListener("click",()=>{s=I,dt(Qe,I),U()}),h.appendChild(g)})}function G(h,I,g){let L=st("label");return L.appendChild(document.createTextNode(h)),g&&L.appendChild(st("small","",g)),L.appendChild(I),L}function O(h){let I=h,g=st("article","yl-augl"),L=st("div","yl-augl-haus"),W=st("h2"),it=st("span","yl-dags"),p=st("span","yl-merki");L.append(it,W,p),g.appendChild(L);let u=st("div","yl-augl-efni"),x=st("div","yl-forskodun");x.setAttribute("aria-label","Forsko\xF0un spjaldsins"),u.appendChild(x);let C=st("form","yl-form"),_={};function A(D,k,e){let l=st(k);return e&&(l.type=e),k==="textarea"&&(l.rows=D==="meginmal"?7:D==="postur"?5:2),_[D]=l,l}C.appendChild(G("Flokkur",A("flokkur","input","text")));let R=G("Augl\xFDsingin",A("meginmal","textarea"),"Fyrsta setningin ver\xF0ur feitletru\xF0");C.appendChild(R);let M=st("div","yl-tvennt");M.appendChild(G("Undirskrift",A("undirskrift","input","text"),"Ne\xF0st til h\xE6gri, m\xE1 vera t\xF3m")),M.appendChild(G("Sm\xE1tt letur undir",A("heimild","input","text"),"M\xE1 vera t\xF3mt")),C.appendChild(M),C.appendChild(G("Texti me\xF0 p\xF3stinum",A("postur","textarea"),"Fer \xE1 Facebook og Instagram me\xF0 myndinni"));let z=st("div","yl-tvennt");z.appendChild(G("Fer \xED lofti\xF0",A("birta","input","date")));let nt=A("stada","select");E.stodur.forEach(D=>{let k=st("option","",D);k.value=D,nt.appendChild(k)}),z.appendChild(G("Sta\xF0a",nt)),C.appendChild(z),C.appendChild(G("Athugasemd",A("athugasemd","textarea"),"Til \xD3la, fer ekki \xE1 spjaldi\xF0"));let lt=st("div","yl-adgerdir"),ct=st("button","yl-hnappur yl-hnappur--adal","Vista");ct.type="submit";let ft=st("button","yl-hnappur","Afturkalla");ft.type="button";let rt=st("p");rt.setAttribute("aria-live","polite"),lt.append(ct,ft,rt),C.appendChild(lt),u.appendChild(C),g.appendChild(u);function b(){let D={};return Yt.forEach(k=>D[k]=_[k].value),D}function c(){let D=b();return Yt.filter(k=>D[k]!==(I[k]||""))}function q(D){let k=b();W.textContent=k.flokkur||I.nafn,it.textContent=wa(k.birta)||"Engin dagsetning",p.textContent=k.stada,p.setAttribute("data-stada",k.stada);let e=k.flokkur.trim()==="P\xF3stur";R.hidden=M.hidden=e,x.innerHTML=e?'<div class="yl-posttexti"><small>P\xF3stur \xE1n spjalds'+(k.athugasemd.trim()?". "+wt(k.athugasemd.trim()):"")+"</small>"+wt(k.postur)+"</div>":Je(k),X(x);let l=c();V[I.nafn]=l.length>0,ct.disabled=ft.disabled=!l.length,D?(rt.textContent=D,rt.className=""):l.length?(rt.textContent="\xD3vista\xF0ar breytingar",rt.className="yl-obreytt"):(rt.textContent=I.breytt&&I.breyttAf?"S\xED\xF0ast vista\xF0 "+Ca(I.breytt)+" af "+I.breyttAf:"",rt.className="")}function tt(D){Yt.forEach(k=>_[k].value=D[k]||"")}return tt(h),Yt.forEach(D=>{_[D].addEventListener(D==="stada"||D==="birta"?"change":"input",()=>q())}),ft.addEventListener("click",()=>{tt(I),q()}),C.addEventListener("submit",D=>{if(D.preventDefault(),!s){q("Veldu fyrst hver \xFE\xFA ert, efst \xE1 s\xED\xF0unni."),rt.className="yl-obreytt",r("hver").scrollIntoView({behavior:"smooth",block:"center"});return}let k={};c().forEach(e=>k[e]=_[e].value),ct.disabled=ft.disabled=!0,rt.textContent="Vista \u2026",Q({action:"vista",nafn:I.nafn,hver:s,breytt:I.breytt,reitir:k}).then(e=>{if(e.arekstur){I=e.auglysing,q(e.villa),rt.className="yl-obreytt";return}if(!e.ok)throw new Error(e.rangurLykill?"Hlekkurinn gildir ekki lengur.":e.villa);I=e.auglysing,tt(I),q()}).catch(e=>{q("T\xF3kst ekki a\xF0 vista. "+e.message),rt.className="yl-obreytt"})}),F&&F.observe(x),setTimeout(q,0),g}function at(){let h=r("listi");h.innerHTML="";let I=L=>L.birta||"9999",g=E.auglysingar.slice().sort((L,W)=>I(L)<I(W)?-1:I(L)>I(W)?1:0);g.forEach(L=>h.appendChild(O(L))),w(g.length?"":"Engar augl\xFDsingar komnar inn enn\xFE\xE1.")}if(window.addEventListener("beforeunload",h=>{Object.values(V).some(Boolean)&&(h.preventDefault(),h.returnValue="")}),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>o.querySelectorAll(".yl-forskodun").forEach(X)),!v){w("\xDEessi s\xED\xF0a opnast me\xF0 hlekknum sem \xD3li sendi. Biddu hann um hlekkinn.",!0);return}Q({action:"lesa"}).then(h=>{if(!h.ok){w(h.rangurLykill?"Hlekkurinn gildir ekki. Biddu \xD3la um n\xFDjan.":"Villa: "+h.villa,!0);return}E=h,E.nofn.indexOf(s)===-1&&(s=""),U(),at()}).catch(h=>w(h.message+" Reyndu a\xF0 endurhla\xF0a s\xED\xF0una.",!0))}var ja={stada:Ie,birta:Ue,stjorn:Ve,pressa:_e,yfirlestur:We},Sa={stada:!0,birta:!0,stjorn:!0,yfirlestur:!0},Ea={stada:!0,birta:!0,pressa:!0};function $e(){let o=document.querySelectorAll("[data-nafir]");if(o.length){if(!document.getElementById("nafir-css")){let r=document.createElement("style");r.id="nafir-css",r.textContent=Ce,document.head.appendChild(r)}document.querySelector('[data-verkefni]:not([data-verkefni="nafir"])')||Pe(),o.forEach(function(r){let v=r.getAttribute("data-nafir"),s=ja[v];if(!(!s||r.hasAttribute("data-nafir-raest"))&&(r.setAttribute("data-nafir-raest",""),Ea[v]&&document.body.classList.add("nafir-beige"),s(r),Sa[v])){let E=r.getAttribute("data-verkefni")==="per"?"per":"nafir";(r.querySelector(".yl-innri")||r.firstElementChild||r).prepend(Te(E))}})}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",$e):$e();})();
//# sourceMappingURL=nafir.js.map
