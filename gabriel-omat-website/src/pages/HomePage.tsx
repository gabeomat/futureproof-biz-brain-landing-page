import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TwoTracks from "@/components/home/TwoTracks";
import WhatIDo from "@/components/home/WhatIDo";
import SocialProof from "@/components/home/SocialProof";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="max-w-7xl mx-auto space-y-6 md:space-y-8 px-4 md:px-8 pb-4 md:pb-8">
        <HeroSection />
        <TwoTracks />
        <WhatIDo />
        <SocialProof />
        <CTABanner />
        <Footer />
      </main>
    </div>
  );
}
