import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <Header />
      <main className="max-w-[88rem] mx-auto space-y-6 md:space-y-8 px-4 md:px-8 pt-6 md:pt-10 pb-10 md:pb-14">
        <motion.section
          className="on-anchor bg-anchor text-cream rounded-[2rem] md:rounded-[3rem] overflow-hidden px-8 md:px-16 py-16 md:py-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow mb-6 text-cream/85">
            <span className="rule-coral" aria-hidden />
            The Fine Print
          </span>
          <h1 className="display-sans text-5xl md:text-7xl leading-[0.9] mb-6">
            Terms of <em>service.</em>
          </h1>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/70">
            Last updated · April 12, 2026
          </p>
        </motion.section>

        <motion.section
          className="border-hard bg-white p-6 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="max-w-3xl mx-auto space-y-8 text-sm font-medium leading-relaxed">
            <div>
              <h2 className="font-editorial text-xl mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing or using the website gabrielomat.com ("Site"), any
                services, digital products, or community memberships offered by
                Level Up Your Life Coaching LLC ("Company," "we," "us," or "our"),
                you agree to be bound by these Terms of Service. If you do not
                agree, do not use the Site or our services.
              </p>
            </div>

            <div>
              <h2 className="font-editorial text-xl mb-3">2. Business Entity</h2>
              <p>
                This Site and all associated services are operated by:
              </p>
              <div className="border-hard bg-muted p-4 mt-2">
                <p className="font-bold">Level Up Your Life Coaching LLC</p>
                <p>9407 NE Vancouver Mall Dr, Ste 104</p>
                <p>Vancouver, WA 98662</p>
              </div>
            </div>

            <div>
              <h2 className="font-editorial text-xl mb-3">3. Services</h2>
              <p>
                We offer AI strategy consulting, digital products, online
                community memberships (including Futureproof — The Evolution Lab
                hosted on Skool), and related educational content. Services are
                provided on an as-is basis and are subject to change without
                notice.
              </p>
            </div>

            <div>
              <h2 className="font-editorial text-xl mb-3">4. Use of AI in Our Work</h2>
              <p>
                We openly use artificial intelligence tools — including Claude by
                Anthropic and other AI models — as part of our workflow, content
                creation, and service delivery. AI is central to what we teach
                and how we operate.
              </p>
              <p className="mt-2">
                <strong>Important:</strong> We do not allow any AI model
                (including Claude, ChatGPT, or any other provider) to train on
                our proprietary data, client data, or any information shared
                within our community or consulting engagements. We use AI tools
                with training-data opt-out settings enabled wherever available.
              </p>
            </div>

            <div>
              <h2 className="font-editorial text-xl mb-3">5. Membership & Subscriptions</h2>
              <p>
                Futureproof — The Evolution Lab is a subscription-based
                membership hosted on Skool. By subscribing, you agree to Skool's
                terms of service in addition to these terms. Subscriptions renew
                automatically. You may cancel at any time from your Skool
                account dashboard.
              </p>
            </div>

            <div>
              <h2 className="font-editorial text-xl mb-3">6. Consulting Services</h2>
              <p>
                Consulting engagements are governed by separate agreements
                executed between the Company and the client organization. These
                Terms of Service apply to the use of this Site and general
                inquiries only.
              </p>
            </div>

            <div>
              <h2 className="font-editorial text-xl mb-3">7. Intellectual Property</h2>
              <p>
                All content on this Site — including text, graphics, templates,
                tools, course materials, and code — is the property of Level Up
                Your Life Coaching LLC unless otherwise stated. You may not
                reproduce, distribute, or create derivative works without
                written permission, except where explicitly granted (e.g.,
                resell/share rights included in Premium membership tiers).
              </p>
            </div>

            <div>
              <h2 className="font-editorial text-xl mb-3">8. Disclaimer</h2>
              <p>
                The information and tools provided through our services are for
                educational and informational purposes only. We make no
                guarantees regarding specific business results, income, or
                outcomes. Your results depend on your effort, circumstances, and
                application of the material.
              </p>
            </div>

            <div>
              <h2 className="font-editorial text-xl mb-3">9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Level Up Your Life
                Coaching LLC shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising from your
                use of the Site or services.
              </p>
            </div>

            <div>
              <h2 className="font-editorial text-xl mb-3">10. Governing Law</h2>
              <p>
                These terms are governed by the laws of the State of Washington,
                without regard to conflict of law principles. Any disputes shall
                be resolved in the courts of Clark County, Washington.
              </p>
            </div>

            <div>
              <h2 className="font-editorial text-xl mb-3">11. Changes to Terms</h2>
              <p>
                We reserve the right to update these terms at any time.
                Continued use of the Site after changes constitutes acceptance of
                the revised terms.
              </p>
            </div>

            <div>
              <h2 className="font-editorial text-xl mb-3">12. Contact</h2>
              <p>
                Questions about these terms? Email us at{" "}
                <a
                  href="mailto:aicoachbox@gabrielomat.com"
                  className="text-primary font-bold hover:underline"
                >
                  aicoachbox@gabrielomat.com
                </a>{" "}
                or contact us at our business address above.
              </p>
            </div>
          </div>
        </motion.section>

        <Footer />
      </main>
    </div>
  );
}
