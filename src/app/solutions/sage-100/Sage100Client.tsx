"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, ChevronRight, ChevronDown, CheckCircle2, MessageCircle, Receipt, TrendingUp, Wallet, CreditCard } from "lucide-react";

const discoveryTabs = [
  {
    key: "compta",
    label: "Simplifiez votre comptabilité",
    title: "Prenez le contrôle de votre comptabilité",
    desc: "Visualisez et vérifiez toutes vos dépenses d'entreprise au même endroit, avec une comptabilité fiable et à jour en permanence.",
    items: [
      "Facturation et gestion des impayés et relances",
      "Rapprochement bancaire manuel ou automatisé",
      "Fonctions d'analyse des charges et des coûts de production",
    ],
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782381038/Screenshot_2026-06-25_at_10-50-08_Sage_100_-_Logiciel_de_gestion_Sage_Maroc_kyee1l.png",
    imageAlt: "Interface Sage 100 dédiée au suivi de la comptabilité et des dépenses d'entreprise",
  },
  {
    key: "commerce",
    label: "Développez votre performance commerciale",
    title: "Pilotez votre cycle commercial de bout en bout",
    desc: "Des devis à la facturation, gérez l'ensemble de votre chaîne commerciale dans un seul environnement connecté à votre comptabilité.",
    items: [
      "Devis, commandes et facturation centralisés",
      "Suivi des stocks en temps réel",
      "Tableau de bord commercial et suivi des marges",
    ],
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782381038/Screenshot_2026-06-25_at_10-50-13_Sage_100_-_Logiciel_de_gestion_Sage_Maroc_ko3gtl.png",
    imageAlt: "Interface Sage 100 pour le pilotage du cycle commercial, des devis à la facturation",
  },
  {
    key: "finance",
    label: "Optimisez vos ressources financières et placements",
    title: "Anticipez votre trésorerie au quotidien",
    desc: "Suivez vos flux financiers, anticipez vos besoins de trésorerie et sécurisez vos décisions d'investissement.",
    items: [
      "Suivi de trésorerie prévisionnel",
      "Gestion des encaissements et décaissements",
      "Reporting financier consolidé",
    ],
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782381038/Screenshot_2026-06-25_at_10-50-18_Sage_100_-_Logiciel_de_gestion_Sage_Maroc_hxdrw5.png",
    imageAlt: "Interface Sage 100 pour le suivi de trésorerie et le reporting financier",
  },
  {
    key: "cloud",
    label: "Restez flexible avec une solution 100% Cloud",
    title: "Accédez à votre ERP partout, à tout moment",
    desc: "Hébergée dans le cloud, votre solution Sage 100 reste accessible en toute sécurité depuis n'importe quel appareil connecté.",
    items: [
      "Accès sécurisé multi-utilisateurs",
      "Sauvegardes automatiques et mises à jour incluses",
      "Disponibilité garantie sans infrastructure à gérer",
    ],
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782381038/Screenshot_2026-06-25_at_10-50-24_Sage_100_-_Logiciel_de_gestion_Sage_Maroc_igvpan.png",
    imageAlt: "Interface Sage 100 accessible en mode cloud depuis n'importe quel appareil connecté",
  },
];

const plans = [
  {
    title: "Comptabilité",
    sub: "La solution parfaite pour les PME",
    popular: false,
    features: ["Suivi trésorerie", "Gestion des dépenses"],
    cta: "Découvrir Sage 100 Comptabilité",
  },
  {
    title: "Gestion Commerciale",
    sub: "Une force de vente organisée et efficace",
    popular: false,
    features: ["Maîtrise de l'intégralité de votre chaîne commerciale", "Signature électronique", "Gestion des stocks", "Stockage de vos documents de facturation"],
    cta: "Découvrir Sage 100 Gestion Commerciale",
  },
  {
    title: "Entreprise",
    sub: "Un regroupement de logiciels pour gérer votre entreprise de bout en bout",
    popular: true,
    features: ["Sage 100 Comptabilité", "Sage 100 Gestion Commerciale", "Sage 100 Moyens de paiement", "Sage 100 Immobilisations"],
    cta: "Découvrir Sage 100 Entreprise",
  },
];

const complementary = [
  { title: "Sage Automatisation Comptable", desc: "Dématérialisez toutes les étapes du traitement comptable de vos factures fournisseurs, plus simple, plus rapide, plus écolo.", icon: Receipt, gradient: "from-orange-500 via-amber-500 to-yellow-400" },
  { title: "Sage Business Reporting", desc: "Utilisez des analyses et reportings personnalisés et des tableaux de bord actualisés en temps réel pour prendre les meilleures décisions.", icon: TrendingUp, gradient: "from-emerald-500 via-teal-500 to-cyan-400" },
  { title: "Sage 100 Trésorerie", desc: "Gérez efficacement votre trésorerie et maîtrisez vos coûts : facilitez la gestion quotidienne de votre entreprise, maîtrisez et anticipez tous les risques liés à la trésorerie.", icon: Wallet, gradient: "from-blue-600 via-indigo-500 to-violet-500" },
  { title: "AP Gestion des Règlements", desc: "Révolutionnez votre gestion financière en automatisant vos flux de trésorerie, encaissements et décaissements, pour une visibilité en temps réel de votre santé financière.", icon: CreditCard, gradient: "from-fuchsia-500 via-purple-500 to-violet-700" },
];

