import type { Metadata } from "next";
import BlogClient from "./BlogClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";
const TITLE = "Blog ERP & Transformation Digitale | Thalès Informatique";
const DESCRIPTION =
  "Articles, guides et conseils d'experts ERP, finance, paie et transformation digitale au Maroc, par Thalès Informatique. Retrouvez nos analyses et tendances.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "blog ERP Maroc",
    "actualités ERP",
    "transformation digitale Maroc",
    "gestion financière",
    "paie et RH",
    "Sage Maroc",
    "Thalès Informatique",
  ],
  alternates: {
    canonical: "/blog",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/blog`,
    siteName: "Thalès Informatique",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique — Blog ERP & Transformation Digitale" }],
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
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
  ],
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}/blog`,
  isPartOf: {
    "@type": "WebSite",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <BlogClient />
    </>
  );
}
