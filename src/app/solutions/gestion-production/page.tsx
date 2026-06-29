import type { Metadata } from "next";
import GestionProductionClient from "./GestionProductionClient";

export const metadata: Metadata = {
  title: "Gestion de Production ERP : Planification & Qualité",
  description:
    "Module ERP de gestion de production : planification MRP, ordres de fabrication, stocks et qualité. Solution déployée par Thalès Informatique au Maroc et en Afrique.",
  alternates: {
    canonical: "/solutions/gestion-production",
  },
};

export default function Page() {
  return <GestionProductionClient />;
}
