import type { Metadata } from "next";
import ExpertiseComptableClient from "./ExpertiseComptableClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Expertise Comptable Maroc | Sage | Thalès Informatique",
  description:
    "Solutions Sage pour cabinets d'expertise comptable au Maroc : multi-dossiers, revue analytique, collaboration d'équipe et conformité OEC. Demandez une démonstration.",
  alternates: { canonical: "/metiers/expertise-comptable" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/metiers/expertise-comptable`,
    siteName: "Thalès Informatique",
    title: "Expertise Comptable Maroc | Sage | Thalès Informatique",
    description:
      "Solutions Sage pour cabinets d'expertise comptable au Maroc : multi-dossiers, revue analytique et conformité OEC.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Expertise Comptable Maroc Sage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expertise Comptable Maroc | Sage | Thalès Informatique",
    description:
      "Solutions Sage pour cabinets d'expertise comptable au Maroc : multi-dossiers, revue analytique et conformité OEC.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "Expertise Comptable", item: `${SITE_URL}/metiers/expertise-comptable` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Solutions Sage pour cabinets d'expertise comptable Maroc",
  description:
    "Logiciels de comptabilité Sage pour expert-comptable au Maroc : gestion multi-dossiers, revue analytique, archivage et facturation conformes OEC.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "Logiciel Expertise Comptable",
  url: `${SITE_URL}/metiers/expertise-comptable`,
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ExpertiseComptableClient />
    </>
  );
}
