import { financialDisclaimer, investment } from "../data/content";
import { Reveal } from "./ui/Reveal";

export function InvestmentAsk() {
  return (
    <section className="bg-mist px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Investment opportunity
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            {investment.headline}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <article className="h-full rounded-[1.75rem] bg-navy p-8 text-white">
              <p className="text-xs uppercase tracking-[0.18em] text-aqua">
                {investment.seedLabel}
              </p>
              <p className="num mt-4 text-4xl font-extrabold sm:text-5xl">
                {investment.seed}
              </p>
              <dl className="mt-10 space-y-4 border-t border-white/10 pt-8 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-white/55">Structure</dt>
                  <dd className="font-semibold">{investment.structure}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/55">Target ROI</dt>
                  <dd className="font-semibold">{investment.irr}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/55">Payback</dt>
                  <dd className="font-semibold">{investment.payback}</dd>
                </div>
              </dl>
              <p className="mt-8 text-xs leading-relaxed text-white/45">
                Illustrative assumptions. {financialDisclaimer}
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white hover:bg-accent-dark"
              >
                Contact SPINLOOP BD
              </a>
            </article>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={80}>
            <article className="h-full rounded-[1.75rem] border border-line bg-white p-8">
              <h3 className="text-lg font-bold text-navy">Use of funds</h3>
              <ul className="mt-8 space-y-5">
                {investment.useOfFunds.map((item) => (
                  <li key={item.label}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-muted">{item.label}</span>
                      <span className="num font-extrabold text-navy">{item.pct}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-mist">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-aqua"
                        style={{ width: item.pct }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
