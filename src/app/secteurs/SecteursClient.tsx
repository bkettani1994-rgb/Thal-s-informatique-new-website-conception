"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Factory,
  ShoppingCart,
  Briefcase,
  Building2,
  Leaf,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const sectors = [
  {
    icon: Factory,
    title: "Industrie",
    href: "/secteurs/industrie",
    subtitle: "Ordonnanciers & bilans GPAO — pilotage de votre production industrielle",
    color: "emerald",
    challenges: ["Gestion complexe de la production et des nomenclatures", "Traçabilité des lots et matières premières", "Maintenance des équipements industriels"],
    solutions: ["Module MRP/planification de production", "Gestion des stocks multi-entrepôts", "GMAO intégrée"],
    kpis: ["TRS & OEE", "Taux de rebut", "Coût de revient industriel"],
    clients: "150+ industriels",
  },
  {
    icon: ShoppingCart,
    title: "Négoce & Distribution",
    href: "/secteurs/negoce-distribution",
    subtitle: "Logistique multi-sociétés & gestion des stocks",
    color: "blue",
    challenges: ["Gestion multi-entités et consolidation inter-sociétés", "Optimisation des stocks et réduction des ruptures", "Traçabilité des lots et dates de péremption"],
    solutions: ["Gestion commerciale complète order-to-cash", "Multi-dépôts & entrepôts intégrés", "EDI fournisseurs & e-commerce"],
    kpis: ["Taux de service", "Rotation des stocks", "Délai de livraison"],
    clients: "120+ distributeurs",
  },
  {
    icon: Briefcase,
    title: "Services & Conseil",
    href: "/secteurs/services",
    subtitle: "Taux de charge des consultants & gestion de projets",
    color: "violet",
    challenges: ["Suivi du taux de charge et disponibilité des consultants", "Facturation complexe (régie, forfait, abonnement)", "Pilotage de la rentabilité par projet"],
    solutions: ["Gestion des temps & activités", "Facturation projet automatisée", "Reporting rentabilité par consultant"],
    kpis: ["Taux d'utilisation", "Rentabilité projet", "DSO & trésorerie"],
    clients: "80+ cabinets",
  },
  {
    icon: Building2,
    title: "BTP & Construction",
    href: "/secteurs/btp",
    subtitle: "Chantiers & déboursés d'ouvrages — pilotage financier",
    color: "orange",
    challenges: ["Dépassements budgétaires et manque de visibilité", "Gestion complexe des sous-traitants", "Suivi des immobilisations et du parc matériel"],
    solutions: ["Suivi des chantiers budget/réalisé", "Situations de travaux et retenues", "Paie chantier CNSS BTP"],
    kpis: ["Écart budget/réalisé", "Taux d'avancement", "Coût par chantier"],
    clients: "60+ entreprises BTP",
  },
  {
    icon: Leaf,
    title: "Agroalimentaire",
    href: "/secteurs/agroalimentaire",
    subtitle: "Normes ONSSA & traçabilité HACCP — conformité totale",
    color: "green",
    challenges: ["Traçabilité amont/aval des matières et produits", "Conformité ONSSA, HACCP et normes sanitaires", "Gestion des DLC/DLUO et retraits de lots"],
    solutions: ["Traçabilité lot complète", "Contrôle qualité HACCP intégré", "Gestion DLC/retrait automatisée"],
    kpis: ["Taux de pertes", "Non-conformités qualité", "Délai de traçabilité"],
    clients: "40+ industriels IAA",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; dot: string; badge: string }> = {
  emerald: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", dot: "bg-emerald-500", badge: "bg-emerald-600" },
  blue: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", dot: "bg-blue-500", badge: "bg-blue-600" },
  violet: { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200", dot: "bg-violet-500", badge: "bg-violet-600" },
  orange: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200", dot: "bg-orange-500", badge: "bg-orange-600" },
  green: { bg: "bg-green-50", text: "text-green-700", border: "border-green-200", dot: "bg-green-500", badge: "bg-green-600" },
};

const stats = [
  { value: "30+", label: "Ans d'expérience" },
  { value: "500+", label: "Clients accompagnés" },
  { value: "5", label: "Secteurs couverts" },
  { value: "1200+", label: "Projets réalisés" },
  { value: "97%", label: "Satisfaction client" },
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

export default function SecteursClient() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-primary to-primary" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <span className="text-white/70">Secteurs</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nos Secteurs<br />
              <span className="text-accent">d'Intervention</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
              Solutions ERP adaptées à chaque secteur d'activité, au Maroc, en Afrique et à l'international. Chaque industrie a ses spécificités — nos experts sectoriels vous accompagnent avec des solutions sur mesure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sector Cards */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {sectors.map((sector, i) => {
            const colors = colorMap[sector.color];
            const isEven = i % 2 === 0;
            return (
              <FadeIn key={sector.title} delay={0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300`}>
                  {/* Content */}
                  <div className={`p-8 md:p-12 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 ${colors.bg} rounded-2xl flex items-center justify-center`}>
                        <sector.icon size={22} className={colors.text} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-primary">{sector.title}</h2>
                        <span className={`text-xs font-semibold ${colors.text}`}>{sector.clients}</span>
                      </div>
                    </div>
                    <p className="text-secondary text-sm mb-6 leading-relaxed">{sector.subtitle}</p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold text-secondary uppercase tracking-wide mb-3">Défis métier</h3>
                        <ul className="space-y-2">
                          {sector.challenges.map((c) => (
                            <li key={c} className="flex items-start gap-2 text-sm text-secondary">
                              <div className={`w-1.5 h-1.5 rounded-full ${colors.dot} mt-1.5 shrink-0`} />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-secondary uppercase tracking-wide mb-3">Nos solutions</h3>
                        <ul className="space-y-2">
                          {sector.solutions.map((s) => (
                            <li key={s} className="flex items-start gap-2 text-sm text-primary">
                              <CheckCircle2 size={14} className={`${colors.text} mt-0.5 shrink-0`} />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link
                      href={sector.href}
                      className={`mt-8 inline-flex items-center gap-2 px-5 py-2.5 ${colors.badge} text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity`}
                    >
                      Découvrir
                      <ChevronRight size={16} />
                    </Link>
                  </div>

                  {/* KPIs Panel */}
                  <div className={`${colors.bg} p-8 md:p-12 ${isEven ? "lg:order-2" : "lg:order-1"} flex flex-col justify-center`}>
                    <h3 className={`text-sm font-semibold ${colors.text} uppercase tracking-wide mb-6`}>KPIs clés suivis</h3>
                    <div className="space-y-4">
                      {sector.kpis.map((kpi) => (
                        <div key={kpi} className={`bg-white/70 border ${colors.border} rounded-xl p-4 flex items-center gap-3`}>
                          <div className={`w-2 h-8 rounded-full ${colors.badge}`} />
                          <span className="font-medium text-primary text-sm">{kpi}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Votre secteur, nos experts
            </h2>
            <p className="text-secondary mb-8 text-lg">
              Nos consultants sectoriels connaissent les spécificités de votre industrie. Parlons-en.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Parler à un expert
                <ChevronRight size={18} />
              </Link>
              <Link
                href="/solutions"
                className="px-8 py-4 bg-white border border-border text-secondary font-semibold rounded-xl hover:bg-slate-50 transition-colors duration-200"
              >
                Voir nos solutions
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
