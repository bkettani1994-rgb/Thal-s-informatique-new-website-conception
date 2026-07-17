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
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length, reduceMotion]);

  return (
    <div className="relative w-full h-full">
      {images.map((img, i) => (
        <motion.img
          key={img.src}
          src={img.src}
          alt={img.alt}
          width={640}
          height={480}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: reduceMotion ? 0 : 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover object-right"
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
    </div>
  );
}

const alliancePillars = [
  {
    icon: ShieldCheck,
    title: "Expertise Thalès Informatique",
    desc: "Thalès Informatique accompagne les entreprises marocaines dans leurs projets de transformation digitale et dans l'intégration de solutions de gestion.",
  },
  {
    icon: Sparkles,
    title: "SIRH Cloud Factorial",
    desc: "Factorial centralise les principaux processus RH dans une plateforme Cloud accessible aux équipes RH, aux managers et aux collaborateurs.",
  },
  {
    icon: MapPin,
    title: "Accompagnement de proximité",
    desc: "Nos consultants vous accompagnent dans l'analyse des besoins, le paramétrage, la formation des utilisateurs et l'adoption de la solution.",
  },
];

const painPoints = [
  { icon: Clock3, title: "Processus administratifs chronophages", desc: "Suivi des congés et absences géré manuellement sur Excel ou par email, source d'erreurs et de perte de temps." },
  { icon: FileWarning, title: "Préparation de la paie peu fiable", desc: "La collecte manuelle des congés, absences, primes et autres variables augmente les risques d'erreur lors de la préparation mensuelle de la paie." },
  { icon: Settings2, title: "Documents RH dispersés", desc: "Contrats, avenants et documents RH éparpillés entre plusieurs outils et classeurs papier." },
  { icon: AlertTriangle, title: "Données sensibles difficiles à sécuriser", desc: "La dispersion des données et l'absence de règles d'accès centralisées compliquent la protection et le suivi des informations RH sensibles." },
];

const modernFeatures = [
  { icon: Calendar, title: "Congés et absences", desc: "Validez en un clic, visibilité immédiate sur le planning d'équipe." },
  { icon: Timer, title: "Temps de travail et pointage", desc: "Pointage digital, suivi automatisé des heures de travail." },
  { icon: FolderLock, title: "Dossiers salariés", desc: "Centralisez les informations, contrats et documents RH de vos collaborateurs dans un espace sécurisé et organisé." },
  { icon: LineChart, title: "Reporting RH", desc: "Tableaux de bord RH personnalisables en temps réel." },
  { icon: Workflow, title: "Workflows et validations", desc: "Automatisez les processus RH répétitifs, des onboardings aux approbations." },
  { icon: Lock, title: "Gestion des accès et des données", desc: "Définissez les rôles, les autorisations et les accès selon les responsabilités de chaque utilisateur." },
];

const automationTabs = [
  {
    key: "rh-paie",
    label: "RH & Paie",
    title: "Fiabilisez la préparation de votre paie",
    desc: "Centralisez les congés, les absences, les primes et les autres variables RH afin de préparer et transmettre des informations de paie plus fiables à votre service comptable ou à votre logiciel de paie.",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1771850275/RH_PAIE_mghhm1.png",
    points: [
      { icon: Workflow, title: "Préparation des variables de paie", desc: "Regroupez les variables validées avant leur transmission au service chargé de produire la paie." },
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
    title: "Centralisez les équipements et les accès de vos collaborateurs",
    desc: "Suivez les équipements, les licences et les accès attribués à chaque collaborateur afin de faciliter les arrivées, les changements de poste et les départs.",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782484948/Factorial_Logiciel_de_gestion_d_entreprise_thales_informatique_giymio.png",
    points: [
      { icon: Settings2, title: "Suivi du parc informatique", desc: "Gardez une vue d'ensemble sur vos équipements : affectation, état et coûts associés, du jour de l'acquisition à la mise au rebut." },
      { icon: FolderLock, title: "Maîtrise des accès et licences", desc: "Octroyez les accès dès l'arrivée d'un collaborateur, révoquez-les à son départ et identifiez les licences inutilisées pour optimiser votre budget IT." },
      { icon: ShieldCheck, title: "Suivi et historique", desc: "Conservez un historique fiable des équipements et des accès attribués pour faciliter vos audits et le suivi de votre parc." },
    ],
  },
];

const proximityAdvantages = [
  { icon: UserCog, title: "Analyse et conseil", desc: "Nos consultants RH analysent vos besoins pour configurer Factorial selon vos process internes." },
  { icon: MapPin, title: "Paramétrage et déploiement", desc: "De l'installation à la migration de vos données, nous gérons tout le déploiement au Maroc et en Afrique." },
  { icon: GraduationCap, title: "Formation des utilisateurs", desc: "Vos équipes RH et managers sont formés pour une adoption rapide et durable de l'outil." },
  { icon: HeadphonesIcon, title: "Assistance de proximité", desc: "Une équipe support basée au Maroc et en Afrique, disponible en français et en arabe pour vous accompagner." },
];

const audiences = [
  { icon: Briefcase, title: "Équipes RH", desc: "Libérez-vous des tâches administratives répétitives pour vous concentrer sur le pilotage stratégique." },
  { icon: BarChart3, title: "Directions financières", desc: "Visualisez la masse salariale et les coûts RH en temps réel pour des décisions plus éclairées." },
  { icon: UserCog, title: "Managers", desc: "Gérez les congés et la performance de vos équipes en quelques clics, sans solliciter les RH." },
  { icon: Users, title: "Collaborateurs", desc: "Accédez à votre espace personnel RH à tout moment, depuis votre ordinateur ou votre mobile." },
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
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span className="text-white" aria-current="page">Factorial</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block text-xs font-bold text-accent tracking-widest bg-accent/10 px-3 py-1.5 rounded-full mb-4">
                SOLUTION FACTORIAL AU MAROC
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Factorial Maroc : logiciel RH et SIRH Cloud
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Centralisez les congés, les absences, le temps de travail, les dossiers salariés, le recrutement, les formations et la gestion des talents avec Factorial. Thalès Informatique accompagne les entreprises marocaines dans le paramétrage, le déploiement, la formation et l&apos;adoption de ce SIRH Cloud.
              </p>
              <Link
                href="/contact"
                aria-label="Demander une démonstration personnalisée de Factorial"
                className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors duration-200"
              >
                Demander une démo Factorial <ArrowRight size={18} aria-hidden="true" />
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
                  width={480}
                  height={640}
                  className="w-full h-full object-contain p-4"
                  fetchPriority="high"
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
                Factorial au Maroc avec l&apos;accompagnement de Thalès Informatique
              </h2>
              <p className="text-secondary leading-relaxed">
                Associez les fonctionnalités du SIRH Factorial à l&apos;expertise de proximité de Thalès Informatique pour structurer et digitaliser vos processus RH.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-3 gap-6">
              {alliancePillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={allianceInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <p.icon size={22} className="text-cta" aria-hidden="true" />
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
                <span className="text-xs font-bold text-cta tracking-widest uppercase">VOS ENJEUX RH</span>
                <h2 className="text-3xl font-bold text-primary mt-2 mb-6">
                  Vos processus RH freinent-ils votre croissance ?
                </h2>
                <div className="space-y-5">
                  {painPoints.map((pt) => (
                    <div key={pt.title} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                        <pt.icon size={18} className="text-cta" aria-hidden="true" />
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
                  <FileWarning size={36} className="text-cta/60" aria-hidden="true" />
                </div>
                <div className="h-32 sm:h-40 rounded-2xl bg-gradient-to-br from-accent/15 to-cta/10 border border-border flex items-center justify-center">
                  <Clock3 size={36} className="text-accent/60" aria-hidden="true" />
                </div>
                <div className="h-32 sm:h-40 rounded-2xl bg-gradient-to-br from-cta/10 to-primary/10 border border-border flex items-center justify-center">
                  <FolderLock size={36} className="text-primary/50" aria-hidden="true" />
                </div>
                <div className="h-32 sm:h-40 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/15 border border-border flex items-center justify-center">
                  <AlertTriangle size={36} className="text-cta/60" aria-hidden="true" />
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
              <h2 className="text-3xl font-bold text-white mt-2 mb-3">Les principales fonctionnalités RH de Factorial</h2>
              <p className="text-white/75">
                Factorial réunit les processus administratifs, la gestion du temps, les documents salariés, le recrutement et le suivi des talents au sein d&apos;une plateforme RH unique.
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
                    <feat.icon size={18} className="text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-sm">{feat.title}</h3>
                  <p className="text-sm text-white/75 leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center"
            >
              <p className="text-white/75 text-sm mb-5">
                Découvrez comment Factorial peut simplifier la gestion quotidienne de vos ressources humaines.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-cta font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors duration-200"
              >
                Découvrir Factorial avec un expert
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
                L&apos;intelligence artificielle au service de la gestion RH
              </h2>
              <p className="text-secondary leading-relaxed">
                Les fonctionnalités assistées par l&apos;intelligence artificielle peuvent aider les équipes RH à analyser leurs données, retrouver plus rapidement certaines informations et réduire le temps consacré aux tâches administratives.
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
                width={800}
                height={500}
                loading="lazy"
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
                Centralisez vos processus RH avec Factorial
              </h2>
              <p className="text-secondary leading-relaxed">
                Découvrez les modules de Factorial pour gérer les informations salariés, le temps de travail, les talents, les données financières RH et les équipements attribués aux collaborateurs.
              </p>
            </motion.div>

            <div role="tablist" aria-label="Modules Factorial" className="flex flex-wrap justify-center gap-3 mb-12">
              {automationTabs.map((tab) => (
                <button
                  key={tab.key}
                  id={`factorial-tab-${tab.key}`}
                  role="tab"
                  aria-selected={activeTab === tab.key}
                  aria-controls={`factorial-panel-${tab.key}`}
                  tabIndex={activeTab === tab.key ? 0 : -1}
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
              role="tabpanel"
              id={`factorial-panel-${selectedTab.key}`}
              aria-labelledby={`factorial-tab-${selectedTab.key}`}
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
                    <img src={selectedTab.image} alt={selectedTab.title} loading="lazy" className="w-full h-auto" />
                  </div>
                ) : (
                  <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold text-secondary">Évolution des effectifs</span>
                      <PenLine size={14} className="text-slate-300" aria-hidden="true" />
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
                    <pt.icon size={18} className="text-cta mb-3" aria-hidden="true" />
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
                  <div key={adv.title} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <adv.icon size={20} className="text-cta mb-3" aria-hidden="true" />
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
                  Déployez Factorial avec un partenaire de proximité
                </h2>
                <p className="text-secondary leading-relaxed mb-5">
                  Thalès Informatique vous accompagne dans le cadrage du projet, le paramétrage de Factorial, la reprise des données, la formation des utilisateurs et l&apos;adoption de la solution par vos équipes.
                </p>
                <ul className="space-y-3">
                  {[
                    "Implémentation rapide et accompagnement sur-mesure",
                    "Connaissance fonctionnelle de la solution Factorial",
                    "Un interlocuteur de proximité pour accompagner vos équipes pendant le projet",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-secondary text-sm">
                      <ShieldCheck size={16} className="text-cta shrink-0 mt-0.5" aria-hidden="true" />
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
              <h2 className="text-3xl font-bold text-primary mb-3">Factorial pour les RH, les managers et les collaborateurs</h2>
              <p className="text-secondary leading-relaxed">
                Chaque profil accède aux informations et fonctionnalités utiles à son rôle afin de mieux collaborer et de simplifier les échanges avec le service des ressources humaines.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {audiences.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={audiencesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <a.icon size={18} className="text-cta" aria-hidden="true" />
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
                Digitalisez vos processus RH avec Factorial
              </h2>
              <p className="text-white/70 mb-4 max-w-xl mx-auto">
                Thalès Informatique vous accompagne dans le déploiement, le paramétrage, la formation et l&apos;adoption de Factorial au Maroc.
              </p>
              <p className="text-white/70 text-sm mb-6">Pour la production et la gestion réglementaire de la paie, découvrez également <Link href="/solutions/sage-100-paie-rh" className="text-white hover:text-accent underline">Sage 100 Paie &amp; RH</Link>.</p>
              <Link
                href="/contact"
                aria-label="Parler à un expert au sujet de Factorial"
                className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors duration-200"
              >
                Parler à un expert Factorial <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
