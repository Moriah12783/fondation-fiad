import type { Metadata } from "next";
import { ArrowLeft, MapPin, Users, Calendar, Award, TrendingUp, Briefcase, Globe, Leaf } from "lucide-react";
import Link from "next/link";
import { PROJECTS_DATA } from "@/lib/constants";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string; slug: string }> };

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  TrendingUp,
  Briefcase,
  Award,
  Globe,
  Leaf,
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);
  if (!project) return { title: "Projet | FIAD" };
  return {
    title: `${locale === "fr" ? project.title : project.titleEn} | FIAD`,
  };
}

export async function generateStaticParams() {
  return PROJECTS_DATA.flatMap((project) => [
    { locale: "fr", slug: project.slug },
    { locale: "en", slug: project.slug },
  ]);
}

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const isFr = locale === "fr";
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) notFound();

  const accentColor =
    project.color === "green" ? "#1b6b3a" :
    project.color === "gold" ? "#c9973a" :
    "#0f2a4a";

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-16 px-4" style={{ backgroundColor: accentColor }}>
        <div className="max-w-5xl mx-auto">
          <Link
            href={`/${locale}/projets`}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {isFr ? "Retour aux projets" : "Back to projects"}
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
              {project.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-white/80">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {isFr ? "En cours" : "Active"}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {isFr ? project.title : project.titleEn}
          </h1>
          <div className="flex flex-wrap gap-4 text-white/70 text-sm">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{project.location}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{project.startDate}</span>
            <span className="flex items-center gap-1"><Users className="w-4 h-4" />{project.beneficiaries.toLocaleString("fr-FR")} {isFr ? "bénéficiaires" : "beneficiaries"}</span>
          </div>
        </div>
      </section>

      {/* Story immersive */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-2xl sm:text-3xl font-bold text-[#0f2a4a] leading-tight mb-6">
            {isFr ? project.storyHook : project.storyHookEn}
          </p>
          <p className="text-[#6b7280] text-lg mb-6">
            {isFr ? "Nous leur donnons :" : "We give them:"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {(isFr ? project.storyGives : project.storyGivesEn).map((item: string, i: number) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white text-sm"
                style={{ backgroundColor: accentColor }}
              >
                <span className="text-white/60">0{i + 1}</span>
                {item}
              </div>
            ))}
          </div>
          <p className="text-xl font-bold" style={{ color: accentColor }}>
            👉 {isFr ? project.storyClosing : project.storyClosingEn}
          </p>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-12 bg-[#f8f5f0] border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.kpis.map((kpi, i) => {
              const IconComp = ICON_MAP[kpi.icon] ?? Award;
              return (
                <div key={i} className="text-center p-5 rounded-2xl bg-[#f8f5f0]">
                  <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: `${accentColor}18` }}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-bold text-[#0f2a4a] mb-1">{kpi.value}</div>
                  <div className="text-xs text-gray-500">{kpi.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16 bg-[#f8f5f0]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne principale */}
            <div className="lg:col-span-2 space-y-8">
              {/* Problème */}
              <div className="bg-white rounded-2xl p-8 border-l-4" style={{ borderColor: accentColor }}>
                <h2 className="text-xl font-bold text-[#0f2a4a] mb-3">
                  {isFr ? "Le problème adressé" : "The problem addressed"}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {isFr ? project.problem : project.problemEn}
                </p>
              </div>

              {/* Objectif */}
              <div className="bg-white rounded-2xl p-8">
                <h2 className="text-xl font-bold text-[#0f2a4a] mb-3">
                  {isFr ? "Objectif du programme" : "Program objective"}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {isFr ? project.objective : project.objectiveEn}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-white rounded-2xl p-8">
                <h2 className="text-xl font-bold text-[#0f2a4a] mb-3">
                  {isFr ? "Notre solution" : "Our solution"}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {isFr ? project.solution : project.solutionEn}
                </p>
              </div>

              {/* Résultats */}
              <div className="bg-white rounded-2xl p-8">
                <h2 className="text-xl font-bold text-[#0f2a4a] mb-3">
                  {isFr ? "Résultats obtenus" : "Results achieved"}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {isFr ? project.results : project.resultsEn}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Infos */}
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-bold text-[#0f2a4a] mb-4">{isFr ? "Informations" : "Information"}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">{isFr ? "Budget" : "Budget"}</span>
                    <span className="font-semibold text-[#0f2a4a]">{project.budget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">{isFr ? "Démarrage" : "Start date"}</span>
                    <span className="font-semibold text-[#0f2a4a]">{project.startDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">{isFr ? "Statut" : "Status"}</span>
                    <span className="font-semibold text-green-600">{isFr ? "En cours" : "Active"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">{isFr ? "Zone" : "Zone"}</span>
                    <span className="font-semibold text-[#0f2a4a] text-right max-w-[140px]">{project.location}</span>
                  </div>
                </div>
              </div>

              {/* ODD */}
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-bold text-[#0f2a4a] mb-4">{isFr ? "ODD alignés" : "Aligned SDGs"}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.sdgs.map((n) => (
                    <div
                      key={n}
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: accentColor }}
                    >
                      {n}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: accentColor }}>
                <h3 className="font-bold mb-2">{isFr ? "Soutenir ce projet" : "Support this project"}</h3>
                <p className="text-white/80 text-sm mb-4">
                  {isFr
                    ? "Votre soutien permet d'étendre l'impact de ce programme."
                    : "Your support helps expand the impact of this program."}
                </p>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-block w-full text-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-semibold transition-colors"
                >
                  {isFr ? "Nous contacter" : "Contact us"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
