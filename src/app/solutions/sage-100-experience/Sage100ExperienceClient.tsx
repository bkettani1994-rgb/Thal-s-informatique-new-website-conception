"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { trackEvent } from "@/lib/analytics";
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Bot,
  Wand2,
  Workflow,
  Send,
  Rocket,
  Gift,
  Users,
  ShieldCheck,
} from "lucide-react";

/** Date cible de la campagne — à ajuster dès que la date officielle de lancement est confirmée. */
const LAUNCH_DATE = new Date("2026-08-03T09:00:00+01:00");

const teaserFeatures = [
  {
    icon: Bot,
    title: "Votre assistant intelligent",
    metaphor: "Une présence discrète, prête à vous simplifier le quotidien dans votre gestion.",
  },
  {
    icon: Wand2,
    title: "Votre atelier de personnalisation",
    metaphor: "Plus de liberté pour façonner votre outil, à votre image.",
  },
  {
    icon: Workflow,
    title: "Votre chef d'orchestre",
    metaphor: "Vos tâches s'enchaînent, sans que vous ayez à y penser.",
  },
];

const benefits = [
  {
    icon: Rocket,
    title: "Accès prioritaire",
    desc: "Soyez parmi les premiers informés dès l'ouverture officielle de Sage 100 Expérience.",
  },
  {
    icon: Gift,
    title: "Offre de lancement",
    desc: "Bénéficiez de conditions préférentielles réservées aux inscrits en avant-première.",
  },
  {
    icon: Users,
    title: "Accompagnement dédié",
    desc: "Un expert Thalès Informatique vous contacte personnellement au lancement.",
  },
  {
    icon: ShieldCheck,
    title: "Aucun engagement",
    desc: "Une simple inscription pour rester informé, sans aucune obligation de votre part.",
  },
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

function getTimeLeft() {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  const clamped = Math.max(diff, 0);
  return {
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
    ended: diff <= 0,
  };
}

function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Jours", value: time?.days },
    { label: "Heures", value: time?.hours },
    { label: "Minutes", value: time?.minutes },
    { label: "Secondes", value: time?.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-4 max-w-lg mx-auto">
      {units.map((u) => (
        <div
          key={u.label}
          className="bg-white/5 border border-white/10 rounded-2xl py-4 sm:py-6 text-center backdrop-blur-sm"
        >
          <div className="text-2xl sm:text-4xl font-bold text-white tabular-nums">
            {u.value !== undefined ? String(u.value).padStart(2, "0") : "--"}
          </div>
          <div className="text-[10px] sm:text-xs text-white/50 font-semibold tracking-widest uppercase mt-1">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Sage100ExperienceClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    entreprise: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL!, {
        method: "POST",
        body: JSON.stringify({ ...form, source: "sage-100-experience-teaser" }),
      });
    } catch (_) {
      // silently ignore network errors — still show confirmation
    }
    setLoading(false);
    setSubmitted(true);
    trackEvent("form_submit", { form_name: "sage_100_experience_teaser" });
  };

  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen">
        {/* Hero — teaser */}
        <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
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
                Une nouvelle expérience Sage 100 se prépare chez Thalès Informatique. Inscrivez-vous dès aujourd&apos;hui pour être parmi les premiers à la découvrir.
              </p>
              <a
                href="#avant-premiere"
                aria-label="Être informé en avant-première de Sage 100 Expérience"
                className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors duration-200"
              >
                Être informé en avant-première <ArrowRight size={18} aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Countdown */}
        <section className="py-16 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-slate-900" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-accent tracking-widest bg-accent/10 px-4 py-1.5 rounded-full mb-6">
                LE COMPTE À REBOURS EST LANCÉ
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">
                Revenez à cette date pour en savoir plus
              </h2>
              <Countdown />
            </FadeIn>
          </div>
        </section>

        {/* Teaser fonctionnalités — sans détails, en métaphore */}
        <section className="py-20 bg-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-14">
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
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {teaserFeatures.map((feature, i) => (
                <FadeIn key={feature.title} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 h-full">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                      <feature.icon size={22} className="text-cta" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                    <p className="text-secondary text-sm leading-relaxed">{feature.metaphor}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi s'inscrire en avant-première */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-14">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                  Pourquoi s&apos;inscrire dès maintenant ?
                </h2>
                <p className="text-secondary max-w-2xl mx-auto mt-4 leading-relaxed">
                  Les inscrits en avant-première seront les premiers servis au lancement de Sage 100 Expérience.
                </p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b, i) => (
                <FadeIn key={b.title} delay={i * 0.08}>
                  <div className="bg-bg rounded-2xl border border-slate-200 p-6 h-full">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                      <b.icon size={20} className="text-cta" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-bold text-primary mb-1.5">{b.title}</h3>
                    <p className="text-secondary text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Formulaire avant-première */}
        <section id="avant-premiere" className="py-24 bg-primary relative overflow-hidden scroll-mt-24">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-primary to-primary" />
          <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-accent tracking-widest bg-accent/10 px-4 py-1.5 rounded-full mb-6">
                  <Sparkles size={12} aria-hidden="true" />
                  AVANT-PREMIÈRE
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Je veux être prévenu·e en avant-première
                </h2>
                <p className="text-white/60 leading-relaxed">
                  Laissez-nous vos coordonnées, nous vous tiendrons informé·e dès les prochaines étapes de Sage 100 Expérience.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send size={24} className="text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">Inscription confirmée !</h3>
                    <p className="text-secondary">Vous serez parmi les premiers informés du lancement de Sage 100 Expérience.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-1.5">Prénom *</label>
                        <input
                          type="text"
                          name="prenom"
                          value={form.prenom}
                          onChange={handleChange}
                          required
                          placeholder="Mohammed"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cta focus:ring-1 focus:ring-cta outline-none transition-colors placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-1.5">Nom *</label>
                        <input
                          type="text"
                          name="nom"
                          value={form.nom}
                          onChange={handleChange}
                          required
                          placeholder="Berrada"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cta focus:ring-1 focus:ring-cta outline-none transition-colors placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-1.5">Email professionnel *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="mohammed.berrada@entreprise.ma"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cta focus:ring-1 focus:ring-cta outline-none transition-colors placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-1.5">Entreprise</label>
                      <input
                        type="text"
                        name="entreprise"
                        value={form.entreprise}
                        onChange={handleChange}
                        placeholder="Nom de votre entreprise"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cta focus:ring-1 focus:ring-cta outline-none transition-colors placeholder:text-slate-400"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 bg-cta text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors duration-200 disabled:opacity-60"
                    >
                      {loading ? "Envoi en cours..." : "Je veux être prévenu·e en avant-première"}
                      {!loading && <ArrowRight size={18} aria-hidden="true" />}
                    </button>
                    <p className="text-xs text-secondary text-center">
                      Vos données restent confidentielles et ne servent qu&apos;à vous informer du lancement de Sage 100 Expérience.
                    </p>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Bandeau discret : suite à venir */}
        <section className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <p className="text-secondary leading-relaxed">
                Cette page évoluera au fil des prochaines étapes de la campagne Sage 100 Expérience. Pour toute question dès aujourd&apos;hui, notre équipe reste à votre disposition.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-cta text-sm font-semibold mt-4"
              >
                Contacter Thalès Informatique <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
