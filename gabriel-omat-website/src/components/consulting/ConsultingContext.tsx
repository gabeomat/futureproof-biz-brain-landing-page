import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const highlights = [
  {
    number: "01",
    title: "Strategy",
    description:
      "Identify where AI creates the highest leverage in your specific operations. No generic playbooks.",
  },
  {
    number: "02",
    title: "Implementation",
    description:
      "Custom AI workflow design for your team's actual processes — built in Claude Enterprise.",
  },
  {
    number: "03",
    title: "Training",
    description:
      "Hands-on sessions where your people build real workflows, not watch slides about AI potential.",
  },
  {
    number: "04",
    title: "Advisory",
    description:
      "Ongoing support as your team scales AI adoption. I stay in the loop until it sticks.",
  },
];

export default function ConsultingContext() {
  return (
    <section className="on-cream py-20 md:py-28 px-2 md:px-6">
      <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-20">
        {/* Editorial column */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow text-ink-soft">
            <span className="rule-coral" aria-hidden />
            The Gap
          </span>
          <h2 className="display-sans text-4xl md:text-5xl leading-[0.95]">
            Your team is chatting with AI. Not <em>building systems</em> that save time.
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-ink-soft">
            Most organizations haven&rsquo;t even begun to tap into the power of
            AI. Team members might be chatting with it, but with Claude, each
            team member can save hours a week when they know how to use it
            properly.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-ink-soft">
            I bridge that gap. With 28 years of corporate leadership experience
            and hands-on AI implementation expertise, I help organizations move
            from &ldquo;we have AI&rdquo; to &ldquo;our team runs on AI.&rdquo;
          </p>
          <p className="text-base md:text-lg leading-relaxed text-ink-soft">
            My specialty is{" "}
            <strong className="font-semibold text-anchor">Claude Enterprise by Anthropic</strong>
            {" "}— the most capable AI platform for business teams. I design
            workflows, train teams, and build systems that make AI adoption
            stick.
          </p>
        </motion.div>

        {/* Highlight cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {highlights.map((item, idx) => (
            <motion.article
              key={idx}
              className="bg-cream-deep rounded-[1.25rem] p-7 md:p-8 border border-ink/10 hover:border-anchor/40 transition-colors"
              variants={itemVariants}
            >
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-serif italic text-2xl text-coral leading-none">
                  {item.number}
                </span>
                <span className="h-px flex-1 bg-ink/15" />
              </div>
              <h4 className="display-sans text-xl leading-tight mb-3 text-anchor">
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed text-ink-soft">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
