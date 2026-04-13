import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stats = [
  { number: "7-Figure", label: "Previous Business Built" },
  { number: "28 Years", label: "Corporate Leadership" },
  { number: "AI-First", label: "Operating System" },
  { number: "Daily", label: "Practitioner — Not Just Teacher" },
];

export default function SocialProof() {
  return (
    <section className="border-hard bg-foreground text-white p-6 md:p-10">
      <SectionHeader
        title="The Track Record"
        subtitle="I've built, lost, and rebuilt — the hard way and the smart way."
      />

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className={`p-4 md:p-6 text-center ${
              idx < stats.length - 1 ? "border-r-0 md:border-r-2 border-white/20" : ""
            } ${idx < 2 ? "border-b-2 md:border-b-0 border-white/20" : ""}`}
            variants={statVariants}
          >
            <div className="font-editorial text-2xl sm:text-3xl md:text-4xl text-primary mb-2">
              {stat.number}
            </div>
            <div className="text-xs font-bold uppercase tracking-wider opacity-80">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
