import { useState } from "react";
import SectionPage from "../components/SectionPage";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const recipient = "cyrilco18@gmail.com";
    const subject = encodeURIComponent(`Contact depuis le portfolio - ${name || "Profil"}`);
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`);
    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
  };

  return (
    <SectionPage title="Contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6 text-gray-300">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Un projet en tête ? Une collaboration à discuter ? N'hésitez pas à me contacter, je serais ravi d'échanger avec vous !
          </p>

          <div className="flex flex-col gap-8 text-2xl">

            <a href="mailto:cyrilco18@gmail.com" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-4 bg-slate-900/50 backdrop-blur-sm border border-violet-500/30 rounded-xl p-5 shadow-lg hover:scale-105 hover:translate-x-2 transition-transform">
                <div className="bg-cyan-500 w-12 h-12 rounded-[20%] flex items-center justify-center">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </div>
                <span>Email</span>
              </div>
            </a>

            <a href="https://github.com/Bombe18/" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-4 bg-slate-900/50 backdrop-blur-sm border border-violet-500/30 rounded-xl p-5 shadow-lg hover:scale-105 hover:translate-x-2 transition-transform">
                <div className="bg-gray-800 w-12 h-12 rounded-[20%] flex items-center justify-center">
                  <i className="fa-brands fa-github" aria-hidden="true" />
                </div>
                <span>GitHub</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/cyril-colin-50b47b261/" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-4 bg-slate-900/50 backdrop-blur-sm border border-violet-500/30 rounded-xl p-5 shadow-lg hover:scale-105 hover:translate-x-2 transition-transform">
                <div className="bg-blue-500 w-12 h-12 rounded-[20%] flex items-center justify-center">
                  <i className="fa-brands fa-linkedin" aria-hidden="true" />
                </div>
                <span>LinkedIn</span>
              </div>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900/70 p-8 rounded-3xl border border-violet-500/30 shadow-lg mb-20">
          <label htmlFor="name" className="block">
            <span className="text-lg font-medium text-gray-300 mb-2">Nom</span>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Votre nom"
              className="mt-2 w-full rounded-2xl border border-violet-500/30 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
            />
          </label>

          <label htmlFor="email" className="block">
            <span className="text-lg font-medium text-gray-300 mb-2">Email</span>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="votre@email.com"
              className="mt-2 w-full rounded-2xl border border-violet-500/30 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
            />
          </label>

          <label htmlFor="message" className="block">
            <span className="text-lg font-medium text-gray-300 mb-2">Message</span>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="6"
              placeholder="Écrivez votre message ici..."
              className="mt-2 w-full rounded-2xl border border-violet-500/30 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-2xl bg-linear-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-105">
            <span className="text-lg text-white flex items-center justify-center gap-2">
              Envoyer le message <i className="fa-regular fa-paper-plane"></i>
            </span>
          </button>
        </form>
      </div>
    </SectionPage>
  );
}
