import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function PainPoints() {
  return (
    <motion.div
      className="p-6 md:p-12 md:w-1/3 text-white flex flex-col justify-center bg-foreground"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        className="font-anton text-4xl mb-6 leading-none text-primary"
        variants={itemVariants}
      >
        Sound familiar?
      </motion.h2>
      <div className="space-y-4 text-sm font-bold leading-tight">
        <motion.p variants={itemVariants}>
          You're using AI... but it doesn't feel like leverage.
        </motion.p>
        <motion.p variants={itemVariants}>
          It feels more like going down rabbit holes that waste your time.
        </motion.p>
        <motion.p variants={itemVariants}>
          You've got 87 chat threads in ChatGPT. Every new one = re-explaining
          your business. Your audience. Your offers. Your voice.
        </motion.p>
        <motion.p
          className="uppercase text-base text-brand-orange-light"
          variants={itemVariants}
        >
          So nothing compounds. Nothing sticks.
        </motion.p>
        <motion.p variants={itemVariants}>
          Maybe you upgraded to Custom GPTs. Better... but still broken. Because
          they're static.
        </motion.p>
        <motion.p variants={itemVariants}>
          Your "AI CMO" still thinks it's January. Old pricing. Old offers. Old
          messaging.
        </motion.p>
        <motion.p variants={itemVariants}>
          Every change in your business = manual updates. Docs, prompts,
          instructions... again and again.
        </motion.p>
        <motion.p
          className="uppercase text-base text-brand-orange-light"
          variants={itemVariants}
        >
          So instead of saving time, you're maintaining AI.
        </motion.p>
      </div>
    </motion.div>
  );
}
