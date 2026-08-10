import type { Metadata } from "next";
import Sage100ExperienceClient from "./Sage100ExperienceClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";
const TITLE = "Sage 100 Expérience | Nouvelle interface Sage 100 | Thalès Informatique";
const DESCRIPTION =
  "Découvrez la nouvelle interface Sage 100 Expérience : Ask AI, Builder AI et Workflows. Inscrivez-vous dès maintenant en avant-première chez Thalès Informatique.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "Sage 100 Expérience",
    "nouvelle interface Sage 100",
    "Ask AI Sage 100",
    "Builder AI Sage 100",
    "Workflows Sage 100",
    "Sage 100 cloud",
  ],
  alternates: { canonical: "/solutions/sage-100-experience" },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/solutions/sage-100-experience`,
    siteName: "Thalès Informatique",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Sage 100 Expérience — Thalès Informatique" }],
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
    { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_URL}/solutions` },
    { "@type": "ListItem", position: 3, name: "Sage 100 Expérience", item: `${SITE_URL}/solutions/sage-100-experience` },
  ],
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Sage 100 Expérience",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Cloud, Web",
  url: `${SITE_URL}/solutions/sage-100-experience`,
  description:
    "Sage 100 Expérience est la nouvelle interface de Sage 100, intégrant Ask AI, Builder AI et Workflows. Thalès Informatique accompagne les entreprises marocaines lors de son avant-première.",
  featureList: ["Ask AI", "Builder AI", "Workflows"],
  seller: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <Sage100ExperienceClient />
    </>
  );
}
