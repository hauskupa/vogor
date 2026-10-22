// Birtingarsíðan á /nafir/birta. Embed: <div data-nafir="birta"></div> og dist/nafir.js.
// Skrifar í biðröðina (flipann Birtingar); Nafir Meta birtir. Sjá LESTU.md, Birtingar.
import { MANUDIR, ny, hrar, geyma, saekjaG, post, skraTegund as tegund } from "./sameiginlegt.js";

const MARKUP = "<div class=\"vbt\">\n  <div class=\"vbt-head\">\n    <div class=\"vst-dymo vst-dymo--red\">|NAFIR|BIRTA|</div>\n    <div class=\"vst-count\"><span class=\"vst-counter\" data-bt=\"naesta\">--</span><span data-bt=\"naesta-texti\">ekkert í biðröð</span></div>\n  </div>\n\n  <form class=\"vbt-gate\" data-bt=\"gate\" hidden>\n    <p>Lykilorð (eða opnaðu hlekkinn sem Óli sendi þér):</p>\n    <input type=\"password\" data-bt=\"lykill\" autocomplete=\"current-password\">\n    <button class=\"vbt-btn\" type=\"submit\">Opna</button>\n    <p class=\"vbt-msg\" data-bt=\"gate-villa\"></p>\n  </form>\n\n  <p class=\"vst-status\" data-bt=\"hledur\"><span class=\"vst-led vst-led--wait\"></span>Sæki</p>\n\n  <div class=\"vbt-app\" data-bt=\"app\" hidden>\n    <section>\n      <div class=\"vst-dymo\">|BIDROD|</div>\n      <ul class=\"vbt-rod\" data-bt=\"rod\"></ul>\n      <p class=\"vbt-small\">Nafir Meta skoðar biðröðina á 5 mínútna fresti, svo færsla fer út í síðasta lagi 5 mínútum eftir tímann. Prufa birtir ekkert: Facebook fær óbirta færslu sem sést bara í Business Suite, og Instagram sannreynir bara myndina og textann.</p>\n    </section>\n\n    <section>\n      <div class=\"vst-dymo\">|FAERSLUR|</div>\n      <p class=\"vbt-small vbt-hint\">Textunum er breytt á <a data-bt=\"yfirlit\" href=\"/nafir/stada\" target=\"_blank\" rel=\"noopener\">yfirliti bandsins</a>. Hér velurðu hvaða texti fer á hvorn miðil, og textann má laga fyrir þessa birtingu án þess að breyta færslunni.</p>\n      <div class=\"vbt-listi\" data-bt=\"faerslur\"></div>\n    </section>\n\n    <p class=\"vbt-small\">Sótt <span data-bt=\"sott\"></span>. <button class=\"vbt-link\" type=\"button\" data-bt=\"uppfaera\">Uppfæra</button> · <button class=\"vbt-link\" type=\"button\" data-bt=\"utskra\">Skrá út</button></p>\n  </div>\n</div>";

