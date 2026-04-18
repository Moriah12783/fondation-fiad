import type { Metadata } from "next";
import { Mail, MapPin, Clock, Phone } from "lucide-react";
import { FIAD_CONFIG } from "@/lib/constants";
import ContactForm from "@/components/ui/ContactForm";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  return {
    title: isFr ? "Contact" : "Contact us",
    description: isFr
      ? "Contactez la Fondation Impact Afrique Durable — partenariat, financement, projet ou presse."
      : "Contact the Fondation Impact Afrique Durable — partnership, funding, project inquiry or press.",
    openGraph: {
      title: isFr ? "Contact | FIAD" : "Contact us | FIAD",
      description: isFr
        ? "Parlons. Construisons. Agissons ensemble pour le développement de l'Afrique."
        : "Talk. Build. Act together for Africa's development.",
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";

  const contactInfo = [
    {
      icon: MapPin,
      title: isFr ? "Adresse" : "Address",
      value: FIAD_CONFIG.location,
    },
    {
      icon: Mail,
      title: "Email",
      value: FIAD_CONFIG.email,
      href: `mailto:${FIAD_CONFIG.email}`,
    },
    {
      icon: Clock,
      title: isFr ? "Horaires" : "Office hours",
      value: isFr ? "Lun – Ven : 8h00 – 17h00 GMT" : "Mon – Fri: 8:00 AM – 5:00 PM GMT",
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2a4a] to-[#1a4070] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9973a]/20 text-[#c9973a] text-sm font-medium mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c9973a]" />
            {isFr ? "Écrivez-nous" : "Write to us"}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
            <span className="font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-none">
              {isFr ? "Parlons." : "Talk."}
            </span>
            <span className="font-bold text-5xl sm:text-6xl lg:text-7xl text-[#c9973a] leading-none">
              {isFr ? "Construisons." : "Build."}
            </span>
            <span className="font-bold text-5xl sm:text-6xl lg:text-7xl text-[#1b6b3a] leading-none">
              {isFr ? "Agissons." : "Act."}
            </span>
          </div>
          <p className="text-white/60 text-lg mt-4">
            {isFr
              ? "Une question, un projet, une idée ? Notre équipe vous répond sous 48h."
              : "A question, a project, an idea? Our team replies within 48 hours."}
          </p>
        </div>
      </section>

      {/* Formulaire + coordonnées */}
      <section className="py-20 bg-fiad-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Coordonnées */}
            <div className="space-y-6">
              <h2 className="font-display font-bold text-2xl text-fiad-navy mb-6">
                {isFr ? "Nos coordonnées" : "Our contact details"}
              </h2>

              {contactInfo.map(({ icon: Icon, title, value, href }) => (
                <div key={title} className="flex gap-4 p-5 bg-white rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-fiad-green/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-fiad-green" />
                  </div>
                  <div>
                    <div className="text-xs text-fiad-gray-light uppercase tracking-wide mb-1">{title}</div>
                    {href ? (
                      <a href={href} className="text-fiad-navy font-medium text-sm hover:text-fiad-green transition-colors">
                        {value}
                      </a>
                    ) : (
                      <div className="text-fiad-navy font-medium text-sm">{value}</div>
                    )}
                  </div>
                </div>
              ))}

              {/* Note engagement */}
              <div className="p-5 bg-fiad-green/5 border border-fiad-green/20 rounded-xl">
                <p className="text-sm text-fiad-gray leading-relaxed">
                  {isFr
                    ? "Chaque message est lu personnellement. Nous nous engageons à vous répondre dans un délai de 48 heures ouvrées."
                    : "Every message is personally read. We commit to responding within 48 business hours."}
                </p>
              </div>
            </div>

            {/* Formulaire fonctionnel */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="font-display font-bold text-2xl text-fiad-navy mb-6">
                {isFr ? "Envoyer un message" : "Send a message"}
              </h2>
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
