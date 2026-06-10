import type { Metadata } from "next";
import PaieClient from "./PaieClient";

export const metadata: Metadata = {
  title: "Moteur de Paie : barème IR & cotisations CNSS Maroc",
  description:
    "Moteur de calcul de paie conforme au Code du Travail marocain : barème IR progressif, cotisations CNSS/AMO, heures supplémentaires et régularisation annuelle.",
  alternates: {
    canonical: "/metiers/paie",
  },
};

export default function Page() {
  return <PaieClient />;
}
