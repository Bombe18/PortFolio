export default function ArticleCard({ icon, gradient, iconColor, title, description, children }) {
  const gradientClass = gradient || iconColor;
  return (
    <article className="relative bg-slate-900/50 backdrop-blur-sm border border-violet-500/30 rounded-2xl p-6 overflow-hidden hover:scale-105 hover:-translate-y-2 transition-transform duration-200">
      <div className="flex items-center gap-3 mb-4">
        <div className={`inline-flex p-3 rounded-xl bg-linear-to-br ${gradientClass} shrink-0`}>
          <i className={`fa-solid ${icon} w-5 h-5 flex justify-center text-white text-sm`} aria-hidden="true" />
        </div>
        <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
      </div>
      {children ?? (description && <p className="text-gray-400 text-sm leading-relaxed">{description}</p>)}
    </article>
  );
}
