"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, ChevronRight, CheckCircle } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const solutions = [
  {
    badge: "Sage X3",
    badgeLabel: "Warehousing",
    color: "bg-emerald-600",
    name: "Sage X3 Warehousing",
    subtitle: "Des PME aux grandes entreprises",
    description: "Rendez vos opérations logistiques et la gestion de vos entrepôts plus simples que jamais.",
    features: [
      "Améliorez la productivité en organisant et rationalisant l'activité des collaborateurs (déplacement, préparations…) au sein de l'entrepôt",
      "Pilotez plus efficacement vos moyens industriels en attribuant à chacun des missions compatibles avec sa fonction, son métier, sa localisation",
      "Renforcez la qualité et la flabilité de vos flux logistiques",
      "Valorisez vos espaces d'entreposage grâce à un algorithme qui modélise l'espace de stockage en 3 dimensions et les déplacements",
      "Disposez d'une solution modulable qui vous accompagne à chaque étape de l'évolution de votre organisation, en France comme à l'international",
    ],
    cta: "Découvrez Sage X3 Warehousing",
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

export default function LogistiqueClient() {
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
                  <span className="text-white">Logistique</span>
                </nav>
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  Maîtrisez votre logistique
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Avec nos logiciels, maîtrisez l&apos;entreposage et le transport pour gagner en efficacité et améliorer votre productivité.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Découvrir les fonctionnalités <ArrowRight size={16} />
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

        {/* ── SECTION 1 — SOLUTIONS QUI CONNAISSENT VOTRE MÉTIER ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div {...fadeUp}>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Des solutions qui connaissent votre métier
                </h2>
                <p className="text-secondary leading-relaxed mb-10">
                  En tant que professionnel de la logistique, vous travaillez dans l&apos;urgence. Pour tenir vos engagements, vous devez maîtriser vos flux, optimiser vos espaces de stockage et améliorer l&apos;efficacité de vos collaborateurs. Chez Thalès Informatique, nous développons depuis plus de 20 ans des logiciels de gestion en collaboration avec des professionnels de la logistique.
                </p>

                <h3 className="text-xl font-bold text-primary mb-3">
                  Des fonctions dédiées à l&apos;entreposage
                </h3>
                <p className="text-secondary leading-relaxed mb-8">
                  Nos <strong className="text-primary">solutions de gestion d&apos;entrepôt</strong> (WMS ou Warehouse Management System) gèrent les différents types de stockage : racks, masse, picking, quais… Grâce à une représentation graphique mise à jour en temps réel, elles vous permettent de suivre l&apos;état exact de vos stocks, d&apos;optimiser les rangements et les déplacements. Nos solutions sont compatibles avec les technologies d&apos;identification et de communication spécifiques à votre activité : RFID, code-barres, communication vocale, pistolet RF et bien d&apos;autres encore.
                </p>

                <h3 className="text-xl font-bold text-primary mb-3">
                  Gagnez en efficacité et en productivité
                </h3>
                <p className="text-secondary leading-relaxed">
                  Nos solutions répondent aux exigences de la supply chain execution. Réduisez vos coûts et vos délais, améliorez l&apos;interopérabilité de vos différents sites, gagnez en visibilité sur l&apos;ensemble de vos activités, améliorez vos prestations et la satisfaction de vos commanditaires.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2 — SOLUTIONS ENTREPÔTS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                Nos solutions de gestion des entrepôts
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

        {/* ── SECTION 3 — OPÉRATIONS & FLUX ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div {...fadeUp}>
                <h2 className="text-xl font-bold text-primary mb-4">
                  Gagnez du temps et simplifiez les opérations répétitives :
                </h2>
                <ul className="space-y-2 mb-10">
                  {[
                    "Limitez les ressaisies et évitez les erreurs",
                    "Prenez en charge les échanges de documents en EDI",
                    "Assurez la traçabilité de vos flux de marchandises",
                    "Fluidifiez la communication avec vos équipes",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-secondary text-sm">
                      <CheckCircle size={14} className="text-cta mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <h2 className="text-xl font-bold text-primary mb-3">
                  Des logiciels pour optimiser vos flux
                </h2>
                <p className="text-secondary text-sm leading-relaxed mb-4">
                  Allégez vos tâches quotidiennes et améliorez vos processus avec nos <strong className="text-primary">solutions de gestion de transport (TMS)</strong>.
                </p>
                <ul className="space-y-2 mb-10">
                  {[
                    "Enregistrez les commandes et validez les opérations d'enlèvement et de livraison",
                    "Gérez automatiquement la taxation et la facturation des ordres de transport",
                    "Planifiez vos ressources",
                    "Géolocalisez vos véhicules et suivez vos marchandises",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-secondary text-sm">
                      <CheckCircle size={14} className="text-cta mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <h2 className="text-xl font-bold text-primary mb-3">
                  Des services sur mesure
                </h2>
                <p className="text-secondary text-sm leading-relaxed mb-10">
                  Pour répondre à vos besoins et s&apos;intégrer à votre système d&apos;information, nos <strong className="text-primary">solutions logistiques</strong> sont disponibles en mode licence, DEL/DUA ou SaaS, ou encore intégrées à un ERP. Elles s&apos;accompagnent de services sur mesure, tant pour le conseil et l&apos;assistance que pour la formation. Nos équipes et nos partenaires sont à vos côtés pour vous aider à chaque étape de vos projets, de la conception à l&apos;exploitation en passant par l&apos;installation, la personnalisation et la formation.
                </p>

                <h2 className="text-xl font-bold text-primary mb-3">
                  Gérez vos entrepôts en toute sérénité
                </h2>
                <p className="text-secondary text-sm leading-relaxed">
                  Quels que soient vos besoins logistiques, Sage X3 Warehousing vous aide à tirer le meilleur parti de vos entrepôts. De la réception à l&apos;expédition, maîtrisez et optimisez vos flux à distance.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-16 bg-cta">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Prêt à optimiser votre chaîne logistique ?
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Nos experts Thalès Informatique vous accompagnent dans le choix et le déploiement de la solution Sage la plus adaptée à votre activité logistique.
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
