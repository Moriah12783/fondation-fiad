export const FIAD_CONFIG = {
  name: "Fondation Impact Afrique Durable",
  shortName: "FIAD",
  slogan: "Bâtir aujourd'hui l'Afrique de demain",
  sloganEn: "Building tomorrow's Africa today",
  email: "contact@fondation-fiad.org",
  location: "Abidjan, Côte d'Ivoire",
  founding: "2024",
  socials: {
    linkedin: "https://linkedin.com/company/fondation-fiad",
    twitter: "https://twitter.com/fondation_fiad",
    facebook: "https://facebook.com/fondationfiad",
    youtube: "https://youtube.com/@fondationfiad",
  },
};

export const NAV_ITEMS = [
  {
    label: "La Fondation",
    labelEn: "The Foundation",
    href: "/fondation",
    children: [
      { label: "Vision & Mission", labelEn: "Vision & Mission", href: "/fondation" },
      { label: "Notre Histoire", labelEn: "Our History", href: "/fondation/histoire" },
      { label: "Gouvernance", labelEn: "Governance", href: "/fondation/gouvernance" },
      { label: "Notre Équipe", labelEn: "Our Team", href: "/fondation/equipe" },
    ],
  },
  { label: "Nos Actions", labelEn: "Our Actions", href: "/nos-actions" },
  { label: "Projets", labelEn: "Projects", href: "/projets" },
  { label: "Impact", labelEn: "Impact", href: "/impact" },
  { label: "Publications", labelEn: "Publications", href: "/publications" },
  { label: "Partenaires", labelEn: "Partners", href: "/partenaires" },
  { label: "Contact", labelEn: "Contact", href: "/contact" },
];

export const STRATEGIC_AXES = [
  {
    icon: "Leaf",
    title: "Développement Durable",
    titleEn: "Sustainable Development",
    description: "Promouvoir des pratiques durables pour préserver l'environnement africain.",
    descriptionEn: "Promoting sustainable practices to preserve the African environment.",
    color: "green",
  },
  {
    icon: "GraduationCap",
    title: "Éducation & Innovation",
    titleEn: "Education & Innovation",
    description: "Former les leaders de demain par l'éducation de qualité et l'innovation.",
    descriptionEn: "Training tomorrow's leaders through quality education and innovation.",
    color: "blue",
  },
  {
    icon: "Briefcase",
    title: "Entrepreneuriat",
    titleEn: "Entrepreneurship",
    description: "Accompagner les jeunes et les femmes dans la création d'entreprises.",
    descriptionEn: "Supporting youth and women in building businesses.",
    color: "gold",
  },
  {
    icon: "Users",
    title: "Inclusion Économique",
    titleEn: "Economic Inclusion",
    description: "Réduire les inégalités et favoriser l'accès aux opportunités économiques.",
    descriptionEn: "Reducing inequalities and expanding access to economic opportunities.",
    color: "purple",
  },
  {
    icon: "Globe",
    title: "Environnement & Climat",
    titleEn: "Environment & Climate",
    description: "Agir pour le climat et protéger les écosystèmes africains.",
    descriptionEn: "Taking action for climate and protecting African ecosystems.",
    color: "teal",
  },
  {
    icon: "Heart",
    title: "Impact Communautaire",
    titleEn: "Community Impact",
    description: "Renforcer les communautés locales par des initiatives à fort impact.",
    descriptionEn: "Strengthening local communities through high-impact initiatives.",
    color: "red",
  },
];

export const IMPACT_STATS = [
  { value: 50000, suffix: "+", label: "Bénéficiaires", labelEn: "Beneficiaries" },
  { value: 12, suffix: "", label: "Pays africains", labelEn: "African countries" },
  { value: 35, suffix: "+", label: "Projets actifs", labelEn: "Active projects" },
  { value: 120, suffix: "+", label: "Partenaires", labelEn: "Partners" },
];
