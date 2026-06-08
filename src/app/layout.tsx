import type { Metadata } from "next";
import "./globals.css";
import ChatBot from "@/components/ui/ChatBot";

export const metadata: Metadata = {
  title: "Thalès Informatique | Votre partenaire de transformation digitale",
  description:
    "Depuis plus de 30 ans, Thalès Informatique accompagne les entreprises marocaines dans leur transformation digitale : ERP, gestion financière, RH, production et plus.",
  keywords: "ERP Maroc, transformation digitale, gestion entreprise, logiciel gestion, conseil informatique",
  icons: {
    icon: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780929211/logo_thales_informatique_favicon_amxxo8.png",
    shortcut: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780929211/logo_thales_informatique_favicon_amxxo8.png",
    apple: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780929211/logo_thales_informatique_favicon_amxxo8.png",
  },
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
      </head>
      <body className="antialiased bg-bg-base text-primary">
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
