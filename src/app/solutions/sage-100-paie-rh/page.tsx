import type { Metadata } from "next";
import Sage100PaieRhClient from "./Sage100PaieRhClient";

export const metadata: Metadata = {
  title: "Sage 100 Paie & RH : Logiciel de Paie Conforme au Maroc et en Afrique",
  description:
    "Sage 100 Paie & RH automatise vos bulletins de paie, déclarations CNSS/IR et gestion des congés. Solution déployée par Thalès Informatique, partenaire Sage à Casablanca.",
  alternates: {
    canonical: "/solutions/sage-100-paie-rh",
  },
};

export default function Page() {
  return <Sage100PaieRhClient />;
}
