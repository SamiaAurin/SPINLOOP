import { gtm } from "../data/content";
import { gtmIcons } from "./ui/Icons";
import { IconBox } from "./ui/IconBox";
import { Reveal } from "./ui/Reveal";

export function GoToMarket() {
  return (
    <section className="bg-paper px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Go-to-market
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            How customers find SPINLOOP
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {gtm.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="h-full rounded-[1.75rem] border border-line bg-white p-8">
                <IconBox icon={gtmIcons[i]} />
                <h3 className="mt-6 text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
