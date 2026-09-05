import { stats } from "../data/content";
import { Reveal } from "./ui/Reveal";

export function Stats() {
  return (
    <section className="relative z-10 -mt-8 bg-transparent px-5 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, i) => (
          <Reveal key={item.value} delay={i * 80}>
            <article className="h-full rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
              <p className="num text-4xl font-extrabold tracking-tight text-navy sm:text-[2.5rem]">
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.label}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
