import { motion } from "framer-motion";
import CTAButton from "@/components/shared/CTAButton";

export default function AboutCTA() {
  return (
    <motion.section
      className="on-anchor bg-anchor text-cream rounded-[2rem] md:rounded-[3rem] overflow-hidden relative"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(244,124,112,0.18),transparent_55%)] pointer-events-none" />
      <div className="relative px-8 md:px-16 py-16 md:py-24">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-end">
          <div>
            <span className="eyebrow mb-8 text-cream/85">
              <span className="rule-coral" aria-hidden />
              Next Chapter
            </span>
            <h2 className="display-sans text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] max-w-2xl">
              Ready to build the <em>system</em> your business is missing?
            </h2>
          </div>
          <div className="md:pl-8 md:border-l border-anchor-soft">
            <p className="text-cream/80 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              Whether you&rsquo;re a solopreneur or leading a team — I can help
              you work with AI, not just talk about it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="/futureproof" variant="primary">
                Join Futureproof
              </CTAButton>
              <CTAButton href="/consulting" variant="outline">
                Consulting
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
