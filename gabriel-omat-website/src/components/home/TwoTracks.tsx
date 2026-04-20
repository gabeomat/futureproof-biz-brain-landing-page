import { motion } from "framer-motion";
import CTAButton from "@/components/shared/CTAButton";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const offers = [
  {
    number: "I.",
    tag: "For Service Providers",
    title: "Futureproof",
    subtitle: "The Evolution Lab",
    description:
      "A membership where coaches, consultants, and service providers learn to build AI-powered businesses. Weekly trainings, real tools, a system that does the work of 5 roles you can't afford to hire.",
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
    number: "II.",
    tag: "For Organizations",
    title: "AI Consulting",
    subtitle: "Claude Enterprise",
    description:
      "I help organizations close the AI skill gap by implementing Claude Enterprise across teams. From strategy to hands-on training, I get your people productive with AI — not just aware of it.",
    features: [
      "Claude Enterprise implementation and team onboarding",
      "Custom AI workflow design for your specific operations",
      "Hands-on training that sticks, not another AI overview",
      "Ongoing advisory for AI adoption at scale",
    ],
    cta: { label: "Inquire About Consulting", href: "/consulting" },
    highlighted: false,
  },
];

export default function TwoTracks() {
  return (
    <section className="on-cream py-20 md:py-28 px-2 md:px-6">
      <div className="flex flex-col items-start mb-14 md:mb-20">
        <span className="eyebrow mb-5 text-ink-soft">
          <span className="rule-coral" aria-hidden />
          The Two Paths
        </span>
        <h2 className="display-sans text-4xl md:text-5xl lg:text-6xl leading-[0.95] max-w-3xl">
          Two ways <em>I can help.</em>
        </h2>
        <p className="mt-5 text-base md:text-lg text-ink-soft max-w-2xl leading-relaxed">
          Whether you&rsquo;re a solopreneur building smarter or an organization
          adopting AI at scale — I meet you where you are.
        </p>
      </div>

      <motion.div
        className="grid md:grid-cols-2 gap-6 md:gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {offers.map((offer, idx) => (
          <motion.article
            key={idx}
            variants={cardVariants}
            className={`relative flex flex-col p-8 md:p-10 rounded-[1.75rem] border transition-colors ${
              offer.highlighted
                ? "bg-anchor text-cream border-anchor on-anchor"
                : "bg-cream-soft text-ink border-ink/15 on-cream hover:border-ink/30"
            }`}
          >
            <div className="flex items-baseline justify-between mb-8">
              <span
                className={`font-serif italic text-4xl leading-none ${
                  offer.highlighted ? "text-coral" : "text-anchor"
                }`}
              >
                {offer.number}
              </span>
              <span
                className={`eyebrow ${
                  offer.highlighted ? "text-cream/80" : "text-ink-soft"
                }`}
              >
                <span className="rule-coral" aria-hidden />
                {offer.tag}
              </span>
            </div>

            <h3 className="display-sans text-3xl md:text-4xl leading-[1] mb-1">
              {offer.title}
            </h3>
            <p
              className={`font-serif italic text-xl md:text-2xl mb-6 ${
                offer.highlighted ? "text-coral" : "text-anchor"
              }`}
            >
              {offer.subtitle}
            </p>

            <p
              className={`text-[15px] leading-relaxed mb-8 ${
                offer.highlighted ? "text-cream/80" : "text-ink-soft"
              }`}
            >
              {offer.description}
            </p>

            <ul className="space-y-3 flex-1 mb-10">
              {offer.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3 text-[14px] leading-snug">
                  <span
                    className={`mt-[0.55rem] h-px w-5 flex-shrink-0 ${
                      offer.highlighted ? "bg-coral" : "bg-anchor"
                    }`}
                  />
                  <span className={offer.highlighted ? "text-cream/90" : "text-ink"}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div>
              <CTAButton
                href={offer.cta.href}
                variant={offer.highlighted ? "primary" : "secondary"}
                className="self-start"
              >
                {offer.cta.label}
              </CTAButton>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
