import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";
import FeatureCard from "./FeatureCard";

const checklistVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const checklistItem = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const features = [
  {
    title: "Build Your Business Brain with Claude",
    desc: "A complete walkthrough to build your entire business brain inside Claude Cowork. 30 minutes a day for 5 days, or do it all at once and immediately experience the difference.",
    image: "/images/mascots/robot-1.png",
  },
  {
    title: "Become a Claude Power User",
    desc: "Learn how to navigate Claude to use and create skills, build your own interactive artifacts and create landing pages in minutes.",
    image: "/images/mascots/robot-2.png",
  },
  {
    title: "Build Your AI Dream Team",
    desc: "Take your business brain to the next level by implementing real AI team members that take the busy work off your plate. Get all of mine as I build them, plus learn to build your own.",
    premium: true,
    image: "/images/mascots/robot-3.png",
  },
  {
    title: "Bonus Trainings",
    desc: "A library of goodness categorized by type to help you level up your AI operations. New trainings added all the time so you're up to date on the things that matter.",
    image: "/images/mascots/robot-4.png",
  },
  {
    title: "Plug & Play",
    desc: "A curated library of Claude Skills, Custom GPTs, Artifacts, and vibe-coded apps that you can use, share with clients, or even customize and sell as your own.",
    premium: true,
    image: "/images/mascots/robot-5.png",
  },
  {
    title: "Live Q&A Calls",
    desc: "Share your question on the pinned Q&A thread and I answer them live every week. Replays with time stamps are always available.",
    image: "/images/mascots/robot-6.png",
  },
];

export default function SystemDefinition() {
  return (
    <div className="border-hard bg-white p-6 md:p-10 flex flex-col">
      <h2 className="font-anton text-4xl mb-6 leading-none pb-4 border-b-4 border-foreground">
        THE PROBLEM ISN'T ACCESS TO AI. <br /> IT'S THAT YOU DON'T HAVE A
        SYSTEM.
      </h2>

      <div className="text-sm font-bold leading-relaxed mb-8 space-y-4">
        <motion.div
          className="text-white p-6 uppercase text-base leading-loose bg-secondary"
          variants={checklistVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          A system that: <br />
          <motion.span
            className="flex items-center gap-3 mt-3"
            variants={checklistItem}
          >
            <CheckSquare className="w-5 h-5 flex-shrink-0 text-primary" /> Knows
            your business
          </motion.span>
          <motion.span
            className="flex items-center gap-3"
            variants={checklistItem}
          >
            <CheckSquare className="w-5 h-5 flex-shrink-0 text-primary" />{" "}
            Remembers what matters
          </motion.span>
          <motion.span
            className="flex items-center gap-3"
            variants={checklistItem}
          >
            <CheckSquare className="w-5 h-5 flex-shrink-0 text-primary" />{" "}
            Evolves as you evolve
          </motion.span>
          <motion.span
            className="flex items-center gap-3"
            variants={checklistItem}
          >
            <CheckSquare className="w-5 h-5 flex-shrink-0 text-primary" /> And
            actually does work for you
          </motion.span>
        </motion.div>

        <p className="text-lg uppercase">
          Right now, you're chatting with AI. The people pulling ahead have a
          real system. They built something that works with them. Every day.
        </p>
      </div>

      <h3 className="font-anton text-3xl mb-4 pt-6 border-t-2 border-foreground text-primary">
        WHAT'S INSIDE THE LAB
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
        {features.map((item, idx) => (
          <FeatureCard
            key={idx}
            title={item.title}
            description={item.desc}
            index={idx}
            image={item.image}
            premium={item.premium}
          />
        ))}
      </div>
    </div>
  );
}
