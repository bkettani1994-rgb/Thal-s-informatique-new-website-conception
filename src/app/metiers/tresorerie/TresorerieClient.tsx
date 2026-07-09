"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import {
  ArrowRight, ChevronRight, CheckCircle, TrendingUp, BarChart2, Shield, Zap,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const solutions = [
  {
    badge: "100",
    color: "bg-cta",
    name: "Sage 100 Trésorerie",
    subtitle: "Pour les PME en croissance",
    features: [
      "Gestion multi-banques centralisée",
      "Plans de trésorerie glissants",
      "Gestion des positions bancaires",
      "Simulation de scénarios financiers",
      "Interface avec Sage 100 Comptabilité",
    ],
    cta: "Découvrir Sage 100",
    href: "/contact",
    highlight: true,
  },
  {
    badge: "XRT",
    color: "bg-slate-700",
    name: "Sage XRT Solutions",
    subtitle: "Pour les grandes entreprises & groupes",
    features: [
      "Gestion de trésorerie groupe en temps réel",
      "Cash pooling et netting",
      "Gestion des risques de change",
      "Connectivité bancaire SWIFT / EBICS",
      "Reporting consolidé multi-entités",
    ],
    cta: "Découvrir Sage XRT",
    href: "/contact",
    highlight: false,
  },
];

const strengths = [
  { icon: TrendingUp, title: "Visibilité en temps réel", desc: "Suivez vos flux financiers au quotidien et anticipez vos besoins de liquidités avec précision." },
  { icon: BarChart2, title: "Prévisions fiables", desc: "Construisez des plans de trésorerie robustes et simulez différents scénarios pour mieux décider." },
  { icon: Shield, title: "Sécurité & conformité", desc: "Vos données financières sont protégées et vos processus conformes aux réglementations en vigueur." },
  { icon: Zap, title: "Automatisation intelligente", desc: "Réduisez les tâches manuelles grâce à l'automatisation des rapprochements et des flux bancaires." },
];

