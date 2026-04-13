import { motion } from "framer-motion";
import { Brain, Zap, Wrench } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cards = [
  {
    icon: Brain,
    title: "AI Business Brain",
    description:
      "One system that tracks your metrics, drafts your content, manages tasks, and runs strategic analysis. The operating system your business is missing.",
  },
  {
    icon: Zap,
    title: "5 Roles, One System",
    description:
      "Strategist, analyst, content creator, ops manager, research assistant. AI handles what you can't hire for — so you focus on what only you can do.",
  },
  {
    icon: Wrench,
    title: "Real Implementation",
    description:
      "No abstract frameworks or theory decks. I build live systems with you, train your team hands-on, and make sure AI actually sticks in your workflow.",
  },
];

export default function WhatIDo() {
  return (
    <section className="border-hard bg-muted p-6 md:p-10">
      <SectionHeader
        title="Built in Reality, Not Theory"
        subtitle="Everything I teach and implement, I use daily — while working a full-time corporate job."
      />

      <motion.div
        className="grid md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className="border-hard bg-white p-6 flex flex-col"
            variants={cardVariants}
            whileHover={{
              y: -4,
              boxShadow: "4px 4px 0 hsl(200, 7%, 18%)",
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
          >
            <card.icon className="w-8 h-8 text-primary mb-4" />
            <h4 className="font-editorial text-xl mb-3">{card.title}</h4>
            <p className="text-sm font-medium leading-relaxed">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
