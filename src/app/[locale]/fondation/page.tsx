import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye, Target, Shield, Award, Users, Globe, Heart, Zap, Handshake } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr" ? "La Fondation — Vision, Mission & Valeurs" : "The Foundation — Vision, Mission & Values",
    description: locale === "fr"
      ? "Découvrez la vision, la mission et les valeurs de la Fondation Impact Afrique Durable."
      : "Discover the vision, mission and values of the Fondation Impact Afrique Durable.",
  };
}

export default async function FoundationPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "foundation" });
  const isFr = locale === "fr";

  const values = [
    { icon: Shield, key: "integrity", color: "text-blue-600 bg-blue-50" },
    { icon: Award, key: "excellence", color: "text-fiad-gold-dark bg-amber-50" },
    { icon: Zap, key: "impact", color: "text-fiad-green bg-green-50" },
    { icon: Users, key: "inclusion", color: "text-purple-600 bg-purple-50" },
    { icon: Globe, key: "sovereignty", color: "text-teal-600 bg-teal-50" },
    { icon: Handshake, key: "partnership", color: "text-rose-600 bg-rose-50" },
  ];

  return (
    <div className="pt-24">
      {/* Hero page */}
      <section className="bg-gradient-to-br from-fiad-navy to-fiad-navy-light py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fiad-gold/20 text-fiad-gold text-sm font-medium mb-6">
            FIAD
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-white/70 text-xl">{t("subtitle")}</p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-fiad-green/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-fiad-green" />
                </div>
                <h2 className="font-display font-bold text-3xl text-fiad-navy">{t("vision.title")}</h2>
              </div>
              <p className="text-fiad-gray leading-relaxed text-lg">{t("vision.content")}</p>
            </div>
            <div className="bg-fiad-cream rounded-3xl p-8 border-l-4 border-fiad-green">
              <blockquote className="font-display text-2xl text-fiad-navy italic font-medium leading-relaxed">
                &ldquo;{isFr ? "Bâtir aujourd'hui l'Afrique de demain." : "Building tomorrow's Africa today."}&rdquo;
              </blockquote>
              <p className="mt-4 text-fiad-gray-light text-sm">— Fondation Impact Afrique Durable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-fiad-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: isFr ? "Programmes" : "Programs", value: "35+" },
                  { label: isFr ? "Pays" : "Countries", value: "12" },
                  { label: isFr ? "Bénéficiaires" : "Beneficiaries", value: "50K+" },
                  { label: isFr ? "Partenaires" : "Partners", value: "120+" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                    <div className="font-display font-bold text-3xl text-fiad-green mb-1">{stat.value}</div>
                    <div className="text-fiad-gray-light text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-fiad-gold/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-fiad-gold-dark" />
                </div>
                <h2 className="font-display font-bold text-3xl text-fiad-navy">{t("mission.title")}</h2>
              </div>
              <p className="text-fiad-gray leading-relaxed text-lg">{t("mission.content")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-fiad-navy text-center mb-4">
            {t("values.title")}
          </h2>
          <p className="text-fiad-gray-light text-center mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Les principes fondamentaux qui guident chacune de nos actions"
              : "The fundamental principles guiding each of our actions"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, key, color }) => (
              <div key={key} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-lg text-fiad-navy mb-2">
                  {t(`values.${key}` as "values.integrity")}
                </h3>
                <p className="text-fiad-gray-light text-sm">
                  {t(`values.${key}Desc` as "values.integrityDesc")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liens vers sous-pages */}
      <section className="py-16 bg-fiad-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/fondation/histoire", label: isFr ? "Notre Histoire" : "Our History" },
              { href: "/fondation/gouvernance", label: isFr ? "Gouvernance" : "Governance" },
              { href: "/fondation/equipe", label: isFr ? "Notre Équipe" : "Our Team" },
            ].map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="flex items-center justify-between p-5 bg-white rounded-xl hover:bg-fiad-green hover:text-white group transition-all"
              >
                <span className="font-semibold text-fiad-navy group-hover:text-white transition-colors">
                  {item.label}
                </span>
                <ArrowRight className="w-5 h-5 text-fiad-gray-light group-hover:text-white transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
