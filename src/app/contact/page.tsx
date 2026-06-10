import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Thalès Informatique à Casablanca pour vos projets ERP Sage X3, Sage 100, GMAO ou RH. Réponse sous 24h, devis et démonstration gratuits.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return <ContactClient />;
}
