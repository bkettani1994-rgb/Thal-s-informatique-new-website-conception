"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  Sparkles,
  Award,
  Users,
  TrendingUp,
  Heart,
  Quote,
  Rocket,
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const milestones = [
  {
    year: "1996",
    title: "Création de Thalès Informatique",
    desc: "Naissance de Thalès Informatique à Casablanca, avec une ambition claire : digitaliser la gestion des entreprises en Afrique et à l'international.",
  },
  {
    year: "2005",
    title: "Agrément Sage FRP 1000",
    desc: "Obtention de l'agrément Sage FRP 1000, renforçant notre expertise au service des groupes et holdings dans leur pilotage financier.",
  },
  {
    year: "2017",
    title: "Agrément Sage X3",
    desc: "Obtention de l'agrément Sage X3, élargissant notre couverture ERP pour accompagner l'industrie, le négoce et la distribution.",
  },
  {
    year: "2022",
    title: "Partner Platinium",
    desc: "Élévation au rang de Partner Platinium Sage, la plus haute distinction, qui consacre notre expertise et la qualité de notre accompagnement client.",
  },
  {
    year: "2026",
    title: "30 ans de succès partagés",
    desc: "Trois décennies d'expertise, un nouveau site, une nouvelle expérience client et des ambitions renouvelées pour les 30 prochaines années.",
  },
];

const stats = [
  { value: "30", label: "Ans d'expertise" },
  { value: "500+", label: "Clients accompagnés" },
  { value: "20+", label: "Consultants certifiés" },
  { value: "92%", label: "Taux de fidélisation" },
];

const highlights = [
  {
    icon: Award,
    title: "Une expertise reconnue",
    desc: "Trois décennies d'expérience cumulée sur les solutions Sage et la transformation digitale des entreprises en Afrique et à l'international.",
  },
  {
    icon: Users,
    title: "Une relation de confiance",
    desc: "Plus de 500 entreprises nous accompagnent depuis des années, certaines depuis nos débuts en 1996.",
  },
  {
    icon: TrendingUp,
    title: "Une croissance continue",
    desc: "Une équipe qui n'a cessé de grandir pour répondre aux besoins évolutifs de nos clients, partout au Maroc.",
  },
  {
    icon: Rocket,
    title: "Une vision tournée vers l'avenir",
    desc: "Cloud, intelligence artificielle, conformité réglementaire : nous continuons d'innover pour préparer les 30 prochaines années.",
  },
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

export default function TrenteAnsClient() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-primary to-primary" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/ressources" className="hover:text-white transition-colors">Ressources</Link>
              <ChevronRight size={14} />
              <span className="text-white/70">30 ans d'expertise</span>
            </div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-6">
              <Sparkles size={14} />
              Anniversaire
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              30 ans d'expertise<br />
              <span className="text-accent">au service de votre réussite</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
              Depuis 1996, Thalès Informatique accompagne les entreprises en Afrique et à l'international dans leur
              transformation digitale. Trois décennies de passion, d'expertise et de confiance —
              et ce n'est que le début.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cta mb-2">{stat.value}</div>
                  <div className="text-secondary text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-cta text-sm font-semibold uppercase tracking-widest">Notre histoire</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">30 ans de milestones</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Retour sur les grandes étapes qui ont façonné Thalès Informatique depuis sa création.
              </p>
            </div>
          </FadeIn>

          {/* Horizontal milestone strip */}
          <FadeIn>
            <div className="relative rounded-3xl py-12 px-6 sm:px-10 overflow-hidden mb-12" style={{ backgroundColor: "#0369A1" }}>
              <div className="relative flex items-start justify-between">
                <div className="absolute top-7 left-0 right-0 h-0.5 bg-white/25" />
                <div className="absolute top-[26px] right-0 w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-white/40" />
                {milestones.map((item) => (
                  <div key={item.year} className="relative z-10 flex flex-col items-center text-center w-1/5 px-1">
                    <div className="w-14 h-14 rounded-full border-2 border-white bg-white flex items-center justify-center text-sky-500 font-bold text-sm mb-3">
                      {item.year}
                    </div>
                    <p className="text-white text-xs sm:text-sm font-semibold leading-tight">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Enriched milestone details */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {milestones.map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.1}>
                <div className="bg-white border border-border rounded-2xl p-6 h-full hover:shadow-md transition-shadow duration-300">
                  <span className="text-cta font-black text-sm">{item.year}</span>
                  <h3 className="font-bold text-primary mt-2 mb-2">{item.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-cta text-sm font-semibold uppercase tracking-widest">30 ans en chiffres et en valeurs</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Pourquoi 30 ans, ça compte</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="text-center p-6">
                  <div className="w-12 h-12 bg-cta/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon size={20} className="text-cta" />
                  </div>
                  <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-primary to-primary" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <Quote size={36} className="text-accent mx-auto mb-6" />
            <p className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-6">
              « Depuis 30 ans, chaque projet que nous menons est porté par la même conviction :
              la technologie doit servir les entreprises, pas l'inverse. Merci à nos clients,
              nos équipes et nos partenaires qui écrivent cette histoire avec nous. »
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cta to-blue-700 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">AR</span>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-sm">Abdellah REDA</div>
                <div className="text-white/50 text-xs">Directeur Général, fondateur</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="w-14 h-14 bg-cta/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart size={24} className="text-cta" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Écrivons les 30 prochaines années ensemble
            </h2>
            <p className="text-secondary mb-8 text-lg">
              Que vous soyez client depuis nos débuts ou que vous découvriez Thalès Informatique
              aujourd'hui, notre équipe est prête à vous accompagner dans votre transformation digitale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Parler à un expert
                <ChevronRight size={18} />
              </Link>
              <Link
                href="/a-propos"
                className="px-8 py-4 bg-bg border border-border text-secondary font-semibold rounded-xl hover:bg-slate-50 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Découvrir notre histoire
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
