import type { Metadata } from "next";
import EtatsComptablesFiscauxClient from "./EtatsComptablesFiscauxClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "États Comptables & Fiscaux Maroc | EDI DGI | Thalès",
  description:
    "Automatisez vos états comptables et fiscaux au Maroc : liasse fiscale, bilan, CPC, IS et TVA transmis via EDI Simpl-IS. Conformité DGI garantie. Découvrez notre solution.",
  alternates: { canonical: "/metiers/etats-comptables-fiscaux" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/metiers/etats-comptables-fiscaux`,
    siteName: "Thalès Informatique",
    title: "États Comptables & Fiscaux Maroc | EDI DGI | Thalès",
    description:
      "Automatisez liasse fiscale, bilan, CPC et déclarations IS/TVA via EDI Simpl-IS. Conformité DGI garantie.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - États Comptables Fiscaux Maroc EDI DGI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "États Comptables & Fiscaux Maroc | EDI DGI | Thalès",
    description:
      "Automatisez liasse fiscale, bilan et déclarations IS/TVA via EDI Simpl-IS. Conformité DGI garantie.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "États Comptables & Fiscaux", item: `${SITE_URL}/metiers/etats-comptables-fiscaux` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "États Comptables & Fiscaux — EDI Simpl-IS Maroc",
  description:
    "Génération automatique de la liasse fiscale, bilan, CPC et déclarations IS/TVA via EDI Simpl-IS, le canal certifié DGI pour les obligations fiscales marocaines.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "États Comptables et Fiscaux",
  url: `${SITE_URL}/metiers/etats-comptables-fiscaux`,
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <EtatsComptablesFiscauxClient />
    </>
  );
}
