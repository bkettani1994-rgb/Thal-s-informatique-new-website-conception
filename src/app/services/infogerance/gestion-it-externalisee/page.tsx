import type { Metadata } from "next";
import GestionItExternaliseeClient from "./GestionItExternaliseeClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Gestion IT Externalisée Maroc",
  description:
    "Prise en charge complète de votre infrastructure IT : postes, serveurs, réseau et cloud supervisés et maintenus au quotidien par Thalès Informatique à Casablanca.",
  alternates: { canonical: "/services/infogerance/gestion-it-externalisee" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/services/infogerance/gestion-it-externalisee`,
    siteName: "Thalès Informatique",
    title: "Gestion IT Externalisée Maroc | Thalès",
    description:
      "Prise en charge complète de votre infrastructure IT : postes, serveurs, réseau et cloud supervisés et maintenus au quotidien par Thalès Informatique à Casablanca.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Gestion IT Externalisée Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestion IT Externalisée Maroc | Thalès",
    description:
      "Prise en charge complète de votre infrastructure IT : postes, serveurs, réseau et cloud supervisés et maintenus au quotidien par Thalès Informatique à Casablanca.",
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
    { "@type": "ListItem", position: 4, name: "Gestion IT Externalisée", item: "https://thales.ma/services/infogerance/gestion-it-externalisee" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gestion IT Externalisée — Thalès Informatique",
  description:
    "Gestion complète de l'infrastructure IT : postes, serveurs, réseau et cloud, supervisés et maintenus au quotidien par Thalès Informatique à Casablanca.",
  url: "https://thales.ma/services/infogerance/gestion-it-externalisee",
  provider: { "@type": "Organization", name: "Thalès Informatique", url: "https://thales.ma" },
  areaServed: ["Maroc", "Afrique"],
  serviceType: "Gestion IT externalisée",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <GestionItExternaliseeClient />
    </>
  );
}
