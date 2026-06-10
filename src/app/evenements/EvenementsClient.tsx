"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Calendar, MapPin, Video, Users, ArrowRight } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const events = [
  {
    date: { day: "07", month: "Avr", year: "2026" },
    title: "Gitex Africa Morocco 2026",
    format: "Salon international",
    formatIcon: Users,
    seats: "3 jours — 07 au 09 avril 2026",
    location: "Marrakech",
    color: "bg-slate-500",
    tag: "Tech & Innovation",
    tagColor: "bg-slate-100 text-slate-600",
    past: true,
    href: "/evenements/gitex-africa-morocco-2026",
  },
  {
    date: { day: "13", month: "Mai", year: "2026" },
    title: "Comment la stratégie RH et le SIRH soutiennent la croissance des entreprises",
    format: "Conférence & networking",
    formatIcon: Users,
    seats: "En partenariat avec Sage · Factorial · Héliolys",
    location: "Hotel Onomo Bd Al Massira, Casablanca",
    color: "bg-teal-600",
    tag: "RH & SIRH",
    tagColor: "bg-teal-50 text-teal-700",
    past: true,
    href: "/evenements/strategie-rh-sirh-croissance",
  },
  {
    date: { day: "18", month: "Jun", year: "2026" },
    title: "Webinaire : Optimisez votre clôture comptable avec l'IA",
    format: "Webinaire en ligne",
    formatIcon: Video,
    seats: "120 places disponibles",
    location: "Zoom",
    color: "bg-blue-600",
    tag: "Finance",
    tagColor: "bg-blue-50 text-blue-700",
    past: false,
    href: "/evenements/webinaire-cloture-comptable-ia",
  },
  {
    date: { day: "25", month: "Jun", year: "2026" },
    title: "Forum ERP Casablanca : L'avenir de la gestion d'entreprise",
    format: "Événement présentiel",
    formatIcon: Users,
    seats: "250 places",
    location: "Hôtel Sofitel, Casablanca",
    color: "bg-violet-600",
    tag: "ERP",
    tagColor: "bg-violet-50 text-violet-700",
    past: false,
    href: "/evenements/forum-erp-casablanca",
  },
  {
    date: { day: "10", month: "Jul", year: "2026" },
    title: "Atelier : Pilotage de la performance avec les tableaux de bord BI",
    format: "Atelier interactif",
    formatIcon: Calendar,
    seats: "30 places limitées",
    location: "Thalès Informatique, Casablanca",
    color: "bg-emerald-600",
    tag: "Business Intelligence",
    tagColor: "bg-emerald-50 text-emerald-700",
    past: false,
    href: "/evenements/atelier-pilotage-performance-bi",
  },
];

export default function EvenementsClient() {
  const heroRef = useRef(null);
  const upcomingRef = useRef(null);
  const pastRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const upcomingInView = useInView(upcomingRef, { once: true, margin: "-100px" });
  const pastInView = useInView(pastRef, { once: true, margin: "-100px" });

  const upcoming = events.filter((e) => !e.past);
  const past = events.filter((e) => e.past);

  return (
    <main className="overflow-x-hidden bg-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary" ref={heroRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <span className="text-accent">Événements & Webinaires</span>
            </div>
            <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest border border-accent/30 rounded-full px-3 py-1 mb-4">
              AGENDA
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Événements & Webinaires
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Salons, conférences, webinaires et ateliers — participez à nos rendez-vous pour rester
              à la pointe de l'innovation et échanger avec nos experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="py-16" ref={upcomingRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={upcomingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-primary mb-8">À venir</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-4">
              {upcoming.map((event, i) => (
                <Link href={event.href} key={event.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={upcomingInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group bg-white border border-border rounded-2xl overflow-hidden cursor-pointer card-hover h-full"
                  >
                    <div className={`${event.color} px-5 py-4 flex items-center justify-between`}>
                      <div className="text-white">
                        <div className="text-3xl font-bold leading-none">{event.date.day}</div>
                        <div className="text-sm text-white/80 font-medium">{event.date.month} {event.date.year}</div>
                      </div>
                      <span className={`${event.tagColor} text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full`}>
                        {event.tag}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-sm font-bold text-primary leading-snug mb-3 group-hover:text-cta transition-colors duration-200">
                        {event.title}
                      </h3>
                      <div className="space-y-1.5 mb-4">
                        <div className="flex items-center gap-2 text-xs text-secondary">
                          <event.formatIcon size={13} className="text-slate-400 shrink-0" />
                          <span>{event.format}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-secondary">
                          <MapPin size={13} className="text-slate-400 shrink-0" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-secondary">
                          <Users size={13} className="text-slate-400 shrink-0" />
                          <span>{event.seats}</span>
                        </div>
                      </div>
                      <span className="w-full flex items-center justify-center gap-2 text-xs font-semibold text-cta border border-cta/30 rounded-lg py-2.5 group-hover:bg-cta group-hover:text-white transition-all duration-200">
                        En savoir plus
                        <ArrowRight size={13} />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Past events */}
      <section className="py-16 bg-white" ref={pastRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={pastInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-primary mb-8">Événements passés</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {past.map((event, i) => (
                <Link href={event.href} key={event.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={pastInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group bg-bg-base border border-border rounded-2xl overflow-hidden cursor-pointer card-hover h-full"
                  >
                    <div className={`${event.color} opacity-70 px-5 py-4 flex items-center justify-between`}>
                      <div className="text-white">
                        <div className="text-3xl font-bold leading-none">{event.date.day}</div>
                        <div className="text-sm text-white/80 font-medium">{event.date.month} {event.date.year}</div>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className="bg-white/20 text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                          Passé
                        </span>
                        <span className={`${event.tagColor} text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full`}>
                          {event.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-sm font-bold text-primary leading-snug mb-3 group-hover:text-cta transition-colors duration-200">
                        {event.title}
                      </h3>
                      <div className="space-y-1.5 mb-4">
                        <div className="flex items-center gap-2 text-xs text-secondary">
                          <event.formatIcon size={13} className="text-slate-400 shrink-0" />
                          <span>{event.format}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-secondary">
                          <MapPin size={13} className="text-slate-400 shrink-0" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <span className="w-full flex items-center justify-center gap-2 text-xs font-semibold text-secondary border border-border rounded-lg py-2.5 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                        Voir le compte-rendu
                        <ArrowRight size={13} />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
