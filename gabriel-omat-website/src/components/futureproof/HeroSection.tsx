import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import CTAButton from "./CTAButton";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HeroSection() {
  return (
    <motion.div
      className="on-anchor bg-anchor text-cream px-8 md:px-14 lg:px-20 py-14 md:py-20 md:w-2/3 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.span
        className="eyebrow text-cream/85 mb-8"
        variants={childVariants}
      >
        <span className="rule-coral" aria-hidden />
        FUTUREPROOF · Volume 01
      </motion.span>

      <motion.h1
        className="display-sans text-5xl sm:text-6xl md:text-[5.25rem] lg:text-[6.5rem] leading-[0.9] mb-8"
        variants={childVariants}
      >
        The evolution
        <br />
        <em>lab.</em>
      </motion.h1>

      <motion.p
        className="font-serif italic text-xl md:text-2xl text-cream/90 max-w-2xl leading-snug mb-5"
        variants={childVariants}
      >
        You don&rsquo;t need more AI tools. You need one system that runs your
        business.
      </motion.p>

      <motion.p
        className="text-[15px] md:text-base text-cream/75 max-w-xl leading-relaxed mb-10"
        variants={childVariants}
      >
        Build an AI <strong className="font-semibold text-cream">Business Brain</strong>,
        hire a <strong className="font-semibold text-cream">Dream Team</strong>,
        and do 5 jobs by yourself. No complex tech background. Just a smart way
        to work.
      </motion.p>

      <motion.div
        id="join"
        className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
        variants={childVariants}
      >
        <CTAButton
          href="https://www.skool.com/futureproof-the-evolution-lab/plans"
          variant="primary"
          pulse
          className="text-[13px] md:text-sm px-7 py-4"
        >
          Join The Lab — $47/mo
        </CTAButton>
        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/70">
          Cancel anytime.
        </span>
      </motion.div>

      <motion.div
        className="flex justify-start mt-14 text-cream/50"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </motion.div>
  );
}
