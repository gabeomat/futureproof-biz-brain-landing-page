import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "cream" | "anchor";
  className?: string;
}

/**
 * Editorial section header.
 *
 * Renders an optional eyebrow with a short coral rule, a display headline
 * that mixes Manrope ExtraBold and Instrument Serif italic (drive the mix
 * by wrapping the italic fragment in <em>…</em> inside `title`… or by
 * passing a plain string which will render all-sans).
 *
 * `tone` switches the ink color so the component works on cream or anchor.
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "cream",
  className,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const toneClass = tone === "anchor" ? "on-anchor text-cream" : "on-cream text-ink";

  return (
    <motion.div
      className={cn("flex flex-col mb-10 md:mb-14", alignClass, toneClass, className)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && (
        <span className="eyebrow mb-5 opacity-90">
          <span className="rule-coral" aria-hidden />
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          "display-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95]",
          "max-w-3xl",
          align === "center" && "mx-auto",
        )}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base md:text-lg font-normal max-w-2xl leading-relaxed",
            tone === "anchor" ? "text-cream/75" : "text-ink-soft",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
