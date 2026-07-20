import type { Metadata } from "next";
import SirhClient from "./SirhClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "SIRH | Logiciel RH Maroc",
  description:
    "SIRH pour PME et ETI au Maroc : gestion RH, GPEC, plans de formation, organigramme et compétences avec Sage RH. Pilotez stratégiquement vos ressources humaines.",
  alternates: { canonical: "/metiers/sirh" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/metiers/sirh`,
    siteName: "Thalès Informatique",
    title: "SIRH | Logiciel RH Maroc | Thalès Informatique",
    description:
      "SIRH Sage RH pour PME marocaines : GPEC, formation, compétences et gestion RH pilotée en temps réel.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - SIRH Logiciel RH Maroc Sage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SIRH | Logiciel RH Maroc | Thalès Informatique",
    description:
      "SIRH Sage RH pour PME marocaines : GPEC, formation et gestion RH pilotée en temps réel.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "SIRH", item: `${SITE_URL}/metiers/sirh` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SIRH — Logiciel de Gestion des Ressources Humaines Maroc",
  description:
    "Système d'Information RH Sage pour les entreprises marocaines : GPEC, plans de formation, compétences, organigramme et pilotage stratégique des ressources humaines.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "SIRH — Logiciel RH",
  url: `${SITE_URL}/metiers/sirh`,
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <SirhClient />
    </>
  );
}
