export default function SectionPage({ title, children }) {
  return (
    <section className="flex min-h-screen flex-col justify-center px-6 sm:px-10 md:px-28">
      <div className="text-left w-fit">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-[linear-gradient(to_right,rgb(103,232,249),rgb(167,139,250),rgb(232,121,249))] bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="h-1 w-32 bg-linear-to-r from-cyan-500 to-violet-500 mb-12 rounded-full" />
      </div>
      {children}
    </section>
  );
}
