"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Bug, Lock, Eye, Users, ShieldCheck, ArrowRight } from "lucide-react";
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

const domains = [
  { icon: Lock, title: "Pare-feu avancé", desc: "Filtrage et contrôle des accès réseau pour bloquer les intrusions." },
  { icon: Eye, title: "EDR & Détection", desc: "Surveillance comportementale des postes et serveurs pour détecter les menaces." },
  { icon: ShieldCheck, title: "Audits de sécurité", desc: "Tests de vulnérabilité et recommandations priorisées." },
  { icon: Users, title: "Sensibilisation des équipes", desc: "Formation de vos collaborateurs aux bonnes pratiques de cybersécurité." },
];

const benefits = [
  "Réduction du risque de cyberattaques et de fuite de données",
  "Conformité renforcée face aux exigences réglementaires",
  "Détection et réponse rapides en cas d'incident de sécurité",
  "Équipes sensibilisées aux risques de phishing et d'ingénierie sociale",
];

export default function CybersecuriteClient() {
  const introRef = useRef(null);
  const domainsRef = useRef(null);
  const benefitsRef = useRef(null);
  const ctaRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const domainsInView = useInView(domainsRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
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
              <span className="text-accent">Cybersécurité</span>
            </div>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-accent text-xs font-semibold tracking-widest mb-6">
                <Bug size={12} /> PROTECTION & CONFORMITÉ
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Cybersécurité
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Protégez vos systèmes, vos données et vos équipes contre les menaces informatiques.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section ref={introRef} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={introInView ? "visible" : "hidden"} className="max-w-3xl">
              <h2 className="text-3xl font-bold text-primary mb-6">Une sécurité multi-niveaux</h2>
              <p className="text-secondary text-lg leading-relaxed mb-4">
                Les cybermenaces évoluent en permanence. Notre offre de cybersécurité combine protection
                technique (pare-feu, EDR), audits réguliers et sensibilisation des équipes, pour réduire
                durablement votre exposition au risque.
              </p>
              <p className="text-secondary leading-relaxed">
                Notre équipe, basée à Casablanca, adapte le niveau de protection à la criticité de vos
                systèmes et accompagne vos collaborateurs vers de meilleures pratiques au quotidien.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Domains */}
        <section ref={domainsRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={domainsInView ? "visible" : "hidden"} className="text-center mb-14">
              <h2 className="text-3xl font-bold text-primary mb-4">Nos domaines d'action</h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" animate={domainsInView ? "visible" : "hidden"} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {domains.map((d) => (
                <motion.div key={d.title} variants={fadeUp} className="bg-bg rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-violet-100 text-violet-700 rounded-xl flex items-center justify-center mb-4">
                    <d.icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-primary mb-2">{d.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{d.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section ref={benefitsRef} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={benefitsInView ? "visible" : "hidden"} className="text-center mb-14">
              <h2 className="text-3xl font-bold text-primary mb-4">Pourquoi investir dans la cybersécurité</h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" animate={benefitsInView ? "visible" : "hidden"} className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {benefits.map((b) => (
                <motion.div key={b} variants={fadeUp} className="flex items-start gap-3 p-5 bg-white rounded-2xl border border-border">
                  <ShieldCheck size={18} className="text-violet-600 mt-0.5 shrink-0" />
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
              <h2 className="text-3xl font-bold text-white mb-4">Renforcez votre niveau de sécurité</h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Demandez un audit de sécurité gratuit de votre infrastructure.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg">
                  Demander un audit de sécurité
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
