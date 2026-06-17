import { useInView } from "../hooks/useInView";

export default function SectionPage({ title, children }) {
  const [titleRef, titleInView] = useInView(0.2);
  const [contentRef, contentInView] = useInView(0.1);

  return (
    <section className="flex min-h-screen flex-col justify-center px-6 sm:px-10 md:px-28">

      <div
        ref={titleRef}
        className={`text-left w-fit transition-all duration-700 ease-out ${
          titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-5xl mt-7 md:text-6xl font-bold mb-6 bg-[linear-gradient(to_right,rgb(103,232,249),rgb(167,139,250),rgb(232,121,249))] bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="h-1 w-32 bg-linear-to-r from-cyan-500 to-violet-500 mb-12 rounded-full" />
      </div>

      <div
        ref={contentRef}
        className={`transition-all duration-700 ease-out delay-150 ${
          contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {children}
      </div>

    </section>
  );
}
