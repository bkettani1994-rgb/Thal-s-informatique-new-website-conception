import type { Metadata } from "next";
import ErpClient from "./ErpClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "ERP Entreprise au Maroc | Sage X3 & Sage 100 | Thalès",
  description:
    "Logiciel ERP pour PME et ETI au Maroc : Sage X3 et Sage 100 pour une gestion intégrée, ERP Cloud et transformation digitale. +30 ans d'expertise. Demandez une démo.",
  alternates: { canonical: "/metiers/erp" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/metiers/erp`,
    siteName: "Thalès Informatique",
    title: "ERP Entreprise au Maroc | Sage X3 & Sage 100 | Thalès",
    description:
      "Logiciel ERP pour PME et ETI au Maroc : Sage X3 et Sage 100 pour une gestion intégrée, ERP Cloud et transformation digitale. +30 ans d'expertise.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - ERP Entreprise Maroc Sage X3" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Entreprise au Maroc | Sage X3 & Sage 100 | Thalès",
    description:
      "Logiciel ERP pour PME et ETI au Maroc : Sage X3 et Sage 100 pour une gestion intégrée. +30 ans d'expertise.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "ERP", item: `${SITE_URL}/metiers/erp` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ERP Entreprise au Maroc — Sage X3 & Sage 100",
  description:
    "Intégration et déploiement de logiciels ERP Sage X3 et Sage 100 pour les PME et ETI marocaines. Gestion intégrée des finances, achats, ventes, production, stocks et RH.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "Intégration ERP",
  url: `${SITE_URL}/metiers/erp`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce qu'un logiciel ERP ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un logiciel ERP (Enterprise Resource Planning), ou PGI en français, est une solution de gestion intégrée qui unifie dans un seul système les données et processus de l'entreprise : finance, achats, ventes, stocks, production et RH. Il élimine les silos d'information et offre une vision en temps réel de la performance.",
      },
    },
    {
      "@type": "Question",
      name: "Quels ERP Sage propose Thalès Informatique au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thalès Informatique propose principalement Sage X3 pour les ETI et industriels exigeants, et Sage 100 Entreprise pour les PME. Ces deux solutions ERP Maroc couvrent la comptabilité, la gestion commerciale, la production, la trésorerie et les ressources humaines.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le délai de déploiement d'un ERP PME ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour une PME, un déploiement ERP Sage 100 s'effectue généralement en 3 à 6 mois selon la complexité des processus. Un projet Sage X3 pour une ETI ou une entreprise industrielle nécessite en moyenne 6 à 12 mois. Thalès Informatique accompagne chaque étape : analyse, paramétrage, formation utilisateurs et go-live.",
      },
    },
    {
      "@type": "Question",
      name: "L'ERP est-il disponible en mode Cloud au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Sage X3 et Sage 100 sont disponibles en mode SaaS/Cloud et en hébergement on-premise. La version Cloud ERP permet de réduire les coûts d'infrastructure, de bénéficier de mises à jour automatiques et d'accéder à votre ERP depuis n'importe quel appareil connecté.",
      },
    },
    {
      "@type": "Question",
      name: "Comment se déroule la transformation digitale avec un ERP ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La transformation digitale via un ERP débute par un audit de vos processus existants, suivi d'un cadrage fonctionnel, du paramétrage de la solution, de la formation des utilisateurs et d'un accompagnement au changement. Thalès Informatique vous guide de bout en bout pour que votre équipe adopte rapidement le nouvel ERP.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi choisir Thalès Informatique pour son projet ERP Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Avec plus de 30 ans d'expérience au Maroc, Thalès Informatique est l'un des intégrateurs Sage de référence. Nos consultants certifiés maîtrisent les contraintes réglementaires marocaines (DGI, CNSS, OEC) et vous assurent un ERP conforme dès le premier jour, avec un support local réactif.",
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
      <ErpClient />
    </>
  );
}
