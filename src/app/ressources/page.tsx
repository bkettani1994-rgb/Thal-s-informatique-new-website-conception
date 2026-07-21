import type { Metadata } from "next";
import RessourcesClient from "./RessourcesClient";

export const metadata: Metadata = {
  title: "Ressources ERP : Blog, Guides, Actualités & FAQ",
  description:
    "Blog, guides, actualités et FAQ ERP au Maroc et en Afrique : finance, RH, production et transformation digitale. Découvrez les ressources Thalès.",
  alternates: {
    canonical: "/ressources",
  },
};

export default function Page() {
  return <RessourcesClient />;
}
