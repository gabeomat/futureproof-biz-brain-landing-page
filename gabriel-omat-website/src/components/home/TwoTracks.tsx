import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import CTAButton from "@/components/shared/CTAButton";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const offers = [
  {
    tag: "For Service Providers",
    title: "Futureproof — The Evolution Lab",
    description:
      "A membership community where coaches, consultants, and service providers learn to build AI-powered businesses. Weekly trainings, real tools, and a system that does the work of 5 roles you can't afford to hire.",
    features: [
      "Build an AI Business Brain that knows your metrics, strategy, and voice",
      "Hire an AI Dream Team — content, strategy, ops, research, all automated",
      "Weekly live trainings + replays with real implementation",
      "Community of builders who actually ship",
    ],
    cta: { label: "Join the Lab — $27/mo", href: "/futureproof" },
    highlighted: true,
  },
  {
    tag: "For Organizations",
    title: "AI Consulting — Claude Enterprise",
    description:
      "I help organizations close the AI skill gap by implementing Claude Enterprise across teams. From strategy to hands-on training, I get your people productive with AI — not just aware of it.",
    features: [
      "Claude Enterprise implementation and team onboarding",
      "Custom AI workflow design for your specific operations",
      "Hands-on training that sticks (not another AI overview)",
      "Ongoing advisory for AI adoption at scale",
    ],
    cta: { label: "Inquire About Consulting", href: "/consulting" },
    highlighted: false,
  },
];

export default function TwoTracks() {
  return (
    <section>
      <SectionHeader
        title="Two Ways I Can Help"
        subtitle="Whether you're a solopreneur building smarter or an organization adopting AI at scale — I meet you where you are."
      />

      <motion.div
        className="grid md:grid-cols-2 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {offers.map((offer, idx) => (
          <motion.div
            key={idx}
            className={`border-hard bg-white p-6 md:p-8 flex flex-col ${
              offer.highlighted ? "border-4 border-primary" : ""
            }`}
            variants={cardVariants}
            whileHover={{
              y: -4,
              boxShadow: "6px 6px 0 hsl(200, 7%, 18%)",
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
          >
            <span
              className={`inline-block self-start border-hard px-3 py-1 text-white text-[10px] font-bold uppercase tracking-wider mb-4 ${
                offer.highlighted ? "bg-primary" : "bg-secondary"
              }`}
            >
              {offer.tag}
            </span>

            <h3 className="font-editorial text-2xl md:text-3xl mb-3 leading-tight">
              {offer.title}
            </h3>
            <p className="text-sm font-medium leading-relaxed mb-6">
              {offer.description}
            </p>

            <div className="space-y-3 flex-1 mb-6">
              {offer.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-start gap-3">
                  <CheckSquare className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                  <span className="text-sm font-bold leading-snug">{feature}</span>
                </div>
              ))}
            </div>

            <CTAButton
              href={offer.cta.href}
              variant={offer.highlighted ? "primary" : "outline"}
              className="text-sm px-6 py-3 self-start"
            >
              {offer.cta.label}
            </CTAButton>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
