import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import ValuesGrid from "@/components/about/ValuesGrid";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="max-w-7xl mx-auto space-y-6 md:space-y-8 px-4 md:px-8 pb-4 md:pb-8">
        <AboutHero />
        <AboutStory />
        <ValuesGrid />
        <AboutCTA />
        <Footer />
      </main>
    </div>
  );
}
