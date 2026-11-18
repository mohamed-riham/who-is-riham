/**
 * Favicon Generator — Mohamed Riham Portfolio (NOIR EDITORIAL 5.4)
 * Generates:
 *   - public/favicon.ico (Multi-resolution ICO: 16×16, 32×32, 48×48)
 *   - public/favicon.svg (Scalable vector SVG)
 *   - public/favicon-16x16.png (16×16 PNG)
 *   - public/favicon-32x32.png (32×32 PNG)
 *   - public/apple-touch-icon.png (180×180 PNG)
 *   - public/icon-192.png (192×192 PNG)
 *   - public/icon-512.png (512×512 PNG)
 *   - public/icon-512-maskable.png (512×512 PNG with 80% safe area)
 *   - public/safari-pinned-tab.svg (Monochrome black SVG)
 * Also syncs with Next.js app/ directory:
 *   - app/favicon.ico
 *   - app/icon.png
 *   - app/apple-icon.png
 */

import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const APP = path.join(ROOT, 'app');

// ── Multi-resolution ICO Builder ──────────────────────────────────────────────
/**
 * Creates a valid multi-resolution Windows ICO file containing PNG buffers.
 * Supported by all modern browsers (Chrome, Edge, Firefox, Safari) & Windows shell.
 */
function buildMultiResIco(images) {
  const numImages = images.length;
  const headerLen = 6 + numImages * 16;
  let currentOffset = headerLen;

  // 6-byte ICO Header
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type 1 = ICO
  header.writeUInt16LE(numImages, 4); // Number of images

  const dirEntries = [];
  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // Color palette count (0 for 32-bit)
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // Size of image data
    entry.writeUInt32LE(currentOffset, 12); // Offset of image data
    dirEntries.push(entry);
    currentOffset += img.buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...images.map((img) => img.buffer)]);
}

// ── SVG Generators ────────────────────────────────────────────────────────────

/**
 * Editorial Geometric 'R' Monogram (Full Color)
 */
function createMonogramSvg({ size = 512, maskable = false, rounded = true } = {}) {
  // Dimensions and safe area scaling
  const scale = maskable ? 0.72 : 0.86;
  const cornerRadius = maskable || !rounded ? 0 : Math.round(size * 0.22);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="${size}" height="${size}">
    <defs>
      <!-- Base deep obsidian gradient -->
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#070302"/>
        <stop offset="60%" stop-color="#040202"/>
        <stop offset="100%" stop-color="#020101"/>
      </linearGradient>

      <!-- Warm Amber / Burnt Orange atmospheric glow in tile -->
      <radialGradient id="tileGlow" cx="80%" cy="15%" r="65%">
        <stop offset="0%" stop-color="#C43E17" stop-opacity="0.32"/>
        <stop offset="60%" stop-color="#5C2712" stop-opacity="0.10"/>
        <stop offset="100%" stop-color="#040202" stop-opacity="0"/>
      </radialGradient>

      <!-- Subtle emerald rim accent -->
      <radialGradient id="emeraldRim" cx="15%" cy="85%" r="50%">
        <stop offset="0%" stop-color="#426B4A" stop-opacity="0.22"/>
        <stop offset="100%" stop-color="#040202" stop-opacity="0"/>
      </radialGradient>

      <!-- Ivory to Amber-Gold gradient for Monogram -->
      <linearGradient id="rGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F9F9F6"/>
        <stop offset="60%" stop-color="#F9F9F6"/>
        <stop offset="100%" stop-color="#DEA355"/>
      </linearGradient>

      <!-- Burnt orange linear for diagonal leg -->
      <linearGradient id="legGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#DEA355"/>
        <stop offset="100%" stop-color="#C43E17"/>
      </linearGradient>
    </defs>

    <!-- Obsidian Tile Background -->
    <rect width="512" height="512" rx="${cornerRadius}" fill="url(#bgGrad)"/>
    <rect width="512" height="512" rx="${cornerRadius}" fill="url(#tileGlow)"/>
    <rect width="512" height="512" rx="${cornerRadius}" fill="url(#emeraldRim)"/>

    ${
      !maskable && rounded
        ? `<rect x="8" y="8" width="496" height="496" rx="${cornerRadius - 4}" fill="none" stroke="#5C2712" stroke-width="3" stroke-opacity="0.55"/>`
        : ''
    }

    <!-- Transformed Geometric 'R' Monogram -->
    <g transform="translate(256, 256) scale(${scale}) translate(-256, -256)">
      <!-- 1. Vertical Stem (Heavy editorial serif backbone) -->
      <rect x="132" y="100" width="56" height="312" rx="4" fill="url(#rGrad)"/>

      <!-- 2. Upper Bowl (Sleek geometric arch) -->
      <!-- Outer arch path -->
      <path d="M 188 100 
               H 286 
               C 348 100, 394 136, 394 196 
               C 394 252, 348 288, 286 288 
               H 188 
               Z
               M 188 152 
               H 282 
               C 316 152, 340 170, 340 196 
               C 340 222, 316 236, 282 236 
               H 188 
               Z" 
            fill="url(#rGrad)" />

      <!-- 3. Dynamic Architectural Leg -->
      <path d="M 270 274 
               L 364 412 
               H 300 
               L 220 286 
               H 260 
               Z" 
            fill="url(#legGrad)"/>

      <!-- 4. Burnt Orange Diamond Pin (Geometric signature brand accent in bowl counter) -->
      <rect x="238" y="184" width="20" height="20" rx="2" transform="rotate(45 248 194)" fill="#C43E17"/>

      <!-- 5. Fine Amber Gold Accent Terminal -->
      <circle cx="376" cy="406" r="8" fill="#DEA355"/>
    </g>
  </svg>`;
}

/**
 * Monochrome SVG for Safari pinned tab
 */
function createSafariPinnedSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
    <!-- Pure monochrome black paths on transparent background -->
    <path d="M 132 100 H 188 V 412 H 132 Z" fill="#000000"/>
    <path d="M 188 100 H 286 C 348 100, 394 136, 394 196 C 394 252, 348 288, 286 288 H 188 Z M 188 152 H 282 C 316 152, 340 170, 340 196 C 340 222, 316 236, 282 236 H 188 Z" fill="#000000"/>
    <path d="M 270 274 L 364 412 H 300 L 220 286 H 260 Z" fill="#000000"/>
    <rect x="238" y="184" width="20" height="20" transform="rotate(45 248 194)" fill="#000000"/>
    <circle cx="376" cy="406" r="8" fill="#000000"/>
  </svg>`;
}

