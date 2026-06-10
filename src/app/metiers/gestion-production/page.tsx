import type { Metadata } from "next";
import GestionProductionClient from "./GestionProductionClient";

export const metadata: Metadata = {
  title: "Gestion de Production & GPAO pour Industriels Maroc",
  description:
    "Module GPAO Thalès Informatique : nomenclatures, ordres de fabrication, suivi d'atelier en temps réel et coûts de revient pour les industriels marocains.",
  alternates: {
    canonical: "/metiers/gestion-production",
  },
};

export default function Page() {
  return <GestionProductionClient />;
}
