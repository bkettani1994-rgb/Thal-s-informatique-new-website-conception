"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  ShoppingCart,
  AlertTriangle,
  Warehouse,
  Tag,
  ShoppingBag,
  Link2,
  CreditCard,
  Package,
  Building2,
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

export default function NegoceDistributionClient() {
  const introRef = useRef(null);
  const challengesRef = useRef(null);
  const solutionsRef = useRef(null);
  const productsRef = useRef(null);
  const ctaRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const challengesInView = useInView(challengesRef, { once: true, margin: "-100px" });
  const solutionsInView = useInView(solutionsRef, { once: true, margin: "-100px" });
  const productsInView = useInView(productsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const challenges = [
    {
      icon: Building2,
      title: "Gestion multi-entités et consolidation inter-sociétés",
      desc: "Consolidez vos comptes, gérez vos filiales et optimisez la gestion inter-sociétés en temps réel.",
    },
    {
      icon: Package,
      title: "Optimisation des stocks et réduction des ruptures",
      desc: "Anticipez la demande, gérez vos réapprovisionnements et éliminez les ruptures de stock.",
    },
    {
      icon: AlertTriangle,
      title: "Traçabilité des lots et dates de péremption",
      desc: "Suivez chaque lot du fournisseur au client final avec gestion des DLC et DLUO.",
    },
  ];

  const solutions = [
    {
      icon: ShoppingCart,
      title: "Gestion commerciale",
      desc: "Devis, commandes, BL, facturation, avoirs — tout le cycle order-to-cash.",
    },
    {
      icon: Warehouse,
      title: "Multi-dépôts & entrepôts",
      desc: "Transferts inter-dépôts, inventaires tournants, gestion des emplacements.",
    },
    {
      icon: Tag,
      title: "Tarification & remises",
      desc: "Grilles tarifaires, promotions temporaires, gestion des clients grands comptes.",
    },
    {
      icon: ShoppingBag,
      title: "Achats & fournisseurs",
      desc: "Appels d'offres, commandes d'achat, réceptions et contrôle de factures.",
    },
    {
      icon: Link2,
      title: "EDI & e-commerce",
      desc: "Connexion plateformes marchandes, automatisation des commandes, flux EDI.",
    },
    {
      icon: CreditCard,
      title: "Recouvrement (Eloficash)",
      desc: "Suivi encours clients, relances automatisées, scoring risque client.",
    },
  ];

  const products = [
    {
      name: "Sage X3",
      desc: "ERP complet pour les distributeurs multi-sociétés et multi-dépôts",
      color: "from-violet-600 to-purple-700",
    },
    {
      name: "Sage 100",
      desc: "Gestion commerciale et comptabilité pour les PME négoce",
      color: "from-blue-600 to-violet-600",
    },
    {
      name: "Eloficash",
      desc: "Recouvrement et gestion du risque client automatisés",
      color: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-violet-400 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-blue-400 blur-3xl" />
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
              <span className="text-white">Négoce & Distribution</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-400/30 rounded-full px-4 py-2 mb-6">
              <ShoppingCart size={14} className="text-violet-300" />
              <span className="text-violet-300 text-sm font-semibold uppercase tracking-wider">SECTEUR NÉGOCE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Négoce &{" "}
              <span className="text-violet-400">Distribution</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Logistique multi-sociétés & gestion des stocks — pilotez l&apos;ensemble de votre chaîne logistique avec Thalès Informatique.
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
                Pilotez votre chaîne logistique de A à Z
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-4">
                Les entreprises de négoce et distribution au Maroc font face à des défis logistiques complexes : multi-dépôts, multi-sociétés, gestion des prix et remises, livraisons urgentes et retours.
              </p>
              <p className="text-secondary leading-relaxed">
                Thalès Informatique propose une solution ERP intégrée pour piloter l&apos;ensemble de votre chaîne logistique, de la commande fournisseur à la livraison client, avec une visibilité totale sur vos stocks et vos marges.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6">
              {[
                { value: "120+", label: "Distributeurs accompagnés" },
                { value: "Multi", label: "Gestion multi-dépôts" },
                { value: "EDI", label: "Fournisseurs intégrés" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-6 bg-slate-50 rounded-2xl border border-border">
                  <div className="text-3xl font-bold text-violet-600 mb-2">{stat.value}</div>
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
              <h2 className="text-3xl font-bold text-primary mb-4">Les défis du secteur</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Les distributeurs marocains font face à des enjeux opérationnels et financiers croissants.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {challenges.map((c) => (
                <motion.div
                  key={c.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-6">
                    <c.icon size={24} className="text-violet-600" />
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
              <h2 className="text-3xl font-bold text-primary mb-4">Nos solutions pour le négoce</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Un ERP pensé pour les distributeurs avec des modules métiers adaptés à vos réalités.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((s) => (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  className="p-6 rounded-2xl border border-border bg-slate-50 hover:border-violet-200 hover:bg-violet-50/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-violet-600 flex items-center justify-center mb-4">
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
                Thalès Informatique sélectionne les meilleures solutions pour les distributeurs marocains.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      <section className="py-20 bg-violet-600" ref={ctaRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-6">
              Voir une démonstration négoce & distribution
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-lg mb-10">
              Découvrez comment Thalès Informatique optimise les opérations logistiques des distributeurs marocains.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-violet-700 font-bold px-8 py-4 rounded-xl hover:bg-violet-50 transition-colors shadow-lg"
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
