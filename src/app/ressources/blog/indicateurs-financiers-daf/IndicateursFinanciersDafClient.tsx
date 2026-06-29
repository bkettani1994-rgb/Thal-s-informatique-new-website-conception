"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Clock, User, Tag } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function IndicateursFinanciersDafClient() {
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
            Finance
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
          >
            5 indicateurs financiers que tout DAF marocain doit suivre
          </motion.h1>
          <div className="flex flex-wrap gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><User size={14} /> Équipe Thalès Informatique</span>
            <span className="flex items-center gap-1"><Tag size={14} /> Avril 2026</span>
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
                En 2026, les Directeurs Administratifs et Financiers marocains font face à une pression croissante : inflation persistante, exigences réglementaires renforcées, concurrence internationale accrue. Dans ce contexte, piloter par les chiffres n&apos;est plus une option — c&apos;est une nécessité stratégique.
              </p>
              <p className="leading-relaxed">
                Pourtant, de nombreuses PME en Afrique et à l'international naviguent encore à vue, sans tableaux de bord financiers fiables. Voici les 5 KPIs que tout DAF devrait surveiller en temps réel, et comment Sage les calcule automatiquement pour vous.
              </p>
            </div>

            {/* KPI 1 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                1. BFR — Besoin en Fonds de Roulement
              </h2>
              <p className="leading-relaxed mb-2">
                <strong>Définition :</strong> Le BFR mesure le décalage entre les décaissements (achats, salaires) et les encaissements (ventes). Un BFR positif signifie que vous devez financer une partie de votre cycle d&apos;exploitation.
              </p>
              <p className="leading-relaxed mb-2">
                <strong>Formule :</strong> BFR = Stocks + Créances clients − Dettes fournisseurs
              </p>
              <p className="leading-relaxed mb-3">
                <strong>Pourquoi c&apos;est critique :</strong> Un BFR mal maîtrisé est la première cause de tension de trésorerie, même pour des entreprises bénéficiaires. Sage calcule votre BFR automatiquement à partir des soldes comptables, avec alertes paramétrables.
              </p>
              <div className="bg-blue-50 border-l-4 border-cta rounded-r-lg p-4">
                <p className="text-sm font-semibold text-cta mb-1">Comment Sage le calcule</p>
                <p className="text-sm">Le module de trésorerie Sage 100 consolide en temps réel les encours clients, fournisseurs et stocks pour afficher le BFR instantané et sa tendance sur 12 mois glissants.</p>
              </div>
            </div>

            {/* KPI 2 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                2. DMP — Délai Moyen de Paiement
              </h2>
              <p className="leading-relaxed mb-2">
                <strong>Définition :</strong> Le DMP mesure le nombre de jours moyen que vos clients mettent à vous payer. Il s&apos;analyse en parallèle du délai de paiement fournisseurs (DPF).
              </p>
              <p className="leading-relaxed mb-2">
                <strong>Formule :</strong> DMP = (Créances clients / CA TTC) × 365
              </p>
              <p className="leading-relaxed mb-3">
                <strong>Pourquoi c&apos;est critique :</strong> Au Maroc, les délais de paiement restent élevés (60-90 jours en moyenne). Un DMP élevé grève la trésorerie et peut pousser à des financements bancaires coûteux. Sage génère automatiquement les relances clients et le tableau de vieillissement des créances.
              </p>
              <div className="bg-blue-50 border-l-4 border-cta rounded-r-lg p-4">
                <p className="text-sm font-semibold text-cta mb-1">Comment Sage le calcule</p>
                <p className="text-sm">Sage 100 Comptabilité calcule le DMP par client, par commercial et par secteur, avec comparaison aux périodes précédentes et alertes sur les dépassements d&apos;échéances.</p>
              </div>
            </div>

            {/* KPI 3 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                3. Taux de marge nette
              </h2>
              <p className="leading-relaxed mb-2">
                <strong>Définition :</strong> Le taux de marge nette exprime la part du chiffre d&apos;affaires qui se transforme en bénéfice net après déduction de toutes les charges (exploitation, financières, impôts).
              </p>
              <p className="leading-relaxed mb-2">
                <strong>Formule :</strong> Taux de marge nette = (Résultat net / CA) × 100
              </p>
              <p className="leading-relaxed mb-3">
                <strong>Pourquoi c&apos;est critique :</strong> C&apos;est le KPI de synthèse ultime de la performance financière. Un taux en baisse chronique signale une dégradation structurelle de la rentabilité, même si le CA progresse. Sage le calcule automatiquement à partir du compte de résultat analytique.
              </p>
              <div className="bg-blue-50 border-l-4 border-cta rounded-r-lg p-4">
                <p className="text-sm font-semibold text-cta mb-1">Comment Sage le calcule</p>
                <p className="text-sm">Les tableaux de bord Sage permettent de suivre le taux de marge nette par produit, par client et par centre de profit, en temps réel et sans exports Excel.</p>
              </div>
            </div>

            {/* KPI 4 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                4. Taux d&apos;endettement
              </h2>
              <p className="leading-relaxed mb-2">
                <strong>Définition :</strong> Le taux d&apos;endettement mesure la part de la dette financière dans les capitaux propres de l&apos;entreprise. Il indique le niveau de levier financier et la solidité du bilan.
              </p>
              <p className="leading-relaxed mb-2">
                <strong>Formule :</strong> Taux d&apos;endettement = Dettes financières nettes / Capitaux propres
              </p>
              <p className="leading-relaxed mb-3">
                <strong>Pourquoi c&apos;est critique :</strong> Un taux supérieur à 1 signale une dépendance excessive au financement externe. Les banques et investisseurs surveillent ce ratio de près lors de demandes de crédit. Sage consolide automatiquement les données du bilan pour ce calcul.
              </p>
              <div className="bg-blue-50 border-l-4 border-cta rounded-r-lg p-4">
                <p className="text-sm font-semibold text-cta mb-1">Comment Sage le calcule</p>
                <p className="text-sm">Sage 100 intègre un module de gestion des emprunts et lignes de crédit, avec suivi automatique du taux d&apos;endettement et simulation de scénarios de refinancement.</p>
              </div>
            </div>

            {/* KPI 5 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                5. Cash-flow opérationnel
              </h2>
              <p className="leading-relaxed mb-2">
                <strong>Définition :</strong> Le cash-flow opérationnel représente la trésorerie générée par l&apos;activité courante de l&apos;entreprise, avant les investissements et les opérations financières. C&apos;est le vrai pouls de la santé de votre entreprise.
              </p>
              <p className="leading-relaxed mb-2">
                <strong>Formule :</strong> Cash-flow opérationnel = EBE − Variation du BFR − Impôts décaissés
              </p>
              <p className="leading-relaxed mb-3">
                <strong>Pourquoi c&apos;est critique :</strong> Une entreprise peut afficher un bénéfice comptable et être en difficulté de trésorerie. Le cash-flow opérationnel ne ment pas : il mesure ce qui entre réellement dans les caisses. Sage génère automatiquement le tableau de flux de trésorerie selon les normes marocaines.
              </p>
              <div className="bg-blue-50 border-l-4 border-cta rounded-r-lg p-4">
                <p className="text-sm font-semibold text-cta mb-1">Comment Sage le calcule</p>
                <p className="text-sm">Le tableau de bord trésorerie Sage 100 affiche le cash-flow en temps réel, avec prévisions à 30, 60 et 90 jours basées sur les échéanciers fournisseurs et clients.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Automatisez votre reporting financier</h3>
              <p className="text-white/70 mb-6">
                Suivez ces 5 KPIs en temps réel avec Sage 100. Nos consultants vous configurent un tableau de bord financier adapté à votre entreprise en moins de 2 semaines.
              </p>
              <Link
                href="/solutions/sage-100"
                className="inline-flex items-center gap-2 bg-cta text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Automatisez votre reporting financier →
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </>
  );
}
