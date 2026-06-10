"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  BarChart3,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  Shield,
  Clock,
  BookOpen,
  CreditCard,
  Globe,
  Building,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const features = [
  {
    icon: BookOpen,
    title: "Comptabilité générale & analytique",
    desc: "Plan comptable marocain CGNC, journaux, grand livre, balance et comptabilité par axes analytiques.",
  },
  {
    icon: CreditCard,
    title: "Gestion de trésorerie",
    desc: "Suivi des flux en temps réel, rapprochements bancaires automatiques, prévisions et positions de trésorerie.",
  },
  {
    icon: Shield,
    title: "Rapports fiscaux (TVA, IS, IR)",
    desc: "Déclarations fiscales automatisées conformes à la DGI : TVA, IS, IR, liasse fiscale et télédéclaration.",
  },
  {
    icon: BarChart3,
    title: "Tableau de bord financier",
    desc: "Indicateurs clés en temps réel : rentabilité, liquidité, solvabilité, avec alertes et comparatifs.",
  },
  {
    icon: Globe,
    title: "Multi-devises & multi-sociétés",
    desc: "Gestion simultanée de plusieurs entités et devises avec consolidation automatique et taux de change.",
  },
  {
    icon: Building,
    title: "Intégration bancaire automatique",
    desc: "Connexion directe aux banques marocaines pour import automatique des relevés et réconciliation.",
  },
];

const steps = [
  { num: "01", title: "Paramétrage", desc: "Configuration du plan comptable, des journaux, des tiers et des règles fiscales propres à votre entreprise." },
  { num: "02", title: "Saisie automatisée", desc: "Import des pièces comptables, lettrage automatique, rapprochement bancaire et écritures récurrentes." },
  { num: "03", title: "Clôture express", desc: "Préclôture assistée, contrôles automatiques, génération des écritures d'inventaire en quelques clics." },
  { num: "04", title: "Reporting", desc: "Publication des états financiers, tableaux de bord personnalisés et export vers Excel ou PDF instantanément." },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function GestionFinanciereClient() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-primary to-primary" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cta/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <ChevronRight size={14} />
              <span className="text-white/70">Gestion financière</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-cta/20 rounded-xl flex items-center justify-center">
                <BarChart3 size={20} className="text-accent" />
              </div>
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Module Finance</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Gestion Financière<br />
              <span className="text-accent">& Comptable</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              Une solution complète pour piloter vos finances, automatiser votre comptabilité et garantir une conformité fiscale totale avec la législation marocaine.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              {[
                { value: "75%", label: "Réduction cycle clôture" },
                { value: "100%", label: "Conformité fiscale marocaine" },
                { value: "Temps réel", label: "Données financières" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-cta text-sm font-semibold uppercase tracking-widest">Fonctionnalités</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
                Tout ce dont vous avez besoin
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Un module complet couvrant tous les aspects de la gestion financière et comptable de votre entreprise.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.08}>
                <div className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon size={20} className="text-cta" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-cta text-sm font-semibold uppercase tracking-widest">Comment ça marche</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
                De la saisie au reporting en 4 étapes
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div className="relative">
                  <div className="bg-bg border border-border rounded-2xl p-6 h-full">
                    <div className="text-4xl font-black text-cta/20 mb-4">{step.num}</div>
                    <h3 className="font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-secondary text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 h-6 bg-cta rounded-full items-center justify-center">
                      <ArrowRight size={12} className="text-white" />
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="w-14 h-14 bg-cta/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <TrendingUp size={24} className="text-accent" />
            </div>
            <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8 italic">
              "Grâce à Thalès Informatique, nous avons réduit notre cycle de clôture comptable de 12 à 3 jours. Les déclarations fiscales sont désormais générées automatiquement — zéro erreur, zéro stress."
            </blockquote>
            <div>
              <div className="font-semibold text-white">Karim Benali</div>
              <div className="text-white/50 text-sm">Directeur Financier, Groupe Industriel XYZ</div>
            </div>
            <div className="flex justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-400">★</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Prêt à transformer votre gestion financière ?
            </h2>
            <p className="text-secondary mb-8 text-lg">
              Découvrez notre solution en live avec un expert dédié. Démo personnalisée sous 48h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Voir une démonstration
                <ChevronRight size={18} />
              </Link>
              <Link
                href="/solutions"
                className="px-8 py-4 bg-white border border-border text-secondary font-semibold rounded-xl hover:bg-slate-50 transition-colors duration-200"
              >
                Toutes nos solutions
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
