import type { Metadata } from "next";
import ConseilItSupportTechniqueClient from "./ConseilItSupportTechniqueClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Conseil IT & Support Technique",
  description:
    "Conseil sur votre roadmap IT et helpdesk réactif pour accompagner vos équipes au quotidien à Casablanca et au Maroc. Contactez les experts Thalès Informatique.",
  alternates: { canonical: "/services/infogerance/conseil-it-support-technique" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/services/infogerance/conseil-it-support-technique`,
    siteName: "Thalès Informatique",
    title: "Conseil IT & Support Technique | Thalès",
    description:
      "Conseil stratégique sur votre roadmap IT et helpdesk réactif pour accompagner vos équipes au quotidien à Casablanca et dans tout le Maroc par Thalès Informatique.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Conseil IT & Support Technique" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conseil IT & Support Technique | Thalès",
    description:
      "Conseil stratégique sur votre roadmap IT et helpdesk réactif pour accompagner vos équipes au quotidien à Casablanca et dans tout le Maroc par Thalès Informatique.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://thales.ma" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://thales.ma/services" },
    { "@type": "ListItem", position: 3, name: "Infogérance", item: "https://thales.ma/services/infogerance" },
    { "@type": "ListItem", position: 4, name: "Conseil IT et Support Technique", item: "https://thales.ma/services/infogerance/conseil-it-support-technique" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Conseil IT et Support Technique — Thalès Informatique",
  description:
    "Conseil stratégique sur votre roadmap IT et helpdesk réactif pour accompagner vos équipes au quotidien à Casablanca et dans tout le Maroc.",
  url: "https://thales.ma/services/infogerance/conseil-it-support-technique",
  provider: { "@type": "Organization", name: "Thalès Informatique", url: "https://thales.ma" },
  areaServed: ["Maroc", "Afrique"],
  serviceType: "Conseil IT et support technique",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ConseilItSupportTechniqueClient />
    </>
  );
}
