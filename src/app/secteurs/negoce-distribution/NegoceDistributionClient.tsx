"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import {
  ArrowRight, ChevronRight, CheckCircle,
  Package, TrendingUp, Users,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const challenges = [
  {
    icon: Package,
    title: "Améliorez votre service client avec les technologies mobiles",
    desc: "La mobilité, dans l'entrepôt et en livraison, est l'une des principales tendances qui affectent votre secteur. Sans elle, votre équipe peut devenir dépendante d'un terminal informatique ou faire perdre du temps au client sur le terrain. Votre entreprise ne peut pas se permettre d'être à la traîne.",
  },
  {
    icon: TrendingUp,
    title: "Tirez tout le potentiel de votre stock",
    desc: "Aucune entreprise de distribution ne fira de bénéfices ni ne survivra si ses clients passent leur temps à attendre à cause de ruptures de stock. La gestion du stock consiste en un équilibre constant entre ce que la demande et les niveaux de stock correspondent : une erreur peut être désastreuse et entraîner une perte de ventes, une trésorerie inutilement mobilisée par des stocks excédentaires et de moins bonnes relations clients. Les actifs fixes, au sens comptable, doivent également être aussi bas que possible, dans la mesure où ils représentent un coût important dans les déclarations financières annuelles, ce qui implique des calculs de plus en plus complexes.",
  },
  {
    icon: Users,
    title: "Ne laissez pas vos systèmes vous freiner",
    desc: "Combien d'outils avez-vous expédiés le mois dernier ? Quel est votre article le plus populaire ? Quel est votre meilleur client ? Quel entrepôt affiche le meilleur chiffre d'affaires ? Il faut répondre efficacement et rapidement à ces questions et les questions les plus similaires sont souvent très difficiles pour les distributeurs qui utilisent toujours des systèmes historiques, des logiciels, des tableaux et des bases de données internes.",
  },
];

const avantages = [
  {
    icon: Package,
    title: "Prenez le contrôle de votre stock",
    desc: "Gagnez en visibilité dans l'ensemble de votre chaîne d'approvisionnement et responsabilisez tous les intervenants, des fournisseurs aux clients. Comprenez tous les processus inhérents aux stocks, à la rentabilité produits, à la gestion des commandes et aux opérations de stock. Vous allez très vite développer la croissance de votre activité.",
  },
  {
    icon: TrendingUp,
    title: "Améliorez vos marges",
    desc: "Prenez de meilleures décisions et dégagez de meilleures marges tout en gérant la qualité et la performance de vos fournisseurs. Gérez facilement les activités de vos vendeurs, leurs objectifs et leurs commissions.",
  },
  {
    icon: Users,
    title: "Donnez des moyens à votre équipe",
    desc: "Offrez à votre force de vente mobile une visibilité optimale sur les clients, les stocks, l'historique de commande, les devis et les promotions à partir de n'importe quel appareil connecté.",
  },
];

const solutions = [
  {
    badge: "Sage 100",
    badgeLabel: "Gestion Commerciale",
    color: "bg-emerald-600",
    name: "Sage 100 Gestion Commerciale",
    subtitle: "",
    description: "Maîtrisez l'intégralité de la chaîne commerciale avec notre logiciel de gestion commerciale puissant : du devis aux factures en passant par l'approvisionnement, les stocks et la logistique. Notre logiciel de gestion commerciale vous accompagne dans votre productivité.",
    features: [
      "Processus de facturation automatisé et dématérialisé : devis, commande, facture, retour, avoir, etc.",
      "Historique commercial et informations financières centralisés dans votre solution",
      "Base de données de produits et services entièrement personnalisable",
      "Tableaux de bord personnalisables et mis à jour en temps réel",
      "Gestion de stock à flux tendus et de réapprovisionnements automatiques",
      "Ergonomie intuitive et intégration automatique des factures dans Sage 100 Comptabilité",
    ],
    cta: "Découvrez Sage 100 Gestion Commerciale",
    href: "/contact",
    highlight: false,
  },
  {
    badge: "Sage 100",
    badgeLabel: "Entreprise",
    color: "bg-cta",
    name: "Sage 100 Entreprise",
    subtitle: "Pour les PME",
    description: "Avec Sage 100 Entreprise, votre ERP pour PME s'appuie sur un système unique et cohérent, des informations centralisées, et des fonctions de pilotage pour prendre les bonnes décisions.",
    features: [
      "Gestion commerciale, comptabilité et reporting",
      "Suite de gestion complète avec les immobilisations, moyens de paiement, trésorerie, CRM…",
      "Bénéficiez d'une solution de fonctionnalités d'accès à distance",
      "Partagez des données fiables et communes",
      "Automatisez votre reporting dans Excel®",
      "Personnalisez, organisez et partagez vos documents simplement",
    ],
    cta: "Découvrez Sage 100 Entreprise",
    href: "/contact",
    highlight: true,
  },
  {
    badge: "Sage X3",
    badgeLabel: "Warehousing",
    color: "bg-slate-600",
    name: "Sage X3 Warehousing",
    subtitle: "Des PME aux grandes entreprises",
    description: "Rendez vos opérations logistiques et la gestion de vos entrepôts plus simples que jamais.",
    features: [
      "Améliorez la productivité en organisant et rationalisant l'activité des collaborateurs (préparations…) au sein de l'entrepôt",
      "Pilotez plus efficacement vos espaces d'entreposage en attribuant à chacun des missions compatibles avec ses ressources, son métier, sa localisation",
      "Renforcez la qualité et la fluidité de vos flux logistiques",
      "Valorisez vos espaces d'entreposage grâce à un algorithme qui modélise l'espace de stockage en 3 dimensions et les déplacements",
      "Disposez d'une solution évolutive qui vous accompagne à chaque étape de l'évolution de vos besoins logistiques, en France comme à l'international",
    ],
    cta: "Découvrez Sage X3 Warehousing",
    href: "/contact",
    highlight: false,
  },
  {
    badge: "Sage Business Cloud",
    badgeLabel: "Sage X3",
    color: "bg-slate-700",
    name: "Sage Business Cloud Sage X3",
    subtitle: "Pour les moyennes et grandes entreprises",
    description: "De l'approvisionnement à la gestion production en passant par le stockage, le commerce électronique, les ventes, la comptabilité ou les RH, vous disposez d'un logiciel de gestion de production industrielle qui vous permet de gérer l'ensemble de votre activité dans le monde entier et à moindre coût.",
    features: [
      "Maîtrisez vos opérations internationales",
      "Obtenez des informations pertinentes au moment opportun",
      "Développez votre activité sur de nouveaux marchés et territoires",
      "Gagnez en flexibilité et concentrez-vous sur votre cœur de métier",
      "Disposez de workflows simples à gérer et très intuitifs",
      "Tirez parti d'une solution dédiée à votre secteur d'activité (distribution, industrie, services…)",
    ],
    cta: "Découvrez Sage X3",
    href: "/contact",
    highlight: false,
  },
];

