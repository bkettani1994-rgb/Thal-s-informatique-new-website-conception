import type { Metadata } from "next";
import StrategieRhSirhCroissanceClient from "./StrategieRhSirhCroissanceClient";

export const metadata: Metadata = {
  title: "Conférence Stratégie RH et SIRH pour la croissance",
  description:
    "Conférence RH à Casablanca avec Sage, Factorial et Héliolys : digitalisation de la paie et retours d'expérience d'entreprises. Découvrez le compte-rendu.",
  alternates: {
    canonical: "/evenements/strategie-rh-sirh-croissance",
  },
};

export default function Page() {
  return <StrategieRhSirhCroissanceClient />;
}
