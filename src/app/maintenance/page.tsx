import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Nouveau site en cours de construction",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-primary flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <img
          src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_blanc_petit_abarsy.png"
          alt="Thalès Informatique"
          className="h-12 w-auto mx-auto mb-10"
        />
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
      </div>
    </main>
  );
}
