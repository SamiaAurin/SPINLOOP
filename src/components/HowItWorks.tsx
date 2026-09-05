import { journey } from "../data/content";
import { Reveal } from "./ui/Reveal";

export function HowItWorks() {
  return (
    <section id="how" className="bg-navy px-5 py-24 text-white lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-aqua">
            Customer journey
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Laundry in 7 Simple Steps
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="timeline-line absolute left-[19px] top-0 hidden h-full w-px md:left-0 md:top-7 md:block md:h-0.5 md:w-full" />
          <ol className="grid gap-8 md:grid-cols-7 md:gap-3">
            {journey.map((step, i) => (
              <Reveal key={step.n} delay={i * 60}>
                <li className="relative pl-12 md:pl-0">
                  <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-navy-mid text-xs font-bold text-aqua md:relative md:mb-6 md:h-14 md:w-14">
                    {step.n}
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {step.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
