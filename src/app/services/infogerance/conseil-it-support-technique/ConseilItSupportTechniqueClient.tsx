"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Headset, Lightbulb, Map, Headphones, Clock, ArrowRight } from "lucide-react";
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

const services = [
  { icon: Lightbulb, title: "Conseil stratégique IT", desc: "Accompagnement sur votre roadmap technologique et vos choix d'investissement IT." },
  { icon: Map, title: "Feuille de route", desc: "Définition d'un plan d'évolution priorisé pour votre infrastructure et vos outils." },
  { icon: Headphones, title: "Helpdesk réactif", desc: "Support technique disponible pour répondre rapidement aux demandes de vos équipes." },
  { icon: Clock, title: "Interventions sur site", desc: "Déplacement de nos techniciens lorsque les incidents nécessitent une intervention physique." },
];

const benefits = [
  "Un conseil indépendant aligné sur vos enjeux métiers",
  "Helpdesk réactif pour limiter l'impact des incidents sur vos équipes",
  "Une feuille de route IT claire et priorisée",
  "Des interventions sur site lorsque la situation l'exige",
];

export default function ConseilItSupportTechniqueClient() {
  const introRef = useRef(null);
  const servicesRef = useRef(null);
  const benefitsRef = useRef(null);
  const ctaRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
          <img
            src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1781880098/IT_servers_fcccww.jpg"
            alt="Conseil IT et support technique sur l'infrastructure serveur de l'entreprise"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-slate-800/90 to-slate-900/85" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-white/50 text-sm mb-8 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight aria-hidden="true" size={14} />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight aria-hidden="true" size={14} />
              <Link href="/services/infogerance" className="hover:text-white transition-colors">Infogérance</Link>
              <ChevronRight aria-hidden="true" size={14} />
              <span aria-current="page" className="text-accent">Conseil IT et Support Technique</span>
            </nav>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-accent text-xs font-semibold tracking-widest mb-6">
                <Headset size={12} /> ACCOMPAGNEMENT & HELPDESK
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Conseil IT et Support Technique
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Un conseil stratégique sur votre roadmap IT, doublé d'un helpdesk réactif pour vos équipes au quotidien.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section ref={introRef} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={introInView ? "visible" : "hidden"} className="max-w-3xl">
              <h2 className="text-3xl font-bold text-primary mb-6">De la stratégie au quotidien opérationnel</h2>
              <p className="text-secondary text-lg leading-relaxed mb-4">
                Au-delà de la gestion technique, nos consultants vous aident à structurer votre roadmap IT et
                à prioriser vos investissements. En parallèle, notre helpdesk accompagne vos collaborateurs
                au quotidien pour résoudre rapidement leurs incidents et leurs demandes.
              </p>
              <p className="text-secondary leading-relaxed">
                Basée à Casablanca, notre équipe combine vision stratégique et proximité opérationnelle pour
                un accompagnement complet.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section ref={servicesRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={servicesInView ? "visible" : "hidden"} className="text-center mb-14">
              <h2 className="text-3xl font-bold text-primary mb-4">Notre offre</h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" animate={servicesInView ? "visible" : "hidden"} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s) => (
                <motion.div key={s.title} variants={fadeUp} className="bg-bg rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center mb-4">
                    <s.icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-primary mb-2">{s.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section ref={benefitsRef} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={benefitsInView ? "visible" : "hidden"} className="text-center mb-14">
              <h2 className="text-3xl font-bold text-primary mb-4">Ce que vous y gagnez</h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" animate={benefitsInView ? "visible" : "hidden"} className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {benefits.map((b) => (
                <motion.div key={b} variants={fadeUp} className="flex items-start gap-3 p-5 bg-white rounded-2xl border border-border">
                  <Headset size={18} className="text-amber-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-secondary leading-relaxed">{b}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaRef} className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={ctaInView ? "visible" : "hidden"} className="bg-primary rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Parlons de votre roadmap IT</h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Échangeons sur vos besoins de conseil et de support technique.
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
