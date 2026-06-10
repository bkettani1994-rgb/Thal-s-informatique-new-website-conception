import type { Metadata } from "next";
import AssistanceUtilisateursClient from "./AssistanceUtilisateursClient";

export const metadata: Metadata = {
  title: "Assistance Utilisateurs ERP & Hotline 24/7",
  description:
    "Hotline réactive depuis Casablanca : téléassistance AnyDesk, WhatsApp et email pour débloquer vos utilisateurs Sage X3 et Sage 100, avec des SLA garantis dès 1h.",
  alternates: {
    canonical: "/services/assistance-utilisateurs",
  },
};

export default function Page() {
  return <AssistanceUtilisateursClient />;
}
