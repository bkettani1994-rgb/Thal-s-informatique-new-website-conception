"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const offices = [
  { city: "Casablanca", tag: "Siège social", address: "310 Rue Hadj Omar Riffi, Casablanca 20120", phone: "+212 5 22 54 87 80", tel: "+212522548780", email: "contact@thales.ma" },
];

const objets = ["Demande de démo", "Demande d'informations", "Support technique", "Partenariat", "Recrutement", "Autre"];

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

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nom: "", prenom: "", email: "", telephone: "",
    fonction: "", objet: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL!, {
        method: "POST",
        body: JSON.stringify(form),
      });
    } catch (_) {
      // silently ignore network errors — still show confirmation
    }
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-primary to-primary" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-accent/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <span className="text-white/70">Contact</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Contactez-<span className="text-accent">Nous</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
              Notre équipe d'experts vous répond sous 24h. Décrivez votre projet et nous vous proposerons la solution la mieux adaptée.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Form — Left */}
            <div className="lg:col-span-3">
              <FadeIn>
                <div className="bg-white border border-border rounded-3xl p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-primary mb-2">Envoyez-nous un message</h2>
                  <p className="text-secondary text-sm mb-8">Tous les champs marqués * sont obligatoires.</p>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send size={24} className="text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">Message envoyé !</h3>
                      <p className="text-secondary">Notre équipe vous contactera dans les 24 heures ouvrées.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-primary mb-1.5">Nom *</label>
                          <input
                            type="text"
                            name="nom"
                            value={form.nom}
                            onChange={handleChange}
                            required
                            placeholder="El Alami"
                            className="w-full px-4 py-3 bg-bg border border-border rounded-xl text-primary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta text-sm transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-primary mb-1.5">Prénom *</label>
                          <input
                            type="text"
                            name="prenom"
                            value={form.prenom}
                            onChange={handleChange}
                            required
                            placeholder="Hassan"
                            className="w-full px-4 py-3 bg-bg border border-border rounded-xl text-primary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta text-sm transition-all"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-primary mb-1.5">Email professionnel *</label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="h.elalami@entreprise.ma"
                            className="w-full px-4 py-3 bg-bg border border-border rounded-xl text-primary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta text-sm transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-primary mb-1.5">Téléphone</label>
                          <input
                            type="tel"
                            name="telephone"
                            value={form.telephone}
                            onChange={handleChange}
                            placeholder="+212 6 XX XX XX XX"
                            className="w-full px-4 py-3 bg-bg border border-border rounded-xl text-primary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta text-sm transition-all"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-primary mb-1.5">Fonction</label>
                          <input
                            type="text"
                            name="fonction"
                            value={form.fonction}
                            onChange={handleChange}
                            placeholder="Ex : Directeur financier, DSI..."
                            className="w-full px-4 py-3 bg-bg border border-border rounded-xl text-primary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta text-sm transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-primary mb-1.5">Objet *</label>
                          <select
                            name="objet"
                            value={form.objet}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-bg border border-border rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta text-sm transition-all appearance-none"
                          >
                            <option value="">Sélectionner...</option>
                            {objets.map((o) => <option key={o} value={o}>{o}</option>)}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-1.5">Message *</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Décrivez votre projet, vos besoins, ou votre question..."
                          className="w-full px-4 py-3 bg-bg border border-border rounded-xl text-primary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta text-sm transition-all resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <Send size={16} />
                        {loading ? "Envoi en cours…" : "Envoyer ma demande"}
                      </button>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>

            {/* Info — Right */}
            <div className="lg:col-span-2 space-y-5">
              <FadeIn delay={0.1}>
                <div className="bg-white border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-cta/10 rounded-xl flex items-center justify-center">
                      <MapPin size={18} className="text-cta" />
                    </div>
                    <div>
                      <div className="font-bold text-primary text-sm">Siège Casablanca</div>
                      <div className="text-xs text-cta">Bureau principal</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-secondary">
                    <div>310 Rue Hadj Omar Riffi</div>
                    <div>Casablanca 20120, Maroc</div>
                    <a href="tel:+212522548780" className="block text-primary hover:text-cta transition-colors font-medium">+212 5 22 54 87 80</a>
                    <a href="mailto:contact@thales.ma" className="block text-primary hover:text-cta transition-colors font-medium">contact@thales.ma</a>
                    <a href="https://www.thales.ma" target="_blank" rel="noopener noreferrer" className="block text-cta hover:text-primary transition-colors font-medium">www.thales.ma</a>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="bg-white border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                      <Clock size={18} className="text-emerald-600" />
                    </div>
                    <div className="font-bold text-primary text-sm">Horaires d'ouverture</div>
                  </div>
                  <div className="space-y-2 text-sm text-secondary">
                    <div className="flex justify-between">
                      <span>Lundi – Vendredi</span>
                      <span className="font-semibold text-primary">8h30 – 17h30</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi</span>
                      <span className="text-slate-400">Fermé</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche</span>
                      <span className="text-slate-400">Fermé</span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <MessageCircle size={18} className="text-emerald-600" />
                    </div>
                    <div className="font-bold text-primary text-sm">WhatsApp</div>
                  </div>
                  <p className="text-secondary text-sm mb-3">Pour les demandes urgentes, contactez-nous directement par WhatsApp.</p>
                  <a
                    href="https://wa.me/212661168354"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-xl hover:bg-emerald-700 transition-colors duration-200"
                  >
                    <MessageCircle size={14} />
                    +212 6 61 16 83 54
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div className="bg-primary rounded-2xl p-6">
                  <div className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Réponse garantie</div>
                  <p className="text-white text-sm leading-relaxed">
                    Nous nous engageons à répondre à toutes les demandes dans un délai maximum de <strong className="text-white">24 heures ouvrées</strong>. Pour les urgences, utilisez notre WhatsApp.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-0 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <FadeIn>
            <div className="bg-primary rounded-3xl h-64 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-primary" />
              <div className="relative text-center">
                <MapPin size={32} className="text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-1">Retrouvez-nous à Casablanca</h3>
                <p className="text-white/50 text-sm">310 Rue Hadj Omar Riffi — Casablanca 20120</p>
                <a
                  href="https://maps.app.goo.gl/XK8BzRFH58aUSTnU6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white text-sm rounded-xl hover:bg-white/20 transition-colors duration-200"
                >
                  <MapPin size={14} />
                  Voir sur Google Maps
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">Notre bureau</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {offices.map((office, i) => (
              <FadeIn key={office.city} delay={i * 0.08}>
                <div className="bg-bg border border-border rounded-2xl p-5 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 bg-cta/10 rounded-lg flex items-center justify-center">
                      <MapPin size={14} className="text-cta" />
                    </div>
                    <div>
                      <div className="font-bold text-primary text-sm">{office.city}</div>
                      <div className="text-xs text-cta">{office.tag}</div>
                    </div>
                  </div>
                  <div className="space-y-1.5 text-xs text-secondary">
                    <div className="leading-relaxed">{office.address}</div>
                    <a href={`tel:${office.tel}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                      <Phone size={11} className="text-cta" />{office.phone}
                    </a>
                    <a href={`mailto:${office.email}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                      <Mail size={11} className="text-cta" />{office.email}
                    </a>
                  </div>
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
