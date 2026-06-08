export default function AboutPage() {
  const isAvailable = true;
  const localisation = "Cinq-Mars-la-Pile";
  const departement = "Indre-et-Loire";

  return (
    <section className="flex min-h-screen flex-col justify-center px-6 sm:px-10 md:px-28">

      <div className="text-left w-fit">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-[linear-gradient(to_right,rgb(103,232,249),rgb(167,139,250),rgb(232,121,249))] bg-clip-text text-transparent">
          À propos
        </h2>
        <div className="h-1 w-32 bg-linear-to-r from-cyan-500 to-violet-500 mb-12 rounded-full" />
      </div>

      {/* Intro + badge dispo */}
      <div className="flex flex-col lg:flex-row gap-10 mb-14 items-start">

        <div className="flex-1 space-y-5">
          <p className="text-2xl font-semibold text-gray-100 leading-snug">
            Développeur web{" "}
            <span className="bg-[linear-gradient(to_right,rgb(103,232,249),rgb(167,139,250))] bg-clip-text text-transparent">
              front-end
            </span>{" "}
            passionné par les interfaces modernes.
          </p>

          <p className="text-lg text-gray-200 leading-relaxed">
            Je conçois des applications web performantes, élégantes et accessibles.
            Combinant une attention au détail côté design avec des bases techniques solides côté code.
          </p>

          <p className="text-lg text-gray-200 leading-relaxed">
            Curieux et en apprentissage constant, j&apos;aime explorer de nouvelles technologies
            et relever des défis qui me font progresser.
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-300 ">
            <i className="fa-solid fa-location-dot text-violet-400" aria-hidden="true" />
            <span>{localisation}, {departement} — disponible à distance</span>
          </div>
        </div>

        {/* Badge disponibilité */}
        <div className="shrink-0 flex flex-col items-center justify-center gap-3 bg-slate-900/60 border border-violet-500/30 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg">
          <span
            className={`w-4 h-4 rounded-full animate-pulse ${isAvailable
              ? "bg-green-400 shadow-[0_0_10px_2px_rgba(74,222,128,0.5)]"
              : "bg-red-500 shadow-[0_0_10px_2px_rgba(239,68,68,0.5)]"
              }`}/>

          <span className="text-sm font-medium text-gray-300 tracking-wide">
            {isAvailable ? "Disponible" : "Non disponible"}
          </span>

          <span className="text-xs text-gray-500 text-center leading-relaxed max-w-[140px]">
            {isAvailable ? "Ouvert aux opportunités" : "Pas en recherche active"}
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        <article className="relative bg-slate-900/50 backdrop-blur-sm border border-violet-500/30 rounded-2xl p-6 overflow-hidden hover:scale-105 hover:-translate-y-2 transition-transform duration-200">
          <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 mb-4">
            <i className="fa-solid fa-code" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-100">Développement</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Code propre, maintenable et structuré pour des projets durables.</p>
        </article>

        <article className="relative bg-slate-900/50 backdrop-blur-sm border border-violet-500/30 rounded-2xl p-6 overflow-hidden hover:scale-105 hover:-translate-y-2 transition-transform duration-200">
          <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-500 to-violet-400 mb-4">
            <i className="fa-solid fa-paint-roller" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-100">Design</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Interfaces soignées, intuitives et pensées pour l&apos;utilisateur.</p>
        </article>

        <article className="relative bg-slate-900/50 backdrop-blur-sm border border-violet-500/30 rounded-2xl p-6 overflow-hidden hover:scale-105 hover:-translate-y-2 transition-transform duration-200">
          <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 mb-4">
            <i className="fa-solid fa-tachometer-alt" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-100">Performance</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Applications rapides, légères et optimisées pour tous les appareils.</p>
        </article>

        <article className="relative bg-slate-900/50 backdrop-blur-sm border border-violet-500/30 rounded-2xl p-6 overflow-hidden hover:scale-105 hover:-translate-y-2 transition-transform duration-200">
          <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-fuchsia-400 to-pink-500 mb-4">
            <i className="fa-solid fa-users" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-100">Collaboration</h3>
          <p className="text-gray-400 text-sm leading-relaxed">À l&apos;aise en équipe, avec une communication claire et proactive.</p>
        </article>

      </div>
    </section>
  );
}