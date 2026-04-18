import type { Metadata } from "next";
import { Target } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  return {
    title: isFr ? "Notre Histoire" : "Our History",
    description: isFr
      ? "La genèse et la trajectoire de la Fondation Impact Afrique Durable — de l'idée fondatrice à la vision 2030."
      : "The genesis and trajectory of Fondation Impact Afrique Durable — from founding idea to the 2030 vision.",
  };
}

export default async function HistoirePage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";

  // Milestones structurés en 3 phases : passé, présent, vision
  const milestones = [
    {
      year: "2024",
      phase: "past" as const,
      title: isFr ? "Naissance de l'idée" : "Birth of the idea",
      description: isFr
        ? "Un groupe de professionnels africains se réunit autour d'une conviction commune : créer une structure d'impact continental, portée par des Africains, pour l'Afrique."
        : "A group of African professionals unite around a common conviction: creating a continental impact structure, led by Africans, for Africa.",
    },
    {
      year: "2025",
      phase: "past" as const,
      title: isFr ? "Structuration juridique" : "Legal structuring",
      description: isFr
        ? "Rédaction des statuts, définition de la gouvernance, constitution du dossier de reconnaissance officielle. La FIAD se dote d'un cadre institutionnel rigoureux."
        : "Drafting of bylaws, definition of governance, preparation of the official recognition file. FIAD equips itself with a rigorous institutional framework.",
    },
    {
      year: "2026",
      phase: "current" as const,
      title: isFr ? "Enregistrement officiel" : "Official registration",
      description: isFr
        ? "Dépôt du dossier de reconnaissance auprès des autorités compétentes. Lancement des premières activités et des partenariats fondateurs. La FIAD entre en opération."
        : "Submission of the recognition file to the relevant authorities. Launch of first activities and founding partnerships. FIAD becomes operational.",
    },
    {
      year: "2027–2028",
      phase: "vision" as const,
      title: isFr ? "Premiers programmes" : "First programs",
      description: isFr
        ? "Déploiement des premiers projets pilotes dans 3 pays d'Afrique de l'Ouest. Objectif : 5 000 bénéficiaires directs, premières données d'impact publiées."
        : "Deployment of first pilot projects in 3 West African countries. Target: 5,000 direct beneficiaries, first impact data published.",
    },
    {
      year: "2030",
      phase: "vision" as const,
      title: isFr ? "Vision 2030" : "Vision 2030",
      description: isFr
        ? "100 projets déployés, 500 000 bénéficiaires, présence dans 15 pays africains. La FIAD devient une fondation continentale de référence reconnue par les bailleurs internationaux."
        : "100 projects deployed, 500,000 beneficiaries, presence in 15 African countries. FIAD becomes a reference continental foundation recognized by international donors.",
    },
  ];

  const phaseLabel = {
    past: { fr: "Accompli", en: "Achieved", color: "bg-fiad-green text-white" },
    current: { fr: "En cours", en: "In progress", color: "bg-fiad-gold text-white" },
    vision: { fr: "Vision", en: "Vision", color: "bg-fiad-navy/20 text-fiad-navy" },
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-fiad-navy to-fiad-navy-light py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            {isFr ? "Notre Histoire" : "Our History"}
          </h1>
          <p className="text-white/70 text-xl">
            {isFr
              ? "Une trajectoire fondée sur la conviction et l'ambition de transformer l'Afrique"
              : "A trajectory built on conviction and the ambition to transform Africa"}
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Légende */}
          <div className="flex flex-wrap gap-3 mb-14 justify-center">
            {(["past", "current", "vision"] as const).map((phase) => (
              <span key={phase} className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold ${phaseLabel[phase].color}`}>
                <span className="w-2 h-2 rounded-full bg-current opacity-60" />
                {isFr ? phaseLabel[phase].fr : phaseLabel[phase].en}
              </span>
            ))}
          </div>

          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-100" />

            <div className="space-y-10">
              {milestones.map((m, index) => {
                const pl = phaseLabel[m.phase];
                const bulletColor =
                  m.phase === "past" ? "bg-fiad-green" :
                  m.phase === "current" ? "bg-fiad-gold" :
                  "bg-gray-300";

                return (
                  <div key={index} className="relative flex gap-8">
                    {/* Bullet */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full ${bulletColor} flex items-center justify-center z-10 relative`}>
                        {m.phase === "vision" ? (
                          <Target className="w-6 h-6 text-white/60" />
                        ) : (
                          <span className="font-display font-bold text-white text-xs text-center leading-tight px-1">
                            {m.year}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className={`pb-6 flex-1 ${m.phase === "vision" ? "opacity-60" : ""}`}>
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="font-display font-bold text-xl text-fiad-navy">{m.title}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-fiad-gray-light font-medium">{m.year}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${pl.color}`}>
                            {isFr ? pl.fr : pl.en}
                          </span>
                        </div>
                      </div>
                      <p className="text-fiad-gray leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
