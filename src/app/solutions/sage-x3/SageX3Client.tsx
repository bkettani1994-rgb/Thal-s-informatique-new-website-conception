"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, CheckCircle2, ChevronRight, Download, Factory, Truck, LineChart, Wheat, Cog, FlaskConical, Briefcase } from "lucide-react";

const capabilities = [
  {
    title: "Gestion de la production",
    icon: Factory,
    gradient: "from-orange-500 via-amber-500 to-yellow-400",
    items: [
      "Suivi en temps réel des ordres de fabrication",
      "Planification et ordonnancement des ateliers",
      "Traçabilité complète des lots et numéros de série",
      "Gestion de la qualité à chaque étape",
    ],
  },
  {
    title: "Gestion de la chaîne d'approvisionnement",
    icon: Truck,
    gradient: "from-emerald-500 via-teal-500 to-cyan-400",
    items: [
      "Pilotage des achats et des fournisseurs",
      "Optimisation des niveaux de stock multi-sites",
      "Gestion des entrepôts et de la logistique",
      "Prévision de la demande et réapprovisionnement",
    ],
  },
  {
    title: "Gestion financière",
    icon: LineChart,
    gradient: "from-blue-600 via-indigo-500 to-violet-500",
    items: [
      "Comptabilité multi-sociétés et multi-devises",
      "Clôtures accélérées et consolidation groupe",
      "Pilotage budgétaire et contrôle de gestion",
      "Conformité fiscale et réglementaire au Maroc",
    ],
  },
];

const copilotPoints = [
  "Réduisez les tâches répétitives grâce à l'automatisation intelligente des processus de production et de distribution",
  "Accédez à des recommandations contextuelles directement dans vos écrans Sage X3 au quotidien",
  "Identifiez plus rapidement les anomalies financières grâce à l'analyse augmentée des données",
  "Gagnez du temps sur les opérations courantes pour vous concentrer sur les décisions stratégiques",
];

const completeManagementTabs = [
  {
    key: "complete",
    label: "Gestion d'entreprise complète",
    title: "Gestion d'entreprise complète",
    desc: "Tous vos processus opérationnels peuvent être gérés et configurés depuis un seul et même endroit. Planifiez vos finances en temps réel, restez en conformité et automatisez votre comptabilité. Prenez le contrôle de la gestion de la chaîne logistique en matière de stocks, d'achats et de logistique. Optimisez la manière dont vous supervisez les processus de fabrication, la production et le contrôle qualité.",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782376656/Screenshot_2026-06-25_at_09-37-17_Sage_X3_Sage_Maroc_znqbvy.png",
    imageAlt: "Tableau de bord Sage X3 pour la gestion d'entreprise complète : finance, achats, stocks et production",
  },
  {
    key: "collab",
    label: "Collaboration améliorée",
    title: "Collaboration améliorée",
    desc: "Gérez les flux de travail entre plusieurs équipes et sur plusieurs sites. Regroupez vos services grâce à des processus qui fonctionnent de manière fluide et harmonisée.",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782376715/Screenshot_2026-06-25_at_09-38-22_Sage_X3_Sage_Maroc_gefaqm.png",
    imageAlt: "Interface Sage X3 illustrant la collaboration entre équipes et sites multiples",
  },
  {
    key: "info",
    label: "Informations clés par rôle",
    title: "Informations clés par rôle",
    desc: "Accédez à des données pertinentes grâce à un accès personnalisé et à une visualisation claire. Vous pourrez visualiser et partager un aperçu complet de vos données pour aider vos équipes à prendre des décisions plus rapidement, avec la possibilité d'explorer les informations en détail.",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782376770/Screenshot_2026-06-25_at_09-39-23_Sage_X3_Sage_Maroc_en6wt4.png",
    imageAlt: "Tableaux de bord personnalisés par rôle dans Sage X3 pour une prise de décision rapide",
  },
  {
    key: "mobile",
    label: "Solution mobile flexible",
    title: "Solution mobile flexible",
    desc: "La planification en déplacement n'a jamais été aussi simple. Une solution simple, cloud et mobile, qui vous permet d'accéder à vos informations partout et à tout moment.",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782376850/Screenshot_2026-06-25_at_09-40-04_Sage_X3_Sage_Maroc_wgj99v.png",
    imageAlt: "Application mobile Sage X3 accessible en déplacement sur smartphone et tablette",
  },
  {
    key: "config",
    label: "Configurable selon vos besoins",
    title: "Configurable selon vos besoins",
    desc: "Faites évoluer le logiciel pour qu'il s'adapte à vos processus métier spécifiques. Adaptez-le à vos besoins sectoriels et exigences légales, ajoutez des API ou des applications personnalisées, et intégrez-le à d'autres solutions pour une expérience entièrement sur mesure.",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782376894/Screenshot_2026-06-25_at_09-41-28_Sage_X3_Sage_Maroc_su77oz.png",
    imageAlt: "Configuration personnalisée de Sage X3 avec API et applications sur mesure",
  },
  {
    key: "ia",
    label: "Productivité optimisée par l'IA",
    title: "Productivité optimisée par l'IA",
    desc: "L'IA intégrée agit comme votre assistant personnel et fournit des informations clés automatisées et des analyses prédictives.",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782376981/Screenshot_2026-06-25_at_09-42-46_Sage_X3_Sage_Maroc_nczqiw.png",
    imageAlt: "Assistant intelligence artificielle intégré à Sage X3 pour des analyses prédictives",
  },
];

