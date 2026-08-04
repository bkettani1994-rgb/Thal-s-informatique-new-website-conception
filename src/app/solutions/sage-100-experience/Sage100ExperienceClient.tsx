"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
  Cloud,
  Zap,
  DatabaseBackup,
  Lock,
  TrendingUp,
  PlayCircle,
  Wallet,
  Landmark,
  FileText,
  ShoppingCart,
  BadgeCheck,
  BarChart2,
  ChevronsLeftRight,
} from "lucide-react";

/** Date cible de la campagne — à ajuster dès que la date officielle de lancement est confirmée. */
const LAUNCH_DATE = new Date("2026-08-05T10:00:00+01:00");

/** Vidéos pub Sage 100 Expérience — vidéo 1 hébergée sur Cloudinary, vidéo 2 en attente (YouTube). */
const VIDEO_1_SRC = "https://res.cloudinary.com/dmutnjgp8/video/upload/v1785755019/SAGE_EXPERIENCE_VIDEO_PRODUIT_svgomc.mp4";
const VIDEO_2_ID = "XL4CsKGb7yg";

/** Comparatif interface — nouvelle vs ancienne interface Sage 100. */
const INTERFACE_NEW_SRC = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1785840083/dataven-new_vjtafd.png";
const INTERFACE_OLD_SRC = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1785840083/current-ux-sage100_quyqvd.jpg";

const modules = [
  {
    icon: Wallet,
    title: "Comptabilité & Finance",
    desc: "Centralisez votre comptabilité générale, analytique et vos états financiers.",
    href: "/metiers/comptabilite-finance",
  },
  {
    icon: Landmark,
    title: "Trésorerie",
    desc: "Suivez vos flux de trésorerie et anticipez vos besoins de financement.",
    href: "/metiers/tresorerie",
  },
  {
    icon: FileText,
    title: "Immobilisations",
    desc: "Gérez le cycle de vie de vos immobilisations et leurs amortissements.",
    href: "/metiers/immobilisations",
  },
  {
    icon: ShoppingCart,
    title: "Gestion commerciale",
    desc: "Maîtrisez l'intégralité de votre chaîne commerciale, de la vente à la facturation.",
    href: "/solutions/sage-100",
  },
  {
    icon: BadgeCheck,
    title: "États Comptables & Fiscaux",
    desc: "Produisez vos états comptables et fiscaux conformes à la réglementation marocaine.",
    href: "/metiers/etats-comptables-fiscaux",
  },
  {
    icon: BarChart2,
    title: "Reporting",
    desc: "Pilotez votre activité avec des tableaux de bord et indicateurs en temps réel.",
    href: "/metiers/reporting",
  },
  {
    icon: Sparkles,
    title: "Expertise Comptable",
    desc: "Un environnement pensé pour les cabinets d'expertise comptable et leurs clients.",
    href: "/metiers/expertise-comptable",
  },
];

const teaserFeatures = [
  {
    icon: Bot,
    title: "Ask AI",
    metaphor: "Un agent IA, un peu comme ChatGPT, capable de répondre à vos questions directement au cœur de votre gestion.",
  },
  {
    icon: Wand2,
    title: "Builder AI",
    metaphor: "Un architecte numérique à vos côtés, qui vous aide à construire et personnaliser sans écrire une seule ligne de code.",
  },
  {
    icon: Workflow,
    title: "Workflows",
    metaphor: "Un chef d'orchestre discret qui coordonne vos tâches et vos process, pour que tout s'enchaîne naturellement.",
  },
];

