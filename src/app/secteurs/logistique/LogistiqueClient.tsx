"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import {
  ArrowRight, ChevronRight, CheckCircle,
  Warehouse, Truck, BarChart2, Zap, MapPin, RefreshCw,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const defis = [
  {
    icon: Warehouse,
    title: "Gestion d'entrepôt sous pression",
    desc: "Entre la multiplication des références, les pics d'activité saisonniers et les exigences de traçabilité, piloter un entrepôt au Maroc ou en Afrique sans outil dédié expose votre entreprise à des erreurs de préparation, des ruptures et des coûts de stockage non maîtrisés.",
  },
  {
    icon: Truck,
    title: "Visibilité limitée sur les flux de transport",
    desc: "Transporteurs multiples, douanes, routes à géométrie variable : sans suivi centralisé de vos expéditions et livraisons, les retards s'accumulent et la satisfaction client en pâtit. La coordination entre l'entrepôt et les équipes terrain reste un défi quotidien.",
  },
  {
    icon: BarChart2,
    title: "Pilotage des coûts logistiques complexe",
    desc: "Frais de transport, coûts de manutention, taux de service, taux de remplissage : sans tableau de bord centralisé, il est difficile d'identifier les leviers d'optimisation et de négocier efficacement avec vos prestataires et fournisseurs.",
  },
];

const avantages = [
  {
    icon: Zap,
    title: "Productivité en entrepôt améliorée",
    desc: "Optimisez les déplacements de vos équipes, attribuez les missions selon les compétences et les zones, et réduisez les temps d'attente grâce à une organisation intelligente de votre espace de stockage.",
  },
  {
    icon: MapPin,
    title: "Traçabilité de bout en bout",
    desc: "De la réception fournisseur jusqu'à la livraison client final, chaque mouvement de marchandise est enregistré et consultable en temps réel. Gérez les lots, les numéros de série et les dates de péremption sans effort.",
  },
  {
    icon: RefreshCw,
    title: "Intégration avec vos systèmes existants",
    desc: "Connectez votre solution logistique à votre ERP, à vos partenaires EDI et à vos outils de géolocalisation. Une donnée saisie une seule fois circule automatiquement dans toute votre chaîne d'information, sans ressaisie.",
  },
];

const solutions = [
  {
    badge: "WMS",
    badgeLabel: "Gestion d'Entrepôt",
    color: "bg-emerald-600",
    name: "Solution WMS — Gestion d'entrepôt",
    subtitle: "Pour les opérateurs logistiques et distributeurs",
    description: "Une solution de gestion d'entrepôt (WMS) conçue pour les entreprises logistiques marocaines et africaines : optimisation des emplacements, gestion des entrées/sorties, préparation de commandes et inventaires tournants en temps réel.",
    features: [
      "Gestion multi-zones : racks, masse, picking, zones de quarantaine",
      "Optimisation des emplacements et des tournées de préparation",
      "Traçabilité par lot, numéro de série et date de péremption",
      "Compatibilité code-barres, RFID et terminaux mobiles RF",
      "Suivi des stocks en temps réel avec alertes de seuil",
    ],
    cta: "Demander une démo",
    href: "/contact",
    highlight: false,
  },
  {
    badge: "ERP Logistique",
    badgeLabel: "Supply Chain Intégrée",
    color: "bg-cta",
    name: "ERP Logistique — Supply Chain globale",
    subtitle: "Pour les ETI et groupes multi-sites",
    description: "Pour les opérateurs logistiques et industriels marocains et africains opérant sur plusieurs sites : une plateforme ERP qui unifie la gestion des entrepôts, du transport, des achats et de la finance dans un système unique et performant.",
    features: [
      "Gestion multi-entrepôts, multi-sites et multi-devises",
      "Module transport intégré : planification, géolocalisation, facturation",
      "Échanges EDI avec fournisseurs, clients et transporteurs",
      "Reporting logistique consolidé : taux de service, coûts, délais",
      "Workflows de validation configurables selon votre organisation",
      "Déploiement cloud sécurisé ou on-premise selon vos exigences IT",
    ],
    cta: "Demander une démo",
    href: "/contact",
    highlight: true,
  },
];

