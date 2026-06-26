"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  MapPin,
  Clock3,
  FileWarning,
  Settings2,
  AlertTriangle,
  Calendar,
  Timer,
  FolderLock,
  LineChart,
  Workflow,
  Lock,
  PenLine,
  FileSignature,
  BarChart3,
  GraduationCap,
  HeadphonesIcon,
  Users,
  Briefcase,
  UserCog,
  UserCheck,
} from "lucide-react";

const leftCollageImages = [
  {
    src: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1771850275/RH_PAIE_mghhm1.png",
    alt: "Interface Factorial dédiée à la gestion de la paie et des éléments RH",
  },
  {
    src: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1771850274/FINANCE_IT_cmtvdf.png",
    alt: "Interface Factorial dédiée au suivi financier et IT des collaborateurs",
  },
];

const rightCollageImages = [
  {
    src: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1771850274/GTA_PLANINGS_nnq2wz.png",
    alt: "Interface Factorial de gestion du temps et des plannings d'équipe",
  },
  {
    src: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1771850274/GESTION_DES_TALENTS_iwxxmw.png",
    alt: "Interface Factorial de gestion des talents et du suivi de carrière",
  },
];

function CollageSlot({ images }: { images: { src: string; alt: string }[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((img, i) => (
        <motion.img
          key={img.src}
          src={img.src}
          alt={img.alt}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover object-right"
          loading="lazy"
        />
      ))}
    </div>
  );
}

const alliancePillars = [
  {
    icon: ShieldCheck,
    title: "Thalès Informatique",
    desc: "Plus de 30 ans d'expertise dans la transformation digitale des entreprises au Maroc, avec un accompagnement de proximité.",
  },
  {
    icon: Sparkles,
    title: "Factorial",
    desc: "Le SIRH Cloud nouvelle génération, conçu pour simplifier la gestion RH des PME et ETI grâce à une interface moderne et intuitive.",
  },
  {
    icon: MapPin,
    title: "Accompagnement Local",
    desc: "Nos consultants RH vous accompagnent en français comme en arabe, du paramétrage initial jusqu'à l'adoption par vos équipes.",
  },
];

const painPoints = [
  { icon: Clock3, title: "Gestion chronophage", desc: "Suivi des congés et absences géré manuellement sur Excel ou par email, source d'erreurs et de perte de temps." },
  { icon: FileWarning, title: "Paie sujette à erreurs", desc: "Saisie manuelle des éléments variables de paie, risques d'erreurs et d'oublis chaque fin de mois." },
  { icon: Settings2, title: "Dossiers dispersés", desc: "Contrats, avenants et documents RH éparpillés entre plusieurs outils et classeurs papier." },
  { icon: AlertTriangle, title: "Risques de conformité", desc: "Difficulté à garantir la conformité légale et la confidentialité des données RH sensibles." },
];

const modernFeatures = [
  { icon: Calendar, title: "Congés & Absences", desc: "Validez en un clic, visibilité immédiate sur le planning d'équipe." },
  { icon: Timer, title: "Gestion du temps", desc: "Pointage digital, suivi automatisé des heures de travail." },
  { icon: FolderLock, title: "Dossiers salariés", desc: "Stockage centralisé (Cloud), conforme à la loi marocaine et sécurisé." },
  { icon: LineChart, title: "Performance & Reporting", desc: "Tableaux de bord RH personnalisables en temps réel." },
  { icon: Workflow, title: "Workflows automatisés", desc: "Automatisez les processus RH répétitifs, des onboardings aux approbations." },
  { icon: Lock, title: "Conformité RGPD", desc: "Données hébergées dans le Cloud, conformes aux normes de sécurité internationales." },
];

