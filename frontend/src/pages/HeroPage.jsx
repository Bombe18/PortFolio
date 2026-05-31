import { useEffect, useRef } from "react";


export default function HeroPage() {
  return (
    <section >

      <div className="relative z-10 flex flex-col items-center text-center px-6">

        <h1 className="inline-block mb-4 bg-[linear-gradient(to_right,_rgb(103,_232,_249),_rgb(167,_139,_250),_rgb(232,_121,_249))] bg-clip-text text-transparent text-7xl font-bold leading-none">
          Alex Durand
        </h1>

        <p className="mb-4 text-[#cbd5e1] text-2xl font-medium tracking-wide leading-8">
          Développeur Web Junior
        </p>

        <p className="mb-10 max-w-xl text-[#cbd5e1] text-base">
          Passionné par la création d&apos;expériences web innovantes et immersives
        </p>

        <button
          className="flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white text-base cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95 bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_4px_24px_rgba(139,92,246,0.45)]"
          type="button"
        >
          Voir mes projets
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

      </div>
    </section>
  );
}
