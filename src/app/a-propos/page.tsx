"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  Target,
  Eye,
  Heart,
  MapPin,
  Users,
  Lightbulb,
  Award,
  Briefcase,
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const timeline = [
  {
    year: "1993",
    title: "Fondation à Casablanca",
    desc: "Création de Thalès Informatique par une équipe d'ingénieurs passionnés, avec la vision de digitaliser les entreprises marocaines grâce à des logiciels de gestion sur mesure.",
  },
  {
    year: "2000",
    title: "Premier ERP industriel déployé",
    desc: "Lancement de notre première solution ERP complète pour le secteur industriel, déployée chez un groupe agroalimentaire de référence à Casablanca.",
  },
  {
    year: "2010",
    title: "Expansion nationale",
    desc: "Ouverture de nos agences régionales à Rabat, Fès et Marrakech pour être au plus près de nos clients et accélérer notre croissance à l'échelle nationale.",
  },
  {
    year: "2018",
    title: "Lancement solution Cloud",
    desc: "Thalès Informatique lance son offre Cloud ERP — une première pour un éditeur marocain — permettant aux PME d'accéder à des solutions de classe mondiale sans investissement serveur.",
  },
  {
    year: "2023",
    title: "500ème client accompagné",
    desc: "Une étape symbolique franchie : 500 entreprises marocaines font désormais confiance à Thalès Informatique pour piloter leur transformation digitale et leur gestion quotidienne.",
  },
];

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "Nous investissons 15% de notre CA en R&D pour anticiper les évolutions technologiques et réglementaires." },
  { icon: Award, title: "Excellence", desc: "Chaque projet est mené avec rigueur et expertise. Notre taux de satisfaction client est de 98%." },
  { icon: MapPin, title: "Proximité", desc: "4 agences au Maroc, des consultants terrain, un support en arabe et français disponible 6j/7." },
  { icon: Heart, title: "Intégrité", desc: "Des relations fondées sur la transparence, le respect des engagements et l'honnêteté intellectuelle." },
];

const team = [
  { name: "Hassan El Alami", role: "Président Directeur Général", tenure: "Fondateur, 30 ans d'expérience", initials: "HA" },
  { name: "Rachid Bensouda", role: "Directeur Général Technique", tenure: "Expert ERP, 20 ans d'expérience", initials: "RB" },
  { name: "Leila Moussaoui", role: "Directrice Générale Commerciale", tenure: "15 ans en transformation digitale", initials: "LM" },
  { name: "Omar Filali", role: "Directeur des Ressources Humaines", tenure: "Expert RH & culture d'entreprise", initials: "OF" },
];

const stats = [
  { value: "30+", label: "Années d'expérience" },
  { value: "500+", label: "Clients accompagnés" },
  { value: "120+", label: "Experts dédiés" },
  { value: "4", label: "Villes au Maroc" },
  { value: "98%", label: "Taux de satisfaction" },
];

const offices = [
  { city: "Casablanca", tag: "Siège social", address: "20 Rue Abou Inane, Maarif", phone: "+212 5 22 00 00 00", email: "contact@thales-info.ma" },
  { city: "Rabat", tag: "Agence Centre", address: "15 Avenue Hassan II, Agdal", phone: "+212 5 37 00 00 00", email: "rabat@thales-info.ma" },
  { city: "Fès", tag: "Agence Nord", address: "8 Boulevard Mohammed V", phone: "+212 5 35 00 00 00", email: "fes@thales-info.ma" },
  { city: "Marrakech", tag: "Agence Sud", address: "12 Rue de la Liberté, Guéliz", phone: "+212 5 24 00 00 00", email: "marrakech@thales-info.ma" },
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

export default function AProposPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-primary to-primary" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <span className="text-white/70">À propos</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              À Propos de<br />
              <span className="text-accent">Thalès Informatique</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
              30 ans d'innovation au service de la transformation digitale des entreprises marocaines. Une histoire de passion, d'expertise et de confiance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-cta text-sm font-semibold uppercase tracking-widest">Notre histoire</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">30 ans de milestones</h2>
            </div>
          </FadeIn>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <FadeIn key={item.year} delay={i * 0.1}>
                  <div className="flex gap-6">
                    <div className="relative shrink-0">
                      <div className="w-16 h-16 bg-white border-2 border-cta rounded-2xl flex items-center justify-center z-10 relative">
                        <span className="text-cta font-black text-xs text-center leading-tight">{item.year}</span>
                      </div>
                    </div>
                    <div className="bg-white border border-border rounded-2xl p-6 flex-grow hover:shadow-md transition-shadow duration-300">
                      <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-cta text-sm font-semibold uppercase tracking-widest">Notre ADN</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Mission, Vision & Valeurs</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <FadeIn delay={0.1}>
              <div className="bg-cta rounded-3xl p-8 text-white">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-5">
                  <Target size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Notre Mission</h3>
                <p className="text-white/80 leading-relaxed">
                  Accompagner les entreprises marocaines dans leur transformation digitale en leur fournissant des solutions ERP innovantes, adaptées à leurs besoins et à la réglementation locale.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-bg border border-border rounded-3xl p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-5">
                  <Eye size={22} className="text-cta" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Notre Vision</h3>
                <p className="text-secondary leading-relaxed">
                  Être le partenaire technologique de référence de toutes les entreprises marocaines, et étendre notre impact à l'ensemble du continent africain d'ici 2030.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-bg border border-border rounded-3xl p-8">
                <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center mb-5">
                  <Heart size={22} className="text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Nos Valeurs</h3>
                <ul className="space-y-2">
                  {["Innovation continue", "Excellence opérationnelle", "Proximité client", "Intégrité & transparence"].map((v) => (
                    <li key={v} className="flex items-center gap-2 text-secondary text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-cta shrink-0" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Values detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div className="text-center p-6">
                  <div className="w-12 h-12 bg-cta/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon size={20} className="text-cta" />
                  </div>
                  <h4 className="font-bold text-primary mb-2">{value.title}</h4>
                  <p className="text-secondary text-sm leading-relaxed">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-cta text-sm font-semibold uppercase tracking-widest">Notre équipe dirigeante</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Les visages de Thalès Informatique</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="bg-white border border-border rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cta to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{member.initials}</span>
                  </div>
                  <h3 className="font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-cta text-sm font-semibold mb-2">{member.role}</p>
                  <p className="text-secondary text-xs">{member.tenure}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Offices */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-cta text-sm font-semibold uppercase tracking-widest">Présence nationale</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Nos bureaux</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {offices.map((office, i) => (
              <FadeIn key={office.city} delay={i * 0.1}>
                <div className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-cta/10 rounded-lg flex items-center justify-center">
                      <MapPin size={16} className="text-cta" />
                    </div>
                    <div>
                      <div className="font-bold text-primary text-sm">{office.city}</div>
                      <div className="text-xs text-cta">{office.tag}</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs text-secondary">
                    <div>{office.address}</div>
                    <a href={`tel:${office.phone}`} className="block hover:text-primary transition-colors">{office.phone}</a>
                    <a href={`mailto:${office.email}`} className="block hover:text-primary transition-colors">{office.email}</a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Rejoignez l'aventure
            </h2>
            <p className="text-secondary mb-8 text-lg">
              Que vous cherchiez à digitaliser votre entreprise ou à rejoindre notre équipe, nous avons une place pour vous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Parler à un expert
                <ChevronRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-bg border border-border text-secondary font-semibold rounded-xl hover:bg-slate-50 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Briefcase size={18} />
                Voir nos offres d'emploi
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
