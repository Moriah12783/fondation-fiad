import type { Metadata } from "next";

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr" ? "Notre Équipe" : "Our Team",
  };
}

const TEAM = [
  { name: "Dr. Aminata Kouyaté", role: "Directrice Générale", roleEn: "CEO", country: "🇨🇮", initials: "AK" },
  { name: "Moussa Traoré", role: "Directeur des Programmes", roleEn: "Programs Director", country: "🇸🇳", initials: "MT" },
  { name: "Dr. Fatima Ouédraogo", role: "Directrice de l'Impact", roleEn: "Impact Director", country: "🇧🇫", initials: "FO" },
  { name: "Kofi Mensah", role: "Directeur des Partenariats", roleEn: "Partnerships Director", country: "🇬🇭", initials: "KM" },
  { name: "Aïssatou Diallo", role: "Responsable Communication", roleEn: "Communications Manager", country: "🇬🇳", initials: "AD" },
  { name: "Emmanuel Adjei", role: "Responsable Financier", roleEn: "Finance Manager", country: "🇬🇭", initials: "EA" },
];

export default async function EquipePage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";

  return (
    <div className="pt-24">
      <section className="bg-gradient-to-br from-fiad-navy to-fiad-navy-light py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            {isFr ? "Notre Équipe" : "Our Team"}
          </h1>
          <p className="text-white/70 text-xl">
            {isFr
              ? "Des professionnels africains engagés pour la transformation du continent"
              : "African professionals committed to transforming the continent"}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="group bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Avatar */}
                <div className="bg-gradient-to-br from-fiad-green to-fiad-green-dark h-48 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="font-display font-bold text-3xl text-white">{member.initials}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display font-bold text-lg text-fiad-navy">{member.name}</h3>
                    <span className="text-xl">{member.country}</span>
                  </div>
                  <p className="text-fiad-green text-sm font-medium mb-4">
                    {isFr ? member.role : member.roleEn}
                  </p>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-lg bg-fiad-cream hover:bg-fiad-green hover:text-white flex items-center justify-center transition-colors">
                      <LinkedinIcon />
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-fiad-cream hover:bg-fiad-green hover:text-white flex items-center justify-center transition-colors">
                      <TwitterIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
