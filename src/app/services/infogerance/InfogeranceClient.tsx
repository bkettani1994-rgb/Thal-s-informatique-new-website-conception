"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  Server,
  Check,
  Lock,
  Activity,
  HeadphonesIcon,
  ShieldCheck,
  Wrench,
  FileBarChart2,
  Zap,
  MapPin,
  TrendingDown,
  ArrowRight,
  Star,
  ClipboardList,
  ListChecks,
  FileText,
  Shield,
  Gauge,
  BookOpen,
  Database,
  Bug,
  Headset,
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const pillars = [
  {
    icon: Activity,
    title: "Supervision continue",
    desc: "Inventaire du parc, monitoring en temps réel et remontée proactive des incidents avant qu'ils n'impactent votre activité.",
  },
  {
    icon: HeadphonesIcon,
    title: "Assistance & SLA",
    desc: "Support utilisateur réactif, interventions sur site si nécessaire et reporting régulier avec engagements de délai garantis.",
  },
  {
    icon: Wrench,
    title: "Maintenance & correctifs",
    desc: "Mises à jour système, patchs de sécurité et actions préventives pour maintenir votre parc en condition opérationnelle.",
  },
  {
    icon: Lock,
    title: "Sécurité & sauvegarde",
    desc: "Protection des postes et serveurs, sauvegardes régulières et capacité de restauration rapide en cas d'incident.",
  },
];

const offers = [
  {
    name: "Managed IT Services",
    tag: "GESTION COMPLÈTE",
    icon: Server,
    desc: "La prise en charge complète de votre infrastructure : postes, serveurs, réseau et cloud, supervisés et maintenus au quotidien.",
    href: "/services/infogerance/managed-it-services",
    color: "border-cta ring-2 ring-cta/20",
    tagColor: "bg-cta text-white",
    iconBg: "bg-cta/10",
    iconColor: "text-cta",
  },
  {
    name: "Backup & Disaster Recovery",
    tag: "CONTINUITÉ D'ACTIVITÉ",
    icon: Database,
    desc: "Sauvegardes automatisées, plans de reprise d'activité et tests de restauration pour garantir la continuité de vos données.",
    href: "/services/infogerance/backup-disaster-recovery",
    color: "border-slate-200",
    tagColor: "bg-slate-100 text-slate-600",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
  },
  {
    name: "Cybersecurity",
    tag: "PROTECTION & CONFORMITÉ",
    icon: Bug,
    desc: "Protection de vos systèmes contre les menaces : pare-feu avancé, EDR, audits de sécurité et sensibilisation des équipes.",
    href: "/services/infogerance/cybersecurity",
    color: "border-violet-200",
    tagColor: "bg-violet-100 text-violet-700",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-700",
  },
  {
    name: "Consulting IT et Support Technique",
    tag: "ACCOMPAGNEMENT & HELPDESK",
    icon: Headset,
    desc: "Conseil stratégique sur votre roadmap IT et helpdesk réactif pour accompagner vos équipes au quotidien.",
    href: "/services/infogerance/consulting-it-support-technique",
    color: "border-amber-200",
    tagColor: "bg-amber-100 text-amber-700",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
  },
];

const process = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Audit de l'Infrastructure",
    description: "Analyse complète des équipements, serveurs, postes de travail, réseaux et systèmes existants.",
  },
  {
    step: "02",
    icon: ListChecks,
    title: "Évaluation & Recommandations",
    description: "Identification des risques, des axes d'amélioration et des priorités techniques.",
  },
  {
    step: "03",
    icon: FileText,
    title: "Mise en Place du Plan d'Infogérance",
    description: "Définition du périmètre d'intervention, des procédures et des niveaux de service.",
  },
  {
    step: "04",
    icon: Shield,
    title: "Déploiement des Outils de Supervision",
    description: "Installation des solutions de surveillance, sauvegarde, sécurité et maintenance.",
  },
  {
    step: "05",
    icon: Activity,
    title: "Surveillance Continue",
    description: "Monitoring proactif des systèmes afin de détecter et traiter rapidement les incidents.",
  },
  {
    step: "06",
    icon: HeadphonesIcon,
    title: "Assistance Utilisateurs",
    description: "Support technique réactif pour accompagner les collaborateurs au quotidien.",
  },
  {
    step: "07",
    icon: Gauge,
    title: "Optimisation & Sécurisation",
    description: "Amélioration continue des performances, de la disponibilité et de la cybersécurité.",
  },
  {
    step: "08",
    icon: BookOpen,
    title: "Documentation",
    description: "Remise d'une documentation complète de l'infrastructure et des procédures pour une traçabilité totale.",
  },
];

