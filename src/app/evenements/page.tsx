"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Calendar,
  ChevronRight,
  MapPin,
  Video,
  Users,
  Zap,
  GraduationCap,
  Play,
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const upcomingEvents = [
  {
    id: 1,
    date: "15 Jan 2025",
    dateShort: "15 JAN",
    title: "Journée Portes Ouvertes ERP 2025",
    desc: "Venez découvrir en exclusivité nos dernières solutions ERP, rencontrer nos experts et assister à des démonstrations live personnalisées selon votre secteur d'activité.",
    format: "Présentiel",
    formatIcon: Users,
    lieu: "Casablanca — Hôtel Sofitel Tour Blanche",
    color: "blue",
    featured: true,
  },
  {
    id: 2,
    date: "22 Jan 2025",
    dateShort: "22 JAN",
    title: "Webinaire : Clôture comptable en 3 jours",
    desc: "Découvrez comment automatiser votre processus de clôture comptable et passer de 2 semaines à 3 jours grâce aux outils Thalès Informatique.",
    format: "En ligne",
    formatIcon: Video,
    lieu: "Zoom — Lien envoyé après inscription",
    color: "violet",
    featured: false,
  },
  {
    id: 3,
    date: "5 Fév 2025",
    dateShort: "5 FÉV",
    title: "Forum RH & Digital Maroc",
    desc: "La conférence annuelle dédiée à la transformation digitale des RH au Maroc. Tables rondes, retours d'expérience clients et présentation des nouvelles réglementations CNSS/AMO 2025.",
    format: "Présentiel",
    formatIcon: Users,
    lieu: "Rabat — Mohammed VI Polytechnic University",
    color: "emerald",
    featured: false,
  },
  {
    id: 4,
    date: "12 Fév 2025",
    dateShort: "12 FÉV",
    title: "Atelier Reporting & BI pour dirigeants",
    desc: "Atelier pratique de 2h pour apprendre à construire vos tableaux de bord de pilotage et identifier les 10 KPIs essentiels pour votre business.",
    format: "En ligne",
    formatIcon: Video,
    lieu: "Teams — Accès envoyé après inscription",
    color: "amber",
    featured: false,
  },
];

const pastEvents = [
  {
    title: "Webinaire : Fiscalité et ERP — Quelles nouvelles obligations ?",
    date: "Nov 2024",
    replay: true,
  },
  {
    title: "Salon de l'Entreprise Marocaine — Stand Thalès Informatique",
    date: "Oct 2024",
    replay: false,
  },
  {
    title: "Atelier : Migration ERP — Retour d'expérience industrie",
    date: "Sep 2024",
    replay: true,
  },
];

const reasons = [
  {
    icon: Users,
    title: "Networking de qualité",
    desc: "Rencontrez des directeurs financiers, DRH et DSI marocains qui font face aux mêmes défis que vous.",
  },
  {
    icon: Zap,
    title: "Démos exclusives",
    desc: "Soyez les premiers à découvrir nos nouvelles fonctionnalités en avant-première lors de nos événements.",
  },
  {
    icon: GraduationCap,
    title: "Formations offertes",
    desc: "Chaque événement inclut des sessions de formation pratiques animées par nos experts certifiés.",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; badge: string; btn: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", badge: "bg-blue-100 text-blue-800", btn: "bg-cta hover:bg-blue-700" },
  violet: { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200", badge: "bg-violet-100 text-violet-800", btn: "bg-violet-600 hover:bg-violet-700" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-800", btn: "bg-emerald-600 hover:bg-emerald-700" },
  amber: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", badge: "bg-amber-100 text-amber-800", btn: "bg-amber-600 hover:bg-amber-700" },
};

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

export default function EvenementsPage() {
  const [email, setEmail] = useState("");

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-primary to-primary" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <span className="text-white/70">Événements</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                <Calendar size={20} className="text-accent" />
              </div>
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Agenda 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Événements<br />
              <span className="text-accent">& Webinaires</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
              Rencontrez nos experts, découvrez nos solutions en live et rejoignez la communauté des décideurs digitaux du Maroc.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-12">
              <span className="text-cta text-sm font-semibold uppercase tracking-widest">Prochains événements</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">À venir</h2>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {upcomingEvents.map((event, i) => {
              const colors = colorMap[event.color];
              return (
                <FadeIn key={event.id} delay={i * 0.08}>
                  <div className={`bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 ${event.featured ? "ring-2 ring-cta/30" : ""}`}>
                    {event.featured && (
                      <div className="bg-cta px-4 py-1.5 flex items-center gap-2">
                        <Zap size={12} className="text-white" />
                        <span className="text-white text-xs font-semibold">Événement phare 2025</span>
                      </div>
                    )}
                    <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
                      {/* Date */}
                      <div className={`shrink-0 w-20 h-20 ${colors.bg} border ${colors.border} rounded-2xl flex flex-col items-center justify-center`}>
                        <span className={`text-xs font-bold ${colors.text} uppercase`}>{event.dateShort.split(" ")[1]}</span>
                        <span className={`text-2xl font-black ${colors.text}`}>{event.dateShort.split(" ")[0]}</span>
                      </div>
                      {/* Content */}
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-start gap-2 mb-2">
                          <h3 className="text-xl font-bold text-primary">{event.title}</h3>
                          <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${colors.badge}`}>
                            {event.format}
                          </span>
                        </div>
                        <p className="text-secondary text-sm leading-relaxed mb-3">{event.desc}</p>
                        <div className="flex items-center gap-2 text-sm text-secondary">
                          <MapPin size={14} className={colors.text} />
                          {event.lieu}
                        </div>
                      </div>
                      {/* CTA */}
                      <div className="shrink-0 flex items-center">
                        <Link
                          href="/contact"
                          className={`px-5 py-3 ${colors.btn} text-white text-sm font-semibold rounded-xl transition-colors duration-200 whitespace-nowrap flex items-center gap-2`}
                        >
                          S'inscrire
                          <ChevronRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-10">
              <span className="text-secondary text-sm font-semibold uppercase tracking-widest">Replays disponibles</span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-2">Événements passés</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pastEvents.map((event, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-bg border border-border rounded-2xl p-6 opacity-75 hover:opacity-100 transition-opacity duration-200">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs text-secondary bg-slate-100 px-2.5 py-1 rounded-full">{event.date}</span>
                    {event.replay && (
                      <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Play size={10} />
                        Replay
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-primary text-sm mb-4 leading-tight">{event.title}</h3>
                  {event.replay && (
                    <Link href="/contact" className="text-cta text-sm font-medium hover:underline flex items-center gap-1">
                      Voir le replay <ChevronRight size={14} />
                    </Link>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-3">Ne manquez aucun événement</h2>
            <p className="text-white/60 mb-8">Recevez nos invitations en avant-première directement dans votre boîte mail.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-white/30 rounded-xl focus:outline-none focus:border-accent/60 text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-primary font-semibold rounded-xl hover:bg-sky-300 transition-colors duration-200 text-sm whitespace-nowrap"
              >
                Je m'inscris
              </button>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* Why Attend */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Pourquoi participer ?</h2>
              <p className="text-secondary max-w-xl mx-auto">
                Nos événements sont conçus pour vous apporter une valeur concrète et actionnable.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, i) => (
              <FadeIn key={reason.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cta/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <reason.icon size={24} className="text-cta" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{reason.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
