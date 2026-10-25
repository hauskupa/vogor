(()=>{var $t=`/* Nafir-s\xED\xF0urnar: yfirlit bandsins (.vst) og birtingars\xED\xF0an (.vbt).
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
`;var ta="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAABK2lDQ1BJQ0MgUHJvZmlsZQAAeJyVkT9Lw0AYh5+LouKgFUQcHDKJgmKjDmZMq4ggWKtD2635Q5TSJFyuaj+Eo1sHF3c/gZOj4KD4CfwGilMHuUTI4FD6LPfcj5f37t4Do+zsVw6MEnQjJeuHFbPRbJnTr0wxQUbbSxOnVjvWHsVRwD9+PhB6fdvUvRiPWS+RChgC236QeiDKQOdaJQrEAFh0O5k/apfn9SqIZ2AuzP1du5v7p3bZaLZAfOv6MHNjJuuT+4p2Fdzoc6nGSV9ehhfKtGzbNh0/dgPzrJ+qoJuaR5EXyySWbRX4QH6/jIW8UE9szbLtvfUx3z0S/Q+5fZ1m8xVLL0VW4PXk1Z8KY2f0vugxWIaTB5gcFtnuLdxvwPxdka1aUNqCp8EvwMZP/XkTGdQAAAkJSURBVHjaBcHJjl3XdQDQffpz29dWR7JKRVEUZUmG4ViwJs7ACdL8RwIE/jUPMs3EgBHACALEUgDHUSRDJEWx+nrdfe92p9s7a7Hf/Ppzc3ppiqKWYtXsVfK7fXO12QOwhCg4JwYAwBA4ZwCMAI/zQkn+7eP+etcqxurCvr3f/dMvbTumr2/VyWIy+hFiaClnAFIGRyl0fecR0bu+P1CIR7kZU4op1LmdZrXW3AJiSpqDYrzxqfX4tDbzadm2/VTAvZKaw4uFnufAtItIGuj9wRmKMiVGKXYhAmLFotBMkAjOF4VhzHIQTQgUOSXctX2u2K/O50CEwGcoDTEvxfnE/LDrXj+4yymAFOh6YLBPWPA++CQlwHa9efLBJQClbte1EZHyzD728cNpnUvugZwLXUJB9Paxvd31XxwVp9OCoUgJtm0fa73I1e9+6DCOmKJk3BOLREjAEMWnH55hUQsi8GNdFIXUA7Kv39wJH54fzQDRO284t1pVWpxXph3df13vqsKeVsX9vu2GMWestPKzD6YxBOecVUJJIQTTgnEgCUyWWSa5SBET0dOLS7ndvdo0F4tpndlDcMt6BgRZpmLvb7f7nz01Rm3/8G6FICqjLuosEhJyjclKRghMMG00S4iIgCi+eH7GlJpNaptnhTUJOQVX5tl8MkEibWxRl0WuXcA8My5i46OVYje4ZnDLTAvBGheBgVRsd3Db1gkOjIsizzJjGBHXRjPO3dArBvsRc82dc1pKxtjAeDktOGFmVZ2bAeHseHE0qUyeX85qRnC173cuVpkmxro+WiEYYwTMu8gABjfGGCT5FBR2PLJ+yIpq045911d5po0sOVOMlBH7NhzXNhHc94EbM+UEwXNMd4OzCqTkglQYhplRCZErxYXgTAffMQbSt12f6PLiYzK02m2MkALYNNMQY8aBIwEwK1nTO2SggIQRY+Q203kviqiEYDGilIJrpaMnxjmDSck638YQhQAOiDMIYnfnu/FuvSsY5ZnmTOxbt9oPWsrcCj+MPCUew2kuJUAEMEpHhsgQmUoJKUTOBCPQnBiGfTOG/iBYohj5QAQhrHY324frQittdVUXXDKj2NQqI9hufRj7UTHGkIiLSmtLhCmWmXHOIwMlBY/JaDZfVL0LzRhaHwaPY4jtGGQboxZUlIUU/Lvrh3ldHktZl6pGdbdugcF90wcGV1ePg/fLujzKzejiEOIQqVDcu1HUed+PLMKrTxdfrs7afkSPPhERZpkUXz5b9EQnZf7y4vSrqxWkWGU2JQJgzTA6F5bL6X++vf63//6f1w/br3+4VQrO57O73v3H97fN6LXgk9w4Hy8mdrbMfvJ0NomkZZ1Zq4FOMsV9ojrLLOHpLPvF5dn72w0hCqVer/blZHLvEgL8+qcvPnn29Mkk74b++/td54IA6Pr+vtn/5X7rU5rmhgAyq99/d/PVm/19jFufmLY360H86vzY5ryQ1AK8fP7BH795r3J9Opvc7ppvbm6UtXOtS2sWi3kb8MmsfHUyn0p+uagT583ovEvPFpOjPOMMz0/st3++9dJsvXu33nYJreLy4mTKoPMxZT5ux8RyHZrd5jFfH4bTcvLydJkxGAZXc3i1LGfZ7Nhmj83hD29uq9xeTCc7E1xMxuon04x7TyHm0r6QHK3auL7Thkc2emmMzp7lcnh4OHly7FAcS5clfLduNvtxJN7HuNu3S62jw/0Qv7pe/+sfv1kduo9nhaG07rppJc6mWaaExLR6XFejm0hxapUjEn//aiGJoZDnp0utxKDyq95bhIvFZOXifdMRYKE4EK36vu36u3b439uHrhsWk4IH93p7+PKjk786n9097OZHlsf053fbA3BP6QC8CST+5ZefExcrx1gS8zp/tpAHZq+33UVVXJ4ulaIu4KKwjKDOsrO63IfU+TB6/+K4vG3Di+PZP3x+IZEMD1wRaH22KFquxkRdoqVioioyz+Jffwj9PnXZ4otP7O0BVwdcFkJpzYSYKFlnejkpHlvHBGcI8zK/PD0Z3GiN+psXk9McuhFynvKaA3JbmvO5+WBpXh5nr84y+ds/vfu7z5b/vMhERD1Zh1AttOdC5pOceZJMFLl6t2kMZwLxvl3dtWtM/OBViPjhkbEydlHe927OfRpEM6R9F9uQXIyAaXBRLjO1d9ljL/dBlC27en339kbtutBjNVXiqFTbXfuXm+35PM+pP2M//GLeEolIbNPnyqoLjtv16sf71Njq4U1732KuRW645mIMCPlERkqa871/clJ99/XDcQIYg5eMdp2rZ5MfN61M8dOPziohDh3JbrwECIL/qRWXFZ1pNxxuU6qeT8uth6Nc7WKyAkolJeOZsVTUEkAI6NClLSuVfHzfVG3qzqpiOwSIG2SCM+iH0TEVxvbn0nlPCmjq+LeBjwWvJNuQefQKMLQ+WiUkJA2YkHGtPBKPxDPqz+13//doH0eBnJo+vVs3Y4jrtofgAiSKYd/trZn8mGZvqHgvy1cnNpC+xlJVM0FpKQdDjoCFBI4pEDKlGP2AwYtpaeZ5FuXpqGeC6YCJcbY+jJnRLqZvfrzRnDfdcLPerfbdtatu4uJxZP/+yH9/KyaTkmWLx5HfHtL1AEakn+W7Mz1UtC9Yp+I2G++lYNQRvx3gZrud5ubIKM7gcpkTOWPFIZP3TSsBRh9zJTbtuKK0sfy6EwurTox+vQ1j4JzbEb3k8aPCbRyOETFSxhA5yhSJU/jby2rP5lf7bjwMFwLuUNz1o2sOJ7VeD8kIfpZVrQ9rSF0QRGmR8X/87Gml1fXNmjOmpFCSDyE54ol4wvi2oYdMVzJK4OSjCFH1h02duGZs45NMNOVi0GazdyPjbULGUQIeWWUxVDw+P84XpX3/eKi04QIjUm5MDYMAyICuMTZWcAQAI5EIgCQQS8Eww4EGxr7v+sgo5zwlJIyFkpXgixBLxE6kFEeZhEQqhDyqjaR0s2mU5B/PSpm2GfKksejZzT6aqZQIEBPGGDCGGJFzNuNwLmGTMCZaSPYuwBJwlujlT14U1hQ296Epp4Wy5aui3F5dNYcmZgZNVhUt7KmQchTwyOiTfPI+uv8HxIutAeRDZhQAAAAASUVORK5CYII=";function mt(m){try{return localStorage.getItem(m)||""}catch{return""}}function it(m,l){try{l?localStorage.setItem(m,l):localStorage.removeItem(m)}catch{}}function xt(m,l){let y=new URL(location.href),s=(y.searchParams.get(m)||"").trim();if(!s)return{lykill:mt(l),nyr:!1};it(l,s),y.searchParams.delete(m);try{history.replaceState(history.state,"",y.href)}catch{}return{lykill:s,nyr:!0}}var aa="Ekkert samband.";function Nt(m,l){return fetch(m,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(l)}).then(y=>y.json().catch(()=>{throw new Error("Bakendinn svara\xF0i ekki eins og hann \xE1 a\xF0 gera.")}),()=>{throw new Error(aa)})}var Ea="https://script.google.com/macros/s/AKfycbw_fE_lhJqAbaLME9HlFK0A5LG_VL502y0AeKwSyC6A_fmCnRonmV4fAMfD3Pllg-_b/exec",La="https://script.google.com/macros/s/AKfycbyHTw5yNxSQ48jXRgyBaRf58Tfox5MirIsKOJS0VzXPeGCfsa3ceZ05FoUALRyaHD-W/exec",Dt=new URLSearchParams(location.search).has("prufa")?La:Ea,Pt=["jan","feb","mar","apr","ma\xED","j\xFAn","j\xFAl","\xE1g\xFA","sep","okt","n\xF3v","des"],ea="https://script.google.com/macros/s/AKfycbzhu2dxScQqe5HT7wZZpdpOntDxWffkgORO0n7YH9fLs0K39h9g6LVUUXICe6F93iI2/exec";function bt(m,l){return Nt(l||Dt,m)}function e(m,l,y){var s=document.createElement(m);return l&&(s.className=l),y!=null&&(s.textContent=y),s}function wt(m,l,y){var s=e("a",l,y);return s.href=m,s.target="_blank",s.rel="noopener",s}function Ct(m,l){l.hasAttribute("data-merki")||l.setAttribute("data-merki",l.textContent);function y(){l.textContent="Afrita\xF0",l.classList.add("vst-afritad"),setTimeout(function(){l.textContent=l.getAttribute("data-merki"),l.classList.remove("vst-afritad")},1500)}function s(){var T=e("textarea");T.value=m,T.setAttribute("readonly",""),T.style.position="fixed",T.style.opacity="0",document.body.appendChild(T),T.select();try{document.execCommand("copy")&&y()}catch{}document.body.removeChild(T)}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(m).then(y,s):s()}function Ut(m,l){var y=e("button","vst-afrita",l||"Afrita");return y.type="button",y.setAttribute("data-merki",y.textContent),y.addEventListener("click",function(){Ct(m,y)}),y}function jt(m){try{var l=new URL(m);return/(^|\.)dropbox\.com$/.test(l.hostname)?(l.searchParams.delete("dl"),l.searchParams.set("raw","1"),l.href):m}catch{return m}}function na(m){var l=/\.([a-z0-9]+)$/i.exec(String(m||"").split(/[?#]/)[0]),y=l?l[1].toLowerCase():"";return{e:y,t:/^(jpe?g|png|gif|webp)$/.test(y)?"mynd":/^(mp4|mov|m4v)$/.test(y)?"myndband":""}}function ra(){Array.prototype.forEach.call(document.querySelectorAll('link[rel~="icon"]'),function(l){l.parentNode.removeChild(l)});var m=document.createElement("link");m.rel="icon",m.type="image/png",m.href=ta,document.head.appendChild(m)}var ia=`<div class="vst">
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
`;function sa(m){m.innerHTML=ia;var l="vogor-band-key",y="vogor-band-nafn",s={Loki\u00F0:"done","\xCD vinnslu":"work",B\u00ED\u00F0ur:"hold"},T=["\xD3byrja\xF0","\xCD vinnslu","B\xED\xF0ur","Loki\xF0"],J={Sent:"sent",Svara\u00F0:"svarad",Skoppa\u00F0i:"skoppadi",Sleppt:"sleppt"};function L(t){return m.querySelector('[data-st="'+t+'"]')}function U(t){Array.prototype.forEach.call(m.querySelectorAll("[data-st-state]"),function(i){i.hidden=i.getAttribute("data-st-state")!==t})}var Z=xt("b",l).lykill;function V(t){var i=/^(\d{4})-(\d\d)-(\d\d)$/.exec(t||"");return i?new Date(Number(i[1]),Number(i[2])-1,Number(i[3])):null}function N(t){var i=V(t);return i?i.getDate()+". "+Pt[i.getMonth()]:t||""}var B=new Date;B.setHours(0,0,0,0);function O(t){var i=V(t);return i?Math.round((i-B)/864e5):null}function z(t,i,u){var p=O(i);p!=null&&(L("dagar-"+t).textContent=p>0?p:"0",L("texti-"+t).textContent=p>1?"dagar \xED "+u:p===1?"dagur \xED "+u:p===0?u+" \xED dag":u+" komi\xF0")}function x(t){var i=t.stada==="Loki\xF0",u=O(t.frestur),p=!i&&u!=null&&u<0,v=e("li",i?"vst-lokid":p?"vst-seint":""),a=e("span","vst-led"+(p?" vst-led--late":s[t.stada]?" vst-led--"+s[t.stada]:""));a.title=p?t.stada+", komi\xF0 fram yfir frest":t.stada,v.appendChild(a);var n=e("span","vst-verk",t.verk);t.notur&&!i&&n.appendChild(e("small","",t.notur)),v.appendChild(n);var r=e("span","vst-val");return r.appendChild(C(t,"stada",T,"Sta\xF0a verksins: ")),r.appendChild(C(t,"hver",[""].concat(j.band||[]),"Hver \xE1 verki\xF0: ")),v.appendChild(r),v.appendChild(e("span","vst-frestur",N(t.frestur))),v}function C(t,i,u,p){var v=e("select");return v.setAttribute("aria-label",p+t.verk),u.indexOf(t[i])===-1&&(u=u.concat([t[i]])),u.forEach(function(a){var n=e("option","",a||"Enginn");n.value=a,v.appendChild(n)}),v.value=t[i],v.addEventListener("change",function(){h(t,i,v)}),v}function h(t,i,u){var p={action:"bandBreyta",b:Z,rod:t.rod,verk:t.verk};p[i]=u.value,u.disabled=!0,L("skilabod").textContent="",bt(p).then(function(v){if(!v.ok)throw new Error(v.villa||"Hlekkurinn gildir ekki lengur.");t.hver=v.hver,t.stada=v.stada}).catch(function(v){L("skilabod").textContent="T\xF3kst ekki a\xF0 vista. "+v.message}).then(function(){X(j)})}var j={};function X(t){j=t,z("preorder",t.preorder,"pre-order"),z("utgafa",t.utgafa,"\xFAtg\xE1fu");var i=t.verkefni.length,u=t.verkefni.filter(function(w){return w.stada==="Loki\xF0"}).length;L("hlutfall").textContent=u+" / "+i;var p=L("maelir");p.textContent="",p.setAttribute("aria-label",u+" af "+i+" verkum loki\xF0");for(var v=0;v<i;v++)p.appendChild(e("span",v<u?"on":""));var a=L("naest");a.textContent="",t.verkefni.filter(function(w){return w.stada!=="Loki\xF0"&&V(w.frestur)}).sort(function(w,g){return V(w.frestur)-V(g.frestur)}).slice(0,7).forEach(function(w){a.appendChild(x(w))}),a.children.length||a.appendChild(e("li","","Ekkert \xE1 dagskr\xE1 me\xF0 fresti."));var n=L("hopar"),r={};Array.prototype.forEach.call(n.children,function(w){r[w.getAttribute("data-flokkur")]=w.open}),n.textContent="";var d=[],k={};t.verkefni.forEach(function(w){var g=w.flokkur||"Anna\xF0";k[g]||(k[g]=[],d.push(g)),k[g].push(w)}),d.forEach(function(w){var g=k[w],_=g.filter(function(at){return at.stada==="Loki\xF0"}).length,$=e("details","vst-group");$.setAttribute("data-flokkur",w),$.open=w in r?r[w]:_<g.length;var rt=e("summary");rt.appendChild(e("span","",w)),rt.appendChild(e("span","",_+"/"+g.length)),$.appendChild(rt);var vt=e("ul");g.forEach(function(at){vt.appendChild(x(at))}),$.appendChild(vt),n.appendChild($)});var b=L("pressa");b.textContent="";var K=null,F=t.pressa.some(function(w){return w.flokkur});if(t.pressa.forEach(function(w){if(F&&(w.flokkur||"")!==K){K=w.flokkur||"";var g=e("tr","vst-flokkur"),_=e("th","",K||"\xD3flokka\xF0");_.colSpan=7,g.appendChild(_),b.appendChild(g)}var $=e("tr",J[w.stada||"Sent"]?"vst-st-"+J[w.stada||"Sent"]:"");$.appendChild(e("td","",w.midill)),$.appendChild(e("td","",w.stada||"Sent")),$.appendChild(e("td","",w.hver||"\u2013")),$.appendChild(e("td","",N(w.sent)||"\u2013")),$.appendChild(e("td","",w.opnad?N(w.opnad)+(w.opnanir>1?" ("+w.opnanir+"\xD7)":""):"\u2013")),$.appendChild(e("td","",N(w.hlusta)||"\u2013")),$.appendChild(e("td","",N(w.saekja)||"\u2013")),b.appendChild($)}),!t.pressa.length){var A=e("td","","Enginn \xE1 markh\xF3pslistanum enn\xFE\xE1.");A.colSpan=7,b.appendChild(e("tr")).appendChild(A)}S(t.band||[]),W(t.meta),q(t.efni||[]),t.stream?L("stream").href=t.stream:L("stream").hidden=!0,L("uppfaert").textContent=t.uppfaert}var ut=/\.(jpe?g|png|gif|webp)$/i,G=/\.(mp4|mov|m4v|webm)$/i,E="Samf\xE9lagsmi\xF0lar",R=["Dr\xF6g","Sam\xFEykkt","P\xF3sta\xF0","Sleppa"],Y={P\u00F3sta\u00F0:"postad",Sleppa:"sleppa"};function st(t){try{var i=new URL(t);return{nafn:decodeURIComponent(i.pathname.split("/").pop()||""),dropbox:/(^|\.)dropbox\.com$/.test(i.hostname),u:i}}catch{return{nafn:"",dropbox:!1,u:null}}}function et(t){var i=st(t.slod),u=e("div","vst-slod");if(ut.test(i.nafn)){var p=e("img","vst-mynd");p.src=jt(t.slod),p.alt=t.heiti||"",p.loading="lazy";var v=wt(t.slod);v.appendChild(p),u.appendChild(v),u.appendChild(wt(t.slod,"vst-afrita","Opna \xED fullri st\xE6r\xF0"))}else if(i.dropbox){var a=/\/fo\//.test(i.u.pathname)?"Mappa \xED Dropbox":(G.test(i.nafn)?"Myndband: ":"Dropbox: ")+i.nafn;u.appendChild(wt(t.slod,"",a))}else u.appendChild(wt(t.slod,"",t.slod.replace(/^https?:\/\/(www\.)?/,"")));return u.appendChild(Ut(t.slod,"Afrita hlekk")),u}function ot(t,i){var u=e("button","vst-afrita"+(i?" "+i:""),t);return u.type="button",u}function nt(t){return t.b=Z,bt(t).catch(function(i){return{ok:!1,villa:i.message}})}function Q(){return L("eg").value}function dt(t,i){for(var u=j.efni||[],p=0;p<u.length;p++)u[p].id===t.id&&(u[p]=t);var v=ft(t);return i.parentNode.replaceChild(v,i),v}function ft(t){var i=t.flokkur===E,u=!/^md-/.test(t.id),p=e("article","vst-but"+(i&&Y[t.stada]?" vst-but-"+Y[t.stada]:"")),v=e("div","vst-but-haus");v.appendChild(e("span","vst-but-heiti",t.heiti||"\xC1n heitis"));var a=e("span","vst-but-hlid");if(t.birta){var n=O(t.birta),r=t.stada==="P\xF3sta\xF0"||t.stada==="Sleppa",d=i&&!r&&n!=null&&n<0;a.appendChild(e("span","vst-but-birta"+(n===0?" vst-idag":"")+(d?" vst-but-seint":""),n===0?"\xCD dag":N(t.birta)+(d?", ekki p\xF3sta\xF0":""))),n!=null&&n<0&&(!i||r)&&p.classList.add("vst-but-lidid")}if(i&&u&&t.birta){var k=e("select");k.setAttribute("aria-label","Sta\xF0a f\xE6rslunnar "+(t.heiti||"")),R.forEach(function(g){var _=e("option","",g);_.value=g,k.appendChild(_)}),k.value=t.stada||R[0],k.addEventListener("change",function(){if(!Q()){k.value=t.stada,pt(p,"Veldu hver \xFE\xFA ert efst \xED Efni.");return}k.disabled=!0,nt({action:"bandEfniVista",id:t.id,hver:Q(),reitir:{stada:k.value}}).then(function(g){g.ok?dt(g.but,p):(k.disabled=!1,k.value=t.stada,pt(p,g.villa))})}),a.appendChild(k)}if(u){var b=ot("Breyta","vst-but-takki");b.addEventListener("click",function(){f(t,p)}),a.appendChild(b)}v.appendChild(a),p.appendChild(v);var K=j.meta?j.meta.faerslur.filter(function(g){return g.efni===t.id}):[];if(K.length){var F=e("p","vst-but-meta");K.forEach(function(g){F.appendChild(wt(g.hlekkur,"",g.midill+": "+(g.na!=null?"n\xE1 "+g.na+", ":"")+g.vidbrogd+" vi\xF0br\xF6g\xF0"))}),p.appendChild(F)}t.slod&&p.appendChild(et(t));var A=[["is","\xCDslenska"],["en","English"]].filter(function(g){return t[g[0]]});if(A.length){var w=e("div","vst-maltextar");A.forEach(function(g){var _=e("div","vst-maltexti");A.length>1&&_.appendChild(e("span","vst-mal",g[1])),_.appendChild(e("pre","vst-texti",t[g[0]])),_.appendChild(Ut(t[g[0]])),w.appendChild(_)}),p.appendChild(w)}return t.notur&&p.appendChild(e("p","vst-but-notur",t.notur)),t.breyttAf&&t.breytt&&p.appendChild(e("p","vst-but-breytt","S\xED\xF0ast breytt af "+t.breyttAf+", "+N(t.breytt.slice(0,10))+" kl. "+t.breytt.slice(11,16))),p}function pt(t,i){var u=t.querySelector(".vst-msg")||t.appendChild(e("p","vst-small vst-msg"));u.textContent=i||""}function f(t,i){var u=t.flokkur===E,p=t,v=e("form","vst-but vst-form vst-but-form");v.appendChild(e("span","vst-but-heiti","Breyta: "+(t.heiti||"\xC1n heitis")));function a(A,w,g,_,$,rt){var vt=e("label","",A),at=e(g,$||"");return g==="input"&&(at.type=w==="birta"?"date":"text"),at.name=w,at.value=_||"",vt.appendChild(at),rt&&vt.appendChild(e("small","",rt)),vt}v.appendChild(a("Heiti","heiti","input",t.heiti));var n=e("div","vst-form-rod");if(n.appendChild(a("Birta","birta","input",t.birta)),u){var r=e("label","","Sta\xF0a"),d=e("select");d.name="stada",R.forEach(function(A){var w=e("option","",A);w.value=A,d.appendChild(w)}),d.value=t.stada||R[0],r.appendChild(d),n.appendChild(r)}v.appendChild(n),v.appendChild(a("\xCDslenska","is","textarea",t.is)),v.appendChild(a("English","en","textarea",t.en)),v.appendChild(a("Mynd e\xF0a myndband","slod","input",t.slod,"","Dropbox-hlekkur \xE1 skr\xE1na e\xF0a m\xF6ppuna, e\xF0a sl\xF3\xF0 \xE1 mynd.")),v.appendChild(a("N\xF3tur","notur","textarea",t.notur,"vst-stutt","Hva\xF0a mynd fylgir, hvar \xE1 a\xF0 p\xF3sta, o.s.frv."));var k=e("div","vst-form-takkar"),b=ot("Vista");b.type="submit";var K=ot("H\xE6tta vi\xF0","vst-but-takki");k.appendChild(b),k.appendChild(K),v.appendChild(k);var F=v.appendChild(e("p","vst-small vst-msg"));K.addEventListener("click",function(){dt(p,v)}),v.addEventListener("submit",function(A){if(A.preventDefault(),F.textContent="",!Q()){F.textContent="Veldu hver \xFE\xFA ert efst \xED Efni.";return}var w={};["heiti","birta","stada","is","en","slod","notur"].forEach(function(g){v.elements[g]&&(w[g]=v.elements[g].value)}),b.disabled=!0,b.textContent="Vista...",nt({action:"bandEfniVista",id:t.id,hver:Q(),breytt:p.breytt,reitir:w}).then(function(g){if(b.disabled=!1,b.textContent="Vista",g.ok){dt(g.but,v);return}g.arekstur&&g.but&&(p=g.but),F.textContent=g.villa||"T\xF3kst ekki a\xF0 vista."})}),i.parentNode.replaceChild(v,i),v.elements.heiti.focus()}function o(t,i){return(t.birta?1:0)-(i.birta?1:0)||(t.birta<i.birta?-1:t.birta>i.birta?1:0)}var M="vogor-efni-opid";function q(t){var i=L("efni");if(L("efni-kafli").hidden=!t.length,!!t.length&&!i.querySelector(".vst-but-form")){var u={};try{u=JSON.parse(localStorage.getItem(M)||"{}")||{}}catch{}i.textContent="";var p=[],v={};t.forEach(function(a){var n=a.flokkur||"Anna\xF0";v[n]||(v[n]=[],p.push(n)),v[n].push(a)}),p.forEach(function(a){var n=e("details","vst-group");n.open=!!u[a];var r=e("summary");r.appendChild(e("span","",a));var d=String(v[a].length);if(a===E){var k=v[a].filter(function(A){return A.birta&&A.stada!=="Sleppa"}),b=k.filter(function(A){return A.stada==="P\xF3sta\xF0"}).length;d=b+"/"+k.length+" p\xF3sta\xF0ar",v[a].sort(o)}r.appendChild(e("span","",d)),n.appendChild(r);var K=e("div","vst-efni");if(v[a].forEach(function(A){K.appendChild(ft(A))}),a===E){var F=ot("N\xFD f\xE6rsla","vst-but-takki");F.addEventListener("click",function(){if(!Q()){F.textContent="Veldu fyrst hver \xFE\xFA ert";return}F.disabled=!0,nt({action:"bandEfniNytt",hver:Q(),flokkur:E}).then(function(A){if(F.disabled=!1,!A.ok){F.textContent=A.villa||"T\xF3kst ekki";return}j.efni.push(A.but);var w=ft(A.but);K.insertBefore(w,F),f(A.but,w)})}),K.appendChild(F)}n.appendChild(K),n.addEventListener("toggle",function(){u[a]=n.open;try{localStorage.setItem(M,JSON.stringify(u))}catch{}}),i.appendChild(n)})}}function W(t){if(L("meta-kafli").hidden=!t,!!t){var i=t.fylgjendur||{},u=L("fylgjendur");u.textContent="",[["fb","Facebook"],["ig","Instagram"]].forEach(function(n){if(i[n[0]]!=null){var r=e("div","vst-count");r.appendChild(e("span","vst-counter",String(i[n[0]])));var d=i[n[0]+"Breyting"];r.appendChild(e("span","","fylgjendur \xE1 "+n[1]+(d!=null?" ("+(d>=0?"+":"")+d+" fr\xE1 "+N(i.fra)+")":""))),u.appendChild(r)}});var p={};(j.efni||[]).forEach(function(n){p[n.id]=n.heiti});var v=L("meta");if(v.textContent="",t.faerslur.forEach(function(n){var r=e("tr");r.appendChild(e("td","",N(n.birt.slice(0,10))+" "+n.birt.slice(11,16))),r.appendChild(e("td","",n.midill)),r.appendChild(e("td","",n.tegund));var d=e("td","vst-meta-texti"),k=p[n.efni]?p[n.efni]:n.texti||n.tegund;d.appendChild(n.hlekkur?wt(n.hlekkur,"",k):e("span","",k)),d.title=n.texti,r.appendChild(d),[n.na,n.ahorf,n.vidbrogd].forEach(function(b){r.appendChild(e("td","vst-tala",b==null?"\u2013":String(b)))}),v.appendChild(r)}),!t.faerslur.length){var a=e("td","","Engar f\xE6rslur fundust fr\xE1 1. okt\xF3ber.");a.colSpan=7,v.appendChild(e("tr")).appendChild(a)}L("meta-sott").textContent=t.sott||"aldrei"}}function S(t){var i=L("eg"),u=i.value;u||(u=mt(y)),i.textContent="",[""].concat(t.filter(function(p){return p!=="Allir"})).forEach(function(p){var v=e("option","",p||"Veldu nafn");v.value=p,i.appendChild(v)}),i.value=t.indexOf(u)!==-1?u:""}L("eg").addEventListener("change",function(){it(y,this.value)});function I(){return bt({action:"bandStada",b:Z}).then(function(t){if(t.rangurLykill){it(l,""),U("invalid");return}if(!t.ok){L("villa").textContent=t.villa||"\xD3\xFEekkt villa.",U("error");return}X(t),U("ok")}).catch(function(t){L("villa").textContent=t.message+" Pr\xF3fa\xF0u a\xF0 endurhla\xF0a s\xED\xF0una.",U("error")})}if(L("uppfaera").addEventListener("click",function(){var t=this;t.disabled=!0,I().then(function(){t.disabled=!1})}),!Z){U("invalid");return}U("loading"),I()}var oa=`<div class="vbt">
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
`;function la(m){m.innerHTML=oa;var l=m.getAttribute("data-verkefni")||"",y=l?"vogor-birta-"+l:"vogor-promo-key",s="vogor-birta-mal",T={Birt:"ok","Prufa \xED lagi":"ok",T\u00EDmasett:"bid",Prufa:"prufa","B\xED\xF0ur Instagram":"bid",Sendi:"bid",Villa:"villa",\u00D3v\u00EDst:"villa",\u00DAtrunni\u00F0:"villa"},J=["T\xEDmasett","Prufa","B\xED\xF0ur Instagram"],L={Prufa:"\xCD yfirfer\xF0","Prufa \xED lagi":"Yfirfer\xF0 \xED lagi"};function U(f){return f.prufa&&L[f.stada]||f.stada}var Z=["Facebook","Instagram","Instagram Story","Facebook Story"],V="Stafr\xE6nn H\xE1kon",N="stafraennhakon",B=["is","en"];function O(f){if(f){Z=f.midlar||Z,V=f.sidaNafn||V,N=f.igNafn||N,B=f.tungumal||B;var o=m.querySelector(".vbt-head .vst-dymo");o&&f.titill&&(o.textContent="|"+f.titill+"|BIRTA|");var M=z("yfirlit");M&&f.yfirlit&&(M.href=f.yfirlit,M.textContent="yfirlestrars\xED\xF0unni")}}function z(f){return m.querySelector('[data-bt="'+f+'"]')}var x=xt("l",y).lykill;function C(f,o){var M=Object.assign({action:f,key:x},o||{});return l&&(M.verkefni=l),bt(M,l?ea:null).then(function(q){return q.rangtLeyniord&&(x="",it(y,""),h("gate")),q}).catch(function(q){return{ok:!1,villa:q.message}})}function h(f){z("gate").hidden=f!=="gate",z("hledur").hidden=f!=="hledur",z("app").hidden=f!=="app"}function j(f){return f?new Date(f.replace(" ","T")+":00Z"):null}function X(f){var o=j(f);return o?o.getUTCDate()+". "+Pt[o.getUTCMonth()]+" "+f.slice(11,16):""}function ut(f){var o=Math.round((j(f)-Date.now())/6e4);if(o<=0)return"n\xFAna";if(o<60)return o+" m\xEDn";if(o<2880)return Math.floor(o/60)+" klst "+o%60+" m\xEDn";var M=Math.round(o/1440);return M+(M===1?" dag":" daga")}function G(f){var o=Math.round((j(f)-Date.now())/6e4);return o<60?Math.max(o,0)+" m\xEDn":o<2880?Math.round(o/60)+" klst":Math.round(o/1440)+" dagar"}var E={},R="vogor-birta-drog",Y={};try{Y=JSON.parse(sessionStorage.getItem(R)||"{}")||{}}catch{}function st(){try{sessionStorage.setItem(R,JSON.stringify(Y))}catch{}}var et=[];function ot(f){return C("birtingar").then(function(o){if(!o.ok){o.rangtLeyniord||(h("gate"),z("gate-villa").textContent=o.villa||"N\xE1\xF0i ekki \xED g\xF6gnin.");return}E=o,O(o.verkefni),f===!0?Q():nt(),h("app")})}function nt(){et=[],Q();var f=z("faerslur");f.textContent="",E.faerslur.slice().sort(function(o,M){return o.birta.localeCompare(M.birta)}).forEach(function(o){f.appendChild(ft(o))})}function Q(){var f={};E.faerslur.forEach(function(S){f[S.id]=S.heiti});var o=E.birtingar.filter(function(S){return J.indexOf(S.stada)!==-1}).sort(function(S,I){return S.timi.localeCompare(I.timi)}),M=E.birtingar.filter(function(S){return J.indexOf(S.stada)===-1&&S.stada!=="H\xE6tt vi\xF0"}).sort(function(S,I){return I.timi.localeCompare(S.timi)}).slice(0,15),q=z("rod");q.textContent="",o.concat(M).forEach(function(S){var I=e("li",J.indexOf(S.stada)===-1?"vbt-buid":"");I.appendChild(e("span","vst-led vst-led--"+(T[S.stada]||""))),I.appendChild(e("span","vbt-timi",X(S.timi))),I.appendChild(e("span","",S.midill));var t=e("span","vbt-heiti",(S.prufa?"Yfirfer\xF0: ":"")+(f[S.efni]||S.efni)),i=e("small");if(S.stada==="Birt"&&S.nidurstada){var u=e("a","","Birt, opna f\xE6rsluna");u.href=S.nidurstada,u.target="_blank",u.rel="noopener",i.appendChild(u)}else i.textContent=(S.stada==="T\xEDmasett"?"Fer \xFAt eftir "+ut(S.timi):U(S)+(S.nidurstada?": "+S.nidurstada:""))+(S.hver&&S.hver!==E.eg?" \xB7 "+S.hver:"");t.appendChild(i),I.appendChild(t),J.indexOf(S.stada)!==-1?I.appendChild(dt(S)):I.appendChild(e("span")),q.appendChild(I)}),q.children.length||q.appendChild(e("li","","Ekkert \xED bi\xF0r\xF6\xF0 enn\xFE\xE1."));var W=o.filter(function(S){return!S.prufa})[0];z("naesta").textContent=W?G(W.timi):"--",z("naesta-texti").textContent=W?"\xED n\xE6stu birtingu":"ekkert \xED bi\xF0r\xF6\xF0",z("sott").textContent=E.nu+(E.eg?", innskr\xE1\xF0(ur): "+E.eg:""),et.forEach(function(S){S()})}function dt(f){var o=e("button","vbt-btn vbt-btn--ljos","H\xE6tta vi\xF0");return o.type="button",o.addEventListener("click",function(){o.disabled=!0,C("birtingHaetta",{id:f.id}).then(function(M){M.ok?(E.birtingar=M.birtingar,Q()):(o.disabled=!1,alert(M.villa))})}),o}function ft(f){var o=Y[f.id]||(Y[f.id]={}),M=f.stada==="P\xF3sta\xF0",q=e("article","vbt-kort"+(M?" vbt-kort--postad":"")),W=e("div","vbt-kort-haus");W.appendChild(e("b","",f.heiti));var S=j(f.birta+" 00:00");W.appendChild(e("span","vbt-merki",S.getUTCDate()+". "+Pt[S.getUTCMonth()]+" \xB7 "+f.stada)),q.appendChild(W);var I=e("div","vbt-forsk"),t=e("div","vbt-skipta"),i=Z.indexOf("Instagram")!==-1?"Instagram":"Facebook";["Instagram","Facebook","Story"].filter(function(c){return c!=="Instagram"||Z.indexOf("Instagram")!==-1}).forEach(function(c){var P=e("button","",c);P.type="button",P.addEventListener("click",function(){i=c,ct()}),t.appendChild(P)}),I.appendChild(t);var u=e("div");I.appendChild(u),q.appendChild(I);var p=e("form","vbt-stjorn"),v=e("div","vbt-midlar"),a={};Z.forEach(function(c){var P=e("label"),D=e("input");D.type="checkbox",D.checked=o[c]!==void 0?o[c]:!/ Story$/.test(c),a[c]=D,P.appendChild(D),P.appendChild(document.createTextNode(c)),v.appendChild(P),D.addEventListener("change",function(){o[c]=D.checked,ct()})}),p.appendChild(v);var n=e("label","","Texti"),r=e("select");[["en","English"],["is","\xCDslenska"],["baedi","\xCDslenska og enska"]].forEach(function(c){var P=e("option","",c[1]);P.value=c[0],r.appendChild(P)}),r.value=B.length===1?B[0]:o.mal||mt(s)||"en",n.hidden=B.length===1,n.appendChild(r),p.appendChild(n);var d=e("label","","Textinn sem fer \xFAt "),k=e("span","vbt-teljari");d.appendChild(k);var b=e("textarea");d.appendChild(b),p.appendChild(d);function K(){b.value=r.value==="is"?f.is:r.value==="en"?f.en:[f.is,f.en].filter(Boolean).join(`

`),o.texti=b.value,ct()}r.addEventListener("change",function(){o.mal=r.value,it(s,r.value),K()}),b.addEventListener("input",function(){o.texti=b.value,ct()});var F=e("label","","Collab \xE1 Instagram ");F.appendChild(e("span","vbt-teljari","mest 3, a\xF0skilin me\xF0 kommu"));var A=e("input");A.value=o.collab||"",A.placeholder="t.d. magnus, arnithor",F.appendChild(A),p.appendChild(F),A.addEventListener("input",function(){o.collab=A.value,ct()});var w=e("label","","Mynd e\xF0a myndband"),g=e("input");g.value=o.mynd!=null?o.mynd:f.slod||"",g.placeholder="Dropbox-hlekkur \xE1 .jpg e\xF0a .mp4",w.appendChild(g),p.appendChild(w),g.addEventListener("input",function(){o.mynd=g.value}),g.addEventListener("change",ct);var _=e("div","vbt-tvo"),$=e("label","","Dagur"),rt=e("input");rt.type="date",rt.value=o.dagur||f.birta,rt.addEventListener("change",function(){o.dagur=rt.value,ct()}),$.appendChild(rt);var vt=e("label","","Klukkan"),at=e("input");at.type="time",at.value=o.klukka||"12:00",at.addEventListener("change",function(){o.klukka=at.value,ct()}),vt.appendChild(at),_.appendChild($),_.appendChild(vt),p.appendChild(_);var Bt=e("p","vbt-adv");p.appendChild(Bt);var Kt=e("div","vbt-takkar"),Et=e("button","vbt-btn","Senda inn");Et.type="submit",Kt.appendChild(Et),p.appendChild(Kt);var Lt=e("div","vbt-yfirferd"),Rt=e("ul","vbt-fyrri"),Gt=e("p","vbt-small"),yt=e("button","vbt-btn vbt-btn--stadfesta","Sta\xF0festa");yt.type="button",Lt.appendChild(Rt),Lt.appendChild(Gt),Lt.appendChild(yt),p.appendChild(Lt);var St=e("p","vbt-msg"+(o.skilabod?" vbt-msg--ok":""),o.skilabod||"");o.skilabod="",p.appendChild(St);var Jt=E.birtingar.filter(function(c){return c.efni===f.id&&!c.prufa&&c.stada!=="H\xE6tt vi\xF0"});if(Jt.length){var qt=e("ul","vbt-fyrri");Jt.forEach(function(c){var P=e("li");P.appendChild(e("span","vst-led vst-led--"+(T[c.stada]||""))),P.appendChild(document.createTextNode(c.midill+": "+c.stada+(c.stada==="T\xEDmasett"?" "+X(c.timi):"")+(c.hver?" \xB7 "+c.hver:""))),qt.appendChild(P)}),p.appendChild(qt)}var Ca=E.meta?E.meta.faerslur.filter(function(c){return c.efni===f.id}):[];Ca.forEach(function(c){p.appendChild(e("p","vbt-teljari",c.midill+": "+(c.na!=null?"n\xE1 "+c.na+", ":"")+(c.ahorf!=null?"\xE1horf "+c.ahorf+", ":"")+c.vidbrogd+" vi\xF0br\xF6g\xF0"))}),q.appendChild(p);function gt(c){return!!(a[c]&&a[c].checked)}function Ot(){return Z.filter(function(c){return a[c].checked})}function ct(){Array.prototype.forEach.call(t.children,function(_t){_t.setAttribute("aria-pressed",String(_t.textContent===i))});var c=na(g.value),P=gt("Instagram");k.textContent=b.value.length+(P?" / 2200":"")+" stafir"+(P?", "+(b.value.match(/#[^\s#]+/g)||[]).length+" / 30 myllumerki":""),k.classList.toggle("vbt-of",P&&b.value.length>2200);var D=[];Ot().length||D.push("Veldu a\xF0 minnsta kosti einn mi\xF0il."),P&&!g.value&&D.push("Instagram \xFEarf mynd e\xF0a myndband."),g.value&&!c.t&&D.push("Sl\xF3\xF0in \xFEarf a\xF0 enda \xE1 .jpg, .png e\xF0a .mp4 (Dropbox-hlekkur \xE1 skr\xE1na sj\xE1lfa, ekki m\xF6ppu)."),P&&c.t==="mynd"&&!/^jpe?g$/.test(c.e)&&D.push("Instagram tekur bara JPG-myndir."),P&&/instagram\.com|ffm\.to|https?:\/\//.test(b.value)&&D.push("Hlekkir virka ekki \xED texta \xE1 Instagram; skrifa\xF0u \u201Ehlekkur \xED bio\u201C."),F.hidden=!P,P&&Ht().length>3&&D.push("Instagram leyfir mest 3 \xED collab.");var ht=gt("Instagram Story")||gt("Facebook Story");if(ht&&!g.value&&D.push("Story \xFEarf mynd e\xF0a myndband."),gt("Instagram Story")&&c.t==="mynd"&&!/^jpe?g$/.test(c.e)&&D.push("Instagram Story tekur bara JPG-myndir."),ht&&D.push("Textinn fer ekki me\xF0 \xED Story; hann \xFEarf a\xF0 vera \xED myndinni sj\xE1lfri (9:16)."),Bt.textContent=D.join(" "),st(),Qt(),u.textContent="",i==="Story"){u.appendChild(ja(c));return}var H=i==="Facebook",lt=e("div","vbt-sima"+(H?" vbt-sima--fb":"")),At=e("div","vbt-sima-haus");At.appendChild(e("i"));var Yt=!H&&P?Ht():[],Xt=e("span","",H?V:N+(Yt.length?" og "+Yt.join(", "):""));H&&Xt.appendChild(e("small","",X(rt.value+" "+(at.value||"12:00")))),At.appendChild(Xt),lt.appendChild(At);var Tt=e("div","vbt-sima-texti"),Wt=H?b.value:b.value.split(`
`)[0].slice(0,125);H||Tt.appendChild(e("b","",N)),Tt.appendChild(document.createTextNode(Wt)),!H&&b.value.length>Wt.length&&Tt.appendChild(e("span","vbt-meira","\u2026 meira")),H&&lt.appendChild(Tt);var Mt=e("div","vbt-sima-mynd");if(c.t==="mynd"){var Ft=e("img");Ft.src=jt(g.value),Ft.alt="",Mt.appendChild(Ft)}else if(c.t==="myndband"){var It=e("video");It.src=jt(g.value),It.muted=!0,It.controls=!0,It.preload="metadata",Mt.appendChild(It)}else Mt.textContent=g.value?"Sl\xF3\xF0 sem er hvorki mynd n\xE9 myndband":"Engin mynd";(g.value||!H)&&lt.appendChild(Mt),H||(lt.appendChild(e("div","vbt-sima-takkar","\u2661 \u25EF \u27A4")),lt.appendChild(Tt)),u.appendChild(lt)}function ja(c){var P=e("div","vbt-sima vbt-sima--story"),D=e("div","vbt-sima-mynd");if(c.t==="mynd"){var ht=e("img");ht.src=jt(g.value),ht.alt="",D.appendChild(ht)}else if(c.t==="myndband"){var H=e("video");H.src=jt(g.value),H.muted=!0,H.controls=!0,H.preload="metadata",D.appendChild(H)}else D.textContent="Engin mynd";P.appendChild(D);var lt=e("div","vbt-sima-haus");return lt.appendChild(e("i")),lt.appendChild(e("span","",gt("Instagram Story")||!gt("Facebook Story")?N:V)),P.appendChild(lt),P}function Ht(){return A.value.split(/[\s,;]+/).map(function(c){return c.replace(/^@/,"").trim().toLowerCase()}).filter(Boolean)}function Zt(){return JSON.stringify([Ot(),b.value,g.value.trim(),gt("Instagram")?Ht():[]])}function Qt(){var c=o.hopur?E.birtingar.filter(function(H){return H.id.indexOf(o.hopur+"-")===0}):[];if(Lt.hidden=!c.length,Et.textContent=c.length?"Senda inn aftur":"Senda inn",!!c.length){Rt.textContent="",c.forEach(function(H){var lt=e("li");lt.appendChild(e("span","vst-led vst-led--"+(T[H.stada]||"")));var At=H.stada!=="Prufa"&&H.stada!=="B\xED\xF0ur Instagram";lt.appendChild(document.createTextNode(H.midill+": "+U(H)+(At&&H.nidurstada?" ("+H.nidurstada+")":""))),Rt.appendChild(lt)});var P=Zt()!==o.snid,D=c.every(function(H){return H.stada==="Prufa \xED lagi"}),ht=c.some(function(H){return["Villa","\xD3v\xEDst","\xDAtrunni\xF0","H\xE6tt vi\xF0"].indexOf(H.stada)!==-1});yt.hidden=!D||P,yt.textContent="Sta\xF0festa og t\xEDmasetja "+X(rt.value+" "+(at.value||"12:00")),Gt.textContent=P?"\xDE\xFA breyttir f\xE6rslunni eftir a\xF0 h\xFAn var send inn. Sendu hana inn aftur svo breytingin ver\xF0i yfirfarin.":ht?"Yfirfer\xF0in st\xF3\xF0st ekki. Laga\xF0u \xFEa\xF0 sem er a\xF0 og sendu inn aftur.":D?"Allt \xED lagi. Sta\xF0festu til a\xF0 t\xEDmasetja; \xFEa\xF0 m\xE1 h\xE6tta vi\xF0 \xED bi\xF0r\xF6\xF0inni \xFEanga\xF0 til.":(c.some(function(H){return/^Instagram/.test(H.midill)})?c.some(function(H){return/^Facebook/.test(H.midill)})?"Facebook og Instagram eru":"Instagram er":"Facebook er")+" a\xF0 yfirfara. \xDEa\xF0 tekur allt a\xF0 5 m\xEDn\xFAtur, myndband stundum lengur. S\xED\xF0an uppf\xE6rist sj\xE1lf."}}return et.push(Qt),p.addEventListener("submit",function(c){c.preventDefault(),St.textContent="",St.classList.remove("vbt-msg--ok"),Et.disabled=!0,C("birtingVista",{efni:f.id,midlar:Ot(),timi:rt.value+" "+at.value,texti:b.value,mynd:g.value.trim(),prufa:!0,collab:gt("Instagram")?Ht().join(","):""}).then(function(P){if(Et.disabled=!1,!P.ok){St.textContent=P.villa||"T\xF3kst ekki.";return}o.hopur=P.hopur,o.snid=Zt(),st(),E.birtingar=P.birtingar,Q()})}),yt.addEventListener("click",function(){St.textContent="",yt.disabled=!0,C("birtingStadfesta",{hopur:o.hopur,timi:rt.value+" "+at.value}).then(function(c){if(yt.disabled=!1,!c.ok){St.textContent=c.villa||"T\xF3kst ekki.";return}o.hopur=null,o.skilabod="T\xEDmasett. F\xE6rslan s\xE9st \xED bi\xF0r\xF6\xF0inni efst og m\xE1 h\xE6tta vi\xF0 \xFEar.",st(),E.birtingar=c.birtingar,nt()})}),o.texti!=null?(b.value=o.texti,ct()):K(),q}z("gate").addEventListener("submit",function(f){f.preventDefault(),x=z("lykill").value.trim(),it(y,x),z("gate-villa").textContent="",h("hledur"),ot()}),z("uppfaera").addEventListener("click",function(){ot()}),z("utskra").addEventListener("click",function(){x="",it(y,""),h("gate")});var pt=0;setInterval(function(){if(!(!x||z("app").hidden||document.hidden)){pt++;var f=E.birtingar&&E.birtingar.some(function(o){return o.prufa&&(o.stada==="Prufa"||o.stada==="B\xED\xF0ur Instagram")});(f||pt%3===0)&&ot(!0)}},2e4),x?(h("hledur"),ot()):h("gate")}var da=`<div class="vp" id="vp-admin">
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
`;function pa(m){m.innerHTML=da;var l="vogor-promo-key",y={en:{pressa:`Your personal promo page (stream, download, press kit):
{pressa}

Direct links:
`,beint:`Listen (private stream): {stream}
Download: {download} (MP3, FLAC or WAV)`},is:{pressa:`\xDE\xEDn pers\xF3nulega promo-s\xED\xF0a (streymi, ni\xF0urhal, pressuefni):
{pressa}

Beinir hlekkir:
`,beint:`Hlusta (loka\xF0 streymi): {stream}
S\xE6kja: {download} (MP3, FLAC e\xF0a WAV)`}};function s(a){return document.getElementById(a)}var T={},J=null,L=mt(l);function U(a,n){return bt(Object.assign({action:a,key:L},n||{})).then(function(r){if(r.rangtLeyniord&&(L="",it(l,""),Z(!1)),!r.ok)throw new Error(r.villa||"\xD3\xFEekkt villa");return r})}function Z(a){s("vp-gate").hidden=a,s("vp-app").hidden=!a}function V(a){return{pressa:T.press_page?T.press_page+"?k="+a:"",stream:T.private_stream||"",download:T.redeem?T.redeem+"?code="+a:""}}function N(a,n){return a.replace(/\{(\w+)\}/g,function(r,d){return n[d]})}function B(a,n){J=a;var r=V(a.kodi),d=y[s("vp-mal").value];s("vp-titill").textContent=a.vidtakandi+": "+a.kodi+(n?" ("+n+")":""),s("vp-blokk").value=(r.pressa?N(d.pressa,r):"")+N(d.beint,r),s("vp-afrita-hlekk").hidden=!r.pressa,s("vp-forskodun").hidden=!r.pressa,r.pressa&&(s("vp-forskodun").href=r.pressa+"&preview=1"),s("vp-nidurstada").hidden=!1}function O(a,n){var r=document.createElement("td");r.textContent=n||"-",a.appendChild(r)}function z(a){T=a.stillingar||{},s("vp-samtals").textContent=a.linur.length+" \xFAthluta\xF0, "+a.lausir+" lausir af "+a.alls;var n=s("vp-tafla").tBodies[0];n.textContent="",a.linur.forEach(function(r){var d=document.createElement("tr");O(d,r.vidtakandi),O(d,r.kodi),O(d,r.uthlutad),O(d,r.opnadSidast),O(d,r.opnanir?String(r.opnanir):""),O(d,r.hlusta),O(d,r.saekja),d.addEventListener("click",function(){B(r)}),n.appendChild(d)})}function x(){return U("stada").then(z).catch(function(a){s("vp-samtals").textContent="Villa: "+a.message})}var C=["midill","tengilidur","netfang","flokkur","leid","fra","hver","mal","stada","efni","meginmal","notur"],h={leid:"P\xF3stur",mal:"en",stada:"Dr\xF6g"},j={Sent:"sent",Svara\u00F0:"svarad",Skoppa\u00F0i:"skoppadi",Sleppt:"sleppt"},X=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,ut=/\[(BLOKK|PRESSUHLEKKUR)\]/,G=null;function E(a){return s("vp-p-"+a)}function R(a){s("vp-p-status").textContent=a||""}function Y(a){return a?a.slice(0,10):""}function st(a,n){a.options.length||n.forEach(function(r){var d=document.createElement("option");d.value=r,d.textContent=r||"\u2013",a.appendChild(d)})}function et(a,n){var r=Array.prototype.some.call(a.options,function(k){return k.value===n});if(!r){var d=document.createElement("option");d.value=n,d.textContent=n,a.appendChild(d)}a.value=n}function ot(a){T=a.stillingar||T,st(E("stada"),a.stodur),st(E("hver"),[""].concat(a.band)),st(E("flokkur"),[""].concat(a.flokkar||[]));var n={};a.postar.forEach(function(b){n[b.stada]=(n[b.stada]||0)+1});var r=a.stodur.filter(function(b){return n[b]}).map(function(b){return n[b]+" "+b.toLowerCase()});s("vp-postar-samtals").textContent=a.postar.length?a.postar.length+" vi\xF0takendur: "+r.join(", "):"Enginn vi\xF0takandi skr\xE1\xF0ur enn";var d=s("vp-postar").tBodies[0];d.textContent="";var k=null;a.postar.forEach(function(b){if((b.flokkur||"")!==k){k=b.flokkur||"";var K=document.createElement("tr");K.className="vp-flokkur";var F=document.createElement("th");F.colSpan=7,F.textContent=k||"\xD3flokka\xF0",K.appendChild(F),d.appendChild(K)}var A=document.createElement("tr");j[b.stada]&&(A.className="vp-st-"+j[b.stada]),O(A,b.midill),O(A,b.stada),O(A,b.hver),O(A,b.leid),O(A,b.sent),O(A,b.opnad?Y(b.opnad)+(b.opnanir>1?" ("+b.opnanir+"\xD7)":""):""),O(A,Y(b.hlusta)),A.addEventListener("click",function(){q(b)}),d.appendChild(A)})}function nt(){return U("postar").then(ot).catch(function(a){s("vp-postar-samtals").textContent="Villa: "+a.message})}function Q(){var a=G||{};s("vp-post-titill").textContent=a.id?a.midill+(a.kodi?" \xB7 k\xF3\xF0i "+a.kodi:" \xB7 enginn k\xF3\xF0i"):"N\xFDr vi\xF0takandi",s("vp-p-gefa").hidden=!!a.kodi;var n=a.kodi?V(a.kodi).pressa:"";s("vp-p-forskodun").hidden=!n,n&&(s("vp-p-forskodun").href=n+"&preview=1");var r=E("leid").value==="P\xF3stur";s("vp-p-opna").textContent=r?"Opna \xED p\xF3stforriti":"Afrita og opna sl\xF3\xF0",s("vp-p-eml").hidden=!r}function dt(a){for(var n="",r=0;r<a.length;r++)n+=String.fromCharCode(a[r]);return btoa(n)}function ft(a,n){if(/^[\x20-\x7e]*$/.test(n))return a+": "+n;var r=new TextEncoder,d=[],k=[];return Array.from(n).forEach(function(b){var K=Array.from(r.encode(b));k.length+K.length>39&&(d.push("=?UTF-8?B?"+dt(k)+"?="),k=[]),k=k.concat(K)}),k.length&&d.push("=?UTF-8?B?"+dt(k)+"?="),a+": "+d.join(`\r
 `)}function pt(a,n,r,d){var k=["To: "+a];X.test(n)&&k.push("From: "+n),k.push(ft("Subject",r)),k.push("X-Unsent: 1","MIME-Version: 1.0","Content-Type: text/plain; charset=UTF-8","Content-Transfer-Encoding: base64");var b=dt(new TextEncoder().encode(d.replace(/\r?\n/g,`\r
`)));return k.join(`\r
`)+`\r
\r
`+b.replace(/(.{76})/g,`$1\r
`)+`\r
`}function f(a,n,r){var d=URL.createObjectURL(new Blob([n],{type:r})),k=document.createElement("a");k.href=d,k.download=a,document.body.appendChild(k),k.click(),k.remove(),setTimeout(function(){URL.revokeObjectURL(d)},1e3)}var o={};function M(a){C.forEach(function(n){var r=E(n),d=a[n]||h[n]||"";r.tagName==="SELECT"?et(r,d):r.value=d,o[n]=r.value})}function q(a){G=a,M(a),R(t()?"Hlekkir vi\xF0takandans eru komnir inn \xED textann. \u201EVista\u201C geymir hann \xFEannig.":""),Q(),s("vp-post").hidden=!1,s("vp-post").scrollIntoView({block:"nearest"})}function W(){var a=!(G&&G.id),n={};return C.forEach(function(r){var d=E(r).value;(a||d!==o[r])&&(n[r]=d)}),n}function S(){var a=W();return G&&G.id&&(a.id=G.id),R("Vista..."),U("postVista",{post:a}).then(function(n){return G=n.postar[0],M(G),t(),Q(),R("Vista\xF0"),nt().then(function(){return G})})}function I(){var a=E("meginmal").value;if(!ut.test(a))return a;var n=G&&G.kodi;if(!n)return null;var r=V(n),d=y[E("mal").value]||y.en,k=(r.pressa?N(d.pressa,r):"")+N(d.beint,r);return a.split("[BLOKK]").join(k).split("[PRESSUHLEKKUR]").join(r.pressa)}function t(){var a=I();return a===null||a===E("meginmal").value?!1:(E("meginmal").value=a,!0)}function i(a){var n=I();if(n===null){R("Gef\xF0u k\xF3\xF0a fyrst: p\xF3sturinn notar [BLOKK] e\xF0a [PRESSUHLEKKUR].");return}a(n)}function u(a){R("Villa: "+a.message)}function p(a,n){a.disabled=!0,n().catch(u).then(function(){a.disabled=!1})}s("vp-post-nyr").addEventListener("click",function(){q({})}),s("vp-p-loka").addEventListener("click",function(){G=null,s("vp-post").hidden=!0}),E("leid").addEventListener("change",Q),s("vp-post").addEventListener("submit",function(a){a.preventDefault(),p(s("vp-p-vista"),S)}),s("vp-p-gefa").addEventListener("click",function(){p(this,function(){return S().then(function(a){return U("postGefa",{id:a.id})}).then(function(a){T=a.stillingar||T,G=a.post,Q();var n=a.nyr?"N\xFDr k\xF3\xF0i: "+a.post.kodi:"Mi\xF0illinn \xE1tti k\xF3\xF0a fyrir: "+a.post.kodi,r=t();return(r?S():Promise.resolve()).then(function(){return R(n+(r?". Hlekkirnir eru komnir inn \xED textann.":"")),Promise.all([x(),nt()])})})})}),s("vp-p-opna").addEventListener("click",function(){var a=this;i(function(n){var r=E("netfang").value.trim(),d=E("fra").value;if(E("leid").value!=="P\xF3stur"){Ct(n,a);var k=/^https?:\/\//i.test(r)?r:"";k&&window.open(k,"_blank","noopener"),R(k?"Meginm\xE1li\xF0 er afrita\xF0 og sl\xF3\xF0in opnu\xF0.":"Meginm\xE1li\xF0 er afrita\xF0. Engin sl\xF3\xF0 er skr\xE1\xF0.");return}if(!X.test(r)){R("Netfang vantar e\xF0a er ekki gilt.");return}var b="mailto:"+r+"?subject="+encodeURIComponent(E("efni").value)+"&body="+encodeURIComponent(n.replace(/\r?\n/g,`\r
`));R((d?"Sendu fr\xE1 "+d+". ":"")+(b.length>1900?"Langur p\xF3stur: ef meginm\xE1li\xF0 kemur klippt inn, nota\xF0u \u201ES\xE6kja sem dr\xF6g\u201C e\xF0a \u201EAfrita meginm\xE1l\u201C.":"")),location.href=b})}),s("vp-p-eml").addEventListener("click",function(){i(function(a){var n=E("netfang").value.trim();if(!X.test(n)){R("Netfang vantar e\xF0a er ekki gilt.");return}var r="Nafir - "+E("midill").value.trim().replace(/[\\/:*?"<>|]+/g," ")+".eml";f(r,pt(n,E("fra").value,E("efni").value,a),"message/rfc822"),R("Opna\xF0u skr\xE1na "+r+": h\xFAn \xE1 a\xF0 opnast sem \xF3sendur p\xF3stur \xED p\xF3stforritinu.")})}),s("vp-p-afrita-efni").addEventListener("click",function(){Ct(E("efni").value,this)}),s("vp-p-afrita-meginmal").addEventListener("click",function(){var a=this;i(function(n){Ct(n,a)})}),s("vp-p-sent").addEventListener("click",function(){p(this,function(){return S().then(function(a){return U("postStada",{id:a.id,stada:"Sent"})}).then(function(a){return G=a.post,M(a.post),Q(),R("Merkt sent "+a.post.sent),nt()})})});function v(){return Promise.all([x(),nt()])}s("vp-gate").addEventListener("submit",function(a){a.preventDefault(),L=s("vp-key").value.trim(),it(l,L),s("vp-key").value="",Z(!0),v()}),s("vp-gefa").addEventListener("submit",function(a){a.preventDefault();var n=s("vp-gefa-btn"),r=s("vp-status");n.disabled=!0,r.textContent="S\xE6ki k\xF3\xF0a...",U("gefa",{vidtakandi:s("vp-nafn").value,netfang:s("vp-netfang").value}).then(function(d){return T=d.stillingar||T,B(d.lina,d.nyr?"n\xFDr k\xF3\xF0i":"\xE1tti k\xF3\xF0a fyrir"),r.textContent="",s("vp-nafn").value="",s("vp-netfang").value="",x()}).catch(function(d){r.textContent="Villa: "+d.message}).then(function(){n.disabled=!1})}),s("vp-mal").addEventListener("change",function(){J&&B(J)}),s("vp-afrita-blokk").addEventListener("click",function(){Ct(s("vp-blokk").value,this)}),s("vp-afrita-hlekk").addEventListener("click",function(){Ct(V(J.kodi).pressa,this)}),s("vp-uppfaera").addEventListener("click",v),s("vp-flytja-btn").addEventListener("click",function(){var a=this;a.disabled=!0,U("flytjaInn",{texti:s("vp-innflutningur").value}).then(function(n){return s("vp-innflutningur").value="B\xE6tti vi\xF0 "+n.nyir+" k\xF3\xF0um (sett "+n.sett+"). Alls "+n.alls+".",x()}).catch(function(n){s("vp-innflutningur").value="Villa: "+n.message}).then(function(){a.disabled=!1})}),Z(!!L),L&&v()}var ua=`<div class="vpp" data-mal-bidur>
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
`;function fa(L){L.innerHTML=ua;var l=new URLSearchParams(location.search),y=(l.get("k")||"").trim().toLowerCase(),s=l.has("preview");function T(h){return Array.prototype.slice.call(document.querySelectorAll(h))}var J="nafir-press-mal",L=document.querySelector(".vpp");function U(h){return h==="is"||h==="en"?h:""}function Z(){try{return U(localStorage.getItem(J))}catch{return""}}var V=U(l.get("mal"))||Z();function N(h){L.setAttribute("data-mal",h),L.setAttribute("lang",h),L.removeAttribute("data-mal-bidur"),T("[data-mal-val]").forEach(function(j){j.setAttribute("aria-pressed",String(j.getAttribute("data-mal-val")===h))}),T("[data-alt-"+h+"]").forEach(function(j){j.alt=j.getAttribute("data-alt-"+h)})}T("[data-mal-val]").forEach(function(h){h.addEventListener("click",function(){V=h.getAttribute("data-mal-val");try{localStorage.setItem(J,V)}catch{}N(V)})});function B(){return/^is\b/i.test(navigator.language||"")?"is":"en"}V&&N(V),setTimeout(function(){L.hasAttribute("data-mal-bidur")&&N(B())},4e3);function O(h){T("[data-promo-state]").forEach(function(j){j.hidden=j.getAttribute("data-promo-state")!==h})}function z(h,j){return fetch(Dt,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(h),keepalive:!!j})}function x(h,j,X){T('[data-promo="'+h+'"]').forEach(function(ut){ut.href=j,!s&&ut.addEventListener("click",function(){z({action:"smellur",k:y,hvad:X},!0).catch(function(){})})})}function C(h,j){L.hasAttribute("data-mal-bidur")&&N(U(j)||B()),O(h)}if(!/^[a-z0-9]{4}-[a-z0-9]{4}$/.test(y)){C("invalid");return}O("loading"),z({action:"pressa",k:y,forskodun:s}).then(function(h){return h.json()}).then(function(h){if(!h.ok){C(h.villa?"error":"invalid");return}T('[data-promo="name"]').forEach(function(j){j.textContent=h.vidtakandi}),T('[data-promo="code"]').forEach(function(j){j.textContent=h.kodi}),x("listen",h.stream,"hlusta"),x("download",h.download,"saekja"),C("ok",h.mal||"en")}).catch(function(){C("error")})}var ma="T\xF3nab\xED\xF3 \xB7 laugardaginn 12.&nbsp;desember kl.&nbsp;20";function kt(m){return String(m??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Vt(m){return kt(m).replace(/(kl\.|\b\d+\.) (?=[a-záðéíóúýþæö\d])/g,"$1&nbsp;")}function Ha(m){let l=/[.?!] /.exec(m);return l?"<b>"+Vt(m.slice(0,l.index+1))+"</b> "+Vt(m.slice(l.index+2)):Vt(m)}function va(m,{saga:l=!1,plakat:y=""}={}){let s=String(m.meginmal||"").trim(),T=String(m.undirskrift||"").trim(),J=String(m.heimild||"").trim(),L=l&&y?` style="--plakat: url('${kt(y)}')"`:"";return`<div class="spj${l?" spj--saga":""}"${L}><div class="urklippa"><div class="haus">Sm\xE1augl\xFDsingar <small>A\xF0venta 2026</small></div><div class="flokkur">${kt(m.flokkur)}</div><div class="rammi"><p class="meginmal${s.length>=260?" meginmal--langt":""}">${Ha(s)}</p>`+(T?`<p class="undirskrift">${kt(T)}</p>`:"")+"</div>"+(J?`<p class="heimild">${kt(J)}</p>`:"")+`<div class="hvar-saga">${ma}</div></div><div class="merki"><div class="per">Per: Segulsvi\xF0</div><div class="stund">A\xF0ventustund</div><div class="hvar">${ma}</div></div></div>`}var ca=`<div class="yl">
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
`;var ga=`/* \xDAtlit sm\xE1augl\xFDsingaspjaldsins hj\xE1 Per. Sama skr\xE1 teiknar spjaldi\xF0 \xE1
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
`;var ha=`/* Yfirlestrars\xED\xF0an \xE1 /per/auglysingar (yfirlestur.js). Spjaldi\xF0 sj\xE1lft er \xED spjald.css. */
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
`;var Ra="https://script.google.com/macros/s/AKfycbzQ-oaSyVQpcWQO2UkB0BkZToo-RlIdZR2Ap3iYBsb7BnAH4wkpNlWotDb_b9rdFHnG/exec",ba="per-yfirlestur-lykill",ka="per-yfirlestur-hver",Oa="https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Roboto+Condensed:ital,wght@0,400;0,700;1,400&family=Yellowtail&display=swap",Fa=["sun","m\xE1n","\xFEri","mi\xF0","fim","f\xF6s","lau"],ya=["jan","feb","mar","apr","ma\xED","j\xFAn","j\xFAl","\xE1g\xFA","sep","okt","n\xF3v","des"],zt=["flokkur","meginmal","undirskrift","heimild","postur","birta","stada","athugasemd"];function Da(){if(document.getElementById("per-yfirlestur-css"))return;let m=document.createElement("link");m.rel="stylesheet",m.href=Oa,document.head.appendChild(m);let l=document.createElement("style");l.id="per-yfirlestur-css",l.textContent=ga+`
`+ha,document.head.appendChild(l)}function tt(m,l,y){let s=document.createElement(m);return l&&(s.className=l),y!=null&&(s.textContent=y),s}function Ua(m){let l=/^(\d{4})-(\d\d)-(\d\d)$/.exec(m||"");if(!l)return"";let y=new Date(Number(l[1]),Number(l[2])-1,Number(l[3]));return Fa[y.getDay()]+" "+y.getDate()+". "+ya[y.getMonth()]}function Va(m){let l=/^(\d{4})-(\d\d)-(\d\d) (\d\d:\d\d)/.exec(m||"");return l?Number(l[3])+". "+ya[Number(l[2])-1]+" kl. "+l[4]:""}function xa(m){Da(),m.innerHTML=ca;let l=x=>m.querySelector('[data-yl="'+x+'"]'),{lykill:y}=xt("k",ba),s=mt(ka),T={auglysingar:[],stodur:[],nofn:[]},J={};function L(x,C){let h=l("stada");h.hidden=!x,h.textContent=x||"",h.classList.toggle("yl-villa",!!C)}function U(x){return Nt(Ra,{...x,k:y}).then(C=>(C.rangurLykill&&it(ba,""),C))}function Z(x){let C=x.querySelector(".spj");if(!C){x.style.height="";return}let h=x.clientWidth/1080;x.style.height=Math.round(1350*h)+"px",C.style.transform="scale("+h+")"}let V=typeof ResizeObserver=="function"?new ResizeObserver(x=>x.forEach(C=>Z(C.target))):null;function N(){let x=l("hver");for(x.hidden=!1;x.children.length>1;)x.removeChild(x.lastChild);T.nofn.forEach(C=>{let h=tt("button","yl-hnappur",C);h.type="button",h.setAttribute("aria-pressed",String(C===s)),h.addEventListener("click",()=>{s=C,it(ka,C),N()}),x.appendChild(h)})}function B(x,C,h){let j=tt("label");return j.appendChild(document.createTextNode(x)),h&&j.appendChild(tt("small","",h)),j.appendChild(C),j}function O(x){let C=x,h=tt("article","yl-augl"),j=tt("div","yl-augl-haus"),X=tt("h2"),ut=tt("span","yl-dags"),G=tt("span","yl-merki");j.append(ut,X,G),h.appendChild(j);let E=tt("div","yl-augl-efni"),R=tt("div","yl-forskodun");R.setAttribute("aria-label","Forsko\xF0un spjaldsins"),E.appendChild(R);let Y=tt("form","yl-form"),st={};function et(I,t,i){let u=tt(t);return i&&(u.type=i),t==="textarea"&&(u.rows=I==="meginmal"?7:I==="postur"?5:2),st[I]=u,u}Y.appendChild(B("Flokkur",et("flokkur","input","text")));let ot=B("Augl\xFDsingin",et("meginmal","textarea"),"Fyrsta setningin ver\xF0ur feitletru\xF0");Y.appendChild(ot);let nt=tt("div","yl-tvennt");nt.appendChild(B("Undirskrift",et("undirskrift","input","text"),"Ne\xF0st til h\xE6gri, m\xE1 vera t\xF3m")),nt.appendChild(B("Sm\xE1tt letur undir",et("heimild","input","text"),"M\xE1 vera t\xF3mt")),Y.appendChild(nt),Y.appendChild(B("Texti me\xF0 p\xF3stinum",et("postur","textarea"),"Fer \xE1 Facebook og Instagram me\xF0 myndinni"));let Q=tt("div","yl-tvennt");Q.appendChild(B("Fer \xED lofti\xF0",et("birta","input","date")));let dt=et("stada","select");T.stodur.forEach(I=>{let t=tt("option","",I);t.value=I,dt.appendChild(t)}),Q.appendChild(B("Sta\xF0a",dt)),Y.appendChild(Q),Y.appendChild(B("Athugasemd",et("athugasemd","textarea"),"Til \xD3la, fer ekki \xE1 spjaldi\xF0"));let ft=tt("div","yl-adgerdir"),pt=tt("button","yl-hnappur yl-hnappur--adal","Vista");pt.type="submit";let f=tt("button","yl-hnappur","Afturkalla");f.type="button";let o=tt("p");o.setAttribute("aria-live","polite"),ft.append(pt,f,o),Y.appendChild(ft),E.appendChild(Y),h.appendChild(E);function M(){let I={};return zt.forEach(t=>I[t]=st[t].value),I}function q(){let I=M();return zt.filter(t=>I[t]!==(C[t]||""))}function W(I){let t=M();X.textContent=t.flokkur||C.nafn,ut.textContent=Ua(t.birta)||"Engin dagsetning",G.textContent=t.stada,G.setAttribute("data-stada",t.stada);let i=t.flokkur.trim()==="P\xF3stur";ot.hidden=nt.hidden=i,R.innerHTML=i?'<div class="yl-posttexti"><small>P\xF3stur \xE1n spjalds'+(t.athugasemd.trim()?". "+kt(t.athugasemd.trim()):"")+"</small>"+kt(t.postur)+"</div>":va(t),Z(R);let u=q();J[C.nafn]=u.length>0,pt.disabled=f.disabled=!u.length,I?(o.textContent=I,o.className=""):u.length?(o.textContent="\xD3vista\xF0ar breytingar",o.className="yl-obreytt"):(o.textContent=C.breytt&&C.breyttAf?"S\xED\xF0ast vista\xF0 "+Va(C.breytt)+" af "+C.breyttAf:"",o.className="")}function S(I){zt.forEach(t=>st[t].value=I[t]||"")}return S(x),zt.forEach(I=>{st[I].addEventListener(I==="stada"||I==="birta"?"change":"input",()=>W())}),f.addEventListener("click",()=>{S(C),W()}),Y.addEventListener("submit",I=>{if(I.preventDefault(),!s){W("Veldu fyrst hver \xFE\xFA ert, efst \xE1 s\xED\xF0unni."),o.className="yl-obreytt",l("hver").scrollIntoView({behavior:"smooth",block:"center"});return}let t={};q().forEach(i=>t[i]=st[i].value),pt.disabled=f.disabled=!0,o.textContent="Vista \u2026",U({action:"vista",nafn:C.nafn,hver:s,breytt:C.breytt,reitir:t}).then(i=>{if(i.arekstur){C=i.auglysing,W(i.villa),o.className="yl-obreytt";return}if(!i.ok)throw new Error(i.rangurLykill?"Hlekkurinn gildir ekki lengur.":i.villa);C=i.auglysing,S(C),W()}).catch(i=>{W("T\xF3kst ekki a\xF0 vista. "+i.message),o.className="yl-obreytt"})}),V&&V.observe(R),setTimeout(W,0),h}function z(){let x=l("listi");x.innerHTML="";let C=j=>j.birta||"9999",h=T.auglysingar.slice().sort((j,X)=>C(j)<C(X)?-1:C(j)>C(X)?1:0);h.forEach(j=>x.appendChild(O(j))),L(h.length?"":"Engar augl\xFDsingar komnar inn enn\xFE\xE1.")}if(window.addEventListener("beforeunload",x=>{Object.values(J).some(Boolean)&&(x.preventDefault(),x.returnValue="")}),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>m.querySelectorAll(".yl-forskodun").forEach(Z)),!y){L("\xDEessi s\xED\xF0a opnast me\xF0 hlekknum sem \xD3li sendi. Biddu hann um hlekkinn.",!0);return}U({action:"lesa"}).then(x=>{if(!x.ok){L(x.rangurLykill?"Hlekkurinn gildir ekki. Biddu \xD3la um n\xFDjan.":"Villa: "+x.villa,!0);return}T=x,T.nofn.indexOf(s)===-1&&(s=""),N(),z()}).catch(x=>L(x.message+" Reyndu a\xF0 endurhla\xF0a s\xED\xF0una.",!0))}var Ba={stada:sa,birta:la,stjorn:pa,pressa:fa,yfirlestur:xa},Ka={stada:!0,birta:!0,pressa:!0};function wa(){let m=document.querySelectorAll("[data-nafir]");if(m.length){if(!document.getElementById("nafir-css")){let l=document.createElement("style");l.id="nafir-css",l.textContent=$t,document.head.appendChild(l)}document.querySelector('[data-verkefni]:not([data-verkefni="nafir"])')||ra(),m.forEach(function(l){let y=l.getAttribute("data-nafir"),s=Ba[y];!s||l.hasAttribute("data-nafir-raest")||(l.setAttribute("data-nafir-raest",""),Ka[y]&&document.body.classList.add("nafir-beige"),s(l))})}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",wa):wa();})();
//# sourceMappingURL=nafir.js.map
