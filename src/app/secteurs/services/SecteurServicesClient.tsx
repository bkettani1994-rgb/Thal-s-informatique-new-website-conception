"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  Briefcase,
  Clock,
  FileText,
  Users,
  BarChart3,
  DollarSign,
  AlertTriangle,
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

export default function SecteurServicesClient() {
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
      icon: Users,
      title: "Suivi du taux de charge et disponibilité des consultants",
      desc: "Optimisez l&apos;affectation de vos ressources et anticipez les sous-charges ou surcharges.",
    },
    {
      icon: FileText,
      title: "Facturation complexe (régie, forfait, abonnement)",
      desc: "Gérez tous vos modes de facturation avec précision et automatisez la génération de factures.",
    },
    {
      icon: AlertTriangle,
      title: "Pilotage de la rentabilité par projet et par client",
      desc: "Mesurez en temps réel la marge de chaque projet et détectez rapidement les dérives.",
    },
  ];

  const solutions = [
    {
      icon: Clock,
      title: "Gestion des temps & activités",
      desc: "Feuilles de temps, imputations projets, validation hiérarchique automatisée.",
    },
    {
      icon: FileText,
      title: "Facturation projet",
      desc: "Facturation par jalons, avancement réel, modes mixtes régie/forfait.",
    },
    {
      icon: Briefcase,
      title: "CRM & avant-vente",
      desc: "Opportunités, propositions commerciales, suivi taux de conversion.",
    },
    {
      icon: Users,
      title: "RH & compétences (SIRH)",
      desc: "Profils consultants, disponibilités, plans de formation, entretiens.",
    },
    {
      icon: BarChart3,
      title: "Reporting rentabilité",
      desc: "Marge par projet, par consultant, par client — tableaux de bord temps réel.",
    },
    {
      icon: DollarSign,
      title: "Trésorerie & DSO",
      desc: "Suivi des encaissements, délais clients, prévisions de trésorerie.",
    },
  ];

  const products = [
    {
      name: "Sage X3",
      desc: "ERP complet pour ESN et cabinets de conseil avec gestion projets intégrée",
      color: "from-emerald-600 to-teal-700",
    },
    {
      name: "Factorial",
      desc: "SIRH moderne pour la gestion RH, temps et performances des équipes",
      color: "from-teal-600 to-emerald-600",
    },
    {
      name: "Eloficash",
      desc: "Recouvrement et gestion du DSO pour optimiser votre trésorerie",
      color: "from-green-600 to-teal-600",
    },
  ];

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-emerald-400 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-teal-400 blur-3xl" />
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
              <span className="text-white">Services & Conseil</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-2 mb-6">
              <Briefcase size={14} className="text-emerald-300" />
              <span className="text-emerald-300 text-sm font-semibold uppercase tracking-wider">SECTEUR SERVICES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Services &{" "}
              <span className="text-emerald-400">Conseil</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Taux de charge des consultants & gestion de projets — optimisez votre rentabilité avec un ERP adapté aux sociétés de services.
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
                L&apos;ERP pensé pour les sociétés de services
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-4">
                Les entreprises de services (ESN, cabinets de conseil, bureaux d&apos;études) ont des besoins spécifiques : gestion des temps & activités, facturation au réel, suivi de rentabilité par projet.
              </p>
              <p className="text-secondary leading-relaxed">
                Thalès Informatique déploie des solutions ERP préconfigurées pour les sociétés de services marocaines, avec une expertise de plus de 30 ans sur ces problématiques.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6">
              {[
                { value: "80+", label: "Sociétés de services" },
                { value: "Temps", label: "Suivi réel" },
                { value: "Auto", label: "Facturation projet" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-6 bg-slate-50 rounded-2xl border border-border">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.value}</div>
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
              <h2 className="text-3xl font-bold text-primary mb-4">Les défis du secteur services</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Les sociétés de services font face à des enjeux de pilotage de la rentabilité et des ressources humaines.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {challenges.map((c) => (
                <motion.div
                  key={c.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                    <c.icon size={24} className="text-emerald-600" />
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
              <h2 className="text-3xl font-bold text-primary mb-4">Nos solutions pour les services</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Des modules ERP spécialisés pour piloter chaque dimension de votre activité de service.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((s) => (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  className="p-6 rounded-2xl border border-border bg-slate-50 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center mb-4">
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
                Thalès Informatique sélectionne les meilleures solutions pour les sociétés de services marocaines.
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
      <section className="py-20 bg-emerald-600" ref={ctaRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-6">
              Voir une démonstration services & conseil
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-lg mb-10">
              Découvrez comment Thalès Informatique améliore la rentabilité des sociétés de services marocaines.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-colors shadow-lg"
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
