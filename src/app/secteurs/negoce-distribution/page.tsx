import type { Metadata } from "next";
import NegoceDistributionClient from "./NegoceDistributionClient";

export const metadata: Metadata = {
  title: "ERP Négoce & Distribution au Maroc",
  description:
    "Solution ERP pour le négoce et la distribution au Maroc : gestion commerciale, multi-dépôts, EDI fournisseurs, recouvrement Eloficash. Sage X3 et Sage 100 pour optimiser vos stocks.",
  alternates: {
    canonical: "/secteurs/negoce-distribution",
  },
};

export default function Page() {
  return <NegoceDistributionClient />;
}
