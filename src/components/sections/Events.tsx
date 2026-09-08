"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, Video, Users, ArrowRight, EyeOff } from "lucide-react";

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
    partners: [],
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
    partners: ["Sage", "Factorial", "Héliolys"],
    href: "/evenements/strategie-rh-sirh-croissance",
  },
  {
    date: { day: "09", month: "Sep", year: "2026" },
    title: "Sage 100 Expérience Édition : votre solution réinventée",
    format: "Webinaire en ligne",
    formatIcon: Video,
    seats: "Places limitées",
    location: "En ligne",
    color: "bg-cta",
    tag: "Nouveauté",
    tagColor: "bg-blue-50 text-blue-700",
    past: false,
    partners: [],
    reveal: true,
    href: "/evenements/webinaire-sage-100-experience",
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
    partners: [],
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
    partners: [],
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
    partners: [],
    href: "/evenements/atelier-pilotage-performance-bi",
  },
];

export default function Events() {
  return (
    <section className="py-24 bg-bg-base" id="evenements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-block text-xs font-semibold text-cta uppercase tracking-widest mb-3">
              Agenda
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              Événements & webinaires
            </h2>
            <p className="mt-3 text-base text-secondary max-w-lg leading-relaxed">
              Participez à nos événements pour rester à la pointe de
              l'innovation et échanger avec nos experts.
            </p>
          </div>
          <Link
            href="/evenements"
            className="group inline-flex items-center gap-2 text-cta font-semibold text-sm hover:text-cta-hover transition-colors duration-200 cursor-pointer shrink-0"
          >
            Voir tous les événements
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Event cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.slice(0, 3).map((event, i) => {
            const teaser = !event.past && !event.reveal;
            const Card = (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group relative bg-white border border-border rounded-2xl overflow-hidden h-full ${
                  teaser ? "cursor-default" : "cursor-pointer card-hover"
                }`}
              >
                <div className={teaser ? "blur-sm select-none pointer-events-none" : ""}>
                  {/* Color bar + date */}
                  <div className={`${event.color} ${event.past ? "opacity-70" : ""} px-5 py-4 flex items-center justify-between`}>
                    <div className="text-white">
                      <div className="text-3xl font-bold leading-none">{event.date.day}</div>
                      <div className="text-sm text-white/80 font-medium">
                        {event.date.month} {event.date.year}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      {event.past && (
                        <span className="bg-white/20 text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                          Passé
                        </span>
                      )}
                      <span className={`${event.tagColor} text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full`}>
                        {event.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
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

                    {event.past ? (
                      <div className="w-full flex items-center justify-center gap-2 text-xs font-semibold text-secondary/60 border border-border rounded-lg py-2.5 bg-bg-base select-none">
                        Voir le compte-rendu
                      </div>
                    ) : (
                      <span className="w-full flex items-center justify-center gap-2 text-xs font-semibold text-cta border border-cta/30 rounded-lg py-2.5 group-hover:bg-cta group-hover:text-white transition-all duration-200">
                        En savoir plus
                        <ArrowRight size={13} />
                      </span>
                    )}
                  </div>
                </div>

                {teaser && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-white/30">
                    <span className="flex items-center gap-2 bg-white border border-border shadow-sm text-[11px] font-bold uppercase tracking-wide text-secondary px-4 py-2 rounded-full">
                      <EyeOff size={13} />
                      Bientôt révélé
                    </span>
                  </div>
                )}
              </motion.div>
            );
            return teaser ? (
              <div key={event.title}>{Card}</div>
            ) : (
              <Link href={event.href} key={event.title}>
                {Card}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