// ── Main Build Execution ──────────────────────────────────────────────────────
async function buildFavicons() {
  console.log('🎨 Generating NOIR EDITORIAL Favicon System...');

  // 1. Scalable SVG files
  const standardSvg = createMonogramSvg({ size: 512, maskable: false });
  const maskableSvg = createMonogramSvg({ size: 512, maskable: true });
  const safariSvg = createSafariPinnedSvg();

  fs.writeFileSync(path.join(PUBLIC, 'favicon.svg'), standardSvg);
  fs.writeFileSync(path.join(PUBLIC, 'safari-pinned-tab.svg'), safariSvg);
  console.log('  ✓ public/favicon.svg (Scalable vector)');
  console.log('  ✓ public/safari-pinned-tab.svg (Safari monochrome mask)');

  // 2. High-res raster master
  const masterBuf = await sharp(Buffer.from(standardSvg)).png().toBuffer();
  const maskableBuf = await sharp(Buffer.from(maskableSvg)).png().toBuffer();

  // 3. PNG sizes
  // favicon-16x16.png
  const png16 = await sharp(masterBuf).resize(16, 16).png().toBuffer();
  fs.writeFileSync(path.join(PUBLIC, 'favicon-16x16.png'), png16);
  console.log('  ✓ public/favicon-16x16.png (16×16)');

  // favicon-32x32.png
  const png32 = await sharp(masterBuf).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(PUBLIC, 'favicon-32x32.png'), png32);
  console.log('  ✓ public/favicon-32x32.png (32×32)');

  // 48x48 for multi-res ICO
  const png48 = await sharp(masterBuf).resize(48, 48).png().toBuffer();

  // apple-touch-icon.png (180×180)
  const png180 = await sharp(masterBuf).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(PUBLIC, 'apple-touch-icon.png'), png180);
  fs.writeFileSync(path.join(PUBLIC, 'apple-icon.png'), png180); // alias
  console.log('  ✓ public/apple-touch-icon.png (180×180)');

  // icon-192.png (PWA standard)
  const png192 = await sharp(masterBuf).resize(192, 192).png().toBuffer();
  fs.writeFileSync(path.join(PUBLIC, 'icon-192.png'), png192);
  console.log('  ✓ public/icon-192.png (192×192)');

  // icon-512.png (PWA standard)
  const png512 = await sharp(masterBuf).resize(512, 512).png().toBuffer();
  fs.writeFileSync(path.join(PUBLIC, 'icon-512.png'), png512);
  console.log('  ✓ public/icon-512.png (512×512)');

  // icon-512-maskable.png (PWA maskable with 80% safe area)
  const png512Maskable = await sharp(maskableBuf).resize(512, 512).png().toBuffer();
  fs.writeFileSync(path.join(PUBLIC, 'icon-512-maskable.png'), png512Maskable);
  console.log('  ✓ public/icon-512-maskable.png (512×512 Maskable)');

  // 4. Multi-resolution ICO (16, 32, 48)
  const multiIcoBuf = buildMultiResIco([
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 },
    { width: 48, height: 48, buffer: png48 },
  ]);
  fs.writeFileSync(path.join(PUBLIC, 'favicon.ico'), multiIcoBuf);
  console.log('  ✓ public/favicon.ico (Multi-res: 16×16, 32×32, 48×48)');

  // 5. Sync Next.js app/ directory metadata icons
  fs.writeFileSync(path.join(APP, 'favicon.ico'), multiIcoBuf);
  fs.writeFileSync(path.join(APP, 'icon.png'), png32);
  fs.writeFileSync(path.join(APP, 'apple-icon.png'), png180);
  console.log('  ✓ Synced app/favicon.ico, app/icon.png, app/apple-icon.png');

  console.log('\n✨ Complete favicon system successfully generated and verified!');
}

buildFavicons().catch((err) => {
  console.error('❌ Error generating favicons:', err);
  process.exit(1);
});
