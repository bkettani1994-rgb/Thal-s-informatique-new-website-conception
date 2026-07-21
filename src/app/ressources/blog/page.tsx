import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog Décisionnel ERP & Transformation Digitale",
  description:
    "Articles, analyses et tendances ERP, finance, RH et transformation digitale au Maroc et en Afrique, par les experts Thalès Informatique. Découvrez le blog.",
  alternates: {
    canonical: "/ressources/blog",
  },
};

export default function Page() {
  return <BlogClient />;
}
