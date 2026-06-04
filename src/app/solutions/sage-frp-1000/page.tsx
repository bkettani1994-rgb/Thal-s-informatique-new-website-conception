"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, ChevronRight } from "lucide-react";

const features = [
  { title: "Consolidation automatique multi-entités", desc: "Consolidez les comptes de toutes vos filiales en quelques clics, avec gestion des éliminations intercompany.", icon: "🔗" },
  { title: "Reporting groupe en temps réel", desc: "Tableaux de bord financiers groupe, disponibles instantanément pour les décideurs.", icon: "📊" },
  { title: "Gestion multi-devises & multi-réglementaire", desc: "Gérez plusieurs devises et réglementations comptables en parallèle (IFRS, normes marocaines).", icon: "🌍" },
  { title: "Contrôle de gestion avancé", desc: "Budgets, forecasts, analyse des écarts et simulation de scénarios financiers.", icon: "🎯" },
  { title: "Intercompany automatisé", desc: "Automatisation des flux financiers inter-sociétés : factures, prêts, dividendes.", icon: "⚡" },
  { title: "Conformité IFRS & normes marocaines", desc: "Respect des obligations légales locales et des standards internationaux simultanément.", icon: "✅" },
];

const profiles = [
  { title: "Groupes industriels", desc: "Plusieurs unités de production, consolidation complexe, reporting vers la maison-mère.", icon: "🏭" },
  { title: "Holdings financières", desc: "Gestion des participations, dividendes, flux de trésorerie groupe.", icon: "🏦" },
  { title: "Filiales de multinationales", desc: "Reporting dual (local + groupe), multi-devises, normes IFRS.", icon: "🌐" },
];

export default function SageFrp1000Page() {
  const introRef = useRef(null);
  const featuresRef = useRef(null);
  const profilesRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-80px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-80px" });
  const profilesInView = useInView(profilesRef, { once: true, margin: "-80px" });

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
              <span className="text-white">Sage FRP 1000</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold text-accent tracking-widest bg-accent/10 px-3 py-1.5 rounded-full mb-4">
                GROUPES &amp; HOLDINGS
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Sage FRP 1000
              </h1>
              <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                Plateforme financière pour groupes et holdings
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
                <span className="text-xs font-bold text-cta tracking-widest uppercase">LA SOLUTION GROUPE</span>
                <h2 className="text-3xl font-bold text-primary mt-2 mb-6">
                  La finance de groupe sans complexité
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Sage FRP 1000 est la solution financière dédiée aux groupes, filiales et holdings. Elle centralise la consolidation automatique, le reporting groupe et la gestion multi-entités dans une plateforme unifiée.
                </p>
                <p className="text-secondary leading-relaxed">
                  Déployée par <strong className="text-primary">Thalès Informatique</strong> au Maroc, Sage FRP 1000 permet aux groupes marocains et aux filiales de multinationales de piloter leur performance financière avec précision et conformité.
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
              <span className="text-xs font-bold text-cta tracking-widest uppercase">FONCTIONNALITÉS</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Des capacités taillées pour les groupes</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 border border-border hover:border-cta hover:shadow-lg transition-all duration-200"
                >
                  <span className="text-3xl mb-4 block">{feat.icon}</span>
                  <h3 className="font-bold text-primary mb-2">{feat.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section ref={profilesRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={profilesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold text-cta tracking-widest uppercase">POUR QUI ?</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Conçu pour les structures complexes</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {profiles.map((profile, i) => (
                <motion.div
                  key={profile.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={profilesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-bg rounded-2xl p-8 border border-border text-center"
                >
                  <span className="text-4xl mb-4 block">{profile.icon}</span>
                  <h3 className="font-bold text-primary mb-3">{profile.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{profile.desc}</p>
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
                Pilotez votre groupe avec Sage FRP 1000
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Thalès Informatique vous accompagne dans le déploiement de Sage FRP 1000 au Maroc.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors duration-200"
              >
                Contacter un expert <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
