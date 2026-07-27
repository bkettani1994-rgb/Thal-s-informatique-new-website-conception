import type { Metadata } from "next";
import AProposClient from "./AProposClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";
const TITLE = "À propos de Thalès Informatique | Intégrateur Sage ERP, Revendeur Sage Maroc depuis 30 ans";
const DESCRIPTION =
  "Thalès Informatique, intégrateur Sage ERP et revendeur Sage Maroc depuis 30 ans. Expert ERP Maroc, déploiement Sage X3 Maroc pour PME et grandes entreprises.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "intégrateur Sage Maroc",
    "revendeur Sage Maroc",
    "ERP Maroc",
    "Sage X3 Maroc",
  ],
  alternates: {
    canonical: "/a-propos",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/a-propos`,
    siteName: "Thalès Informatique",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique — Intégrateur Sage ERP au Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <AProposClient />;
}
