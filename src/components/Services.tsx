import { services } from "../data/content";
import { Reveal } from "./ui/Reveal";

export function Services() {
  return (
    <section id="services" className="bg-paper px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Services & model
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            More Than Just Washing
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="group overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-[var(--shadow-card)]">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold tracking-tight text-navy">
                    {item.title}
                  </h3>
                  <ul className="mt-5 space-y-2.5">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
