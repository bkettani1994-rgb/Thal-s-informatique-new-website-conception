"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Clock, User, Tag } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function LeanManufacturingErpPage() {
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
            Production
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
          >
            Lean manufacturing et ERP : le duo gagnant pour l&apos;industrie marocaine
          </motion.h1>
          <div className="flex flex-wrap gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><User size={14} /> Équipe Thalès Informatique</span>
            <span className="flex items-center gap-1"><Tag size={14} /> Mars 2026</span>
            <span className="flex items-center gap-1"><Clock size={14} /> 6 min de lecture</span>
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
                En 2026, l&apos;industrie marocaine est à la croisée des chemins : pression sur les coûts de production, exigences qualité des donneurs d&apos;ordre internationaux, concurrence des pays à bas coût. Pour rester compétitifs, les industriels marocains doivent combiner deux approches complémentaires : le Lean manufacturing et l&apos;ERP.
              </p>
              <p className="leading-relaxed">
                Seuls, chacun de ces outils produit des résultats limités. Ensemble, ils créent un système de performance industrielle capable de transformer radicalement vos opérations. Voici pourquoi et comment.
              </p>
            </div>

            {/* Principes Lean */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Les principes fondamentaux du Lean
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">5S — Organisation du poste de travail</h3>
                  <p className="leading-relaxed">
                    Seiri (trier), Seiton (ranger), Seiso (nettoyer), Seiketsu (standardiser), Shitsuke (maintenir) : les 5S créent les conditions d&apos;un travail efficace en éliminant le désordre physique et informationnel. Un atelier 5S bien appliqué réduit les temps de recherche d&apos;outils et de matière de 20 à 30 %.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Kanban — Pilotage par la demande</h3>
                  <p className="leading-relaxed">
                    Le Kanban est un système de signalisation visuelle qui déclenche la production ou le réapprovisionnement uniquement quand c&apos;est nécessaire. Il évite la surproduction (le premier des sept gaspillages Lean) et réduit les stocks tampons coûteux. Dans un environnement ERP, le Kanban devient électronique et se synchronise automatiquement avec les ordres de fabrication.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Flux tiré et réduction des gaspillages</h3>
                  <p className="leading-relaxed">
                    Le flux tiré inverse la logique traditionnelle : ce n&apos;est pas la production qui pousse les produits vers le client, mais la demande client qui tire la production. Cette approche élimine les gaspillages (muda) : surproduction, attentes, transports inutiles, stocks excessifs, défauts, surprocessing, mouvements inutiles.
                  </p>
                </div>
              </div>
            </div>

            {/* ERP amplifie le Lean */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                Pourquoi l&apos;ERP amplifie le Lean
              </h2>
              <p className="leading-relaxed mb-4">
                Le Lean sans données fiables reste une démarche intuitive. L&apos;ERP apporte la dimension numérique qui transforme les principes Lean en résultats mesurables et durables :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span><strong>Traçabilité temps réel :</strong> Sage X3 trace chaque composant, chaque opération, chaque rebut. Cette visibilité permet d&apos;identifier les goulots d&apos;étranglement et les sources de gaspillage avec précision.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span><strong>MRP (Material Requirements Planning) :</strong> Le moteur MRP de Sage X3 calcule automatiquement les besoins en composants et matières en fonction du plan de production, en cohérence avec les principes de flux tiré.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span><strong>Gestion des Ordres de Fabrication (OF) :</strong> Les OF électroniques dans Sage X3 remplacent les documents papier, réduisent les erreurs de saisie et permettent un suivi en temps réel de l&apos;avancement de production.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span><strong>Tableaux de bord OEE :</strong> Sage X3 calcule automatiquement le Taux de Rendement Synthétique (TRS/OEE) par machine, par ligne et par site — le KPI clé du Lean manufacturing.</span>
                </li>
              </ul>
            </div>

            {/* Résultats concrets */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                4 résultats concrets avec Sage X3 + Lean
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-5 border border-border">
                  <p className="text-3xl font-bold text-cta mb-1">−35 %</p>
                  <p className="text-sm text-secondary">de réduction des stocks de matières premières grâce à la synchronisation MRP / Kanban dans un équipementier automobile de Tanger.</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-5 border border-border">
                  <p className="text-3xl font-bold text-cta mb-1">+22 %</p>
                  <p className="text-sm text-secondary">de gain de productivité sur les lignes d&apos;assemblage d&apos;un fabricant de luminaires de Casablanca après déploiement du module production Sage X3.</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-5 border border-border">
                  <p className="text-3xl font-bold text-cta mb-1">−60 %</p>
                  <p className="text-sm text-secondary">de réduction des non-conformités qualité dans une usine agroalimentaire de Meknès grâce à la traçabilité lot par lot dans Sage X3.</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-5 border border-border">
                  <p className="text-3xl font-bold text-cta mb-1">−15 j</p>
                  <p className="text-sm text-secondary">de réduction du délai de fabrication moyen dans une industrie plastique de Berrechid, de 25 jours à 10 jours, grâce au pilotage par la demande.</p>
                </div>
              </div>
            </div>

            {/* Roadmap */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                Par où commencer ? Roadmap en 3 phases
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-cta text-white flex items-center justify-center font-bold text-sm shrink-0 mt-1">1</div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phase 1 — Diagnostic et cartographie (1 à 2 mois)</h3>
                    <p className="text-sm leading-relaxed">Réaliser une cartographie de la chaîne de valeur (VSM) pour identifier les gaspillages prioritaires. En parallèle, auditer les données de votre ERP actuel (qualité des nomenclatures, gammes opératoires, paramètres MRP).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-cta text-white flex items-center justify-center font-bold text-sm shrink-0 mt-1">2</div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phase 2 — Déploiement Lean + ERP sur un périmètre pilote (3 à 6 mois)</h3>
                    <p className="text-sm leading-relaxed">Sélectionner une ligne ou un département pilote pour déployer simultanément les chantiers 5S, le Kanban électronique et le module production Sage X3. Mesurer les résultats avant de généraliser.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-cta text-white flex items-center justify-center font-bold text-sm shrink-0 mt-1">3</div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phase 3 — Déploiement général et amélioration continue (6 à 18 mois)</h3>
                    <p className="text-sm leading-relaxed">Étendre le modèle à l&apos;ensemble du site ou des sites. Mettre en place les tableaux de bord OEE, les revues de performance hebdomadaires et les chantiers Kaizen réguliers, alimentés par les données Sage X3.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Découvrir Sage X3 pour l&apos;industrie</h3>
              <p className="text-white/70 mb-6">
                Nos consultants Sage X3 spécialisés en industrie marocaine vous présentent comment l&apos;ERP peut amplifier votre démarche Lean. Demandez une démonstration personnalisée.
              </p>
              <Link
                href="/solutions/sage-x3"
                className="inline-flex items-center gap-2 bg-cta text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Découvrir Sage X3 pour l&apos;industrie →
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </>
  );
}
