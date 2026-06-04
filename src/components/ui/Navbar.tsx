"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

type NavChild = { label: string; href: string };
type MegaItem = { label: string; sub: string; href: string };
type MegaColumn = { heading: string; items: MegaItem[] };
type FeaturedPanel = {
  badge: string;
  title: string;
  desc: string;
  cta: string;
  href: string;
};

type NavLink = {
  label: string;
  href: string;
  children?: NavChild[];
  megaMenu?: boolean;
  featured?: FeaturedPanel;
  columns?: MegaColumn[];
};

const navLinks: NavLink[] = [
  { label: "Accueil", href: "/" },
  {
    label: "Métiers",
    href: "/metiers",
    megaMenu: true,
    featured: {
      badge: "CONFORMITÉ MAROC",
      title: "NOS MÉTIERS",
      desc: "Des configurations adaptées pour simplifier vos processus métiers quotidiens.",
      cta: "VOIR LE HUB",
      href: "/metiers",
    },
    columns: [
      {
        heading: "FINANCE",
        items: [
          { label: "Comptabilité & Finance", sub: "Générale, analytique & budgétaire", href: "/metiers/comptabilite-finance" },
          { label: "États Comptables & Fiscaux", sub: "Liasse fiscale & EDI Simpl-IS", href: "/metiers/etats-comptables-fiscaux" },
          { label: "Expertise Comptable", sub: "Multi-dossiers & productivité", href: "/metiers/expertise-comptable" },
          { label: "Immobilisations", sub: "Amortissements & d'actifs", href: "/metiers/immobilisations" },
          { label: "Trésorerie", sub: "Liquidités & prévisions", href: "/metiers/tresorerie" },
          { label: "TVA", sub: "Taxe encaissements & débits", href: "/metiers/tva" },
        ],
      },
      {
        heading: "OPÉRATIONS & ERP",
        items: [
          { label: "ERP", sub: "Gestion flux intégrée PME", href: "/metiers/erp" },
          { label: "Gestion de Production", sub: "Nomenclatures & GPAO ateliers", href: "/metiers/gestion-production" },
          { label: "CRM", sub: "Relation client & support SAV", href: "/metiers/crm" },
          { label: "Reporting", sub: "Tableaux décisionnels Excel & BI", href: "/metiers/reporting" },
        ],
      },
      {
        heading: "RESSOURCES HUMAINES",
        items: [
          { label: "Paie & RH", sub: "Fiches payes & carrières", href: "/metiers/paie-rh" },
          { label: "Démat RH", sub: "Coffre-fort & dématérialisation", href: "/metiers/demat-rh" },
          { label: "Paie", sub: "Moteur fiscal IR & CNSS", href: "/metiers/paie" },
          { label: "SIRH", sub: "Compétences GPEC & formations", href: "/metiers/sirh" },
        ],
      },
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

function MegaMenu({ link }: { link: NavLink }) {
  if (!link.featured || !link.columns) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.15 }}
      className="fixed left-0 right-0 top-[64px] bg-white shadow-2xl border-t border-border z-50"
    >
      <div className="max-w-7xl mx-auto flex">
        {/* Featured panel */}
        <div className="w-64 shrink-0 bg-primary p-8 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-accent tracking-widest">{link.featured.badge}</span>
            <h3 className="text-white font-bold text-2xl mt-3 leading-tight">{link.featured.title}</h3>
            <p className="text-white/70 text-sm mt-3 leading-relaxed">{link.featured.desc}</p>
          </div>
          <Link
            href={link.featured.href}
            className="mt-6 flex items-center gap-2 text-accent text-sm font-bold hover:gap-3 transition-all duration-200"
          >
            {link.featured.cta} <ArrowRight size={14} />
          </Link>
        </div>

        {/* Columns */}
        <div className="flex-1 grid grid-cols-3 gap-0 p-8">
          {link.columns.map((col) => (
            <div key={col.heading} className="px-4 first:pl-0">
              <h4 className="text-xs font-bold text-cta tracking-widest mb-4">{col.heading}</h4>
              <ul className="space-y-1">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group block px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors duration-150"
                    >
                      <span className="block text-sm font-semibold text-primary group-hover:text-cta transition-colors duration-150">
                        {item.label}
                      </span>
                      <span className="block text-xs text-slate-400 mt-0.5">{item.sub}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

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
                onMouseEnter={() => (link.children || link.megaMenu) && setActiveDropdown(link.label)}
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
                  {(link.children || link.megaMenu) && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Mega Menu */}
                {link.megaMenu && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <MegaMenu link={link} />
                    )}
                  </AnimatePresence>
                )}

                {/* Regular Dropdown */}
                {link.children && !link.megaMenu && (
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
                  {link.megaMenu && link.columns && (
                    <div className="pl-4 space-y-1 mt-1">
                      {link.columns.map((col) =>
                        col.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-xs text-slate-500 hover:text-primary hover:bg-slate-50 rounded-md transition-colors duration-150 cursor-pointer"
                          >
                            {item.label}
                          </Link>
                        ))
                      )}
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
