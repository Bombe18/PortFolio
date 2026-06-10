import { Link } from "react-router-dom";
import ParticlesBackground from "../components/Background.jsx";

export default function NotFoundPage() {
  return (
    <div className="relative">
      <ParticlesBackground />
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-6 text-gray-100 px-6">
        <p className="text-8xl font-bold bg-[linear-gradient(to_right,rgb(103,232,249),rgb(167,139,250),rgb(232,121,249))] bg-clip-text text-transparent select-none">
          404
        </p>
        <p className="text-xl text-gray-300">Page introuvable.</p>
        <Link
          to="/"
          className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-linear-to-r from-cyan-400 to-violet-500 hover:scale-105 transition-transform"
        >
          <i className="fa-solid fa-arrow-left" aria-hidden="true" />
          Retour à l'accueil
        </Link>
      </main>
    </div>
  );
}
