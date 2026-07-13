"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import {
  ArrowRight, ChevronRight, CheckCircle,
  AlertTriangle, Package, Users,
  TrendingDown, ShieldCheck, Clock, BarChart2,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const defis = [
  {
    icon: AlertTriangle,
    title: "Être prêt à agir en cas de rappels de produits",
    desc: "Selon une étude menée par Ernst & Young portant sur The Grocery Manufacturers Association, 81 % des entreprises de l'industrie agroalimentaire estiment que les risques financiers liés aux rappels de produits sont importants, voire catastrophiques. Il est donc essentiel d'être prêt à agir en cas de rappels de produits. Vous devrez avoir investi du temps et de l'argent dans des technologies adaptées, et mettre à jour les systèmes et processus métier de votre entreprise.",
  },
  {
    icon: Package,
    title: "Proposez une offre homogène, même lorsque le marché évolue",
    desc: "Il faut ainsi tenir compte des consommateurs qui attendent une cohérence en matière de produits, quelles que soient les conditions de l'offre et de la demande et la conjoncture du marché. Mais quel que soit le marché, il est difficile de garder le contrôle, de maîtriser les coûts et de conserver une certaine souplesse pour faire face à ces changements. Il vous faudra faire face à ces demandes changeantes avec une solution adaptée.",
  },
  {
    icon: Users,
    title: "Assumer ses obligations pour répondre aux exigences des consommateurs",
    desc: "Le public est de plus en plus sensibilisé à l'impact des déchets sur l'environnement, et les consommateurs veulent que le secteur agroalimentaire prenne ses obligations au sérieux en termes de suivi de la chaîne logistique et des activités. Pour répondre à ces exigences, vous devez avoir accès à des données en temps réel, afin de transformer votre entreprise en une structure plus flexible et plus réactive — vous permettant de satisfaire vos clients et d'éviter des pertes de ventes.",
  },
];

const processus = [
  {
    icon: TrendingDown,
    title: "Contrôlez vos coûts et réduisez vos déchets",
    desc: "Les déchets, qu'il s'agisse de denrées périssables ou de produits dérivés de processus qui ne sont plus utilisables, posent des problèmes socio-économiques et environnementaux. Avec une solution adaptée, vous aurez un meilleur aperçu de votre chaîne logistique, notamment en termes de suivi des stocks et de rentabilité des produits. Et vous deviendrez également une entreprise plus responsable, qui respecte les engagements vis-à-vis des consommateurs et qui est instant efficace et rentable.",
  },
  {
    icon: ShieldCheck,
    title: "Gagnez la confiance des consommateurs grâce à la traçabilité",
    desc: "Il est important de bien enregistrer l'origine de chaque lot d'ingrédients pour garantir votre conformité aux normes de l'industrie et à la législation en vigueur en matière de gestion et d'assurance qualité. Une solution adaptée à votre métier vous permettra de gérer les stocks en fonction des besoins de vos clients. De plus, les fonctionnalités de traçage et de suivi de la chaîne d'approvisionnement d'assurer un suivi efficace des matériaux et produits.",
  },
  {
    icon: Clock,
    title: "Gagnez du temps (et de l'argent) tout en respectant la réglementation",
    desc: "La solution idéale doit être facile à paramétrer pour vous aider à répondre aux exigences réglementaires dans votre secteur. Elle doit vous permettre de regrouper vos données automatiquement et de les présenter de manière adaptée — vous pourrez ainsi réduire vos dépenses administratives et répondre plus facilement à vos obligations.",
  },
  {
    icon: BarChart2,
    title: "Dressez un tableau plus précis des activités de votre entreprise",
    desc: "Soyez toujours prêt à réagir en cas de rappel de produit grâce à une solution de gestion d'entreprise vous offrant un aperçu complet de vos activités, un suivi efficace des lots et un tableau précis et détaillé de vos données, accessibles en temps réel. Ainsi, en cas d'alerte, vous pourrez rapidement évaluer l'ampleur du rappel à effectuer et éviter l'interruption de processus importants dans la chaîne d'approvisionnement.",
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
    cta: "Demander une démo",
    href: "/contact",
    highlight: false,
  },
  {
    badge: "Sage Business Cloud",
    badgeLabel: "Sage X3",
    color: "bg-cta",
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
    cta: "Demander une démo",
    href: "/contact",
    highlight: true,
  },
];

export default function AgroalimentaireClient() {
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
                  <span className="text-white">Agroalimentaire</span>
                </nav>
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  Améliorez la rentabilité de votre entreprise du secteur de l&apos;agroalimentaire grâce à un logiciel d&apos;entreprise dédié à votre métier
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Minimisez vos déchets pour réduire les coûts et les risques. Accélérez votre mise en conformité.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Demandez plus d&apos;informations <ArrowRight size={16} />
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

        {/* ── SECTION 1 — RECETTE MIRACLE ? ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.div {...fadeUp}>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
                  Avez-vous la recette miracle pour créer une entreprise à forte rentabilité ?
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Il vous manque probablement un ingrédient clé : la solution d&apos;entreprise la plus adaptée.
                </p>
                <p className="text-secondary leading-relaxed mb-4">
                  L&apos;industrie agroalimentaire est confrontée à un défi spécifique : celui de devoir gérer des stocks de denrées périssables tout en respectant des normes très strictes, sans oublier le risque toujours présent de rappels de produits et de contamination.
                </p>
                <p className="text-secondary leading-relaxed">
                  Ces contraintes peuvent parfois sembler insurmontables, d&apos;où l&apos;importance de trouver une solution de gestion d&apos;entreprise spécialement conçue pour votre secteur et vos besoins spécifiques.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2 — 3 GRANDS DÉFIS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Pouvez-vous relever les quatre grands défis que connaît actuellement le secteur agroalimentaire ?
              </h2>
              <p className="text-secondary leading-relaxed">
                En vous y attaquant, vous aurez une meilleure idée du niveau de conformité de votre entreprise, et vous saurez si elle est responsable, prête à réagir en cas de rappel et capable de maintenir la qualité des produits.
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

        {/* ── SECTION 3 — SOLUTIONS (2 colonnes) ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Contrôlez vos coûts et répondez aux exigences réglementaires grâce à une solution de gestion d&apos;entreprise adaptée
              </h2>
              <p className="text-secondary leading-relaxed">
                Avec la solution de gestion d&apos;entreprise adaptée à vos besoins, vous pouvez éliminer les déchets, respecter les réglementations les plus strictes en toute simplicité et proposer des services répondant aux exigences de vos clients.
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

        {/* ── SECTION 4 — RATIONALISER LES PROCESSUS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Comment rationaliser et améliorer les processus d&apos;une entreprise agroalimentaire
              </h2>
              <p className="text-secondary leading-relaxed">
                Découvrez tous les avantages d&apos;une solution de gestion d&apos;entreprise puissante et flexible.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processus.map(({ icon: Icon, title, desc }, i) => (
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
                  <h3 className="font-bold text-primary text-sm leading-snug">{title}</h3>
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
                Prêt à optimiser votre activité agroalimentaire ?
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Nos experts Thalès Informatique vous accompagnent dans le choix et le déploiement de la solution Sage la plus adaptée aux spécificités de votre secteur.
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
