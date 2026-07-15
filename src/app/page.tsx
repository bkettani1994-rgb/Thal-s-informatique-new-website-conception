import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Sectors from "@/components/sections/Sectors";
import KeyStats from "@/components/sections/KeyStats";
import Solutions from "@/components/sections/Solutions";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Awards from "@/components/sections/Awards";
import Events from "@/components/sections/Events";
import Blog from "@/components/sections/Blog";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/ui/Footer";

const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Thalès Informatique | ERP, RH, Finance & Transformation Digitale au Maroc",
  description:
    "Depuis plus de 30 ans, Thalès Informatique accompagne les entreprises au Maroc avec des solutions ERP Sage X3, Sage FRP 1000, RH, Finance, GMAO et des services de transformation digitale.",
  alternates: {
    canonical: "https://thales.ma/",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://thales.ma/",
    siteName: "Thalès Informatique",
    title: "Thalès Informatique | ERP, RH, Finance & Transformation Digitale au Maroc",
    description:
      "Depuis plus de 30 ans, Thalès Informatique accompagne les entreprises au Maroc avec des solutions ERP Sage X3, Sage FRP 1000, RH, Finance, GMAO et des services de transformation digitale.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thalès Informatique | ERP, RH, Finance & Transformation Digitale au Maroc",
    description:
      "Depuis plus de 30 ans, Thalès Informatique accompagne les entreprises au Maroc avec des solutions ERP Sage X3, Sage FRP 1000, RH, Finance, GMAO et des services de transformation digitale.",
    images: [OG_IMAGE],
  },
};

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <ProblemSolution />
      <Sectors />
      <KeyStats />
      <Solutions />
      <Process />
      <Testimonials />
      <Awards />
      <Events />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}