const benefits = [
  { icon: TrendingDown, text: "Jusqu'à 40% d'économies sur les coûts IT grâce à l'anticipation et la standardisation" },
  { icon: Activity, text: "Disponibilité accrue de vos systèmes et réduction des interruptions de service" },
  { icon: ShieldCheck, text: "Sécurité renforcée : protection, sauvegardes et conformité assurées" },
  { icon: Server, text: "Maîtrise et prévisibilité de votre budget informatique" },
  { icon: Check, text: "Recentrage de vos équipes internes sur votre cœur de métier" },
  { icon: FileBarChart2, text: "Visibilité totale sur l'état de votre parc avec reporting mensuel" },
];

const differentiators = [
  {
    icon: Zap,
    title: "Simplicité",
    desc: "Des offres compréhensibles, évolutives, avec une montée en gamme progressive sans complexité inutile.",
  },
  {
    icon: MapPin,
    title: "Proximité",
    desc: "Basés à Casablanca, nos équipes assurent un suivi régulier et des interventions rapides au plus près de vos équipes.",
  },
  {
    icon: Star,
    title: "Exécution",
    desc: "Des équipes humaines expérimentées, réparties en départements spécialisés. On s'engage, on mesure, on améliore.",
  },
];

const stats = [
  { value: "250+", label: "Clients accompagnés" },
  { value: "5 000+", label: "Utilisateurs sous gestion" },
  { value: "7 000", label: "Équipements supervisés" },
  { value: "40%", label: "D'économies IT potentielles" },
];

