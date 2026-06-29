"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Clock, User, Tag } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function ErpCloudVsOnPremiseClient() {
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
            ERP Cloud vs On-Premise : que choisir en 2026 ?
          </motion.h1>
          <div className="flex flex-wrap gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><User size={14} /> Équipe Thalès Informatique</span>
            <span className="flex items-center gap-1"><Tag size={14} /> Février 2026</span>
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
                En 2026, le débat Cloud vs On-Premise reste d&apos;actualité au Maroc et en Afrique. Si le Cloud s&apos;est imposé en Europe, les entreprises en Afrique et à l'international doivent tenir compte de réalités spécifiques : qualité variable des connexions Internet selon les zones, réglementation sur la localisation des données, niveaux de personnalisation requis et contraintes sectorielles.
              </p>
              <p className="leading-relaxed">
                Il n&apos;existe pas de réponse universelle : le bon choix dépend de votre taille, votre secteur, votre maturité IT et votre stratégie à moyen terme. Voici les clés pour décider avec lucidité.
              </p>
            </div>

            {/* Tableau comparatif */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Tableau comparatif : Cloud vs On-Premise
              </h2>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-border">
                      <th className="text-left px-4 py-3 font-semibold text-primary">Critère</th>
                      <th className="text-center px-4 py-3 font-semibold text-cta">Cloud (SaaS)</th>
                      <th className="text-center px-4 py-3 font-semibold text-primary">On-Premise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3 font-medium">Coût initial</td>
                      <td className="px-4 py-3 text-center text-green-600">Faible (abonnement)</td>
                      <td className="px-4 py-3 text-center text-orange-500">Élevé (licence + infra)</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-4 py-3 font-medium">Coût total 5 ans</td>
                      <td className="px-4 py-3 text-center text-orange-500">Peut dépasser l&apos;on-premise</td>
                      <td className="px-4 py-3 text-center text-green-600">Prévisible et maîtrisé</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Maintenance IT</td>
                      <td className="px-4 py-3 text-center text-green-600">Gérée par l&apos;éditeur</td>
                      <td className="px-4 py-3 text-center text-orange-500">Nécessite équipe interne</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-4 py-3 font-medium">Accessibilité</td>
                      <td className="px-4 py-3 text-center text-green-600">Partout, tout appareil</td>
                      <td className="px-4 py-3 text-center text-orange-500">Réseau interne ou VPN</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Sécurité des données</td>
                      <td className="px-4 py-3 text-center text-orange-500">Données chez l&apos;éditeur</td>
                      <td className="px-4 py-3 text-center text-green-600">Données sur site</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-4 py-3 font-medium">Personnalisation</td>
                      <td className="px-4 py-3 text-center text-orange-500">Limitée</td>
                      <td className="px-4 py-3 text-center text-green-600">Complète</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Mises à jour</td>
                      <td className="px-4 py-3 text-center text-green-600">Automatiques</td>
                      <td className="px-4 py-3 text-center text-orange-500">Planifiées / payantes</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-4 py-3 font-medium">Conformité locale (Maroc)</td>
                      <td className="px-4 py-3 text-center text-orange-500">À vérifier selon éditeur</td>
                      <td className="px-4 py-3 text-center text-green-600">Maîtrisée</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quand choisir Cloud */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                Quand choisir le Cloud ?
              </h2>
              <p className="leading-relaxed mb-4">
                Le déploiement Cloud est particulièrement adapté dans les situations suivantes :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span><strong>PME sans équipe IT interne</strong> : le Cloud délègue toute la gestion infrastructure à l&apos;éditeur. Vous payez un abonnement et vous concentrez sur votre métier.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span><strong>Mobilité des équipes</strong> : commerciaux terrain, sites multiples, télétravail — le Cloud offre un accès identique depuis n&apos;importe quel appareil et n&apos;importe où.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span><strong>Budget d&apos;investissement limité</strong> : l&apos;abonnement mensuel évite un investissement initial lourd en serveurs et licences perpétuelles.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span><strong>Croissance rapide</strong> : le Cloud s&apos;adapte facilement à l&apos;ajout de nouveaux utilisateurs ou modules sans intervention technique lourde.</span>
                </li>
              </ul>
            </div>

            {/* Quand choisir On-Premise */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                Quand choisir l&apos;On-Premise ?
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange-400 mt-2 shrink-0" />
                  <span><strong>Industrie lourde et production complexe</strong> : les ERP industriels comme Sage X3 offrent des niveaux de personnalisation (nomenclatures, gammes, MES) qui nécessitent souvent un déploiement on-premise.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange-400 mt-2 shrink-0" />
                  <span><strong>Données sensibles et confidentielles</strong> : secteurs bancaire, défense, pharmaceutique — la souveraineté des données impose un hébergement sur site ou dans un datacenter marocain certifié.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange-400 mt-2 shrink-0" />
                  <span><strong>Intégrations systèmes complexes</strong> : si votre ERP doit s&apos;interfacer avec des équipements industriels (SCADA, MES, automates) ou des systèmes legacy, l&apos;on-premise offre plus de flexibilité.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange-400 mt-2 shrink-0" />
                  <span><strong>Connectivité Internet insuffisante</strong> : zones industrielles avec connexions peu fiables — l&apos;on-premise garantit la continuité des opérations indépendamment de la qualité réseau.</span>
                </li>
              </ul>
            </div>

            {/* Offre hybride */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                L&apos;offre hybride de Thalès Informatique
              </h2>
              <p className="leading-relaxed mb-4">
                Face à cette dichotomie, Thalès Informatique propose une troisième voie : le déploiement hybride. Vos données critiques restent hébergées sur vos serveurs ou dans un datacenter marocain, tandis que certains modules (portail collaboratif, application mobile, reporting BI) bénéficient de la flexibilité du Cloud.
              </p>
              <p className="leading-relaxed mb-4">
                Cette approche permet de combiner la souveraineté des données, les performances on-premise et l&apos;agilité cloud — particulièrement adaptée aux ETI marocaines en cours de digitalisation avancée.
              </p>
              <div className="bg-blue-50 border-l-4 border-cta rounded-r-lg p-4">
                <p className="text-sm font-semibold text-cta mb-1">Notre recommandation</p>
                <p className="text-sm">Ne choisissez pas une architecture par défaut ou par mimétisme. Chaque entreprise a des contraintes uniques. Nos experts réalisent un diagnostic gratuit de votre situation pour vous orienter vers l&apos;architecture la plus adaptée à votre contexte marocain.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Parler à un expert pour choisir</h3>
              <p className="text-white/70 mb-6">
                Cloud, on-premise ou hybride ? Nos consultants analysent votre situation et vous recommandent l&apos;architecture la plus adaptée à votre entreprise et votre budget.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cta text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Parler à un expert pour choisir →
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </>
  );
}
