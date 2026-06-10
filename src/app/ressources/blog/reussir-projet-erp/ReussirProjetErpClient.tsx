"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Clock, User, Tag } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function ReussirProjetErpClient() {
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
            Stratégie ERP
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
          >
            Comment réussir votre projet ERP en 6 étapes
          </motion.h1>
          <div className="flex flex-wrap gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><User size={14} /> Équipe Thalès Informatique</span>
            <span className="flex items-center gap-1"><Tag size={14} /> Janvier 2026</span>
            <span className="flex items-center gap-1"><Clock size={14} /> 8 min de lecture</span>
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
                Selon les études sectorielles, près de 60 % des projets ERP n&apos;atteignent pas leurs objectifs initiaux : dépassements de budget, délais non respectés, adoption insuffisante des utilisateurs. Pourtant, un ERP bien déployé peut devenir le moteur de croissance de votre entreprise.
              </p>
              <p className="leading-relaxed">
                Chez Thalès Informatique, nous avons accompagné des dizaines d&apos;entreprises marocaines dans leurs projets Sage X3 et Sage 100. Voici la méthode en 6 étapes qui fait la différence entre un projet qui transforme et un projet qui frustre.
              </p>
            </div>

            {/* Step 1 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                Étape 1 — Cadrage et expression des besoins
              </h2>
              <p className="leading-relaxed mb-3">
                Tout projet ERP commence par une phase de cadrage rigoureuse. Il s&apos;agit de cartographier vos processus actuels, d&apos;identifier les dysfonctionnements et de définir précisément ce que vous attendez du futur système : périmètre fonctionnel, volumétrie, contraintes réglementaires.
              </p>
              <p className="leading-relaxed mb-3">
                Cette étape implique les directions métier (finance, RH, production, commercial) et la direction générale. Elle aboutit à un cahier des charges structuré qui servira de référence tout au long du projet.
              </p>
              <div className="bg-blue-50 border-l-4 border-cta rounded-r-lg p-4">
                <p className="text-sm font-semibold text-cta mb-1">Conseil Thalès Informatique</p>
                <p className="text-sm">Organisez des ateliers métier par département, avec un facilitateur neutre. Les besoins non exprimés en phase de cadrage coûtent 10 fois plus cher à traiter en cours de projet.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                Étape 2 — Choix de la solution (Sage X3 ou Sage 100)
              </h2>
              <p className="leading-relaxed mb-3">
                Le choix de la solution doit être guidé par votre taille, votre secteur et vos ambitions de croissance. Sage 100 convient parfaitement aux PME souhaitant digitaliser leur gestion comptable, commerciale et RH. Sage X3 s&apos;adresse aux entreprises industrielles ou multi-sites avec des besoins de production, logistique et reporting avancés.
              </p>
              <p className="leading-relaxed mb-3">
                Évaluez également la capacité d&apos;intégration avec vos outils existants (CRM, e-commerce, BI) et la feuille de route éditeur pour les prochaines années.
              </p>
              <div className="bg-blue-50 border-l-4 border-cta rounded-r-lg p-4">
                <p className="text-sm font-semibold text-cta mb-1">Conseil Thalès Informatique</p>
                <p className="text-sm">Demandez systématiquement une démonstration sur vos propres données avant de décider. Un prototype concret vaut mieux que cent diapositives de présentation.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                Étape 3 — Constitution de l&apos;équipe projet
              </h2>
              <p className="leading-relaxed mb-3">
                Un projet ERP est avant tout un projet humain. Il vous faut un chef de projet interne disposant d&apos;autorité transversale, des référents métier par domaine fonctionnel, et une équipe IT pour les aspects techniques. Du côté de l&apos;intégrateur, exigez un chef de projet dédié et des consultants spécialisés par module.
              </p>
              <p className="leading-relaxed mb-3">
                La gouvernance est essentielle : comité de pilotage mensuel, comité opérationnel hebdomadaire, processus de validation des livrables clairement défini.
              </p>
              <div className="bg-blue-50 border-l-4 border-cta rounded-r-lg p-4">
                <p className="text-sm font-semibold text-cta mb-1">Conseil Thalès Informatique</p>
                <p className="text-sm">Le chef de projet interne doit être libéré à 50 % minimum de ses fonctions opérationnelles pendant la phase de déploiement. C&apos;est l&apos;un des facteurs de succès les plus sous-estimés.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                Étape 4 — Paramétrage et personnalisation
              </h2>
              <p className="leading-relaxed mb-3">
                Le paramétrage consiste à configurer l&apos;ERP selon votre plan comptable, votre organisation, vos règles de gestion et vos spécificités sectorielles. C&apos;est lors de cette phase que les choix de conception ont le plus d&apos;impact sur la qualité future du système.
              </p>
              <p className="leading-relaxed mb-3">
                Le principe clé : paramétrer d&apos;abord ce qui est standard, développer spécifique seulement quand c&apos;est indispensable. Les développements spécifiques sont coûteux à maintenir et compliquent les futures mises à jour.
              </p>
              <div className="bg-blue-50 border-l-4 border-cta rounded-r-lg p-4">
                <p className="text-sm font-semibold text-cta mb-1">Conseil Thalès Informatique</p>
                <p className="text-sm">Impliquez les utilisateurs clés dans les recettes fonctionnelles à chaque sprint. Un bug détecté lors du paramétrage coûte 100 fois moins cher à corriger qu&apos;après la mise en production.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                Étape 5 — Formation des utilisateurs
              </h2>
              <p className="leading-relaxed mb-3">
                La formation est trop souvent traitée comme une formalité en fin de projet. C&apos;est pourtant le déterminant principal de l&apos;adoption. Chaque profil d&apos;utilisateur doit recevoir une formation adaptée à ses tâches réelles, sur l&apos;environnement paramétré pour votre entreprise.
              </p>
              <p className="leading-relaxed mb-3">
                Prévoyez des sessions de formation par groupes homogènes, des supports de référence rapide, et des sessions de questions/réponses dans les premières semaines après le démarrage.
              </p>
              <div className="bg-blue-50 border-l-4 border-cta rounded-r-lg p-4">
                <p className="text-sm font-semibold text-cta mb-1">Conseil Thalès Informatique</p>
                <p className="text-sm">Formez des « super-utilisateurs » internes capables d&apos;assister leurs collègues au quotidien. Cette approche réduit de 40 % les tickets support post-démarrage.</p>
              </div>
            </div>

            {/* Step 6 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                Étape 6 — Mise en production et suivi post-démarrage
              </h2>
              <p className="leading-relaxed mb-3">
                Le jour J n&apos;est pas la fin du projet, c&apos;est le début de la phase opérationnelle. Planifiez une présence renforcée de l&apos;équipe projet et des consultants lors des premières semaines pour gérer les incidents et rassurer les utilisateurs. Définissez un plan de retour arrière en cas de blocage critique.
              </p>
              <p className="leading-relaxed mb-3">
                Mettez en place des indicateurs de suivi dès le premier mois : taux de saisie dans l&apos;ERP, nombre d&apos;anomalies, temps de clôture comptable, satisfaction utilisateurs. Ces KPIs guideront les ajustements nécessaires.
              </p>
              <div className="bg-blue-50 border-l-4 border-cta rounded-r-lg p-4">
                <p className="text-sm font-semibold text-cta mb-1">Conseil Thalès Informatique</p>
                <p className="text-sm">Planifiez un bilan à 3 mois post-démarrage avec votre intégrateur. C&apos;est le moment idéal pour optimiser le paramétrage en fonction des usages réels et lancer les modules complémentaires.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Prêt à démarrer votre projet ERP ?</h3>
              <p className="text-white/70 mb-6">
                Nos experts Thalès Informatique vous accompagnent de la définition des besoins à la mise en production. Parlons de votre projet.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cta text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Démarrer votre projet ERP avec Thalès →
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </>
  );
}
