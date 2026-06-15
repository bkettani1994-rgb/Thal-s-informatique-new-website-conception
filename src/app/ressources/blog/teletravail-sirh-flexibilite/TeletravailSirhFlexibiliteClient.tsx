"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Clock, User, Tag } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function TeletravailSirhFlexibiliteClient() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={14} />
            <Link href="/ressources" className="hover:text-white transition-colors">Ressources</Link>
            <ChevronRight size={14} />
            <Link href="/ressources/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-accent">Article</span>
          </div>
          <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest border border-accent/30 rounded-full px-3 py-1 mb-4">
            RH & SIRH
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
          >
            Télétravail et flexibilité : comment le SIRH accompagne les nouveaux modes de travail
          </motion.h1>
          <div className="flex flex-wrap gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><User size={14} /> Équipe Thalès Informatique</span>
            <span className="flex items-center gap-1"><Tag size={14} /> Juin 2026</span>
            <span className="flex items-center gap-1"><Clock size={14} /> 5 min de lecture</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10 text-secondary"
          >
            {/* Intro */}
            <div>
              <p className="text-lg leading-relaxed text-primary font-medium mb-4">
                Le télétravail et les horaires flexibles se sont durablement installés dans les entreprises marocaines, y compris dans des secteurs longtemps restés sur des organisations 100% présentielles. Pour les services RH, ce changement impose de revoir en profondeur la gestion des plannings, des présences et des processus administratifs.
              </p>
              <p className="leading-relaxed">
                Un SIRH (Système d&apos;Information des Ressources Humaines) moderne est devenu l&apos;outil central pour accompagner cette transformation, sans perdre en contrôle ni en conformité. Voici comment.
              </p>
            </div>

            {/* 1 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                1. Des plannings flexibles gérés en self-service
              </h2>
              <p className="leading-relaxed">
                Avec un SIRH connecté, chaque collaborateur peut déclarer ses jours de télétravail, demander un aménagement d&apos;horaire ou poser ses congés directement depuis son espace personnel, sur ordinateur ou mobile. Les managers valident en un clic, avec une vue claire de la disponibilité de leur équipe — fini les fichiers Excel partagés et les échanges d&apos;emails.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                2. Un suivi du temps de travail fiable, même à distance
              </h2>
              <p className="leading-relaxed">
                La pointeuse physique ne suffit plus quand une partie de l&apos;équipe travaille depuis chez elle. Les solutions de pointage digital (badge virtuel, application mobile avec géolocalisation optionnelle) permettent de suivre les heures travaillées en toute transparence, dans le respect du droit du travail marocain.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                3. Une dématérialisation complète des documents RH
              </h2>
              <p className="leading-relaxed">
                Contrats, avenants, attestations, bulletins de paie : la signature électronique et le coffre-fort numérique permettent de gérer l&apos;ensemble du cycle de vie administratif d&apos;un collaborateur à distance, avec une valeur juridique pleine et entière. Un atout pour les entreprises qui recrutent au-delà de Casablanca.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                4. Une communication RH centralisée
              </h2>
              <p className="leading-relaxed">
                Annonces, notes de service, enquêtes de satisfaction, évaluations annuelles : un portail SIRH unique garantit que chaque collaborateur — au bureau ou à distance — a accès aux mêmes informations au même moment, renforçant la cohésion d&apos;équipe dans un contexte hybride.
              </p>
              <div className="bg-blue-50 border-l-4 border-cta rounded-r-lg p-4 mt-4">
                <p className="text-sm font-semibold text-cta mb-1">À retenir</p>
                <p className="text-sm">La flexibilité du travail ne doit pas se traduire par une perte de visibilité pour les RH. Un SIRH bien paramétré offre au contraire plus de données, en temps réel, pour piloter les effectifs où qu&apos;ils travaillent.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Modernisez votre gestion RH</h3>
              <p className="text-white/70 mb-6">
                Découvrez comment nos solutions SIRH et de gestion de la paie s&apos;adaptent aux organisations hybrides et accompagnent la flexibilité de vos équipes.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cta text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Parler à un expert RH →
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </>
  );
}
