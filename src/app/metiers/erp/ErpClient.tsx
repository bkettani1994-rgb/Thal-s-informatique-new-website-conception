"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import {
  ArrowRight, ChevronRight, CheckCircle,
  Settings, ShoppingCart, Globe, Users,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const benefits = [
  {
    title: "Homogénéité des informations",
    desc: "Vos collaborateurs accèdent aux mêmes données au sein du logiciel de gestion intégré, améliorant ainsi la collaboration et la communication entre équipes au quotidien.",
  },
  {
    title: "Gain de temps et de productivité",
    desc: "Les informations en temps réel fournies par l'ERP permettent une meilleure planification des ressources, réduction des délais et accélération des processus de gestion.",
  },
  {
    title: "Meilleure organisation",
    desc: "En ayant une vision globale des activités de votre entreprise grâce à l'ERP, vous pouvez prendre des décisions stratégiques pour l'avenir.",
  },
  {
    title: "Maîtrise des coûts",
    desc: "En améliorant la planification de l'inventaire avec le logiciel ERP, vous évitez les dépenses inutiles et réduisez les coûts opérationnels.",
  },
];

const advantages = [
  {
    icon: Settings,
    title: "Un logiciel de gestion ERP pour optimiser les procédures fondamentales",
    desc: "Les logiciels ERP de Sage vous permettent de renforcer vos opérations quotidiennes afin d'optimiser votre efficacité et de réduire vos coûts.",
  },
  {
    icon: ShoppingCart,
    title: "Un logiciel de gestion ERP pour simplifier les procédures commerciales essentielles",
    desc: "Nos progiciels ERP sont ergonomiques et peuvent s'adapter aux règles et procédures spécifiques à votre entreprise, afin de faciliter la gestion d'activités cruciales comme la gestion des achats, la gestion de la relation client, les immobilisations et bien plus encore.",
  },
  {
    icon: Globe,
    title: "Se développer au Maroc et à l'international grâce à un progiciel de gestion intégré",
    desc: "Rapides, simples et flexibles, nos logiciels PGI vous aideront à étendre votre activité à travers le monde.",
  },
  {
    icon: Users,
    title: "Bénéficiez de conseils d'Experts",
    desc: "Notre réseau de 40 000 experts-comptables et 25 000 partenaires commerciaux vous offre une expertise du secteur et un support sur site pour vous aider à sélectionner, préparer et déployer des logiciels PGI pour votre entreprise.",
  },
];

const solutions = [
  {
    badge: "Sage 100",
    badgeLabel: "Entreprise",
    color: "bg-emerald-600",
    name: "Sage 100 Entreprise",
    subtitle: "Pour les PME",
    description: "Avec Sage 100 Entreprise, votre ERP pour PME s'appuie sur un système unique et cohérent, des informations centralisées, et des fonctions de pilotage pour prendre les bonnes décisions.",
    features: [
      "Gérez : commercial, comptabilité et reporting",
      "Suite de gestion complète avec les immobilisations, moyens de paiement, trésorerie, CRM",
      "Bénéficiez d'une solution intégrée des fonctionnalités d'accès à distance",
      "Partagez des données fiables et communes",
      "Automatisez votre reporting dans Excel®",
      "Gérez et partagez vos documents simplement",
    ],
    cta: "Découvrez Sage 100 Entreprise",
    href: "/contact",
    highlight: false,
  },
  {
    badge: "Sage FRP",
    badgeLabel: "1000",
    color: "bg-cta",
    name: "Sage FRP 1000",
    subtitle: "Pour les moyennes et grandes entreprises",
    description: "Sage FRP 1000 est une suite financière intégrée basée sur une plateforme collaborative et productive pour des institutions à la carte et une ouverture fonctionnelle experte.",
    features: [
      "Bénéficiez d'une solution de gestion comptable et financière complète",
      "Gérez vos opérations commerciales : achats, ventes, stocks…",
      "Consultez toutes les données de l'entreprise et partagez-les en un clic",
      "Optez pour une approche flexible avec des options à la carte",
      "Disposez d'une solution tout en un pour fluidifier le partage de l'information dans l'entreprise",
      "Optez pour la robustesse et la sécurité en contexte de gros volumes",
    ],
    cta: "Découvrez Sage FRP 1000",
    href: "/contact",
    highlight: true,
  },
  {
    badge: "Sage Business Cloud",
    badgeLabel: "Sage X3",
    color: "bg-slate-700",
    name: "Sage Business Cloud Sage X3",
    subtitle: "Pour les moyennes et grandes entreprises",
    description: "De l'approvisionnement à la gestion production en passant par le stockage, le commerce électronique, les ventes, la comptabilité ou la RH, vous disposez d'un logiciel de gestion de production industrielle qui vous permet de gérer l'ensemble de votre activité dans le monde entier et à moindre coût.",
    features: [
      "Maîtrisez vos opérations internationales",
      "Obtenez des informations pertinentes au moment opportun",
      "Développez votre activité sur de nouveaux marchés et territoires",
      "Gagnez en flexibilité et concentrez-vous sur votre cœur de métier",
      "Disposez de workflows simples à gérer et très solutifs",
      "Tirez parti d'une solution dédiée à votre secteur d'activité (distribution, industrie, services…)",
    ],
    cta: "Découvrez Sage X3",
    href: "/contact",
    highlight: false,
  },
];