const faqs = [
  {
    q: "C'est quoi Sage 100 et c'est pour qui ?",
    a: "Sage 100 est un ERP de gestion intégrée pensé pour les PME et ETI marocaines. Il couvre la comptabilité, la gestion commerciale, la paie et les stocks dans une solution unique, simple à prendre en main.",
  },
  {
    q: "Combien coûte Sage 100 ?",
    a: "Le tarif dépend du nombre d'utilisateurs, des modules choisis (Comptabilité, Gestion Commerciale, Entreprise) et du mode d'hébergement. Contactez nos experts Thalès Informatique pour un chiffrage adapté à votre activité.",
  },
  {
    q: "Comment installer Sage 100 ?",
    a: "Thalès Informatique prend en charge l'installation, le paramétrage et la migration de vos données existantes. Le déploiement type s'effectue en quelques semaines, avec une formation de vos équipes incluse.",
  },
  {
    q: "Quels sont les modules qui peuvent compléter Sage 100 ?",
    a: "Sage 100 peut être enrichi par des modules complémentaires : automatisation comptable, reporting décisionnel, gestion de trésorerie ou gestion des règlements fournisseurs.",
  },
  {
    q: "Quels sont les avantages du logiciel Sage 100 dans le cloud Microsoft Azure ?",
    a: "Hébergé sur Microsoft Azure, Sage 100 est accessible en permanence, avec des sauvegardes automatiques, une sécurité renforcée et aucune infrastructure serveur à gérer en interne.",
  },
];

