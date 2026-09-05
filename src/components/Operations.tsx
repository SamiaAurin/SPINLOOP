import { operations } from "../data/content";
import { Reveal } from "./ui/Reveal";

export function Operations() {
  return (
    <section className="bg-navy px-5 py-24 text-white lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-aqua">
            Operations
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Designed Around Trust
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {operations.map((item, i) => (
            <Reveal key={item} delay={i * 35}>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-sm font-medium text-white/85">
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
