"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  FlaskConical,
  ShieldCheck,
  ClipboardList,
  AlertTriangle,
  Beaker,
  PackageX,
  FileSpreadsheet,
  Truck,
  BookOpen,
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

export default function ChimieClient() {
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
      icon: AlertTriangle,
      title: "Gestion des matières dangereuses et des formulations",
      desc: "Maîtrisez la composition de vos formules et le stockage sécurisé de vos matières classées dangereuses.",
    },
    {
      icon: ShieldCheck,
      title: "Conformité REACH et SEVESO",
      desc: "Répondez aux exigences réglementaires applicables aux substances chimiques et aux sites à risque.",
    },
    {
      icon: FileSpreadsheet,
      title: "Fiches de données de sécurité et traçabilité des lots",
      desc: "Centralisez vos FDS et assurez une traçabilité complète de chaque lot, du fournisseur au client final.",
    },
  ];

  const solutions = [
    {
      icon: Beaker,
      title: "Gestion des formulations",
      desc: "Formules de fabrication, variantes produits, calcul du coût de revient par formule chimique.",
    },
    {
      icon: ClipboardList,
      title: "Traçabilité des lots",
      desc: "N° de lot, origine matière première, traçabilité amont/aval complète sur l'ensemble du cycle.",
    },
    {
      icon: ShieldCheck,
      title: "Conformité REACH/SEVESO",
      desc: "Suivi des seuils réglementaires, gestion documentaire et préparation aux audits de conformité.",
    },
    {
      icon: FileSpreadsheet,
      title: "Fiches de données de sécurité",
      desc: "Centralisation des FDS, mise à jour réglementaire et diffusion aux équipes concernées.",
    },
    {
      icon: PackageX,
      title: "Gestion des stocks ADR",
      desc: "Stockage réglementé des matières dangereuses, zones de compatibilité, alertes de seuil.",
    },
    {
      icon: BookOpen,
      title: "Planification production",
      desc: "Ordonnancement de production chimique, gestion des capacités et des contraintes de fabrication.",
    },
  ];

  const products = [
    {
      name: "Sage X3",
      desc: "ERP préconfigurée pour la production chimique, avec traçabilité des lots et gestion des formulations",
      color: "from-purple-600 to-violet-700",
    },
    {
      name: "Sage X3 RH",
      desc: "Gestion RH adaptée aux contraintes de sécurité et d'habilitation du secteur chimique",
      color: "from-violet-600 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-purple-400 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-violet-400 blur-3xl" />
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
              <span className="text-white">Chimie</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-2 mb-6">
              <FlaskConical size={14} className="text-purple-300" />
              <span className="text-purple-300 text-sm font-semibold uppercase tracking-wider">SECTEUR CHIMIE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Chi<span className="text-purple-400">mie</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Traçabilité des lots et conformité REACH/SEVESO — une gestion maîtrisée pour l&apos;industrie chimique marocaine.
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
                Une production chimique sécurisée et traçable
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-4">
                L&apos;industrie chimique marocaine doit conjuguer gestion rigoureuse des matières dangereuses, conformité aux référentiels REACH et SEVESO, et traçabilité complète des lots et formulations.
              </p>
              <p className="text-secondary leading-relaxed">
                Thalès Informatique propose des solutions ERP adaptées à la production chimique, intégrant la gestion des fiches de données de sécurité, le suivi des stocks ADR et la traçabilité de bout en bout.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6">
              {[
                { value: "Lot", label: "Traçabilité complète" },
                { value: "ADR", label: "Stocks réglementés" },
                { value: "FDS", label: "Gestion centralisée" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-6 bg-slate-50 rounded-2xl border border-border">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
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
              <h2 className="text-3xl font-bold text-primary mb-4">Les défis du secteur chimique</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                L&apos;industrie chimique marocaine fait face à des exigences de sécurité et de traçabilité strictes.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {challenges.map((c) => (
                <motion.div
                  key={c.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                    <c.icon size={24} className="text-purple-600" />
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
              <h2 className="text-3xl font-bold text-primary mb-4">Nos solutions pour le secteur chimique</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Des modules ERP préconfigurés pour répondre aux exigences spécifiques de l&apos;industrie chimique.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((s) => (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  className="p-6 rounded-2xl border border-border bg-slate-50 hover:border-purple-200 hover:bg-purple-50/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center mb-4">
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
      <section className="py-16 bg-purple-50 border-y border-purple-100" ref={conformiteRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={conformiteInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-10 border-2 border-purple-200 shadow-sm text-center"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} className="text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Une conformité intégrée pour vos sites de production
            </h3>
            <p className="text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
              Notre solution structure la gestion des matières dangereuses, des fiches de données de sécurité et des stocks ADR, pour répondre aux référentiels REACH et SEVESO tout en assurant une traçabilité complète de vos lots et formulations.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {["REACH", "SEVESO", "FDS", "Stocks ADR", "Traçabilité lots"].map((norm) => (
                <span key={norm} className="bg-purple-100 text-purple-700 font-semibold text-sm px-4 py-2 rounded-full border border-purple-200">
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
                Thalès Informatique sélectionne les meilleures solutions pour les industriels chimiques marocains.
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
      <section className="py-20 bg-purple-700" ref={ctaRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-6">
              Voir une démonstration pour l&apos;industrie chimique
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-lg mb-10">
              Découvrez comment Thalès Informatique sécurise la traçabilité et la conformité des industriels chimiques marocains.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-xl hover:bg-purple-50 transition-colors shadow-lg"
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
