import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return { title: locale === "fr" ? "Mentions Légales" : "Legal Notice" };
}

export default async function MentionsLegalesPage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";

  return (
    <div className="pt-24">
      <section className="bg-fiad-navy py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display font-bold text-4xl text-white">
            {isFr ? "Mentions Légales" : "Legal Notice"}
          </h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <h2>{isFr ? "Identification" : "Identification"}</h2>
          <p>
            <strong>{isFr ? "Dénomination sociale" : "Organization name"}:</strong> Fondation Impact Afrique Durable (FIAD)<br />
            <strong>{isFr ? "Siège social" : "Registered office"}:</strong> Abidjan, Côte d'Ivoire<br />
            <strong>{isFr ? "Email" : "Email"}:</strong> contact@fondation-fiad.org<br />
            <strong>{isFr ? "Nature" : "Nature"}:</strong> {isFr ? "Organisation à but non lucratif" : "Non-profit organization"}
          </p>
          <h2>{isFr ? "Hébergement" : "Hosting"}</h2>
          <p>
            {isFr ? "Ce site est hébergé par" : "This website is hosted by"} Vercel Inc., 340 Pine Street, Suite 900, San Francisco, CA 94104, USA.
          </p>
          <h2>{isFr ? "Propriété intellectuelle" : "Intellectual property"}</h2>
          <p>
            {isFr
              ? "Tous les contenus présents sur ce site (textes, images, logos) sont la propriété exclusive de la FIAD et sont protégés par les lois sur la propriété intellectuelle."
              : "All content on this website (texts, images, logos) is the exclusive property of FIAD and is protected by intellectual property laws."}
          </p>
        </div>
      </section>
    </div>
  );
}