const sectors = [
  {
    title: "Secteur agroalimentaire",
    icon: Wheat,
    gradient: "from-lime-500 via-green-500 to-emerald-600",
    items: ["Traçabilité", "Gestion des lots et dates de péremption", "Conformité sanitaire", "Ventes et marketing"],
  },
  {
    title: "Industrie de transformation",
    icon: Cog,
    gradient: "from-amber-500 via-orange-500 to-red-500",
    items: ["Suivi des coûts de revient", "Planification de production", "Contrôle qualité", "Gestion des sous-traitants"],
  },
  {
    title: "Industrie",
    icon: Factory,
    gradient: "from-slate-500 via-slate-600 to-slate-800",
    items: ["Maintenance des équipements", "Gestion multi-sites", "Suivi des stocks techniques", "Pilotage de la performance"],
  },
  {
    title: "Distribution",
    icon: Truck,
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    items: ["Gestion des points de vente", "Transport et logistique", "Gestion des promotions", "Pilotage des marges"],
  },
  {
    title: "Produits chimiques",
    icon: FlaskConical,
    gradient: "from-fuchsia-500 via-purple-500 to-violet-700",
    items: ["Traçabilité réglementaire", "Conformité HSE et fiches de sécurité", "Suivi des formules", "Gestion des risques produit"],
  },
  {
    title: "Services",
    icon: Briefcase,
    gradient: "from-cyan-500 via-teal-500 to-blue-600",
    items: ["Facturation à l'affaire", "Suivi de projet et rentabilité", "Gestion des ressources", "Reporting client"],
  },
];

const complementarySolutions = [
  { title: "Sage Eloficash", desc: "Recouvrement, scoring client et sécurisation des encours pour votre trésorerie.", href: "/solutions/eloficash" },
  { title: "Sage Enterprise Intelligence", desc: "Pilotage décisionnel et tableaux de bord avancés connectés à Sage X3." },
  { title: "Sage X3 Gestion à l'affaire", desc: "Suivi de la rentabilité projet par projet, du devis à la facturation." },
  { title: "Sage X3 Immobilisations", desc: "Gestion complète du parc d'immobilisations et des plans d'amortissement." },
  { title: "Sage X3 Warehousing (Geode)", desc: "Pilotage avancé de vos entrepôts et flux logistiques en temps réel." },
  { title: "Sage X3 Web Scheduling", desc: "Planification visuelle et collaborative des ressources de production." },
  { title: "Sage Youdoo", desc: "Portail collaboratif pour fluidifier les échanges entre vos équipes." },
];

