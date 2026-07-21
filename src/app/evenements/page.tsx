import type { Metadata } from "next";
import EvenementsClient from "./EvenementsClient";

export const metadata: Metadata = {
  title: "Événements & Webinaires ERP au Maroc et en Afrique",
  description:
    "Salons, conférences, webinaires et ateliers Thalès Informatique sur l'ERP Sage, le SIRH et l'IA. Consultez l'agenda et inscrivez-vous à nos événements.",
  alternates: {
    canonical: "/evenements",
  },
};

export default function Page() {
  return <EvenementsClient />;
}
