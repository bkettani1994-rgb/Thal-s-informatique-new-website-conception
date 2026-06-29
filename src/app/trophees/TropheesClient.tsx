"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Trophy, ChevronRight, Award, Star, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const awards = [
  {
    year: "2024",
    icon: Trophy,
    title: "Meilleure Dynamique Commerciale Maroc 2024",
    org: "Sage Partner Sessions 2024",
    color: "amber",
    desc: "Cette distinction récompense la performance commerciale exceptionnelle de Thalès Informatique sur le marché marocain en 2024.",
  },
  {
    year: "2022",
    icon: Trophy,
    title: "Top League — Zone Export",
    org: "Top League 2022",
    color: "amber",
    desc: "Cette distinction récompense les performances de Thalès Informatique sur les marchés export et confirme son rayonnement au-delà du Maroc.",
  },
  {
    year: "2019",
    icon: Star,
    title: "Meilleure Croissance Sage",
    org: "Sage Partner Sessions — Tanger 2019",
    color: "violet",
    desc: "Cette récompense distingue la forte croissance de Thalès Informatique dans le développement et l'intégration des solutions Sage.",
  },
  {
    year: "2019",
    icon: Award,
    title: "Customer Migration Journey",
    org: "Sage Partner Sessions — Bordeaux 2019",
    color: "blue",
    desc: "Cette distinction récompense l'excellence de Thalès Informatique dans l'accompagnement des clients lors de leurs projets de migration et de transformation digitale.",
  },
  {
    year: "2018",
    icon: Star,
    title: "Meilleure Performance Sage",
    org: "Sage Partner Sessions — Tunis 2018",
    color: "emerald",
    desc: "Cette récompense met en avant les performances commerciales et opérationnelles exceptionnelles de Thalès Informatique au sein de l'écosystème Sage.",
  },
  {
    year: "2017",
    icon: Trophy,
    title: "Premier Partenaire North Africa",
    org: "Sage Partner Sessions — Marrakech 2017",
    color: "orange",
    desc: "Cette distinction positionne Thalès Informatique comme le partenaire Sage de référence en Afrique du Nord.",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  amber: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", badge: "bg-amber-100 text-amber-800" },
  violet: { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200", badge: "bg-violet-100 text-violet-800" },
  blue: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", badge: "bg-blue-100 text-blue-800" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-800" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200", badge: "bg-indigo-100 text-indigo-800" },
  orange: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200", badge: "bg-orange-100 text-orange-800" },
};

const certifications = [
  "ISO 9001:2015", "Microsoft Gold Partner", "Oracle Certified", "APEBI Member",
  "CGEM Partenaire", "ANPME Référencé", "IMIS Certified",
];

const pressQuotes = [
  {
    quote: "Thalès Informatique s'impose comme l'acteur de référence de l'ERP au Maroc et en Afrique, avec une croissance remarquable et une capacité d'innovation qui force le respect.",
    source: "L'Économiste",
    date: "Octobre 2024",
  },
  {
    quote: "Avec 30 ans d'expérience et 500+ clients accompagnés, Thalès Informatique incarne la réussite d'une entreprise tech marocaine à l'heure de la transformation digitale.",
    source: "La Vie Éco",
    date: "Juin 2023",
  },
  {
    quote: "Une solution ERP 100% adaptée au contexte réglementaire et fiscal marocain — c'est ce que propose Thalès Informatique, et c'est exactement ce dont les entreprises ont besoin.",
    source: "TelQuel Digital",
    date: "Mars 2023",
  },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function TropheesClient() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-primary to-primary" />
        <div className="absolute top-20 left-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white/40 text-sm mb-6 justify-center">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <span className="text-white/70">Trophées</span>
            </div>
            <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Trophy size={28} className="text-amber-300" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nos Trophées<br />
              <span className="text-amber-300">& Reconnaissances</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              30 ans d'excellence récompensés par les plus hautes distinctions du secteur tech marocain et international.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-primary mb-6">L'excellence comme engagement</h2>
            <p className="text-secondary text-lg leading-relaxed mb-6">
              Depuis notre fondation en 1996, Thalès Informatique a placé la qualité au cœur de chaque produit, chaque implémentation et chaque relation client. Ces distinctions ne sont pas simplement des trophées sur une étagère — elles reflètent la confiance que 500+ entreprises en Afrique et à l'international nous accordent chaque jour.
            </p>
            <p className="text-secondary text-lg leading-relaxed">
              Chaque récompense représente des centaines d'heures de R&D, l'engagement de nos équipes, et la satisfaction de nos clients qui réussissent leur transformation digitale grâce à nos solutions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-amber-600 text-sm font-semibold uppercase tracking-widest">Distinctions</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">Nos prix et certifications</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, i) => {
              const colors = colorMap[award.color];
              return (
                <FadeIn key={award.title} delay={i * 0.1}>
                  <div className="bg-bg border border-border rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-12 h-12 ${colors.bg} rounded-2xl flex items-center justify-center`}>
                        <award.icon size={22} className={colors.text} />
                      </div>
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${colors.badge}`}>{award.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-1">{award.title}</h3>
                    <p className={`text-xs font-semibold ${colors.text} mb-4`}>{award.org}</p>
                    <p className="text-secondary text-sm leading-relaxed flex-grow">{award.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-bg border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h3 className="text-sm font-semibold text-secondary uppercase tracking-widest mb-6">Certifications & Accréditations</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-full text-sm font-medium text-secondary shadow-sm">
                  <CheckCircle2 size={14} className="text-cta" />
                  {cert}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Press Quotes */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-2">Ils parlent de nous</h2>
              <p className="text-white/50">La presse marocaine sur Thalès Informatique</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pressQuotes.map((quote, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
                  <div className="text-4xl text-white/20 font-serif mb-4">"</div>
                  <p className="text-white/80 text-sm leading-relaxed italic mb-6">{quote.quote}</p>
                  <div className="border-t border-white/10 pt-4">
                    <div className="font-semibold text-white text-sm">{quote.source}</div>
                    <div className="text-white/40 text-xs">{quote.date}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Rejoignez nos 500+ clients satisfaits
            </h2>
            <p className="text-secondary mb-8 text-lg">
              Découvrez pourquoi les meilleures entreprises en Afrique et à l'international font confiance à Thalès Informatique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Demander une démo gratuite
                <ChevronRight size={18} />
              </Link>
              <Link
                href="/a-propos"
                className="px-8 py-4 bg-white border border-border text-secondary font-semibold rounded-xl hover:bg-slate-50 transition-colors duration-200"
              >
                Notre histoire
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
