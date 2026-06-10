"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Users, BookOpen, MessageSquare, TrendingUp, Clock, Star, Briefcase } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const subPages = [
  {
    href: "/references/clients",
    icon: Users,
    title: "Nos Clients",
    description: "Découvrez les 500+ entreprises marocaines qui nous font confiance depuis plus de 30 ans.",
    count: "500+ clients",
    color: "from-blue-600 to-cyan-500",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    href: "/references/etudes-de-cas",
    icon: BookOpen,
    title: "Études de Cas",
    description: "Des transformations concrètes et mesurables chez nos clients à travers tous les secteurs.",
    count: "6 études publiées",
    color: "from-violet-600 to-purple-500",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    href: "/references/temoignages",
    icon: MessageSquare,
    title: "Témoignages",
    description: "Les retours authentiques de nos clients sur leur expérience avec Thalès Informatique.",
    count: "312 avis — 4.8/5",
    color: "from-emerald-600 to-teal-500",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];

const stats = [
  { value: "500+", label: "Clients actifs", icon: Users },
  { value: "30 ans", label: "D'expérience", icon: Clock },
  { value: "97%", label: "Taux de satisfaction", icon: Star },
  { value: "1 200+", label: "Projets livrés", icon: Briefcase },
];

export default function ReferencesPage() {
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const statsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-800 to-slate-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-cta rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-accent transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <span className="text-accent">Références</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nos <span className="text-accent">Références</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              La confiance de 500+ entreprises marocaines depuis 30 ans. Découvrez nos clients, nos études de cas et les témoignages qui parlent pour nous.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sub-pages cards */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subPages.map((page, i) => (
              <motion.div
                key={page.href}
                initial={{ opacity: 0, y: 40 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Link href={page.href} className="group block h-full">
                  <div className="h-full bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className={`w-14 h-14 ${page.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <page.icon size={26} className={page.iconColor} />
                    </div>
                    <h2 className="text-xl font-bold text-primary mb-3">{page.title}</h2>
                    <p className="text-secondary text-sm leading-relaxed mb-6">{page.description}</p>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r ${page.color} text-white`}>
                        {page.count}
                      </span>
                      <div className="flex items-center gap-1 text-cta text-sm font-semibold group-hover:gap-2 transition-all duration-200">
                        Découvrir <ChevronRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon size={28} className="text-accent mx-auto mb-3" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Rejoignez nos clients satisfaits</h2>
            <p className="text-secondary mb-8">Prenez contact avec notre équipe pour discuter de votre projet de transformation digitale.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg"
            >
              Demander une démo <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
