import type { Metadata } from "next";
import WebinaireSage100ExperienceClient from "./WebinaireSage100ExperienceClient";

export const metadata: Metadata = {
  title: "Webinaire : Sage 100 Expérience, votre solution réinventée",
  description:
    "Le 5 août 2026 en ligne : découvrez la nouvelle interface web et l'assistant IA embarqué de Sage 100 Expérience. Inscription gratuite, places limitées.",
  alternates: {
    canonical: "/evenements/webinaire-sage-100-experience",
  },
};

export default function Page() {
  return <WebinaireSage100ExperienceClient />;
}
