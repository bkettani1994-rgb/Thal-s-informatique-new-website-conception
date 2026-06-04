"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, Target, BookOpen, Network, Users, Star, BarChart2 } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const features = [
  { icon: Target, title: "Gestion des compétences", desc: "Référentiel de compétences, évaluation des niveaux et cartographie des expertises." },
  { icon: BookOpen, title: "Plan de formation", desc: "Construction du plan de formation annuel, suivi des inscriptions et mesure des résultats." },
  { icon: Users, title: "GPEC", desc: "Gestion Prévisionnelle des Emplois et Compétences pour anticiper les besoins futurs." },
  { icon: Network, title: "Organigramme interactif", desc: "Visualisation et gestion de l'organigramme de l'entreprise avec liens hiérarchiques." },
  { icon: Star, title: "Évaluations annuelles", desc: "Processus d'évaluation des collaborateurs avec objectifs, commentaires et plans d'action." },
  { icon: BarChart2, title: "Tableaux de bord RH", desc: "Indicateurs RH stratégiques : effectifs, compétences, formation, turnover, pyramide des âges." },
];

export default function SIRHPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp}>
              <nav className="text-sm text-white/50 mb-6 flex items-center gap-2">
                <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                <span>/</span>
                <Link href="/metiers" className="hover:text-white transition-colors">Métiers</Link>
                <span>/</span>
                <span className="text-accent">SIRH</span>
              </nav>
              <span className="text-xs font-bold text-accent tracking-widest">RESSOURCES HUMAINES</span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3">SIRH — Système d&apos;Information RH</h1>
              <p className="text-white/70 text-lg mt-4 max-w-2xl">
                GPEC, formations et gestion des compétences pour un pilotage stratégique de vos ressources humaines.
              </p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Demander une démo <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="max-w-3xl" {...fadeUp}>
              <h2 className="text-2xl font-bold text-primary">Pilotez stratégiquement vos ressources humaines</h2>
              <p className="text-secondary mt-4 leading-relaxed">
                Thalès Informatique propose un SIRH complet qui va bien au-delà de la paie : gestion des compétences, plans de formation, GPEC, organigramme interactif et évaluations annuelles. Un outil indispensable pour les DRH qui souhaitent piloter leurs ressources humaines comme un véritable actif stratégique.
              </p>
              <p className="text-secondary mt-3 leading-relaxed">
                Connecté nativement aux modules Paie & RH et Dématérialisation RH de la plateforme Thalès Informatique, le SIRH offre une vue complète et unifiée de votre capital humain.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 className="text-2xl font-bold text-primary mb-10" {...fadeUp}>Fonctionnalités clés</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="p-6 border border-border rounded-xl hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-10 h-10 bg-cta/10 rounded-lg flex items-center justify-center mb-3">
                    <f.icon size={18} className="text-cta" />
                  </div>
                  <h3 className="font-semibold text-primary">{f.title}</h3>
                  <p className="text-sm text-secondary mt-2">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="p-8 bg-primary rounded-2xl text-center" {...fadeUp}>
              <h2 className="text-2xl font-bold text-white">Les compétences : votre avantage concurrentiel</h2>
              <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                Dans un marché marocain de plus en plus compétitif, la maîtrise des compétences de votre équipe est un avantage stratégique. Thalès Informatique vous donne les outils pour identifier, développer et retenir vos talents.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6">
                {[
                  { num: "2×", label: "Réduction du turnover" },
                  { num: "+35%", label: "Engagement collaborateurs" },
                  { num: "−40%", label: "Coûts de recrutement" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-black text-accent">{stat.num}</p>
                    <p className="text-white/60 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-primary">Transformez vos RH en centre de valeur</h2>
              <p className="text-secondary mt-4">Découvrez comment Thalès Informatique peut aider votre DRH à devenir un partenaire stratégique de la direction générale.</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Planifier une démonstration <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
