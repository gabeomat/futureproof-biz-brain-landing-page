import { motion } from "framer-motion";
import { Brain, Layers, Database, Workflow, Play } from "lucide-react";
import LayerRow from "./LayerRow";

const layers = [
  {
    num: "01",
    title: "The AI Engine",
    icon: <Brain className="w-5 h-5" />,
    desc: "The AI model itself. Pick your favorite. This is the raw horsepower, but without the right system, a brilliant engine sits idle. Today we use Claude because it supports the rest of the layers beautifully.",
  },
  {
    num: "02",
    title: "Context",
    icon: <Layers className="w-5 h-5" />,
    desc: "Where most people stop. This is the uploaded documents, the info you feed it. But static context isn't enough to pivot your messaging when things change.",
  },
  {
    num: "03",
    title: "Memory",
    icon: <Database className="w-5 h-5" />,
    desc: "Your single source of truth. This layer lives, evolves, and changes with your business. It remembers past launches so you don't have to repeat yourself.",
  },
  {
    num: "04",
    title: "Execution & Workflows",
    icon: <Workflow className="w-5 h-5" />,
    desc: "Not a generic list of skills. Your specific workflows. Imagine having a scout that researches your niche, and knows your business. Then they create your Instagram content for the week, images & reels included, while you sleep.",
  },
  {
    num: "05",
    title: "Automation",
    icon: <Play className="w-5 h-5" />,
    desc: "Scheduled tasks. An automated pulse hits your inbox at 5 AM. Metric analysis and drafted check-ins prepared for you before you even open your laptop.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function FiveLayers() {
  return (
    <div className="border-hard bg-white p-0 flex flex-col">
      <div className="p-6 md:p-10 text-white border-b-4 border-foreground bg-primary">
        <h2 className="font-anton text-3xl sm:text-4xl md:text-5xl leading-none mb-4">
          THE 5 LAYERS OF AN AI-POWERED BUSINESS
        </h2>
        <div className="text-sm font-bold leading-tight space-y-2">
          <p>
            Here's the part most people miss: Tools will change. They always do.
            New models. New apps. New features every week.
          </p>
          <p>
            If you build your business around tools... you'll always feel behind.
            But this? This doesn't change. These 5 layers are the structure
            underneath everything.
          </p>
          <p>
            No matter what happens to ChatGPT, Claude, Gemini, or whatever comes
            next... this is how an AI-powered business actually works.
          </p>
          <p className="mt-4 pt-4 uppercase border-t-2 border-white/30">
            What we're building here is a wrapper around the models. Not just
            using AI... but creating a system that: plugs into any model, evolves
            as tools evolve, and keeps your business consistent underneath it
            all.
          </p>
        </div>
      </div>

      <motion.div
        className="flex-1 flex flex-col"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {layers.map((layer, idx) => (
          <LayerRow
            key={idx}
            num={layer.num}
            title={layer.title}
            icon={layer.icon}
            desc={layer.desc}
            index={idx}
          />
        ))}
      </motion.div>
    </div>
  );
}
