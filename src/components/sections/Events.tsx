"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Video, Users, ArrowRight } from "lucide-react";

const events = [
  {
    date: { day: "18", month: "Jun", year: "2025" },
    title: "Webinaire : Optimisez votre clôture comptable avec l'IA",
    format: "Webinaire en ligne",
    formatIcon: Video,
    seats: "120 places disponibles",
    location: "Zoom",
    color: "bg-blue-600",
    tag: "Finance",
    tagColor: "bg-blue-50 text-blue-700",
  },
  {
    date: { day: "25", month: "Jun", year: "2025" },
    title: "Forum ERP Casablanca : L'avenir de la gestion d'entreprise",
    format: "Événement présentiel",
    formatIcon: Users,
    seats: "250 places",
    location: "Hôtel Sofitel, Casablanca",
    color: "bg-violet-600",
    tag: "ERP",
    tagColor: "bg-violet-50 text-violet-700",
  },
  {
    date: { day: "10", month: "Jul", year: "2025" },
    title: "Atelier : Pilotage de la performance avec les tableaux de bord BI",
    format: "Atelier interactif",
    formatIcon: Calendar,
    seats: "30 places limitées",
    location: "Thalès Informatique, Casablanca",
    color: "bg-emerald-600",
    tag: "Business Intelligence",
    tagColor: "bg-emerald-50 text-emerald-700",
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
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-cta font-semibold text-sm hover:text-cta-hover transition-colors duration-200 cursor-pointer shrink-0"
          >
            Voir tous les événements
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>

        {/* Event cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white border border-border rounded-2xl overflow-hidden cursor-pointer card-hover"
            >
              {/* Color bar + date */}
              <div className={`${event.color} px-5 py-4 flex items-center justify-between`}>
                <div className="text-white">
                  <div className="text-3xl font-bold leading-none">{event.date.day}</div>
                  <div className="text-sm text-white/80 font-medium">
                    {event.date.month} {event.date.year}
                  </div>
                </div>
                <span
                  className={`${event.tagColor} text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full`}
                >
                  {event.tag}
                </span>
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

                <a
                  href="#"
                  className="w-full flex items-center justify-center gap-2 text-xs font-semibold text-cta border border-cta/30 rounded-lg py-2.5 hover:bg-cta hover:text-white transition-all duration-200 cursor-pointer"
                >
                  S'inscrire
                  <ArrowRight size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
