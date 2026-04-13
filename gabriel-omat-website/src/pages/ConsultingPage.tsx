import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/consulting/PageHero";
import ConsultingContext from "@/components/consulting/ConsultingContext";
import InquiryForm from "@/components/consulting/InquiryForm";

export default function ConsultingPage() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="max-w-7xl mx-auto space-y-6 md:space-y-8 px-4 md:px-8 pb-4 md:pb-8">
        <PageHero />
        <ConsultingContext />
        <InquiryForm />
        <Footer />
      </main>
    </div>
  );
}
