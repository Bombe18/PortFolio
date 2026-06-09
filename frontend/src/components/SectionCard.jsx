export default function SectionCard({ icon, gradient, title, description }) {
  return (
    <article className="relative bg-slate-900/50 backdrop-blur-sm border border-violet-500/30 rounded-2xl p-6 overflow-hidden hover:scale-105 hover:-translate-y-2 transition-transform duration-200">
      <div className={`inline-flex p-3 rounded-xl bg-linear-to-br ${gradient} mb-4`}>
        <i className={`fa-solid ${icon}`} aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-100">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </article>
  );
}
