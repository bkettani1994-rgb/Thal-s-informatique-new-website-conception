"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
  ArrowRight,
  Clock,
  Coffee,
  Mic2,
  Monitor,
  Gift,
  Wine,
  Lightbulb,
  Target,
  Briefcase,
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import EventGallery, { type GalleryImage } from "@/components/sections/EventGallery";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const highlights = [
  { icon: Lightbulb, label: "Des interventions orientées terrain", desc: "Des experts qui partagent des cas concrets directement applicables dans votre entreprise." },
  { icon: Monitor, label: "Des cas d'usage réels", desc: "Découverte en direct de solutions comme Sage, Factorial et Héliolys en situation réelle." },
  { icon: Target, label: "Des temps forts à forte valeur ajoutée", desc: "Des moments stratégiques d'échanges et de formation pour aller à l'essentiel." },
  { icon: Users, label: "Un espace d'échanges entre décideurs RH", desc: "Networking exclusif avec des DRH, DAF et dirigeants partageant les mêmes enjeux." },
];

const agenda = [
  {
    icon: Coffee,
    time: "14h00",
    title: "Accueil & Coffee Break",
    desc: "Check-in, rafraîchissements et networking informel.",
  },
  {
    icon: Mic2,
    time: "14h30",
    title: "Thématique : L'entreprise agile à l'ère du digital",
    desc: "La thématique centrale de l'événement : comment la stratégie RH et le SIRH deviennent un levier de croissance pour les entreprises à l'ère du digital.",
  },
  {
    icon: Monitor,
    time: "15h30",
    title: "Découverte de la solution en live",
    desc: "Cas d'usage concrets et mise en situation réelle des outils SIRH Factorial & Sage.",
  },
  {
    icon: Gift,
    time: "16h30",
    title: "Tombola & Animation",
    desc: "Rouge au vert et remise de prix exclusifs.",
  },
  {
    icon: Wine,
    time: "17h00",
    title: "Cocktail de Clôture",
    desc: "Networking et opportunités business.",
  },
];

const speakers = [
  {
    name: "Sanaa BENAHMED",
    role: "CEO",
    company: "Héliolys Consulting",
    photo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1776875108/1760553646722_atj1zr.jpg",
  },
  {
    name: "Ayoub EL ABD",
    role: "Strategic Partner Lead",
    company: "Factorial",
    photo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1776872482/1749232766691_gv6gzl.jpg",
  },
  {
    name: "Yassine REDA",
    role: "Sales Director",
    company: "Thalès Informatique",
    photo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1778584658/Generated_Image_May_12_2026_-_12_14PM_1_wptqek.png",
  },
];

const audience = [
  "Directeurs des Ressources Humaines (DRH)",
  "Directeurs Administratifs et Financiers (DAF)",
  "Responsables RH & Talent Acquisition",
  "Dirigeants d'entreprises & décideurs",
  "DSI & Responsables Transformation Digitale",
];

