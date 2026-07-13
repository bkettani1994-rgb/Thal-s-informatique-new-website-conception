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
    title: "Conformité réglementaire multi-niveaux",
    desc: "Les entreprises chimiques marocaines et africaines doivent jongler entre les normes locales, les réglementations SGH et les exigences de leurs clients internationaux. Sans outil centralisé, chaque mise à jour réglementaire devient une source de risque et de coût supplémentaire.",
  },
  {
    icon: ClipboardCheck,
    title: "Maintien d'une qualité irréprochable",
    desc: "Dans un secteur où la moindre déviation de formule peut entraîner des rappels produits ou des accidents, la traçabilité lot par lot et le contrôle qualité en continu sont non négociables. La diversification des gammes amplifie cette complexité.",
  },
  {
    icon: Truck,
    title: "Pilotage d'une supply chain internationale",
    desc: "Matières premières importées, transporteurs multiples, délais douaniers au Maroc, livraisons vers l'Afrique subsaharienne : sans vision unifiée de votre chaîne logistique, les ruptures et les surcoûts se multiplient.",
  },
];

const avantages = [
  {
    icon: Zap,
    title: "Prise de décision plus rapide",
    desc: "Des tableaux de bord en temps réel sur vos indicateurs de production, de qualité et de stock vous permettent d'anticiper les aléas et de réajuster votre plan de charge sans délai.",
  },
  {
    icon: AlertTriangle,
    title: "Réduction de l'exposition aux risques",
    desc: "Automatisez vos contrôles qualité, tracez chaque lot du fournisseur au client final et documentez vos processus pour répondre sereinement à tout audit ou incident terrain.",
  },
  {
    icon: TrendingDown,
    title: "Optimisation des coûts de production",
    desc: "Identifiez les sources de gaspillage, réduisez les écarts entre coûts prévisionnels et réels, et pilotez votre marge par produit et par lot pour maximiser la rentabilité de chaque fabrication.",
  },
];

const solutions = [
  {
    badge: "ERP Production",
    badgeLabel: "Gestion de Production",
    color: "bg-emerald-600",
    name: "ERP Gestion de Production Chimie",
    subtitle: "Pour les PME et PMI chimiques",
    description: "Une solution ERP dédiée aux PME-PMI de l'industrie chimique marocaine : gestion des formules, suivi des lots, planification des ordres de fabrication et analyse des coûts de revient pour chaque produit.",
    features: [
      "Gestion des formules et des nomenclatures chimiques",
      "Traçabilité complète des lots de matières premières et produits finis",
      "Planification des ordres de fabrication et des ressources atelier",
      "Calcul des besoins nets (CBN) pour anticiper les approvisionnements",
      "Suivi des encours et tableaux de bord de production en temps réel",
    ],
    cta: "Demander une démo",
    href: "/contact",
    highlight: false,
  },
  {
    badge: "ERP Multi-sites",
    badgeLabel: "ERP Chimie Avancé",
    color: "bg-cta",
    name: "ERP Chimie — Groupes et ETI",
    subtitle: "Pour les moyennes et grandes entreprises",
    description: "Pour les groupes chimiques marocains et africains opérant sur plusieurs sites ou marchés : une plateforme ERP unifiée qui couvre l'ensemble du cycle — achats, production, qualité, logistique, finance et RH.",
    features: [
      "Gestion multi-sites, multi-entités et multi-devises",
      "Module qualité intégré : contrôles, non-conformités, certificats d'analyse",
      "Conformité SGH et gestion des fiches de données de sécurité (FDS)",
      "Supply chain internationale avec suivi des flux douaniers",
      "Reporting consolidé et indicateurs de performance par site",
      "Déploiement cloud sécurisé ou on-premise selon vos exigences",
    ],
    cta: "Demander une démo",
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
                  ERP pour l&apos;industrie chimique au Maroc et en Afrique
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Thalès Informatique accompagne les entreprises chimiques marocaines dans la digitalisation de leur production, de leur conformité réglementaire et de leur supply chain.
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
            <div className="max-w-3xl mx-auto text-center">
              <motion.div {...fadeUp}>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
                  Comment transformer la complexité chimique en avantage compétitif ?
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  La clé réside dans la capacité à centraliser et à piloter l&apos;ensemble de vos opérations depuis une plateforme unique, conçue pour les contraintes spécifiques de votre secteur.
                </p>
                <p className="text-secondary leading-relaxed">
                  Les entreprises chimiques marocaines et africaines évoluent dans un environnement de plus en plus exigeant : normes SGH, traçabilité des substances dangereuses, sécurité sur site, pression sur les marges et digitalisation des échanges avec les clients et fournisseurs. Un ERP spécialisé vous permet d&apos;absorber cette complexité sans alourdir vos processus, et de concentrer l&apos;énergie de vos équipes sur ce qui crée vraiment de la valeur.
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
                Les 3 défis majeurs des entreprises chimiques au Maroc et en Afrique
              </h2>
              <p className="text-secondary leading-relaxed">
                Réglementation, qualité et logistique : trois dimensions interdépendantes qui exigent une gestion rigoureuse et des outils adaptés aux réalités du marché local et des échanges internationaux.
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
                La solution adaptée à votre taille et à vos enjeux
              </h2>
              <p className="text-secondary leading-relaxed">
                PME chimique ou groupe multi-sites, Thalès Informatique dispose d&apos;une solution qui s&apos;adapte à votre organisation et aux spécificités du secteur chimique marocain et africain.
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
                3 bénéfices concrets pour votre entreprise chimique
              </h2>
              <p className="text-secondary leading-relaxed">
                Des résultats mesurables sur votre performance opérationnelle, votre maîtrise des risques et votre rentabilité globale.
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
                Transformez votre gestion chimique avec Thalès Informatique
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Nos consultants accompagnent les entreprises chimiques marocaines et africaines dans le déploiement de solutions ERP adaptées — conformité, production, qualité et supply chain intégrées.
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
