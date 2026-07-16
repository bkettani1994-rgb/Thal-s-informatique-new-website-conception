"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, ChevronRight, ChevronDown, FileText, CalendarDays, CalendarClock, MessageSquare, Receipt, BarChart3, Settings, Shield, Brain, Cloud, MapPin, Handshake } from "lucide-react";

const benefits = [
  { title: "Moins d'administratif, plus d'humain", desc: "Simplifiez et automatisez vos processus RH, et dématérialisez les données de vos salariés.", icon: Settings },
  { title: "Soyez conforme", desc: "Gérez sereinement les contraintes légales et réglementaires et faites vos déclarations en un clic. C'est simple et rapide.", icon: Shield },
  { title: "Restez informé", desc: "Accédez facilement à toutes les informations et applications métier. Soyez averti des dernières mises à jour et bénéficiez de la veille juridique.", icon: Brain },
  { title: "Faites des économies et optez pour la sécurité", desc: "Avec l'hébergement dans le cloud, oubliez les coûts de maintenance technique des serveurs et profitez d'une sécurité accrue de vos données.", icon: Cloud },
  { title: "Travaillez en mobilité", desc: "Où que vous soyez, à partir d'une simple connexion internet vous bénéficiez d'un accès à distance simple et sécurisé.", icon: MapPin },
  { title: "Soyez accompagné", desc: "Vous pouvez compter sur la proximité et l'expertise métier de nos équipes pour construire avec vous votre solution de Paie & RH sur-mesure.", icon: Handshake },
];

const discoveryTabs = [
  {
    key: "paie",
    label: "La paie",
    title: "La paie",
    desc: "Avec l'assistant de préparation, réalisez vos bulletins de salaire en intégrant le report automatique des éléments constants, la gestion des titres restaurant, le calcul des paies à l'envers, la gestion des acomptes (de la génération au virement), le contrôle et le report automatique des acomptes payés et disposez d'une fonction de rappel des salaires pour gérer la rétroactivité.",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782383795/Screenshot_2026-06-25_at_11-35-59_Sage_100_Paie_RH_Sage_Maroc_w6k5se.png",
    imageAlt: "Interface Sage 100 Paie & RH dédiée à la préparation et au calcul des bulletins de salaire",
  },
  {
    key: "rh",
    label: "Les ressources humaines",
    title: "Les ressources humaines",
    desc: "Centralisez les dossiers de vos collaborateurs, suivez les contrats, les avenants et les compétences, et pilotez vos effectifs grâce à des indicateurs RH actualisés en continu.",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782383796/Screenshot_2026-06-25_at_11-36-06_Sage_100_Paie_RH_Sage_Maroc_mmmrf5.png",
    imageAlt: "Interface Sage 100 Paie & RH pour la centralisation des dossiers et indicateurs des collaborateurs",
  },
  {
    key: "declarations",
    label: "Les déclarations obligatoires",
    title: "Les déclarations obligatoires",
    desc: "Générez automatiquement vos déclarations sociales et fiscales (CNSS, IR, AMO) conformes à la réglementation marocaine, prêtes à être transmises chaque mois.",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782383796/Screenshot_2026-06-25_at_11-36-13_Sage_100_Paie_RH_Sage_Maroc_esgbj5.png",
    imageAlt: "Interface Sage 100 Paie & RH pour la génération automatique des déclarations sociales et fiscales",
  },
  {
    key: "administratif",
    label: "La gestion administrative",
    title: "La gestion administrative",
    desc: "Gérez les congés, les absences, les notes de frais et l'ensemble des documents administratifs RH dans un environnement unique et sécurisé.",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782383796/Screenshot_2026-06-25_at_11-36-18_Sage_100_Paie_RH_Sage_Maroc_xsxzno.png",
    imageAlt: "Interface Sage 100 Paie & RH pour la gestion administrative des congés, absences et notes de frais",
  },
  {
    key: "guide",
    label: "Laissez-vous guider",
    title: "Laissez-vous guider",
    desc: "Des assistants de paramétrage et des contrôles automatiques vous accompagnent à chaque étape, de la première paie jusqu'aux clôtures de fin d'exercice.",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782383795/Screenshot_2026-06-25_at_11-35-59_Sage_100_Paie_RH_Sage_Maroc_w6k5se.png",
    imageAlt: "Assistants de paramétrage et contrôles automatiques de Sage 100 Paie & RH",
  },
];

