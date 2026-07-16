"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  Landmark,
  ShieldCheck,
  FileSpreadsheet,
  ClipboardList,
  Receipt,
  Calendar,
  Users,
  Wallet,
  ScanSearch,
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function BanqueAssuranceMutuelleClient() {
  const introRef = useRef(null);
  const challengesRef = useRef(null);
  const solutionsRef = useRef(null);
  const conformiteRef = useRef(null);
  const productsRef = useRef(null);
  const ctaRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const challengesInView = useInView(challengesRef, { once: true, margin: "-100px" });
  const solutionsInView = useInView(solutionsRef, { once: true, margin: "-100px" });
  const conformiteInView = useInView(conformiteRef, { once: true, margin: "-100px" });
  const productsInView = useInView(productsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const challenges = [
    {
      icon: ShieldCheck,
      title: "Conformité réglementaire Bank Al-Maghrib et ACAPS",
      desc: "Répondez aux exigences prudentielles et réglementaires imposées aux établissements bancaires, d'assurance et mutualistes marocains.",
    },
    {
      icon: ScanSearch,
      title: "KYC et lutte anti-blanchiment",
      desc: "Sécurisez l'identification des clients et le suivi des opérations sensibles dans le respect des obligations de vigilance.",
    },
    {
      icon: Wallet,
      title: "Trésorerie et reporting multi-agences",
      desc: "Consolidez vos flux financiers et produisez un reporting fiable sur l'ensemble de votre réseau d'agences.",
    },
  ];

  const solutions = [
    {
      icon: ClipboardList,
      title: "Gestion des contrats et sinistres",
      desc: "Suivi du cycle de vie des contrats, instruction et indemnisation des sinistres, historique client centralisé.",
    },
    {
      icon: FileSpreadsheet,
      title: "Reporting prudentiel",
      desc: "Production des états réglementaires et financiers attendus par les autorités de tutelle.",
    },
    {
      icon: Wallet,
      title: "Trésorerie multi-agences",
      desc: "Consolidation des positions de trésorerie, rapprochements bancaires et pilotage centralisé des flux.",
    },
    {
      icon: ScanSearch,
      title: "KYC & vigilance client",
      desc: "Processus d'identification renforcée, détection des opérations atypiques et traçabilité des contrôles.",
    },
    {
      icon: Receipt,
      title: "Consolidation comptable groupe",
      desc: "Comptes consolidés multi-entités, états financiers conformes aux référentiels en vigueur.",
    },
    {
      icon: Users,
      title: "Gestion RH multi-agences",
      desc: "Paie et administration du personnel harmonisées sur l'ensemble de votre réseau d'agences.",
    },
  ];

  const products = [
    {
      name: "Sage FRP 1000",
      desc: "Consolidation financière et reporting de groupe pour les structures bancaires, d'assurance et mutualistes multi-entités",
      color: "from-indigo-600 to-sky-700",
    },
    {
      name: "Sage 100 Paie & RH",
      desc: "Gestion RH et paie harmonisée pour des réseaux d'agences et de points de vente répartis sur le territoire",
      color: "from-sky-600 to-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-indigo-400 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-sky-400 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight aria-hidden="true" size={14} />
              <Link href="/secteurs" className="hover:text-white transition-colors">Secteurs</Link>
              <ChevronRight aria-hidden="true" size={14} />
              <span aria-current="page" className="text-white">Banque, Assurance & Mutuelle</span>
            </nav>
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full px-4 py-2 mb-6">
              <Landmark size={14} className="text-indigo-300" />
              <span className="text-indigo-300 text-sm font-semibold uppercase tracking-wider">SECTEUR BANQUE, ASSURANCE & MUTUELLE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Banque, Assurance <span className="text-indigo-400">& Mutuelle</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Conformité réglementaire et maîtrise des risques — une gestion rigoureuse pour les institutions financières marocaines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro 2-col */}
      <section className="py-20 bg-white" ref={introRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={introInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Une gestion conforme et maîtrisée du risque
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-4">
                Les établissements bancaires, compagnies d&apos;assurance et mutuelles marocaines évoluent dans un cadre réglementaire strict, sous la supervision de Bank Al-Maghrib et de l&apos;ACAPS, avec des exigences fortes en matière de reporting prudentiel et de vigilance client.
              </p>
              <p className="text-secondary leading-relaxed">
                Thalès Informatique accompagne ces institutions avec des outils de gestion adaptés à la consolidation multi-agences, à la gestion des contrats et sinistres, et à la production de rapports conformes aux exigences des autorités de tutelle.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6">
              {[
                { value: "Multi", label: "Consolidation agences" },
                { value: "KYC", label: "Vigilance client" },
                { value: "100%", label: "Traçabilité financière" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-6 bg-slate-50 rounded-2xl border border-border">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-secondary">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Défis */}
      <section className="py-20 bg-slate-50" ref={challengesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={challengesInView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-3xl font-bold text-primary mb-4">Les défis du secteur financier</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Les institutions financières marocaines doivent conjuguer conformité réglementaire et performance opérationnelle.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {challenges.map((c) => (
                <motion.div
                  key={c.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-6">
                    <c.icon size={24} className="text-indigo-600" />
                  </div>
                  <h3 className="font-bold text-primary mb-3">{c.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-white" ref={solutionsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={solutionsInView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-3xl font-bold text-primary mb-4">Nos solutions pour le secteur financier</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Des outils de gestion conçus pour les exigences de conformité et de pilotage des institutions financières.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((s) => (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  className="p-6 rounded-2xl border border-border bg-slate-50 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center mb-4">
                    <s.icon size={18} className="text-white" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{s.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conformité highlight */}
      <section className="py-16 bg-indigo-50 border-y border-indigo-100" ref={conformiteRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={conformiteInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-10 border-2 border-indigo-200 shadow-sm text-center"
          >
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} className="text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Une conformité réglementaire intégrée à votre gestion
            </h3>
            <p className="text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
              Notre solution structure vos processus de reporting prudentiel, de vigilance client et de consolidation financière, pour répondre aux exigences des autorités de tutelle marocaines tout en sécurisant votre activité au quotidien.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {["Bank Al-Maghrib", "ACAPS", "KYC", "Reporting prudentiel", "Anti-blanchiment"].map((norm) => (
                <span key={norm} className="bg-indigo-100 text-indigo-700 font-semibold text-sm px-4 py-2 rounded-full border border-indigo-200">
                  {norm}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions recommandées */}
      <section className="py-20 bg-primary" ref={productsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={productsInView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-3xl font-bold text-white mb-4">Solutions recommandées</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Thalès Informatique sélectionne les meilleures solutions pour les institutions financières marocaines.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {products.map((p) => (
                <motion.div
                  key={p.name}
                  variants={fadeUp}
                  className={`rounded-2xl p-8 bg-gradient-to-br ${p.color} text-white`}
                >
                  <h3 className="text-xl font-bold mb-3">{p.name}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logos clients */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-secondary uppercase tracking-widest mb-10">Ils nous font confiance</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img
              src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1783607804/logos_they_trust_us_500_x_500_px_6_t9osaf.png"
              alt="Client Banque & Assurance - Thalès Informatique"
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-200"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-700" ref={ctaRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-6">
              Voir une démonstration pour votre institution financière
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-lg mb-10">
              Découvrez comment Thalès Informatique sécurise la conformité réglementaire des banques, assurances et mutuelles marocaines.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-colors shadow-lg"
              >
                Demander une démo
                <ChevronRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
