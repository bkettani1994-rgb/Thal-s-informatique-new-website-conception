"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import {
  ArrowRight, ChevronRight, CheckCircle,
  TrendingDown, Package, Clock, Zap, AlertTriangle, Star,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const benefits = [
  {
    icon: TrendingDown,
    title: "Maîtrise des coûts de production",
    desc: "Un ERP industriel vous aide à identifier et éliminer les sources de gaspillage, pour un pilotage précis de vos marges tout au long de la chaîne de production.",
  },
  {
    icon: Package,
    title: "Optimisation des stocks",
    desc: "Évitez la surproduction et les ruptures grâce à une gestion prévisionnelle des stocks adaptée aux cycles de commande et aux contraintes logistiques du marché marocain et africain.",
  },
  {
    icon: Clock,
    title: "Respect des délais de livraison",
    desc: "Planifiez vos ordres de fabrication avec précision et améliorez votre taux de service client, un levier clé de compétitivité sur les marchés locaux et à l'export.",
  },
  {
    icon: Zap,
    title: "Gain de productivité opérationnelle",
    desc: "Automatisez la saisie et la consolidation de vos données de production pour libérer vos équipes des tâches à faible valeur ajoutée et accélérer vos reportings.",
  },
  {
    icon: AlertTriangle,
    title: "Réduction des aléas de production",
    desc: "Anticipez les pannes, les ruptures de composants et les aléas fournisseurs grâce à une vue en temps réel de vos ressources et de vos encours.",
  },
  {
    icon: Star,
    title: "Qualité et traçabilité",
    desc: "Suivez chaque lot, chaque composant et chaque non-conformité pour garantir la qualité de vos produits finis et répondre aux exigences réglementaires locales et internationales.",
  },
];

const fonctionnalites = [
  {
    title: "Une solution adaptée à votre métier industriel",
    desc: "Qu'il s'agisse d'agroalimentaire, de plasturgie, de métallurgie, de chimie ou d'électronique, nos solutions de gestion industrielle s'adaptent à vos spécificités métier. Chaque secteur dispose de paramétrages dédiés permettant de modéliser fidèlement vos gammes opératoires, vos nomenclatures et vos flux de production, quelle que soit la taille de votre unité au Maroc ou en Afrique.",
  },
  {
    title: "Un tableau de bord pour piloter votre activité en temps réel",
    desc: "Prenez des décisions éclairées grâce à des indicateurs de performance actualisés en continu : taux de rendement synthétique (TRS), coûts de revient, avancement des ordres de fabrication, niveau de stock et prévisions de charge. Vos responsables d'atelier et votre direction disposent d'une vue unifiée de l'activité, où qu'ils se trouvent.",
  },
  {
    title: "Un pilotage complet du cycle de fabrication",
    desc: "De la création de l'ordre de fabrication jusqu'à la livraison, gérez l'intégralité de votre cycle de production dans un seul outil : planification des ressources (CBN/PIC/PDP), suivi des encours, gestion des aléas et contrôle qualité. Interfacé avec la gestion commerciale et les achats, votre ERP industriel synchronise automatiquement les données entre vos équipes et vos sites de production.",
  },
];

const solutions = [
  {
    badge: "Sage 100",
    badgeLabel: "Gestion de Production",
    color: "bg-emerald-600",
    name: "Sage 100 Gestion de Production",
    subtitle: "Pour les PME et PMI industrielles",
    description: "Sage 100 Gestion de Production est une solution GPAO conçue pour les PME-PMI marocaines. Elle centralise vos données techniques, planifie vos ordres de fabrication et vous donne une vision précise de vos encours et de vos coûts de revient.",
    features: [
      "Modélisez vos nomenclatures et gammes opératoires",
      "Planifiez et lancez vos ordres de fabrication simplement",
      "Calculez vos besoins nets avec le CBN et ajustez votre plan de charge",
      "Suivez vos encours de production en temps réel",
      "Analysez vos coûts de revient et vos écarts de production",
    ],
    cta: "Découvrir Sage 100 Gestion de Production",
    href: "/contact",
    highlight: false,
  },
  {
    badge: "Sage 100",
    badgeLabel: "Entreprise Industrie",
    color: "bg-cta",
    name: "Sage 100cloud Entreprise Industrie",
    subtitle: "Pour les PMI de 50 collaborateurs et plus",
    description: "Sage 100cloud Entreprise Industrie est une suite intégrée qui regroupe gestion commerciale, comptabilité et GPAO dans un environnement unique. Idéale pour les PMI marocaines en croissance qui souhaitent unifier leurs processus de gestion.",
    features: [
      "Suite de gestion intégrée : production, commerce, comptabilité",
      "Planification avancée avec PIC, PDP et CBN",
      "Partage de données fiables entre tous vos services",
      "Interface intuitive adaptée aux équipes terrain",
      "Déploiement cloud ou on-premise selon votre infrastructure",
      "Reporting consolidé pour une vision globale de votre activité",
    ],
    cta: "Découvrir Sage 100cloud Entreprise Industrie",
    href: "/contact",
    highlight: true,
  },
  {
    badge: "Sage Business Cloud",
    badgeLabel: "Sage X3",
    color: "bg-slate-700",
    name: "Sage X3 — ERP Industrie",
    subtitle: "Pour les groupes industriels et ETI",
    description: "Sage X3 est l'ERP de référence pour les groupes industriels marocains et africains opérant sur plusieurs sites ou marchés. Il couvre l'ensemble de la chaîne de valeur : approvisionnement, production, stockage, ventes et finance.",
    features: [
      "Gestion multi-sites et multi-entités en temps réel",
      "Traçabilité complète de la matière première au produit fini",
      "Pilotage international et multi-devises",
      "Workflows configurables selon vos processus métier",
      "Interfaçage natif avec vos outils métier et IoT d'atelier",
      "Déploiement cloud SaaS ou on-premise selon vos besoins",
    ],
    cta: "Découvrir Sage X3 Industrie",
    href: "/solutions/sage-x3",
    highlight: false,
  },
];

