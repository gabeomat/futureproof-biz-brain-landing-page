import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const values = [
  {
    title: "Built in Reality",
    description:
      "Everything I teach, I use daily while working a full-time corporate job. If it holds up under those constraints, it'll hold up under yours.",
  },
  {
    title: "Both Sides of the Table",
    description:
      "28 years in corporate + 7-figure entrepreneur. I understand how individuals AND organizations adopt AI differently.",
  },
  {
    title: "Grit Over Hype",
    description:
      "I've been through the hard stuff. I lead with honesty, direct advice, and strategies that actually hold up under pressure.",
  },
  {
    title: "Implementation, Not Theory",
    description:
      "I don't do overviews and awareness decks. I build live systems, train hands-on, and make sure AI sticks in your workflow.",
  },
];

export default function ValuesGrid() {
  return (
    <section className="border-hard bg-muted p-6 md:p-10">
      <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl leading-tight mb-8 text-center">
        What I Stand For
      </h2>

      <motion.div
        className="grid sm:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {values.map((value, idx) => (
          <motion.div
            key={idx}
            className="border-hard bg-white p-6"
            variants={cardVariants}
            whileHover={{
              y: -4,
              boxShadow: "4px 4px 0 hsl(200, 7%, 18%)",
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
          >
            <h4 className="font-editorial text-lg mb-2">{value.title}</h4>
            <p className="text-xs font-bold leading-relaxed">{value.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
