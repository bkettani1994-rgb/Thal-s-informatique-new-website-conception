import type { Metadata } from "next";
import ReussirProjetErpClient from "./ReussirProjetErpClient";

export const metadata: Metadata = {
  title: "Comment réussir votre projet ERP en 6 étapes",
  description:
    "Cadrage, choix de Sage X3 ou Sage 100, équipe projet, paramétrage, formation et suivi post-démarrage : la méthode en 6 étapes de Thalès Informatique pour réussir votre projet ERP.",
  alternates: {
    canonical: "/ressources/blog/reussir-projet-erp",
  },
};

export default function Page() {
  return <ReussirProjetErpClient />;
}
