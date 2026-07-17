"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, ChevronRight, Layers, Building2, Plug } from "lucide-react";

const pillars = [
  {
    title: "Centralisez la gestion financière du groupe",
    desc: "Sage FRP 1000 réunit la comptabilité, la trésorerie, les immobilisations, les achats, les ventes et le pilotage budgétaire dans une plateforme modulaire adaptée aux directions financières.",
    icon: Layers,
  },
  {
    title: "Pilotez plusieurs sociétés dans un environnement unique",
    desc: "Centralisez les données de vos filiales, harmonisez les référentiels et sécurisez les flux entre sociétés grâce à une gestion multi-entités conçue pour les groupes et holdings.",
    icon: Building2,
  },
  {
    title: "Intégrez Sage FRP 1000 à votre système d'information",
    desc: "Disponible dans le cloud ou sur site, Sage FRP 1000 peut être connecté à vos applications métiers et évoluer selon les processus, les contraintes et l'organisation de votre groupe.",
    icon: Plug,
  },
];

const accountingCards = [
  {
    title: "Sage FRP 1000 Comptabilité",
    desc: "Centralisez les données comptables de vos différentes entités, automatisez les traitements récurrents et améliorez la fiabilité de vos clôtures financières avec une solution adaptée aux organisations multi-sociétés.",
    cta: "Découvrir Sage FRP 1000 Comptabilité",
  },
  {
    title: "Sage FRP 1000 Immobilisations",
    desc: "Gérez le cycle de vie de vos immobilisations, les plans d'amortissement, les acquisitions, les cessions et les arrêtés comptables dans un environnement commun à l'ensemble du groupe.",
    cta: "Découvrir Sage FRP 1000 Immobilisations",
  },
];

const financialFlowCards = [
  {
    title: "Sage FRP 1000 Trésorerie",
    desc: "Suivez les positions bancaires, analysez les flux financiers et construisez des prévisions de trésorerie pour vos différentes sociétés à partir d'informations centralisées et actualisées.",
    cta: "Découvrir Sage FRP 1000 Trésorerie",
  },
  {
    title: "Sage FRP 1000 Rapprochement Bancaire",
    desc: "Automatisez le rapprochement entre les écritures comptables et les relevés bancaires, identifiez les écarts et améliorez la fiabilité du contrôle financier.",
    cta: "Découvrir Sage FRP 1000 Rapprochement Bancaire",
  },
  {
    title: "Sage FRP 1000 Banque Paiement",
    desc: "Sécurisez la préparation, la validation et la transmission des paiements ainsi que les échanges bancaires de vos différentes entités.",
    cta: "Découvrir Sage FRP 1000 Banque Paiement",
  },
];

