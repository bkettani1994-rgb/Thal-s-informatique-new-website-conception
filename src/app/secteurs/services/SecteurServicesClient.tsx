"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import {
  ArrowRight, ChevronRight, CheckCircle,
  Clock, BarChart2, Shuffle, Users, Cloud,
  Shield, TrendingUp, Eye,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const atouts = [
  {
    icon: Clock,
    title: "Augmentez vos heures facturables",
    desc: "Optimisez l'automatisation et la productivité grâce à des flux de travail rationalisés et à une collaboration améliorée pour vous concentrer sur les besoins de vos clients.",
  },
  {
    icon: BarChart2,
    title: "Garantissez la satisfaction d'un plus grand nombre de clients",
    desc: "Grâce à l'analyse des données et à une vision globale de la performance des employés, les sociétés de services professionnels peuvent garantir la rentabilité de chaque engagement client. Une meilleure connaissance de chaque aspect de votre entreprise vous permet de prendre des décisions plus judicieuses dans l'affectation de vos ressources. C'est également la garantie pour tous de maintenir la même ligne de conduite et d'identifier les domaines dans lesquels votre entreprise peut économiser de l'argent.",
  },
  {
    icon: Shuffle,
    title: "Augmentez la souplesse et la flexibilité de votre entreprise",
    desc: "Des processus commerciaux flexibles et des analyses en temps réel permettent aux entreprises de services professionnels de s'adapter rapidement aux demandes changeantes des clients et aux pressions du marché.",
  },
  {
    icon: Users,
    title: "Ouvrez la voie aux équipes virtuelles",
    desc: "Les personnes et les projets étant souvent répartis sur plusieurs sites, il est essentiel de s'assurer que tout le monde travaille à partir de la même source d'informations et avec des outils performants qui permettent une collaboration et une communication en temps réel.",
  },
  {
    icon: Cloud,
    title: "Assurez la pérennité de votre entreprise de services",
    desc: "Adoptez les technologies cloud et mobiles pour offrir un service de qualité à vos clients et vous adapter à un environnement en constante évolution.",
  },
];

const financeAtouts = [
  {
    icon: Shield,
    title: "Assurez une conformité totale",
    desc: "Définissez des flux de travail et des notifications pour vous assurer que tout le monde respecte les bonnes procédures et devient également plus efficace dans ses tâches quotidiennes. Créez une procédure simple à suivre par les équipes du service client, en veillant à ce que les équipes financières puissent suivre les activités de près, mais également pour des questions ou soulever tout problème, si nécessaire.",
  },
  {
    icon: TrendingUp,
    title: "Améliorez les flux de trésorerie de votre entreprise de services",
    desc: "Gérez la facturation, les paiements et les revenus et assurez-vous que les clients soient tenus au courant de leurs échéanciers sans effort supplémentaire. De plus, bénéficiez d'une visibilité accrue sur les paiements et les transactions, la gestion du crédit et les revenus de votre entreprise.",
  },
  {
    icon: Eye,
    title: "Prenez des décisions plus éclairées",
    desc: "Avec une vision claire de votre entreprise, ventes comprises, votre service financier sera en mesure de prendre des décisions plus rapidement et en toute connaissance de cause. De plus, vous pouvez partager les résultats afin que les services clients sachent sur quelles lacunes ou sources de revenus se concentrer.",
  },
];

const solutions = [
  {
    badge: "Sage 100",
    badgeLabel: "Gestion Commerciale",
    color: "bg-emerald-600",
    name: "Sage 100 Gestion Commerciale",
    subtitle: "",
    description: "Maîtrisez l'intégralité de la chaîne commerciale de votre PME avec un logiciel de gestion commerciale puissant : du devis aux factures en passant par l'approvisionnement, les stocks et le pilotage, notre logiciel de gestion commerciale vous accompagne dans votre activité.",
    features: [
      "Processus de facturation automatisé et chaîné : devis, commande, livraison, facture, retour, avoir, etc.",
      "Historique commercial et informations financières centralisés dans votre solution",
      "Base de données de produits et services totalement personnalisable",
      "Tableaux de bord personnalisables et mis à jour en temps réel",
      "Gestion de stock à flux tendu et réapprovisionnements maîtrisée",
      "Ergonomie intuitive et intégration automatique des factures dans Sage 100 Comptabilité",
    ],
    cta: "Découvrez Sage 100 Gestion Commerciale",
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

export default function SecteurServicesClient() {
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
                  <span className="text-white">Services</span>
                </nav>
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  Offrez des services de qualité dans les délais et le budget impartis
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Libérez du temps pour innover et développer votre entreprise à l&apos;aide d&apos;un logiciel de gestion d&apos;entreprise flexible qui vous procure un avantage certain.
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

        {/* ── SECTION 1 — SOLUTIONS INTELLIGENTES ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
                Des solutions professionnelles plus intelligentes qui vous permettent de vous concentrer sur vos clients et non sur les tâches administratives
              </h2>
              <p className="text-secondary leading-relaxed">
                Le temps est précieux dans le secteur très concurrentiel des services. Vous devez concentrer votre attention sur la satisfaction client, la réalisation du projet et la gestion de vos ressources. Passez à Sage et bénéficiez de puissantes solutions de gestion financière et de gestion d&apos;entreprise conçues pour des organisations telles que la vôtre. Vous pourrez ainsi vous concentrer sur votre cœur de métier et fournir une expérience client extraordinaire.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {atouts.map(({ icon: Icon, title, desc }, i) => (
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

        {/* ── SECTION 2 — LONGUEUR D'AVANCE / FINANCE ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Prenez une longueur d&apos;avance sur la concurrence avec une solution de gestion financière à la pointe
              </h2>
              <p className="text-secondary leading-relaxed">
                Accélérez l&apos;exécution des projets, prenez des décisions plus éclairées et augmentez vos profits.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {financeAtouts.map(({ icon: Icon, title, desc }, i) => (
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

        {/* ── SECTION 3 — SOLUTIONS ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                Gérez tous les domaines de votre entreprise de services
              </h2>
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
                    {sol.subtitle && (
                      <p className="text-xs font-bold text-cta uppercase tracking-widest mb-2">{sol.subtitle}</p>
                    )}
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
                Prêt à développer votre entreprise de services ?
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Nos experts Thalès Informatique vous accompagnent dans le choix et le déploiement de la solution Sage la plus adaptée à votre secteur de services.
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
