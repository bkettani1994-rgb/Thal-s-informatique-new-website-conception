import type { Metadata } from "next";
import ActualitesClient from "./ActualitesClient";

export const metadata: Metadata = {
  title: "Actualités ERP & Réglementaires au Maroc",
  description:
    "Suivez les actualités Loi de Finances (TVA, IS, CNSS, IR), les mises à jour Sage X3 et Sage 100, et les dernières nouvelles de Thalès Informatique au Maroc.",
  alternates: {
    canonical: "/ressources/actualites",
  },
};

export default function Page() {
  return <ActualitesClient />;
}
