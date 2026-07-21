import type { Metadata } from "next";
import ClientsClient from "./ClientsClient";

export const metadata: Metadata = {
  title: "Nos Clients",
  description:
    "Plus de 500 entreprises au Maroc et en Afrique font confiance à Thalès Informatique : banques, industrie, distribution, BTP et secteur public. Découvrez-les.",
  alternates: {
    canonical: "/references/clients",
  },
};

export default function Page() {
  return <ClientsClient />;
}
