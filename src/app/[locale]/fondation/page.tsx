import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye, Target, Heart, Lightbulb, Shield, TrendingUp, Users, Handshake } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr" ? "La Fondation — Vision, Mission & Valeurs | FIAD" : "The Foundation — Vision, Mission & Values | FIAD",
    description: locale === "fr"
      ? "Née d'une conviction profonde, la FIAD est une dynamique de transformation au service du développement africain."
      : "Born from a deep conviction, FIAD is a transformation dynamic serving African development.",
  };
}

export default async function FoundationPage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";

  const values = [
    {
      icon: Handshake,
      title: isFr ? "Engagement" : "Commitment",
      desc: isFr ? "Agir avec responsabilité, chaque jour, pour ceux que nous servons." : "Acting responsibly, every day, for those we serve.",
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      icon: Lightbulb,
      title: isFr ? "Innovation" : "Innovation",
      desc: isFr ? "Penser autrement pour agir efficacement face aux défis africains." : "Thinking differently to act effectively against African challenges.",
      color: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      icon: Eye,
      title: isFr ? "Transparence" : "Transparency",
      desc: isFr ? "Rendre compte avec honnêteté — des succès comme des difficultés." : "Reporting honestly — both successes and difficulties.",
      color: "bg-green-50 text-[#1b6b3a] border-green-100",
    },
    {
      icon: TrendingUp,
      title: isFr ? "Impact" : "Impact",
      desc: isFr ? "Mesurer ce qui compte vraiment. Pas les intentions, les résultats." : "Measuring what truly matters. Not intentions, results.",
      color: "bg-purple-50 text-purple-600 border-purple-100",
    },
    {
      icon: Heart,
      title: isFr ? "Solidarité" : "Solidarity",
      desc: isFr ? "Avancer ensemble. Personne ne progresse seul." : "Moving forward together. No one progresses alone.",
      color: "bg-rose-50 text-rose-600 border-rose-100",
    },
  ];

  return (
    <div className="pt-24">

      {/* Hero page */}
      <section className="bg-gradient-to-br from-[#0f2a4a] to-[#1a4070] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9973a]/20 text-[#c9973a] text-sm font-medium mb-6">
            {isFr ? "La Fondation" : "The Foundation"}
          </div>
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {isFr ? "Une dynamique de" : "A dynamic of"}
            <br />
            <span className="text-[#c9973a]">{isFr ? "transformation" : "transformation"}</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">
            {isFr
              ? "Notre vision, notre mission, nos valeurs — ce qui nous anime chaque jour."
              : "Our vision, our mission, our values — what drives us every day."}
          </p>
        </div>
      </section>

      {/* Qui sommes-nous */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b6b3a]/10 text-[#1b6b3a] text-sm font-medium mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1b6b3a]" />
                {isFr ? "Qui sommes-nous" : "Who we are"}
              </div>
              <p className="text-[#6b7280] text-lg mb-6 leading-relaxed">
                {isFr
                  ? "La Fondation Impact Afrique Durable (FIAD) est née d'une conviction simple mais profonde :"
                  : "The Fondation Impact Afrique Durable (FIAD) was born from a simple but deep conviction:"}
              </p>
              <blockquote className="text-2xl font-bold text-[#0f2a4a] border-l-4 border-[#c9973a] pl-6 mb-8 leading-snug">
                {isFr
                  ? "L'Afrique peut et doit être actrice de son propre développement."
                  : "Africa can and must be the agent of its own development."}
              </blockquote>
              <p className="text-[#6b7280] text-lg mb-2">
                {isFr ? "Nous ne sommes pas seulement une organisation." : "We are not just an organization."}
              </p>
              <p className="text-xl font-bold text-[#1b6b3a]">
                {isFr ? "Nous sommes une dynamique de transformation." : "We are a dynamic of transformation."}
              </p>
            </div>
            <div className="bg-[#f8f5f0] rounded-3xl p-10">
              <div className="space-y-6">
                {[
                  { label: isFr ? "Fondée à" : "Founded in", value: "Abidjan" },
                  { label: isFr ? "Statut" : "Status", value: isFr ? "ONG à but non lucratif" : "Non-profit NGO" },
                  { label: isFr ? "Zones d'action" : "Action zones", value: isFr ? "Afrique francophone" : "Francophone Africa" },
                  { label: isFr ? "Mission principale" : "Core mission", value: isFr ? "Développement durable & impact social" : "Sustainable development & social impact" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-start gap-4 pb-4 border-b border-gray-200 last:border-0">
                    <span className="text-[#6b7280] text-sm">{item.label}</span>
                    <span className="font-semibold text-[#0f2a4a] text-sm text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-[#f8f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-[#0f2a4a] rounded-3xl p-10 text-white">
              <div className="text-6xl mb-6">🌍</div>
              <blockquote className="text-2xl font-bold leading-relaxed text-white mb-4">
                {isFr
                  ? "Nous imaginons une Afrique où chaque jeune, chaque femme, chaque communauté a les moyens de créer, d'innover et de prospérer durablement."
                  : "We envision an Africa where every youth, every woman, every community has the means to create, innovate and thrive sustainably."}
              </blockquote>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#1b6b3a]/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-[#1b6b3a]" />
                </div>
                <h2 className="font-bold text-3xl text-[#0f2a4a]">{isFr ? "Notre Vision" : "Our Vision"}</h2>
              </div>
              <p className="text-[#6b7280] leading-relaxed text-lg mb-8">
                {isFr
                  ? "Nous imaginons une Afrique où chaque jeune, chaque femme, chaque communauté a les moyens de créer, d'innover et de prospérer durablement."
                  : "We envision an Africa where every youth, every woman, every community has the means to create, innovate and thrive sustainably."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#c9973a]/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#c9973a]" />
                </div>
                <h2 className="font-bold text-3xl text-[#0f2a4a]">{isFr ? "Notre Mission" : "Our Mission"}</h2>
              </div>
              <p className="text-3xl font-bold text-[#0f2a4a] leading-tight mb-6">
                {isFr
                  ? "Transformer des idées en solutions concrètes,"
                  : "Transforming ideas into concrete solutions,"}
                <br />
                <span className="text-[#1b6b3a]">
                  {isFr ? "et des solutions en impacts durables." : "and solutions into lasting impact."}
                </span>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: isFr ? "Bénéficiaires" : "Beneficiaries", value: "10 000+" },
                { label: isFr ? "Projets déployés" : "Projects", value: "15" },
                { label: isFr ? "Zones d'intervention" : "Areas", value: "5" },
                { label: isFr ? "Partenaires" : "Partners", value: "20+" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#f8f5f0] rounded-2xl p-6 text-center">
                  <div className="font-bold text-3xl text-[#1b6b3a] mb-1">{stat.value}</div>
                  <div className="text-[#6b7280] text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-[#f8f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl sm:text-4xl text-[#0f2a4a] mb-4">
              {isFr ? "Nos Valeurs" : "Our Values"}
            </h2>
            <p className="text-[#6b7280] text-lg max-w-xl mx-auto">
              {isFr
                ? "Pas des mots sur un mur. Des principes vécus au quotidien."
                : "Not words on a wall. Principles lived daily."}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map(({ icon: Icon, title, desc, color }, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 text-center">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 border ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#0f2a4a] mb-2">{title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approche */}
      <section className="py-20 bg-[#1b6b3a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-bold text-3xl sm:text-4xl mb-6">
                {isFr ? "Notre Approche" : "Our Approach"}
              </h2>
              <p className="text-2xl font-bold text-white mb-2">
                {isFr ? "Nous travaillons avec les communautés," : "We work with communities,"}
              </p>
              <p className="text-xl text-white/70 mb-8">
                {isFr ? "pas à leur place." : "not in their place."}
              </p>
              <p className="text-white/70 text-lg">
                {isFr ? "Nous privilégions :" : "We prioritize:"}
              </p>
            </div>
            <div className="space-y-4">
              {(isFr
                ? ["L'écoute", "La co-construction", "L'impact mesurable"]
                : ["Listening", "Co-construction", "Measurable impact"]
              ).map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/10 rounded-xl p-5">
                  <div className="w-8 h-8 rounded-full bg-[#c9973a] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-white text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gouvernance */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0f2a4a]/10 text-[#0f2a4a] text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            {isFr ? "Gouvernance" : "Governance"}
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl text-[#0f2a4a] mb-4">
            {isFr ? "Derrière FIAD, il y a des femmes et des hommes engagés." : "Behind FIAD are committed women and men."}
          </h2>
          <p className="text-[#6b7280] text-lg mb-8">
            {isFr
              ? "Une équipe qui travaille avec rigueur, responsabilité et vision."
              : "A team that works with rigor, accountability and vision."}
          </p>
          <Link
            href={`/${locale}/fondation/gouvernance`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f2a4a] text-white rounded-xl font-semibold hover:bg-[#1a4070] transition-colors"
          >
            {isFr ? "Voir la gouvernance" : "View governance"} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Navigation sous-pages */}
      <section className="py-12 bg-[#f8f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/fondation/histoire", label: isFr ? "Notre Histoire" : "Our History", icon: "📖" },
              { href: "/fondation/gouvernance", label: isFr ? "Gouvernance" : "Governance", icon: "🏛️" },
              { href: "/fondation/equipe", label: isFr ? "Notre Équipe" : "Our Team", icon: "👥" },
            ].map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="flex items-center justify-between p-5 bg-white rounded-xl hover:bg-[#1b6b3a] hover:text-white group transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-semibold text-[#0f2a4a] group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-[#6b7280] group-hover:text-white transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
