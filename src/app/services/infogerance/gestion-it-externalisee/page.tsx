import type { Metadata } from "next";
import GestionItExternaliseeClient from "./GestionItExternaliseeClient";

export const metadata: Metadata = {
  title: "Gestion IT Externalisée - Infogérance Complète au Maroc",
  description:
    "Gestion complète de votre infrastructure IT : postes, serveurs, réseau et cloud, supervisés et maintenus au quotidien par Thalès Informatique à Casablanca.",
  alternates: {
    canonical: "/services/infogerance/gestion-it-externalisee",
  },
};

export default function Page() {
  return <GestionItExternaliseeClient />;
}
