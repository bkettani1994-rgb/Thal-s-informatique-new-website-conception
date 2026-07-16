import type { Metadata } from "next";
import IndustrieClient from "./IndustrieClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "ERP Industrie au Maroc et en Afrique : GPAO & production",
  description:
    "ERP industriel au Maroc et en Afrique : ordonnancement GPAO, gestion des nomenclatures, stocks multi-dépôts, contrôle qualité et maintenance avec Sage X3 et DimoMaint GMAO. 30 ans d'expertise.",
  alternates: {
    canonical: "/secteurs/industrie",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/secteurs/industrie`,
    siteName: "Thalès Informatique",
    title: "ERP Industrie au Maroc et en Afrique : GPAO & production",
    description:
      "ERP industriel au Maroc et en Afrique : ordonnancement GPAO, gestion des nomenclatures, stocks multi-dépôts, contrôle qualité et maintenance avec Sage X3 et DimoMaint GMAO. 30 ans d'expertise.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - ERP Industrie Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Industrie au Maroc et en Afrique : GPAO & production",
    description:
      "ERP industriel Maroc : GPAO, nomenclatures, stocks multi-dépôts, qualité et maintenance avec Sage X3 et DimoMaint. Thalès Informatique, 30 ans d'expertise.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://thales.ma" },
    { "@type": "ListItem", position: 2, name: "Secteurs", item: "https://thales.ma/secteurs" },
    { "@type": "ListItem", position: 3, name: "Industrie", item: "https://thales.ma/secteurs/industrie" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ERP Industrie Maroc — GPAO & Gestion de Production",
  description:
    "Solutions ERP pour l'industrie manufacturière au Maroc et en Afrique : Sage X3 et DimoMaint GMAO pour la GPAO, le suivi de production, la gestion des stocks et la maintenance industrielle.",
  url: "https://thales.ma/secteurs/industrie",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: "https://thales.ma",
  },
  areaServed: ["Maroc", "Afrique"],
  serviceType: "Intégration ERP industrie",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <IndustrieClient />
    </>
  );
}
