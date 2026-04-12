import { Zap } from "lucide-react";
import CTAButton from "./CTAButton";

export default function Header() {
  return (
    <header className="border-b-[4px] md:border-b-[8px] border-foreground bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-3 md:py-4">
        <div className="flex items-center gap-2">
          <Zap className="w-6 h-6 md:w-8 md:h-8 text-foreground" style={{ fill: "currentColor" }} />
          <span className="font-anton text-xl md:text-3xl tracking-wide mt-1">FUTUREPROOF</span>
        </div>
        <CTAButton
          href="https://www.skool.com/futureproof-the-evolution-lab/plans"
          variant="primary"
          className="text-xs md:text-base px-3 py-1.5 md:px-4 md:py-2"
        >
          Join The Lab
        </CTAButton>
      </div>
    </header>
  );
}
