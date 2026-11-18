/**
 * OG Image Generator — Mohamed Riham Portfolio (NOIR EDITORIAL 5.4)
 * Source Portrait: intake/MyPhotos/ChatGPT Image Aug 21, 2026, 04_19_03 PM.png
 * Produces:
 *   - public/og-image.png (1200×630)
 *   - public/og-image-square.png (600×600)
 * 
 * Corrects square framing: Mohamed Riham's face is naturally proportioned,
 * fully visible with comfortable headroom, shoulders, and suit, avoiding extreme zoom.
 */

import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');

// Source portrait requested by user
const SOURCE_PORTRAIT = path.join(
  ROOT,
  'intake',
  'MyPhotos',
  'ChatGPT Image Aug 21, 2026, 04_19_03 PM.png'
);

const FALLBACK_PORTRAIT = path.join(
  PUBLIC,
  'images',
  'profile',
  'mohamed-riham-portrait.png'
);

const PORTRAIT = fs.existsSync(SOURCE_PORTRAIT) ? SOURCE_PORTRAIT : FALLBACK_PORTRAIT;

console.log(`Using source portrait: ${PORTRAIT}`);
if (!fs.existsSync(PORTRAIT)) {
  console.error(`❌ Source portrait not found at: ${PORTRAIT}`);
  process.exit(1);
}

const OUT_WIDE = path.join(PUBLIC, 'og-image.png');
const OUT_SQUARE = path.join(PUBLIC, 'og-image-square.png');

// ── Palette (NOIR EDITORIAL) ─────────────────────────────────────────────────
const C = {
  obsidian: '#040202',
  darkBrown: '#5C2712',
  burntOrange: '#C43E17',
  bronze: '#6B503C',
  ivory: '#F9F9F6',
  amberGold: '#DEA355',
  sand: '#D3C29F',
  steelBlue: '#678292',
  emerald: '#426B4A',
};

