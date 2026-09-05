import { whyFeatures } from "../data/content";
import { whyIcons } from "./ui/Icons";
import { IconBox } from "./ui/IconBox";
import { Reveal } from "./ui/Reveal";

export function WhySpinloop() {
  return (
    <section id="why" className="bg-mist px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Why us
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Why SPINLOOP?
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyFeatures.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <article className="group h-full rounded-[1.75rem] border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                <IconBox icon={whyIcons[i]} />
                <h3 className="mt-6 text-xl font-bold tracking-tight text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
