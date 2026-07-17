"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, LayoutGrid, Wrench, BadgeDollarSign, Users, ChevronRight } from "lucide-react";

const categories = [
  {
    heading: "ERP & Gestion",
    icon: LayoutGrid,
    color: "text-cta",
    bg: "bg-blue-50",
    border: "border-blue-100",
    badgeBg: "bg-blue-50 text-cta",
    products: [
      {
        title: "Sage X3",
        sub: "Grandes entreprises & industries",
        badge: "SOLUTION PHARE",
        href: "/solutions/sage-x3",
        desc: "L'ERP de référence pour les groupes industriels et entreprises de taille intermédiaire. Partenaire Sage Business Partner Platinum.",
      },
      {
        title: "Sage 100",
        sub: "Gestion intégrée pour PME agiles",
        badge: "PME & ETI",
        href: "/solutions/sage-100",
        desc: "L'ERP idéal pour les PME en Afrique et à l'international qui veulent digitaliser leur gestion sans complexité.",
      },
      {
        title: "Sage FRP 1000",
        sub: "Plateforme financière de groupe",
        badge: "GROUPES",
        href: "/solutions/sage-frp-1000",
        desc: "Consolidation automatique, reporting groupe, multi-entités pour holdings et filiales.",
      },
    ],
  },
  {
    heading: "Maintenance & Industrie",
    icon: Wrench,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    badgeBg: "bg-emerald-50 text-emerald-700",
    products: [
      {
        title: "DimoMaint GMAO",
        sub: "Gestion de maintenance préventive",
        badge: "MAINTENANCE",
        href: "/solutions/dimomaint-gmao",
        desc: "GMAO complète pour optimiser la disponibilité des équipements industriels et réduire les coûts.",
      },
    ],
  },
  {
    heading: "Gestion Financière",
    icon: BadgeDollarSign,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
    badgeBg: "bg-amber-50 text-amber-700",
    products: [
      {
        title: "Eloficash",
        sub: "Recouvrement & Crédit client",
        badge: "RECOUVREMENT",
        href: "/solutions/eloficash",
        desc: "Scoring client, relances automatiques et suivi des encours pour sécuriser votre trésorerie.",
      },
    ],
  },
  {
    heading: "Ressources Humaines",
    icon: Users,
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    badgeBg: "bg-violet-50 text-violet-700",
    products: [
      {
        title: "Sage 100 Paie & RH",
        sub: "Paie automatisée & conforme",
        badge: "PAIE & RH",
        href: "/solutions/sage-100-paie-rh",
        desc: "Calcul de la paie, déclarations CNSS/IR et gestion des congés conformes à la réglementation marocaine.",
      },
      {
        title: "Sage Espace Employés",
        sub: "Portail collaborateur self-service",
        badge: "PORTAIL COLLABORATEUR",
        href: "/solutions/sage-espace-employes",
        desc: "Bulletins de paie, congés et documents RH accessibles en ligne par chaque collaborateur.",
      },
      {
        title: "Factorial",
        sub: "Espace Collaborateur & SIRH Cloud",
        badge: "SIRH CLOUD",
        href: "/solutions/factorial",
        desc: "SIRH Cloud moderne : congés, fiches de paie, recrutement, formations — accessible partout.",
      },
    ],
  },
];

const partners = [
  "Sage Business Partner Platinum",
  "DimoMaint Partner",
  "Eloficash Certified",
  "Factorial Partner",
];

export default function SolutionsClient() {
  const introRef = useRef(null);
  const categoriesRef = useRef(null);
  const partnersRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-80px" });
  const categoriesInView = useInView(categoriesRef, { once: true, margin: "-80px" });
  const partnersInView = useInView(partnersRef, { once: true, margin: "-80px" });

  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-800 to-slate-900" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight aria-hidden="true" size={14} />
              <span aria-current="page" className="text-accent">Solutions ERP</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center text-xs font-semibold text-accent tracking-widest bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full mb-5">
                INTÉGRATEUR ERP MAROC
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Solutions ERP & Logiciels Métiers
              </h1>
              <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
                Un portfolio de logiciels ERP et solutions métiers de référence, intégrés et supportés par Thalès Informatique — votre partenaire Sage certifié au Maroc.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section ref={introRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs font-semibold text-cta tracking-widest uppercase">INTÉGRATEUR DE RÉFÉRENCE</span>
                <h2 className="text-3xl font-bold text-primary mt-2 mb-6">
                  Leader de l&apos;intégration ERP au Maroc et en Afrique
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Thalès Informatique est intégrateur ERP de référence au Maroc depuis plus de 30 ans. Notre expertise en intégration ERP couvre tous les profils d'entreprises — PME, ETI et grands groupes — avec un accompagnement local sur mesure, de la sélection du logiciel ERP au support post-déploiement.
                </p>
                <p className="text-secondary leading-relaxed">
                  Chaque solution ERP Maroc est sélectionnée, déployée et supportée par nos consultants certifiés, avec une connaissance approfondie du contexte réglementaire marocain (DGI, CNSS, Code du Travail).
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section ref={categoriesRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {categories.map((cat, catIdx) => {
              const IconComponent = cat.icon;
              return (
                <motion.div
                  key={cat.heading}
                  initial={{ opacity: 0, y: 24 }}
                  animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`w-9 h-9 rounded-xl ${cat.bg} ${cat.border} border flex items-center justify-center shrink-0`}>
                      <IconComponent size={18} className={cat.color} />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">{cat.heading}</h2>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cat.products.map((product) => (
                      <Link
                        key={product.title}
                        href={product.href}
                        className="group bg-white rounded-2xl p-6 border border-border hover:border-cta hover:shadow-md transition-all duration-200 flex flex-col cursor-pointer"
                      >
                        <div className="mb-4">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold tracking-wider ${cat.badgeBg}`}>
                            {product.badge}
                          </span>
                          <h3 className="text-lg font-bold text-primary mt-3 group-hover:text-cta transition-colors duration-200">
                            {product.title}
                          </h3>
                          <p className="text-sm text-secondary mt-0.5">{product.sub}</p>
                        </div>
                        <p className="text-sm text-secondary leading-relaxed flex-1">{product.desc}</p>
                        <div className="mt-5 flex items-center gap-1.5 text-cta text-sm font-semibold">
                          En savoir plus
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Partner Logos */}
        <section ref={partnersRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={partnersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <span className="text-xs font-semibold text-cta tracking-widest uppercase">NOS PARTENARIATS</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Certifications &amp; Partenariats officiels</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={partnersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="px-5 py-2.5 bg-bg border border-border rounded-lg text-sm font-semibold text-primary tracking-wide shadow-sm hover:border-cta hover:text-cta hover:shadow-md transition-all duration-200"
                >
                  {partner}
                </span>
              ))}
            </motion.div>
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
                Quelle solution correspond à vos besoins ?
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
                Nos experts Thalès Informatique vous orientent vers la solution ERP la plus adaptée à votre secteur et à votre taille.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors duration-200"
                >
                  Parler à un expert <ArrowRight size={18} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors duration-200"
                >
                  Nos services d'intégration <ArrowRight size={16} />
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
