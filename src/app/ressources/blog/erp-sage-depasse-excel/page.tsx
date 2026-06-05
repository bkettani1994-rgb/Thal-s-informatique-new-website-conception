"use client";

import Link from "next/link";
import { ChevronRight, Clock, User, Tag } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const signs = [
  {
    num: "01",
    title: "Multiplication des fichiers Excel",
    symptoms: "Vous avez un fichier par département, par mois, par projet. Personne ne sait quelle version est la bonne. Des heures sont perdues chaque semaine à consolider des données.",
    erp: "Un ERP centralise toutes les données dans un référentiel unique. Une seule source de vérité, accessible à tous les utilisateurs autorisés en temps réel.",
  },
  {
    num: "02",
    title: "Erreurs de saisie récurrentes",
    symptoms: "Les mêmes informations sont saisies dans plusieurs endroits (devis, commande, facture, stock). Les erreurs de copier-coller génèrent des écarts entre la comptabilité et l'opérationnel.",
    erp: "Avec un ERP, la saisie est unique : une commande client alimente automatiquement la livraison, la facturation et la comptabilité. Zéro ressaisie, zéro écart.",
  },
  {
    num: "03",
    title: "Manque de visibilité en temps réel",
    symptoms: "Pour connaître votre trésorerie, votre niveau de stock ou votre carnet de commandes, vous devez attendre que quelqu'un compile les fichiers. Les décisions sont prises sur des données vieilles de plusieurs jours.",
    erp: "Un ERP génère des tableaux de bord en temps réel. Les dirigeants ont une vue instantanée sur toute l'activité sans attendre les reportings manuels.",
  },
  {
    num: "04",
    title: "Processus 100 % manuels",
    symptoms: "La validation d'une commande nécessite plusieurs emails, une impression, une signature et une ressaisie. Chaque processus implique des allers-retours chronophages entre les équipes.",
    erp: "Les workflows sont automatisés : validation, notification, mise à jour du stock et facturation s'enchaînent sans intervention humaine à chaque étape.",
  },
  {
    num: "05",
    title: "Difficulté à piloter l'activité",
    symptoms: "Répondre à des questions simples comme « Quelle est notre marge sur ce client ? » ou « Quel est notre délai moyen de livraison ? » prend plusieurs heures et demande l'intervention de plusieurs personnes.",
    erp: "Sage X3 ou Sage 100 intègrent des outils de business intelligence. Les KPIs sont calculés automatiquement et présentés dans des tableaux de bord personnalisables.",
  },
];

const comparison = [
  { criterion: "Mise à jour des données", excel: "Manuelle, souvent en retard", erp: "En temps réel, automatique" },
  { criterion: "Collaboration", excel: "Difficile, versions multiples", erp: "Simultanée, données unifiées" },
  { criterion: "Traçabilité", excel: "Limitée, aucun historique fiable", erp: "Complète, audit trail intégré" },
  { criterion: "Scalabilité", excel: "Limitée à quelques utilisateurs", erp: "Des dizaines à des centaines d'utilisateurs" },
];

export default function ArticleErpDépasseExcel() {
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
            <span className="text-accent">ERP</span>
          </div>

          <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest border border-accent/30 rounded-full px-3 py-1 mb-5">
            ERP
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            ERP Sage : 5 signes que votre entreprise a dépassé Excel
          </h1>
          <div className="flex flex-wrap gap-5 text-sm text-white/60">
            <span className="flex items-center gap-1.5"><User size={14} /> Équipe Thalès Informatique</span>
            <span className="flex items-center gap-1.5"><Tag size={14} /> 20 mai 2026</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> 4 min de lecture</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Introduction */}
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            Excel est un outil remarquable. Il a accompagné des milliers d&apos;entreprises dans leurs premières années de croissance. Mais il y a un moment où Excel devient un frein plutôt qu&apos;un accélérateur. Ce moment, c&apos;est souvent lorsque l&apos;entreprise franchit un certain seuil de complexité opérationnelle.
          </p>
          <p className="text-slate-600 leading-relaxed mb-10">
            Comment savoir si vous avez atteint ce seuil ? Voici 5 signes concrets que votre entreprise a besoin d&apos;un ERP Sage.
          </p>

          {/* 5 signs */}
          <div className="space-y-12">
            {signs.map((sign) => (
              <div key={sign.num}>
                <div className="flex gap-5 items-start mb-3">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <span className="text-emerald-700 font-bold text-sm">{sign.num}</span>
                  </div>
                  <h2 className="text-xl font-bold text-primary mt-1.5">{sign.title}</h2>
                </div>
                <div className="ml-15 pl-1 space-y-3">
                  <div className="bg-red-50 border-l-4 border-red-300 rounded-r-lg px-4 py-3">
                    <p className="text-sm text-red-800 font-medium mb-1">Symptômes :</p>
                    <p className="text-sm text-red-700">{sign.symptoms}</p>
                  </div>
                  <div className="bg-emerald-50 border-l-4 border-emerald-400 rounded-r-lg px-4 py-3">
                    <p className="text-sm text-emerald-800 font-medium mb-1">Ce qu&apos;un ERP résout :</p>
                    <p className="text-sm text-emerald-700">{sign.erp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-primary mb-6">Excel vs ERP Sage : comparatif rapide</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left px-5 py-3 font-semibold">Critère</th>
                    <th className="text-left px-5 py-3 font-semibold">Excel</th>
                    <th className="text-left px-5 py-3 font-semibold">ERP Sage</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.criterion} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-3 font-medium text-primary">{row.criterion}</td>
                      <td className="px-5 py-3 text-red-600">{row.excel}</td>
                      <td className="px-5 py-3 text-emerald-600">{row.erp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 bg-primary rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              Passez à l&apos;étape supérieure avec Sage
            </h3>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Nos experts vous proposent une démonstration gratuite adaptée à votre secteur et à la taille de votre entreprise.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-cta text-white font-semibold px-7 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Demandez une démo Sage gratuite →
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
