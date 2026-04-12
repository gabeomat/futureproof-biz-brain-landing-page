import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";
import CTAButton from "./CTAButton";

const plans = [
  {
    name: "Standard",
    price: "$27",
    period: "/month",
    features: [
      "Claude Power User Course",
      "Build Your Business Brain Challenge",
      "Ongoing New Trainings: because AI moves fast",
      "How to Build Client Facing AI Tools",
      "Weekly Live Calls + Community of Innovators",
    ],
  },
  {
    name: "Premium",
    price: "$47",
    period: "/month",
    highlighted: true,
    features: [
      "Everything in Standard Plus...",
      "Build Your AI Dream Team - get mine & learn how to make your own",
      "Resell & Share Rights for all Plug & Plays",
      "Plug & Play Claude Skills & Custom GPTs",
      "Plug & Play Apps & Landing Pages",
      "New Plug & Plays added each month",
    ],
  },
  {
    name: "VIP",
    price: "$333",
    period: "/year",
    features: [
      "A Full Year of Premium @ a 40% savings off the monthly price.",
    ],
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PricingSection() {
  return (
    <motion.section
      className="border-hard bg-white p-6 md:p-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-anton text-3xl sm:text-5xl md:text-6xl leading-none mb-2 text-center">
        CHOOSE YOUR PLAN
      </h2>
      <p className="text-center text-sm font-bold uppercase mb-8 text-secondary">
        Cancel anytime. Zero risk.
      </p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            className={`border-hard p-6 md:p-8 flex flex-col ${
              plan.highlighted
                ? "bg-foreground text-white border-primary border-4"
                : "bg-white"
            }`}
            variants={cardVariants}
            whileHover={{
              y: -6,
              boxShadow: "6px 6px 0 hsl(200, 7%, 18%)",
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
          >
            {plan.highlighted && (
              <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 border-hard self-start mb-4">
                Most Popular
              </span>
            )}
            <div className="mb-6">
              <span className="font-anton text-4xl sm:text-5xl md:text-6xl">
                {plan.price}
              </span>
              <span className="text-lg font-bold">{plan.period}</span>
            </div>
            <h3
              className={`font-anton text-2xl mb-6 pb-4 ${
                plan.highlighted
                  ? "border-b-2 border-white/30"
                  : "border-b-2 border-foreground"
              }`}
            >
              {plan.name}
            </h3>

            <div className="space-y-3 flex-1">
              {plan.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-start gap-3">
                  <CheckSquare
                    className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? "text-primary" : "text-primary"
                    }`}
                  />
                  <span className="text-sm font-bold leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center">
        <CTAButton
          href="https://www.skool.com/futureproof-the-evolution-lab/plans"
          variant="primary"
          pulse
          className="text-base sm:text-xl md:text-2xl px-6 sm:px-12 py-3 sm:py-5"
        >
          Join The Lab Now
        </CTAButton>
      </div>
    </motion.section>
  );
}
