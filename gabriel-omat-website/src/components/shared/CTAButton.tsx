import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  pulse?: boolean;
  className?: string;
  type?: "button" | "submit";
}

/**
 * Dark Anchor Editorial CTA.
 *
 * - primary:   pill, burnt orange on cream or anchor backgrounds
 * - outline:   pill, transparent with 1px rule — used inside dark anchor sections
 *              or alongside a primary CTA as a quieter alternate
 * - secondary: deep anchor fill with cream text (occasional dark CTA on cream)
 */
export default function CTAButton({
  href,
  onClick,
  children,
  variant = "primary",
  pulse = false,
  className,
  type,
}: CTAButtonProps) {
  const variantClasses = {
    primary:
      "bg-burnt text-cream hover:bg-[color:var(--color-burnt-deep)]",
    secondary:
      "bg-anchor text-cream hover:bg-[color:var(--color-anchor-deep)]",
    outline:
      "bg-transparent border border-current hover:bg-current hover:text-anchor",
  }[variant];

  const sharedProps = {
    className: cn(
      "inline-flex items-center justify-center gap-2 rounded-full",
      "px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.12em]",
      "whitespace-nowrap cursor-pointer select-none",
      "transition-colors duration-200",
      variantClasses,
      className,
    ),
    whileHover: { y: -1 },
    whileTap: { y: 1 },
    animate: pulse ? { scale: [1, 1.03, 1] } : undefined,
    transition: pulse
      ? { scale: { repeat: Infinity, duration: 2.4, ease: "easeInOut" as const } }
      : undefined,
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener" : undefined}
        {...sharedProps}
      >
        {children}
        <span aria-hidden className="text-base leading-none">→</span>
      </motion.a>
    );
  }

  return (
    <motion.button type={type || "button"} onClick={onClick} {...sharedProps}>
      {children}
      <span aria-hidden className="text-base leading-none">→</span>
    </motion.button>
  );
}
