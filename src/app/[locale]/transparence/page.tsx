import type { Metadata } from "next";
import { CheckCircle, BarChart3, FileText, Eye } from "lucide-react";
import DownloadButton from "@/components/ui/DownloadButton";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Transparence | FIAD",
    description: "Engagement de transparence de la Fondation Impact Afrique Durable — gouvernance, finances, impact.",
  };
}

const BUDGET_ALLOCATION = [
  { label: "Programmes & Actions terrain", percent: 72, color: "#1b6b3a" },
  { label: "Renforcement des capacités", percent: 12, color: "#c9973a" },
  { label: "Administration & Gouvernance", percent: 10, color: "#0f2a4a" },
  { label: "Communication & Plaidoyer", percent: 6, color: "#6b7280" },
];

const ETHICS = [
  "Indépendance totale vis-à-vis des pouvoirs politiques",
  "Parité et diversité dans les organes de gouvernance",
  "Politique de lutte contre la corruption et les conflits d'intérêts",
  "Protection des données des bénéficiaires (RGPD)",
  "Charte éthique signée par tous les collaborateurs",
  "Mécanisme de plainte accessible aux bénéficiaires",
];

const DOCS = [
  { title: "Rapport d'activité 2024", type: "PDF", date: "Jan 2025", href: undefined },
  { title: "Rapport financier 2024", type: "PDF", date: "Jan 2025", href: undefined },
  { title: "Statuts de la fondation", type: "PDF", date: "2024", href: "/docs/statuts-fiad.pdf" },
  { title: "Politique de gouvernance", type: "PDF", date: "Mar 2024", href: undefined },
  { title: "Méthodologie d'impact (M&E)", type: "PDF", date: "Avr 2024", href: undefined },
  { title: "Charte éthique", type: "PDF", date: "Jan 2024", href: undefined },
];

export default function TransparencePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#f8f5f0] py-24 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-[#1b6b3a]/10 text-[#1b6b3a] text-sm font-medium mb-6">
              Transparence & Redevabilité
            </span>
            <h1 className="text-5xl font-bold text-[#0f2a4a] mb-6 leading-tight">
              Nous rendons compte.<br />
              <span className="text-[#1b6b3a]">C'est notre engagement.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              La confiance se construit par la transparence. Retrouvez ici l'intégralité de nos engagements, nos données financières et nos résultats d'impact.
            </p>
          </div>
        </div>
      </section>

      {/* Indicateurs clés de redevabilité */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Eye, value: "100%", label: "des fonds traçables", color: "green" },
              { icon: BarChart3, value: "72%", label: "au terrain direct", color: "gold" },
              { icon: FileText, value: "Annuel", label: "audit indépendant", color: "navy" },
              { icon: CheckCircle, value: "A+", label: "note de transparence", color: "green" },
            ].map((k, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-[#f8f5f0]">
                <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                  k.color === "green" ? "bg-[#1b6b3a]/10" : k.color === "gold" ? "bg-[#c9973a]/10" : "bg-[#0f2a4a]/10"
                }`}>
                  <k.icon className={`w-6 h-6 ${
                    k.color === "green" ? "text-[#1b6b3a]" : k.color === "gold" ? "text-[#c9973a]" : "text-[#0f2a4a]"
                  }`} />
                </div>
                <div className="text-3xl font-bold text-[#0f2a4a] mb-1">{k.value}</div>
                <div className="text-gray-600 text-sm">{k.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Allocation des fonds */}
      <section className="py-20 bg-[#f8f5f0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#1b6b3a] font-semibold text-sm uppercase tracking-wider">Finances</span>
            <h2 className="text-4xl font-bold text-[#0f2a4a] mt-2 mb-4">Allocation des fonds</h2>
            <p className="text-gray-600">Comment chaque euro est utilisé</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {BUDGET_ALLOCATION.map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-gray-700">{item.label}</span>
                  <span className="font-bold" style={{ color: item.color }}>{item.percent}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${item.percent}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            * Données basées sur le rapport financier 2024. Audit réalisé par un cabinet indépendant.
          </p>
        </div>
      </section>

      {/* Méthodologie M&E */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#c9973a] font-semibold text-sm uppercase tracking-wider">Suivi & Évaluation</span>
              <h2 className="text-4xl font-bold text-[#0f2a4a] mt-2 mb-6">Notre méthodologie M&E</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Chaque programme est suivi selon un cadre de résultats rigoureux. Nous mesurons l'impact à trois niveaux : outputs (réalisations), outcomes (effets) et impact (transformations durables).
              </p>
              <div className="space-y-4">
                {[
                  "Indicateurs SMART définis avant chaque programme",
                  "Collecte de données trimestrielle sur le terrain",
                  "Évaluation mi-parcours et finale par experts indépendants",
                  "Publication des résultats — bons et moins bons",
                  "Apprentissage organisationnel intégré",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1b6b3a] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { phase: "Planification", desc: "Théorie du changement, indicateurs, baseline", color: "#1b6b3a" },
                { phase: "Monitoring", desc: "Collecte continue, tableaux de bord temps réel", color: "#c9973a" },
                { phase: "Évaluation", desc: "Analyse d'impact, attribution, leçons apprises", color: "#0f2a4a" },
              ].map((p, i) => (
                <div key={i} className="p-6 rounded-2xl border-l-4" style={{ borderColor: p.color, backgroundColor: `${p.color}08` }}>
                  <h3 className="font-bold text-[#0f2a4a] mb-1">{p.phase}</h3>
                  <p className="text-gray-600 text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagements éthiques */}
      <section className="py-20 bg-[#0f2a4a] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nos engagements éthiques</h2>
            <p className="text-white/70">Des principes non négociables qui guident chacune de nos actions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {ETHICS.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-[#c9973a] flex-shrink-0 mt-0.5" />
                <span className="text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents téléchargeables */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-[#1b6b3a] font-semibold text-sm uppercase tracking-wider">Accès libre</span>
            <h2 className="text-4xl font-bold text-[#0f2a4a] mt-2 mb-4">Documents officiels</h2>
            <p className="text-gray-600">Retrouvez nos rapports, statuts et documents de gouvernance</p>
          </div>
          {/* Note de transparence sur le statut des documents */}
          <div className="max-w-3xl mx-auto mb-10 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
            <span className="text-lg flex-shrink-0">📋</span>
            <p>
              <strong>Note :</strong> La FIAD est en cours d&apos;enregistrement officiel. Les rapports d&apos;activité et documents financiers seront publiés dès la première année d&apos;exercice officiel. Les documents marqués <span className="inline-flex items-center gap-1 font-medium"><span>🕐</span> disponibles prochainement</span> seront téléchargeables après l&apos;enregistrement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DOCS.map((doc, i) => (
              <div key={i} className="flex items-center justify-between p-5 rounded-xl border border-gray-100 hover:border-[#1b6b3a]/30 hover:shadow-md transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1b6b3a]/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-[#1b6b3a]" />
                  </div>
                  <div>
                    <p className={`font-medium text-sm ${doc.href ? "text-[#0f2a4a]" : "text-gray-400"}`}>{doc.title}</p>
                    <p className="text-gray-400 text-xs">{doc.type} · {doc.date}</p>
                  </div>
                </div>
                <DownloadButton href={doc.href} variant="icon" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
