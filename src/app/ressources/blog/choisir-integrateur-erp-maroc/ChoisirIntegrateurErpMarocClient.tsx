"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Clock, User, Tag } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function ChoisirIntegrateurErpMarocClient() {
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
            Stratégie
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
          >
            Comment choisir son intégrateur ERP au Maroc : 7 critères essentiels
          </motion.h1>
          <div className="flex flex-wrap gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><User size={14} /> Équipe Thalès Informatique</span>
            <span className="flex items-center gap-1"><Tag size={14} /> Juin 2026</span>
            <span className="flex items-center gap-1"><Clock size={14} /> 6 min de lecture</span>
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
                Le succès d&apos;un projet ERP dépend autant de la solution logicielle choisie que de l&apos;intégrateur qui l&apos;accompagne. Au Maroc, le marché compte plusieurs partenaires Sage, avec des niveaux d&apos;expertise, de proximité et de méthodologie très variables. Voici les 7 critères à examiner avant de signer.
              </p>
            </div>

            {/* 1 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                1. Les certifications éditeur
              </h2>
              <p className="leading-relaxed">
                Vérifiez que l&apos;intégrateur est officiellement certifié par Sage sur les solutions concernées (Sage X3, Sage 100, Sage FRP 1000). Cette certification garantit un accès direct au support éditeur, une formation continue des consultants et une conformité aux bonnes pratiques de déploiement.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                2. L&apos;expérience sectorielle
              </h2>
              <p className="leading-relaxed">
                Un intégrateur qui connaît déjà votre secteur (industrie, négoce, BTP, agroalimentaire, services) ira plus vite et évitera les erreurs classiques de paramétrage. Demandez des références clients dans votre domaine d&apos;activité et, si possible, échangez avec ces clients.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                3. La méthodologie de déploiement
              </h2>
              <p className="leading-relaxed">
                Un bon intégrateur présente une méthodologie claire et structurée : cadrage des besoins, paramétrage, reprise des données, tests, formation, démarrage et accompagnement post-démarrage. Méfiez-vous des prestataires qui se lancent directement dans le paramétrage sans phase d&apos;analyse approfondie.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                4. La proximité et le support local
              </h2>
              <p className="leading-relaxed">
                En cas de blocage, pouvoir compter sur une équipe basée au Maroc, parlant arabe et français, capable d&apos;intervenir sur site si nécessaire, fait toute la différence par rapport à un support uniquement à distance ou depuis l&apos;étranger.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                5. La maîtrise de la réglementation marocaine
              </h2>
              <p className="leading-relaxed">
                Plan comptable CGNC, TVA, IS/IR, CNSS, AMO, facturation électronique : votre ERP doit être configuré et maintenu en conformité avec les évolutions réglementaires marocaines, y compris à chaque loi de finances. C&apos;est un point souvent négligé mais critique.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                6. La transparence du contrat de maintenance
              </h2>
              <p className="leading-relaxed">
                Avant de signer, demandez le détail du contrat de maintenance : délais d&apos;intervention garantis (SLA), canaux de support, ce qui est inclus (mises à jour légales, correctifs) et ce qui est facturé en supplément. Un contrat flou aujourd&apos;hui peut coûter cher demain.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                7. La capacité d&apos;accompagnement à long terme
              </h2>
              <p className="leading-relaxed">
                Votre entreprise va évoluer : nouveaux sites, nouveaux modules, montée en charge, passage au Cloud. Choisissez un intégrateur capable de vous accompagner dans la durée, avec une équipe stable et une vision de votre système d&apos;information à 3-5 ans.
              </p>
              <div className="bg-blue-50 border-l-4 border-cta rounded-r-lg p-4 mt-4">
                <p className="text-sm font-semibold text-cta mb-1">À retenir</p>
                <p className="text-sm">Le prix ne doit jamais être le seul critère de choix. Un intégrateur moins cher mais sans méthodologie, sans support local solide ou sans expertise réglementaire peut générer des surcoûts bien supérieurs à l&apos;écart de prix initial.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">30 ans d&apos;expertise à votre service</h3>
              <p className="text-white/70 mb-6">
                Partenaire certifié Sage basé à Casablanca, Thalès Informatique accompagne plus de 500 entreprises en Afrique et à l'international depuis 1996. Discutons de votre projet.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cta text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Parler à un expert →
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </>
  );
}
