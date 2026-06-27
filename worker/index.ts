/**
 * Pre-launch password gate for the NLFCFP site.
 *
 * Runs BEFORE any static asset is served (see `run_worker_first` in
 * wrangler.jsonc). Until the chapter formally launches, the whole site sits
 * behind HTTP Basic Auth so draft copy can't be found by accident or mistaken
 * for the chapter's real words.
 *
 * Username is fixed below; the password comes from the SITE_PASSWORD secret
 * (set in the Cloudflare dashboard — never committed to git).
 *
 * TO REMOVE AT LAUNCH: delete this file and remove the `main`, `binding`, and
 * `run_worker_first` lines from wrangler.jsonc.
 */

const USERNAME = "cfp";
const REALM = "NLFCFP — preview site, not yet launched";

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  SITE_PASSWORD?: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Fail closed: if the secret isn't set, serve nothing rather than
    // accidentally exposing the unlaunched site.
    if (!env.SITE_PASSWORD) {
      return new Response(
        "Preview gate not configured (SITE_PASSWORD secret missing).",
        { status: 503, headers: { "Cache-Control": "no-store" } },
      );
    }

    if (isAuthorized(request, env.SITE_PASSWORD)) {
      return env.ASSETS.fetch(request);
    }

    return new Response("Authentication required.", {
      status: 401,
      headers: {
        "WWW-Authenticate": `Basic realm="${REALM}", charset="UTF-8"`,
        "Cache-Control": "no-store",
      },
    });
  },
};

function isAuthorized(request: Request, expectedPassword: string): boolean {
  const header = request.headers.get("Authorization");
  if (!header || !header.startsWith("Basic ")) return false;

  let decoded: string;
  try {
    decoded = atob(header.slice("Basic ".length).trim());
  } catch {
    return false;
  }

  const sep = decoded.indexOf(":");
  if (sep === -1) return false;

  const user = decoded.slice(0, sep);
  const pass = decoded.slice(sep + 1);

  return user === USERNAME && timingSafeEqual(pass, expectedPassword);
}

// Constant-time comparison so a wrong password can't be inferred from timing.
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}
