import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thalès Informatique | Votre partenaire de transformation digitale",
  description:
    "Depuis plus de 30 ans, Thalès Informatique accompagne les entreprises marocaines dans leur transformation digitale : ERP, gestion financière, RH, production et plus.",
  keywords: "ERP Maroc, transformation digitale, gestion entreprise, logiciel gestion, conseil informatique",
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
      </body>
    </html>
  );
}
