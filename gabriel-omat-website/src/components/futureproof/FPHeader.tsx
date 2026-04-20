import CTAButton from "./CTAButton";

export default function FPHeader() {
  return (
    <header className="on-anchor bg-anchor text-cream sticky top-0 z-50 border-b border-anchor-soft">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-5 md:py-6">
        <div className="flex items-center gap-3">
          <span className="rule-coral" aria-hidden />
          <span className="font-serif italic text-xl md:text-2xl text-cream/80 leading-none">
            Vol. 01
          </span>
          <span className="h-4 w-px bg-anchor-soft" />
          <span className="display-sans text-xl md:text-2xl tracking-[0.08em] leading-none">
            FUTUREPROOF
          </span>
        </div>
        <CTAButton
          href="https://www.skool.com/futureproof-the-evolution-lab/plans"
          variant="primary"
          className="text-[11px] md:text-[12px] px-4 md:px-5 py-2 md:py-2.5"
        >
          Join The Lab
        </CTAButton>
      </div>
    </header>
  );
}
