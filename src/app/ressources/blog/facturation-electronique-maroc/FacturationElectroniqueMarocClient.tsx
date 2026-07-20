"use client";

import Link from "next/link";
import { ChevronRight, Clock, User, Tag } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function FacturationElectroniqueMarocClient() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/50 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={14} />
            <Link href="/ressources" className="hover:text-white transition-colors">Ressources</Link>
            <ChevronRight size={14} />
            <Link href="/ressources/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-accent">Facturation Électronique</span>
          </div>

          <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest border border-accent/30 rounded-full px-3 py-1 mb-5">
            Réglementation
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Facturation Électronique au Maroc et en Afrique : Ce que les entreprises doivent anticiper dès aujourd&apos;hui
          </h1>
          <div className="flex flex-wrap gap-5 text-sm text-white/60">
            <span className="flex items-center gap-1.5"><User size={14} /> Équipe Thalès Informatique</span>
            <span className="flex items-center gap-1.5"><Tag size={14} /> 5 juin 2026</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> 6 min de lecture</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Introduction */}
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Le Maroc s&apos;inscrit résolument dans la dynamique mondiale de modernisation fiscale. La Direction Générale des Impôts (DGI) a annoncé l&apos;introduction progressive de la facturation électronique obligatoire dans le cadre des dernières lois de finances. Pour les entreprises en Afrique et à l'international, ce changement n&apos;est plus une option : c&apos;est une échéance à planifier dès maintenant.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
            Pourquoi la facturation électronique devient incontournable
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            La loi de finances marocaine a posé les bases d&apos;un système de facturation dématérialisée aligné sur les standards internationaux (e-Invoicing). Cette réforme s&apos;inscrit dans la stratégie nationale de lutte contre la fraude fiscale et d&apos;amélioration de la collecte de la TVA.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Concrètement, les entreprises devront émettre, transmettre et archiver leurs factures via une plateforme agréée par la DGI. Le non-respect de ces obligations expose les entreprises à des pénalités et à des redressements fiscaux.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Au-delà de l&apos;obligation légale, cette transition offre une opportunité réelle de moderniser les processus administratifs et de gagner en efficacité opérationnelle.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
            Les bénéfices concrets pour les PME et grandes entreprises
          </h2>
          <ul className="space-y-4 mb-8">
            {[
              {
                title: "Réduction des coûts",
                desc: "Suppression des frais d'impression, d'affranchissement et d'archivage physique. Une facture électronique coûte en moyenne 5 à 7 fois moins cher qu'une facture papier.",
              },
              {
                title: "Traçabilité totale",
                desc: "Chaque facture est horodatée et archivée de façon sécurisée. Les audits internes et les contrôles fiscaux deviennent simples et instantanés.",
              },
              {
                title: "Conformité fiscale garantie",
                desc: "Les solutions certifiées génèrent automatiquement les formats requis par la DGI, éliminant les risques d'erreur de forme.",
              },
              {
                title: "Paiements plus rapides",
                desc: "La transmission instantanée des factures réduit les délais de traitement et accélère les cycles de paiement, améliorant ainsi la trésorerie.",
              },
            ].map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="mt-1 w-2 h-2 rounded-full bg-cta shrink-0" />
                <div>
                  <span className="font-semibold text-primary">{item.title} : </span>
                  <span className="text-slate-600">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Section 3 */}
          <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
            Les risques de ne pas anticiper
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            De nombreuses entreprises sous-estiment le temps nécessaire à la migration. Configurer un système de facturation électronique conforme implique des adaptations techniques, des formations et des validations internes qui peuvent prendre plusieurs mois.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Pénalités fiscales en cas de non-conformité à la date butoir",
              "Surcoûts liés à une migration précipitée et à des prestataires d'urgence",
              "Risque de rupture opérationnelle pendant la période de transition",
              "Retard accumulé par rapport aux concurrents déjà conformes",
            ].map((risk) => (
              <li key={risk} className="flex gap-3 items-start">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                <span className="text-slate-600">{risk}</span>
              </li>
            ))}
          </ul>

          {/* Section 4 */}
          <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
            Comment Sage facilite la transition
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Sage, partenaire de Thalès Informatique, intègre nativement les fonctionnalités de facturation électronique dans ses solutions ERP et comptables. Voici comment Sage accompagne les entreprises en Afrique et à l'international :
          </p>
          <ul className="space-y-4 mb-8">
            {[
              {
                title: "E-invoicing natif",
                desc: "Génération automatique de factures au format réglementaire (PDF/A, XML, UBL) directement depuis Sage 100, Sage X3 ou Sage Paie.",
              },
              {
                title: "Connecteurs DGI",
                desc: "Transmission sécurisée des factures vers la plateforme officielle de la DGI sans ressaisie ni intervention manuelle.",
              },
              {
                title: "Archivage légal",
                desc: "Stockage sécurisé et horodaté conforme aux exigences d'archivage légal marocain (10 ans). Accès immédiat en cas de contrôle fiscal.",
              },
              {
                title: "Accompagnement et formation",
                desc: "Thalès Informatique assure le paramétrage, la formation de vos équipes et le suivi post-déploiement pour une transition sans friction.",
              },
            ].map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="mt-1 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <div>
                  <span className="font-semibold text-primary">{item.title} : </span>
                  <span className="text-slate-600">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-12 bg-primary rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              Préparez votre entreprise dès maintenant
            </h3>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Nos experts Sage vous accompagnent dans la mise en conformité avec la réglementation marocaine sur la facturation électronique.
            </p>
            <p data-ilink className="text-white/60 text-sm mb-6">Voir nos modules <Link href="/metiers/tva" className="text-white underline hover:text-accent">Gestion TVA</Link> et <Link href="/metiers/etats-comptables-fiscaux" className="text-white underline hover:text-accent">États comptables &amp; fiscaux</Link>.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-cta text-white font-semibold px-7 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Demandez une démonstration Sage →
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
