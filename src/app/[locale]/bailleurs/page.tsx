import type { Metadata } from "next";
import { ArrowRight, Download, Shield, BarChart3, FileText, Award } from "lucide-react";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Pour les Bailleurs | FIAD",
    description: "Informations stratégiques pour les bailleurs de fonds et partenaires financiers de la Fondation Impact Afrique Durable.",
  };
}

const PROBLEMS = [
  { stat: "600M", label: "d'Africains sans accès à l'électricité" },
  { stat: "250M", label: "d'enfants hors école en Afrique subsaharienne" },
  { stat: "60%", label: "de la population active dans l'économie informelle" },
  { stat: "2050", label: "l'Afrique représentera 26% de la population mondiale" },
];

const GUARANTEES = [
  {
    icon: Shield,
    title: "Gouvernance rigoureuse",
    desc: "Conseil d'administration indépendant, commissaires aux comptes certifiés, séparation des pouvoirs.",
  },
  {
    icon: BarChart3,
    title: "Suivi & Évaluation (M&E)",
    desc: "Système de monitoring en temps réel, indicateurs SMART, rapports trimestriels obligatoires.",
  },
  {
    icon: FileText,
    title: "Transparence financière",
    desc: "Comptes audités annuellement, allocation traçable, rapports d'impact publiés.",
  },
  {
    icon: Award,
    title: "Standards internationaux",
    desc: "Alignement sur les standards OCDE, ODD, et cadres des bailleurs majeurs (BM, UE, PNUD).",
  },
];

const OPPORTUNITIES = [
  {
    title: "Financement de programmes",
    amount: "50K – 500K€",
    desc: "Cofinancement de programmes thématiques sur 2-3 ans avec reporting complet.",
    color: "green",
  },
  {
    title: "Partenariat stratégique",
    amount: "Sur mesure",
    desc: "Co-conception de solutions innovantes, partage d'expertise et de réseaux.",
    color: "gold",
  },
  {
    title: "Fonds d'impact",
    amount: "500K – 2M€",
    desc: "Investissement dans notre fonds d'impact dédié à l'entrepreneuriat africain.",
    color: "navy",
  },
];

export default function BailleursPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-[#0f2a4a] text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-[#c9973a] blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-[#1b6b3a] blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-[#c9973a]/20 text-[#c9973a] text-sm font-medium mb-6 border border-[#c9973a]/30">
            Espace Bailleurs & Partenaires
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Pourquoi financer<br />
            <span className="text-[#c9973a]">la FIAD ?</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            L'Afrique est le continent du futur. Mais ce futur ne se construira pas sans investisseurs stratégiques, partenaires visionnaires et bailleurs engagés.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#c9973a] text-white rounded-lg font-semibold hover:bg-[#a07820] transition-colors">
              Devenir partenaire <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="#" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              <Download className="w-5 h-5" /> Dossier institutionnel
            </a>
          </div>
        </div>
      </section>

      {/* Problématique */}
      <section className="py-20 bg-[#f8f5f0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#c9973a] font-semibold text-sm uppercase tracking-wider">Le contexte</span>
            <h2 className="text-4xl font-bold text-[#0f2a4a] mt-2 mb-4">L'Afrique à un carrefour décisif</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Les défis sont immenses. Les opportunités le sont encore plus. L'heure est à l'action structurée.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PROBLEMS.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <div className="text-4xl font-bold text-[#c9973a] mb-2">{p.stat}</div>
                <p className="text-gray-600 text-sm leading-snug">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Théorie du changement */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#1b6b3a] font-semibold text-sm uppercase tracking-wider">Notre approche</span>
            <h2 className="text-4xl font-bold text-[#0f2a4a] mt-2 mb-4">Modèle d'impact — Théorie du changement</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Identification", desc: "Diagnostic terrain des besoins réels des communautés" },
              { step: "02", title: "Co-conception", desc: "Design des solutions avec les bénéficiaires" },
              { step: "03", title: "Déploiement", desc: "Mise en œuvre avec partenaires locaux certifiés" },
              { step: "04", title: "Mesure d'impact", desc: "Évaluation continue et amélioration des programmes" },
            ].map((s, i) => (
              <div key={i} className="relative">
                <div className="bg-[#f8f5f0] rounded-2xl p-6 h-full">
                  <div className="text-5xl font-bold text-[#c9973a]/20 mb-3">{s.step}</div>
                  <h3 className="font-bold text-[#0f2a4a] text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 w-6 h-6 bg-[#c9973a] rounded-full z-10 items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-20 bg-[#0f2a4a] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nos résultats à ce jour</h2>
            <p className="text-white/70 text-lg">Des indicateurs vérifiables, publiés avec transparence</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "+10 000", label: "Bénéficiaires directs", sub: "et 35 000 indirects" },
              { value: "15", label: "Projets déployés", sub: "dans 5 pays" },
              { value: "82%", label: "Taux de réussite", sub: "des programmes" },
              { value: "20+", label: "Partenaires actifs", sub: "dont 8 internationaux" },
            ].map((k, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-[#c9973a] mb-2">{k.value}</div>
                <div className="font-semibold text-white mb-1">{k.label}</div>
                <div className="text-white/50 text-sm">{k.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#1b6b3a] font-semibold text-sm uppercase tracking-wider">Nos engagements</span>
            <h2 className="text-4xl font-bold text-[#0f2a4a] mt-2 mb-4">Garanties pour vos investissements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous respectons les standards les plus exigeants pour garantir que chaque euro investi génère un impact maximal et traçable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GUARANTEES.map((g, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:border-[#1b6b3a]/30 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#1b6b3a]/10 flex items-center justify-center mb-4">
                  <g.icon className="w-6 h-6 text-[#1b6b3a]" />
                </div>
                <h3 className="font-bold text-[#0f2a4a] mb-2">{g.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunités de financement */}
      <section className="py-20 bg-[#f8f5f0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#c9973a] font-semibold text-sm uppercase tracking-wider">Collaborer avec nous</span>
            <h2 className="text-4xl font-bold text-[#0f2a4a] mt-2 mb-4">Opportunités de financement</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OPPORTUNITIES.map((o, i) => (
              <div key={i} className={`rounded-2xl p-8 text-white ${
                o.color === "green" ? "bg-[#1b6b3a]" : o.color === "gold" ? "bg-[#c9973a]" : "bg-[#0f2a4a]"
              }`}>
                <div className="text-2xl font-bold mb-1">{o.amount}</div>
                <h3 className="text-xl font-bold mb-3">{o.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">{o.desc}</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-[#1b6b3a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Construisons ensemble l'Afrique de demain</h2>
          <p className="text-white/80 text-lg mb-8">
            Notre équipe est disponible pour discuter de toute opportunité de partenariat ou de financement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#c9973a] text-white rounded-lg font-semibold hover:bg-[#a07820] transition-colors">
              Prendre contact <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/transparence" className="inline-flex items-center gap-2 px-8 py-4 border border-white/40 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Voir notre transparence
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
