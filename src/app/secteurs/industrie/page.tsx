import type { Metadata } from "next";
import IndustrieClient from "./IndustrieClient";

export const metadata: Metadata = {
  title: "ERP Industrie au Maroc et en Afrique : GPAO & production",
  description:
    "ERP industriel au Maroc et en Afrique : ordonnancement GPAO, gestion des nomenclatures, stocks multi-dépôts, contrôle qualité et maintenance avec Sage X3 et DimoMaint GMAO. 30 ans d'expertise.",
  alternates: {
    canonical: "/secteurs/industrie",
  },
};

export default function Page() {
  return <IndustrieClient />;
}
