"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Clock, User, Tag } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function IaErpCasUsageClient() {
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
            Technologie
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
          >
            Intelligence Artificielle et ERP : 5 cas d&apos;usage concrets pour les entreprises marocaines
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
                L&apos;intelligence artificielle n&apos;est plus réservée aux grands groupes internationaux. En 2026, les éditeurs comme Sage intègrent des fonctionnalités d&apos;IA directement dans leurs ERP, rendant ces technologies accessibles aux PME et ETI marocaines.
              </p>
              <p className="leading-relaxed">
                Au-delà du buzz, l&apos;IA dans l&apos;ERP répond à des besoins très concrets : gagner du temps sur les tâches répétitives, anticiper les risques financiers et donner aux dirigeants une vision claire pour décider plus vite. Voici 5 cas d&apos;usage que nous déployons déjà chez nos clients.
              </p>
            </div>

            {/* Cas 1 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                1. La reconnaissance automatique des factures fournisseurs
              </h2>
              <p className="leading-relaxed">
                Grâce à l&apos;OCR intelligent couplé à l&apos;IA, les factures fournisseurs reçues par email ou scannées sont automatiquement lues, rapprochées des bons de commande et imputées sur les bons comptes. Le service comptable n&apos;a plus qu&apos;à valider — un gain de temps estimé entre 60 et 80% sur la saisie comptable.
              </p>
            </div>

            {/* Cas 2 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                2. La prévision de trésorerie assistée par IA
              </h2>
              <p className="leading-relaxed">
                En analysant l&apos;historique des encaissements, décaissements et le comportement de paiement de vos clients, les modules de trésorerie intelligents anticipent vos besoins de financement à 30, 60 ou 90 jours. Pour les DAF marocains, c&apos;est un outil précieux pour négocier les lignes de crédit avant qu&apos;une tension de trésorerie ne survienne.
              </p>
            </div>

            {/* Cas 3 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                3. L&apos;optimisation des stocks et de la production
              </h2>
              <p className="leading-relaxed">
                Les algorithmes de prévision de la demande analysent l&apos;historique des ventes, la saisonnalité et les tendances pour suggérer des niveaux de stock optimaux et des plans de production ajustés. Résultat : moins de surstocks immobilisant de la trésorerie, et moins de ruptures qui pénalisent vos clients.
              </p>
            </div>

            {/* Cas 4 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                4. La détection d&apos;anomalies et la lutte contre la fraude
              </h2>
              <p className="leading-relaxed">
                L&apos;IA surveille en continu les transactions pour repérer les schémas inhabituels : un fournisseur dont les montants augmentent anormalement, une note de frais en doublon, un écart de marge suspect sur une ligne de vente. Ces alertes automatiques renforcent le contrôle interne sans alourdir le travail des équipes.
              </p>
            </div>

            {/* Cas 5 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                5. Les assistants conversationnels pour le pilotage
              </h2>
              <p className="leading-relaxed">
                Plutôt que de naviguer dans des tableaux de bord complexes, les dirigeants peuvent désormais poser des questions en langage naturel à leur ERP — &quot;Quel est mon chiffre d&apos;affaires par région ce mois-ci ?&quot; — et obtenir une réponse instantanée, accompagnée d&apos;un graphique. Cette démocratisation de la donnée accélère la prise de décision à tous les niveaux de l&apos;entreprise.
              </p>
              <div className="bg-blue-50 border-l-4 border-cta rounded-r-lg p-4 mt-4">
                <p className="text-sm font-semibold text-cta mb-1">À retenir</p>
                <p className="text-sm">L&apos;IA dans l&apos;ERP n&apos;est pas un projet à part : elle s&apos;active progressivement sur une base ERP bien structurée. Plus vos données sont propres et centralisées, plus l&apos;IA est performante.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Préparez votre ERP à l&apos;IA</h3>
              <p className="text-white/70 mb-6">
                Nos experts évaluent votre système d&apos;information actuel et vous accompagnent vers les fonctionnalités d&apos;IA disponibles sur Sage X3 et Sage 100, étape par étape.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cta text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Demander un diagnostic →
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </>
  );
}
