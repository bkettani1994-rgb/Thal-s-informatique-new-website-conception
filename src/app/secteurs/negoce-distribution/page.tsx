import type { Metadata } from "next";
import NegoceDistributionClient from "./NegoceDistributionClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "ERP Négoce & Distribution au Maroc et en Afrique",
  description:
    "Solution ERP pour le négoce et la distribution au Maroc et en Afrique : gestion commerciale, multi-dépôts, EDI fournisseurs, recouvrement Eloficash. Sage X3 et Sage 100 pour optimiser vos stocks.",
  alternates: {
    canonical: "/secteurs/negoce-distribution",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/secteurs/negoce-distribution`,
    siteName: "Thalès Informatique",
    title: "ERP Négoce & Distribution au Maroc et en Afrique",
    description:
      "Solution ERP pour le négoce et la distribution au Maroc et en Afrique : gestion commerciale, multi-dépôts, EDI fournisseurs, recouvrement Eloficash. Sage X3 et Sage 100 pour optimiser vos stocks.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - ERP Négoce Distribution Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Négoce & Distribution au Maroc et en Afrique",
    description:
      "ERP négoce et distribution Maroc : gestion commerciale, multi-dépôts, EDI, recouvrement Eloficash. Sage X3 & Sage 100 — Thalès Informatique.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://thales.ma" },
    { "@type": "ListItem", position: 2, name: "Secteurs", item: "https://thales.ma/secteurs" },
    { "@type": "ListItem", position: 3, name: "Négoce & Distribution", item: "https://thales.ma/secteurs/negoce-distribution" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ERP Négoce & Distribution Maroc",
  description:
    "Solutions ERP pour le négoce et la distribution au Maroc et en Afrique : Sage X3 et Sage 100 pour la gestion commerciale, les stocks multi-dépôts et le recouvrement.",
  url: "https://thales.ma/secteurs/negoce-distribution",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: "https://thales.ma",
  },
  areaServed: ["Maroc", "Afrique"],
  serviceType: "Intégration ERP négoce et distribution",
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
      <NegoceDistributionClient />
    </>
  );
}
