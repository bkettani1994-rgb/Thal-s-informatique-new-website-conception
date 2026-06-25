"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, ChevronRight, Layers, Building2, Plug } from "lucide-react";

const pillars = [
  {
    title: "Une seule solution pour un pilotage complet",
    desc: "Comptabilité, processus opérationnels, pilotage budgétaire : Sage FRP 1000 réunit tous les besoins de votre direction financière dans une seule plateforme modulaire. Vous activez les briques utiles à votre groupe et faites évoluer la solution au rythme de votre croissance.",
    icon: Layers,
  },
  {
    title: "Optez pour une gestion multi-sociétés",
    desc: "Grâce à une base de données unique, Sage FRP 1000 vous permet d'agréger facilement les données de toutes vos filiales, d'harmoniser et de sécuriser votre référentiel, et de gérer nativement vos flux intra-groupe.",
    icon: Building2,
  },
  {
    title: "Une plateforme technologique ouverte",
    desc: "Interconnectée avec vos applications existantes, disponible en cloud comme en on-premise, Sage FRP 1000 est une solution prête à l'emploi qui se déploie rapidement et s'ajuste à l'organisation de votre groupe.",
    icon: Plug,
  },
];

const accountingCards = [
  {
    title: "Comptabilité",
    desc: "Une solution qui s'adapte au cœur de votre métier pour collecter de façon homogène l'ensemble de vos données financières. Sage FRP 1000 Comptabilité offre une large couverture fonctionnelle, une mise en conformité permanente et des délais de clôture optimisés.",
    cta: "Découvrir Sage FRP 1000 Comptabilité",
  },
  {
    title: "Immobilisations",
    desc: "Maîtrisez les impacts de votre stratégie d'investissement avec Sage FRP 1000 Immobilisations : une gestion experte qui couvre tout le cycle de vie de vos immobilisations, avec une structure évolutive et des arrêtés comptables optimisés.",
    cta: "Découvrir Sage FRP 1000 Immobilisations",
  },
];

const financialFlowCards = [
  {
    title: "Trésorerie",
    desc: "Obtenez une vision en temps réel et sécurisée de vos flux financiers : Sage FRP 1000 Trésorerie couvre les besoins des services de trésorerie et des directions financières, quelle que soit l'organisation de votre groupe.",
    cta: "Découvrir Sage FRP 1000 Trésorerie",
  },
  {
    title: "Rapprochement Bancaire",
    desc: "Fiabilisez vos rapprochements bancaires et identifiez immédiatement les écarts grâce à des contrôles automatisés, pour produire un état de rapprochement précis dans les meilleurs délais.",
    cta: "Découvrir Sage FRP 1000 Rapprochement Bancaire",
  },
  {
    title: "Banque Paiement",
    desc: "Sécurisez vos processus de règlement et vos échanges bancaires entre vos différentes entités : gestion, sécurité et télétransmission de vos moyens de paiement et relevés bancaires.",
    cta: "Découvrir Sage FRP 1000 Banque Paiement",
  },
];

const operationalCards = [
  {
    title: "Achats",
    desc: "Pilotez l'ensemble de votre chaîne d'achats (engagements, stocks, ventes, notes de frais) et maîtrisez vos dépenses de bout en bout grâce à une vision unifiée de vos flux.",
    cta: "Découvrir Sage FRP 1000 Achats",
  },
  {
    title: "Ventes",
    desc: "Administrez votre cycle de ventes de bout en bout, optimisez l'ensemble des flux liés à votre activité commerciale et renforcez la collaboration entre vos équipes.",
    cta: "Découvrir Sage FRP 1000 Ventes",
  },
  {
    title: "Stocks",
    desc: "Gardez le contrôle de vos stocks avec un outil métier intuitif qui maîtrise la chaîne de vos dépenses dans son intégralité et optimise les flux liés à votre activité commerciale.",
    cta: "Découvrir Sage FRP 1000 Stocks",
  },
];

