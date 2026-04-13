import { Link } from "wouter";
import CTAButton from "@/components/shared/CTAButton";

export default function Footer() {
  return (
    <footer className="border-hard bg-white flex flex-col">
      {/* Top row: tagline + CTA */}
      <div className="p-6 md:p-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-b-2 border-foreground">
        <p className="font-editorial text-base sm:text-xl md:text-2xl leading-tight text-center sm:text-left">
          You Already Have the Expertise. Let's Build the System.
        </p>
        <CTAButton
          href="/futureproof"
          variant="primary"
          className="text-sm px-6 py-3 whitespace-nowrap"
        >
          Join Futureproof
        </CTAButton>
      </div>

      {/* Middle row: logo + subtitle */}
      <div className="p-4 md:p-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-b-2 border-foreground">
        <div className="flex items-center gap-3">
          <span className="font-editorial text-xl tracking-tight">Gabriel Omat</span>
        </div>
        <p className="text-xs font-bold uppercase text-secondary">
          AI Strategist & Consultant
        </p>
      </div>

      {/* Bottom row: copyright + links */}
      <div className="p-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-bold uppercase">
        <span>&copy; 2026 Level Up Your Life Coaching LLC. All rights reserved.</span>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/consulting" className="hover:text-primary transition-colors">
            Consulting
          </Link>
          <Link href="/terms" className="hover:text-primary transition-colors">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-primary transition-colors">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
