"use client";

import { useState } from "react";
import { MapPin, ArrowRight, Users, Briefcase, CheckCircle } from "lucide-react";
import Link from "next/link";
import { PROJECTS_DATA } from "@/lib/constants";
import { useParams } from "next/navigation";

const CATEGORY_LABELS: Record<string, { fr: string; en: string }> = {
  education: { fr: "Éducation", en: "Education" },
  entrepreneurship: { fr: "Entrepreneuriat", en: "Entrepreneurship" },
  environment: { fr: "Environnement", en: "Environment" },
};

const FILTERS = [
  { key: "all", fr: "Tous les projets", en: "All projects" },
  { key: "education", fr: "Éducation", en: "Education" },
  { key: "entrepreneurship", fr: "Entrepreneuriat", en: "Entrepreneurship" },
  { key: "environment", fr: "Environnement", en: "Environment" },
];

export default function ProjectsPage() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";
  const isFr = locale === "fr";
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2a4a] to-[#1a4070] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-[#c9973a]/20 text-[#c9973a] text-sm font-medium mb-6 border border-[#c9973a]/30">
            {isFr ? "Nos réalisations" : "Our achievements"}
          </span>
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {isFr ? "Nos Projets" : "Our Projects"}
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
            {isFr
              ? "Des initiatives concrètes déployées sur le terrain. Derrière chaque projet, une histoire humaine."
              : "Concrete initiatives deployed on the ground. Behind every project, a human story."}
          </p>
        </div>
      </section>

      {/* Filtres */}
      <section className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === f.key
                    ? "bg-[#1b6b3a] text-white shadow-sm"
                    : "bg-[#f8f5f0] text-gray-600 hover:bg-[#1b6b3a]/10 hover:text-[#1b6b3a]"
                }`}
              >
                {isFr ? f.fr : f.en}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille projets */}
      <section className="py-16 bg-[#f8f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => {
              const accentColor =
                project.color === "green" ? "#1b6b3a" :
                project.color === "gold" ? "#c9973a" : "#0f2a4a";

              return (
                <article
                  key={project.slug}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col"
                >
                  {/* Barre couleur */}
                  <div className="h-1.5 w-full" style={{ backgroundColor: accentColor }} />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Badges */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: `${accentColor}15`, color: accentColor }}>
                        {CATEGORY_LABELS[project.category]?.[isFr ? "fr" : "en"] ?? project.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-medium text-[#1b6b3a]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1b6b3a] animate-pulse" />
                        {isFr ? "En cours" : "Active"}
                      </span>
                    </div>

                    {/* Titre */}
                    <h3 className="font-bold text-[#0f2a4a] text-lg mb-3 group-hover:text-[#1b6b3a] transition-colors leading-snug">
                      {isFr ? project.title : project.titleEn}
                    </h3>

                    {/* Story hook */}
                    <p className="text-[#6b7280] text-sm italic mb-4 leading-relaxed border-l-2 pl-3" style={{ borderColor: accentColor }}>
                      {isFr ? project.storyHook : project.storyHookEn}
                    </p>

                    {/* Ce qu'on donne */}
                    <div className="mb-4 space-y-1.5">
                      {(isFr ? project.storyGives : project.storyGivesEn).map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-[#374151]">
                          <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: accentColor }} />
                          {item}
                        </div>
                      ))}
                    </div>

                    {/* Closing */}
                    <p className="text-sm font-semibold mb-5" style={{ color: accentColor }}>
                      👉 {isFr ? project.storyClosing : project.storyClosingEn}
                    </p>

                    {/* Séparateur */}
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-[#f8f5f0] rounded-lg p-3 text-center">
                          <div className="font-bold text-sm mb-0.5" style={{ color: accentColor }}>
                            {project.beneficiaries.toLocaleString("fr-FR")}
                          </div>
                          <div className="text-xs text-gray-500 flex items-center justify-center gap-1">
                            <Users className="w-3 h-3" />
                            {isFr ? "Bénéficiaires" : "Beneficiaries"}
                          </div>
                        </div>
                        <div className="bg-[#f8f5f0] rounded-lg p-3 text-center">
                          <div className="font-bold text-[#c9973a] text-sm mb-0.5">{project.budget}</div>
                          <div className="text-xs text-gray-500 flex items-center justify-center gap-1">
                            <Briefcase className="w-3 h-3" />
                            {isFr ? "Budget" : "Budget"}
                          </div>
                        </div>
                      </div>

                      {/* Localisation + CTA */}
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <MapPin className="w-3 h-3" />
                          {project.location}
                        </span>
                        <Link
                          href={`/${locale}/projets/${project.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all"
                          style={{ color: accentColor }}
                        >
                          {isFr ? "Voir le projet" : "View project"}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              {isFr ? "Aucun projet pour ce filtre." : "No projects for this filter."}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-[#6b7280] text-lg mb-6">
            {isFr
              ? "Vous souhaitez soutenir l'un de nos programmes ?"
              : "Want to support one of our programs?"}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1b6b3a] text-white rounded-xl font-semibold hover:bg-[#134d2a] transition-colors"
          >
            {isFr ? "Collaborer avec nous" : "Collaborate with us"} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
