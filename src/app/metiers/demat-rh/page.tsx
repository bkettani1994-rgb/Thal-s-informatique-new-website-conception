import type { Metadata } from "next";
import DematRhClient from "./DematRhClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Dématérialisation RH | Coffre-fort RH",
  description:
    "Passez au zéro papier RH avec Thalès Informatique : coffre-fort numérique RH, signature électronique, dossier salarié numérique et GED RH conformes à la réglementation marocaine.",
  alternates: { canonical: "/metiers/demat-rh" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/metiers/demat-rh`,
    siteName: "Thalès Informatique",
    title: "Dématérialisation RH | Coffre-fort RH | Thalès",
    description:
      "Coffre-fort numérique RH, signature électronique et dossier salarié numérique conformes à la réglementation marocaine.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Dématérialisation RH Coffre-fort Numérique Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dématérialisation RH | Coffre-fort RH | Thalès",
    description:
      "Coffre-fort numérique RH et signature électronique conformes à la réglementation marocaine.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "Dématérialisation RH", item: `${SITE_URL}/metiers/demat-rh` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dématérialisation RH — Coffre-fort Numérique et GED RH",
  description:
    "Solution de dématérialisation RH pour entreprises marocaines : coffre-fort numérique, signature électronique, archivage légal et portail employé zéro papier.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "Dématérialisation RH",
  url: `${SITE_URL}/metiers/demat-rh`,
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <DematRhClient />
    </>
  );
}
