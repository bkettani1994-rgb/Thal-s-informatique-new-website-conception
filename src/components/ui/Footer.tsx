"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Link2, PlayCircle, Share2 } from "lucide-react";

const footerLinks = {
  solutions: [
    "Gestion financière",
    "Comptabilité & fiscalité",
    "Gestion RH & paie",
    "Gestion de trésorerie",
    "Gestion de production",
    "Maintenance équipements",
    "CRM",
    "Reporting & BI",
  ],
  services: [
    "Conseil & audit",
    "Implémentation ERP",
    "Migration de données",
    "Formation & support",
    "Maintenance applicative",
    "Cloud & hébergement",
  ],
  ressources: [
    "Blog & actualités",
    "Webinaires",
    "Livres blancs",
    "Études de cas",
    "Documentation",
    "FAQ",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-cta rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">T</span>
              </div>
              <span className="font-bold text-white text-base">
                Thalès <span className="text-accent">Informatique</span>
              </span>
            </div>
            <p className="text-white/40 text-xs leading-relaxed mb-5 max-w-[200px]">
              Votre partenaire de confiance pour la transformation digitale des
              entreprises depuis 1994.
            </p>
            <div className="space-y-2 mb-6">
              <a
                href="tel:+212522548780"
                className="flex items-center gap-2 text-white/40 hover:text-white text-xs transition-colors duration-200 cursor-pointer"
              >
                <Phone size={12} className="shrink-0" />
                05 22 54 87 80
              </a>
              <a
                href="mailto:contact@thales.ma"
                className="flex items-center gap-2 text-white/40 hover:text-white text-xs transition-colors duration-200 cursor-pointer"
              >
                <Mail size={12} className="shrink-0" />
                contact@thales.ma
              </a>
              <a
                href="https://maps.app.goo.gl/XK8BzRFH58aUSTnU6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-white/40 hover:text-white text-xs transition-colors duration-200 cursor-pointer"
              >
                <MapPin size={12} className="shrink-0 mt-0.5" />
                <span>310 Rue Hadj Omar Riffi, Casablanca 20120</span>
              </a>
            </div>
            <div className="flex gap-2">
              {[
                { icon: Link2, label: "LinkedIn", href: "https://www.linkedin.com/company/thalesinformatique/" },
                { icon: PlayCircle, label: "YouTube", href: "https://www.youtube.com/@thalesinformatique1033" },
                { icon: Share2, label: "Twitter / X", href: "https://x.com/ThalesInfo" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-cta/80 flex items-center justify-center text-white/40 hover:text-white transition-all duration-200 cursor-pointer"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.solutions.map((link) => (
                <li key={link}>
                  <a
                    href="#solutions"
                    className="text-white/40 hover:text-white text-xs transition-colors duration-200 cursor-pointer leading-tight block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/40 hover:text-white text-xs transition-colors duration-200 cursor-pointer leading-tight block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Ressources
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.ressources.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/40 hover:text-white text-xs transition-colors duration-200 cursor-pointer leading-tight block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact form teaser */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Contactez-nous
            </h4>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 text-xs rounded-lg px-3 py-2.5 focus:outline-none focus:border-cta/50 transition-colors duration-200"
              />
              <input
                type="email"
                placeholder="Email professionnel"
                className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 text-xs rounded-lg px-3 py-2.5 focus:outline-none focus:border-cta/50 transition-colors duration-200"
              />
              <button className="w-full bg-cta hover:bg-cta-hover text-white text-xs font-semibold py-2.5 rounded-lg transition-colors duration-200 cursor-pointer">
                Envoyer
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Thalès Informatique. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {["Politique de confidentialité", "Mentions légales", "CGU"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/25 hover:text-white/60 text-xs transition-colors duration-200 cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
