"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  HeartHandshake,
  Users,
  FileSpreadsheet,
  Megaphone,
  ClipboardList,
  Receipt,
  Calendar,
  HandCoins,
  ShieldCheck,
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

export default function AssociationClient() {
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
      icon: Users,
      title: "Suivi des adhérents, bénévoles et cotisations",
      desc: "Centralisez la gestion de vos membres, le suivi des cotisations et la mobilisation de vos bénévoles.",
    },
    {
      icon: HandCoins,
      title: "Gestion des subventions, dons et financements",
      desc: "Suivez chaque source de financement et justifiez son utilisation auprès de vos bailleurs de fonds.",
    },
    {
      icon: FileSpreadsheet,
      title: "Comptabilité associative et transparence financière",
      desc: "Produisez des comptes clairs et conformes pour vos assemblées générales et vos partenaires.",
    },
  ];

  const solutions = [
    {
      icon: ClipboardList,
      title: "Gestion des adhérents",
      desc: "Fichier membres, cotisations, historique d'engagement et communication ciblée.",
    },
    {
      icon: HandCoins,
      title: "Suivi des subventions & dons",
      desc: "Affectation par projet, suivi des engagements et restitution aux bailleurs de fonds.",
    },
    {
      icon: Receipt,
      title: "Comptabilité associative",
      desc: "Plan comptable adapté, suivi par projet/centre de coût, clôtures simplifiées.",
    },
    {
      icon: Megaphone,
      title: "Gestion des événements",
      desc: "Organisation de campagnes, collectes de fonds et événements de sensibilisation.",
    },
    {
      icon: FileSpreadsheet,
      title: "Reporting bailleurs de fonds",
      desc: "Rapports financiers et d'impact prêts à l'emploi pour vos partenaires institutionnels.",
    },
    {
      icon: Calendar,
      title: "Gestion des bénévoles",
      desc: "Planification des missions, suivi des disponibilités et valorisation du temps bénévole.",
    },
  ];

  const products = [
    {
      name: "Sage 100",
      desc: "Comptabilité associative avec suivi analytique par projet et par source de financement",
      color: "from-rose-600 to-pink-700",
    },
    {
      name: "Sage 100 Paie & RH",
      desc: "Gestion de la paie de vos salariés permanents et de vos équipes terrain",
      color: "from-pink-600 to-fuchsia-600",
    },
  ];

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-rose-400 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-pink-400 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/secteurs" className="hover:text-white transition-colors">Secteurs</Link>
              <ChevronRight size={14} />
              <span className="text-white">Association</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-rose-500/20 border border-rose-400/30 rounded-full px-4 py-2 mb-6">
              <HeartHandshake size={14} className="text-rose-300" />
              <span className="text-rose-300 text-sm font-semibold uppercase tracking-wider">SECTEUR ASSOCIATIF</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Association<span className="text-rose-400">s & ONG</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Transparence financière et suivi des financements — une gestion claire pour servir votre mission sociale.
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
                Une gestion sereine au service de votre mission
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-4">
                Les associations et ONG marocaines doivent conjuguer suivi rigoureux des adhérents, traçabilité des subventions et transparence vis-à-vis de leurs bailleurs de fonds, souvent avec des ressources limitées.
              </p>
              <p className="text-secondary leading-relaxed">
                Thalès Informatique accompagne les structures associatives avec des outils de gestion adaptés, permettant de consacrer plus de temps à l&apos;impact social et moins à l&apos;administratif.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6">
              {[
                { value: "Multi", label: "Suivi par projet" },
                { value: "100%", label: "Traçabilité des fonds" },
                { value: "Simple", label: "Reporting bailleurs" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-6 bg-slate-50 rounded-2xl border border-border">
                  <div className="text-3xl font-bold text-rose-600 mb-2">{stat.value}</div>
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
              <h2 className="text-3xl font-bold text-primary mb-4">Les défis du secteur associatif</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Les associations marocaines doivent allier rigueur de gestion et transparence pour pérenniser leur action.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {challenges.map((c) => (
                <motion.div
                  key={c.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center mb-6">
                    <c.icon size={24} className="text-rose-600" />
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
              <h2 className="text-3xl font-bold text-primary mb-4">Nos solutions pour le secteur associatif</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Des outils de gestion pensés pour les contraintes et les obligations de transparence des associations.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((s) => (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  className="p-6 rounded-2xl border border-border bg-slate-50 hover:border-rose-200 hover:bg-rose-50/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-rose-600 flex items-center justify-center mb-4">
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

      {/* Transparence highlight */}
      <section className="py-16 bg-rose-50 border-y border-rose-100" ref={conformiteRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={conformiteInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-10 border-2 border-rose-200 shadow-sm text-center"
          >
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} className="text-rose-600" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Une transparence financière qui rassure vos partenaires
            </h3>
            <p className="text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
              Notre solution permet un suivi analytique par projet et par bailleur, pour produire à tout moment des comptes clairs et des rapports d&apos;utilisation des fonds conformes aux exigences de vos partenaires institutionnels et de vos assemblées générales.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {["Comptabilité associative", "Suivi par projet", "Subventions & dons", "Reporting bailleurs"].map((norm) => (
                <span key={norm} className="bg-rose-100 text-rose-700 font-semibold text-sm px-4 py-2 rounded-full border border-rose-200">
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
                Thalès Informatique sélectionne les meilleures solutions pour les associations et ONG marocaines.
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

      {/* CTA */}
      <section className="py-20 bg-rose-700" ref={ctaRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-6">
              Voir une démonstration pour votre association
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-lg mb-10">
              Découvrez comment Thalès Informatique simplifie la gestion financière des associations marocaines.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-rose-700 font-bold px-8 py-4 rounded-xl hover:bg-rose-50 transition-colors shadow-lg"
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
