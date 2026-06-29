"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Clock, User, Tag } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function DigitalisationPmeMaroc2026Client() {
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
            La digitalisation des PME en Afrique et à l'international : état des lieux 2026
          </motion.h1>
          <div className="flex flex-wrap gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><User size={14} /> Équipe Thalès Informatique</span>
            <span className="flex items-center gap-1"><Tag size={14} /> Janvier 2026</span>
            <span className="flex items-center gap-1"><Clock size={14} /> 10 min de lecture</span>
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
                Le Maroc a engagé depuis 2014 un Plan d&apos;Accélération Industrielle ambitieux, complété par la stratégie Maroc Digital 2030. En 2026, où en sont réellement les PME en Afrique et à l'international dans leur transformation digitale ? Quels progrès, quels freins persistent, et quelles sont les priorités pour les deux prochaines années ?
              </p>
              <p className="leading-relaxed">
                Cet état des lieux annuel, réalisé par Thalès Informatique à partir de son expérience terrain et des données sectorielles disponibles, dresse un tableau nuancé d&apos;un écosystème en mutation mais encore inégal.
              </p>
            </div>

            {/* Chiffres clés */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Chiffres clés de la digitalisation au Maroc et en Afrique en 2026
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-50 rounded-xl p-5 border border-border text-center">
                  <p className="text-3xl font-bold text-cta mb-1">34 %</p>
                  <p className="text-sm text-secondary">des PME en Afrique et à l'international de plus de 20 salariés sont équipées d&apos;un ERP (vs 21 % en 2022)</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-5 border border-border text-center">
                  <p className="text-3xl font-bold text-cta mb-1">180 KMAD</p>
                  <p className="text-sm text-secondary">budget IT moyen annuel d&apos;une PME marocaine de 50 à 200 salariés en 2026</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-5 border border-border text-center">
                  <p className="text-3xl font-bold text-cta mb-1">2,8 ans</p>
                  <p className="text-sm text-secondary">délai moyen de retour sur investissement d&apos;un projet ERP déclaré par les PME en Afrique et à l'international digitalisées</p>
                </div>
              </div>
              <p className="leading-relaxed">
                Les secteurs les plus avancés dans la digitalisation sont l&apos;industrie automobile et aéronautique (portée par les donneurs d&apos;ordre internationaux), la grande distribution et le négoce de gros, ainsi que les services financiers. Les secteurs les plus en retard restent l&apos;agriculture, la construction et l&apos;artisanat.
              </p>
            </div>

            {/* 3 freins */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Les 3 freins principaux à la digitalisation des PME en Afrique et à l'international
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">1. Le coût perçu comme prohibitif</h3>
                  <p className="leading-relaxed mb-2">
                    Beaucoup de dirigeants de PME en Afrique et à l'international perçoivent encore la digitalisation comme un investissement réservé aux grandes entreprises. Cette perception est en partie due à des expériences passées de projets mal calibrés ou à des devis non contextualisés.
                  </p>
                  <p className="text-sm bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
                    <strong>Solution :</strong> Les offres Sage 100 PME permettent aujourd&apos;hui de démarrer un projet ERP complet pour moins de 150 000 MAD, avec un ROI mesurable dès la première année sur les seules économies de temps de traitement administratif.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">2. Le déficit de compétences numériques</h3>
                  <p className="leading-relaxed mb-2">
                    Le Maroc forme chaque année davantage d&apos;ingénieurs et de techniciens IT, mais la pénurie de profils expérimentés en gestion de projets ERP et en analyse de données reste réelle. Les PME peinent à recruter et à retenir les talents nécessaires à la conduite de leur transformation.
                  </p>
                  <p className="text-sm bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
                    <strong>Solution :</strong> S&apos;appuyer sur un intégrateur local comme Thalès Informatique permet d&apos;externaliser la compétence projet et de monter en compétences les équipes internes par le transfert de savoir-faire.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">3. La résistance au changement</h3>
                  <p className="leading-relaxed mb-2">
                    Le facteur humain est souvent sous-estimé. Dans les PME familiales marocaines, où les pratiques sont ancrées depuis des années, l&apos;introduction d&apos;un ERP bouleverse les habitudes de travail et les équilibres de pouvoir informels. Sans gestion du changement, les taux d&apos;adoption restent faibles.
                  </p>
                  <p className="text-sm bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
                    <strong>Solution :</strong> Intégrer un volet conduite du changement dès le démarrage du projet : communication sur les bénéfices, implication des utilisateurs clés, formation adaptée, et suivi post-déploiement.
                  </p>
                </div>
              </div>
            </div>

            {/* Secteurs qui accélèrent */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                Les secteurs qui accélèrent en 2026
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span><strong>Industrie :</strong> La pression des donneurs d&apos;ordre (Renault, Boeing, Airbus) impose des standards de qualité et de traçabilité qui nécessitent un ERP. Les sous-traitants marocains s&apos;équipent massivement pour conserver leurs contrats.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span><strong>Négoce et distribution :</strong> La concurrence du e-commerce et des plateformes digitales oblige les négociants traditionnels à se moderniser. La gestion des stocks, des commandes et des tournées de livraison en temps réel devient un avantage concurrentiel décisif.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span><strong>Services professionnels :</strong> Cabinets d&apos;audit, d&apos;avocats, de conseil, agences de communication — ces secteurs adoptent massivement les outils de gestion de projets, de facturation automatisée et de SIRH pour améliorer leur rentabilité.</span>
                </li>
              </ul>
            </div>

            {/* ROI */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                Retour sur investissement : ce que disent les PME en Afrique et à l'international digitalisées
              </h2>
              <p className="leading-relaxed mb-4">
                Dans notre expérience d&apos;accompagnement de PME en Afrique et à l'international, les bénéfices les plus fréquemment cités après 12 à 18 mois d&apos;utilisation d&apos;un ERP sont :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-border">
                  <span className="text-2xl font-bold text-cta">−40 %</span>
                  <span className="text-sm">de temps consacré aux tâches administratives répétitives (saisies, rapprochements, relances)</span>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-border">
                  <span className="text-2xl font-bold text-cta">−25 %</span>
                  <span className="text-sm">de stock moyen grâce à une meilleure visibilité et aux réapprovisionnements automatiques</span>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-border">
                  <span className="text-2xl font-bold text-cta">−10 j</span>
                  <span className="text-sm">de réduction du délai de clôture comptable mensuelle (de 15 à 5 jours en moyenne)</span>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-border">
                  <span className="text-2xl font-bold text-cta">+15 %</span>
                  <span className="text-sm">de taux de service client grâce à la disponibilité en temps réel des informations commandes et stocks</span>
                </div>
              </div>
            </div>

            {/* Priorités 2026-2027 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                Les priorités digitales pour 2026-2027
              </h2>
              <ol className="space-y-3 list-none">
                <li className="flex gap-3">
                  <span className="font-bold text-cta w-6 shrink-0">1.</span>
                  <span><strong>Mise en conformité facturation électronique :</strong> L&apos;obligation se déploie progressivement. Les PME doivent anticiper maintenant pour éviter la précipitation en 2027.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-cta w-6 shrink-0">2.</span>
                  <span><strong>Décisionnel et BI :</strong> Après avoir mis en place l&apos;ERP, les PME cherchent à valoriser leurs données avec des tableaux de bord et des outils d&apos;analyse prédictive accessibles.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-cta w-6 shrink-0">3.</span>
                  <span><strong>Mobilité et applications terrain :</strong> Applications mobiles pour les commerciaux, les techniciens de maintenance et les livreurs — la digitalisation des équipes terrain devient la prochaine frontière.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-cta w-6 shrink-0">4.</span>
                  <span><strong>Cybersécurité :</strong> La digitalisation accroît la surface d&apos;attaque. Les PME en Afrique et à l'international commencent à intégrer des politiques de sécurité, souvent sous l&apos;impulsion de leurs assureurs et partenaires internationaux.</span>
                </li>
              </ol>
            </div>

            {/* CTA */}
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Évaluez gratuitement votre maturité digitale</h3>
              <p className="text-white/70 mb-6">
                Nos experts réalisent un diagnostic de maturité digitale adapté à votre secteur et votre taille. En 45 minutes, identifiez vos priorités et les quick wins à saisir dès 2026.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cta text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Évaluez gratuitement votre maturité digitale →
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </>
  );
}
