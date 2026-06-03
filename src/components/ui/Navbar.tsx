"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  {
    label: "Solutions",
    href: "#solutions",
    children: [
      { label: "Gestion financière", href: "#solutions" },
      { label: "Gestion RH & paie", href: "#solutions" },
      { label: "Gestion de production", href: "#solutions" },
      { label: "Reporting & pilotage", href: "#solutions" },
    ],
  },
  { label: "Secteurs", href: "#secteurs" },
  { label: "Trophées", href: "#trophees" },
  { label: "Événements", href: "#evenements" },
  { label: "Blog", href: "#blog" },
  { label: "À propos", href: "#chiffres" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-cta rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span
              className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              Thalès <span className={scrolled ? "text-cta" : "text-accent"}>Informatique</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 cursor-pointer ${
                    scrolled
                      ? "text-secondary hover:text-primary hover:bg-slate-50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>

                {/* Dropdown */}
                {link.children && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-border overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-secondary hover:text-primary hover:bg-slate-50 transition-colors duration-150 cursor-pointer"
                          >
                            {child.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className={`text-sm font-medium px-4 py-2 rounded-md transition-colors duration-200 cursor-pointer ${
                scrolled
                  ? "text-secondary hover:text-primary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Parler à un expert
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold px-4 py-2 bg-cta text-white rounded-lg hover:bg-cta-hover transition-colors duration-200 cursor-pointer shadow-sm"
            >
              Demander une démo
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-200 cursor-pointer ${
              scrolled ? "text-primary hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-secondary hover:text-primary hover:bg-slate-50 rounded-md transition-colors duration-150 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-border space-y-2">
                <a
                  href="#contact"
                  className="block w-full text-center text-sm font-semibold px-4 py-2.5 bg-cta text-white rounded-lg hover:bg-cta-hover transition-colors duration-200 cursor-pointer"
                >
                  Demander une démo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
