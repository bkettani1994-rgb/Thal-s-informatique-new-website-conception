"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Server, Monitor, Network, Cloud, Activity, ArrowRight, Check, ClipboardList, Settings, Rocket, FileBarChart2 } from "lucide-react";
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

const scopes = [
  { icon: Monitor, title: "Postes de travail", desc: "Inventaire, déploiement, mises à jour et support des postes utilisateurs." },
  { icon: Server, title: "Serveurs", desc: "Supervision, maintenance préventive et disponibilité de vos serveurs physiques et virtuels." },
  { icon: Network, title: "Réseau", desc: "Administration des équipements réseau, surveillance du trafic et sécurisation des accès." },
  { icon: Cloud, title: "Environnements cloud", desc: "Gestion de vos ressources cloud, optimisation des coûts et continuité de service." },
];

const benefits = [
  "Un point de contact unique pour l'ensemble de votre infrastructure",
  "Supervision proactive 24/7 avec alertes en temps réel",
  "Reporting mensuel détaillé sur l'état de votre parc",
  "Réduction des temps d'arrêt grâce à une maintenance préventive",
];

const onboarding = [
  { step: "01", icon: ClipboardList, title: "Audit initial", desc: "État des lieux de votre parc, de vos serveurs et de vos usages." },
  { step: "02", icon: Settings, title: "Paramétrage des outils", desc: "Déploiement des agents de supervision, sauvegarde et sécurité." },
  { step: "03", icon: Rocket, title: "Mise en service", desc: "Activation du pack choisi et prise en charge officielle de votre IT." },
  { step: "04", icon: FileBarChart2, title: "Suivi & reporting", desc: "Pilotage continu avec rapports mensuels et points réguliers." },
];

const plans = [
  {
    name: "Socle",
    price: "À partir de 90 DH HT / Poste / Mois",
    tagline: "Les fondamentaux d'une IT bien gérée, sans superflu.",
    features: [
      "Inventaire des actifs & supervision proactive",
      "Déploiement des correctifs et mises à jour",
      "Antivirus et protection antimalware",
      "Sauvegarde locale avec restauration (jusqu'à 50 Go/poste)",
      "Support téléphonique et prise en main à distance",
      "Engagement de service Standard",
      "Bilan mensuel de l'activité",
    ],
    option: "Module Advanced Backup disponible (VM, M365, Google Workspace).",
    highlight: false,
  },
  {
    name: "Bouclier",
    price: "À partir de 180 DH HT / Poste / Mois",
    tagline: "Une longueur d'avance sur les menaces du quotidien.",
    features: [
      "L'ensemble des prestations du pack Socle",
      "Sauvegarde dans le cloud avec restauration (jusqu'à 100 Go/poste)",
      "Détection et réponse avancées (EDR)",
      "Déplacements sur site selon besoin",
      "Engagement de service Premium",
      "Bilan mensuel automatisé",
    ],
    option: "Module Advanced Backup disponible (VM, M365, Google Workspace).",
    highlight: false,
  },
  {
    name: "Forteresse",
    price: "À partir de 450 DH HT / Poste / Mois",
    tagline: "Une cybersécurité de haut niveau, sans compromis sur la performance.",
    features: [
      "L'ensemble des prestations du pack Bouclier",
      "Reprise après sinistre (DRaaS) — redémarrage rapide de vos VM et serveurs",
      "Détection et réponse étendues (XDR)",
      "Prévention de la fuite de données (DLP)",
      "Sécurisation des emails et de la collaboration Microsoft 365",
      "Tests de restauration chaque trimestre",
      "Engagement de service Ultimate",
      "Bilan mensuel automatisé",
    ],
    highlight: false,
  },
  {
    name: "Excellence 365",
    price: "Sur devis personnalisé",
    tagline: "Un accompagnement sur mesure pour une IT résiliente en continu.",
    features: [
      "L'ensemble des prestations du pack Forteresse",
      "Sauvegarde sans limite sur Microsoft 365 & Google Workspace",
      "Sauvegarde avancée des serveurs physiques et virtuels",
      "Détection et réponse managées (MDR) en continu",
      "Pilotage de la posture de sécurité Microsoft 365",
      "Engagement de service entièrement personnalisé",
      "Bilan mensuel automatisé",
    ],
    highlight: false,
  },
];

