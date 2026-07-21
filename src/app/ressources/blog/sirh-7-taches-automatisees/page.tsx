import type { Metadata } from "next";
import Sirh7TachesAutomatiseesClient from "./Sirh7TachesAutomatiseesClient";

export const metadata: Metadata = {
  title: "SIRH : 7 tâches RH à automatiser dès cette année",
  description:
    "Congés, notes de frais, pointage, recrutement, évaluations : 7 processus RH à automatiser avec un SIRH comme Factorial. Découvrez comment gagner du temps.",
  alternates: {
    canonical: "/ressources/blog/sirh-7-taches-automatisees",
  },
};

export default function Page() {
  return <Sirh7TachesAutomatiseesClient />;
}
