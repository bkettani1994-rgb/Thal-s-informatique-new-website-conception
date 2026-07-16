import type { Metadata } from "next";
import AssistanceUtilisateursClient from "./AssistanceUtilisateursClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Assistance Utilisateurs ERP | Hotline Maroc",
  description:
    "Hotline réactive depuis Casablanca : téléassistance AnyDesk, WhatsApp et email pour débloquer vos utilisateurs Sage X3 et Sage 100 avec des SLA garantis dès 1h.",
  alternates: { canonical: "/services/assistance-utilisateurs" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/services/assistance-utilisateurs`,
    siteName: "Thalès Informatique",
    title: "Assistance Utilisateurs ERP | Hotline Maroc",
    description:
      "Hotline réactive depuis Casablanca : téléassistance AnyDesk, WhatsApp et email pour débloquer vos utilisateurs Sage X3 et Sage 100 avec des SLA garantis dès 1h.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Assistance Utilisateurs ERP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assistance Utilisateurs ERP | Hotline Maroc",
    description:
      "Hotline réactive depuis Casablanca : téléassistance AnyDesk, WhatsApp et email pour débloquer vos utilisateurs Sage X3 et Sage 100 avec des SLA garantis dès 1h.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://thales.ma" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://thales.ma/services" },
    { "@type": "ListItem", position: 3, name: "Assistance Utilisateurs", item: "https://thales.ma/services/assistance-utilisateurs" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Assistance Utilisateurs ERP — Hotline Sage",
  description:
    "Téléassistance AnyDesk, WhatsApp et email pour débloquer vos utilisateurs Sage X3 et Sage 100 depuis Casablanca, avec des SLA garantis dès 1h.",
  url: "https://thales.ma/services/assistance-utilisateurs",
  provider: { "@type": "Organization", name: "Thalès Informatique", url: "https://thales.ma" },
  areaServed: ["Maroc", "Afrique"],
  serviceType: "Assistance utilisateurs",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <AssistanceUtilisateursClient />
    </>
  );
}
