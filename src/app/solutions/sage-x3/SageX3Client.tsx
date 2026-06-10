"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

const modules = [
  { title: "Finance & Comptabilité", desc: "Clôture express, multi-devises, consolidation groupe", icon: "💹" },
  { title: "Gestion commerciale", desc: "Devis, commandes, facturation, CRM intégré", icon: "🛒" },
  { title: "Gestion de production", desc: "MRP, GPAO, suivi temps réel des ateliers", icon: "🏭" },
  { title: "Achats & Approvisionnements", desc: "Commandes fournisseurs, réceptions, contrôle qualité", icon: "📦" },
  { title: "Ressources humaines", desc: "Paie, congés, gestion des compétences", icon: "👥" },
  { title: "Reporting & BI", desc: "Tableaux de bord, KPIs, exports analytiques", icon: "📊" },
];

const expertiseCards = [
  { title: "Expertise certifiée", desc: "Partenaire Gold Sage au Maroc depuis plus de 15 ans. Nos consultants sont certifiés Sage X3.", icon: "🏆" },
  { title: "Déploiement rapide", desc: "Méthodologie éprouvée pour un go-live en 3 à 6 mois selon la complexité de votre organisation.", icon: "⚡" },
  { title: "Support local Casablanca", desc: "Équipe dédiée à Casablanca pour un support réactif en français et en arabe.", icon: "📍" },
];

const industries = ["Industrie", "Agroalimentaire", "Distribution", "BTP", "Services", "Pharmacie"];

export default function SageX3Client() {
  const introRef = useRef(null);
  const modulesRef = useRef(null);
  const expertiseRef = useRef(null);
  const industriesRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-80px" });
  const modulesInView = useInView(modulesRef, { once: true, margin: "-80px" });
  const expertiseInView = useInView(expertiseRef, { once: true, margin: "-80px" });
  const industriesInView = useInView(industriesRef, { once: true, margin: "-80px" });

  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-800 to-slate-900" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <ChevronRight size={14} />
              <span className="text-white">Sage X3</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold text-accent tracking-widest bg-accent/10 px-3 py-1.5 rounded-full mb-4">
                SOLUTION PHARE
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Sage X3
              </h1>
              <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                L&apos;ERP pour grandes entreprises &amp; industries
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro 2-col */}
        <section ref={introRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={introInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-primary mb-6">
                  L&apos;ERP de référence pour les groupes industriels
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Sage X3 est la solution ERP de référence pour les entreprises de taille intermédiaire et les groupes industriels. Dotée d&apos;une architecture moderne et d&apos;une couverture fonctionnelle étendue, elle répond aux exigences des organisations les plus complexes.
                </p>
                <p className="text-secondary leading-relaxed">
                  <strong className="text-primary">Thalès Informatique</strong> est partenaire Gold Sage au Maroc depuis plus de 15 ans. Nous accompagnons les plus grandes entreprises marocaines dans leur transformation digitale avec Sage X3.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={introInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 gap-4"
              >
                {[
                  { stat: "500+", label: "Déploiements au Maroc" },
                  { stat: "30+", label: "Secteurs d'activité couverts" },
                  { stat: "Support 24/7", label: "Équipe dédiée locale" },
                ].map((item) => (
                  <div key={item.label} className="bg-bg rounded-2xl p-6 border border-border flex items-center gap-4">
                    <span className="text-3xl font-bold text-cta">{item.stat}</span>
                    <span className="text-secondary font-medium">{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section ref={modulesRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={modulesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold text-cta tracking-widest uppercase">MODULES FONCTIONNELS</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Une couverture fonctionnelle complète</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((mod, i) => (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={modulesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 border border-border hover:border-cta hover:shadow-lg transition-all duration-200"
                >
                  <span className="text-3xl mb-4 block">{mod.icon}</span>
                  <h3 className="font-bold text-primary mb-2">{mod.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{mod.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Thalès */}
        <section ref={expertiseRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold text-cta tracking-widest uppercase">POURQUOI THALÈS</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Sage X3 avec Thalès Informatique</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {expertiseCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-bg rounded-2xl p-8 border border-border text-center"
                >
                  <span className="text-4xl mb-4 block">{card.icon}</span>
                  <h3 className="font-bold text-primary mb-3">{card.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section ref={industriesRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={industriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <span className="text-xs font-bold text-cta tracking-widest uppercase">SECTEURS</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Industries couvertes</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={industriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {industries.map((ind) => (
                <span key={ind} className="px-5 py-2.5 bg-white border border-border rounded-full text-sm font-semibold text-secondary hover:border-cta hover:text-cta transition-colors duration-200">
                  {ind}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Demandez une démo Sage X3 personnalisée
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Nos experts Thalès Informatique vous présentent Sage X3 adapté à votre secteur et à vos enjeux.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors duration-200"
              >
                Demander une démo <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
