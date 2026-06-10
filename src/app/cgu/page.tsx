import type { Metadata } from "next";
import CGUClient from "./CGUClient";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation",
  description:
    "Consultez les Conditions Générales d'Utilisation du site Thalès Informatique : règles d'accès, services proposés et modalités d'utilisation.",
  alternates: {
    canonical: "/cgu",
  },
};

export default function Page() {
  return <CGUClient />;
}
