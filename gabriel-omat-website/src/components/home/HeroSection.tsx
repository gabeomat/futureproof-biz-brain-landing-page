import { motion } from "framer-motion";
import CTAButton from "@/components/shared/CTAButton";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HeroSection() {
  return (
    <section className="border-hard bg-white flex flex-col md:flex-row">
      {/* Content */}
      <motion.div
        className="p-6 md:p-12 md:w-3/5 border-b-2 md:border-b-0 md:border-r-2 border-foreground relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="inline-block border-hard px-3 py-1 text-white text-xs font-bold uppercase mb-6 bg-secondary"
          variants={childVariants}
        >
          AI Strategist & Consultant
        </motion.div>

        <motion.h1
          className="font-editorial text-4xl sm:text-5xl md:text-7xl leading-[0.95] mb-6"
          variants={childVariants}
        >
          Your Expertise Is the Asset.{" "}
          <span className="text-primary italic">AI Is the Multiplier.</span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg mb-8 max-w-xl leading-relaxed"
          variants={childVariants}
        >
          I help online service providers build AI systems that run their business
          — and consult with organizations to close the AI skill gap using Claude
          Enterprise.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          variants={childVariants}
        >
          <CTAButton
            href="/futureproof"
            variant="primary"
            pulse
            className="text-sm sm:text-base px-6 py-3"
          >
            Join Futureproof, The Evolution Lab
          </CTAButton>
        </motion.div>
      </motion.div>

      {/* Headshot */}
      <div className="md:w-2/5 relative overflow-hidden">
        <div className="absolute top-6 right-6 w-32 h-32 md:w-48 md:h-48 bg-primary opacity-20 -z-0" />
        <img
          src="/images/g-headshot.jpeg"
          alt="Gabriel Omat — AI Strategist"
          className="w-full h-64 md:h-full object-cover object-center relative z-10"
          loading="eager"
        />
      </div>
    </section>
  );
}
