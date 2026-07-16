import type { Metadata } from "next";
import DematRhClient from "./DematRhClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Dématérialisation RH | Coffre-fort RH | Thalès",
  description:
    "Passez au zéro papier RH avec Thalès Informatique : coffre-fort numérique RH, signature électronique, dossier salarié numérique et GED RH conformes à la réglementation marocaine.",
  alternates: { canonical: "/metiers/demat-rh" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/metiers/demat-rh`,
    siteName: "Thalès Informatique",
    title: "Dématérialisation RH | Coffre-fort RH | Thalès",
    description:
      "Coffre-fort numérique RH, signature électronique et dossier salarié numérique conformes à la réglementation marocaine.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Dématérialisation RH Coffre-fort Numérique Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dématérialisation RH | Coffre-fort RH | Thalès",
    description:
      "Coffre-fort numérique RH et signature électronique conformes à la réglementation marocaine.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "Dématérialisation RH", item: `${SITE_URL}/metiers/demat-rh` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dématérialisation RH — Coffre-fort Numérique et GED RH",
  description:
    "Solution de dématérialisation RH pour entreprises marocaines : coffre-fort numérique, signature électronique, archivage légal et portail employé zéro papier.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "Dématérialisation RH",
  url: `${SITE_URL}/metiers/demat-rh`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce que la dématérialisation RH ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La dématérialisation RH consiste à numériser et automatiser tous les documents et processus RH papier : bulletins de paie, contrats de travail, avenants, notes de frais, demandes de congés et formulaires administratifs. Elle réduit les coûts d'impression et d'archivage physique, accélère les processus et sécurise les documents RH grâce à un coffre-fort numérique.",
      },
    },
    {
      "@type": "Question",
      name: "Qu'est-ce qu'un coffre-fort numérique RH ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un coffre-fort numérique RH est un espace de stockage électronique sécurisé et à valeur probatoire, dans lequel l'entreprise dépose les documents RH de chaque salarié : bulletins de paie, contrats, attestations. Chaque salarié accède à son coffre personnel via un portail sécurisé. En cas de litige, les documents archivés ont la même valeur légale que les originaux papier.",
      },
    },
    {
      "@type": "Question",
      name: "La signature électronique des contrats est-elle légalement valable au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, la signature électronique est reconnue légalement au Maroc par la Loi n°53-05 relative à l'échange électronique de données juridiques. Elle a la même valeur probatoire qu'une signature manuscrite lorsqu'elle est réalisée avec un certificat électronique qualifié. Notre solution intègre une signature électronique conforme à ces exigences.",
      },
    },
    {
      "@type": "Question",
      name: "Comment dématérialiser les bulletins de paie avec votre solution ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Notre solution génère automatiquement les bulletins de paie numériques depuis le logiciel de paie Sage, les dépose dans le coffre-fort numérique de chaque salarié et envoie une notification par email ou SMS pour en informer le collaborateur. Le salarié accède à son bulletin depuis son smartphone ou ordinateur, sans jamais recevoir de document papier.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps les documents RH doivent-ils être conservés au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Au Maroc, les bulletins de paie doivent être conservés pendant 5 ans, les contrats de travail pendant toute la durée de la relation contractuelle plus 5 ans, et les registres RH pendant 10 ans. Notre coffre-fort numérique gère automatiquement ces délais de conservation et vous alerte lorsque des documents approchent de leur date de destruction légale.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le gain de temps réel de la dématérialisation RH ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En moyenne, la dématérialisation RH réduit de 70% le temps consacré à la gestion administrative des documents : plus d'impression, d'affranchissement, de classement ou de recherche manuelle de documents. Les processus d'onboarding et d'offboarding sont accélérés de 50%, et les collaborateurs gagnent en autonomie grâce au portail self-service.",
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
      <DematRhClient />
    </>
  );
}
