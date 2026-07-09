"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import {
  ArrowRight, ChevronRight, CheckCircle,
  Users, TrendingUp, Zap, BarChart2, Mail, Phone, Star,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const productivityCards = [
  {
    icon: Users,
    title: "Aidez vos équipes à en faire plus",
    desc: "Évitez les tâches redondantes et améliorez votre gestion de la relation client grâce à une vue consolidée de vos interactions dans le CRM.",
  },
  {
    icon: Star,
    title: "Fidélisez vos meilleurs clients",
    desc: "Bénéficiez d'une visibilité complète tout au long du cycle de vie du client grâce à des données fiables et tirez parti de vos opportunités de vente croisées et de vente croisée grâce à votre logiciel CRM.",
  },
  {
    icon: TrendingUp,
    title: "Commercialisez vos produits et services",
    desc: "Lancez des campagnes marketing ciblées, analysez vos performances commerciales et optimisez votre retour sur investissement avec un CRM puissant.",
  },
];

const qualityCards = [
  {
    icon: BarChart2,
    title: "Centralisez vos informations critiques",
    desc: "Le CRM vous aide à stocker les données client en un lieu central et sécurisé. Ces informations comprennent des historiques de contacts, des commandes passées, des réclamations, des opportunités et des demandes d'assistance. Toutes ces informations sont regroupées sur un seul et même support, à tout moment d'informations à jour.",
  },
  {
    icon: Zap,
    title: "Automatisez vos ventes",
    desc: "En utilisant le logiciel CRM, vous pouvez automatiser de multiples tâches concrètes dans le processus de vente, y compris le traitement des commandes, la gestion des prospects et les prévisions de ventes. Les tâches manuelles comme la planification des appels de vente ne sont plus nécessaires, votre logiciel CRM vous permet de tout gérer automatiquement.",
  },
  {
    icon: Mail,
    title: "Diffusez des campagnes marketing ciblées",
    desc: "Vos campagnes les plus ciblées assurent un retour sur investissement plus élevé et plus rapide. Notre CRM vous permet de lancer et de gérer vos campagnes de commercialisation et d'exécuter des rapports sur vos campagnes en quelques minutes.",
  },
  {
    icon: Users,
    title: "Offrez un service premium à la clientèle avec votre logiciel CRM",
    desc: "Livrez les tâches nécessaires et offrez d'une expérience client exceptionelle vous permettant d'améliorer votre taux de fidélisation et de stimuler la croissance. Avec notre CRM, vos clients sont plus satisfaits que jamais et vos concurrents restent à la traîne.",
  },
  {
    icon: BarChart2,
    title: "Bénéficiez d'une visibilité complète sur votre entreprise",
    desc: "Le CRM vous permet de générer des rapports sur tous les secteurs clés de votre entreprise, y compris les ventes, la clientèle, le service et le marketing. Vous pouvez même créer des rapports personnalisés qui mesurent la performance de l'entreprise par rapport aux KPI.",
  },
  {
    icon: Phone,
    title: "Une gestion des contacts optimisée",
    desc: "Le CRM vous aide à stocker toutes les informations sur les contacts. Pour chaque contact, vous pouvez stocker des informations, comme les numéros de téléphone et les adresses électroniques et professionnelles. Un commercial de la société pourrait par exemple accéder aux coordonnées d'un client sur son smartphone avant de les retrouver à l'occasion d'un appel.",
  },
];

