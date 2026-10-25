// Audio-proxy fyrir album mixerinn (src/albumMixer.js, AUDIO_PROXY_URL).
//
// Dropbox sendir ekki CORS-hausa, og Web Audio getur ekki unnið með hljóð frá
// öðru léni án þeirra. Proxy-ið sækir skrána og bætir hausunum við:
//   https://audio-proxy.stafraennhakon.workers.dev/?src=<dropbox-hlekkur>
//
// Bara Dropbox-hlekkir eru leyfðir. Annars væri þetta opið proxy sem hver
// sem er gæti notað á reikningi okkar.
//
// Uppfært með `npx wrangler deploy` úr þessari möppu.

const LEYFD_LEN = new Set(["www.dropbox.com", "dl.dropbox.com", "dl.dropboxusercontent.com"]);
// Dropbox áframsendir á uc…dl.dropboxusercontent.com
const LEYFT_EFTIR_AFRAMSENDINGU = /(^|\.)(dropbox\.com|dropboxusercontent\.com)$/;
const HAUSAR_AFRAM = ["Content-Type", "Content-Length", "Content-Range", "Accept-Ranges", "ETag", "Last-Modified", "Cache-Control"];

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Range, Content-Type",
  "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
  "Access-Control-Expose-Headers": "Content-Length, Content-Range, Accept-Ranges, Content-Type, ETag",
  "X-Audio-Proxy": "cloudflare",
};

function texti(skilabod, status) {
  return new Response(skilabod, { status, headers: { ...CORS, "Content-Type": "text/plain;charset=UTF-8" } });
}

export default {
  async fetch(request) {
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });
    if (request.method !== "GET" && request.method !== "HEAD") return texti("Method not allowed", 405);

    const src = new URL(request.url).searchParams.get("src");
    if (!src) return texti("Missing ?src=", 400);

    let slod;
    try {
      slod = new URL(src);
    } catch {
      return texti("Invalid ?src=", 400);
    }
    if (slod.protocol !== "https:" || !LEYFD_LEN.has(slod.hostname)) return texti("Only Dropbox links are allowed", 403);

    // dl=0 skilar vefsíðu Dropbox; raw=1 skilar skránni sjálfri
    if (slod.hostname !== "dl.dropboxusercontent.com") {
      slod.searchParams.delete("dl");
      slod.searchParams.set("raw", "1");
    }

    const hausar = new Headers();
    const range = request.headers.get("Range");
    if (range) hausar.set("Range", range);

    // Alltaf GET: Dropbox svarar HEAD með JSON í stað hausa skrárinnar
    const svar = await fetch(slod.toString(), { headers: hausar, redirect: "follow" });

    if (!LEYFT_EFTIR_AFRAMSENDINGU.test(new URL(svar.url).hostname)) return texti("Unexpected redirect", 502);
    // HTML þýðir að hlekkurinn er dauður eða skráin ekki deilt
    if ((svar.headers.get("Content-Type") || "").startsWith("text/html")) return texti("Dropbox did not return a file", 502);

    const ut = new Headers(CORS);
    for (const h of HAUSAR_AFRAM) {
      const v = svar.headers.get(h);
      if (v) ut.set(h, v);
    }
    if (request.method === "HEAD") {
      await svar.body?.cancel();
      return new Response(null, { status: svar.status, headers: ut });
    }
    return new Response(svar.body, { status: svar.status, headers: ut });
  },
};
