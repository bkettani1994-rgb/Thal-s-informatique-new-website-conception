import type { Metadata } from "next";
import ErpClient from "./ErpClient";

export const metadata: Metadata = {
  title: "ERP Gestion Intégrée pour PME au Maroc",
  description:
    "Plateforme ERP intégrée Thalès Informatique : finance, achats, ventes, production, stocks et RH dans un seul système, 100% conforme à la réglementation marocaine.",
  alternates: {
    canonical: "/metiers/erp",
  },
};

export default function Page() {
  return <ErpClient />;
}
