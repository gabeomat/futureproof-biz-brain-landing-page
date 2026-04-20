import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cards = [
  {
    number: "01",
    title: "AI Business Brain",
    description:
      "One system that tracks your metrics, drafts your content, manages tasks, and runs strategic analysis. The operating system your business is missing.",
  },
  {
    number: "02",
    title: "Five roles, one system",
    description:
      "Strategist, analyst, content creator, ops manager, research assistant. AI handles what you can't hire for — so you focus on what only you can do.",
  },
  {
    number: "03",
    title: "Real implementation",
    description:
      "No abstract frameworks or theory decks. I build live systems with you, train your team hands-on, and make sure AI actually sticks in your workflow.",
  },
];

export default function WhatIDo() {
  return (
    <section className="on-cream bg-cream-deep rounded-[2rem] md:rounded-[3rem] px-8 md:px-16 py-16 md:py-24">
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-20 mb-14 md:mb-20 items-end">
        <div>
          <span className="eyebrow mb-5 text-ink-soft">
            <span className="rule-coral" aria-hidden />
            The Premise
          </span>
          <h2 className="display-sans text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95]">
            Built in reality,
            <br />
            <em>not theory.</em>
          </h2>
        </div>
        <p className="text-lg md:text-xl text-ink leading-relaxed font-light max-w-xl md:justify-self-end">
          I built this business with one team member: AI. Every system I teach,
          I&rsquo;m running live. If it holds up under that reality, it&rsquo;ll
          hold up under yours.
        </p>
      </div>

      <motion.div
        className="grid md:grid-cols-3 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cards.map((card, idx) => (
          <motion.article
            key={idx}
            variants={cardVariants}
            className="group relative p-8 md:p-10 bg-cream-soft rounded-[1.5rem] border border-ink/10 hover:border-anchor/40 transition-colors"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="font-serif italic text-3xl text-coral leading-none">{card.number}</span>
              <span className="h-px flex-1 bg-ink/20" />
            </div>
            <h3 className="display-sans text-2xl md:text-[1.75rem] leading-[1.05] mb-4 text-anchor">
              {card.title}
            </h3>
            <p className="text-[15px] text-ink-soft leading-relaxed">
              {card.description}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
