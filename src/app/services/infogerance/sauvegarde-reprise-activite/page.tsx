import type { Metadata } from "next";
import SauvegardeRepriseActiviteClient from "./SauvegardeRepriseActiviteClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Sauvegarde & Reprise d'Activité",
  description:
    "Sauvegardes automatisées, PRA et tests de restauration pour garantir la continuité de vos données et systèmes avec Thalès Informatique au Maroc et en Afrique.",
  alternates: { canonical: "/services/infogerance/sauvegarde-reprise-activite" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/services/infogerance/sauvegarde-reprise-activite`,
    siteName: "Thalès Informatique",
    title: "Sauvegarde & Reprise d'Activité | Thalès",
    description:
      "Sauvegardes automatisées, PRA et tests de restauration pour garantir la continuité de vos données et systèmes avec Thalès Informatique au Maroc et en Afrique.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Sauvegarde & Reprise d'Activité" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sauvegarde & Reprise d'Activité | Thalès",
    description:
      "Sauvegardes automatisées, PRA et tests de restauration pour garantir la continuité de vos données et systèmes avec Thalès Informatique au Maroc et en Afrique.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://thales.ma" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://thales.ma/services" },
    { "@type": "ListItem", position: 3, name: "Infogérance", item: "https://thales.ma/services/infogerance" },
    { "@type": "ListItem", position: 4, name: "Sauvegarde & Reprise d'Activité", item: "https://thales.ma/services/infogerance/sauvegarde-reprise-activite" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sauvegarde & Reprise d'Activité — Thalès Informatique",
  description:
    "Sauvegardes automatisées, plans de reprise d'activité (PRA) et tests de restauration pour garantir la continuité des données et systèmes au Maroc et en Afrique.",
  url: "https://thales.ma/services/infogerance/sauvegarde-reprise-activite",
  provider: { "@type": "Organization", name: "Thalès Informatique", url: "https://thales.ma" },
  areaServed: ["Maroc", "Afrique"],
  serviceType: "Sauvegarde et reprise d'activité",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <SauvegardeRepriseActiviteClient />
    </>
  );
}
