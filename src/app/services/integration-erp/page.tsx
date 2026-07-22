import type { Metadata } from "next";
import IntegrationERPClient from "./IntegrationERPClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Intégrateur ERP Maroc | Connecteurs API Sage | Thalès",
  description:
    "Thalès Informatique, intégrateur ERP Maroc : connecteurs API REST/SOAP, EDI et e-commerce pour intégrer Sage X3 ou Sage 100 à votre écosystème applicatif.",
  alternates: { canonical: "/services/integration-erp" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/services/integration-erp`,
    siteName: "Thalès Informatique",
    title: "Intégrateur ERP Maroc | Connecteurs API Sage | Thalès",
    description:
      "Thalès Informatique, intégrateur ERP Maroc : connecteurs API REST/SOAP, EDI et e-commerce pour intégrer Sage X3 ou Sage 100 à votre écosystème applicatif.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Intégrateur ERP Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intégrateur ERP Maroc | Connecteurs API Sage | Thalès",
    description:
      "Connecteurs API REST/SOAP, EDI et e-commerce pour intégrer Sage X3 ou Sage 100 à votre écosystème applicatif, par un intégrateur ERP Maroc.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://thales.ma" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://thales.ma/services" },
    { "@type": "ListItem", position: 3, name: "Intégration ERP", item: "https://thales.ma/services/integration-erp" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Intégrateur ERP Maroc — Connecteurs API & EDI",
  description:
    "Thalès Informatique, intégrateur ERP au Maroc, développe des connecteurs API REST/SOAP, EDI, e-commerce, CRM et BI pour intégrer Sage X3 ou Sage 100 à votre écosystème applicatif.",
  url: "https://thales.ma/services/integration-erp",
  provider: { "@type": "Organization", name: "Thalès Informatique", url: "https://thales.ma" },
  areaServed: ["Maroc", "Afrique"],
  serviceType: "Intégrateur ERP",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <IntegrationERPClient />
    </>
  );
}
