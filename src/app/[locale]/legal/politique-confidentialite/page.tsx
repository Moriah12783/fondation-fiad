import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return { title: locale === "fr" ? "Politique de Confidentialité" : "Privacy Policy" };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";

  return (
    <div className="pt-24">
      <section className="bg-fiad-navy py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display font-bold text-4xl text-white">
            {isFr ? "Politique de Confidentialité" : "Privacy Policy"}
          </h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-fiad-gray">
          <div>
            <h2 className="font-display font-bold text-2xl text-fiad-navy mb-3">
              {isFr ? "Données collectées" : "Data collected"}
            </h2>
            <p className="leading-relaxed">
              {isFr
                ? "La FIAD collecte uniquement les données que vous nous fournissez volontairement via les formulaires de contact : nom, adresse email, organisation et message."
                : "FIAD only collects data you voluntarily provide through contact forms: name, email address, organization and message."}
            </p>
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl text-fiad-navy mb-3">
              {isFr ? "Utilisation des données" : "Use of data"}
            </h2>
            <p className="leading-relaxed">
              {isFr
                ? "Vos données sont utilisées exclusivement pour répondre à vos demandes et ne sont jamais vendues ou partagées avec des tiers."
                : "Your data is used exclusively to respond to your requests and is never sold or shared with third parties."}
            </p>
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl text-fiad-navy mb-3">
              {isFr ? "Vos droits" : "Your rights"}
            </h2>
            <p className="leading-relaxed">
              {isFr
                ? "Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Contactez-nous à : contact@fondation-fiad.org"
                : "You have the right to access, rectify and delete your data. Contact us at: contact@fondation-fiad.org"}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
