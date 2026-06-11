# Publishing a blog post

Posts live in this folder. To publish, add a file and push to `main` — Netlify
rebuilds and the post goes live with full SEO, structured data (schema.org),
sitemap and `llms.txt` entries generated automatically. There is nothing else
to wire up.

There are **two kinds of post**:

- **`.md` (Markdown)** — rendered _inside_ the site, with the normal header,
  footer, and editorial styling. Best for regular written articles. Covered
  below.
- **`.html` (standalone)** — a fully self-contained page with its own design,
  fonts, CSS, and JavaScript (interactive tabs, accordions, copy buttons, etc.).
  Served as its own full page at `/blog/<slug>`. Best for rich, designed pieces.
  See "Standalone HTML posts" at the bottom.

Both kinds appear together on the `/blog` index, sitemap, and `llms.txt`.

## Quickest way: ask Claude Code

> "Add a blog post about [topic]. Title it [title]."

Claude will create the file in the right format. You review, then push.

## Doing it by hand

1. Create a new file here named after the URL you want, e.g.
   `how-i-use-claude-every-morning.md` → publishes at
   `/blog/how-i-use-claude-every-morning`.
   Use lowercase words separated by hyphens.

2. Start the file with frontmatter (the part between the `---` lines), then
   write the post in Markdown below it:

   ```markdown
   ---
   title: How I Use Claude Every Morning
   description: A one- or two-sentence summary. This is what shows up in Google
     results and what AI agents quote, so make it clear and specific.
   date: 2026-06-15
   author: Gabriel Omat
   tags: AI, workflows, claude
   image: /images/g-headshot.jpeg
   ---

   ## A heading

   Write normally. **Bold**, *italic*, [links](/about), lists, and
   > blockquotes

   all work.
   ```

3. Push. Done.

## Frontmatter fields

| Field         | Required | Notes                                                        |
| ------------- | -------- | ------------------------------------------------------------ |
| `title`       | yes      | The headline. Also the browser tab + social title.           |
| `description` | yes      | 1–2 sentences. Drives Google snippet + AI agent summary.     |
| `date`        | yes      | `YYYY-MM-DD`. Posts sort newest-first by this.               |
| `author`      | no       | Defaults to "Gabriel Omat".                                  |
| `tags`        | no       | Comma-separated. Shown on the post and used for context.     |
| `image`       | no       | Path to a social/share image, e.g. `/images/blog/foo.jpg`.   |
| `slug`        | no       | Override the URL. Defaults to the filename.                  |
| `draft`       | no       | `true` hides it in production (still visible in local dev).  |

## Images

Drop image files in `public/images/` (or a `public/images/blog/` subfolder) and
reference them as `/images/blog/your-image.jpg` in the Markdown or the `image`
field.

## Local preview

```bash
pnpm --filter @workspace/gabriel-omat-website dev
```

Then open `/blog`. Drafts are visible locally so you can preview before
publishing.

---

## Standalone HTML posts

For a rich, interactive, fully-designed article (its own fonts, colors, layout,
and JavaScript), drop a complete `.html` document in this folder, e.g.
`my-interactive-post.html` → publishes at `/blog/my-interactive-post`.

The file is served verbatim as its own full page — your design and scripts are
untouched. At build time the pipeline automatically injects the SEO `<head>`
tags (canonical URL, Open Graph, Twitter card, and `BlogPosting` schema) and
registers the post in the index, sitemap, and `llms.txt`.

**All you need is a normal HTML document with these tags in the `<head>`:**

```html
<title>My Post Title</title>
<meta name="description" content="1–2 sentence summary for Google + AI agents." />
<meta name="date" content="2026-06-15" />
<!-- optional: social share image (drop the file in public/images/blog/) -->
<meta name="image" content="/images/blog/my-interactive-post.jpg" />
<!-- optional -->
<meta name="keywords" content="AI, claude, workflows" />
<!-- optional: hides the post in production while you work on it -->
<meta name="draft" content="true" />
```

Notes:

- The **filename** becomes the URL slug (lowercase, hyphenated).
- `title`, `description`, and `date` drive the index card, the social preview,
  and the `llms.txt` entry — fill them in.
- Don't add `og:`/canonical/JSON-LD yourself; the build injects them from the
  tags above (the `<meta name="image">` becomes the `og:image`/`twitter:image`).
- Because it's a separate page, the site header/nav isn't shown on it. Link back
  to the site from within your design if you want (e.g. a small "← Gabriel Omat"
  link or a CTA button).
