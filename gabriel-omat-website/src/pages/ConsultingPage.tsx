import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/consulting/PageHero";
import ConsultingContext from "@/components/consulting/ConsultingContext";
import InquiryForm from "@/components/consulting/InquiryForm";

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <Header />
      <main className="max-w-[88rem] mx-auto px-4 md:px-8 pt-6 md:pt-10 pb-10 md:pb-14 space-y-0">
        <PageHero />
        <ConsultingContext />
        <InquiryForm />
        <Footer />
      </main>
    </div>
  );
}
