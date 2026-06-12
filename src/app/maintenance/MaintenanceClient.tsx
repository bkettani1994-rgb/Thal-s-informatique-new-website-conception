"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Lock, X, Loader2, Settings, Wrench } from "lucide-react";
import { useRouter } from "next/navigation";

function Robot() {
  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto mb-10 w-48 h-48 sm:w-56 sm:h-56"
    >
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
        {/* Antenna */}
        <line x1="100" y1="28" x2="100" y2="10" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
        <motion.circle
          cx="100"
          cy="8"
          r="7"
          fill="#38BDF8"
          animate={{ opacity: [1, 0.3, 1], scale: [1, 1.25, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Head */}
        <rect x="55" y="28" width="90" height="70" rx="18" fill="#1E293B" stroke="#38BDF8" strokeWidth="3" />

        {/* Eyes */}
        <motion.circle
          cx="82"
          cy="60"
          r="9"
          fill="#38BDF8"
          animate={{ scaleY: [1, 1, 0.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.9, 0.95, 1] }}
        />
        <motion.circle
          cx="118"
          cy="60"
          r="9"
          fill="#38BDF8"
          animate={{ scaleY: [1, 1, 0.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.9, 0.95, 1] }}
        />

        {/* Mouth */}
        <rect x="82" y="80" width="36" height="6" rx="3" fill="#38BDF8" opacity="0.6" />

        {/* Body */}
        <rect x="62" y="98" width="76" height="64" rx="14" fill="#0F172A" stroke="#38BDF8" strokeWidth="3" />
        <rect x="80" y="114" width="40" height="28" rx="6" fill="#0369A1" opacity="0.5" />
        <circle cx="100" cy="128" r="8" fill="#38BDF8" />

        {/* Left arm */}
        <rect x="40" y="106" width="22" height="14" rx="6" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />

        {/* Right arm holding wrench, animated like it's fixing something */}
        <motion.g
          style={{ transformOrigin: "150px 110px" }}
          animate={{ rotate: [0, -25, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="138" y="106" width="22" height="14" rx="6" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
          <rect x="156" y="98" width="6" height="26" rx="3" fill="#38BDF8" />
        </motion.g>

        {/* Legs */}
        <rect x="72" y="162" width="16" height="20" rx="4" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
        <rect x="112" y="162" width="16" height="20" rx="4" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
      </svg>

      {/* Floating gear icons */}
      <motion.div
        className="absolute -top-2 -right-6 text-accent/40"
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        <Settings size={28} />
      </motion.div>
      <motion.div
        className="absolute bottom-4 -left-8 text-cta/50"
        animate={{ rotate: -360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <Wrench size={24} />
      </motion.div>
    </motion.div>
  );
}

export default function MaintenanceClient() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("/api/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        setError(true);
        setLoading(false);
      }
    } catch {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-primary flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-cta/15 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-center max-w-xl"
      >
        <img
          src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_blanc_petit_abarsy.png"
          alt="Thalès Informatique"
          className="h-12 w-auto mx-auto mb-6"
        />

        <Robot />

        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-6">
          Nouveau site en préparation
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Notre nouveau site arrive bientôt
        </h1>
        <p className="text-white/70 text-lg leading-relaxed mb-10">
          Thalès Informatique prépare une toute nouvelle expérience pour mieux vous accompagner
          dans votre transformation digitale. Revenez très vite !
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
          <a
            href="tel:+212522548780"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
          >
            <Phone size={16} />
            05 22 54 87 80
          </a>
          <a
            href="mailto:contact@thales.ma"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
          >
            <Mail size={16} />
            contact@thales.ma
          </a>
        </div>
      </motion.div>

      {/* Admin access button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white/40 text-xs font-medium border border-white/10 hover:bg-white/10 hover:text-white/70 transition-colors cursor-pointer"
      >
        <Lock size={12} />
        Accès admin
      </button>

      {/* Password modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="relative bg-slate-800 border border-white/10 rounded-2xl p-8 w-full max-w-sm"
          >
            <button
              onClick={() => {
                setOpen(false);
                setError(false);
                setPassword("");
              }}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
            <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-4">
              <Lock size={22} />
            </div>
            <h2 className="text-lg font-bold text-white mb-2">Accès administrateur</h2>
            <p className="text-white/50 text-sm mb-5">
              Entrez le mot de passe pour prévisualiser le nouveau site.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe"
                autoFocus
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              {error && (
                <p className="text-rose-400 text-xs">Mot de passe incorrect. Veuillez réessayer.</p>
              )}
              <button
                type="submit"
                disabled={loading || !password}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : "Accéder au site"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </main>
  );
}
