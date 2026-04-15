import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { FIAD_CONFIG, NAV_ITEMS } from "@/lib/constants";

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="#fff" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const localePath = (href: string) => `/${locale}${href}`;
  const isFr = locale === "fr";

  return (
    <footer className="bg-fiad-navy text-white">
      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Colonne 1 : À propos */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 overflow-hidden flex-shrink-0 rounded-full">
                <Image
                  src="/logo-fiad.png1.png"
                  alt="FIAD Logo"
                  width={120}
                  height={120}
                  className="w-full object-cover"
                  style={{ objectPosition: "center 10%", transform: "scale(1.3)", transformOrigin: "center 15%" }}
                />
              </div>
              <div>
                <div className="font-display font-bold text-white">FIAD</div>
                <div className="text-xs text-white/60">Fondation Impact Afrique Durable</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {isFr
                ? "Organisation à but non lucratif dédiée au développement durable et à l'innovation sociale en Afrique."
                : "Non-profit organization dedicated to sustainable development and social innovation in Africa."}
            </p>
            <div className="flex gap-3">
              <a href={FIAD_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-fiad-green transition-colors">
                <LinkedinIcon />
              </a>
              <a href={FIAD_CONFIG.socials.twitter} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-fiad-green transition-colors">
                <TwitterIcon />
              </a>
              <a href={FIAD_CONFIG.socials.facebook} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-fiad-green transition-colors">
                <FacebookIcon />
              </a>
              <a href={FIAD_CONFIG.socials.youtube} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-fiad-green transition-colors">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5">
              {isFr ? "Navigation" : "Navigation"}
            </h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={localePath(item.href)}
                    className="text-white/70 hover:text-fiad-gold text-sm transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {isFr ? item.label : item.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Contact */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5">
              {isFr ? "Contact" : "Contact"}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-fiad-gold mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">
                  {FIAD_CONFIG.location}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-fiad-gold mt-0.5 shrink-0" />
                <a
                  href={`mailto:${FIAD_CONFIG.email}`}
                  className="text-white/70 hover:text-fiad-gold text-sm transition-colors"
                >
                  {FIAD_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Newsletter */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5">
              {isFr ? "Restez informé" : "Stay informed"}
            </h3>
            <p className="text-white/70 text-sm mb-4">
              {isFr
                ? "Recevez nos actualités et rapports d'impact."
                : "Receive our news and impact reports."}
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={isFr ? "Votre email" : "Your email"}
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-fiad-gold transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-fiad-gold hover:bg-fiad-gold-dark text-white rounded-lg text-sm font-semibold transition-colors"
              >
                OK
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Barre de bas */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center">
            © {new Date().getFullYear()} {FIAD_CONFIG.name}. {isFr ? "Tous droits réservés." : "All rights reserved."}
          </p>
          <div className="flex gap-4">
            <Link
              href={localePath("/legal/mentions-legales")}
              className="text-white/50 hover:text-white/80 text-sm transition-colors"
            >
              {isFr ? "Mentions légales" : "Legal notice"}
            </Link>
            <Link
              href={localePath("/legal/politique-confidentialite")}
              className="text-white/50 hover:text-white/80 text-sm transition-colors"
            >
              {isFr ? "Confidentialité" : "Privacy"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
