"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, Layers, Clock, Eye } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const modules = [
  { label: "Finance & Comptabilité", href: "/metiers/comptabilite-finance" },
  { label: "Achats & Fournisseurs", href: "/metiers/erp" },
  { label: "Ventes & CRM", href: "/metiers/crm" },
  { label: "Production & GPAO", href: "/metiers/gestion-production" },
  { label: "Stocks & Logistique", href: "/metiers/erp" },
  { label: "Paie & Ressources Humaines", href: "/metiers/paie-rh" },
  { label: "Reporting & Décisionnel", href: "/metiers/reporting" },
  { label: "Immobilisations", href: "/metiers/immobilisations" },
];

const benefits = [
  { icon: Layers, title: "Une seule vérité", desc: "Toutes vos données partagées entre les départements — plus de doublons, plus de ressaisies." },
  { icon: Clock, title: "Gain de temps", desc: "L'automatisation des flux inter-modules réduit le temps administratif de 40% en moyenne." },
  { icon: Eye, title: "Vision 360°", desc: "Un tableau de bord unique pour piloter l'intégralité de votre activité en temps réel." },
];

export default function ErpClient() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp}>
              <nav className="text-sm text-white/50 mb-6 flex items-center gap-2">
                <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                <span>/</span>
                <Link href="/metiers" className="hover:text-white transition-colors">Métiers</Link>
                <span>/</span>
                <span className="text-accent">ERP</span>
              </nav>
              <span className="text-xs font-bold text-accent tracking-widest">OPÉRATIONS & ERP</span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3">ERP — Gestion Intégrée</h1>
              <p className="text-white/70 text-lg mt-4 max-w-2xl">
                Plateforme ERP complète pour PME marocaines — Finance, RH, Production, Commercial en un seul système.
              </p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Demander une démo <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="max-w-3xl" {...fadeUp}>
              <h2 className="text-2xl font-bold text-primary">L&apos;ERP marocain taillé pour les PME ambitieuses</h2>
              <p className="text-secondary mt-4 leading-relaxed">
                Thalès Informatique propose une solution ERP intégrée qui couvre l&apos;intégralité des processus de votre entreprise : Finance, Ressources Humaines, Production, Commercial et Achats — dans un seul et même système, 100&nbsp;% conforme à la réglementation marocaine.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 className="text-2xl font-bold text-primary mb-10" {...fadeUp}>8 modules intégrés</motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {modules.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                >
                  <Link href={m.href} className="block p-5 border border-border rounded-xl hover:border-cta/50 hover:shadow-md transition-all duration-200 text-center group">
                    <span className="text-sm font-semibold text-primary group-hover:text-cta transition-colors duration-150">{m.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 className="text-2xl font-bold text-primary mb-10" {...fadeUp}>Pourquoi un ERP intégré&nbsp;?</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-8 bg-white border border-border rounded-xl"
                >
                  <div className="w-12 h-12 bg-cta/10 rounded-xl flex items-center justify-center mb-4">
                    <b.icon size={22} className="text-cta" />
                  </div>
                  <h3 className="font-bold text-primary">{b.title}</h3>
                  <p className="text-sm text-secondary mt-2">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-bg">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <blockquote className="text-lg italic text-secondary border-l-4 border-cta pl-6 text-left">
                &ldquo;Depuis l&apos;implémentation de l&apos;ERP Thalès Informatique, nous avons éliminé 3 logiciels distincts et réduit nos coûts IT de 35%. La vision consolidée de notre activité est un avantage compétitif réel.&rdquo;
              </blockquote>
              <p className="text-sm text-slate-400 mt-3 text-left">— DSI, entreprise de distribution de Rabat</p>
              <div className="mt-10">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Planifier une démonstration <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