export default function InfogeranceClient() {
  const introRef = useRef(null);
  const statsRef = useRef(null);
  const pillarsRef = useRef(null);
  const packsRef = useRef(null);
  const processRef = useRef(null);
  const benefitsRef = useRef(null);
  const diffRef = useRef(null);
  const ctaRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-80px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const pillarsInView = useInView(pillarsRef, { once: true, margin: "-80px" });
  const packsInView = useInView(packsRef, { once: true, margin: "-80px" });
  const processInView = useInView(processRef, { once: true, margin: "-80px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-80px" });
  const diffInView = useInView(diffRef, { once: true, margin: "-80px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen">

        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-800 to-slate-900" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight size={14} />
              <span className="text-accent">Infogérance</span>
            </div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-6">
              <Server size={14} /> INFOGÉRANCE IT
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight"
            >
              Une IT qui accompagne votre croissance
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-xl text-white/70 max-w-2xl mb-10 leading-relaxed"
            >
              Sans friction, sans risque et sans surprises. Nous prenons en charge votre infrastructure IT
              pour que vos équipes restent concentrées sur votre activité.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors duration-200"
              >
                Demander un audit flash gratuit <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20" ref={introRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeUp} initial="hidden" animate={introInView ? "visible" : "hidden"}>
                <span className="text-xs font-bold text-cta tracking-widest uppercase">NOTRE PROMESSE</span>
                <h2 className="text-3xl font-bold text-primary mt-2 mb-6">
                  Une infogérance qui simplifie votre croissance
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Nous prenons en charge vos postes, vos serveurs et vos environnements cloud avec une approche
                  <strong className="text-primary"> proactive</strong> (on anticipe),
                  <strong className="text-primary"> sécurisée</strong> (on protège) et
                  <strong className="text-primary"> orientée résultats</strong> (on mesure et on améliore).
                </p>
                <p className="text-secondary leading-relaxed">
                  Notre différence : nous ne nous limitons pas à « dépanner ». Nous mettons en place une exploitation
                  structurée pour <strong className="text-primary">éviter les pannes</strong>,
                  <strong className="text-primary"> réduire les risques</strong> et
                  <strong className="text-primary"> garantir la continuité de service</strong>.
                  Résultat : moins d'imprévus, plus de sérénité, et une IT qui devient un accélérateur — pas un frein.
                </p>
              </motion.div>
              <motion.div
                variants={stagger}
                initial="hidden"
                animate={introInView ? "visible" : "hidden"}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { val: "250+", label: "Clients accompagnés" },
                  { val: "5 000+", label: "Utilisateurs sous gestion" },
                  { val: "7 000", label: "Équipements supervisés" },
                  { val: "40%", label: "D'économies IT potentielles" },
                ].map((s) => (
                  <motion.div key={s.label} variants={fadeUp} className="bg-white rounded-2xl p-6 border border-border text-center">
                    <div className="text-3xl font-bold text-cta mb-1">{s.val}</div>
                    <div className="text-xs text-secondary font-medium">{s.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4 Piliers */}
        <section className="py-20 bg-white" ref={pillarsRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={pillarsInView ? "visible" : "hidden"} className="text-center mb-12">
              <span className="text-xs font-bold text-cta tracking-widest uppercase">COUVERTURE DE SERVICE</span>
              <h2 className="text-3xl font-bold text-primary mt-2 mb-3">Les 4 piliers de notre infogérance</h2>
              <p className="text-secondary max-w-xl mx-auto">Simples à comprendre, efficaces pour sécuriser votre activité et garantir un service stable dans la durée.</p>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={pillarsInView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  variants={fadeUp}
                  className="p-6 rounded-2xl border border-border bg-bg hover:border-cyan-300 hover:shadow-md transition-all duration-200 relative"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center mb-4">
                    <p.icon size={20} className="text-cyan-600" />
                  </div>
                  <span className="absolute top-5 right-5 text-4xl font-bold text-slate-100 select-none">0{i + 1}</span>
                  <h3 className="font-bold text-primary mb-2">{p.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Nos offres de services */}
        <section className="py-20 bg-bg" ref={packsRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={packsInView ? "visible" : "hidden"} className="text-center mb-12">
              <span className="text-xs font-bold text-cta tracking-widest uppercase">NOS OFFRES DE SERVICES</span>
              <h2 className="text-3xl font-bold text-primary mt-2 mb-3">Quatre offres dédiées à votre infogérance</h2>
              <p className="text-secondary max-w-xl mx-auto">Chaque offre couvre un enjeu spécifique de votre infrastructure, avec une page dédiée pour explorer le détail des prestations.</p>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={packsInView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {offers.map((offer) => (
                <motion.div
                  key={offer.name}
                  variants={fadeUp}
                  className={`bg-white rounded-2xl border-2 ${offer.color} p-6 flex flex-col`}
                >
                  <div className={`w-12 h-12 rounded-xl ${offer.iconBg} flex items-center justify-center mb-4`}>
                    <offer.icon size={22} className={offer.iconColor} />
                  </div>
                  <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full ${offer.tagColor} mb-3 self-start`}>{offer.tag}</span>
                  <h3 className="text-lg font-bold text-primary mb-2">{offer.name}</h3>
                  <p className="text-sm text-secondary leading-relaxed flex-1">{offer.desc}</p>
                  <Link
                    href={offer.href}
                    className="mt-6 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm border border-border text-primary hover:border-cta hover:text-cta transition-colors duration-200"
                  >
                    Découvrir l'offre <ChevronRight size={14} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Méthode */}
        <section className="py-20 bg-white" ref={processRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={processInView ? "visible" : "hidden"} className="text-center mb-12">
              <span className="text-xs font-bold text-cta tracking-widest uppercase">MÉTHODE D'INTERVENTION</span>
              <h2 className="text-3xl font-bold text-primary mt-2 mb-3">Une approche structurée et transparente</h2>
              <p className="text-secondary max-w-xl mx-auto">De l'audit flash initial au reporting mensuel, chaque étape est pilotée pour maximiser la visibilité et minimiser les frictions.</p>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={processInView ? "visible" : "hidden"}
              className="relative"
            >
              {/* Horizontal connector line */}
              <div className="hidden lg:block absolute top-[52px] left-[calc(100%/16)] right-[calc(100%/16)] h-0.5 bg-cyan-200 z-0" />

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {process.map((p) => (
                  <motion.div key={p.step} variants={fadeUp} className="relative flex flex-col items-center text-center">
                    {/* Step badge */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-cta flex items-center justify-center z-20">
                      <span className="text-[10px] font-bold text-white">{p.step}</span>
                    </div>
                    {/* Icon circle */}
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-cyan-200 flex items-center justify-center mb-4 relative z-10 shadow-sm">
                      <p.icon size={22} className="text-cyan-500" />
                    </div>
                    <h3 className="text-xs font-bold text-primary mb-2 leading-snug">{p.title}</h3>
                    <p className="text-[11px] text-secondary leading-relaxed">{p.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bénéfices */}
        <section className="py-20 bg-bg" ref={benefitsRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={benefitsInView ? "visible" : "hidden"} className="text-center mb-12">
              <span className="text-xs font-bold text-cta tracking-widest uppercase">VALEUR BUSINESS</span>
              <h2 className="text-3xl font-bold text-primary mt-2 mb-3">Ce que l'infogérance change concrètement</h2>
              <p className="text-secondary max-w-xl mx-auto">Moins de coûts cachés, plus de disponibilité, et des équipes libérées pour se concentrer sur ce qui compte vraiment.</p>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={benefitsInView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {benefits.map((b) => (
                <motion.div key={b.text} variants={fadeUp} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-border hover:border-cyan-200 hover:shadow-sm transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0">
                    <b.icon size={18} className="text-cyan-600" />
                  </div>
                  <span className="text-sm text-secondary leading-relaxed">{b.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Différenciation */}
        <section className="py-20 bg-primary" ref={diffRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={diffInView ? "visible" : "hidden"} className="text-center mb-12">
              <span className="text-xs font-bold text-accent tracking-widest uppercase">POURQUOI THALÈS INFORMATIQUE</span>
              <h2 className="text-3xl font-bold text-white mt-2 mb-3">Simplicité. Proximité. Exécution.</h2>
              <p className="text-white/60 max-w-xl mx-auto">Un partenaire IT de confiance, habitué aux environnements exigeants où la disponibilité et la sécurité ne sont pas négociables.</p>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={diffInView ? "visible" : "hidden"}
              className="grid md:grid-cols-3 gap-6"
            >
              {differentiators.map((d) => (
                <motion.div key={d.title} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors duration-200">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <d.icon size={22} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-white mb-3">{d.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{d.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white" ref={ctaRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div variants={fadeUp} initial="hidden" animate={ctaInView ? "visible" : "hidden"}>
              <span className="text-xs font-bold text-cta tracking-widest uppercase">PROCHAINE ÉTAPE</span>
              <h2 className="text-3xl font-bold text-primary mt-2 mb-4">Démarrez par un audit flash gratuit</h2>
              <p className="text-secondary mb-2 max-w-xl mx-auto">
                Obtenez rapidement une vision claire de votre existant. Sur cette base, nous vous proposons une offre sur mesure — adaptée à votre périmètre, votre budget et vos priorités.
              </p>
              <p className="text-secondary mb-8 max-w-xl mx-auto text-sm">
                L'onboarding est piloté de bout en bout : déploiement, sécurisation et suivi mensuel. Tout est fait pour démarrer avec un maximum de visibilité et un minimum de friction.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
                >
                  Demander un audit flash gratuit
                  <ChevronRight size={18} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-border text-primary font-semibold rounded-xl hover:border-cta hover:text-cta transition-colors duration-200"
                >
                  Voir tous nos services
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
