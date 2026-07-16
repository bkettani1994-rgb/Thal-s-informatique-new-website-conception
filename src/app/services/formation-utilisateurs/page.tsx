import type { Metadata } from "next";
import FormationUtilisateursClient from "./FormationUtilisateursClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Formation ERP Sage X3 & Sage 100 | Maroc",
  description:
    "Formations certifiées Sage : finance, RH, gestion commerciale, production et BI en présentiel ou en ligne. Formateurs certifiés Sage au Maroc et en Afrique.",
  alternates: { canonical: "/services/formation-utilisateurs" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/services/formation-utilisateurs`,
    siteName: "Thalès Informatique",
    title: "Formation ERP Sage X3 & Sage 100 | Maroc",
    description:
      "Formations certifiées Sage : finance, RH, gestion commerciale, production et BI en présentiel ou en ligne. Formateurs certifiés Sage au Maroc et en Afrique.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Formation ERP Sage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation ERP Sage X3 & Sage 100 | Maroc",
    description:
      "Formations certifiées Sage : finance, RH, gestion commerciale, production et BI en présentiel ou en ligne. Formateurs certifiés Sage au Maroc et en Afrique.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://thales.ma" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://thales.ma/services" },
    { "@type": "ListItem", position: 3, name: "Formation Utilisateurs", item: "https://thales.ma/services/formation-utilisateurs" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Formation ERP Sage X3 & Sage 100 au Maroc",
  description:
    "Formations certifiées Sage en présentiel, classe virtuelle ou e-learning : finance, RH, gestion commerciale, production et BI, adaptées à chaque profil de votre équipe.",
  url: "https://thales.ma/services/formation-utilisateurs",
  provider: { "@type": "Organization", name: "Thalès Informatique", url: "https://thales.ma" },
  areaServed: ["Maroc", "Afrique"],
  serviceType: "Formation ERP",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <FormationUtilisateursClient />
    </>
  );
}
