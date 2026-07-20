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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <GestionProductionClient />
    </>
  );
}
