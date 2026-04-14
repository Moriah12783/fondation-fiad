import type { Metadata } from "next";
import { Shield, FileText, Users, BarChart3 } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr" ? "Gouvernance" : "Governance",
  };
}

export default async function GouvernancePage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";

  return (
    <div className="pt-24">
      <section className="bg-gradient-to-br from-fiad-navy to-fiad-navy-light py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            {isFr ? "Gouvernance" : "Governance"}
          </h1>
          <p className="text-white/70 text-xl">
            {isFr
              ? "Transparence, responsabilité et excellence dans notre gestion"
              : "Transparency, accountability and excellence in our management"}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Principes */}
          <h2 className="font-display font-bold text-3xl text-fiad-navy text-center mb-12">
            {isFr ? "Nos principes de gouvernance" : "Our governance principles"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                icon: Shield,
                title: isFr ? "Transparence" : "Transparency",
                desc: isFr ? "Comptes publics, rapports annuels accessibles à tous." : "Public accounts, annual reports accessible to all.",
              },
              {
                icon: FileText,
                title: isFr ? "Conformité" : "Compliance",
                desc: isFr ? "Respect des lois nationales et standards internationaux ONG." : "Compliance with national laws and international NGO standards.",
              },
              {
                icon: Users,
                title: isFr ? "Collégialité" : "Collegiality",
                desc: isFr ? "Décisions prises en Conseil d'Administration pluriel." : "Decisions made by a plural Board of Directors.",
              },
              {
                icon: BarChart3,
                title: isFr ? "Redevabilité" : "Accountability",
                desc: isFr ? "Évaluation indépendante de tous nos programmes." : "Independent evaluation of all our programs.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all text-center">
                <div className="w-12 h-12 rounded-xl bg-fiad-green/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-fiad-green" />
                </div>
                <h3 className="font-display font-semibold text-fiad-navy mb-2">{title}</h3>
                <p className="text-fiad-gray-light text-sm">{desc}</p>
              </div>
            ))}
          </div>

          {/* Organes */}
          <h2 className="font-display font-bold text-3xl text-fiad-navy text-center mb-8">
            {isFr ? "Organes de gouvernance" : "Governance bodies"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: isFr ? "Conseil d'Administration" : "Board of Directors",
                desc: isFr ? "Organe suprême de décision. Définit la stratégie et valide les budgets. Composé de membres indépendants." : "Supreme decision-making body. Defines strategy and approves budgets. Composed of independent members.",
                members: isFr ? "9 administrateurs" : "9 directors",
              },
              {
                title: isFr ? "Direction Exécutive" : "Executive Management",
                desc: isFr ? "Met en œuvre la stratégie définie par le CA. Gère les opérations quotidiennes et les programmes." : "Implements the strategy defined by the Board. Manages daily operations and programs.",
                members: isFr ? "Directeur Général + équipe" : "CEO + team",
              },
              {
                title: isFr ? "Comité d'Audit" : "Audit Committee",
                desc: isFr ? "Contrôle interne et externe des finances. Garant de la transparence et de la bonne utilisation des fonds." : "Internal and external financial oversight. Guarantor of transparency and proper use of funds.",
                members: isFr ? "3 membres indépendants" : "3 independent members",
              },
            ].map((organ) => (
              <div key={organ.title} className="bg-fiad-cream rounded-2xl p-6">
                <h3 className="font-display font-bold text-xl text-fiad-navy mb-3">{organ.title}</h3>
                <p className="text-fiad-gray text-sm leading-relaxed mb-4">{organ.desc}</p>
                <div className="inline-block px-3 py-1 bg-fiad-green/10 text-fiad-green rounded-full text-xs font-medium">
                  {organ.members}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
