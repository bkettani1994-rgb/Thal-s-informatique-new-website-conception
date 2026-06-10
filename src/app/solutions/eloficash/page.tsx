import type { Metadata } from "next";
import EloficashClient from "./EloficashClient";

export const metadata: Metadata = {
  title: "Eloficash : Recouvrement & Gestion du Crédit Client",
  description:
    "Eloficash automatise le scoring client, les relances et le suivi des encours pour sécuriser votre trésorerie. Intégré à Sage par Thalès Informatique au Maroc.",
  alternates: {
    canonical: "/solutions/eloficash",
  },
};

export default function Page() {
  return <EloficashClient />;
}
