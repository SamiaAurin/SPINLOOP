import { pricing } from "../data/content";
import { Reveal } from "./ui/Reveal";

export function Pricing() {
  return (
    <section id="pricing" className="bg-mist px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Pricing
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Simple, Transparent Pricing
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pricing.plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 70}>
              <article
                className={`flex h-full flex-col rounded-[1.75rem] p-7 ${
                  plan.featured
                    ? "bg-navy text-white shadow-[var(--shadow-card)]"
                    : "border border-line bg-white"
                }`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                    plan.featured ? "text-aqua" : "text-accent"
                  }`}
                >
                  {plan.name}
                </p>
                <p className="num mt-5 text-4xl font-extrabold tracking-tight">
                  {plan.price}
                </p>
                <p
                  className={`mt-3 text-sm ${plan.featured ? "text-white/70" : "text-muted"}`}
                >
                  {plan.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {pricing.extras.map((item, i) => (
            <Reveal key={item.name} delay={i * 40}>
              <div className="rounded-2xl border border-line bg-white px-4 py-4">
                <p className="text-xs text-muted">{item.name}</p>
                <p className="num mt-1 text-lg font-extrabold text-navy">
                  {item.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
