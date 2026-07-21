import type { Metadata } from "next";
import BanqueAssuranceMutuelleClient from "./BanqueAssuranceMutuelleClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "ERP Banque, Assurance & Mutuelle au Maroc et en Afrique",
  description:
    "Gestion pour banques, assurances et mutuelles au Maroc : conformité Bank Al-Maghrib et ACAPS, contrats, sinistres et reporting. Découvrez notre solution.",
  alternates: {
    canonical: "/secteurs/banque-assurance-mutuelle",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/secteurs/banque-assurance-mutuelle`,
    siteName: "Thalès Informatique",
    title: "ERP Banque, Assurance & Mutuelle au Maroc et en Afrique | Thalès Informatique",
    description:
      "Solution de gestion pour les banques, assurances et mutuelles au Maroc : conformité Bank Al-Maghrib et ACAPS, gestion des contrats et sinistres, reporting prudentiel et trésorerie multi-agences.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - ERP Banque Assurance Mutuelle Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Banque, Assurance & Mutuelle au Maroc et en Afrique | Thalès Informatique",
    description:
      "ERP banque & assurance Maroc : conformité Bank Al-Maghrib, ACAPS, contrats, sinistres, reporting prudentiel. Thalès Informatique.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://thales.ma" },
    { "@type": "ListItem", position: 2, name: "Secteurs", item: "https://thales.ma/secteurs" },
    { "@type": "ListItem", position: 3, name: "Banque, Assurance & Mutuelle", item: "https://thales.ma/secteurs/banque-assurance-mutuelle" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ERP Banque, Assurance & Mutuelle Maroc",
  description:
    "Solutions de gestion pour les institutions financières au Maroc : conformité Bank Al-Maghrib et ACAPS, KYC, reporting prudentiel, consolidation multi-agences et gestion des contrats et sinistres.",
  url: "https://thales.ma/secteurs/banque-assurance-mutuelle",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: "https://thales.ma",
  },
  areaServed: ["Maroc", "Afrique"],
  serviceType: "Solution ERP institutions financières",
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
      <BanqueAssuranceMutuelleClient />
    </>
  );
}
