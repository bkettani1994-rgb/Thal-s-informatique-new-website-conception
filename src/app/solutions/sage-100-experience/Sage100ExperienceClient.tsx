"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import { ArrowRight, ChevronRight, Sparkles, Bot, Wand2, Workflow } from "lucide-react";

const teaserFeatures = [
  {
    icon: Bot,
    title: "Ask AI",
    metaphor:
      "Imaginez un agent IA, un peu comme ChatGPT, capable de répondre à vos questions directement au cœur de votre gestion.",
  },
  {
    icon: Wand2,
    title: "Builder AI",
    metaphor:
      "Un architecte numérique à vos côtés, qui vous aide à construire et personnaliser sans écrire une seule ligne de code.",
  },
  {
    icon: Workflow,
    title: "Workflows",
    metaphor:
      "Un chef d'orchestre discret qui coordonne vos tâches et vos process, pour que tout s'enchaîne naturellement.",
  },
];

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

            {/* Visuel héros — à remplacer par le visuel officiel de la campagne */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-14 relative mx-auto max-w-3xl aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5"
            >
              <Image
                src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png"
                alt="Sage 100 Expérience — visuel à venir"
                fill
                className="object-contain p-16 opacity-80"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* Teaser fonctionnalités — sans détails, en métaphore */}
        <section className="py-20 bg-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <span className="inline-flex items-center gap-2 text-xs font-bold text-cta tracking-widest bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4">
                <Sparkles size={12} aria-hidden="true" />
                UN AVANT-GOÛT
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                Trois nouveautés en préparation
              </h2>
              <p className="text-secondary max-w-2xl mx-auto mt-4 leading-relaxed">
                Sans dévoiler tous les détails aujourd&apos;hui, voici un aperçu de l&apos;esprit de Sage 100 Expérience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {teaserFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                    <feature.icon size={22} className="text-cta" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{feature.metaphor}</p>
                </motion.div>
              ))}
            </div>
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
