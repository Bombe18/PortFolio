export default function AboutPage() {
  return (
    <section className="flex min-h-screen flex-col justify-center px-6 sm:px-10 md:px-28">
      <div className="text-left w-fit">
      <h2 className=" text-5xl md:text-6xl font-bold mb-6 bg-[linear-gradient(to_right,rgb(103,232,249),rgb(167,139,250),rgb(232,121,249))] bg-clip-text text-transparent">
        À propos
      </h2>
      <div className="h-1 w-32 bg-linear-to-r from-cyan-500 to-violet-500 mb-12 rounded-full" />
</div>
      <p className="text-xl text-gray-300 mb-16 max-w-3xl leading-relaxed">Développeur web passionné avec l'envie d'apprendre de nouvelles technologies modernes.
        Je crée des applications web performantes et élégantes qui offrent une expérience utilisateur exceptionnelle.
        Mon approche combine créativité technique et attention aux détails pour donner vie à vos projets
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <article className="relative bg-slate-900/50 backdrop-blur-sm border border-violet-500/30 rounded-2xl p-6 overflow-hidden hover:scale-105 hover:-translate-y-2 transition-transform duration-200 ">
          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 mb-4`}><i className="fa-solid fa-code" aria-hidden="true"  ></i></div>
          <h3 className="text-xl font-semibold mb-2 text-gray-100">
            Développement
          </h3>
          <p className="text-gray-400">Code propre et maintenable</p>
        </article>

        <article className="relative bg-slate-900/50 backdrop-blur-sm border border-violet-500/30 rounded-2xl p-6 overflow-hidden hover:scale-105 hover:-translate-y-2 transition-transform duration-200  "  >
          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-500 to-violet-400 mb-4`}><i className="fa-solid fa-paint-roller" aria-hidden="true"  ></i></div>
          <h3 className="text-xl font-semibold mb-2 text-gray-100">
            Design
          </h3>
          <p className="text-gray-400">Interface utilisateur attrayante et intuitive</p>
        </article>

        <article className="relative bg-slate-900/50 backdrop-blur-sm border border-violet-500/30 rounded-2xl p-6 overflow-hidden hover:scale-105 hover:-translate-y-2 transition-transform duration-200">
          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 mb-4`}><i className="fa-solid fa-tachometer-alt" aria-hidden="true"  ></i></div>
          <h3 className="text-xl font-semibold mb-2 text-gray-100">
            Performance
          </h3>
          <p className="text-gray-400">Applications web rapides et réactives</p>
        </article>

        <article className="relative bg-slate-900/50 backdrop-blur-sm border border-violet-500/30 rounded-2xl p-6 overflow-hidden hover:scale-105 hover:-translate-y-2 transition-transform duration-200">
          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-fuchsia-400 to-pink-500 mb-4`}><i className="fa-solid fa-users" aria-hidden="true"  ></i></div>
          <h3 className="text-xl font-semibold mb-2 text-gray-100">
            Collaboration
          </h3>
          <p className="text-gray-400">Travail en équipe et communication efficace</p>
        </article>
      </div>
    </section>
  );
}