import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stats = [
  { number: "7-Figure", label: "Previous business built" },
  { number: "28 Years", label: "Corporate leadership" },
  { number: "AI-First", label: "Operating system" },
  { number: "Daily", label: "Practitioner, not just teacher" },
];

export default function SocialProof() {
  return (
    <section className="on-cream py-20 md:py-28 px-2 md:px-6">
      <div className="flex flex-col items-start md:items-center md:text-center mb-12 md:mb-16">
        <span className="eyebrow mb-5 text-ink-soft">
          <span className="rule-coral" aria-hidden />
          On the Record
        </span>
        <h2 className="display-sans text-4xl md:text-5xl lg:text-6xl leading-[0.95] max-w-3xl">
          The track record.
        </h2>
        <p className="mt-5 font-serif italic text-xl md:text-2xl text-anchor">
          Built, lost, and rebuilt — the hard way and the smart way.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-ink/15 border border-ink/15 rounded-[1.5rem] overflow-hidden bg-cream-soft"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="p-8 md:p-10 flex flex-col items-start gap-4"
            variants={statVariants}
          >
            <span className="eyebrow text-ink-soft">
              <span className="rule-coral" aria-hidden />
              No. {String(idx + 1).padStart(2, "0")}
            </span>
            <div className="display-sans text-3xl md:text-[2.5rem] leading-[0.95] text-anchor">
              {stat.number}
            </div>
            <div className="text-sm text-ink-soft leading-snug font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
