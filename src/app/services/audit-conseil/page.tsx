import type { Metadata } from "next";
import AuditConseilClient from "./AuditConseilClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Audit ERP & Conseil SI au Maroc | Thalès Informatique",
  description:
    "Diagnostic ERP et conseil SI par des consultants certifiés Sage : cartographie des flux, feuille de route de transformation digitale au Maroc et en Afrique.",
  alternates: { canonical: "/services/audit-conseil" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/services/audit-conseil`,
    siteName: "Thalès Informatique",
    title: "Audit ERP & Conseil SI au Maroc | Thalès Informatique",
    description:
      "Diagnostic ERP et conseil SI par des consultants certifiés Sage : cartographie des flux, feuille de route de transformation digitale au Maroc et en Afrique.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Audit ERP & Conseil SI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit ERP & Conseil SI au Maroc | Thalès Informatique",
    description:
      "Diagnostic ERP et conseil SI par des consultants certifiés Sage : cartographie des flux, feuille de route de transformation digitale au Maroc et en Afrique.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://thales.ma" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://thales.ma/services" },
    { "@type": "ListItem", position: 3, name: "Audit & Conseil", item: "https://thales.ma/services/audit-conseil" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Audit ERP & Conseil SI — Thalès Informatique",
  description:
    "Diagnostic des processus métiers, cartographie des flux et feuille de route de transformation digitale par des consultants certifiés Sage au Maroc et en Afrique.",
  url: "https://thales.ma/services/audit-conseil",
  provider: { "@type": "Organization", name: "Thalès Informatique", url: "https://thales.ma" },
  areaServed: ["Maroc", "Afrique"],
  serviceType: "Audit ERP",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <AuditConseilClient />
    </>
  );
}
