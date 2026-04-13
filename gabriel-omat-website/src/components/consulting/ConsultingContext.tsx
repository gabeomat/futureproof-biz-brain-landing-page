import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const highlights = [
  {
    title: "Strategy",
    description:
      "Identify where AI creates the highest leverage in your specific operations. No generic playbooks.",
  },
  {
    title: "Implementation",
    description:
      "Custom AI workflow design for your team's actual processes — built in Claude Enterprise.",
  },
  {
    title: "Training",
    description:
      "Hands-on sessions where your people build real workflows, not watch slides about AI potential.",
  },
  {
    title: "Advisory",
    description:
      "Ongoing support as your team scales AI adoption. I stay in the loop until it sticks.",
  },
];

export default function ConsultingContext() {
  return (
    <section className="border-hard bg-white p-6 md:p-10">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Text column */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl leading-tight mb-4">
            Your Team is Chatting With AI. Not Building Systems That Save Time.
          </h2>
          <p className="text-sm font-medium leading-relaxed">
            Most organizations haven't even begun to tap into the power of AI.
            Team members might be chatting with it, but with Claude, each team
            member can save hours a week when they know how to use it properly.
          </p>
          <p className="text-sm font-medium leading-relaxed">
            I bridge that gap. With 28 years of corporate leadership experience
            and hands-on AI implementation expertise, I help organizations move
            from "we have AI" to "our team runs on AI."
          </p>
          <p className="text-sm font-medium leading-relaxed">
            My specialty is{" "}
            <strong>Claude Enterprise by Anthropic</strong> — the most capable
            AI platform for business teams. I design workflows, train teams, and
            build systems that make AI adoption stick.
          </p>
        </motion.div>

        {/* Highlight cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              className="border-hard bg-muted p-5"
              variants={itemVariants}
              whileHover={{
                y: -3,
                boxShadow: "4px 4px 0 hsl(200, 7%, 18%)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <h4 className="font-editorial text-lg mb-2">{item.title}</h4>
              <p className="text-xs font-bold leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
