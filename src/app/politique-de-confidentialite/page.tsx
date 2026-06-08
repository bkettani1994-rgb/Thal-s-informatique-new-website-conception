"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const sections = [
  {
    title: "1. Introduction",
    body: "Thalès Informatique (« nous », « notre », « nos ») accorde une grande importance à la protection de vos données personnelles. La présente Politique de confidentialité décrit la manière dont nous collectons, utilisons, conservons et protégeons les informations que vous nous communiquez lorsque vous visitez notre site internet www.thales.ma ou utilisez nos services, conformément à la loi marocaine n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel.",
  },
  {
    title: "2. Données collectées",
    body: "Nous pouvons collecter les types de données suivants :\n\n• Données d'identification : nom, prénom, fonction, société\n• Données de contact : adresse e-mail, numéro de téléphone, adresse postale\n• Données de connexion : adresse IP, type de navigateur, pages consultées, durée de visite\n• Données transmises volontairement via nos formulaires (contact, demande de démonstration, inscription à un événement ou une newsletter)",
  },
  {
    title: "3. Finalités du traitement",
    body: "Vos données personnelles sont collectées et traitées pour les finalités suivantes :\n\n• Répondre à vos demandes d'information, de devis ou de démonstration\n• Vous fournir nos produits et services (intégration ERP, support, formation, infogérance)\n• Vous adresser des communications commerciales et des invitations à nos événements (sous réserve de votre consentement)\n• Améliorer la qualité de notre site et de nos services\n• Respecter nos obligations légales et réglementaires",
  },
  {
    title: "4. Base légale du traitement",
    body: "Le traitement de vos données repose selon les cas sur votre consentement, sur l'exécution d'un contrat ou de mesures précontractuelles, sur le respect d'une obligation légale, ou sur notre intérêt légitime à développer et promouvoir nos activités.",
  },
  {
    title: "5. Durée de conservation",
    body: "Vos données personnelles sont conservées pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, et conformément aux délais imposés par la législation en vigueur. Les données issues de formulaires de contact sont conservées au maximum 3 ans à compter de notre dernier échange, sauf obligation légale contraire.",
  },
  {
    title: "6. Partage des données",
    body: "Thalès Informatique ne vend ni ne loue vos données personnelles à des tiers. Vos données peuvent être communiquées à nos partenaires techniques (hébergeurs, éditeurs de solutions comme Sage, prestataires de messagerie) strictement dans le cadre de l'exécution de nos services, et toujours dans le respect de la confidentialité.",
  },
  {
    title: "7. Sécurité des données",
    body: "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées (contrôle d'accès, chiffrement, sauvegardes régulières, sensibilisation de nos équipes) afin de protéger vos données contre tout accès non autorisé, perte, altération ou divulgation.",
  },
  {
    title: "8. Cookies",
    body: "Notre site utilise des cookies destinés à améliorer votre expérience de navigation, à mesurer l'audience et, le cas échéant, à personnaliser certains contenus. Vous pouvez à tout moment configurer votre navigateur pour refuser les cookies ou être informé de leur dépôt.",
  },
  {
    title: "9. Vos droits",
    body: "Conformément à la loi 09-08 et à ses textes d'application, vous disposez d'un droit d'accès, de rectification, d'opposition et, dans certains cas, de suppression de vos données personnelles. Pour exercer ces droits, vous pouvez nous contacter à l'adresse contact@thales.ma ou par courrier à notre siège social. Vous disposez également du droit de saisir la Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP).",
  },
  {
    title: "10. Modifications de la politique",
    body: "Thalès Informatique se réserve le droit de modifier la présente Politique de confidentialité à tout moment, notamment pour se conformer à toute évolution légale, réglementaire ou technique. La version en vigueur est celle publiée sur cette page, avec mention de sa date de mise à jour.",
  },
  {
    title: "11. Contact",
    body: "Pour toute question relative à la présente Politique de confidentialité ou au traitement de vos données personnelles :\n\n📍 310 Rue Hadj Omar Riffi, Casablanca 20120, Maroc\n📞 05 22 54 87 80\n✉️ contact@thales.ma",
  },
];

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

export default function PolitiqueConfidentialitePage() {
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
              <span className="text-accent">Politique de confidentialité</span>
            </div>
            <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest border border-accent/30 rounded-full px-3 py-1 mb-4">
              Données personnelles
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Politique de confidentialité</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              La protection de vos données personnelles est une priorité pour Thalès Informatique. Découvrez comment nous les collectons, les utilisons et les protégeons.
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
                <p className="text-secondary leading-relaxed whitespace-pre-line">{section.body}</p>
              </div>
            </FadeIn>
          ))}

          <FadeIn>
            <div className="bg-bg-base border border-border rounded-2xl p-6 sm:p-8 text-center">
              <p className="text-secondary leading-relaxed mb-4">
                Une question sur la gestion de vos données personnelles ?
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
