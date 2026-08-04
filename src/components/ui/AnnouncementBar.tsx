"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, X } from "lucide-react";

const LAUNCH_DATE = new Date("2026-08-05T10:00:00+01:00");

function getTimeLeft() {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  const clamped = Math.max(diff, 0);
  return {
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

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
            <span className="font-semibold hidden sm:inline">Sage 100 Expérience arrive bientôt</span>
            <span className="font-semibold sm:hidden">Sage 100 Expérience</span>

            {time && (
              <span className="hidden md:flex items-center gap-1 font-mono tabular-nums bg-white/10 rounded-md px-2 py-0.5">
                <span>{String(time.days).padStart(2, "0")}j</span>
                <span className="opacity-60">:</span>
                <span>{String(time.hours).padStart(2, "0")}h</span>
                <span className="opacity-60">:</span>
                <span>{String(time.minutes).padStart(2, "0")}m</span>
                <span className="opacity-60">:</span>
                <span>{String(time.seconds).padStart(2, "0")}s</span>
              </span>
            )}

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
