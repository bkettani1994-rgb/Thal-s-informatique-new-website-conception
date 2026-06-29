import type { Metadata } from "next";
import Sage100Client from "./Sage100Client";

export const metadata: Metadata = {
  title: "Sage 100 : ERP de Gestion pour PME au Maroc et en Afrique",
  description:
    "Sage 100 digitalise la gestion de votre PME : comptabilité, commercial, paie, stocks et CRM. Plus de 300 PME en Afrique et à l'international accompagnées par Thalès Informatique.",
  alternates: {
    canonical: "/solutions/sage-100",
  },
};

export default function Page() {
  return <Sage100Client />;
}
