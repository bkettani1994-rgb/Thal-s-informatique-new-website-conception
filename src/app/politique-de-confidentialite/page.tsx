import type { Metadata } from "next";
import PolitiqueConfidentialiteClient from "./PolitiqueConfidentialiteClient";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description:
    "Découvrez comment Thalès Informatique collecte, utilise et protège vos données personnelles, conformément à la loi marocaine 09-08 sur la confidentialité.",
  alternates: {
    canonical: "/politique-de-confidentialite",
  },
};

export default function Page() {
  return <PolitiqueConfidentialiteClient />;
}
