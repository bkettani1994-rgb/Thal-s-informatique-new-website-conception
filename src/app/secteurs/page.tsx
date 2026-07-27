import type { Metadata } from "next";
import SecteursClient from "./SecteursClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";
const TITLE = "ERP par Secteur au Maroc | Industrie, Distribution, BTP - Sage X3 & Sage 100";
const DESCRIPTION =
  "ERP Maroc par secteur : ERP industrie, ERP distribution, ERP BTP, ERP agroalimentaire, ERP services. Solutions Sage X3 Maroc et Sage 100 Maroc par Thalès Informatique.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "ERP industrie Maroc",
    "ERP distribution Maroc",
    "ERP BTP Maroc",
    "ERP agroalimentaire Maroc",
    "ERP services Maroc",
    "ERP Maroc",
    "Sage X3 Maroc",
    "Sage 100 Maroc",
  ],
  alternates: {
    canonical: "/secteurs",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/secteurs`,
    siteName: "Thalès Informatique",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique — ERP par secteur au Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Secteurs d'activité", item: `${SITE_URL}/secteurs` },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Industrie", url: `${SITE_URL}/secteurs/industrie` },
    { "@type": "ListItem", position: 2, name: "Négoce & Distribution", url: `${SITE_URL}/secteurs/negoce-distribution` },
    { "@type": "ListItem", position: 3, name: "Services", url: `${SITE_URL}/secteurs/services` },
    { "@type": "ListItem", position: 4, name: "BTP", url: `${SITE_URL}/secteurs/btp` },
    { "@type": "ListItem", position: 5, name: "Agroalimentaire", url: `${SITE_URL}/secteurs/agroalimentaire` },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <SecteursClient />
    </>
  );
}
