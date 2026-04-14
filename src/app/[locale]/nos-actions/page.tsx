import type { Metadata } from "next";
import { STRATEGIC_AXES } from "@/lib/constants";
import { Leaf, GraduationCap, Briefcase, Users, Globe, Heart } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr" ? "Nos Actions" : "Our Actions",
  };
}

const ICONS: Record<string, React.ElementType> = { Leaf, GraduationCap, Briefcase, Users, Globe, Heart };

export default async function NosActionsPage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";

  return (
    <div className="pt-24">
      <section className="bg-gradient-to-br from-fiad-navy to-fiad-navy-light py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            {isFr ? "Nos Actions" : "Our Actions"}
          </h1>
          <p className="text-white/70 text-xl">
            {isFr
              ? "Six axes stratégiques pour transformer durablement l'Afrique"
              : "Six strategic pillars to sustainably transform Africa"}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {STRATEGIC_AXES.map((axis, index) => {
              const Icon = ICONS[axis.icon];
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}>
                  <div className={!isEven ? "lg:col-start-2" : ""}>
                    <div className="w-14 h-14 rounded-2xl bg-fiad-green/10 flex items-center justify-center mb-6">
                      {Icon && <Icon className="w-7 h-7 text-fiad-green" />}
                    </div>
                    <h2 className="font-display font-bold text-3xl text-fiad-navy mb-4">
                      {isFr ? axis.title : axis.titleEn}
                    </h2>
                    <p className="text-fiad-gray leading-relaxed text-lg">
                      {isFr ? axis.description : axis.descriptionEn}
                    </p>
                  </div>
                  <div className={`bg-fiad-cream rounded-3xl h-64 flex items-center justify-center ${!isEven ? "lg:col-start-1" : ""}`}>
                    {Icon && <Icon className="w-24 h-24 text-fiad-green/20" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
