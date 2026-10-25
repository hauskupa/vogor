// Aðgangur að síðum sem tala við Apps Script: lykillinn, geymslan og köllin.
// Notað af Nafir-síðunum (src/nafir) og æfingasíðunni (permixerSetlist.js).
//
// Lykillinn kemur í persónulegum hlekk (?b=, ?l=, ?k= eftir síðu, því hlekkir
// sem eru farnir út mega ekki brotna) eða úr vafranum. Úr slóðinni er hann
// geymdur strax og tekinn burt, svo hann fari ekki með ef slóðinni er deilt.

// localStorage getur kastað (einkagluggi, lokað fyrir vefgögn). Þá virkar
// síðan áfram en vafrinn man ekkert.
export function geymt(nafn) {
  try {
    return localStorage.getItem(nafn) || "";
  } catch (e) {
    return "";
  }
}

export function geyma(nafn, gildi) {
  try {
    if (gildi) localStorage.setItem(nafn, gildi);
    else localStorage.removeItem(nafn);
  } catch (e) {
    // sjá að ofan
  }
}

// Lykill úr ?<param>= gengur fyrir þeim geymda. nyr segir hvort hann kom úr
// slóðinni, svo síðan geti sagt „hlekkurinn gildir ekki“ frekar en að spyrja
// um lykilorð.
export function lesaLykil(param, geymsla) {
  const slod = new URL(location.href);
  const ur = (slod.searchParams.get(param) || "").trim();
  if (!ur) return { lykill: geymt(geymsla), nyr: false };
  geyma(geymsla, ur);
  slod.searchParams.delete(param);
  try {
    // Full slóð, því Webflow setur <base> á síðuna og afstæð slóð færi annað
    history.replaceState(history.state, "", slod.href);
  } catch (e) {
    // Lykillinn situr þá eftir í slóðinni; virknin er sú sama
  }
  return { lykill: ur, nyr: true };
}

// POST á Apps Script. text/plain svo vafrinn sendi ekki CORS-forspurn, sem
// Apps Script svarar ekki. Netvillur fá sömu skilaboð í öllum vöfrum (Chrome
// segir „Failed to fetch“, Safari „Load failed“, Firefox annað).
export const EKKERT_SAMBAND = "Ekkert samband.";

export function kalla(slod, beidni) {
  return fetch(slod, {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(beidni),
  }).then(
    (svar) =>
      svar.json().catch(() => {
        // Apps Script skilar HTML-síðu þegar scriptið sjálft hrynur
        throw new Error("Bakendinn svaraði ekki eins og hann á að gera.");
      }),
    () => {
      throw new Error(EKKERT_SAMBAND);
    }
  );
}
