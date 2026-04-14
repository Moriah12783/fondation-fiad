import type { Metadata } from "next";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr" ? "Nos Projets" : "Our Projects",
  };
}

const PROJECTS = [
  {
    slug: "agrofutur-cote-divoire",
    title: "AgroFutur Côte d'Ivoire",
    location: "Abidjan, Côte d'Ivoire",
    category: "Développement durable",
    categoryEn: "Sustainable Development",
    description: "Programme d'agriculture durable pour 5 000 agriculteurs des régions rurales, intégrant techniques modernes et gestion durable des ressources.",
    descriptionEn: "Sustainable agriculture program for 5,000 rural farmers, integrating modern techniques and sustainable resource management.",
    year: "2024",
    status: "active",
    beneficiaries: "5 000",
    color: "green",
  },
  {
    slug: "educode-africa",
    title: "EduCode Africa",
    location: "Dakar, Sénégal",
    category: "Éducation & Innovation",
    categoryEn: "Education & Innovation",
    description: "Formation au numérique et au codage pour 2 000 jeunes défavorisés, avec insertion professionnelle dans le secteur technologique.",
    descriptionEn: "Digital and coding training for 2,000 disadvantaged youth, with professional integration in the technology sector.",
    year: "2023",
    status: "active",
    beneficiaries: "2 000",
    color: "blue",
  },
  {
    slug: "femmes-entrepreneures",
    title: "Femmes Entrepreneures",
    location: "Accra, Ghana",
    category: "Entrepreneuriat",
    categoryEn: "Entrepreneurship",
    description: "Accompagnement de 500 femmes entrepreneuses avec accès au financement, formation et réseau de mentorat professionnel.",
    descriptionEn: "Support for 500 women entrepreneurs with access to financing, training and professional mentoring network.",
    year: "2024",
    status: "active",
    beneficiaries: "500",
    color: "gold",
  },
  {
    slug: "eau-propre-sahel",
    title: "Eau Propre Sahel",
    location: "Ouagadougou, Burkina Faso",
    category: "Environnement & Climat",
    categoryEn: "Environment & Climate",
    description: "Accès à l'eau potable pour 15 000 habitants de zones rurales semi-arides grâce à des technologies adaptées.",
    descriptionEn: "Access to clean water for 15,000 inhabitants of semi-arid rural areas through adapted technologies.",
    year: "2023",
    status: "completed",
    beneficiaries: "15 000",
    color: "teal",
  },
  {
    slug: "sante-communautaire",
    title: "Santé Communautaire+",
    location: "Cotonou, Bénin",
    category: "Santé",
    categoryEn: "Health",
    description: "Déploiement de cliniques mobiles et formation d'agents de santé communautaires dans 50 villages.",
    descriptionEn: "Deployment of mobile clinics and training of community health workers in 50 villages.",
    year: "2024",
    status: "active",
    beneficiaries: "8 000",
    color: "red",
  },
  {
    slug: "gouvernance-locale",
    title: "Gouvernance Locale Digitale",
    location: "Lomé, Togo",
    category: "Gouvernance",
    categoryEn: "Governance",
    description: "Numérisation des services publics locaux et formation des agents municipaux pour une meilleure efficacité administrative.",
    descriptionEn: "Digitization of local public services and training of municipal officers for better administrative efficiency.",
    year: "2025",
    status: "active",
    beneficiaries: "20 000",
    color: "purple",
  },
];

const COLOR_CLASSES: Record<string, string> = {
  green: "bg-green-50 text-fiad-green border-green-200",
  blue: "bg-blue-50 text-blue-600 border-blue-200",
  gold: "bg-amber-50 text-amber-700 border-amber-200",
  teal: "bg-teal-50 text-teal-600 border-teal-200",
  red: "bg-rose-50 text-rose-600 border-rose-200",
  purple: "bg-purple-50 text-purple-600 border-purple-200",
};

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";

  return (
    <div className="pt-24">
      <section className="bg-gradient-to-br from-fiad-navy to-fiad-navy-light py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            {isFr ? "Nos Projets" : "Our Projects"}
          </h1>
          <p className="text-white/70 text-xl">
            {isFr
              ? "Des initiatives concrètes déployées sur le terrain à travers l'Afrique"
              : "Concrete initiatives deployed across Africa"}
          </p>
        </div>
      </section>

      <section className="py-20 bg-fiad-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => {
              const colorClass = COLOR_CLASSES[project.color];
              return (
                <article key={project.slug} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-fiad-green to-fiad-green-light h-2" />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${colorClass}`}>
                        {isFr ? project.category : project.categoryEn}
                      </span>
                      <span className={`flex items-center gap-1 text-xs font-medium ${project.status === "active" ? "text-fiad-green" : "text-fiad-gray-light"}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${project.status === "active" ? "bg-fiad-green animate-pulse" : "bg-gray-400"}`} />
                        {project.status === "active" ? (isFr ? "En cours" : "Active") : (isFr ? "Terminé" : "Completed")}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-fiad-navy mb-3 group-hover:text-fiad-green transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-fiad-gray-light text-sm leading-relaxed mb-5">
                      {isFr ? project.description : project.descriptionEn}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-fiad-gray-light mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.year}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <div className="text-xs text-fiad-gray-light">{isFr ? "Bénéficiaires" : "Beneficiaries"}</div>
                        <div className="font-display font-bold text-fiad-green">{project.beneficiaries}</div>
                      </div>
                      <a href={`/${locale}/projets/${project.slug}`}
                        className="inline-flex items-center gap-1 text-sm text-fiad-green font-medium hover:gap-2 transition-all">
                        {isFr ? "Détails" : "Details"} <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
