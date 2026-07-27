import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";
const TITLE = "Services ERP Maroc | Intégrateur et Partenaire Sage - Thalès Informatique";
const DESCRIPTION =
  "Thalès Informatique, intégrateur et revendeur Sage Maroc, propose des services ERP complets : intégration Sage X3, intégration Sage 100, support Sage Maroc, formation, maintenance et infogérance ERP.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "services ERP Maroc",
    "intégrateur Sage Maroc",
    "partenaire Sage Maroc",
    "revendeur Sage Maroc",
    "intégration Sage X3",
    "intégration Sage 100",
    "support Sage Maroc",
    "formation Sage",
    "maintenance ERP",
    "infogérance ERP",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/services`,
    siteName: "Thalès Informatique",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique — Services ERP Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Services ERP Sage au Maroc",
  description:
    "Intégration, migration, audit, formation, support, maintenance et infogérance autour des solutions Sage.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "Services ERP",
  url: `${SITE_URL}/services`,
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
      <ServicesClient />
    </>
  );
}
