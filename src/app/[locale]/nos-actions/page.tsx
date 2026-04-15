import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr" ? "Nos Actions | FIAD" : "Our Actions | FIAD",
    description: locale === "fr"
      ? "Former, accompagner, autonomiser, transformer. Découvrez les 4 axes d'action de la FIAD."
      : "Train, support, empower, transform. Discover FIAD's 4 action pillars.",
  };
}

export default async function NosActionsPage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";

  const actions = isFr
    ? [
        {
          emoji: "🎓",
          number: "01",
          title: "Éducation & Innovation",
          hook: "Former, c'est ouvrir des portes.",
          description:
            "Nous donnons aux jeunes les compétences nécessaires pour naviguer dans un monde en mutation. Des bootcamps numériques aux programmes de leadership, chaque initiative vise à équiper la jeunesse africaine pour saisir les opportunités d'aujourd'hui et construire celles de demain.",
          pillars: ["Formation professionnelle", "Innovation numérique", "Leadership jeunesse"],
          bg: "bg-white",
          accent: "#1b6b3a",
          ctaHref: "/projets",
          cta: "Voir les projets éducation",
          reverse: false,
        },
        {
          emoji: "💼",
          number: "02",
          title: "Entrepreneuriat",
          hook: "Créer une activité, c'est créer une liberté.",
          description:
            "Nous accompagnons ceux qui veulent bâtir leur propre avenir. Jeunes entrepreneurs, femmes d'affaires, porteurs de projets : nous leur offrons les outils, le financement et le réseau pour transformer leurs idées en entreprises viables et durables.",
          pillars: ["Accompagnement 360°", "Accès au financement", "Réseau de mentors"],
          bg: "bg-[#f8f5f0]",
          accent: "#c9973a",
          ctaHref: "/projets",
          cta: "Voir les projets entrepreneuriat",
          reverse: true,
        },
        {
          emoji: "🌱",
          number: "03",
          title: "Environnement",
          hook: "Protéger aujourd'hui, c'est préserver demain.",
          description:
            "Nous agissons pour des pratiques durables et responsables. Face à la déforestation, au changement climatique et à la dégradation des écosystèmes, nous déployons des solutions concrètes : agroforesterie, énergies propres, agriculture durable.",
          pillars: ["Agroforesterie", "Énergies renouvelables", "Pratiques durables"],
          bg: "bg-[#1b6b3a]",
          accent: "#ffffff",
          ctaHref: "/projets",
          cta: "Voir les projets environnement",
          reverse: false,
          dark: true,
        },
        {
          emoji: "🤝",
          number: "04",
          title: "Inclusion Économique",
          hook: "Personne ne doit être laissé de côté.",
          description:
            "Nous œuvrons pour une économie plus inclusive. En réduisant les inégalités d'accès aux ressources, aux marchés et aux opportunités, nous travaillons à construire une Afrique où chaque individu, quelle que soit son origine, peut participer et prospérer.",
          pillars: ["Accès aux services", "Réduction des inégalités", "Autonomisation des femmes"],
          bg: "bg-[#f8f5f0]",
          accent: "#0f2a4a",
          ctaHref: "/projets",
          cta: "Voir les projets inclusion",
          reverse: true,
        },
      ]
    : [
        {
          emoji: "🎓",
          number: "01",
          title: "Education & Innovation",
          hook: "Training means opening doors.",
          description:
            "We give young people the skills they need to navigate a changing world. From digital bootcamps to leadership programs, each initiative aims to equip African youth to seize today's opportunities and build tomorrow's.",
          pillars: ["Professional training", "Digital innovation", "Youth leadership"],
          bg: "bg-white",
          accent: "#1b6b3a",
          ctaHref: "/projects",
          cta: "See education projects",
          reverse: false,
        },
        {
          emoji: "💼",
          number: "02",
          title: "Entrepreneurship",
          hook: "Building a business means building freedom.",
          description:
            "We support those who want to build their own future. Young entrepreneurs, businesswomen, project holders: we give them the tools, financing and network to turn their ideas into viable, sustainable businesses.",
          pillars: ["360° support", "Access to financing", "Mentor network"],
          bg: "bg-[#f8f5f0]",
          accent: "#c9973a",
          ctaHref: "/projects",
          cta: "See entrepreneurship projects",
          reverse: true,
        },
        {
          emoji: "🌱",
          number: "03",
          title: "Environment",
          hook: "Protecting today means preserving tomorrow.",
          description:
            "We act for sustainable and responsible practices. Facing deforestation, climate change and ecosystem degradation, we deploy concrete solutions: agroforestry, clean energy, sustainable agriculture.",
          pillars: ["Agroforestry", "Renewable energy", "Sustainable practices"],
          bg: "bg-[#1b6b3a]",
          accent: "#ffffff",
          ctaHref: "/projects",
          cta: "See environment projects",
          reverse: false,
          dark: true,
        },
        {
          emoji: "🤝",
          number: "04",
          title: "Economic Inclusion",
          hook: "No one should be left behind.",
          description:
            "We work for a more inclusive economy. By reducing inequalities in access to resources, markets and opportunities, we build an Africa where every individual, regardless of background, can participate and thrive.",
          pillars: ["Access to services", "Reducing inequalities", "Women's empowerment"],
          bg: "bg-[#f8f5f0]",
          accent: "#0f2a4a",
          ctaHref: "/projects",
          cta: "See inclusion projects",
          reverse: true,
        },
      ];

  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2a4a] to-[#1a4070] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9973a]/20 text-[#c9973a] text-sm font-medium mb-6">
            {isFr ? "Ce que nous faisons" : "What we do"}
          </div>
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {isFr ? "Nos Actions" : "Our Actions"}
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">
            {isFr
              ? "Nous ne faisons pas que lancer des projets. Nous construisons des trajectoires de transformation."
              : "We don't just launch projects. We build transformation pathways."}
          </p>
        </div>
      </section>

      {/* Sections alternées */}
      {actions.map((action, index) => (
        <section key={index} className={`py-24 ${action.bg}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${action.reverse ? "lg:grid-flow-dense" : ""}`}>

              {/* Contenu texte */}
              <div className={action.reverse ? "lg:col-start-2" : ""}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-5xl">{action.emoji}</span>
                  <span className={`text-6xl font-bold opacity-10 ${action.dark ? "text-white" : "text-[#0f2a4a]"}`}>
                    {action.number}
                  </span>
                </div>
                <h2 className={`font-bold text-3xl sm:text-4xl mb-4 ${action.dark ? "text-white" : "text-[#0f2a4a]"}`}>
                  {action.title}
                </h2>
                <p className={`text-2xl font-bold mb-6 ${action.dark ? "text-[#c9973a]" : ""}`}
                   style={!action.dark ? { color: action.accent } : {}}>
                  {action.hook}
                </p>
                <p className={`text-lg leading-relaxed mb-8 ${action.dark ? "text-white/80" : "text-[#6b7280]"}`}>
                  {action.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {action.pillars.map((pillar, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                        action.dark
                          ? "bg-white/10 text-white"
                          : "bg-[#0f2a4a]/5 text-[#0f2a4a]"
                      }`}
                    >
                      {pillar}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/${locale}${action.ctaHref}`}
                  className={`inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all ${
                    action.dark ? "text-[#c9973a]" : ""
                  }`}
                  style={!action.dark ? { color: action.accent } : {}}
                >
                  {action.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Visuel */}
              <div className={`${action.reverse ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div
                  className={`rounded-3xl h-72 lg:h-96 flex items-center justify-center relative overflow-hidden ${
                    action.dark ? "bg-white/10" : "bg-[#0f2a4a]/5"
                  }`}
                >
                  <span className="text-9xl opacity-20 select-none">{action.emoji}</span>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1.5 rounded-b-3xl"
                    style={{ backgroundColor: action.dark ? "#c9973a" : action.accent }}
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* CTA bas de page */}
      <section className="py-20 bg-[#0f2a4a] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-bold text-3xl sm:text-4xl mb-4">
            {isFr ? "Agissons ensemble" : "Let's act together"}
          </h2>
          <p className="text-white/70 text-lg mb-8">
            {isFr
              ? "Vous souhaitez soutenir l'une de nos actions ou proposer un partenariat ?"
              : "Want to support one of our actions or propose a partnership?"}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#c9973a] text-white rounded-xl font-semibold hover:bg-[#a07820] transition-colors"
            >
              {isFr ? "Nous contacter" : "Contact us"} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`/${locale}/projets`}
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              {isFr ? "Voir nos projets" : "See our projects"}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
