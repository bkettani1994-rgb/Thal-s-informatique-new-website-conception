"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ChevronDown, MessageCircle } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

type FAQItem = { q: string; a: string };

const faqGroups: { label: string; items: FAQItem[] }[] = [
  {
    label: "ERP & Projet",
    items: [
      {
        q: "Combien de temps dure un projet ERP ?",
        a: "Un projet ERP avec Thalès Informatique dure en moyenne de 3 à 6 mois selon la taille de l'entreprise et la complexité des processus. Nous suivons une méthodologie en 5 phases : cadrage, paramétrage, tests, formation et démarrage.",
      },
      {
        q: "Quel est le coût d'un ERP ?",
        a: "Le coût dépend de la solution choisie (Sage X3, Sage 100), du nombre d'utilisateurs et des modules. Nous proposons des offres adaptées aux PME à partir de 150 000 MAD et aux grandes entreprises sur devis. Contactez-nous pour un chiffrage personnalisé.",
      },
      {
        q: "Peut-on migrer depuis un autre ERP ?",
        a: "Oui, Thalès Informatique dispose d'une équipe spécialisée en migration de données depuis tous les systèmes courants (Ciel, Sage ancienne version, ERP maison, Excel). La migration est sécurisée et testée avant le démarrage.",
      },
      {
        q: "L'ERP est-il conforme à la législation marocaine ?",
        a: "Absolument. Nos solutions Sage sont préconfigurées pour le Maroc : plan comptable CGNC, IR, IS, TVA, CNSS, AMO, CIMR. Les mises à jour légales (loi de finances) sont intégrées automatiquement.",
      },
      {
        q: "Proposez-vous une solution Cloud ?",
        a: "Oui, nous proposons Sage X3 et Sage 100 en mode Cloud hébergé au Maroc (datacenter Casablanca) ou en SaaS. L'accès est sécurisé, les sauvegardes automatiques, et la disponibilité garantie à 99.5%.",
      },
    ],
  },
  {
    label: "Support & Maintenance",
    items: [
      {
        q: "Quelles sont vos heures de support ?",
        a: "Notre hotline est disponible du lundi au vendredi de 8h30 à 17h30 (+212 5 22 54 87 80). Pour les contrats Premium, nous assurons une astreinte 24h/24 et 7j/7. WhatsApp disponible pour les urgences : +212 6 61 16 83 54.",
      },
      {
        q: "Comment soumettre un ticket de support ?",
        a: "Via notre portail client en ligne, par email (hotline@thales.ma) ou par téléphone. Chaque ticket reçoit un numéro de suivi et vous êtes notifié à chaque étape de la résolution.",
      },
      {
        q: "Quelle est la durée d'intervention en cas de blocage ?",
        a: "Selon votre contrat : Essentiel (48h), Business (4h), Premium (1h). En cas de blocage critique impactant la production, nous priorisons l'intervention quelle que soit la formule.",
      },
      {
        q: "Les mises à jour légales sont-elles incluses ?",
        a: "Oui, toutes les mises à jour légales (loi de finances, CNSS, AMO, TVA) sont incluses dans tous nos contrats de maintenance, sans surcoût.",
      },
    ],
  },
  {
    label: "Formation",
    items: [
      {
        q: "Les formations sont-elles certifiantes ?",
        a: "Nos formations sont dispensées par des formateurs certifiés Sage. À l'issue de chaque formation, vos collaborateurs reçoivent une attestation officielle Thalès Informatique reconnue par Sage Maroc.",
      },
      {
        q: "Peut-on former les équipes après le démarrage ?",
        a: "Absolument. Nous proposons des formations de perfectionnement, des formations pour les nouveaux arrivants et des ateliers thématiques (ex : clôture annuelle, déclarations CNSS) tout au long de l'année.",
      },
      {
        q: "Quel est le format des formations ?",
        a: "Présentiel dans vos locaux ou dans nos salles de formation à Casablanca, classe virtuelle via Teams/Zoom, ou e-learning à votre rythme. Nous adaptons le format à votre organisation.",
      },
    ],
  },
  {
    label: "Technique",
    items: [
      {
        q: "Sage X3 fonctionne-t-il sur mobile ?",
        a: "Oui, Sage X3 dispose d'une interface web responsive accessible depuis tous les navigateurs et d'une application mobile native pour iOS et Android, idéale pour les managers et commerciaux en déplacement.",
      },
      {
        q: "Peut-on connecter Sage à notre site e-commerce ?",
        a: "Oui, Thalès Informatique développe des connecteurs API sur mesure entre Sage (X3 ou 100) et les principales plateformes e-commerce : WooCommerce, Magento, Shopify, PrestaShop.",
      },
      {
        q: "Les données sont-elles sécurisées ?",
        a: "Toutes les données sont hébergées dans des datacenters certifiés ISO 27001 au Maroc. Sauvegardes quotidiennes, chiffrement des données, accès sécurisé par rôles et authentification à deux facteurs disponible.",
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

function AccordionItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors cursor-pointer"
      >
        <span className="font-semibold text-primary text-sm md:text-base">{item.q}</span>
        <ChevronDown
          size={18}
          className={`text-cta shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 py-4 bg-slate-50 border-t border-border">
          <p className="text-secondary text-sm leading-relaxed">{item.a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqClient() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const contentInView = useInView(contentRef, { once: true });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="overflow-x-hidden bg-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
              <Link href="/ressources" className="hover:text-white transition-colors">Ressources</Link>
              <ChevronRight size={14} />
              <span className="text-accent">FAQ</span>
            </div>
            <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest border border-accent/30 rounded-full px-3 py-1 mb-4">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">FAQ</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Réponses de nos ingénieurs experts à vos questions fréquentes
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16" ref={contentRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-10">
              {faqGroups.map((group, i) => (
                <button
                  key={group.label}
                  onClick={() => setActiveTab(i)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                    activeTab === i
                      ? "bg-cta text-white"
                      : "bg-white border border-border text-secondary hover:border-cta hover:text-cta"
                  }`}
                >
                  {group.label}
                </button>
              ))}
            </div>

            {/* Accordion */}
            <div className="space-y-3 mb-16">
              <h2 className="text-xl font-bold text-primary mb-6">{faqGroups[activeTab].label}</h2>
              {faqGroups[activeTab].items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <AccordionItem item={item} />
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-primary rounded-2xl p-8 text-center">
              <MessageCircle size={32} className="text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Vous n&apos;avez pas trouvé votre réponse ?</h3>
              <p className="text-white/60 mb-6">Contactez nos ingénieurs experts — nous répondons sous 24h ouvrées.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cta text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contacter nos experts <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
