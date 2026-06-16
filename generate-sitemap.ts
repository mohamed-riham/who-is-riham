import * as fs from 'fs';
import * as path from 'path';

// Define the absolute base URL of the GitHub Pages site
const BASE_URL = 'https://mohamed-riham.github.io/who-is-riham/';

function generateSitemap() {
  console.log('--- Starting Sitemap Generation ---');

  // We have a single-page application structure. The primary route is the root.
  // We can also suggest search-engine-crawlable deep sections as standard anchors
  // or simple query parameters representing major content blocks to enhance indexability.
  const routes = [
    { path: '', priority: '1.0', changefreq: 'daily' },
    { path: '#architect', priority: '0.8', changefreq: 'weekly' },
    { path: '#research', priority: '0.8', changefreq: 'weekly' },
    { path: '#labs', priority: '0.8', changefreq: 'weekly' },
    { path: '#connect', priority: '0.7', changefreq: 'monthly' }
  ];

  const currentDate = new Date().toISOString().split('T')[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n';
  xml += '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';

  // Loop through routes and compile entries
  for (const route of routes) {
    const fullUrl = `${BASE_URL}${route.path}`;
    xml += '  <url>\n';
    xml += `    <loc>${fullUrl}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  }

  xml += '</urlset>\n';

  // Ensure target folder exists
  const publicDir = path.resolve('./public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, xml, 'utf8');

  console.log(`--- [Success] Sitemap written to: ${sitemapPath} ---`);
}

generateSitemap();
