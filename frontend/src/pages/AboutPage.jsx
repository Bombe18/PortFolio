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

const hobbies = [
  {
    icon: "fa-gamepad",
    gradient: "from-indigo-400 to-blue-500",
    label: "Gaming",
  },
  {
    icon: "fa-screwdriver-wrench",
    gradient: "from-orange-400 to-amber-500",
    label: "Modélisme",
  },
  {
    icon: "fa-seedling",
    gradient: "from-green-400 to-emerald-500",
    label: "Jardinage",
  },
  {
    icon: "fa-clapperboard",
    gradient: "from-rose-400 to-pink-500",
    label: "Création audiovisuelle",
  },
];

export default function AboutPage() {
  const isAvailable = true;
  const localisation = "Cinq-Mars-la-Pile";
  const departement = "Indre-et-Loire";

  return (
    <SectionPage title="À propos">

      {/* Intro + photo + badge dispo */}
      <div className="flex flex-col lg:flex-row gap-10 mb-14 items-start">

        {/* Texte - 2ème sur mobile, gauche sur desktop */}
        <div className="flex-1 space-y-5 order-2 lg:order-1">
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

        {/* Colonne droite : photo + badge — 1er sur mobile, droite sur desktop */}
        <div className="shrink-0 flex flex-col items-center gap-6 w-full lg:w-auto order-1 lg:order-2">

          {/* Photo de profil */}
          <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-violet-500/40 shadow-[0_0_24px_4px_rgba(139,92,246,0.2)]">
            <img
              src="/images/c2a6b838-452d-4e92-97cf-57ef4c1791a3.webp"
              alt="Photo de profil"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Badge disponibilité */}
          <div className="flex flex-col items-center justify-center gap-3 bg-slate-900/60 border border-violet-500/30 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg w-full lg:w-auto">
            <span
              className={`w-4 h-4 rounded-full animate-pulse ${isAvailable
                ? "bg-green-400 shadow-[0_0_10px_2px_rgba(74,222,128,0.5)]"
                : "bg-red-500 shadow-[0_0_10px_2px_rgba(239,68,68,0.5)]"
                }`}
            />
            <span className="text-sm font-medium text-gray-300 tracking-wide">
              {isAvailable ? "Disponible" : "Non disponible"}
            </span>
            <span className="text-xs text-gray-500 text-center leading-relaxed max-w-35">
              {isAvailable ? "Ouvert aux opportunités" : "Pas en recherche active"}
            </span>
          </div>

        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {cards.map((card) => (
          <ArticleCard key={card.title}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`inline-flex p-3 rounded-xl bg-linear-to-br ${card.gradient} shrink-0`}>
                <i className={`fa-solid ${card.icon} w-5 h-5 flex justify-center text-white text-sm`} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-gray-100">{card.title}</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
          </ArticleCard>
        ))}
      </div>

      {/* Loisirs */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-300 mb-4 tracking-wide">Centres d&apos;intérêt</h3>
        <p className="text-lg text-gray-200 leading-relaxed">En dehors du code, je cultive ma curiosité à travers différents domaines. Le gaming nourrit mon intérêt pour les expériences interactives, le modélisme développe mon sens du détail, le jardinage m'apprend la patience, et l'audiovisuel m'a apporté une expérience du travail d'équipe et de l'organisation en participant à des productions côté son et logistique.</p>
        <div className="flex flex-wrap gap-3 mt-6">
          {hobbies.map((hobby) => (
            <div
              key={hobby.label}
              className="flex items-center gap-2.5 bg-slate-900/60 border border-white/10 backdrop-blur-sm rounded-full px-4 py-2 shadow">
              <div className={`inline-flex justify-center items-center rounded-full  bg-linear-to-br w-6 h-6 ${hobby.gradient}`}>
                <i className={`fa-solid ${hobby.icon} text-white text-xs`} aria-hidden="true" />
              </div>
              <span className="text-sm text-gray-200 font-medium">{hobby.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Parcours */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-300 mb-4 mt-6 tracking-wide">Mon parcours</h3>
        <p className="text-lg text-gray-200 leading-relaxed">Avant 2025, je travaillais dans le service publique. J'ai décidé de faire une reconversion professionnelle et j'ai décidé de faire une formation en tant que developpeur web chez Openclassrooms que j'ai commencé en Novembre 2025 pour le terminer en juin 2026.</p>
      </div>


    </SectionPage>
  );
}