export default function IndustrieClient() {
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
                  <span className="text-white">Industrie</span>
                </nav>
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  Solutions ERP & GPAO pour l&apos;industrie au Maroc et en Afrique
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Thalès Informatique accompagne les entreprises industrielles marocaines dans leur transformation numérique avec les solutions Sage les mieux adaptées à leurs enjeux de production.
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
                className="hidden lg:flex h-80 rounded-2xl bg-slate-700 border border-slate-600 items-center justify-center"
              >
                <span className="text-slate-400 text-sm">Image à ajouter</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 1 — ERP INDUSTRIEL AU MAROC ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.div {...fadeUp}>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Pourquoi les industriels marocains adoptent un ERP de production ?
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Face à la pression concurrentielle et aux exigences croissantes des donneurs d&apos;ordre locaux et internationaux, les entreprises industrielles au Maroc et en Afrique ont besoin d&apos;outils capables de <strong className="text-primary">piloter leur production en temps réel, de maîtriser leurs coûts et de garantir la qualité</strong> de leurs produits.
                </p>
                <p className="text-secondary leading-relaxed">
                  Un ERP industriel intègre la gestion de production assistée par ordinateur (GPAO), la gestion des stocks, les achats et la comptabilité dans une plateforme unique. Il élimine les saisies redondantes, synchronise les données entre les services et donne à chaque responsable une vision claire de l&apos;avancement des fabrications, des ressources disponibles et des délais de livraison.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2 — ENJEUX INDUSTRIE ── */}
        <section className="py-12 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.div {...fadeUp}>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Les enjeux de la gestion industrielle aujourd&apos;hui
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Les industriels marocains font face à des défis complexes : pression sur les délais, hausse des coûts des matières premières, exigences de traçabilité, fluctuations de la demande et besoin de flexibilité dans les cycles de fabrication. Dans ce contexte, piloter la production avec des outils non connectés ou des feuilles de calcul devient un frein à la performance.
                </p>
                <p className="text-secondary leading-relaxed">
                  Investir dans une solution ERP-GPAO adaptée à l&apos;industrie permet de transformer ces contraintes en leviers de compétitivité. En centralisant l&apos;ensemble des données de production et en automatisant les tâches à faible valeur ajoutée, vos équipes se concentrent sur ce qui compte : la qualité, l&apos;innovation et la satisfaction client — que vous opériez sur le marché local ou à l&apos;export vers l&apos;Afrique et l&apos;Europe.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3 — 6 BÉNÉFICES CLÉS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                6 bénéfices concrets pour votre unité industrielle
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {benefits.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col gap-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-cta/10 flex items-center justify-center">
                    <Icon size={22} className="text-cta" />
                  </div>
                  <h3 className="font-bold text-primary">{title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4 — FONCTIONNALITÉS ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Ce que nos solutions apportent à votre production
              </h2>
            </motion.div>
            <div className="max-w-3xl mx-auto space-y-8">
              {fonctionnalites.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <h3 className="font-bold text-primary mb-2">{f.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5 — SOLUTIONS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                Choisissez la solution adaptée à votre entreprise industrielle
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        {/* ── CTA FINAL ── */}
        <section className="py-16 bg-cta">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Transformez votre production avec Thalès Informatique
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Nos consultants ERP accompagnent les industriels marocains et africains dans le choix, le déploiement et la prise en main de leur solution Sage — avec un engagement fort sur les résultats.
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
