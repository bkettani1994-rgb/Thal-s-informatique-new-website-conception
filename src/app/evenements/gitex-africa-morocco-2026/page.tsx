import type { Metadata } from "next";
import GitexAfricaMorocco2026Client from "./GitexAfricaMorocco2026Client";

export const metadata: Metadata = {
  title: "Gitex Africa Morocco 2026 : retour sur notre participation",
  description:
    "Retour sur Gitex Africa Morocco 2026 à Marrakech : démonstrations ERP Sage et rencontres avec les décideurs africains par Thalès Informatique. Découvrez.",
  alternates: {
    canonical: "/evenements/gitex-africa-morocco-2026",
  },
};

export default function Page() {
  return <GitexAfricaMorocco2026Client />;
}
