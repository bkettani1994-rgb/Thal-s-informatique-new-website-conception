import type { Metadata } from "next";
import SecteursClient from "./SecteursClient";

export const metadata: Metadata = {
  title: "Secteurs d'activité : ERP par industrie au Maroc et en Afrique",
  description:
    "Découvrez nos solutions ERP sur mesure pour l'industrie, le négoce, les services, le BTP et l'agroalimentaire au Maroc et en Afrique. 30 ans d'expertise sectorielle avec Sage X3 et Sage 100.",
  alternates: {
    canonical: "/secteurs",
  },
};

export default function Page() {
  return <SecteursClient />;
}
