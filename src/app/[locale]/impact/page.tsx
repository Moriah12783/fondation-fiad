import type { Metadata } from "next";
import { Download, Users, Briefcase, Globe, Heart, CheckCircle } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr" ? "Notre Impact | FIAD" : "Our Impact | FIAD",
    description: locale === "fr"
      ? "Découvrez l'impact mesurable de la Fondation Impact Afrique Durable — bénéficiaires, projets, zones d'intervention et alignement ODD."
      : "Discover the measurable impact of Fondation Impact Afrique Durable — beneficiaries, projects, zones and SDG alignment.",
  };
}

const THEMATIC_AXES = [
  { label: "Éducation & Numérique", labelEn: "Education & Digital", percent: 35, color: "#1b6b3a" },
  { label: "Entrepreneuriat & Emploi", labelEn: "Entrepreneurship & Employment", percent: 28, color: "#c9973a" },
  { label: "Environnement & Climat", labelEn: "Environment & Climate", percent: 22, color: "#0f2a4a" },
  { label: "Inclusion Économique", labelEn: "Economic Inclusion", percent: 15, color: "#6b7280" },
];

const SDGS = [
  { number: 1, label: "Pas de pauvreté", labelEn: "No poverty", color: "#E5243B" },
  { number: 4, label: "Éducation de qualité", labelEn: "Quality education", color: "#C5192D" },
  { number: 5, label: "Égalité des sexes", labelEn: "Gender equality", color: "#FF3A21" },
  { number: 8, label: "Travail décent", labelEn: "Decent work", color: "#A21942" },
  { number: 10, label: "Inégalités réduites", labelEn: "Reduced inequalities", color: "#DD1367" },
  { number: 13, label: "Mesures climatiques", labelEn: "Climate action", color: "#3F7E44" },
  { number: 15, label: "Vie terrestre", labelEn: "Life on land", color: "#56C02B" },
];

