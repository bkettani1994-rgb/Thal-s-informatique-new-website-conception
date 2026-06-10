"use client";

import Link from "next/link";
import { ChevronRight, Clock, User, Tag } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const tasks = [
  {
    num: "01",
    title: "Gestion des congés",
    body: "Les demandes de congés traitées par email ou sur papier génèrent des erreurs, des oublis et des conflits de planning. Un SIRH centralise les demandes, automatise les validations selon les règles définies (hiérarchie, soldes), met à jour les compteurs en temps réel et notifie automatiquement toutes les parties concernées.",
  },
  {
    num: "02",
    title: "Notes de frais",
    body: "La collecte manuelle de justificatifs et la ressaisie des montants sont chronophages et sources d'erreurs. Un SIRH permet aux collaborateurs de soumettre leurs notes de frais depuis mobile, avec scan de reçu automatique, et lance le circuit de validation et le remboursement sans intervention du service RH.",
  },
  {
    num: "03",
    title: "Pointage & présences",
    body: "Suivre les heures de présence manuellement expose l'entreprise à des erreurs coûteuses sur les salaires. Le SIRH intègre les badgeuses ou permet la saisie digitale, consolide les données en temps réel et alerte automatiquement en cas d'absences non justifiées.",
  },
  {
    num: "04",
    title: "Recrutement",
    body: "Gérer les candidatures par email dispersé ralentit les embauches et dégrade l'expérience candidat. Un module ATS (Applicant Tracking System) centralise les offres, les candidatures et les entretiens. Les relances, les refus et les propositions sont automatisés avec des modèles personnalisables.",
  },
  {
    num: "05",
    title: "Évaluation des performances",
    body: "Les entretiens annuels gérés sur papier ou dans des tableurs ne permettent pas un suivi structuré. Le SIRH planifie automatiquement les campagnes d'évaluation, envoie les formulaires aux managers et collaborateurs, consolide les résultats et alimente les décisions de carrière.",
  },
  {
    num: "06",
    title: "Dossiers collaborateurs",
    body: "Maintenir à jour des dossiers RH complets dans des classeurs ou des fichiers dispersés est une tâche ingrate et risquée (RGPD). Le SIRH centralise tous les documents (contrat, avenants, formations, certifications) dans un espace sécurisé, avec des alertes automatiques pour les échéances (fin de période d'essai, visa, habilitation).",
  },
  {
    num: "07",
    title: "Reporting RH",
    body: "Produire un tableau de bord RH mensuel prend souvent plusieurs jours de compilation. Le SIRH génère automatiquement les rapports clés (turnover, absentéisme, masse salariale, pyramide des âges) sur la base des données en temps réel, prêts à présenter à la direction.",
  },
];

export default function Sirh7TachesAutomatiseesClient() {
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
            <span className="text-accent">SIRH</span>
          </div>

          <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest border border-accent/30 rounded-full px-3 py-1 mb-5">
            Ressources humaines
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            SIRH : 7 tâches RH que vous pouvez automatiser dès cette année
          </h1>
          <div className="flex flex-wrap gap-5 text-sm text-white/60">
            <span className="flex items-center gap-1.5"><User size={14} /> Équipe Thalès Informatique</span>
            <span className="flex items-center gap-1.5"><Tag size={14} /> 28 mai 2026</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> 5 min de lecture</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Introduction */}
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            Les équipes RH passent en moyenne 60 % de leur temps sur des tâches administratives répétitives : saisie de données, relances par email, compilation de tableaux Excel. Ce temps est du temps perdu sur des missions à forte valeur ajoutée — accompagnement des managers, développement des talents, marque employeur.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Un SIRH moderne (Système d&apos;Information des Ressources Humaines) automatise ces tâches et libère vos équipes RH. Le ROI est généralement atteint en moins de 12 mois. Voici les 7 processus que vous pouvez automatiser dès cette année.
          </p>

          {/* 7 tasks */}
          <div className="space-y-10">
            {tasks.map((task) => (
              <div key={task.num} className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center">
                  <span className="text-violet-700 font-bold text-sm">{task.num}</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-primary mb-2">{task.title}</h2>
                  <p className="text-slate-600 leading-relaxed">{task.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 bg-primary rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              Prêt à automatiser vos processus RH ?
            </h3>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Découvrez Factorial et nos solutions SIRH adaptées aux entreprises marocaines. Nos experts vous accompagnent de la démonstration jusqu&apos;au déploiement.
            </p>
            <Link
              href="/solutions/factorial"
              className="inline-flex items-center gap-2 bg-cta text-white font-semibold px-7 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Découvrez Factorial &amp; nos solutions SIRH →
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
