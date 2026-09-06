import { brand, problemPoints } from "../data/content";
import { Reveal } from "./ui/Reveal";

export function ProblemSection() {
  return (
    <section className="bg-paper px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={`${import.meta.env.BASE_URL}images/problem-laundry.png`}
              alt="Urban household laundry still handled as a time-consuming chore"
              className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              The problem
            </p>
            <h2 className="mt-4 max-w-lg text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
              Laundry Shouldn&apos;t Be a Chore.
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
              For many urban households in Dhaka, laundry still means hours of
              hand washing, inconsistent results and hygiene concerns — even as
              demand for convenient, modern services continues to rise with a
              growing middle class.
            </p>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {problemPoints.map((point, i) => (
              <Reveal key={point} delay={i * 50}>
                <li className="flex items-start gap-3 rounded-2xl bg-mist px-4 py-3.5 text-sm text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  {point}
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={200}>
            <p className="mt-10 text-2xl font-extrabold tracking-tight text-navy">
              {brand.supporting}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
