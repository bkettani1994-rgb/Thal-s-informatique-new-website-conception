import type { Metadata } from "next";
import TresorerieClient from "./TresorerieClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Gestion de Trésorerie | Sage 100 | Thalès Informatique",
  description:
    "Pilotez votre trésorerie en temps réel avec Sage 100 : cash management, prévisions de trésorerie à 90 jours, rapprochement bancaire et recouvrement clients au Maroc.",
  alternates: { canonical: "/metiers/tresorerie" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/metiers/tresorerie`,
    siteName: "Thalès Informatique",
    title: "Gestion de Trésorerie | Sage 100 | Thalès Informatique",
    description:
      "Cash management, prévisions de trésorerie à 90 jours et rapprochement bancaire avec Sage 100 Trésorerie au Maroc.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Gestion de Trésorerie Sage 100 Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestion de Trésorerie | Sage 100 | Thalès Informatique",
    description:
      "Cash management, prévisions de trésorerie et rapprochement bancaire avec Sage 100 au Maroc.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "Gestion de Trésorerie", item: `${SITE_URL}/metiers/tresorerie` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Logiciel de Gestion de Trésorerie — Sage 100 Maroc",
  description:
    "Pilotage de la trésorerie en temps réel : soldes consolidés, prévisions de cash-flow à 30/60/90 jours, rapprochement bancaire automatique et recouvrement clients.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "Logiciel de Trésorerie",
  url: `${SITE_URL}/metiers/tresorerie`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce qu'un logiciel de gestion de trésorerie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un logiciel de gestion de trésorerie centralise l'ensemble des flux financiers de l'entreprise : encaissements, décaissements, soldes bancaires et prévisions de cash-flow. Il permet de visualiser en temps réel la position de trésorerie, d'anticiper les besoins de financement et d'optimiser le cash management.",
      },
    },
    {
      "@type": "Question",
      name: "Comment Sage 100 Trésorerie améliore-t-il le cash management ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sage 100 Trésorerie consolide automatiquement vos soldes bancaires, synchronise vos relevés via l'interface EBICS, génère des prévisions de trésorerie glissantes à 30, 60 et 90 jours et vous alerte en cas de dépassement de seuil. Il réduit drastiquement le temps consacré aux rapprochements manuels.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on gérer plusieurs comptes bancaires avec un logiciel de trésorerie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Sage 100 Trésorerie gère simultanément tous vos comptes bancaires au Maroc et à l'étranger depuis une interface centralisée. Les soldes sont consolidés en temps réel, avec des graphiques d'évolution par compte ou par entité juridique.",
      },
    },
    {
      "@type": "Question",
      name: "Comment optimiser le recouvrement clients avec un logiciel de trésorerie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Notre solution intègre un module de recouvrement clients qui suit les encours, génère automatiquement des relances par email selon des scénarios paramétrables, et calcule le risque client en temps réel. Résultat : réduction du DSO (Days Sales Outstanding) et amélioration du cash-flow.",
      },
    },
    {
      "@type": "Question",
      name: "Le logiciel de trésorerie est-il connecté à la comptabilité ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Sage 100 Trésorerie est nativement intégré à Sage 100 Comptabilité. Les flux de trésorerie sont automatiquement reflétés dans la comptabilité, éliminant toute double saisie. Cette intégration garantit une cohérence parfaite entre vos états de trésorerie et votre reporting financier.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la différence entre Sage 100 Trésorerie et Sage XRT ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sage 100 Trésorerie est idéal pour les PME qui souhaitent piloter leur trésorerie quotidienne avec des fonctionnalités complètes. Sage XRT Solutions est une plateforme de cash management avancée, conçue pour les ETI et grands groupes avec des besoins de netting, de gestion de pools bancaires et de reporting multi-entités sophistiqué.",
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
      <TresorerieClient />
    </>
  );
}
