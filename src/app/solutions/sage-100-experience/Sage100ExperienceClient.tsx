"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";

export default function Sage100ExperienceClient() {
  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen">
        {/* Hero — teaser */}
        <section className="pt-32 pb-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-800 to-slate-900" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-white/50 text-sm mb-10">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight aria-hidden="true" size={14} />
              <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <ChevronRight aria-hidden="true" size={14} />
              <span aria-current="page" className="text-accent">Sage 100 Expérience</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="inline-flex items-center gap-2 text-xs font-bold text-accent tracking-widest bg-accent/10 px-4 py-1.5 rounded-full mb-6">
                <Sparkles size={12} aria-hidden="true" />
                BIENTÔT DISPONIBLE
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Sage 100 Expérience
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
                Thalès Informatique prépare une nouvelle étape pour Sage 100. Nous en dévoilerons progressivement les contours dans les prochaines semaines — revenez bientôt sur cette page.
              </p>
              <Link
                href="/contact"
                aria-label="Être informé en avant-première de Sage 100 Expérience"
                className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors duration-200"
              >
                Être informé en avant-première <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Bandeau discret : suite à venir */}
        <section className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-secondary leading-relaxed">
                Cette page évoluera au fil des prochaines étapes de la campagne Sage 100 Expérience. Pour toute question dès aujourd&apos;hui, notre équipe reste à votre disposition.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-cta text-sm font-semibold mt-4"
              >
                Contacter Thalès Informatique <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
