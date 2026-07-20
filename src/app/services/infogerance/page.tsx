import type { Metadata } from "next";
import InfogeranceClient from "./InfogeranceClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Infogérance Informatique au Maroc",
  description:
    "Supervision proactive, cybersécurité, sauvegardes et cloud : Thalès Informatique gère votre infrastructure IT au Maroc et en Afrique avec des SLA garantis.",
  alternates: { canonical: "/services/infogerance" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/services/infogerance`,
    siteName: "Thalès Informatique",
    title: "Infogérance Informatique au Maroc | Thalès",
    description:
      "Supervision proactive, cybersécurité, sauvegardes et cloud : Thalès Informatique gère votre infrastructure IT au Maroc et en Afrique avec des SLA garantis.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Infogérance IT Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Infogérance Informatique au Maroc | Thalès",
    description:
      "Supervision proactive, cybersécurité, sauvegardes et cloud : Thalès Informatique gère votre infrastructure IT au Maroc et en Afrique avec des SLA garantis.",
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
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Infogérance Informatique au Maroc — Thalès Informatique",
  description:
    "Gestion externalisée de votre infrastructure IT : supervision proactive 24/7, cybersécurité, sauvegardes, cloud et hotline dédiée pour les entreprises au Maroc et en Afrique.",
  url: "https://thales.ma/services/infogerance",
  provider: { "@type": "Organization", name: "Thalès Informatique", url: "https://thales.ma" },
  areaServed: ["Maroc", "Afrique"],
  serviceType: "Infogérance informatique",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <InfogeranceClient />
    </>
  );
}
