import type { Metadata } from "next";
import { FileText, Download, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr" ? "Publications | FIAD" : "Publications | FIAD",
    description: locale === "fr"
      ? "La transparence est un pilier de notre engagement. Accédez à nos rapports, analyses et documents."
      : "Transparency is a pillar of our commitment. Access our reports, analyses and documents.",
  };
}

const PUBLICATIONS = [
  {
    title: "Rapport Annuel FIAD 2024",
    titleEn: "FIAD Annual Report 2024",
    type: "Rapport annuel",
    typeEn: "Annual report",
    desc: "Bilan complet de nos activités, résultats et perspectives pour l'année 2024.",
    descEn: "Complete review of our activities, results and outlook for 2024.",
    date: "2025-01-15",
    pages: 48,
    featured: true,
    color: "#1b6b3a",
  },
  {
    title: "Stratégie FIAD 2025-2030",
    titleEn: "FIAD Strategy 2025-2030",
    type: "Document stratégique",
    typeEn: "Strategic document",
    desc: "Notre feuille de route pour les cinq prochaines années : vision, objectifs et moyens.",
    descEn: "Our roadmap for the next five years: vision, objectives and resources.",
    date: "2024-12-01",
    pages: 32,
    featured: true,
    color: "#0f2a4a",
  },
  {
    title: "Rapport d'Impact 2023",
    titleEn: "2023 Impact Report",
    type: "Rapport d'impact",
    typeEn: "Impact report",
    desc: "Résultats mesurés, témoignages terrain et leçons apprises sur l'exercice 2023.",
    descEn: "Measured results, field testimonials and lessons learned from 2023.",
    date: "2024-03-10",
    pages: 36,
    featured: false,
    color: "#c9973a",
  },
  {
    title: "Étude : Agriculture Durable en Afrique de l'Ouest",
    titleEn: "Study: Sustainable Agriculture in West Africa",
    type: "Étude",
    typeEn: "Study",
    desc: "Analyse des pratiques agricoles durables et recommandations pour les acteurs locaux.",
    descEn: "Analysis of sustainable farming practices and recommendations for local stakeholders.",
    date: "2024-09-20",
    pages: 64,
    featured: false,
    color: "#1b6b3a",
  },
  {
    title: "Note de Position : Éducation et Numérique en Afrique",
    titleEn: "Position Paper: Education and Digital in Africa",
    type: "Note de position",
    typeEn: "Position paper",
    desc: "Notre vision et nos recommandations politiques sur l'éducation numérique en Afrique.",
    descEn: "Our vision and policy recommendations on digital education in Africa.",
    date: "2024-06-15",
    pages: 20,
    featured: false,
    color: "#0f2a4a",
  },
  {
    title: "Guide : Entrepreneuriat féminin en Afrique",
    titleEn: "Guide: Women's Entrepreneurship in Africa",
    type: "Guide pratique",
    typeEn: "Practical guide",
    desc: "Bonnes pratiques, outils et ressources pour accompagner les femmes entrepreneures.",
    descEn: "Best practices, tools and resources for supporting women entrepreneurs.",
    date: "2024-08-01",
    pages: 28,
    featured: false,
    color: "#c9973a",
  },
];

export default async function PublicationsPage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";

  const featured = PUBLICATIONS.filter((p) => p.featured);
  const others = PUBLICATIONS.filter((p) => !p.featured);

  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2a4a] to-[#1a4070] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9973a]/20 text-[#c9973a] text-sm font-medium mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c9973a]" />
            {isFr ? "Accès libre" : "Open access"}
          </div>
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {isFr ? "Publications" : "Publications"}
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-xl mx-auto mb-3">
            {isFr
              ? "La transparence est un pilier de notre engagement."
              : "Transparency is a pillar of our commitment."}
          </p>
          <p className="text-lg text-white/50">
            {isFr
              ? "Accédez à nos rapports, analyses et documents."
              : "Access our reports, analyses and documents."}
          </p>
        </div>
      </section>

      {/* Publications phares */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-6 rounded-full bg-[#c9973a]" />
            <h2 className="font-bold text-xl text-[#0f2a4a]">
              {isFr ? "Documents phares" : "Key documents"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((pub, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all group"
              >
                <div className="h-2" style={{ backgroundColor: pub.color }} />
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: pub.color }}
                    >
                      {isFr ? pub.type : pub.typeEn}
                    </span>
                    <span className="text-xs text-[#6b7280] flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(pub.date).toLocaleDateString(isFr ? "fr-FR" : "en-US", { year: "numeric", month: "long" })}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#0f2a4a] text-xl mb-2 group-hover:text-[#1b6b3a] transition-colors leading-snug">
                    {isFr ? pub.title : pub.titleEn}
                  </h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed mb-5">
                    {isFr ? pub.desc : pub.descEn}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#6b7280]">{pub.pages} pages · PDF</span>
                    <button
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-lg transition-colors"
                      style={{ backgroundColor: pub.color }}
                    >
                      <Download className="w-4 h-4" />
                      {isFr ? "Télécharger" : "Download"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toutes les publications */}
      <section className="py-16 bg-[#f8f5f0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-6 rounded-full bg-[#1b6b3a]" />
            <h2 className="font-bold text-xl text-[#0f2a4a]">
              {isFr ? "Autres publications" : "Other publications"}
            </h2>
          </div>
          <div className="space-y-3">
            {others.map((pub, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 flex items-center gap-5 hover:shadow-md transition-all group border border-transparent hover:border-[#1b6b3a]/20"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${pub.color}15` }}
                >
                  <FileText className="w-5 h-5" style={{ color: pub.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#f8f5f0] text-[#6b7280] font-medium">
                      {isFr ? pub.type : pub.typeEn}
                    </span>
                    <span className="text-xs text-[#6b7280]">
                      {new Date(pub.date).toLocaleDateString(isFr ? "fr-FR" : "en-US", { year: "numeric", month: "long" })}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#0f2a4a] group-hover:text-[#1b6b3a] transition-colors text-sm leading-snug">
                    {isFr ? pub.title : pub.titleEn}
                  </h3>
                  <p className="text-xs text-[#6b7280] mt-0.5">{pub.pages} pages · PDF</p>
                </div>
                <button className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#f8f5f0] group-hover:bg-[#1b6b3a] flex items-center justify-center transition-colors">
                  <Download className="w-4 h-4 text-[#6b7280] group-hover:text-white transition-colors" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparence CTA */}
      <section className="py-16 bg-[#0f2a4a] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-white/60 text-sm uppercase tracking-wider mb-3">
            {isFr ? "Aller plus loin" : "Go further"}
          </p>
          <h2 className="font-bold text-2xl sm:text-3xl mb-4">
            {isFr
              ? "Vous souhaitez en savoir plus sur notre gouvernance ?"
              : "Want to learn more about our governance?"}
          </h2>
          <p className="text-white/60 mb-8">
            {isFr
              ? "Retrouvez notre page Transparence pour l'intégralité de nos engagements et documents officiels."
              : "Visit our Transparency page for all our commitments and official documents."}
          </p>
          <Link
            href={`/${locale}/transparence`}
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#c9973a] text-white rounded-xl font-semibold hover:bg-[#a07820] transition-colors"
          >
            {isFr ? "Voir la transparence" : "View transparency"} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
