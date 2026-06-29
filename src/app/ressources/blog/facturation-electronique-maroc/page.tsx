import type { Metadata } from "next";
import FacturationElectroniqueMarocClient from "./FacturationElectroniqueMarocClient";

export const metadata: Metadata = {
  title: "Facturation électronique au Maroc et en Afrique : comment anticiper",
  description:
    "Facturation électronique obligatoire au Maroc : enjeux DGI, bénéfices, risques d'un retard et comment Sage 100, Sage X3 et Thalès Informatique facilitent votre mise en conformité.",
  alternates: {
    canonical: "/ressources/blog/facturation-electronique-maroc",
  },
};

export default function Page() {
  return <FacturationElectroniqueMarocClient />;
}
