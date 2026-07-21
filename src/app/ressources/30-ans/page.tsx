import type { Metadata } from "next";
import TrenteAnsClient from "./TrenteAnsClient";

export const metadata: Metadata = {
  title: "30 ans d'expertise : notre anniversaire",
  description:
    "Thalès Informatique fête 30 ans au service de la transformation digitale des entreprises au Maroc et en Afrique. Découvrez notre histoire et nos chiffres clés.",
  alternates: {
    canonical: "/ressources/30-ans",
  },
};

export default function Page() {
  return <TrenteAnsClient />;
}
