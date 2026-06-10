"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Factory,
  ChevronRight,
  ClipboardList,
  Package,
  CheckSquare,
  Wrench,
  LayoutDashboard,
  CalendarDays,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const features = [
  {
    icon: CalendarDays,
    title: "Planification de la production (MRP)",
    desc: "Calcul des besoins en matières, planification des ordres de fabrication et optimisation des charges machines.",
  },
  {
    icon: ClipboardList,
    title: "Suivi des ordres de fabrication",
    desc: "Traçabilité complète des OF : lancement, avancement en temps réel, pointages et consommations matières.",
  },
  {
    icon: Package,
    title: "Gestion des stocks & entrepôts",
    desc: "Inventaire permanent, gestion des emplacements, FIFO/FEFO, alertes de rupture et réapprovisionnement automatique.",
  },
  {
    icon: CheckSquare,
    title: "Contrôle qualité",
    desc: "Plans de contrôle, enregistrement des non-conformités, actions correctives et indicateurs qualité en temps réel.",
  },
  {
    icon: Wrench,
    title: "Maintenance préventive",
    desc: "Planification des maintenances, gestion des pannes, historique des interventions et suivi des pièces de rechange.",
  },
  {
    icon: LayoutDashboard,
    title: "Tableau de bord usine",
    desc: "Indicateurs TRS, OEE, taux de rebut, performance machines et productivité par ligne de production.",
  },
];

const industries = [
  "Industrie manufacturière",
  "Agroalimentaire",
  "BTP & Construction",
  "Textile & Confection",
  "Chimie & Parachimie",
  "Pharmacie & Cosmétique",
  "Plastique & Emballage",
  "Métallurgie & Sidérurgie",
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

export default function GestionProductionClient() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-primary to-primary" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
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
              <span className="text-white/70">Gestion de production</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                <Factory size={20} className="text-emerald-300" />
              </div>
              <span className="text-emerald-300 text-sm font-semibold uppercase tracking-widest">Module Production</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Gestion de<br />
              <span className="text-emerald-300">Production</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              Optimisez votre outil industriel avec une solution ERP dédiée à la gestion de production : planification, traçabilité, qualité et performance en temps réel.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              {[
                { value: "+40%", label: "Gain de productivité" },
                { value: "100%", label: "Traçabilité totale" },
                { value: "Temps réel", label: "Planification dynamique" },
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
              <span className="text-emerald-600 text-sm font-semibold uppercase tracking-widest">Fonctionnalités</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
                Pilotez votre production de A à Z
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                De la planification des besoins à la livraison finale, chaque étape de votre processus industriel est maîtrisée.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.08}>
                <div className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon size={20} className="text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-emerald-600 text-sm font-semibold uppercase tracking-widest">Secteurs couverts</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Industries couvertes
            </h2>
            <p className="text-secondary mb-10 max-w-2xl mx-auto">
              Notre solution de gestion de production s'adapte à tous les secteurs industriels marocains et leurs spécificités métier.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="px-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-sm font-medium"
                >
                  {industry}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                De la commande à la livraison
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Planification MRP", desc: "Calcul des besoins net en fonction des commandes, du stock et des en-cours de production." },
              { num: "02", title: "Lancement OF", desc: "Création et lancement des ordres de fabrication avec affectation des ressources et des matières." },
              { num: "03", title: "Suivi en temps réel", desc: "Pointage des opérations, déclaration des productions et alertes sur les écarts de performance." },
              { num: "04", title: "Contrôle & livraison", desc: "Contrôle qualité final, gestion des lots, expédition et mise à jour automatique des stocks." },
            ].map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div className="relative bg-white border border-border rounded-2xl p-6 h-full">
                  <div className="text-4xl font-black text-emerald-100 mb-4">{step.num}</div>
                  <h3 className="font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{step.desc}</p>
                  {i < 3 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 h-6 bg-emerald-600 rounded-full items-center justify-center">
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
            <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <TrendingUp size={24} className="text-emerald-300" />
            </div>
            <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8 italic">
              "Depuis l'implémentation du module production de Thalès Informatique, notre taux de service est passé de 72% à 94%. La traçabilité des lots et le suivi qualité en temps réel ont transformé notre façon de travailler."
            </blockquote>
            <div>
              <div className="font-semibold text-white">Mohamed Tazi</div>
              <div className="text-white/50 text-sm">Directeur de Production, Industrie Agroalimentaire du Nord</div>
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
              Optimisez votre performance industrielle
            </h2>
            <p className="text-secondary mb-8 text-lg">
              Nos experts industry vous accompagnent de l'audit à la mise en production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center gap-2"
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
