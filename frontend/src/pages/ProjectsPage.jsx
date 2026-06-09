import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projectsData.json";
import GradientCardBackground from "../components/GradientCardBackground";

export default function ProjectsPage() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <GradientCardBackground title="Projets">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => {
          const isHovered = hoveredId === project.id;
          const cardClasses =
            "bg-slate-900/50 backdrop-blur-sm border border-violet-500/30 rounded-3xl shadow-lg cursor-pointer hover:border-cyan-400/50 transition-all hover:scale-105 hover:-translate-y-2 duration-200";

          const cardBody = (
            <article>
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-48 object-cover rounded-t-3xl mb-4"
                />
                {isHovered && (
                  project.hasDetail ? (
                    <span className="absolute bottom-6 left-4 flex items-center gap-1.5 text-xs font-semibold text-white bg-linear-to-r from-cyan-500 to-violet-500 px-3 py-1.5 rounded-full shadow-lg">
                      Voir le cas d&apos;usage
                      <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true" />
                    </span>
                  ) : (
                    <img
                      src="/images/Github.png"
                      alt="GitHub repository"
                      className="absolute bottom-6 left-4 w-10 h-10 opacity-90"
                    />
                  )
                )}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-100 hover:text-cyan-400 transition-colors m-4">
                {project.title}
              </h3>
              <p className="text-gray-400 p-4">{project.description}</p>
            </article>
          );

          if (project.hasDetail) {
            return (
              <Link
                key={project.id}
                to={`/projet/${project.id}`}
                className={cardClasses}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
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
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {cardBody}
            </a>
          );
        })}
      </div>
    </GradientCardBackground>
  );
}
