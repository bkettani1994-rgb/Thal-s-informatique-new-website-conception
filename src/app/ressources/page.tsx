import type { Metadata } from "next";
import RessourcesClient from "./RessourcesClient";

export const metadata: Metadata = {
  title: "Ressources ERP : Blog, Guides, Actualités & FAQ",
  description:
    "Explorez nos ressources ERP au Maroc : blog décisionnel, guides pratiques, actualités réglementaires (CNSS, TVA, IS) et FAQ pour réussir votre projet Sage.",
  alternates: {
    canonical: "/ressources",
  },
};

export default function Page() {
  return <RessourcesClient />;
}
