export default function ConvictionSection({ locale }: { locale: string }) {
  const isFr = locale === "fr";

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b6b3a]/10 text-[#1b6b3a] text-sm font-medium mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-[#1b6b3a]" />
          {isFr ? "Notre conviction" : "Our conviction"}
        </div>
        <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f2a4a] leading-tight mb-6">
          {isFr
            ? "Nous croyons que le développement de l'Afrique ne viendra pas uniquement de l'extérieur."
            : "We believe Africa's development will not come from outside alone."}
        </blockquote>
        <p className="text-xl text-[#6b7280] leading-relaxed max-w-2xl mx-auto">
          {isFr
            ? "Il naîtra de ses propres forces : sa jeunesse, son innovation, ses communautés."
            : "It will come from within: its youth, its innovation, its communities."}
        </p>
        <div className="mt-10 flex justify-center gap-8">
          {(isFr
            ? ["Jeunesse", "Innovation", "Communautés"]
            : ["Youth", "Innovation", "Communities"]
          ).map((word, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#c9973a]" />
              <span className="font-semibold text-[#0f2a4a]">{word}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
