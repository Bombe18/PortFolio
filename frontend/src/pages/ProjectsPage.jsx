import { useState } from "react";
import projects from "../data/projectsData.json"


export default function projectsPage() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
  
    <section className="flex min-h-screen flex-col justify-center  px-6 sm:px-10 md:px-28">
      <h2 className="text-5xl mt-6 md:text-6xl font-bold mb-6 bg-[linear-gradient(to_right,rgb(103,232,249),rgb(167,139,250),rgb(232,121,249))] bg-clip-text text-transparent text-left w-fit">
        Projets
      </h2>
      <div className="h-1 w-32 bg-linear-to-r from-cyan-500 to-violet-500 mb-12 rounded-full" />


      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <a key={project.id} href={project.github} target="_blank" rel="noopener noreferrer" 
             className="bg-slate-900/50 backdrop-blur-sm border border-violet-500/30 rounded-3xl shadow-lg cursor-pointer hover:border-cyan-400/50 transition-all hover:scale-105 hover:-translate-y-2 duration-200  "
             onMouseEnter={() => setHoveredId(project.id)}
             onMouseLeave={() => setHoveredId(null)}>
            <article>
              <div className="relative">
              <img src={project.image} alt={`${project.name} image`} className="w-full h-48 object-cover rounded-t-3xl mb-4" />
              {hoveredId === project.id && (
                <img src="/src/images/Github.png" alt="GitHub repository" className="absolute bottom-6 left-4 w-10 h-10 opacity-90" />
              )}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-100 hover:text-cyan-400 transition-colors m-4">{project.title}</h3>
              <p className="text-gray-400 p-4">{project.description}</p>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}