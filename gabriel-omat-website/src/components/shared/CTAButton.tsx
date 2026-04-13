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
    primary: "bg-primary text-white",
    secondary: "bg-foreground text-white",
    outline: "bg-white text-foreground",
  }[variant];

  const sharedProps = {
    className: cn(
      variantClasses,
      "border-hard font-editorial tracking-wide hover:opacity-90 transition-opacity inline-block text-center cursor-pointer",
      className,
    ),
    style: { boxShadow: "4px 4px 0 hsl(var(--foreground))" } as React.CSSProperties,
    whileHover: {
      y: -2,
      boxShadow: "6px 6px 0 hsl(var(--foreground))",
    },
    whileTap: {
      y: 2,
      boxShadow: "0px 0px 0 hsl(var(--foreground))",
    },
    animate: pulse ? { scale: [1, 1.02, 1] } : undefined,
    transition: pulse
      ? { scale: { repeat: Infinity, duration: 2, ease: "easeInOut" as const } }
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
      </motion.a>
    );
  }

  return (
    <motion.button type={type || "button"} onClick={onClick} {...sharedProps}>
      {children}
    </motion.button>
  );
}
