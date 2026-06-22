"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Database, RefreshCcw, ShieldAlert, Timer, CheckCircle, ArrowRight, HardDrive, ShieldCheck, Cloud, RotateCcw, Sparkles, Star } from "lucide-react";
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

const steps = [
  { num: "01", title: "Cartographie des données critiques", desc: "Identification des données et systèmes prioritaires à protéger", icon: <Database size={20} /> },
  { num: "02", title: "Mise en place des sauvegardes", desc: "Configuration de sauvegardes automatisées, locales et externalisées", icon: <RefreshCcw size={20} /> },
  { num: "03", title: "Plan de reprise d'activité", desc: "Définition des procédures et délais de reprise (RTO/RPO)", icon: <ShieldAlert size={20} /> },
  { num: "04", title: "Tests de restauration", desc: "Vérification périodique de la fiabilité des sauvegardes", icon: <Timer size={20} /> },
];

const guarantees = [
  "Sauvegardes automatisées et chiffrées, locales et dans le cloud",
  "Plan de reprise d'activité (PRA) adapté à votre niveau de criticité",
  "Tests de restauration réguliers pour garantir la fiabilité des données",
  "Délais de reprise (RTO) et de perte de données (RPO) définis avec vous",
];

type StrengthItem = string | { category: string; items: string[] };

