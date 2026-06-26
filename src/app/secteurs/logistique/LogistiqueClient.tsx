"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  Truck,
  ShieldCheck,
  ClipboardList,
  Warehouse,
  Route,
  PackageSearch,
  Network,
  Globe,
  BarChart3,
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

export default function LogistiqueClient() {
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
      icon: Warehouse,
      title: "Gestion multi-entrepôts et optimisation des stocks",
      desc: "Pilotez plusieurs sites de stockage avec une visibilité en temps réel sur les niveaux et emplacements de stock.",
    },
    {
      icon: Route,
      title: "Optimisation du transport et des tournées",
      desc: "Réduisez les coûts de transport et améliorez les délais grâce à une planification fine des tournées.",
    },
    {
      icon: Network,
      title: "Échanges EDI avec les partenaires",
      desc: "Automatisez les flux d'informations avec vos clients, transporteurs et fournisseurs via des échanges normalisés.",
    },
  ];

  const solutions = [
    {
      icon: Warehouse,
      title: "Gestion multi-entrepôts (WMS)",
      desc: "Pilotage des emplacements, des mouvements de stock et des inventaires sur plusieurs sites.",
    },
    {
      icon: Route,
      title: "Optimisation du transport",
      desc: "Planification des tournées, suivi des coûts de transport et gestion des prestataires.",
    },
    {
      icon: PackageSearch,
      title: "Traçabilité temps réel",
      desc: "Suivi des flux de marchandises en temps réel, du réceptionnaire à la livraison finale.",
    },
    {
      icon: Network,
      title: "Échanges EDI partenaires",
      desc: "Automatisation des échanges de commandes, avis d'expédition et factures avec vos partenaires.",
    },
    {
      icon: Globe,
      title: "Gestion import/export",
      desc: "Suivi des flux internationaux, documentation douanière et gestion des incoterms.",
    },
    {
      icon: BarChart3,
      title: "Pilotage de la performance",
      desc: "Tableaux de bord logistiques, indicateurs de service et suivi des coûts par flux.",
    },
  ];

  const products = [
    {
      name: "Sage X3",
      desc: "ERP préconfigurée pour la gestion logistique et supply chain, avec WMS et traçabilité intégrés",
      color: "from-cyan-600 to-teal-700",
    },
    {
      name: "Sage 100",
      desc: "Gestion commerciale et gestion des stocks adaptée aux opérateurs logistiques et transporteurs",
      color: "from-teal-600 to-cyan-600",
    },
  ];

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-teal-400 blur-3xl" />
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
              <span className="text-white">Logistique</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
              <Truck size={14} className="text-cyan-300" />
              <span className="text-cyan-300 text-sm font-semibold uppercase tracking-wider">SECTEUR LOGISTIQUE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Logis<span className="text-cyan-400">tique</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Gestion multi-entrepôts et traçabilité temps réel — une supply chain optimisée pour les opérateurs logistiques marocains.
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
                Une supply chain pilotée de bout en bout
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-4">
                Les opérateurs logistiques marocains doivent gérer plusieurs entrepôts, optimiser leurs tournées de transport et fluidifier les échanges avec leurs partenaires, tout en assurant une traçabilité en temps réel des flux import/export.
              </p>
              <p className="text-secondary leading-relaxed">
                Thalès Informatique accompagne les acteurs de la logistique avec des solutions de gestion d&apos;entrepôts, de transport et d&apos;échanges EDI, pour une supply chain plus visible et plus performante.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6">
              {[
                { value: "Multi", label: "Entrepôts pilotés" },
                { value: "Temps réel", label: "Traçabilité des flux" },
                { value: "EDI", label: "Échanges partenaires" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-6 bg-slate-50 rounded-2xl border border-border">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">{stat.value}</div>
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
              <h2 className="text-3xl font-bold text-primary mb-4">Les défis du secteur logistique</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Les opérateurs logistiques marocains doivent gagner en visibilité et en efficacité sur l&apos;ensemble de la chaîne.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {challenges.map((c) => (
                <motion.div
                  key={c.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-6">
                    <c.icon size={24} className="text-cyan-600" />
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
              <h2 className="text-3xl font-bold text-primary mb-4">Nos solutions pour la logistique</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Des outils de gestion conçus pour piloter votre supply chain de bout en bout.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((s) => (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  className="p-6 rounded-2xl border border-border bg-slate-50 hover:border-cyan-200 hover:bg-cyan-50/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-600 flex items-center justify-center mb-4">
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

      {/* Traçabilité highlight */}
      <section className="py-16 bg-cyan-50 border-y border-cyan-100" ref={conformiteRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={conformiteInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-10 border-2 border-cyan-200 shadow-sm text-center"
          >
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} className="text-cyan-600" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Une visibilité totale sur vos flux logistiques
            </h3>
            <p className="text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
              Notre solution centralise la gestion de vos entrepôts, le suivi de vos transports et vos échanges EDI avec vos partenaires, pour une traçabilité en temps réel de vos flux import/export et une meilleure maîtrise de vos coûts logistiques.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {["WMS", "EDI", "Traçabilité temps réel", "Import/Export", "Optimisation transport"].map((norm) => (
                <span key={norm} className="bg-cyan-100 text-cyan-700 font-semibold text-sm px-4 py-2 rounded-full border border-cyan-200">
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
                Thalès Informatique sélectionne les meilleures solutions pour les opérateurs logistiques marocains.
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
      <section className="py-20 bg-cyan-700" ref={ctaRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-6">
              Voir une démonstration pour votre activité logistique
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-lg mb-10">
              Découvrez comment Thalès Informatique optimise la supply chain des opérateurs logistiques marocains.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-cyan-700 font-bold px-8 py-4 rounded-xl hover:bg-cyan-50 transition-colors shadow-lg"
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
