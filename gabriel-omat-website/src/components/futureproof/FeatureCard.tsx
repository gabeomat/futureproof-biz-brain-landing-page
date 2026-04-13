import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  index: number;
  image?: string;
  premium?: boolean;
}

export default function FeatureCard({ title, description, index, image, premium }: FeatureCardProps) {
  return (
    <motion.div
      className="border-hard p-6 bg-muted flex flex-col flex-1 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{
        y: -4,
        boxShadow: "4px 4px 0 hsl(200, 7%, 18%)",
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      {premium && (
        <span className="absolute top-3 right-3 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 border-hard">
          Premium
        </span>
      )}
      {image && (
        <div className="flex justify-center mb-4">
          <img
            src={image}
            alt={title}
            className="w-20 h-20 object-contain"
          />
        </div>
      )}
      <h4 className="font-bold uppercase text-base mb-2">{title}</h4>
      <p className="text-sm leading-snug">{description}</p>
    </motion.div>
  );
}
