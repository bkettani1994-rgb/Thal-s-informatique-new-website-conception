"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import {
  Search,
  FileText,
  Settings,
  Database,
  GraduationCap,
  Rocket,
  LifeBuoy,
  ClipboardCheck,
  ListChecks,
  ShieldCheck,
  Activity,
  Headphones,
  Gauge,
  BookOpen,
  ArrowRight,
} from "lucide-react";

type Step = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type Journey = {
  key: string;
  label: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaHref: string;
  accent: string;
  steps: Step[];
};

const journeys: Journey[] = [
  {
    key: "integration",
    label: "Intégration de Solutions",
    title: "Comment se déroule votre projet de transformation digitale ?",
    subtitle:
      "Une méthodologie structurée pour garantir le succès de votre projet et l'adoption par vos équipes.",
    cta: "Demander un accompagnement",
    ctaHref: "/contact",
    accent: "cta",
    steps: [
      { icon: Search, title: "Analyse & Découverte", description: "Compréhension de votre organisation, de vos processus et de vos objectifs stratégiques." },
      { icon: FileText, title: "Étude & Conception", description: "Définition de la solution cible et élaboration du plan de déploiement adapté à votre activité." },
      { icon: Settings, title: "Paramétrage & Configuration", description: "Personnalisation de la solution selon vos besoins métiers et vos processus internes." },
      { icon: Database, title: "Reprise des Données", description: "Migration sécurisée des données existantes vers le nouvel environnement." },
      { icon: GraduationCap, title: "Formation des Utilisateurs", description: "Accompagnement des équipes afin d'assurer une prise en main rapide et efficace." },
      { icon: Rocket, title: "Mise en Production", description: "Déploiement officiel de la solution avec suivi rapproché des utilisateurs." },
      { icon: LifeBuoy, title: "Support & Évolution", description: "Assistance continue, optimisation des processus et accompagnement dans la durée." },
    ],
  },
  {
    key: "infogerance",
    label: "Infogérance",
    title: "Comment fonctionne notre service d'infogérance ?",
    subtitle:
      "Une gestion proactive de votre environnement informatique pour garantir performance, sécurité et continuité.",
    cta: "Échanger avec un expert",
    ctaHref: "/contact",
    accent: "cyan",
    steps: [
      { icon: ClipboardCheck, title: "Audit de l'Infrastructure", description: "Analyse complète des équipements, serveurs, postes de travail, réseaux et systèmes existants." },
      { icon: ListChecks, title: "Évaluation & Recommandations", description: "Identification des risques, des axes d'amélioration et des priorités techniques." },
      { icon: FileText, title: "Mise en Place du Plan d'Infogérance", description: "Définition du périmètre d'intervention, des procédures et des niveaux de service." },
      { icon: ShieldCheck, title: "Déploiement des Outils de Supervision", description: "Installation des solutions de surveillance, sauvegarde, sécurité et maintenance." },
      { icon: Activity, title: "Surveillance Continue", description: "Monitoring proactif des systèmes afin de détecter et traiter rapidement les incidents." },
      { icon: Headphones, title: "Assistance Utilisateurs", description: "Support technique réactif pour accompagner les collaborateurs au quotidien." },
      { icon: Gauge, title: "Optimisation & Sécurisation", description: "Amélioration continue des performances, de la disponibilité et de la cybersécurité." },
      { icon: BookOpen, title: "Documentation", description: "Remise d'une documentation complète de l'infrastructure et des procédures pour une traçabilité totale." },
    ],
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [active, setActive] = useState<"integration" | "infogerance">("integration");

  const journey = journeys.find((j) => j.key === active)!;
  const isInfogerance = active === "infogerance";

  return (
    <section className="py-24 bg-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="inline-block text-xs font-semibold text-cta uppercase tracking-widest mb-3">
            Méthodologie
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-4">
            Notre Procédure d&apos;Accompagnement
          </h2>
          <p className="text-base text-secondary leading-relaxed">
            Découvrez comment se déroule une collaboration avec Thalès Informatique, étape par étape,
            selon le type de prestation choisi.
          </p>
        </motion.div>

        {/* Switch / Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-16"
        >
          <div className="relative grid grid-cols-2 w-full max-w-md sm:max-w-xl mx-auto p-1.5 bg-bg-base border border-border rounded-2xl sm:rounded-full shadow-sm">
            <motion.div
              className={`absolute top-1.5 bottom-1.5 rounded-xl sm:rounded-full shadow-md ${isInfogerance ? "bg-cyan-600" : "bg-cta"}`}
              initial={false}
              animate={{
                left: isInfogerance ? "50%" : "0.375rem",
                right: isInfogerance ? "0.375rem" : "50%",
              }}
              transition={{ type: "spring", stiffness: 350, damping: 32 }}
            />
            {journeys.map((j) => {
              const Icon = j.key === "infogerance" ? ShieldCheck : Settings;
              return (
                <button
                  key={j.key}
                  onClick={() => setActive(j.key as "integration" | "infogerance")}
                  className={`relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-8 py-3 text-[11px] sm:text-sm font-semibold rounded-xl sm:rounded-full transition-colors duration-300 cursor-pointer text-center leading-snug ${
                    active === j.key ? "text-white" : "text-secondary hover:text-primary"
                  }`}
                >
                  <Icon size={15} className="shrink-0" />
                  <span>{j.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Journey content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={journey.key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Journey title */}
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-3">{journey.title}</h3>
              <p className="text-secondary leading-relaxed">{journey.subtitle}</p>
            </div>

            {/* Desktop: horizontal timeline */}
            <div className="hidden lg:block relative mb-14">
              <div className="absolute top-7 left-0 right-0 h-0.5 bg-border" />
              <motion.div
                className={`absolute top-7 left-0 h-0.5 ${isInfogerance ? "bg-cyan-500" : "bg-cta"}`}
                initial={{ width: "0%" }}
                animate={inView ? { width: "100%" } : { width: "0%" }}
                transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
              />
              <div className={`grid gap-3 ${journey.steps.length === 8 ? "grid-cols-8" : "grid-cols-7"}`}>
                {journey.steps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group relative flex flex-col items-center text-center"
                  >
                    <div
                      className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 border-2 bg-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg ${
                        isInfogerance
                          ? "border-cyan-200 group-hover:border-cyan-500 group-hover:bg-cyan-50"
                          : "border-cta/20 group-hover:border-cta group-hover:bg-cta/5"
                      }`}
                    >
                      <step.icon
                        size={22}
                        className={`transition-colors duration-300 ${isInfogerance ? "text-cyan-600" : "text-cta"}`}
                      />
                      <span
                        className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white ${
                          isInfogerance ? "bg-cyan-600" : "bg-cta"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-primary mb-2 leading-snug min-h-[32px]">{step.title}</h4>
                    <p className="text-[11px] text-secondary leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile / Tablet: vertical timeline */}
            <div className="lg:hidden relative mb-12 max-w-xl mx-auto">
              <div className="absolute top-0 bottom-0 left-7 w-0.5 bg-border" />
              <motion.div
                className={`absolute top-0 left-7 w-0.5 ${isInfogerance ? "bg-cyan-500" : "bg-cta"}`}
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
              />
              <div className="space-y-8">
                {journey.steps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.06 }}
                    className="group relative flex items-start gap-5 pl-0"
                  >
                    <div
                      className={`relative z-10 shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center border-2 bg-white transition-all duration-300 group-hover:shadow-lg ${
                        isInfogerance
                          ? "border-cyan-200 group-hover:border-cyan-500 group-hover:bg-cyan-50"
                          : "border-cta/20 group-hover:border-cta group-hover:bg-cta/5"
                      }`}
                    >
                      <step.icon size={22} className={isInfogerance ? "text-cyan-600" : "text-cta"} />
                      <span
                        className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white ${
                          isInfogerance ? "bg-cyan-600" : "bg-cta"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="pt-2">
                      <h4 className="text-sm font-bold text-primary mb-1.5">{step.title}</h4>
                      <p className="text-sm text-secondary leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href={journey.ctaHref}
                className={`inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl text-white transition-colors duration-200 shadow-sm ${
                  isInfogerance ? "bg-cyan-600 hover:bg-cyan-700" : "bg-cta hover:bg-blue-700"
                }`}
              >
                {journey.cta}
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