const partners = [
  { name: "Sage", logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1781600065/1_ktyvlq.png" },
  { name: "Factorial", logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1781600065/2_erzkns.png" },
  { name: "Héliolys", logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1781600065/3_iwynox.png" },
];

const galleryImages: GalleryImage[] = [
  {
    src: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1781598299/1_lhhrtt.jpg",
    alt: "Accueil des participants et préparation de la salle — Conférence RH & SIRH",
    caption: "Accueil des participants et préparation de la salle",
  },
  {
    src: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1781598299/2_k6iwud.jpg",
    alt: "Session de networking et échanges entre professionnels RH",
    caption: "Session de networking et échanges entre professionnels RH",
  },
  {
    src: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1781598299/3_u5sutq.jpg",
    alt: "Conférence : l'entreprise agile à l'ère du digital",
    caption: "Conférence : l'entreprise agile à l'ère du digital",
  },
  {
    src: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1781598299/4_zbasib.jpg",
    alt: "Participation active des décideurs et responsables RH",
    caption: "Participation active des décideurs et responsables RH",
  },
  {
    src: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1781598299/5_r55rlo.jpg",
    alt: "Présentation de la solution SIRH Factorial",
    caption: "Présentation de la solution SIRH Factorial",
  },
  {
    src: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1781598299/6_fdt6en.jpg",
    alt: "Démonstration et échanges autour des enjeux RH",
    caption: "Démonstration et échanges autour des enjeux RH",
  },
  {
    src: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1781598300/7_qqqbkv.jpg",
    alt: "Pause gourmande et moments de convivialité",
    caption: "Pause gourmande et moments de convivialité",
  },
  {
    src: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1781598300/8_mcw0ef.jpg",
    alt: "L'équipe organisatrice Thalès Informatique",
    caption: "L'équipe organisatrice Thalès Informatique",
  },
];

export default function StrategieRhSirhCroissanceClient() {
  const introRef = useRef(null);
  const highlightsRef = useRef(null);
  const agendaRef = useRef(null);
  const speakersRef = useRef(null);
  const audienceRef = useRef(null);
  const partnersRef = useRef(null);
  const ctaRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const highlightsInView = useInView(highlightsRef, { once: true, margin: "-100px" });
  const agendaInView = useInView(agendaRef, { once: true, margin: "-100px" });
  const speakersInView = useInView(speakersRef, { once: true, margin: "-100px" });
  const audienceInView = useInView(audienceRef, { once: true, margin: "-100px" });
  const partnersInView = useInView(partnersRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <main className="overflow-x-hidden bg-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={14} />
            <Link href="/evenements" className="hover:text-white transition-colors">Événements</Link>
            <ChevronRight size={14} />
            <span className="text-accent">Conférence RH & SIRH</span>
          </div>
          <span className="inline-flex items-center gap-2 bg-white/10 text-white/70 text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4">
            Événement terminé · Compte-rendu
          </span>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent text-sm font-semibold uppercase tracking-widest mb-3"
          >
            L'entreprise agile à l'ère du digital
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl leading-tight"
          >
            Comment la stratégie RH et le SIRH soutiennent la croissance des entreprises
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-white/70 max-w-2xl mb-8"
          >
            Une après-midi de conférences et d'échanges organisée en partenariat avec Sage, Factorial et Héliolys
            autour des nouveaux enjeux RH des entreprises marocaines.
          </motion.p>
          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            <span className="flex items-center gap-2"><Calendar size={16} className="text-accent" /> 13 mai 2026</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-accent" /> 14h00 – 17h00</span>
            <span className="flex items-center gap-2"><MapPin size={16} className="text-accent" /> Hotel Onomo Bd Al Massira, Casablanca</span>
            <span className="flex items-center gap-2"><Users size={16} className="text-accent" /> Conférence & networking</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16" ref={introRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate={introInView ? "visible" : "hidden"} className="max-w-3xl">
            <h2 className="text-2xl font-bold text-primary mb-5">Une après-midi dédiée à la performance RH</h2>
            <p className="text-secondary leading-relaxed mb-4">
              Le 13 mai 2026, Thalès Informatique a organisé, en partenariat avec Sage, Factorial et Héliolys,
              une conférence dédiée aux dirigeants et responsables RH marocains, à l'Hotel Onomo de Casablanca.
              L'événement a réuni décideurs, DRH, DAF et porteurs de projets de transformation digitale pour
              échanger sur la place stratégique des ressources humaines dans la croissance des entreprises.
            </p>
            <p className="text-secondary leading-relaxed">
              Au programme : interventions d'experts, démonstrations live de solutions SIRH, témoignages clients,
              tombola et un cocktail de clôture pour favoriser les échanges entre participants.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pourquoi participer */}
      <section className="py-16 bg-white" ref={highlightsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate={highlightsInView ? "visible" : "hidden"} className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-primary mb-2">Pourquoi cet événement ?</h2>
            <p className="text-secondary">Une expertise partagée pour optimiser votre stratégie et vos processus RH</p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={highlightsInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="bg-bg-base rounded-2xl border border-border p-6 text-center hover:border-cta hover:shadow-md transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-cta/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={20} className="text-cta" />
                </div>
                <h3 className="font-bold text-primary text-sm mb-2">{item.label}</h3>
                <p className="text-xs text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Agenda */}
      <section className="py-16 bg-primary" ref={agendaRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate={agendaInView ? "visible" : "hidden"} className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Agenda de l'après-midi</h2>
            <p className="text-white/60">Des temps forts animés par des experts du secteur</p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={agendaInView ? "visible" : "hidden"}
            className="max-w-2xl mx-auto space-y-4"
          >
            {agenda.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <item.icon size={18} className="text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-accent">{item.time}</span>
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experts */}
      <section className="py-16 bg-white" ref={speakersRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate={speakersInView ? "visible" : "hidden"} className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-primary mb-2">Experts Intervenants</h2>
            <p className="text-secondary">Rencontrez les décideurs et consultants qui façonnent le futur du Digital RH</p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={speakersInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {speakers.map((speaker) => (
              <motion.div
                key={speaker.name}
                variants={fadeUp}
                className="bg-bg-base rounded-2xl border border-border p-6 text-center hover:shadow-md transition-shadow duration-200"
              >
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-border"
                />
                <h3 className="font-bold text-primary text-sm">{speaker.name}</h3>
                <p className="text-xs text-cta font-semibold mt-1">{speaker.role}</p>
                <p className="text-xs text-secondary mt-0.5">{speaker.company}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* À qui s'adresse */}
      <section className="py-16" ref={audienceRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate={audienceInView ? "visible" : "hidden"} className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2">À qui s'adressait l'événement ?</h2>
            <p className="text-secondary">Une audience sélective pour des échanges stratégiques</p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={audienceInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-3 lg:grid-cols-5 gap-3"
          >
            {audience.map((item) => (
              <motion.div key={item} variants={fadeUp} className="flex flex-col items-center gap-3 p-5 bg-white rounded-xl border border-border text-center hover:border-cta hover:shadow-md transition-all duration-200">
                <Briefcase size={20} className="text-cta shrink-0" />
                <span className="text-sm text-secondary font-medium leading-snug">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <EventGallery
        images={galleryImages}
        title="Notre présence en images"
        subtitle="Quelques moments forts de la Conférence RH & SIRH organisée par Thalès Informatique à Casablanca."
      />

      {/* Partners */}
      <section className="py-16 bg-white" ref={partnersRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate={partnersInView ? "visible" : "hidden"} className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-6">Organisé en partenariat avec</h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {partners.map((p) => (
                <div key={p.name} className="bg-white border border-border rounded-2xl px-8 py-5 hover:shadow-md transition-shadow duration-200 flex items-center justify-center">
                  <img src={p.logo} alt={`Logo ${p.name}`} className="h-10 w-auto object-contain" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary" ref={ctaRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate={ctaInView ? "visible" : "hidden"}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Vous souhaitez moderniser votre fonction RH ?</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Découvrez nos solutions SIRH et nos services d'accompagnement RH adaptés à votre entreprise.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200">
                Nous contacter
                <ChevronRight size={18} />
              </Link>
              <Link href="/evenements" className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:border-white/50 transition-colors duration-200">
                Voir tous les événements
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
