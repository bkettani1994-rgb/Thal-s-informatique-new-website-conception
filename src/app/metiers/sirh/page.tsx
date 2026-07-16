import type { Metadata } from "next";
import SirhClient from "./SirhClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "SIRH | Logiciel RH Maroc | Thalès Informatique",
  description:
    "SIRH pour PME et ETI au Maroc : gestion RH, GPEC, plans de formation, organigramme et compétences avec Sage RH. Pilotez stratégiquement vos ressources humaines.",
  alternates: { canonical: "/metiers/sirh" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/metiers/sirh`,
    siteName: "Thalès Informatique",
    title: "SIRH | Logiciel RH Maroc | Thalès Informatique",
    description:
      "SIRH Sage RH pour PME marocaines : GPEC, formation, compétences et gestion RH pilotée en temps réel.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - SIRH Logiciel RH Maroc Sage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SIRH | Logiciel RH Maroc | Thalès Informatique",
    description:
      "SIRH Sage RH pour PME marocaines : GPEC, formation et gestion RH pilotée en temps réel.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "SIRH", item: `${SITE_URL}/metiers/sirh` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SIRH — Logiciel de Gestion des Ressources Humaines Maroc",
  description:
    "Système d'Information RH Sage pour les entreprises marocaines : GPEC, plans de formation, compétences, organigramme et pilotage stratégique des ressources humaines.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "SIRH — Logiciel RH",
  url: `${SITE_URL}/metiers/sirh`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce qu'un SIRH et quelles sont ses fonctionnalités ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un SIRH (Système d'Information des Ressources Humaines) est un logiciel RH qui centralise la gestion du capital humain : administration du personnel, compétences, GPEC (Gestion Prévisionnelle des Emplois et des Compétences), plans de formation, entretiens d'évaluation et organigramme. Il permet aux DRH de passer d'une gestion administrative à un pilotage stratégique des RH.",
      },
    },
    {
      "@type": "Question",
      name: "Comment le SIRH aide-t-il à gérer les compétences en entreprise ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Notre SIRH Sage cartographie les compétences de chaque collaborateur, identifie les écarts par rapport aux exigences du poste et génère des plans de développement individuels. Cette vision claire des compétences disponibles facilite les décisions de mobilité interne, les plans de succession et les recrutements ciblés.",
      },
    },
    {
      "@type": "Question",
      name: "Qu'est-ce que la GPEC et comment un SIRH la facilite-t-il ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La GPEC (Gestion Prévisionnelle des Emplois et des Compétences) consiste à anticiper les besoins en ressources humaines à moyen terme pour adapter les compétences aux évolutions de l'entreprise. Notre SIRH modélise vos scénarios d'évolution organisationnelle, identifie les besoins futurs en compétences et planifie les actions de formation et recrutement nécessaires.",
      },
    },
    {
      "@type": "Question",
      name: "Le SIRH est-il connecté au module de paie Sage ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, notre SIRH Sage est nativement connecté au module de paie. Les absences, congés, primes et éléments variables de paie saisis dans le SIRH sont automatiquement transmis au moteur de paie, éliminant toute double saisie. Cette intégration garantit une parfaite cohérence entre les données RH et les bulletins de paie.",
      },
    },
    {
      "@type": "Question",
      name: "Un logiciel SIRH peut-il gérer les entretiens annuels ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, notre SIRH intègre un module d'entretiens d'évaluation entièrement paramétrable : grilles de compétences personnalisables, objectifs SMART, plan de développement et historique des entretiens par collaborateur. Les managers et collaborateurs peuvent préparer et signer les comptes-rendus directement depuis le portail RH.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le retour sur investissement d'un SIRH pour une PME marocaine ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Une PME qui déploie un SIRH constate en moyenne une réduction de 50% du temps passé sur les tâches administratives RH, une meilleure rétention des talents grâce aux plans de carrière structurés et une réduction du turnover. Le ROI est généralement atteint dans les 18 à 24 mois suivant le déploiement.",
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
      <SirhClient />
    </>
  );
}
