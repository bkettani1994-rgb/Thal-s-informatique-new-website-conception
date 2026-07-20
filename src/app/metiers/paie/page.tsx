import type { Metadata } from "next";
import PaieClient from "./PaieClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Gestion de la Paie Maroc | Sage Paie",
  description:
    "Logiciel de paie conforme au Code du Travail marocain : barème IR 2024, cotisations CNSS/AMO, bulletins de paie et régularisation annuelle avec Sage Paie. Demandez une démo.",
  alternates: { canonical: "/metiers/paie" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/metiers/paie`,
    siteName: "Thalès Informatique",
    title: "Gestion de la Paie Maroc | Sage Paie | Thalès",
    description:
      "Bulletins de paie conformes au Code du Travail : barème IR 2024, CNSS/AMO et régularisation annuelle avec Sage Paie.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Gestion Paie Maroc Sage Paie" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestion de la Paie Maroc | Sage Paie | Thalès",
    description:
      "Bulletins de paie conformes : barème IR, CNSS/AMO et régularisation annuelle avec Sage Paie au Maroc.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "Gestion de la Paie", item: `${SITE_URL}/metiers/paie` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Logiciel de Gestion de la Paie — Sage Paie Maroc",
  description:
    "Moteur de calcul de paie conforme au Code du Travail marocain : barème IR progressif, cotisations CNSS/AMO, bulletins de paie et régularisation annuelle.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "Logiciel de Paie",
  url: `${SITE_URL}/metiers/paie`,
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <PaieClient />
    </>
  );
}
