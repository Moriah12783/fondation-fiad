import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  pathnames: {
    "/": "/",
    "/fondation": { fr: "/fondation", en: "/foundation" },
    "/fondation/histoire": { fr: "/fondation/histoire", en: "/foundation/history" },
    "/fondation/gouvernance": { fr: "/fondation/gouvernance", en: "/foundation/governance" },
    "/fondation/equipe": { fr: "/fondation/equipe", en: "/foundation/team" },
    "/nos-actions": { fr: "/nos-actions", en: "/our-actions" },
    "/projets": { fr: "/projets", en: "/projects" },
    "/projets/[slug]": { fr: "/projets/[slug]", en: "/projects/[slug]" },
    "/impact": "/impact",
    "/publications": "/publications",
    "/partenaires": { fr: "/partenaires", en: "/partners" },
    "/impliquer": { fr: "/impliquer", en: "/get-involved" },
    "/medias": { fr: "/medias", en: "/media" },
    "/contact": "/contact",
    "/legal/mentions-legales": { fr: "/legal/mentions-legales", en: "/legal/legal-notice" },
    "/legal/politique-confidentialite": {
      fr: "/legal/politique-confidentialite",
      en: "/legal/privacy-policy",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
