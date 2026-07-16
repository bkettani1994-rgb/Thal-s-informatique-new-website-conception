import type { Metadata } from "next";
import AgroalimentaireClient from "./AgroalimentaireClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "ERP Agroalimentaire au Maroc : ONSSA & HACCP",
  description:
    "Solution ERP pour l'agroalimentaire au Maroc : traçabilité des lots, conformité ONSSA et HACCP, gestion des DLC/DLUO et recettes. Sage X3 préconfiguré pour l'industrie IAA.",
  alternates: {
    canonical: "/secteurs/agroalimentaire",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/secteurs/agroalimentaire`,
    siteName: "Thalès Informatique",
    title: "ERP Agroalimentaire au Maroc : ONSSA & HACCP",
    description:
      "Solution ERP pour l'agroalimentaire au Maroc : traçabilité des lots, conformité ONSSA et HACCP, gestion des DLC/DLUO et recettes. Sage X3 préconfiguré pour l'industrie IAA.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - ERP Agroalimentaire Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Agroalimentaire au Maroc : ONSSA & HACCP",
    description:
      "ERP agroalimentaire Maroc : traçabilité lots, conformité ONSSA & HACCP, DLC/DLUO. Sage X3 IAA — Thalès Informatique.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://thales.ma" },
    { "@type": "ListItem", position: 2, name: "Secteurs", item: "https://thales.ma/secteurs" },
    { "@type": "ListItem", position: 3, name: "Agroalimentaire", item: "https://thales.ma/secteurs/agroalimentaire" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ERP Agroalimentaire Maroc — Traçabilité & Conformité HACCP",
  description:
    "Solutions ERP pour l'industrie agroalimentaire au Maroc : Sage X3 pour la traçabilité des lots, la conformité ONSSA et HACCP, la gestion des DLC/DLUO et la production IAA.",
  url: "https://thales.ma/secteurs/agroalimentaire",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: "https://thales.ma",
  },
  areaServed: ["Maroc", "Afrique"],
  serviceType: "Intégration ERP agroalimentaire",
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
      <AgroalimentaireClient />
    </>
  );
}
