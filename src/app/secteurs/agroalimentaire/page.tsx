"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  Leaf,
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
  ShieldCheck,
  Beaker,
  BookOpen,
  Calendar,
  PackageX,
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

export default function AgroalimentairePage() {
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
      title: "Traçabilité amont/aval des matières premières et produits finis",
      desc: "Suivez chaque ingrédient du fournisseur au consommateur final avec une traçabilité complète bidirectionnelle.",
    },
    {
      icon: ShieldCheck,
      title: "Conformité aux normes ONSSA, HACCP et réglementations sanitaires",
      desc: "Respectez toutes les exigences réglementaires marocaines et internationales en matière de sécurité alimentaire.",
    },
    {
      icon: Calendar,
      title: "Gestion des DLC/DLUO et des retraits de lots",
      desc: "Anticipez les péremptions, gérez les alertes DLC/DLUO et pilotez les procédures de retrait si nécessaire.",
    },
  ];

  const solutions = [
    {
      icon: ClipboardList,
      title: "Traçabilité lots",
      desc: "N° de lot, origine fournisseur, DLC/DLUO, traçabilité amont/aval complète.",
    },
    {
      icon: CheckCircle2,
      title: "Contrôle qualité",
      desc: "Plans de contrôle, gestion des non-conformités, certificats d&apos;analyse laboratoire.",
    },
    {
      icon: ShieldCheck,
      title: "HACCP & normes sanitaires",
      desc: "Gestion des points critiques, enregistrements réglementaires, préparation aux audits.",
    },
    {
      icon: Beaker,
      title: "Gestion des recettes",
      desc: "Formules de fabrication, variantes produits, calcul du coût de revient par recette.",
    },
    {
      icon: BookOpen,
      title: "Planification production",
      desc: "MRP agroalimentaire, gestion des capacités, anticipation de la saisonnalité.",
    },
    {
      icon: PackageX,
      title: "Gestion DLC/retrait",
      desc: "Alertes péremption automatiques, procédures de retrait de lots, traçabilité des rappels.",
    },
  ];

  const products = [
    {
      name: "Sage X3",
      desc: "ERP préconfigurée IAA avec modules traçabilité, qualité et HACCP intégrés",
      color: "from-green-600 to-emerald-700",
    },
    {
      name: "DimoMaint GMAO",
      desc: "Maintenance préventive des équipements de production agroalimentaire",
      color: "from-emerald-600 to-teal-600",
    },
  ];

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-green-400 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-emerald-400 blur-3xl" />
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
              <span className="text-white">Agroalimentaire</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2 mb-6">
              <Leaf size={14} className="text-green-300" />
              <span className="text-green-300 text-sm font-semibold uppercase tracking-wider">SECTEUR AGROALIMENTAIRE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Agro<span className="text-green-400">alimentaire</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Normes ONSSA & traçabilité HACCP — conformité totale pour l&apos;industrie agroalimentaire marocaine.
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
                Conformité ONSSA & HACCP garantie
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-4">
                L&apos;industrie agroalimentaire marocaine est soumise aux normes ONSSA, HACCP et aux exigences de traçabilité strictes imposées par les réglementations nationales et internationales.
              </p>
              <p className="text-secondary leading-relaxed">
                Thalès Informatique propose des solutions ERP préconfigurées pour le secteur IAA, avec gestion des lots, DLC/DLUO, certification qualité et outils de conformité réglementaire intégrés dès le départ.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6">
              {[
                { value: "40+", label: "IAA accompagnées" },
                { value: "HACCP", label: "Conformité intégrée" },
                { value: "Lot", label: "Traçabilité complète" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-6 bg-slate-50 rounded-2xl border border-border">
                  <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
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
              <h2 className="text-3xl font-bold text-primary mb-4">Les défis du secteur IAA</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                L&apos;industrie agroalimentaire marocaine fait face à des exigences réglementaires et de traçabilité croissantes.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {challenges.map((c) => (
                <motion.div
                  key={c.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                    <c.icon size={24} className="text-green-600" />
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
              <h2 className="text-3xl font-bold text-primary mb-4">Nos solutions agroalimentaires</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Des modules ERP préconfigurés pour répondre aux exigences spécifiques de l&apos;industrie alimentaire.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((s) => (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  className="p-6 rounded-2xl border border-border bg-slate-50 hover:border-green-200 hover:bg-green-50/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center mb-4">
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
      <section className="py-16 bg-green-50 border-y border-green-100" ref={conformiteRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={conformiteInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-10 border-2 border-green-200 shadow-sm text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Solution préconfigurée ONSSA & HACCP
            </h3>
            <p className="text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
              Mise en conformité rapide avec les exigences réglementaires marocaines et internationales — notre solution agroalimentaire intègre nativement tous les référentiels ONSSA, HACCP, BRC et IFS pour vous permettre de démarrer en conformité dès le premier jour.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {["ONSSA", "HACCP", "BRC", "IFS", "ISO 22000"].map((norm) => (
                <span key={norm} className="bg-green-100 text-green-700 font-semibold text-sm px-4 py-2 rounded-full border border-green-200">
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
                Thalès Informatique sélectionne les meilleures solutions pour les industriels agroalimentaires marocains.
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
      <section className="py-20 bg-green-700" ref={ctaRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-6">
              Voir une démonstration agroalimentaire
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-lg mb-10">
              Découvrez comment Thalès Informatique assure la conformité ONSSA & HACCP des industriels marocains.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-8 py-4 rounded-xl hover:bg-green-50 transition-colors shadow-lg"
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
