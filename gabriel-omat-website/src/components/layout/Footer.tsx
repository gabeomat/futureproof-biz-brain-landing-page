import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="on-anchor bg-anchor text-cream rounded-[1.75rem] md:rounded-[2rem] overflow-hidden mt-6 md:mt-10">
      <div className="px-6 md:px-10 py-6 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="rule-coral" aria-hidden />
          <span className="font-serif italic text-xl leading-none">Gabriel Omat</span>
          <span className="hidden md:inline h-3 w-px bg-anchor-soft" />
          <span className="hidden md:inline text-[10px] font-semibold uppercase tracking-[0.24em] text-cream/60">
            AI Strategist &amp; Consultant
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-cream/65">
          <Link href="/" className="hover:text-coral transition-colors">Home</Link>
          <Link href="/about" className="hover:text-coral transition-colors">About</Link>
          <Link href="/consulting" className="hover:text-coral transition-colors">Consulting</Link>
          <Link href="/terms" className="hover:text-coral transition-colors">Terms</Link>
          <Link href="/privacy" className="hover:text-coral transition-colors">Privacy</Link>
          <span className="hidden md:inline h-3 w-px bg-anchor-soft" />
          <span className="text-cream/45">&copy; 2026 Level Up Your Life Coaching LLC</span>
        </div>
      </div>
    </footer>
  );
}
