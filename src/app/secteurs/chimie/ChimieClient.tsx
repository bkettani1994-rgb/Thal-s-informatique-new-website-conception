"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import {
  ArrowRight, ChevronRight, CheckCircle,
  Scale, ClipboardCheck, Truck,
  Zap, AlertTriangle, TrendingDown,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const defis = [
  {
    icon: Scale,
    title: "Une conformité totale",
    desc: "Aujourd'hui, l'une des difficultés majeures des acteurs mondiaux de la chimie est la nécessité de satisfaire à toutes les exigences réglementaires nationales et mondiales. Le SGH en est un exemple, mais vous devez sûrement relever d'autres défis réglementaires et la non-conformité dans ce domaine peut se solder par des coûts importants. Se perdre dans le dédale des législations et des restrictions mondiales peut avoir des conséquences dévastatrices pour votre entreprise.",
  },
  {
    icon: ClipboardCheck,
    title: "Garantie d'une qualité constante",
    desc: "À l'heure où les procédés de production s'orientent vers des modèles commerciaux de plus en plus spécialisés et multi-produits, la conformité des opérations devient plus essentielle que jamais. Mais veiller en permanence à la qualité, la sécurité et l'efficacité de vos produits peut conférer une certaine rigidité à votre entreprise et vous empêcher de saisir de nouvelles opportunités commerciales.",
  },
  {
    icon: Truck,
    title: "Gestion de toute votre chaîne logistique",
    desc: "Les chaînes logistiques s'étendent bien au-delà des murs de votre entreprise, les éléments essentiels de votre entreprise étant maintenant fournis par des entités tierces situées dans le monde entier. Les systèmes locaux vous proposent une gestion réduite de ces partenaires, mais n'offrent pas une vue complète de votre chaîne logistique, entraînant des retards et des erreurs coûteuses.",
  },
];

const avantages = [
  {
    icon: Zap,
    title: "Réactivité accrue",
    desc: "Améliorez votre potentiel de réussite commerciale en répondant plus rapidement aux exigences des clients et du marché. Rationalisez la gestion des fluctuations des achats, de la production et de l'expédition.",
  },
  {
    icon: AlertTriangle,
    title: "Diminution des risques",
    desc: "Contrôlez en permanence la qualité, la sécurité et l'efficacité de vos produits pour limiter les risques tout en assurant des conditions de travail sécurisées et en respectant les réglementations.",
  },
  {
    icon: TrendingDown,
    title: "Réduction de vos coûts et de vos déchets",
    desc: "Réduisez considérablement vos coûts opérationnels et vos déchets, tout en éliminant les risques potentiels de contamination croisée.",
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
    cta: "Découvrez Sage X3",
    href: "/contact",
    highlight: true,
  },
];

export default function ChimieClient() {
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
                  <span className="text-white">Chimie</span>
                </nav>
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  Trouvez la formule gagnante grâce à un logiciel de gestion conçu pour votre entreprise de produits chimiques
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Prenez de l&apos;avance sur des exigences de conformité en constante évolution.
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
                className="hidden lg:block h-80 rounded-2xl overflow-hidden"
              >
                <img
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1783938223/Chimie-ERP-thales-informatique_f8ld5q.jpg"
                  alt="Chimie ERP - Thalès Informatique"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 1 — CLÉS D'UNE ACTIVITÉ RENTABLE ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div {...fadeUp}>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
                  Cherchez-vous les clés d&apos;une activité plus rentable ?
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Investir dans la bonne solution commerciale pourrait bien être l&apos;élément manquant.
                </p>
                <p className="text-secondary leading-relaxed">
                  La gestion d&apos;une entreprise de produits chimiques peut être complexe. Le système général harmonisé (SGH), les problématiques liées à l&apos;expédition et au transport, la sécurité sur le lieu de travail et d&apos;autres aspects sont autant de défis à relever au quotidien. Pour résister à la pression concurrentielle et optimiser vos ressources les plus précieuses, vous avez besoin d&apos;une solution qui simplifiera radicalement vos opérations, plutôt que d&apos;y ajouter des systèmes plus complexes et des processus rigides.
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
                Avez-vous tous les outils pour répondre rapidement aux défis d&apos;un environnement en constante évolution ?
              </h2>
              <p className="text-secondary leading-relaxed">
                Aujourd&apos;hui, l&apos;industrie chimique doit satisfaire à des règles de conformité plus strictes que jamais, sans parler du fardeau supplémentaire des reportings financiers. Êtes-vous en mesure de continuer à garantir la conformité que vos clients attendent de vous ?
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
                Surpassez les attentes de vos clients et augmentez vos bénéfices
              </h2>
              <p className="text-secondary leading-relaxed">
                Dépassez les défis liés au stockage grâce à nos solutions de distribution en gros intelligentes et intuitives.
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

        {/* ── SECTION 4 — MAÎTRISEZ VOS COÛTS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Maîtrisez vos coûts et vos risques grâce à une solution puissante et évolutive
              </h2>
              <p className="text-secondary leading-relaxed">
                La bonne solution de gestion peut transformer votre entreprise de produits chimiques en vous offrant la simplicité, la flexibilité et le contrôle dont vous avez besoin.
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
                Prêt à optimiser votre entreprise de produits chimiques ?
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
