"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  Factory,
  AlertTriangle,
  BarChart3,
  Settings,
  Package,
  CheckSquare,
  Calculator,
  Wrench,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function IndustrieClient() {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const defiRef = useRef(null);
  const solutionsRef = useRef(null);
  const productsRef = useRef(null);
  const ctaRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-80px" });
  const defiInView = useInView(defiRef, { once: true, margin: "-80px" });
  const solutionsInView = useInView(solutionsRef, { once: true, margin: "-80px" });
  const productsInView = useInView(productsRef, { once: true, margin: "-80px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  const defis = [
    {
      icon: Settings,
      title: "Gestion des nomenclatures",
      desc: "Gestion complexe des nomenclatures et gammes de fabrication multi-niveaux.",
    },
    {
      icon: BarChart3,
      title: "Suivi en temps réel",
      desc: "Suivi en temps réel des ordres de fabrication et des stocks par atelier.",
    },
    {
      icon: CheckSquare,
      title: "Conformité & traçabilité",
      desc: "Conformité aux normes qualité et traçabilité complète des produits finis.",
    },
  ];

  const solutions = [
    {
      icon: Factory,
      title: "GPAO & Ordonnancement",
      desc: "Planification MRP, ordres de fabrication, suivi ateliers en temps réel.",
    },
    {
      icon: Package,
      title: "Gestion des stocks",
      desc: "Multi-dépôts, traçabilité lots, gestion FIFO/LIFO, inventaires tournants.",
    },
    {
      icon: CheckSquare,
      title: "Contrôle qualité",
      desc: "Gestion des non-conformités, certificats matières, plans d'audits.",
    },
    {
      icon: Calculator,
      title: "Coûts de revient",
      desc: "Calcul standard vs réel, analyse des écarts de production par OF.",
    },
    {
      icon: Wrench,
      title: "Maintenance industrielle (DimoMaint)",
      desc: "Maintenance préventive, corrective, suivi MTBF et disponibilité machines.",
    },
    {
      icon: TrendingUp,
      title: "Reporting production",
      desc: "Tableaux de bord TRS, rendement machine, taux de rebuts en temps réel.",
    },
  ];

  const products = [
    {
      name: "Sage X3",
      desc: "ERP industriel complet — production, achats, finance, RH intégrés.",
      color: "bg-blue-50 border-blue-200",
      badge: "Recommandé",
    },
    {
      name: "DimoMaint GMAO",
      desc: "Gestion de maintenance industrielle — préventif, correctif, pièces détachées.",
      color: "bg-slate-50 border-slate-200",
      badge: "Maintenance",
    },
    {
      name: "Reporting BI",
      desc: "Tableaux de bord métiers, KPIs production, connecteurs Sage X3 natifs.",
      color: "bg-slate-50 border-slate-200",
      badge: "Analytique",
    },
  ];

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-cta rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
              <Link href="/" className="hover:text-white/80 transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/secteurs" className="hover:text-white/80 transition-colors">Secteurs</Link>
              <ChevronRight size={14} />
              <span className="text-white/80">Industrie</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cta/20 border border-cta/30 rounded-full mb-6">
              <Factory size={14} className="text-accent" />
              <span className="text-xs font-semibold text-accent uppercase tracking-widest">SECTEUR INDUSTRIE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Industrie
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Ordonnanciers & bilans GPAO — pilotage de votre production industrielle avec Thalès Informatique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro 2-col */}
      <section ref={introRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={introInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Votre partenaire ERP industriel au Maroc depuis 30 ans
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-4">
                Thalès Informatique accompagne les industriels marocains depuis 30 ans. Notre expertise couvre la gestion de production, les achats, la finance et les RH pour les entreprises industrielles de toute taille.
              </p>
              <p className="text-secondary leading-relaxed">
                De la PME manufacturière au grand groupe industriel, nous proposons des solutions ERP préconfigurées pour les secteurs de l'industrie mécanique, agroalimentaire, chimique, textile et bien d'autres.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6">
              {[
                { value: "150+", label: "Industriels accompagnés" },
                { value: "30 ans", label: "D'expertise sectorielle" },
                { value: "3 mois", label: "Déploiement moyen" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-6 bg-slate-50 rounded-2xl border border-border">
                  <div className="text-3xl font-extrabold text-cta mb-2">{stat.value}</div>
                  <div className="text-sm text-secondary">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Défis */}
      <section ref={defiRef} className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" animate={defiInView ? "visible" : "hidden"}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-100 rounded-full mb-4">
                <AlertTriangle size={14} className="text-red-600" />
                <span className="text-xs font-semibold text-red-600 uppercase tracking-widest">Défis du secteur</span>
              </div>
              <h2 className="text-3xl font-bold text-primary">Les enjeux de l'industrie au Maroc</h2>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {defis.map((d) => (
                <motion.div
                  key={d.title}
                  variants={fadeUp}
                  className="p-6 bg-white rounded-2xl border border-orange-100 shadow-sm"
                >
                  <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                    <d.icon size={20} className="text-orange-500" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{d.title}</h3>
                  <p className="text-secondary text-sm">{d.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section ref={solutionsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" animate={solutionsInView ? "visible" : "hidden"}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cta/10 rounded-full mb-4">
                <span className="text-xs font-semibold text-cta uppercase tracking-widest">Nos solutions</span>
              </div>
              <h2 className="text-3xl font-bold text-primary">Solutions ERP pour l'industrie</h2>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((s) => (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  className="p-6 bg-slate-50 rounded-2xl border border-border hover:border-cta/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-cta/10 rounded-xl flex items-center justify-center mb-4">
                    <s.icon size={20} className="text-cta" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{s.title}</h3>
                  <p className="text-secondary text-sm">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Produits recommandés */}
      <section ref={productsRef} className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" animate={productsInView ? "visible" : "hidden"}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary">Solutions recommandées</h2>
              <p className="text-secondary mt-3">Les outils sélectionnés par Thalès Informatique pour le secteur industriel.</p>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((p) => (
                <motion.div
                  key={p.name}
                  variants={fadeUp}
                  className={`p-6 rounded-2xl border ${p.color}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-primary">{p.name}</h3>
                    <span className="text-xs font-semibold px-2 py-1 bg-cta/10 text-cta rounded-full">{p.badge}</span>
                  </div>
                  <p className="text-secondary text-sm">{p.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-4">
              Prêt à optimiser votre production industrielle ?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 mb-8">
              Nos experts ERP industrie sont disponibles pour une démonstration personnalisée de Sage X3 adapté à votre secteur.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg"
              >
                Voir une démonstration industrie
              </Link>
              <Link
                href="/solutions/sage-x3"
                className="px-8 py-3.5 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200"
              >
                Découvrir Sage X3
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
