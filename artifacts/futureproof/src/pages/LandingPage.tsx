import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import PainPoints from "@/components/landing/PainPoints";
import SystemDefinition from "@/components/landing/SystemDefinition";
import FiveLayers from "@/components/landing/FiveLayers";
import AboutCreator from "@/components/landing/AboutCreator";
import TestimonialsCarousel from "@/components/landing/TestimonialsCarousel";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen p-4 md:p-8 font-sans bg-background text-foreground">
      <Header />
      <main className="max-w-7xl mx-auto space-y-8">
        <section className="border-hard bg-white flex flex-col md:flex-row">
          <HeroSection />
          <PainPoints />
        </section>
        <section className="grid md:grid-cols-2 gap-8">
          <SystemDefinition />
          <FiveLayers />
        </section>
        <section className="grid md:grid-cols-3 gap-8">
          <AboutCreator />
          <TestimonialsCarousel />
        </section>
        <PricingSection />
        <FAQSection />
        <Footer />
      </main>
    </div>
  );
}
