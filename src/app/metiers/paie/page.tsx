import type { Metadata } from "next";
import PaieClient from "./PaieClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Gestion de la Paie Maroc | Sage Paie | Thalès",
  description:
    "Logiciel de paie conforme au Code du Travail marocain : barème IR 2024, cotisations CNSS/AMO, bulletins de paie et régularisation annuelle avec Sage Paie. Demandez une démo.",
  alternates: { canonical: "/metiers/paie" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/metiers/paie`,
    siteName: "Thalès Informatique",
    title: "Gestion de la Paie Maroc | Sage Paie | Thalès",
    description:
      "Bulletins de paie conformes au Code du Travail : barème IR 2024, CNSS/AMO et régularisation annuelle avec Sage Paie.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Gestion Paie Maroc Sage Paie" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestion de la Paie Maroc | Sage Paie | Thalès",
    description:
      "Bulletins de paie conformes : barème IR, CNSS/AMO et régularisation annuelle avec Sage Paie au Maroc.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "Gestion de la Paie", item: `${SITE_URL}/metiers/paie` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Logiciel de Gestion de la Paie — Sage Paie Maroc",
  description:
    "Moteur de calcul de paie conforme au Code du Travail marocain : barème IR progressif, cotisations CNSS/AMO, bulletins de paie et régularisation annuelle.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "Logiciel de Paie",
  url: `${SITE_URL}/metiers/paie`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Comment fonctionne le calcul de l'IR sur salaires au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'Impôt sur le Revenu (IR) marocain s'applique selon un barème progressif par tranches : 0% jusqu'à 30 000 MAD annuels, 10% de 30 001 à 50 000 MAD, 20% de 50 001 à 60 000 MAD, 30% de 60 001 à 80 000 MAD, 34% de 80 001 à 180 000 MAD, et 38% au-delà. Notre logiciel applique automatiquement ce barème avec les abattements légaux.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles sont les cotisations CNSS obligatoires au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les cotisations CNSS au Maroc comprennent la part salariale (4,29% pour les allocations familiales + 2,26% pour l'AMO) et la part patronale (7,93% + 2,26% AMO + 1,05% IPE). Notre logiciel de paie calcule automatiquement toutes ces cotisations et génère les états de déclaration CNSS mensuels.",
      },
    },
    {
      "@type": "Question",
      name: "Sage Paie gère-t-il les heures supplémentaires conformément au Code du Travail ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Sage Paie applique les majorations légales prévues par le Code du Travail marocain : 25% pour les heures supplémentaires de jour (lundi-vendredi), 50% pour les heures de nuit, 50% pour les heures effectuées les jours fériés de jour et 100% pour les heures fériées de nuit. Ces majorations sont calculées automatiquement sur la base du salaire horaire.",
      },
    },
    {
      "@type": "Question",
      name: "Comment gérer la régularisation annuelle de l'IR avec un logiciel de paie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La régularisation annuelle consiste à recalculer l'IR sur la totalité des revenus de l'année et à comparer avec les retenues mensuelles. Notre logiciel effectue ce calcul automatiquement en décembre, identifie les écarts et les régularise sur le bulletin de décembre. Il génère également l'état 9421 à remettre à la DGI.",
      },
    },
    {
      "@type": "Question",
      name: "Le logiciel de paie est-il connecté au SIRH et à la comptabilité ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, notre solution de paie s'intègre nativement au SIRH Sage pour récupérer les données RH (absences, congés, primes) et à la comptabilité Sage pour la comptabilisation automatique des bulletins. Cette intégration élimine toute double saisie et garantit la cohérence des données entre les trois modules.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on mettre à jour le logiciel de paie lors de changements légaux au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Thalès Informatique assure la mise à jour régulière du logiciel de paie Sage à chaque modification légale ou réglementaire (barème IR, taux CNSS, SMIG, Code du Travail). Ces mises à jour sont incluses dans le contrat de maintenance et garantissent la conformité permanente de votre logiciel de paie Maroc.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PaieClient />
    </>
  );
}
