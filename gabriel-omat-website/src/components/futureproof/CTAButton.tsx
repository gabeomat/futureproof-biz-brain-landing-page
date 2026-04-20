import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  pulse?: boolean;
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  pulse = false,
  className,
}: CTAButtonProps) {
  const variantClasses =
    variant === "primary"
      ? "bg-burnt text-cream hover:bg-[color:var(--color-burnt-deep)]"
      : "bg-anchor text-cream hover:bg-[color:var(--color-anchor-deep)]";

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener" : undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5",
        "text-[13px] font-bold uppercase tracking-[0.12em] whitespace-nowrap",
        "transition-colors duration-200",
        variantClasses,
        className,
      )}
      whileHover={{ y: -1 }}
      whileTap={{ y: 1 }}
      animate={pulse ? { scale: [1, 1.03, 1] } : undefined}
      transition={
        pulse
          ? { scale: { repeat: Infinity, duration: 2.4, ease: "easeInOut" } }
          : undefined
      }
    >
      {children}
      <span aria-hidden className="text-base leading-none">→</span>
    </motion.a>
  );
}