const cloudAdvantages = [
  {
    icon: Zap,
    title: "Accès temps réel",
    desc: "Consultez vos données de gestion à jour, à tout moment et depuis n'importe où.",
  },
  {
    icon: DatabaseBackup,
    title: "Sauvegardes auto",
    desc: "Vos données sont sauvegardées automatiquement, sans intervention de votre part.",
  },
  {
    icon: Lock,
    title: "Sécurité renforcée",
    desc: "Un environnement cloud sécurisé pour protéger vos informations sensibles.",
  },
  {
    icon: TrendingUp,
    title: "Évolutivité",
    desc: "Une solution qui s'adapte à la croissance de votre entreprise, sans rupture.",
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

function FadeIn({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
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
          className="bg-blue-50 border border-blue-100 rounded-2xl py-4 sm:py-6 text-center"
        >
          <div className="text-2xl sm:text-4xl font-bold text-primary tabular-nums">
            {u.value !== undefined ? String(u.value).padStart(2, "0") : "--"}
          </div>
          <div className="text-[10px] sm:text-xs text-secondary font-semibold tracking-widest uppercase mt-1">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function BeforeAfterSlider({
  oldSrc,
  newSrc,
  oldLabel,
  newLabel,
}: {
  oldSrc: string;
  newSrc: string;
  oldLabel: string;
  newLabel: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const handleMove = (e: PointerEvent) => updateFromClientX(e.clientX);
    const handleUp = () => setDragging(false);
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };
  }, [dragging, updateFromClientX]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 select-none cursor-ew-resize touch-none"
      onPointerDown={(e) => {
        setDragging(true);
        updateFromClientX(e.clientX);
      }}
    >
      {/* Ancienne interface — en dessous, pleine largeur */}
      <Image
        src={oldSrc}
        alt={oldLabel}
        fill
        className="object-cover pointer-events-none"
        draggable={false}
      />

      {/* Nouvelle interface — révélée depuis la gauche via clip-path */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={newSrc}
          alt={newLabel}
          fill
          className="object-cover pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Étiquettes */}
      <span className="absolute top-4 left-4 bg-primary/80 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
        {newLabel}
      </span>
      <span className="absolute top-4 right-4 bg-white/85 text-primary text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
        {oldLabel}
      </span>

      {/* Ligne de séparation + poignée */}
      <div
        className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
        style={{ left: `${position}%` }}
      >
        <div
          role="slider"
          tabIndex={0}
          aria-label="Comparer l'ancienne et la nouvelle interface Sage 100"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
            if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center cursor-ew-resize outline-none focus-visible:ring-2 focus-visible:ring-cta"
        >
          <ChevronsLeftRight size={18} className="text-primary" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

function VideoSection({
  eyebrow,
  title,
  description,
  videoId,
  videoSrc,
  videoTitle,
  bg = "bg-bg",
}: {
  eyebrow: string;
  title: string;
  description: string;
  videoId?: string;
  videoSrc?: string;
  videoTitle: string;
  bg?: string;
}) {
  return (
    <section className={`py-20 ${bg}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-cta tracking-widest bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4">
              <PlayCircle size={12} aria-hidden="true" />
              {eyebrow}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">{title}</h2>
            <p className="text-secondary max-w-2xl mx-auto mt-4 leading-relaxed">{description}</p>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            {videoSrc ? (
              <video
                src={videoSrc}
                title={videoTitle}
                controls
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              >
                Votre navigateur ne prend pas en charge la lecture vidéo.
              </video>
            ) : videoId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                title={videoTitle}
                loading="lazy"
                allow="accelerated-video; encrypted-media; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-secondary">
                <PlayCircle size={40} className="text-slate-300" aria-hidden="true" />
                <span className="text-sm font-medium">Vidéo à venir</span>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
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
    demoRequested: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEET_SAGE100_CLOUD_URL!, {
        method: "POST",
        body: JSON.stringify({ ...form, source: "sage-100-experience-cloud" }),
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
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-white/50 text-sm">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight aria-hidden="true" size={14} />
              <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <ChevronRight aria-hidden="true" size={14} />
              <span aria-current="page" className="text-accent">Sage 100 Expérience</span>
            </nav>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="inline-flex items-center gap-2 text-xs font-bold text-accent tracking-widest bg-accent/10 px-4 py-1.5 rounded-full mb-6">
                <Sparkles size={12} aria-hidden="true" />
                AVANT-PREMIÈRE EN COURS
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
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-cta tracking-widest bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-6">
                LE COMPTE À REBOURS EST LANCÉ
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-8">
                Revenez à cette date pour en savoir plus
              </h2>
              <Countdown />
            </FadeIn>
          </div>
        </section>

        {/* Comparatif interface — ancienne vs nouvelle */}
        <section className="py-20 bg-bg">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-cta tracking-widest bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4">
                  <ChevronsLeftRight size={12} aria-hidden="true" />
                  AVANT / APRÈS
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                  Une interface repensée
                </h2>
                <p className="text-secondary max-w-2xl mx-auto mt-4 leading-relaxed">
                  Faites glisser le curseur pour comparer l&apos;ancienne et la nouvelle interface Sage 100.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <BeforeAfterSlider
                oldSrc={INTERFACE_OLD_SRC}
                newSrc={INTERFACE_NEW_SRC}
                oldLabel="Ancienne interface"
                newLabel="Nouvelle interface"
              />
            </FadeIn>
          </div>
        </section>

        {/* Vidéo 1 — présentation */}
        <VideoSection
          eyebrow="EN VIDÉO"
          title="Découvrez Sage 100 Expérience"
          description="Une présentation vidéo de la nouvelle expérience Sage 100 préparée par Thalès Informatique."
          videoSrc={VIDEO_1_SRC}
          videoTitle="Sage 100 Expérience — Présentation"
          bg="bg-white"
        />

        {/* Cloud — avantages */}
        <section className="py-20 bg-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-cta tracking-widest bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4">
                  <Cloud size={12} aria-hidden="true" />
                  DANS LE CLOUD
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                  Pensé pour le cloud
                </h2>
                <p className="text-secondary max-w-2xl mx-auto mt-4 leading-relaxed">
                  Sage 100 Expérience s&apos;appuie sur le cloud pour vous offrir plus de simplicité et de sérénité au quotidien.
                </p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cloudAdvantages.map((c, i) => (
                <FadeIn key={c.title} delay={i * 0.08}>
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 h-full">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                      <c.icon size={20} className="text-cta" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-bold text-primary mb-1.5">{c.title}</h3>
                    <p className="text-secondary text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.2}>
              <p data-ilink className="text-secondary text-sm text-center mt-10 max-w-2xl mx-auto leading-relaxed">
                Cette infrastructure s&apos;appuie sur notre expertise{" "}
                <Link href="/services/infogerance" className="text-cta font-semibold hover:underline">infogérance</Link>,{" "}
                nos solutions de{" "}
                <Link href="/services/infogerance/sauvegarde-reprise-activite" className="text-cta font-semibold hover:underline">sauvegarde et reprise d&apos;activité</Link>{" "}
                et notre approche{" "}
                <Link href="/services/infogerance/cybersecurite" className="text-cta font-semibold hover:underline">cybersécurité</Link>, déjà déployées sur{" "}
                <Link href="/solutions/sage-100" className="text-cta font-semibold hover:underline">Sage 100</Link>.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Teaser fonctionnalités — sans détails, en métaphore */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-cta tracking-widest bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4">
                  <Sparkles size={12} aria-hidden="true" />
                  UN AVANT-GOÛT
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                  Trois innovations en préparation
                </h2>
                <p className="text-secondary max-w-2xl mx-auto mt-4 leading-relaxed">
                  Sans dévoiler tous les détails aujourd&apos;hui, voici un aperçu de l&apos;esprit de Sage 100 Expérience.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {teaserFeatures.map((feature, i) => (
                <FadeIn key={feature.title} delay={i * 0.1}>
                  <div className="bg-bg rounded-2xl border border-slate-200 p-8 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 h-full">
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

        {/* Vidéo 2 — fonctionnalités */}
        <VideoSection
          eyebrow="ZOOM SUR LES NOUVEAUTÉS"
          title="Ask AI, Builder AI et Workflows en images"
          description="Un second aperçu vidéo pour découvrir l'esprit des nouveautés de Sage 100 Expérience."
          videoId={VIDEO_2_ID}
          videoTitle="Sage 100 Expérience — Nouveautés"
          bg="bg-bg"
        />

        {/* Modules Sage 100 Expérience */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-cta tracking-widest bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4">
                  <Sparkles size={12} aria-hidden="true" />
                  MODULES
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                  Les modules que couvre Sage 100 Expérience
                </h2>
                <p className="text-secondary max-w-2xl mx-auto mt-4 leading-relaxed">
                  Une même expérience pour couvrir l&apos;ensemble de votre gestion, du plus opérationnel au plus stratégique.
                </p>
              </div>
            </FadeIn>

            <div className="flex flex-wrap justify-center gap-6">
              {modules.map((m, i) => (
                <FadeIn key={m.title} delay={i * 0.06} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
                  <Link
                    href={m.href}
                    aria-label={`Découvrir le module ${m.title}`}
                    className="block h-full bg-bg rounded-2xl border border-slate-200 p-6 hover:border-cta/40 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                      <m.icon size={20} className="text-cta" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-bold text-primary mb-1.5">{m.title}</h3>
                    <p className="text-secondary text-sm leading-relaxed mb-3">{m.desc}</p>
                    <span className="inline-flex items-center gap-1 text-cta text-xs font-semibold">
                      Découvrir <ArrowRight size={12} aria-hidden="true" />
                    </span>
                  </Link>
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
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="demoRequested"
                        checked={form.demoRequested}
                        onChange={handleChange}
                        required
                        className="mt-0.5 w-4 h-4 rounded border-slate-300 text-cta focus:ring-cta focus:ring-1 cursor-pointer"
                      />
                      <span className="text-sm text-secondary leading-relaxed">
                        Je souhaite demander une démo de Sage 100 Expérience dès sa disponibilité. *
                      </span>
                    </label>
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
