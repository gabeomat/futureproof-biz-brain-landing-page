// Blog post loader for the browser bundle.
//
// Two kinds of posts live in src/content/posts/, both bundled at build time via
// Vite's import.meta.glob:
//
//   *.md   — Markdown posts, rendered INSIDE the site (header/footer + prose).
//   *.html — Self-contained "standalone" posts (their own <head>, CSS, and JS),
//            served as their own full page at /blog/<slug>. Used for rich,
//            interactive articles that Markdown can't express.
//
// To publish, you only ever add/edit a file here — this loader, the blog pages,
// and the SEO snapshot script all read from the same source of truth.

import { marked } from "marked";
import {
  parseFrontmatter,
  parseList,
  extractHtmlMeta,
} from "./frontmatter.mjs";

marked.use({ gfm: true, breaks: false });

export type PostLayout = "in-site" | "standalone";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO yyyy-mm-dd
  displayDate: string; // e.g. "June 10, 2026"
  author: string;
  image?: string;
  tags: string[];
  readingMinutes: number;
  /** "in-site" Markdown post vs "standalone" full-page HTML post. */
  layout: PostLayout;
  /** URL for this post, always "/blog/<slug>". */
  href: string;
  /** Rendered HTML body — in-site (Markdown) posts only. */
  html?: string;
  /** Raw Markdown body — in-site posts only. */
  markdown?: string;
}

const rawMarkdown = import.meta.glob("./posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const rawHtml = import.meta.glob("./posts/*.html", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const DEFAULT_AUTHOR = "Gabriel Omat";

function slugFromPath(filePath: string): string {
  return filePath
    .split("/")
    .pop()!
    .replace(/\.(md|html)$/, "")
    .toLowerCase();
}

function formatDisplayDate(iso: string): string {
  // Parse as local-noon to avoid timezone off-by-one on the date.
  const date = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function estimateReadingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 225));
}

function buildMarkdownPost(filePath: string, raw: string): BlogPost {
  const { data, content } = parseFrontmatter(raw);
  const slug = data.slug ? data.slug.toLowerCase() : slugFromPath(filePath);
  const date = data.date || "1970-01-01";

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date,
    displayDate: formatDisplayDate(date),
    author: data.author || DEFAULT_AUTHOR,
    image: data.image || undefined,
    tags: parseList(data.tags),
    readingMinutes: estimateReadingMinutes(content),
    layout: "in-site",
    href: `/blog/${slug}`,
    html: marked.parse(content) as string,
    markdown: content,
  };
}

function buildHtmlPost(filePath: string, raw: string): BlogPost {
  const meta = extractHtmlMeta(raw);
  const slug = slugFromPath(filePath);
  const date = meta.date || "1970-01-01";

  // Reading time from the visible text of the document body.
  const text = raw
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ");

  return {
    slug,
    title: meta.title || slug,
    description: meta.description,
    date,
    displayDate: formatDisplayDate(date),
    author: DEFAULT_AUTHOR,
    image: meta.image || undefined,
    tags: meta.tags,
    readingMinutes: estimateReadingMinutes(text),
    layout: "standalone",
    href: `/blog/${slug}`,
  };
}

function isPostFile(filePath: string): boolean {
  const name = filePath.split("/").pop() ?? "";
  // Skip docs (README) and underscore-prefixed drafts/partials.
  return !name.startsWith("_") && !/^readme\./i.test(name);
}

function isDraft(raw: string, filePath: string): boolean {
  if (import.meta.env.DEV) return false;
  if (filePath.endsWith(".md")) {
    return parseFrontmatter(raw).data.draft === "true";
  }
  return /<meta\s+name=["']draft["']\s+content=["']true["']/i.test(raw);
}

const allPosts: BlogPost[] = [
  ...Object.entries(rawMarkdown)
    .filter(([filePath]) => isPostFile(filePath))
    .filter(([filePath, raw]) => !isDraft(raw, filePath))
    .map(([filePath, raw]) => buildMarkdownPost(filePath, raw)),
  ...Object.entries(rawHtml)
    .filter(([filePath]) => isPostFile(filePath))
    .filter(([filePath, raw]) => !isDraft(raw, filePath))
    .map(([filePath, raw]) => buildHtmlPost(filePath, raw)),
].sort((a, b) => b.date.localeCompare(a.date));

export function getAllPosts(): BlogPost[] {
  return allPosts;
}

/** Look up any post (either layout) by slug. */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((post) => post.slug === slug.toLowerCase());
}

/** In-site (Markdown) post for the React renderer at /blog/:slug. */
export function getInSitePost(slug: string): BlogPost | undefined {
  const post = getPostBySlug(slug);
  return post?.layout === "in-site" ? post : undefined;
}
