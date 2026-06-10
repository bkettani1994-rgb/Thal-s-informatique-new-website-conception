"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Clock, User, Tag } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function CnssAmo2026Client() {
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
            RH &amp; Paie
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
          >
            CNSS &amp; AMO 2026 : les nouveaux taux et déclarations
          </motion.h1>
          <div className="flex flex-wrap gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><User size={14} /> Équipe Thalès Informatique</span>
            <span className="flex items-center gap-1"><Tag size={14} /> Mars 2026</span>
            <span className="flex items-center gap-1"><Clock size={14} /> 4 min de lecture</span>
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
                L&apos;année 2026 apporte son lot de changements réglementaires en matière de protection sociale au Maroc. Nouveaux taux de cotisation, modifications des bases de calcul, évolution des obligations déclaratives — les équipes RH et paie doivent s&apos;adapter rapidement pour rester en conformité.
              </p>
              <p className="leading-relaxed">
                Cet article fait le point sur les principales modifications applicables en 2026 et explique comment votre logiciel de paie doit être mis à jour pour intégrer ces changements de façon automatique.
              </p>
            </div>

            {/* Taux CNSS */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Nouveaux taux CNSS 2026
              </h2>
              <p className="leading-relaxed mb-4">
                Les taux de cotisation sociale sont révisés chaque année dans le cadre de la loi de finances. Voici le tableau synthétique des taux applicables en 2026 :
              </p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-border">
                      <th className="text-left px-4 py-3 font-semibold text-primary">Branche</th>
                      <th className="text-center px-4 py-3 font-semibold text-primary">Part employeur</th>
                      <th className="text-center px-4 py-3 font-semibold text-primary">Part salarié</th>
                      <th className="text-center px-4 py-3 font-semibold text-primary">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3">Prestations sociales (PS)</td>
                      <td className="px-4 py-3 text-center">8,98 %</td>
                      <td className="px-4 py-3 text-center">4,48 %</td>
                      <td className="px-4 py-3 text-center font-medium">13,46 %</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-4 py-3">AMO (Assurance Maladie Obligatoire)</td>
                      <td className="px-4 py-3 text-center">4,11 %</td>
                      <td className="px-4 py-3 text-center">2,26 %</td>
                      <td className="px-4 py-3 text-center font-medium">6,37 %</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">IPE (Indemnité pour perte d&apos;emploi)</td>
                      <td className="px-4 py-3 text-center">0,38 %</td>
                      <td className="px-4 py-3 text-center">0,19 %</td>
                      <td className="px-4 py-3 text-center font-medium">0,57 %</td>
                    </tr>
                    <tr className="bg-slate-50 font-semibold text-primary">
                      <td className="px-4 py-3">Total général</td>
                      <td className="px-4 py-3 text-center">13,47 %</td>
                      <td className="px-4 py-3 text-center">6,93 %</td>
                      <td className="px-4 py-3 text-center">20,40 %</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-400 mt-2">* Taux indicatifs — vérifiez les décrets d&apos;application publiés au Bulletin Officiel pour les valeurs définitives.</p>
            </div>

            {/* Nouvelles obligations */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                Nouvelles obligations déclaratives 2026
              </h2>
              <p className="leading-relaxed mb-4">
                Au-delà des taux, les modalités déclaratives évoluent pour renforcer la fiabilité et la traçabilité des données transmises à la CNSS :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span><strong>Déclaration mensuelle obligatoire</strong> pour toutes les entreprises, sans dérogation possible pour les TPE à partir de 5 salariés. Délai : avant le 10 du mois suivant.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span><strong>Déclaration annuelle récapitulative</strong> (DAR) à transmettre par voie électronique uniquement, avant le 31 janvier de l&apos;année N+1.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span><strong>Pénalités renforcées</strong> : majoration de 1 % par mois de retard sur les cotisations non déclarées dans les délais, avec minimum 500 MAD par salarié non déclaré.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span><strong>Format Damancom obligatoire</strong> pour toutes les déclarations : le format papier n&apos;est plus accepté à partir du 1er juillet 2026.</span>
                </li>
              </ul>
            </div>

            {/* Adaptation logiciel */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                Comment votre logiciel de paie doit s&apos;adapter
              </h2>
              <p className="leading-relaxed mb-4">
                Une mise à jour réglementaire de la paie ne se limite pas à changer des taux dans un tableau. Elle implique une mise à jour en profondeur des paramètres de calcul, des formulaires de déclaration et des exports vers les organismes.
              </p>
              <p className="leading-relaxed mb-4">
                Sage 100 Paie intègre automatiquement les évolutions réglementaires marocaines via des mises à jour publiées chaque début d&apos;année, sans intervention manuelle de votre équipe IT. Les taux, plafonds et formats de déclaration sont mis à jour simultanément dans toutes les fiches de paie.
              </p>
              <div className="bg-blue-50 border-l-4 border-cta rounded-r-lg p-4">
                <p className="text-sm font-semibold text-cta mb-1">Conseil Thalès Informatique</p>
                <p className="text-sm">Ne retardez pas la mise à jour de votre logiciel. Chaque mois de retard avec des taux obsolètes génère des écarts de cotisation qui devront être régularisés avec pénalités. Planifiez la mise à jour dès réception de la note réglementaire Sage.</p>
              </div>
            </div>

            {/* Points de vigilance */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                Points de vigilance pour les équipes RH et DAF
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange-400 mt-2 shrink-0" />
                  <span><strong>Vérifier les plafonds de cotisation AMO</strong> : le plafond mensuel est révisé annuellement. Un plafond erroné génère des sur- ou sous-cotisations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange-400 mt-2 shrink-0" />
                  <span><strong>Contrôler les salariés exonérés temporairement</strong> : certains contrats (stagiaires, CDD premier emploi) bénéficient de régimes dérogatoires qui doivent être correctement paramétrés.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange-400 mt-2 shrink-0" />
                  <span><strong>Anticiper les congés et arrêts maladie</strong> : les indemnités journalières CNSS ont des règles de calcul spécifiques qui doivent être automatisées dans la paie.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange-400 mt-2 shrink-0" />
                  <span><strong>Conserver les justificatifs de déclaration</strong> 5 ans minimum pour faire face à un contrôle CNSS. Sage archivage automatique des bordereaux de déclaration.</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Mettez à jour votre solution paie</h3>
              <p className="text-white/70 mb-6">
                Nos experts Sage 100 Paie vous accompagnent dans la mise à jour réglementaire 2026. Conformité garantie, sans interruption de votre traitement de paie.
              </p>
              <Link
                href="/solutions/sage-100"
                className="inline-flex items-center gap-2 bg-cta text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Mettre à jour votre solution paie →
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </>
  );
}
