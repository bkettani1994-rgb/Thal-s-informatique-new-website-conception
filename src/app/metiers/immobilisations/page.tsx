import type { Metadata } from "next";
import ImmobilisationsClient from "./ImmobilisationsClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Gestion des Immobilisations | Amortissements | Thalès",
  description:
    "Gérez vos immobilisations et amortissements avec Sage : fiches actifs, calcul linéaire/dégressif, suivi du parc et inventaire conformes aux règles fiscales marocaines.",
  alternates: { canonical: "/metiers/immobilisations" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/metiers/immobilisations`,
    siteName: "Thalès Informatique",
    title: "Gestion des Immobilisations | Amortissements | Thalès",
    description:
      "Fiches actifs, amortissements linéaires/dégressifs et suivi du parc d'immobilisations conformes aux règles fiscales marocaines.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Gestion Immobilisations Amortissements Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestion des Immobilisations | Amortissements | Thalès",
    description:
      "Fiches actifs, amortissements et suivi du parc d'immobilisations conformes aux règles fiscales marocaines.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "Gestion des Immobilisations", item: `${SITE_URL}/metiers/immobilisations` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gestion des Immobilisations et Amortissements — Maroc",
  description:
    "Suivi complet du parc d'actifs : fiches immobilisations, calcul des amortissements linéaires et dégressifs, inventaire et conformité fiscale marocaine.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "Gestion des Immobilisations",
  url: `${SITE_URL}/metiers/immobilisations`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce qu'une immobilisation en comptabilité marocaine ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Une immobilisation est un bien durable acquis par l'entreprise pour être utilisé sur plusieurs exercices : terrain, bâtiment, matériel, équipement informatique, véhicule ou brevet. Au Maroc, une immobilisation est comptabilisée à l'actif du bilan et fait l'objet d'un amortissement annuel déductible fiscalement.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la différence entre amortissement linéaire et dégressif ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'amortissement linéaire répartit la dépréciation de façon égale sur la durée d'utilisation du bien. L'amortissement dégressif applique un taux majoré les premières années pour accélérer la déduction fiscale. Au Maroc, l'administration fiscale autorise les deux méthodes selon la nature du bien. Notre logiciel calcule automatiquement l'amortissement optimal.",
      },
    },
    {
      "@type": "Question",
      name: "Comment gérer un inventaire des immobilisations avec un logiciel ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Notre solution permet de créer une fiche par immobilisation avec toutes ses caractéristiques (référence, localisation, état, valeur d'acquisition, date de mise en service). L'inventaire peut être réalisé par lecture de code-barres ou QR code, avec une synchronisation automatique dans le logiciel. Tout écart entre l'inventaire physique et la comptabilité est signalé instantanément.",
      },
    },
    {
      "@type": "Question",
      name: "Les cessions et mises au rebut sont-elles gérées automatiquement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, notre logiciel gère toutes les opérations du cycle de vie d'une immobilisation : acquisition, transfert entre sites, cession avec calcul de la plus ou moins-value, et mise au rebut. Les écritures comptables associées sont générées automatiquement, y compris la dotation aux amortissements prorata temporis pour l'exercice de cession.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles sont les durées d'amortissement fiscalement admises au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les durées d'amortissement admises fiscalement au Maroc varient selon la nature du bien : bâtiments industriels (20 ans), matériel et outillage (5 à 10 ans), matériel informatique (3 à 5 ans), mobilier de bureau (5 à 10 ans), véhicules de tourisme (4 à 5 ans). Notre logiciel intègre ces durées légales par défaut pour chaque catégorie d'actif.",
      },
    },
    {
      "@type": "Question",
      name: "Le suivi des immobilisations est-il connecté à la comptabilité ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, notre module de gestion des immobilisations est totalement intégré à la comptabilité Sage. Chaque opération (acquisition, dotation, cession) génère automatiquement les écritures comptables correspondantes dans les bons comptes du plan comptable marocain, sans aucune ressaisie manuelle.",
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
      <ImmobilisationsClient />
    </>
  );
}
