import { Zap } from "lucide-react";
import CTAButton from "./CTAButton";

export default function FPFooter() {
  return (
    <footer className="border-hard bg-white flex flex-col">
      {/* Top row: tagline + CTA */}
      <div className="p-6 md:p-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-b-2 border-foreground">
        <p className="font-anton text-base sm:text-xl md:text-2xl leading-tight text-center sm:text-left">
          STOP CHATTING WITH AI. START BUILDING YOUR AI BRAIN.
        </p>
        <CTAButton
          href="https://www.skool.com/futureproof-the-evolution-lab/plans"
          variant="primary"
          className="text-base px-6 py-3 whitespace-nowrap"
        >
          Join The Lab — $47/mo
        </CTAButton>
      </div>

      {/* Middle row: logo + price */}
      <div className="p-4 md:p-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-b-2 border-foreground">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-primary" style={{ fill: "currentColor" }} />
          <span className="font-anton text-xl tracking-wide">FUTUREPROOF</span>
        </div>
        <p className="text-xs font-bold uppercase text-secondary">
          The Evolution Lab &mdash; $47/month &mdash; Cancel anytime
        </p>
      </div>

      {/* Bottom row: copyright + links */}
      <div className="p-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-bold uppercase">
        <span>&copy; 2026 Level Up Your Life Coaching LLC. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="/terms" className="hover:text-primary transition-colors">
            Terms
          </a>
          <a href="/privacy" className="hover:text-primary transition-colors">
            Privacy
          </a>
        </div>
      </div>

      {/* Facebook disclaimer */}
      <div className="px-4 pb-4 pt-2">
        <p className="text-[10px] text-foreground/40 text-center leading-relaxed">
          This site is not a part of the Facebook website or Facebook Inc.
          Additionally, this site is NOT endorsed by Facebook in any way.
          FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>
      </div>
    </footer>
  );
}
