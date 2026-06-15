"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Clock, User, Tag } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function CoutErpMaroc2026Client() {
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
            ERP
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
          >
            Combien coûte un ERP au Maroc en 2026 ? Guide des prix Sage
          </motion.h1>
          <div className="flex flex-wrap gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><User size={14} /> Équipe Thalès Informatique</span>
            <span className="flex items-center gap-1"><Tag size={14} /> Juin 2026</span>
            <span className="flex items-center gap-1"><Clock size={14} /> 7 min de lecture</span>
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
                C&apos;est la question que se posent toutes les entreprises marocaines avant de se lancer dans un projet ERP : combien va coûter la mise en place de Sage X3 ou Sage 100 ? La réponse honnête est &quot;cela dépend&quot; — mais il est possible de donner des fourchettes réalistes pour budgétiser sereinement votre projet 2026.
              </p>
              <p className="leading-relaxed">
                Un projet ERP comprend toujours plusieurs postes de coût : les licences logicielles, l&apos;intégration et le paramétrage, la formation des utilisateurs, et la maintenance annuelle. Voici comment ils se décomposent.
              </p>
            </div>

            {/* Licences */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                1. Le coût des licences
              </h2>
              <p className="leading-relaxed mb-4">
                Le prix d&apos;une licence ERP dépend du nombre d&apos;utilisateurs et de la solution choisie :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span><strong>Sage 100</strong> : adapté aux PME, à partir de quelques milliers de MAD par utilisateur et par an en mode Cloud, ou en licence perpétuelle pour un déploiement on-premise.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span><strong>Sage X3</strong> : conçu pour les ETI et industriels, le coût des licences est plus élevé mais couvre une gestion multi-sites, multi-sociétés et multi-devises avancée.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span><strong>Modules complémentaires</strong> (GMAO, gestion de trésorerie, paie, CRM) sont facturés séparément selon les besoins.</span>
                </li>
              </ul>
            </div>

            {/* Intégration */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                2. Le coût d&apos;intégration et de paramétrage
              </h2>
              <p className="leading-relaxed">
                C&apos;est souvent le poste le plus important du budget, et celui qui varie le plus selon la complexité de votre activité. Il couvre l&apos;analyse de vos processus, la configuration de l&apos;ERP, la migration de vos données existantes (depuis Excel, Ciel ou un ancien ERP), les développements spécifiques éventuels et les tests. Pour une PME avec des processus standards, comptez plusieurs semaines de prestation ; pour un projet industriel avec des spécificités métier fortes, plusieurs mois.
              </p>
            </div>

            {/* Formation */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                3. La formation des équipes
              </h2>
              <p className="leading-relaxed">
                Un ERP n&apos;est performant que si vos équipes savent l&apos;utiliser. Le budget formation dépend du nombre d&apos;utilisateurs et des modules concernés (comptabilité, achats, ventes, production, RH). Chez Thalès Informatique, la formation est systématiquement incluse dans le plan projet, avec des sessions par profil métier pour une adoption rapide.
              </p>
            </div>

            {/* Maintenance */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                4. La maintenance et le support annuel
              </h2>
              <p className="leading-relaxed">
                Un contrat de maintenance annuel (généralement entre 15% et 20% du coût des licences) couvre les mises à jour légales (loi de finances, CNSS, AMO, TVA), le support technique et les correctifs. C&apos;est un investissement indispensable pour rester conforme à la réglementation marocaine dans le temps.
              </p>
            </div>

            {/* Tableau récap */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Récapitulatif des postes de budget
              </h2>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-border">
                      <th className="text-left px-4 py-3 font-semibold text-primary">Poste</th>
                      <th className="text-left px-4 py-3 font-semibold text-primary">Type de coût</th>
                      <th className="text-left px-4 py-3 font-semibold text-primary">Fréquence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3 font-medium">Licences logicielles</td>
                      <td className="px-4 py-3">Par utilisateur / module</td>
                      <td className="px-4 py-3">Une fois ou abonnement</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-4 py-3 font-medium">Intégration & paramétrage</td>
                      <td className="px-4 py-3">Prestation au forfait ou en régie</td>
                      <td className="px-4 py-3">Une fois (projet)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Formation des utilisateurs</td>
                      <td className="px-4 py-3">Prestation</td>
                      <td className="px-4 py-3">Une fois + continue</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-4 py-3 font-medium">Maintenance & support</td>
                      <td className="px-4 py-3">% des licences</td>
                      <td className="px-4 py-3">Annuelle</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-blue-50 border-l-4 border-cta rounded-r-lg p-4 mt-4">
                <p className="text-sm font-semibold text-cta mb-1">À retenir</p>
                <p className="text-sm">Le coût total d&apos;un projet ERP doit toujours s&apos;évaluer sur 3 à 5 ans, pas seulement à l&apos;investissement initial. Un éditeur moins cher au démarrage mais avec des coûts de maintenance ou de personnalisation élevés peut s&apos;avérer plus onéreux sur la durée.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Obtenez un chiffrage personnalisé</h3>
              <p className="text-white/70 mb-6">
                Chaque entreprise est différente. Nos consultants étudient votre activité, vos processus et vos contraintes pour vous proposer un devis détaillé et transparent, sans surprise.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cta text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Demander un devis →
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </>
  );
}
