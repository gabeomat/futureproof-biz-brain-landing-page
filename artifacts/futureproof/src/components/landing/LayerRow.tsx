import { motion } from "framer-motion";

interface LayerRowProps {
  num: string;
  title: string;
  icon: React.ReactNode;
  desc: string;
  index: number;
}

export default function LayerRow({ num, title, icon, desc, index }: LayerRowProps) {
  return (
    <motion.div
      className="group flex flex-1 last:border-b-0 bg-white border-b-2 border-foreground"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
    >
      <div className="w-20 md:w-28 flex flex-col items-center justify-center font-anton text-4xl md:text-5xl border-r-2 border-foreground bg-muted text-foreground group-hover:bg-primary group-hover:text-white transition-colors duration-200">
        {num}
      </div>
      <div className="flex-1 p-5 md:p-8 flex flex-col justify-center">
        <h3 className="font-anton text-2xl md:text-3xl uppercase flex items-center gap-2 mb-2">
          {icon} {title}
        </h3>
        <p className="text-sm md:text-base font-bold leading-snug">{desc}</p>
      </div>
    </motion.div>
  );
}
