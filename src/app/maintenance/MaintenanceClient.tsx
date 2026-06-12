"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Lock, X, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import NetworkBackground from "./NetworkBackground";

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
    <main className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <NetworkBackground />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-xl"
      >
        <img
          src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png"
          alt="Thalès Informatique"
          className="h-12 w-auto mx-auto mb-10"
        />

        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cta/10 text-cta text-xs font-semibold tracking-widest uppercase mb-6">
          Nouveau site en préparation
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          Notre nouveau site arrive bientôt
        </h1>
        <p className="text-secondary text-lg leading-relaxed mb-10">
          Thalès Informatique prépare une toute nouvelle expérience pour mieux vous accompagner
          dans votre transformation digitale. Revenez très vite !
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
          <a
            href="tel:+212522548780"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cta/5 text-cta font-semibold rounded-xl hover:bg-cta/10 transition-colors border border-cta/20"
          >
            <Phone size={16} />
            05 22 54 87 80
          </a>
          <a
            href="mailto:contact@thales.ma"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cta/5 text-cta font-semibold rounded-xl hover:bg-cta/10 transition-colors border border-cta/20"
          >
            <Mail size={16} />
            contact@thales.ma
          </a>
        </div>
      </motion.div>

      {/* Admin access button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-20 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 text-slate-400 text-xs font-medium border border-black/10 hover:bg-black/10 hover:text-slate-600 transition-colors cursor-pointer"
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
