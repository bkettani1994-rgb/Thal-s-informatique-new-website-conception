"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Bug, Lock, Eye, Users, ShieldCheck, ArrowRight, ShieldHalf, CheckCircle, Sparkles, Star, Flame, RadioTower } from "lucide-react";
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

const domains = [
  { icon: Lock, title: "Pare-feu avancé", desc: "Filtrage et contrôle des accès réseau pour bloquer les intrusions." },
  { icon: Eye, title: "EDR & Détection", desc: "Surveillance comportementale des postes et serveurs pour détecter les menaces." },
  { icon: ShieldCheck, title: "Audits de sécurité", desc: "Tests de vulnérabilité et recommandations priorisées." },
  { icon: Users, title: "Sensibilisation des équipes", desc: "Formation de vos collaborateurs aux bonnes pratiques de cybersécurité." },
];

const benefits = [
  "Réduction du risque de cyberattaques et de fuite de données",
  "Conformité renforcée face aux exigences réglementaires",
  "Détection et réponse rapides en cas d'incident de sécurité",
  "Équipes sensibilisées aux risques de phishing et d'ingénierie sociale",
];

const products = [
  {
    key: "sophos",
    name: "Sophos",
    vendor: "Sophos",
    icon: ShieldHalf,
    definition:
      "Suite de cybersécurité nouvelle génération combinant protection des endpoints, pare-feu et détection des menaces pilotée par l'intelligence artificielle.",
    strengths: [
      "Protection des endpoints avec détection comportementale et blocage des ransomwares en temps réel",
      "Pare-feu nouvelle génération (XG Firewall) avec inspection approfondie du trafic",
      "Synchronized Security : communication automatique entre les endpoints et le pare-feu pour isoler les menaces",
      "Console de gestion centralisée (Sophos Central) pour superviser l'ensemble du parc",
    ],
    value: [
      "Réduction du temps de détection et de réponse face aux menaces grâce à l'automatisation",
      "Visibilité unifiée sur la sécurité réseau et la sécurité des postes",
      "Simplicité d'administration pour les équipes IT internes",
    ],
  },
  {
    key: "acronis",
    name: "Acronis",
    vendor: "Acronis",
    icon: ShieldCheck,
    definition:
      "Plateforme combinant cybersécurité et protection des données, intégrant antimalware, anti-ransomware et gestion des vulnérabilités.",
    strengths: [
      "Protection anti-ransomware et antimalware basée sur l'intelligence artificielle (Acronis Active Protection)",
      "Gestion des correctifs et des vulnérabilités pour réduire la surface d'attaque",
      "Filtrage d'URL et protection contre les attaques par script",
      "Intégration native avec les solutions de sauvegarde Acronis pour une remédiation rapide",
    ],
    value: [
      "Une seule plateforme pour couvrir à la fois la cybersécurité et la continuité des données",
      "Réduction du risque de compromission grâce à une approche proactive des vulnérabilités",
      "Remédiation accélérée en cas d'incident grâce au lien avec la sauvegarde",
    ],
  },
  {
    key: "bitdefender",
    name: "Bitdefender",
    vendor: "Bitdefender",
    icon: Lock,
    definition:
      "Solution de cybersécurité reconnue pour ses moteurs de détection performants et sa faible empreinte sur les postes de travail et serveurs.",
    strengths: [
      "Détection multicouche (machine learning, analyse comportementale, sandboxing) contre les menaces avancées",
      "Protection EDR/XDR pour une visibilité étendue sur les incidents de sécurité",
      "Faible impact sur les performances des postes et serveurs protégés",
      "Console GravityZone centralisée pour le déploiement et le suivi des politiques de sécurité",
    ],
    value: [
      "Niveau de détection élevé sans compromettre la productivité des utilisateurs",
      "Réduction de la charge de gestion grâce à une administration centralisée",
      "Réactivité accrue face aux menaces grâce aux capacités EDR/XDR",
    ],
  },
  {
    key: "fortinet",
    name: "Fortinet",
    vendor: "Fortinet",
    icon: Flame,
    definition:
      "Référence du marché pour la sécurité réseau, avec des pare-feux nouvelle génération (FortiGate) et un écosystème de sécurité intégré (Security Fabric).",
    strengths: [
      "Pare-feu nouvelle génération (FortiGate) avec inspection SSL et protection contre les intrusions",
      "Security Fabric : intégration native entre pare-feu, endpoints, Wi-Fi et cloud pour une défense cohérente",
      "VPN sécurisé pour les accès distants et le télétravail",
      "Performances élevées grâce à des processeurs de sécurité dédiés (SPU)",
    ],
    value: [
      "Sécurité réseau robuste, adaptée aux infrastructures multi-sites",
      "Cohérence de la posture de sécurité grâce à l'intégration de l'ensemble des couches de protection",
      "Continuité d'activité assurée pour les collaborateurs en mobilité ou en télétravail",
    ],
  },
  {
    key: "eset",
    name: "Eset",
    vendor: "Eset",
    icon: RadioTower,
    definition:
      "Solution de cybersécurité reconnue pour la légèreté de ses agents et l'efficacité de sa détection, adaptée aux PME comme aux grandes structures.",
    strengths: [
      "Moteur de détection multicouche combinant signatures, heuristique et machine learning",
      "Protection des endpoints, serveurs de fichiers et messagerie contre malwares et phishing",
      "Console de gestion ESET PROTECT pour le déploiement et le suivi à distance",
      "Faible consommation de ressources, adaptée aux environnements hétérogènes",
    ],
    value: [
      "Bon équilibre entre niveau de protection et performance des systèmes",
      "Déploiement et gestion simplifiés pour les équipes IT, y compris sur des parcs hétérogènes",
      "Coût total de possession maîtrisé pour les PME comme pour les grandes structures",
    ],
  },
];

