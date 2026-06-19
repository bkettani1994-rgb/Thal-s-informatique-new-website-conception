"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Database, RefreshCcw, ShieldAlert, Timer, CheckCircle, ArrowRight } from "lucide-react";
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

const steps = [
  { num: "01", title: "Cartographie des données critiques", desc: "Identification des données et systèmes prioritaires à protéger", icon: <Database size={20} /> },
  { num: "02", title: "Mise en place des sauvegardes", desc: "Configuration de sauvegardes automatisées, locales et externalisées", icon: <RefreshCcw size={20} /> },
  { num: "03", title: "Plan de reprise d'activité", desc: "Définition des procédures et délais de reprise (RTO/RPO)", icon: <ShieldAlert size={20} /> },
  { num: "04", title: "Tests de restauration", desc: "Vérification périodique de la fiabilité des sauvegardes", icon: <Timer size={20} /> },
];

const guarantees = [
  "Sauvegardes automatisées et chiffrées, locales et dans le cloud",
  "Plan de reprise d'activité (PRA) adapté à votre niveau de criticité",
  "Tests de restauration réguliers pour garantir la fiabilité des données",
  "Délais de reprise (RTO) et de perte de données (RPO) définis avec vous",
];

export default function BackupDisasterRecoveryClient() {
  const introRef = useRef(null);
  const stepsRef = useRef(null);
  const guaranteesRef = useRef(null);
  const ctaRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const stepsInView = useInView(stepsRef, { once: true, margin: "-100px" });
  const guaranteesInView = useInView(guaranteesRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-white/50 text-sm mb-8 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight size={14} />
              <Link href="/services/infogerance" className="hover:text-white transition-colors">Infogérance</Link>
              <ChevronRight size={14} />
              <span className="text-accent">Backup & Disaster Recovery</span>
            </div>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-accent text-xs font-semibold tracking-widest mb-6">
                <Database size={12} /> CONTINUITÉ D'ACTIVITÉ
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Backup & Disaster Recovery
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Protégez vos données et garantissez la continuité de votre activité, même en cas d'incident majeur.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section ref={introRef} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={introInView ? "visible" : "hidden"} className="max-w-3xl">
              <h2 className="text-3xl font-bold text-primary mb-6">Vos données, protégées en toutes circonstances</h2>
              <p className="text-secondary text-lg leading-relaxed mb-4">
                Une panne, une erreur humaine ou une cyberattaque peut compromettre vos données en quelques
                minutes. Notre offre Backup & Disaster Recovery met en place des sauvegardes automatisées et
                un plan de reprise d'activité testé régulièrement, pour minimiser l'impact d'un incident.
              </p>
              <p className="text-secondary leading-relaxed">
                Notre équipe, basée à Casablanca, définit avec vous les délais de reprise acceptables et met
                en œuvre les solutions techniques adaptées à votre niveau de criticité.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Steps */}
        <section ref={stepsRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={stepsInView ? "visible" : "hidden"} className="text-center mb-14">
              <h2 className="text-3xl font-bold text-primary mb-4">Notre démarche en 4 étapes</h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" animate={stepsInView ? "visible" : "hidden"} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s) => (
                <motion.div key={s.num} variants={fadeUp} className="relative bg-bg rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-black text-blue-50 absolute top-4 right-4">{s.num}</div>
                  <div className="w-10 h-10 bg-cta/10 text-cta rounded-xl flex items-center justify-center mb-4">{s.icon}</div>
                  <h3 className="text-base font-bold text-primary mb-2">{s.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Guarantees */}
        <section ref={guaranteesRef} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={guaranteesInView ? "visible" : "hidden"} className="text-center mb-14">
              <h2 className="text-3xl font-bold text-primary mb-4">Nos engagements</h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" animate={guaranteesInView ? "visible" : "hidden"} className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {guarantees.map((g) => (
                <motion.div key={g} variants={fadeUp} className="flex items-start gap-3 p-5 bg-white rounded-2xl border border-border">
                  <CheckCircle size={18} className="text-cta mt-0.5 shrink-0" />
                  <span className="text-sm text-secondary leading-relaxed">{g}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaRef} className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={ctaInView ? "visible" : "hidden"} className="bg-primary rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Sécurisez la continuité de vos données</h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Échangeons sur votre stratégie de sauvegarde et de reprise d'activité.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg">
                  Échanger avec un expert
                  <ChevronRight size={18} />
                </Link>
                <Link href="/services/infogerance" className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                  Retour à l'infogérance
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
