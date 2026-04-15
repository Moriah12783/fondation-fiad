import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { FIAD_CONFIG } from "@/lib/constants";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr" ? "Contact" : "Contact us",
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";

  return (
    <div className="pt-24">
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
              ? "Une question, un projet, une idée ? Notre équipe vous répond."
              : "A question, a project, an idea? Our team will get back to you."}
          </p>
        </div>
      </section>

      <section className="py-20 bg-fiad-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Infos contact */}
            <div className="space-y-6">
              <h2 className="font-display font-bold text-2xl text-fiad-navy mb-6">
                {isFr ? "Nos coordonnées" : "Our contact details"}
              </h2>

              {[
                {
                  icon: MapPin,
                  title: isFr ? "Adresse" : "Address",
                  value: FIAD_CONFIG.location,
                },
                {
                  icon: Mail,
                  title: "Email",
                  value: FIAD_CONFIG.email,
                },
                {
                  icon: Clock,
                  title: isFr ? "Horaires" : "Office hours",
                  value: isFr ? "Lun – Ven : 8h00 – 17h00 GMT" : "Mon – Fri: 8:00 AM – 5:00 PM GMT",
                },
              ].map(({ icon: Icon, title, value }) => (
                <div key={title} className="flex gap-4 p-5 bg-white rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-fiad-green/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-fiad-green" />
                  </div>
                  <div>
                    <div className="text-xs text-fiad-gray-light uppercase tracking-wide mb-1">{title}</div>
                    <div className="text-fiad-navy font-medium text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="font-display font-bold text-2xl text-fiad-navy mb-6">
                {isFr ? "Envoyer un message" : "Send a message"}
              </h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-fiad-gray mb-2">
                      {isFr ? "Nom complet *" : "Full name *"}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-fiad-green focus:ring-2 focus:ring-fiad-green/10 transition-all text-sm"
                      placeholder={isFr ? "Votre nom" : "Your name"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-fiad-gray mb-2">
                      {isFr ? "Email *" : "Email *"}
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-fiad-green focus:ring-2 focus:ring-fiad-green/10 transition-all text-sm"
                      placeholder="email@exemple.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-fiad-gray mb-2">
                    {isFr ? "Organisation" : "Organization"}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-fiad-green focus:ring-2 focus:ring-fiad-green/10 transition-all text-sm"
                    placeholder={isFr ? "Votre organisation (optionnel)" : "Your organization (optional)"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-fiad-gray mb-2">
                    {isFr ? "Sujet *" : "Subject *"}
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-fiad-green focus:ring-2 focus:ring-fiad-green/10 transition-all text-sm text-fiad-gray">
                    <option value="">{isFr ? "Choisir un sujet" : "Choose a subject"}</option>
                    <option>{isFr ? "Partenariat" : "Partnership"}</option>
                    <option>{isFr ? "Financement / Don" : "Funding / Donation"}</option>
                    <option>{isFr ? "Demande de projet" : "Project inquiry"}</option>
                    <option>{isFr ? "Presse / Médias" : "Press / Media"}</option>
                    <option>{isFr ? "Autre" : "Other"}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-fiad-gray mb-2">
                    {isFr ? "Message *" : "Message *"}
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-fiad-green focus:ring-2 focus:ring-fiad-green/10 transition-all text-sm resize-none"
                    placeholder={isFr ? "Décrivez votre demande..." : "Describe your request..."}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-fiad-green hover:bg-fiad-green-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-fiad-green/25"
                >
                  {isFr ? "Envoyer le message" : "Send message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
