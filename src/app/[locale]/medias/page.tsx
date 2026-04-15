import type { Metadata } from "next";
import { Calendar, ExternalLink } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr" ? "Médias" : "Media",
  };
}

const NEWS = [
  { title: "La FIAD signe un accord de partenariat avec la BAD", titleEn: "FIAD signs partnership agreement with AfDB", source: "Abidjan.net", date: "2025-03-10" },
  { title: "Lancement du programme AgroFutur en Côte d'Ivoire", titleEn: "Launch of AgroFutur program in Côte d'Ivoire", source: "RFI", date: "2025-02-14" },
  { title: "La fondation africaine qui veut changer le développement durable", titleEn: "The African foundation seeking to change sustainable development", source: "Le Monde Afrique", date: "2025-01-22" },
  { title: "EduCode Africa : former 10 000 jeunes africains au numérique", titleEn: "EduCode Africa: training 10,000 African youth in digital skills", source: "Jeune Afrique", date: "2024-11-05" },
];

export default async function MediasPage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";

  return (
    <div className="pt-24">
      <section className="bg-gradient-to-br from-fiad-navy to-fiad-navy-light py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9973a]/20 text-[#c9973a] text-sm font-medium mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c9973a]" />
            {isFr ? "Sur le terrain" : "In the field"}
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">
            {isFr ? "Médias" : "Media"}
          </h1>
          <p className="text-xl text-white/80 font-medium mb-2">
            {isFr ? "Images, histoires, actions." : "Images, stories, actions."}
          </p>
          <p className="text-lg text-white/60">
            {isFr ? "Découvrez FIAD sur le terrain." : "Discover FIAD in the field."}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl text-fiad-navy mb-8">
            {isFr ? "Revue de presse" : "Press coverage"}
          </h2>
          <div className="space-y-4 mb-16">
            {NEWS.map((item, index) => (
              <div key={index} className="flex items-center gap-5 p-5 bg-fiad-cream rounded-xl hover:shadow-sm transition-all group">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-fiad-green">{item.source}</span>
                    <span className="text-xs text-fiad-gray-light flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(item.date).toLocaleDateString(isFr ? "fr-FR" : "en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </span>
                  </div>
                  <h3 className="font-medium text-fiad-navy group-hover:text-fiad-green transition-colors">
                    {isFr ? item.title : item.titleEn}
                  </h3>
                </div>
                <ExternalLink className="w-4 h-4 text-fiad-gray-light flex-shrink-0" />
              </div>
            ))}
          </div>

          {/* Contact presse */}
          <div className="bg-fiad-navy rounded-2xl p-8 text-center">
            <h3 className="font-display font-bold text-xl text-white mb-3">
              {isFr ? "Contact presse" : "Press contact"}
            </h3>
            <p className="text-white/70 mb-4">
              {isFr
                ? "Pour toute demande d'interview, de communiqué ou de couverture médiatique :"
                : "For interview requests, press releases or media coverage:"}
            </p>
            <a href="mailto:presse@fondation-fiad.org" className="text-fiad-gold hover:text-fiad-gold-light font-medium transition-colors">
              presse@fondation-fiad.org
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
