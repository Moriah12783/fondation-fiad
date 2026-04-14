import type { Metadata } from "next";
import { TrendingUp, Users, Globe, Leaf } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr" ? "Notre Impact" : "Our Impact",
  };
}

export default async function ImpactPage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";

  const kpis = [
    { icon: Users, value: "50 000+", label: isFr ? "Bénéficiaires directs" : "Direct beneficiaries", color: "bg-fiad-green/10 text-fiad-green" },
    { icon: Globe, value: "12", label: isFr ? "Pays d'intervention" : "Countries of operation", color: "bg-blue-100 text-blue-600" },
    { icon: TrendingUp, value: "35+", label: isFr ? "Projets actifs" : "Active projects", color: "bg-amber-100 text-amber-600" },
    { icon: Leaf, value: "1 200 ha", label: isFr ? "Terres restaurées" : "Land restored", color: "bg-teal-100 text-teal-600" },
  ];

  return (
    <div className="pt-24">
      <section className="bg-gradient-to-br from-fiad-navy to-fiad-navy-light py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            {isFr ? "Notre Impact" : "Our Impact"}
          </h1>
          <p className="text-white/70 text-xl">
            {isFr
              ? "Données transparentes pour mesurer notre contribution au développement de l'Afrique"
              : "Transparent data to measure our contribution to Africa's development"}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* KPIs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {kpis.map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div className="font-display font-bold text-3xl sm:text-4xl text-fiad-navy mb-2">{value}</div>
                <div className="text-fiad-gray-light text-sm">{label}</div>
              </div>
            ))}
          </div>

          {/* Zones géographiques */}
          <h2 className="font-display font-bold text-3xl text-fiad-navy mb-8 text-center">
            {isFr ? "Présence géographique" : "Geographic presence"}
          </h2>
          <div className="bg-fiad-cream rounded-2xl p-8 mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { flag: "🇨🇮", name: "Côte d'Ivoire", projects: 8 },
                { flag: "🇸🇳", name: "Sénégal", projects: 5 },
                { flag: "🇬🇭", name: "Ghana", projects: 4 },
                { flag: "🇧🇫", name: "Burkina Faso", projects: 4 },
                { flag: "🇧🇯", name: "Bénin", projects: 3 },
                { flag: "🇹🇬", name: "Togo", projects: 3 },
                { flag: "🇬🇳", name: "Guinée", projects: 2 },
                { flag: "🇲🇱", name: "Mali", projects: 2 },
                { flag: "🇨🇲", name: "Cameroun", projects: 2 },
                { flag: "🇰🇪", name: "Kenya", projects: 1 },
                { flag: "🇹🇿", name: "Tanzanie", projects: 1 },
                { flag: "🇷🇼", name: "Rwanda", projects: 1 },
              ].map((c) => (
                <div key={c.name} className="bg-white rounded-xl p-4 text-center hover:shadow-sm transition-all">
                  <div className="text-3xl mb-2">{c.flag}</div>
                  <div className="text-xs font-medium text-fiad-navy">{c.name}</div>
                  <div className="text-xs text-fiad-gray-light mt-1">{c.projects} {isFr ? "projets" : "projects"}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Rapport d'impact */}
          <div className="bg-fiad-navy rounded-2xl p-8 text-center">
            <h3 className="font-display font-bold text-2xl text-white mb-3">
              {isFr ? "Rapport d'Impact 2024" : "2024 Impact Report"}
            </h3>
            <p className="text-white/70 mb-6">
              {isFr
                ? "Téléchargez notre rapport annuel détaillant tous nos programmes et résultats."
                : "Download our annual report detailing all our programs and results."}
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-fiad-gold hover:bg-fiad-gold-dark text-white font-semibold rounded-xl transition-all">
              {isFr ? "Télécharger le rapport (PDF)" : "Download report (PDF)"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
