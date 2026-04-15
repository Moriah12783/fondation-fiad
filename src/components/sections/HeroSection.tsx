"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  locale: string;
  messages: {
    tagline: string;
    title: string;
    titleAccent: string;
    description: string;
    description2?: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollDown: string;
  };
}

export default function HeroSection({ locale, messages }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const localePath = (href: string) => `/${locale}${href}`;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-fiad-navy">
      {/* Fond géométrique animé */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-fiad-navy via-fiad-navy-light to-fiad-green-dark opacity-90" />
        {/* Cercles décoratifs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-fiad-green/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-fiad-gold/10 rounded-full blur-2xl animate-pulse delay-1000" />
        {/* Grille subtile */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Tag */}
          <div
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fiad-gold/30 bg-fiad-gold/10 mb-8 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <div className="w-2 h-2 rounded-full bg-fiad-gold animate-pulse" />
            <span className="text-fiad-gold text-sm font-medium">{messages.tagline}</span>
          </div>

          {/* Titre principal */}
          <h1
            className={cn(
              "font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6 transition-all duration-700 delay-150",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {messages.title}{" "}
            <span className="text-fiad-gold">{messages.titleAccent}</span>
          </h1>

          {/* Description */}
          <div
            className={cn(
              "max-w-2xl mb-10 transition-all duration-700 delay-300 space-y-3",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <p className="text-white/75 text-lg sm:text-xl leading-relaxed">
              {messages.description}
            </p>
            {messages.description2 && (
              <p className="text-white/90 text-lg sm:text-xl leading-relaxed font-medium">
                {messages.description2}
              </p>
            )}
          </div>

          {/* CTA Buttons */}
          <div
            className={cn(
              "flex flex-wrap gap-4 transition-all duration-700 delay-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <Link
              href={localePath("/fondation")}
              className="inline-flex items-center gap-2 px-7 py-4 bg-fiad-gold hover:bg-fiad-gold-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-fiad-gold/25 hover:-translate-y-0.5"
            >
              {messages.ctaPrimary}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={localePath("/projets")}
              className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all hover:-translate-y-0.5"
            >
              <Play className="w-4 h-4" />
              {messages.ctaSecondary}
            </Link>
          </div>
        </div>

        {/* Indicateurs pays */}
        <div
          className={cn(
            "mt-20 flex flex-wrap gap-6 items-center transition-all duration-700 delay-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {[
            { flag: "🇨🇮", name: "Côte d'Ivoire" },
            { flag: "🇸🇳", name: "Sénégal" },
            { flag: "🇬🇭", name: "Ghana" },
            { flag: "🇧🇯", name: "Bénin" },
            { flag: "🌍", name: "+ 8 pays" },
          ].map((country) => (
            <div key={country.name} className="flex items-center gap-2">
              <span className="text-2xl">{country.flag}</span>
              <span className="text-white/60 text-sm">{country.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs tracking-widest uppercase">{messages.scrollDown}</span>
        <ChevronDown className="w-5 h-5 text-white/50" />
      </div>

      {/* Vague décorative */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 0 0 40L0 80Z" fill="#F8F5F0" />
        </svg>
      </div>
    </section>
  );
}
