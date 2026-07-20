import type { Metadata } from "next";
import ImmobilisationsClient from "./ImmobilisationsClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Gestion des Immobilisations | Amortissements",
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ImmobilisationsClient />
    </>
  );
}
