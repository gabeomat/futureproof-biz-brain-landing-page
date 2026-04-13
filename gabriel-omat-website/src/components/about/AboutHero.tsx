import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutHero() {
  return (
    <motion.section
      className="border-hard bg-muted p-8 md:p-16 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="font-editorial text-4xl sm:text-5xl md:text-7xl leading-[0.95] mb-4"
        variants={childVariants}
      >
        About <span className="text-primary italic">Me</span>
      </motion.h1>
      <motion.p
        className="text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed"
        variants={childVariants}
      >
        I built big, lost big, and came back with a better blueprint.
      </motion.p>
    </motion.section>
  );
}
