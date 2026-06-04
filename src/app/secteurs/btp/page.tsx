"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  Building2,
  AlertTriangle,
  BarChart3,
  Wrench,
  Users,
  HardHat,
  Truck,
  Calculator,
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function BTPPage() {
  const introRef = useRef(null);
  const challengesRef = useRef(null);
  const solutionsRef = useRef(null);
  const productsRef = useRef(null);
  const ctaRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const challengesInView = useInView(challengesRef, { once: true, margin: "-100px" });
  const solutionsInView = useInView(solutionsRef, { once: true, margin: "-100px" });
  const productsInView = useInView(productsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const challenges = [
    {
      icon: AlertTriangle,
      title: "Dépassements budgétaires et manque de visibilité sur les chantiers",
      desc: "Contrôlez vos budgets en temps réel et anticipez les dérives avant qu&apos;elles ne deviennent critiques.",
    },
    {
      icon: Users,
      title: "Gestion complexe des sous-traitants et des situations de travaux",
      desc: "Gérez vos contrats sous-traitants, retenues de garantie et situations de travaux progressives.",
    },
    {
      icon: Truck,
      title: "Suivi des immobilisations et du parc matériel",
      desc: "Pilotez l&apos;entretien, les amortissements et la disponibilité de vos engins et véhicules.",
    },
  ];

  const solutions = [
    {
      icon: BarChart3,
      title: "Suivi des chantiers",
      desc: "Budget, réalisé, écarts, avancement physique — visibilité complète en temps réel.",
    },
    {
      icon: Calculator,
      title: "Déboursés d&apos;ouvrages",
      desc: "Coûts matériaux, main d&apos;œuvre, sous-traitance — calcul précis du coût de revient.",
    },
    {
      icon: HardHat,
      title: "Situations de travaux",
      desc: "Facturation progressive, retenues de garantie, décomptes définitifs.",
    },
    {
      icon: Truck,
      title: "Gestion du parc matériel",
      desc: "Engins, véhicules, planification entretien, amortissements et coûts d&apos;utilisation.",
    },
    {
      icon: Users,
      title: "Paie chantier",
      desc: "Pointage chantier, primes, indemnités de déplacement, CNSS BTP.",
    },
    {
      icon: BarChart3,
      title: "Reporting chantier",
      desc: "Tableaux de bord chantier, alertes dépassements, synthèses direction.",
    },
  ];

  const products = [
    {
      name: "Sage X3",
      desc: "ERP complet pour la gestion financière et opérationnelle des chantiers BTP",
      color: "from-amber-600 to-orange-700",
    },
    {
      name: "DimoMaint GMAO",
      desc: "Gestion de la maintenance et du parc matériel BTP — préventive et corrective",
      color: "from-orange-600 to-amber-600",
    },
    {
      name: "Sage 100",
      desc: "Comptabilité et gestion pour les PME du BTP et de la construction",
      color: "from-yellow-600 to-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-amber-400 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-orange-400 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/secteurs" className="hover:text-white transition-colors">Secteurs</Link>
              <ChevronRight size={14} />
              <span className="text-white">BTP & Construction</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-2 mb-6">
              <Building2 size={14} className="text-amber-300" />
              <span className="text-amber-300 text-sm font-semibold uppercase tracking-wider">SECTEUR BTP</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              BTP &{" "}
              <span className="text-amber-400">Construction</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Chantiers & déboursés d&apos;ouvrages — pilotage financier de vos chantiers avec Thalès Informatique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro 2-col */}
      <section className="py-20 bg-white" ref={introRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={introInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Digitalisez le pilotage de vos chantiers
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-4">
                Le secteur BTP marocain est en pleine croissance, porté par les grands chantiers d&apos;infrastructure et l&apos;essor de la promotion immobilière.
              </p>
              <p className="text-secondary leading-relaxed">
                Thalès Informatique accompagne les entreprises de construction, génie civil et promotion immobilière dans leur digitalisation : suivi des chantiers, budgets, équipes et matériels, avec des solutions ERP adaptées aux spécificités du secteur.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6">
              {[
                { value: "60+", label: "Entreprises BTP" },
                { value: "Temps", label: "Suivi budget/réel" },
                { value: "Multi", label: "Gestion chantiers" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-6 bg-slate-50 rounded-2xl border border-border">
                  <div className="text-3xl font-bold text-amber-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-secondary">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Défis */}
      <section className="py-20 bg-slate-50" ref={challengesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={challengesInView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-3xl font-bold text-primary mb-4">Les défis du secteur BTP</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Les entreprises BTP marocaines font face à des enjeux opérationnels et financiers sur chantiers.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {challenges.map((c) => (
                <motion.div
                  key={c.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-6">
                    <c.icon size={24} className="text-amber-600" />
                  </div>
                  <h3 className="font-bold text-primary mb-3">{c.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-white" ref={solutionsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={solutionsInView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-3xl font-bold text-primary mb-4">Nos solutions pour le BTP</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Des modules ERP spécialisés pour piloter chaque dimension de vos chantiers et projets.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((s) => (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  className="p-6 rounded-2xl border border-border bg-slate-50 hover:border-amber-200 hover:bg-amber-50/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-600 flex items-center justify-center mb-4">
                    <s.icon size={18} className="text-white" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{s.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions recommandées */}
      <section className="py-20 bg-primary" ref={productsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={productsInView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-3xl font-bold text-white mb-4">Solutions recommandées</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Thalès Informatique sélectionne les meilleures solutions pour les entreprises BTP marocaines.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((p) => (
                <motion.div
                  key={p.name}
                  variants={fadeUp}
                  className={`rounded-2xl p-8 bg-gradient-to-br ${p.color} text-white`}
                >
                  <h3 className="text-xl font-bold mb-3">{p.name}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-600" ref={ctaRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-6">
              Voir une démonstration BTP & construction
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-lg mb-10">
              Découvrez comment Thalès Informatique digitalise le pilotage des chantiers marocains.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-amber-700 font-bold px-8 py-4 rounded-xl hover:bg-amber-50 transition-colors shadow-lg"
              >
                Demander une démo
                <ChevronRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
