import { MetadataRoute } from "next";

const BASE_URL = "https://fondation-fiad.org";

const LOCALES = ["fr", "en"] as const;

// Routes statiques avec leurs priorités SEO
const ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/fondation", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/fondation/histoire", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/fondation/gouvernance", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/fondation/equipe", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/nos-actions", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/projets", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/impact", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/publications", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/partenaires", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/bailleurs", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/transparence", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/impliquer", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/medias", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of ROUTES) {
    // Entrée principale (fr)
    entries.push({
      url: `${BASE_URL}/fr${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          fr: `${BASE_URL}/fr${route.path}`,
          en: `${BASE_URL}/en${route.path}`,
        },
      },
    });
    // Entrée EN
    entries.push({
      url: `${BASE_URL}/en${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority * 0.9,
      alternates: {
        languages: {
          fr: `${BASE_URL}/fr${route.path}`,
          en: `${BASE_URL}/en${route.path}`,
        },
      },
    });
  }

  return entries;
}