export function birta(rot) {
  rot.innerHTML = MARKUP;

  var LYKILL = "vogor-promo-key";   // sama og stjórnsíðan
  var MAL = "vogor-birta-mal";
  var LED = { "Birt": "ok", "Prufa í lagi": "ok", "Tímasett": "bid", "Prufa": "prufa", "Bíður Instagram": "bid", "Sendi": "bid", "Villa": "villa", "Óvíst": "villa", "Útrunnið": "villa" };
  var BIDA = ["Tímasett", "Prufa", "Bíður Instagram"];
  var MIDLAR = ["Facebook", "Instagram", "Instagram Story", "Facebook Story"];

  function q(n) { return rot.querySelector('[data-bt="' + n + '"]'); }
  var key = saekjaG(LYKILL);
  // Persónulegi hlekkurinn úr flipanum Aðgangur: ?l=<lykill>. Lykillinn er geymdur
  // í vafranum og tekinn úr slóðinni, svo hann sjáist ekki ef slóðinni er deilt
  var ur = new URLSearchParams(location.search);
  if (ur.get("l")) {
    key = ur.get("l").trim();
    geyma(LYKILL, key);
    ur.delete("l");
    try { history.replaceState(null, "", location.pathname + (ur.toString() ? "?" + ur : "") + location.hash); } catch (e) {}
  }

  function kalla(action, data) {
    var body = Object.assign({ action: action, key: key }, data || {});
    return post(body)
      .then(function (r) {
        if (r.rangtLeyniord) { key = ""; geyma(LYKILL, ""); syna("gate"); }
        return r;
      })
      .catch(function (e) { return { ok: false, villa: e.message === "Failed to fetch" ? "Ekkert samband." : e.message }; });
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
  var drog = {};
  // baraRod: uppfæra biðröðina en láta færslukortin vera, svo texti sem er verið að laga glatist ekki
  function saekja(baraRod) {
    return kalla("birtingar").then(function (r) {
      if (!r.ok) {
        if (!r.rangtLeyniord) { syna("gate"); q("gate-villa").textContent = r.villa || "Náði ekki í gögnin."; }
        return;
      }
      gogn = r;
      if (baraRod === true) teiknaRod(); else teikna();
      syna("app");
    });
  }

  function teikna() {
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
      var h = ny("span", "vbt-heiti", (b.prufa ? "Prufa: " : "") + (heiti[b.efni] || b.efni));
      var sma = ny("small");
      if (b.stada === "Birt" && b.nidurstada) {
        var a = ny("a", "", "Birt, opna færsluna");
        a.href = b.nidurstada; a.target = "_blank"; a.rel = "noopener";
        sma.appendChild(a);
      } else {
        sma.textContent = (b.stada === "Tímasett" ? "Fer út eftir " + eftir(b.timi) : b.stada + (b.nidurstada ? ": " + b.nidurstada : ""))
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
    var syn = "Instagram";
    ["Instagram", "Facebook", "Story"].forEach(function (m) {
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
    mal.value = dr.mal || saekjaG(MAL) || "en";
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

    var myndL = ny("label", "", "Mynd eða myndband");
    var mynd = ny("input");
    mynd.value = dr.mynd != null ? dr.mynd : x.slod || "";
    mynd.placeholder = "Dropbox-hlekkur á .jpg eða .mp4";
    myndL.appendChild(mynd);
    s.appendChild(myndL);
    mynd.addEventListener("input", function () { dr.mynd = mynd.value; });
    mynd.addEventListener("change", uppfaera);

    var tvo = ny("div", "vbt-tvo");
    var dL = ny("label", "", "Dagur"), dagur = ny("input");
    dagur.type = "date"; dagur.value = dr.dagur || x.birta;
    dagur.addEventListener("change", function () { dr.dagur = dagur.value; uppfaera(); });
    dL.appendChild(dagur);
    var tL = ny("label", "", "Klukkan"), klukka = ny("input");
    klukka.type = "time"; klukka.value = dr.klukka || "12:00";
    klukka.addEventListener("change", function () { dr.klukka = klukka.value; uppfaera(); });
    tL.appendChild(klukka);
    tvo.appendChild(dL); tvo.appendChild(tL);
    s.appendChild(tvo);

    var adv = ny("p", "vbt-adv");
    s.appendChild(adv);
    var takkar = ny("div", "vbt-takkar");
    var timasetja = ny("button", "vbt-btn", "Tímasetja");
    timasetja.type = "submit";
    var prufa = ny("button", "vbt-btn vbt-btn--ljos", "Prufa");
    prufa.type = "button";
    takkar.appendChild(timasetja); takkar.appendChild(prufa);
    s.appendChild(takkar);
    var msg = ny("p", "vbt-msg" + (dr.skilabod ? " vbt-msg--ok" : ""), dr.skilabod || "");
    dr.skilabod = "";
    s.appendChild(msg);

    // Fyrri birtingar þessarar færslu
    var fyrri = gogn.birtingar.filter(function (b) { return b.efni === x.id && b.stada !== "Hætt við"; });
    if (fyrri.length) {
      var ul = ny("ul", "vbt-fyrri");
      fyrri.forEach(function (b) {
        var li = ny("li");
        li.appendChild(ny("span", "vst-led vst-led--" + (LED[b.stada] || "")));
        li.appendChild(document.createTextNode((b.prufa ? "Prufa á " : "") + b.midill + ": " + b.stada + (b.stada === "Tímasett" ? " " + stuttTimi(b.timi) : "")));
        ul.appendChild(li);
      });
      s.appendChild(ul);
    }
    var tolur = gogn.meta ? gogn.meta.faerslur.filter(function (p) { return p.efni === x.id; }) : [];
    tolur.forEach(function (p) {
      s.appendChild(ny("p", "vbt-teljari", p.midill + ": " + (p.na != null ? "ná " + p.na + ", " : "") + (p.ahorf != null ? "áhorf " + p.ahorf + ", " : "") + p.vidbrogd + " viðbrögð"));
    });
    k.appendChild(s);

    function valdir() { return MIDLAR.filter(function (m) { return hak[m].checked; }); }

    function uppfaera() {
      Array.prototype.forEach.call(skipta.children, function (b) { b.setAttribute("aria-pressed", String(b.textContent === syn)); });
      var t = tegund(mynd.value);
      var ig = hak.Instagram.checked;
      teljari.textContent = txt.value.length + (ig ? " / 2200" : "") + " stafir" + (ig ? ", " + (txt.value.match(/#[^\s#]+/g) || []).length + " / 30 myllumerki" : "");
      teljari.classList.toggle("vbt-of", ig && txt.value.length > 2200);
      var v = [];
      if (!valdir().length) v.push("Veldu að minnsta kosti einn miðil.");
      if (ig && !mynd.value) v.push("Instagram þarf mynd eða myndband.");
      if (mynd.value && !t.t) v.push("Slóðin þarf að enda á .jpg, .png eða .mp4 (Dropbox-hlekkur á skrána sjálfa, ekki möppu).");
      if (ig && t.t === "mynd" && !/^jpe?g$/.test(t.e)) v.push("Instagram tekur bara JPG-myndir.");
      if (ig && /instagram\.com|ffm\.to|https?:\/\//.test(txt.value)) v.push("Hlekkir virka ekki í texta á Instagram; skrifaðu „hlekkur í bio“.");
      var story = hak["Instagram Story"].checked || hak["Facebook Story"].checked;
      if (story && !mynd.value) v.push("Story þarf mynd eða myndband.");
      if (hak["Instagram Story"].checked && t.t === "mynd" && !/^jpe?g$/.test(t.e)) v.push("Instagram Story tekur bara JPG-myndir.");
      if (story) v.push("Textinn fer ekki með í Story; hann þarf að vera í myndinni sjálfri (9:16).");
      adv.textContent = v.join(" ");

      // Eftirmyndin
      simi.textContent = "";
      if (syn === "Story") { simi.appendChild(storyForsk(t)); return; }
      var fb = syn === "Facebook";
      var box = ny("div", "vbt-sima" + (fb ? " vbt-sima--fb" : ""));
      var h = ny("div", "vbt-sima-haus");
      h.appendChild(ny("i"));
      var nafn = ny("span", "", fb ? "Stafrænn Hákon" : "stafraennhakon");
      if (fb) nafn.appendChild(ny("small", "", stuttTimi(dagur.value + " " + (klukka.value || "12:00"))));
      h.appendChild(nafn);
      box.appendChild(h);
      var textabox = ny("div", "vbt-sima-texti");
      var fyrst = fb ? txt.value : txt.value.split("\n")[0].slice(0, 125);
      if (!fb) textabox.appendChild(ny("b", "", "stafraennhakon"));
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
      h.appendChild(ny("span", "", "stafraennhakon"));
      box.appendChild(h);
      return box;
    }

    function senda(erPrufa) {
      msg.textContent = "";
      msg.classList.remove("vbt-msg--ok");
      var hnappur = erPrufa ? prufa : timasetja;
      var midl = valdir();
      var lysing = midl.join(" og ");
      if (!erPrufa && !confirm("Tímasetja „" + x.heiti + "“ á " + lysing + " " + stuttTimi(dagur.value + " " + klukka.value) + "?\n\nFærslan fer út sjálfkrafa. Það má hætta við í biðröðinni þangað til.")) return;
      hnappur.disabled = true;
      kalla("birtingVista", {
        efni: x.id, midlar: midl, timi: dagur.value + " " + klukka.value,
        texti: txt.value, mynd: mynd.value.trim(), prufa: erPrufa
      }).then(function (r) {
        hnappur.disabled = false;
        if (!r.ok) { msg.textContent = r.villa || "Tókst ekki."; return; }
        gogn.birtingar = r.birtingar;
        dr.skilabod = erPrufa ? "Prufan er komin í biðröðina efst. Niðurstaðan sést þar innan 5 mínútna; ekkert er birt."
                              : "Tímasett. Færslan sést í biðröðinni efst og má hætta við þar.";
        teikna();
      });
    }
    s.addEventListener("submit", function (e) { e.preventDefault(); senda(false); });
    prufa.addEventListener("click", function () { senda(true); });

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
  // Biðröðin hreyfist: hún er sótt aftur á mínútu fresti meðan síðan er opin
  setInterval(function () { if (key && !q("app").hidden) saekja(true); }, 60000);

  if (key) { syna("hledur"); saekja(); } else syna("gate");
}
