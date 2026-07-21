import type { Metadata } from "next";
import SecteursClient from "./SecteursClient";

export const metadata: Metadata = {
  title: "Secteurs d'activité : ERP par industrie au Maroc et en Afrique",
  description:
    "Solutions ERP sur mesure pour l'industrie, le négoce, les services, le BTP et l'agroalimentaire au Maroc : Sage X3 et Sage 100. Découvrez notre expertise.",
  alternates: {
    canonical: "/secteurs",
  },
};

export default function Page() {
  return <SecteursClient />;
}
