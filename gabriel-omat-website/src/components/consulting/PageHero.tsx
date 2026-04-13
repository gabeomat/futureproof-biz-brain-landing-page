import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PageHero() {
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
        Close the AI <span className="text-primary italic">Skill Gap</span>
      </motion.h1>
      <motion.p
        className="text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed"
        variants={childVariants}
      >
        I help organizations implement Claude Enterprise and get teams productive
        with AI — not just aware of it.
      </motion.p>
    </motion.section>
  );
}