const complementary = [
  { title: "Dématérialisez les processus paie et RH", desc: "Dites adieu au papier et digitalisez vos processus paie et ressources humaines.", icon: FileText, gradient: "from-orange-500 via-amber-500 to-yellow-400", href: "/solutions/sage-espace-employes", linkLabel: "Découvrez Sage Démat RH" },
  { title: "Gérez les congés et absences", desc: "La gestion des congés de vos employés devient plus facile que jamais.", icon: CalendarDays, gradient: "from-emerald-500 via-teal-500 to-cyan-400", href: "/solutions/sage-espace-employes", linkLabel: "Découvrez Sage Espace Employés" },
  { title: "Gérez les plannings", desc: "Facilitez le planning de vos collaborateurs grâce aux automatismes.", icon: CalendarClock, gradient: "from-blue-600 via-indigo-500 to-violet-500", href: "/solutions/sage-espace-employes", linkLabel: "Découvrez Sage Espace Employés" },
  { title: "Automatisez les campagnes", desc: "Faites de l'entretien individuel un moment propice aux échanges.", icon: MessageSquare, gradient: "from-sky-500 via-blue-500 to-indigo-600", href: "/solutions/sage-espace-employes", linkLabel: "Découvrez Sage Espace Employés" },
  { title: "Gérez les notes de frais", desc: "Scannez vos justificatifs en quelques secondes pour une gestion simplifiée.", icon: Receipt, gradient: "from-fuchsia-500 via-purple-500 to-violet-700", href: "/solutions/sage-espace-employes", linkLabel: "Découvrez Sage Espace Employés" },
  { title: "Pilotez votre entreprise", desc: "Réalisez des tableaux de bord et reportings, et partagez-les en un clic.", icon: BarChart3, gradient: "from-lime-500 via-green-500 to-emerald-600", href: "/solutions/sage-100-paie-rh", linkLabel: "Découvrez Sage Business Reporting" },
];

