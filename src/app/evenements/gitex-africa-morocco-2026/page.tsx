import type { Metadata } from "next";
import GitexAfricaMorocco2026Client from "./GitexAfricaMorocco2026Client";

export const metadata: Metadata = {
  title: "Gitex Africa Morocco 2026 : retour sur notre participation",
  description:
    "Compte-rendu de la participation de Thalès Informatique à Gitex Africa Morocco 2026 à Marrakech (07-09 avril) : démonstrations ERP Sage et rencontres avec les décideurs africains.",
  alternates: {
    canonical: "/evenements/gitex-africa-morocco-2026",
  },
};

export default function Page() {
  return <GitexAfricaMorocco2026Client />;
}
