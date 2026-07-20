import type { Metadata } from "next";
import SupportMaintenanceClient from "./SupportMaintenanceClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Maintenance ERP Sage | Contrat TMA",
  description:
    "Contrat de maintenance ERP pour Sage X3 et Sage 100 : correctifs, mises à jour légales, sauvegardes et SLA garantis par Thalès Informatique au Maroc.",
  alternates: { canonical: "/services/support-maintenance" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/services/support-maintenance`,
    siteName: "Thalès Informatique",
    title: "Maintenance ERP Sage | Contrat TMA | Thalès",
    description:
      "Contrat de maintenance ERP pour Sage X3 et Sage 100 : correctifs, mises à jour légales, sauvegardes et SLA garantis par Thalès Informatique au Maroc.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Maintenance ERP Sage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maintenance ERP Sage | Contrat TMA | Thalès",
    description:
      "Contrat de maintenance ERP pour Sage X3 et Sage 100 : correctifs, mises à jour légales, sauvegardes et SLA garantis par Thalès Informatique au Maroc.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://thales.ma" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://thales.ma/services" },
    { "@type": "ListItem", position: 3, name: "Support & Maintenance", item: "https://thales.ma/services/support-maintenance" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Maintenance ERP Sage — Contrat TMA",
  description:
    "Contrat de maintenance unique pour Sage X3 et Sage 100 : correctifs applicatifs, mises à jour légales marocaines, sauvegardes et délais d'intervention garantis.",
  url: "https://thales.ma/services/support-maintenance",
  provider: { "@type": "Organization", name: "Thalès Informatique", url: "https://thales.ma" },
  areaServed: ["Maroc", "Afrique"],
  serviceType: "Maintenance ERP",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <SupportMaintenanceClient />
    </>
  );
}
