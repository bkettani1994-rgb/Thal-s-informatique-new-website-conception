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
    title: "Plus de temps facturable, moins d'administratif",
    desc: "Automatisez la saisie des temps, la facturation et les relances pour que vos équipes se concentrent sur leurs missions à valeur ajoutée plutôt que sur des tâches répétitives.",
  },
  {
    icon: BarChart2,
    title: "Rentabilité projet sous contrôle",
    desc: "Suivez la marge de chaque contrat ou mission en temps réel : coûts engagés, heures passées, facturation avancée. Identifiez rapidement les projets sous-performants avant qu'ils ne pèsent sur votre résultat.",
  },
  {
    icon: Shuffle,
    title: "Agilité face aux évolutions du marché",
    desc: "Le marché des services au Maroc évolue vite. Vos processus de gestion doivent s'adapter aussi vite que vos offres. Un ERP modulaire vous permet d'ajuster votre organisation sans repartir de zéro.",
  },
  {
    icon: Users,
    title: "Collaboration multi-sites et télétravail",
    desc: "Vos équipes sont dispersées entre Casablanca, Rabat ou d'autres villes ? Dotez-les d'un accès commun aux mêmes données en temps réel, depuis n'importe quel appareil, pour travailler ensemble sans friction.",
  },
  {
    icon: Cloud,
    title: "Continuité et fiabilité de votre activité",
    desc: "Déployez votre solution de gestion en cloud sécurisé pour garantir la disponibilité de vos données et la continuité de vos opérations, même en cas d'imprévu ou de croissance rapide.",
  },
];

const financeAtouts = [
  {
    icon: Shield,
    title: "Conformité et traçabilité des engagements",
    desc: "Structurez vos flux d'approbation et de validation pour garantir le respect de vos procédures internes et des obligations réglementaires marocaines — contrats, TVA, déclarations sociales et fiscales.",
  },
  {
    icon: TrendingUp,
    title: "Trésorerie et facturation maîtrisées",
    desc: "Automatisez la facturation à l'avancement, gérez les acomptes et les retenues de garantie, et bénéficiez d'une visibilité précise sur votre encours client pour améliorer votre cycle de trésorerie.",
  },
  {
    icon: Eye,
    title: "Décisions stratégiques basées sur les données",
    desc: "Tableaux de bord consolidés, reporting par activité ou par client, analyse des marges par type de prestation : donnez à votre direction et à vos responsables opérationnels les indicateurs dont ils ont besoin pour piloter efficacement.",
  },
];

const solutions = [
  {
    badge: "Sage 100",
    badgeLabel: "Gestion Commerciale",
    color: "bg-emerald-600",
    name: "Sage 100 Gestion Commerciale",
    subtitle: "Pour les TPE et PME de services",
    description: "Sage 100 Gestion Commerciale couvre l'ensemble du cycle de facturation des entreprises de services marocaines : devis, bons de commande, factures, avoirs et suivi des paiements dans une solution simple et connectée à la comptabilité.",
    features: [
      "Création et suivi des devis, commandes et factures",
      "Gestion des contrats de prestation et des abonnements",
      "Tableaux de bord de suivi d'activité en temps réel",
      "Relances clients automatisées et suivi des encaissements",
      "Intégration directe avec Sage 100 Comptabilité",
      "Personnalisation des documents aux couleurs de votre entreprise",
    ],
    cta: "Demander une démo",
    href: "/contact",
    highlight: false,
  },
  {
    badge: "Sage X3",
    badgeLabel: "ERP Services",
    color: "bg-cta",
    name: "Sage X3 — ERP pour les sociétés de services",
    subtitle: "Pour les ETI et groupes de services",
    description: "Sage X3 est l'ERP de référence pour les sociétés de services marocaines et africaines à forte volumétrie ou multi-entités. Il centralise la gestion des projets, des ressources, de la finance et des RH dans une plateforme unique.",
    features: [
      "Gestion des projets et des affaires : planification, suivi des coûts et facturation",
      "Portail collaboratif et saisie des temps en ligne",
      "Gestion multi-entités, multi-devises et multi-langues",
      "Reporting financier consolidé par activité ou par région",
      "Workflows de validation configurables selon votre organisation",
      "Déploiement cloud SaaS ou on-premise selon vos contraintes IT",
    ],
    cta: "Demander une démo",
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
                <nav aria-label="Fil d'Ariane" className="text-sm text-white/50 mb-6 flex items-center gap-2">
                  <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                  <ChevronRight aria-hidden="true" size={14} />
                  <Link href="/secteurs" className="hover:text-white transition-colors">Secteurs</Link>
                  <ChevronRight aria-hidden="true" size={14} />
                  <span aria-current="page" className="text-white">Services</span>
                </nav>
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  Solutions ERP pour les sociétés de services au Maroc et en Afrique
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Thalès Informatique accompagne les entreprises de services marocaines dans la digitalisation de leur gestion : facturation, projets, ressources humaines et pilotage financier en temps réel.
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
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1783935496/Service-ERP-thales-informatique_ptyaau.jpg"
                  alt="Équipe de conseil et services au Maroc — ERP facturation projet et gestion des ressources"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 1 — CONTEXTE ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.div {...fadeUp}>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Les enjeux de la gestion pour les entreprises de services
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Cabinets de conseil, sociétés d&apos;ingénierie, prestataires IT, agences de communication, bureaux d&apos;études : les entreprises de services marocaines partagent un défi commun — piloter des ressources humaines qualifiées, des projets complexes et des cycles de facturation souvent décalés par rapport à la réalité terrain.
                </p>
                <p className="text-secondary leading-relaxed">
                  Sans outil de gestion adapté, les risques sont réels : dépassements de budget, pertes de temps sur la facturation, manque de visibilité sur la rentabilité par mission, et difficultés à coordonner des équipes réparties sur plusieurs sites au Maroc ou en Afrique. Un ERP dédié aux services transforme ces contraintes en leviers de performance.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2 — 5 ATOUTS OPÉRATIONNELS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                5 bénéfices opérationnels pour votre société de services
              </h2>
              <p className="text-secondary leading-relaxed">
                Des gains concrets sur votre productivité, votre rentabilité et la satisfaction de vos clients.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
                  <h3 className="font-bold text-primary">{title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3 — FINANCE & PILOTAGE ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Une gestion financière rigoureuse pour vos engagements clients
              </h2>
              <p className="text-secondary leading-relaxed">
                Conformité, trésorerie et pilotage : les trois piliers d&apos;une gestion financière saine pour les entreprises de services marocaines.
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
                  <h3 className="font-bold text-primary">{title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4 — SOLUTIONS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                La solution adaptée à votre taille et votre métier
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
                Faites évoluer votre gestion avec Thalès Informatique
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Nos consultants accompagnent les sociétés de services marocaines et africaines dans le choix, le déploiement et la prise en main de leur solution Sage — avec un suivi personnalisé à chaque étape.
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
