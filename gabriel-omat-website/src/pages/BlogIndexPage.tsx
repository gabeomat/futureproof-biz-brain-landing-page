import { Link } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getAllPosts } from "@/content/posts";
import { useSeo } from "@/hooks/useSeo";
import "@/styles/blog.css";

export default function BlogIndexPage() {
  const posts = getAllPosts();

  useSeo({
    title: "Blog — AI Systems for Service Businesses",
    description:
      "Practical writing on building AI-powered businesses: Business Brains, Claude workflows, AI-ready content, and getting found in the age of AI search.",
    path: "/blog",
  });

  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <Header />
      <main className="max-w-[88rem] mx-auto px-4 md:px-8 pt-6 md:pt-10 pb-10 md:pb-14">
        {/* Masthead */}
        <header className="border-b border-ink/10 pb-8 md:pb-12 mb-10 md:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-burnt mb-4">
            The Blog
          </p>
          <h1 className="font-serif italic text-5xl md:text-7xl leading-[0.95] tracking-tight text-anchor max-w-4xl">
            Notes on building an AI-powered business
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-soft max-w-2xl leading-relaxed">
            Practical thinking on Business Brains, Claude workflows, and staying
            found as search shifts from people to AI agents.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-ink-soft text-lg py-16 text-center">
            New writing is on the way. Check back soon.
          </p>
        ) : (
          <ul className="grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3 rounded-[1.25rem] overflow-hidden">
            {posts.map((post) => {
              const cardInner = (
                <>
                  <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-soft/70">
                    <time dateTime={post.date}>{post.displayDate}</time>
                    <span aria-hidden>·</span>
                    <span>{post.readingMinutes} min read</span>
                    {post.layout === "standalone" && (
                      <>
                        <span aria-hidden>·</span>
                        <span className="text-burnt">Interactive</span>
                      </>
                    )}
                  </div>

                  <h2 className="mt-4 font-serif text-2xl md:text-[1.7rem] leading-tight text-anchor group-hover:text-burnt transition-colors">
                    {post.title}
                  </h2>

                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft line-clamp-4">
                    {post.description}
                  </p>

                  <span className="mt-auto pt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-burnt">
                    Read
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </>
              );

              const cardClass =
                "group flex h-full flex-col p-7 md:p-8 transition-colors hover:bg-cream-soft";

              return (
                <li key={post.slug} className="bg-cream">
                  {post.layout === "standalone" ? (
                    // Standalone posts are their own full HTML page — use a real
                    // anchor so the browser does a full navigation to the static
                    // file rather than client-side routing into the SPA.
                    <a href={post.href} className={cardClass}>
                      {cardInner}
                    </a>
                  ) : (
                    <Link href={post.href} className={cardClass}>
                      {cardInner}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        )}

        <Footer />
      </main>
    </div>
  );
}
