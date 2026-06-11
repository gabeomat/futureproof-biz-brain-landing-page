import { useEffect } from "react";
import { Link, useRoute } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NotFound from "@/pages/NotFound";
import { getInSitePost, getPostBySlug } from "@/content/posts";
import { useSeo } from "@/hooks/useSeo";
import "@/styles/blog.css";

const SITE_URL = "https://gabrielomat.com";

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug ?? "";
  const post = getInSitePost(slug);

  // A standalone HTML post is its own full page, not rendered inside the SPA.
  // If the user somehow client-routed here, do a real navigation to the static
  // file (direct visits are served statically and never reach this component).
  useEffect(() => {
    if (post) return;
    const other = getPostBySlug(slug);
    if (other?.layout === "standalone") {
      window.location.replace(other.href);
    }
  }, [post, slug]);

  useSeo({
    title: post?.title ?? "Post not found",
    description: post?.description,
    path: post ? `/blog/${post.slug}` : "/blog",
    image: post?.image,
    type: "article",
  });

  // Inject BlogPosting structured data so AI agents and search engines can
  // parse the article cleanly during client-side navigation. (The static
  // snapshot emits the same schema for the no-JS / crawler first load.)
  useEffect(() => {
    if (!post) return;
    const ld = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      author: { "@type": "Person", name: post.author, url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: "AI Coachbox",
        url: SITE_URL,
      },
      mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
      image: post.image
        ? post.image.startsWith("http")
          ? post.image
          : `${SITE_URL}${post.image}`
        : `${SITE_URL}/images/g-headshot.jpeg`,
      keywords: post.tags.join(", "),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.blogPosting = "true";
    script.textContent = JSON.stringify(ld);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [post]);

  if (!post) {
    // Standalone post: a redirect is in flight (see effect above), render
    // nothing to avoid flashing the 404.
    if (getPostBySlug(slug)?.layout === "standalone") return null;
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <Header />
      <main className="max-w-[88rem] mx-auto px-4 md:px-8 pt-6 md:pt-10 pb-10 md:pb-14">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-ink-soft/70 hover:text-burnt transition-colors"
          >
            <span aria-hidden>←</span> All posts
          </Link>

          <header className="mt-8 mb-10 md:mb-12 border-b border-ink/10 pb-8 md:pb-10">
            <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-soft/70">
              <time dateTime={post.date}>{post.displayDate}</time>
              <span aria-hidden>·</span>
              <span>{post.readingMinutes} min read</span>
              <span aria-hidden>·</span>
              <span>{post.author}</span>
            </div>

            <h1 className="mt-5 font-serif text-4xl md:text-6xl leading-[0.98] tracking-tight text-anchor">
              {post.title}
            </h1>

            {post.description && (
              <p className="mt-5 text-lg md:text-xl text-ink-soft leading-relaxed">
                {post.description}
              </p>
            )}

            {post.tags.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-cream-deep px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </header>

          {/* Post body: Gabriel's own trusted Markdown, rendered to HTML. */}
          <div
            className="blog-prose"
            dangerouslySetInnerHTML={{ __html: post.html ?? "" }}
          />

          <div className="mt-14 md:mt-16 border-t border-ink/10 pt-10">
            <div className="rounded-[1.5rem] bg-anchor text-cream p-8 md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-coral">
                Keep going
              </p>
              <h2 className="mt-3 font-serif italic text-2xl md:text-3xl leading-tight">
                Want help building this into your business?
              </h2>
              <p className="mt-3 text-cream/80 max-w-xl leading-relaxed">
                Futureproof walks service providers through building an
                AI-powered business step by step.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/futureproof"
                  className="inline-flex items-center gap-2 rounded-full bg-burnt hover:bg-[color:var(--color-burnt-deep)] text-cream px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors"
                >
                  Join Futureproof <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/consulting"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/30 hover:border-coral text-cream px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors"
                >
                  Work with me <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </main>
    </div>
  );
}
