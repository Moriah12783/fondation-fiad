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
      title: isFr ? "Soutenir" : "Support",
      hook: isFr
        ? "Votre contribution peut changer une trajectoire de vie."
        : "Your contribution can change someone's life trajectory.",
      description: isFr
        ? "Chaque don, petit ou grand, permet à la FIAD de former un jeune, d'accompagner une femme entrepreneuse, de transformer un village. Votre geste compte."
        : "Every donation, big or small, enables FIAD to train a young person, support a woman entrepreneur, transform a village. Your gesture matters.",
      cta: isFr ? "Faire un don" : "Donate now",
      color: "#1b6b3a",
    },
    {
      icon: Handshake,
      title: isFr ? "Partenariat" : "Partnership",
      hook: isFr
        ? "Construisons ensemble des solutions durables."
        : "Let's build lasting solutions together.",
      description: isFr
        ? "Organismes, entreprises, institutions : rejoignez notre réseau de partenaires et amplifiez l'impact collectif. Ensemble, nous allons plus loin."
        : "Organizations, companies, institutions: join our partner network and amplify collective impact. Together, we go further.",
      cta: isFr ? "Proposer un partenariat" : "Propose a partnership",
      color: "#c9973a",
    },
    {
      icon: Briefcase,
      title: isFr ? "Engagement" : "Engagement",
      hook: isFr
        ? "Chaque engagement compte. Le vôtre aussi."
        : "Every commitment matters. Yours too.",
      description: isFr
        ? "Professionnels, consultants, experts : offrez vos compétences à nos projets. Votre savoir-faire peut ouvrir des portes que l'argent seul ne peut pas."
        : "Professionals, consultants, experts: offer your skills to our projects. Your expertise can open doors that money alone cannot.",
      cta: isFr ? "Proposer son expertise" : "Offer expertise",
      color: "#0f2a4a",
    },
  ];

  return (
    <div className="pt-24">
      <section className="bg-gradient-to-br from-fiad-navy to-fiad-navy-light py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9973a]/20 text-[#c9973a] text-sm font-medium mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c9973a]" />
            {isFr ? "Agir avec nous" : "Act with us"}
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">
            {isFr ? "S'impliquer" : "Get Involved"}
          </h1>
          <p className="text-white/70 text-xl max-w-xl mx-auto">
            {isFr
              ? "Il existe plusieurs façons de contribuer à la transformation de l'Afrique. Choisissez la vôtre."
              : "There are several ways to contribute to Africa's transformation. Choose yours."}
          </p>
        </div>
      </section>

      <section className="py-20 bg-fiad-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {options.map(({ icon: Icon, title, hook, description, cta, color }) => (
              <div key={title} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="h-1.5 w-full" style={{ backgroundColor: color }} />
                <div className="p-8 flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${color}15` }}>
                    <Icon className="w-6 h-6" style={{ color }} />
                  </div>
                  <h2 className="font-display font-bold text-2xl text-[#0f2a4a] mb-2">{title}</h2>
                  <p className="font-semibold text-base mb-4 leading-snug" style={{ color }}>{hook}</p>
                  <p className="text-[#6b7280] text-sm leading-relaxed mb-8 flex-1">{description}</p>
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-xl transition-all"
                    style={{ backgroundColor: color }}
                  >
                    {cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
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
