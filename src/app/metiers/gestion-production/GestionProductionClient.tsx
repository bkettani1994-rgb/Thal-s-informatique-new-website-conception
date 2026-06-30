"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const capabilityTabs = [
  {
    key: "boms",
    label: "Planification des nomenclatures",
    title: "Atteindre une meilleure homogénéité",
    desc: "Sage Business Cloud X3 apporte une gestion performante des nomenclatures à niveau unique et multiple afin d'assurer le meilleur niveau d'homogénéité et de qualité des produits ainsi que de collaboration.",
    features: [
      "Nomenclature multiple (commerciale, production, sous-traitance, etc.)",
      "Nomenclatures en cours",
      "Entretien à grande échelle",
      "Gestion des changements sur un produit et une nomenclature",
      "Gestion des versions (majeures et mineures)",
    ],
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782815857/1-manufacturingbom-ui-fr-thales-informatique_fmw1pj.webp",
    imageAlt: "Interface Sage X3 de planification des nomenclatures multi-niveaux pour l'industrie",
  },
  {
    key: "shopfloor",
    label: "Pilotage de l'atelier",
    title: "Améliorer vos performances en atelier",
    desc: "Sage X3 vous permet de prioriser, d'assurer le suivi et de gérer tous les aspects de votre production afin d'améliorer la planification, l'organisation et l'évaluation des coûts.",
    features: [
      "Recensement des heures de travail",
      "Travail direct (préparation et production)",
      "Travail indirect (pauses et temps indirect)",
      "Heures actuelles et passées",
      "Tâches multiples (synchronisées ou asynchronisées)",
      "Pauses automatiques",
      "Temps et présence (pointage à l'arrivée et au départ)",
      "Saisie du temps indirect (pointage à l'arrivée et au départ)",
      "Saisie des pauses (pointage à l'arrivée et au départ)",
      "Saisie d'équipe",
      "Outil de suivi de l'atelier",
    ],
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782815857/2-shopfloor-ui-fr-thales-informatique_qltpsx.webp",
    imageAlt: "Interface Sage X3 de pilotage et de suivi de l'atelier de production",
  },
  {
    key: "quality",
    label: "Contrôle qualité",
    title: "Maintenir une qualité élevée",
    desc: "Sage X3 apporte les outils et les procédures nécessaires pour respecter des normes de qualité élevées, dont la gestion proactive grâce à la traçabilité complète des produits.",
    features: [
      "Gestion des numéros des lots principaux et secondaires",
      "Gestion des numéros de série",
      "Gestion des DLUO",
      "Gestion du statut des stocks : accepté, rejeté, inspecté",
      "Gestion des dates de réinspection",
      "Gestion des statuts secondaires des stocks",
      "Création d'entrée de contrôle qualité",
      "Procédures de contrôle qualité avec demande d'analyse",
      "Gestion des dates de péremption",
      "Gestion de la traçabilité en amont et en aval",
    ],
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782815856/3qualitycontrol-ui-fr-thales-informatique_akhmii.webp",
    imageAlt: "Interface Sage X3 de contrôle qualité et de traçabilité des lots de production",
  },
  {
    key: "project",
    label: "Gestion des projets",
    title: "Menez vos projets à bien",
    desc: "Sage X3 vous aide à gérer des projets rentables et à les mener à bien tout au long de leur cycle de vie grâce à des fonctions de gestion de projet intégrées et performantes.",
    features: [
      "Organigramme des tâches du projet et du produit (PBS et WBS)",
      "Description des différents niveaux des tâches préparant les processus opérationnels et de fabrication",
      "Ventilation des coûts du projet (CBS)",
      "Description des différents niveaux des budgets pour faciliter le suivi des coûts du projet",
      "Répartition des employés sur les différentes opérations",
      "Fonction avancée de copie de projets",
      "Fonction de suivi financier pour gérer le budget et les dépenses des projets",
      "Saisie du temps passé sur un projet au niveau des opérations, des tâches et du budget",
    ],
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782815857/4-projectmanagement-timeline-ui-fr-thales-informatique_yayoqu.webp",
    imageAlt: "Interface Sage X3 de gestion de projet avec organigramme des tâches et suivi budgétaire",
  },
  {
    key: "collab",
    label: "Collaboration",
    title: "Renforcez la collaboration",
    desc: "Sage X3 améliore l'efficacité et la collaboration de vos équipes en réunissant les flux de documents dans une librairie unique et cohésive au sein de laquelle vous pouvez effectuer des recherches.",
    features: [
      "Gestion des documents et des révisions dans le cadre du processus commercial",
      "Partage par utilisateur, poste et équipe projet incluant la gestion des étiquettes",
      "Sauvegarde des documents par glisser-déposer sur Sage X3 et le stockage en ligne",
      "Insertion de graphiques et de données directement sous PowerPoint ou Word et synchronisation des données",
      "Exportation vers Excel et synchronisation des données",
      "Intégration des contacts, calendriers et tâches avec Microsoft Outlook",
    ],
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782815856/5-collaborate-team-ux-fr-thales-informatique_mcxb3h.webp",
    imageAlt: "Interface Sage X3 de collaboration documentaire entre équipes de production",
  },
  {
    key: "workspace",
    label: "Espace de travail",
    title: "Renforcez votre efficacité",
    desc: "Sage X3 améliore la facilité d'utilisation, la productivité et l'attractivité de votre solution de gestion commerciale et fournit un accès hautement personnalisé aux données pertinentes à tous les départements et postes.",
    features: [
      "La page d'accueil personnalisée fournit à l'utilisateur une vision d'ensemble des données essentielles et une aide pour réaliser les tâches généralement associées à son poste avec des repères visuels",
      "Personnalisation en fonction de l'utilisateur ou de l'administrateur reposant sur les règles de sécurité en vigueur pour le poste et l'utilisateur",
      "Accès aux données pertinentes, inclusion de données dynamiques internes, statistiques sous forme de tableaux ou de graphiques, calendriers, favoris, liens vers des URL externes, notes et documents",
    ],
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782815856/6-workspace-manufacturing-combined-kpis-ui-thales-informatique_zspjbt.webp",
    imageAlt: "Espace de travail personnalisé Sage X3 avec indicateurs clés de production",
  },
  {
    key: "mobile",
    label: "Mobile",
    title: "Une expérience mobile sur mesure",
    desc: "Sage X3 améliore et personnalise l'expérience utilisateur grâce à sa technologie mobile et son accès Web sécurisé, vous fournissant ainsi l'accès aux données dont vous avez besoin grâce à une interface intuitive et personnalisée en fonction de votre poste et de vos préférences.",
    features: [
      "Facilité d'utilisation et compatibilité avec les appareils Android et iOS",
      "Permet les déploiements mobiles et web et donne accès aux données commerciales communes d'où que vous soyez, sur n'importe quel appareil",
      "L'interface HTML5 offre une expérience de navigation intuitive et permet un fort degré de personnalisation par les utilisateurs",
    ],
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782815856/7-mobile-tablet-phone-ux-fr-thales-informatique_ryylid.webp",
    imageAlt: "Application mobile Sage X3 accessible sur smartphone et tablette Android et iOS",
  },
];

