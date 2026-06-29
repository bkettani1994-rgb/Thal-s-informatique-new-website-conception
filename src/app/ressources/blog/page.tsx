import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog Décisionnel ERP & Transformation Digitale",
  description:
    "Articles, analyses et tendances sur l'ERP, la finance, les RH et la transformation digitale des entreprises en Afrique et à l'international, par les experts Thalès Informatique.",
  alternates: {
    canonical: "/ressources/blog",
  },
};

export default function Page() {
  return <BlogClient />;
}
