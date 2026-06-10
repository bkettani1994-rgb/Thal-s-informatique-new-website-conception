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
  { time: "09h00", title: "Accueil & petit-déjeuner networking", desc: "Café d'accueil et présentation de la journée." },
  { time: "09h30", title: "Conférence d'ouverture : l'avenir de la gestion d'entreprise", desc: "Tendances ERP, IA et cloud — où va la gestion d'entreprise au Maroc et en Afrique ?" },
  { time: "10h30", title: "Tables rondes sectorielles", desc: "Industrie, négoce, services, BTP : retours d'expérience de dirigeants marocains." },
  { time: "12h00", title: "Démonstrations live Sage X3, Sage 100 et solutions partenaires", desc: "Espace dédié aux démonstrations personnalisées par secteur d'activité." },
  { time: "13h00", title: "Déjeuner networking", desc: "Moment d'échange convivial entre participants, partenaires et experts Thalès Informatique." },
];

const audience = [
  "Dirigeants et DAF souhaitant moderniser leur gestion d'entreprise",
  "DSI et responsables IT en réflexion sur leur feuille de route digitale",
  "Responsables de production, RH ou supply chain en quête d'outils performants",
  "Porteurs de projets de transformation digitale au sein de leur organisation",
];

export default function ForumErpCasablancaClient() {
  const introRef = useRef(null);
  const programRef = useRef(null);
  const audienceRef = useRef(null);
  const formRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const programInView = useInView(programRef, { once: true, margin: "-100px" });
  const audienceInView = useInView(audienceRef, { once: true, margin: "-100px" });
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
            <span className="text-accent">Forum ERP Casablanca</span>
          </div>
          <span className="inline-flex items-center gap-2 bg-accent/20 text-accent text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4">
            Inscriptions ouvertes
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl"
          >
            Forum ERP Casablanca : L'avenir de la gestion d'entreprise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-white/70 max-w-2xl mb-8"
          >
            Une journée de conférences, tables rondes et démonstrations dédiée aux dirigeants et décideurs
            marocains qui veulent préparer l'avenir de leur gestion d'entreprise.
          </motion.p>
          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            <span className="flex items-center gap-2"><Calendar size={16} className="text-accent" /> 25 juin 2026 — Journée complète</span>
            <span className="flex items-center gap-2"><MapPin size={16} className="text-accent" /> Hôtel Sofitel, Casablanca</span>
            <span className="flex items-center gap-2"><Users size={16} className="text-accent" /> 250 places</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16" ref={introRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate={introInView ? "visible" : "hidden"} className="max-w-3xl">
            <h2 className="text-2xl font-bold text-primary mb-5">Un rendez-vous incontournable pour les décideurs marocains</h2>
            <p className="text-secondary leading-relaxed">
              Le Forum ERP Casablanca réunit dirigeants, DAF, DSI et responsables métiers autour d'une question
              centrale : comment préparer son entreprise aux mutations technologiques à venir ? Au programme :
              conférences d'experts, tables rondes sectorielles, démonstrations live de nos solutions ERP Sage
              et témoignages de dirigeants marocains ayant mené à bien leur transformation digitale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program */}
      <section className="py-16 bg-white" ref={programRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate={programInView ? "visible" : "hidden"} className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-2">Programme de la journée</h2>
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

      {/* Audience */}
      <section className="py-16" ref={audienceRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate={audienceInView ? "visible" : "hidden"} className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-2">Cet événement est fait pour vous si…</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" animate={audienceInView ? "visible" : "hidden"} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {audience.map((item) => (
              <motion.div key={item} variants={fadeUp} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border">
                <CheckCircle2 size={18} className="text-violet-600 mt-0.5 shrink-0" />
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
            <p className="text-secondary text-center mb-8">250 places disponibles — inscription gratuite</p>
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 size={40} className="text-emerald-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-primary mb-2">Inscription confirmée !</h3>
                <p className="text-secondary">Vous recevrez votre confirmation et les informations pratiques par email.</p>
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
                  S'inscrire au forum
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