export default function SageFrp1000Client() {
  const pillarsRef = useRef(null);
  const accountingRef = useRef(null);
  const flowsRef = useRef(null);
  const operationalRef = useRef(null);

  const pillarsInView = useInView(pillarsRef, { once: true, margin: "-80px" });
  const accountingInView = useInView(accountingRef, { once: true, margin: "-80px" });
  const flowsInView = useInView(flowsRef, { once: true, margin: "-80px" });
  const operationalInView = useInView(operationalRef, { once: true, margin: "-80px" });

  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-800 to-slate-900" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <ChevronRight size={14} />
              <span className="text-white">Sage FRP 1000</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block text-xs font-bold text-accent tracking-widest bg-accent/10 px-3 py-1.5 rounded-full mb-4">
                GROUPES &amp; HOLDINGS
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Sage FRP 1000
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                La plateforme financière qui centralise la consolidation, le reporting groupe et le pilotage multi-entités de vos filiales et holdings.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors duration-200"
              >
                Demander une démo <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Visual collage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {["Consolidation des comptes", "Interface Sage FRP 1000", "Reporting financier groupe"].map((label) => (
                <div
                  key={label}
                  className="sm:col-span-1 h-48 sm:h-64 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white/40 text-xs text-center px-3"
                >
                  {label}
                  <br />
                  (visuel à intégrer)
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pillars */}
        <section ref={pillarsRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="text-xs font-bold text-cta tracking-widest uppercase">UN OUTIL, TOUS VOS ENJEUX</span>
              <h2 className="text-3xl font-bold text-primary mt-2">
                L'outil de pilotage financier qui s'adapte à votre groupe
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-bg rounded-2xl p-8 border border-border"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cta/10 flex items-center justify-center mb-4">
                      <Icon size={22} className="text-cta" />
                    </div>
                    <h3 className="font-bold text-primary mb-3">{pillar.title}</h3>
                    <p className="text-sm text-secondary leading-relaxed">{pillar.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gestion comptable */}
        <section ref={accountingRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={accountingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold text-cta tracking-widest uppercase">GESTION COMPTABLE</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Une comptabilité fiable, du quotidien à la clôture</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {accountingCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={accountingInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-border hover:border-cta hover:shadow-lg transition-all duration-200 flex flex-col"
                >
                  <h3 className="font-bold text-xl text-primary mb-3">{card.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed flex-1 mb-4">{card.desc}</p>
                  <Link href="/contact" className="inline-flex items-center gap-1 text-cta text-sm font-semibold hover:gap-2 transition-all">
                    {card.cta} <ArrowRight size={16} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Flux financiers */}
        <section ref={flowsRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={flowsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold text-cta tracking-widest uppercase">FLUX FINANCIERS</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Sécurisez vos flux de trésorerie et vos paiements</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {financialFlowCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={flowsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-bg rounded-2xl p-6 border border-border hover:border-cta hover:shadow-lg transition-all duration-200 flex flex-col"
                >
                  <h3 className="font-bold text-primary mb-3">{card.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed flex-1 mb-4">{card.desc}</p>
                  <Link href="/contact" className="inline-flex items-center gap-1 text-cta text-sm font-semibold hover:gap-2 transition-all">
                    {card.cta} <ArrowRight size={16} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Processus opérationnels */}
        <section ref={operationalRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={operationalInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold text-cta tracking-widest uppercase">PROCESSUS OPÉRATIONNELS</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Maîtrisez vos achats, ventes et stocks de bout en bout</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {operationalCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={operationalInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-border hover:border-cta hover:shadow-lg transition-all duration-200 flex flex-col"
                >
                  <h3 className="font-bold text-primary mb-3">{card.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed flex-1 mb-4">{card.desc}</p>
                  <Link href="/contact" className="inline-flex items-center gap-1 text-cta text-sm font-semibold hover:gap-2 transition-all">
                    {card.cta} <ArrowRight size={16} />
                  </Link>
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
                Pilotez votre groupe avec Sage FRP 1000
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Thalès Informatique vous accompagne dans le déploiement de Sage FRP 1000 au Maroc.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors duration-200"
              >
                Contacter un expert <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
