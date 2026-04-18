import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  return {
    title: isFr ? "Nos Partenaires" : "Our Partners",
    description: isFr
      ? "Découvrez les institutions et organisations avec lesquelles la FIAD souhaite collaborer pour transformer l'Afrique."
      : "Discover the institutions and organizations FIAD seeks to partner with to transform Africa.",
  };
}

// Partenaires visés — institutions de référence alignées sur la mission FIAD
const TARGET_PARTNERS = [
  { name: "Union Africaine", category: "institution", abbr: "UA" },
  { name: "Nations Unies / PNUD", category: "multilateral", abbr: "ONU" },
  { name: "Banque Mondiale", category: "financial", abbr: "BM" },
  { name: "Union Européenne", category: "institution", abbr: "UE" },
  { name: "Banque Africaine de Développement", category: "financial", abbr: "BAD" },
  { name: "UNICEF", category: "multilateral", abbr: "UNICEF" },
  { name: "GIZ", category: "bilateral", abbr: "GIZ" },
  { name: "AFD", category: "bilateral", abbr: "AFD" },
  { name: "Gates Foundation", category: "private", abbr: "BMGF" },
  { name: "Orange Foundation", category: "private", abbr: "OF" },
  { name: "MTN Foundation", category: "private", abbr: "MTN" },
  { name: "USAID", category: "bilateral", abbr: "USAID" },
];

const CATEGORIES: Record<string, { fr: string; en: string; color: string }> = {
  institution: { fr: "Institution", en: "Institution", color: "bg-blue-100 text-blue-700" },
  multilateral: { fr: "Multilatéral", en: "Multilateral", color: "bg-purple-100 text-purple-700" },
  financial: { fr: "Financier", en: "Financial", color: "bg-green-100 text-green-700" },
  bilateral: { fr: "Bilatéral", en: "Bilateral", color: "bg-orange-100 text-orange-700" },
  private: { fr: "Privé", en: "Private", color: "bg-yellow-100 text-yellow-700" },
};

export default async function PartenairesPage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-fiad-navy to-fiad-navy-light py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            {isFr ? "Nos Partenaires" : "Our Partners"}
          </h1>
          <p className="text-white/70 text-xl">
            {isFr
              ? "Les organisations avec lesquelles nous souhaitons bâtir l'Afrique de demain"
              : "The organizations with which we seek to build tomorrow's Africa"}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Disclaimer de transparence — fondation en création */}
          <div className="max-w-4xl mx-auto mb-14 flex items-start gap-4 bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <Info className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-blue-900 mb-1">
                {isFr ? "Partenaires stratégiques visés" : "Target strategic partners"}
              </p>
              <p className="text-blue-800 text-sm leading-relaxed">
                {isFr
                  ? "La FIAD est en cours d'enregistrement officiel. Les institutions présentées ci-dessous représentent les partenaires stratégiques avec lesquels nous souhaitons collaborer dans le cadre de notre mission. Des discussions et démarches de partenariat sont engagées progressivement."
                  : "FIAD is in the process of official registration. The institutions shown below represent the strategic partners with whom we seek to collaborate in the framework of our mission. Partnership discussions are being progressively initiated."}
              </p>
            </div>
          </div>

          {/* Grille partenaires */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
            {TARGET_PARTNERS.map((partner) => {
              const cat = CATEGORIES[partner.category];
              return (
                <div
                  key={partner.name}
                  className="bg-fiad-cream rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-md transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-fiad-navy flex items-center justify-center mb-4">
                    <span className="text-white font-display font-bold text-xs">{partner.abbr}</span>
                  </div>
                  <h3 className="font-medium text-fiad-navy text-sm mb-2">{partner.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${cat.color}`}>
                    {isFr ? cat.fr : cat.en}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Devenir partenaire */}
          <div className="bg-gradient-to-r from-fiad-green to-fiad-green-light rounded-2xl p-10 text-center">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              {isFr ? "Devenez partenaire" : "Become a partner"}
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              {isFr
                ? "Rejoignez notre réseau et contribuez à l'impact de la FIAD sur le développement durable de l'Afrique."
                : "Join our network and contribute to FIAD's impact on Africa's sustainable development."}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-7 py-3 bg-white text-fiad-green font-semibold rounded-xl hover:bg-fiad-cream transition-all"
            >
              {isFr ? "Nous contacter" : "Contact us"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
