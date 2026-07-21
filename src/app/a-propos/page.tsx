import type { Metadata } from "next";
import AProposClient from "./AProposClient";

export const metadata: Metadata = {
  title: "À Propos",
  description:
    "30 ans d'expertise ERP au Maroc et en Afrique : histoire, valeurs, équipe dirigeante et bureaux de Thalès Informatique à Casablanca. Découvrez-nous.",
  alternates: {
    canonical: "/a-propos",
  },
};

export default function Page() {
  return <AProposClient />;
}
