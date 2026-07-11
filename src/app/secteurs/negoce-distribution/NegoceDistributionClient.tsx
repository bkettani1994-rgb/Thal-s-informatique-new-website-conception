"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import {
  ArrowRight, ChevronRight, CheckCircle,
  Package, TrendingUp, Users, BarChart2, Truck, ShieldCheck,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const challenges = [
  {
    icon: Package,
    title: "Des stocks difficiles à piloter",
    desc: "Entre les ruptures qui font fuir les clients et les surstocks qui immobilisent votre trésorerie, trouver le bon équilibre dans un marché marocain aux délais d'approvisionnement variables est un défi quotidien pour les entreprises de négoce.",
  },
  {
    icon: Truck,
    title: "Une chaîne logistique fragmentée",
    desc: "Entrepôts, transporteurs, fournisseurs locaux et internationaux, points de vente : quand les informations circulent par e-mail ou sur des fichiers non partagés, chaque maillon de votre chaîne logistique devient une source potentielle d'erreurs et de retards.",
  },
  {
    icon: BarChart2,
    title: "Un pilotage commercial sans visibilité",
    desc: "Quels sont vos articles les plus rentables ? Quels clients génèrent le plus de marge ? Sans tableau de bord unifié, prendre des décisions commerciales pertinentes sur le marché marocain et africain revient à naviguer à l'aveugle.",
  },
];

const avantages = [
  {
    icon: Package,
    title: "Maîtrise totale des stocks",
    desc: "Suivez vos niveaux de stock en temps réel sur l'ensemble de vos entrepôts et points de vente. Paramétrez des seuils d'alerte et des réapprovisionnements automatiques pour ne plus jamais subir une rupture ou un surstock coûteux.",
  },
  {
    icon: TrendingUp,
    title: "Amélioration des marges commerciales",
    desc: "Analysez la rentabilité par produit, par client et par canal de vente. Pilotez les objectifs et commissions de vos commerciaux depuis une interface unique, et identifiez rapidement les leviers pour améliorer vos marges nettes.",
  },
  {
    icon: Users,
    title: "Force de vente mobile et réactive",
    desc: "Donnez à vos représentants commerciaux un accès mobile aux stocks, aux historiques clients et aux promotions en cours — depuis n'importe quel appareil, sur le terrain au Maroc ou à l'export.",
  },
  {
    icon: ShieldCheck,
    title: "Traçabilité et conformité",
    desc: "Garantissez la traçabilité complète de vos flux de marchandises, de la réception fournisseur à la livraison client, pour répondre aux exigences douanières et réglementaires marocaines et africaines.",
  },
  {
    icon: Truck,
    title: "Logistique et livraisons optimisées",
    desc: "Planifiez et suivez vos expéditions, gérez vos transporteurs et réduisez vos délais de livraison grâce à une synchronisation automatique entre votre ERP et vos opérations d'entrepôt.",
  },
  {
    icon: BarChart2,
    title: "Reporting et pilotage en temps réel",
    desc: "Tableaux de bord configurables, indicateurs de performance commerciale et rapports financiers consolidés : prenez vos décisions stratégiques sur la base de données fiables et actualisées.",
  },
];

const solutions = [
  {
    badge: "Sage 100",
    badgeLabel: "Gestion Commerciale",
    color: "bg-emerald-600",
    name: "Sage 100 Gestion Commerciale",
    subtitle: "Pour les TPE et PME",
    description: "Sage 100 Gestion Commerciale couvre l'intégralité du cycle de vente pour les entreprises de négoce marocaines : devis, commandes, factures, gestion des stocks et réapprovisionnement automatique dans une solution simple à prendre en main.",
    features: [
      "Gestion complète du cycle devis → commande → facture → avoir",
      "Suivi des stocks multi-dépôts et alertes de réapprovisionnement",
      "Base articles et tarifs personnalisables par client ou segment",
      "Tableaux de bord commerciaux mis à jour en temps réel",
      "Intégration native avec Sage 100 Comptabilité",
      "Dématérialisation des documents commerciaux",
    ],
    cta: "Découvrir Sage 100 Gestion Commerciale",
    href: "/contact",
    highlight: false,
  },
  {
    badge: "Sage 100",
    badgeLabel: "Entreprise",
    color: "bg-cta",
    name: "Sage 100 Entreprise",
    subtitle: "Pour les PME en croissance",
    description: "Sage 100 Entreprise est l'ERP intégré idéal pour les PME de négoce et distribution marocaines souhaitant unifier leur gestion commerciale, comptable, RH et financière dans un seul système.",
    features: [
      "ERP intégré : commercial, comptabilité, trésorerie, RH",
      "Gestion multi-établissements et multi-dépôts",
      "Accès distant et mobilité pour vos équipes terrain",
      "Reporting automatisé et tableaux de bord partagés",
      "Personnalisation des documents et workflows commerciaux",
      "Gestion des commissions et objectifs commerciaux",
    ],
    cta: "Découvrir Sage 100 Entreprise",
    href: "/contact",
    highlight: true,
  },
  {
    badge: "Sage X3",
    badgeLabel: "Warehousing",
    color: "bg-slate-600",
    name: "Sage X3 Warehousing",
    subtitle: "Pour les entrepôts de grande taille",
    description: "Sage X3 Warehousing transforme la gestion de vos entrepôts en optimisant chaque mouvement de marchandise, de la réception à l'expédition, pour des opérations logistiques plus fluides et plus rentables.",
    features: [
      "Gestion des emplacements et optimisation des espaces de stockage",
      "Pilotage des équipes et missions par zone et profil d'opérateur",
      "Traçabilité complète des mouvements entrepôt",
      "Réduction des erreurs de préparation et d'expédition",
      "Interfaçage avec les outils de transport et les clients",
    ],
    cta: "Découvrir Sage X3 Warehousing",
    href: "/contact",
    highlight: false,
  },
  {
    badge: "Sage X3",
    badgeLabel: "ERP Distribution",
    color: "bg-slate-700",
    name: "Sage X3 — ERP Négoce & Distribution",
    subtitle: "Pour les ETI et groupes distributeurs",
    description: "Sage X3 est la solution ERP de référence pour les groupes de distribution marocains et africains opérant sur plusieurs marchés. Elle couvre l'ensemble de la chaîne : achats, stocks, ventes, logistique, comptabilité et RH.",
    features: [
      "Gestion multi-sites, multi-entités et multi-devises",
      "Supply chain intégrée de l'achat fournisseur à la livraison client",
      "Pilotage des performances par région, canal et famille de produits",
      "Workflows de validation configurables selon votre organisation",
      "Connecteurs EDI et API pour l'intégration avec vos partenaires",
      "Déploiement cloud SaaS ou on-premise",
    ],
    cta: "Découvrir Sage X3 Distribution",
    href: "/solutions/sage-x3",
    highlight: false,
  },
];

