"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Search, CheckCircle, FileText, Map, Lightbulb, Calendar } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AuditConseilClient() {
  const introRef = useRef(null);
  const stepsRef = useRef(null);
  const domainsRef = useRef(null);
  const deliverablesRef = useRef(null);
  const ctaRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const stepsInView = useInView(stepsRef, { once: true, margin: "-100px" });
  const domainsInView = useInView(domainsRef, { once: true, margin: "-100px" });
  const deliverablesInView = useInView(deliverablesRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const steps = [
    {
      num: "01",
      title: "Diagnostic initial",
      desc: "Analyse des processus existants et identification des points de friction",
      icon: <Search size={20} />,
    },
    {
      num: "02",
      title: "Cartographie des flux",
      desc: "Modélisation des flux métiers et des interactions entre services",
      icon: <Map size={20} />,
    },
    {
      num: "03",
      title: "Recommandations",
      desc: "Préconisations priorisées avec ROI estimé",
      icon: <Lightbulb size={20} />,
    },
    {
      num: "04",
      title: "Feuille de route",
      desc: "Plan d'action détaillé avec jalons et ressources",
      icon: <Calendar size={20} />,
    },
  ];

  const domains = [
    "Finance & Comptabilité",
    "RH & Paie",
    "Gestion commerciale",
    "Production & Stocks",
    "Achats & Approvisionnements",
    "Reporting & BI",
  ];

  const deliverables = [
    {
      icon: <FileText size={28} />,
      title: "Rapport d'audit détaillé",
      desc: "Document complet décrivant l'état actuel, les écarts et les recommandations prioritaires.",
    },
    {
      icon: <Map size={28} />,
      title: "Cartographie des processus",
      desc: "Représentation visuelle de vos flux métiers avec identification des points d'amélioration.",
    },
    {
      icon: <Calendar size={28} />,
      title: "Plan de transformation",
      desc: "Feuille de route détaillée avec jalons, ressources nécessaires et ROI prévisionnel.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight aria-hidden="true" size={14} />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight aria-hidden="true" size={14} />
              <span aria-current="page" className="text-accent">Audit & Conseil</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-accent text-xs font-semibold tracking-widest mb-6">
                <Search size={12} />
                CONSEIL
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Audit & Conseil
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Cadrage préliminaire de vos flux métiers — comprendre avant de transformer.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro 2-col */}
        <section ref={introRef} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={introInView ? "visible" : "hidden"}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeUp}>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  La base de tout projet ERP réussi
                </h2>
                <p className="text-secondary text-lg leading-relaxed mb-6">
                  Avant tout projet ERP, <strong>Thalès Informatique</strong> réalise un audit complet
                  de vos processus métiers. Notre mission : identifier les dysfonctionnements, cartographier
                  vos flux et définir la feuille de route de votre transformation digitale.
                </p>
                <p className="text-secondary leading-relaxed">
                  Forts de plus de 30 ans d'expérience au Maroc et en Afrique, nos consultants certifiés analysent
                  chaque dimension de votre organisation pour vous livrer un plan d'action concret,
                  priorisé et directement actionnable.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Processus métiers", "ROI estimé", "Plan d'action", "Vision 360°"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-blue-50 text-cta text-sm font-medium rounded-full border border-blue-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { value: "30+", label: "ans d'expertise", color: "bg-blue-600" },
                  { value: "500+", label: "audits réalisés", color: "bg-sky-500" },
                  { value: "100%", label: "des projets livrés dans les délais", color: "bg-primary" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={fadeUp}
                    className={`${stat.color} rounded-2xl p-6 text-white text-center`}
                  >
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 4 Steps */}
        <section ref={stepsRef} className="py-20 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={stepsInView ? "visible" : "hidden"}
              className="text-center mb-14"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Notre approche en 4 étapes</h2>
              <p className="text-secondary text-lg max-w-2xl mx-auto">
                Une méthodologie éprouvée pour transformer votre audit en levier de performance.
              </p>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={stepsInView ? "visible" : "hidden"}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {steps.map((step) => (
                <motion.div
                  key={step.num}
                  variants={fadeUp}
                  className="relative bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="text-5xl font-black text-blue-50 absolute top-4 right-4">{step.num}</div>
                  <div className="w-10 h-10 bg-blue-100 text-cta rounded-xl flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-base font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Domains */}
        <section ref={domainsRef} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={domainsInView ? "visible" : "hidden"}
              className="text-center mb-14"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Domaines d'audit</h2>
              <p className="text-secondary text-lg max-w-2xl mx-auto">
                Nous auditons l'ensemble de vos processus métiers avec des experts spécialisés par domaine.
              </p>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={domainsInView ? "visible" : "hidden"}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {domains.map((domain) => (
                <motion.div
                  key={domain}
                  variants={fadeUp}
                  className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-border hover:border-cta/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-blue-100 text-cta rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle size={20} />
                  </div>
                  <span className="text-primary font-semibold">{domain}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Deliverables */}
        <section ref={deliverablesRef} className="py-20 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={deliverablesInView ? "visible" : "hidden"}
              className="text-center mb-14"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Nos livrables</h2>
              <p className="text-secondary text-lg max-w-2xl mx-auto">
                À l'issue de chaque mission, vous disposez d'un ensemble de documents actionnables.
              </p>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={deliverablesInView ? "visible" : "hidden"}
              className="grid sm:grid-cols-3 gap-8"
            >
              {deliverables.map((d) => (
                <motion.div
                  key={d.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow text-center"
                >
                  <div className="w-14 h-14 bg-blue-100 text-cta rounded-2xl flex items-center justify-center mx-auto mb-5">
                    {d.icon}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{d.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{d.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaRef} className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              className="bg-primary rounded-3xl p-12 text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Demandez votre audit gratuit</h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Un consultant Thalès Informatique analyse vos processus et vous remet une synthèse
                sans engagement.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                Prendre rendez-vous
                <ChevronRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