export default function LogistiqueClient() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="pt-32 pb-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeUp}>
                <nav className="text-sm text-white/50 mb-6 flex items-center gap-2">
                  <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                  <ChevronRight size={14} />
                  <Link href="/secteurs" className="hover:text-white transition-colors">Secteurs</Link>
                  <ChevronRight size={14} />
                  <span className="text-white">Logistique</span>
                </nav>
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  Solutions ERP & WMS pour les opérateurs logistiques au Maroc et en Afrique
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Thalès Informatique accompagne les entreprises logistiques marocaines dans la digitalisation de leurs entrepôts, de leur transport et de leur supply chain — pour gagner en productivité et réduire leurs coûts opérationnels.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Parler à un expert <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="hidden lg:block h-80 rounded-2xl overflow-hidden"
              >
                <img
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1783938223/Chimie-ERP-thales-informatique_f8ld5q.jpg"
                  alt="Logistique ERP - Thalès Informatique"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 1 — CONTEXTE ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div {...fadeUp}>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
                  Pourquoi la logistique marocaine a besoin d&apos;outils de gestion dédiés ?
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Le secteur logistique au Maroc connaît une transformation profonde : essor du e-commerce, développement des zones industrielles, montée en puissance des corridors vers l&apos;Afrique subsaharienne. Cette dynamique crée de nouvelles opportunités, mais aussi une pression accrue sur les délais, les coûts et la qualité de service.
                </p>
                <p className="text-secondary leading-relaxed">
                  Pour rester compétitifs, les prestataires logistiques, les grossistes et les industriels marocains doivent digitaliser leurs opérations d&apos;entrepôt et de transport. Un ERP ou un WMS adapté à votre réalité terrain vous permet de centraliser la gestion, d&apos;éliminer les ressaisies et de prendre des décisions éclairées en temps réel.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2 — 3 DÉFIS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Les 3 défis clés des opérateurs logistiques au Maroc et en Afrique
              </h2>
              <p className="text-secondary leading-relaxed">
                Entrepôt, transport, pilotage des coûts : trois axes prioritaires pour toute entreprise logistique qui veut gagner en compétitivité sur le marché marocain et africain.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {defis.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col gap-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-cta/10 flex items-center justify-center">
                    <Icon size={22} className="text-cta" />
                  </div>
                  <h3 className="font-bold text-primary text-sm leading-snug">{title}</h3>
                  <p className="text-secondary text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3 — SOLUTIONS ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                La solution adaptée à votre organisation logistique
              </h2>
              <p className="text-secondary leading-relaxed">
                Opérateur logistique, distributeur ou industriel marocain : Thalès Informatique dispose d&apos;une solution qui s&apos;adapte à votre taille, à vos flux et aux spécificités du marché local et régional.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {solutions.map((sol, i) => (
                <motion.div
                  key={sol.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`rounded-2xl border flex flex-col overflow-hidden ${sol.highlight ? "border-cta shadow-lg shadow-cta/10" : "border-border"}`}
                >
                  <div className={`${sol.color} px-6 py-4`}>
                    <p className="text-white/80 text-xs font-semibold uppercase tracking-widest">{sol.badge}</p>
                    <p className="text-white font-bold text-lg">{sol.badgeLabel}</p>
                  </div>
                  <div className="bg-white flex flex-col flex-1 p-6">
                    <p className="text-xs font-bold text-cta uppercase tracking-widest mb-2">{sol.subtitle}</p>
                    <p className="text-secondary text-sm leading-relaxed mb-5">{sol.description}</p>
                    <ul className="space-y-2.5 mb-8 flex-1">
                      {sol.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-secondary text-sm">
                          <CheckCircle size={14} className="text-cta mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={sol.href}
                      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors duration-200 ${sol.highlight ? "bg-cta text-white hover:bg-blue-700" : "bg-primary text-white hover:bg-slate-800"}`}
                    >
                      {sol.cta} <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4 — AVANTAGES ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                3 bénéfices concrets pour votre activité logistique
              </h2>
              <p className="text-secondary leading-relaxed">
                Des résultats mesurables sur votre efficacité opérationnelle, votre traçabilité et votre intégration avec l&apos;écosystème de vos partenaires.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {avantages.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col gap-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-cta/10 flex items-center justify-center">
                    <Icon size={22} className="text-cta" />
                  </div>
                  <h3 className="font-bold text-primary text-sm">{title}</h3>
                  <p className="text-secondary text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-16 bg-cta">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Optimisez votre chaîne logistique avec Thalès Informatique
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Nos consultants accompagnent les opérateurs logistiques marocains et africains dans le déploiement de solutions WMS et ERP adaptées à leurs flux, leurs entrepôts et leurs ambitions de croissance.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cta font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                Discuter de votre projet <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
