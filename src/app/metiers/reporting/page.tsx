import type { Metadata } from "next";
import ReportingClient from "./ReportingClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Business Intelligence & Reporting ERP",
  description:
    "Tableaux de bord Business Intelligence et KPI temps réel connectés à votre ERP : finance, RH, production et commercial au Maroc. Demandez une démo.",
  alternates: { canonical: "/metiers/reporting" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/metiers/reporting`,
    siteName: "Thalès Informatique",
    title: "Business Intelligence & Reporting ERP | Thalès",
    description:
      "Tableaux de bord BI et KPI temps réel : reporting financier, RH, production et commercial pour dirigeants au Maroc.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Business Intelligence Reporting ERP Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Intelligence & Reporting ERP | Thalès",
    description:
      "Tableaux de bord BI et KPI temps réel pour le reporting décisionnel au Maroc.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "Reporting & Business Intelligence", item: `${SITE_URL}/metiers/reporting` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business Intelligence & Reporting ERP — Maroc",
  description:
    "Dashboards interactifs et KPIs personnalisables pour piloter finance, RH, production et commercial en temps réel, avec exports Excel/PDF et alertes automatiques.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "Business Intelligence et Reporting",
  url: `${SITE_URL}/metiers/reporting`,
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ReportingClient />
    </>
  );
}
