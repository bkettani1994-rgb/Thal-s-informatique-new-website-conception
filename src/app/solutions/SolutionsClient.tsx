"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, LayoutGrid, Wrench, BadgeDollarSign, Users, ChevronRight } from "lucide-react";

const categories = [
  {
    heading: "ERP & Logiciels de Gestion",
    icon: LayoutGrid,
    products: [
      {
        title: "Sage X3",
        sub: "Grandes entreprises & industries",
        badge: "SOLUTION PHARE",
        href: "/solutions/sage-x3",
        desc: "Sage X3 est une solution ERP complète destinée aux entreprises marocaines souhaitant optimiser la gestion de leur production, finance, achats, ventes, logistique et supply chain grâce à une plateforme évolutive et internationale.",
      },
      {
        title: "Sage 100",
        sub: "Gestion intégrée pour PME agiles",
        badge: "PME & ETI",
        href: "/solutions/sage-100",
        desc: "Sage 100 permet aux PME marocaines de centraliser leur comptabilité, gestion commerciale, trésorerie et pilotage dans un ERP simple, fiable et évolutif.",
      },
      {
        title: "Sage FRP 1000",
        sub: "Plateforme financière de groupe",
        badge: "GROUPES",
        href: "/solutions/sage-frp-1000",
        desc: "Sage FRP 1000 accompagne les groupes et grandes entreprises dans la gestion financière, la consolidation, le reporting et le pilotage multi-sociétés.",
      },
      {
        title: "Sage 100 Expérience",
        sub: "Inscriptions en avant-première ouvertes",
        badge: "AVANT-PREMIÈRE",
        href: "/solutions/sage-100-experience",
        desc: "Thalès Informatique prépare une nouvelle expérience autour de Sage 100. Inscrivez-vous dès maintenant pour être parmi les premiers informés.",
      },
    ],
  },
  {
    heading: "Maintenance Industrielle & GMAO",
    icon: Wrench,
    products: [
      {
        title: "DimoMaint GMAO",
        sub: "Gestion de maintenance préventive",
        badge: "MAINTENANCE",
        href: "/solutions/dimomaint-gmao",
        desc: "DimoMaint est une solution GMAO permettant aux entreprises industrielles de planifier, suivre et optimiser leurs opérations de maintenance préventive et corrective.",
      },
    ],
  },
  {
    heading: "Gestion Financière & Trésorerie",
    icon: BadgeDollarSign,
    products: [
      {
        title: "Eloficash",
        sub: "Recouvrement & Crédit client",
        badge: "RECOUVREMENT",
        href: "/solutions/eloficash",
        desc: "Eloficash aide les entreprises à sécuriser leur trésorerie grâce à une gestion performante du crédit client, du recouvrement et du suivi des encours.",
      },
    ],
  },
  {
    heading: "Solutions RH & Paie",
    icon: Users,
    products: [
      {
        title: "Sage 100 Paie & RH",
        sub: "Paie automatisée & conforme",
        badge: "PAIE & RH",
        href: "/solutions/sage-100-paie-rh",
        desc: "Sage 100 Paie & RH automatise la paie, les déclarations sociales, la gestion administrative du personnel et les processus RH conformément à la réglementation marocaine.",
      },
      {
        title: "Sage Espace Employés",
        sub: "Portail collaborateur self-service",
        badge: "PORTAIL COLLABORATEUR",
        href: "/solutions/sage-espace-employes",
        desc: "Sage Espace Employés simplifie les échanges entre les collaborateurs et le service RH grâce à un portail sécurisé accessible à tout moment.",
      },
      {
        title: "Factorial",
        sub: "Espace Collaborateur & SIRH Cloud",
        badge: "SIRH CLOUD",
        href: "/solutions/factorial",
        desc: "Factorial est un SIRH Cloud moderne permettant de gérer les congés, la paie, le recrutement, les évaluations, les documents RH et les performances des collaborateurs.",
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
              <span className="inline-block text-xs font-bold text-accent tracking-widest bg-accent/10 px-3 py-1.5 rounded-full mb-4">
                INTÉGRATEUR ERP MAROC
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Intégrateur ERP au Maroc : Solutions ERP &amp; Logiciels Métiers
              </h1>
              <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
                Thalès Informatique accompagne les entreprises marocaines dans le choix, l&apos;intégration, le déploiement et le support de solutions ERP et logiciels métiers. En tant qu&apos;intégrateur ERP au Maroc et partenaire certifié Sage, nous aidons les PME, ETI et grands groupes à accélérer leur transformation digitale grâce à des solutions performantes, évolutives et adaptées à leurs besoins.
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
                <span className="text-xs font-bold text-cta tracking-widest uppercase">INTÉGRATEUR DE RÉFÉRENCE</span>
                <h2 className="text-3xl font-bold text-primary mt-2 mb-6">
                  Leader de l&apos;intégration ERP au Maroc et en Afrique
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Thalès Informatique est un intégrateur ERP au Maroc reconnu pour son expertise dans le déploiement de solutions de gestion destinées aux PME, ETI, groupes industriels et grandes entreprises. Depuis plus de 30 ans, nous accompagnons les organisations dans leur transformation digitale grâce à des logiciels ERP performants, capables d&apos;optimiser les processus financiers, commerciaux, industriels, logistiques et RH.
                </p>
                <p className="text-secondary leading-relaxed">
                  Notre équipe de consultants certifiés assure chaque étape de votre projet : analyse des besoins, conseil, intégration ERP, paramétrage, migration des données, formation des utilisateurs et support. Grâce à notre parfaite maîtrise des solutions Sage et des exigences réglementaires marocaines, nous garantissons des projets fiables, sécurisés et adaptés aux enjeux de chaque entreprise.
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
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                      <IconComponent size={18} className="text-cta" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">{cat.heading}</h2>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cat.products.map((product) => (
                      <Link
                        key={product.title}
                        href={product.href}
                        className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-cta hover:shadow-sm transition-all duration-200 flex flex-col cursor-pointer"
                      >
                        <div className="mb-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-blue-50 text-cta text-xs font-semibold tracking-wider">
                            {product.badge}
                          </span>
                          <h3 className="text-base font-bold text-primary mt-3 group-hover:text-cta transition-colors duration-200">
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
              <span className="text-xs font-bold text-cta tracking-widest uppercase">NOS PARTENARIATS</span>
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
                  className="px-5 py-2.5 bg-bg border border-slate-200 rounded-lg text-sm font-semibold text-primary tracking-wide hover:border-cta hover:text-cta transition-colors duration-200"
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
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors duration-200"
              >
                Parler à un expert <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
