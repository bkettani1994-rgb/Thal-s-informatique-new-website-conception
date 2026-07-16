import type { Metadata } from "next";
import GestionProductionClient from "./GestionProductionClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "ERP Production & GPAO | Sage X3 | Thalès Informatique",
  description:
    "Pilotez votre production avec Sage X3 : GPAO, ordres de fabrication, nomenclatures, suivi d'atelier en temps réel et coûts de revient pour industriels marocains.",
  alternates: { canonical: "/metiers/gestion-production" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/metiers/gestion-production`,
    siteName: "Thalès Informatique",
    title: "ERP Production & GPAO | Sage X3 | Thalès Informatique",
    description:
      "GPAO, ordres de fabrication et suivi d'atelier en temps réel avec Sage X3 pour industriels marocains.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - ERP Production GPAO Sage X3 Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Production & GPAO | Sage X3 | Thalès Informatique",
    description:
      "GPAO, ordres de fabrication et suivi d'atelier avec Sage X3 pour industriels marocains.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "Gestion de Production", item: `${SITE_URL}/metiers/gestion-production` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ERP Production & GPAO — Sage X3 Maroc",
  description:
    "Module GPAO Sage X3 pour industriels marocains : nomenclatures, gammes, ordres de fabrication, suivi d'atelier en temps réel et calcul des coûts de revient.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "ERP Production et GPAO",
  url: `${SITE_URL}/metiers/gestion-production`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce qu'un ERP de production ou GPAO ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La GPAO (Gestion de Production Assistée par Ordinateur) est le module d'un ERP dédié à la planification et au suivi de la production industrielle. Elle couvre la gestion des nomenclatures, les gammes opératoires, les ordres de fabrication, la planification des ressources (MRP), le suivi d'atelier en temps réel et le calcul des coûts de revient.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi choisir Sage X3 pour la gestion de production ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sage X3 est une solution ERP production reconnue pour sa couverture fonctionnelle complète : gestion des nomenclatures multi-niveaux, planification MRP/MRP2, ordres de fabrication, suivi d'atelier en temps réel, contrôle qualité et calcul des coûts industriels. Elle est particulièrement adaptée aux ETI industrielles marocaines qui cherchent à moderniser leur gestion de production.",
      },
    },
    {
      "@type": "Question",
      name: "Comment fonctionne la planification MRP avec un ERP ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le MRP (Material Requirements Planning) calcule automatiquement les besoins en composants et matières premières à partir du plan de production et des stocks disponibles. Il génère des suggestions d'ordres d'achat et de fabrication pour couvrir les besoins à temps, en tenant compte des délais fournisseurs et des capacités machines.",
      },
    },
    {
      "@type": "Question",
      name: "Le suivi d'atelier en temps réel est-il possible avec Sage X3 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Sage X3 propose un terminal de saisie d'atelier accessible depuis des tablettes ou bornes industrielles. Les opérateurs pointent leurs temps de production, les quantités réalisées et les aléas qualité en temps réel. Le responsable de production dispose d'un tableau de bord en temps réel pour piloter l'avancement des ordres de fabrication.",
      },
    },
    {
      "@type": "Question",
      name: "Comment calculer le coût de revient d'un produit fini avec un ERP ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sage X3 calcule le coût de revient réel et standard de chaque produit en intégrant les coûts matières (valorisation au CMUP ou FIFO), les coûts de main-d'œuvre directe et les frais généraux de fabrication. Cette analyse permet d'identifier les produits non rentables et d'optimiser la politique tarifaire.",
      },
    },
    {
      "@type": "Question",
      name: "L'ERP production est-il adapté aux entreprises agroalimentaires au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Sage X3 intègre des fonctionnalités spécifiques aux industries agroalimentaires : gestion des lots et DLC, traçabilité ascendante et descendante, numéros de série, contrôle qualité aux différentes étapes de la chaîne de production et conformité aux normes sanitaires. Il est largement utilisé par des industriels agroalimentaires marocains.",
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
      <GestionProductionClient />
    </>
  );
}
