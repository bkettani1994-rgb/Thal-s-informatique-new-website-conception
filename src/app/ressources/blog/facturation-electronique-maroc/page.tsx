import type { Metadata } from "next";
import FacturationElectroniqueMarocClient from "./FacturationElectroniqueMarocClient";

export const metadata: Metadata = {
  title: "Facturation électronique au Maroc et en Afrique : comment anticiper",
  description:
    "Facturation électronique au Maroc : enjeux DGI, bénéfices et mise en conformité avec Sage 100, Sage X3 et Thalès Informatique. Découvrez comment anticiper.",
  alternates: {
    canonical: "/ressources/blog/facturation-electronique-maroc",
  },
};

export default function Page() {
  return <FacturationElectroniqueMarocClient />;
}
