import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function HeroPage() {
  const location = useLocation()

  const handleProjectsClick = (event) => {
    if (location.pathname === "/projects") {
      event.preventDefault()
      const section = document.getElementById("projects")
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <section className="flex min-h-screen flex-col justify-center items-center px-6 sm:px-10 md:px-28">

      <div className="relative z-10 flex flex-col items-center text-center px-6">

        <h1 aria-label="Cyril Colin" style={{ animationDelay: "0ms" }} className="animate-fade-in-up inline-block mb-4 bg-[linear-gradient(to_right,rgb(103,232,249),rgb(167,139,250),rgb(232,121,249))] bg-clip-text text-transparent text-7xl font-bold leading-none">
          Cyril Colin
        </h1>

        <h2 style={{ animationDelay: "150ms" }} className="animate-fade-in-up mb-4 text-gray-100 text-2xl font-medium tracking-wide leading-8">
          Développeur Web Junior
        </h2>

        <p style={{ animationDelay: "300ms" }} className="animate-fade-in-up mb-10 max-w-xl text-gray-100 text-base">
          Passionné par la création d&apos;expériences web innovantes et immersives
        </p>
        <div style={{ animationDelay: "450ms" }} className="animate-fade-in-up flex flex-col sm:flex-row gap-6 items-center">
          <Link to="/projects" onClick={handleProjectsClick} className="flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white text-base cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95 bg-linear-to-r from-cyan-400 to-violet-500 shadow-[0_4px_24px_rgba(139,92,246,0.45)]">
              Voir mes projets <i className="fa-solid fa-angle-down"></i>
          </Link>
          <a
            href="/document/Cyril-Colin-11-05-2026.pdf"
            download
            className="flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white text-base transition-transform duration-200 hover:scale-105 active:scale-95 bg-linear-to-r from-cyan-400 to-violet-500 shadow-[0_4px_24px_rgba(139,92,246,0.45)]">
            Télécharger mon CV <i className="fa-solid fa-download"></i>
          </a>
        </div>
      </div>


    </section >
  );
}
