import { Link, Navigate, useParams } from "react-router-dom";
import projects from "../data/projectsData.json";
import ParticlesBackground from "../components/Background.jsx";
import ArticleCard from "../components/ArticleCard.jsx";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project || !project.hasDetail) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="relative">
      <ParticlesBackground />

      <main className="relative z-10 min-h-screen px-6 sm:px-10 md:px-28 py-10">

        {/* Bouton retour */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-10 group"
        >
          <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
          Retour aux projets
        </Link>

        {/* Hero */}
        <div className="flex flex-col lg:flex-row gap-10 mb-14 items-start">
          <img
            src={project.image}
            alt={project.alt}
            className="w-full lg:w-1/2 rounded-2xl object-cover max-h-72 border border-violet-500/30"
          />
          <div className="flex flex-col justify-center gap-6 flex-1">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight bg-[linear-gradient(to_right,rgb(103,232,249),rgb(167,139,250),rgb(232,121,249))] bg-clip-text text-transparent">
              {project.title}
            </h1>

            {/* tech badges */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-slate-800 border border-violet-500/30 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Boutons GitHub / Demo */}
            <div className="flex gap-4 flex-wrap">
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm bg-linear-to-r from-cyan-400 to-violet-500 hover:scale-105 transition-transform shadow-[0_4px_20px_rgba(139,92,246,0.3)]"
                >
                  <img src="/images/Github.png" alt="" className="w-5 h-5" />
                  Voir sur GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm bg-linear-to-r from-violet-500 to-fuchsia-500 hover:scale-105 transition-transform shadow-[0_4px_20px_rgba(232,121,249,0.3)]"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                  Voir la démo
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Grille des sections principales */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ArticleCard>
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex p-3 rounded-xl bg-linear-to-br from-cyan-400 to-blue-500 shrink-0">
                <i className="fa-solid fa-circle-info w-5 h-5 flex justify-center text-white text-sm" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-gray-100">Contexte</h3>
            </div>
            <div className="space-y-3">
              {project.context.map((para, i) => (
                <p key={i} className="text-gray-400 leading-relaxed text-sm">
                  {para}
                </p>
              ))}
            </div>
          </ArticleCard>

          <ArticleCard>
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex p-3 rounded-xl bg-linear-to-br from-violet-500 to-violet-400 shrink-0">
                <i className="fa-solid fa-bullseye w-5 h-5 flex justify-center text-white text-sm" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-gray-100">Objectifs</h3>
            </div>
            <BulletList items={project.stakes} />
          </ArticleCard>

          <ArticleCard>
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex p-3 rounded-xl bg-linear-to-br from-emerald-400 to-green-500 shrink-0">
                <i className="fa-solid fa-code w-5 h-5 flex justify-center text-white text-sm" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-gray-100">Réalisations</h3>
            </div>
            <BulletList items={project.achievements} />
          </ArticleCard>

          <ArticleCard>
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex p-3 rounded-xl bg-linear-to-br from-fuchsia-400 to-pink-500 shrink-0">
                <i className="fa-solid fa-chart-line w-5 h-5 flex justify-center text-white text-sm" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-gray-100">Résultats obtenus</h3>
            </div>
            <BulletList items={project.results} />
          </ArticleCard>
        </div>

        {/* Axes d'amélioration — pleine largeur */}
        <ArticleCard>
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-linear-to-br from-amber-400 to-orange-500 shrink-0">
              <i className="fa-solid fa-lightbulb w-5 h-5 flex justify-center text-white text-sm" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-gray-100">Axes d'amélioration</h3>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.improvements.map((item, i) => (
              <BulletItem key={i}>{item}</BulletItem>
            ))}
          </ul>
        </ArticleCard>

        {/* Padding bas pour respirer */}
        <div className="h-16" />
      </main>
    </div>
  );
}

{/* Composants pour les listes à puces personnalisées */}
function BulletList({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <BulletItem key={i}>{item}</BulletItem>
        
      ))}
    </ul>
  );
}

function BulletItem({ children }) {
  return (
    <li className="flex items-start gap-2 text-gray-400 text-sm">
      <i className="fa-solid fa-chevron-right text-cyan-400 text-xs mt-1 shrink-0" aria-hidden="true" />
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}
