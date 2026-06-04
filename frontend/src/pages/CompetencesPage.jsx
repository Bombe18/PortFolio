import skills from "../data/competence.json"

export default function CompetencesPages() {
  return (
    <section className="flex min-h-screen flex-col justify-center ml-24 mr-24">
      <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-[linear-gradient(to_right,rgb(103,232,249),rgb(167,139,250),rgb(232,121,249))] bg-clip-text text-transparent text-left w-fit">
        Compétences
      </h2>
      <div className="h-1 w-32 bg-linear-to-r from-cyan-500 to-violet-500 mb-12 rounded-full" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((competence) => (
          <div key={competence.id} className="group">

            <div className="flex justify-between items-start mt-2 text-xl font-semibold text-gray-100 h-12">
              <div className="flex space-x-1 min-w-0">
                <img src={competence.icon} alt={`${competence.name} icon`} className="w-fit h-6 flex-shrink-0" />
                <h3 className="line-clamp-2">{competence.name}</h3>
              </div>
              <span className="shrink-0 ml-4">{competence.level}%</span>
            </div>

            {/* Track */}
            <div className="relative block w-full h-2 bg-gray-700 rounded-full mt-2 overflow-hidden">

              {/* Barre de progression */}
              <div
                className={`w-[${competence.level}%] relative h-full rounded-full bg-linear-to-r ${competence.color.from} ${competence.color.to} transition-all duration-300 group-hover:shadow-[0_0_8px_2px_rgba(99,102,241,0.6),0_0_18px_4px_rgba(103,232,249,0.3)]`}
              />

              {/* Shimmer */}
              <span
                className="absolute inset-0 w-full bg-linear-to-r from-transparent via-white/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 animate-shimmer"
              />

            </div>

            <p className="text-gray-400 text-sm mt-2">{competence.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
