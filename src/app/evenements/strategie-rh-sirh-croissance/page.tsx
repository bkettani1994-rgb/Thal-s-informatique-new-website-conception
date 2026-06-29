import type { Metadata } from "next";
import StrategieRhSirhCroissanceClient from "./StrategieRhSirhCroissanceClient";

export const metadata: Metadata = {
  title: "Conférence Stratégie RH et SIRH pour la croissance",
  description:
    "Compte-rendu de la conférence du 13 mai 2026 à Casablanca, avec Sage, Factorial et Héliolys : enjeux RH, digitalisation de la paie et retours d'expérience d'entreprises en Afrique et à l'international.",
  alternates: {
    canonical: "/evenements/strategie-rh-sirh-croissance",
  },
};

export default function Page() {
  return <StrategieRhSirhCroissanceClient />;
}
