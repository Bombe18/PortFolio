import SectionPage from "../components/SectionPage";
import ArticleCard from "../components/ArticleCard";

const cards = [
  {
    icon: "fa-code",
    gradient: "from-cyan-400 to-blue-500",
    title: "Développement",
    description: "Code propre, maintenable et structuré pour des projets durables.",
  },
  {
    icon: "fa-paint-roller",
    gradient: "from-violet-500 to-violet-400",
    title: "Design",
    description: "Interfaces soignées, intuitives et pensées pour l'utilisateur.",
  },
  {
    icon: "fa-tachometer-alt",
    gradient: "from-emerald-400 to-green-500",
    title: "Performance",
    description: "Applications rapides, légères et optimisées pour tous les appareils.",
  },
  {
    icon: "fa-users",
    gradient: "from-fuchsia-400 to-pink-500",
    title: "Collaboration",
    description: "À l'aise en équipe, avec une communication claire et proactive.",
  },
];

export default function AboutPage() {
  const isAvailable = true;
  const localisation = "Cinq-Mars-la-Pile";
  const departement = "Indre-et-Loire";

  return (
    <SectionPage title="À propos">

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

          <div className="flex items-center gap-2 text-sm text-gray-300">
            <i className="fa-solid fa-location-dot text-violet-400" aria-hidden="true" />
            <span>{localisation}, {departement} — disponible à distance</span>
          </div>
        </div>

        {/* Badge disponibilité */}
        <div className="shrink-0 flex flex-col items-center justify-center gap-3 bg-slate-900/60 border border-violet-500/30 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg w-full lg:w-auto">
          <span
            className={`w-4 h-4 rounded-full animate-pulse ${isAvailable
              ? "bg-green-400 shadow-[0_0_10px_2px_rgba(74,222,128,0.5)]"
              : "bg-red-500 shadow-[0_0_10px_2px_rgba(239,68,68,0.5)]"
              }`}
          />
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
        {cards.map((card) => (
          <ArticleCard key={card.title} {...card} />
        ))}
      </div>

    </SectionPage>
  );
}
