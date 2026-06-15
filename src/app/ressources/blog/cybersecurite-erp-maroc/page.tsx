import type { Metadata } from "next";
import CybersecuriteErpMarocClient from "./CybersecuriteErpMarocClient";

export const metadata: Metadata = {
  title: "Cybersécurité des ERP : protéger les données de votre entreprise marocaine",
  description:
    "Phishing, ransomwares, accès non autorisés : les bonnes pratiques pour sécuriser votre ERP et vos données financières face à la montée des cybermenaces au Maroc.",
  alternates: {
    canonical: "/ressources/blog/cybersecurite-erp-maroc",
  },
};

export default function Page() {
  return <CybersecuriteErpMarocClient />;
}
