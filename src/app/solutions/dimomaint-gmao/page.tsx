"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, ChevronRight } from "lucide-react";

const features = [
  { title: "Gestion des équipements & actifs", desc: "Référentiel complet de vos équipements, historique de maintenance, documents techniques.", icon: "⚙️" },
  { title: "Ordres de travail (OT)", desc: "Création, planification et suivi des ordres de travail en temps réel.", icon: "📋" },
  { title: "Maintenance préventive planifiée", desc: "Calendriers de maintenance, alertes automatiques, optimisation des interventions.", icon: "🗓️" },
  { title: "Maintenance corrective & dépannage", desc: "Prise en charge rapide des pannes, gestion des urgences, traçabilité.", icon: "🔧" },
  { title: "Gestion des pièces de rechange", desc: "Stock pièces détachées, seuils de réapprovisionnement, coûts de maintenance.", icon: "🔩" },
  { title: "Tableau de bord maintenance (MTBF, MTTR)", desc: "Indicateurs de performance clés : MTBF, MTTR, disponibilité, taux de panne.", icon: "📊" },
];

const industries = ["Industrie lourde", "Agroalimentaire", "Énergie", "BTP", "Transport"];

export default function DimomaintGmaoPage() {
  const introRef = useRef(null);
  const featuresRef = useRef(null);
  const kpiRef = useRef(null);
  const industriesRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-80px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-80px" });
  const kpiInView = useInView(kpiRef, { once: true, margin: "-80px" });
  const industriesInView = useInView(industriesRef, { once: true, margin: "-80px" });

  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-800 to-slate-900" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <ChevronRight size={14} />
              <span className="text-white">DimoMaint GMAO</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold text-emerald-400 tracking-widest bg-emerald-400/10 px-3 py-1.5 rounded-full mb-4">
                MAINTENANCE INDUSTRIELLE
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
                DimoMaint GMAO
              </h1>
              <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                Gestion de maintenance préventive et corrective
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section ref={introRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">LA SOLUTION GMAO</span>
                <h2 className="text-3xl font-bold text-primary mt-2 mb-6">
                  Maîtrisez votre maintenance industrielle
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  DimoMaint GMAO est la solution de gestion de maintenance utilisée par les industriels marocains pour optimiser la disponibilité de leurs équipements et réduire les coûts de maintenance.
                </p>
                <p className="text-secondary leading-relaxed">
                  <strong className="text-primary">Thalès Informatique</strong> en est distributeur et intégrateur officiel au Maroc. Nos techniciens certifiés DimoMaint assurent le déploiement, la formation et le support de proximité.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section ref={featuresRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">FONCTIONNALITÉS</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Toute la GMAO en une solution</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 border border-border hover:border-emerald-500 hover:shadow-lg transition-all duration-200"
                >
                  <span className="text-3xl mb-4 block">{feat.icon}</span>
                  <h3 className="font-bold text-primary mb-2">{feat.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* KPI Dashboard */}
        <section ref={kpiRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={kpiInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">RÉSULTATS</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Des gains mesurables dès le premier mois</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={kpiInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary rounded-2xl p-8 lg:p-12"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { metric: "98.2%", label: "Disponibilité équipements", sub: "Taux de disponibilité moyen constaté" },
                  { metric: "-32%", label: "Coût de maintenance", sub: "Réduction des coûts grâce au préventif" },
                  { metric: "847/mois", label: "OT traités", sub: "Ordres de travail gérés automatiquement" },
                ].map((kpi) => (
                  <div key={kpi.label} className="text-center">
                    <div className="text-4xl font-bold text-emerald-400 mb-2">{kpi.metric}</div>
                    <div className="text-white font-semibold mb-1">{kpi.label}</div>
                    <div className="text-white/50 text-sm">{kpi.sub}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industries */}
        <section ref={industriesRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={industriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">SECTEURS</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Industries couvertes</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={industriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {industries.map((ind) => (
                <span key={ind} className="px-5 py-2.5 bg-white border border-border rounded-full text-sm font-semibold text-secondary hover:border-emerald-500 hover:text-emerald-600 transition-colors duration-200">
                  {ind}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Optimisez votre maintenance avec DimoMaint
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Thalès Informatique, distributeur officiel DimoMaint au Maroc, vous accompagne de la mise en place jusqu&apos;au support.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-600 transition-colors duration-200"
              >
                Demander une démo <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
