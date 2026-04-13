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
    variant === "primary" ? "bg-primary text-white" : "bg-foreground text-white";

  return (
    <motion.a
      href={href}
      className={cn(
        variantClasses,
        "border-hard font-anton uppercase tracking-widest hover:opacity-90 transition-opacity inline-block text-center",
        className
      )}
      style={{ boxShadow: "4px 4px 0 hsl(var(--foreground))" }}
      whileHover={{
        y: -2,
        boxShadow: "6px 6px 0 hsl(var(--foreground))",
      }}
      whileTap={{
        y: 2,
        boxShadow: "0px 0px 0 hsl(var(--foreground))",
      }}
      animate={
        pulse
          ? {
              scale: [1, 1.02, 1],
            }
          : undefined
      }
      transition={
        pulse
          ? {
              scale: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              },
            }
          : undefined
      }
    >
      {children}
    </motion.a>
  );
}
