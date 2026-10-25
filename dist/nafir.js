(()=>{var Qt=`/* Nafir-s\xED\xF0urnar: yfirlit bandsins (.vst) og birtingars\xED\xF0an (.vbt).
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
  .vst-dymo { font-family: Dymo, Arial, sans-serif; font-size: 1.625rem; line-height: 1.4; color: var(--black-800, #2e2e2e); user-select: none; margin-bottom: .75rem; }
  .vst-head .vst-dymo { margin-bottom: 0; }
  .vst-dymo--red { color: var(--vogor-red, #75161c); font-size: 2rem; }
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
    .vst-dymo--red { font-size: 1.5rem; }
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
  .vbt-head .vst-dymo { margin-bottom: 0; }
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
  .vbt-stjorn label { display: grid; gap: .2rem; font-size: .6875rem; font-weight: 700; text-transform: uppercase; letter-spacing: .1em; }
  .vbt-stjorn input, .vbt-stjorn select, .vbt-stjorn textarea { font: inherit; font-size: .9375rem; text-transform: none; letter-spacing: 0; font-weight: 400; color: inherit; background: #ffffff8c; border: 1px solid #2e2e2e40; border-radius: .25rem; padding: .4rem .55rem; width: 100%; box-sizing: border-box; }
  .vbt-stjorn textarea { min-height: 10rem; resize: vertical; line-height: 1.5; }
  .vbt-tvo { display: grid; grid-template-columns: 1fr 1fr; gap: .6rem; }
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
`;var Yt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAABK2lDQ1BJQ0MgUHJvZmlsZQAAeJyVkT9Lw0AYh5+LouKgFUQcHDKJgmKjDmZMq4ggWKtD2635Q5TSJFyuaj+Eo1sHF3c/gZOj4KD4CfwGilMHuUTI4FD6LPfcj5f37t4Do+zsVw6MEnQjJeuHFbPRbJnTr0wxQUbbSxOnVjvWHsVRwD9+PhB6fdvUvRiPWS+RChgC236QeiDKQOdaJQrEAFh0O5k/apfn9SqIZ2AuzP1du5v7p3bZaLZAfOv6MHNjJuuT+4p2Fdzoc6nGSV9ehhfKtGzbNh0/dgPzrJ+qoJuaR5EXyySWbRX4QH6/jIW8UE9szbLtvfUx3z0S/Q+5fZ1m8xVLL0VW4PXk1Z8KY2f0vugxWIaTB5gcFtnuLdxvwPxdka1aUNqCp8EvwMZP/XkTGdQAAAkJSURBVHjaBcHJjl3XdQDQffpz29dWR7JKRVEUZUmG4ViwJs7ACdL8RwIE/jUPMs3EgBHACALEUgDHUSRDJEWx+nrdfe92p9s7a7Hf/Ppzc3ppiqKWYtXsVfK7fXO12QOwhCg4JwYAwBA4ZwCMAI/zQkn+7eP+etcqxurCvr3f/dMvbTumr2/VyWIy+hFiaClnAFIGRyl0fecR0bu+P1CIR7kZU4op1LmdZrXW3AJiSpqDYrzxqfX4tDbzadm2/VTAvZKaw4uFnufAtItIGuj9wRmKMiVGKXYhAmLFotBMkAjOF4VhzHIQTQgUOSXctX2u2K/O50CEwGcoDTEvxfnE/LDrXj+4yymAFOh6YLBPWPA++CQlwHa9efLBJQClbte1EZHyzD728cNpnUvugZwLXUJB9Paxvd31XxwVp9OCoUgJtm0fa73I1e9+6DCOmKJk3BOLREjAEMWnH55hUQsi8GNdFIXUA7Kv39wJH54fzQDRO284t1pVWpxXph3df13vqsKeVsX9vu2GMWestPKzD6YxBOecVUJJIQTTgnEgCUyWWSa5SBET0dOLS7ndvdo0F4tpndlDcMt6BgRZpmLvb7f7nz01Rm3/8G6FICqjLuosEhJyjclKRghMMG00S4iIgCi+eH7GlJpNaptnhTUJOQVX5tl8MkEibWxRl0WuXcA8My5i46OVYje4ZnDLTAvBGheBgVRsd3Db1gkOjIsizzJjGBHXRjPO3dArBvsRc82dc1pKxtjAeDktOGFmVZ2bAeHseHE0qUyeX85qRnC173cuVpkmxro+WiEYYwTMu8gABjfGGCT5FBR2PLJ+yIpq045911d5po0sOVOMlBH7NhzXNhHc94EbM+UEwXNMd4OzCqTkglQYhplRCZErxYXgTAffMQbSt12f6PLiYzK02m2MkALYNNMQY8aBIwEwK1nTO2SggIQRY+Q203kviqiEYDGilIJrpaMnxjmDSck638YQhQAOiDMIYnfnu/FuvSsY5ZnmTOxbt9oPWsrcCj+MPCUew2kuJUAEMEpHhsgQmUoJKUTOBCPQnBiGfTOG/iBYohj5QAQhrHY324frQittdVUXXDKj2NQqI9hufRj7UTHGkIiLSmtLhCmWmXHOIwMlBY/JaDZfVL0LzRhaHwaPY4jtGGQboxZUlIUU/Lvrh3ldHktZl6pGdbdugcF90wcGV1ePg/fLujzKzejiEOIQqVDcu1HUed+PLMKrTxdfrs7afkSPPhERZpkUXz5b9EQnZf7y4vSrqxWkWGU2JQJgzTA6F5bL6X++vf63//6f1w/br3+4VQrO57O73v3H97fN6LXgk9w4Hy8mdrbMfvJ0NomkZZ1Zq4FOMsV9ojrLLOHpLPvF5dn72w0hCqVer/blZHLvEgL8+qcvPnn29Mkk74b++/td54IA6Pr+vtn/5X7rU5rmhgAyq99/d/PVm/19jFufmLY360H86vzY5ryQ1AK8fP7BH795r3J9Opvc7ppvbm6UtXOtS2sWi3kb8MmsfHUyn0p+uagT583ovEvPFpOjPOMMz0/st3++9dJsvXu33nYJreLy4mTKoPMxZT5ux8RyHZrd5jFfH4bTcvLydJkxGAZXc3i1LGfZ7Nhmj83hD29uq9xeTCc7E1xMxuon04x7TyHm0r6QHK3auL7Thkc2emmMzp7lcnh4OHly7FAcS5clfLduNvtxJN7HuNu3S62jw/0Qv7pe/+sfv1kduo9nhaG07rppJc6mWaaExLR6XFejm0hxapUjEn//aiGJoZDnp0utxKDyq95bhIvFZOXifdMRYKE4EK36vu36u3b439uHrhsWk4IH93p7+PKjk786n9097OZHlsf053fbA3BP6QC8CST+5ZefExcrx1gS8zp/tpAHZq+33UVVXJ4ulaIu4KKwjKDOsrO63IfU+TB6/+K4vG3Di+PZP3x+IZEMD1wRaH22KFquxkRdoqVioioyz+Jffwj9PnXZ4otP7O0BVwdcFkJpzYSYKFlnejkpHlvHBGcI8zK/PD0Z3GiN+psXk9McuhFynvKaA3JbmvO5+WBpXh5nr84y+ds/vfu7z5b/vMhERD1Zh1AttOdC5pOceZJMFLl6t2kMZwLxvl3dtWtM/OBViPjhkbEydlHe927OfRpEM6R9F9uQXIyAaXBRLjO1d9ljL/dBlC27en339kbtutBjNVXiqFTbXfuXm+35PM+pP2M//GLeEolIbNPnyqoLjtv16sf71Njq4U1732KuRW645mIMCPlERkqa871/clJ99/XDcQIYg5eMdp2rZ5MfN61M8dOPziohDh3JbrwECIL/qRWXFZ1pNxxuU6qeT8uth6Nc7WKyAkolJeOZsVTUEkAI6NClLSuVfHzfVG3qzqpiOwSIG2SCM+iH0TEVxvbn0nlPCmjq+LeBjwWvJNuQefQKMLQ+WiUkJA2YkHGtPBKPxDPqz+13//doH0eBnJo+vVs3Y4jrtofgAiSKYd/trZn8mGZvqHgvy1cnNpC+xlJVM0FpKQdDjoCFBI4pEDKlGP2AwYtpaeZ5FuXpqGeC6YCJcbY+jJnRLqZvfrzRnDfdcLPerfbdtatu4uJxZP/+yH9/KyaTkmWLx5HfHtL1AEakn+W7Mz1UtC9Yp+I2G++lYNQRvx3gZrud5ubIKM7gcpkTOWPFIZP3TSsBRh9zJTbtuKK0sfy6EwurTox+vQ1j4JzbEb3k8aPCbRyOETFSxhA5yhSJU/jby2rP5lf7bjwMFwLuUNz1o2sOJ7VeD8kIfpZVrQ9rSF0QRGmR8X/87Gml1fXNmjOmpFCSDyE54ol4wvi2oYdMVzJK4OSjCFH1h02duGZs45NMNOVi0GazdyPjbULGUQIeWWUxVDw+P84XpX3/eKi04QIjUm5MDYMAyICuMTZWcAQAI5EIgCQQS8Eww4EGxr7v+sgo5zwlJIyFkpXgixBLxE6kFEeZhEQqhDyqjaR0s2mU5B/PSpm2GfKksejZzT6aqZQIEBPGGDCGGJFzNuNwLmGTMCZaSPYuwBJwlujlT14U1hQ296Epp4Wy5aui3F5dNYcmZgZNVhUt7KmQchTwyOiTfPI+uv8HxIutAeRDZhQAAAAASUVORK5CYII=";function ft(y){try{return localStorage.getItem(y)||""}catch{return""}}function at(y,g){try{g?localStorage.setItem(y,g):localStorage.removeItem(y)}catch{}}function At(y,g){let x=new URL(location.href),s=(x.searchParams.get(y)||"").trim();if(!s)return{lykill:ft(g),nyr:!1};at(g,s),x.searchParams.delete(y);try{history.replaceState(history.state,"",x.href)}catch{}return{lykill:s,nyr:!0}}var Xt="Ekkert samband.";function Wt(y,g){return fetch(y,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(g)}).then(x=>x.json().catch(()=>{throw new Error("Bakendinn svara\xF0i ekki eins og hann \xE1 a\xF0 gera.")}),()=>{throw new Error(Xt)})}var fa="https://script.google.com/macros/s/AKfycbw_fE_lhJqAbaLME9HlFK0A5LG_VL502y0AeKwSyC6A_fmCnRonmV4fAMfD3Pllg-_b/exec",ma="https://script.google.com/macros/s/AKfycbyHTw5yNxSQ48jXRgyBaRf58Tfox5MirIsKOJS0VzXPeGCfsa3ceZ05FoUALRyaHD-W/exec",Ot=new URLSearchParams(location.search).has("prufa")?ma:fa,Tt=["jan","feb","mar","apr","ma\xED","j\xFAn","j\xFAl","\xE1g\xFA","sep","okt","n\xF3v","des"],_t="https://script.google.com/macros/s/AKfycbzhu2dxScQqe5HT7wZZpdpOntDxWffkgORO0n7YH9fLs0K39h9g6LVUUXICe6F93iI2/exec";function mt(y,g){return Wt(g||Ot,y)}function e(y,g,x){var s=document.createElement(y);return g&&(s.className=g),x!=null&&(s.textContent=x),s}function kt(y,g,x){var s=e("a",g,x);return s.href=y,s.target="_blank",s.rel="noopener",s}function yt(y,g){g.hasAttribute("data-merki")||g.setAttribute("data-merki",g.textContent);function x(){g.textContent="Afrita\xF0",g.classList.add("vst-afritad"),setTimeout(function(){g.textContent=g.getAttribute("data-merki"),g.classList.remove("vst-afritad")},1500)}function s(){var A=e("textarea");A.value=y,A.setAttribute("readonly",""),A.style.position="fixed",A.style.opacity="0",document.body.appendChild(A),A.select();try{document.execCommand("copy")&&x()}catch{}document.body.removeChild(A)}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(y).then(x,s):s()}function Rt(y,g){var x=e("button","vst-afrita",g||"Afrita");return x.type="button",x.setAttribute("data-merki",x.textContent),x.addEventListener("click",function(){yt(y,x)}),x}function xt(y){try{var g=new URL(y);return/(^|\.)dropbox\.com$/.test(g.hostname)?(g.searchParams.delete("dl"),g.searchParams.set("raw","1"),g.href):y}catch{return y}}function $t(y){var g=/\.([a-z0-9]+)$/i.exec(String(y||"").split(/[?#]/)[0]),x=g?g[1].toLowerCase():"";return{e:x,t:/^(jpe?g|png|gif|webp)$/.test(x)?"mynd":/^(mp4|mov|m4v)$/.test(x)?"myndband":""}}function ta(){Array.prototype.forEach.call(document.querySelectorAll('link[rel~="icon"]'),function(g){g.parentNode.removeChild(g)});var y=document.createElement("link");y.rel="icon",y.type="image/png",y.href=Yt,document.head.appendChild(y)}var aa=`<div class="vst">
  <div class="vst-head">
    <div class="vst-dymo vst-dymo--red">|NAFIR|YFIRLIT|</div>
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
    <section class="vst-screen">
      <div class="vst-screen-row">
        <span class="vst-screen-label">Verk loki\xF0</span>
        <span class="vst-screen-value" data-st="hlutfall"></span>
      </div>
      <div class="vst-meter" data-st="maelir" role="img"></div>
    </section>

    <section>
      <div class="vst-dymo">|N\xC6ST|\xC1|DAGSKR\xC1|</div>
      <p class="vst-small vst-hint">Breyttu st\xF6\xF0u verks e\xF0a hver \xE1 \xFEa\xF0 me\xF0 fellilistunum. Breytingin vistast strax.</p>
      <p class="vst-small vst-msg" data-st="skilabod" role="status"></p>
      <ul class="vst-list" data-st="naest"></ul>
    </section>

    <section data-st="meta-kafli" hidden>
      <div class="vst-dymo">|FACEBOOK|INSTAGRAM|</div>
      <div class="vst-counts vst-hint" data-st="fylgjendur"></div>
      <div class="vst-scroll">
        <table class="vst-table">
          <thead><tr><th>Birt</th><th>Mi\xF0ill</th><th>Tegund</th><th>Texti</th><th>N\xE1</th><th>\xC1horf</th><th>Vi\xF0br\xF6g\xF0</th></tr></thead>
          <tbody data-st="meta"></tbody>
        </table>
      </div>
      <p class="vst-small">S\xF3tt af s\xED\xF0unni og Instagram \xE1 6 t\xEDma fresti, s\xED\xF0ast <span data-st="meta-sott"></span>. N\xE1 er hve margir s\xE1u f\xE6rsluna, vi\xF0br\xF6g\xF0 eru l\xEDkar, umm\xE6li, deilingar og vistanir. Stories lifa \xED s\xF3larhring og sj\xE1st h\xE9r ef \xFE\xE6r n\xE1\xF0ust.</p>
    </section>

    <section data-st="efni-kafli" hidden>
      <div class="vst-dymo">|EFNI|</div>
      <p class="vst-small vst-hint">Textar, hlekkir og myndir til a\xF0 deila. Smelltu \xE1 hnapp til a\xF0 afrita. F\xE6rslur \xE1 samf\xE9lagsmi\xF0la m\xE1 laga h\xE9r og merkja \xFEegar \xFE\xE6r eru farnar \xFAt. Bio og lagatextar eru laga\xF0ir hj\xE1 \xD3la.</p>
      <label class="vst-small vst-eg">Hver ert \xFE\xFA? <select data-st="eg"></select></label>
      <div class="vst-groups" data-st="efni"></div>
    </section>

    <section>
      <div class="vst-dymo">|\xD6LL|VERKEFNI|</div>
      <div class="vst-groups" data-st="hopar"></div>
    </section>

    <section>
      <div class="vst-dymo">|PRESSA|</div>
      <div class="vst-scroll">
        <table class="vst-table">
          <thead><tr><th>Mi\xF0ill</th><th>Sta\xF0a</th><th>Hver</th><th>Sent</th><th>Opna\xF0i s\xED\xF0una</th><th>Hlusta\xF0i</th><th>S\xF3tti</th></tr></thead>
          <tbody data-st="pressa"></tbody>
        </table>
      </div>
      <p class="vst-small">Markh\xF3purinn: mi\xF0lar sem vi\xF0 \xE6tlum a\xF0 senda \xE1 og \xFEeir sem hafa \xFEegar fengi\xF0 p\xF3st. Opnun, hlustun og ni\xF0urhal sj\xE1st hj\xE1 \xFEeim sem fengu pers\xF3nulegan hlekk \xE1 pressus\xED\xF0una.</p>
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
`;function ea(y){y.innerHTML=aa;var g="vogor-band-key",x="vogor-band-nafn",s={Loki\u00F0:"done","\xCD vinnslu":"work",B\u00ED\u00F0ur:"hold"},A=["\xD3byrja\xF0","\xCD vinnslu","B\xED\xF0ur","Loki\xF0"],Y={Sent:"sent",Svara\u00F0:"svarad",Skoppa\u00F0i:"skoppadi",Sleppt:"sleppt"};function S(a){return y.querySelector('[data-st="'+a+'"]')}function z(a){Array.prototype.forEach.call(y.querySelectorAll("[data-st-state]"),function(i){i.hidden=i.getAttribute("data-st-state")!==a})}var Z=At("b",g).lykill;function F(a){var i=/^(\d{4})-(\d\d)-(\d\d)$/.exec(a||"");return i?new Date(Number(i[1]),Number(i[2])-1,Number(i[3])):null}function P(a){var i=F(a);return i?i.getDate()+". "+Tt[i.getMonth()]:a||""}var W=new Date;W.setHours(0,0,0,0);function R(a){var i=F(a);return i?Math.round((i-W)/864e5):null}function N(a,i,m){var d=R(i);d!=null&&(S("dagar-"+a).textContent=d>0?d:"0",S("texti-"+a).textContent=d>1?"dagar \xED "+m:d===1?"dagur \xED "+m:d===0?m+" \xED dag":m+" komi\xF0")}function G(a){var i=a.stada==="Loki\xF0",m=R(a.frestur),d=!i&&m!=null&&m<0,p=e("li",i?"vst-lokid":d?"vst-seint":""),t=e("span","vst-led"+(d?" vst-led--late":s[a.stada]?" vst-led--"+s[a.stada]:""));t.title=d?a.stada+", komi\xF0 fram yfir frest":a.stada,p.appendChild(t);var n=e("span","vst-verk",a.verk);a.notur&&!i&&n.appendChild(e("small","",a.notur)),p.appendChild(n);var r=e("span","vst-val");return r.appendChild(_(a,"stada",A,"Sta\xF0a verksins: ")),r.appendChild(_(a,"hver",[""].concat(E.band||[]),"Hver \xE1 verki\xF0: ")),p.appendChild(r),p.appendChild(e("span","vst-frestur",P(a.frestur))),p}function _(a,i,m,d){var p=e("select");return p.setAttribute("aria-label",d+a.verk),m.indexOf(a[i])===-1&&(m=m.concat([a[i]])),m.forEach(function(t){var n=e("option","",t||"Enginn");n.value=t,p.appendChild(n)}),p.value=a[i],p.addEventListener("change",function(){w(a,i,p)}),p}function w(a,i,m){var d={action:"bandBreyta",b:Z,rod:a.rod,verk:a.verk};d[i]=m.value,m.disabled=!0,S("skilabod").textContent="",mt(d).then(function(p){if(!p.ok)throw new Error(p.villa||"Hlekkurinn gildir ekki lengur.");a.hver=p.hver,a.stada=p.stada}).catch(function(p){S("skilabod").textContent="T\xF3kst ekki a\xF0 vista. "+p.message}).then(function(){tt(E)})}var E={};function tt(a){E=a,N("preorder",a.preorder,"pre-order"),N("utgafa",a.utgafa,"\xFAtg\xE1fu");var i=a.verkefni.length,m=a.verkefni.filter(function(b){return b.stada==="Loki\xF0"}).length;S("hlutfall").textContent=m+" / "+i;var d=S("maelir");d.textContent="",d.setAttribute("aria-label",m+" af "+i+" verkum loki\xF0");for(var p=0;p<i;p++)d.appendChild(e("span",p<m?"on":""));var t=S("naest");t.textContent="",a.verkefni.filter(function(b){return b.stada!=="Loki\xF0"&&F(b.frestur)}).sort(function(b,f){return F(b.frestur)-F(f.frestur)}).slice(0,7).forEach(function(b){t.appendChild(G(b))}),t.children.length||t.appendChild(e("li","","Ekkert \xE1 dagskr\xE1 me\xF0 fresti."));var n=S("hopar"),r={};Array.prototype.forEach.call(n.children,function(b){r[b.getAttribute("data-flokkur")]=b.open}),n.textContent="";var l=[],h={};a.verkefni.forEach(function(b){var f=b.flokkur||"Anna\xF0";h[f]||(h[f]=[],l.push(f)),h[f].push(b)}),l.forEach(function(b){var f=h[b],V=f.filter(function(q){return q.stada==="Loki\xF0"}).length,J=e("details","vst-group");J.setAttribute("data-flokkur",b),J.open=b in r?r[b]:V<f.length;var X=e("summary");X.appendChild(e("span","",b)),X.appendChild(e("span","",V+"/"+f.length)),J.appendChild(X);var lt=e("ul");f.forEach(function(q){lt.appendChild(G(q))}),J.appendChild(lt),n.appendChild(J)});var c=S("pressa");c.textContent="";var O=null,H=a.pressa.some(function(b){return b.flokkur});if(a.pressa.forEach(function(b){if(H&&(b.flokkur||"")!==O){O=b.flokkur||"";var f=e("tr","vst-flokkur"),V=e("th","",O||"\xD3flokka\xF0");V.colSpan=7,f.appendChild(V),c.appendChild(f)}var J=e("tr",Y[b.stada||"Sent"]?"vst-st-"+Y[b.stada||"Sent"]:"");J.appendChild(e("td","",b.midill)),J.appendChild(e("td","",b.stada||"Sent")),J.appendChild(e("td","",b.hver||"\u2013")),J.appendChild(e("td","",P(b.sent)||"\u2013")),J.appendChild(e("td","",b.opnad?P(b.opnad)+(b.opnanir>1?" ("+b.opnanir+"\xD7)":""):"\u2013")),J.appendChild(e("td","",P(b.hlusta)||"\u2013")),J.appendChild(e("td","",P(b.saekja)||"\u2013")),c.appendChild(J)}),!a.pressa.length){var j=e("td","","Enginn \xE1 markh\xF3pslistanum enn\xFE\xE1.");j.colSpan=7,c.appendChild(e("tr")).appendChild(j)}k(a.band||[]),rt(a.meta),K(a.efni||[]),a.stream?S("stream").href=a.stream:S("stream").hidden=!0,S("uppfaert").textContent=a.uppfaert}var pt=/\.(jpe?g|png|gif|webp)$/i,B=/\.(mp4|mov|m4v|webm)$/i,C="Samf\xE9lagsmi\xF0lar",U=["Dr\xF6g","Sam\xFEykkt","P\xF3sta\xF0","Sleppa"],it={P\u00F3sta\u00F0:"postad",Sleppa:"sleppa"};function st(a){try{var i=new URL(a);return{nafn:decodeURIComponent(i.pathname.split("/").pop()||""),dropbox:/(^|\.)dropbox\.com$/.test(i.hostname),u:i}}catch{return{nafn:"",dropbox:!1,u:null}}}function ct(a){var i=st(a.slod),m=e("div","vst-slod");if(pt.test(i.nafn)){var d=e("img","vst-mynd");d.src=xt(a.slod),d.alt=a.heiti||"",d.loading="lazy";var p=kt(a.slod);p.appendChild(d),m.appendChild(p),m.appendChild(kt(a.slod,"vst-afrita","Opna \xED fullri st\xE6r\xF0"))}else if(i.dropbox){var t=/\/fo\//.test(i.u.pathname)?"Mappa \xED Dropbox":(B.test(i.nafn)?"Myndband: ":"Dropbox: ")+i.nafn;m.appendChild(kt(a.slod,"",t))}else m.appendChild(kt(a.slod,"",a.slod.replace(/^https?:\/\/(www\.)?/,"")));return m.appendChild(Rt(a.slod,"Afrita hlekk")),m}function et(a,i){var m=e("button","vst-afrita"+(i?" "+i:""),a);return m.type="button",m}function nt(a){return a.b=Z,mt(a).catch(function(i){return{ok:!1,villa:i.message}})}function Q(){return S("eg").value}function ot(a,i){for(var m=E.efni||[],d=0;d<m.length;d++)m[d].id===a.id&&(m[d]=a);var p=gt(a);return i.parentNode.replaceChild(p,i),p}function gt(a){var i=a.flokkur===C,m=!/^md-/.test(a.id),d=e("article","vst-but"+(i&&it[a.stada]?" vst-but-"+it[a.stada]:"")),p=e("div","vst-but-haus");p.appendChild(e("span","vst-but-heiti",a.heiti||"\xC1n heitis"));var t=e("span","vst-but-hlid");if(a.birta){var n=R(a.birta),r=a.stada==="P\xF3sta\xF0"||a.stada==="Sleppa",l=i&&!r&&n!=null&&n<0;t.appendChild(e("span","vst-but-birta"+(n===0?" vst-idag":"")+(l?" vst-but-seint":""),n===0?"\xCD dag":P(a.birta)+(l?", ekki p\xF3sta\xF0":""))),n!=null&&n<0&&(!i||r)&&d.classList.add("vst-but-lidid")}if(i&&m&&a.birta){var h=e("select");h.setAttribute("aria-label","Sta\xF0a f\xE6rslunnar "+(a.heiti||"")),U.forEach(function(f){var V=e("option","",f);V.value=f,h.appendChild(V)}),h.value=a.stada||U[0],h.addEventListener("change",function(){if(!Q()){h.value=a.stada,ht(d,"Veldu hver \xFE\xFA ert efst \xED Efni.");return}h.disabled=!0,nt({action:"bandEfniVista",id:a.id,hver:Q(),reitir:{stada:h.value}}).then(function(f){f.ok?ot(f.but,d):(h.disabled=!1,h.value=a.stada,ht(d,f.villa))})}),t.appendChild(h)}if(m){var c=et("Breyta","vst-but-takki");c.addEventListener("click",function(){v(a,d)}),t.appendChild(c)}p.appendChild(t),d.appendChild(p);var O=E.meta?E.meta.faerslur.filter(function(f){return f.efni===a.id}):[];if(O.length){var H=e("p","vst-but-meta");O.forEach(function(f){H.appendChild(kt(f.hlekkur,"",f.midill+": "+(f.na!=null?"n\xE1 "+f.na+", ":"")+f.vidbrogd+" vi\xF0br\xF6g\xF0"))}),d.appendChild(H)}a.slod&&d.appendChild(ct(a));var j=[["is","\xCDslenska"],["en","English"]].filter(function(f){return a[f[0]]});if(j.length){var b=e("div","vst-maltextar");j.forEach(function(f){var V=e("div","vst-maltexti");j.length>1&&V.appendChild(e("span","vst-mal",f[1])),V.appendChild(e("pre","vst-texti",a[f[0]])),V.appendChild(Rt(a[f[0]])),b.appendChild(V)}),d.appendChild(b)}return a.notur&&d.appendChild(e("p","vst-but-notur",a.notur)),a.breyttAf&&a.breytt&&d.appendChild(e("p","vst-but-breytt","S\xED\xF0ast breytt af "+a.breyttAf+", "+P(a.breytt.slice(0,10))+" kl. "+a.breytt.slice(11,16))),d}function ht(a,i){var m=a.querySelector(".vst-msg")||a.appendChild(e("p","vst-small vst-msg"));m.textContent=i||""}function v(a,i){var m=a.flokkur===C,d=a,p=e("form","vst-but vst-form vst-but-form");p.appendChild(e("span","vst-but-heiti","Breyta: "+(a.heiti||"\xC1n heitis")));function t(j,b,f,V,J,X){var lt=e("label","",j),q=e(f,J||"");return f==="input"&&(q.type=b==="birta"?"date":"text"),q.name=b,q.value=V||"",lt.appendChild(q),X&&lt.appendChild(e("small","",X)),lt}p.appendChild(t("Heiti","heiti","input",a.heiti));var n=e("div","vst-form-rod");if(n.appendChild(t("Birta","birta","input",a.birta)),m){var r=e("label","","Sta\xF0a"),l=e("select");l.name="stada",U.forEach(function(j){var b=e("option","",j);b.value=j,l.appendChild(b)}),l.value=a.stada||U[0],r.appendChild(l),n.appendChild(r)}p.appendChild(n),p.appendChild(t("\xCDslenska","is","textarea",a.is)),p.appendChild(t("English","en","textarea",a.en)),p.appendChild(t("Mynd e\xF0a myndband","slod","input",a.slod,"","Dropbox-hlekkur \xE1 skr\xE1na e\xF0a m\xF6ppuna, e\xF0a sl\xF3\xF0 \xE1 mynd.")),p.appendChild(t("N\xF3tur","notur","textarea",a.notur,"vst-stutt","Hva\xF0a mynd fylgir, hvar \xE1 a\xF0 p\xF3sta, o.s.frv."));var h=e("div","vst-form-takkar"),c=et("Vista");c.type="submit";var O=et("H\xE6tta vi\xF0","vst-but-takki");h.appendChild(c),h.appendChild(O),p.appendChild(h);var H=p.appendChild(e("p","vst-small vst-msg"));O.addEventListener("click",function(){ot(d,p)}),p.addEventListener("submit",function(j){if(j.preventDefault(),H.textContent="",!Q()){H.textContent="Veldu hver \xFE\xFA ert efst \xED Efni.";return}var b={};["heiti","birta","stada","is","en","slod","notur"].forEach(function(f){p.elements[f]&&(b[f]=p.elements[f].value)}),c.disabled=!0,c.textContent="Vista...",nt({action:"bandEfniVista",id:a.id,hver:Q(),breytt:d.breytt,reitir:b}).then(function(f){if(c.disabled=!1,c.textContent="Vista",f.ok){ot(f.but,p);return}f.arekstur&&f.but&&(d=f.but),H.textContent=f.villa||"T\xF3kst ekki a\xF0 vista."})}),i.parentNode.replaceChild(p,i),p.elements.heiti.focus()}function o(a,i){return(a.birta?1:0)-(i.birta?1:0)||(a.birta<i.birta?-1:a.birta>i.birta?1:0)}var I="vogor-efni-opid";function K(a){var i=S("efni");if(S("efni-kafli").hidden=!a.length,!!a.length&&!i.querySelector(".vst-but-form")){var m={};try{m=JSON.parse(localStorage.getItem(I)||"{}")||{}}catch{}i.textContent="";var d=[],p={};a.forEach(function(t){var n=t.flokkur||"Anna\xF0";p[n]||(p[n]=[],d.push(n)),p[n].push(t)}),d.forEach(function(t){var n=e("details","vst-group");n.open=!!m[t];var r=e("summary");r.appendChild(e("span","",t));var l=String(p[t].length);if(t===C){var h=p[t].filter(function(j){return j.birta&&j.stada!=="Sleppa"}),c=h.filter(function(j){return j.stada==="P\xF3sta\xF0"}).length;l=c+"/"+h.length+" p\xF3sta\xF0ar",p[t].sort(o)}r.appendChild(e("span","",l)),n.appendChild(r);var O=e("div","vst-efni");if(p[t].forEach(function(j){O.appendChild(gt(j))}),t===C){var H=et("N\xFD f\xE6rsla","vst-but-takki");H.addEventListener("click",function(){if(!Q()){H.textContent="Veldu fyrst hver \xFE\xFA ert";return}H.disabled=!0,nt({action:"bandEfniNytt",hver:Q(),flokkur:C}).then(function(j){if(H.disabled=!1,!j.ok){H.textContent=j.villa||"T\xF3kst ekki";return}E.efni.push(j.but);var b=gt(j.but);O.insertBefore(b,H),v(j.but,b)})}),O.appendChild(H)}n.appendChild(O),n.addEventListener("toggle",function(){m[t]=n.open;try{localStorage.setItem(I,JSON.stringify(m))}catch{}}),i.appendChild(n)})}}function rt(a){if(S("meta-kafli").hidden=!a,!!a){var i=a.fylgjendur||{},m=S("fylgjendur");m.textContent="",[["fb","Facebook"],["ig","Instagram"]].forEach(function(n){if(i[n[0]]!=null){var r=e("div","vst-count");r.appendChild(e("span","vst-counter",String(i[n[0]])));var l=i[n[0]+"Breyting"];r.appendChild(e("span","","fylgjendur \xE1 "+n[1]+(l!=null?" ("+(l>=0?"+":"")+l+" fr\xE1 "+P(i.fra)+")":""))),m.appendChild(r)}});var d={};(E.efni||[]).forEach(function(n){d[n.id]=n.heiti});var p=S("meta");if(p.textContent="",a.faerslur.forEach(function(n){var r=e("tr");r.appendChild(e("td","",P(n.birt.slice(0,10))+" "+n.birt.slice(11,16))),r.appendChild(e("td","",n.midill)),r.appendChild(e("td","",n.tegund));var l=e("td","vst-meta-texti"),h=d[n.efni]?d[n.efni]:n.texti||n.tegund;l.appendChild(n.hlekkur?kt(n.hlekkur,"",h):e("span","",h)),l.title=n.texti,r.appendChild(l),[n.na,n.ahorf,n.vidbrogd].forEach(function(c){r.appendChild(e("td","vst-tala",c==null?"\u2013":String(c)))}),p.appendChild(r)}),!a.faerslur.length){var t=e("td","","Engar f\xE6rslur fundust fr\xE1 1. okt\xF3ber.");t.colSpan=7,p.appendChild(e("tr")).appendChild(t)}S("meta-sott").textContent=a.sott||"aldrei"}}function k(a){var i=S("eg"),m=i.value;m||(m=ft(x)),i.textContent="",[""].concat(a.filter(function(d){return d!=="Allir"})).forEach(function(d){var p=e("option","",d||"Veldu nafn");p.value=d,i.appendChild(p)}),i.value=a.indexOf(m)!==-1?m:""}S("eg").addEventListener("change",function(){at(x,this.value)});function D(){return mt({action:"bandStada",b:Z}).then(function(a){if(a.rangurLykill){at(g,""),z("invalid");return}if(!a.ok){S("villa").textContent=a.villa||"\xD3\xFEekkt villa.",z("error");return}tt(a),z("ok")}).catch(function(a){S("villa").textContent=a.message+" Pr\xF3fa\xF0u a\xF0 endurhla\xF0a s\xED\xF0una.",z("error")})}if(S("uppfaera").addEventListener("click",function(){var a=this;a.disabled=!0,D().then(function(){a.disabled=!1})}),!Z){z("invalid");return}z("loading"),D()}var na=`<div class="vbt">
  <div class="vbt-head">
    <div class="vst-dymo vst-dymo--red">|NAFIR|BIRTA|</div>
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
      <div class="vst-dymo">|BIDROD|</div>
      <ul class="vbt-rod" data-bt="rod"></ul>
      <p class="vbt-small">Tv\xF6 skref: \u201ESenda inn\u201C l\xE6tur Facebook og Instagram yfirfara myndina og textann (ekkert er birt), og \u201ESta\xF0festa og t\xEDmasetja\u201C opnast \xFEegar yfirfer\xF0in hefur sta\xF0ist. F\xE6rslan fer \xFAt \xED s\xED\xF0asta lagi 5 m\xEDn\xFAtum eftir t\xEDmann og \xFEa\xF0 m\xE1 h\xE6tta vi\xF0 h\xE9r \xFEanga\xF0 til.</p>
    </section>

    <section>
      <div class="vst-dymo">|FAERSLUR|</div>
      <p class="vbt-small vbt-hint">Textunum er breytt \xE1 <a data-bt="yfirlit" href="/nafir/stada" target="_blank" rel="noopener">yfirliti bandsins</a>. H\xE9r velur\xF0u hva\xF0a texti fer \xE1 hvorn mi\xF0il, og textann m\xE1 laga fyrir \xFEessa birtingu \xE1n \xFEess a\xF0 breyta f\xE6rslunni.</p>
      <div class="vbt-listi" data-bt="faerslur"></div>
    </section>

    <p class="vbt-small">S\xF3tt <span data-bt="sott"></span>. <button class="vbt-link" type="button" data-bt="uppfaera">Uppf\xE6ra</button> \xB7 <button class="vbt-link" type="button" data-bt="utskra">Skr\xE1 \xFAt</button></p>
  </div>
</div>
`;function ra(y){y.innerHTML=na;var g=y.getAttribute("data-verkefni")||"",x=g?"vogor-birta-"+g:"vogor-promo-key",s="vogor-birta-mal",A={Birt:"ok","Prufa \xED lagi":"ok",T\u00EDmasett:"bid",Prufa:"prufa","B\xED\xF0ur Instagram":"bid",Sendi:"bid",Villa:"villa",\u00D3v\u00EDst:"villa",\u00DAtrunni\u00F0:"villa"},Y=["T\xEDmasett","Prufa","B\xED\xF0ur Instagram"],S={Prufa:"\xCD yfirfer\xF0","Prufa \xED lagi":"Yfirfer\xF0 \xED lagi"};function z(v){return v.prufa&&S[v.stada]||v.stada}var Z=["Facebook","Instagram","Instagram Story","Facebook Story"],F="Stafr\xE6nn H\xE1kon",P="stafraennhakon",W=["is","en"];function R(v){if(v){Z=v.midlar||Z,F=v.sidaNafn||F,P=v.igNafn||P,W=v.tungumal||W;var o=y.querySelector(".vbt-head .vst-dymo");o&&v.titill&&(o.textContent="|"+v.titill+"|BIRTA|");var I=N("yfirlit");I&&v.yfirlit&&(I.href=v.yfirlit,I.textContent="yfirlestrars\xED\xF0unni")}}function N(v){return y.querySelector('[data-bt="'+v+'"]')}var G=At("l",x).lykill;function _(v,o){var I=Object.assign({action:v,key:G},o||{});return g&&(I.verkefni=g),mt(I,g?_t:null).then(function(K){return K.rangtLeyniord&&(G="",at(x,""),w("gate")),K}).catch(function(K){return{ok:!1,villa:K.message}})}function w(v){N("gate").hidden=v!=="gate",N("hledur").hidden=v!=="hledur",N("app").hidden=v!=="app"}function E(v){return v?new Date(v.replace(" ","T")+":00Z"):null}function tt(v){var o=E(v);return o?o.getUTCDate()+". "+Tt[o.getUTCMonth()]+" "+v.slice(11,16):""}function pt(v){var o=Math.round((E(v)-Date.now())/6e4);if(o<=0)return"n\xFAna";if(o<60)return o+" m\xEDn";if(o<2880)return Math.floor(o/60)+" klst "+o%60+" m\xEDn";var I=Math.round(o/1440);return I+(I===1?" dag":" daga")}function B(v){var o=Math.round((E(v)-Date.now())/6e4);return o<60?Math.max(o,0)+" m\xEDn":o<2880?Math.round(o/60)+" klst":Math.round(o/1440)+" dagar"}var C={},U="vogor-birta-drog",it={};try{it=JSON.parse(sessionStorage.getItem(U)||"{}")||{}}catch{}function st(){try{sessionStorage.setItem(U,JSON.stringify(it))}catch{}}var ct=[];function et(v){return _("birtingar").then(function(o){if(!o.ok){o.rangtLeyniord||(w("gate"),N("gate-villa").textContent=o.villa||"N\xE1\xF0i ekki \xED g\xF6gnin.");return}C=o,R(o.verkefni),v===!0?Q():nt(),w("app")})}function nt(){ct=[],Q();var v=N("faerslur");v.textContent="",C.faerslur.slice().sort(function(o,I){return o.birta.localeCompare(I.birta)}).forEach(function(o){v.appendChild(gt(o))})}function Q(){var v={};C.faerslur.forEach(function(k){v[k.id]=k.heiti});var o=C.birtingar.filter(function(k){return Y.indexOf(k.stada)!==-1}).sort(function(k,D){return k.timi.localeCompare(D.timi)}),I=C.birtingar.filter(function(k){return Y.indexOf(k.stada)===-1&&k.stada!=="H\xE6tt vi\xF0"}).sort(function(k,D){return D.timi.localeCompare(k.timi)}).slice(0,15),K=N("rod");K.textContent="",o.concat(I).forEach(function(k){var D=e("li",Y.indexOf(k.stada)===-1?"vbt-buid":"");D.appendChild(e("span","vst-led vst-led--"+(A[k.stada]||""))),D.appendChild(e("span","vbt-timi",tt(k.timi))),D.appendChild(e("span","",k.midill));var a=e("span","vbt-heiti",(k.prufa?"Yfirfer\xF0: ":"")+(v[k.efni]||k.efni)),i=e("small");if(k.stada==="Birt"&&k.nidurstada){var m=e("a","","Birt, opna f\xE6rsluna");m.href=k.nidurstada,m.target="_blank",m.rel="noopener",i.appendChild(m)}else i.textContent=(k.stada==="T\xEDmasett"?"Fer \xFAt eftir "+pt(k.timi):z(k)+(k.nidurstada?": "+k.nidurstada:""))+(k.hver&&k.hver!==C.eg?" \xB7 "+k.hver:"");a.appendChild(i),D.appendChild(a),Y.indexOf(k.stada)!==-1?D.appendChild(ot(k)):D.appendChild(e("span")),K.appendChild(D)}),K.children.length||K.appendChild(e("li","","Ekkert \xED bi\xF0r\xF6\xF0 enn\xFE\xE1."));var rt=o.filter(function(k){return!k.prufa})[0];N("naesta").textContent=rt?B(rt.timi):"--",N("naesta-texti").textContent=rt?"\xED n\xE6stu birtingu":"ekkert \xED bi\xF0r\xF6\xF0",N("sott").textContent=C.nu+(C.eg?", innskr\xE1\xF0(ur): "+C.eg:""),ct.forEach(function(k){k()})}function ot(v){var o=e("button","vbt-btn vbt-btn--ljos","H\xE6tta vi\xF0");return o.type="button",o.addEventListener("click",function(){o.disabled=!0,_("birtingHaetta",{id:v.id}).then(function(I){I.ok?(C.birtingar=I.birtingar,Q()):(o.disabled=!1,alert(I.villa))})}),o}function gt(v){var o=it[v.id]||(it[v.id]={}),I=v.stada==="P\xF3sta\xF0",K=e("article","vbt-kort"+(I?" vbt-kort--postad":"")),rt=e("div","vbt-kort-haus");rt.appendChild(e("b","",v.heiti));var k=E(v.birta+" 00:00");rt.appendChild(e("span","vbt-merki",k.getUTCDate()+". "+Tt[k.getUTCMonth()]+" \xB7 "+v.stada)),K.appendChild(rt);var D=e("div","vbt-forsk"),a=e("div","vbt-skipta"),i=Z.indexOf("Instagram")!==-1?"Instagram":"Facebook";["Instagram","Facebook","Story"].filter(function(u){return u!=="Instagram"||Z.indexOf("Instagram")!==-1}).forEach(function(u){var L=e("button","",u);L.type="button",L.addEventListener("click",function(){i=u,dt()}),a.appendChild(L)}),D.appendChild(a);var m=e("div");D.appendChild(m),K.appendChild(D);var d=e("form","vbt-stjorn"),p=e("div","vbt-midlar"),t={};Z.forEach(function(u){var L=e("label"),M=e("input");M.type="checkbox",M.checked=o[u]!==void 0?o[u]:!/ Story$/.test(u),t[u]=M,L.appendChild(M),L.appendChild(document.createTextNode(u)),p.appendChild(L),M.addEventListener("change",function(){o[u]=M.checked,dt()})}),d.appendChild(p);var n=e("label","","Texti"),r=e("select");[["en","English"],["is","\xCDslenska"],["baedi","\xCDslenska og enska"]].forEach(function(u){var L=e("option","",u[1]);L.value=u[0],r.appendChild(L)}),r.value=W.length===1?W[0]:o.mal||ft(s)||"en",n.hidden=W.length===1,n.appendChild(r),d.appendChild(n);var l=e("label","","Textinn sem fer \xFAt "),h=e("span","vbt-teljari");l.appendChild(h);var c=e("textarea");l.appendChild(c),d.appendChild(l);function O(){c.value=r.value==="is"?v.is:r.value==="en"?v.en:[v.is,v.en].filter(Boolean).join(`

`),o.texti=c.value,dt()}r.addEventListener("change",function(){o.mal=r.value,at(s,r.value),O()}),c.addEventListener("input",function(){o.texti=c.value,dt()});var H=e("label","","Collab \xE1 Instagram ");H.appendChild(e("span","vbt-teljari","mest 3, a\xF0skilin me\xF0 kommu"));var j=e("input");j.value=o.collab||"",j.placeholder="t.d. magnus, arnithor",H.appendChild(j),d.appendChild(H),j.addEventListener("input",function(){o.collab=j.value,dt()});var b=e("label","","Mynd e\xF0a myndband"),f=e("input");f.value=o.mynd!=null?o.mynd:v.slod||"",f.placeholder="Dropbox-hlekkur \xE1 .jpg e\xF0a .mp4",b.appendChild(f),d.appendChild(b),f.addEventListener("input",function(){o.mynd=f.value}),f.addEventListener("change",dt);var V=e("div","vbt-tvo"),J=e("label","","Dagur"),X=e("input");X.type="date",X.value=o.dagur||v.birta,X.addEventListener("change",function(){o.dagur=X.value,dt()}),J.appendChild(X);var lt=e("label","","Klukkan"),q=e("input");q.type="time",q.value=o.klukka||"12:00",q.addEventListener("change",function(){o.klukka=q.value,dt()}),lt.appendChild(q),V.appendChild(J),V.appendChild(lt),d.appendChild(V);var zt=e("p","vbt-adv");d.appendChild(zt);var Ft=e("div","vbt-takkar"),Ct=e("button","vbt-btn","Senda inn");Ct.type="submit",Ft.appendChild(Ct),d.appendChild(Ft);var jt=e("div","vbt-yfirferd"),Ht=e("ul","vbt-fyrri"),Dt=e("p","vbt-small"),bt=e("button","vbt-btn vbt-btn--stadfesta","Sta\xF0festa");bt.type="button",jt.appendChild(Ht),jt.appendChild(Dt),jt.appendChild(bt),d.appendChild(jt);var wt=e("p","vbt-msg"+(o.skilabod?" vbt-msg--ok":""),o.skilabod||"");o.skilabod="",d.appendChild(wt);var Ut=C.birtingar.filter(function(u){return u.efni===v.id&&!u.prufa&&u.stada!=="H\xE6tt vi\xF0"});if(Ut.length){var Bt=e("ul","vbt-fyrri");Ut.forEach(function(u){var L=e("li");L.appendChild(e("span","vst-led vst-led--"+(A[u.stada]||""))),L.appendChild(document.createTextNode(u.midill+": "+u.stada+(u.stada==="T\xEDmasett"?" "+tt(u.timi):"")+(u.hver?" \xB7 "+u.hver:""))),Bt.appendChild(L)}),d.appendChild(Bt)}var pa=C.meta?C.meta.faerslur.filter(function(u){return u.efni===v.id}):[];pa.forEach(function(u){d.appendChild(e("p","vbt-teljari",u.midill+": "+(u.na!=null?"n\xE1 "+u.na+", ":"")+(u.ahorf!=null?"\xE1horf "+u.ahorf+", ":"")+u.vidbrogd+" vi\xF0br\xF6g\xF0"))}),K.appendChild(d);function ut(u){return!!(t[u]&&t[u].checked)}function Mt(){return Z.filter(function(u){return t[u].checked})}function dt(){Array.prototype.forEach.call(a.children,function(Zt){Zt.setAttribute("aria-pressed",String(Zt.textContent===i))});var u=$t(f.value),L=ut("Instagram");h.textContent=c.value.length+(L?" / 2200":"")+" stafir"+(L?", "+(c.value.match(/#[^\s#]+/g)||[]).length+" / 30 myllumerki":""),h.classList.toggle("vbt-of",L&&c.value.length>2200);var M=[];Mt().length||M.push("Veldu a\xF0 minnsta kosti einn mi\xF0il."),L&&!f.value&&M.push("Instagram \xFEarf mynd e\xF0a myndband."),f.value&&!u.t&&M.push("Sl\xF3\xF0in \xFEarf a\xF0 enda \xE1 .jpg, .png e\xF0a .mp4 (Dropbox-hlekkur \xE1 skr\xE1na sj\xE1lfa, ekki m\xF6ppu)."),L&&u.t==="mynd"&&!/^jpe?g$/.test(u.e)&&M.push("Instagram tekur bara JPG-myndir."),L&&/instagram\.com|ffm\.to|https?:\/\//.test(c.value)&&M.push("Hlekkir virka ekki \xED texta \xE1 Instagram; skrifa\xF0u \u201Ehlekkur \xED bio\u201C."),H.hidden=!L,L&&It().length>3&&M.push("Instagram leyfir mest 3 \xED collab.");var vt=ut("Instagram Story")||ut("Facebook Story");if(vt&&!f.value&&M.push("Story \xFEarf mynd e\xF0a myndband."),ut("Instagram Story")&&u.t==="mynd"&&!/^jpe?g$/.test(u.e)&&M.push("Instagram Story tekur bara JPG-myndir."),vt&&M.push("Textinn fer ekki me\xF0 \xED Story; hann \xFEarf a\xF0 vera \xED myndinni sj\xE1lfri (9:16)."),zt.textContent=M.join(" "),st(),Vt(),m.textContent="",i==="Story"){m.appendChild(ua(u));return}var T=i==="Facebook",$=e("div","vbt-sima"+(T?" vbt-sima--fb":"")),St=e("div","vbt-sima-haus");St.appendChild(e("i"));var Jt=!T&&L?It():[],Gt=e("span","",T?F:P+(Jt.length?" og "+Jt.join(", "):""));T&&Gt.appendChild(e("small","",tt(X.value+" "+(q.value||"12:00")))),St.appendChild(Gt),$.appendChild(St);var Et=e("div","vbt-sima-texti"),qt=T?c.value:c.value.split(`
`)[0].slice(0,125);T||Et.appendChild(e("b","",P)),Et.appendChild(document.createTextNode(qt)),!T&&c.value.length>qt.length&&Et.appendChild(e("span","vbt-meira","\u2026 meira")),T&&$.appendChild(Et);var Pt=e("div","vbt-sima-mynd");if(u.t==="mynd"){var Nt=e("img");Nt.src=xt(f.value),Nt.alt="",Pt.appendChild(Nt)}else if(u.t==="myndband"){var Lt=e("video");Lt.src=xt(f.value),Lt.muted=!0,Lt.controls=!0,Lt.preload="metadata",Pt.appendChild(Lt)}else Pt.textContent=f.value?"Sl\xF3\xF0 sem er hvorki mynd n\xE9 myndband":"Engin mynd";(f.value||!T)&&$.appendChild(Pt),T||($.appendChild(e("div","vbt-sima-takkar","\u2661 \u25EF \u27A4")),$.appendChild(Et)),m.appendChild($)}function ua(u){var L=e("div","vbt-sima vbt-sima--story"),M=e("div","vbt-sima-mynd");if(u.t==="mynd"){var vt=e("img");vt.src=xt(f.value),vt.alt="",M.appendChild(vt)}else if(u.t==="myndband"){var T=e("video");T.src=xt(f.value),T.muted=!0,T.controls=!0,T.preload="metadata",M.appendChild(T)}else M.textContent="Engin mynd";L.appendChild(M);var $=e("div","vbt-sima-haus");return $.appendChild(e("i")),$.appendChild(e("span","",ut("Instagram Story")||!ut("Facebook Story")?P:F)),L.appendChild($),L}function It(){return j.value.split(/[\s,;]+/).map(function(u){return u.replace(/^@/,"").trim().toLowerCase()}).filter(Boolean)}function Kt(){return JSON.stringify([Mt(),c.value,f.value.trim(),ut("Instagram")?It():[]])}function Vt(){var u=o.hopur?C.birtingar.filter(function(T){return T.id.indexOf(o.hopur+"-")===0}):[];if(jt.hidden=!u.length,Ct.textContent=u.length?"Senda inn aftur":"Senda inn",!!u.length){Ht.textContent="",u.forEach(function(T){var $=e("li");$.appendChild(e("span","vst-led vst-led--"+(A[T.stada]||"")));var St=T.stada!=="Prufa"&&T.stada!=="B\xED\xF0ur Instagram";$.appendChild(document.createTextNode(T.midill+": "+z(T)+(St&&T.nidurstada?" ("+T.nidurstada+")":""))),Ht.appendChild($)});var L=Kt()!==o.snid,M=u.every(function(T){return T.stada==="Prufa \xED lagi"}),vt=u.some(function(T){return["Villa","\xD3v\xEDst","\xDAtrunni\xF0","H\xE6tt vi\xF0"].indexOf(T.stada)!==-1});bt.hidden=!M||L,bt.textContent="Sta\xF0festa og t\xEDmasetja "+tt(X.value+" "+(q.value||"12:00")),Dt.textContent=L?"\xDE\xFA breyttir f\xE6rslunni eftir a\xF0 h\xFAn var send inn. Sendu hana inn aftur svo breytingin ver\xF0i yfirfarin.":vt?"Yfirfer\xF0in st\xF3\xF0st ekki. Laga\xF0u \xFEa\xF0 sem er a\xF0 og sendu inn aftur.":M?"Allt \xED lagi. Sta\xF0festu til a\xF0 t\xEDmasetja; \xFEa\xF0 m\xE1 h\xE6tta vi\xF0 \xED bi\xF0r\xF6\xF0inni \xFEanga\xF0 til.":(u.some(function(T){return/^Instagram/.test(T.midill)})?u.some(function(T){return/^Facebook/.test(T.midill)})?"Facebook og Instagram eru":"Instagram er":"Facebook er")+" a\xF0 yfirfara. \xDEa\xF0 tekur allt a\xF0 5 m\xEDn\xFAtur, myndband stundum lengur. S\xED\xF0an uppf\xE6rist sj\xE1lf."}}return ct.push(Vt),d.addEventListener("submit",function(u){u.preventDefault(),wt.textContent="",wt.classList.remove("vbt-msg--ok"),Ct.disabled=!0,_("birtingVista",{efni:v.id,midlar:Mt(),timi:X.value+" "+q.value,texti:c.value,mynd:f.value.trim(),prufa:!0,collab:ut("Instagram")?It().join(","):""}).then(function(L){if(Ct.disabled=!1,!L.ok){wt.textContent=L.villa||"T\xF3kst ekki.";return}o.hopur=L.hopur,o.snid=Kt(),st(),C.birtingar=L.birtingar,Q()})}),bt.addEventListener("click",function(){wt.textContent="",bt.disabled=!0,_("birtingStadfesta",{hopur:o.hopur,timi:X.value+" "+q.value}).then(function(u){if(bt.disabled=!1,!u.ok){wt.textContent=u.villa||"T\xF3kst ekki.";return}o.hopur=null,o.skilabod="T\xEDmasett. F\xE6rslan s\xE9st \xED bi\xF0r\xF6\xF0inni efst og m\xE1 h\xE6tta vi\xF0 \xFEar.",st(),C.birtingar=u.birtingar,nt()})}),o.texti!=null?(c.value=o.texti,dt()):O(),K}N("gate").addEventListener("submit",function(v){v.preventDefault(),G=N("lykill").value.trim(),at(x,G),N("gate-villa").textContent="",w("hledur"),et()}),N("uppfaera").addEventListener("click",function(){et()}),N("utskra").addEventListener("click",function(){G="",at(x,""),w("gate")});var ht=0;setInterval(function(){if(!(!G||N("app").hidden||document.hidden)){ht++;var v=C.birtingar&&C.birtingar.some(function(o){return o.prufa&&(o.stada==="Prufa"||o.stada==="B\xED\xF0ur Instagram")});(v||ht%3===0)&&et(!0)}},2e4),G?(w("hledur"),et()):w("gate")}var ia=`<div class="vp" id="vp-admin">
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
`;function sa(y){y.innerHTML=ia;var g="vogor-promo-key",x={en:{pressa:`Your personal promo page (stream, download, press kit):
{pressa}

Direct links:
`,beint:`Listen (private stream): {stream}
Download: {download} (MP3, FLAC or WAV)`},is:{pressa:`\xDE\xEDn pers\xF3nulega promo-s\xED\xF0a (streymi, ni\xF0urhal, pressuefni):
{pressa}

Beinir hlekkir:
`,beint:`Hlusta (loka\xF0 streymi): {stream}
S\xE6kja: {download} (MP3, FLAC e\xF0a WAV)`}};function s(t){return document.getElementById(t)}var A={},Y=null,S=ft(g);function z(t,n){return mt(Object.assign({action:t,key:S},n||{})).then(function(r){if(r.rangtLeyniord&&(S="",at(g,""),Z(!1)),!r.ok)throw new Error(r.villa||"\xD3\xFEekkt villa");return r})}function Z(t){s("vp-gate").hidden=t,s("vp-app").hidden=!t}function F(t){return{pressa:A.press_page?A.press_page+"?k="+t:"",stream:A.private_stream||"",download:A.redeem?A.redeem+"?code="+t:""}}function P(t,n){return t.replace(/\{(\w+)\}/g,function(r,l){return n[l]})}function W(t,n){Y=t;var r=F(t.kodi),l=x[s("vp-mal").value];s("vp-titill").textContent=t.vidtakandi+": "+t.kodi+(n?" ("+n+")":""),s("vp-blokk").value=(r.pressa?P(l.pressa,r):"")+P(l.beint,r),s("vp-afrita-hlekk").hidden=!r.pressa,s("vp-forskodun").hidden=!r.pressa,r.pressa&&(s("vp-forskodun").href=r.pressa+"&preview=1"),s("vp-nidurstada").hidden=!1}function R(t,n){var r=document.createElement("td");r.textContent=n||"-",t.appendChild(r)}function N(t){A=t.stillingar||{},s("vp-samtals").textContent=t.linur.length+" \xFAthluta\xF0, "+t.lausir+" lausir af "+t.alls;var n=s("vp-tafla").tBodies[0];n.textContent="",t.linur.forEach(function(r){var l=document.createElement("tr");R(l,r.vidtakandi),R(l,r.kodi),R(l,r.uthlutad),R(l,r.opnadSidast),R(l,r.opnanir?String(r.opnanir):""),R(l,r.hlusta),R(l,r.saekja),l.addEventListener("click",function(){W(r)}),n.appendChild(l)})}function G(){return z("stada").then(N).catch(function(t){s("vp-samtals").textContent="Villa: "+t.message})}var _=["midill","tengilidur","netfang","flokkur","leid","fra","hver","mal","stada","efni","meginmal","notur"],w={leid:"P\xF3stur",mal:"en",stada:"Dr\xF6g"},E={Sent:"sent",Svara\u00F0:"svarad",Skoppa\u00F0i:"skoppadi",Sleppt:"sleppt"},tt=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,pt=/\[(BLOKK|PRESSUHLEKKUR)\]/,B=null;function C(t){return s("vp-p-"+t)}function U(t){s("vp-p-status").textContent=t||""}function it(t){return t?t.slice(0,10):""}function st(t,n){t.options.length||n.forEach(function(r){var l=document.createElement("option");l.value=r,l.textContent=r||"\u2013",t.appendChild(l)})}function ct(t,n){var r=Array.prototype.some.call(t.options,function(h){return h.value===n});if(!r){var l=document.createElement("option");l.value=n,l.textContent=n,t.appendChild(l)}t.value=n}function et(t){A=t.stillingar||A,st(C("stada"),t.stodur),st(C("hver"),[""].concat(t.band)),st(C("flokkur"),[""].concat(t.flokkar||[]));var n={};t.postar.forEach(function(c){n[c.stada]=(n[c.stada]||0)+1});var r=t.stodur.filter(function(c){return n[c]}).map(function(c){return n[c]+" "+c.toLowerCase()});s("vp-postar-samtals").textContent=t.postar.length?t.postar.length+" vi\xF0takendur: "+r.join(", "):"Enginn vi\xF0takandi skr\xE1\xF0ur enn";var l=s("vp-postar").tBodies[0];l.textContent="";var h=null;t.postar.forEach(function(c){if((c.flokkur||"")!==h){h=c.flokkur||"";var O=document.createElement("tr");O.className="vp-flokkur";var H=document.createElement("th");H.colSpan=7,H.textContent=h||"\xD3flokka\xF0",O.appendChild(H),l.appendChild(O)}var j=document.createElement("tr");E[c.stada]&&(j.className="vp-st-"+E[c.stada]),R(j,c.midill),R(j,c.stada),R(j,c.hver),R(j,c.leid),R(j,c.sent),R(j,c.opnad?it(c.opnad)+(c.opnanir>1?" ("+c.opnanir+"\xD7)":""):""),R(j,it(c.hlusta)),j.addEventListener("click",function(){K(c)}),l.appendChild(j)})}function nt(){return z("postar").then(et).catch(function(t){s("vp-postar-samtals").textContent="Villa: "+t.message})}function Q(){var t=B||{};s("vp-post-titill").textContent=t.id?t.midill+(t.kodi?" \xB7 k\xF3\xF0i "+t.kodi:" \xB7 enginn k\xF3\xF0i"):"N\xFDr vi\xF0takandi",s("vp-p-gefa").hidden=!!t.kodi;var n=t.kodi?F(t.kodi).pressa:"";s("vp-p-forskodun").hidden=!n,n&&(s("vp-p-forskodun").href=n+"&preview=1");var r=C("leid").value==="P\xF3stur";s("vp-p-opna").textContent=r?"Opna \xED p\xF3stforriti":"Afrita og opna sl\xF3\xF0",s("vp-p-eml").hidden=!r}function ot(t){for(var n="",r=0;r<t.length;r++)n+=String.fromCharCode(t[r]);return btoa(n)}function gt(t,n){if(/^[\x20-\x7e]*$/.test(n))return t+": "+n;var r=new TextEncoder,l=[],h=[];return Array.from(n).forEach(function(c){var O=Array.from(r.encode(c));h.length+O.length>39&&(l.push("=?UTF-8?B?"+ot(h)+"?="),h=[]),h=h.concat(O)}),h.length&&l.push("=?UTF-8?B?"+ot(h)+"?="),t+": "+l.join(`\r
 `)}function ht(t,n,r,l){var h=["To: "+t];tt.test(n)&&h.push("From: "+n),h.push(gt("Subject",r)),h.push("X-Unsent: 1","MIME-Version: 1.0","Content-Type: text/plain; charset=UTF-8","Content-Transfer-Encoding: base64");var c=ot(new TextEncoder().encode(l.replace(/\r?\n/g,`\r
`)));return h.join(`\r
`)+`\r
\r
`+c.replace(/(.{76})/g,`$1\r
`)+`\r
`}function v(t,n,r){var l=URL.createObjectURL(new Blob([n],{type:r})),h=document.createElement("a");h.href=l,h.download=t,document.body.appendChild(h),h.click(),h.remove(),setTimeout(function(){URL.revokeObjectURL(l)},1e3)}var o={};function I(t){_.forEach(function(n){var r=C(n),l=t[n]||w[n]||"";r.tagName==="SELECT"?ct(r,l):r.value=l,o[n]=r.value})}function K(t){B=t,I(t),U(a()?"Hlekkir vi\xF0takandans eru komnir inn \xED textann. \u201EVista\u201C geymir hann \xFEannig.":""),Q(),s("vp-post").hidden=!1,s("vp-post").scrollIntoView({block:"nearest"})}function rt(){var t=!(B&&B.id),n={};return _.forEach(function(r){var l=C(r).value;(t||l!==o[r])&&(n[r]=l)}),n}function k(){var t=rt();return B&&B.id&&(t.id=B.id),U("Vista..."),z("postVista",{post:t}).then(function(n){return B=n.postar[0],I(B),a(),Q(),U("Vista\xF0"),nt().then(function(){return B})})}function D(){var t=C("meginmal").value;if(!pt.test(t))return t;var n=B&&B.kodi;if(!n)return null;var r=F(n),l=x[C("mal").value]||x.en,h=(r.pressa?P(l.pressa,r):"")+P(l.beint,r);return t.split("[BLOKK]").join(h).split("[PRESSUHLEKKUR]").join(r.pressa)}function a(){var t=D();return t===null||t===C("meginmal").value?!1:(C("meginmal").value=t,!0)}function i(t){var n=D();if(n===null){U("Gef\xF0u k\xF3\xF0a fyrst: p\xF3sturinn notar [BLOKK] e\xF0a [PRESSUHLEKKUR].");return}t(n)}function m(t){U("Villa: "+t.message)}function d(t,n){t.disabled=!0,n().catch(m).then(function(){t.disabled=!1})}s("vp-post-nyr").addEventListener("click",function(){K({})}),s("vp-p-loka").addEventListener("click",function(){B=null,s("vp-post").hidden=!0}),C("leid").addEventListener("change",Q),s("vp-post").addEventListener("submit",function(t){t.preventDefault(),d(s("vp-p-vista"),k)}),s("vp-p-gefa").addEventListener("click",function(){d(this,function(){return k().then(function(t){return z("postGefa",{id:t.id})}).then(function(t){A=t.stillingar||A,B=t.post,Q();var n=t.nyr?"N\xFDr k\xF3\xF0i: "+t.post.kodi:"Mi\xF0illinn \xE1tti k\xF3\xF0a fyrir: "+t.post.kodi,r=a();return(r?k():Promise.resolve()).then(function(){return U(n+(r?". Hlekkirnir eru komnir inn \xED textann.":"")),Promise.all([G(),nt()])})})})}),s("vp-p-opna").addEventListener("click",function(){var t=this;i(function(n){var r=C("netfang").value.trim(),l=C("fra").value;if(C("leid").value!=="P\xF3stur"){yt(n,t);var h=/^https?:\/\//i.test(r)?r:"";h&&window.open(h,"_blank","noopener"),U(h?"Meginm\xE1li\xF0 er afrita\xF0 og sl\xF3\xF0in opnu\xF0.":"Meginm\xE1li\xF0 er afrita\xF0. Engin sl\xF3\xF0 er skr\xE1\xF0.");return}if(!tt.test(r)){U("Netfang vantar e\xF0a er ekki gilt.");return}var c="mailto:"+r+"?subject="+encodeURIComponent(C("efni").value)+"&body="+encodeURIComponent(n.replace(/\r?\n/g,`\r
`));U((l?"Sendu fr\xE1 "+l+". ":"")+(c.length>1900?"Langur p\xF3stur: ef meginm\xE1li\xF0 kemur klippt inn, nota\xF0u \u201ES\xE6kja sem dr\xF6g\u201C e\xF0a \u201EAfrita meginm\xE1l\u201C.":"")),location.href=c})}),s("vp-p-eml").addEventListener("click",function(){i(function(t){var n=C("netfang").value.trim();if(!tt.test(n)){U("Netfang vantar e\xF0a er ekki gilt.");return}var r="Nafir - "+C("midill").value.trim().replace(/[\\/:*?"<>|]+/g," ")+".eml";v(r,ht(n,C("fra").value,C("efni").value,t),"message/rfc822"),U("Opna\xF0u skr\xE1na "+r+": h\xFAn \xE1 a\xF0 opnast sem \xF3sendur p\xF3stur \xED p\xF3stforritinu.")})}),s("vp-p-afrita-efni").addEventListener("click",function(){yt(C("efni").value,this)}),s("vp-p-afrita-meginmal").addEventListener("click",function(){var t=this;i(function(n){yt(n,t)})}),s("vp-p-sent").addEventListener("click",function(){d(this,function(){return k().then(function(t){return z("postStada",{id:t.id,stada:"Sent"})}).then(function(t){return B=t.post,I(t.post),Q(),U("Merkt sent "+t.post.sent),nt()})})});function p(){return Promise.all([G(),nt()])}s("vp-gate").addEventListener("submit",function(t){t.preventDefault(),S=s("vp-key").value.trim(),at(g,S),s("vp-key").value="",Z(!0),p()}),s("vp-gefa").addEventListener("submit",function(t){t.preventDefault();var n=s("vp-gefa-btn"),r=s("vp-status");n.disabled=!0,r.textContent="S\xE6ki k\xF3\xF0a...",z("gefa",{vidtakandi:s("vp-nafn").value,netfang:s("vp-netfang").value}).then(function(l){return A=l.stillingar||A,W(l.lina,l.nyr?"n\xFDr k\xF3\xF0i":"\xE1tti k\xF3\xF0a fyrir"),r.textContent="",s("vp-nafn").value="",s("vp-netfang").value="",G()}).catch(function(l){r.textContent="Villa: "+l.message}).then(function(){n.disabled=!1})}),s("vp-mal").addEventListener("change",function(){Y&&W(Y)}),s("vp-afrita-blokk").addEventListener("click",function(){yt(s("vp-blokk").value,this)}),s("vp-afrita-hlekk").addEventListener("click",function(){yt(F(Y.kodi).pressa,this)}),s("vp-uppfaera").addEventListener("click",p),s("vp-flytja-btn").addEventListener("click",function(){var t=this;t.disabled=!0,z("flytjaInn",{texti:s("vp-innflutningur").value}).then(function(n){return s("vp-innflutningur").value="B\xE6tti vi\xF0 "+n.nyir+" k\xF3\xF0um (sett "+n.sett+"). Alls "+n.alls+".",G()}).catch(function(n){s("vp-innflutningur").value="Villa: "+n.message}).then(function(){t.disabled=!1})}),Z(!!S),S&&p()}var oa=`<div class="vpp" data-mal-bidur>
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
      <p><strong>Nafir</strong> \xE1 uppt\xF6k s\xEDn \xED heims\xF3kn til \xC1rna \xDE\xF3rs \xC1rnasonar \xED Tj\xF6rnarp \xED Sv\xED\xFEj\xF3\xF0. \xCD vinnustofu \xC1rna, B-h\xFAsinu, ur\xF0u lausleg dr\xF6g a\xF0 pl\xF6tunni a\xF0 veruleika. \xDEar skapa\xF0ist \xE1kve\xF0inn hlj\xF3\xF0grunnur sem var\xF0 svo a\xF0 rau\xF0ri l\xEDnu \xED gegnum pl\xF6tuna.</p>
      <p>Kassabassi og l\xE1gt str\xF6mma\xF0ur nylon-g\xEDtar ur\xF0u a\xF0 einskonar grunnt\xF3ni sem einkenndi l\xF6gin. Bassi \xC1rna \xDE\xF3rs og trommur R\xF3berts M\xE1s Run\xF3lfssonar fl\xE9ttast saman \xED hryggjars\xFAlu laganna, sem allt anna\xF0 hv\xEDlir \xE1. \xC1 l\xE1gstemmdan grunninn bygg\xF0i hlj\xF3msveitin l\xF6gin sm\xE1m saman og heildarsvipur t\xF3k a\xF0 myndast. \xDEegar hinn einkennandi fl\xE6\xF0andi g\xEDtarhlj\xF3mur, sem lengi hefur veri\xF0 st\xF3r hluti af hlj\xF3\xF0heimi Stafr\xE6ns H\xE1kons, var or\xF0inn hluti af l\xF6gunum t\xF3ku \xFEau \xE1 sig kunnuglegan brag. G\xEDtarl\xEDnur \xD3lafs og L\xE1rusar tala saman og vefjast hvor um a\xF0ra eins og lifandi skepnur sem mynda st\xF3ra heild.</p>
      <p>\xC1 <strong>Nafir</strong> st\xEDgur Magn\xFAs Freyr G\xEDslason fram sem texta- og lagah\xF6fundur sveitarinnar. Hr\xE1ar skissur hans voru unnar \xE1fram og fullm\xF3ta\xF0ar af sveitinni \xED sameiningu. R\xF6dd hans ver\xF0ur sem samofinn vefur sem lei\xF0ir pl\xF6tuna til enda. Magn\xFAs syngur alfari\xF0 \xE1 \xEDslensku og textarnir f\xE6rast \xE1 milli hversdagslegra sm\xE1atri\xF0a, h\xFAmors, n\xE1ndar og einhvers enn dularfyllra, en s\xF6ngurinn helst ofinn inn \xED t\xF3nlistina frekar en a\xF0 sitja ofan \xE1 henni. <strong>Nafir</strong> er fyrsta plata Stafr\xE6ns H\xE1kons me\xF0 s\xF6ng fr\xE1 upphafi til enda.</p>
      <blockquote class="vpp-quote"><p>\u201EL\xF6gin \xE1 Nafir eru samin \xE1 t\xEDmabili sem einkenndist af \xF3kyrr\xF0, efa og h\xF6fnun, en l\xEDka \xFEeirri uppg\xF6tvun a\xF0 f\xE1tt skiptir n\xF3gu miklu m\xE1li til a\xF0 l\xE1ta s\xE9r l\xED\xF0a illa yfir \xFEv\xED. \xDEa\xF0 sem amar a\xF0 er oft sj\xE1lfskapa\xF0 og minna m\xE1l en \xFEa\xF0 vir\xF0ist \xED augnablikinu. \xDEa\xF0 er hvort sem er enginn a\xF0 sp\xE1 svo miki\xF0 \xED manni, allir eru uppteknir af \xFEv\xED hva\xF0 \xF6\xF0rum finnst um \xFE\xE1. Nafir eru \xFEessar ystu nafir sem ma\xF0ur getur sta\xF0i\xF0 \xE1 alveg a\xF0 \xE1st\xE6\xF0ulausu. En \xFEa\xF0 er allavega gott \xFAts\xFDni \xFEa\xF0an.\u201C</p><footer>Magn\xFAs Freyr G\xEDslason</footer></blockquote>
      <p>Platan var tekin upp \xED Vogor Studios, fyrir utan bassann sem \xC1rni \xDE\xF3r t\xF3k upp \xED vinnustofunni \xED Tj\xF6rnarp. \xD3lafur Josephsson hlj\xF3\xF0blanda\xF0i pl\xF6tuna h\xE6gt og r\xF3lega, me\xF0 hl\xE9um yfir r\xFAmt \xE1r, og leyf\xF0i l\xF6gunum a\xF0 finna sitt eigi\xF0 jafnv\xE6gi milli l\xE1gstemmdrar n\xE1lgunar og \xFEunga.</p>
      <p>\xC1tta l\xF6g \xE1 r\xFAmum h\xE1lft\xEDma. <strong>Nafir</strong> er hl\xFD, n\xE1l\xE6g og l\xE1gstemmd \xED grunninn, me\xF0 st\xE6rri, andr\xFAmsloftskenndum hlj\xF3\xF0heimi Stafr\xE6ns H\xE1kons sem opnast sm\xE1m saman utan um hana.</p>
    </div>
    <div class="vpp-prose" data-mal="en" lang="en">
      <p><strong>Nafir</strong> began during a visit to \xC1rni \xDE\xF3r \xC1rnason\u2019s workshop in Tj\xF6rnarp, Sweden. A weekend of demoing ideas turned into a sound that became the foundation for the record.</p>
      <p>Acoustic bass replaced electric bass, while a gently strummed acoustic guitar became a bed beneath the drums. \xC1rni \xDE\xF3r\u2019s bass and R\xF3bert M\xE1r Run\xF3lfsson\u2019s drums lock together into the backbone of the songs, the part everything else rests on. Around that quieter, understated foundation, Stafr\xE6nn H\xE1kon gradually built the songs outward, bringing in the atmospheric guitar sound that has long been part of the band\u2019s identity. \xD3lafur\u2019s and L\xE1rus\u2019s guitar lines talk to each other and wind around one another like organic beings, becoming part of a wider texture.</p>
      <p>On <strong>Nafir</strong>, Magn\xFAs Freyr G\xEDslason steps forward as the band\u2019s lyricist and songwriter. His rough sketches were developed further and shaped by the band together. His voice becomes a constant thread through the record from beginning to end. Sung entirely in Icelandic, the lyrics shift between everyday detail, humour, intimacy, something darker and even mysterious, while the singing stays woven into the music rather than sitting above it. It is the first Stafr\xE6nn H\xE1kon record with vocals from start to finish.</p>
      <blockquote class="vpp-quote"><p>\u201CThe songs on Nafir were written during a period of unrest, doubt and rejection, but also with the realisation that very little is worth making yourself miserable over. The things that bother us are often of our own making, and less of a big deal than they seem at the time. Nobody\u2019s thinking about you that much anyway, everyone\u2019s busy wondering what other people think of them. Nafir refers to those edges we sometimes find ourselves standing on for no good reason. At least the view is good.\u201D</p><footer>Magn\xFAs Freyr G\xEDslason</footer></blockquote>
      <p>The album was recorded largely at Vogor Studios, with \xC1rni \xDE\xF3r recording his bass parts in Tj\xF6rnarp. \xD3lafur Josephsson mixed the record slowly, on and off, over the course of a year, letting the songs find their own balance between restraint and weight.</p>
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
      <p class="vpp-small" data-mal="en">Demos recorded at B-h\xFAsi\xF0, Tj\xF6rnarp. Recorded at Vogor Studios; bass recorded by \xC1rni \xDE\xF3r in Tj\xF6rnarp. Mixed by \xD3lafur Josephsson. Mastered by Justin Pizzoferrato at Sonelab. Artwork by \xC1rni \xDE\xF3r \xC1rnason.</p>
      <p class="vpp-small" data-mal="is">Prufuuppt\xF6kur \xED B-h\xFAsinu, Tj\xF6rnarp. Teki\xF0 upp \xED Vogor Studios; \xC1rni \xDE\xF3r t\xF3k bassann upp \xED Tj\xF6rnarp. Hlj\xF3\xF0bl\xF6ndun: \xD3lafur Josephsson. Hlj\xF3mj\xF6fnun: Justin Pizzoferrato \xED Sonelab. Umslag: \xC1rni \xDE\xF3r \xC1rnason.</p>
    </div>
    <div>
      <div class="vpp-dymo">|PRESS|KIT|</div>
      <a href="https://cdn.prod.website-files.com/598cdb87c327c10001ec59c2/6acd5866a4e56a4ade30b085_shakon-live-tjornarp-press.jpg" target="_blank" rel="noopener"><img class="vpp-photo" src="https://cdn.prod.website-files.com/598cdb87c327c10001ec59c2/6acd5864a44f525f940c8f37_shakon-live-tjornarp-web.jpg" width="2000" height="1110" loading="lazy"
           alt="Stafr\xE6nn H\xE1kon on a small stage in Tj\xF6rnarp: five musicians in front of a star map backdrop, the singer in the light at the centre"
           data-alt-en="Stafr\xE6nn H\xE1kon on a small stage in Tj\xF6rnarp: five musicians in front of a star map backdrop, the singer in the light at the centre"
           data-alt-is="Stafr\xE6nn H\xE1kon \xE1 litlu svi\xF0i \xED Tj\xF6rnarp: fimm t\xF3nlistarmenn fyrir framan stj\xF6rnukort, s\xF6ngvarinn \xED lj\xF3sinu fyrir mi\xF0ju"></a>
      <ul class="vpp-links">
        <li><a href="https://f4.bcbits.com/img/a3515151154_0.jpg" target="_blank" rel="noopener"><span data-mal="en">Cover art</span><span data-mal="is">Umslag</span>, 3000 \xD7 3000 (JPG, 5 MB)</a></li>
        <li><a href="https://f4.bcbits.com/img/a3515151154_10.jpg" target="_blank" rel="noopener"><span data-mal="en">Cover art</span><span data-mal="is">Umslag</span>, 1200 \xD7 1200 (JPG)</a></li>
        <li><a href="https://cdn.prod.website-files.com/598cdb87c327c10001ec59c2/6acd5866a4e56a4ade30b085_shakon-live-tjornarp-press.jpg" target="_blank" rel="noopener"><span data-mal="en">Band photo</span><span data-mal="is">Hlj\xF3msveitarmynd</span>, 3119 \xD7 1731 (JPG, 1 MB)</a></li>
        <li><a href="https://cdn.prod.website-files.com/598cdb87c327c10001ec59c2/6acd5864a44f525f940c8f37_shakon-live-tjornarp-web.jpg" target="_blank" rel="noopener"><span data-mal="en">Band photo</span><span data-mal="is">Hlj\xF3msveitarmynd</span>, 2000 \xD7 1110 (JPG)</a>
          <span data-mal="en">Stafr\xE6nn H\xE1kon live in Tj\xF6rnarp, Sweden, 11 April 2025. Photo: Hj\xF6rleifur J\xF3nsson.</span>
          <span data-mal="is">Stafr\xE6nn H\xE1kon \xE1 t\xF3nleikum \xED Tj\xF6rnarp \xED Sv\xED\xFEj\xF3\xF0, 11. apr\xEDl 2025. Lj\xF3smynd: Hj\xF6rleifur J\xF3nsson.</span></li>
      </ul>
      <div class="vpp-dymo">|ARTWORK|</div>
      <!-- \xCDslenska \xFAtg\xE1fan er br\xE1\xF0abirg\xF0a\xFE\xFD\xF0ing (18. okt) \xFEar til \xC1rni \xDE\xF3r sam\xFEykkir e\xF0a lei\xF0r\xE9ttir.
           Sami texti er \xED nafir/docs/bio.md. -->
      <blockquote class="vpp-quote vpp-quote--kit" data-mal="is" lang="is"><p>\u201EPl\xF6tuumslagi\xF0 fyrir Nafir vann \xE9g \xED vinnustofunni minni, B-h\xFAsinu \xED Tj\xF6rnarp, \xFEar sem fyrstu lagahugmyndir pl\xF6tunnar kviknu\xF0u. Platan var \xFE\xE1 fullunnin, textarnir komnir og pl\xF6tuheiti\xF0 l\xEDka, og \xE9g vann verkin \xED spunafl\xE6\xF0i me\xF0 hana a\xF0 lei\xF0arlj\xF3si og leyf\xF0i einst\xF6kum myndum a\xF0 skarast og mynda st\xE6rri heild. \xC9g vildi a\xF0 lj\xF3smyndin fanga\xF0i andr\xFAmslofti\xF0 \xED B-h\xFAsinu, kyrr\xF0ina og hl\xFDjuna, eins og langri og eftirminnilegri uppt\xF6kulotu v\xE6ri n\xFDloki\xF0.\u201C</p><footer>\xC1rni \xDE\xF3r \xC1rnason</footer></blockquote>
      <blockquote class="vpp-quote vpp-quote--kit" data-mal="en" lang="en"><p>\u201CI created the cover artwork for Nafir in my workshop, B-h\xFAsi\xF0, in Tj\xF6rnarp, where the first ideas for the album originally took shape. Inspired by the finished music, lyrics and album title, I worked spontaneously, letting the individual pieces overlap and form a larger whole. I wanted the photograph to capture the atmosphere of the space, with a sense of warmth and stillness, as if a long and memorable session had just come to an end.\u201D</p><footer>\xC1rni \xDE\xF3r \xC1rnason</footer></blockquote>
      <div class="vpp-dymo">|CONTACT|</div>
      <p class="vpp-small">\xD3lafur Josephsson, Vogor Records<br>
        <a href="mailto:vogorrecords@vogorrecords.com">vogorrecords@vogorrecords.com</a></p>
    </div>
  </section>
</div>
`;function la(S){S.innerHTML=oa;var g=new URLSearchParams(location.search),x=(g.get("k")||"").trim().toLowerCase(),s=g.has("preview");function A(w){return Array.prototype.slice.call(document.querySelectorAll(w))}var Y="nafir-press-mal",S=document.querySelector(".vpp");function z(w){return w==="is"||w==="en"?w:""}function Z(){try{return z(localStorage.getItem(Y))}catch{return""}}var F=z(g.get("mal"))||Z();function P(w){S.setAttribute("data-mal",w),S.setAttribute("lang",w),S.removeAttribute("data-mal-bidur"),A("[data-mal-val]").forEach(function(E){E.setAttribute("aria-pressed",String(E.getAttribute("data-mal-val")===w))}),A("[data-alt-"+w+"]").forEach(function(E){E.alt=E.getAttribute("data-alt-"+w)})}A("[data-mal-val]").forEach(function(w){w.addEventListener("click",function(){F=w.getAttribute("data-mal-val");try{localStorage.setItem(Y,F)}catch{}P(F)})});function W(){return/^is\b/i.test(navigator.language||"")?"is":"en"}F&&P(F),setTimeout(function(){S.hasAttribute("data-mal-bidur")&&P(W())},4e3);function R(w){A("[data-promo-state]").forEach(function(E){E.hidden=E.getAttribute("data-promo-state")!==w})}function N(w,E){return fetch(Ot,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(w),keepalive:!!E})}function G(w,E,tt){A('[data-promo="'+w+'"]').forEach(function(pt){pt.href=E,!s&&pt.addEventListener("click",function(){N({action:"smellur",k:x,hvad:tt},!0).catch(function(){})})})}function _(w,E){S.hasAttribute("data-mal-bidur")&&P(z(E)||W()),R(w)}if(!/^[a-z0-9]{4}-[a-z0-9]{4}$/.test(x)){_("invalid");return}R("loading"),N({action:"pressa",k:x,forskodun:s}).then(function(w){return w.json()}).then(function(w){if(!w.ok){_(w.villa?"error":"invalid");return}A('[data-promo="name"]').forEach(function(E){E.textContent=w.vidtakandi}),A('[data-promo="code"]').forEach(function(E){E.textContent=w.kodi}),G("listen",w.stream,"hlusta"),G("download",w.download,"saekja"),_("ok",w.mal||"en")}).catch(function(){_("error")})}var ka={stada:ea,birta:ra,stjorn:sa,pressa:la},ya={stada:!0,birta:!0,pressa:!0};function da(){let y=document.querySelectorAll("[data-nafir]");if(y.length){if(!document.getElementById("nafir-css")){let g=document.createElement("style");g.id="nafir-css",g.textContent=Qt,document.head.appendChild(g)}document.querySelector('[data-verkefni]:not([data-verkefni="nafir"])')||ta(),y.forEach(function(g){let x=g.getAttribute("data-nafir"),s=ka[x];!s||g.hasAttribute("data-nafir-raest")||(g.setAttribute("data-nafir-raest",""),ya[x]&&document.body.classList.add("nafir-beige"),s(g))})}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",da):da();})();
//# sourceMappingURL=nafir.js.map
