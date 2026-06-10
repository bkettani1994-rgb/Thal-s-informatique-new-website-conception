import type { Metadata } from "next";
import PaieRhClient from "./PaieRhClient";

export const metadata: Metadata = {
  title: "Paie & RH : bulletins, congés et carrières au Maroc",
  description:
    "Gestion complète paie et ressources humaines : bulletins de paie, congés, dossiers employés et déclarations CNSS, AMO, CIMR conformes au Code du Travail marocain.",
  alternates: {
    canonical: "/metiers/paie-rh",
  },
};

export default function Page() {
  return <PaieRhClient />;
}
