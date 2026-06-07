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
