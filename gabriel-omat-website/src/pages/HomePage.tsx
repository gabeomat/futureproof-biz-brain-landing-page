import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TwoTracks from "@/components/home/TwoTracks";
import WhatIDo from "@/components/home/WhatIDo";
import SocialProof from "@/components/home/SocialProof";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <Header />
      <main className="max-w-[88rem] mx-auto px-4 md:px-8 pt-6 md:pt-10 pb-10 md:pb-14 space-y-0">
        <HeroSection />
        <TwoTracks />
        <WhatIDo />
        <SocialProof />
        <Footer />
      </main>
    </div>
  );
}
