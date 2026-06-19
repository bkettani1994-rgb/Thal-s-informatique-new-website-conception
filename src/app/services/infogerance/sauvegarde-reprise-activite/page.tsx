import type { Metadata } from "next";
import SauvegardeRepriseActiviteClient from "./SauvegardeRepriseActiviteClient";

export const metadata: Metadata = {
  title: "Sauvegarde & Reprise d'Activité - Continuité IT",
  description:
    "Sauvegardes automatisées, plans de reprise d'activité (PRA) et tests de restauration pour garantir la continuité de vos données avec Thalès Informatique.",
  alternates: {
    canonical: "/services/infogerance/sauvegarde-reprise-activite",
  },
};

export default function Page() {
  return <SauvegardeRepriseActiviteClient />;
}
