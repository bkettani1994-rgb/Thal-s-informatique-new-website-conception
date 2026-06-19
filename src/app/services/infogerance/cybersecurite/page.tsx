import type { Metadata } from "next";
import CybersecuriteClient from "./CybersecuriteClient";

export const metadata: Metadata = {
  title: "Cybersécurité - Protection IT & Conformité",
  description:
    "Protégez vos systèmes contre les menaces : pare-feu avancé, EDR, audits de sécurité et sensibilisation des équipes avec Thalès Informatique.",
  alternates: {
    canonical: "/services/infogerance/cybersecurite",
  },
};

export default function Page() {
  return <CybersecuriteClient />;
}
