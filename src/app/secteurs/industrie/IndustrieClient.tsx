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
    title: "Réduction des coûts",
    desc: "La GPAO permet une réduction de vos coûts de production de 10 % minimum sur une période de 6 mois.",
  },
  {
    icon: Package,
    title: "Limitation des stocks",
    desc: "Bénéficiez d'une diminution de vos stocks de 20 à 30 % avec un logiciel de gestion de production puissant.",
  },
  {
    icon: Clock,
    title: "Meilleure maîtrise des délais",
    desc: "Le logiciel de production industrielle engendre une baisse du temps de réponse de délai de production vers vos clients (20 %).",
  },
  {
    icon: Zap,
    title: "Gains de productivité",
    desc: "Le logiciel GPAO permet une division par cinq du temps d'élaboration de vos reportings.",
  },
  {
    icon: AlertTriangle,
    title: "Réduction des interruptions",
    desc: "Votre GPAO entraîne une réduction des arrêts de production ainsi qu'un gain de temps considérable.",
  },
  {
    icon: Star,
    title: "Contrôle qualité",
    desc: "L'identification des non-conformités en amont par votre logiciel GPAO augmente la qualité de vos produits.",
  },
];

const fonctionnalites = [
  {
    title: "Des fonctions et des services adaptés à vos spécificités",
    desc: "Quelle que soit votre spécialité (fabrication à la commande, sur stock ou à l'affaire, en petites ou grandes séries) ou encore votre métier (agroalimentaire, chimie, électronique, plasturgie…), nous avons des logiciels de GPAO pour vous aider à optimiser vos cycles de production et augmenter vos performances industrielles.",
  },
  {
    title: "Une vision de votre activité à travers des indicateurs performants de GPAO",
    desc: "Grâce à votre logiciel de GPAO, vous bénéficiez d'une vue à 360° de votre activité. Vous pouvez suivre vos processus de production en temps réel grâce à des tableaux de bord. Vous gardez toujours une vision claire du cycle de fabrication et prenez des décisions stratégiques éclairées. Ceci vous permet de gagner en réactivité quoi qu'il arrive.",
  },
  {
    title: "Le pilotage complet de votre production",
    desc: "Gérez l'ensemble des activités et ressources liées au cycle de production. Votre logiciel de gestion de production centralise toutes les données techniques (articles, clients, fournisseurs), planifie les ordres de fabrication, calcule les rendements et besoins nets, et gère les imprévus et la non-conformité. Anticipez vos achats, simulez la production à venir et contrôlez les temps de fabrication comme la qualité.",
  },
];

const solutions = [
  {
    badge: "Sage 100",
    badgeLabel: "Gestion de Production",
    color: "bg-emerald-600",
    name: "Sage 100 Gestion de Production",
    subtitle: "Pour les PME et PMI",
    description: "Avec Sage 100 Gestion de Production, vous disposez d'un logiciel GPAO dédié aux PME-PMI qui vous aidera à gérer vos données techniques, planifier vos ordres de fabrication, suivre vos encours de production et analyser vos coûts de revient.",
    features: [
      "Gérez vos données techniques pour que vos ordres de fabrication reflètent au mieux la réalité de l'atelier",
      "Respectez vos délais et optimisez votre outil de production",
      "Optimisez votre stock et vos ressources à terme grâce au CBN et au PIC/PDP",
      "Anticipez vos achats grâce à l'analyse des mouvements des produits",
      "Suivez vos encours de production en temps réel grâce à des tableaux de bord",
    ],
    cta: "Découvrez Sage 100 Gestion de Production",
    href: "/contact",
    highlight: false,
  },
  {
    badge: "Sage 100",
    badgeLabel: "Entreprise Industrie",
    color: "bg-cta",
    name: "Sage 100cloud Entreprise Industrie",
    subtitle: "Pour les PMI de 50 salariés et plus",
    description: "Avec Sage 100cloud Entreprise Industrie, centralisez toutes vos données à travers un système de gestion de production intégré et composé d'outils de gestion commerciale, de comptabilité et de GPAO, spécialement conçu pour les PMI.",
    features: [
      "Optimisez l'ensemble de vos processus de gestion de production",
      "Bénéficiez de la richesse d'une suite de gestion complète",
      "Optimisez votre stock et vos ressources à terme grâce au CBN",
      "Capitalisez sur un système de gestion agile",
      "Partagez des données fiables et communes",
      "Simplifiez l'analyse de votre activité",
    ],
    cta: "Découvrez Sage 100cloud Entreprise Industrie",
    href: "/contact",
    highlight: true,
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
                  Gérez votre production industrielle avec nos logiciels GPAO
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Gérez votre cycle de production et gagnez en productivité grâce aux logiciels GPAO de Sage.
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

        {/* ── SECTION 1 — QU'EST-CE QU'UN LOGICIEL GPAO ? ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div {...fadeUp}>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Qu&apos;est-ce qu&apos;un logiciel GPAO ?
                </h2>
                <p className="text-secondary leading-relaxed">
                  Un logiciel de GPAO (Gestion de Production Assistée par Ordinateur) permet de <strong className="text-primary">préparer, de planifier, de suivre en temps réel et d&apos;analyser la production des entreprises industrielles</strong>. Le GPAO gère l&apos;intégralité du cycle de production : depuis la génération de l&apos;<strong className="text-primary">ordre de fabrication</strong> à la <strong className="text-primary">planification</strong>, en passant par la gestion des stocks et des délais de livraison. En communiquant en temps réel avec la gestion commerciale, l&apos;atelier et les fournisseurs, les ordres de production sont automatiquement mis en œuvre.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2 — POURQUOI CHOISIR UN LOGICIEL GPAO ? ── */}
        <section className="py-12 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div {...fadeUp}>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Pourquoi choisir un logiciel GPAO ?
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  La gestion de production doit faire face à de nombreux défis comme de longs délais de livraison, les interruptions dans la chaîne d&apos;approvisionnement, la maintien des normes de qualité, etc. Il est crucial de savoir confronter les imprévus pour permettre à l&apos;entreprise de rester compétitive en minimisant les coûts.
                </p>
                <p className="text-secondary leading-relaxed">
                  Le logiciel GPAO simplifie le pilotage de toutes les étapes du cycle de production et vous assure de prendre de meilleures décisions sur le court et long terme. En centralisant les informations dans une base de données unique et en automatisant les processus, il apporte un gain de temps et de productivité considérable à tous vos employés. Un logiciel de gestion de production efficace optimise l&apos;usage des ressources et réduit le gaspillage. Pour rester compétitive, une entreprise industrielle se doit d&apos;investir dans un bon logiciel GPAO.
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
                Les 6 bénéfices-clé du logiciel GPAO
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
            <motion.div {...fadeUp} className="max-w-3xl mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Quelles sont les fonctionnalités des logiciels GPAO de Sage ?
              </h2>
            </motion.div>
            <div className="max-w-3xl space-y-8">
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
                Trouvez le logiciel GPAO adapté à votre entreprise
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
                Prêt à optimiser votre production industrielle ?
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Nos experts Thalès Informatique vous accompagnent dans le choix et le déploiement du logiciel GPAO Sage le plus adapté à votre activité industrielle.
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
