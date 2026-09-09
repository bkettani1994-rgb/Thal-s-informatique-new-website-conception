import type { Metadata } from "next";
import WebinaireSage100ExperienceClient from "./WebinaireSage100ExperienceClient";

export const metadata: Metadata = {
  title: "Compte-rendu : Webinaire Sage 100 Expérience",
  description:
    "Retour sur le webinaire du 9 septembre 2026 : nouvelle interface web et assistant IA embarqué de Sage 100 Expérience. Découvrez le compte-rendu.",
  alternates: {
    canonical: "/evenements/webinaire-sage-100-experience",
  },
};

export default function Page() {
  return <WebinaireSage100ExperienceClient />;
}
