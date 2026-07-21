import type { Metadata } from "next";
import CybersecuriteClient from "./CybersecuriteClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Cybersécurité Informatique Maroc",
  description:
    "Protégez votre SI : pare-feu avancé, EDR, audits de sécurité et sensibilisation des équipes par Thalès Informatique au Maroc. Contactez nos experts.",
  alternates: { canonical: "/services/infogerance/cybersecurite" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/services/infogerance/cybersecurite`,
    siteName: "Thalès Informatique",
    title: "Cybersécurité Informatique Maroc | Thalès",
    description:
      "Protégez votre SI contre les cybermenaces : pare-feu avancé, EDR, audits de sécurité et sensibilisation des équipes par Thalès Informatique au Maroc et en Afrique.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Cybersécurité Informatique Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersécurité Informatique Maroc | Thalès",
    description:
      "Protégez votre SI contre les cybermenaces : pare-feu avancé, EDR, audits de sécurité et sensibilisation des équipes par Thalès Informatique au Maroc et en Afrique.",
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
    { "@type": "ListItem", position: 4, name: "Cybersécurité", item: "https://thales.ma/services/infogerance/cybersecurite" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cybersécurité Informatique — Thalès Informatique",
  description:
    "Protection des systèmes contre les cybermenaces : pare-feu avancé, EDR, audits de sécurité et sensibilisation des équipes au Maroc et en Afrique.",
  url: "https://thales.ma/services/infogerance/cybersecurite",
  provider: { "@type": "Organization", name: "Thalès Informatique", url: "https://thales.ma" },
  areaServed: ["Maroc", "Afrique"],
  serviceType: "Cybersécurité informatique",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <CybersecuriteClient />
    </>
  );
}
