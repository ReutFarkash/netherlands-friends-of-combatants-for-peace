/**
 * Capture thumbnail screenshots of the design previews + content pages for the
 * /dev review gallery. Part of the dev wrapper — not used by the public site.
 *
 * Usage:
 *   npm run build && npm run preview &   # serve dist on :4321
 *   node scripts/screenshots.mjs         # writes public/previews/*.png
 *
 * Uses headless Chrome (already on macOS) + sharp (an Astro dependency), so no
 * extra installs. NOTE: Chrome's new headless writes the --screenshot file and
 * then hangs instead of exiting, so we poll for the file and kill it ourselves.
 */
import { spawn } from 'node:child_process';
import { mkdirSync, rmSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.PREVIEW_BASE || 'http://localhost:4321';
const OUT = 'public/previews';
const TMP = '.screenshot-tmp';

// [route, output-name]
const shots = [
  ['/preview/common-ground/', 'common-ground'],
  ['/preview/photo/', 'photo'],
  ['/preview/voices/', 'voices'],
  ['/preview/split/', 'split'],
  ['/preview/statement/', 'statement'],
  ['/preview/hub/', 'hub'],
  ['/', 'home'],
  ['/nl/', 'home-nl'],
  ['/about/', 'about'],
  ['/our-story/', 'our-story'],
  ['/values/', 'values'],
  ['/what-we-do/', 'what-we-do'],
  ['/get-involved/', 'get-involved'],
  ['/contact/', 'contact'],
  ['/team/', 'team'],
  ['/news/', 'news'],
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

mkdirSync(OUT, { recursive: true });
mkdirSync(TMP, { recursive: true });

async function capture(route, name) {
  const raw = join(TMP, `${name}.png`);
  const profile = join(TMP, `profile-${name}`);
  rmSync(raw, { force: true });
  rmSync(profile, { recursive: true, force: true });

  const child = spawn(
    CHROME,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--no-first-run',
      '--no-default-browser-check',
      '--hide-scrollbars',
      `--user-data-dir=${profile}`,
      '--window-size=1200,850',
      `--screenshot=${raw}`,
      `${BASE}${route}`,
    ],
    { stdio: 'ignore' },
  );

  // Chrome writes the PNG then hangs — wait for a stable file, then kill it.
  let last = -1;
  let stable = 0;
  let done = false;
  for (let i = 0; i < 60; i++) {
    await sleep(300);
    if (existsSync(raw)) {
      const size = statSync(raw).size;
      if (size > 0 && size === last) {
        if (++stable >= 2) {
          done = true;
          break;
        }
      } else {
        stable = 0;
      }
      last = size;
    }
  }
  child.kill('SIGKILL');

  if (!done) throw new Error('screenshot did not stabilise');
  await sharp(raw)
    .resize(640, 453, { fit: 'cover', position: 'top' })
    .png({ quality: 80 })
    .toFile(join(OUT, `${name}.png`));

  // Best-effort profile cleanup — Chrome may still hold files briefly after kill.
  await sleep(200);
  try {
    rmSync(profile, { recursive: true, force: true });
  } catch {
    /* ignore — temp dir is removed wholesale at the end */
  }
}

let ok = 0;
for (const [route, name] of shots) {
  try {
    await capture(route, name);
    ok++;
    console.log(`✓ ${name}`);
  } catch (err) {
    console.error(`✗ ${name}: ${err.message}`);
  }
}

rmSync(TMP, { recursive: true, force: true });
console.log(`\n${ok}/${shots.length} thumbnails → ${OUT}/`);
if (ok < shots.length) process.exitCode = 1;
