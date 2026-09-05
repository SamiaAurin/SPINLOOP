import { hubZones } from "../data/content";
import { Reveal } from "./ui/Reveal";

export function HubConcept() {
  return (
    <section className="bg-mist px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              The hub
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
              The SPINLOOP Experience
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
              The planned hub is approximately{" "}
              <span className="font-semibold text-navy">1,200–1,500 sq ft</span>{" "}
              — a bright, air-conditioned space designed around machines,
              waiting, folding and a simple payment flow.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-line bg-white p-4 sm:p-8">
            <img
              src="/images/hub-floorplan.png"
              alt="Stylized marketing visualization of the SPINLOOP hub layout"
              className="w-full rounded-[1.4rem] object-cover"
            />
            <p className="mt-4 text-xs text-soft">
              Marketing visualization — not a technical architectural drawing.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {hubZones.map((zone, i) => (
            <Reveal key={zone} delay={i * 40}>
              <div className="rounded-2xl border border-line bg-white px-4 py-4 text-sm font-semibold text-navy">
                {zone}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
