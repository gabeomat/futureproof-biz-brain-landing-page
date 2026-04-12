import { Zap } from "lucide-react";
import CTAButton from "./CTAButton";

export default function Header() {
  return (
    <header className="border-hard border-b-[8px] flex justify-between items-center p-4 bg-white mb-8 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <Zap className="w-8 h-8 text-foreground" style={{ fill: "currentColor" }} />
        <span className="font-anton text-3xl tracking-wide mt-1">FUTUREPROOF</span>
      </div>
      <CTAButton
        href="https://www.skool.com/futureproof-the-evolution-lab/plans"
        variant="primary"
        className="text-sm md:text-base px-4 py-2"
      >
        Join The Lab
      </CTAButton>
    </header>
  );
}
