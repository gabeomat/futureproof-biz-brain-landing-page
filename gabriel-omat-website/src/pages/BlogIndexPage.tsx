import type { ReactNode } from "react";
import { Link } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getAllPosts, type BlogPost } from "@/content/posts";
import { useSeo } from "@/hooks/useSeo";

// Standalone (.html) posts are their own full page — use a real anchor so the
// browser does a full navigation. In-site (Markdown) posts use the SPA router.
function CardLink({
  post,
  className,
  children,
}: {
  post: BlogPost;
  className?: string;
  children: ReactNode;
}) {
  if (post.layout === "standalone") {
    return (
      <a href={post.href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={post.href} className={className}>
      {children}
    </Link>
  );
}

// 16:9 featured image, or a branded placeholder when a post has no image yet.
function Thumb({ post }: { post: BlogPost }) {
  if (post.image) {
    return (
      <img
        src={post.image}
        alt={post.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    );
  }
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-anchor to-anchor-deep">
      <span className="font-serif italic text-2xl text-cream/40">
        Gabriel Omat
      </span>
    </div>
  );
}

function MetaRow({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-soft/70">
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
  );
}

function ReadMore() {
  return (
    <span className="mt-auto pt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-burnt">
      Read
      <span
        aria-hidden
        className="transition-transform group-hover:translate-x-1"
      >
        →
      </span>
    </span>
  );
}

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

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
          <>
            {/* Featured (newest) post */}
            <CardLink
              post={featured}
              className="group block overflow-hidden rounded-[1.5rem] border border-ink/10 bg-cream-soft transition-colors hover:border-burnt/40"
            >
              <div className="grid md:grid-cols-2">
                <div className="order-1 md:order-2 aspect-[16/9] md:aspect-auto overflow-hidden bg-cream-deep">
                  <Thumb post={featured} />
                </div>
                <div className="order-2 md:order-1 flex flex-col p-8 md:p-10 lg:p-12">
                  <MetaRow post={featured} />
                  <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-[1.05] text-anchor group-hover:text-burnt transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-base md:text-lg leading-relaxed text-ink-soft">
                    {featured.description}
                  </p>
                  <ReadMore />
                </div>
              </div>
            </CardLink>

            {/* Remaining posts */}
            {rest.length > 0 && (
              <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((post) => (
                  <li key={post.slug}>
                    <CardLink
                      post={post}
                      className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-ink/10 bg-cream-soft transition-colors hover:border-burnt/40"
                    >
                      <div className="aspect-[16/9] overflow-hidden bg-cream-deep">
                        <Thumb post={post} />
                      </div>
                      <div className="flex flex-1 flex-col p-6 md:p-7">
                        <MetaRow post={post} />
                        <h2 className="mt-3 font-serif text-xl md:text-2xl leading-tight text-anchor group-hover:text-burnt transition-colors">
                          {post.title}
                        </h2>
                        <p className="mt-2 text-[15px] leading-relaxed text-ink-soft line-clamp-3">
                          {post.description}
                        </p>
                        <ReadMore />
                      </div>
                    </CardLink>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}

        <Footer />
      </main>
    </div>
  );
}
