import type { Metadata } from "next";
import TvaClient from "./TvaClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Gestion TVA Maroc | Déclaration TVA ERP | Thalès",
  description:
    "Gérez la TVA marocaine sur encaissements et débits, le prorata de déduction et transmettez vos déclarations TVA automatiquement via EDI Simpl-IS. Fiscalité TVA conforme DGI.",
  alternates: { canonical: "/metiers/tva" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/metiers/tva`,
    siteName: "Thalès Informatique",
    title: "Gestion TVA Maroc | Déclaration TVA ERP | Thalès",
    description:
      "TVA sur encaissements, débits, prorata de déduction et déclarations via EDI Simpl-IS. Fiscalité TVA conforme DGI.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Gestion TVA Maroc ERP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestion TVA Maroc | Déclaration TVA ERP | Thalès",
    description:
      "TVA sur encaissements, débits et déclarations via EDI Simpl-IS. Fiscalité TVA conforme DGI.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "Gestion TVA", item: `${SITE_URL}/metiers/tva` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gestion TVA Maroc — Déclaration et Récupération TVA",
  description:
    "Gestion complète de la TVA marocaine : encaissements, débits, prorata de déduction et déclarations automatiques via EDI Simpl-IS conforme DGI.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "Gestion Fiscale TVA",
  url: `${SITE_URL}/metiers/tva`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quels sont les taux de TVA applicables au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Au Maroc, la TVA s'applique à quatre taux : le taux normal de 20% applicable à la plupart des biens et services, le taux réduit de 14% (carburants, eau, électricité), le taux réduit de 10% (restauration, locations immobilières professionnelles) et le taux super-réduit de 7% (produits de première nécessité). Notre ERP gère automatiquement l'affectation de ces taux.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la différence entre TVA sur encaissements et TVA sur débits ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La TVA sur encaissements (ou TVA à la trésorerie) est due au moment du règlement de la facture. La TVA sur débits est exigible dès l'émission de la facture, indépendamment du paiement. Pour les PME marocaines, la TVA sur encaissements est souvent plus avantageuse car elle évite de payer la TVA avant d'avoir encaissé le client.",
      },
    },
    {
      "@type": "Question",
      name: "Comment calculer le prorata de déduction TVA ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le prorata de déduction TVA s'applique aux entreprises réalisant à la fois des opérations taxables et exonérées. Il se calcule en divisant le chiffre d'affaires taxable par le chiffre d'affaires total. Notre logiciel calcule automatiquement ce prorata et l'applique aux TVA déductibles, conformément à la réglementation DGI.",
      },
    },
    {
      "@type": "Question",
      name: "Comment récupérer un crédit de TVA au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un crédit de TVA apparaît lorsque la TVA déductible dépasse la TVA collectée. Au Maroc, ce crédit peut être reporté sur les déclarations suivantes ou faire l'objet d'une demande de remboursement auprès de la DGI. Notre solution identifie automatiquement les crédits de TVA et génère les justificatifs nécessaires pour votre dossier de remboursement.",
      },
    },
    {
      "@type": "Question",
      name: "La déclaration TVA peut-elle être transmise automatiquement à la DGI ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, notre ERP génère la déclaration TVA au format attendu par la DGI et la transmet automatiquement via EDI Simpl-IS. Vous recevez un accusé de réception électronique qui constitue votre preuve de dépôt. Cette automatisation élimine les erreurs de saisie et respecte les délais légaux.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles sont les sanctions en cas de retard de déclaration TVA au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En cas de retard ou d'omission de déclaration TVA au Maroc, l'entreprise s'expose à une majoration de 15% du montant dû, augmentée de 1,5% par mois de retard. Notre système de calendrier fiscal intégré vous envoie des rappels automatiques avant chaque échéance pour éviter tout risque de pénalité.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <TvaClient />
    </>
  );
}
