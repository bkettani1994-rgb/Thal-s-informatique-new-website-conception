"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const sections = [
  {
    title: "1. Présentation de l'éditeur du site",
    body: "Le présent site www.thales.ma est édité par :\n\n**Thalès Informatique**\nSociété spécialisée dans l'intégration de solutions de gestion (ERP, CRM, RH) et l'accompagnement à la transformation digitale des entreprises\nSiège social : 310 Rue Hadj Omar Riffi, Casablanca 20120, Maroc\nTéléphone : 05 22 54 87 80\nE-mail : contact@thales.ma\nForme juridique : Société à responsabilité limitée (SARL)\nRegistre du Commerce : Casablanca\n\nDirecteur de la publication : La Direction Générale de Thalès Informatique.",
  },
  {
    title: "2. Hébergement du site",
    body: "Le site www.thales.ma est hébergé par un prestataire d'hébergement professionnel garantissant la disponibilité, la sécurité et la sauvegarde des données du site. Les coordonnées de l'hébergeur peuvent être communiquées sur simple demande adressée à contact@thales.ma.",
  },
  {
    title: "3. Conception et développement",
    body: "La conception, le développement et la maintenance technique du site sont assurés par les équipes de Thalès Informatique et/ou par des prestataires partenaires intervenant sous sa responsabilité.",
  },
  {
    title: "4. Propriété intellectuelle",
    body: "L'ensemble des éléments composant ce site (textes, images, logos, graphismes, icônes, vidéos, structure, charte graphique, marques, etc.) est la propriété exclusive de Thalès Informatique ou de ses partenaires, et est protégé par les lois marocaines et internationales relatives à la propriété intellectuelle.\n\nToute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou partie des éléments du site, par quelque procédé que ce soit, sans l'autorisation écrite préalable de Thalès Informatique, est strictement interdite et serait susceptible de constituer une contrefaçon.\n\nLes marques et logos des éditeurs partenaires (Sage, DimoMaint, Eloficash, Factorial, etc.) cités sur ce site sont la propriété de leurs titulaires respectifs.",
  },
  {
    title: "5. Conditions d'utilisation du site",
    body: "L'utilisation du site www.thales.ma implique l'acceptation pleine et entière des présentes mentions légales. Thalès Informatique s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site, mais ne saurait être tenue responsable des erreurs, omissions ou de l'absence de disponibilité des informations et services.",
  },
  {
    title: "6. Liens hypertextes",
    body: "Le site peut contenir des liens hypertextes vers d'autres sites internet ou ressources. Thalès Informatique n'exerce aucun contrôle sur ces sites tiers et décline toute responsabilité quant à leur contenu, leur disponibilité ou les pratiques qu'ils mettent en œuvre, notamment en matière de protection des données personnelles.",
  },
  {
    title: "7. Limitation de responsabilité",
    body: "Thalès Informatique ne pourra être tenue responsable des dommages directs ou indirects résultant de l'accès au site, de son utilisation, ou de l'impossibilité d'y accéder, notamment en cas d'interruption, de bug, de virus informatique, de panne technique ou de toute autre incident indépendant de sa volonté.",
  },
  {
    title: "8. Droit applicable et juridiction compétente",
    body: "Les présentes mentions légales sont soumises au droit marocain. En cas de litige et à défaut de résolution amiable, les tribunaux compétents de Casablanca seront seuls compétents.",
  },
  {
    title: "9. Contact",
    body: "Pour toute question relative aux présentes mentions légales :\n\n📍 310 Rue Hadj Omar Riffi, Casablanca 20120\n📞 05 22 54 87 80\n✉️ contact@thales.ma",
  },
];

function BodyText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\n)/g);
  return (
    <p className="text-secondary leading-relaxed">
      {parts.map((part, i) => {
        if (part === "\n") return <br key={i} />;
        if (part.startsWith("**") && part.endsWith("**"))
          return <strong key={i} className="font-semibold text-primary">{part.slice(2, -2)}</strong>;
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

export default function MentionsLegalesClient() {
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
              <span className="text-accent">Mentions légales</span>
            </div>
            <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest border border-accent/30 rounded-full px-3 py-1 mb-4">
              Informations légales
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Mentions légales</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Informations légales relatives à l'éditeur, l'hébergement et l'utilisation du site Thalès Informatique.
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
                Une question concernant ces mentions légales ?
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
