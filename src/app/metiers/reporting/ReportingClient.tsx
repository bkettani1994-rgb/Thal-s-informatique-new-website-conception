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

const features = [
  { title: "Tableaux de bord interactifs", desc: "Dashboards dynamiques personnalisables par rôle, département ou entité juridique." },
  { title: "KPIs personnalisables", desc: "Bibliothèque de 100+ indicateurs préconfigurés ou créez les vôtres en quelques clics." },
  { title: "Export Excel/PDF", desc: "Extraction de tous vos rapports en formats Excel, PDF ou CSV pour partage ou archivage." },
  { title: "Alertes automatiques", desc: "Notifications par email ou SMS dès qu'un indicateur franchit un seuil critique." },
  { title: "Consolidation multi-sites", desc: "Agrégation des données de plusieurs entités ou filiales dans un reporting consolidé." },
  { title: "Accès mobile", desc: "Tableaux de bord responsive accessibles depuis smartphone et tablette en déplacement." },
];

const kpiLibrary = [
  { domain: "Finance", count: 8, kpis: ["CA mensuel", "Marge brute", "DSO", "Trésorerie nette", "ROE", "EBE", "BFR", "Endettement"] },
  { domain: "Ressources Humaines", count: 6, kpis: ["Effectif total", "Turnover", "Absentéisme", "Masse salariale", "Coût recrutement", "Formation"] },
  { domain: "Production", count: 5, kpis: ["Taux de rendement", "OEE", "Taux de rebut", "Délai production", "Capacité utilisée"] },
  { domain: "Commercial", count: 6, kpis: ["CA par commercial", "Taux conversion", "Panier moyen", "Satisfaction client", "Pipeline", "Devis acceptés"] },
];

export default function ReportingClient() {
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
                <span className="text-accent">Reporting</span>
              </nav>
              <span className="text-xs font-bold text-accent tracking-widest">OPÉRATIONS & ERP</span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3">Reporting & Tableaux de Bord</h1>
              <p className="text-white/70 text-lg mt-4 max-w-2xl">
                Prenez des décisions éclairées grâce aux données temps réel de Thalès Informatique.
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
              <h2 className="text-2xl font-bold text-primary">Toutes vos données, une seule vision</h2>
              <p className="text-secondary mt-4 leading-relaxed">
                Thalès Informatique consolide toutes les données de votre ERP dans des tableaux de bord interactifs et personnalisables. Finance, RH, Production, Commercial : chaque décideur dispose de ses indicateurs clés en temps réel, sans export manuel.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 className="text-2xl font-bold text-primary mb-10" {...fadeUp}>Fonctionnalités clés</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="p-6 border border-border rounded-xl hover:shadow-md transition-shadow duration-200"
                >
                  <h3 className="font-semibold text-primary">{f.title}</h3>
                  <p className="text-sm text-secondary mt-2">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 className="text-2xl font-bold text-primary mb-8" {...fadeUp}>Bibliothèque de KPIs</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {kpiLibrary.map((lib, i) => (
                <motion.div
                  key={lib.domain}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-6 bg-white border border-border rounded-xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-primary">{lib.domain}</h3>
                    <span className="text-xs font-bold text-cta bg-cta/10 px-2 py-1 rounded-full">{lib.count} KPIs</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {lib.kpis.map((k) => (
                      <span key={k} className="text-xs px-2.5 py-1 bg-slate-100 text-secondary rounded-full">{k}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-white">Pilotez votre entreprise par les données</h2>
              <p className="text-white/70 mt-4">Demandez une démonstration du module Reporting de Thalès Informatique.</p>
              <p data-ilink className="text-white/60 text-sm mb-4">Découvrez notre solution <Link href="/solutions/reporting-pilotage" className="text-white underline hover:text-accent">Reporting &amp; Pilotage</Link>.</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Voir une démo <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
