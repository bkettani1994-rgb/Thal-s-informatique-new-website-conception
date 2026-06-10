import type { Metadata } from "next";
import MentionsLegalesClient from "./MentionsLegalesClient";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site Thalès Informatique : informations sur l'éditeur, l'hébergement, la propriété intellectuelle et les conditions d'utilisation.",
  alternates: {
    canonical: "/mentions-legales",
  },
};

export default function Page() {
  return <MentionsLegalesClient />;
}
