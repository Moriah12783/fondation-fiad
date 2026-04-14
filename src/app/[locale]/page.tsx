import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import MissionSection from "@/components/sections/MissionSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CtaSection from "@/components/sections/CtaSection";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr"
      ? "Fondation Impact Afrique Durable — Bâtir l'Afrique de demain"
      : "Fondation Impact Afrique Durable — Building tomorrow's Africa",
    description: locale === "fr"
      ? "La FIAD est une fondation africaine engagée dans le développement durable, l'innovation sociale et l'inclusion économique."
      : "FIAD is an African foundation committed to sustainable development, social innovation and economic inclusion.",
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const tHero = await getTranslations({ locale, namespace: "hero" });
  const tStats = await getTranslations({ locale, namespace: "stats" });
  const tMission = await getTranslations({ locale, namespace: "mission" });
  const tProjects = await getTranslations({ locale, namespace: "projects" });
  const tCta = await getTranslations({ locale, namespace: "cta" });

  return (
    <>
      <HeroSection
        locale={locale}
        messages={{
          tagline: tHero("tagline"),
          title: tHero("title"),
          titleAccent: tHero("titleAccent"),
          description: tHero("description"),
          ctaPrimary: tHero("ctaPrimary"),
          ctaSecondary: tHero("ctaSecondary"),
          scrollDown: tHero("scrollDown"),
        }}
      />
      <StatsSection
        locale={locale}
        messages={{
          title: tStats("title"),
          subtitle: tStats("subtitle"),
          beneficiaries: tStats("beneficiaries"),
          countries: tStats("countries"),
          projects: tStats("projects"),
          partners: tStats("partners"),
        }}
      />
      <MissionSection
        locale={locale}
        messages={{
          tag: tMission("tag"),
          title: tMission("title"),
          description: tMission("description"),
          axes: tMission("axes"),
          learnMore: tMission("learnMore"),
        }}
      />
      <ProjectsSection
        locale={locale}
        messages={{
          tag: tProjects("tag"),
          title: tProjects("title"),
          subtitle: tProjects("subtitle"),
          viewAll: tProjects("viewAll"),
          learnMore: tProjects("learnMore"),
        }}
      />
      <CtaSection
        locale={locale}
        messages={{
          title: tCta("title"),
          description: tCta("description"),
          primary: tCta("primary"),
          secondary: tCta("secondary"),
        }}
      />
    </>
  );
}
