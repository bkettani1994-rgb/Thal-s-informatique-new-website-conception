import type { Metadata } from "next";
import WebinaireClotureComptableIaClient from "./WebinaireClotureComptableIaClient";

export const metadata: Metadata = {
  title: "Webinaire : optimiser sa clôture comptable avec l'IA",
  description:
    "Le 18 juin 2026 sur Zoom : comment l'IA accélère la clôture comptable, démo live sur Sage et détection d'anomalies. 120 places gratuites. Inscrivez-vous.",
  alternates: {
    canonical: "/evenements/webinaire-cloture-comptable-ia",
  },
};

export default function Page() {
  return <WebinaireClotureComptableIaClient />;
}
