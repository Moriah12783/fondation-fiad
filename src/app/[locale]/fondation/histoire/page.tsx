import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr" ? "Notre Histoire" : "Our History",
  };
}

export default async function HistoirePage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";

  const milestones = [
    {
      year: "2022",
      title: isFr ? "Naissance de l'idée" : "Birth of the idea",
      description: isFr
        ? "Un groupe de professionnels africains réunis autour d'une vision commune : créer une structure d'impact continental."
        : "A group of African professionals united around a common vision: creating a continental impact structure.",
    },
    {
      year: "2023",
      title: isFr ? "Fondation officielle" : "Official founding",
      description: isFr
        ? "Création officielle de la FIAD à Abidjan, Côte d'Ivoire. Définition des statuts et de la gouvernance."
        : "Official creation of FIAD in Abidjan, Côte d'Ivoire. Definition of bylaws and governance.",
    },
    {
      year: "2024",
      title: isFr ? "Premiers programmes" : "First programs",
      description: isFr
        ? "Lancement des premiers projets pilotes dans 3 pays africains. Plus de 5 000 bénéficiaires directs."
        : "Launch of first pilot projects in 3 African countries. More than 5,000 direct beneficiaries.",
    },
    {
      year: "2025",
      title: isFr ? "Expansion continentale" : "Continental expansion",
      description: isFr
        ? "Extension à 12 pays. Signature de partenariats stratégiques avec des organisations internationales."
        : "Expansion to 12 countries. Signing of strategic partnerships with international organizations.",
    },
    {
      year: "2026",
      title: isFr ? "Vision 2030" : "Vision 2030",
      description: isFr
        ? "Lancement de la stratégie FIAD 2030 : 100 projets, 500 000 bénéficiaires, présence dans 30 pays africains."
        : "Launch of FIAD 2030 strategy: 100 projects, 500,000 beneficiaries, presence in 30 African countries.",
    },
  ];

  return (
    <div className="pt-24">
      <section className="bg-gradient-to-br from-fiad-navy to-fiad-navy-light py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            {isFr ? "Notre Histoire" : "Our History"}
          </h1>
          <p className="text-white/70 text-xl">
            {isFr ? "Une trajectoire fondée sur la conviction et l'impact" : "A trajectory built on conviction and impact"}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Ligne de temps */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-fiad-cream-dark" />

            <div className="space-y-12">
              {milestones.map((m, index) => (
                <div key={index} className="relative flex gap-8">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-fiad-green flex items-center justify-center text-white font-display font-bold text-sm z-10 relative">
                      {m.year}
                    </div>
                  </div>
                  <div className="pb-8">
                    <h3 className="font-display font-bold text-xl text-fiad-navy mb-2">{m.title}</h3>
                    <p className="text-fiad-gray leading-relaxed">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