const automationTabs = [
  {
    key: "rh-paie",
    label: "RH & Paie",
    title: "Sécurisez le cycle de paie",
    desc: "Synchronisez les éléments variables de paie (congés, absences, primes) directement depuis Factorial pour fiabiliser et accélérer votre processus de paie mensuel.",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1771850275/RH_PAIE_mghhm1.png",
    points: [
      { icon: Workflow, title: "Export des éléments variables", desc: "Transmettez automatiquement les variables de paie validées à votre service comptable ou cabinet." },
      { icon: ShieldCheck, title: "Traçabilité complète", desc: "Historique de chaque validation et modification pour sécuriser vos audits et contrôles." },
      { icon: Lock, title: "Confidentialité garantie", desc: "Accès aux données de paie strictement limité aux personnes habilitées." },
    ],
  },
  {
    key: "gta-plannings",
    label: "GTA & Plannings",
    title: "Maîtrisez le temps de travail",
    desc: "Suivez les présences, les absences et les plannings de vos équipes en temps réel, pour une gestion du temps de travail simple et fiable.",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1771850274/GTA_PLANINGS_nnq2wz.png",
    points: [
      { icon: FileSignature, title: "Pointage & présences", desc: "Suivez les heures travaillées et les absences de vos équipes directement depuis Factorial." },
      { icon: BarChart3, title: "Plannings d'équipe", desc: "Organisez les plannings et les shifts de vos collaborateurs en quelques clics." },
      { icon: Users, title: "Demandes de congés", desc: "Centralisez et validez les demandes de congés et absences dans un seul espace." },
    ],
  },
  {
    key: "gestion-talents",
    label: "Gestion des talents",
    title: "Faites grandir vos équipes",
    desc: "Suivez le parcours de chaque collaborateur, de son recrutement à son évolution de carrière, pour une gestion des talents structurée et motivante.",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1771850274/GESTION_DES_TALENTS_iwxxmw.png",
    points: [
      { icon: GraduationCap, title: "Formations & évaluations", desc: "Planifiez les formations et suivez les évaluations de performance de vos équipes." },
      { icon: UserCheck, title: "Recrutement & onboarding", desc: "Centralisez vos candidatures et digitalisez l'intégration de vos nouvelles recrues." },
      { icon: LineChart, title: "Suivi de carrière", desc: "Visualisez les évolutions, mobilités internes et perspectives de chaque collaborateur." },
    ],
  },
  {
    key: "finance-it",
    label: "Finance & IT",
    title: "Pilotez vos coûts RH",
    desc: "Visualisez la masse salariale et les coûts RH en temps réel, et sécurisez l'accès aux données grâce à des intégrations IT robustes.",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1771850274/FINANCE_IT_cmtvdf.png",
    points: [
      { icon: BarChart3, title: "Suivi de la masse salariale", desc: "Visualisez vos coûts RH et budgets en temps réel sur un même tableau de bord." },
      { icon: ShieldCheck, title: "Sécurité des données", desc: "Gestion fine des accès et des permissions pour protéger vos données sensibles." },
      { icon: Workflow, title: "Intégrations", desc: "Connectez Factorial à vos outils comptables et IT existants pour fluidifier vos process." },
    ],
  },
  {
    key: "gestion-it",
    label: "Gestion IT",
    title: "Pilotez tout votre parc IT depuis une seule plateforme",
    desc: "Thalès Informatique vous aide à reprendre la main sur votre environnement IT : équipements, accès et licences sont centralisés et suivis au même endroit que vos processus RH, pour une gestion plus simple et plus sûre au quotidien.",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782484948/Factorial_Logiciel_de_gestion_d_entreprise_thales_informatique_giymio.png",
    points: [
      { icon: Settings2, title: "Suivi du parc informatique", desc: "Gardez une vue d'ensemble sur vos équipements : affectation, état et coûts associés, du jour de l'acquisition à la mise au rebut." },
      { icon: FolderLock, title: "Maîtrise des accès et licences", desc: "Octroyez les accès dès l'arrivée d'un collaborateur, révoquez-les à son départ et identifiez les licences inutilisées pour optimiser votre budget IT." },
      { icon: ShieldCheck, title: "Sécurité et conformité", desc: "Encadrez vos appareils par des politiques de sécurité, intervenez à distance en cas de besoin et disposez d'un historique fiable pour vos audits." },
    ],
  },
];

const proximityAdvantages = [
  { icon: UserCog, title: "Conseil personnalisé", desc: "Nos consultants RH analysent vos besoins pour configurer Factorial selon vos process internes." },
  { icon: MapPin, title: "Déploiement clé en main", desc: "De l'installation à la migration de vos données, nous gérons tout le déploiement au Maroc." },
  { icon: GraduationCap, title: "Formation des équipes", desc: "Vos équipes RH et managers sont formés pour une adoption rapide et durable de l'outil." },
  { icon: HeadphonesIcon, title: "Support technique local", desc: "Une équipe support basée au Maroc, disponible en français et en arabe pour vous accompagner." },
];

const audiences = [
  { icon: Briefcase, title: "Responsables RH", desc: "Libérez-vous des tâches administratives répétitives pour vous concentrer sur le pilotage stratégique." },
  { icon: BarChart3, title: "CFOs", desc: "Visualisez la masse salariale et les coûts RH en temps réel pour des décisions plus éclairées." },
  { icon: UserCog, title: "Managers", desc: "Gérez les congés et la performance de vos équipes en quelques clics, sans solliciter les RH." },
  { icon: Users, title: "Employés", desc: "Accédez à votre espace personnel RH à tout moment, depuis votre ordinateur ou votre mobile." },
];

