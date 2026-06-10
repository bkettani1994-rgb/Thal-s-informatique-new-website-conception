import type { Metadata } from "next";
import InfogeranceClient from "./InfogeranceClient";

export const metadata: Metadata = {
  title: "Infogérance & Gestion Externalisée de votre IT",
  description:
    "Confiez la gestion de votre infrastructure à Thalès Informatique : supervision proactive 24/7, sécurité, sauvegardes, cloud et hotline dédiée pour les entreprises au Maroc.",
  alternates: {
    canonical: "/services/infogerance",
  },
};

export default function Page() {
  return <InfogeranceClient />;
}
