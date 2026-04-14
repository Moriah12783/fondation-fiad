import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr" ? "Nos Partenaires" : "Our Partners",
  };
}

const PARTNERS = [
  { name: "Union Africaine", category: "institution", abbr: "UA" },
  { name: "Nations Unies", category: "multilateral", abbr: "ONU" },
  { name: "Banque Mondiale", category: "financial", abbr: "BM" },
  { name: "PNUD", category: "multilateral", abbr: "PNUD" },
  { name: "Union Européenne", category: "institution", abbr: "UE" },
  { name: "Banque Africaine de Développement", category: "financial", abbr: "BAD" },
  { name: "UNICEF", category: "multilateral", abbr: "UNICEF" },
  { name: "GIZ", category: "bilateral", abbr: "GIZ" },
  { name: "AFD", category: "bilateral", abbr: "AFD" },
  { name: "Bill & Melinda Gates Foundation", category: "private", abbr: "BMGF" },
  { name: "Orange Foundation", category: "private", abbr: "OF" },
  { name: "MTN Foundation", category: "private", abbr: "MTN" },
];

const CATEGORIES: Record<string, { fr: string; en: string; color: string }> = {
  institution: { fr: "Institution", en: "Institution", color: "bg-blue-100 text-blue-700" },
  multilateral: { fr: "Multilatéral", en: "Multilateral", color: "bg-purple-100 text-purple-700" },
  financial: { fr: "Financier", en: "Financial", color: "bg-green-100 text-green-700" },
  bilateral: { fr: "Bilatéral", en: "Bilateral", color: "bg-orange-100 text-orange-700" },
  private: { fr: "Privé", en: "Private", color: "bg-fiad-gold/20 text-fiad-gold-dark" },
};

export default async function PartenairesPage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";

  return (
    <div className="pt-24">
      <section className="bg-gradient-to-br from-fiad-navy to-fiad-navy-light py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            {isFr ? "Nos Partenaires" : "Our Partners"}
          </h1>
          <p className="text-white/70 text-xl">
            {isFr
              ? "Institutions, organisations et entreprises qui soutiennent notre mission"
              : "Institutions, organizations and companies supporting our mission"}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
            {PARTNERS.map((partner) => {
              const cat = CATEGORIES[partner.category];
              return (
                <div key={partner.name} className="bg-fiad-cream rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-md transition-all">
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
                ? "Rejoignez notre réseau et contribuez à l'impact de la FIAD sur le développement de l'Afrique."
                : "Join our network and contribute to FIAD's impact on Africa's development."}
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
