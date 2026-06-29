import type { Metadata } from "next";
import ExpertiseComptableClient from "./ExpertiseComptableClient";

export const metadata: Metadata = {
  title: "Logiciel Expertise Comptable pour cabinets au Maroc et en Afrique",
  description:
    "Solution multi-dossiers pour cabinets d'expertise comptable marocains : revue analytique, collaboration d'équipe, archivage et facturation conformes à l'OEC.",
  alternates: {
    canonical: "/metiers/expertise-comptable",
  },
};

export default function Page() {
  return <ExpertiseComptableClient />;
}
