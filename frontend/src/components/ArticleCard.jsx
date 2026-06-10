export default function ArticleCard({ children, className }) {
  return (
    <article
      tabIndex={0}
      className={`relative bg-slate-900/50 backdrop-blur-sm border border-violet-500/30 rounded-2xl p-6 overflow-hidden hover:scale-105 hover:-translate-y-2 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950${className ? ` ${className}` : ""}`}
    >
      {children}
    </article>
  );
}
