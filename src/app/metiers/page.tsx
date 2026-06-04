"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const financeItems = [
  { label: "Comptabilité & Finance", sub: "Générale, analytique & budgétaire", href: "/metiers/comptabilite-finance" },
  { label: "États Comptables & Fiscaux", sub: "Liasse fiscale & EDI Simpl-IS", href: "/metiers/etats-comptables-fiscaux" },
  { label: "Expertise Comptable", sub: "Multi-dossiers & productivité", href: "/metiers/expertise-comptable" },
  { label: "Immobilisations", sub: "Amortissements & d'actifs", href: "/metiers/immobilisations" },
  { label: "Trésorerie", sub: "Liquidités & prévisions", href: "/metiers/tresorerie" },
  { label: "TVA", sub: "Taxe encaissements & débits", href: "/metiers/tva" },
];

const opsItems = [
  { label: "ERP", sub: "Gestion flux intégrée PME", href: "/metiers/erp" },
  { label: "Gestion de Production", sub: "Nomenclatures & GPAO ateliers", href: "/metiers/gestion-production" },
  { label: "CRM", sub: "Relation client & support SAV", href: "/metiers/crm" },
  { label: "Reporting", sub: "Tableaux décisionnels Excel & BI", href: "/metiers/reporting" },
];

const rhItems = [
  { label: "Paie & RH", sub: "Fiches payes & carrières", href: "/metiers/paie-rh" },
  { label: "Dématérialisation RH", sub: "Coffre-fort & dématérialisation", href: "/metiers/demat-rh" },
  { label: "Paie", sub: "Moteur fiscal IR & CNSS", href: "/metiers/paie" },
  { label: "SIRH", sub: "Compétences GPEC & formations", href: "/metiers/sirh" },
];

function CategorySection({ title, items, color }: { title: string; items: typeof financeItems; color: string }) {
  return (
    <motion.section className="py-16" {...fadeUp}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-xs font-bold tracking-widest mb-2 ${color}`}>{title}</h2>
        <div className="w-12 h-1 bg-cta mb-8 rounded-full" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group p-6 bg-white border border-border rounded-xl hover:shadow-lg hover:border-cta/30 transition-all duration-200"
            >
              <h3 className="font-semibold text-primary group-hover:text-cta transition-colors duration-150">{item.label}</h3>
              <p className="text-sm text-slate-400 mt-1">{item.sub}</p>
              <span className="mt-4 flex items-center gap-1 text-cta text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                Découvrir <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default function MetiersHub() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp}>
              <nav className="text-sm text-white/50 mb-6 flex items-center gap-2">
                <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                <span>/</span>
                <span className="text-accent">Métiers</span>
              </nav>
              <span className="text-xs font-bold text-accent tracking-widest">CONFORMITÉ MAROC</span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3">Nos Métiers</h1>
              <p className="text-white/70 text-lg mt-4 max-w-2xl">
                Thalès Informatique propose des modules métiers 100&nbsp;% adaptés aux spécificités légales et fiscales marocaines pour accompagner la croissance de votre entreprise.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="bg-bg">
          <CategorySection title="FINANCE" items={financeItems} color="text-cta" />
          <div className="border-t border-border" />
          <CategorySection title="OPÉRATIONS & ERP" items={opsItems} color="text-cta" />
          <div className="border-t border-border" />
          <CategorySection title="RESSOURCES HUMAINES" items={rhItems} color="text-cta" />
        </div>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl font-bold text-white">Prêt à transformer vos processus&nbsp;?</h2>
              <p className="text-white/70 mt-4">Demandez une démonstration personnalisée avec un expert Thalès Informatique.</p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Demander une démo <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
