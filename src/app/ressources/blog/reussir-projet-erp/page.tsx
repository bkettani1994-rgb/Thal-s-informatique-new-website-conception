import type { Metadata } from "next";
import ReussirProjetErpClient from "./ReussirProjetErpClient";

export const metadata: Metadata = {
  title: "Comment réussir votre projet ERP en 6 étapes",
  description:
    "Cadrage, choix de Sage X3 ou Sage 100, équipe, paramétrage et formation : la méthode en 6 étapes pour réussir votre projet ERP. Découvrez le guide Thalès.",
  alternates: {
    canonical: "/ressources/blog/reussir-projet-erp",
  },
};

export default function Page() {
  return <ReussirProjetErpClient />;
}