const faqs = [
  {
    q: "Qu'est-ce que Sage 100 Paie & RH ?",
    a: "Sage 100 Paie & RH est le module de Sage 100 dédié au calcul de la paie, à la gestion administrative du personnel et aux déclarations sociales, conforme à la réglementation marocaine.",
  },
  {
    q: "A qui est destiné Sage 100 Paie & RH ?",
    a: "Il s'adresse aux PME et ETI marocaines, de quelques salariés à plusieurs centaines, qui souhaitent fiabiliser et automatiser leur gestion de la paie et de leurs ressources humaines.",
  },
  {
    q: "Combien coûte Sage 100 Paie & RH ?",
    a: "Le tarif dépend du nombre de salariés gérés, des options choisies (cloud, modules complémentaires) et du niveau d'accompagnement souhaité. Contactez nos experts Thalès Informatique pour un chiffrage personnalisé.",
  },
  {
    q: "Sage 100 Paie & RH est-il conforme à la législation marocaine ?",
    a: "Oui, le logiciel intègre les règles de paie marocaines (CNSS, IR, AMO, CIMR) et est mis à jour automatiquement à chaque évolution réglementaire ou loi de finances.",
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

export default function Sage100PaieRhClient() {
  const benefitsRef = useRef(null);
  const discoveryRef = useRef(null);
  const complementaryRef = useRef(null);
  const faqRef = useRef(null);

  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-80px" });
  const discoveryInView = useInView(discoveryRef, { once: true, margin: "-80px" });
  const complementaryInView = useInView(complementaryRef, { once: true, margin: "-80px" });
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
              <span className="text-white">Sage 100 Paie & RH</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block text-xs font-bold text-accent tracking-widest bg-accent/10 px-3 py-1.5 rounded-full mb-4">
                SAGE 100 PAIE & RH
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Gérez votre paie et vos RH avec Sage 100
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Automatisez vos bulletins de paie, déclarations CNSS, IR et AMO en toute conformité avec la législation marocaine.
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
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1782383568/senior-people-school-class-with-laptop-computer_jz358t.jpg"
                  alt="Processus de gestion de la paie et des ressources humaines accompagné par Sage 100 Paie & RH"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="sm:col-span-1 h-48 sm:h-64 rounded-2xl border border-white/15 overflow-hidden bg-white">
                <img
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1782383376/Sage-100-Paie-et-RH-thal%C3%A8s-informatique_z4mr3r.png"
                  alt="Interface de l'ERP Sage 100 Paie & RH affichant un tableau de bord de gestion des collaborateurs"
                  className="w-full h-full object-contain p-3"
                  loading="lazy"
                />
              </div>
              <div className="sm:col-span-1 h-48 sm:h-64 rounded-2xl border border-white/15 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1782383567/worker-giving-her-opinion-office_wwbkyb.jpg"
                  alt="Collaborateur gérant ses congés et absences via Sage 100 Paie & RH"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Optimisez votre gestion de la paie et des RH */}
        <section ref={benefitsRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12 max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-primary">
                Optimisez votre gestion de la paie et des ressources humaines grâce à Sage 100 Paie & RH
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 border border-border hover:shadow-md transition-shadow duration-200 flex flex-col"
                >
                  <div className="w-10 h-10 rounded-xl bg-cta/10 flex items-center justify-center mb-4">
                    <b.icon size={20} className="text-cta" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{b.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ce que Sage 100 Paie & RH peut faire pour vous */}
        <section ref={discoveryRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={discoveryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12 max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-primary">Ce que Sage 100 Paie & RH peut faire pour vous</h2>
              <p className="text-secondary mt-3">
                Avec Sage 100 Paie & RH, vous pouvez compter sur des outils fiables pour gérer votre paie et vos ressources humaines.
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
                      activeTab === tab.key ? "bg-cta/10 text-cta" : "text-secondary hover:bg-bg hover:text-primary"
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
                  <p className="text-secondary leading-relaxed">{selectedTab.desc}</p>
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

        {/* Solutions complémentaires */}
        <section ref={complementaryRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={complementaryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12 max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-primary">Les solutions complémentaires à Sage 100 Paie & RH</h2>
              <p className="text-secondary mt-3">
                Adaptez notre solution à votre activité. Gérez les plannings, créez des reportings et digitalisez vos processus pour couvrir tous vos besoins.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complementary.map((sol, i) => (
                <motion.div
                  key={sol.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={complementaryInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="bg-white rounded-2xl border border-border hover:shadow-md transition-shadow duration-200 flex flex-col p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-cta/10 flex items-center justify-center mb-4">
                    <sol.icon size={20} className="text-cta" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{sol.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed flex-1">{sol.desc}</p>
                  <Link
                    href={sol.href}
                    className="inline-flex items-center gap-1 text-cta text-sm font-semibold mt-4"
                  >
                    {sol.linkLabel} <ArrowRight size={13} />
                  </Link>
                </motion.div>
              ))}
            </div>
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
              <h2 className="text-3xl font-bold text-white">Questions fréquentes sur Sage 100 Paie &amp; RH</h2>
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
                Prêt à automatiser votre paie avec Sage 100 Paie & RH ?
              </h2>
              <p className="text-secondary mb-4 max-w-xl mx-auto">
                Contactez nos experts Thalès Informatique pour une démonstration gratuite adaptée à votre entreprise.
              </p>
              <p className="text-secondary text-sm mb-8">Besoin d&apos;un SIRH complet ? Découvrez <Link href="/solutions/factorial" className="text-cta hover:underline font-medium">Factorial</Link>, notre solution RH cloud.</p>
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
