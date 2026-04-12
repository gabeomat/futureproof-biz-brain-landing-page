import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import CTAButton from "./CTAButton";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HeroSection() {
  return (
    <motion.div
      className="p-6 md:p-12 md:w-2/3 border-b-2 md:border-b-0 md:border-r-2 border-foreground relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="inline-block border-hard px-3 py-1 text-white text-xs font-bold uppercase mb-6 bg-secondary"
        variants={childVariants}
      >
        FUTUREPROOF
      </motion.div>

      <motion.h1
        className="font-anton text-4xl sm:text-6xl md:text-8xl leading-[0.85] mb-6"
        variants={childVariants}
      >
        THE EVOLUTION <br /> <span className="text-primary">LAB.</span>
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl md:text-2xl font-bold max-w-2xl leading-tight mb-4"
        variants={childVariants}
      >
        You don't need more AI tools. You need one system that runs your business.
      </motion.p>

      <motion.p
        className="text-base md:text-lg mb-8 max-w-2xl leading-snug"
        variants={childVariants}
      >
        Build an AI <strong>Business Brain</strong>, hire a{" "}
        <strong>Dream Team</strong>, and do 5 jobs by yourself. No complex tech
        background. Just a smart way to work.
      </motion.p>

      <motion.div
        id="join"
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        variants={childVariants}
      >
        <CTAButton
          href="https://www.skool.com/futureproof-the-evolution-lab/plans"
          variant="primary"
          pulse
          className="text-base sm:text-xl md:text-2xl px-5 sm:px-8 py-3 sm:py-4"
        >
          Join The Lab Now — $47/mo
        </CTAButton>
        <span className="text-xs font-bold uppercase tracking-tight">
          Cancel anytime.
        </span>
      </motion.div>

      <motion.div
        className="flex justify-center mt-8"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-foreground opacity-50" />
      </motion.div>
    </motion.div>
  );
}
