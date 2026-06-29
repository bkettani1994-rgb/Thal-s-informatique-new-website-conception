import type { Metadata } from "next";
import BTPClient from "./BTPClient";

export const metadata: Metadata = {
  title: "ERP BTP & Construction au Maroc et en Afrique : suivi de chantiers",
  description:
    "ERP dédié au BTP au Maroc et en Afrique : suivi budget/réalisé des chantiers, déboursés d'ouvrages, situations de travaux, gestion du parc matériel et paie chantier avec Sage X3 et Sage 100.",
  alternates: {
    canonical: "/secteurs/btp",
  },
};

export default function Page() {
  return <BTPClient />;
}