function FaqAccordionItem({ item }: { item: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/15 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
      >
        <span className="font-semibold text-white text-sm md:text-base">{item.q}</span>
        <ChevronDown
          size={18}
          className={`text-accent shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 py-4 bg-black/20 border-t border-white/10">
          <p className="text-white/65 text-sm leading-relaxed">{item.a}</p>
        </div>
      )}
    </div>
  );
}

export default function Sage100Client() {
  const discoveryRef = useRef(null);
  const plansRef = useRef(null);
  const complementaryRef = useRef(null);
  const continueRef = useRef(null);
  const faqRef = useRef(null);

  const discoveryInView = useInView(discoveryRef, { once: true, margin: "-80px" });
  const plansInView = useInView(plansRef, { once: true, margin: "-80px" });
  const complementaryInView = useInView(complementaryRef, { once: true, margin: "-80px" });
  const continueInView = useInView(continueRef, { once: true, margin: "-80px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-80px" });

  const [activeTab, setActiveTab] = useState(discoveryTabs[0].key);
  const selectedTab = discoveryTabs.find((t) => t.key === activeTab)!;

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
              <span className="text-white">Sage 100</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block text-xs font-bold text-accent tracking-widest bg-accent/10 px-3 py-1.5 rounded-full mb-4">
                SAGE 100
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Gérez votre entreprise avec Sage 100
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Maîtrisez les deux piliers de votre entreprise avec les modules Sage 100 Comptabilité et Sage 100 Gestion Commerciale. Hébergée dans le cloud Microsoft Azure, Sage 100 est accessible partout, à tout moment.
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
              <div className="sm:col-span-1 h-48 sm:h-64 rounded-2xl border border-white/15 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1782380898/gestion_commerce_sage_100_thal%C3%A8s_informatique_krgrfr.jpg"
                  alt="Gestion commerciale d'une PME marocaine pilotée avec l'ERP Sage 100"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="sm:col-span-1 h-48 sm:h-64 rounded-2xl border border-white/15 overflow-hidden bg-white">
                <img
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1782380734/interface-sage-100-cloud_thal%C3%A8s_informatique_gorcph.webp"
                  alt="Interface cloud de l'ERP Sage 100 affichant un tableau de bord de gestion d'entreprise"
                  className="w-full h-full object-contain p-3"
                  loading="lazy"
                />
              </div>
              <div className="sm:col-span-1 h-48 sm:h-64 rounded-2xl border border-white/15 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1782380899/comptabilit%C3%A9_cabinet_sage_100_maroc_thal%C3%A8s_informatique_mqxbz1.jpg"
                  alt="Cabinet comptable au Maroc utilisant Sage 100 pour la comptabilité de ses clients"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Découvrez tout ce que Sage 100 peut faire */}
        <section ref={discoveryRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={discoveryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12 max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-primary">Découvrez tout ce que Sage 100 peut faire pour votre activité</h2>
              <p className="text-secondary mt-3">
                Collaborez en temps réel avec vos équipes grâce à une solution évolutive et abordable, conçue pour les PME de toutes industries. Restez en conformité, personnalisez la solution selon votre rythme et développez votre activité sereinement.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={discoveryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid lg:grid-cols-[280px_1fr] gap-8"
            >
              {/* Tab list */}
              <div className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible border-b lg:border-b-0 lg:border-r border-border pb-2 lg:pb-0 lg:pr-2">
                {discoveryTabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-semibold whitespace-nowrap lg:whitespace-normal transition-colors duration-150 cursor-pointer ${
                      activeTab === tab.key
                        ? "bg-cta/10 text-cta"
                        : "text-secondary hover:bg-bg hover:text-primary"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{selectedTab.title}</h3>
                  <p className="text-secondary leading-relaxed mb-6">{selectedTab.desc}</p>
                  <ul className="space-y-2.5">
                    {selectedTab.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-secondary leading-relaxed">
                        <CheckCircle2 size={15} className="text-cta shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="h-56 sm:h-72 md:h-80 rounded-2xl border border-border overflow-hidden bg-white flex items-center justify-center p-4">
                  <motion.img
                    key={selectedTab.key}
                    src={selectedTab.image}
                    alt={selectedTab.imageAlt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Choisissez votre solution */}
        <section ref={plansRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={plansInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary">Choisissez votre solution</h2>
              <p className="text-secondary mt-3">Gérez la comptabilité, la gestion commerciale, ou les deux.</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 items-stretch">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={plansInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex flex-col h-full bg-white rounded-2xl p-7 border-2 ${
                    plan.popular ? "border-cta shadow-xl" : "border-border"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cta text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      La plus populaire
                    </span>
                  )}
                  <h3 className="font-bold text-primary text-xl mb-1 mt-2">{plan.title}</h3>
                  <p className="text-sm text-secondary mb-5">{plan.sub}</p>
                  <Link
                    href="/contact"
                    className={`block text-center w-full font-semibold px-4 py-3 rounded-xl mb-6 transition-colors duration-200 ${
                      plan.popular
                        ? "bg-cta text-white hover:bg-blue-600"
                        : "border border-cta text-cta hover:bg-cta/5"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                  <p className="text-xs font-bold text-secondary/60 uppercase tracking-widest mb-3">Fonctionnalités incluses :</p>
                  <ul className="space-y-2 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-secondary leading-relaxed">
                        <CheckCircle2 size={15} className="text-cta shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions complémentaires */}
        <section ref={complementaryRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={complementaryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12 max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-primary">Les solutions complémentaires</h2>
              <p className="text-secondary mt-3">
                Augmentez la puissance et la couverture de votre solution Sage 100 en y associant des logiciels complémentaires. Optionnels et payants, ils renforcent l&apos;intégration et l&apos;efficacité de vos processus de gestion.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complementary.map((sol, i) => (
                <motion.div
                  key={sol.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={complementaryInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl border border-border hover:border-cta hover:shadow-lg transition-all duration-200 overflow-hidden"
                >
                  <div className={`relative h-28 bg-gradient-to-br ${sol.gradient} overflow-hidden`}>
                    <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/15" />
                    <div className="absolute -right-2 top-4 w-12 h-12 rounded-full bg-white/10" />
                    <div className="relative h-full flex items-center justify-center">
                      <sol.icon size={36} className="text-white drop-shadow-md" strokeWidth={1.75} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-primary mb-2">{sol.title}</h3>
                    <p className="text-sm text-secondary leading-relaxed">{sol.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comment continuer ma découverte */}
        <section ref={continueRef} className="py-20 bg-bg">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={continueInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Comment continuer ma découverte de Sage 100 ?</h2>
              <p className="text-secondary mb-10">
                Vous pouvez dès maintenant demander une démo à un expert qui pourra répondre à toutes vos questions ou appeler le{" "}
                <a href="tel:+212522548780" className="text-cta font-semibold hover:underline">+212 5 22 54 87 80</a>.
              </p>
              <div className="bg-white rounded-2xl border border-border p-8">
                <div className="w-14 h-14 rounded-full bg-cta/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={24} className="text-cta" />
                </div>
                <h3 className="font-bold text-primary text-lg mb-2">Je préfère une démo pour valider mon choix</h3>
                <p className="text-sm text-secondary leading-relaxed mb-6 max-w-md mx-auto">
                  Nos experts vous guident à travers Sage 100 : présentation de l&apos;ensemble des fonctionnalités, identification de la solution la plus adaptée à vos besoins.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-cta text-cta font-semibold px-6 py-3 rounded-xl hover:bg-cta hover:text-white transition-colors duration-200"
                >
                  Réservez une démo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section ref={faqRef} className="py-20 bg-primary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white">FAQs sur Sage 100</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-3"
            >
              {faqs.map((item) => (
                <FaqAccordionItem key={item.q} item={item} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Prêt à digitaliser votre PME avec Sage 100 ?
              </h2>
              <p className="text-secondary mb-8 max-w-xl mx-auto">
                Contactez nos experts Thalès Informatique pour une démonstration gratuite adaptée à votre secteur.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors duration-200"
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
