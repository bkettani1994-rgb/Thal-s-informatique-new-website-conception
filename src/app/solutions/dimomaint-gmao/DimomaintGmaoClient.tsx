"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, ChevronRight, Settings, ClipboardList, CalendarClock, Wrench, PackageSearch, ChartNoAxesCombined, Activity, Coins } from "lucide-react";

const features = [
  { title: "Gestion des équipements et des actifs", desc: "Centralisez les équipements, leurs caractéristiques techniques, leurs documents et leur historique de maintenance.", icon: Settings },
  { title: "Ordres de travail", desc: "Créez, affectez, planifiez et suivez les interventions réalisées par les équipes techniques.", icon: ClipboardList },
  { title: "Maintenance préventive", desc: "Programmez les opérations récurrentes selon le calendrier, l'usage ou les besoins de chaque équipement.", icon: CalendarClock },
  { title: "Maintenance corrective", desc: "Enregistrez les pannes, organisez les dépannages et conservez la traçabilité des actions réalisées.", icon: Wrench },
  { title: "Gestion des pièces de rechange", desc: "Suivez les stocks, les mouvements, les seuils de réapprovisionnement et les coûts des pièces utilisées.", icon: PackageSearch },
  { title: "Indicateurs de maintenance", desc: "Analysez les données de maintenance à l'aide d'indicateurs tels que le MTBF, le MTTR, la disponibilité et le nombre de pannes.", icon: ChartNoAxesCombined },
];

const indicators = [
  { title: "Disponibilité des équipements", desc: "Suivez le temps de fonctionnement et identifiez les équipements les plus souvent indisponibles.", icon: Activity },
  { title: "Coûts de maintenance", desc: "Analysez les coûts liés aux interventions, aux ressources et aux pièces de rechange.", icon: Coins },
  { title: "Ordres de travail", desc: "Visualisez les interventions ouvertes, planifiées, en cours et terminées.", icon: ClipboardList },
];

const industries = ["Industrie lourde", "Agroalimentaire", "Énergie", "BTP", "Transport"];

export default function DimomaintGmaoClient() {
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
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span className="text-white" aria-current="page">DimoMaint GMAO</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold text-accent tracking-widest bg-accent/10 px-3 py-1.5 rounded-full mb-4">
                SOLUTION GMAO AU MAROC
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
                DimoMaint GMAO Maroc : logiciel de maintenance industrielle
              </h1>
              <p className="text-xl text-white/70 max-w-2xl leading-relaxed mb-8">
                Centralisez la gestion de vos équipements, ordres de travail, interventions préventives et correctives, pannes et pièces de rechange avec DimoMaint GMAO. Thalès Informatique accompagne les entreprises marocaines dans le déploiement et l&apos;adoption de la solution.
              </p>
              <Link
                href="/contact"
                aria-label="Demander une démonstration personnalisée de DimoMaint GMAO"
                className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors duration-200"
              >
                Demander une démo DimoMaint <ArrowRight size={18} aria-hidden="true" />
              </Link>
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
                <span className="text-xs font-bold text-cta tracking-widest uppercase">GESTION DE LA MAINTENANCE</span>
                <h2 className="text-3xl font-bold text-primary mt-2 mb-6">
                  Pilotez vos opérations de maintenance avec DimoMaint
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  DimoMaint GMAO centralise les informations liées aux équipements, aux interventions, aux pannes, aux ressources techniques et aux pièces de rechange. La solution permet aux équipes de maintenance de structurer leurs opérations et d&apos;améliorer la traçabilité des actions réalisées.
                </p>
                <p className="text-secondary leading-relaxed mb-4">
                  Thalès Informatique accompagne les entreprises marocaines dans l&apos;analyse des besoins, le paramétrage, la reprise des données, la formation des utilisateurs et la mise en œuvre de la solution.
                </p>
                <p className="text-secondary leading-relaxed">
                  DimoMaint peut être intégré à l&apos;environnement de gestion de votre entreprise. Découvrez également <Link href="/solutions/sage-x3" className="text-cta font-semibold hover:underline">Sage X3</Link> et <Link href="/solutions/sage-100" className="text-cta font-semibold hover:underline">Sage 100</Link>.
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
              <span className="text-xs font-bold text-cta tracking-widest uppercase">FONCTIONNALITÉS</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Les principales fonctionnalités de DimoMaint GMAO</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-cta hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <feat.icon size={20} className="text-cta" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{feat.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Indicateurs de maintenance */}
        <section ref={kpiRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={kpiInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold text-cta tracking-widest uppercase">INDICATEURS DE MAINTENANCE</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Pilotez la performance de vos opérations de maintenance</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={kpiInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary rounded-2xl p-8 lg:p-12"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {indicators.map((ind) => (
                  <div key={ind.title} className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                      <ind.icon size={22} className="text-accent" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <div className="text-white font-semibold mb-2">{ind.title}</div>
                    <div className="text-white/70 text-sm leading-relaxed">{ind.desc}</div>
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
              className="text-center mb-10 max-w-2xl mx-auto"
            >
              <span className="text-xs font-bold text-cta tracking-widest uppercase">SECTEURS</span>
              <h2 className="text-3xl font-bold text-primary mt-2 mb-3">DimoMaint GMAO pour différents secteurs d&apos;activité</h2>
              <p className="text-secondary leading-relaxed">
                DimoMaint peut s&apos;adapter aux organisations qui doivent planifier, tracer et piloter la maintenance de leurs équipements et infrastructures.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={industriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {industries.map((ind) => (
                <span key={ind} className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-semibold text-primary hover:border-cta hover:text-cta transition-colors duration-200">
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
                Structurez votre maintenance avec DimoMaint GMAO
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Thalès Informatique vous accompagne dans l&apos;étude, le paramétrage, le déploiement, la formation et l&apos;adoption de DimoMaint au Maroc.
              </p>
              <Link
                href="/contact"
                aria-label="Parler à un expert au sujet de DimoMaint GMAO"
                className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors duration-200"
              >
                Parler à un expert GMAO <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
