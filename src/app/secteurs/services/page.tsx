import type { Metadata } from "next";
import SecteurServicesClient from "./SecteurServicesClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "ERP pour Sociétés de Services & Conseil au Maroc et en Afrique",
  description:
    "ERP pour ESN et cabinets de conseil au Maroc : taux de charge, facturation projet, CRM, SIRH et rentabilité avec Sage X3. Découvrez notre solution.",
  alternates: {
    canonical: "/secteurs/services",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/secteurs/services`,
    siteName: "Thalès Informatique",
    title: "ERP pour Sociétés de Services & Conseil au Maroc et en Afrique",
    description:
      "ERP dédié aux ESN et cabinets de conseil au Maroc et en Afrique : suivi du taux de charge, facturation projet, CRM, SIRH Factorial et reporting de rentabilité. Sage X3 pour piloter vos marges.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - ERP Sociétés de Services Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP pour Sociétés de Services & Conseil au Maroc et en Afrique",
    description:
      "ERP services Maroc : taux de charge, facturation projet, CRM, SIRH Factorial, reporting rentabilité. Sage X3 — Thalès Informatique.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://thales.ma" },
    { "@type": "ListItem", position: 2, name: "Secteurs", item: "https://thales.ma/secteurs" },
    { "@type": "ListItem", position: 3, name: "Services", item: "https://thales.ma/secteurs/services" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ERP Sociétés de Services & Conseil Maroc",
  description:
    "Solutions ERP pour les entreprises de services et les cabinets de conseil au Maroc et en Afrique : Sage X3, Factorial SIRH et CRM pour piloter la rentabilité et les ressources humaines.",
  url: "https://thales.ma/secteurs/services",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: "https://thales.ma",
  },
  areaServed: ["Maroc", "Afrique"],
  serviceType: "Intégration ERP sociétés de services",
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
      <SecteurServicesClient />
    </>
  );
}
