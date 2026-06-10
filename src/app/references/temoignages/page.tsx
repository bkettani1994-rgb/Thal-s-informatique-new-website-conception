import type { Metadata } from "next";
import TemoignagesClient from "./TemoignagesClient";

export const metadata: Metadata = {
  title: "Témoignages Clients",
  description:
    "312 avis, 4.8/5 : découvrez les témoignages de nos clients sur leur transformation digitale avec Thalès Informatique et nos solutions ERP au Maroc.",
  alternates: {
    canonical: "/references/temoignages",
  },
};

export default function Page() {
  return <TemoignagesClient />;
}
