import type { Metadata } from "next";
import ForumErpCasablancaClient from "./ForumErpCasablancaClient";

export const metadata: Metadata = {
  title: "Forum ERP Casablanca : l'avenir de la gestion d'entreprise",
  description:
    "Le 25 juin 2026 à l'Hôtel Sofitel Casablanca : conférences, tables rondes et démos live Sage X3 et Sage 100 pour dirigeants marocains. 250 places, inscription gratuite.",
  alternates: {
    canonical: "/evenements/forum-erp-casablanca",
  },
};

export default function Page() {
  return <ForumErpCasablancaClient />;
}
