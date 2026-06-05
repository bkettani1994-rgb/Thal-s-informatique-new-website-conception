"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Link2, PlayCircle, Share2, Globe } from "lucide-react";

const footerNav = [
  {
    heading: "Métiers",
    links: [
      { label: "Comptabilité & Finance",    href: "/metiers/comptabilite-finance" },
      { label: "États Comptables & Fiscaux", href: "/metiers/etats-comptables-fiscaux" },
      { label: "Trésorerie",                href: "/metiers/tresorerie" },
      { label: "ERP",                       href: "/metiers/erp" },
      { label: "CRM",                       href: "/metiers/crm" },
      { label: "Paie & RH",                 href: "/metiers/paie-rh" },
      { label: "SIRH",                      href: "/metiers/sirh" },
      { label: "Reporting",                 href: "/metiers/reporting" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Sage X3",          href: "/solutions/sage-x3" },
      { label: "Sage 100",         href: "/solutions/sage-100" },
      { label: "Sage FRP 1000",    href: "/solutions/sage-frp-1000" },
      { label: "DimoMaint GMAO",   href: "/solutions/dimomaint-gmao" },
      { label: "Eloficash",        href: "/solutions/eloficash" },
      { label: "Factorial",        href: "/solutions/factorial" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Audit & Conseil",        href: "/services/audit-conseil" },
      { label: "Intégration ERP",        href: "/services/integration-erp" },
      { label: "Formation Utilisateurs", href: "/services/formation-utilisateurs" },
      { label: "Support & Maintenance",  href: "/services/support-maintenance" },
      { label: "Assistance Utilisateurs",href: "/services/assistance-utilisateurs" },
    ],
  },
  {
    heading: "Entreprise",
    links: [
      { label: "À propos",         href: "/a-propos" },
      { label: "Nos clients",      href: "/references/clients" },
      { label: "Témoignages",      href: "/references/temoignages" },
      { label: "Études de cas",    href: "/references/etudes-de-cas" },
      { label: "Trophées",         href: "/trophees" },
      { label: "Actualités",       href: "/ressources/actualites" },
      { label: "Blog",             href: "/ressources/blog" },
      { label: "FAQ",              href: "/ressources/faq" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Col 1: Brand — spans 2 cols on desktop */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-cta rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">T</span>
              </div>
              <span className="font-bold text-white text-base">
                Thalès <span className="text-accent">Informatique</span>
              </span>
            </Link>
            <p className="text-white/40 text-xs leading-relaxed mb-5 max-w-[220px]">
              Votre partenaire de confiance pour la transformation digitale des entreprises marocaines depuis 1993.
            </p>

            {/* Contact */}
            <div className="space-y-2 mb-6">
              <a
                href="tel:+212522548780"
                className="flex items-center gap-2 text-white/40 hover:text-white text-xs transition-colors duration-200"
              >
                <Phone size={12} className="shrink-0" />
                05 22 54 87 80
              </a>
              <a
                href="mailto:contact@thales.ma"
                className="flex items-center gap-2 text-white/40 hover:text-white text-xs transition-colors duration-200"
              >
                <Mail size={12} className="shrink-0" />
                contact@thales.ma
              </a>
              <a
                href="https://maps.app.goo.gl/XK8BzRFH58aUSTnU6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-white/40 hover:text-white text-xs transition-colors duration-200"
              >
                <MapPin size={12} className="shrink-0 mt-0.5" />
                <span>310 Rue Hadj Omar Riffi,<br />Casablanca 20120</span>
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-2">
              {[
                { icon: Link2,       label: "LinkedIn",  href: "https://www.linkedin.com/company/thalesinformatique/" },
                { icon: PlayCircle, label: "YouTube",   href: "https://www.youtube.com/@thalesinformatique1033" },
                { icon: Globe,      label: "Facebook",  href: "https://www.facebook.com/Thales.Informatique" },
                { icon: Share2,     label: "X",         href: "https://x.com/ThalesInfo" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-cta/80 flex items-center justify-center text-white/40 hover:text-white transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex mt-6 items-center gap-2 bg-cta hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors duration-200"
            >
              Demander une démo →
            </Link>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-white text-xs transition-colors duration-200 leading-tight block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
                className="text-white/25 hover:text-white/60 text-xs transition-colors duration-200"
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
