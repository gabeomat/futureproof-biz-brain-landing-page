import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutHero() {
  return (
    <motion.section
      className="on-anchor bg-anchor text-cream rounded-[2rem] md:rounded-[3rem] overflow-hidden relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(244,124,112,0.12),transparent_60%)] pointer-events-none" />
      <div className="relative px-8 md:px-16 lg:px-24 py-20 md:py-28 flex flex-col items-start">
        <motion.span className="eyebrow mb-8 text-cream/85" variants={childVariants}>
          <span className="rule-coral" aria-hidden />
          Field Note — On the record
        </motion.span>

        <motion.h1
          className="display-sans text-5xl sm:text-6xl md:text-[5rem] lg:text-[6rem] leading-[0.9] max-w-4xl"
          variants={childVariants}
        >
          About <em>me.</em>
        </motion.h1>

        <motion.p
          className="mt-8 font-serif italic text-2xl md:text-3xl text-cream/90 max-w-2xl leading-snug"
          variants={childVariants}
        >
          I built big, lost big, and came back with a better blueprint.
        </motion.p>

        <motion.div
          className="mt-16 md:mt-24 w-full flex items-end justify-between text-[11px] font-medium tracking-[0.24em] uppercase text-cream/50"
          variants={childVariants}
        >
          <span>Chapter 02</span>
          <span>— The Return</span>
        </motion.div>
      </div>
    </motion.section>
  );
}
