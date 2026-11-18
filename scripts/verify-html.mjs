import fs from 'fs';

const html = fs.readFileSync('out/index.html', 'utf8');

console.log('====================================================');
console.log('       INSPECTING EXPORTED out/index.html           ');
console.log('====================================================');

// 1. Title tags
const titles = html.match(/<title[^>]*>.*?<\/title>/gi) || [];
console.log(`\n1. <title> tags (${titles.length}):`);
titles.forEach(t => console.log('   ', t));

// 2. Meta description
const descs = html.match(/<meta[^>]*name=["']description["'][^>]*>/gi) || [];
console.log(`\n2. <meta name="description"> (${descs.length}):`);
descs.forEach(d => console.log('   ', d));

// 3. OpenGraph tags
const ogs = html.match(/<meta[^>]*property=["']og:[^"']+["'][^>]*>/gi) || [];
console.log(`\n3. OpenGraph tags (${ogs.length}):`);
ogs.forEach(o => console.log('   ', o));

// 4. Twitter tags
const tws = html.match(/<meta[^>]*name=["']twitter:[^"']+["'][^>]*>/gi) || [];
console.log(`\n4. Twitter tags (${tws.length}):`);
tws.forEach(t => console.log('   ', t));

// 5. Icons & Manifest
const links = html.match(/<link[^>]*rel=["'](icon|apple-touch-icon|manifest|mask-icon|shortcut icon)["'][^>]*>/gi) || [];
console.log(`\n5. Icon / Manifest links (${links.length}):`);
links.forEach(l => console.log('   ', l));

// 6. Check for (Riham) in <head>
const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
const head = headMatch ? headMatch[1] : '';
const rihamMatches = head.match(/.*\(Riham\).*/gi) || [];
console.log(`\n6. Unwanted "(Riham)" in <head>: ${rihamMatches.length}`);
rihamMatches.forEach(r => console.log('   UNWANTED:', r.trim()));

// 7. Check for bad local URLs (localhost, 127.0.0.1, file:///)
const badUrls = head.match(/(localhost|127\.0\.0\.1|file:\/\/\/)/gi) || [];
console.log(`\n7. Bad local URLs in <head>: ${badUrls.length}`);
if (badUrls.length > 0) {
  console.log('   Found bad URLs:', badUrls);
}

// 8. Canonical tag
const canonical = html.match(/<link[^>]*rel=["']canonical["'][^>]*>/gi) || [];
console.log(`\n8. Canonical link:`, canonical[0] || 'None');

console.log('\n====================================================\n');
