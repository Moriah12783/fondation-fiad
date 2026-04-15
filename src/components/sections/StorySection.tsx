export default function StorySection({ locale }: { locale: string }) {
  const isFr = locale === "fr";

  const stories = isFr
    ? [
        {
          icon: "🎓",
          subject: "Un jeune",
          story: "qui trouve sa voie.",
          color: "#1b6b3a",
        },
        {
          icon: "💼",
          subject: "Une femme",
          story: "qui crée son activité.",
          color: "#c9973a",
        },
        {
          icon: "🌍",
          subject: "Une communauté",
          story: "qui reprend le contrôle de son avenir.",
          color: "#0f2a4a",
        },
      ]
    : [
        { icon: "🎓", subject: "A young person", story: "who finds their path.", color: "#1b6b3a" },
        { icon: "💼", subject: "A woman", story: "who builds her business.", color: "#c9973a" },
        { icon: "🌍", subject: "A community", story: "that reclaims its future.", color: "#0f2a4a" },
      ];

  return (
    <section className="py-24 bg-[#f8f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9973a]/10 text-[#c9973a] text-sm font-medium mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c9973a]" />
            {isFr ? "L'humain au cœur" : "People at the heart"}
          </div>
          <h2 className="font-bold text-4xl sm:text-5xl text-[#0f2a4a] leading-tight mb-4">
            {isFr ? "Derrière chaque projet," : "Behind every project,"}
            <br />
            <span className="text-[#1b6b3a]">
              {isFr ? "il y a une histoire." : "there is a story."}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border-l-4"
              style={{ borderColor: s.color }}
            >
              <div className="text-4xl mb-5">{s.icon}</div>
              <p className="text-[#6b7280] text-base leading-relaxed">
                {isFr ? "Celle d'" : "The story of "}
                <span className="font-bold text-[#0f2a4a]">{s.subject}</span>{" "}
                {s.story}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
