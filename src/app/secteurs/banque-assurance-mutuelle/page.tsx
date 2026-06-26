import type { Metadata } from "next";
import BanqueAssuranceMutuelleClient from "./BanqueAssuranceMutuelleClient";

export const metadata: Metadata = {
  title: "ERP Banque, Assurance & Mutuelle au Maroc | Thalès Informatique",
  description:
    "Solution de gestion pour les banques, assurances et mutuelles au Maroc : conformité Bank Al-Maghrib et ACAPS, gestion des contrats et sinistres, reporting prudentiel et trésorerie multi-agences.",
  alternates: {
    canonical: "/secteurs/banque-assurance-mutuelle",
  },
};

export default function Page() {
  return <BanqueAssuranceMutuelleClient />;
}
