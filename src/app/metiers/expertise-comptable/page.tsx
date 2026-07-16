import type { Metadata } from "next";
import ExpertiseComptableClient from "./ExpertiseComptableClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Expertise Comptable Maroc | Sage | Thalès Informatique",
  description:
    "Solutions Sage pour cabinets d'expertise comptable au Maroc : multi-dossiers, revue analytique, collaboration d'équipe et conformité OEC. Demandez une démonstration.",
  alternates: { canonical: "/metiers/expertise-comptable" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/metiers/expertise-comptable`,
    siteName: "Thalès Informatique",
    title: "Expertise Comptable Maroc | Sage | Thalès Informatique",
    description:
      "Solutions Sage pour cabinets d'expertise comptable au Maroc : multi-dossiers, revue analytique et conformité OEC.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Expertise Comptable Maroc Sage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expertise Comptable Maroc | Sage | Thalès Informatique",
    description:
      "Solutions Sage pour cabinets d'expertise comptable au Maroc : multi-dossiers, revue analytique et conformité OEC.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "Expertise Comptable", item: `${SITE_URL}/metiers/expertise-comptable` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Solutions Sage pour cabinets d'expertise comptable Maroc",
  description:
    "Logiciels de comptabilité Sage pour expert-comptable au Maroc : gestion multi-dossiers, revue analytique, archivage et facturation conformes OEC.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "Logiciel Expertise Comptable",
  url: `${SITE_URL}/metiers/expertise-comptable`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quels logiciels Sage sont adaptés aux cabinets d'expertise comptable au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thalès Informatique propose Sage Génération Expert, solution dédiée aux cabinets d'expertise comptable marocains. Elle couvre la comptabilité multi-dossiers, la revue analytique, la collaboration d'équipe avec les clients et la facturation conforme aux exigences de l'OEC Maroc.",
      },
    },
    {
      "@type": "Question",
      name: "Comment un cabinet comptable peut-il gérer plusieurs dossiers clients avec Sage ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sage Génération Expert permet de gérer un nombre illimité de dossiers clients depuis une interface centralisée. Chaque dossier dispose de son propre plan comptable, de ses états financiers (bilan, CPC) et de ses déclarations fiscales, accessibles depuis un tableau de bord unique.",
      },
    },
    {
      "@type": "Question",
      name: "La solution Sage est-elle conforme aux normes comptables marocaines ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, les solutions Sage pour experts-comptables sont développées en conformité avec le Code Général de Normalisation Comptable (CGNC) marocain et les obligations de l'Ordre des Experts Comptables (OEC). Elles intègrent nativement les déclarations fiscales (IS, TVA) et la transmission EDI vers la DGI.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on collaborer en ligne avec ses clients via la solution Sage ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Sage Génération Expert intègre un portail de collaboration qui permet aux clients de transmettre leurs pièces comptables en ligne, de valider des documents et de suivre l'avancement de leur dossier. Cela réduit les échanges par email et accélère la production des arrêtés comptables.",
      },
    },
    {
      "@type": "Question",
      name: "Thalès Informatique propose-t-il une formation pour les experts-comptables ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Thalès Informatique organise des formations certifiantes sur les logiciels Sage à destination des experts-comptables et de leurs collaborateurs. Ces formations sont dispensées par des consultants certifiés dans nos centres de formation à Casablanca.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le retour sur investissement d'un logiciel de comptabilité Sage pour un cabinet ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un cabinet équipé de Sage Génération Expert constate en moyenne une réduction de 40% du temps consacré à la saisie, une meilleure traçabilité des dossiers et une capacité à gérer plus de clients sans augmenter les effectifs. Le retour sur investissement est généralement atteint dès la première année.",
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
      <ExpertiseComptableClient />
    </>
  );
}
