// Tiny, dependency-free frontmatter parser.
//
// Shared by BOTH the browser bundle (src/content/posts.ts) and the Node
// build script (scripts/search-era-snapshots.mjs) so blog metadata is parsed
// exactly the same way in the React app and in the SEO snapshots. Keeping it
// in plain .mjs (no TypeScript syntax) is what lets both worlds import it.
//
// Supported frontmatter is intentionally simple — key: value pairs between two
// `---` fences. Values may be quoted. `tags` is read as a comma-separated list.

const FENCE = /^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/;

function stripQuotes(value) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

/**
 * Parse a raw markdown string into { data, content }.
 * @param {string} raw
 * @returns {{ data: Record<string, string>, content: string }}
 */
export function parseFrontmatter(raw) {
  const source = String(raw).replace(/^﻿/, "");
  const match = source.match(FENCE);

  if (!match) {
    return { data: {}, content: source.trim() };
  }

  const data = {};
  const block = match[1];

  for (const line of block.split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const value = stripQuotes(line.slice(colon + 1));
    if (key) data[key] = value;
  }

  const content = source.slice(match[0].length).trim();
  return { data, content };
}

/**
 * Split a comma-separated frontmatter value into a clean array.
 * @param {string | undefined} value
 * @returns {string[]}
 */
export function parseList(value) {
  if (!value) return [];
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

// Read a <meta name="..."> (or property="...") content value from raw HTML,
// tolerant of attribute order.
function getHtmlMeta(raw, name) {
  const tags = raw.match(/<meta\b[^>]*>/gi) || [];
  for (const tag of tags) {
    const nameMatch = tag.match(/\b(?:name|property)\s*=\s*["']([^"']+)["']/i);
    if (nameMatch && nameMatch[1].toLowerCase() === name.toLowerCase()) {
      const contentMatch = tag.match(/\bcontent\s*=\s*["']([\s\S]*?)["']/i);
      if (contentMatch) return contentMatch[1].trim();
    }
  }
  return "";
}

/**
 * Extract listing/SEO metadata from a standalone HTML blog post. The HTML file
 * is the single source of truth: title comes from <title>, the rest from
 * <meta> tags in <head>.
 * @param {string} raw
 * @returns {{ title: string, description: string, date: string, tags: string[], image: string }}
 */
export function extractHtmlMeta(raw) {
  const titleMatch = raw.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return {
    title: titleMatch ? titleMatch[1].trim() : "",
    description: getHtmlMeta(raw, "description"),
    date: getHtmlMeta(raw, "date") || getHtmlMeta(raw, "article:published_time"),
    tags: parseList(getHtmlMeta(raw, "keywords")),
    image: getHtmlMeta(raw, "image") || getHtmlMeta(raw, "og:image"),
  };
}
