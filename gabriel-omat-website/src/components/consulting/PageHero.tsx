import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PageHero() {
  return (
    <motion.section
      className="on-anchor bg-anchor text-cream rounded-[2rem] md:rounded-[3rem] overflow-hidden relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(244,124,112,0.14),transparent_60%)] pointer-events-none" />
      <div className="relative px-8 md:px-16 lg:px-24 py-20 md:py-28 flex flex-col items-start">
        <motion.span className="eyebrow mb-8 text-cream/85" variants={childVariants}>
          <span className="rule-coral" aria-hidden />
          Consulting — For Organizations
        </motion.span>

        <motion.h1
          className="display-sans text-5xl sm:text-6xl md:text-[5rem] lg:text-[6rem] leading-[0.9] max-w-5xl"
          variants={childVariants}
        >
          Close the AI <em>skill gap.</em>
        </motion.h1>

        <motion.p
          className="mt-8 text-lg md:text-xl text-cream/80 max-w-2xl leading-relaxed font-light"
          variants={childVariants}
        >
          I help organizations implement Claude Enterprise and get teams
          productive with AI — not just aware of it.
        </motion.p>

        <motion.div
          className="mt-16 md:mt-24 w-full flex items-end justify-between text-[11px] font-medium tracking-[0.24em] uppercase text-cream/50"
          variants={childVariants}
        >
          <span>Chapter 03</span>
          <span>— Enterprise</span>
        </motion.div>
      </div>
    </motion.section>
  );
}
