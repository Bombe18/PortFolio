import { Link } from "react-router-dom";
import projects from "../data/projectsData.json";
import SectionPage from "../components/SectionPage";

export default function ProjectsPage() {

  return (
    <SectionPage title="Projets">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => {
          const cardClasses =
            "bg-slate-900/50 backdrop-blur-sm border border-violet-500/30 rounded-3xl shadow-lg cursor-pointer hover:border-cyan-400/50 transition-all hover:scale-105 hover:-translate-y-2 duration-200";

          const cardBody = (
            <article className="flex flex-col h-full">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-48 object-cover rounded-t-3xl mb-4"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-100 hover:text-cyan-400 transition-colors m-4">
                {project.title}
              </h3>
              <p className="text-gray-400 px-4 pb-4">{project.description}</p>
              <div className="mx-4 mb-5 mt-auto flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-linear-to-r from-cyan-400 to-violet-500 shadow-[0_4px_20px_rgba(139,92,246,0.3)] w-fit">
                {project.hasDetail ? (
                  <>
                    Voir le cas d&apos;usage
                    <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    <img src="/images/Github.png" alt="Lien vers github" className="scale-150 w-4 h-4" />
                    Voir sur GitHub
                  </>
                )}
              </div>
            </article>
          );

          if (project.hasDetail) {
            return (
              <Link
                key={project.id}
                to={`/projet/${project.id}`}
                className={cardClasses}
              >
                {cardBody}
              </Link>
            );
          }

          return (
            <a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClasses}
            >
              {cardBody}
            </a>
          );
        })}
      </div>
    </SectionPage>
  );
}
