"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, X } from "lucide-react";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 py-2 text-xs sm:text-sm relative">
          <Link
            href="/solutions/sage-100-experience"
            className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity"
          >
            <Sparkles size={14} className="text-accent shrink-0" aria-hidden="true" />
            <span className="font-semibold hidden sm:inline">Nouveauté : découvrez Sage 100 Expérience</span>
            <span className="font-semibold sm:hidden">Nouveauté Sage 100 Expérience</span>

            <span className="inline-flex items-center gap-1 underline underline-offset-2">
              En savoir plus <ArrowRight size={12} aria-hidden="true" />
            </span>
          </Link>

          <button
            onClick={() => setDismissed(true)}
            aria-label="Fermer l'annonce Sage 100 Expérience"
            className="absolute right-0 p-1 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