export default function FactorialClient() {
  const allianceRef = useRef(null);
  const painRef = useRef(null);
  const featuresRef = useRef(null);
  const aiRef = useRef(null);
  const automationRef = useRef(null);
  const proximityRef = useRef(null);
  const audiencesRef = useRef(null);

  const allianceInView = useInView(allianceRef, { once: true, margin: "-80px" });
  const painInView = useInView(painRef, { once: true, margin: "-80px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-80px" });
  const aiInView = useInView(aiRef, { once: true, margin: "-80px" });
  const automationInView = useInView(automationRef, { once: true, margin: "-80px" });
  const proximityInView = useInView(proximityRef, { once: true, margin: "-80px" });
  const audiencesInView = useInView(audiencesRef, { once: true, margin: "-80px" });

  const [activeTab, setActiveTab] = useState(automationTabs[0].key);
  const selectedTab = automationTabs.find((t) => t.key === activeTab)!;

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
              <span className="text-white">Factorial</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block text-xs font-bold text-accent tracking-widest bg-accent/10 px-3 py-1.5 rounded-full mb-4">
                SIRH CLOUD
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Gérez vos RH avec Factorial
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Le SIRH Cloud qui centralise congés, fiches de paie, recrutement et formations. Accessible partout, à tout moment, pour vos équipes RH et vos collaborateurs.
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
              className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center"
            >
              <div className="sm:col-span-1 h-48 sm:h-64 rounded-2xl border border-white/15 overflow-hidden bg-white">
                <CollageSlot images={leftCollageImages} />
              </div>
              <div className="sm:col-span-1 h-64 sm:h-80 rounded-2xl border border-white/15 overflow-hidden bg-white flex items-center justify-center sm:-mt-8">
                <img
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1772537401/Home_Factorial_phone_FR_znv9zy.png"
                  alt="Application mobile Factorial affichant l'espace collaborateur SIRH"
                  className="w-full h-full object-contain p-4"
                  loading="lazy"
                />
              </div>
              <div className="sm:col-span-1 h-48 sm:h-64 rounded-2xl border border-white/15 overflow-hidden bg-white">
                <CollageSlot images={rightCollageImages} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Alliance stratégique */}
        <section ref={allianceRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={allianceInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-3">
                Une alliance stratégique pour votre succès
              </h2>
              <p className="text-secondary leading-relaxed">
                L&apos;alliance de l&apos;expertise locale de Thalès Informatique et de la puissance technologique de Factorial.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-3 gap-6">
              {alliancePillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={allianceInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-slate-50 border border-border rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-cta/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <p.icon size={22} className="text-cta" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{p.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section ref={painRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={painInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs font-bold text-cta tracking-widest uppercase">LE CONSTAT ACTUEL</span>
                <h2 className="text-3xl font-bold text-primary mt-2 mb-6">
                  Vos processus RH freinent-ils votre croissance ?
                </h2>
                <div className="space-y-5">
                  {painPoints.map((pt) => (
                    <div key={pt.title} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                        <pt.icon size={18} className="text-red-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary text-sm mb-1">{pt.title}</h3>
                        <p className="text-secondary text-sm leading-relaxed">{pt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={painInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="h-32 sm:h-40 rounded-2xl bg-gradient-to-br from-cta/15 to-accent/10 border border-border flex items-center justify-center">
                  <FileWarning size={36} className="text-cta/60" />
                </div>
                <div className="h-32 sm:h-40 rounded-2xl bg-gradient-to-br from-accent/15 to-cta/10 border border-border flex items-center justify-center">
                  <Clock3 size={36} className="text-accent/60" />
                </div>
                <div className="h-32 sm:h-40 rounded-2xl bg-gradient-to-br from-cta/10 to-primary/10 border border-border flex items-center justify-center">
                  <FolderLock size={36} className="text-primary/50" />
                </div>
                <div className="h-32 sm:h-40 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/15 border border-border flex items-center justify-center">
                  <AlertTriangle size={36} className="text-orange-400" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Une solution pensée pour les RH modernes */}
        <section ref={featuresRef} className="py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cta via-primary to-primary opacity-90" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12 max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white mt-2 mb-3">Une solution pensée pour les RH modernes</h2>
              <p className="text-white/70">
                Factorial centralise tous les besoins dans une plateforme unique, intuitive et évolutive.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {modernFeatures.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/15 hover:bg-white/15 transition-colors duration-200"
                >
                  <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center mb-4">
                    <feat.icon size={18} className="text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-sm">{feat.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center"
            >
              <p className="text-white/60 text-sm mb-5">
                Rejoignez plus de 10 000 entreprises qui ont déjà adopté Factorial.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-cta font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors duration-200"
              >
                Réservez une démo gratuite
              </Link>
            </motion.div>
          </div>
        </section>

        {/* IA */}
        <section ref={aiRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={aiInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-3">
                L&apos;Intelligence Artificielle au cœur de votre plateforme RH avec Factorial
              </h2>
              <p className="text-secondary leading-relaxed">
                Moins de paperasse, plus de temps pour vos équipes. L&apos;IA vous aide à transformer vos données en informations fiables et à accélérer l&apos;impact de vos équipes RH.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={aiInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src="https://res.cloudinary.com/dmutnjgp8/image/upload/q_auto,f_auto/v1782482570/Factorial_Logiciel_de_gestion_d_entreprise_pour_Thal%C3%A8s_Informatique_nti6ux.png"
                alt="Assistant IA Factorial intégré à la plateforme RH"
                className="w-full h-auto rounded-3xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Automatisation / Tabs */}
        <section ref={automationRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={automationInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-10"
            >
              <h2 className="text-3xl font-bold text-primary mb-3">
                Automatisez ce qui vous empêche d&apos;avancer
              </h2>
              <p className="text-secondary leading-relaxed">
                Factorial automatise les processus RH chronophages, pour vous redonner du temps et recentrer vos efforts sur la croissance de vos équipes.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {automationTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`text-sm font-semibold px-5 py-2.5 rounded-full border transition-colors duration-200 cursor-pointer ${
                    activeTab === tab.key
                      ? "bg-cta text-white border-cta"
                      : "bg-white text-secondary border-border hover:border-cta hover:text-cta"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="max-w-3xl mx-auto text-center mb-10">
                <h3 className="text-2xl font-bold text-primary mb-4">{selectedTab.title}</h3>
                <p className="text-secondary leading-relaxed">{selectedTab.desc}</p>
              </div>

              <div className="max-w-3xl mx-auto mb-12">
                {selectedTab.image ? (
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img src={selectedTab.image} alt={selectedTab.title} className="w-full h-auto" />
                  </div>
                ) : (
                  <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold text-secondary">Évolution des effectifs</span>
                      <PenLine size={14} className="text-slate-300" />
                    </div>
                    <div className="flex items-end gap-1.5 h-20 mb-4">
                      {[40, 55, 48, 62, 70, 58, 75, 68, 80].map((h, i) => (
                        <div key={i} className="flex-1 bg-cta/70 rounded-t" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xs text-secondary">Taux de satisfaction</span>
                      <span className="text-lg font-bold text-cta">87%</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                {selectedTab.points.map((pt) => (
                  <div key={pt.title} className="bg-white border border-border rounded-xl p-5">
                    <pt.icon size={18} className="text-cta mb-3" />
                    <h4 className="font-bold text-primary text-sm mb-1.5">{pt.title}</h4>
                    <p className="text-xs text-secondary leading-relaxed">{pt.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Proximité Thalès */}
        <section ref={proximityRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={proximityInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-5 order-2 lg:order-1"
              >
                {proximityAdvantages.map((adv) => (
                  <div key={adv.title} className="bg-slate-50 border border-border rounded-xl p-5">
                    <adv.icon size={20} className="text-cta mb-3" />
                    <h4 className="font-bold text-primary text-sm mb-1.5">{adv.title}</h4>
                    <p className="text-xs text-secondary leading-relaxed">{adv.desc}</p>
                  </div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={proximityInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="order-1 lg:order-2"
              >
                <span className="text-xs font-bold text-cta tracking-widest uppercase">POURQUOI THALÈS INFORMATIQUE ?</span>
                <h2 className="text-3xl font-bold text-primary mt-2 mb-5">
                  Plus qu&apos;un logiciel, un véritable partenaire de proximité
                </h2>
                <p className="text-secondary leading-relaxed mb-5">
                  Au-delà de la souscription, notre équipe vous accompagne dans son intégration. En choisissant Thalès Informatique, vous bénéficiez de 30 ans d&apos;expérience IT au Maroc, d&apos;un véritable interlocuteur dédié.
                </p>
                <ul className="space-y-3">
                  {[
                    "Implémentation rapide et accompagnement sur-mesure",
                    "Certification et expertise éprouvée sur Factorial",
                    "Support local au Maroc, pas de plateforme RH lointaine",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-secondary text-sm">
                      <ShieldCheck size={16} className="text-cta shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Audiences */}
        <section ref={audiencesRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={audiencesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-3">Qui que vous soyez, nous pouvons vous aider</h2>
              <p className="text-secondary leading-relaxed">
                Factorial ne se résume pas à un logiciel RH. C&apos;est une solution complète permettant aux managers et aux équipes de mieux collaborer, décider et avancer ensemble.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {audiences.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={audiencesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white border border-border rounded-2xl p-6"
                >
                  <div className="w-10 h-10 bg-cta/10 rounded-lg flex items-center justify-center mb-4">
                    <a.icon size={18} className="text-cta" />
                  </div>
                  <h3 className="font-bold text-primary text-sm mb-2">{a.title}</h3>
                  <p className="text-xs text-secondary leading-relaxed">{a.desc}</p>
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
                Modernisez votre RH avec Factorial
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Thalès Informatique vous accompagne dans le déploiement et l&apos;adoption de Factorial au Maroc.
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
