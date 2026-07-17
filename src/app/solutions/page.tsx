import type { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE =
  "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Intégrateur ERP Maroc | Sage X3 & Sage 100 | Thalès",
  description:
    "Thalès Informatique, intégrateur ERP de référence au Maroc : Sage X3, Sage 100, DimoMaint GMAO, Factorial. Solutions ERP et logiciels métiers pour PME et ETI, déployés par des consultants certifiés.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/solutions`,
    siteName: "Thalès Informatique",
    title: "Intégrateur ERP Maroc | Sage X3 & Sage 100 | Thalès",
    description:
      "Portfolio ERP de référence : Sage X3, Sage 100, DimoMaint, Factorial. Intégration ERP et logiciels métiers pour PME et ETI marocaines.",
    images: [
      {
        url: OG_IMAGE,
        width: 800,
        height: 800,
        alt: "Thalès Informatique — Intégrateur ERP Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intégrateur ERP Maroc | Sage X3 & Sage 100 | Thalès",
    description:
      "Solutions ERP Sage X3, Sage 100, DimoMaint et Factorial déployées par des consultants certifiés au Maroc.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Solutions ERP",
      item: `${SITE_URL}/solutions`,
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Intégration ERP au Maroc — Sage X3 & Sage 100",
  description:
    "Intégration, déploiement et support de logiciels ERP Sage pour PME et ETI marocaines. Partenaire Sage Business Partner Platinum.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "Intégration ERP",
  url: `${SITE_URL}/solutions`,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Thalès Informatique",
  url: SITE_URL,
  logo: OG_IMAGE,
  description:
    "Intégrateur ERP de référence au Maroc depuis plus de 30 ans. Partenaire certifié Sage Business Partner Platinum.",
  areaServed: "MA",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Solutions ERP Maroc",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Sage X3",
          applicationCategory: "ERP",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Sage 100",
          applicationCategory: "ERP",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "DimoMaint GMAO",
          applicationCategory: "CMMS",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Factorial",
          applicationCategory: "HRMS",
        },
      },
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <SolutionsClient />
    </>
  );
}
