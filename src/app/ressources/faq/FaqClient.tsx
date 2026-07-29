"use client";

import { useId, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ChevronDown, MessageCircle } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

type FAQItem = { q: string; a: string; render?: React.ReactNode };

const faqGroups: { label: string; items: FAQItem[] }[] = [
  {
    label: "ERP & Projet",
    items: [
      {
        q: "Qu'est-ce qu'un ERP et pourquoi le mettre en place au Maroc ?",
        a: "Un ERP centralise les principaux processus de gestion d'une entreprise — finance, comptabilité, achats, ventes, stocks, production et ressources humaines selon la solution — au sein d'un même logiciel. Pour une entreprise marocaine, un ERP au Maroc permet de centraliser les données, d'automatiser les tâches répétitives, d'améliorer la traçabilité et de faciliter le pilotage, tout en s'adaptant aux besoins métiers spécifiques de l'organisation.",
      },
      {
        q: "Comment choisir un logiciel ERP au Maroc ?",
        a: "Le choix d'un logiciel ERP Maroc dépend de plusieurs critères propres à chaque entreprise : sa taille, son secteur d'activité, ses processus internes, le nombre d'utilisateurs, les intégrations nécessaires avec d'autres outils, les besoins de reporting et les perspectives d'évolution à moyen terme. Une analyse préalable de ces éléments permet d'orienter vers la solution la mieux adaptée.",
      },
      {
        q: "Quel est le rôle d'un intégrateur ERP au Maroc ?",
        a: "Un intégrateur ERP Maroc accompagne l'entreprise tout au long du projet : analyse des besoins, cadrage, paramétrage de la solution, reprise des données existantes, tests, formation des utilisateurs, déploiement et assistance après la mise en production. Thalès Informatique assure cet accompagnement pour les projets ERP et solutions Sage qu'elle déploie.",
      },
      {
        q: "Combien coûte un ERP ?",
        a: "Le coût d'un ERP dépend notamment du logiciel choisi, du nombre d'utilisateurs, des modules activés, du mode d'hébergement, du paramétrage, des développements spécifiques éventuels, de la migration des données, de la formation et de l'assistance. Pour une PME, une estimation sérieuse nécessite une analyse du périmètre, des utilisateurs et du niveau de personnalisation — il n'existe pas de tarif fixe applicable à toutes les entreprises. Contactez-nous pour un chiffrage adapté à votre situation.",
      },
      {
        q: "Quelles sont les étapes d'un projet ERP et combien de temps dure-t-il ?",
        a: "Un projet ERP se déroule généralement en plusieurs étapes : cadrage, analyse des processus, conception, paramétrage, reprise des données, tests, formation, mise en production puis accompagnement après démarrage. Sa durée varie selon le périmètre, la complexité, les interfaces à mettre en place, la qualité des données existantes, la disponibilité des équipes et le nombre de sites concernés.",
      },
    ],
  },
  {
    label: "Support & Maintenance",
    items: [
      {
        q: "Quelles sont vos heures de support ?",
        a: "Notre hotline est disponible du lundi au vendredi de 8h30 à 17h30 (+212 5 22 54 87 80). En cas de forte charge ou d'urgences critiques, une astreinte peut être mise en place ponctuellement. WhatsApp disponible pour les urgences : +212 6 61 16 83 54.",
      },
      {
        q: "Comment soumettre un ticket de support ?",
        a: "Via notre portail client en ligne, par email (hotline@thales.ma) ou par téléphone. Chaque ticket reçoit un numéro de suivi et vous êtes notifié à chaque étape de la résolution.",
      },
      {
        q: "Quelle est la durée d'intervention en cas de blocage ?",
        a: "Nous faisons de notre mieux pour intervenir dans les meilleurs délais. En cas de blocage critique impactant votre activité, notre équipe priorise l'intervention pour vous remettre en production le plus rapidement possible.",
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
        a: "Nos formations sur Sage X3 Maroc et Sage 100 Maroc sont dispensées par des formateurs certifiés Sage. À l'issue de chaque session, vos collaborateurs reçoivent une attestation officielle Thalès Informatique reconnue par Sage Maroc.",
      },
      {
        q: "Proposez-vous une formation Sage X3 au Maroc ?",
        a: "Oui, nous proposons un accompagnement autour de la prise en main de Sage X3, des processus métiers, des rôles utilisateurs et des bonnes pratiques. La formation Sage X3 Maroc est adaptée au périmètre réellement déployé dans votre entreprise, avant et après la mise en production.",
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
        q: "Quelle est la différence entre Sage X3 et Sage 100 ?",
        a: "Sage 100 est une gamme adaptée aux besoins de gestion des PME, avec des modules pouvant couvrir la comptabilité, la gestion commerciale, la trésorerie, la paie, les immobilisations ou le reporting selon la licence retenue. Sage X3 Maroc est une solution ERP destinée aux organisations ayant des processus plus étendus, multisites ou plus complexes — industrie, distribution, services. Le choix entre les deux dépend toujours d'une analyse préalable des besoins de l'entreprise.",
        render: (
          <>
            <Link href="/solutions/sage-100" className="text-cta font-semibold hover:underline">Sage 100</Link>{" "}
            est une gamme adaptée aux besoins de gestion des PME, avec des modules pouvant couvrir la{" "}
            <Link href="/metiers/comptabilite-finance" className="text-cta font-semibold hover:underline">comptabilité</Link>
            {", la gestion commerciale, la trésorerie, la paie, les immobilisations ou le reporting selon la licence retenue. "}
            <Link href="/solutions/sage-x3" className="text-cta font-semibold hover:underline">Sage X3 Maroc</Link>{" "}
            est une solution ERP destinée aux organisations ayant des processus plus étendus, multisites ou plus complexes — industrie, distribution, services. Le choix entre les deux dépend toujours d&apos;une analyse préalable des besoins de l&apos;entreprise.
          </>
        ),
      },
      {
        q: "Qu'est-ce qu'une migration ERP et comment la réussir ?",
        a: "Une migration ERP peut concerner le remplacement d'un ancien logiciel, le passage vers une nouvelle version ou le changement de solution, avec reprise des données et sécurisation de la continuité des opérations. Réussir une migration des données ERP suppose un inventaire des données, leur nettoyage, la correspondance des champs entre l'ancien et le nouveau système, des tests de reprise, une validation métier, une sauvegarde et un plan de bascule.",
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
  const uid = useId();
  const buttonId = `faq-button-${uid}`;
  const panelId = `faq-panel-${uid}`;
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        id={buttonId}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors cursor-pointer"
      >
        <span className="font-semibold text-primary text-sm md:text-base">{item.q}</span>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className={`text-cta shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="px-6 py-4 bg-slate-50 border-t border-border"
        >
          <p className="text-secondary text-sm leading-relaxed">{item.render ?? item.a}</p>
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
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-sm text-white/50 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <Link href="/ressources" className="hover:text-white transition-colors">Ressources</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span aria-current="page" className="text-accent">FAQ</span>
            </nav>
            <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest border border-accent/30 rounded-full px-3 py-1 mb-4">
              FAQ ERP & SOLUTIONS SAGE
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              FAQ ERP Maroc : réponses à vos questions sur les solutions de gestion
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mb-8">
              Retrouvez les réponses aux questions les plus fréquentes sur le choix d&apos;un ERP au Maroc, le rôle d&apos;un intégrateur ERP, le coût, la migration des données et les solutions Sage X3 et Sage 100.
            </p>
            <Link
              href="/contact"
              aria-label="Échanger avec Thalès Informatique au sujet d'un projet ERP"
              className="inline-flex items-center gap-2 bg-cta text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Parler de votre projet ERP <ChevronRight size={16} aria-hidden="true" />
            </Link>
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
                  aria-pressed={activeTab === i}
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
              <MessageCircle size={32} className="text-accent mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold text-white mb-2">Vous avez encore une question sur votre projet ERP ?</h3>
              <p className="text-white/60 mb-6">
                Choix de la solution, périmètre, coût, migration ou accompagnement : décrivez votre projet à nos ingénieurs experts, nous reviendrons vers vous pour en discuter.
              </p>
              <Link
                href="/contact"
                aria-label="Contacter Thalès Informatique pour échanger sur un projet ERP"
                className="inline-flex items-center gap-2 bg-cta text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Échanger avec un expert ERP <ChevronRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
