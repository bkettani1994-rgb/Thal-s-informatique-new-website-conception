"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Calendar, Video, Users, CheckCircle2, Sparkles } from "lucide-react";
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

const changes = [
  {
    title: "Une nouvelle interface web, intuitive et épurée",
    desc: "Prise en main immédiate, accessible partout, à tout moment, dans le cloud sécurisé Microsoft Azure.",
  },
  {
    title: "Un assistant IA conversationnel",
    desc: "Posez vos questions en langage naturel et obtenez des réponses actionnables en temps réel, sans export ni requête complexe.",
  },
  {
    title: "Une personnalisation avancée",
    desc: "Des tableaux de bord, formulaires et workflows adaptés à vos métiers, sans développement spécifique.",
  },
  {
    title: "Une plateforme ouverte",
    desc: "Connectée à votre écosystème d'outils.",
  },
];

export default function WebinaireSage100ExperienceClient() {
  const introRef = useRef(null);
  const changesRef = useRef(null);
  const formRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const changesInView = useInView(changesRef, { once: true, margin: "-100px" });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="overflow-x-hidden bg-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link href="/evenements" className="hover:text-white transition-colors">Événements</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page" className="text-accent">Webinaire Sage 100 Expérience</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-accent/20 text-accent text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4">
            <Sparkles size={12} aria-hidden="true" />
            Inscriptions ouvertes
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl"
          >
            Sage 100 Expérience Édition : votre solution réinventée
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-white/70 max-w-2xl mb-8"
          >
            Nouvelle interface web et assistant IA embarqué : votre solution Sage 100 change. Découvrez ce qui évolue concrètement pour vous.
          </motion.p>
          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            <span className="flex items-center gap-2"><Calendar size={16} className="text-accent" aria-hidden="true" /> 5 août 2026 — 10h00</span>
            <span className="flex items-center gap-2"><Video size={16} className="text-accent" aria-hidden="true" /> En ligne</span>
            <span className="flex items-center gap-2"><Users size={16} className="text-accent" aria-hidden="true" /> Places limitées</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16" ref={introRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate={introInView ? "visible" : "hidden"} className="max-w-3xl">
            <h2 className="text-2xl font-bold text-primary mb-5">Pourquoi participer ?</h2>
            <p className="text-secondary leading-relaxed">
              Vous connaissez et utilisez Sage 100 au quotidien pour piloter votre activité. Aujourd&apos;hui, nous franchissons une nouvelle étape pour vous faire gagner en simplicité, en agilité et en performance : <strong className="text-primary">Sage 100 Expérience Édition</strong>. Rejoignez ce webinaire pour découvrir en avant-première ce qui change concrètement pour vous.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ce qui change */}
      <section className="py-16 bg-white" ref={changesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate={changesInView ? "visible" : "hidden"} className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-2">Ce qui change concrètement pour vous</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" animate={changesInView ? "visible" : "hidden"} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {changes.map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="flex items-start gap-3 p-5 bg-bg-base rounded-xl border border-border">
                <CheckCircle2 size={18} className="text-blue-600 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <p data-ilink className="text-secondary text-sm mt-8 max-w-3xl">
            Envie d&apos;en savoir plus dès maintenant ? Découvrez <Link href="/solutions/sage-100-experience" className="text-cta font-semibold hover:underline">Sage 100 Expérience</Link>.
          </p>
        </div>
      </section>

      {/* Registration form */}
      <section className="py-20 bg-primary" ref={formRef}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate={formInView ? "visible" : "hidden"} className="bg-white rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-primary mb-2 text-center">Réservez votre place</h2>
            <p className="text-secondary text-center mb-8">Places limitées — inscription gratuite et sans engagement</p>
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 size={40} className="text-emerald-500 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-bold text-primary mb-2">Inscription confirmée !</h3>
                <p className="text-secondary">Vous recevrez le lien de connexion par email avant l&apos;événement.</p>
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
                  S&apos;inscrire au webinaire
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
