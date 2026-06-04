"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  PieChart,
  ChevronRight,
  LayoutDashboard,
  FileBarChart,
  Bell,
  Download,
  GitMerge,
  Smartphone,
  BarChart2,
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const features = [
  {
    icon: LayoutDashboard,
    title: "Tableaux de bord interactifs",
    desc: "Visualisations dynamiques avec graphiques, jauges et cartes. Personnalisables par rôle et par utilisateur.",
  },
  {
    icon: FileBarChart,
    title: "Rapports personnalisables",
    desc: "Générateur de rapports drag-and-drop, modèles prédéfinis et planification automatique des envois par email.",
  },
  {
    icon: Bell,
    title: "Alertes & seuils automatiques",
    desc: "Définissez vos seuils critiques et recevez des alertes en temps réel par email, SMS ou notification push.",
  },
  {
    icon: Download,
    title: "Export Excel / PDF",
    desc: "Export instantané vers Excel avec mise en forme, PDF professionnel ou intégration directe PowerPoint.",
  },
  {
    icon: GitMerge,
    title: "Consolidation multi-sites",
    desc: "Agrégation automatique des données de toutes vos entités pour une vision groupe consolidée et fiable.",
  },
  {
    icon: Smartphone,
    title: "Accès mobile (app)",
    desc: "Application mobile native pour consulter vos KPIs clés, tableaux de bord et alertes depuis n'importe où.",
  },
];

const kpis = [
  { category: "Finance", items: ["CA & marge brute", "BFR & trésorerie", "Rentabilité par activité"] },
  { category: "RH", items: ["Masse salariale", "Absentéisme", "Turnover & rétention"] },
  { category: "Production", items: ["TRS & OEE", "Taux de rebut", "Performance livraisons"] },
  { category: "Commercial", items: ["Pipeline & conversion", "Satisfaction client", "Délais de règlement"] },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function ReportingPilotagePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-primary to-primary" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <ChevronRight size={14} />
              <span className="text-white/70">Reporting & Pilotage</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                <PieChart size={20} className="text-amber-300" />
              </div>
              <span className="text-amber-300 text-sm font-semibold uppercase tracking-widest">Module BI</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Reporting<br />
              <span className="text-amber-300">& Pilotage</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              Transformez vos données en décisions stratégiques. Tableaux de bord en temps réel, KPIs intelligents et rapports automatisés pour piloter votre entreprise avec précision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              {[
                { value: "+200", label: "KPIs disponibles" },
                { value: "Temps réel", label: "Données actualisées" },
                { value: "100%", label: "Décisions éclairées" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-amber-600 text-sm font-semibold uppercase tracking-widest">Fonctionnalités</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
                Votre cockpit de pilotage
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Une plateforme BI intégrée à votre ERP pour une vision à 360° de votre performance.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.08}>
                <div className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon size={20} className="text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* KPI Library */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-amber-600 text-sm font-semibold uppercase tracking-widest">Bibliothèque de KPIs</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
                200+ indicateurs prêts à l'emploi
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Organisés par domaine, nos KPIs couvrent l'ensemble des fonctions de votre entreprise.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((cat, i) => (
              <FadeIn key={cat.category} delay={i * 0.1}>
                <div className="bg-bg border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BarChart2 size={16} className="text-amber-600" />
                    <span className="font-bold text-primary text-sm">{cat.category}</span>
                  </div>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-secondary">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                    <li className="text-xs text-amber-600 font-medium mt-2">+ bien d'autres...</li>
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Placeholder */}
      <section className="py-24 bg-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Tableau de bord exemple
              </h2>
              <p className="text-white/60 max-w-xl mx-auto">
                Un aperçu de ce que vous obtenez avec notre module Reporting & Pilotage.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "CA Mensuel", value: "4.2M MAD", trend: "+12%" },
                  { label: "Marge brute", value: "38.5%", trend: "+2.1%" },
                  { label: "BFR", value: "1.8M MAD", trend: "-5%" },
                  { label: "Tréso nette", value: "620K MAD", trend: "+8%" },
                ].map((kpi) => (
                  <div key={kpi.label} className="bg-white/5 rounded-xl p-4">
                    <div className="text-white/40 text-xs mb-1">{kpi.label}</div>
                    <div className="text-white font-bold text-lg">{kpi.value}</div>
                    <div className="text-emerald-400 text-xs font-medium">{kpi.trend}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 bg-white/5 rounded-xl p-4 h-32 flex items-center justify-center">
                  <span className="text-white/30 text-sm">Graphique évolution CA — 12 mois</span>
                </div>
                <div className="bg-white/5 rounded-xl p-4 h-32 flex items-center justify-center">
                  <span className="text-white/30 text-sm">Répartition par produit</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Prenez les meilleures décisions
            </h2>
            <p className="text-secondary mb-8 text-lg">
              Découvrez comment nos tableaux de bord s'adaptent à votre secteur et vos besoins spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Voir une démonstration
                <ChevronRight size={18} />
              </Link>
              <Link
                href="/solutions"
                className="px-8 py-4 bg-white border border-border text-secondary font-semibold rounded-xl hover:bg-slate-50 transition-colors duration-200"
              >
                Toutes nos solutions
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
