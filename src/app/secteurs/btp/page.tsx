import type { Metadata } from "next";
import BTPClient from "./BTPClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "ERP BTP & Construction au Maroc et en Afrique : suivi de chantiers",
  description:
    "ERP dédié au BTP au Maroc et en Afrique : suivi budget/réalisé des chantiers, déboursés d'ouvrages, situations de travaux, gestion du parc matériel et paie chantier avec Sage X3 et Sage 100.",
  alternates: {
    canonical: "/secteurs/btp",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/secteurs/btp`,
    siteName: "Thalès Informatique",
    title: "ERP BTP & Construction au Maroc et en Afrique : suivi de chantiers",
    description:
      "ERP dédié au BTP au Maroc et en Afrique : suivi budget/réalisé des chantiers, déboursés d'ouvrages, situations de travaux, gestion du parc matériel et paie chantier avec Sage X3 et Sage 100.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - ERP BTP Construction Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP BTP & Construction au Maroc et en Afrique : suivi de chantiers",
    description:
      "ERP BTP Maroc : suivi chantiers, budget/réalisé, parc matériel, situations de travaux. Sage X3 & Sage 100 — Thalès Informatique.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://thales.ma" },
    { "@type": "ListItem", position: 2, name: "Secteurs", item: "https://thales.ma/secteurs" },
    { "@type": "ListItem", position: 3, name: "BTP & Construction", item: "https://thales.ma/secteurs/btp" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ERP BTP & Construction Maroc",
  description:
    "Solutions ERP pour le secteur BTP au Maroc et en Afrique : Sage X3 et Batigest pour le suivi de chantiers, la gestion des ressources et la maîtrise des coûts de construction.",
  url: "https://thales.ma/secteurs/btp",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: "https://thales.ma",
  },
  areaServed: ["Maroc", "Afrique"],
  serviceType: "Intégration ERP BTP et construction",
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
      <BTPClient />
    </>
  );
}
