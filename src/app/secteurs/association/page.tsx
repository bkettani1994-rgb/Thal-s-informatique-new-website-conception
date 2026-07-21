import type { Metadata } from "next";
import AssociationClient from "./AssociationClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "ERP pour Associations & ONG au Maroc et en Afrique",
  description:
    "Solution de gestion pour associations et ONG au Maroc : suivi des adhérents, subventions, dons, comptabilité associative et reporting bailleurs. Découvrez.",
  alternates: {
    canonical: "/secteurs/association",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/secteurs/association`,
    siteName: "Thalès Informatique",
    title: "ERP pour Associations & ONG au Maroc et en Afrique | Thalès Informatique",
    description:
      "Solution de gestion pour associations et ONG au Maroc et en Afrique : suivi des adhérents, des subventions et des dons, comptabilité associative et reporting bailleurs de fonds.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - ERP Associations ONG Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP pour Associations & ONG au Maroc et en Afrique | Thalès Informatique",
    description:
      "Gestion associations & ONG Maroc : adhérents, subventions, dons, comptabilité associative, reporting bailleurs. Thalès Informatique.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://thales.ma" },
    { "@type": "ListItem", position: 2, name: "Secteurs", item: "https://thales.ma/secteurs" },
    { "@type": "ListItem", position: 3, name: "Associations & ONG", item: "https://thales.ma/secteurs/association" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Logiciel de gestion Associations & ONG Maroc",
  description:
    "Solutions de gestion pour associations, ONG et fondations au Maroc et en Afrique : comptabilité analytique par projet, suivi des subventions multi-bailleurs, gestion RH et reporting conformes.",
  url: "https://thales.ma/secteurs/association",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: "https://thales.ma",
  },
  areaServed: ["Maroc", "Afrique"],
  serviceType: "Solution de gestion associations et ONG",
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
      <AssociationClient />
    </>
  );
}