export default function GestionItExternaliseeClient() {
  const introRef = useRef(null);
  const scopesRef = useRef(null);
  const plansRef = useRef(null);
  const onboardingRef = useRef(null);
  const benefitsRef = useRef(null);
  const ctaRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const scopesInView = useInView(scopesRef, { once: true, margin: "-100px" });
  const plansInView = useInView(plansRef, { once: true, margin: "-100px" });
  const onboardingInView = useInView(onboardingRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-white/50 text-sm mb-8 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight size={14} />
              <Link href="/services/infogerance" className="hover:text-white transition-colors">Infogérance</Link>
              <ChevronRight size={14} />
              <span className="text-accent">Gestion IT Externalisée</span>
            </div>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-accent text-xs font-semibold tracking-widest mb-6">
                <Server size={12} /> GESTION COMPLÈTE
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Gestion IT Externalisée
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                La prise en charge complète de votre infrastructure informatique, pour que vos équipes
                restent concentrées sur votre activité.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section ref={introRef} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={introInView ? "visible" : "hidden"} className="max-w-3xl">
              <h2 className="text-3xl font-bold text-primary mb-6">Une infrastructure pilotée de bout en bout</h2>
              <p className="text-secondary text-lg leading-relaxed mb-4">
                Nos services de gestion IT externalisée couvrent l'ensemble de votre environnement informatique : postes de
                travail, serveurs, réseau et cloud. Basée à Casablanca, notre équipe assure une supervision
                continue et une maintenance proactive pour garantir la disponibilité et la performance de vos
                systèmes.
              </p>
              <p className="text-secondary leading-relaxed">
                Vous bénéficiez d'un interlocuteur unique, d'un reporting régulier et d'un service qui évolue
                avec vos besoins, sans complexité contractuelle inutile.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Scopes */}
        <section ref={scopesRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={scopesInView ? "visible" : "hidden"} className="text-center mb-14">
              <h2 className="text-3xl font-bold text-primary mb-4">Notre périmètre d'intervention</h2>
              <p className="text-secondary text-lg max-w-2xl mx-auto">Quatre dimensions couvertes pour une gestion IT cohérente et sans angle mort.</p>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" animate={scopesInView ? "visible" : "hidden"} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {scopes.map((s) => (
                <motion.div key={s.title} variants={fadeUp} className="bg-bg rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-cta/10 text-cta rounded-xl flex items-center justify-center mb-4">
                    <s.icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-primary mb-2">{s.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Plans / Offres */}
        <section ref={plansRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={plansInView ? "visible" : "hidden"} className="text-center mb-12">
              <span className="text-xs font-bold text-cta tracking-widest uppercase">NOS FORMULES</span>
              <h2 className="text-3xl font-bold text-primary mt-2 mb-3">Un pack adapté à chaque niveau de maturité</h2>
              <p className="text-secondary max-w-xl mx-auto">De l'essentiel à la résilience totale, choisissez la formule qui correspond à vos enjeux et faites évoluer votre niveau de protection au fil de votre croissance.</p>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={plansInView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {plans.map((plan) => (
                <motion.div
                  key={plan.name}
                  variants={fadeUp}
                  className="rounded-2xl border-2 border-border bg-white text-primary p-6 flex flex-col hover:border-cta/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold mb-2 text-primary">{plan.name}</h3>
                    <p className="text-xs font-semibold text-secondary">{plan.price}</p>
                    <div className="h-0.5 w-16 mx-auto mt-4 rounded-full bg-cta/30" />
                  </div>
                  <p className="text-sm font-semibold mb-4 text-center text-cta">{plan.tagline}</p>
                  <ul className="space-y-2.5 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[13px] leading-relaxed text-secondary">
                        <Check size={14} className="mt-0.5 shrink-0 text-cyan-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {plan.option && (
                    <p className="text-[11px] mt-4 pt-4 border-t border-border text-secondary/70">
                      <span className="underline">Option</span> : {plan.option}
                    </p>
                  )}
                  <Link
                    href="/contact"
                    className="mt-6 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm border border-border text-primary hover:border-cta hover:text-cta transition-colors duration-200"
                  >
                    Demander un devis <ChevronRight size={14} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Onboarding */}
        <section ref={onboardingRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={onboardingInView ? "visible" : "hidden"} className="text-center mb-14">
              <span className="text-xs font-bold text-cta tracking-widest uppercase">MISE EN ROUTE</span>
              <h2 className="text-3xl font-bold text-primary mt-2 mb-3">Comment démarre votre prise en charge</h2>
              <p className="text-secondary max-w-xl mx-auto">Un onboarding structuré pour passer de l'audit à la mise en service en toute transparence.</p>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" animate={onboardingInView ? "visible" : "hidden"} className="relative">
              <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 bg-cyan-200 z-0" />
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {onboarding.map((o) => (
                  <motion.div key={o.step} variants={fadeUp} className="relative flex flex-col items-center text-center">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-cta flex items-center justify-center z-20">
                      <span className="text-[10px] font-bold text-white">{o.step}</span>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-cyan-200 flex items-center justify-center mb-4 relative z-10 shadow-sm">
                      <o.icon size={22} className="text-cyan-500" />
                    </div>
                    <h3 className="text-sm font-bold text-primary mb-2">{o.title}</h3>
                    <p className="text-xs text-secondary leading-relaxed">{o.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section ref={benefitsRef} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={benefitsInView ? "visible" : "hidden"} className="text-center mb-14">
              <h2 className="text-3xl font-bold text-primary mb-4">Ce que vous y gagnez</h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" animate={benefitsInView ? "visible" : "hidden"} className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {benefits.map((b) => (
                <motion.div key={b} variants={fadeUp} className="flex items-start gap-3 p-5 bg-white rounded-2xl border border-border">
                  <Activity size={18} className="text-cta mt-0.5 shrink-0" />
                  <span className="text-sm text-secondary leading-relaxed">{b}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaRef} className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={ctaInView ? "visible" : "hidden"} className="bg-primary rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Confiez-nous votre infrastructure</h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Démarrez par un audit flash gratuit de votre environnement IT.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg">
                  Demander un audit flash gratuit
                  <ChevronRight size={18} />
                </Link>
                <Link href="/services/infogerance" className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                  Retour à l'infogérance
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
