"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Calendar, MapPin, Users, CheckCircle2, ArrowRight } from "lucide-react";
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

const topics = [
  "Pourquoi la stratégie RH devient un levier de croissance pour les entreprises marocaines",
  "Comment un SIRH moderne transforme la gestion administrative du personnel",
  "Retours d'expérience clients sur la digitalisation des processus RH (paie, congés, recrutement)",
  "Les nouveautés Sage, Factorial et Héliolys pour accompagner la croissance des PME",
  "Table ronde : attirer, fidéliser et développer les talents dans un marché concurrentiel",
];

const partners = ["Sage", "Factorial", "Héliolys"];

export default function StrategieRhSirhCroissanceClient() {
  const introRef = useRef(null);
  const recapRef = useRef(null);
  const partnersRef = useRef(null);
  const ctaRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const recapInView = useInView(recapRef, { once: true, margin: "-100px" });
  const partnersInView = useInView(partnersRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

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
            <span className="text-accent">Conférence RH & SIRH</span>
          </div>
          <span className="inline-flex items-center gap-2 bg-white/10 text-white/70 text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4">
            Événement terminé · Compte-rendu
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl"
          >
            Comment la stratégie RH et le SIRH soutiennent la croissance des entreprises
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-white/70 max-w-2xl mb-8"
          >
            Une matinée de conférences et d'échanges organisée en partenariat avec Sage, Factorial et Héliolys
            autour des nouveaux enjeux RH des entreprises marocaines.
          </motion.p>
          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            <span className="flex items-center gap-2"><Calendar size={16} className="text-accent" /> 13 mai 2026</span>
            <span className="flex items-center gap-2"><MapPin size={16} className="text-accent" /> Hotel Onomo Bd Al Massira, Casablanca</span>
            <span className="flex items-center gap-2"><Users size={16} className="text-accent" /> Conférence & networking</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16" ref={introRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate={introInView ? "visible" : "hidden"} className="max-w-3xl">
            <h2 className="text-2xl font-bold text-primary mb-5">Une matinée dédiée à la performance RH</h2>
            <p className="text-secondary leading-relaxed mb-4">
              Le 13 mai 2026, Thalès Informatique a organisé, en partenariat avec Sage, Factorial et Héliolys,
              une conférence dédiée aux dirigeants et responsables RH marocains, à l'Hotel Onomo de Casablanca.
              L'événement a réuni plus de 80 participants venus échanger sur la place stratégique des ressources
              humaines dans la croissance de leur entreprise.
            </p>
            <p className="text-secondary leading-relaxed">
              Au programme : interventions d'experts, démonstrations de solutions SIRH, témoignages clients
              et une table ronde sur les meilleures pratiques pour structurer une fonction RH moderne et
              digitalisée, capable d'accompagner durablement la croissance des organisations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16 bg-white" ref={recapRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate={recapInView ? "visible" : "hidden"} className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-2">Ce qui a été abordé</h2>
            <p className="text-secondary">Les principales thématiques de la conférence</p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={recapInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl"
          >
            {topics.map((item) => (
              <motion.div key={item} variants={fadeUp} className="flex items-start gap-3 p-4 bg-bg-base rounded-xl border border-border">
                <CheckCircle2 size={18} className="text-teal-600 mt-0.5 shrink-0" />
                <span className="text-sm text-secondary leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16" ref={partnersRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate={partnersInView ? "visible" : "hidden"} className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-6">Organisé en partenariat avec</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {partners.map((p) => (
                <span key={p} className="px-6 py-3 bg-white border border-border rounded-xl text-primary font-semibold">
                  {p}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white" ref={ctaRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate={ctaInView ? "visible" : "hidden"}>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Vous souhaitez moderniser votre fonction RH ?</h2>
            <p className="text-secondary mb-8 max-w-xl mx-auto">
              Découvrez nos solutions SIRH et nos services d'accompagnement RH adaptés à votre entreprise.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/metiers/sirh" className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200">
                Découvrir nos solutions SIRH
                <ChevronRight size={18} />
              </Link>
              <Link href="/evenements" className="inline-flex items-center gap-2 px-8 py-4 border border-border text-primary font-semibold rounded-xl hover:border-cta hover:text-cta transition-colors duration-200">
                Voir tous les événements
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
