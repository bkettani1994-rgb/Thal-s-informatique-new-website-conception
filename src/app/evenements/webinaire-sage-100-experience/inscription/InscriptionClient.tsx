"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Calendar, Video, Users, CheckCircle2, Sparkles } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function InscriptionClient() {
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="overflow-x-hidden bg-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link href="/evenements" className="hover:text-white transition-colors">Événements</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link href="/evenements/webinaire-sage-100-experience" className="hover:text-white transition-colors">Webinaire Sage 100 Expérience</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page" className="text-accent">Inscription</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-accent/20 text-accent text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4">
            <Sparkles size={12} aria-hidden="true" />
            Inscriptions ouvertes
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl">
            Inscrivez-vous au webinaire Sage 100 Expérience
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            <span className="flex items-center gap-2"><Calendar size={16} className="text-accent" aria-hidden="true" /> 9 septembre 2026 — 13h00 à 14h00</span>
            <span className="flex items-center gap-2"><Video size={16} className="text-accent" aria-hidden="true" /> En ligne</span>
            <span className="flex items-center gap-2"><Users size={16} className="text-accent" aria-hidden="true" /> Places limitées</span>
          </div>
        </div>
      </section>

      {/* Registration form */}
      <section className="py-20" ref={formRef}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate={formInView ? "visible" : "hidden"} className="bg-white rounded-2xl border border-border p-8 md:p-10">
            <h2 className="text-2xl font-bold text-primary mb-2 text-center">Réservez votre place</h2>
            <p className="text-secondary text-center mb-8">Places limitées — inscription gratuite et sans engagement</p>
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 size={40} className="text-emerald-500 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-bold text-primary mb-2">Inscription confirmée !</h3>
                <p className="text-secondary">Vous recevrez le lien de connexion par email avant l&apos;événement.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-4"
              >
                <input
                  type="text"
                  required
                  placeholder="Nom complet"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-cta text-sm"
                />
                <input
                  type="email"
                  required
                  placeholder="Adresse email professionnelle"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-cta text-sm"
                />
                <input
                  type="text"
                  required
                  placeholder="Entreprise"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-cta text-sm"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  S&apos;inscrire au webinaire
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