export default async function ImpactPage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-[#0f2a4a] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-[#c9973a]/20 text-[#c9973a] text-sm font-medium mb-6 border border-[#c9973a]/30">
            {isFr ? "Cadre d'impact & Objectifs 2030" : "Impact framework & 2030 Targets"}
          </span>
          <h1 className="font-bold text-4xl sm:text-5xl text-white mb-4">
            {isFr ? "Notre Impact" : "Our Impact"}
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            {isFr
              ? "Notre cadre de mesure, nos engagements et les objectifs que nous nous fixons pour transformer durablement l'Afrique"
              : "Our measurement framework, commitments and targets we set to sustainably transform Africa"}
          </p>
        </div>
      </section>

      {/* Manifeste impact */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Notre engagement */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b6b3a]/10 text-[#1b6b3a] text-sm font-medium mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1b6b3a]" />
                {isFr ? "Notre engagement" : "Our commitment"}
              </div>
              <p className="text-[#6b7280] text-xl leading-relaxed mb-3">
                {isFr
                  ? "Dès notre premier projet, nous ne mesurerons pas le succès en intentions."
                  : "From our very first project, we will not measure success in intentions."}
              </p>
              <p className="text-3xl sm:text-4xl font-bold text-[#0f2a4a] leading-tight">
                {isFr
                  ? "Nous le mesurerons en résultats concrets."
                  : "We will measure it in concrete results."}
              </p>
            </div>

            {/* Notre approche */}
            <div className="bg-[#0f2a4a] rounded-3xl p-8 text-white text-center">
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                {isFr
                  ? "Chaque action sera suivie, évaluée, améliorée."
                  : "Every action will be tracked, evaluated, improved."}
              </p>
              <p className="text-xl font-bold text-white mb-2">
                {isFr
                  ? "Parce que l'impact n'est pas un concept."
                  : "Because impact is not a concept."}
              </p>
              <p className="text-2xl font-bold text-[#c9973a]">
                {isFr ? "C'est une responsabilité." : "It's a responsibility."}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* KPIs principaux */}
      <section className="py-16 bg-[#f8f5f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#c9973a]/10 text-[#c9973a] text-xs font-semibold tracking-wide uppercase border border-[#c9973a]/30">
              {isFr ? "Objectifs cibles 2030" : "2030 Target goals"}
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                value: "500 000+",
                label: isFr ? "Bénéficiaires visés" : "Target beneficiaries",
                sub: isFr ? "directs et indirects" : "direct and indirect",
                color: "green",
              },
              {
                icon: Briefcase,
                value: "100",
                label: isFr ? "Projets planifiés" : "Planned projects",
                sub: isFr ? "sur 4 axes thématiques" : "across 4 thematic axes",
                color: "gold",
              },
              {
                icon: Globe,
                value: "15",
                label: isFr ? "Pays africains" : "African countries",
                sub: isFr ? "présence continentale" : "continental presence",
                color: "navy",
              },
              {
                icon: Heart,
                value: "50+",
                label: isFr ? "Partenaires visés" : "Target partners",
                sub: isFr ? "institutions & privés" : "institutions & private",
                color: "green",
              },
            ].map((k, i) => (
              <div key={i} className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                  k.color === "green" ? "bg-[#1b6b3a]/10" :
                  k.color === "gold" ? "bg-[#c9973a]/10" :
                  "bg-[#0f2a4a]/10"
                }`}>
                  <k.icon className={`w-7 h-7 ${
                    k.color === "green" ? "text-[#1b6b3a]" :
                    k.color === "gold" ? "text-[#c9973a]" :
                    "text-[#0f2a4a]"
                  }`} />
                </div>
                <div className="font-bold text-3xl sm:text-4xl text-[#0f2a4a] mb-1">{k.value}</div>
                <div className="font-medium text-gray-700 text-sm mb-1">{k.label}</div>
                <div className="text-gray-400 text-xs">{k.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Répartition thématique */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#1b6b3a] font-semibold text-sm uppercase tracking-wider">
              {isFr ? "Analyse" : "Analysis"}
            </span>
            <h2 className="text-4xl font-bold text-[#0f2a4a] mt-2 mb-4">
              {isFr ? "Répartition par axe thématique" : "Distribution by thematic axis"}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              {isFr
                ? "Allocation de nos ressources et programmes par domaine d'intervention"
                : "Allocation of our resources and programs by intervention area"}
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-5">
            {THEMATIC_AXES.map((axis, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-gray-700">{isFr ? axis.label : axis.labelEn}</span>
                  <span className="font-bold" style={{ color: axis.color }}>{axis.percent}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${axis.percent}%`, backgroundColor: axis.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alignement ODD */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#c9973a] font-semibold text-sm uppercase tracking-wider">
              {isFr ? "Cadre international" : "International framework"}
            </span>
            <h2 className="text-4xl font-bold text-[#0f2a4a] mt-2 mb-4">
              {isFr ? "Alignement sur les ODD" : "Alignment with SDGs"}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              {isFr
                ? "Nos programmes contribuent directement à 7 des 17 Objectifs de Développement Durable de l'ONU"
                : "Our programs directly contribute to 7 of the 17 UN Sustainable Development Goals"}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {SDGS.map((sdg) => (
              <div
                key={sdg.number}
                className="flex flex-col items-center gap-2 group"
              >
                <div
                  className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform"
                  style={{ backgroundColor: sdg.color }}
                >
                  <span className="text-xs font-medium opacity-80">{isFr ? "ODD" : "SDG"}</span>
                  <span className="text-2xl font-bold">{sdg.number}</span>
                </div>
                <span className="text-xs text-gray-600 text-center max-w-[80px] leading-tight">
                  {isFr ? sdg.label : sdg.labelEn}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement de mesure */}
      <section className="py-20 bg-[#0f2a4a] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#c9973a] font-semibold text-sm uppercase tracking-wider">
                {isFr ? "Notre méthode" : "Our method"}
              </span>
              <h2 className="text-4xl font-bold text-white mt-2 mb-6">
                {isFr ? "Notre engagement de mesure" : "Our measurement commitment"}
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                {isFr
                  ? "Chaque euro investi fait l'objet d'un suivi rigoureux. Nous mesurons nos résultats selon trois niveaux : réalisations immédiates, effets à moyen terme et transformations durables."
                  : "Every euro invested is rigorously tracked. We measure our results at three levels: immediate outputs, medium-term outcomes and lasting transformations."}
              </p>
              <div className="space-y-3">
                {(isFr ? [
                  "Indicateurs SMART définis avant chaque programme",
                  "Collecte de données trimestrielle sur le terrain",
                  "Évaluations indépendantes mi-parcours et finales",
                  "Publication intégrale des résultats — bons et moins bons",
                  "Rapport d'impact annuel audité et public",
                ] : [
                  "SMART indicators defined before each program",
                  "Quarterly data collection in the field",
                  "Independent mid-term and final evaluations",
                  "Full publication of results — good and less good",
                  "Annual audited public impact report",
                ]).map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c9973a] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                {isFr ? "Rapport d'Impact 2024" : "2024 Impact Report"}
              </h3>
              <p className="text-white/70 mb-6 text-sm leading-relaxed">
                {isFr
                  ? "Téléchargez notre rapport annuel complet détaillant l'ensemble de nos programmes, résultats et apprentissages."
                  : "Download our complete annual report detailing all our programs, results and learnings."}
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9973a] hover:bg-[#a07820] text-white font-semibold rounded-xl transition-colors">
                <Download className="w-5 h-5" />
                {isFr ? "Télécharger le rapport d'impact" : "Download impact report"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
