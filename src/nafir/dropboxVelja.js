// Dropbox á birtingarsíðunni: velja mynd eða myndband úr möppu verkefnisins, eða
// hlaða upp úr tölvu eða síma. Hvort tveggja skilar opnum hlekk sem fer beint í
// reitinn „Mynd eða myndband“. Innskráningin er sú sama og í Vogor-spilaranum
// (src/dropbox.js) og gildir á báðum síðum.
import { createDropbox } from "../dropbox.js";
import { ny } from "./sameiginlegt.js";

const LEYFT = /\.(jpe?g|png|mp4)$/i;
const MYND = /\.(jpe?g|png)$/i;

function staerd(b) {
  return b > 1048576 ? (b / 1048576).toFixed(1) + " MB" : Math.round(b / 1024) + " kB";
}

export function dropboxVelja({ mappa }) {
  const dbx = createDropbox();
  let reikningur = null;
  let tilbuid = null; // loforð um að innskráning sé kláruð og reikningurinn sóttur

  // Komið til baka úr Dropbox-innskráningu: klára hana strax við ræsingu
  const innskraning = dbx.ljukaInnskraningu().catch((e) => {
    console.warn("dropbox:", e.message);
    return false;
  });

  function tengja() {
    if (!tilbuid) {
      tilbuid = innskraning.then(async () => {
        if (!dbx.tengdur()) return null;
        reikningur = await dbx.reikningur();
        return reikningur;
      }).catch((e) => {
        tilbuid = null;
        // Gömul innskráning án heimildar til að skrifa: skrá inn aftur
        if (e.vantarHeimild || e.utrunnid) dbx.utskra();
        throw e;
      });
    }
    return tilbuid;
  }

  // Glugginn
  const gluggi = ny("dialog", "vbt-dbx");
  const haus = ny("div", "vbt-dbx-haus");
  const slodEl = ny("b");
  const upp = ny("button", "vbt-link", "Upp");
  upp.type = "button";
  const loka = ny("button", "vbt-link", "Loka");
  loka.type = "button";
  haus.append(upp, slodEl, loka);
  const notandi = ny("p", "vbt-small");
  const listi = ny("ul", "vbt-dbx-listi");
  gluggi.append(haus, notandi, listi);
  document.body.appendChild(gluggi);

  let nuna = mappa;
  let valid = null;
  loka.addEventListener("click", () => gluggi.close());
  gluggi.addEventListener("close", () => valid && valid(null));
  upp.addEventListener("click", () => {
    if (nuna.split("/").length > 2) opna(nuna.replace(/\/[^/]+$/, ""));
  });

  function utskraHlekkur() {
    const b = ny("button", "vbt-link", "Skrá út");
    b.type = "button";
    b.addEventListener("click", () => {
      dbx.utskra();
      reikningur = null;
      tilbuid = null;
      gluggi.close();
    });
    return b;
  }

  async function opna(slod) {
    nuna = slod;
    slodEl.textContent = slod;
    upp.hidden = slod === mappa;
    listi.textContent = "";
    listi.appendChild(ny("li", "vbt-small", "Sæki …"));
    try {
      const allt = await dbx.listi(slod);
      const moppur = allt.filter((e) => e[".tag"] === "folder").sort((a, b) => a.name.localeCompare(b.name));
      const skrar = allt.filter((e) => e[".tag"] === "file").sort((a, b) => b.server_modified.localeCompare(a.server_modified));
      listi.textContent = "";
      moppur.forEach((e) => {
        const li = ny("li", "vbt-dbx-mappa");
        const b = ny("button", "", "📁 " + e.name);
        b.type = "button";
        b.addEventListener("click", () => opna(e.path_display));
        li.appendChild(b);
        listi.appendChild(li);
      });
      const myndir = [];
      skrar.forEach((e) => {
        const leyft = LEYFT.test(e.name);
        const li = ny("li", leyft ? "" : "vbt-dbx-bannad");
        const b = ny("button");
        b.type = "button";
        b.disabled = !leyft;
        const thumb = ny("span", "vbt-dbx-thumb", MYND.test(e.name) ? "" : e.name.split(".").pop().toUpperCase());
        if (MYND.test(e.name)) myndir.push([e.path_display, thumb]);
        const nafn = ny("span", "vbt-dbx-nafn", e.name);
        nafn.appendChild(ny("small", "", staerd(e.size) + " · " + e.server_modified.slice(0, 10)));
        b.append(thumb, nafn);
        if (leyft) b.addEventListener("click", () => velja(e.path_display, b));
        li.appendChild(b);
        listi.appendChild(li);
      });
      if (!allt.length) listi.appendChild(ny("li", "vbt-small", "Mappan er tóm."));
      dbx.smamyndir(myndir.map((m) => m[0])).then((t) => {
        myndir.forEach(([p, el]) => { if (t[p]) el.style.backgroundImage = `url(${t[p]})`; });
      }).catch(() => {});
    } catch (e) {
      listi.textContent = "";
      listi.appendChild(ny("li", "vbt-msg", e.message));
    }
  }

  // Heimild vantar (innskráning frá því áður en appið fékk að skrifa): skrá út og bjóða nýja
  function heimildVantar(e) {
    if (!e.vantarHeimild) return false;
    dbx.utskra();
    reikningur = null;
    tilbuid = null;
    if (gluggi.open) gluggi.close();
    if (confirm("Dropbox þarf nýja innskráningu svo síðan megi hlaða upp og búa til hlekki. Skrá inn núna?")) dbx.innskra();
    return true;
  }

  async function velja(slod, takki) {
    takki.disabled = true;
    notandi.textContent = "Bý til hlekk …";
    try {
      const url = await dbx.hlekkur(slod);
      const cb = valid;
      valid = null;
      gluggi.close();
      cb(url);
    } catch (e) {
      if (heimildVantar(e)) return;
      notandi.textContent = "Tókst ekki að búa til hlekk: " + e.message;
      takki.disabled = false;
    }
  }

  // Skilar true ef tengt; annars sendir notandann í innskráningu (síðan fer burt)
  async function tryggjaTengingu() {
    try {
      if (await tengja()) return true;
    } catch (e) {
      // tengja() skráir út ef heimild vantaði eða innskráningin rann út; þá er skráð inn aftur
      if (dbx.tengdur()) throw e;
    }
    if (confirm("Tengja Dropbox? Þú ferð til Dropbox og kemur svo aftur hingað. Textinn í reitunum heldur sér.")) {
      await dbx.innskra();
    }
    return false;
  }

  return {
    // Opnar gluggann; leysist með opnum hlekk eða null ef hætt var við
    async velja() {
      if (!(await tryggjaTengingu())) return null;
      notandi.textContent = "Tengt sem " + reikningur.name.display_name + ". ";
      notandi.appendChild(utskraHlekkur());
      gluggi.showModal();
      opna(mappa);
      return new Promise((leysa) => (valid = leysa));
    },

    // Hleður skránni upp í möppu verkefnisins og skilar opnum hlekk.
    // framvinda(texti) segir frá stöðunni.
    async hlada(skra, framvinda) {
      if (!LEYFT.test(skra.name)) throw new Error("Bara .jpg, .png eða .mp4.");
      if (!(await tryggjaTengingu())) return null;
      try {
        const lysing = await dbx.hlada(skra, mappa, (h) => framvinda("Hleð upp " + Math.round(h * 100) + " %"));
        framvinda("Bý til hlekk …");
        return await dbx.hlekkur(lysing.path_display);
      } catch (e) {
        if (heimildVantar(e)) return null;
        throw e;
      }
    },
  };
}
