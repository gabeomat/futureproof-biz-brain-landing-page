import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What exactly is an AI Business Brain?",
    answer:
      "It's a structured AI system that knows your business, remembers context, and executes tasks — not just another chatbot. Think of it as your AI operating system.",
  },
  {
    question: "Do I need a technical background?",
    answer:
      "Not at all. Everything is plug-and-play. If you can copy-paste and follow along, you can build your AI Brain.",
  },
  {
    question: "Which AI tools do I need?",
    answer:
      "A Claude Pro account ($20/mo). Everything else is optional.",
  },
  {
    question: "How is this different from other AI courses?",
    answer:
      "OMG, where do I start? \u{1F923} Most AI programs teach you how to use various tools but they don't teach you how to build a system that actually works for your business and saves you hours a week. Static courses quickly become irrelevant as AI changes almost daily. In Futureproof, you're evolving as AI evolves. In real time, with live support. We don't just learn. We implement. Plus you'll never find another program generous enough to give you all the plug and play tools (white label included) to do with as you choose at this price point.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. No contracts, no commitments. Cancel anytime from your account dashboard. But fair warning — once you see what your AI Brain can do, you won't want to.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most members build their first working AI Brain within the 5-day challenge. Real business impact — like saving 10-20 hours per week — typically kicks in within 2-3 weeks.",
  },
];

export default function FAQSection() {
  return (
    <section className="border-hard bg-white p-6 md:p-10">
      <h2 className="font-anton text-4xl mb-6 leading-none pb-4 border-b-4 border-foreground">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, idx) => (
          <AccordionItem
            key={idx}
            value={`item-${idx}`}
            className="border-hard border-b-0 last:border-b-0 [&:not(:last-child)]:mb-2"
          >
            <AccordionTrigger className="font-anton text-xl uppercase p-4 hover:bg-muted transition-colors hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-sm font-bold leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
