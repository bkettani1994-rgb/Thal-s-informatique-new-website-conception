"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, ChevronRight } from "lucide-react";

const features = [
  { title: "Espace collaborateur en ligne", desc: "Chaque employé accède à ses informations RH depuis n&apos;importe quel appareil, n&apos;importe où.", icon: "👤" },
  { title: "Gestion des congés & absences", desc: "Demandes, approbations, soldes en temps réel — zéro email, zéro papier.", icon: "🗓️" },
  { title: "Fiches de paie dématérialisées", desc: "Distribution digitale des bulletins de paie, archivage légal sécurisé.", icon: "💰" },
  { title: "Recrutement & onboarding", desc: "Pipeline de recrutement, gestion des candidats, intégration digitale des nouveaux.", icon: "🎯" },
  { title: "Suivi des formations", desc: "Plan de formation, inscriptions, évaluations et historique par collaborateur.", icon: "📚" },
  { title: "Organigramme interactif", desc: "Visualisez et mettez à jour votre structure organisationnelle en temps réel.", icon: "🏢" },
];

const cloudAdvantages = [
  { title: "Déploiement en 48h", desc: "Factorial est opérationnel en 48 heures sans infrastructure à installer.", icon: "⚡" },
  { title: "Mises à jour automatiques", desc: "Nouvelles fonctionnalités et conformité légale mises à jour automatiquement.", icon: "🔄" },
  { title: "Accès mobile", desc: "Application mobile iOS & Android pour les managers et collaborateurs.", icon: "📱" },
];

export default function FactorialPage() {
  const introRef = useRef(null);
  const featuresRef = useRef(null);
  const cloudRef = useRef(null);
  const portalRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-80px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-80px" });
  const cloudInView = useInView(cloudRef, { once: true, margin: "-80px" });
  const portalInView = useInView(portalRef, { once: true, margin: "-80px" });

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
              <span className="text-white">Factorial</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold text-violet-400 tracking-widest bg-violet-400/10 px-3 py-1.5 rounded-full mb-4">
                SIRH CLOUD
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Factorial
              </h1>
              <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                SIRH Cloud &amp; Espace Collaborateur
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
                <span className="text-xs font-bold text-violet-600 tracking-widest uppercase">LE SIRH MODERNE</span>
                <h2 className="text-3xl font-bold text-primary mt-2 mb-6">
                  La RH centralisée, enfin accessible à tous
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Factorial est le SIRH Cloud moderne qui centralise toute la gestion RH : congés, fiches de paie, recrutement, formations. Accessible depuis n&apos;importe quel appareil, il simplifie le quotidien des RH et des collaborateurs.
                </p>
                <p className="text-secondary leading-relaxed">
                  <strong className="text-primary">Thalès Informatique</strong> est partenaire Factorial certifié au Maroc. Nous vous accompagnons dans la configuration, la formation et l&apos;adoption par vos équipes.
                </p>
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
              <span className="text-xs font-bold text-violet-600 tracking-widest uppercase">FONCTIONNALITÉS</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Tout ce que vos RH attendent</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 border border-border hover:border-violet-400 hover:shadow-lg transition-all duration-200"
                >
                  <span className="text-3xl mb-4 block">{feat.icon}</span>
                  <h3 className="font-bold text-primary mb-2">{feat.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: feat.desc }} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Advantages */}
        <section ref={cloudRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={cloudInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold text-violet-600 tracking-widest uppercase">CLOUD NATIF</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Les avantages du Cloud</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {cloudAdvantages.map((adv, i) => (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={cloudInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-violet-50 rounded-2xl p-8 border border-violet-100 text-center"
                >
                  <span className="text-4xl mb-4 block">{adv.icon}</span>
                  <h3 className="font-bold text-primary mb-3">{adv.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{adv.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Employee Portal Mockup */}
        <section ref={portalRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={portalInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold text-violet-600 tracking-widest uppercase">INTERFACE</span>
              <h2 className="text-3xl font-bold text-primary mt-2">L&apos;espace collaborateur Factorial</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={portalInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary rounded-2xl p-8 lg:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-white font-bold text-xl mb-4">Un portail intuitif pour chaque collaborateur</h3>
                  <ul className="space-y-3">
                    {[
                      "Consulter et télécharger ses fiches de paie",
                      "Poser des congés en 2 clics",
                      "Accéder à son contrat et documents RH",
                      "Voir son solde de congés en temps réel",
                      "Suivre ses formations et objectifs",
                      "Contacter les RH directement depuis le portail",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/80 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <div className="text-center text-white">
                    <div className="text-5xl mb-4">👤</div>
                    <div className="font-bold text-lg mb-1">Mohamed Alami</div>
                    <div className="text-white/60 text-sm mb-6">Responsable Comptabilité</div>
                    <div className="grid grid-cols-2 gap-3 text-left">
                      {[
                        { label: "Congés restants", value: "18 jours" },
                        { label: "Ancienneté", value: "4 ans 3 mois" },
                        { label: "Prochaine paie", value: "30 juin 2026" },
                        { label: "Formations", value: "2 en cours" },
                      ].map((item) => (
                        <div key={item.label} className="bg-white/10 rounded-lg p-3">
                          <div className="text-white/50 text-xs">{item.label}</div>
                          <div className="text-white font-semibold text-sm mt-0.5">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
                Modernisez votre RH avec Factorial
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Thalès Informatique vous accompagne dans le déploiement et l&apos;adoption de Factorial au Maroc.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-violet-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-violet-600 transition-colors duration-200"
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
