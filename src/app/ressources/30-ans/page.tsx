import type { Metadata } from "next";
import TrenteAnsClient from "./TrenteAnsClient";

export const metadata: Metadata = {
  title: "30 ans d'expertise : notre anniversaire",
  description:
    "Thalès Informatique fête 30 ans d'expertise au service de la transformation digitale des entreprises en Afrique et à l'international. Découvrez notre histoire, nos chiffres clés et nos ambitions.",
  alternates: {
    canonical: "/ressources/30-ans",
  },
};

export default function Page() {
  return <TrenteAnsClient />;
}