export default function NegoceDistributionClient() {
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
                  <span className="text-white">Négoce & Distribution</span>
                </nav>
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  Business Cloud de Sage transforme votre chaîne logistique
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Développez votre entreprise et contrôlez vos coûts.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Découvrir nos solutions <ArrowRight size={16} />
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

        {/* ── SECTION 1 — RENTABILITÉ ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div {...fadeUp}>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Savez-vous comment rendre votre entreprise plus rentable ?
                </h2>
                <p className="text-secondary text-sm leading-relaxed mb-4">
                  Sage Business Cloud X3 vous ouvre la voie de la réussite.
                </p>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  La croissance et l&apos;efficacité peuvent sembler difficiles pour les entreprises, en particulier pour celles du secteur de la distribution qui doivent savoir équilibrer leurs stocks, prévisions et processus logistiques avec leurs ventes, leur service clients et tout ce qui s&apos;y rapporte. Heureusement, une solution puissante et facile à utiliser peut aider les entreprises à y parvenir.
                </p>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Êtes-vous en mesure de livrer vos produits ?
                </h2>
                <p className="text-secondary text-sm leading-relaxed">
                  De par sa complexité, la grande distribution présente des défis majeurs pour les entreprises : des stocks de produits importants, des marges réduites, la diversité des besoins clients en aval, les longs délais et un approvisionnement imprévisible. Pouvez-vous surmonter ces trois défis majeurs ?
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2 — 3 DÉFIS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {challenges.map(({ icon: Icon, title, desc }, i) => (
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

        {/* ── SECTION 3 — RELEVEZ LES DÉFIS (sombre) ── */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <motion.div {...fadeUp}>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Relevez les défis de la distribution
                </h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Vous souhaitez surmonter les obstacles qui freinent vos activités et augmenter votre rentabilité ?
                </p>
                <p className="text-white/70 leading-relaxed mb-8">
                  Nous avons identifié pour vous des challenges clés et envisagé des solutions pour les surmonter afin de vous aider à prendre les meilleures décisions pour la croissance de votre activité. Vous allez très vite décider qu&apos;il faut investir dans la technologie, c&apos;est investir dans l&apos;avenir.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-200 text-sm"
                >
                  Télécharger <ArrowRight size={14} />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="hidden lg:flex h-64 rounded-2xl bg-slate-700 border border-slate-600 items-center justify-center"
              >
                <span className="text-slate-400 text-sm">Image / guide à ajouter</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4 — ENTREPRISE À L'AVENIR ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Pour une entreprise de distribution à l&apos;avenir pavé de succès
              </h2>
              <p className="text-secondary leading-relaxed">
                Nous pouvons vous aider à faire face aux défis d&apos;une industrie complexe et en constante évolution.
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

        {/* ── SECTION 5 — SOLUTIONS (4 colonnes) ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Anticipez les attentes de vos clients avec une solution pensée pour vous
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((sol, i) => (
                <motion.div
                  key={sol.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`rounded-2xl border flex flex-col overflow-hidden ${sol.highlight ? "border-cta shadow-lg shadow-cta/10" : "border-border"}`}
                >
                  <div className={`${sol.color} px-4 py-3`}>
                    <p className="text-white/80 text-xs font-semibold uppercase tracking-widest">{sol.badge}</p>
                    <p className="text-white font-bold">{sol.badgeLabel}</p>
                  </div>
                  <div className="bg-white flex flex-col flex-1 p-5">
                    {sol.subtitle && (
                      <p className="text-xs font-bold text-cta uppercase tracking-widest mb-2">{sol.subtitle}</p>
                    )}
                    <p className="text-secondary text-xs leading-relaxed mb-4">{sol.description}</p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {sol.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-secondary text-xs">
                          <CheckCircle size={12} className="text-cta mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={sol.href}
                      className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold text-xs transition-colors duration-200 ${sol.highlight ? "bg-cta text-white hover:bg-blue-700" : "bg-primary text-white hover:bg-slate-800"}`}
                    >
                      {sol.cta} <ArrowRight size={12} />
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
                Prêt à transformer votre chaîne logistique ?
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Nos experts Thalès Informatique vous accompagnent dans le choix et le déploiement de la solution Sage la plus adaptée à votre activité de négoce et distribution.
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
