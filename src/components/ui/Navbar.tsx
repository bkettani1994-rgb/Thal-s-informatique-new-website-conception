"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "/" },
  {
    label: "Métiers",
    href: "/metiers",
    children: [
      { label: "Gestion financière & comptable", href: "/metiers/gestion-financiere" },
      { label: "Gestion RH & paie", href: "/metiers/gestion-rh-paie" },
      { label: "Gestion de production", href: "/metiers/gestion-production" },
      { label: "Gestion commerciale & CRM", href: "/metiers/gestion-commerciale" },
      { label: "Gestion des achats", href: "/metiers/gestion-achats" },
      { label: "Reporting & pilotage", href: "/metiers/reporting-pilotage" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "ERP intégré", href: "/solutions/erp-integre" },
      { label: "Solution Cloud", href: "/solutions/cloud" },
      { label: "Solution On-Premise", href: "/solutions/on-premise" },
      { label: "Application mobile", href: "/solutions/application-mobile" },
      { label: "Business Intelligence", href: "/solutions/business-intelligence" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Conseil & audit", href: "/services/conseil-audit" },
      { label: "Implémentation ERP", href: "/services/implementation" },
      { label: "Migration de données", href: "/services/migration" },
      { label: "Formation & support", href: "/services/formation-support" },
      { label: "Maintenance applicative", href: "/services/maintenance" },
      { label: "Cloud & hébergement", href: "/services/cloud-hebergement" },
    ],
  },
  {
    label: "Secteurs",
    href: "/secteurs",
    children: [
      { label: "Industrie", href: "/secteurs/industrie" },
      { label: "Négoce & Distribution", href: "/secteurs/negoce-distribution" },
      { label: "Services & Conseil", href: "/secteurs/services-conseil" },
      { label: "BTP & Construction", href: "/secteurs/btp-construction" },
      { label: "Agroalimentaire", href: "/secteurs/agroalimentaire" },
    ],
  },
  {
    label: "Références",
    href: "/references",
    children: [
      { label: "Témoignages clients", href: "/references/temoignages" },
      { label: "Études de cas", href: "/references/etudes-de-cas" },
      { label: "Trophées & distinctions", href: "/trophees" },
      { label: "Nos partenaires", href: "/references/partenaires" },
    ],
  },
  {
    label: "Ressources",
    href: "/ressources",
    children: [
      { label: "Blog & actualités", href: "/blog" },
      { label: "Webinaires & événements", href: "/evenements" },
      { label: "Livres blancs", href: "/ressources/livres-blancs" },
      { label: "Documentation", href: "/ressources/documentation" },
      { label: "FAQ", href: "/ressources/faq" },
    ],
  },
  { label: "Contact", href: "/contact" },
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
          <Link href="/" className="flex items-center gap-2 shrink-0">
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
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
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
                </Link>

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
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-secondary hover:text-primary hover:bg-slate-50 transition-colors duration-150 cursor-pointer"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm font-semibold px-5 py-2.5 bg-cta text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer shadow-sm"
            >
              Demander une démo
            </Link>
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
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 text-sm font-medium text-secondary hover:text-primary hover:bg-slate-50 rounded-md transition-colors duration-150 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 space-y-1 mt-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 text-xs text-slate-500 hover:text-primary hover:bg-slate-50 rounded-md transition-colors duration-150 cursor-pointer"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-border space-y-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center text-sm font-semibold px-4 py-2.5 bg-cta text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
                >
                  Demander une démo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
