// Birtingarsíðan á /nafir/birta. Embed: <div data-nafir="birta"></div> og dist/nafir.js.
// Skrifar í biðröðina (flipann Birtingar); Nafir Meta birtir. Sjá LESTU.md, Birtingar.
import { MANUDIR, ny, hrar, geyma, saekjaG, post, VEL, lesaLykil, skraTegund as tegund } from "./sameiginlegt.js";
import { dropboxVelja } from "./dropboxVelja.js";

// Mappa verkefnisins í Dropbox; data-dropbox-mappa á rótinni gengur fyrir
const DROPBOX_MAPPA = { "": "/AUGLYSINGAR/SHAKON", per: "/AUGLYSINGAR/PER" };

import MARKUP from "./birta.html";

export function birta(rot) {
  rot.innerHTML = MARKUP;

  // data-verkefni="per" talar við Vogor vél; án þess er þetta Nafir á promo-bakendanum
  var VERKEFNI = rot.getAttribute("data-verkefni") || "";
  var LYKILL = VERKEFNI ? "vogor-birta-" + VERKEFNI : "vogor-promo-key";   // Nafir: sama og stjórnsíðan
  var MAL = "vogor-birta-mal";
  var LED = { "Birt": "ok", "Prufa í lagi": "ok", "Tímasett": "bid", "Prufa": "prufa", "Bíður Instagram": "bid", "Sendi": "bid", "Villa": "villa", "Óvíst": "villa", "Útrunnið": "villa" };
  var BIDA = ["Tímasett", "Prufa", "Bíður Instagram"];
  // Prufa heitir yfirferð á síðunni: „Senda inn“ lætur miðlana yfirfara, „Staðfesta“ tímasetur
  var STADA_TEXTI = { "Prufa": "Í yfirferð", "Prufa í lagi": "Yfirferð í lagi" };
  function stadaTexti(b) { return (b.prufa && STADA_TEXTI[b.stada]) || b.stada; }
  // Stillingar verkefnisins; vélin sendir sínar með birtingar-svarinu
  var MIDLAR = ["Facebook", "Instagram", "Instagram Story", "Facebook Story"];
  var SIDA_NAFN = "Stafrænn Hákon", IG_NAFN = "stafraennhakon", TUNGUMAL = ["is", "en"];
  // Collab á Instagram: hak við hvern í bandinu; `inn` er hakað sjálfgefið. Meta leyfir mest 3
  var COLLAB = [
    { nafn: "Maggi", ig: "maggi_freyr", inn: true },
    { nafn: "Árni Þór", ig: "johliujv", inn: true },
    { nafn: "Róbert", ig: "robertrunolfs" },
    { nafn: "Lárus", ig: "larussigurdsson_brimhof" },
    { nafn: "Óli", ig: "olafurjosephsson" }
  ];
  function stilla(c) {
    if (!c) return;
    MIDLAR = c.midlar || MIDLAR;
    COLLAB = c.collab || COLLAB;
    SIDA_NAFN = c.sidaNafn || SIDA_NAFN;
    IG_NAFN = c.igNafn || IG_NAFN;
    TUNGUMAL = c.tungumal || TUNGUMAL;
    var d = rot.querySelector(".vbt-head .vst-midi");
    if (d && c.titill) d.textContent = c.titill + " birta";
    var y = q("yfirlit");
    if (y && c.yfirlit) { y.href = c.yfirlit; y.textContent = "yfirlestrarsíðunni"; }
  }

  function q(n) { return rot.querySelector('[data-bt="' + n + '"]'); }
  var dbx = dropboxVelja({ mappa: rot.getAttribute("data-dropbox-mappa") || DROPBOX_MAPPA[VERKEFNI] || "/AUGLYSINGAR" });
  // Persónulegi hlekkurinn úr flipanum Aðgangur: ?l=<lykill>
  var key = lesaLykil("l", LYKILL).lykill;

  function kalla(action, data) {
    var body = Object.assign({ action: action, key: key }, data || {});
    if (VERKEFNI) body.verkefni = VERKEFNI;
    return post(body, VERKEFNI ? VEL : null)
      .then(function (r) {
        if (r.rangtLeyniord) { key = ""; geyma(LYKILL, ""); syna("gate"); }
        return r;
      })
      .catch(function (e) { return { ok: false, villa: e.message }; });
  }
  function syna(hvad) {
    q("gate").hidden = hvad !== "gate";
    q("hledur").hidden = hvad !== "hledur";
    q("app").hidden = hvad !== "app";
  }

  // Tími í biðröðinni er "2026-10-30 12:00", Reykjavík = UTC
  function utc(s) { return s ? new Date(s.replace(" ", "T") + ":00Z") : null; }
  function stuttTimi(s) {
    var d = utc(s);
    return d ? d.getUTCDate() + ". " + MANUDIR[d.getUTCMonth()] + " " + s.slice(11, 16) : "";
  }
  function eftir(s) {
    var m = Math.round((utc(s) - Date.now()) / 60000);
    if (m <= 0) return "núna";
    if (m < 60) return m + " mín";
    if (m < 48 * 60) return Math.floor(m / 60) + " klst " + (m % 60) + " mín";
    var d = Math.round(m / 1440);
    return d + (d === 1 ? " dag" : " daga");
  }
  // Stutt fyrir teljarann efst: "45 mín", "5 klst", "8 dagar"
  function teljaraTexti(s) {
    var m = Math.round((utc(s) - Date.now()) / 60000);
    if (m < 60) return Math.max(m, 0) + " mín";
    if (m < 48 * 60) return Math.round(m / 60) + " klst";
    return Math.round(m / 1440) + " dagar";
  }


  var gogn = {};
  // Það sem er í reitunum á hverju korti lifir af endurteikningu (efni id → reitir)
  var DROG = "vogor-birta-drog";
  var drog = {};
  try { drog = JSON.parse(sessionStorage.getItem(DROG) || "{}") || {}; } catch (e) {}
  function geymaDrog() { try { sessionStorage.setItem(DROG, JSON.stringify(drog)); } catch (e) {} }
  // Kortin skrá hér fall sem uppfærir yfirferðarkassann þegar biðröðin er sótt aftur
  var yfirferdir = [];
  // baraRod: uppfæra biðröðina en láta færslukortin vera, svo texti sem er verið að laga glatist ekki
  function saekja(baraRod) {
    return kalla("birtingar").then(function (r) {
      if (!r.ok) {
        if (!r.rangtLeyniord) { syna("gate"); q("gate-villa").textContent = r.villa || "Náði ekki í gögnin."; }
        return;
      }
      gogn = r;
      stilla(r.verkefni);
      if (baraRod === true) teiknaRod(); else teikna();
      syna("app");
    });
  }

  function teikna() {
    yfirferdir = [];
    teiknaRod();
    var listi = q("faerslur");
    listi.textContent = "";
    gogn.faerslur.slice().sort(function (a, c) { return a.birta.localeCompare(c.birta); })
      .forEach(function (x) { listi.appendChild(kort(x)); });
  }

  function teiknaRod() {
    var heiti = {};
    gogn.faerslur.forEach(function (x) { heiti[x.id] = x.heiti; });

    // Biðröðin: það sem bíður fyrst eftir tíma, svo síðustu 15 niðurstöður
    var bida = gogn.birtingar.filter(function (b) { return BIDA.indexOf(b.stada) !== -1; })
      .sort(function (a, c) { return a.timi.localeCompare(c.timi); });
    var buid = gogn.birtingar.filter(function (b) { return BIDA.indexOf(b.stada) === -1 && b.stada !== "Hætt við"; })
      .sort(function (a, c) { return c.timi.localeCompare(a.timi); }).slice(0, 15);
    var rod = q("rod");
    rod.textContent = "";
    bida.concat(buid).forEach(function (b) {
      var li = ny("li", BIDA.indexOf(b.stada) === -1 ? "vbt-buid" : "");
      li.appendChild(ny("span", "vst-led vst-led--" + (LED[b.stada] || "")));
      li.appendChild(ny("span", "vbt-timi", stuttTimi(b.timi)));
      li.appendChild(ny("span", "", b.midill));
      var h = ny("span", "vbt-heiti", (b.prufa ? "Yfirferð: " : "") + (heiti[b.efni] || b.efni));
      var sma = ny("small");
      if (b.stada === "Birt" && b.nidurstada) {
        var a = ny("a", "", "Birt, opna færsluna");
        a.href = b.nidurstada; a.target = "_blank"; a.rel = "noopener";
        sma.appendChild(a);
      } else {
        sma.textContent = (b.stada === "Tímasett" ? "Fer út eftir " + eftir(b.timi) : stadaTexti(b) + (b.nidurstada ? ": " + b.nidurstada : ""))
          + (b.hver && b.hver !== gogn.eg ? " · " + b.hver : "");
      }
      h.appendChild(sma);
      li.appendChild(h);
      if (BIDA.indexOf(b.stada) !== -1) li.appendChild(haettaTakki(b)); else li.appendChild(ny("span"));
      rod.appendChild(li);
    });
    if (!rod.children.length) rod.appendChild(ny("li", "", "Ekkert í biðröð ennþá."));

    var naest = bida.filter(function (b) { return !b.prufa; })[0];
    q("naesta").textContent = naest ? teljaraTexti(naest.timi) : "--";
    q("naesta-texti").textContent = naest ? "í næstu birtingu" : "ekkert í biðröð";
    q("sott").textContent = gogn.nu + (gogn.eg ? ", innskráð(ur): " + gogn.eg : "");
    yfirferdir.forEach(function (f) { f(); });
  }

  function haettaTakki(b) {
    var t = ny("button", "vbt-btn vbt-btn--ljos", "Hætta við");
    t.type = "button";
    t.addEventListener("click", function () {
      t.disabled = true;
      kalla("birtingHaetta", { id: b.id }).then(function (r) {
        if (r.ok) { gogn.birtingar = r.birtingar; teiknaRod(); } else { t.disabled = false; alert(r.villa); }
      });
    });
    return t;
  }

  function kort(x) {
    var dr = drog[x.id] || (drog[x.id] = {});
    var postad = x.stada === "Póstað";
    var k = ny("article", "vbt-kort" + (postad ? " vbt-kort--postad" : ""));
    var haus = ny("div", "vbt-kort-haus");
    haus.appendChild(ny("b", "", x.heiti));
    var d = utc(x.birta + " 00:00");
    haus.appendChild(ny("span", "vbt-merki", d.getUTCDate() + ". " + MANUDIR[d.getUTCMonth()] + " · " + x.stada));
    k.appendChild(haus);

    // Forskoðun
    var forsk = ny("div", "vbt-forsk");
    var skipta = ny("div", "vbt-skipta");
    var syn = MIDLAR.indexOf("Instagram") !== -1 ? "Instagram" : "Facebook";
    ["Instagram", "Facebook", "Story"].filter(function (m) { return m !== "Instagram" || MIDLAR.indexOf("Instagram") !== -1; }).forEach(function (m) {
      var t = ny("button", "", m);
      t.type = "button";
      t.addEventListener("click", function () { syn = m; uppfaera(); });
      skipta.appendChild(t);
    });
    forsk.appendChild(skipta);
    var simi = ny("div");
    forsk.appendChild(simi);
    k.appendChild(forsk);

    // Stjórnborð
    var s = ny("form", "vbt-stjorn");
    var midlar = ny("div", "vbt-midlar");
    var hak = {};
    // Feed er valið sjálfgefið; Stories þarf að haka við
    MIDLAR.forEach(function (m) {
      var l = ny("label");
      var c = ny("input");
      c.type = "checkbox"; c.checked = dr[m] !== undefined ? dr[m] : !/ Story$/.test(m);
      hak[m] = c;
      l.appendChild(c);
      l.appendChild(document.createTextNode(m));
      midlar.appendChild(l);
      c.addEventListener("change", function () { dr[m] = c.checked; uppfaera(); });
    });
    s.appendChild(midlar);

    var malL = ny("label", "", "Texti");
    var mal = ny("select");
    [["en", "English"], ["is", "Íslenska"], ["baedi", "Íslenska og enska"]].forEach(function (m) {
      var o = ny("option", "", m[1]); o.value = m[0]; mal.appendChild(o);
    });
    mal.value = TUNGUMAL.length === 1 ? TUNGUMAL[0] : dr.mal || saekjaG(MAL) || "en";
    malL.hidden = TUNGUMAL.length === 1;
    malL.appendChild(mal);
    s.appendChild(malL);

    var txtL = ny("label", "", "Textinn sem fer út ");
    var teljari = ny("span", "vbt-teljari");
    txtL.appendChild(teljari);
    var txt = ny("textarea");
    txtL.appendChild(txt);
    s.appendChild(txtL);
    function fylla() {
      txt.value = mal.value === "is" ? x.is : mal.value === "en" ? x.en : [x.is, x.en].filter(Boolean).join("\n\n");
      dr.texti = txt.value;
      uppfaera();
    }
    mal.addEventListener("change", function () { dr.mal = mal.value; geyma(MAL, mal.value); fylla(); });
    txt.addEventListener("input", function () { dr.texti = txt.value; uppfaera(); });

    // Collab: meðhöfundar á Instagram feed og Reels (þeir fá boð og samþykkja í appinu)
    // Hökin skrifa í reitinn, svo annað nafn má líka slá inn í hann
    var collabL = ny("div", "vbt-hopur", "Collab á Instagram ");
    collabL.appendChild(ny("span", "vbt-teljari", "mest 3"));
    var collabHak = ny("div", "vbt-midlar");
    var collabBox = {};
    COLLAB.forEach(function (p) {
      var l = ny("label");
      var c = ny("input");
      c.type = "checkbox";
      collabBox[p.ig] = c;
      l.title = "@" + p.ig;
      l.appendChild(c);
      l.appendChild(document.createTextNode(p.nafn));
      collabHak.appendChild(l);
      c.addEventListener("change", function () {
        var n = collabNofn().filter(function (x) { return x !== p.ig; });
        if (c.checked) n.push(p.ig);
        collab.value = n.join(", ");
        dr.collab = collab.value;
        uppfaera();
      });
    });
    collabL.appendChild(collabHak);
    var collab = ny("input");
    collab.value = dr.collab != null ? dr.collab
      : COLLAB.filter(function (p) { return p.inn; }).map(function (p) { return p.ig; }).join(", ");
    collab.placeholder = "eða slá inn nöfn, aðskilin með kommu";
    collab.setAttribute("aria-label", "Collab á Instagram");
    collabL.appendChild(collab);
    s.appendChild(collabL);
    collab.addEventListener("input", function () { dr.collab = collab.value; uppfaera(); });
    // Hökin fylgja reitnum; þegar 3 eru valin er ekki hægt að haka við fleiri
    function collabHakUppfaera() {
      var n = collabNofn();
      Object.keys(collabBox).forEach(function (ig) {
        collabBox[ig].checked = n.indexOf(ig) !== -1;
        collabBox[ig].disabled = !collabBox[ig].checked && n.length >= 3;
      });
    }

    var myndL = ny("label", "", "Mynd eða myndband");
    var mynd = ny("input");
    mynd.value = dr.mynd != null ? dr.mynd : x.slod || "";
    mynd.placeholder = "Dropbox-hlekkur á .jpg eða .mp4";
    myndL.appendChild(mynd);
    s.appendChild(myndL);
    mynd.addEventListener("input", function () { dr.mynd = mynd.value; });
    mynd.addEventListener("change", uppfaera);

    // Dropbox: velja úr möppu verkefnisins eða hlaða upp; hlekkurinn fer í reitinn
    var dbxRod = ny("div", "vbt-takkar vbt-dbx-takkar");
    var dbxVelja = ny("button", "vbt-btn vbt-btn--ljos", "Velja úr Dropbox");
    dbxVelja.type = "button";
    var dbxHlada = ny("button", "vbt-btn vbt-btn--ljos", "Hlaða upp");
    dbxHlada.type = "button";
    var dbxSkra = ny("input");
    dbxSkra.type = "file";
    dbxSkra.accept = ".jpg,.jpeg,.png,.mp4,image/jpeg,image/png,video/mp4";
    dbxSkra.hidden = true;
    var dbxStada = ny("span", "vbt-small");
    dbxRod.append(dbxVelja, dbxHlada, dbxSkra, dbxStada);
    s.appendChild(dbxRod);
    function setjaMynd(url) {
      if (!url) return;
      mynd.value = url;
      dr.mynd = url;
      geymaDrog();
      uppfaera();
    }
    function dbxVilla(e) { dbxStada.textContent = "Dropbox: " + e.message; }
    dbxVelja.addEventListener("click", function () {
      dbxStada.textContent = "";
      dbx.velja().then(setjaMynd, dbxVilla);
    });
    dbxHlada.addEventListener("click", function () { dbxSkra.click(); });
    dbxSkra.addEventListener("change", function () {
      var f = dbxSkra.files[0];
      dbxSkra.value = "";
      if (!f) return;
      dbxHlada.disabled = dbxVelja.disabled = true;
      dbx.hlada(f, function (t) { dbxStada.textContent = t; })
        .then(function (url) { dbxStada.textContent = url ? f.name + " er komin á Dropbox" : ""; setjaMynd(url); }, dbxVilla)
        .then(function () { dbxHlada.disabled = dbxVelja.disabled = false; });
    });

    var tvo = ny("div", "vbt-tvo");
    var dL = ny("label", "", "Dagur"), dagur = ny("input");
    dagur.type = "date"; dagur.value = dr.dagur || x.birta;
    dagur.addEventListener("change", function () { dr.dagur = dagur.value; uppfaera(); });
    dL.appendChild(dagur);
    // Klukkan í 24 tímum: <input type="time"> fer eftir tungumáli vafrans (AM/PM á ensku)
    var tL = ny("label", "", "Klukkan"), kl = ny("span", "vbt-klukka");
    var upph = String(dr.klukka || "12:00").split(":");
    var klst = ny("select"), min = ny("select");
    function tveir(n) { return (n < 10 ? "0" : "") + n; }
    function kosta(sel, gildi, valid) {
      gildi.forEach(function (g) { var o = ny("option", "", g); o.value = g; sel.appendChild(o); });
      sel.value = valid;
    }
    var minutur = [];
    for (var m = 0; m < 60; m += 5) minutur.push(tveir(m));
    if (minutur.indexOf(upph[1]) === -1) minutur.push(upph[1]);   // eldri tími utan 5 mín.
    kosta(klst, Array.apply(null, Array(24)).map(function (_, h) { return tveir(h); }), upph[0]);
    kosta(min, minutur.sort(), upph[1]);
    var klukka = { get value() { return klst.value + ":" + min.value; } };
    [klst, min].forEach(function (sel) {
      sel.addEventListener("change", function () { dr.klukka = klukka.value; uppfaera(); });
    });
    kl.appendChild(klst); kl.appendChild(ny("span", "", ":")); kl.appendChild(min);
    tL.appendChild(kl);
    tvo.appendChild(dL); tvo.appendChild(tL);
    s.appendChild(tvo);

    var adv = ny("p", "vbt-adv");
    s.appendChild(adv);
    // Skref 1: Senda inn (miðlarnir yfirfara, ekkert birt). Skref 2: Staðfesta (tímasetur
    // nákvæmlega það sem var yfirfarið). Breyting á milli lokar staðfestingunni aftur
    var takkar = ny("div", "vbt-takkar");
    var sendaInn = ny("button", "vbt-btn", "Senda inn");
    sendaInn.type = "submit";
    takkar.appendChild(sendaInn);
    s.appendChild(takkar);
    var yfirferd = ny("div", "vbt-yfirferd");
    var yfirListi = ny("ul", "vbt-fyrri");
    var yfirTexti = ny("p", "vbt-small");
    var stadfesta = ny("button", "vbt-btn vbt-btn--stadfesta", "Staðfesta");
    stadfesta.type = "button";
    yfirferd.appendChild(yfirListi); yfirferd.appendChild(yfirTexti); yfirferd.appendChild(stadfesta);
    s.appendChild(yfirferd);
    var msg = ny("p", "vbt-msg" + (dr.skilabod ? " vbt-msg--ok" : ""), dr.skilabod || "");
    dr.skilabod = "";
    s.appendChild(msg);

    // Fyrri birtingar þessarar færslu
    var fyrri = gogn.birtingar.filter(function (b) { return b.efni === x.id && !b.prufa && b.stada !== "Hætt við"; });
    if (fyrri.length) {
      var ul = ny("ul", "vbt-fyrri");
      fyrri.forEach(function (b) {
        var li = ny("li");
        li.appendChild(ny("span", "vst-led vst-led--" + (LED[b.stada] || "")));
        li.appendChild(document.createTextNode(b.midill + ": " + b.stada + (b.stada === "Tímasett" ? " " + stuttTimi(b.timi) : "") + (b.hver ? " · " + b.hver : "")));
        ul.appendChild(li);
      });
      s.appendChild(ul);
    }
    var tolur = gogn.meta ? gogn.meta.faerslur.filter(function (p) { return p.efni === x.id; }) : [];
    tolur.forEach(function (p) {
      s.appendChild(ny("p", "vbt-teljari", p.midill + ": " + (p.na != null ? "ná " + p.na + ", " : "") + (p.ahorf != null ? "áhorf " + p.ahorf + ", " : "") + p.vidbrogd + " viðbrögð"));
    });
    k.appendChild(s);

    function hakad(m) { return !!(hak[m] && hak[m].checked); }
    function valdir() { return MIDLAR.filter(function (m) { return hak[m].checked; }); }

    function uppfaera() {
      Array.prototype.forEach.call(skipta.children, function (b) { b.setAttribute("aria-pressed", String(b.textContent === syn)); });
      var t = tegund(mynd.value);
      var ig = hakad("Instagram");
      teljari.textContent = txt.value.length + (ig ? " / 2200" : "") + " stafir" + (ig ? ", " + (txt.value.match(/#[^\s#]+/g) || []).length + " / 30 myllumerki" : "");
      teljari.classList.toggle("vbt-of", ig && txt.value.length > 2200);
      var v = [];
      if (!valdir().length) v.push("Veldu að minnsta kosti einn miðil.");
      if (ig && !mynd.value) v.push("Instagram þarf mynd eða myndband.");
      if (mynd.value && !t.t) v.push("Slóðin þarf að enda á .jpg, .png eða .mp4 (Dropbox-hlekkur á skrána sjálfa, ekki möppu).");
      if (ig && t.t === "mynd" && !/^jpe?g$/.test(t.e)) v.push("Instagram tekur bara JPG-myndir.");
      if (ig && /instagram\.com|ffm\.to|https?:\/\//.test(txt.value)) v.push("Hlekkir virka ekki í texta á Instagram; skrifaðu „hlekkur í bio“.");
      collabL.hidden = !ig;
      collabHakUppfaera();
      if (ig && collabNofn().length > 3) v.push("Instagram leyfir mest 3 í collab.");
      var story = hakad("Instagram Story") || hakad("Facebook Story");
      if (story && !mynd.value) v.push("Story þarf mynd eða myndband.");
      if (hakad("Instagram Story") && t.t === "mynd" && !/^jpe?g$/.test(t.e)) v.push("Instagram Story tekur bara JPG-myndir.");
      if (story) v.push("Textinn fer ekki með í Story; hann þarf að vera í myndinni sjálfri (9:16).");
      adv.textContent = v.join(" ");
      geymaDrog();
      synaYfirferd();

      // Eftirmyndin
      simi.textContent = "";
      if (syn === "Story") { simi.appendChild(storyForsk(t)); return; }
      var fb = syn === "Facebook";
      var box = ny("div", "vbt-sima" + (fb ? " vbt-sima--fb" : ""));
      var h = ny("div", "vbt-sima-haus");
      h.appendChild(ny("i"));
      var medhof = !fb && ig ? collabNofn() : [];
      var nafn = ny("span", "", fb ? SIDA_NAFN : IG_NAFN + (medhof.length ? " og " + medhof.join(", ") : ""));
      if (fb) nafn.appendChild(ny("small", "", stuttTimi(dagur.value + " " + (klukka.value || "12:00"))));
      h.appendChild(nafn);
      box.appendChild(h);
      var textabox = ny("div", "vbt-sima-texti");
      var fyrst = fb ? txt.value : txt.value.split("\n")[0].slice(0, 125);
      if (!fb) textabox.appendChild(ny("b", "", IG_NAFN));
      textabox.appendChild(document.createTextNode(fyrst));
      if (!fb && txt.value.length > fyrst.length) textabox.appendChild(ny("span", "vbt-meira", "… meira"));
      if (fb) box.appendChild(textabox);
      var m = ny("div", "vbt-sima-mynd");
      if (t.t === "mynd") { var img = ny("img"); img.src = hrar(mynd.value); img.alt = ""; m.appendChild(img); }
      else if (t.t === "myndband") { var vid = ny("video"); vid.src = hrar(mynd.value); vid.muted = true; vid.controls = true; vid.preload = "metadata"; m.appendChild(vid); }
      else m.textContent = mynd.value ? "Slóð sem er hvorki mynd né myndband" : "Engin mynd";
      if (mynd.value || !fb) box.appendChild(m);
      if (!fb) { box.appendChild(ny("div", "vbt-sima-takkar", "♡ ◯ ➤")); box.appendChild(textabox); }
      simi.appendChild(box);
    }

    // Story: myndin fyllir 9:16 skjá, nafnið ofan á, enginn texti
    function storyForsk(t) {
      var box = ny("div", "vbt-sima vbt-sima--story");
      var m = ny("div", "vbt-sima-mynd");
      if (t.t === "mynd") { var img = ny("img"); img.src = hrar(mynd.value); img.alt = ""; m.appendChild(img); }
      else if (t.t === "myndband") { var vid = ny("video"); vid.src = hrar(mynd.value); vid.muted = true; vid.controls = true; vid.preload = "metadata"; m.appendChild(vid); }
      else m.textContent = "Engin mynd";
      box.appendChild(m);
      var h = ny("div", "vbt-sima-haus");
      h.appendChild(ny("i"));
      h.appendChild(ny("span", "", hakad("Instagram Story") || !hakad("Facebook Story") ? IG_NAFN : SIDA_NAFN));
      box.appendChild(h);
      return box;
    }

    // Það sem var sent inn: breyting á miðlum, texta eða mynd ógildir yfirferðina
    function collabNofn() {
      return collab.value.split(/[\s,;]+/).map(function (n) { return n.replace(/^@/, "").trim().toLowerCase(); }).filter(Boolean);
    }
    function snid() { return JSON.stringify([valdir(), txt.value, mynd.value.trim(), hakad("Instagram") ? collabNofn() : []]); }

    function synaYfirferd() {
      var radir = dr.hopur ? gogn.birtingar.filter(function (b) { return b.id.indexOf(dr.hopur + "-") === 0; }) : [];
      yfirferd.hidden = !radir.length;
      sendaInn.textContent = radir.length ? "Senda inn aftur" : "Senda inn";
      if (!radir.length) return;
      yfirListi.textContent = "";
      radir.forEach(function (b) {
        var li = ny("li");
        li.appendChild(ny("span", "vst-led vst-led--" + (LED[b.stada] || "")));
        var lok = b.stada !== "Prufa" && b.stada !== "Bíður Instagram";
        li.appendChild(document.createTextNode(b.midill + ": " + stadaTexti(b) + (lok && b.nidurstada ? " (" + b.nidurstada + ")" : "")));
        yfirListi.appendChild(li);
      });
      var breytt = snid() !== dr.snid;
      var allt = radir.every(function (b) { return b.stada === "Prufa í lagi"; });
      var villa = radir.some(function (b) { return ["Villa", "Óvíst", "Útrunnið", "Hætt við"].indexOf(b.stada) !== -1; });
      stadfesta.hidden = !allt || breytt;
      stadfesta.textContent = "Staðfesta og tímasetja " + stuttTimi(dagur.value + " " + (klukka.value || "12:00"));
      yfirTexti.textContent = breytt ? "Þú breyttir færslunni eftir að hún var send inn. Sendu hana inn aftur svo breytingin verði yfirfarin."
        : villa ? "Yfirferðin stóðst ekki. Lagaðu það sem er að og sendu inn aftur."
        : allt ? "Allt í lagi. Staðfestu til að tímasetja; það má hætta við í biðröðinni þangað til."
        : (radir.some(function (b) { return /^Instagram/.test(b.midill); }) ? (radir.some(function (b) { return /^Facebook/.test(b.midill); }) ? "Facebook og Instagram eru" : "Instagram er") : "Facebook er")
          + " að yfirfara. Það tekur allt að 5 mínútur, myndband stundum lengur. Síðan uppfærist sjálf.";
    }
    yfirferdir.push(synaYfirferd);

    s.addEventListener("submit", function (ev) {
      ev.preventDefault();
      msg.textContent = "";
      msg.classList.remove("vbt-msg--ok");
      sendaInn.disabled = true;
      kalla("birtingVista", {
        efni: x.id, midlar: valdir(), timi: dagur.value + " " + klukka.value,
        texti: txt.value, mynd: mynd.value.trim(), prufa: true,
        collab: hakad("Instagram") ? collabNofn().join(",") : ""
      }).then(function (r) {
        sendaInn.disabled = false;
        if (!r.ok) { msg.textContent = r.villa || "Tókst ekki."; return; }
        dr.hopur = r.hopur;
        dr.snid = snid();
        geymaDrog();
        gogn.birtingar = r.birtingar;
        teiknaRod();
      });
    });

    stadfesta.addEventListener("click", function () {
      msg.textContent = "";
      stadfesta.disabled = true;
      kalla("birtingStadfesta", { hopur: dr.hopur, timi: dagur.value + " " + klukka.value }).then(function (r) {
        stadfesta.disabled = false;
        if (!r.ok) { msg.textContent = r.villa || "Tókst ekki."; return; }
        dr.hopur = null;
        dr.skilabod = "Tímasett. Færslan sést í biðröðinni efst og má hætta við þar.";
        geymaDrog();
        gogn.birtingar = r.birtingar;
        teikna();
      });
    });

    if (dr.texti != null) { txt.value = dr.texti; uppfaera(); } else fylla();
    return k;
  }

  q("gate").addEventListener("submit", function (e) {
    e.preventDefault();
    key = q("lykill").value.trim();
    geyma(LYKILL, key);
    q("gate-villa").textContent = "";
    syna("hledur");
    saekja();
  });
  q("uppfaera").addEventListener("click", function () { saekja(); });
  q("utskra").addEventListener("click", function () { key = ""; geyma(LYKILL, ""); syna("gate"); });
  // Biðröðin hreyfist: hún er sótt aftur á mínútu fresti meðan síðan er opin, og
  // á 20 sekúndna fresti meðan einhver færsla er í yfirferð
  var hringir = 0;
  setInterval(function () {
    // Ekki sækja í falinn flipa; það étur kvóta Apps Script fyrir ekkert
    if (!key || q("app").hidden || document.hidden) return;
    hringir++;
    var ibid = gogn.birtingar && gogn.birtingar.some(function (b) { return b.prufa && (b.stada === "Prufa" || b.stada === "Bíður Instagram"); });
    if (ibid || hringir % 3 === 0) saekja(true);
  }, 20000);

  if (key) { syna("hledur"); saekja(); } else syna("gate");
}
