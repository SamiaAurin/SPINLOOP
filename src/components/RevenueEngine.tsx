import { financialDisclaimer, revenueStreams, revenueTotals } from "../data/content";
import { Reveal } from "./ui/Reveal";

export function RevenueEngine() {
  return (
    <section className="bg-paper px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Revenue engine
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Multiple ways a hub earns
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {revenueStreams.map((stream, i) => (
                <div
                  key={stream}
                  className="flex items-center gap-4 rounded-[1.5rem] border border-line bg-white px-5 py-6"
                >
                  <span className="num text-sm font-extrabold text-accent">
                    0{i + 1}
                  </span>
                  <p className="font-semibold text-navy">{stream}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={80}>
            <div className="flex h-full flex-col justify-between rounded-[1.75rem] bg-navy p-8 text-white">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-aqua">
                  {revenueTotals.monthlyLabel}
                </p>
                <p className="num mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                  {revenueTotals.monthly}
                </p>
              </div>
              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                  {revenueTotals.annualLabel}
                </p>
                <p className="num mt-3 text-3xl font-extrabold">
                  {revenueTotals.annual}
                </p>
              </div>
              <p className="mt-8 text-xs leading-relaxed text-white/45">
                Base case. {financialDisclaimer}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
