(()=>{var Zt=`/* Nafir-s\xED\xF0urnar: yfirlit bandsins (.vst) og birtingars\xED\xF0an (.vbt).
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
`;var Qt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAABK2lDQ1BJQ0MgUHJvZmlsZQAAeJyVkT9Lw0AYh5+LouKgFUQcHDKJgmKjDmZMq4ggWKtD2635Q5TSJFyuaj+Eo1sHF3c/gZOj4KD4CfwGilMHuUTI4FD6LPfcj5f37t4Do+zsVw6MEnQjJeuHFbPRbJnTr0wxQUbbSxOnVjvWHsVRwD9+PhB6fdvUvRiPWS+RChgC236QeiDKQOdaJQrEAFh0O5k/apfn9SqIZ2AuzP1du5v7p3bZaLZAfOv6MHNjJuuT+4p2Fdzoc6nGSV9ehhfKtGzbNh0/dgPzrJ+qoJuaR5EXyySWbRX4QH6/jIW8UE9szbLtvfUx3z0S/Q+5fZ1m8xVLL0VW4PXk1Z8KY2f0vugxWIaTB5gcFtnuLdxvwPxdka1aUNqCp8EvwMZP/XkTGdQAAAkJSURBVHjaBcHJjl3XdQDQffpz29dWR7JKRVEUZUmG4ViwJs7ACdL8RwIE/jUPMs3EgBHACALEUgDHUSRDJEWx+nrdfe92p9s7a7Hf/Ppzc3ppiqKWYtXsVfK7fXO12QOwhCg4JwYAwBA4ZwCMAI/zQkn+7eP+etcqxurCvr3f/dMvbTumr2/VyWIy+hFiaClnAFIGRyl0fecR0bu+P1CIR7kZU4op1LmdZrXW3AJiSpqDYrzxqfX4tDbzadm2/VTAvZKaw4uFnufAtItIGuj9wRmKMiVGKXYhAmLFotBMkAjOF4VhzHIQTQgUOSXctX2u2K/O50CEwGcoDTEvxfnE/LDrXj+4yymAFOh6YLBPWPA++CQlwHa9efLBJQClbte1EZHyzD728cNpnUvugZwLXUJB9Paxvd31XxwVp9OCoUgJtm0fa73I1e9+6DCOmKJk3BOLREjAEMWnH55hUQsi8GNdFIXUA7Kv39wJH54fzQDRO284t1pVWpxXph3df13vqsKeVsX9vu2GMWestPKzD6YxBOecVUJJIQTTgnEgCUyWWSa5SBET0dOLS7ndvdo0F4tpndlDcMt6BgRZpmLvb7f7nz01Rm3/8G6FICqjLuosEhJyjclKRghMMG00S4iIgCi+eH7GlJpNaptnhTUJOQVX5tl8MkEibWxRl0WuXcA8My5i46OVYje4ZnDLTAvBGheBgVRsd3Db1gkOjIsizzJjGBHXRjPO3dArBvsRc82dc1pKxtjAeDktOGFmVZ2bAeHseHE0qUyeX85qRnC173cuVpkmxro+WiEYYwTMu8gABjfGGCT5FBR2PLJ+yIpq045911d5po0sOVOMlBH7NhzXNhHc94EbM+UEwXNMd4OzCqTkglQYhplRCZErxYXgTAffMQbSt12f6PLiYzK02m2MkALYNNMQY8aBIwEwK1nTO2SggIQRY+Q203kviqiEYDGilIJrpaMnxjmDSck638YQhQAOiDMIYnfnu/FuvSsY5ZnmTOxbt9oPWsrcCj+MPCUew2kuJUAEMEpHhsgQmUoJKUTOBCPQnBiGfTOG/iBYohj5QAQhrHY324frQittdVUXXDKj2NQqI9hufRj7UTHGkIiLSmtLhCmWmXHOIwMlBY/JaDZfVL0LzRhaHwaPY4jtGGQboxZUlIUU/Lvrh3ldHktZl6pGdbdugcF90wcGV1ePg/fLujzKzejiEOIQqVDcu1HUed+PLMKrTxdfrs7afkSPPhERZpkUXz5b9EQnZf7y4vSrqxWkWGU2JQJgzTA6F5bL6X++vf63//6f1w/br3+4VQrO57O73v3H97fN6LXgk9w4Hy8mdrbMfvJ0NomkZZ1Zq4FOMsV9ojrLLOHpLPvF5dn72w0hCqVer/blZHLvEgL8+qcvPnn29Mkk74b++/td54IA6Pr+vtn/5X7rU5rmhgAyq99/d/PVm/19jFufmLY360H86vzY5ryQ1AK8fP7BH795r3J9Opvc7ppvbm6UtXOtS2sWi3kb8MmsfHUyn0p+uagT583ovEvPFpOjPOMMz0/st3++9dJsvXu33nYJreLy4mTKoPMxZT5ux8RyHZrd5jFfH4bTcvLydJkxGAZXc3i1LGfZ7Nhmj83hD29uq9xeTCc7E1xMxuon04x7TyHm0r6QHK3auL7Thkc2emmMzp7lcnh4OHly7FAcS5clfLduNvtxJN7HuNu3S62jw/0Qv7pe/+sfv1kduo9nhaG07rppJc6mWaaExLR6XFejm0hxapUjEn//aiGJoZDnp0utxKDyq95bhIvFZOXifdMRYKE4EK36vu36u3b439uHrhsWk4IH93p7+PKjk786n9097OZHlsf053fbA3BP6QC8CST+5ZefExcrx1gS8zp/tpAHZq+33UVVXJ4ulaIu4KKwjKDOsrO63IfU+TB6/+K4vG3Di+PZP3x+IZEMD1wRaH22KFquxkRdoqVioioyz+Jffwj9PnXZ4otP7O0BVwdcFkJpzYSYKFlnejkpHlvHBGcI8zK/PD0Z3GiN+psXk9McuhFynvKaA3JbmvO5+WBpXh5nr84y+ds/vfu7z5b/vMhERD1Zh1AttOdC5pOceZJMFLl6t2kMZwLxvl3dtWtM/OBViPjhkbEydlHe927OfRpEM6R9F9uQXIyAaXBRLjO1d9ljL/dBlC27en339kbtutBjNVXiqFTbXfuXm+35PM+pP2M//GLeEolIbNPnyqoLjtv16sf71Njq4U1732KuRW645mIMCPlERkqa871/clJ99/XDcQIYg5eMdp2rZ5MfN61M8dOPziohDh3JbrwECIL/qRWXFZ1pNxxuU6qeT8uth6Nc7WKyAkolJeOZsVTUEkAI6NClLSuVfHzfVG3qzqpiOwSIG2SCM+iH0TEVxvbn0nlPCmjq+LeBjwWvJNuQefQKMLQ+WiUkJA2YkHGtPBKPxDPqz+13//doH0eBnJo+vVs3Y4jrtofgAiSKYd/trZn8mGZvqHgvy1cnNpC+xlJVM0FpKQdDjoCFBI4pEDKlGP2AwYtpaeZ5FuXpqGeC6YCJcbY+jJnRLqZvfrzRnDfdcLPerfbdtatu4uJxZP/+yH9/KyaTkmWLx5HfHtL1AEakn+W7Mz1UtC9Yp+I2G++lYNQRvx3gZrud5ubIKM7gcpkTOWPFIZP3TSsBRh9zJTbtuKK0sfy6EwurTox+vQ1j4JzbEb3k8aPCbRyOETFSxhA5yhSJU/jby2rP5lf7bjwMFwLuUNz1o2sOJ7VeD8kIfpZVrQ9rSF0QRGmR8X/87Gml1fXNmjOmpFCSDyE54ol4wvi2oYdMVzJK4OSjCFH1h02duGZs45NMNOVi0GazdyPjbULGUQIeWWUxVDw+P84XpX3/eKi04QIjUm5MDYMAyICuMTZWcAQAI5EIgCQQS8Eww4EGxr7v+sgo5zwlJIyFkpXgixBLxE6kFEeZhEQqhDyqjaR0s2mU5B/PSpm2GfKksejZzT6aqZQIEBPGGDCGGJFzNuNwLmGTMCZaSPYuwBJwlujlT14U1hQ296Epp4Wy5aui3F5dNYcmZgZNVhUt7KmQchTwyOiTfPI+uv8HxIutAeRDZhQAAAAASUVORK5CYII=";var sa="https://script.google.com/macros/s/AKfycbw_fE_lhJqAbaLME9HlFK0A5LG_VL502y0AeKwSyC6A_fmCnRonmV4fAMfD3Pllg-_b/exec",oa="https://script.google.com/macros/s/AKfycbyHTw5yNxSQ48jXRgyBaRf58Tfox5MirIsKOJS0VzXPeGCfsa3ceZ05FoUALRyaHD-W/exec",Lt=new URLSearchParams(location.search).has("prufa")?oa:sa,At=["jan","feb","mar","apr","ma\xED","j\xFAn","j\xFAl","\xE1g\xFA","sep","okt","n\xF3v","des"],Yt="https://script.google.com/macros/s/AKfycbzhu2dxScQqe5HT7wZZpdpOntDxWffkgORO0n7YH9fLs0K39h9g6LVUUXICe6F93iI2/exec";function yt(E,b){return fetch(b||Lt,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(E)}).then(function(C){return C.json()})}function e(E,b,C){var d=document.createElement(E);return b&&(d.className=b),C!=null&&(d.textContent=C),d}function gt(E,b,C){var d=e("a",b,C);return d.href=E,d.target="_blank",d.rel="noopener",d}function xt(E,b){try{b?localStorage.setItem(E,b):localStorage.removeItem(E)}catch{}}function Ot(E){try{return localStorage.getItem(E)||""}catch{return""}}function la(E,b){function C(){b.textContent="Afrita\xF0",b.classList.add("vst-afritad"),setTimeout(function(){b.textContent=b.getAttribute("data-merki"),b.classList.remove("vst-afritad")},1500)}function d(){var T=e("textarea");T.value=E,T.setAttribute("readonly",""),T.style.position="fixed",T.style.opacity="0",document.body.appendChild(T),T.select();try{document.execCommand("copy")&&C()}catch{}document.body.removeChild(T)}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(E).then(C,d):d()}function Nt(E,b){var C=e("button","vst-afrita",b||"Afrita");return C.type="button",C.setAttribute("data-merki",C.textContent),C.addEventListener("click",function(){la(E,C)}),C}function ht(E){try{var b=new URL(E);return/(^|\.)dropbox\.com$/.test(b.hostname)?(b.searchParams.delete("dl"),b.searchParams.set("raw","1"),b.href):E}catch{return E}}function Xt(E){var b=/\.([a-z0-9]+)$/i.exec(String(E||"").split(/[?#]/)[0]),C=b?b[1].toLowerCase():"";return{e:C,t:/^(jpe?g|png|gif|webp)$/.test(C)?"mynd":/^(mp4|mov|m4v)$/.test(C)?"myndband":""}}function Wt(){Array.prototype.forEach.call(document.querySelectorAll('link[rel~="icon"]'),function(b){b.parentNode.removeChild(b)});var E=document.createElement("link");E.rel="icon",E.type="image/png",E.href=Qt,document.head.appendChild(E)}var da=`<div class="vst">
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
</div>`;function _t(E){E.innerHTML=da;var b="vogor-band-key",C="vogor-band-nafn",d={Loki\u00F0:"done","\xCD vinnslu":"work",B\u00ED\u00F0ur:"hold"},T=["\xD3byrja\xF0","\xCD vinnslu","B\xED\xF0ur","Loki\xF0"],q={Sent:"sent",Svara\u00F0:"svarad",Skoppa\u00F0i:"skoppadi",Sleppt:"sleppt"};function I(t){return E.querySelector('[data-st="'+t+'"]')}function Z(t){Array.prototype.forEach.call(E.querySelectorAll("[data-st-state]"),function(i){i.hidden=i.getAttribute("data-st-state")!==t})}var D=new URLSearchParams(location.search).get("b")||"";if(!D)try{D=localStorage.getItem(b)||""}catch{}function R(t){var i=/^(\d{4})-(\d\d)-(\d\d)$/.exec(t||"");return i?new Date(Number(i[1]),Number(i[2])-1,Number(i[3])):null}function F(t){var i=R(t);return i?i.getDate()+". "+At[i.getMonth()]:t||""}var Q=new Date;Q.setHours(0,0,0,0);function W(t){var i=R(t);return i?Math.round((i-Q)/864e5):null}function O(t,i,f){var p=W(i);p!=null&&(I("dagar-"+t).textContent=p>0?p:"0",I("texti-"+t).textContent=p>1?"dagar \xED "+f:p===1?"dagur \xED "+f:p===0?f+" \xED dag":f+" komi\xF0")}function V(t){var i=t.stada==="Loki\xF0",f=W(t.frestur),p=!i&&f!=null&&f<0,o=e("li",i?"vst-lokid":p?"vst-seint":""),y=e("span","vst-led"+(p?" vst-led--late":d[t.stada]?" vst-led--"+d[t.stada]:""));y.title=p?t.stada+", komi\xF0 fram yfir frest":t.stada,o.appendChild(y);var c=e("span","vst-verk",t.verk);t.notur&&!i&&c.appendChild(e("small","",t.notur)),o.appendChild(c);var L=e("span","vst-val");return L.appendChild(H(t,"stada",T,"Sta\xF0a verksins: ")),L.appendChild(H(t,"hver",[""].concat(j.band||[]),"Hver \xE1 verki\xF0: ")),o.appendChild(L),o.appendChild(e("span","vst-frestur",F(t.frestur))),o}function H(t,i,f,p){var o=e("select");return o.setAttribute("aria-label",p+t.verk),f.indexOf(t[i])===-1&&(f=f.concat([t[i]])),f.forEach(function(y){var c=e("option","",y||"Enginn");c.value=y,o.appendChild(c)}),o.value=t[i],o.addEventListener("change",function(){S(t,i,o)}),o}function S(t,i,f){var p={action:"bandBreyta",b:D,rod:t.rod,verk:t.verk};p[i]=f.value,f.disabled=!0,I("skilabod").textContent="",yt(p).then(function(o){if(!o.ok)throw new Error(o.villa||"Hlekkurinn gildir ekki lengur.");t.hver=o.hver,t.stada=o.stada}).catch(function(o){I("skilabod").textContent="T\xF3kst ekki a\xF0 vista: "+(o.message==="Failed to fetch"?"ekkert samband.":o.message)}).then(function(){$(j)})}var j={};function $(t){j=t,O("preorder",t.preorder,"pre-order"),O("utgafa",t.utgafa,"\xFAtg\xE1fu");var i=t.verkefni.length,f=t.verkefni.filter(function(m){return m.stada==="Loki\xF0"}).length;I("hlutfall").textContent=f+" / "+i;var p=I("maelir");p.textContent="",p.setAttribute("aria-label",f+" af "+i+" verkum loki\xF0");for(var o=0;o<i;o++)p.appendChild(e("span",o<f?"on":""));var y=I("naest");y.textContent="",t.verkefni.filter(function(m){return m.stada!=="Loki\xF0"&&R(m.frestur)}).sort(function(m,h){return R(m.frestur)-R(h.frestur)}).slice(0,7).forEach(function(m){y.appendChild(V(m))}),y.children.length||y.appendChild(e("li","","Ekkert \xE1 dagskr\xE1 me\xF0 fresti."));var c=I("hopar"),L={};Array.prototype.forEach.call(c.children,function(m){L[m.getAttribute("data-flokkur")]=m.open}),c.textContent="";var a=[],n={};t.verkefni.forEach(function(m){var h=m.flokkur||"Anna\xF0";n[h]||(n[h]=[],a.push(h)),n[h].push(m)}),a.forEach(function(m){var h=n[m],w=h.filter(function(it){return it.stada==="Loki\xF0"}).length,J=e("details","vst-group");J.setAttribute("data-flokkur",m),J.open=m in L?L[m]:w<h.length;var pt=e("summary");pt.appendChild(e("span","",m)),pt.appendChild(e("span","",w+"/"+h.length)),J.appendChild(pt);var Y=e("ul");h.forEach(function(it){Y.appendChild(V(it))}),J.appendChild(Y),c.appendChild(J)});var r=I("pressa");r.textContent="";var s=null,k=t.pressa.some(function(m){return m.flokkur});if(t.pressa.forEach(function(m){if(k&&(m.flokkur||"")!==s){s=m.flokkur||"";var h=e("tr","vst-flokkur"),w=e("th","",s||"\xD3flokka\xF0");w.colSpan=7,h.appendChild(w),r.appendChild(h)}var J=e("tr",q[m.stada||"Sent"]?"vst-st-"+q[m.stada||"Sent"]:"");J.appendChild(e("td","",m.midill)),J.appendChild(e("td","",m.stada||"Sent")),J.appendChild(e("td","",m.hver||"\u2013")),J.appendChild(e("td","",F(m.sent)||"\u2013")),J.appendChild(e("td","",m.opnad?F(m.opnad)+(m.opnanir>1?" ("+m.opnanir+"\xD7)":""):"\u2013")),J.appendChild(e("td","",F(m.hlusta)||"\u2013")),J.appendChild(e("td","",F(m.saekja)||"\u2013")),r.appendChild(J)}),!t.pressa.length){var g=e("td","","Enginn \xE1 markh\xF3pslistanum enn\xFE\xE1.");g.colSpan=7,r.appendChild(e("tr")).appendChild(g)}_(t.band||[]),K(t.meta),U(t.efni||[]),t.stream?I("stream").href=t.stream:I("stream").hidden=!0,I("uppfaert").textContent=t.uppfaert}var at=/\.(jpe?g|png|gif|webp)$/i,bt=/\.(mp4|mov|m4v|webm)$/i,et="Samf\xE9lagsmi\xF0lar",N=["Dr\xF6g","Sam\xFEykkt","P\xF3sta\xF0","Sleppa"],B={P\u00F3sta\u00F0:"postad",Sleppa:"sleppa"};function M(t){try{var i=new URL(t);return{nafn:decodeURIComponent(i.pathname.split("/").pop()||""),dropbox:/(^|\.)dropbox\.com$/.test(i.hostname),u:i}}catch{return{nafn:"",dropbox:!1,u:null}}}function G(t){var i=M(t.slod),f=e("div","vst-slod");if(at.test(i.nafn)){var p=e("img","vst-mynd");p.src=ht(t.slod),p.alt=t.heiti||"",p.loading="lazy";var o=gt(t.slod);o.appendChild(p),f.appendChild(o),f.appendChild(gt(t.slod,"vst-afrita","Opna \xED fullri st\xE6r\xF0"))}else if(i.dropbox){var y=/\/fo\//.test(i.u.pathname)?"Mappa \xED Dropbox":(bt.test(i.nafn)?"Myndband: ":"Dropbox: ")+i.nafn;f.appendChild(gt(t.slod,"",y))}else f.appendChild(gt(t.slod,"",t.slod.replace(/^https?:\/\/(www\.)?/,"")));return f.appendChild(Nt(t.slod,"Afrita hlekk")),f}function nt(t,i){var f=e("button","vst-afrita"+(i?" "+i:""),t);return f.type="button",f}function tt(t){return t.b=D,yt(t).catch(function(i){return{ok:!1,villa:i.message==="Failed to fetch"?"Ekkert samband.":i.message}})}function rt(){return I("eg").value}function st(t,i){for(var f=j.efni||[],p=0;p<f.length;p++)f[p].id===t.id&&(f[p]=t);var o=ot(t);return i.parentNode.replaceChild(o,i),o}function ot(t){var i=t.flokkur===et,f=!/^md-/.test(t.id),p=e("article","vst-but"+(i&&B[t.stada]?" vst-but-"+B[t.stada]:"")),o=e("div","vst-but-haus");o.appendChild(e("span","vst-but-heiti",t.heiti||"\xC1n heitis"));var y=e("span","vst-but-hlid");if(t.birta){var c=W(t.birta),L=t.stada==="P\xF3sta\xF0"||t.stada==="Sleppa",a=i&&!L&&c!=null&&c<0;y.appendChild(e("span","vst-but-birta"+(c===0?" vst-idag":"")+(a?" vst-but-seint":""),c===0?"\xCD dag":F(t.birta)+(a?", ekki p\xF3sta\xF0":""))),c!=null&&c<0&&(!i||L)&&p.classList.add("vst-but-lidid")}if(i&&f&&t.birta){var n=e("select");n.setAttribute("aria-label","Sta\xF0a f\xE6rslunnar "+(t.heiti||"")),N.forEach(function(h){var w=e("option","",h);w.value=h,n.appendChild(w)}),n.value=t.stada||N[0],n.addEventListener("change",function(){if(!rt()){n.value=t.stada,lt(p,"Veldu hver \xFE\xFA ert efst \xED Efni.");return}n.disabled=!0,tt({action:"bandEfniVista",id:t.id,hver:rt(),reitir:{stada:n.value}}).then(function(h){h.ok?st(h.but,p):(n.disabled=!1,n.value=t.stada,lt(p,h.villa))})}),y.appendChild(n)}if(f){var r=nt("Breyta","vst-but-takki");r.addEventListener("click",function(){dt(t,p)}),y.appendChild(r)}o.appendChild(y),p.appendChild(o);var s=j.meta?j.meta.faerslur.filter(function(h){return h.efni===t.id}):[];if(s.length){var k=e("p","vst-but-meta");s.forEach(function(h){k.appendChild(gt(h.hlekkur,"",h.midill+": "+(h.na!=null?"n\xE1 "+h.na+", ":"")+h.vidbrogd+" vi\xF0br\xF6g\xF0"))}),p.appendChild(k)}t.slod&&p.appendChild(G(t));var g=[["is","\xCDslenska"],["en","English"]].filter(function(h){return t[h[0]]});if(g.length){var m=e("div","vst-maltextar");g.forEach(function(h){var w=e("div","vst-maltexti");g.length>1&&w.appendChild(e("span","vst-mal",h[1])),w.appendChild(e("pre","vst-texti",t[h[0]])),w.appendChild(Nt(t[h[0]])),m.appendChild(w)}),p.appendChild(m)}return t.notur&&p.appendChild(e("p","vst-but-notur",t.notur)),t.breyttAf&&t.breytt&&p.appendChild(e("p","vst-but-breytt","S\xED\xF0ast breytt af "+t.breyttAf+", "+F(t.breytt.slice(0,10))+" kl. "+t.breytt.slice(11,16))),p}function lt(t,i){var f=t.querySelector(".vst-msg")||t.appendChild(e("p","vst-small vst-msg"));f.textContent=i||""}function dt(t,i){var f=t.flokkur===et,p=t,o=e("form","vst-but vst-form vst-but-form");o.appendChild(e("span","vst-but-heiti","Breyta: "+(t.heiti||"\xC1n heitis")));function y(g,m,h,w,J,pt){var Y=e("label","",g),it=e(h,J||"");return h==="input"&&(it.type=m==="birta"?"date":"text"),it.name=m,it.value=w||"",Y.appendChild(it),pt&&Y.appendChild(e("small","",pt)),Y}o.appendChild(y("Heiti","heiti","input",t.heiti));var c=e("div","vst-form-rod");if(c.appendChild(y("Birta","birta","input",t.birta)),f){var L=e("label","","Sta\xF0a"),a=e("select");a.name="stada",N.forEach(function(g){var m=e("option","",g);m.value=g,a.appendChild(m)}),a.value=t.stada||N[0],L.appendChild(a),c.appendChild(L)}o.appendChild(c),o.appendChild(y("\xCDslenska","is","textarea",t.is)),o.appendChild(y("English","en","textarea",t.en)),o.appendChild(y("Mynd e\xF0a myndband","slod","input",t.slod,"","Dropbox-hlekkur \xE1 skr\xE1na e\xF0a m\xF6ppuna, e\xF0a sl\xF3\xF0 \xE1 mynd.")),o.appendChild(y("N\xF3tur","notur","textarea",t.notur,"vst-stutt","Hva\xF0a mynd fylgir, hvar \xE1 a\xF0 p\xF3sta, o.s.frv."));var n=e("div","vst-form-takkar"),r=nt("Vista");r.type="submit";var s=nt("H\xE6tta vi\xF0","vst-but-takki");n.appendChild(r),n.appendChild(s),o.appendChild(n);var k=o.appendChild(e("p","vst-small vst-msg"));s.addEventListener("click",function(){st(p,o)}),o.addEventListener("submit",function(g){if(g.preventDefault(),k.textContent="",!rt()){k.textContent="Veldu hver \xFE\xFA ert efst \xED Efni.";return}var m={};["heiti","birta","stada","is","en","slod","notur"].forEach(function(h){o.elements[h]&&(m[h]=o.elements[h].value)}),r.disabled=!0,r.textContent="Vista...",tt({action:"bandEfniVista",id:t.id,hver:rt(),breytt:p.breytt,reitir:m}).then(function(h){if(r.disabled=!1,r.textContent="Vista",h.ok){st(h.but,o);return}h.arekstur&&h.but&&(p=h.but),k.textContent=h.villa||"T\xF3kst ekki a\xF0 vista."})}),i.parentNode.replaceChild(o,i),o.elements.heiti.focus()}function v(t,i){return(t.birta?1:0)-(i.birta?1:0)||(t.birta<i.birta?-1:t.birta>i.birta?1:0)}var l="vogor-efni-opid";function U(t){var i=I("efni");if(I("efni-kafli").hidden=!t.length,!!t.length&&!i.querySelector(".vst-but-form")){var f={};try{f=JSON.parse(localStorage.getItem(l)||"{}")||{}}catch{}i.textContent="";var p=[],o={};t.forEach(function(y){var c=y.flokkur||"Anna\xF0";o[c]||(o[c]=[],p.push(c)),o[c].push(y)}),p.forEach(function(y){var c=e("details","vst-group");c.open=!!f[y];var L=e("summary");L.appendChild(e("span","",y));var a=String(o[y].length);if(y===et){var n=o[y].filter(function(g){return g.birta&&g.stada!=="Sleppa"}),r=n.filter(function(g){return g.stada==="P\xF3sta\xF0"}).length;a=r+"/"+n.length+" p\xF3sta\xF0ar",o[y].sort(v)}L.appendChild(e("span","",a)),c.appendChild(L);var s=e("div","vst-efni");if(o[y].forEach(function(g){s.appendChild(ot(g))}),y===et){var k=nt("N\xFD f\xE6rsla","vst-but-takki");k.addEventListener("click",function(){if(!rt()){k.textContent="Veldu fyrst hver \xFE\xFA ert";return}k.disabled=!0,tt({action:"bandEfniNytt",hver:rt(),flokkur:et}).then(function(g){if(k.disabled=!1,!g.ok){k.textContent=g.villa||"T\xF3kst ekki";return}j.efni.push(g.but);var m=ot(g.but);s.insertBefore(m,k),dt(g.but,m)})}),s.appendChild(k)}c.appendChild(s),c.addEventListener("toggle",function(){f[y]=c.open;try{localStorage.setItem(l,JSON.stringify(f))}catch{}}),i.appendChild(c)})}}function K(t){if(I("meta-kafli").hidden=!t,!!t){var i=t.fylgjendur||{},f=I("fylgjendur");f.textContent="",[["fb","Facebook"],["ig","Instagram"]].forEach(function(c){if(i[c[0]]!=null){var L=e("div","vst-count");L.appendChild(e("span","vst-counter",String(i[c[0]])));var a=i[c[0]+"Breyting"];L.appendChild(e("span","","fylgjendur \xE1 "+c[1]+(a!=null?" ("+(a>=0?"+":"")+a+" fr\xE1 "+F(i.fra)+")":""))),f.appendChild(L)}});var p={};(j.efni||[]).forEach(function(c){p[c.id]=c.heiti});var o=I("meta");if(o.textContent="",t.faerslur.forEach(function(c){var L=e("tr");L.appendChild(e("td","",F(c.birt.slice(0,10))+" "+c.birt.slice(11,16))),L.appendChild(e("td","",c.midill)),L.appendChild(e("td","",c.tegund));var a=e("td","vst-meta-texti"),n=p[c.efni]?p[c.efni]:c.texti||c.tegund;a.appendChild(c.hlekkur?gt(c.hlekkur,"",n):e("span","",n)),a.title=c.texti,L.appendChild(a),[c.na,c.ahorf,c.vidbrogd].forEach(function(r){L.appendChild(e("td","vst-tala",r==null?"\u2013":String(r)))}),o.appendChild(L)}),!t.faerslur.length){var y=e("td","","Engar f\xE6rslur fundust fr\xE1 1. okt\xF3ber.");y.colSpan=7,o.appendChild(e("tr")).appendChild(y)}I("meta-sott").textContent=t.sott||"aldrei"}}function _(t){var i=I("eg"),f=i.value;if(!f)try{f=localStorage.getItem(C)||""}catch{}i.textContent="",[""].concat(t.filter(function(p){return p!=="Allir"})).forEach(function(p){var o=e("option","",p||"Veldu nafn");o.value=p,i.appendChild(o)}),i.value=t.indexOf(f)!==-1?f:""}I("eg").addEventListener("change",function(){try{localStorage.setItem(C,this.value)}catch{}});function x(){return yt({action:"bandStada",b:D}).then(function(t){if(t.rangurLykill){Z("invalid");return}if(!t.ok){I("villa").textContent=t.villa||"\xD3\xFEekkt villa.",Z("error");return}try{localStorage.setItem(b,D)}catch{}$(t),Z("ok")}).catch(function(){Z("error")})}if(I("uppfaera").addEventListener("click",function(){var t=this;t.disabled=!0,x().then(function(){t.disabled=!1})}),!D){Z("invalid");return}Z("loading"),x()}var pa=`<div class="vbt">
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
</div>`;function $t(E){E.innerHTML=pa;var b=E.getAttribute("data-verkefni")||"",C=b?"vogor-birta-"+b:"vogor-promo-key",d="vogor-birta-mal",T={Birt:"ok","Prufa \xED lagi":"ok",T\u00EDmasett:"bid",Prufa:"prufa","B\xED\xF0ur Instagram":"bid",Sendi:"bid",Villa:"villa",\u00D3v\u00EDst:"villa",\u00DAtrunni\u00F0:"villa"},q=["T\xEDmasett","Prufa","B\xED\xF0ur Instagram"],I={Prufa:"\xCD yfirfer\xF0","Prufa \xED lagi":"Yfirfer\xF0 \xED lagi"};function Z(v){return v.prufa&&I[v.stada]||v.stada}var D=["Facebook","Instagram","Instagram Story","Facebook Story"],R="Stafr\xE6nn H\xE1kon",F="stafraennhakon",Q=["is","en"];function W(v){if(v){D=v.midlar||D,R=v.sidaNafn||R,F=v.igNafn||F,Q=v.tungumal||Q;var l=E.querySelector(".vbt-head .vst-dymo");l&&v.titill&&(l.textContent="|"+v.titill+"|BIRTA|");var U=O("yfirlit");U&&v.yfirlit&&(U.href=v.yfirlit,U.textContent="yfirlestrars\xED\xF0unni")}}function O(v){return E.querySelector('[data-bt="'+v+'"]')}var V=Ot(C),H=new URLSearchParams(location.search);if(H.get("l")){V=H.get("l").trim(),xt(C,V),H.delete("l");try{history.replaceState(null,"",location.pathname+(H.toString()?"?"+H:"")+location.hash)}catch{}}function S(v,l){var U=Object.assign({action:v,key:V},l||{});return b&&(U.verkefni=b),yt(U,b?Yt:null).then(function(K){return K.rangtLeyniord&&(V="",xt(C,""),j("gate")),K}).catch(function(K){return{ok:!1,villa:K.message==="Failed to fetch"?"Ekkert samband.":K.message}})}function j(v){O("gate").hidden=v!=="gate",O("hledur").hidden=v!=="hledur",O("app").hidden=v!=="app"}function $(v){return v?new Date(v.replace(" ","T")+":00Z"):null}function at(v){var l=$(v);return l?l.getUTCDate()+". "+At[l.getUTCMonth()]+" "+v.slice(11,16):""}function bt(v){var l=Math.round(($(v)-Date.now())/6e4);if(l<=0)return"n\xFAna";if(l<60)return l+" m\xEDn";if(l<2880)return Math.floor(l/60)+" klst "+l%60+" m\xEDn";var U=Math.round(l/1440);return U+(U===1?" dag":" daga")}function et(v){var l=Math.round(($(v)-Date.now())/6e4);return l<60?Math.max(l,0)+" m\xEDn":l<2880?Math.round(l/60)+" klst":Math.round(l/1440)+" dagar"}var N={},B="vogor-birta-drog",M={};try{M=JSON.parse(sessionStorage.getItem(B)||"{}")||{}}catch{}function G(){try{sessionStorage.setItem(B,JSON.stringify(M))}catch{}}var nt=[];function tt(v){return S("birtingar").then(function(l){if(!l.ok){l.rangtLeyniord||(j("gate"),O("gate-villa").textContent=l.villa||"N\xE1\xF0i ekki \xED g\xF6gnin.");return}N=l,W(l.verkefni),v===!0?st():rt(),j("app")})}function rt(){nt=[],st();var v=O("faerslur");v.textContent="",N.faerslur.slice().sort(function(l,U){return l.birta.localeCompare(U.birta)}).forEach(function(l){v.appendChild(lt(l))})}function st(){var v={};N.faerslur.forEach(function(x){v[x.id]=x.heiti});var l=N.birtingar.filter(function(x){return q.indexOf(x.stada)!==-1}).sort(function(x,t){return x.timi.localeCompare(t.timi)}),U=N.birtingar.filter(function(x){return q.indexOf(x.stada)===-1&&x.stada!=="H\xE6tt vi\xF0"}).sort(function(x,t){return t.timi.localeCompare(x.timi)}).slice(0,15),K=O("rod");K.textContent="",l.concat(U).forEach(function(x){var t=e("li",q.indexOf(x.stada)===-1?"vbt-buid":"");t.appendChild(e("span","vst-led vst-led--"+(T[x.stada]||""))),t.appendChild(e("span","vbt-timi",at(x.timi))),t.appendChild(e("span","",x.midill));var i=e("span","vbt-heiti",(x.prufa?"Yfirfer\xF0: ":"")+(v[x.efni]||x.efni)),f=e("small");if(x.stada==="Birt"&&x.nidurstada){var p=e("a","","Birt, opna f\xE6rsluna");p.href=x.nidurstada,p.target="_blank",p.rel="noopener",f.appendChild(p)}else f.textContent=(x.stada==="T\xEDmasett"?"Fer \xFAt eftir "+bt(x.timi):Z(x)+(x.nidurstada?": "+x.nidurstada:""))+(x.hver&&x.hver!==N.eg?" \xB7 "+x.hver:"");i.appendChild(f),t.appendChild(i),q.indexOf(x.stada)!==-1?t.appendChild(ot(x)):t.appendChild(e("span")),K.appendChild(t)}),K.children.length||K.appendChild(e("li","","Ekkert \xED bi\xF0r\xF6\xF0 enn\xFE\xE1."));var _=l.filter(function(x){return!x.prufa})[0];O("naesta").textContent=_?et(_.timi):"--",O("naesta-texti").textContent=_?"\xED n\xE6stu birtingu":"ekkert \xED bi\xF0r\xF6\xF0",O("sott").textContent=N.nu+(N.eg?", innskr\xE1\xF0(ur): "+N.eg:""),nt.forEach(function(x){x()})}function ot(v){var l=e("button","vbt-btn vbt-btn--ljos","H\xE6tta vi\xF0");return l.type="button",l.addEventListener("click",function(){l.disabled=!0,S("birtingHaetta",{id:v.id}).then(function(U){U.ok?(N.birtingar=U.birtingar,st()):(l.disabled=!1,alert(U.villa))})}),l}function lt(v){var l=M[v.id]||(M[v.id]={}),U=v.stada==="P\xF3sta\xF0",K=e("article","vbt-kort"+(U?" vbt-kort--postad":"")),_=e("div","vbt-kort-haus");_.appendChild(e("b","",v.heiti));var x=$(v.birta+" 00:00");_.appendChild(e("span","vbt-merki",x.getUTCDate()+". "+At[x.getUTCMonth()]+" \xB7 "+v.stada)),K.appendChild(_);var t=e("div","vbt-forsk"),i=e("div","vbt-skipta"),f=D.indexOf("Instagram")!==-1?"Instagram":"Facebook";["Instagram","Facebook","Story"].filter(function(u){return u!=="Instagram"||D.indexOf("Instagram")!==-1}).forEach(function(u){var A=e("button","",u);A.type="button",A.addEventListener("click",function(){f=u,vt()}),i.appendChild(A)}),t.appendChild(i);var p=e("div");t.appendChild(p),K.appendChild(t);var o=e("form","vbt-stjorn"),y=e("div","vbt-midlar"),c={};D.forEach(function(u){var A=e("label"),z=e("input");z.type="checkbox",z.checked=l[u]!==void 0?l[u]:!/ Story$/.test(u),c[u]=z,A.appendChild(z),A.appendChild(document.createTextNode(u)),y.appendChild(A),z.addEventListener("change",function(){l[u]=z.checked,vt()})}),o.appendChild(y);var L=e("label","","Texti"),a=e("select");[["en","English"],["is","\xCDslenska"],["baedi","\xCDslenska og enska"]].forEach(function(u){var A=e("option","",u[1]);A.value=u[0],a.appendChild(A)}),a.value=Q.length===1?Q[0]:l.mal||Ot(d)||"en",L.hidden=Q.length===1,L.appendChild(a),o.appendChild(L);var n=e("label","","Textinn sem fer \xFAt "),r=e("span","vbt-teljari");n.appendChild(r);var s=e("textarea");n.appendChild(s),o.appendChild(n);function k(){s.value=a.value==="is"?v.is:a.value==="en"?v.en:[v.is,v.en].filter(Boolean).join(`

`),l.texti=s.value,vt()}a.addEventListener("change",function(){l.mal=a.value,xt(d,a.value),k()}),s.addEventListener("input",function(){l.texti=s.value,vt()});var g=e("label","","Collab \xE1 Instagram ");g.appendChild(e("span","vbt-teljari","mest 3, a\xF0skilin me\xF0 kommu"));var m=e("input");m.value=l.collab||"",m.placeholder="t.d. magnus, arnithor",g.appendChild(m),o.appendChild(g),m.addEventListener("input",function(){l.collab=m.value,vt()});var h=e("label","","Mynd e\xF0a myndband"),w=e("input");w.value=l.mynd!=null?l.mynd:v.slod||"",w.placeholder="Dropbox-hlekkur \xE1 .jpg e\xF0a .mp4",h.appendChild(w),o.appendChild(h),w.addEventListener("input",function(){l.mynd=w.value}),w.addEventListener("change",vt);var J=e("div","vbt-tvo"),pt=e("label","","Dagur"),Y=e("input");Y.type="date",Y.value=l.dagur||v.birta,Y.addEventListener("change",function(){l.dagur=Y.value,vt()}),pt.appendChild(Y);var it=e("label","","Klukkan"),ut=e("input");ut.type="time",ut.value=l.klukka||"12:00",ut.addEventListener("change",function(){l.klukka=ut.value,vt()}),it.appendChild(ut),J.appendChild(pt),J.appendChild(it),o.appendChild(J);var zt=e("p","vbt-adv");o.appendChild(zt);var Rt=e("div","vbt-takkar"),wt=e("button","vbt-btn","Senda inn");wt.type="submit",Rt.appendChild(wt),o.appendChild(Rt);var Ct=e("div","vbt-yfirferd"),Pt=e("ul","vbt-fyrri"),Ft=e("p","vbt-small"),ct=e("button","vbt-btn vbt-btn--stadfesta","Sta\xF0festa");ct.type="button",Ct.appendChild(Pt),Ct.appendChild(Ft),Ct.appendChild(ct),o.appendChild(Ct);var kt=e("p","vbt-msg"+(l.skilabod?" vbt-msg--ok":""),l.skilabod||"");l.skilabod="",o.appendChild(kt);var Dt=N.birtingar.filter(function(u){return u.efni===v.id&&!u.prufa&&u.stada!=="H\xE6tt vi\xF0"});if(Dt.length){var Ut=e("ul","vbt-fyrri");Dt.forEach(function(u){var A=e("li");A.appendChild(e("span","vst-led vst-led--"+(T[u.stada]||""))),A.appendChild(document.createTextNode(u.midill+": "+u.stada+(u.stada==="T\xEDmasett"?" "+at(u.timi):"")+(u.hver?" \xB7 "+u.hver:""))),Ut.appendChild(A)}),o.appendChild(Ut)}var na=N.meta?N.meta.faerslur.filter(function(u){return u.efni===v.id}):[];na.forEach(function(u){o.appendChild(e("p","vbt-teljari",u.midill+": "+(u.na!=null?"n\xE1 "+u.na+", ":"")+(u.ahorf!=null?"\xE1horf "+u.ahorf+", ":"")+u.vidbrogd+" vi\xF0br\xF6g\xF0"))}),K.appendChild(o);function ft(u){return!!(c[u]&&c[u].checked)}function Ht(){return D.filter(function(u){return c[u].checked})}function vt(){Array.prototype.forEach.call(i.children,function(qt){qt.setAttribute("aria-pressed",String(qt.textContent===f))});var u=Xt(w.value),A=ft("Instagram");r.textContent=s.value.length+(A?" / 2200":"")+" stafir"+(A?", "+(s.value.match(/#[^\s#]+/g)||[]).length+" / 30 myllumerki":""),r.classList.toggle("vbt-of",A&&s.value.length>2200);var z=[];Ht().length||z.push("Veldu a\xF0 minnsta kosti einn mi\xF0il."),A&&!w.value&&z.push("Instagram \xFEarf mynd e\xF0a myndband."),w.value&&!u.t&&z.push("Sl\xF3\xF0in \xFEarf a\xF0 enda \xE1 .jpg, .png e\xF0a .mp4 (Dropbox-hlekkur \xE1 skr\xE1na sj\xE1lfa, ekki m\xF6ppu)."),A&&u.t==="mynd"&&!/^jpe?g$/.test(u.e)&&z.push("Instagram tekur bara JPG-myndir."),A&&/instagram\.com|ffm\.to|https?:\/\//.test(s.value)&&z.push("Hlekkir virka ekki \xED texta \xE1 Instagram; skrifa\xF0u \u201Ehlekkur \xED bio\u201C."),g.hidden=!A,A&&It().length>3&&z.push("Instagram leyfir mest 3 \xED collab.");var mt=ft("Instagram Story")||ft("Facebook Story");if(mt&&!w.value&&z.push("Story \xFEarf mynd e\xF0a myndband."),ft("Instagram Story")&&u.t==="mynd"&&!/^jpe?g$/.test(u.e)&&z.push("Instagram Story tekur bara JPG-myndir."),mt&&z.push("Textinn fer ekki me\xF0 \xED Story; hann \xFEarf a\xF0 vera \xED myndinni sj\xE1lfri (9:16)."),zt.textContent=z.join(" "),G(),Bt(),p.textContent="",f==="Story"){p.appendChild(ra(u));return}var P=f==="Facebook",X=e("div","vbt-sima"+(P?" vbt-sima--fb":"")),St=e("div","vbt-sima-haus");St.appendChild(e("i"));var Kt=!P&&A?It():[],Jt=e("span","",P?R:F+(Kt.length?" og "+Kt.join(", "):""));P&&Jt.appendChild(e("small","",at(Y.value+" "+(ut.value||"12:00")))),St.appendChild(Jt),X.appendChild(St);var jt=e("div","vbt-sima-texti"),Gt=P?s.value:s.value.split(`
`)[0].slice(0,125);P||jt.appendChild(e("b","",F)),jt.appendChild(document.createTextNode(Gt)),!P&&s.value.length>Gt.length&&jt.appendChild(e("span","vbt-meira","\u2026 meira")),P&&X.appendChild(jt);var Tt=e("div","vbt-sima-mynd");if(u.t==="mynd"){var Mt=e("img");Mt.src=ht(w.value),Mt.alt="",Tt.appendChild(Mt)}else if(u.t==="myndband"){var Et=e("video");Et.src=ht(w.value),Et.muted=!0,Et.controls=!0,Et.preload="metadata",Tt.appendChild(Et)}else Tt.textContent=w.value?"Sl\xF3\xF0 sem er hvorki mynd n\xE9 myndband":"Engin mynd";(w.value||!P)&&X.appendChild(Tt),P||(X.appendChild(e("div","vbt-sima-takkar","\u2661 \u25EF \u27A4")),X.appendChild(jt)),p.appendChild(X)}function ra(u){var A=e("div","vbt-sima vbt-sima--story"),z=e("div","vbt-sima-mynd");if(u.t==="mynd"){var mt=e("img");mt.src=ht(w.value),mt.alt="",z.appendChild(mt)}else if(u.t==="myndband"){var P=e("video");P.src=ht(w.value),P.muted=!0,P.controls=!0,P.preload="metadata",z.appendChild(P)}else z.textContent="Engin mynd";A.appendChild(z);var X=e("div","vbt-sima-haus");return X.appendChild(e("i")),X.appendChild(e("span","",ft("Instagram Story")||!ft("Facebook Story")?F:R)),A.appendChild(X),A}function It(){return m.value.split(/[\s,;]+/).map(function(u){return u.replace(/^@/,"").trim().toLowerCase()}).filter(Boolean)}function Vt(){return JSON.stringify([Ht(),s.value,w.value.trim(),ft("Instagram")?It():[]])}function Bt(){var u=l.hopur?N.birtingar.filter(function(P){return P.id.indexOf(l.hopur+"-")===0}):[];if(Ct.hidden=!u.length,wt.textContent=u.length?"Senda inn aftur":"Senda inn",!!u.length){Pt.textContent="",u.forEach(function(P){var X=e("li");X.appendChild(e("span","vst-led vst-led--"+(T[P.stada]||"")));var St=P.stada!=="Prufa"&&P.stada!=="B\xED\xF0ur Instagram";X.appendChild(document.createTextNode(P.midill+": "+Z(P)+(St&&P.nidurstada?" ("+P.nidurstada+")":""))),Pt.appendChild(X)});var A=Vt()!==l.snid,z=u.every(function(P){return P.stada==="Prufa \xED lagi"}),mt=u.some(function(P){return["Villa","\xD3v\xEDst","\xDAtrunni\xF0","H\xE6tt vi\xF0"].indexOf(P.stada)!==-1});ct.hidden=!z||A,ct.textContent="Sta\xF0festa og t\xEDmasetja "+at(Y.value+" "+(ut.value||"12:00")),Ft.textContent=A?"\xDE\xFA breyttir f\xE6rslunni eftir a\xF0 h\xFAn var send inn. Sendu hana inn aftur svo breytingin ver\xF0i yfirfarin.":mt?"Yfirfer\xF0in st\xF3\xF0st ekki. Laga\xF0u \xFEa\xF0 sem er a\xF0 og sendu inn aftur.":z?"Allt \xED lagi. Sta\xF0festu til a\xF0 t\xEDmasetja; \xFEa\xF0 m\xE1 h\xE6tta vi\xF0 \xED bi\xF0r\xF6\xF0inni \xFEanga\xF0 til.":(u.some(function(P){return/^Instagram/.test(P.midill)})?u.some(function(P){return/^Facebook/.test(P.midill)})?"Facebook og Instagram eru":"Instagram er":"Facebook er")+" a\xF0 yfirfara. \xDEa\xF0 tekur allt a\xF0 5 m\xEDn\xFAtur, myndband stundum lengur. S\xED\xF0an uppf\xE6rist sj\xE1lf."}}return nt.push(Bt),o.addEventListener("submit",function(u){u.preventDefault(),kt.textContent="",kt.classList.remove("vbt-msg--ok"),wt.disabled=!0,S("birtingVista",{efni:v.id,midlar:Ht(),timi:Y.value+" "+ut.value,texti:s.value,mynd:w.value.trim(),prufa:!0,collab:ft("Instagram")?It().join(","):""}).then(function(A){if(wt.disabled=!1,!A.ok){kt.textContent=A.villa||"T\xF3kst ekki.";return}l.hopur=A.hopur,l.snid=Vt(),G(),N.birtingar=A.birtingar,st()})}),ct.addEventListener("click",function(){kt.textContent="",ct.disabled=!0,S("birtingStadfesta",{hopur:l.hopur,timi:Y.value+" "+ut.value}).then(function(u){if(ct.disabled=!1,!u.ok){kt.textContent=u.villa||"T\xF3kst ekki.";return}l.hopur=null,l.skilabod="T\xEDmasett. F\xE6rslan s\xE9st \xED bi\xF0r\xF6\xF0inni efst og m\xE1 h\xE6tta vi\xF0 \xFEar.",G(),N.birtingar=u.birtingar,rt()})}),l.texti!=null?(s.value=l.texti,vt()):k(),K}O("gate").addEventListener("submit",function(v){v.preventDefault(),V=O("lykill").value.trim(),xt(C,V),O("gate-villa").textContent="",j("hledur"),tt()}),O("uppfaera").addEventListener("click",function(){tt()}),O("utskra").addEventListener("click",function(){V="",xt(C,""),j("gate")});var dt=0;setInterval(function(){if(!(!V||O("app").hidden)){dt++;var v=N.birtingar&&N.birtingar.some(function(l){return l.prufa&&(l.stada==="Prufa"||l.stada==="B\xED\xF0ur Instagram")});(v||dt%3===0)&&tt(!0)}},2e4),V?(j("hledur"),tt()):j("gate")}var ua=`<div class="vp" id="vp-admin">
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
</div>`;function ta(E){E.innerHTML=ua;var b="vogor-promo-key",C={en:{pressa:`Your personal promo page (stream, download, press kit):
{pressa}

Direct links:
`,beint:`Listen (private stream): {stream}
Download: {download} (MP3, FLAC or WAV)`},is:{pressa:`\xDE\xEDn pers\xF3nulega promo-s\xED\xF0a (streymi, ni\xF0urhal, pressuefni):
{pressa}

Beinir hlekkir:
`,beint:`Hlusta (loka\xF0 streymi): {stream}
S\xE6kja: {download} (MP3, FLAC e\xF0a WAV)`}};function d(a){return document.getElementById(a)}var T={},q=null;function I(){try{return localStorage.getItem(b)||""}catch{return""}}function Z(a){try{a?localStorage.setItem(b,a):localStorage.removeItem(b)}catch{}}var D=I();function R(a,n){var r=Object.assign({action:a,key:D},n||{});return fetch(Lt,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(r)}).then(function(s){return s.json()}).then(function(s){if(s.rangtLeyniord&&(D="",Z(""),F(!1)),!s.ok)throw new Error(s.villa||"\xD3\xFEekkt villa");return s})}function F(a){d("vp-gate").hidden=a,d("vp-app").hidden=!a}function Q(a){return{pressa:T.press_page?T.press_page+"?k="+a:"",stream:T.private_stream||"",download:T.redeem?T.redeem+"?code="+a:""}}function W(a,n){return a.replace(/\{(\w+)\}/g,function(r,s){return n[s]})}function O(a,n){q=a;var r=Q(a.kodi),s=C[d("vp-mal").value];d("vp-titill").textContent=a.vidtakandi+": "+a.kodi+(n?" ("+n+")":""),d("vp-blokk").value=(r.pressa?W(s.pressa,r):"")+W(s.beint,r),d("vp-afrita-hlekk").hidden=!r.pressa,d("vp-forskodun").hidden=!r.pressa,r.pressa&&(d("vp-forskodun").href=r.pressa+"&preview=1"),d("vp-nidurstada").hidden=!1}function V(a,n){navigator.clipboard.writeText(a).then(function(){var r=n.textContent;n.textContent="Afrita\xF0",setTimeout(function(){n.textContent=r},1500)})}function H(a,n){var r=document.createElement("td");r.textContent=n||"-",a.appendChild(r)}function S(a){T=a.stillingar||{},d("vp-samtals").textContent=a.linur.length+" \xFAthluta\xF0, "+a.lausir+" lausir af "+a.alls;var n=d("vp-tafla").tBodies[0];n.textContent="",a.linur.forEach(function(r){var s=document.createElement("tr");H(s,r.vidtakandi),H(s,r.kodi),H(s,r.uthlutad),H(s,r.opnadSidast),H(s,r.opnanir?String(r.opnanir):""),H(s,r.hlusta),H(s,r.saekja),s.addEventListener("click",function(){O(r)}),n.appendChild(s)})}function j(){return R("stada").then(S).catch(function(a){d("vp-samtals").textContent="Villa: "+a.message})}var $=["midill","tengilidur","netfang","flokkur","leid","fra","hver","mal","stada","efni","meginmal","notur"],at={leid:"P\xF3stur",mal:"en",stada:"Dr\xF6g"},bt={Sent:"sent",Svara\u00F0:"svarad",Skoppa\u00F0i:"skoppadi",Sleppt:"sleppt"},et=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,N=/\[(BLOKK|PRESSUHLEKKUR)\]/,B=null;function M(a){return d("vp-p-"+a)}function G(a){d("vp-p-status").textContent=a||""}function nt(a){return a?a.slice(0,10):""}function tt(a,n){a.options.length||n.forEach(function(r){var s=document.createElement("option");s.value=r,s.textContent=r||"\u2013",a.appendChild(s)})}function rt(a,n){var r=Array.prototype.some.call(a.options,function(k){return k.value===n});if(!r){var s=document.createElement("option");s.value=n,s.textContent=n,a.appendChild(s)}a.value=n}function st(a){T=a.stillingar||T,tt(M("stada"),a.stodur),tt(M("hver"),[""].concat(a.band)),tt(M("flokkur"),[""].concat(a.flokkar||[]));var n={};a.postar.forEach(function(g){n[g.stada]=(n[g.stada]||0)+1});var r=a.stodur.filter(function(g){return n[g]}).map(function(g){return n[g]+" "+g.toLowerCase()});d("vp-postar-samtals").textContent=a.postar.length?a.postar.length+" vi\xF0takendur: "+r.join(", "):"Enginn vi\xF0takandi skr\xE1\xF0ur enn";var s=d("vp-postar").tBodies[0];s.textContent="";var k=null;a.postar.forEach(function(g){if((g.flokkur||"")!==k){k=g.flokkur||"";var m=document.createElement("tr");m.className="vp-flokkur";var h=document.createElement("th");h.colSpan=7,h.textContent=k||"\xD3flokka\xF0",m.appendChild(h),s.appendChild(m)}var w=document.createElement("tr");bt[g.stada]&&(w.className="vp-st-"+bt[g.stada]),H(w,g.midill),H(w,g.stada),H(w,g.hver),H(w,g.leid),H(w,g.sent),H(w,g.opnad?nt(g.opnad)+(g.opnanir>1?" ("+g.opnanir+"\xD7)":""):""),H(w,nt(g.hlusta)),w.addEventListener("click",function(){x(g)}),s.appendChild(w)})}function ot(){return R("postar").then(st).catch(function(a){d("vp-postar-samtals").textContent="Villa: "+a.message})}function lt(){var a=B||{};d("vp-post-titill").textContent=a.id?a.midill+(a.kodi?" \xB7 k\xF3\xF0i "+a.kodi:" \xB7 enginn k\xF3\xF0i"):"N\xFDr vi\xF0takandi",d("vp-p-gefa").hidden=!!a.kodi;var n=a.kodi?Q(a.kodi).pressa:"";d("vp-p-forskodun").hidden=!n,n&&(d("vp-p-forskodun").href=n+"&preview=1");var r=M("leid").value==="P\xF3stur";d("vp-p-opna").textContent=r?"Opna \xED p\xF3stforriti":"Afrita og opna sl\xF3\xF0",d("vp-p-eml").hidden=!r}function dt(a){for(var n="",r=0;r<a.length;r++)n+=String.fromCharCode(a[r]);return btoa(n)}function v(a,n){if(/^[\x20-\x7e]*$/.test(n))return a+": "+n;var r=new TextEncoder,s=[],k=[];return Array.from(n).forEach(function(g){var m=Array.from(r.encode(g));k.length+m.length>39&&(s.push("=?UTF-8?B?"+dt(k)+"?="),k=[]),k=k.concat(m)}),k.length&&s.push("=?UTF-8?B?"+dt(k)+"?="),a+": "+s.join(`\r
 `)}function l(a,n,r,s){var k=["To: "+a];et.test(n)&&k.push("From: "+n),k.push(v("Subject",r)),k.push("X-Unsent: 1","MIME-Version: 1.0","Content-Type: text/plain; charset=UTF-8","Content-Transfer-Encoding: base64");var g=dt(new TextEncoder().encode(s.replace(/\r?\n/g,`\r
`)));return k.join(`\r
`)+`\r
\r
`+g.replace(/(.{76})/g,`$1\r
`)+`\r
`}function U(a,n,r){var s=URL.createObjectURL(new Blob([n],{type:r})),k=document.createElement("a");k.href=s,k.download=a,document.body.appendChild(k),k.click(),k.remove(),setTimeout(function(){URL.revokeObjectURL(s)},1e3)}var K={};function _(a){$.forEach(function(n){var r=M(n),s=a[n]||at[n]||"";r.tagName==="SELECT"?rt(r,s):r.value=s,K[n]=r.value})}function x(a){B=a,_(a),G(p()?"Hlekkir vi\xF0takandans eru komnir inn \xED textann. \u201EVista\u201C geymir hann \xFEannig.":""),lt(),d("vp-post").hidden=!1,d("vp-post").scrollIntoView({block:"nearest"})}function t(){var a=!(B&&B.id),n={};return $.forEach(function(r){var s=M(r).value;(a||s!==K[r])&&(n[r]=s)}),n}function i(){var a=t();return B&&B.id&&(a.id=B.id),G("Vista..."),R("postVista",{post:a}).then(function(n){return B=n.postar[0],_(B),p(),lt(),G("Vista\xF0"),ot().then(function(){return B})})}function f(){var a=M("meginmal").value;if(!N.test(a))return a;var n=B&&B.kodi;if(!n)return null;var r=Q(n),s=C[M("mal").value]||C.en,k=(r.pressa?W(s.pressa,r):"")+W(s.beint,r);return a.split("[BLOKK]").join(k).split("[PRESSUHLEKKUR]").join(r.pressa)}function p(){var a=f();return a===null||a===M("meginmal").value?!1:(M("meginmal").value=a,!0)}function o(a){var n=f();if(n===null){G("Gef\xF0u k\xF3\xF0a fyrst: p\xF3sturinn notar [BLOKK] e\xF0a [PRESSUHLEKKUR].");return}a(n)}function y(a){G("Villa: "+a.message)}function c(a,n){a.disabled=!0,n().catch(y).then(function(){a.disabled=!1})}d("vp-post-nyr").addEventListener("click",function(){x({})}),d("vp-p-loka").addEventListener("click",function(){B=null,d("vp-post").hidden=!0}),M("leid").addEventListener("change",lt),d("vp-post").addEventListener("submit",function(a){a.preventDefault(),c(d("vp-p-vista"),i)}),d("vp-p-gefa").addEventListener("click",function(){c(this,function(){return i().then(function(a){return R("postGefa",{id:a.id})}).then(function(a){T=a.stillingar||T,B=a.post,lt();var n=a.nyr?"N\xFDr k\xF3\xF0i: "+a.post.kodi:"Mi\xF0illinn \xE1tti k\xF3\xF0a fyrir: "+a.post.kodi,r=p();return(r?i():Promise.resolve()).then(function(){return G(n+(r?". Hlekkirnir eru komnir inn \xED textann.":"")),Promise.all([j(),ot()])})})})}),d("vp-p-opna").addEventListener("click",function(){var a=this;o(function(n){var r=M("netfang").value.trim(),s=M("fra").value;if(M("leid").value!=="P\xF3stur"){V(n,a);var k=/^https?:\/\//i.test(r)?r:"";k&&window.open(k,"_blank","noopener"),G(k?"Meginm\xE1li\xF0 er afrita\xF0 og sl\xF3\xF0in opnu\xF0.":"Meginm\xE1li\xF0 er afrita\xF0. Engin sl\xF3\xF0 er skr\xE1\xF0.");return}if(!et.test(r)){G("Netfang vantar e\xF0a er ekki gilt.");return}var g="mailto:"+r+"?subject="+encodeURIComponent(M("efni").value)+"&body="+encodeURIComponent(n.replace(/\r?\n/g,`\r
`));G((s?"Sendu fr\xE1 "+s+". ":"")+(g.length>1900?"Langur p\xF3stur: ef meginm\xE1li\xF0 kemur klippt inn, nota\xF0u \u201ES\xE6kja sem dr\xF6g\u201C e\xF0a \u201EAfrita meginm\xE1l\u201C.":"")),location.href=g})}),d("vp-p-eml").addEventListener("click",function(){o(function(a){var n=M("netfang").value.trim();if(!et.test(n)){G("Netfang vantar e\xF0a er ekki gilt.");return}var r="Nafir - "+M("midill").value.trim().replace(/[\\/:*?"<>|]+/g," ")+".eml";U(r,l(n,M("fra").value,M("efni").value,a),"message/rfc822"),G("Opna\xF0u skr\xE1na "+r+": h\xFAn \xE1 a\xF0 opnast sem \xF3sendur p\xF3stur \xED p\xF3stforritinu.")})}),d("vp-p-afrita-efni").addEventListener("click",function(){V(M("efni").value,this)}),d("vp-p-afrita-meginmal").addEventListener("click",function(){var a=this;o(function(n){V(n,a)})}),d("vp-p-sent").addEventListener("click",function(){c(this,function(){return i().then(function(a){return R("postStada",{id:a.id,stada:"Sent"})}).then(function(a){return B=a.post,_(a.post),lt(),G("Merkt sent "+a.post.sent),ot()})})});function L(){return Promise.all([j(),ot()])}d("vp-gate").addEventListener("submit",function(a){a.preventDefault(),D=d("vp-key").value.trim(),Z(D),d("vp-key").value="",F(!0),L()}),d("vp-gefa").addEventListener("submit",function(a){a.preventDefault();var n=d("vp-gefa-btn"),r=d("vp-status");n.disabled=!0,r.textContent="S\xE6ki k\xF3\xF0a...",R("gefa",{vidtakandi:d("vp-nafn").value,netfang:d("vp-netfang").value}).then(function(s){return T=s.stillingar||T,O(s.lina,s.nyr?"n\xFDr k\xF3\xF0i":"\xE1tti k\xF3\xF0a fyrir"),r.textContent="",d("vp-nafn").value="",d("vp-netfang").value="",j()}).catch(function(s){r.textContent="Villa: "+s.message}).then(function(){n.disabled=!1})}),d("vp-mal").addEventListener("change",function(){q&&O(q)}),d("vp-afrita-blokk").addEventListener("click",function(){V(d("vp-blokk").value,this)}),d("vp-afrita-hlekk").addEventListener("click",function(){V(Q(q.kodi).pressa,this)}),d("vp-uppfaera").addEventListener("click",L),d("vp-flytja-btn").addEventListener("click",function(){var a=this;a.disabled=!0,R("flytjaInn",{texti:d("vp-innflutningur").value}).then(function(n){return d("vp-innflutningur").value="B\xE6tti vi\xF0 "+n.nyir+" k\xF3\xF0um (sett "+n.sett+"). Alls "+n.alls+".",j()}).catch(function(n){d("vp-innflutningur").value="Villa: "+n.message}).then(function(){a.disabled=!1})}),F(!!D),D&&L()}var va=`<div class="vpp" data-mal-bidur>
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
</div>`;function aa(I){I.innerHTML=va;var b=new URLSearchParams(location.search),C=(b.get("k")||"").trim().toLowerCase(),d=b.has("preview");function T(S){return Array.prototype.slice.call(document.querySelectorAll(S))}var q="nafir-press-mal",I=document.querySelector(".vpp");function Z(S){return S==="is"||S==="en"?S:""}function D(){try{return Z(localStorage.getItem(q))}catch{return""}}var R=Z(b.get("mal"))||D();function F(S){I.setAttribute("data-mal",S),I.setAttribute("lang",S),I.removeAttribute("data-mal-bidur"),T("[data-mal-val]").forEach(function(j){j.setAttribute("aria-pressed",String(j.getAttribute("data-mal-val")===S))}),T("[data-alt-"+S+"]").forEach(function(j){j.alt=j.getAttribute("data-alt-"+S)})}T("[data-mal-val]").forEach(function(S){S.addEventListener("click",function(){R=S.getAttribute("data-mal-val");try{localStorage.setItem(q,R)}catch{}F(R)})});function Q(){return/^is\b/i.test(navigator.language||"")?"is":"en"}R&&F(R),setTimeout(function(){I.hasAttribute("data-mal-bidur")&&F(Q())},4e3);function W(S){T("[data-promo-state]").forEach(function(j){j.hidden=j.getAttribute("data-promo-state")!==S})}function O(S,j){return fetch(Lt,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(S),keepalive:!!j})}function V(S,j,$){T('[data-promo="'+S+'"]').forEach(function(at){at.href=j,!d&&at.addEventListener("click",function(){O({action:"smellur",k:C,hvad:$},!0).catch(function(){})})})}function H(S,j){I.hasAttribute("data-mal-bidur")&&F(Z(j)||Q()),W(S)}if(!/^[a-z0-9]{4}-[a-z0-9]{4}$/.test(C)){H("invalid");return}W("loading"),O({action:"pressa",k:C,forskodun:d}).then(function(S){return S.json()}).then(function(S){if(!S.ok){H(S.villa?"error":"invalid");return}T('[data-promo="name"]').forEach(function(j){j.textContent=S.vidtakandi}),T('[data-promo="code"]').forEach(function(j){j.textContent=S.kodi}),V("listen",S.stream,"hlusta"),V("download",S.download,"saekja"),H("ok",S.mal||"en")}).catch(function(){H("error")})}var fa={stada:_t,birta:$t,stjorn:ta,pressa:aa},ma={stada:!0,birta:!0,pressa:!0};function ea(){let E=document.querySelectorAll("[data-nafir]");if(E.length){if(!document.getElementById("nafir-css")){let b=document.createElement("style");b.id="nafir-css",b.textContent=Zt,document.head.appendChild(b)}document.querySelector('[data-verkefni]:not([data-verkefni="nafir"])')||Wt(),E.forEach(function(b){let C=b.getAttribute("data-nafir"),d=fa[C];!d||b.hasAttribute("data-nafir-raest")||(b.setAttribute("data-nafir-raest",""),ma[C]&&document.body.classList.add("nafir-beige"),d(b))})}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ea):ea();})();
//# sourceMappingURL=nafir.js.map
