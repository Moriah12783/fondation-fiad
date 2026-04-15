"use client";

import { useState } from "react";
import { MapPin, ArrowRight, Users, Briefcase } from "lucide-react";
import Link from "next/link";
import { PROJECTS_DATA } from "@/lib/constants";
import { useParams } from "next/navigation";

const CATEGORY_LABELS: Record<string, { fr: string; en: string }> = {
  education: { fr: "Éducation", en: "Education" },
  entrepreneurship: { fr: "Entrepreneuriat", en: "Entrepreneurship" },
  environment: { fr: "Environnement", en: "Environment" },
};

const FILTERS = [
  { key: "all", fr: "Tous", en: "All" },
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
      {/* Header */}
      <section className="bg-[#0f2a4a] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-[#c9973a]/20 text-[#c9973a] text-sm font-medium mb-6 border border-[#c9973a]/30">
            {isFr ? "Nos réalisations" : "Our achievements"}
          </span>
          <h1 className="font-bold text-4xl sm:text-5xl text-white mb-4">
            {isFr ? "Nos Projets" : "Our Projects"}
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            {isFr
              ? "Des initiatives à fort impact, déployées sur le terrain pour des communautés concrètes à travers l'Afrique"
              : "High-impact initiatives deployed on the ground for concrete communities across Africa"}
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

      {/* Grille de projets */}
      <section className="py-16 bg-[#f8f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <article key={project.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className={`h-2 w-full ${
                  project.color === "green" ? "bg-[#1b6b3a]" :
                  project.color === "gold" ? "bg-[#c9973a]" :
                  "bg-[#0f2a4a]"
                }`} />
                <div className="p-6">
                  {/* Badges */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                      {CATEGORY_LABELS[project.category]?.[isFr ? "fr" : "en"] ?? project.category}
                    </span>
                    <span className={`flex items-center gap-1 text-xs font-medium ${
                      project.status === "active" ? "text-[#1b6b3a]" : "text-gray-400"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        project.status === "active" ? "bg-[#1b6b3a] animate-pulse" : "bg-gray-400"
                      }`} />
                      {project.status === "active"
                        ? (isFr ? "En cours" : "Active")
                        : (isFr ? "Terminé" : "Completed")}
                    </span>
                  </div>

                  {/* Titre */}
                  <h3 className="font-bold text-[#0f2a4a] text-lg mb-2 group-hover:text-[#1b6b3a] transition-colors">
                    {isFr ? project.title : project.titleEn}
                  </h3>

                  {/* Problème */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {isFr ? project.problem : project.problemEn}
                  </p>

                  {/* Localisation */}
                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-4">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    {project.location}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="bg-[#f8f5f0] rounded-lg p-3 text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Users className="w-3 h-3 text-[#1b6b3a]" />
                      </div>
                      <div className="font-bold text-[#1b6b3a] text-sm">{project.beneficiaries.toLocaleString("fr-FR")}</div>
                      <div className="text-xs text-gray-500">{isFr ? "Bénéficiaires" : "Beneficiaries"}</div>
                    </div>
                    <div className="bg-[#f8f5f0] rounded-lg p-3 text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Briefcase className="w-3 h-3 text-[#c9973a]" />
                      </div>
                      <div className="font-bold text-[#c9973a] text-sm">{project.budget}</div>
                      <div className="text-xs text-gray-500">{isFr ? "Budget" : "Budget"}</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/${locale}/projets/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1b6b3a] hover:gap-3 transition-all group-hover:text-[#1b6b3a]"
                  >
                    {isFr ? "En savoir plus" : "Learn more"}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              {isFr ? "Aucun projet pour ce filtre." : "No projects for this filter."}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
