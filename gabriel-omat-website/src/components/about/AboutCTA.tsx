import { motion } from "framer-motion";
import CTAButton from "@/components/shared/CTAButton";

export default function AboutCTA() {
  return (
    <motion.section
      className="border-hard bg-secondary text-white p-8 md:p-14 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl leading-tight mb-4 max-w-3xl mx-auto">
        Ready to Build the System Your Business Is Missing?
      </h2>
      <p className="text-sm md:text-base font-medium mb-8 max-w-xl mx-auto opacity-90">
        Whether you're a solopreneur or leading a team — I can help you work
        with AI, not just talk about it.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <CTAButton
          href="/futureproof"
          variant="primary"
          className="text-sm sm:text-base px-6 py-3"
        >
          Join Futureproof
        </CTAButton>
        <CTAButton
          href="/consulting"
          variant="outline"
          className="text-sm sm:text-base px-6 py-3"
        >
          Consulting Inquiry
        </CTAButton>
      </div>
    </motion.section>
  );
}
