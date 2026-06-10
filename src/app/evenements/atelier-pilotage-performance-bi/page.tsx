import type { Metadata } from "next";
import AtelierPilotagePerformanceBiClient from "./AtelierPilotagePerformanceBiClient";

export const metadata: Metadata = {
  title: "Atelier Pilotage de la Performance BI",
  description:
    "Atelier pratique le 10 juillet 2026 à Casablanca : construisez votre tableau de bord BI avec nos consultants Sage et repartez avec une méthode applicable de suite.",
  alternates: {
    canonical: "/evenements/atelier-pilotage-performance-bi",
  },
};

export default function Page() {
  return <AtelierPilotagePerformanceBiClient />;
}