export default function GestionProductionClient() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp}>
              <nav className="text-sm text-white/50 mb-6 flex items-center gap-2">
                <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                <span>/</span>
                <Link href="/metiers" className="hover:text-white transition-colors">Métiers</Link>
                <span>/</span>
                <span className="text-accent">Gestion de Production</span>
              </nav>
              <span className="text-xs font-bold text-accent tracking-widest">OPÉRATIONS & ERP</span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3">Gestion de Production</h1>
              <p className="text-white/70 text-lg mt-4 max-w-2xl">
                Pilotez l&apos;ensemble de votre production, du lancement des ordres de fabrication à la mise sur le marché, grâce à une solution unique et intégrée.
              </p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Demander une démo <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="max-w-3xl" {...fadeUp}>
              <h2 className="text-2xl font-bold text-primary">Maîtrisez votre production de bout en bout</h2>
              <p className="text-secondary mt-4 leading-relaxed">
                Thalès Informatique propose un module de gestion de production industrielle complet : planification, suivi des ordres de fabrication, gestion des ressources et contrôle qualité. Notre solution s&apos;adapte aux industries manufacturières de toutes tailles, au Maroc, en Afrique et à l&apos;international.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Capacités détaillées — blocs empilés */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-16">
              <span className="text-xs font-bold text-cta tracking-widest uppercase">FONCTIONNALITÉS DÉTAILLÉES</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Une couverture fonctionnelle complète</h2>
            </motion.div>

            <div className="space-y-20">
              {capabilityTabs.map((tab, i) => (
                <motion.div
                  key={tab.key}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className={`grid md:grid-cols-2 gap-10 items-center ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold text-cta tracking-widest uppercase">{tab.label}</span>
                    <h3 className="text-2xl font-bold text-primary mt-2 mb-4">{tab.title}</h3>
                    <p className="text-secondary leading-relaxed mb-6">{tab.desc}</p>
                    <h4 className="text-sm font-bold text-primary uppercase tracking-wide mb-3">Fonctionnalités</h4>
                    <ul className="space-y-2.5 mb-6">
                      {tab.features.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-secondary leading-relaxed">
                          <CheckCircle2 size={15} className="text-cta shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-cta text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm"
                    >
                      Demander une démo
                    </Link>
                  </div>
                  <div className="h-64 sm:h-80 md:h-96 rounded-2xl border border-border overflow-hidden bg-white flex items-center justify-center p-1">
                    <img
                      src={tab.image}
                      alt={tab.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-white">Optimisez votre production avec Thalès Informatique</h2>
              <p className="text-white/70 mt-4">Réduisez vos coûts de production et améliorez votre taux de service grâce à notre module GPAO.</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Planifier une démo <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