export default function TresorerieClient() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="pt-32 pb-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="hidden lg:block h-80 rounded-2xl overflow-hidden"
              >
                <img
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1783591924/vitaly-gariev-jYg5NFTlOy0-unsplash_fr7neq.webp"
                  alt="Gestion de trésorerie - Thalès Informatique"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div {...fadeUp}>
                <nav className="text-sm text-white/50 mb-6 flex items-center gap-2">
                  <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                  <ChevronRight size={14} />
                  <Link href="/metiers" className="hover:text-white transition-colors">Métiers</Link>
                  <ChevronRight size={14} />
                  <span className="text-white">Trésorerie</span>
                </nav>
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  Optimisez votre gestion grâce à un logiciel de trésorerie
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Pilotez vos flux financiers en temps réel, anticipez vos besoins de liquidités et prenez des décisions éclairées grâce aux solutions Sage dédiées à la trésorerie.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Demander une démo <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 1 — QU'EST-CE QU'UN LOGICIEL DE TRÉSORERIE ? ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-3xl">
              <span className="text-xs font-bold text-cta uppercase tracking-widest mb-2 block">
                Fondamentaux
              </span>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Qu&apos;est-ce qu&apos;un logiciel de trésorerie ?
              </h2>
              <p className="text-secondary leading-relaxed mb-6">
                Un logiciel de trésorerie est un outil de gestion financière qui permet aux entreprises de suivre, d&apos;analyser et de prévoir leurs flux de trésorerie. Il centralise toutes les informations relatives aux encaissements et décaissements pour offrir une vision complète et instantanée de la situation financière.
              </p>
              <ul className="space-y-3 text-left">
                {[
                  "Visualisez vos soldes bancaires en temps réel sur l'ensemble de vos comptes.",
                  "Anticipez vos besoins de financement et évitez les découverts imprévus.",
                  "Automatisez les rapprochements bancaires et gagnez un temps précieux.",
                  "Générez des rapports et prévisions pour piloter votre activité avec sérénité.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-secondary text-sm leading-relaxed">
                    <CheckCircle size={16} className="text-cta mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ── SECTION 2 — SUIVI DE VOS FLUX ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <motion.div {...fadeUp}>
                <span className="text-xs font-bold text-cta uppercase tracking-widest mb-2 block">
                  Pilotage financier
                </span>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Des logiciels de gestion de trésorerie efficaces pour suivre vos flux
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Les solutions Sage pour la trésorerie vous offrent une vue consolidée de tous vos flux financiers, qu&apos;il s&apos;agisse de règlements clients, de paiements fournisseurs ou d&apos;opérations interbancaires. Chaque mouvement est tracé, analysé et intégré dans vos prévisions.
                </p>
                <p className="text-secondary leading-relaxed mb-6">
                  Grâce à des tableaux de bord interactifs et des graphiques clairs, vos équipes financières disposent en permanence des informations nécessaires pour optimiser la gestion de vos liquidités et réduire les coûts financiers.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-200"
                >
                  En savoir plus <ArrowRight size={16} />
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
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1783591275/c2d499-LES_ENJEUX_DE_LA_TRESORERIE-thales-informatique_hvc0ez.png"
                  alt="Les enjeux de la trésorerie - Thalès Informatique"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3 — EXPÉRIENCE DE RÉFÉRENCE ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="text-xs font-bold text-cta uppercase tracking-widest mb-2 block">
                  Notre expertise
                </span>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Une expérience qui fait référence parmi les logiciels de gestion de trésorerie
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Thalès Informatique accompagne depuis plus de 25 ans les entreprises marocaines et africaines dans la mise en place de solutions de trésorerie performantes. Notre équipe de consultants certifiés Sage maîtrise les enjeux spécifiques aux marchés locaux et aux réglementations financières en vigueur.
                </p>
                <p className="text-secondary leading-relaxed">
                  Nous avons déployé des solutions de trésorerie dans de nombreux secteurs d&apos;activité — industrie, négoce, services, secteur public — ce qui nous permet de vous proposer une approche métier adaptée à votre contexte et à vos objectifs de performance financière.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4 — LOGICIEL SUR MESURE ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div {...fadeUp}>
                <span className="text-xs font-bold text-cta uppercase tracking-widest mb-2 block">
                  Approche personnalisée
                </span>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Un logiciel de trésorerie sur mesure
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Chaque entreprise a des besoins financiers uniques. C&apos;est pourquoi nous ne proposons pas une solution générique, mais un accompagnement personnalisé pour identifier la solution Sage la plus adaptée à votre taille, votre secteur et vos processus internes.
                </p>
                <p className="text-secondary leading-relaxed mb-8">
                  De la TPE qui cherche à simplifier son suivi de trésorerie au groupe international qui exige une gestion multi-entités et une connectivité bancaire avancée, nous disposons d&apos;une gamme complète pour répondre à chaque besoin.
                </p>
                <div className="grid grid-cols-2 gap-6 text-left">
                  {strengths.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex flex-col gap-2">
                      <div className="w-9 h-9 rounded-lg bg-cta/10 flex items-center justify-center">
                        <Icon size={18} className="text-cta" />
                      </div>
                      <p className="font-semibold text-primary text-sm">{title}</p>
                      <p className="text-secondary text-xs leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 5 — COMPARAISON SOLUTIONS ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-2xl mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Trouvez le meilleur logiciel de trésorerie pour votre entreprise
              </h2>
              <p className="text-secondary leading-relaxed">
                Sage propose une gamme de solutions adaptées à chaque profil d&apos;entreprise. Découvrez laquelle correspond le mieux à vos besoins.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((sol, i) => (
                <motion.div
                  key={sol.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`rounded-2xl border p-8 flex flex-col ${sol.highlight ? "border-cta shadow-lg shadow-cta/10 bg-white" : "border-border bg-white"}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`w-10 h-10 rounded-full ${sol.color} text-white text-sm font-bold flex items-center justify-center shrink-0`}>
                      {sol.badge}
                    </span>
                    <div>
                      <p className="font-bold text-primary text-sm">{sol.name}</p>
                      <p className="text-secondary text-xs">{sol.subtitle}</p>
                    </div>
                  </div>
                  {sol.highlight && (
                    <span className="text-xs font-bold text-cta bg-cta/10 rounded-full px-3 py-1 w-fit mb-4">
                      Recommandé PME
                    </span>
                  )}
                  <ul className="space-y-3 mb-8 flex-1">
                    {sol.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-secondary text-sm">
                        <CheckCircle size={14} className="text-cta mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={sol.href}
                    className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors duration-200 ${sol.highlight ? "bg-cta text-white hover:bg-blue-700" : "border-2 border-primary text-primary hover:bg-primary hover:text-white"}`}
                  >
                    {sol.cta} <ArrowRight size={14} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-16 bg-cta">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Prêt à optimiser votre gestion de trésorerie ?
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Nos experts Thalès Informatique vous accompagnent dans le choix et le déploiement de la solution Sage la plus adaptée à votre entreprise.
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
