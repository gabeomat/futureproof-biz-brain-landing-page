import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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
    <header className="on-anchor bg-anchor text-cream sticky top-0 z-50 border-b border-anchor-soft">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-5 md:py-6">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="rule-coral" aria-hidden />
          <span className="font-serif italic text-2xl md:text-[1.65rem] leading-none tracking-tight">
            Gabriel Omat
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[11px] font-semibold uppercase tracking-[0.28em] transition-colors",
                "hover:text-coral",
                location === link.href ? "text-coral" : "text-cream/85",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/futureproof"
            className="inline-flex items-center gap-2 rounded-full bg-burnt hover:bg-[color:var(--color-burnt-deep)] text-cream px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors"
          >
            Join Futureproof
            <span aria-hidden>→</span>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1 text-cream"
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
            className="md:hidden overflow-hidden border-t border-anchor-soft bg-anchor-deep"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "text-xs font-semibold uppercase tracking-[0.28em]",
                    location === link.href ? "text-coral" : "text-cream/85",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/futureproof"
                onClick={() => setMobileOpen(false)}
                className="w-fit inline-flex items-center gap-2 rounded-full bg-burnt text-cream px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em]"
              >
                Join Futureproof
                <span aria-hidden>→</span>
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
