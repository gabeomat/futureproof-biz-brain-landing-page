import { useEffect } from "react";

const SITE_NAME = "Gabriel Omat";
const SITE_URL = "https://gabrielomat.com";
const DEFAULT_IMAGE = `${SITE_URL}/images/g-headshot.jpeg`;

export interface SeoOptions {
  title: string;
  description?: string;
  /** Path beginning with "/", e.g. "/blog/my-post". */
  path?: string;
  image?: string;
  /** "website" (default) or "article" for blog posts. */
  type?: "website" | "article";
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Client-side SEO for SPA navigation. The static snapshots (built by
 * scripts/search-era-snapshots.mjs) already give crawlers the full picture on
 * first load; this keeps the browser tab, social previews, and canonical URL
 * correct when a visitor navigates between pages without a full reload.
 */
export function useSeo({
  title,
  description,
  path,
  image,
  type = "website",
}: SeoOptions) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME)
      ? title
      : `${title} — ${SITE_NAME}`;
    document.title = fullTitle;

    const url = path ? `${SITE_URL}${path}` : SITE_URL;
    const img = image
      ? image.startsWith("http")
        ? image
        : `${SITE_URL}${image}`
      : DEFAULT_IMAGE;

    if (description) setMeta("name", "description", description);
    setCanonical(url);

    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:title", fullTitle);
    if (description) setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", img);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    if (description) setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", img);
  }, [title, description, path, image, type]);
}
