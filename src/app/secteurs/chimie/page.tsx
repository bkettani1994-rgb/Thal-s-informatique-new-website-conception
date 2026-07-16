import type { Metadata } from "next";
import ChimieClient from "./ChimieClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "ERP Chimie au Maroc et en Afrique | Thalès Informatique",
  description:
    "Solution ERP pour l'industrie chimique au Maroc : gestion des matières dangereuses, conformité REACH et SEVESO, fiches de données de sécurité et traçabilité des lots.",
  alternates: {
    canonical: "/secteurs/chimie",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/secteurs/chimie`,
    siteName: "Thalès Informatique",
    title: "ERP Chimie au Maroc et en Afrique | Thalès Informatique",
    description:
      "Solution ERP pour l'industrie chimique au Maroc : gestion des matières dangereuses, conformité REACH et SEVESO, fiches de données de sécurité et traçabilité des lots.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - ERP Chimie Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Chimie au Maroc et en Afrique | Thalès Informatique",
    description:
      "ERP chimie Maroc : matières dangereuses, conformité SGH, fiches sécurité, traçabilité lots. Thalès Informatique.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://thales.ma" },
    { "@type": "ListItem", position: 2, name: "Secteurs", item: "https://thales.ma/secteurs" },
    { "@type": "ListItem", position: 3, name: "Chimie", item: "https://thales.ma/secteurs/chimie" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ERP Industrie Chimique Maroc",
  description:
    "Solutions ERP pour l'industrie chimique au Maroc et en Afrique : gestion des formules, traçabilité des lots, conformité SGH, fiches de données de sécurité et pilotage de la supply chain internationale.",
  url: "https://thales.ma/secteurs/chimie",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: "https://thales.ma",
  },
  areaServed: ["Maroc", "Afrique"],
  serviceType: "Intégration ERP industrie chimique",
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
      <ChimieClient />
    </>
  );
}
