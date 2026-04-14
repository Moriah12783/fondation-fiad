import type { Metadata } from "next";
import { FileText, Download, Calendar } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr" ? "Publications" : "Publications",
  };
}

const PUBLICATIONS = [
  { title: "Rapport Annuel FIAD 2024", titleEn: "FIAD Annual Report 2024", type: "Rapport", typeEn: "Report", date: "2025-01-15", pages: 48 },
  { title: "Stratégie FIAD 2025-2030", titleEn: "FIAD Strategy 2025-2030", type: "Document stratégique", typeEn: "Strategic document", date: "2024-12-01", pages: 32 },
  { title: "Étude : Agriculture Durable en Afrique de l'Ouest", titleEn: "Study: Sustainable Agriculture in West Africa", type: "Étude", typeEn: "Study", date: "2024-09-20", pages: 64 },
  { title: "Rapport d'Impact 2023", titleEn: "2023 Impact Report", type: "Rapport", typeEn: "Report", date: "2024-03-10", pages: 36 },
  { title: "Note de Position : Éducation et Numérique en Afrique", titleEn: "Position Paper: Education and Digital in Africa", type: "Note de position", typeEn: "Position paper", date: "2024-06-15", pages: 20 },
  { title: "Guide des Bonnes Pratiques : Entrepreneuriat féminin", titleEn: "Best Practices Guide: Women Entrepreneurship", type: "Guide", typeEn: "Guide", date: "2024-08-01", pages: 28 },
];

export default async function PublicationsPage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";

  return (
    <div className="pt-24">
      <section className="bg-gradient-to-br from-fiad-navy to-fiad-navy-light py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            {isFr ? "Publications" : "Publications"}
          </h1>
          <p className="text-white/70 text-xl">
            {isFr
              ? "Rapports, études, notes de position et ressources documentaires"
              : "Reports, studies, position papers and documentary resources"}
          </p>
        </div>
      </section>

      <section className="py-20 bg-fiad-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {PUBLICATIONS.map((pub, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 flex items-center gap-5 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-fiad-green/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-fiad-green" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-fiad-cream-dark text-fiad-gray-light font-medium">
                      {isFr ? pub.type : pub.typeEn}
                    </span>
                    <span className="text-xs text-fiad-gray-light flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(pub.date).toLocaleDateString(isFr ? "fr-FR" : "en-US", { year: "numeric", month: "long" })}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-fiad-navy group-hover:text-fiad-green transition-colors">
                    {isFr ? pub.title : pub.titleEn}
                  </h3>
                  <p className="text-xs text-fiad-gray-light mt-1">{pub.pages} pages — PDF</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-fiad-cream hover:bg-fiad-green hover:text-white text-fiad-gray rounded-lg text-sm font-medium transition-all flex-shrink-0">
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">{isFr ? "Télécharger" : "Download"}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
