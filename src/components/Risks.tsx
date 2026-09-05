import { useState } from "react";
import { risks } from "../data/content";
import { Reveal } from "./ui/Reveal";

export function Risks() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-paper px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Risk & mitigation
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Risks we plan for
          </h2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {risks.map((item, i) => {
            const expanded = open === i;
            return (
              <Reveal key={item.title} delay={i * 50}>
                <div className="rounded-[1.4rem] border border-line bg-white">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={expanded}
                    onClick={() => setOpen(expanded ? -1 : i)}
                  >
                    <span className="font-semibold text-navy">{item.title}</span>
                    <span
                      className={`text-xl text-accent transition ${expanded ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  {expanded ? (
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted">
                      {item.body}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
