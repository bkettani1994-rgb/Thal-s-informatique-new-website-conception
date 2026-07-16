"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, ChevronRight } from "lucide-react";

const features = [
  { title: "Scoring & notation client", desc: "Évaluez automatiquement le risque de chaque client pour adapter vos conditions de paiement.", icon: "⭐" },
  { title: "Suivi des encours clients", desc: "Visibilité en temps réel sur les encours, limites de crédit et dépassements.", icon: "📈" },
  { title: "Relances automatiques", desc: "Scénarios de relance personnalisés par email, SMS et courrier selon l&apos;ancienneté de la créance.", icon: "📨" },
  { title: "Gestion des litiges", desc: "Workflow de traitement des litiges clients avec historique complet des échanges.", icon: "⚖️" },
  { title: "Tableau de bord recouvrement", desc: "DSO, taux de recouvrement, créances à risque : pilotez votre trésorerie en un coup d&apos;œil.", icon: "📊" },
  { title: "Intégration comptable", desc: "Connecté nativement à Sage X3 et Sage 100 pour une synchronisation automatique.", icon: "🔗" },
];

const steps = [
  { num: "01", title: "Scoring", desc: "Notation automatique du risque client à chaque transaction" },
  { num: "02", title: "Surveillance", desc: "Monitoring continu des encours et alertes de dépassement" },
  { num: "03", title: "Relance", desc: "Scénarios de relance automatisés multi-canaux" },
  { num: "04", title: "Recouvrement", desc: "Suivi amiable et contentieux avec historique complet" },
];

export default function EloficashClient() {
  const introRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const stepsRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-80px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-80px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const stepsInView = useInView(stepsRef, { once: true, margin: "-80px" });

  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-800 to-slate-900" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <ChevronRight size={14} />
              <span className="text-white">Eloficash</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold text-amber-400 tracking-widest bg-amber-400/10 px-3 py-1.5 rounded-full mb-4">
                GESTION DU RISQUE CLIENT
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Eloficash
              </h1>
              <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                Solution de gestion de trésorerie, de recouvrement et de gestion des encours clients pour les entreprises au Maroc et en Afrique.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section ref={introRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs font-bold text-amber-600 tracking-widest uppercase">RECOUVREMENT INTELLIGENT</span>
                <h2 className="text-3xl font-bold text-primary mt-2 mb-6">
                  Sécurisez votre trésorerie, réduisez vos impayés
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Eloficash est la solution spécialisée dans le recouvrement de créances et la gestion du risque client. Elle automatise vos processus de relance et vous donne une visibilité complète sur votre exposition au risque.
                </p>
                <p className="text-secondary leading-relaxed">
                  Intégrée et supportée par <strong className="text-primary">Thalès Informatique</strong> au Maroc et en Afrique, Eloficash se connecte directement à vos solutions Sage pour une gestion unifiée de votre poste client.
                </p>
                <p className="text-secondary leading-relaxed mt-4">Eloficash se connecte nativement à <Link href="/solutions/sage-x3" className="text-cta font-semibold hover:underline">Sage X3</Link> et <Link href="/solutions/sage-100" className="text-cta font-semibold hover:underline">Sage 100</Link> pour une gestion unifiée de votre poste client.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section ref={featuresRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold text-amber-600 tracking-widest uppercase">FONCTIONNALITÉS</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Fonctionnalités de gestion de trésorerie et de recouvrement</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 border border-border hover:border-amber-400 hover:shadow-lg transition-all duration-200"
                >
                  <span className="text-3xl mb-4 block">{feat.icon}</span>
                  <h3 className="font-bold text-primary mb-2">{feat.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section ref={statsRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold text-amber-600 tracking-widest uppercase">IMPACT</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Des résultats prouvés</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { metric: "DSO -40%", label: "Délai moyen de recouvrement réduit", icon: "⏱️" },
                { metric: "Taux +35%", label: "Taux de recouvrement amélioré", icon: "📈" },
                { metric: "Litiges -60%", label: "Réduction des litiges clients", icon: "✅" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-amber-50 rounded-2xl p-8 border border-amber-100 text-center"
                >
                  <span className="text-4xl mb-3 block">{stat.icon}</span>
                  <div className="text-3xl font-bold text-amber-600 mb-2">{stat.metric}</div>
                  <div className="text-secondary font-medium text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section ref={stepsRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={stepsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold text-amber-600 tracking-widest uppercase">PROCESSUS</span>
              <h2 className="text-3xl font-bold text-primary mt-2">4 étapes vers un recouvrement optimisé</h2>
            </motion.div>
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-14 h-14 rounded-full bg-amber-500 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Réduisez vos impayés avec Eloficash
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Thalès Informatique vous accompagne dans la mise en place d&apos;Eloficash au Maroc et en Afrique.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-amber-600 transition-colors duration-200"
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
