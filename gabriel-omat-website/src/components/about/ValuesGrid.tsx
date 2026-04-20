import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const values = [
  {
    number: "i.",
    title: "Built in reality",
    description:
      "Everything I teach, I run in my own business first. The Living Workspace powers my content, my ads, my email, my client delivery. If a system can't hold up in my world, it doesn't make it out to you.",
  },
  {
    number: "ii.",
    title: "Both sides of the table",
    description:
      "I've spent 28 years in corporate and 10 years as a business owner. I know first-hand how to use AI as leverage — whether you're working with a large team or a solopreneur business.",
  },
  {
    number: "iii.",
    title: "Reality over hype",
    description:
      "I don't chase the next shiny new thing. I focus on the things that actually matter — the things that result in a tangible ROI.",
  },
  {
    number: "iv.",
    title: "Integrity & transparency",
    description:
      "I'm not a guru. I'm a midlife woman business owner with a knack for understanding how AI works and how to make it work for you — without getting too deep in the tech.",
  },
];

export default function ValuesGrid() {
  return (
    <section className="on-cream bg-cream-deep rounded-[2rem] md:rounded-[3rem] px-8 md:px-16 py-16 md:py-24">
      <div className="flex flex-col items-start md:items-center md:text-center mb-12 md:mb-16">
        <span className="eyebrow mb-5 text-ink-soft">
          <span className="rule-coral" aria-hidden />
          The Credo
        </span>
        <h2 className="display-sans text-4xl md:text-5xl leading-[0.95] max-w-2xl">
          What I <em>stand for.</em>
        </h2>
      </div>

      <motion.div
        className="grid sm:grid-cols-2 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {values.map((value, idx) => (
          <motion.article
            key={idx}
            className="bg-cream-soft rounded-[1.5rem] p-8 md:p-10 border border-ink/10 hover:border-anchor/40 transition-colors"
            variants={cardVariants}
          >
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-serif italic text-3xl text-coral leading-none">{value.number}</span>
              <span className="h-px flex-1 bg-ink/15" />
            </div>
            <h4 className="display-sans text-2xl leading-[1.05] mb-3 text-anchor">
              {value.title}
            </h4>
            <p className="text-[15px] leading-relaxed text-ink-soft">
              {value.description}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
