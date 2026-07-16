import type { Metadata } from "next";
import EtatsComptablesFiscauxClient from "./EtatsComptablesFiscauxClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "États Comptables & Fiscaux Maroc | EDI DGI | Thalès",
  description:
    "Automatisez vos états comptables et fiscaux au Maroc : liasse fiscale, bilan, CPC, IS et TVA transmis via EDI Simpl-IS. Conformité DGI garantie. Découvrez notre solution.",
  alternates: { canonical: "/metiers/etats-comptables-fiscaux" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/metiers/etats-comptables-fiscaux`,
    siteName: "Thalès Informatique",
    title: "États Comptables & Fiscaux Maroc | EDI DGI | Thalès",
    description:
      "Automatisez liasse fiscale, bilan, CPC et déclarations IS/TVA via EDI Simpl-IS. Conformité DGI garantie.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - États Comptables Fiscaux Maroc EDI DGI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "États Comptables & Fiscaux Maroc | EDI DGI | Thalès",
    description:
      "Automatisez liasse fiscale, bilan et déclarations IS/TVA via EDI Simpl-IS. Conformité DGI garantie.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "États Comptables & Fiscaux", item: `${SITE_URL}/metiers/etats-comptables-fiscaux` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "États Comptables & Fiscaux — EDI Simpl-IS Maroc",
  description:
    "Génération automatique de la liasse fiscale, bilan, CPC et déclarations IS/TVA via EDI Simpl-IS, le canal certifié DGI pour les obligations fiscales marocaines.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "États Comptables et Fiscaux",
  url: `${SITE_URL}/metiers/etats-comptables-fiscaux`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce que la liasse fiscale au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La liasse fiscale marocaine est l'ensemble des documents comptables et fiscaux à déposer chaque année auprès de la DGI : bilan, compte de produits et charges (CPC), état des soldes de gestion (ESG), tableau de financement et états annexes. Elle est obligatoire pour toutes les sociétés soumises à l'IS.",
      },
    },
    {
      "@type": "Question",
      name: "Qu'est-ce que l'EDI Simpl-IS et comment fonctionne-t-il ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EDI Simpl-IS est le canal électronique certifié par la Direction Générale des Impôts (DGI) du Maroc pour la télétransmission des déclarations fiscales : IS, TVA et liasse fiscale. Notre ERP génère automatiquement les fichiers au format attendu et les transmet directement à la DGI, sans ressaisie manuelle.",
      },
    },
    {
      "@type": "Question",
      name: "Quels sont les états financiers obligatoires pour une entreprise marocaine ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Une entreprise marocaine soumise à l'IS doit produire chaque année : le bilan comptable, le compte de produits et charges (CPC), l'état des soldes de gestion (ESG), le tableau de financement et l'état des informations complémentaires (ETIC). Notre solution génère ces documents automatiquement à partir de vos écritures comptables.",
      },
    },
    {
      "@type": "Question",
      name: "Comment automatiser la déclaration TVA au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Notre logiciel calcule automatiquement la TVA collectée et déductible, applique le prorata de déduction si nécessaire, et prépare la déclaration mensuelle ou trimestrielle selon votre régime. La transmission à la DGI s'effectue via EDI Simpl-IS en quelques clics, avec un accusé de réception électronique.",
      },
    },
    {
      "@type": "Question",
      name: "Quels sont les délais légaux de dépôt des états comptables au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La déclaration de l'IS et la liasse fiscale doivent être déposées dans les 3 mois suivant la clôture de l'exercice. La TVA mensuelle est due avant le 20 du mois suivant, et la TVA trimestrielle avant le 20 du mois suivant le trimestre écoulé. Notre calendrier fiscal intégré vous alerte automatiquement avant chaque échéance.",
      },
    },
    {
      "@type": "Question",
      name: "Le reporting financier peut-il être automatisé avec votre solution ERP ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, notre solution ERP génère automatiquement les tableaux de bord financiers, les états comparatifs N/N-1, les analyses par département et les indicateurs de performance (ratios de rentabilité, liquidité, solvabilité). Ces données sont disponibles en temps réel sans extraction manuelle.",
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
      <EtatsComptablesFiscauxClient />
    </>
  );
}
