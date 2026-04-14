import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Handshake, Briefcase, ArrowRight } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr" ? "S'impliquer" : "Get Involved",
  };
}

export default async function ImpliquePage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";

  const options = [
    {
      icon: Heart,
      title: isFr ? "Faire un don" : "Make a donation",
      description: isFr
        ? "Soutenez financièrement nos programmes et permettez à la FIAD de déployer de nouveaux projets à impact."
        : "Financially support our programs and enable FIAD to deploy new impact projects.",
      cta: isFr ? "Faire un don" : "Donate now",
      color: "bg-rose-50 text-rose-600",
    },
    {
      icon: Handshake,
      title: isFr ? "Devenir partenaire" : "Become a partner",
      description: isFr
        ? "Organismes, entreprises ou institutions : rejoignez notre réseau de partenaires et amplifiez l'impact collectif."
        : "Organizations, companies or institutions: join our partner network and amplify collective impact.",
      cta: isFr ? "Proposer un partenariat" : "Propose a partnership",
      color: "bg-fiad-green/10 text-fiad-green",
    },
    {
      icon: Briefcase,
      title: isFr ? "Offrir son expertise" : "Offer expertise",
      description: isFr
        ? "Professionnels, consultants, experts : contribuez bénévolement à nos projets et partagez votre savoir-faire."
        : "Professionals, consultants, experts: voluntarily contribute to our projects and share your expertise.",
      cta: isFr ? "Proposer son expertise" : "Offer expertise",
      color: "bg-blue-100 text-blue-600",
    },
  ];

  return (
    <div className="pt-24">
      <section className="bg-gradient-to-br from-fiad-navy to-fiad-navy-light py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            {isFr ? "S'impliquer" : "Get Involved"}
          </h1>
          <p className="text-white/70 text-xl">
            {isFr
              ? "Plusieurs façons de contribuer à la transformation de l'Afrique"
              : "Several ways to contribute to Africa's transformation"}
          </p>
        </div>
      </section>

      <section className="py-20 bg-fiad-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {options.map(({ icon: Icon, title, description, cta, color }) => (
              <div key={title} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${color}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h2 className="font-display font-bold text-2xl text-fiad-navy mb-4">{title}</h2>
                <p className="text-fiad-gray leading-relaxed mb-8 flex-1">{description}</p>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-fiad-green hover:bg-fiad-green-dark text-white font-semibold rounded-xl transition-all"
                >
                  {cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-fiad-navy rounded-2xl p-10 text-center">
            <p className="text-white/70 text-lg mb-2">
              {isFr ? "Une autre idée de collaboration ?" : "Another idea for collaboration?"}
            </p>
            <h3 className="font-display font-bold text-2xl text-white mb-6">
              {isFr ? "Contactez-nous directement" : "Contact us directly"}
            </h3>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-7 py-3 bg-fiad-gold hover:bg-fiad-gold-dark text-white font-semibold rounded-xl transition-all"
            >
              {isFr ? "Nous écrire" : "Write to us"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
