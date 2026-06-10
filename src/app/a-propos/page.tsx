import type { Metadata } from "next";
import AProposClient from "./AProposClient";

export const metadata: Metadata = {
  title: "À Propos de Thalès Informatique",
  description:
    "Plus de 30 ans d'expertise ERP au Maroc : découvrez l'histoire, les valeurs, l'équipe dirigeante et les bureaux de Thalès Informatique à Casablanca.",
  alternates: {
    canonical: "/a-propos",
  },
};

export default function Page() {
  return <AProposClient />;
}
