import type { Metadata } from "next";
import AProposClient from "./AProposClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";
const TITLE = "Partenaire Sage au Maroc | Revendeur et Intégrateur Sage - Thalès Informatique";
const DESCRIPTION =
  "Thalès Informatique est votre partenaire Sage au Maroc depuis plus de 30 ans. Revendeur et intégrateur Sage, nous accompagnons les entreprises avec Sage X3, Sage FRP 1000, Sage 100 et des solutions ERP adaptées.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "partenaire Sage Maroc",
    "revendeur Sage Maroc",
    "intégrateur Sage Maroc",
    "Sage Maroc",
    "ERP Maroc",
    "Sage X3 Maroc",
    "Sage FRP 1000",
    "Sage 100",
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
