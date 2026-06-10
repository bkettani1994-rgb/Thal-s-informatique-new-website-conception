"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Server, Check, Lock, Cloud, Activity, HeadphonesIcon } from "lucide-react";
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

const offerings = [
  {
    icon: Server,
    title: "Administration de votre infrastructure",
    description: "Gestion complète de vos serveurs, postes de travail, réseaux et systèmes — sur site, hébergés ou en cloud.",
  },
  {
    icon: Activity,
    title: "Supervision proactive 24h/24",
    description: "Monitoring en continu de vos systèmes pour détecter et résoudre les incidents avant qu'ils n'impactent votre activité.",
  },
  {
    icon: Lock,
    title: "Sécurité & sauvegardes",
    description: "Protection de vos données : antivirus, pare-feu, sauvegardes automatisées et plan de reprise d'activité (PRA).",
  },
  {
    icon: Cloud,
    title: "Hébergement & cloud",
    description: "Migration et gestion de vos environnements cloud (Microsoft 365, Azure, hébergement dédié) avec garantie de disponibilité.",
  },
  {
    icon: HeadphonesIcon,
    title: "Hotline dédiée",
    description: "Une équipe d'experts joignable pour traiter vos demandes et incidents avec des délais d'intervention garantis.",
  },
  {
    icon: Check,
    title: "Reporting & amélioration continue",
    description: "Tableaux de bord mensuels sur l'état de votre parc informatique et recommandations d'optimisation régulières.",
  },
];

const benefits = [
  "Maîtrise et prévisibilité de votre budget IT",
  "Réduction des pannes et des interruptions de service",
  "Accès à une expertise technique multi-spécialités",
  "Recentrage de vos équipes sur votre cœur de métier",
  "Mise à jour continue de votre parc et de vos logiciels",
  "Conformité et sécurité renforcées de votre SI",
];

const process = [
  { step: "01", title: "Audit de votre parc", description: "Analyse complète de votre infrastructure existante, des risques et des besoins métiers." },
  { step: "02", title: "Plan d'infogérance sur mesure", description: "Définition du périmètre, des niveaux de service (SLA) et du plan de transition." },
  { step: "03", title: "Prise en charge & supervision", description: "Mise en place de la supervision proactive et prise en main de votre infrastructure." },
  { step: "04", title: "Suivi & amélioration continue", description: "Reporting régulier, ajustements et accompagnement dans vos évolutions technologiques." },
];

const stats = [
  { value: "24/7", label: "Supervision continue" },
  { value: "<1h", label: "Délai d'intervention prioritaire" },
  { value: "99.9%", label: "Disponibilité garantie" },
];

export default function InfogeranceClient() {
  const introRef = useRef(null);
  const offeringsRef = useRef(null);
  const benefitsRef = useRef(null);
  const processRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const offeringsInView = useInView(offeringsRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight size={14} />
              <span className="text-accent">Infogérance</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
                <Server size={14} />
                INFOGÉRANCE
              </span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold text-white mb-6"
            >
              Infogérance
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70 max-w-2xl"
            >
              Confiez la gestion de votre système d'information à nos experts et concentrez-vous sur votre activité
            </motion.p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20" ref={introRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={introInView ? "visible" : "hidden"}
              className="max-w-3xl"
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Une gestion externalisée, sereine et performante de votre IT</h2>
              <p className="text-lg text-secondary leading-relaxed">
                Avec l'infogérance Thalès Informatique, vous confiez tout ou partie de la gestion de votre système
                d'information à une équipe d'experts dédiée. Supervision proactive, sécurité, sauvegardes, hébergement
                et hotline : nous prenons en charge votre infrastructure pour vous garantir un système d'information
                fiable, sécurisé et toujours disponible — tout en maîtrisant vos coûts.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Offerings */}
        <section className="py-20 bg-white" ref={offeringsRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={offeringsInView ? "visible" : "hidden"}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Notre offre d'infogérance</h2>
              <p className="text-secondary">Un accompagnement complet, adapté à la taille et aux enjeux de votre entreprise</p>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={offeringsInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {offerings.map((offer) => (
                <motion.div
                  key={offer.title}
                  variants={fadeUp}
                  className="p-6 rounded-2xl border border-border bg-bg hover:border-cyan-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-5">
                    <offer.icon size={22} className="text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{offer.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{offer.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20" ref={benefitsRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={benefitsInView ? "visible" : "hidden"}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Les bénéfices de l'infogérance</h2>
              <p className="text-secondary">Pourquoi externaliser la gestion de votre système d'information</p>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={benefitsInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
            >
              {benefits.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center shrink-0">
                    <Check size={16} className="text-cyan-600" />
                  </div>
                  <span className="text-sm font-medium text-primary">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white" ref={processRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={processInView ? "visible" : "hidden"}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Notre méthode</h2>
              <p className="text-secondary">De l'audit initial au suivi continu de votre infrastructure</p>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={processInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {process.map((p) => (
                <motion.div key={p.step} variants={fadeUp} className="p-6 rounded-2xl border border-border bg-bg">
                  <div className="text-3xl font-bold text-cyan-500/30 mb-3">{p.step}</div>
                  <h3 className="text-base font-bold text-primary mb-2">{p.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{p.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-primary" ref={statsRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={fadeUp}>
                  <div className="text-5xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white" ref={ctaRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Confiez-nous la gestion de votre IT</h2>
              <p className="text-secondary mb-8 max-w-xl mx-auto">
                Discutons de vos besoins et construisons ensemble un plan d'infogérance sur mesure pour votre entreprise.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
              >
                Demander un audit gratuit
                <ChevronRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
