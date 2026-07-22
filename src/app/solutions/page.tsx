import type { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE =
  "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Solutions ERP Maroc | Sage X3, Sage 100 & Logiciels Métiers",
  description:
    "Solutions ERP au Maroc : Sage X3, Sage 100, Sage FRP 1000, DimoMaint, Eloficash, Factorial et solutions RH. Conseil et déploiement par Thalès Informatique.",
  alternates: { canonical: `${SITE_URL}/solutions` },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/solutions`,
    siteName: "Thalès Informatique",
    title:
      "Solutions ERP Maroc | Sage X3, Sage 100 & Logiciels Métiers | Thalès Informatique",
    description:
      "Découvrez les solutions ERP proposées par Thalès Informatique au Maroc. Sage X3, Sage 100, Sage FRP 1000, DimoMaint, Eloficash, Factorial et solutions RH pour accompagner la transformation digitale des entreprises marocaines.",
    images: [
      {
        url: OG_IMAGE,
        width: 800,
        height: 800,
        alt: "Thalès Informatique — Solutions ERP Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Solutions ERP Maroc | Sage X3, Sage 100 & Logiciels Métiers | Thalès Informatique",
    description:
      "Découvrez les solutions ERP proposées par Thalès Informatique au Maroc. Sage X3, Sage 100, Sage FRP 1000, DimoMaint, Eloficash, Factorial et solutions RH.",
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
  name: "Solutions ERP au Maroc — Sage X3 & Sage 100",
  description:
    "Portfolio de solutions ERP Sage pour PME et ETI marocaines. Partenaire Sage Business Partner Platinum.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "Solutions ERP",
  url: `${SITE_URL}/solutions`,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Thalès Informatique",
  url: SITE_URL,
  logo: OG_IMAGE,
  description:
    "Éditeur de solutions ERP de référence au Maroc depuis plus de 30 ans. Partenaire certifié Sage Business Partner Platinum.",
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
          name: "Sage FRP 1000",
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
          name: "Eloficash",
          applicationCategory: "FinanceSoftware",
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
