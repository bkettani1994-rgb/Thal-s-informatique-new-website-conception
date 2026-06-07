"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Calendar, MapPin, Users, CheckCircle2, Clock } from "lucide-react";
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

const program = [
  { time: "09h30", title: "Les fondamentaux du pilotage de la performance", desc: "Quels indicateurs suivre et pourquoi, selon votre secteur d'activité." },
  { time: "10h15", title: "Atelier pratique : construire son tableau de bord", desc: "Travail en petits groupes sur des cas concrets, accompagnés par nos consultants BI." },
  { time: "11h30", title: "Démonstration des outils de Business Intelligence Sage", desc: "De la donnée brute au tableau de bord interactif et actionnable." },
  { time: "12h15", title: "Synthèse et plan d'action personnalisé", desc: "Chaque participant repart avec une feuille de route pour son propre tableau de bord." },
];

const takeaways = [
  "Identifier les indicateurs clés (KPI) pertinents pour votre activité",
  "Construire un premier tableau de bord opérationnel pendant l'atelier",
  "Découvrir les outils de Business Intelligence intégrés à Sage",
  "Repartir avec une méthode applicable immédiatement dans votre entreprise",
];

export default function AtelierBiEventPage() {
  const introRef = useRef(null);
  const programRef = useRef(null);
  const takeawaysRef = useRef(null);
  const formRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const programInView = useInView(programRef, { once: true, margin: "-100px" });
  const takeawaysInView = useInView(takeawaysRef, { once: true, margin: "-100px" });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="overflow-x-hidden bg-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={14} />
            <Link href="/evenements" className="hover:text-white transition-colors">Événements</Link>
            <ChevronRight size={14} />
            <span className="text-accent">Atelier Pilotage de la Performance BI</span>
          </div>
          <span className="inline-flex items-center gap-2 bg-accent/20 text-accent text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4">
            Places limitées
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl"
          >
            Atelier : Pilotage de la performance avec les tableaux de bord BI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-white/70 max-w-2xl mb-8"
          >
            Un atelier pratique et interactif pour apprendre à construire vos propres tableaux de bord
            de pilotage, accompagné par les consultants Business Intelligence de Thalès Informatique.
          </motion.p>
          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            <span className="flex items-center gap-2"><Calendar size={16} className="text-accent" /> 10 juillet 2026 — Matinée</span>
            <span className="flex items-center gap-2"><MapPin size={16} className="text-accent" /> Thalès Informatique, Casablanca</span>
            <span className="flex items-center gap-2"><Users size={16} className="text-accent" /> 30 places limitées</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16" ref={introRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate={introInView ? "visible" : "hidden"} className="max-w-3xl">
            <h2 className="text-2xl font-bold text-primary mb-5">Apprenez en faisant</h2>
            <p className="text-secondary leading-relaxed">
              Contrairement à une conférence classique, cet atelier est entièrement pratique : en petits groupes,
              vous travaillerez sur des cas concrets pour construire votre propre tableau de bord de pilotage,
              accompagné par nos consultants spécialisés en Business Intelligence. À la fin de la matinée, vous
              repartirez avec une méthode applicable immédiatement et un plan d'action personnalisé pour votre
              entreprise. Le nombre de places est volontairement limité pour garantir un accompagnement de qualité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program */}
      <section className="py-16 bg-white" ref={programRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate={programInView ? "visible" : "hidden"} className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-2">Déroulé de l'atelier</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" animate={programInView ? "visible" : "hidden"} className="space-y-4 max-w-3xl">
            {program.map((item) => (
              <motion.div key={item.time} variants={fadeUp} className="flex gap-4 p-5 bg-bg-base rounded-xl border border-border">
                <div className="shrink-0 flex items-center gap-2 text-cta font-bold text-sm">
                  <Clock size={15} />
                  {item.time}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Takeaways */}
      <section className="py-16" ref={takeawaysRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate={takeawaysInView ? "visible" : "hidden"} className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-2">Ce que vous allez en retirer</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" animate={takeawaysInView ? "visible" : "hidden"} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {takeaways.map((item) => (
              <motion.div key={item} variants={fadeUp} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border">
                <CheckCircle2 size={18} className="text-emerald-600 mt-0.5 shrink-0" />
                <span className="text-sm text-secondary leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Registration form */}
      <section className="py-20 bg-primary" ref={formRef}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate={formInView ? "visible" : "hidden"} className="bg-white rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-primary mb-2 text-center">Réservez votre place</h2>
            <p className="text-secondary text-center mb-8">30 places limitées — inscription gratuite</p>
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 size={40} className="text-emerald-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-primary mb-2">Inscription confirmée !</h3>
                <p className="text-secondary">Vous recevrez la confirmation et l'adresse exacte par email avant l'atelier.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-4"
              >
                <input
                  type="text"
                  required
                  placeholder="Nom complet"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-cta text-sm"
                />
                <input
                  type="email"
                  required
                  placeholder="Adresse email professionnelle"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-cta text-sm"
                />
                <input
                  type="text"
                  required
                  placeholder="Entreprise"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-cta text-sm"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  S'inscrire à l'atelier
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
