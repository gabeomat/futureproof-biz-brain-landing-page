import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import CTAButton from "@/components/shared/CTAButton";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Consulting", href: "/consulting" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="border-b-[4px] md:border-b-[8px] border-foreground bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-3 md:py-4">
        <Link href="/" className="font-editorial text-xl md:text-2xl tracking-tight">
          Gabriel Omat
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors",
                location === link.href && "text-primary",
              )}
            >
              {link.label}
            </Link>
          ))}
          <CTAButton
            href="/futureproof"
            variant="primary"
            className="text-xs px-4 py-2"
          >
            Join Futureproof
          </CTAButton>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t-2 border-foreground bg-white"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "text-sm font-bold uppercase tracking-wider",
                    location === link.href && "text-primary",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <CTAButton
                href="/futureproof"
                variant="primary"
                className="text-sm px-4 py-2 w-fit"
              >
                Join Futureproof
              </CTAButton>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
