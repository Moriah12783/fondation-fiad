import { FIAD_CONFIG } from "@/lib/constants";

/**
 * JSON-LD Schema.org pour la FIAD.
 * Injecté dans le <head> via le layout locale.
 * Améliore le référencement institutionnel et la crédibilité
 * auprès des moteurs de recherche (Google Knowledge Panel).
 */
export default function JsonLd({ locale }: { locale: string }) {
  const isFr = locale === "fr";
  const BASE_URL = "https://fondation-fiad.org";

  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${BASE_URL}/#organization`,
    name: FIAD_CONFIG.name,
    alternateName: FIAD_CONFIG.shortName,
    description: isFr
      ? "La Fondation Impact Afrique Durable (FIAD) œuvre pour un développement africain souverain, inclusif et durable — éducation, entrepreneuriat, environnement, inclusion économique."
      : "Fondation Impact Afrique Durable (FIAD) works for sovereign, inclusive and sustainable African development — education, entrepreneurship, environment, economic inclusion.",
    url: `${BASE_URL}/${locale}`,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/logo.png`,
    },
    image: `${BASE_URL}/opengraph-image`,
    foundingDate: FIAD_CONFIG.founding,
    foundingLocation: {
      "@type": "Place",
      name: "Abidjan, Côte d'Ivoire",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Abidjan",
        addressCountry: "CI",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abidjan",
      addressCountry: "CI",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: FIAD_CONFIG.email,
      contactType: "General Inquiry",
      availableLanguage: ["French", "English"],
    },
    sameAs: [
      FIAD_CONFIG.socials.linkedin,
      FIAD_CONFIG.socials.twitter,
      FIAD_CONFIG.socials.facebook,
      FIAD_CONFIG.socials.youtube,
    ],
    areaServed: {
      "@type": "GeoShape",
      name: "Afrique de l'Ouest / West Africa",
    },
    knowsAbout: [
      "Développement durable",
      "Innovation sociale",
      "Entrepreneuriat africain",
      "Éducation numérique",
      "Inclusion économique",
      "Objectifs de développement durable (ODD)",
    ],
    nonprofitStatus: "Nonprofit501c3",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
