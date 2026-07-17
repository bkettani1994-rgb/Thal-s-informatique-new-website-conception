"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, ChevronRight, ShieldCheck, TrendingUp, Mail, Scale, LayoutDashboard, Link2, Timer, FileWarning, FolderClock } from "lucide-react";

const features = [
  { title: "Scoring et évaluation du risque client", desc: "Analysez les informations disponibles sur chaque client afin d'adapter les conditions de paiement et les actions de suivi.", icon: ShieldCheck },
  { title: "Suivi des encours clients", desc: "Visualisez les montants dus, les limites de crédit, les échéances et les éventuels dépassements.", icon: TrendingUp },
  { title: "Relances clients automatisées", desc: "Organisez des scénarios de relance par e-mail, SMS ou courrier selon les échéances et la situation du client.", icon: Mail },
  { title: "Gestion des litiges", desc: "Centralisez les motifs de blocage, les responsabilités, les échanges et l'avancement du traitement de chaque litige.", icon: Scale },
  { title: "Pilotage du recouvrement", desc: "Suivez les créances échues, les actions menées, les promesses de paiement et les principaux indicateurs du poste client.", icon: LayoutDashboard },
  { title: "Connexion aux outils de gestion", desc: "Synchronisez les données clients et comptables avec les solutions compatibles utilisées par votre entreprise.", icon: Link2 },
];

const indicators = [
  { title: "Délai moyen de paiement", desc: "Analysez l'évolution du délai moyen de règlement de vos clients et identifiez les retards.", icon: Timer },
  { title: "Créances échues", desc: "Suivez les montants arrivés à échéance et priorisez les actions de recouvrement.", icon: FileWarning },
  { title: "Litiges en cours", desc: "Visualisez les litiges ouverts, leur ancienneté et leur état d'avancement.", icon: FolderClock },
];

const steps = [
  { num: "01", title: "Évaluer", desc: "Analysez le profil et le niveau de risque de chaque client." },
  { num: "02", title: "Surveiller", desc: "Suivez les encours, les échéances et les dépassements éventuels." },
  { num: "03", title: "Relancer", desc: "Planifiez les actions de relance selon la situation de chaque créance." },
  { num: "04", title: "Recouvrer", desc: "Suivez les échanges, les promesses de paiement, les litiges et les règlements." },
];

export default function EloficashClient() {
  const introRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const stepsRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-80px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-80px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const stepsInView = useInView(stepsRef, { once: true, margin: "-80px" });

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
              <span className="text-white" aria-current="page">Eloficash</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold text-accent tracking-widest bg-accent/10 px-3 py-1.5 rounded-full mb-4">
                SOLUTION ELOFICASH AU MAROC
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Eloficash Maroc : logiciel de recouvrement et de gestion du risque client
              </h1>
              <p className="text-xl text-white/70 max-w-2xl leading-relaxed mb-8">
                Centralisez le suivi des encours, l&apos;évaluation du risque client, les relances, les litiges et le recouvrement de vos créances avec Eloficash. Thalès Informatique accompagne les entreprises marocaines dans l&apos;intégration et le déploiement de la solution.
              </p>
              <Link
                href="/contact"
                aria-label="Demander une démonstration personnalisée d'Eloficash"
                className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors duration-200"
              >
                Demander une démo Eloficash <ArrowRight size={18} aria-hidden="true" />
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
                <span className="text-xs font-bold text-cta tracking-widest uppercase">GESTION DU POSTE CLIENT</span>
                <h2 className="text-3xl font-bold text-primary mt-2 mb-6">
                  Sécurisez votre poste client et accélérez vos encaissements
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Eloficash centralise les informations nécessaires au suivi du risque client, des encours, des créances échues, des relances et des litiges. La solution aide les équipes financières à structurer leur processus de recouvrement et à mieux prioriser leurs actions.
                </p>
                <p className="text-secondary leading-relaxed mb-4">
                  Déployée avec l&apos;accompagnement de Thalès Informatique, Eloficash peut être reliée à vos outils de gestion afin de synchroniser les données clients et comptables.
                </p>
                <p className="text-secondary leading-relaxed">
                  Découvrez également les solutions <Link href="/solutions/sage-x3" className="text-cta font-semibold hover:underline">Sage X3</Link> et <Link href="/solutions/sage-100" className="text-cta font-semibold hover:underline">Sage 100</Link> proposées par Thalès Informatique, ainsi que notre expertise en <Link href="/metiers/comptabilite-finance" className="text-cta font-semibold hover:underline">gestion financière et du poste client</Link>.
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
              <h2 className="text-3xl font-bold text-primary mt-2">Les principales fonctionnalités d&apos;Eloficash</h2>
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

        {/* Indicateurs de pilotage */}
        <section ref={statsRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold text-cta tracking-widest uppercase">INDICATEURS DE PILOTAGE</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Suivez les indicateurs clés de votre poste client</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {indicators.map((ind, i) => (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-cta hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                    <ind.icon size={22} className="text-cta" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{ind.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{ind.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section ref={stepsRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={stepsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold text-cta tracking-widest uppercase">PROCESSUS</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Structurez votre processus de recouvrement en quatre étapes</h2>
            </motion.div>
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-14 h-14 rounded-full bg-cta text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
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
                Améliorez votre gestion du poste client avec Eloficash
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Thalès Informatique vous accompagne dans l&apos;étude, l&apos;intégration, le paramétrage et le déploiement d&apos;Eloficash au Maroc.
              </p>
              <Link
                href="/contact"
                aria-label="Parler à un expert au sujet d'Eloficash"
                className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors duration-200"
              >
                Parler à un expert Eloficash <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
