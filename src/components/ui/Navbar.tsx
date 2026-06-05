"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

type NavLink = {
  label: string;
  href: string;
  heading?: string;
  children?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: "Accueil", href: "/" },
  {
    label: "Métiers",
    href: "/metiers",
    children: [
      { label: "Comptabilité & Finance", href: "/metiers/comptabilite-finance" },
      { label: "États Comptables & Fiscaux", href: "/metiers/etats-comptables-fiscaux" },
      { label: "Expertise Comptable", href: "/metiers/expertise-comptable" },
      { label: "Immobilisations", href: "/metiers/immobilisations" },
      { label: "Trésorerie", href: "/metiers/tresorerie" },
      { label: "TVA", href: "/metiers/tva" },
      { label: "ERP", href: "/metiers/erp" },
      { label: "Gestion de Production", href: "/metiers/gestion-production" },
      { label: "CRM", href: "/metiers/crm" },
      { label: "Reporting", href: "/metiers/reporting" },
      { label: "Paie & RH", href: "/metiers/paie-rh" },
      { label: "Démat RH", href: "/metiers/demat-rh" },
      { label: "Paie", href: "/metiers/paie" },
      { label: "SIRH", href: "/metiers/sirh" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Sage X3", href: "/solutions/sage-x3" },
      { label: "Sage 100", href: "/solutions/sage-100" },
      { label: "Sage FRP 1000", href: "/solutions/sage-frp-1000" },
      { label: "DimoMaint GMAO", href: "/solutions/dimomaint-gmao" },
      { label: "Eloficash", href: "/solutions/eloficash" },
      { label: "Factorial", href: "/solutions/factorial" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Audit & Conseil", href: "/services/audit-conseil" },
      { label: "Intégration ERP", href: "/services/integration-erp" },
      { label: "Formation Utilisateurs", href: "/services/formation-utilisateurs" },
      { label: "Support & Maintenance", href: "/services/support-maintenance" },
      { label: "Assistance Utilisateurs", href: "/services/assistance-utilisateurs" },
    ],
  },
  {
    label: "Secteurs",
    href: "/secteurs",
    heading: "VERTICALITÉ INDUSTRIELLE",
    children: [
      { label: "Industrie", href: "/secteurs/industrie" },
      { label: "Négoce & Distribution", href: "/secteurs/negoce-distribution" },
      { label: "Services", href: "/secteurs/services" },
      { label: "BTP", href: "/secteurs/btp" },
      { label: "Agroalimentaire", href: "/secteurs/agroalimentaire" },
    ],
  },
  {
    label: "Références",
    href: "/references",
    heading: "RÉFÉRENCES",
    children: [
      { label: "Nos Clients", href: "/references/clients" },
      { label: "Études de cas", href: "/references/etudes-de-cas" },
      { label: "Témoignages", href: "/references/temoignages" },
    ],
  },
  {
    label: "Ressources",
    href: "/ressources",
    heading: "DOSSIERS DOCUMENTAIRES",
    children: [
      { label: "Blog Décisionnel", href: "/ressources/blog" },
      { label: "Guides ERP", href: "/ressources/guides-erp" },
      { label: "Actualités", href: "/ressources/actualites" },
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

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
          <Link href="/" className="relative shrink-0 h-9 flex items-center">
            <img
              src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1772030743/logo_thal%C3%A8s_1_tkhzkc.png"
              alt="Thalès Informatique"
              className={`h-9 w-auto transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`}
            />
            <img
              src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1771338339/Logo_Thales_White_3_l4ut7h.png"
              alt="Thalès Informatique"
              className={`h-9 w-auto absolute inset-0 transition-opacity duration-300 ${scrolled ? "opacity-0" : "opacity-100"}`}
            />
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
                        className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-xl border border-border overflow-hidden"
                      >
                        {link.heading && (
                          <div className="px-4 pt-3 pb-1 text-[10px] font-bold text-cta uppercase tracking-widest">
                            {link.heading}
                          </div>
                        )}
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

      {/* Mobile Menu — fixed overlay so page doesn't scroll behind */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 top-16 z-40 bg-white overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-1 pb-24">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 text-sm font-semibold text-primary hover:text-cta hover:bg-slate-50 rounded-md transition-colors duration-150 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 space-y-0.5 mt-0.5 mb-2">
                      {link.heading && (
                        <div className="px-3 pt-1 pb-0.5 text-[10px] font-bold text-cta uppercase tracking-widest">
                          {link.heading}
                        </div>
                      )}
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 text-sm text-secondary hover:text-primary hover:bg-slate-50 rounded-md transition-colors duration-150 cursor-pointer"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center text-sm font-semibold px-4 py-3 bg-cta text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
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
