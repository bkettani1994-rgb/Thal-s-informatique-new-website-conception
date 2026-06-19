import type { Metadata } from "next";
import ManagedItServicesClient from "./ManagedItServicesClient";

export const metadata: Metadata = {
  title: "Managed IT Services - Infogérance Complète au Maroc",
  description:
    "Gestion complète de votre infrastructure IT : postes, serveurs, réseau et cloud, supervisés et maintenus au quotidien par Thalès Informatique à Casablanca.",
  alternates: {
    canonical: "/services/infogerance/managed-it-services",
  },
};

export default function Page() {
  return <ManagedItServicesClient />;
}
