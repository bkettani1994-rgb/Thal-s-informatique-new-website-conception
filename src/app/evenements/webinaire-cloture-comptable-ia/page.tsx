import type { Metadata } from "next";
import WebinaireClotureComptableIaClient from "./WebinaireClotureComptableIaClient";

export const metadata: Metadata = {
  title: "Webinaire : optimiser sa clôture comptable avec l'IA",
  description:
    "Le 18 juin 2026 sur Zoom : découvrez comment l'IA accélère la clôture comptable grâce à une démo live sur Sage. Automatisation, détection d'anomalies, 120 places gratuites.",
  alternates: {
    canonical: "/evenements/webinaire-cloture-comptable-ia",
  },
};

export default function Page() {
  return <WebinaireClotureComptableIaClient />;
}
