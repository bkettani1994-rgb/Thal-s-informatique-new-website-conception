"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const sections = [
  {
    title: "1. Objet",
    body: "Les présentes Conditions Générales d'Utilisation (« CGU ») ont pour objet de définir les modalités et conditions dans lesquelles les utilisateurs (« vous », « l'utilisateur ») peuvent accéder et utiliser le site internet www.thales.ma édité par Thalès Informatique (« nous », « le site »). En accédant au site, vous acceptez sans réserve les présentes CGU.",
  },
  {
    title: "2. Accès au site",
    body: "Le site est accessible gratuitement à tout utilisateur disposant d'un accès à internet. Tous les frais nécessaires pour accéder au site (matériel informatique, connexion internet, etc.) sont à la charge exclusive de l'utilisateur. Thalès Informatique met tout en œuvre pour assurer un accès continu au site, mais ne saurait être tenue responsable de toute interruption, suspension ou indisponibilité, notamment pour des raisons de maintenance.",
  },
  {
    title: "3. Services proposés",
    body: "Le site a vocation à présenter les solutions, services et actualités de Thalès Informatique (intégration de solutions ERP, CRM et RH, audit & conseil, formation, support & maintenance, infogérance), ainsi qu'à permettre aux visiteurs de :\n\n• Prendre contact avec nos équipes\n• Demander une démonstration ou un devis\n• S'informer via nos articles, guides et ressources\n• S'inscrire à nos événements et webinaires\n\nLes informations diffusées sur le site sont fournies à titre indicatif et ne constituent pas un engagement contractuel de la part de Thalès Informatique.",
  },
  {
    title: "4. Obligations de l'utilisateur",
    body: "En utilisant le site, vous vous engagez à :\n\n• Fournir des informations exactes, à jour et complètes lors du remplissage des formulaires\n• Ne pas utiliser le site à des fins illicites, frauduleuses ou contraires à l'ordre public\n• Ne pas porter atteinte au bon fonctionnement du site (intrusion, surcharge, diffusion de virus, etc.)\n• Respecter les droits de propriété intellectuelle de Thalès Informatique et des tiers",
  },
  {
    title: "5. Comptes et formulaires",
    body: "Certaines fonctionnalités du site (formulaires de contact, demande de démonstration, inscription à un événement ou à une newsletter) nécessitent la communication de données personnelles. Ces données sont traitées conformément à notre [Politique de confidentialité](/politique-de-confidentialite). Vous êtes responsable de l'exactitude des informations transmises.",
  },
  {
    title: "6. Propriété intellectuelle",
    body: "Le contenu du site (textes, visuels, logos, vidéos, structure, charte graphique) est protégé par le droit de la propriété intellectuelle et demeure la propriété exclusive de Thalès Informatique ou de ses partenaires. Toute utilisation non autorisée est susceptible d'engager la responsabilité de son auteur. Pour plus de détails, consultez nos [Mentions légales](/mentions-legales).",
  },
  {
    title: "7. Disponibilité et évolution du site",
    body: "Thalès Informatique se réserve le droit, à tout moment et sans préavis, de modifier, suspendre ou interrompre tout ou partie du site, ainsi que d'en faire évoluer le contenu, les fonctionnalités ou la présentation, sans que cela ne puisse engager sa responsabilité.",
  },
  {
    title: "8. Liens vers des sites tiers",
    body: "Le site peut comporter des liens vers des sites internet tiers (partenaires, presse, réseaux sociaux). Ces liens sont fournis pour votre commodité uniquement. Thalès Informatique n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu et à leur fonctionnement.",
  },
  {
    title: "9. Responsabilité",
    body: "Thalès Informatique met tout en œuvre pour fournir des informations aussi précises que possible. Toutefois, elle ne saurait être tenue responsable des omissions, inexactitudes ou carences dans la mise à jour, qu'elles soient de son fait ou du fait de tiers partenaires. L'utilisateur reconnaît utiliser le site sous sa propre responsabilité.",
  },
  {
    title: "10. Modification des CGU",
    body: "Thalès Informatique se réserve le droit de modifier à tout moment les présentes CGU, notamment afin de les adapter aux évolutions du site et de la réglementation en vigueur. La version applicable est celle publiée sur cette page, accompagnée de sa date de mise à jour. Il est recommandé de la consulter régulièrement.",
  },
  {
    title: "11. Droit applicable et litiges",
    body: "Les présentes CGU sont régies par le droit marocain. En cas de différend relatif à leur interprétation ou à leur exécution, les parties s'efforceront de trouver une solution amiable. À défaut d'accord, les tribunaux compétents de Casablanca seront seuls compétents.",
  },
  {
    title: "12. Contact",
    body: "Pour toute question relative aux présentes Conditions Générales d'Utilisation :\n\n📍 310 Rue Hadj Omar Riffi, Casablanca 20120\n📞 05 22 54 87 80\n✉️ contact@thales.ma",
  },
];

function BodyText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|\n)/g);
  return (
    <p className="text-secondary leading-relaxed whitespace-pre-line">
      {parts.map((part, i) => {
        if (part === "\n") return <br key={i} />;
        if (part.startsWith("**") && part.endsWith("**"))
          return <strong key={i} className="font-semibold text-primary">{part.slice(2, -2)}</strong>;
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link)
          return <Link key={i} href={link[2]} className="text-cta underline underline-offset-2 hover:text-blue-700">{link[1]}</Link>;
        return <span key={i}>{part}</span>;
      })}
    </p>
  );
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function CGUPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <main className="overflow-x-hidden bg-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary" ref={heroRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <span className="text-accent">CGU</span>
            </div>
            <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest border border-accent/30 rounded-full px-3 py-1 mb-4">
              Conditions générales
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Conditions Générales d&apos;Utilisation</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Les règles d&apos;accès et d&apos;utilisation du site internet de Thalès Informatique.
            </p>
            <p className="text-sm text-white/40 mt-4">Dernière mise à jour : Juin 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {sections.map((section, i) => (
            <FadeIn key={section.title} delay={i * 0.04}>
              <div className="border-b border-border pb-8 last:border-b-0">
                <h2 className="text-xl font-bold text-primary mb-3">{section.title}</h2>
                <BodyText text={section.body} />
              </div>
            </FadeIn>
          ))}

          <FadeIn>
            <div className="bg-bg-base border border-border rounded-2xl p-6 sm:p-8 text-center">
              <p className="text-secondary leading-relaxed mb-4">
                Une question concernant ces conditions d&apos;utilisation ?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl text-white bg-cta hover:bg-blue-700 transition-colors duration-200 shadow-sm"
              >
                Contactez-nous
                <ChevronRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
