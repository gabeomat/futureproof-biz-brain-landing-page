import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import ValuesGrid from "@/components/about/ValuesGrid";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <Header />
      <main className="max-w-[88rem] mx-auto px-4 md:px-8 pt-6 md:pt-10 pb-10 md:pb-14 space-y-0">
        <AboutHero />
        <AboutStory />
        <ValuesGrid />
        <AboutCTA />
        <Footer />
      </main>
    </div>
  );
}
