import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function PrivacyPage() {
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
            Privacy <em>policy.</em>
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
              <h2 className="font-editorial text-xl mb-3">1. Who We Are</h2>
              <p>
                This privacy policy applies to the website gabrielomat.com and
                all services operated by:
              </p>
              <div className="border-hard bg-muted p-4 mt-2">
                <p className="font-bold">Level Up Your Life Coaching LLC</p>
                <p>9407 NE Vancouver Mall Dr, Ste 104</p>
                <p>Vancouver, WA 98662</p>
              </div>
            </div>

            <div>
              <h2 className="font-editorial text-xl mb-3">
                2. Information We Collect
              </h2>
              <p className="mb-2">We may collect the following information:</p>
              <ul className="list-none space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">--</span>
                  <span>
                    <strong>Contact information:</strong> Name, email address,
                    organization name, and team size when you submit a
                    consulting inquiry
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">--</span>
                  <span>
                    <strong>Membership data:</strong> Information you provide
                    when joining Futureproof on Skool (governed by Skool's
                    privacy policy)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">--</span>
                  <span>
                    <strong>Usage data:</strong> Basic analytics such as page
                    views and traffic sources, collected through standard web
                    analytics tools
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-editorial text-xl mb-3">
                3. How We Use Your Information
              </h2>
              <p className="mb-2">We use collected information to:</p>
              <ul className="list-none space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">--</span>
                  <span>Respond to consulting inquiries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">--</span>
                  <span>Deliver and improve our services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">--</span>
                  <span>
                    Send relevant communications (only with your consent)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">--</span>
                  <span>Understand how visitors use our Site</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-editorial text-xl mb-3">
                4. AI Usage & Data Protection
              </h2>
              <div className="border-hard bg-foreground text-white p-6">
                <p className="font-bold mb-2">
                  We use AI tools in our work. Here's how we protect your data:
                </p>
                <ul className="list-none space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">--</span>
                    <span>
                      We use Claude by Anthropic and other AI models as part of
                      our workflow and service delivery
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">--</span>
                    <span>
                      <strong>
                        We do not allow any AI model to train on our data, your
                        data, or any data shared within our community or
                        consulting engagements
                      </strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">--</span>
                    <span>
                      We use AI platforms with data training opt-out settings
                      enabled wherever available
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">--</span>
                    <span>
                      Client data shared during consulting engagements is never
                      uploaded to AI tools without explicit written consent
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-editorial text-xl mb-3">
                5. Third-Party Services
              </h2>
              <p className="mb-2">
                We use the following third-party services that may collect data
                according to their own privacy policies:
              </p>
              <ul className="list-none space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">--</span>
                  <span>
                    <strong>Skool</strong> — Community platform for Futureproof
                    membership
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">--</span>
                  <span>
                    <strong>Anthropic (Claude)</strong> — AI tools used in
                    service delivery (with training opt-out enabled)
                  </span>
                </li>
              </ul>
              <p className="mt-2">
                We encourage you to review each provider's privacy policy for
                details on how they handle your data.
              </p>
            </div>

            <div>
              <h2 className="font-editorial text-xl mb-3">6. Data Sharing</h2>
              <p>
                We do not sell, rent, or trade your personal information. We may
                share information only when required by law, to protect our
                rights, or with service providers who assist in operating our
                business (subject to confidentiality agreements).
              </p>
            </div>

            <div>
              <h2 className="font-editorial text-xl mb-3">7. Data Retention</h2>
              <p>
                We retain personal information only as long as necessary to
                fulfill the purposes outlined in this policy or as required by
                law. You may request deletion of your data at any time by
                contacting us.
              </p>
            </div>

            <div>
              <h2 className="font-editorial text-xl mb-3">8. Your Rights</h2>
              <p className="mb-2">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-none space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">--</span>
                  <span>Access the personal data we hold about you</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">--</span>
                  <span>Request correction or deletion of your data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">--</span>
                  <span>Opt out of communications at any time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">--</span>
                  <span>
                    Request a copy of your data in a portable format
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-editorial text-xl mb-3">
                9. Children's Privacy
              </h2>
              <p>
                Our services are not directed at individuals under 18. We do not
                knowingly collect personal information from children.
              </p>
            </div>

            <div>
              <h2 className="font-editorial text-xl mb-3">
                10. Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. Changes
                will be posted on this page with an updated "Last updated" date.
                Continued use of the Site constitutes acceptance of the revised
                policy.
              </p>
            </div>

            <div>
              <h2 className="font-editorial text-xl mb-3">11. Contact</h2>
              <p>
                Questions about your privacy? Email us at{" "}
                <a
                  href="mailto:aicoachbox@gabrielomat.com"
                  className="text-primary font-bold hover:underline"
                >
                  aicoachbox@gabrielomat.com
                </a>{" "}
                or write to us at:
              </p>
              <div className="border-hard bg-muted p-4 mt-2">
                <p className="font-bold">Level Up Your Life Coaching LLC</p>
                <p>9407 NE Vancouver Mall Dr, Ste 104</p>
                <p>Vancouver, WA 98662</p>
              </div>
            </div>
          </div>
        </motion.section>

        <Footer />
      </main>
    </div>
  );
}
