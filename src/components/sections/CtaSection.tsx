import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

interface CtaSectionProps {
  locale: string;
  messages: {
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
}

export default function CtaSection({ locale, messages }: CtaSectionProps) {
  const localePath = (href: string) => `/${locale}${href}`;

  return (
    <section className="py-24 bg-fiad-navy relative overflow-hidden">
      {/* Décorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-fiad-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-fiad-gold/10 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">
          {messages.title}
        </h2>
        <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          {messages.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={localePath("/impliquer")}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-fiad-gold hover:bg-fiad-gold-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-fiad-gold/25"
          >
            {messages.primary}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={localePath("/contact")}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all"
          >
            <Mail className="w-4 h-4" />
            {messages.secondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
