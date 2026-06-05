"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Clock, User, Tag } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function LoiFinances2026ErpPage() {
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
            Réglementation
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
          >
            Loi de finances 2026 : impacts sur votre ERP
          </motion.h1>
          <div className="flex flex-wrap gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><User size={14} /> Équipe Thalès Informatique</span>
            <span className="flex items-center gap-1"><Tag size={14} /> Janvier 2026</span>
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
                La Loi de Finances 2026 (LF 2026) publiée au Bulletin Officiel en décembre 2025 introduit plusieurs modifications fiscales significatives qui impactent directement les systèmes d&apos;information des entreprises marocaines. Taux de TVA, barèmes IS, nouvelles obligations déclaratives, facturation électronique — votre ERP doit être mis à jour pour rester en conformité.
              </p>
              <p className="leading-relaxed">
                Cet article passe en revue les principales dispositions de la LF 2026 et leurs implications concrètes sur le paramétrage de votre système Sage.
              </p>
            </div>

            {/* TVA */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                Modifications TVA et paramétrage dans Sage
              </h2>
              <p className="leading-relaxed mb-4">
                La LF 2026 poursuit la rationalisation des taux de TVA amorcée les années précédentes, dans l&apos;objectif d&apos;une convergence progressive vers un régime simplifié :
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span><strong>Taux standard maintenu à 20 %</strong> sur la majorité des biens et services. Aucun changement de paramétrage nécessaire pour les codes TVA standard.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span><strong>Révision du taux réduit 10 %</strong> sur certains produits alimentaires transformés et services d&apos;hébergement touristique. Vérifiez vos articles et familles d&apos;articles concernés dans Sage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span><strong>Extension du taux 7 %</strong> à de nouveaux équipements agricoles et médicaux. Mise à jour des grilles tarifaires et des codes TVA dans vos fiches articles.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span><strong>Déclaration TVA mensuelle obligatoire</strong> pour les entreprises dont le CA dépasse 1 million MAD. La déclaration trimestrielle est maintenue en dessous de ce seuil.</span>
                </li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-cta rounded-r-lg p-4">
                <p className="text-sm font-semibold text-cta mb-1">Action requise dans Sage</p>
                <p className="text-sm">Vérifiez vos paramétres de codes TVA (Comptabilité → Paramétrage → Codes TVA) et mettez à jour les taux et régimes concernés. Nos consultants peuvent réaliser cet audit en une demi-journée.</p>
              </div>
            </div>

            {/* IS */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                Nouvelles obligations IS et reporting automatisé
              </h2>
              <p className="leading-relaxed mb-4">
                L&apos;Impôt sur les Sociétés évolue avec la LF 2026 :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange-400 mt-2 shrink-0" />
                  <span><strong>Barème progressif IS :</strong> Le taux de 20 % s&apos;applique aux bénéfices jusqu&apos;à 1 million MAD, 26 % de 1 à 5 millions, 31 % au-delà. Ces tranches doivent être paramétrées dans vos modules de simulation fiscale.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange-400 mt-2 shrink-0" />
                  <span><strong>Cotisation minimale :</strong> Maintenue à 0,5 % du CA HT, avec un minimum de 3 000 MAD. Sage 100 Comptabilité intègre le calcul automatique de la cotisation minimale dans la liasse fiscale.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange-400 mt-2 shrink-0" />
                  <span><strong>Reporting OECD (GRI) pour les groupes :</strong> Les entreprises appartenant à des groupes internationaux doivent désormais produire un rapport pays par pays. Sage X3 dispose d&apos;un module de consolidation multi-entités qui simplifie cette obligation.</span>
                </li>
              </ul>
            </div>

            {/* Facturation électronique */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                Facturation électronique obligatoire : calendrier et étapes
              </h2>
              <p className="leading-relaxed mb-4">
                La généralisation de la facturation électronique est l&apos;une des dispositions majeures de la LF 2026. Le calendrier de déploiement est le suivant :
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-right shrink-0 w-28">
                    <span className="text-sm font-bold text-cta">1er jan. 2026</span>
                  </div>
                  <div className="flex-1 border-l-2 border-cta pl-4 pb-4">
                    <p className="text-sm font-semibold text-primary">Grandes entreprises (CA &gt; 50M MAD)</p>
                    <p className="text-sm">Obligation d&apos;émettre et recevoir des factures électroniques selon le format officiel DGI.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-right shrink-0 w-28">
                    <span className="text-sm font-bold text-cta">1er juil. 2026</span>
                  </div>
                  <div className="flex-1 border-l-2 border-border pl-4 pb-4">
                    <p className="text-sm font-semibold text-primary">ETI (CA entre 10M et 50M MAD)</p>
                    <p className="text-sm">Extension de l&apos;obligation. La réception de factures électroniques devient obligatoire pour tous les assujettis.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-right shrink-0 w-28">
                    <span className="text-sm font-bold text-cta">1er jan. 2027</span>
                  </div>
                  <div className="flex-1 border-l-2 border-border pl-4">
                    <p className="text-sm font-semibold text-primary">PME (CA &lt; 10M MAD)</p>
                    <p className="text-sm">Généralisation à toutes les entreprises assujetties à la TVA.</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 border-l-4 border-cta rounded-r-lg p-4 mt-4">
                <p className="text-sm font-semibold text-cta mb-1">Sage est prêt</p>
                <p className="text-sm">Sage 100 et Sage X3 intègrent un connecteur de facturation électronique compatible avec la plateforme DGI marocaine. Thalès Informatique vous accompagne dans la mise en place et la certification de votre flux de facturation électronique.</p>
              </div>
            </div>

            {/* Retenues à la source */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                Retenues à la source : les nouvelles règles
              </h2>
              <p className="leading-relaxed mb-3">
                La LF 2026 étend le mécanisme de retenue à la source à de nouvelles catégories de prestations :
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span>Prestations de services rendues par des non-résidents : retenue de 10 % sur le montant brut HT.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span>Honoraires versés à des personnes physiques : maintien de la retenue à 10 %, avec obligation de déclaration mensuelle avant le 20 du mois suivant.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span>Loyers versés à des personnes physiques : retenue de 15 % applicable à compter du 1er avril 2026.</span>
                </li>
              </ul>
              <p className="leading-relaxed mt-3">
                Dans Sage 100 Comptabilité, ces retenues doivent être paramétrées comme des journaux spécifiques avec les codes déclaratifs correspondants pour la liasse fiscale automatisée.
              </p>
            </div>

            {/* Check-list */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                Check-list : ce que votre ERP doit faire après la LF 2026
              </h2>
              <div className="space-y-2">
                {[
                  "Codes TVA mis à jour selon les nouveaux taux et régimes",
                  "Barème IS progressif paramétré dans le module de simulation fiscale",
                  "Module facturation électronique activé et testé sur la plateforme DGI",
                  "Journaux de retenues à la source créés avec les bons codes déclaratifs",
                  "Liasse fiscale mise à jour avec les nouveaux formulaires 2026",
                  "Déclaration TVA mensuelle/trimestrielle correctement configurée selon le seuil CA",
                  "Archivage électronique des factures conforme aux règles de conservation (10 ans)",
                  "Formation des équipes comptables sur les nouvelles procédures",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-border">
                    <div className="w-5 h-5 rounded border-2 border-cta shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Mettez votre ERP en conformité LF 2026</h3>
              <p className="text-white/70 mb-6">
                Notre équipe de consultants Sage réalise l&apos;audit de conformité de votre ERP et effectue toutes les mises à jour nécessaires. Intervention planifiée et documentée.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cta text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Mettre votre ERP en conformité LF 2026 →
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </>
  );
}
