import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTAButton from "@/components/shared/CTAButton";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <Header />
      <main className="max-w-[88rem] mx-auto px-4 md:px-8 pt-6 md:pt-10 pb-10 md:pb-14 space-y-0">
        <section className="on-anchor bg-anchor text-cream rounded-[2rem] md:rounded-[3rem] overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(244,124,112,0.16),transparent_55%)] pointer-events-none" />
          <div className="relative px-8 md:px-16 py-24 md:py-32 flex flex-col items-center text-center">
            <span className="eyebrow mb-8 text-cream/85">
              <span className="rule-coral" aria-hidden />
              Off the map
            </span>
            <h1 className="display-sans text-7xl md:text-[9rem] leading-[0.9] mb-8">
              Four <em>oh</em> four.
            </h1>
            <p className="text-base md:text-lg text-cream/80 max-w-md leading-relaxed mb-10">
              This page hasn&rsquo;t been written yet — or it&rsquo;s tucked
              away in the archive.
            </p>
            <CTAButton href="/" variant="primary">
              Back to Home
            </CTAButton>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
