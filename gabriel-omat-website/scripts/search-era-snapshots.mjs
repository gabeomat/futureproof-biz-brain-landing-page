import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";
import {
  parseFrontmatter,
  parseList,
  extractHtmlMeta,
} from "../src/content/frontmatter.mjs";

marked.use({ gfm: true, breaks: false });

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(__dirname, "..");
const outDir = path.join(siteRoot, "dist", "public");
const postsDir = path.join(siteRoot, "src", "content", "posts");
const rawSiteUrl = (process.env.PUBLIC_SITE_URL || "https://gabrielomat.com").replace(/\/$/, "");
const siteUrl = rawSiteUrl.replace("https://www.gabrielomat.com", "https://gabrielomat.com");
const defaultImage = `${siteUrl}/images/g-headshot.jpeg`;

const routes = [
  {
    path: "/",
    title: "Gabriel Omat - AI Strategist and Consultant",
    description:
      "Gabriel Omat helps online service providers build AI-powered businesses and helps organizations close the AI skill gap with Claude Enterprise.",
    h1: "Your expertise is the asset. AI is the multiplier.",
    summary:
      "Gabriel Omat is an AI strategist, consultant, and creator of Futureproof and The Living Workspace. He helps coaches, consultants, service providers, and teams turn AI from scattered prompts into practical operating systems.",
    sections: [
      {
        heading: "For service providers",
        body: "Futureproof - The Evolution Lab is a membership for coaches, consultants, and service providers who want to build AI-powered businesses. Members learn to create an AI Business Brain, build useful workflows, and use AI to handle work across content, strategy, operations, and research.",
      },
      {
        heading: "For organizations",
        body: "Gabriel consults with organizations implementing Claude Enterprise. The work combines strategy, workflow design, hands-on team training, and advisory support so teams become productive with AI instead of merely aware of it.",
      },
      {
        heading: "Core approach",
        body: "The site focuses on practical AI systems: a business brain that knows the business, workflows that save time, and adoption habits that keep the system current as offers, priorities, and tools change.",
      },
    ],
    links: ["/about", "/futureproof", "/living-workspace", "/consulting"],
    jsonLdType: "Person",
  },
  {
    path: "/about",
    title: "About Gabriel Omat - AI Strategist",
    description:
      "Meet Gabriel Omat, an AI strategist who built a seven-figure business, rebuilt around AI, and now helps service providers and organizations build practical AI systems.",
    h1: "About Gabriel Omat",
    summary:
      "Gabriel Omat spent 28 years in corporate leadership before building Energetic Alignment Academy to seven figures. After the market shifted, he rebuilt his business around AI systems and now helps others use AI to reclaim time, sharpen creativity, and deliver better client work.",
    sections: [
      {
        heading: "Background",
        body: "Gabriel left corporate life in November 2021 after 28 years, built a seven-figure business, and then redesigned his work after the market changed. His current work is grounded in live implementation rather than theory.",
      },
      {
        heading: "The Living Workspace",
        body: "The Living Workspace is Gabriel's private implementation offer for building an AI-powered command center inside Claude. It captures offers, voice, audience, metrics, workflows, and maintenance rituals in one evolving system.",
      },
      {
        heading: "Futureproof and consulting",
        body: "Futureproof helps coaches, consultants, and service providers focus on the AI systems that move the needle. Gabriel also works with teams that need structure, training, and adoption support around Claude Enterprise.",
      },
    ],
    links: ["/futureproof", "/living-workspace", "/consulting"],
    jsonLdType: "AboutPage",
  },
  {
    path: "/consulting",
    title: "AI Consulting for Claude Enterprise - Gabriel Omat",
    description:
      "Claude Enterprise consulting for organizations that want practical AI adoption, workflow design, team training, and implementation support.",
    h1: "Close the AI skill gap",
    summary:
      "Gabriel Omat helps organizations implement Claude Enterprise and get teams productive with AI. The work is designed for organizations that already have access to AI but need better systems, training, and adoption.",
    sections: [
      {
        heading: "Strategy",
        body: "Identify where AI creates the highest leverage in specific operations. The consulting process avoids generic playbooks and starts with the team's actual work.",
      },
      {
        heading: "Implementation",
        body: "Design custom AI workflows for team processes inside Claude Enterprise, including the operating habits that make those workflows useful after launch.",
      },
      {
        heading: "Training and advisory",
        body: "Run hands-on sessions where people build real workflows instead of watching another overview. Advisory support continues while the team scales adoption.",
      },
    ],
    links: ["/about", "/futureproof"],
    jsonLdType: "Service",
  },
  {
    path: "/futureproof",
    title: "Futureproof - The Evolution Lab for AI-Powered Service Businesses",
    description:
      "Futureproof is Gabriel Omat's membership for coaches, consultants, and service providers building AI-powered businesses, Business Brains, workflows, and AI Dream Teams.",
    h1: "Futureproof - The Evolution Lab",
    summary:
      "Futureproof is a membership for coaches, consultants, and service providers who want one AI system that runs more of the business. It teaches members to build a Business Brain, become stronger Claude users, and create AI workflows that do useful work.",
    sections: [
      {
        heading: "The core problem",
        body: "The problem is not access to AI. It is the lack of a system that knows the business, remembers what matters, evolves as the business evolves, and actually does work.",
      },
      {
        heading: "Five layers",
        body: "Futureproof teaches five layers of an AI-powered business: the AI engine, context, memory, execution and workflows, and automation. The model can change, but the operating structure remains useful.",
      },
      {
        heading: "What's inside",
        body: "Members get Business Brain training, Claude power-user lessons, AI Dream Team implementation, bonus trainings, plug-and-play skills and apps, live Q&A calls, and replays.",
      },
    ],
    links: ["/about", "/living-workspace", "/consulting"],
    jsonLdType: "Course",
  },
  {
    path: "/living-workspace",
    title: "The Living Workspace - Claude Business Command Center",
    description:
      "A private implementation offer to build a Living Workspace inside Claude: one command center for offers, voice, audience, workflows, and business memory.",
    h1: "The Living Workspace",
    summary:
      "The Living Workspace is a private 1:1 implementation where Gabriel Omat helps build a command center inside Claude. It is for business owners who are tired of carrying their whole business in their head and want one evolving workspace instead of scattered prompts and stale docs.",
    sections: [
      {
        heading: "What it replaces",
        body: "A scattered setup of Custom GPTs, old Claude Projects, forgotten Notion docs, spreadsheets, and prompts saved across several apps.",
      },
      {
        heading: "What gets built",
        body: "One workspace Claude knows by heart, with offers, voice, audience, three custom workflows, a command center, and a Chat Sweep ritual that keeps the system alive.",
      },
      {
        heading: "Who it is for",
        body: "Coaches, consultants, and service providers who already use AI but need a living operating system built around their real business rather than a generic template.",
      },
    ],
    links: ["/about", "/futureproof", "/consulting"],
    jsonLdType: "Service",
  },
  {
    path: "/newsletter-skill",
    title: "Newsletter Skill - AI Coachbox",
    description:
      "A newsletter-building workflow from AI Coachbox that helps turn voice notes, rough ideas, or a topic into an on-brand HTML newsletter.",
    h1: "Newsletter Skill",
    summary:
      "The Newsletter Skill helps creators build a polished, on-brand HTML newsletter from rough source material in one working session.",
    sections: [
      {
        heading: "Use case",
        body: "Designed for people who have ideas, notes, or a topic but have been avoiding newsletter production because layout, copy, and polish take too long.",
      },
      {
        heading: "What it creates",
        body: "The workflow turns rough source material into a finished newsletter structure with voice, layout, and HTML polish so the creator can publish without starting from a blank page.",
      },
    ],
    links: ["/", "/about"],
    jsonLdType: "WebPage",
  },
  {
    path: "/privacy",
    title: "Privacy Policy - Gabriel Omat",
    description:
      "Privacy policy for gabrielomat.com, AI Coachbox, Futureproof, consulting inquiries, digital products, and related services.",
    h1: "Privacy Policy",
    summary:
      "This privacy policy explains how information is collected and used for gabrielomat.com, AI Coachbox, consulting inquiries, digital products, and related services.",
    sections: [
      {
        heading: "Contact",
        body: "Questions about privacy can be sent to aicoachbox@gabrielomat.com.",
      },
    ],
    links: ["/terms", "/"],
    jsonLdType: "WebPage",
  },
  {
    path: "/terms",
    title: "Terms of Service - Gabriel Omat",
    description:
      "Terms of service for gabrielomat.com, AI Coachbox, Futureproof, consulting, digital products, communities, and related services.",
    h1: "Terms of Service",
    summary:
      "These terms cover use of gabrielomat.com, AI Coachbox, Futureproof, consulting services, digital products, online communities, and related offers.",
    sections: [
      {
        heading: "Contact",
        body: "Questions about the terms can be sent to aicoachbox@gabrielomat.com.",
      },
    ],
    links: ["/privacy", "/"],
    jsonLdType: "WebPage",
  },
];

