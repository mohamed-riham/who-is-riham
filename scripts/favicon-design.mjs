/**
 * Favicon SVG Design Generator
 * Creates an editorial geometric 'R' monogram for Mohamed Riham (NOIR EDITORIAL)
 */

export function getFaviconSvg({ background = true, maskable = false, monochrome = false } = {}) {
  // SVG Canvas 512x512
  if (monochrome) {
    // Safari pinned tab: pure monochrome path on transparent background
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
      <path d="M140 96 h130 c65 0 106 35 106 88 c0 44 -28 72 -74 84 l88 148 h-64 l-80 -138 h-50 v138 h-56 v-320 z M196 150 v92 h68 c36 0 56 -16 56 -46 c0 -28 -20 -46 -56 -46 h-68 z" fill="black" />
    </svg>`;
  }

  // Safe area sizing: maskable icons require all content within central 80% circle (radius ~205px)
  const scale = maskable ? 0.76 : 0.88;
  const cx = 256;
  const cy = 256;

  // Colors
  const bg = "#040202";
  const ivory = "#F9F9F6";
  const amberGold = "#DEA355";
  const burntOrange = "#C43E17";
  const darkBrown = "#5C2712";

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
    <defs>
      <linearGradient id="rGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${ivory}" />
        <stop offset="60%" stop-color="${ivory}" />
        <stop offset="100%" stop-color="${amberGold}" />
      </linearGradient>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#080403" />
        <stop offset="100%" stop-color="#020101" />
      </linearGradient>
      <radialGradient id="subtleGlow" cx="80%" cy="20%" r="60%">
        <stop offset="0%" stop-color="${burntOrange}" stop-opacity="0.25" />
        <stop offset="100%" stop-color="${bg}" stop-opacity="0" />
      </radialGradient>
    </defs>

    ${background ? `
    <!-- Dark Obsidian Canvas -->
    <rect width="512" height="512" rx="${maskable ? '0' : '108'}" fill="url(#bgGrad)" />
    <rect width="512" height="512" rx="${maskable ? '0' : '108'}" fill="url(#subtleGlow)" />
    <!-- Fine luxury border (omitted for maskable) -->
    ${maskable ? '' : `<rect x="6" y="6" width="500" height="500" rx="102" fill="none" stroke="${darkBrown}" stroke-width="2.5" stroke-opacity="0.6" />`}
    ` : ''}

    <!-- Transformed Monogram Group -->
    <g transform="translate(${cx}, ${cy}) scale(${scale}) translate(-256, -256)">
      <!-- Main Stem & Bowl & Leg of 'R' -->
      <!-- Vertical Stem -->
      <rect x="136" y="104" width="52" height="304" rx="4" fill="url(#rGrad)" />

      <!-- Top horizontal serif / bar -->
      <path d="M136 104 h142 c64 0 106 36 106 90 c0 42 -26 73 -68 85 l78 129 h-58 l-72 -122 h-76 v-48 h76 c34 0 54 -16 54 -44 c0 -28 -20 -42 -54 -42 h-128 v-48 z" fill="url(#rGrad)" />

      <!-- Architectural Burnt Orange Accent (Geometric diamond / square pin in counter) -->
      <rect x="238" y="174" width="16" height="16" transform="rotate(45 246 182)" fill="${burntOrange}" />

      <!-- Supporting Gold Accent dot near the terminal -->
      <circle cx="372" cy="400" r="7" fill="${amberGold}" />
    </g>
  </svg>`;
}
