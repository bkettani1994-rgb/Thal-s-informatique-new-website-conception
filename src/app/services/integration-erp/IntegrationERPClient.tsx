"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, GitMerge, ArrowRight } from "lucide-react";
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

const integrationTypes = [
  {
    title: "Connecteurs API REST/SOAP",
    desc: "Développement de connecteurs standards ou sur mesure pour relier vos applications via des API modernes.",
  },
  {
    title: "Intégration bancaire",
    desc: "CIB, virements automatiques, relevés de compte — synchronisation temps réel avec votre ERP.",
  },
  {
    title: "EDI fournisseurs & clients",
    desc: "Échanges de données informatisés pour automatiser vos commandes, livraisons et facturations.",
  },
  {
    title: "Portail e-commerce",
    desc: "WooCommerce, Magento, Shopify — synchronisation articles, stocks, commandes et clients.",
  },
  {
    title: "Synchronisation CRM",
    desc: "Salesforce, HubSpot — cohérence des données prospects et clients entre CRM et ERP.",
  },
  {
    title: "Tableaux de bord BI",
    desc: "Power BI, Tableau — connexion directe à vos données ERP pour des rapports en temps réel.",
  },
];

const technologies = [
  "REST API", "SOAP", "JSON", "XML", "OAuth2", "Webhooks", "Power BI", "SQL",
];

const processSteps = [
  { num: "01", title: "Analyse besoin", desc: "Compréhension des flux à intégrer, périmètre fonctionnel et contraintes techniques." },
  { num: "02", title: "Conception architecture", desc: "Modélisation de l'architecture d'intégration, choix des protocoles et formats d'échange." },
  { num: "03", title: "Développement", desc: "Développement des connecteurs, mappings de données et gestion des erreurs." },
  { num: "04", title: "Tests & recette", desc: "Tests unitaires, tests d'intégration et validation fonctionnelle avec vos équipes." },
];

export default function IntegrationERPClient() {
  const introRef = useRef(null);
  const typesRef = useRef(null);
  const techRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const typesInView = useInView(typesRef, { once: true, margin: "-100px" });
  const techInView = useInView(techRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight aria-hidden="true" size={14} />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight aria-hidden="true" size={14} />
              <span aria-current="page" className="text-accent">Intégration ERP</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-semibold tracking-wider uppercase">
                <GitMerge size={14} />
                INTÉGRATION
              </span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold text-white mb-6"
            >
              Intégration ERP
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70 max-w-2xl"
            >
              Développements de connecteurs API et intégration système
            </motion.p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20" ref={introRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={introInView ? "visible" : "hidden"}
              className="max-w-3xl"
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Connectez votre ERP à votre écosystème applicatif</h2>
              <p className="text-lg text-secondary leading-relaxed">
                Thalès Informatique développe des connecteurs sur mesure pour intégrer votre ERP (Sage X3, Sage 100) avec
                vos applications tierces : e-commerce, CRM, banques, EDI, portails clients. Notre équipe technique maîtrise
                l'ensemble des protocoles d'échange modernes pour garantir une intégration fiable et maintenable.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 6 Integration Types */}
        <section className="py-20 bg-white" ref={typesRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={typesInView ? "visible" : "hidden"}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Types d'intégrations</h2>
              <p className="text-secondary max-w-2xl mx-auto">6 domaines d'intégration couverts par nos équipes</p>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={typesInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {integrationTypes.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="p-6 rounded-xl border border-border hover:border-violet-300 hover:shadow-md transition-all duration-300 bg-bg"
                >
                  <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center mb-4">
                    <GitMerge size={20} className="text-violet-600" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-secondary">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20" ref={techRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={techInView ? "visible" : "hidden"}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Technologies maîtrisées</h2>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={techInView ? "visible" : "hidden"}
              className="flex flex-wrap justify-center gap-3"
            >
              {technologies.map((tech) => (
                <motion.span
                  key={tech}
                  variants={fadeUp}
                  className="px-5 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold text-sm border border-violet-200"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white" ref={processRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={processInView ? "visible" : "hidden"}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Notre processus</h2>
              <p className="text-secondary">Une méthodologie éprouvée en 4 étapes</p>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={processInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {processSteps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  variants={fadeUp}
                  className="relative p-6 rounded-xl bg-bg border border-border"
                >
                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-3 z-10">
                      <ArrowRight size={20} className="text-violet-400" />
                    </div>
                  )}
                  <div className="text-3xl font-bold text-violet-200 mb-3">{step.num}</div>
                  <h3 className="font-semibold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-secondary">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary" ref={ctaRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Besoin d'une intégration sur mesure ?</h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Nos experts analysent vos besoins et proposent une architecture d'intégration adaptée.
              </p>
              <p data-ilink className="text-white/60 text-sm mb-8">Solutions ERP intégrées : <Link href="/solutions/sage-x3" className="text-white underline hover:text-accent">Sage X3 Maroc</Link> et <Link href="/solutions/sage-100" className="text-white underline hover:text-accent">Sage 100 Maroc</Link>.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
              >
                Discuter de votre projet
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
