"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import {
  ArrowRight, ChevronRight, CheckCircle,
  BookOpen, Users, ShieldCheck, PieChart, HeartHandshake, FileText,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const defis = [
  {
    icon: PieChart,
    title: "Transparence financière et conformité",
    desc: "Les associations marocaines sont soumises à des obligations de reporting envers leurs membres, leurs financeurs et les autorités compétentes. Sans outil de gestion adapté, produire des états financiers fiables et conformes dans les délais devient un véritable casse-tête.",
  },
  {
    icon: Users,
    title: "Pilotage des ressources humaines et bénévoles",
    desc: "Salariés, prestataires, bénévoles : gérer des équipes aux statuts variés, coordonner les disponibilités et assurer le suivi des missions nécessite une organisation rigoureuse que les tableurs ne peuvent plus soutenir au-delà d'une certaine taille.",
  },
  {
    icon: HeartHandshake,
    title: "Diversification et suivi des financements",
    desc: "Subventions publiques, cotisations membres, dons, appels à projets : chaque source de financement a ses propres règles d'affectation et de justification. Centraliser ce suivi permet d'éviter les erreurs d'imputation et de maximiser l'impact de chaque dirham reçu.",
  },
];

const avantages = [
  {
    icon: ShieldCheck,
    title: "Conformité réglementaire assurée",
    desc: "Automatisez la production de vos états comptables, de vos rapports d'activité et de vos déclarations fiscales et sociales selon les normes marocaines en vigueur.",
  },
  {
    icon: BookOpen,
    title: "Visibilité en temps réel sur vos budgets",
    desc: "Suivez l'avancement de chaque projet, programme ou action par rapport à son budget alloué. Identifiez immédiatement les écarts et réallouez les ressources en conséquence.",
  },
  {
    icon: FileText,
    title: "Reporting simplifié pour vos financeurs",
    desc: "Générez en quelques clics les rapports d'utilisation des fonds exigés par vos partenaires institutionnels, bailleurs de fonds ou donateurs privés.",
  },
];

const solutions = [
  {
    badge: "Gestion Comptable",
    badgeLabel: "PME & Associations",
    color: "bg-emerald-600",
    name: "Solution Comptable — Associations et ONG",
    subtitle: "Pour les petites et moyennes structures",
    description: "Une solution de gestion comptable et financière pensée pour les associations marocaines : suivi des budgets par projet, gestion des cotisations membres, édition des états financiers et tableau de bord de pilotage en temps réel.",
    features: [
      "Comptabilité générale et analytique par projet ou programme",
      "Gestion des cotisations, dons et subventions avec affectation budgétaire",
      "Suivi des encaissements et décaissements en temps réel",
      "Édition des états financiers conformes aux normes marocaines",
      "Tableaux de bord personnalisables pour le conseil d'administration",
    ],
    cta: "Demander une démo",
    href: "/contact",
    highlight: false,
  },
  {
    badge: "ERP Associations",
    badgeLabel: "Gestion Intégrée",
    color: "bg-cta",
    name: "ERP — Grandes associations et fédérations",
    subtitle: "Pour les fédérations et réseaux associatifs",
    description: "Pour les grandes associations, fédérations et ONG marocaines et africaines opérant sur plusieurs sites ou projets : une plateforme de gestion unifiée qui couvre la comptabilité, les ressources humaines, la gestion de projets et le reporting consolidé.",
    features: [
      "Gestion multi-entités et multi-projets avec consolidation automatique",
      "Module RH intégré : paie, congés, notes de frais, bénévoles",
      "Suivi des financements multi-bailleurs avec reporting dédié",
      "Workflows de validation configurables selon vos procédures internes",
      "Portail collaboratif pour les équipes terrain et les antennes régionales",
      "Déploiement cloud sécurisé ou on-premise selon vos contraintes",
    ],
    cta: "Demander une démo",
    href: "/contact",
    highlight: true,
  },
];

export default function AssociationClient() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="pt-32 pb-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeUp}>
                <nav aria-label="Fil d'Ariane" className="text-sm text-white/50 mb-6 flex items-center gap-2">
                  <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                  <ChevronRight aria-hidden="true" size={14} />
                  <Link href="/secteurs" className="hover:text-white transition-colors">Secteurs</Link>
                  <ChevronRight aria-hidden="true" size={14} />
                  <span aria-current="page" className="text-white">Associations</span>
                </nav>
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  Solutions de gestion pour associations et ONG au Maroc et en Afrique
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Thalès Informatique accompagne les associations, fédérations et ONG marocaines dans la digitalisation de leur gestion financière, de leurs projets et de leurs ressources humaines.
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
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1783940966/Association-ERP-thales-informatique_onumrq.jpg"
                  alt="Gestion association et ONG au Maroc — logiciel comptabilité et reporting bailleurs"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 1 — CONTEXTE ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div {...fadeUp}>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
                  La gestion d&apos;une association, un défi à part entière
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Les associations, ONG et fondations marocaines partagent une réalité commune : elles doivent gérer des ressources limitées avec une rigueur équivalente à celle d&apos;une entreprise, tout en justifiant chaque dépense à leurs financeurs et à leurs membres.
                </p>
                <p className="text-secondary leading-relaxed">
                  Les contraintes réglementaires s&apos;ajoutent à la complexité opérationnelle : comptabilité analytique par projet, gestion des subventions multi-bailleurs, suivi des bénévoles et production de rapports d&apos;activité détaillés. Un logiciel de gestion adapté aux spécificités du secteur associatif marocain vous permet d&apos;automatiser ces tâches chronophages et de concentrer votre énergie sur votre mission.
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
                Les 3 défis majeurs des associations et ONG au Maroc
              </h2>
              <p className="text-secondary leading-relaxed">
                Transparence financière, coordination des équipes et diversification des financements : trois enjeux incontournables pour toute structure associative qui veut durer et grandir.
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
                La solution adaptée à votre structure et à vos enjeux
              </h2>
              <p className="text-secondary leading-relaxed">
                Petite association locale ou grande fédération nationale, Thalès Informatique vous propose une solution qui s&apos;adapte à vos besoins réels, à votre budget et aux exigences de vos partenaires financeurs.
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

        {/* ── SECTION 4 — AVANTAGES ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                3 bénéfices concrets pour votre organisation
              </h2>
              <p className="text-secondary leading-relaxed">
                Des résultats mesurables sur votre conformité, votre visibilité budgétaire et la qualité de votre reporting envers vos financeurs.
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
                Modernisez la gestion de votre association avec Thalès Informatique
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Nos consultants accompagnent les associations et ONG marocaines dans le déploiement de solutions de gestion adaptées — comptabilité, projets, ressources humaines et reporting intégrés.
              </p>
              <p data-ilink className="text-white/60 text-sm mb-8">Solutions adaptées : <Link href="/solutions/sage-100" className="text-white underline hover:text-accent">Sage 100</Link> et <Link href="/metiers/comptabilite-finance" className="text-white underline hover:text-accent">Comptabilité &amp; Finance</Link>.</p>
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