const operationalCards = [
  {
    title: "Sage FRP 1000 Achats",
    desc: "Structurez les demandes, les engagements, les commandes et le suivi des dépenses pour renforcer le contrôle des achats dans l'ensemble de vos entités.",
    cta: "Découvrir Sage FRP 1000 Achats",
  },
  {
    title: "Sage FRP 1000 Ventes",
    desc: "Gérez les devis, les commandes, la facturation et le suivi commercial dans un environnement connecté aux données financières de votre organisation.",
    cta: "Découvrir Sage FRP 1000 Ventes",
  },
  {
    title: "Sage FRP 1000 Stocks",
    desc: "Suivez les mouvements, les niveaux de stock et les flux entre sites afin d'améliorer la disponibilité des produits et la maîtrise des coûts.",
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
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span className="text-white" aria-current="page">Sage FRP 1000</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block text-xs font-bold text-accent tracking-widest bg-accent/10 px-3 py-1.5 rounded-full mb-4">
                INTÉGRATEUR SAGE FRP 1000 AU MAROC
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Sage FRP 1000 Maroc : gestion financière des groupes
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Centralisez la comptabilité, la trésorerie, les paiements, les immobilisations et le reporting de vos différentes entités avec Sage FRP 1000. Thalès Informatique accompagne les groupes et holdings marocains dans l&apos;intégration, le paramétrage, la migration, la formation et le support de leur solution financière.
              </p>
              <Link
                href="/contact"
                aria-label="Demander une démonstration personnalisée de Sage FRP 1000"
                className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors duration-200"
              >
                Demander une démo Sage FRP 1000 <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </motion.div>

            {/* Visual collage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="rounded-2xl border border-white/15 overflow-hidden h-48 sm:h-64">
                <img
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1782397949/Les_employ%C3%A9s_d_entrep%C3%B4t_parlent_de_logistique_et_de_distribution_Photo_Gratuite-thal%C3%A8s-informatique-sage-frp1000_btjmg3.png"
                  alt="Équipe logistique échangeant sur la gestion des flux et de la distribution"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl border border-white/15 overflow-hidden h-48 sm:h-64 bg-white flex items-center justify-center p-3">
                <img
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1782397864/Sage-FRP-1000-la-suite-financiere-evolutive-et-personnalisable-pour-repondre-aux-enjeux-des-directions-financieres_umcn5r.png"
                  alt="Interface Sage FRP 1000, la suite financière évolutive pour les directions financières"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                  fetchPriority="high"
                />
              </div>
              <div className="rounded-2xl border border-white/15 overflow-hidden h-48 sm:h-64">
                <img
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1782397950/Homme_avec_casque_de_travail_logistique_Photo_Gratuite-thal%C3%A8s-informatique-sagefrp1000_vwpaov.png"
                  alt="Collaborateur en environnement logistique utilisant les outils de pilotage Sage FRP 1000"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
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
              <span className="text-xs font-bold text-cta tracking-widest uppercase">GESTION FINANCIÈRE MULTI-SOCIÉTÉS</span>
              <h2 className="text-3xl font-bold text-primary mt-2">
                Une plateforme financière adaptée aux groupes multi-entités
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
                      <Icon size={22} className="text-cta" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-primary mb-3">{pillar.title}</h3>
                    <p className="text-sm text-secondary leading-relaxed">{pillar.desc}</p>
                  </motion.div>
                );
              })}
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center text-sm text-secondary mt-8"
            >
              Découvrez aussi notre expertise en{" "}
              <Link href="/metiers/comptabilite-finance" className="text-cta font-semibold hover:underline">gestion comptable et financière</Link>.
            </motion.p>
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
              <h2 className="text-3xl font-bold text-primary mt-2">Fiabilisez votre comptabilité et accélérez vos clôtures</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {accountingCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={accountingInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-border hover:border-cta hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
                >
                  <h3 className="font-bold text-xl text-primary mb-3">{card.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed flex-1 mb-4">{card.desc}</p>
                  <Link href="/contact" aria-label={`${card.cta} — demander une démonstration`} className="inline-flex items-center gap-1 text-cta text-sm font-semibold">
                    {card.cta} <ArrowRight size={16} aria-hidden="true" />
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
              <h2 className="text-3xl font-bold text-primary mt-2">Pilotez votre trésorerie, vos banques et vos paiements</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {financialFlowCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={flowsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-bg rounded-2xl p-6 border border-border hover:border-cta hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
                >
                  <h3 className="font-bold text-primary mb-3">{card.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed flex-1 mb-4">{card.desc}</p>
                  <Link href="/contact" aria-label={`${card.cta} — demander une démonstration`} className="inline-flex items-center gap-1 text-cta text-sm font-semibold">
                    {card.cta} <ArrowRight size={16} aria-hidden="true" />
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
              <h2 className="text-3xl font-bold text-primary mt-2">Centralisez les achats, les ventes et les stocks du groupe</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {operationalCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={operationalInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-border hover:border-cta hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
                >
                  <h3 className="font-bold text-primary mb-3">{card.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed flex-1 mb-4">{card.desc}</p>
                  <Link href="/contact" aria-label={`${card.cta} — demander une démonstration`} className="inline-flex items-center gap-1 text-cta text-sm font-semibold">
                    {card.cta} <ArrowRight size={16} aria-hidden="true" />
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
                Déployez Sage FRP 1000 dans votre groupe
              </h2>
              <p className="text-white/70 mb-4 max-w-xl mx-auto">
                Thalès Informatique vous accompagne dans l&apos;étude, l&apos;intégration, le paramétrage, la migration et le support de Sage FRP 1000 au Maroc et en Afrique.
              </p>
              <p className="text-white/60 text-sm mt-4 mb-8 max-w-xl mx-auto">Pour les PME, découvrez également <Link href="/solutions/sage-100" className="text-white hover:text-accent underline">Sage 100</Link>. Pour les besoins de gestion industrielle, de production et de supply chain, consultez <Link href="/solutions/sage-x3" className="text-white hover:text-accent underline">Sage X3</Link>.</p>
              <Link
                href="/contact"
                aria-label="Parler à un expert au sujet de Sage FRP 1000"
                className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors duration-200"
              >
                Parler à un expert Sage FRP 1000 <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
