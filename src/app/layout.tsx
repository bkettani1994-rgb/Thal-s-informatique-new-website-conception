import type { Metadata } from "next";
import "./globals.css";
import ChatBot from "@/components/ui/ChatBot";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Thalès Informatique | Votre partenaire de transformation digitale",
    template: "%s | Thalès Informatique",
  },
  description:
    "Depuis plus de 30 ans, Thalès Informatique accompagne les entreprises marocaines dans leur transformation digitale : ERP, gestion financière, RH, production et plus.",
  keywords: "ERP Maroc, transformation digitale, gestion entreprise, logiciel gestion, conseil informatique",
  icons: {
    icon: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780929211/logo_thales_informatique_favicon_amxxo8.png",
    shortcut: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780929211/logo_thales_informatique_favicon_amxxo8.png",
    apple: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780929211/logo_thales_informatique_favicon_amxxo8.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: SITE_URL,
    siteName: "Thalès Informatique",
    title: "Thalès Informatique | Votre partenaire de transformation digitale",
    description:
      "Depuis plus de 30 ans, Thalès Informatique accompagne les entreprises marocaines dans leur transformation digitale : ERP, gestion financière, RH, production et plus.",
    images: [
      {
        url: OG_IMAGE,
        width: 800,
        height: 800,
        alt: "Thalès Informatique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thalès Informatique | Votre partenaire de transformation digitale",
    description:
      "Depuis plus de 30 ans, Thalès Informatique accompagne les entreprises marocaines dans leur transformation digitale : ERP, gestion financière, RH, production et plus.",
    images: [OG_IMAGE],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Thalès Informatique",
  url: SITE_URL,
  logo: OG_IMAGE,
  description:
    "Depuis plus de 30 ans, Thalès Informatique accompagne les entreprises marocaines dans leur transformation digitale : ERP, gestion financière, RH, production et plus.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Casablanca",
    addressCountry: "MA",
  },
  areaServed: "MA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased bg-bg-base text-primary">
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
