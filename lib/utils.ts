/**
 * Utility functions for Mohamed Riham's Portfolio.
 */

/**
 * Returns the fully qualified public asset path.
 * When deployed to GitHub Pages at `/who-is-riham`, it prepends `/who-is-riham`
 * to absolute asset paths (like `/cv.pdf` or `/images/...`).
 * In local development, it returns the path unaltered.
 */
export function getAssetPath(path: string): string {
  if (!path) return "";
  // Leave external links and anchors untouched
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (basePath && normalized.startsWith(basePath)) {
    return normalized;
  }

  return `${basePath}${normalized}`;
}