const solutions = [
  {
    badge: "Sage 100",
    badgeLabel: "Force de vente",
    color: "bg-emerald-600",
    name: "Sage 100 Force de vente",
    subtitle: "Gagnez en efficacité commerciale pour développer votre activité.",
    features: [
      "Centralisez vos informations prospects clients",
      "Gagnez en efficacité commerciale",
      "Automatisez la production d'affaires et augmentez votre taux de transformation",
      "Bénéficiez de l'intégration native de votre CRM Sage avec Gestion Commerciale Sage",
    ],
    ctas: [
      { label: "Découvrez Sage 100 Force de vente", href: "/contact" },
      { label: "Demandez une démo Sage 100 Force de vente", href: "/contact" },
    ],
    highlight: false,
  },
  {
    badge: "Sage 100",
    badgeLabel: "Service client",
    color: "bg-cta",
    name: "Sage 100 Service client",
    subtitle: "Optimisez vos services et fidélisez vos clients.",
    features: [
      "Centralisez vos relations clients",
      "Fidélisez vos clients par un service de qualité",
      "Bénéficiez de l'intégration native de votre CRM Sage avec Gestion Commerciale Sage",
    ],
    ctas: [
      { label: "Découvrez Sage 100 Service client", href: "/contact" },
      { label: "Demandez une démo Sage 100 Service client", href: "/contact" },
    ],
    highlight: true,
  },
];