export default function NegoceDistributionClient() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="pt-32 pb-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeUp}>
                <nav className="text-sm text-white/50 mb-6 flex items-center gap-2">
                  <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                  <ChevronRight size={14} />
                  <Link href="/secteurs" className="hover:text-white transition-colors">Secteurs</Link>
                  <ChevronRight size={14} />
                  <span className="text-white">Négoce & Distribution</span>
                </nav>
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  ERP Négoce & Distribution pour les entreprises marocaines et africaines
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Thalès Informatique accompagne les entreprises de négoce et de distribution au Maroc avec des solutions Sage qui optimisent les stocks, accélèrent les cycles de vente et renforcent la compétitivité.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Parler à un expert <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="hidden lg:flex h-80 rounded-2xl bg-slate-700 border border-slate-600 items-center justify-center"
              >
                <span className="text-slate-400 text-sm">Image à ajouter</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 1 — CONTEXTE MAROC ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.div {...fadeUp}>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Les défis du négoce et de la distribution au Maroc
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Le secteur du négoce et de la distribution au Maroc connaît une mutation profonde : montée de la grande distribution, développement du commerce en ligne, pression sur les délais de livraison et exigences croissantes des clients en matière de traçabilité et de service. Face à ces évolutions, les entreprises doivent moderniser leur gestion pour rester compétitives sur le marché local et à l&apos;export vers l&apos;Afrique subsaharienne.
                </p>
                <p className="text-secondary leading-relaxed">
                  Un ERP spécialisé négoce-distribution permet de centraliser l&apos;ensemble des informations commerciales, logistiques et financières dans une plateforme unique — pour gagner en réactivité, maîtriser les coûts et offrir un niveau de service supérieur à vos clients.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2 — 3 DÉFIS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                3 obstacles qui freinent votre croissance
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {challenges.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col gap-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-cta/10 flex items-center justify-center">
                    <Icon size={22} className="text-cta" />
                  </div>
                  <h3 className="font-bold text-primary">{title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3 — 6 AVANTAGES ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Ce que nos solutions apportent à votre activité
              </h2>
              <p className="text-secondary leading-relaxed">
                Des bénéfices concrets pour les distributeurs et négociants au Maroc et en Afrique.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {avantages.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col gap-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-cta/10 flex items-center justify-center">
                    <Icon size={22} className="text-cta" />
                  </div>
                  <h3 className="font-bold text-primary">{title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4 — SOLUTIONS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                La solution adaptée à votre taille et vos ambitions
              </h2>
              <p className="text-secondary leading-relaxed">
                Que vous soyez PME locale ou groupe distributeur multi-sites, Thalès Informatique dispose de la solution Sage qui correspond à votre organisation.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((sol, i) => (
                <motion.div
                  key={sol.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`rounded-2xl border flex flex-col overflow-hidden ${sol.highlight ? "border-cta shadow-lg shadow-cta/10" : "border-border"}`}
                >
                  <div className={`${sol.color} px-4 py-3`}>
                    <p className="text-white/80 text-xs font-semibold uppercase tracking-widest">{sol.badge}</p>
                    <p className="text-white font-bold">{sol.badgeLabel}</p>
                  </div>
                  <div className="bg-white flex flex-col flex-1 p-5">
                    {sol.subtitle && (
                      <p className="text-xs font-bold text-cta uppercase tracking-widest mb-2">{sol.subtitle}</p>
                    )}
                    <p className="text-secondary text-xs leading-relaxed mb-4">{sol.description}</p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {sol.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-secondary text-xs">
                          <CheckCircle size={12} className="text-cta mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={sol.href}
                      className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold text-xs transition-colors duration-200 ${sol.highlight ? "bg-cta text-white hover:bg-blue-700" : "bg-primary text-white hover:bg-slate-800"}`}
                    >
                      {sol.cta} <ArrowRight size={12} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-16 bg-cta">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Modernisez votre gestion commerciale avec Thalès Informatique
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Nos consultants accompagnent les entreprises de négoce et distribution marocaines dans le choix, le déploiement et la montée en compétence sur leur solution Sage.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cta font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                Discuter de votre projet <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
