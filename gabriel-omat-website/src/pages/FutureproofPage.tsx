import FPHeader from "@/components/futureproof/FPHeader";
import FPFooter from "@/components/futureproof/FPFooter";
import FPHero from "@/components/futureproof/HeroSection";
import PainPoints from "@/components/futureproof/PainPoints";
import SystemDefinition from "@/components/futureproof/SystemDefinition";
import FiveLayers from "@/components/futureproof/FiveLayers";
import AboutCreator from "@/components/futureproof/AboutCreator";
import TestimonialsCarousel from "@/components/futureproof/TestimonialsCarousel";
import PricingSection from "@/components/futureproof/PricingSection";
import FAQSection from "@/components/futureproof/FAQSection";

export default function FutureproofPage() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <FPHeader />
      <main className="max-w-7xl mx-auto space-y-6 md:space-y-8 px-4 md:px-8 pb-4 md:pb-8">
        <section className="border-hard bg-white flex flex-col md:flex-row">
          <FPHero />
          <PainPoints />
        </section>
        <section className="grid md:grid-cols-2 gap-6 md:gap-8">
          <SystemDefinition />
          <FiveLayers />
        </section>
        <section className="grid md:grid-cols-3 gap-6 md:gap-8">
          <AboutCreator />
          <TestimonialsCarousel />
        </section>
        <PricingSection />
        <FAQSection />
        <FPFooter />
      </main>
    </div>
  );
}
