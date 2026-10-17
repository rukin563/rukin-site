// Makes web-sized copies of your photos.
//
//   1. Put the full-quality photo in image-originals/  (never uploaded to GitHub)
//   2. Run:  npm run images
//   3. The compressed copy appears in public/images/ with the same name
//
// Opaque images become .jpg; images with real transparency become .webp.
// Hidden photo data (camera, GPS location) is removed.
// Only new or changed photos are processed. To redo everything: npm run images -- --all
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SRC = 'image-originals';
const DST = 'public/images';
const IMAGE = /\.(jpe?g|png|webp|tiff?|heic)$/i;
const redoAll = process.argv.includes('--all');

// Widest size each kind of image is ever shown at (a bit more for sharp phone screens).
function maxWidth(name) {
  if (name.startsWith('capa_banner')) return 2400;
  if (name.startsWith('btn_')) return 600;
  return 1600;
}

if (!fs.existsSync(SRC)) {
  console.log(`No ${SRC}/ folder. Create it and put your photos there.`);
  process.exit(0);
}

let done = 0;
let skipped = 0;
let before = 0;
let after = 0;

for (const file of fs.readdirSync(SRC).sort()) {
  if (!IMAGE.test(file)) continue;

  // Names with spaces, accents or a capital first letter cause broken images online.
  if (/[^A-Za-z0-9._-]/.test(file) || /^[A-Z]/.test(file)) {
    console.log(`! ${file}: rename it using only lowercase-first letters, numbers, - and _ (no spaces or accents)`);
  }

  const input = path.join(SRC, file);
  const base = file.replace(/\.[^.]+$/, '');
  const { isOpaque } = await sharp(input).stats();
  const out = path.join(DST, base + (isOpaque ? '.jpg' : '.webp'));

  if (!redoAll && fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(input).mtimeMs) {
    skipped++;
    continue;
  }

  let img = sharp(input)
    .rotate() // apply the phone's orientation before the data is removed
    .resize({ width: maxWidth(file), withoutEnlargement: true })
    .toColorspace('srgb');
  img = isOpaque
    ? img.flatten({ background: '#ffffff' }).jpeg({ quality: 80, mozjpeg: true, progressive: true })
    : img.webp({ quality: 82, alphaQuality: 90 });
  await img.toFile(out + '.tmp');
  fs.renameSync(out + '.tmp', out);

  // If the format changed (e.g. photo.png -> photo.jpg), remove the old heavy copy.
  const oldCopy = path.join(DST, file);
  if (oldCopy !== out && fs.existsSync(oldCopy)) fs.unlinkSync(oldCopy);

  const b = fs.statSync(input).size;
  const a = fs.statSync(out).size;
  before += b;
  after += a;
  done++;
  console.log(`✓ ${path.basename(out).padEnd(32)} ${Math.round(b / 1024)}K -> ${Math.round(a / 1024)}K`);
}

console.log(
  done
    ? `\n${done} compressed (${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB), ${skipped} already up to date.`
    : `\nNothing new: ${skipped} images already up to date.`
);
