import Link from "next/link";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

interface Project {
  title: string;
  location: string;
  category: string;
  description: string;
  year: string;
  status: "active" | "completed";
  color: string;
}

const FEATURED_PROJECTS: Project[] = [
  {
    title: "AgroFutur Côte d'Ivoire",
    location: "Abidjan, Côte d'Ivoire",
    category: "Développement durable",
    description: "Programme d'agriculture durable pour 5 000 agriculteurs des régions rurales, intégrant techniques modernes et gestion durable des ressources.",
    year: "2024",
    status: "active",
    color: "green",
  },
  {
    title: "EduCode Africa",
    location: "Dakar, Sénégal",
    category: "Éducation & Innovation",
    description: "Formation au numérique et au codage pour 2 000 jeunes défavorisés, avec insertion professionnelle dans le secteur technologique.",
    year: "2023",
    status: "active",
    color: "blue",
  },
  {
    title: "Femmes Entrepreneures",
    location: "Accra, Ghana",
    category: "Entrepreneuriat",
    description: "Accompagnement de 500 femmes entrepreneuses avec accès au financement, formation et réseau de mentorat professionnel.",
    year: "2024",
    status: "active",
    color: "gold",
  },
];

const COLOR_CLASSES: Record<string, { bg: string; text: string; badge: string }> = {
  green: { bg: "from-fiad-green/10 to-fiad-green/5", text: "text-fiad-green", badge: "bg-fiad-green/10 text-fiad-green" },
  blue: { bg: "from-blue-500/10 to-blue-500/5", text: "text-blue-600", badge: "bg-blue-100 text-blue-600" },
  gold: { bg: "from-fiad-gold/10 to-fiad-gold/5", text: "text-fiad-gold-dark", badge: "bg-fiad-gold/10 text-fiad-gold-dark" },
};

interface ProjectsSectionProps {
  locale: string;
  messages: {
    tag: string;
    title: string;
    subtitle: string;
    viewAll: string;
    learnMore: string;
  };
}

export default function ProjectsSection({ locale, messages }: ProjectsSectionProps) {
  const localePath = (href: string) => `/${locale}${href}`;

  return (
    <section className="py-24 bg-fiad-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fiad-gold/10 text-fiad-gold-dark text-sm font-medium mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-fiad-gold" />
              {messages.tag}
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-fiad-navy leading-tight">
              {messages.title}
            </h2>
          </div>
          <Link
            href={localePath("/projets")}
            className="inline-flex items-center gap-2 text-fiad-green font-semibold whitespace-nowrap hover:gap-3 transition-all"
          >
            {messages.viewAll}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-fiad-gray-light text-lg max-w-2xl mb-12">
          {messages.subtitle}
        </p>

        {/* Grille projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, index) => {
            const colors = COLOR_CLASSES[project.color];
            return (
              <article
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-fiad-green/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header coloré */}
                <div className={`bg-gradient-to-br ${colors.bg} h-3 w-full`} />

                <div className="p-6">
                  {/* Badge catégorie */}
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${colors.badge}`}>
                    {project.category}
                  </span>

                  <h3 className="font-display font-bold text-xl text-fiad-navy mb-3 group-hover:text-fiad-green transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-fiad-gray-light text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-xs text-fiad-gray-light">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {project.location.split(",")[0]}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-fiad-green animate-pulse" />
                      <span className="text-xs text-fiad-green font-medium">
                        {locale === "fr" ? "En cours" : "Active"}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
