"use client";

import { Download, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface DownloadButtonProps {
  href?: string;           // Si fourni : téléchargement réel
  label?: string;
  className?: string;
  variant?: "icon" | "full"; // icon = petit bouton, full = bouton complet
  locale?: string;
}

export default function DownloadButton({
  href,
  label,
  className,
  variant = "icon",
  locale = "fr",
}: DownloadButtonProps) {
  const isFr = locale === "fr";
  const isAvailable = !!href;

  if (variant === "full") {
    if (isAvailable) {
      return (
        <a
          href={href}
          download
          className={cn(
            "inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors",
            className
          )}
        >
          <Download className="w-5 h-5" />
          {label ?? (isFr ? "Télécharger" : "Download")}
        </a>
      );
    }
    return (
      <span
        title={isFr ? "Document disponible après l'enregistrement officiel" : "Document available after official registration"}
        className={cn(
          "inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white/40 rounded-lg font-semibold cursor-not-allowed select-none",
          className
        )}
      >
        <Clock className="w-5 h-5" />
        {label ?? (isFr ? "Disponible prochainement" : "Coming soon")}
      </span>
    );
  }

  // Variant icon (tableau de documents)
  if (isAvailable) {
    return (
      <a
        href={href}
        download
        title={isFr ? "Télécharger" : "Download"}
        className={cn(
          "w-8 h-8 rounded-lg bg-[#f8f5f0] hover:bg-[#1b6b3a] flex items-center justify-center transition-colors group-hover:bg-[#1b6b3a]",
          className
        )}
      >
        <Download className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
      </a>
    );
  }

  return (
    <span
      title={isFr ? "Document disponible après l'enregistrement officiel" : "Document available after official registration"}
      className={cn(
        "w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center cursor-not-allowed",
        className
      )}
    >
      <Clock className="w-4 h-4 text-gray-400" />
    </span>
  );
}
