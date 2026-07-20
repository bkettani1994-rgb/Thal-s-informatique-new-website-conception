import type { Metadata } from "next";
import TvaClient from "./TvaClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Gestion TVA Maroc | Déclaration TVA ERP | Thalès",
  description:
    "Gérez la TVA marocaine sur encaissements et débits, le prorata de déduction et transmettez vos déclarations TVA automatiquement via EDI Simpl-IS. Fiscalité TVA conforme DGI.",
  alternates: { canonical: "/metiers/tva" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/metiers/tva`,
    siteName: "Thalès Informatique",
    title: "Gestion TVA Maroc | Déclaration TVA ERP | Thalès",
    description:
      "TVA sur encaissements, débits, prorata de déduction et déclarations via EDI Simpl-IS. Fiscalité TVA conforme DGI.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Gestion TVA Maroc ERP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestion TVA Maroc | Déclaration TVA ERP | Thalès",
    description:
      "TVA sur encaissements, débits et déclarations via EDI Simpl-IS. Fiscalité TVA conforme DGI.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "Gestion TVA", item: `${SITE_URL}/metiers/tva` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gestion TVA Maroc — Déclaration et Récupération TVA",
  description:
    "Gestion complète de la TVA marocaine : encaissements, débits, prorata de déduction et déclarations automatiques via EDI Simpl-IS conforme DGI.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "Gestion Fiscale TVA",
  url: `${SITE_URL}/metiers/tva`,
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <TvaClient />
    </>
  );
}