export default function CrmClient() {
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
                  <span className="text-white">CRM</span>
                </nav>
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  Découvrez la puissance du logiciel CRM connecté
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Fidélisez vos clients et augmentez vos revenus avec les logiciels CRM de Sage, pour une gestion de la relation client optimisée.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Découvrir nos solutions CRM <ArrowRight size={16} />
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

        {/* ── SECTION 1 — QU'EST-CE QUE LE CRM ? ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div {...fadeUp}>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Qu&apos;est-ce que le CRM ?
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  CRM signifie Customer Relationship Management, ou gestion de la relation client (GRC) en français. Il représente une stratégie d&apos;entreprise et d&apos;outils pour gérer les interactions avec les clients, les prospects et les clients au fur et à mesure qu&apos;ils évoluent dans les étapes du cycle de vente d&apos;une entreprise.
                </p>
                <p className="text-secondary leading-relaxed">
                  Le CRM se base sur la collecte intelligente des données qui menace le soutien les relations clients, améliore les processus au service offre l&apos;accès de toutes les équipes les données d&apos;affaires. Avant tout, c&apos;est pour les entreprises en organisation de développer une stratégie CRM efficace. Le terme est souvent utilisé comme synonyme de logiciel CRM.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2 — 2 COLONNES SOMBRE ── */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
              {/* Colonne gauche */}
              <motion.div {...fadeUp}>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Qu&apos;est-ce qu&apos;un logiciel CRM ?
                </h2>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Si l&apos;ERP vous permet de vous concentrer sur le pilotage de votre entreprise, le logiciel CRM, lui, fait la part belle au client. Le logiciel CRM aide les entreprises à améliorer leurs relations clients en organisant et en automatisant les communications, ainsi que les activités au sein de tous les départements en contact direct avec le client, tels que les ventes, le marketing et le service clientèle.
                </p>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Le CRM vous offre un regard complet sur vos clients. Il sauvegarde les coordonnées client, leurs préférences et l&apos;historique des interactions. Un CRM offre une automatisation qui vous permettait de travailler efficacement et simplement. Et comme chaque interaction client est conservée au même endroit, vous et votre équipe pouvez entretenir ces relations à chaque étape, pour une gestion de la relation client performante.
                </p>
                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                  <Zap size={18} className="text-cta mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-sm mb-1">Améliorez votre service client</p>
                    <p className="text-white/60 text-xs leading-relaxed">
                      En automatisant les activités de vie du client, votre service clientèle répond, grâce à des outils dédiés, plus rapidement et de manière plus personnalisée aux demandes de vos clients.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Colonne droite */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <h2 className="text-2xl font-bold text-white mb-4">
                  Pourquoi utiliser un logiciel CRM ?
                </h2>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  La structure centralisée du CRM optimise le flux de travail, permettant aux professionnels de communiquer efficacement, à la fois en interne et avec le client, afin de maintenir une expérience personnalisée positive à chaque étape importante.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: TrendingUp, title: "Commercialisez vos produits et services plus efficacement", desc: "Avec votre CRM, recuperez des informations clients en fonction des informations clients et obtenez un meilleur retour de votre budget marketing." },
                    { icon: Users, title: "Proposez de nouveaux produits aux bonnes personnes", desc: "Aidez à une compréhension plus approfondie de votre activité, vous pouvez exploiter votre CRM des fiches clients Tableau et cibler les meilleurs clients pour vos nouveaux produits et services." },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                      <Icon size={18} className="text-cta mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-white text-sm mb-1">{title}</p>
                        <p className="text-white/60 text-xs leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3 — 2 COLONNES CLAIRE ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
              {/* Colonne gauche */}
              <motion.div {...fadeUp}>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Comment le logiciel CRM offre-t-il un service client de qualité exceptionnelle ?
                </h2>
                <p className="text-secondary text-sm leading-relaxed mb-4">
                  En utilisant un CRM, votre équipe marketing peut identifier les meilleures des leads, les rapports publics et les ventes Téléphone. Lorsque les clients commandent vos produits ou services à la suite de ces campagnes marketing, vous pouvez suivre ces commandes en utilisant votre CRM ou votre logiciel de CRM.
                </p>
              </motion.div>

              {/* Colonne droite */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Comment le CRM peut-il stimuler vos ventes ?
                </h2>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  Vous pouvez simplifier la processus de vente, raccourcir le cycle de vente et tirer le meilleur parti de chaque opportunité commerciale. Le logiciel CRM automatise les tâches de vente telles que l&apos;établissement de devis et de commandes, les prévisions de ventes, la conversion des leads et la création d&apos;opportunités fiables.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: TrendingUp, title: "Commercialisez vos produits et services plus efficacement", desc: "Avec votre CRM, recuperez des informations clients ciblées en fonction des informations clients et obtenez un meilleur retour de votre budget marketing." },
                    { icon: Users, title: "Proposez de nouveaux produits aux bonnes personnes", desc: "Aidez à une compréhension plus approfondie de votre activité, vous pouvez exploiter votre CRM avec fiches clients et cibler les meilleurs clients pour vos nouveaux produits et services." },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-cta/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={16} className="text-cta" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary text-sm mb-1">{title}</p>
                        <p className="text-secondary text-xs leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4 — PRODUCTIVITÉ ET RENTABILITÉ ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-2xl mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Comment le logiciel CRM permet-il d&apos;améliorer la productivité et la rentabilité ?
              </h2>
              <p className="text-secondary leading-relaxed">
                Sage Business Cloud offre une solution plus performante et plus rapide pour gérer votre entreprise dans sa globalité.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {productivityCards.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-cta/10 flex items-center justify-center">
                    <Icon size={20} className="text-cta" />
                  </div>
                  <h3 className="font-bold text-primary text-sm">{title}</h3>
                  <p className="text-secondary text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5 — QUALITÉ POUR PME ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-2xl mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Un logiciel CRM de qualité pour les petites et moyennes entreprises
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {qualityCards.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-cta/10 flex items-center justify-center">
                    <Icon size={20} className="text-cta" />
                  </div>
                  <h3 className="font-bold text-primary text-sm">{title}</h3>
                  <p className="text-secondary text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 6 — SOLUTIONS CRM ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-2xl mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Découvrez nos logiciels CRM
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
                    <p className="text-secondary text-sm leading-relaxed mb-5">{sol.subtitle}</p>
                    <ul className="space-y-2.5 mb-8 flex-1">
                      {sol.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-secondary text-sm">
                          <CheckCircle size={14} className="text-cta mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-3">
                      {sol.ctas.map((cta, ci) => (
                        <Link
                          key={cta.label}
                          href={cta.href}
                          className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors duration-200 ${ci === 0 ? (sol.highlight ? "bg-cta text-white hover:bg-blue-700" : "bg-primary text-white hover:bg-slate-800") : "border-2 border-current text-primary hover:bg-primary hover:text-white"}`}
                        >
                          {cta.label} <ArrowRight size={14} />
                        </Link>
                      ))}
                    </div>
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
                Prêt à transformer votre relation client ?
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Nos experts Thalès Informatique vous accompagnent dans le choix et le déploiement du logiciel CRM Sage le plus adapté à votre activité.
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
