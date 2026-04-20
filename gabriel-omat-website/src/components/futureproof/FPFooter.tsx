import CTAButton from "./CTAButton";

export default function FPFooter() {
  return (
    <footer className="on-anchor bg-anchor text-cream rounded-[2rem] md:rounded-[3rem] overflow-hidden mt-6 md:mt-10">
      {/* Tagline + CTA */}
      <div className="px-8 md:px-16 py-14 md:py-20 grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-end border-b border-anchor-soft">
        <div>
          <span className="eyebrow mb-6 text-cream/80">
            <span className="rule-coral" aria-hidden />
            Closing Remarks
          </span>
          <h3 className="display-sans text-4xl md:text-5xl lg:text-[3.25rem] leading-[0.95] max-w-xl">
            Stop chatting with AI. Start <em>building</em> your AI brain.
          </h3>
        </div>
        <div className="flex md:justify-end">
          <CTAButton
            href="https://www.skool.com/futureproof-the-evolution-lab/plans"
            variant="primary"
          >
            Join The Lab — $47/mo
          </CTAButton>
        </div>
      </div>

      {/* Wordmark */}
      <div className="px-8 md:px-16 py-8 md:py-10 grid md:grid-cols-3 gap-6 items-center border-b border-anchor-soft">
        <span className="display-sans text-xl md:text-2xl tracking-[0.08em]">FUTUREPROOF</span>
        <span className="eyebrow text-cream/70 md:justify-self-center">
          <span className="rule-coral" aria-hidden />
          $47/month · Cancel anytime
        </span>
        <span className="text-xs font-medium text-cream/60 md:justify-self-end tracking-wide">
          The Evolution Lab
        </span>
      </div>

      {/* Links */}
      <div className="px-8 md:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/70">
        <span>&copy; 2026 Level Up Your Life Coaching LLC</span>
        <div className="flex gap-6">
          <a href="/terms" className="hover:text-coral transition-colors">Terms</a>
          <a href="/privacy" className="hover:text-coral transition-colors">Privacy</a>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="px-8 md:px-16 pb-8 pt-2">
        <p className="text-[10px] text-cream/40 text-center leading-relaxed">
          This site is not a part of the Facebook website or Facebook Inc.
          Additionally, this site is NOT endorsed by Facebook in any way.
          FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>
      </div>
    </footer>
  );
}
