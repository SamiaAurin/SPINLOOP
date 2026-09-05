import { businessMetrics, financialDisclaimer } from "../data/content";
import { CountUp } from "./ui/CountUp";
import { Reveal } from "./ui/Reveal";

export function BusinessMetrics() {
  return (
    <section id="business" className="bg-navy px-5 py-24 text-white lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-aqua">
            Unit economics
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Built for Scalable Unit Economics
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {businessMetrics.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7">
                <CountUp
                  value={item.value}
                  className="num text-4xl font-extrabold tracking-tight text-aqua sm:text-5xl"
                />
                <p className="mt-4 text-sm text-white/65">{item.label}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-white/50">
          {financialDisclaimer}
        </p>
      </div>
    </section>
  );
}
