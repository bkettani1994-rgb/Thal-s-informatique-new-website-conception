import type { Metadata } from "next";
import SageX3Client from "./SageX3Client";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Sage X3 Maroc | Intégration ERP par Thalès Informatique",
  description:
    "Thalès Informatique, intégrateur Sage X3 au Maroc, accompagne les entreprises industrielles, de distribution et de négoce dans le conseil, le déploiement, le paramétrage, la formation et le support de leur ERP.",
  alternates: {
    canonical: "/solutions/sage-x3",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/solutions/sage-x3`,
    siteName: "Thalès Informatique",
    title: "Sage X3 Maroc | Intégration ERP par Thalès Informatique",
    description:
      "Thalès Informatique, intégrateur Sage X3 au Maroc, accompagne les entreprises industrielles, de distribution et de négoce dans le conseil, le déploiement, le paramétrage, la formation et le support de leur ERP.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Sage X3 Maroc intégré par Thalès Informatique" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sage X3 Maroc | Intégration ERP par Thalès Informatique",
    description:
      "Découvrez Sage X3 au Maroc avec Thalès Informatique : intégration, paramétrage, migration, formation et support d'un ERP adapté à l'industrie, au négoce et à la distribution.",
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
  softwareVersion: "Sage X3",
  description:
    "Sage X3 est un ERP destiné aux entreprises industrielles, aux sociétés de distribution et aux groupes multisites. Thalès Informatique assure son intégration, son paramétrage, sa migration et son support au Maroc et en Afrique.",
  url: "https://thales.ma/solutions/sage-x3",
  featureList: [
    "Gestion financière",
    "Gestion de la production",
    "Gestion des achats",
    "Gestion des ventes",
    "Gestion des stocks",
    "Supply chain",
    "Gestion multi-sociétés",
    "Reporting et pilotage",
  ],
  publisher: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: "https://thales.ma",
  },
  offers: {
    "@type": "Offer",
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
