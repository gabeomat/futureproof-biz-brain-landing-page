import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTAButton from "@/components/shared/CTAButton";

export default function NotFound() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="max-w-7xl mx-auto space-y-6 md:space-y-8 px-4 md:px-8 pb-4 md:pb-8">
        <section className="border-hard bg-white p-12 md:p-20 text-center">
          <h1 className="font-editorial text-6xl md:text-8xl text-primary mb-4">404</h1>
          <p className="text-lg font-bold mb-8">This page doesn't exist yet.</p>
          <CTAButton href="/" variant="primary" className="text-sm px-6 py-3">
            Back to Home
          </CTAButton>
        </section>
        <Footer />
      </main>
    </div>
  );
}
