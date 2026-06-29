import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "FAQ ERP : Vos Questions sur Sage et nos Services",
  description:
    "Toutes les réponses sur les projets ERP au Maroc et en Afrique : délais, coûts, migration, conformité légale, support, maintenance et formation Sage X3 et Sage 100.",
  alternates: {
    canonical: "/ressources/faq",
  },
};

export default function Page() {
  return <FaqClient />;
}