export default function ErpClient() {
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
                  <Link href="/metiers" className="hover:text-white transition-colors">Métiers</Link>
                  <ChevronRight size={14} />
                  <span className="text-white">ERP</span>
                </nav>
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  Maîtrisez l&apos;ensemble des processus opérationnels avec les logiciels ERP de Sage
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Unifiez les tâches quotidiennes, analysez les informations et connectez les processus opérationnels de votre entreprise avec un logiciel ERP Sage.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Découvrir nos solutions ERP <ArrowRight size={16} />
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

        {/* ── SECTION 1 — QU'EST-CE QU'UN ERP ? ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Qu&apos;est-ce qu&apos;un logiciel ERP ou PGI ?
              </h2>
              <p className="text-secondary leading-relaxed">
                ERP signifie Enterprise Resources Planning, c&apos;est-à-dire planification des ressources de l&apos;entreprise. L&apos;ERP permet de piloter l&apos;ensemble des processus opérationnels d&apos;une entreprise en intégrant plusieurs fonctions de gestion : gestion commerciale, gestion des stocks et des commandes, chaîne d&apos;approvisionnement, comptabilité, paie et ressources humaines ou encore relation client. En français, le logiciel ERP est appelé logiciel PGI (Progiciel de Gestion Intégré).
              </p>
            </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2 — COMMENT FONCTIONNE UN ERP ? ── */}
        <section className="py-12 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Comment fonctionne un logiciel ERP ?
              </h2>
              <p className="text-secondary leading-relaxed">
                L&apos;ERP se présente comme une plateforme composée de modules correspondant aux différents services de l&apos;entreprise. Tous les services utilisent simultanément le logiciel ERP pour effectuer les opérations quotidiennes telles que la comptabilité et finance, paie et ressources humaines, gestion de stocks, chaîne logistique, etc. Ainsi, si une action est réalisée (une vente par exemple), le système ERP va mettre les stocks de l&apos;entreprise directement à jour, ce qui garantit une information correcte et fiable.
              </p>
            </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3 — QU'APPORTE L'ERP ? ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Qu&apos;apporte le logiciel ERP à l&apos;entreprise ?
              </h2>
              <p className="text-secondary leading-relaxed">
                Une entreprise a besoin d&apos;un progiciel de gestion intégré afin d&apos;optimiser et faciliter l&apos;ensemble des processus de gestion, sa productivité ou encore ses ressources. Acquérir un outil ERP comporte de nombreux avantages pour toute structure.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <h3 className="font-bold text-primary mb-2">{b.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4 — POURQUOI SAGE ? ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-2xl mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Pourquoi choisir les logiciels ERP Sage ?
              </h2>
              <p className="text-secondary leading-relaxed">
                Que vous soyez à la tête d&apos;une petite entreprise ou d&apos;un grand groupe, les logiciels ERP de Sage soutiennent la croissance et le développement de votre activité. Découvrez dès maintenant les avantages : conseils d&apos;experts, procédures plus efficaces et bien plus encore.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-cta/10 flex items-center justify-center">
                    <Icon size={20} className="text-cta" />
                  </div>
                  <h3 className="font-bold text-primary text-sm leading-snug">{title}</h3>
                  <p className="text-secondary text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5 — COMPARAISON SOLUTIONS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-2xl mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Découvrez nos ERP disponibles au Maroc et trouvez la solution qui vous correspond
              </h2>
              <p className="text-secondary leading-relaxed">
                Quelle que soit la taille de votre entreprise et les spécificités de vos besoins, nos ERP ont été conçus pour répondre aux défis d&apos;entreprises ambitieuses. Ils vous donnent les moyens de piloter efficacement votre activité, dans différents secteurs comme l&apos;industrie, le négoce, les services, parmi d&apos;autres.
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
                  className={`rounded-2xl border flex flex-col overflow-hidden ${sol.highlight ? "border-cta shadow-lg shadow-cta/10" : "border-border"}`}
                >
                  {/* Header */}
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
                Prêt à transformer votre gestion d&apos;entreprise ?
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Nos experts Thalès Informatique vous accompagnent dans le choix et le déploiement du logiciel ERP Sage le plus adapté à votre activité.
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