const importantRoutes = routes.filter((route) =>
  ["/", "/about", "/consulting", "/futureproof", "/living-workspace"].includes(route.path),
);

function formatDisplayDate(iso) {
  const date = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Load every blog post from src/content/posts/*.md — the same files the React
// app reads — so the crawlable snapshots never drift from the live site.
async function loadPosts() {
  let entries = [];
  try {
    entries = await readdir(postsDir);
  } catch {
    return [];
  }

  const files = entries.filter(
    (name) =>
      name.endsWith(".md") &&
      !name.startsWith("_") &&
      name.toLowerCase() !== "readme.md",
  );
  const posts = [];

  for (const file of files) {
    const raw = await readFile(path.join(postsDir, file), "utf8");
    const { data, content } = parseFrontmatter(raw);
    if (data.draft === "true") continue;

    const slug = (data.slug || file.replace(/\.md$/, "")).toLowerCase();
    const date = data.date || "1970-01-01";

    posts.push({
      slug,
      path: `/blog/${slug}`,
      layout: "in-site",
      title: data.title || slug,
      description: data.description || "",
      date,
      displayDate: formatDisplayDate(date),
      author: data.author || "Gabriel Omat",
      image: data.image || "",
      tags: parseList(data.tags),
      html: marked.parse(content),
    });
  }

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

// Load self-contained HTML posts (their own <head>/CSS/JS). These are written
// to dist verbatim (with SEO tags injected) rather than rendered into the SPA
// snapshot shell.
async function loadStandalonePosts() {
  let entries = [];
  try {
    entries = await readdir(postsDir);
  } catch {
    return [];
  }

  const files = entries.filter(
    (name) =>
      name.endsWith(".html") &&
      !name.startsWith("_") &&
      !/^readme\./i.test(name),
  );
  const posts = [];

  for (const file of files) {
    const raw = await readFile(path.join(postsDir, file), "utf8");
    if (/<meta\s+name=["']draft["']\s+content=["']true["']/i.test(raw)) continue;

    const meta = extractHtmlMeta(raw);
    const slug = file.replace(/\.html$/, "").toLowerCase();
    const date = meta.date || "1970-01-01";

    posts.push({
      slug,
      path: `/blog/${slug}`,
      layout: "standalone",
      title: meta.title || slug,
      description: meta.description || "",
      date,
      displayDate: formatDisplayDate(date),
      author: "Gabriel Omat",
      image: meta.image || "",
      tags: meta.tags,
      rawHtml: raw,
    });
  }

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

// Build pseudo-routes for the blog index and each in-site post so they flow
// through the same snapshot / head-tag machinery as the hand-written routes.
// `listing` is every post (both layouts) so the index links to all of them;
// only in-site posts get a generated SPA snapshot (standalone posts are their
// own HTML page, written separately).
function buildBlogRoutes(listing) {
  const blogIndex = {
    path: "/blog",
    kind: "blog-index",
    title: "Blog - Gabriel Omat on AI-Powered Business",
    description:
      "Practical writing from Gabriel Omat on building AI-powered businesses: Business Brains, Claude workflows, AI-ready content, and getting found in the age of AI search.",
    h1: "Notes on building an AI-powered business",
    posts: listing,
    links: ["/", "/futureproof", "/consulting"],
  };

  const postRoutes = listing
    .filter((post) => post.layout === "in-site")
    .map((post) => ({
      path: post.path,
      kind: "blog-post",
      title: `${post.title} - Gabriel Omat`,
      description: post.description,
      h1: post.title,
      image: post.image || undefined,
      post,
      links: ["/blog", "/futureproof", "/consulting"],
    }));

  return [blogIndex, ...postRoutes];
}

// Inject canonical, Open Graph, Twitter, and BlogPosting JSON-LD into a
// standalone post's <head> at build time, so the author's HTML file stays clean
// but the served page is fully SEO- and agent-discoverable.
function enrichStandaloneHead(post) {
  const canonical = absoluteUrl(post.path);
  const image = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `${siteUrl}${post.image}`
    : defaultImage;

  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: canonical,
    mainEntityOfPage: canonical,
    datePublished: post.date,
    dateModified: post.date,
    image,
    author: { "@type": "Person", name: post.author, url: siteUrl },
    publisher: { "@type": "Organization", name: "AI Coachbox", url: siteUrl },
    ...(post.tags.length ? { keywords: post.tags.join(", ") } : {}),
    isPartOf: { "@type": "Blog", "@id": `${siteUrl}/blog#blog` },
  };

  const head = `
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Gabriel Omat" />
    <meta property="og:title" content="${escapeHtml(post.title)}" />
    <meta property="og:description" content="${escapeHtml(post.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${image}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(post.title)}" />
    <meta name="twitter:description" content="${escapeHtml(post.description)}" />
    <meta name="twitter:image" content="${image}" />
    <script type="application/ld+json">${JSON.stringify(ld).replaceAll("</script", "<\\/script")}</script>
  </head>`;

  if (post.rawHtml.includes("</head>")) {
    return post.rawHtml.replace("</head>", head);
  }
  return post.rawHtml;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function absoluteUrl(routePath) {
  return `${siteUrl}${routePath === "/" ? "/" : routePath}`;
}

const NAV_LABELS = {
  "/": "Gabriel Omat",
  "/about": "About",
  "/blog": "Blog",
  "/futureproof": "Futureproof",
  "/living-workspace": "Living Workspace",
  "/consulting": "Consulting",
};

const snapshotNav = `
      <nav aria-label="Primary">
        <a href="/">Gabriel Omat</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <a href="/futureproof">Futureproof</a>
        <a href="/living-workspace">Living Workspace</a>
        <a href="/consulting">Consulting</a>
      </nav>`;

function relatedLinks(route) {
  return route.links
    .map((href) => {
      const linked = routes.find((item) => item.path === href);
      const label = linked?.h1 || NAV_LABELS[href] || href;
      return `<li><a href="${href}">${escapeHtml(label)}</a></li>`;
    })
    .join("\n");
}

function snapshotHtml(route) {
  if (route.kind === "blog-index") {
    const items = route.posts
      .map(
        (post) => `
        <article>
          <h2><a href="${post.path}">${escapeHtml(post.title)}</a></h2>
          <p><time datetime="${post.date}">${escapeHtml(post.displayDate)}</time></p>
          <p>${escapeHtml(post.description)}</p>
        </article>`,
      )
      .join("\n");

    return `
    <main class="search-era-snapshot" data-ai-crawl-snapshot="true">
      ${snapshotNav}
      <header>
        <p class="snapshot-kicker">Blog</p>
        <h1>${escapeHtml(route.h1)}</h1>
        <p>${escapeHtml(route.description)}</p>
      </header>
      ${
        route.posts.length
          ? items
          : "<p>New writing is on the way. Check back soon.</p>"
      }
    </main>`;
  }

  if (route.kind === "blog-post") {
    const post = route.post;
    const meta = [post.displayDate, `By ${post.author}`].join(" · ");
    const tags = post.tags.length
      ? `<p>Topics: ${post.tags.map((tag) => escapeHtml(tag)).join(", ")}</p>`
      : "";

    return `
    <main class="search-era-snapshot" data-ai-crawl-snapshot="true">
      ${snapshotNav}
      <article>
        <p class="snapshot-kicker">${escapeHtml(meta)}</p>
        <h1>${escapeHtml(post.title)}</h1>
        <p>${escapeHtml(post.description)}</p>
        ${tags}
        ${post.html}
        <section>
          <h2>Related pages</h2>
          <ul>${relatedLinks(route)}</ul>
        </section>
      </article>
    </main>`;
  }

  const sections = route.sections
    .map(
      (section) => `
        <section>
          <h2>${escapeHtml(section.heading)}</h2>
          <p>${escapeHtml(section.body)}</p>
        </section>`,
    )
    .join("\n");

  return `
    <main class="search-era-snapshot" data-ai-crawl-snapshot="true">
      ${snapshotNav}
      <article>
        <p class="snapshot-kicker">AI-search readable page summary</p>
        <h1>${escapeHtml(route.h1)}</h1>
        <p>${escapeHtml(route.summary)}</p>
        ${sections}
        <section>
          <h2>Related pages</h2>
          <ul>${relatedLinks(route)}</ul>
        </section>
      </article>
    </main>`;
}

function schemaFor(route) {
  const base = {
    "@context": "https://schema.org",
    "@id": `${absoluteUrl(route.path)}#webpage`,
    url: absoluteUrl(route.path),
    name: route.title,
    description: route.description,
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/#person`,
    },
  };

  const graph = [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Gabriel Omat",
      url: siteUrl,
      image: defaultImage,
      jobTitle: "AI Strategist and Consultant",
      email: "aicoachbox@gabrielomat.com",
      knowsAbout: [
        "Claude Enterprise",
        "AI business systems",
        "AI workflow design",
        "AI adoption",
        "service business operations",
      ],
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "AI Coachbox",
      url: siteUrl,
      founder: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Gabriel Omat",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ];

  if (route.kind === "blog-index") {
    graph.push({
      "@type": "Blog",
      "@id": `${absoluteUrl(route.path)}#blog`,
      url: absoluteUrl(route.path),
      name: route.title,
      description: route.description,
      publisher: { "@id": `${siteUrl}/#organization` },
      author: { "@id": `${siteUrl}/#person` },
      blogPost: route.posts.map((post) => ({
        "@type": "BlogPosting",
        "@id": `${absoluteUrl(post.path)}#blogposting`,
        headline: post.title,
        url: absoluteUrl(post.path),
        datePublished: post.date,
        description: post.description,
      })),
    });
    graph.push({ "@type": "WebPage", ...base, mainEntity: { "@id": `${absoluteUrl(route.path)}#blog` } });
  } else if (route.kind === "blog-post") {
    const post = route.post;
    graph.push({
      "@type": "BlogPosting",
      "@id": `${absoluteUrl(route.path)}#blogposting`,
      headline: post.title,
      description: post.description,
      url: absoluteUrl(route.path),
      mainEntityOfPage: absoluteUrl(route.path),
      datePublished: post.date,
      dateModified: post.date,
      image: post.image
        ? post.image.startsWith("http")
          ? post.image
          : `${siteUrl}${post.image}`
        : defaultImage,
      author: { "@id": `${siteUrl}/#person` },
      publisher: { "@id": `${siteUrl}/#organization` },
      ...(post.tags.length ? { keywords: post.tags.join(", ") } : {}),
      isPartOf: { "@id": `${siteUrl}/blog#blog` },
    });
  } else if (route.jsonLdType === "Person") {
    graph.push({
      "@type": "ProfilePage",
      ...base,
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    });
  } else if (route.jsonLdType === "Service") {
    graph.push({
      "@type": "Service",
      "@id": `${absoluteUrl(route.path)}#service`,
      name: route.h1,
      description: route.description,
      provider: {
        "@id": `${siteUrl}/#person`,
      },
      areaServed: "United States",
      serviceType: route.path === "/consulting" ? "AI consulting and Claude Enterprise implementation" : "Claude workspace implementation",
    });
    graph.push({ "@type": "WebPage", ...base, mainEntity: { "@id": `${absoluteUrl(route.path)}#service` } });
  } else if (route.jsonLdType === "Course") {
    graph.push({
      "@type": "Course",
      "@id": `${absoluteUrl(route.path)}#course`,
      name: "Futureproof - The Evolution Lab",
      description: route.description,
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
    });
    graph.push({ "@type": "WebPage", ...base, mainEntity: { "@id": `${absoluteUrl(route.path)}#course` } });
  } else {
    graph.push({ "@type": route.jsonLdType, ...base });
  }

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 2);
}

function headTags(route) {
  const canonical = absoluteUrl(route.path);
  const image = route.image || defaultImage;
  const ogType = route.kind === "blog-post" ? "article" : "website";

  return `
    <title>${escapeHtml(route.title)}</title>
    <meta name="description" content="${escapeHtml(route.description)}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="${ogType}" />
    <meta property="og:site_name" content="Gabriel Omat" />
    <meta property="og:title" content="${escapeHtml(route.title)}" />
    <meta property="og:description" content="${escapeHtml(route.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${image}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(route.title)}" />
    <meta name="twitter:description" content="${escapeHtml(route.description)}" />
    <meta name="twitter:image" content="${image}" />
    <script type="application/ld+json">${schemaFor(route).replaceAll("</script", "<\\/script")}</script>`;
}

function snapshotStyle() {
  return `
    <script>document.documentElement.classList.add("js");</script>
    <style>
      .js .search-era-snapshot { display: none; }
      .search-era-snapshot {
        max-width: 72rem;
        margin: 0 auto;
        padding: 2rem;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        line-height: 1.6;
        color: #192321;
      }
      .search-era-snapshot nav {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 2rem;
      }
      .search-era-snapshot a { color: #1f5f59; }
      .search-era-snapshot h1 {
        max-width: 54rem;
        font-size: clamp(2.25rem, 6vw, 5rem);
        line-height: 0.96;
        margin: 0 0 1rem;
      }
      .search-era-snapshot h2 { margin-top: 2rem; }
      .search-era-snapshot p { max-width: 48rem; }
      .snapshot-kicker {
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }
    </style>`;
}

function injectRoute(template, route) {
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, "")
    .replace(/\s*<meta name="description" content="[\s\S]*?" \/>/, "")
    .replace("</head>", `${headTags(route)}${snapshotStyle()}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${snapshotHtml(route)}\n    </div>`);

  if (!html.includes('data-ai-crawl-snapshot="true"')) {
    throw new Error(`Failed to inject crawl snapshot for ${route.path}`);
  }

  return html;
}

async function writeRoute(route, html) {
  if (route.path === "/") {
    await writeFile(path.join(outDir, "index.html"), html);
    return;
  }

  const routeDir = path.join(outDir, route.path.replace(/^\//, ""));
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, "index.html"), html);
}

function sitemapXml(blogListing) {
  const blogIndexPath = "/blog";
  const entries = [
    ...routes,
    {
      path: "/workshop/",
      title: "The Living Workspace Workshop",
      description: "Workshop page for The Living Workspace.",
    },
    { path: blogIndexPath },
    ...blogListing.map((post) => ({
      path: post.path,
      kind: "blog-post",
      lastmod: post.date,
    })),
  ];

  function changefreq(route) {
    if (importantRoutes.some((item) => item.path === route.path)) return "weekly";
    if (route.path === blogIndexPath) return "weekly";
    return "monthly";
  }

  function priority(route) {
    if (route.path === "/") return "1.0";
    if (importantRoutes.some((item) => item.path === route.path)) return "0.8";
    if (route.path === blogIndexPath) return "0.7";
    if (route.kind === "blog-post") return "0.6";
    return "0.4";
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (route) => `  <url>
    <loc>${absoluteUrl(route.path)}</loc>${
      route.lastmod ? `\n    <lastmod>${route.lastmod}</lastmod>` : ""
    }
    <changefreq>${changefreq(route)}</changefreq>
    <priority>${priority(route)}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;
}

function robotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
}

function llmsTxt(posts) {
  const blogSection = posts.length
    ? `

## Blog

Gabriel Omat writes about building AI-powered businesses: Business Brains, Claude workflows, AI-ready content, and getting found as search shifts toward AI agents. Blog index: ${siteUrl}/blog

${posts
  .map(
    (post) =>
      `- ${post.title} (${post.date}): ${siteUrl}${post.path}${
        post.description ? `\n  ${post.description}` : ""
      }`,
  )
  .join("\n")}`
    : "";

  return `# Gabriel Omat

Gabriel Omat is an AI strategist and consultant. He helps online service providers build AI-powered businesses and helps organizations close the AI skill gap using Claude Enterprise.

## Primary Pages

- Home: ${siteUrl}/
- About Gabriel Omat: ${siteUrl}/about
- Blog: ${siteUrl}/blog
- Futureproof - The Evolution Lab: ${siteUrl}/futureproof
- The Living Workspace: ${siteUrl}/living-workspace
- AI Consulting for Claude Enterprise: ${siteUrl}/consulting
- The Living Workspace Workshop: ${siteUrl}/workshop/
- Newsletter Skill: ${siteUrl}/newsletter-skill

## Core Offers

- Futureproof is a membership for coaches, consultants, and service providers who want to build AI-powered businesses with a Business Brain, AI workflows, and practical Claude training.
- The Living Workspace is a private 1:1 implementation to build a Claude-based command center that captures offers, voice, audience, workflows, and business memory.
- AI consulting helps organizations implement Claude Enterprise through strategy, workflow design, hands-on team training, and adoption advisory.
- The Living Workspace Workshop is a live training that introduces the Claude-based workspace concept and shows how the operating system evolves with a business.
- The Newsletter Skill helps creators turn rough source material into an on-brand HTML newsletter.

## Canonical Concepts

- AI Business Brain: a working business memory that knows offers, audience, voice, metrics, and strategy.
- AI Dream Team: a set of AI-powered workflows or assistants that help with content, strategy, operations, research, and execution.
- Living Workspace: a Claude command center that evolves as the business changes instead of becoming stale.
- Five layers of an AI-powered business: AI engine, context, memory, execution and workflows, and automation.${blogSection}

## Contact

Email: aicoachbox@gabrielomat.com
`;
}

function redirectsTxt(blogListing) {
  const blogPaths = ["/blog", ...blogListing.map((post) => post.path)];
  const blogRedirects = blogPaths
    .map((p) => `${p} ${p}/index.html 200\n${p}/ ${p}/index.html 200`)
    .join("\n");

  return `# Generated by scripts/search-era-snapshots.mjs.
/workshop /workshop/index.html 200
/workshop/ /workshop/index.html 200
/workshop/thanks /workshop/thanks/index.html 200
/workshop/thanks/ /workshop/thanks/index.html 200
/about /about/index.html 200
/about/ /about/index.html 200
/consulting /consulting/index.html 200
/consulting/ /consulting/index.html 200
/futureproof /futureproof/index.html 200
/futureproof/ /futureproof/index.html 200
/living-workspace /living-workspace/index.html 200
/living-workspace/ /living-workspace/index.html 200
/newsletter-skill /newsletter-skill/index.html 200
/newsletter-skill/ /newsletter-skill/index.html 200
/privacy /privacy/index.html 200
/privacy/ /privacy/index.html 200
/terms /terms/index.html 200
/terms/ /terms/index.html 200
${blogRedirects}
/* /index.html 200
`;
}

async function main() {
  const template = await readFile(path.join(outDir, "index.html"), "utf8");

  const markdownPosts = await loadPosts();
  const standalonePosts = await loadStandalonePosts();
  const blogListing = [...markdownPosts, ...standalonePosts].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  // Index + in-site post snapshots flow through the SPA template.
  const blogRoutes = buildBlogRoutes(blogListing);
  for (const route of [...routes, ...blogRoutes]) {
    await writeRoute(route, injectRoute(template, route));
  }

  // Standalone posts are their own full HTML document — write them verbatim
  // (with SEO tags injected into <head>).
  for (const post of standalonePosts) {
    await writeRoute(post, enrichStandaloneHead(post));
  }

  await writeFile(path.join(outDir, "robots.txt"), robotsTxt());
  await writeFile(path.join(outDir, "sitemap.xml"), sitemapXml(blogListing));
  await writeFile(path.join(outDir, "llms.txt"), llmsTxt(blogListing));
  await writeFile(path.join(outDir, "_redirects"), redirectsTxt(blogListing));

  console.log(
    `Search-era snapshots generated for ${routes.length + blogRoutes.length} routes ` +
      `(${markdownPosts.length} Markdown + ${standalonePosts.length} standalone posts).`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
