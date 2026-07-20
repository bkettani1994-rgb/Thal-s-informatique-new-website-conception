import type { Metadata } from "next";
import LogistiqueClient from "./LogistiqueClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "ERP Logistique au Maroc et en Afrique",
  description:
    "Solution ERP pour la logistique au Maroc et en Afrique : gestion multi-entrepôts (WMS), optimisation du transport, traçabilité temps réel et échanges EDI avec vos partenaires.",
  alternates: {
    canonical: "/secteurs/logistique",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/secteurs/logistique`,
    siteName: "Thalès Informatique",
    title: "ERP Logistique au Maroc et en Afrique | Thalès Informatique",
    description:
      "Solution ERP pour la logistique au Maroc et en Afrique : gestion multi-entrepôts (WMS), optimisation du transport, traçabilité temps réel et échanges EDI avec vos partenaires.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - ERP Logistique Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Logistique au Maroc et en Afrique | Thalès Informatique",
    description:
      "ERP logistique Maroc : WMS multi-entrepôts, transport, traçabilité temps réel, EDI. Thalès Informatique.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://thales.ma" },
    { "@type": "ListItem", position: 2, name: "Secteurs", item: "https://thales.ma/secteurs" },
    { "@type": "ListItem", position: 3, name: "Logistique", item: "https://thales.ma/secteurs/logistique" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ERP & WMS Logistique Maroc",
  description:
    "Solutions ERP et WMS pour les opérateurs logistiques au Maroc et en Afrique : gestion multi-entrepôts, optimisation du transport, traçabilité en temps réel et intégration EDI avec les partenaires.",
  url: "https://thales.ma/secteurs/logistique",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: "https://thales.ma",
  },
  areaServed: ["Maroc", "Afrique"],
  serviceType: "Intégration ERP logistique et WMS",
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
      <LogistiqueClient />
    </>
  );
}
