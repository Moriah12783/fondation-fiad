export default function ActionsSection({ locale }: { locale: string }) {
  const isFr = locale === "fr";

  const actions = isFr
    ? [
        { verb: "Former", desc: "Des compétences pour naviguer dans un monde en mutation" },
        { verb: "Accompagner", desc: "Un soutien concret à chaque étape du parcours" },
        { verb: "Autonomiser", desc: "Les moyens d'agir par soi-même, durablement" },
        { verb: "Transformer", desc: "Des vies, des communautés, des territoires" },
      ]
    : [
        { verb: "Train", desc: "Skills to navigate a changing world" },
        { verb: "Support", desc: "Concrete guidance at every step" },
        { verb: "Empower", desc: "The means to act independently, sustainably" },
        { verb: "Transform", desc: "Lives, communities, territories" },
      ];

  return (
    <section className="py-24 bg-[#0f2a4a] relative overflow-hidden">
      {/* Déco */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#1b6b3a]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c9973a]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-sm font-medium mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c9973a]" />
            {isFr ? "Ce que nous faisons" : "What we do"}
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl text-white mb-4 leading-tight">
            {isFr
              ? "Nous ne faisons pas que lancer des projets."
              : "We don't just launch projects."}
          </h2>
          <p className="text-[#c9973a] text-2xl sm:text-3xl font-bold">
            {isFr
              ? "Nous construisons des trajectoires de transformation."
              : "We build transformation pathways."}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, i) => (
            <div
              key={i}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c9973a]/40 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl font-bold text-[#c9973a] mb-3 group-hover:scale-110 transition-transform">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{action.verb}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{action.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
