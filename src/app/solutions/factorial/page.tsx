import type { Metadata } from "next";
import FactorialClient from "./FactorialClient";

export const metadata: Metadata = {
  title: "Factorial : SIRH Cloud & Espace Collaborateur RH",
  description:
    "Factorial centralise congés, paie, recrutement et formations dans un SIRH Cloud accessible partout. Déploiement et formation par Thalès Informatique au Maroc et en Afrique.",
  alternates: {
    canonical: "/solutions/factorial",
  },
};

export default function Page() {
  return <FactorialClient />;
}
