import type { Metadata } from "next";
import SageX3Client from "./SageX3Client";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Sage X3 Maroc | ERP de gestion d'entreprise | Thalès Informatique",
  description:
    "Découvrez Sage X3 Maroc, l'ERP de référence pour les entreprises industrielles, la distribution et le négoce. Thalès Informatique, Sage Business Partner Platinum, vous accompagne dans le déploiement de Sage X3 au Maroc et en Afrique.",
  alternates: {
    canonical: "/solutions/sage-x3",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/solutions/sage-x3`,
    siteName: "Thalès Informatique",
    title: "Sage X3 Maroc | ERP de gestion d'entreprise | Thalès Informatique",
    description:
      "Découvrez Sage X3 Maroc, l'ERP de référence pour les entreprises industrielles, la distribution et le négoce. Thalès Informatique, Sage Business Partner Platinum, vous accompagne dans le déploiement de Sage X3 au Maroc et en Afrique.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Sage X3 Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sage X3 Maroc | ERP de gestion d'entreprise | Thalès Informatique",
    description:
      "Sage X3 Maroc : l'ERP de référence pour les entreprises industrielles, la distribution et le négoce. Déployé par Thalès Informatique au Maroc et en Afrique.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://thales.ma" },
    { "@type": "ListItem", position: 2, name: "Solutions", item: "https://thales.ma/solutions" },
    { "@type": "ListItem", position: 3, name: "Sage X3", item: "https://thales.ma/solutions/sage-x3" },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Sage X3",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Cloud",
  description:
    "Sage X3 est un ERP de gestion d'entreprise pour les industries, la distribution et le négoce. Déployé par Thalès Informatique au Maroc et en Afrique.",
  url: "https://thales.ma/solutions/sage-x3",
  publisher: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: "https://thales.ma",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "MAD",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Thalès Informatique" },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <SageX3Client />
    </>
  );
}
