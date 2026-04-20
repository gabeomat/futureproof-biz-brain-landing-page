import { motion } from "framer-motion";
import CTAButton from "@/components/shared/CTAButton";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HeroSection() {
  return (
    <section className="on-anchor bg-anchor text-cream rounded-[2rem] md:rounded-[3rem] overflow-hidden">
      <div className="grid md:grid-cols-[1.4fr_1fr]">
        {/* Editorial left column */}
        <motion.div
          className="px-8 md:px-14 lg:px-20 pt-14 md:pt-20 pb-12 md:pb-20 relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="eyebrow text-cream/85 mb-10"
            variants={childVariants}
          >
            <span className="rule-coral" aria-hidden />
            Vol. 01 · AI Strategist &amp; Consultant
          </motion.span>

          <motion.h1
            className="display-sans text-[2.5rem] sm:text-5xl md:text-[4.25rem] lg:text-[5rem] leading-[0.92] tracking-[-0.02em] mb-8"
            variants={childVariants}
          >
            Your expertise <br className="hidden md:block" />
            <em>is the asset.</em>
            <br />
            AI <em>is the multiplier.</em>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-cream/75 max-w-xl leading-relaxed mb-10 font-light"
            variants={childVariants}
          >
            I help online service providers build AI systems that run their
            business — and consult with organizations to close the AI skill gap
            using Claude Enterprise.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6"
            variants={childVariants}
          >
            <CTAButton href="/futureproof" variant="primary" pulse>
              Join Futureproof
            </CTAButton>
            <a
              href="/consulting"
              className="group inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-cream/85 hover:text-coral transition-colors"
            >
              <span className="rule-coral transition-all group-hover:w-12" />
              Consulting Inquiry
            </a>
          </motion.div>

          {/* Thin page-number-style footer */}
          <motion.div
            className="mt-16 md:mt-24 flex items-end justify-between text-[11px] font-medium tracking-[0.24em] uppercase text-cream/50"
            variants={childVariants}
          >
            <span>The Evolution Lab</span>
            <span>— 001</span>
          </motion.div>
        </motion.div>

        {/* Editorial right column — portrait */}
        <div className="relative border-t md:border-t-0 md:border-l border-anchor-soft">
          <img
            src="/images/g-headshot.jpeg"
            alt="Gabriel Omat — AI Strategist"
            className="relative z-10 w-full h-80 md:h-full object-cover object-center"
            loading="eager"
          />
          {/* Coral corner mark */}
          <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-cream">
            <span className="w-2 h-2 rounded-full bg-coral" />
            Live practitioner
          </div>
          {/* Editorial caption */}
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20 text-right">
            <p className="font-serif italic text-cream text-lg md:text-xl leading-tight">
              &ldquo;Built in reality,<br />not theory.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