// ── 1. WIDE 1200×630 ──────────────────────────────────────────────────────────
async function makeWide() {
  const W = 1200;
  const H = 630;

  const pCardW = 460;
  const pCardH = 546;
  const pCardX = 42;
  const pCardY = 42;

  const portraitBuf = await sharp(PORTRAIT)
    .resize(pCardW, pCardH, {
      fit: 'cover',
      position: 'top',
    })
    .toBuffer();

  const cardMaskSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${pCardW}" height="${pCardH}">
    <rect width="${pCardW}" height="${pCardH}" rx="12" fill="white"/>
  </svg>`;
  const cardMaskBuf = await sharp(Buffer.from(cardMaskSvg)).png().toBuffer();

  const maskedPortraitCard = await sharp(portraitBuf)
    .composite([{ input: cardMaskBuf, blend: 'dest-in' }])
    .png()
    .toBuffer();

  const bgSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#040202"/>
        <stop offset="50%" stop-color="#080403"/>
        <stop offset="100%" stop-color="#020101"/>
      </linearGradient>

      <radialGradient id="emeraldGlow" cx="15%" cy="20%" r="60%">
        <stop offset="0%" stop-color="${C.emerald}" stop-opacity="0.30"/>
        <stop offset="60%" stop-color="${C.emerald}" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="#040202" stop-opacity="0"/>
      </radialGradient>

      <radialGradient id="orangeGlow" cx="88%" cy="12%" r="55%">
        <stop offset="0%" stop-color="${C.burntOrange}" stop-opacity="0.35"/>
        <stop offset="70%" stop-color="#040202" stop-opacity="0"/>
      </radialGradient>

      <radialGradient id="brownGlow" cx="80%" cy="88%" r="55%">
        <stop offset="0%" stop-color="${C.darkBrown}" stop-opacity="0.50"/>
        <stop offset="80%" stop-color="#040202" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="url(#bg)"/>
    <rect width="${W}" height="${H}" fill="url(#emeraldGlow)"/>
    <rect width="${W}" height="${H}" fill="url(#orangeGlow)"/>
    <rect width="${W}" height="${H}" fill="url(#brownGlow)"/>

    <rect x="20" y="20" width="${W - 40}" height="${H - 40}" rx="4" fill="none" stroke="${C.darkBrown}" stroke-width="1" stroke-opacity="0.4"/>
    <rect x="${pCardX - 2}" y="${pCardY - 2}" width="${pCardW + 4}" height="${pCardH + 4}" rx="14" fill="none" stroke="${C.bronze}" stroke-width="2" stroke-opacity="0.8"/>
  </svg>`;

  const textSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <text x="546" y="86" font-family="Georgia, serif" font-size="12" letter-spacing="5" fill="${C.amberGold}" opacity="0.9">WHO IS RIHAM // NOIR EDITORIAL</text>
    <line x1="546" y1="104" x2="1136" y2="104" stroke="${C.burntOrange}" stroke-width="1.5" opacity="0.8"/>

    <text x="546" y="178" font-family="Georgia, serif" font-size="62" font-weight="bold" fill="${C.ivory}" letter-spacing="-1">Mohamed</text>
    <text x="546" y="246" font-family="Georgia, serif" font-size="62" font-weight="bold" fill="${C.ivory}" letter-spacing="-1">Riham</text>

    <rect x="546" y="270" width="310" height="32" rx="3" fill="${C.burntOrange}" opacity="0.2"/>
    <rect x="546" y="270" width="4" height="32" rx="1" fill="${C.burntOrange}"/>
    <text x="560" y="291" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="600" fill="${C.amberGold}" letter-spacing="2">DATA SCIENCE UNDERGRADUATE</text>

    <text x="546" y="336" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="${C.sand}" opacity="0.9">Cardiff Metropolitan University · ICBT Campus</text>
    <text x="546" y="372" font-family="Georgia, serif" font-size="17" font-style="italic" fill="${C.ivory}" opacity="0.88">"Building applied intelligence with empirical rigor."</text>

    <!-- 3 Achievement Indicators -->
    <rect x="546" y="416" width="180" height="74" rx="4" fill="#0A0503" stroke="${C.darkBrown}" stroke-width="1"/>
    <rect x="546" y="416" width="3" height="74" rx="1" fill="${C.burntOrange}"/>
    <text x="560" y="448" font-family="Georgia, serif" font-size="24" font-weight="bold" fill="${C.ivory}">99.20%</text>
    <text x="560" y="472" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="500" fill="${C.amberGold}" letter-spacing="1">YOLOv8n mAP@50</text>

    <rect x="738" y="416" width="194" height="74" rx="4" fill="#0A0503" stroke="${C.darkBrown}" stroke-width="1"/>
    <rect x="738" y="416" width="3" height="74" rx="1" fill="${C.amberGold}"/>
    <text x="752" y="448" font-family="Georgia, serif" font-size="20" font-weight="bold" fill="${C.ivory}">11 DISTINCTIONS</text>
    <text x="752" y="472" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="500" fill="${C.amberGold}" letter-spacing="1">Pearson BTEC HND</text>

    <rect x="944" y="416" width="192" height="74" rx="4" fill="#0A0503" stroke="${C.darkBrown}" stroke-width="1"/>
    <rect x="944" y="416" width="3" height="74" rx="1" fill="${C.steelBlue}"/>
    <text x="958" y="448" font-family="Georgia, serif" font-size="24" font-weight="bold" fill="${C.ivory}">284,807</text>
    <text x="958" y="472" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="500" fill="${C.amberGold}" letter-spacing="0.5">Transactions Analyzed</text>

    <line x1="546" y1="524" x2="1136" y2="524" stroke="${C.darkBrown}" stroke-width="1" opacity="0.6"/>
    <text x="546" y="552" font-family="Arial, Helvetica, sans-serif" font-size="12" letter-spacing="1.5" fill="${C.sand}" opacity="0.8">mohamed-riham.github.io/who-is-riham/</text>
  </svg>`;

  const bgBuf = await sharp(Buffer.from(bgSvg)).png().toBuffer();
  const textBuf = await sharp(Buffer.from(textSvg)).png().toBuffer();

  await sharp(bgBuf)
    .composite([
      { input: maskedPortraitCard, left: pCardX, top: pCardY },
      { input: textBuf, left: 0, top: 0 },
    ])
    .png()
    .toFile(OUT_WIDE);

  console.log(`✅  Wide OG image updated: ${OUT_WIDE} (1200×630)`);
}

// ── 2. SQUARE 600×600 ─────────────────────────────────────────────────────────
async function makeSquare() {
  const S = 600;

  // Portrait dimensions: Centered, natural aspect ratio (270 wide × 290 high)
  // Perfectly proportioned so face is not oversized, with generous headroom and natural shoulders
  const pCardW = 270;
  const pCardH = 290;
  const pCardX = Math.round((S - pCardW) / 2); // 165
  const pCardY = 26;

  const portraitBuf = await sharp(PORTRAIT)
    .resize(pCardW, pCardH, {
      fit: 'cover',
      position: 'top',
    })
    .toBuffer();

  const cardMaskSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${pCardW}" height="${pCardH}">
    <rect width="${pCardW}" height="${pCardH}" rx="12" fill="white"/>
  </svg>`;
  const cardMaskBuf = await sharp(Buffer.from(cardMaskSvg)).png().toBuffer();

  const maskedPortraitCard = await sharp(portraitBuf)
    .composite([{ input: cardMaskBuf, blend: 'dest-in' }])
    .png()
    .toBuffer();

  const bgSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}">
    <defs>
      <linearGradient id="sqBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#040202"/>
        <stop offset="100%" stop-color="#080403"/>
      </linearGradient>
      <radialGradient id="sqEmerald" cx="20%" cy="15%" r="50%">
        <stop offset="0%" stop-color="${C.emerald}" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#040202" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="sqGlow" cx="85%" cy="85%" r="60%">
        <stop offset="0%" stop-color="${C.burntOrange}" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="#040202" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="${S}" height="${S}" fill="url(#sqBg)"/>
    <rect width="${S}" height="${S}" fill="url(#sqEmerald)"/>
    <rect width="${S}" height="${S}" fill="url(#sqGlow)"/>

    <!-- Subtle canvas border -->
    <rect x="14" y="14" width="${S - 28}" height="${S - 28}" rx="4" fill="none" stroke="${C.darkBrown}" stroke-width="1" stroke-opacity="0.35"/>

    <!-- Editorial luxury border around centered portrait card -->
    <rect x="${pCardX - 2}" y="${pCardY - 2}" width="${pCardW + 4}" height="${pCardH + 4}" rx="14" fill="none" stroke="${C.bronze}" stroke-width="1.5" stroke-opacity="0.8"/>
  </svg>`;

  // Lower panel content: clean, well-spaced editorial typography
  const textSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}">
    <!-- Eyebrow -->
    <text x="300" y="348" text-anchor="middle" font-family="Georgia, serif" font-size="10" letter-spacing="4" fill="${C.amberGold}" opacity="0.9">WHO IS RIHAM // NOIR EDITORIAL</text>

    <!-- Name -->
    <text x="300" y="386" text-anchor="middle" font-family="Georgia, serif" font-size="34" font-weight="bold" fill="${C.ivory}" letter-spacing="-0.5">Mohamed Riham</text>

    <!-- Role Badge -->
    <rect x="175" y="398" width="250" height="24" rx="2" fill="${C.burntOrange}" opacity="0.18"/>
    <text x="300" y="414" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="600" fill="${C.amberGold}" letter-spacing="2">DATA SCIENCE UNDERGRADUATE</text>

    <!-- Affiliation -->
    <text x="300" y="440" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="11" fill="${C.sand}" opacity="0.85">Cardiff Metropolitan University · ICBT Campus</text>

    <!-- Divider -->
    <line x1="60" y1="458" x2="540" y2="458" stroke="${C.darkBrown}" stroke-width="1" opacity="0.6"/>

    <!-- 3 Metrics row -->
    <!-- Col 1 -->
    <text x="135" y="488" text-anchor="middle" font-family="Georgia, serif" font-size="16" font-weight="bold" fill="${C.ivory}">99.20%</text>
    <text x="135" y="504" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="9" fill="${C.amberGold}" letter-spacing="0.5">YOLOv8n mAP@50</text>

    <!-- Col 2 -->
    <text x="300" y="488" text-anchor="middle" font-family="Georgia, serif" font-size="14" font-weight="bold" fill="${C.ivory}">11 DISTINCTIONS</text>
    <text x="300" y="504" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="9" fill="${C.amberGold}" letter-spacing="0.5">Pearson BTEC HND</text>

    <!-- Col 3 -->
    <text x="465" y="488" text-anchor="middle" font-family="Georgia, serif" font-size="16" font-weight="bold" fill="${C.ivory}">284,807</text>
    <text x="465" y="504" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="9" fill="${C.amberGold}" letter-spacing="0.5">Transactions Analyzed</text>

    <!-- Divider -->
    <line x1="80" y1="524" x2="520" y2="524" stroke="${C.darkBrown}" stroke-width="1" opacity="0.4"/>

    <!-- Bottom URL -->
    <text x="300" y="555" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="10" letter-spacing="1.5" fill="${C.sand}" opacity="0.75">mohamed-riham.github.io/who-is-riham/</text>
  </svg>`;

  const bgBuf = await sharp(Buffer.from(bgSvg)).png().toBuffer();
  const textBuf = await sharp(Buffer.from(textSvg)).png().toBuffer();

  await sharp(bgBuf)
    .composite([
      { input: maskedPortraitCard, left: pCardX, top: pCardY },
      { input: textBuf, left: 0, top: 0 },
    ])
    .png()
    .toFile(OUT_SQUARE);

  console.log(`✅  Square OG image updated (perfect proportions): ${OUT_SQUARE} (600×600)`);
}

// ── Run ───────────────────────────────────────────────────────────────────────
(async () => {
  try {
    await Promise.all([makeWide(), makeSquare()]);
    console.log('✨ All Open Graph images regenerated successfully.');
  } catch (err) {
    console.error('❌ OG generation error:', err);
    process.exit(1);
  }
})();