export default function CybersecuriteClient() {
  const introRef = useRef(null);
  const domainsRef = useRef(null);
  const productsRef = useRef(null);
  const benefitsRef = useRef(null);
  const ctaRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const domainsInView = useInView(domainsRef, { once: true, margin: "-100px" });
  const productsInView = useInView(productsRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
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
            alt="Sécurisation des serveurs et protection de l'infrastructure IT contre les cybermenaces"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-slate-800/90 to-slate-900/85" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-white/50 text-sm mb-8 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight aria-hidden="true" size={14} />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight aria-hidden="true" size={14} />
              <Link href="/services/infogerance" className="hover:text-white transition-colors">Infogérance</Link>
              <ChevronRight aria-hidden="true" size={14} />
              <span aria-current="page" className="text-accent">Cybersécurité</span>
            </nav>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-accent text-xs font-semibold tracking-widest mb-6">
                <Bug size={12} /> PROTECTION & CONFORMITÉ
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Cybersécurité
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Protégez vos systèmes, vos données et vos équipes contre les menaces informatiques.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section ref={introRef} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={introInView ? "visible" : "hidden"} className="max-w-3xl">
              <h2 className="text-3xl font-bold text-primary mb-6">Une sécurité multi-niveaux</h2>
              <p className="text-secondary text-lg leading-relaxed mb-4">
                Les cybermenaces évoluent en permanence. Notre offre de cybersécurité combine protection
                technique (pare-feu, EDR), audits réguliers et sensibilisation des équipes, pour réduire
                durablement votre exposition au risque.
              </p>
              <p className="text-secondary leading-relaxed">
                Notre équipe, basée à Casablanca, adapte le niveau de protection à la criticité de vos
                systèmes et accompagne vos collaborateurs vers de meilleures pratiques au quotidien.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Domains */}
        <section ref={domainsRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={domainsInView ? "visible" : "hidden"} className="text-center mb-14">
              <h2 className="text-3xl font-bold text-primary mb-4">Nos domaines d'action</h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" animate={domainsInView ? "visible" : "hidden"} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {domains.map((d) => (
                <motion.div key={d.title} variants={fadeUp} className="bg-bg rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-violet-100 text-violet-700 rounded-xl flex items-center justify-center mb-4">
                    <d.icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-primary mb-2">{d.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{d.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Produits & solutions partenaires */}
        <section ref={productsRef} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={productsInView ? "visible" : "hidden"} className="text-center mb-14">
              <span className="text-xs font-bold text-violet-600 tracking-widest uppercase">SOLUTIONS PARTENAIRES</span>
              <h2 className="text-3xl font-bold text-primary mt-2 mb-3">Les technologies derrière notre cybersécurité</h2>
              <p className="text-secondary max-w-2xl mx-auto">Sélectionnez une solution pour découvrir sa définition, ses points forts fonctionnels et la valeur qu'elle apporte à votre entreprise.</p>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" animate={productsInView ? "visible" : "hidden"} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
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
                        ? "border-violet-600 bg-violet-50 shadow-md"
                        : "border-border bg-white hover:border-violet-300 hover:shadow-sm"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${isActive ? "bg-violet-600 text-white" : "bg-violet-100 text-violet-700"}`}>
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
                className="bg-white rounded-2xl border border-border p-8 lg:p-10"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">{selected.name}</h3>
                <p className="text-secondary leading-relaxed mb-8 max-w-3xl">{selected.definition}</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles size={16} className="text-violet-600" />
                      <h4 className="text-sm font-bold text-primary uppercase tracking-wide">Points forts fonctionnels</h4>
                    </div>
                    <ul className="space-y-2.5">
                      {selected.strengths.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-secondary leading-relaxed">
                          <CheckCircle size={15} className="text-violet-600 mt-0.5 shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Star size={16} className="text-violet-600" />
                      <h4 className="text-sm font-bold text-primary uppercase tracking-wide">Valeur ajoutée</h4>
                    </div>
                    <ul className="space-y-2.5">
                      {selected.value.map((v) => (
                        <li key={v} className="flex items-start gap-2 text-sm text-secondary leading-relaxed">
                          <CheckCircle size={15} className="text-violet-600 mt-0.5 shrink-0" />
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Benefits */}
        <section ref={benefitsRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={benefitsInView ? "visible" : "hidden"} className="text-center mb-14">
              <h2 className="text-3xl font-bold text-primary mb-4">Pourquoi investir dans la cybersécurité</h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" animate={benefitsInView ? "visible" : "hidden"} className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {benefits.map((b) => (
                <motion.div key={b} variants={fadeUp} className="flex items-start gap-3 p-5 bg-white rounded-2xl border border-border">
                  <ShieldCheck size={18} className="text-violet-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-secondary leading-relaxed">{b}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaRef} className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" animate={ctaInView ? "visible" : "hidden"} className="bg-primary rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Renforcez votre niveau de sécurité</h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Demandez un audit de sécurité gratuit de votre infrastructure.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg">
                  Demander un audit de sécurité
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