export default function SageX3Client() {
  const introRef = useRef(null);
  const capabilitiesRef = useRef(null);
  const copilotRef = useRef(null);
  const managementRef = useRef(null);
  const guideRef = useRef(null);
  const sectorsRef = useRef(null);
  const complementaryRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-80px" });
  const capabilitiesInView = useInView(capabilitiesRef, { once: true, margin: "-80px" });
  const copilotInView = useInView(copilotRef, { once: true, margin: "-80px" });
  const managementInView = useInView(managementRef, { once: true, margin: "-80px" });
  const guideInView = useInView(guideRef, { once: true, margin: "-80px" });
  const sectorsInView = useInView(sectorsRef, { once: true, margin: "-80px" });
  const complementaryInView = useInView(complementaryRef, { once: true, margin: "-80px" });

  const [activeTab, setActiveTab] = useState(completeManagementTabs[0].key);
  const selectedTab = completeManagementTabs.find((t) => t.key === activeTab)!;

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
              <span className="text-white">Sage X3</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block text-xs font-bold text-accent tracking-widest bg-accent/10 px-3 py-1.5 rounded-full mb-4">
                SAGE X3
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Bien plus qu&apos;un ERP
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Prenez le contrôle de toute votre entreprise, des approvisionnements à la production en passant par la finance, et anticipez les transformations de votre marché avec Sage X3.
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
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1782375123/Smart_Manufacturing_Factory_thal%C3%A8s_informatique_ht9xvt.jpg"
                  alt="Usine de production intelligente pilotée avec l'ERP Sage X3 au Maroc"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="sm:col-span-1 h-48 sm:h-64 rounded-2xl border border-white/15 overflow-hidden bg-white">
                <img
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1782375122/sage_x3_hero_image_bfjdfy.png"
                  alt="Interface de l'ERP Sage X3 affichant un tableau de bord de gestion d'entreprise"
                  className="w-full h-full object-contain p-3"
                  loading="lazy"
                />
              </div>
              <div className="sm:col-span-1 h-48 sm:h-64 rounded-2xl border border-white/15 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1782375123/Industry_4.0_Production_Line_thal%C3%A8s_informatique_wqxuar.jpg"
                  alt="Chaîne de production industrielle connectée et digitalisée avec Sage X3"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Capacités puissantes */}
        <section ref={capabilitiesRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={capabilitiesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12 max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-primary">Des capacités puissantes</h2>
              <p className="text-secondary mt-3">
                Pensé pour la complexité de votre entreprise, des opérations courantes à la stratégie, Sage X3 réunit tous vos métiers dans une seule solution intégrée.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={capabilitiesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl border border-border hover:border-cta hover:shadow-lg transition-all duration-200 overflow-hidden"
                >
                  <div className={`relative h-36 bg-gradient-to-br ${cap.gradient} overflow-hidden`}>
                    <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-white/15" />
                    <div className="absolute -right-2 top-4 w-16 h-16 rounded-full bg-white/10" />
                    <div className="absolute left-6 bottom-3 w-10 h-10 rounded-full bg-white/10" />
                    <div className="relative h-full flex items-center justify-center">
                      <cap.icon size={44} className="text-white drop-shadow-md" strokeWidth={1.75} />
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-bold text-primary text-lg mb-4">{cap.title}</h3>
                    <ul className="space-y-2.5">
                      {cap.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-secondary leading-relaxed">
                          <CheckCircle2 size={15} className="text-cta shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-cta text-sm font-semibold mt-5"
                    >
                      En savoir plus <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sage Copilot AI band */}
        <section ref={copilotRef} className="py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-900 to-black" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={copilotInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold text-accent tracking-widest bg-accent/10 px-3 py-1.5 rounded-full mb-4">
                INTELLIGENCE ARTIFICIELLE
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 max-w-xl">
                Gagnez en productivité avec Sage Copilot pour Sage X3
              </h2>
              <ul className="space-y-3 mb-8">
                {copilotPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-white/75 leading-relaxed">
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary font-bold px-7 py-3.5 rounded-xl hover:bg-white/90 transition-colors duration-200"
              >
                Demander une démo <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Gestion d'entreprise complète — tabs */}
        <section ref={managementRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={managementInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold text-cta tracking-widest uppercase">VUE D&apos;ENSEMBLE</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Gestion d&apos;entreprise complète</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={managementInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid lg:grid-cols-[280px_1fr] gap-8"
            >
              {/* Tab list */}
              <div className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible border-b lg:border-b-0 lg:border-r border-border pb-2 lg:pb-0 lg:pr-2">
                {completeManagementTabs.map((tab) => (
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
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-cta text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm"
                  >
                    Demander une démo
                  </Link>
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

        {/* Guide download */}
        <section ref={guideRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={guideInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl border border-border p-8 lg:p-12"
            >
              <div className="h-56 rounded-2xl border border-border overflow-hidden order-2 md:order-1">
                <img
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1782375900/Manufacturing_Engineers_Collaboration_thal%C3%A8s_informatique_fonqhg.jpg"
                  alt="Ingénieurs collaborant autour des fonctionnalités de l'ERP Sage X3 en environnement industriel"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="order-1 md:order-2">
                <span className="text-xs font-bold text-cta tracking-widest uppercase">RESSOURCE</span>
                <h2 className="text-2xl lg:text-3xl font-bold text-primary mt-2 mb-4">
                  Guide des fonctionnalités Sage X3
                </h2>
                <p className="text-secondary leading-relaxed mb-6">
                  Les solutions Sage X3 sont régulièrement enrichies pour étendre la couverture fonctionnelle de votre ERP. Téléchargez notre guide pour découvrir l&apos;ensemble des capacités à votre portée.
                </p>
                <a
                  href="https://drive.google.com/file/d/1ppOLIQZnNlAPRfIsdzT4KrDSnmn6ExN7/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cta font-semibold text-sm hover:text-blue-700 transition-colors"
                >
                  <Download size={16} /> Télécharger le guide
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Secteurs sur mesure */}
        <section ref={sectorsRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12 max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-primary">Des solutions sur mesure pour votre secteur d&apos;activité</h2>
              <Link
                href="/secteurs"
                className="inline-flex items-center gap-1 text-cta text-sm font-semibold mt-4"
              >
                Voir tous les secteurs <ArrowRight size={14} />
              </Link>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((sector, i) => (
                <motion.div
                  key={sector.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="bg-bg rounded-2xl border border-border hover:border-cta hover:shadow-lg transition-all duration-200 overflow-hidden"
                >
                  <div className={`relative h-28 bg-gradient-to-br ${sector.gradient} overflow-hidden`}>
                    <div className="absolute -right-5 -bottom-5 w-24 h-24 rounded-full bg-white/15" />
                    <div className="absolute left-5 top-3 w-10 h-10 rounded-full bg-white/10" />
                    <div className="relative h-full flex items-center justify-center">
                      <sector.icon size={36} className="text-white drop-shadow-md" strokeWidth={1.75} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-primary mb-4">{sector.title}</h3>
                    <ul className="space-y-2 mb-5">
                      {sector.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-secondary leading-relaxed">
                          <CheckCircle2 size={14} className="text-cta shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link href="/secteurs" className="inline-flex items-center gap-1 text-cta text-sm font-semibold">
                      En savoir plus <ArrowRight size={13} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions complémentaires */}
        <section ref={complementaryRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={complementaryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12 max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-primary">Solutions complémentaires</h2>
              <p className="text-secondary mt-3">
                Étendez les capacités de Sage X3 avec des modules complémentaires pensés pour aller plus loin selon vos enjeux métiers.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complementarySolutions.map((sol, i) => (
                <motion.div
                  key={sol.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={complementaryInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="bg-white rounded-2xl p-6 border border-border flex flex-col"
                >
                  <h3 className="font-bold text-primary mb-2">{sol.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed flex-1">{sol.desc}</p>
                  {sol.href ? (
                    <Link
                      href={sol.href}
                      className="inline-flex items-center gap-1 text-cta text-sm font-semibold mt-4"
                    >
                      Découvrir {sol.title} <ArrowRight size={13} />
                    </Link>
                  ) : (
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-cta text-sm font-semibold mt-4"
                    >
                      Demander des informations <ArrowRight size={13} />
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Demandez une démo Sage X3 personnalisée
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Nos experts Thalès Informatique vous présentent Sage X3 adapté à votre secteur et à vos enjeux.
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
