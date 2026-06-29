import type { Metadata } from "next";
import ClientsClient from "./ClientsClient";

export const metadata: Metadata = {
  title: "Nos Clients",
  description:
    "Découvrez les 500+ entreprises en Afrique et à l'international qui font confiance à Thalès Informatique : banques, industrie, distribution, BTP et secteur public.",
  alternates: {
    canonical: "/references/clients",
  },
};

export default function Page() {
  return <ClientsClient />;
}