const products: {
  key: string;
  name: string;
  vendor: string;
  icon: typeof HardDrive;
  definition: string;
  strengths: StrengthItem[];
  value: StrengthItem[];
}[] = [
  {
    key: "veeam-backup-replication",
    name: "Veeam Backup & Replication",
    vendor: "Veeam",
    icon: HardDrive,
    definition:
      "Solution de sauvegarde et de réplication pour environnements virtuels, physiques et cloud, reconnue pour la rapidité de ses restaurations.",
    strengths: [
      {
        category: "Sauvegarde et Restauration",
        items: [
          "Environnements virtuels : prise en charge de VMware vSphere, Microsoft Hyper-V et Nutanix AHV",
          "Environnements physiques : sauvegarde des serveurs physiques et des postes de travail Windows et Linux",
          "Cloud : intégration avec AWS, Azure, Google Cloud Platform et autres services de cloud public",
          "Snapshot de stockage : intégration avec les snapshots de stockage pour une sauvegarde rapide et sans agent",
          "Restauration granulaire : restauration au niveau des fichiers et des objets d'application (Exchange, SharePoint, SQL, Active Directory, Oracle)",
          "Restauration instantanée : restauration instantanée des VM, restauration bare-metal",
          "SureBackup : test automatisé des sauvegardes pour garantir la récupérabilité",
        ],
      },
      {
        category: "Réplication",
        items: [
          "Réplication des VM : création de répliques de VM pour une reprise après sinistre rapide",
          "Failover et failback : processus de basculement automatisé et planifié, retour à l'état normal après résolution du sinistre",
        ],
      },
      {
        category: "Veeam Cloud Connect",
        items: [
          "Envoi des sauvegardes vers le cloud : permet d'envoyer des sauvegardes vers des fournisseurs de services Veeam Cloud",
          "Récupération à partir du cloud : options de récupération directe à partir du cloud",
        ],
      },
      {
        category: "Veeam Explorer",
        items: [
          "Restauration granulaire pour Microsoft Exchange, SharePoint, Active Directory, SQL Server et Oracle",
          "Recherche avancée pour trouver et restaurer rapidement des éléments spécifiques",
        ],
      },
      {
        category: "Automatisation et Orchestration",
        items: [
          "Veeam ONE : surveillance et reporting avancés pour une gestion proactive des environnements de sauvegarde",
          "Automatisation des tâches : planification automatique des sauvegardes et des tests de récupération",
        ],
      },
    ],
    value: [
      {
        category: "Protection des Données",
        items: [
          "Sauvegarde fiable : garantit l'intégrité des sauvegardes et la possibilité de restauration à tout moment",
          "Tests automatisés : SureBackup pour vérifier automatiquement la récupérabilité des sauvegardes",
        ],
      },
      {
        category: "Flexibilité et Performance",
        items: [
          "Multi-environnement : prise en charge des environnements virtuels, physiques et cloud",
          "Optimisation des performances : sauvegardes et restaurations rapides et efficaces",
        ],
      },
      {
        category: "Scalabilité",
        items: [
          "Adapté à toutes les tailles d'entreprises, de la petite structure aux grandes organisations avec des déploiements étendus",
        ],
      },
      {
        category: "Gestion Simplifiée",
        items: [
          "Interface intuitive : console de gestion centralisée pour configurer et surveiller les sauvegardes",
          "Automatisation : réduction des tâches manuelles grâce à l'automatisation des processus",
        ],
      },
    ],
  },
  {
    key: "acronis-cyber-backup",
    name: "Acronis Cyber Backup",
    vendor: "Acronis",
    icon: ShieldCheck,
    definition:
      "Solution de sauvegarde intégrant des fonctionnalités de cybersécurité (anti-ransomware, antimalware) pour protéger vos données contre les menaces actuelles.",
    strengths: [
      {
        category: "Sauvegarde et Restauration",
        items: [
          "Environnements physiques : prise en charge des serveurs Windows et Linux, des postes de travail, et des applications comme Microsoft Exchange, SQL Server, SharePoint et Active Directory",
          "Environnements virtuels : prise en charge des hyperviseurs comme VMware vSphere, Microsoft Hyper-V, Citrix XenServer, Red Hat Virtualization et Oracle VM Server",
          "Environnements cloud : intégration avec les services cloud publics comme AWS, Microsoft Azure et Google Cloud Platform",
          "Disques et systèmes complets : sauvegarde au niveau du disque et du système entier pour une récupération complète",
          "Restauration granulaire : restauration de fichiers individuels, de dossiers, d'objets d'application spécifiques (comme des emails Exchange) et de machines virtuelles",
          "Restauration instantanée des machines virtuelles pour minimiser les temps d'arrêt",
          "Restauration bare-metal : restauration complète du système sur un matériel identique ou différent",
        ],
      },
      {
        category: "Stockage des Sauvegardes",
        items: [
          "Options de stockage flexibles : sauvegardes sur site (NAS, SAN, bandes magnétiques), dans le cloud Acronis, ou en configuration hybride",
          "Réduction des données : déduplication et compression pour économiser l'espace de stockage et la bande passante",
        ],
      },
      {
        category: "Protection Avancée",
        items: [
          "Protection contre les ransomwares : Acronis Active Protection utilise l'intelligence artificielle pour détecter et stopper les ransomwares en temps réel",
          "Cryptage AES-256 des données en transit et au repos pour assurer la confidentialité et la sécurité des sauvegardes",
        ],
      },
      {
        category: "Gestion et Surveillance",
        items: [
          "Console de gestion web centralisée pour configurer, gérer et surveiller les sauvegardes et les restaurations",
          "Rapports et notifications en temps réel sur l'état des sauvegardes et des restaurations",
        ],
      },
      {
        category: "Automatisation et Orchestration",
        items: [
          "Planification des sauvegardes selon des horaires prédéfinis ou des déclencheurs d'événements",
          "Plan de reprise après sinistre : création et automatisation des plans de reprise pour garantir une récupération rapide",
        ],
      },
    ],
    value: [
      {
        category: "Protection Complète des Données",
        items: [
          "Multi-environnement : prise en charge des environnements physiques, virtuels et cloud pour une protection complète",
          "Restauration fiable garantissant la possibilité de restaurer rapidement les données en cas de besoin",
        ],
      },
      {
        category: "Sécurité et Conformité",
        items: [
          "Protection avancée contre les menaces comme les ransomwares et autres malwares",
          "Conformité réglementaire : aide les entreprises à se conformer aux exigences de conservation et de protection des données",
        ],
      },
      {
        category: "Flexibilité et Scalabilité",
        items: [
          "Options de stockage flexibles sur site, dans le cloud ou en configuration hybride pour s'adapter aux besoins de l'entreprise",
          "Scalabilité conçue pour évoluer avec la croissance des entreprises, des PME aux grandes organisations",
        ],
      },
      {
        category: "Gestion Simplifiée",
        items: [
          "Interface intuitive : console web facile à utiliser pour gérer et surveiller les sauvegardes",
          "Automatisation réduisant les tâches manuelles grâce à l'automatisation des processus de sauvegarde et de restauration",
        ],
      },
    ],
  },
  {
    key: "acronis-backup-m365",
    name: "Acronis Backup for Microsoft 365",
    vendor: "Acronis",
    icon: Cloud,
    definition:
      "Solution dédiée à la sauvegarde des données Microsoft 365 (emails, fichiers, Teams, SharePoint) non couvertes nativement par les politiques de rétention Microsoft.",
    strengths: [
      "Sauvegarde complète d'Exchange Online, SharePoint, OneDrive et Teams",
      "Restauration granulaire (email, fichier, conversation) en quelques clics",
      "Sauvegardes automatisées et chiffrées dans le cloud",
      "Conservation des données indépendante des politiques de Microsoft",
    ],
    value: [
      "Comble les limites de la rétention native de Microsoft 365",
      "Protection contre la suppression accidentelle ou malveillante de données",
      "Conformité renforcée pour la gestion documentaire de l'entreprise",
    ],
  },
  {
    key: "veeam-backup-m365",
    name: "Veeam Backup for Microsoft 365",
    vendor: "Veeam",
    icon: RotateCcw,
    definition:
      "Solution de sauvegarde spécialisée pour les environnements Microsoft 365, garantissant un contrôle total sur vos données cloud.",
    strengths: [
      "Sauvegarde d'Exchange Online, OneDrive, SharePoint et Teams",
      "Restauration rapide et granulaire des éléments supprimés",
      "Stockage flexible (cloud, on-premise ou hybride)",
      "Recherche et restauration en self-service pour les utilisateurs",
    ],
    value: [
      "Indépendance totale par rapport aux limites de rétention de Microsoft",
      "Continuité d'activité assurée même en cas d'incident sur le cloud Microsoft",
      "Gain de temps pour les équipes IT grâce au self-service",
    ],
  },
];

