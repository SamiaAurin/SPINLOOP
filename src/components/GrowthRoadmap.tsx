import { phases } from "../data/content";
import { Reveal } from "./ui/Reveal";

export function GrowthRoadmap() {
  return (
    <section id="roadmap" className="bg-mist px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Growth & scale
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            From One Hub to a Citywide Network
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <ol className="relative space-y-5">
            <div className="absolute left-[27px] top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-accent to-aqua lg:block" />
            {phases.map((phase, i) => (
              <Reveal key={phase.n} delay={i * 70}>
                <li className="relative grid items-center gap-5 rounded-[1.75rem] border border-line bg-white p-6 lg:grid-cols-[72px_1fr]">
                  <span className="num relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-lg font-extrabold text-aqua">
                    {phase.n}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-navy">{phase.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                      {phase.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
