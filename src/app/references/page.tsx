import type { Metadata } from "next";
import ReferencesClient from "./ReferencesClient";

export const metadata: Metadata = {
  title: "Nos Références ERP au Maroc et en Afrique",
  description:
    "500+ entreprises en Afrique et à l'international font confiance à Thalès Informatique depuis 30 ans. Découvrez nos clients, études de cas et témoignages ERP.",
  alternates: {
    canonical: "/references",
  },
};

export default function Page() {
  return <ReferencesClient />;
}