export default function SauvegardeRepriseActiviteClient() {
  const introRef = useRef(null);
  const stepsRef = useRef(null);
  const productsRef = useRef(null);
  const guaranteesRef = useRef(null);
  const ctaRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const stepsInView = useInView(stepsRef, { once: true, margin: "-100px" });
  const productsInView = useInView(productsRef, { once: true, margin: "-100px" });
  const guaranteesInView = useInView(guaranteesRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const [activeProduct, setActiveProduct] = useState(products[0].key);
  const selected = products.find((p) => p.key === activeProduct)!;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
          <img
            src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1781880098/IT_servers_fcccww.jpg"
            alt="Sauvegarde de données et reprise d'activité informatique sur infrastructure serveur"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-slate-800/90 to-slate-900/85" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-white/50 text-sm mb-8 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight size={14} />
              <Link href="/services/infogerance" className="hover:text-white transition-colors">Infogérance</Link>
              <ChevronRight size={14} />
              <span className="text-accent">Sauvegarde & Reprise d'Activité</span>
            </div>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-accent text-xs font-semibold tracking-widest mb-6">
                <Database size={12} /> CONTINUITÉ D'ACTIVITÉ
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Sauvegarde & Reprise d'Activité
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Protégez vos données et garantissez la continuité de votre activité, même en cas d'incident majeur.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section ref={introRef} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={introInView ? "visible" : "hidden"} className="max-w-3xl">
              <h2 className="text-3xl font-bold text-primary mb-6">Vos données, protégées en toutes circonstances</h2>
              <p className="text-secondary text-lg leading-relaxed mb-4">
                Une panne, une erreur humaine ou une cyberattaque peut compromettre vos données en quelques
                minutes. Notre offre Sauvegarde & Reprise d'Activité met en place des sauvegardes automatisées et
                un plan de reprise d'activité testé régulièrement, pour minimiser l'impact d'un incident.
              </p>
              <p className="text-secondary leading-relaxed">
                Notre équipe, basée à Casablanca, définit avec vous les délais de reprise acceptables et met
                en œuvre les solutions techniques adaptées à votre niveau de criticité.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Steps */}
        <section ref={stepsRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={stepsInView ? "visible" : "hidden"} className="text-center mb-14">
              <h2 className="text-3xl font-bold text-primary mb-4">Notre démarche en 4 étapes</h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" animate={stepsInView ? "visible" : "hidden"} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s) => (
                <motion.div key={s.num} variants={fadeUp} className="relative bg-bg rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-black text-blue-50 absolute top-4 right-4">{s.num}</div>
                  <div className="w-10 h-10 bg-cta/10 text-cta rounded-xl flex items-center justify-center mb-4">{s.icon}</div>
                  <h3 className="text-base font-bold text-primary mb-2">{s.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Produits & solutions partenaires */}
        <section ref={productsRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={productsInView ? "visible" : "hidden"} className="text-center mb-14">
              <span className="text-xs font-bold text-cta tracking-widest uppercase">SOLUTIONS PARTENAIRES</span>
              <h2 className="text-3xl font-bold text-primary mt-2 mb-3">Les technologies derrière nos sauvegardes</h2>
              <p className="text-secondary max-w-2xl mx-auto">Sélectionnez une solution pour découvrir sa définition, ses points forts fonctionnels et la valeur qu'elle apporte à votre entreprise.</p>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" animate={productsInView ? "visible" : "hidden"} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {products.map((p) => {
                const isActive = p.key === activeProduct;
                return (
                  <motion.button
                    key={p.key}
                    type="button"
                    variants={fadeUp}
                    onClick={() => setActiveProduct(p.key)}
                    className={`text-left rounded-2xl border-2 p-5 transition-all duration-200 ${
                      isActive
                        ? "border-cta bg-cta/5 shadow-md"
                        : "border-border bg-bg hover:border-cta/40 hover:shadow-sm"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${isActive ? "bg-cta text-white" : "bg-cta/10 text-cta"}`}>
                      <p.icon size={20} />
                    </div>
                    <div className="text-[11px] font-bold text-secondary/60 uppercase tracking-wide mb-1">{p.vendor}</div>
                    <h3 className="text-sm font-bold text-primary leading-snug">{p.name}</h3>
                  </motion.button>
                );
              })}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selected.key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="bg-bg rounded-2xl border border-border p-8 lg:p-10"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">{selected.name}</h3>
                <p className="text-secondary leading-relaxed mb-8 max-w-3xl">{selected.definition}</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles size={16} className="text-cta" />
                      <h4 className="text-sm font-bold text-primary uppercase tracking-wide">Points forts fonctionnels</h4>
                    </div>
                    {selected.strengths.every((s) => typeof s === "string") ? (
                      <ul className="space-y-2.5">
                        {selected.strengths.map((s) => (
                          <li key={s as string} className="flex items-start gap-2 text-sm text-secondary leading-relaxed">
                            <CheckCircle size={15} className="text-cta mt-0.5 shrink-0" />
                            {s as string}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="space-y-5">
                        {selected.strengths.map((group) => {
                          const g = group as { category: string; items: string[] };
                          return (
                            <div key={g.category}>
                              <h5 className="text-xs font-bold text-cta uppercase tracking-wide mb-2">{g.category}</h5>
                              <ul className="space-y-2">
                                {g.items.map((item) => (
                                  <li key={item} className="flex items-start gap-2 text-sm text-secondary leading-relaxed">
                                    <CheckCircle size={15} className="text-cta mt-0.5 shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Star size={16} className="text-cta" />
                      <h4 className="text-sm font-bold text-primary uppercase tracking-wide">Valeur ajoutée</h4>
                    </div>
                    {selected.value.every((v) => typeof v === "string") ? (
                      <ul className="space-y-2.5">
                        {selected.value.map((v) => (
                          <li key={v as string} className="flex items-start gap-2 text-sm text-secondary leading-relaxed">
                            <CheckCircle size={15} className="text-cta mt-0.5 shrink-0" />
                            {v as string}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="space-y-5">
                        {selected.value.map((group) => {
                          const g = group as { category: string; items: string[] };
                          return (
                            <div key={g.category}>
                              <h5 className="text-xs font-bold text-cta uppercase tracking-wide mb-2">{g.category}</h5>
                              <ul className="space-y-2">
                                {g.items.map((item) => (
                                  <li key={item} className="flex items-start gap-2 text-sm text-secondary leading-relaxed">
                                    <CheckCircle size={15} className="text-cta mt-0.5 shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Guarantees */}
        <section ref={guaranteesRef} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={guaranteesInView ? "visible" : "hidden"} className="text-center mb-14">
              <h2 className="text-3xl font-bold text-primary mb-4">Nos engagements</h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" animate={guaranteesInView ? "visible" : "hidden"} className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {guarantees.map((g) => (
                <motion.div key={g} variants={fadeUp} className="flex items-start gap-3 p-5 bg-white rounded-2xl border border-border">
                  <CheckCircle size={18} className="text-cta mt-0.5 shrink-0" />
                  <span className="text-sm text-secondary leading-relaxed">{g}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaRef} className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={ctaInView ? "visible" : "hidden"} className="bg-primary rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Sécurisez la continuité de vos données</h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Échangeons sur votre stratégie de sauvegarde et de reprise d'activité.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg">
                  Échanger avec un expert
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
