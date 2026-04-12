import { motion } from "framer-motion";

export default function ClassroomImage() {
  return (
    <motion.section
      className="border-hard overflow-hidden"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img
        src="/images/classroom.png"
        alt="Inside The Evolution Lab"
        className="w-full object-cover max-h-[480px]"
        loading="lazy"
        decoding="async"
      />
    </motion.section>
  );
}
