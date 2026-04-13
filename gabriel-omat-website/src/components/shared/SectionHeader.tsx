import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      className="text-center mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl leading-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg font-medium max-w-2xl mx-auto leading-snug">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
