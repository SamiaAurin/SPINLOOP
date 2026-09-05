import { brand, heroMetrics } from "../data/content";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-navy text-white"
    >
      <img
        src="/images/hero-laundry-hub.png"
        alt="Modern SPINLOOP laundry hub with commercial front-load washers and dryers"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/82 to-navy/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 lg:justify-center lg:px-8 lg:pb-24 lg:pt-28">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-aqua">
          {brand.positioning}
        </p>
        <h1 className="max-w-3xl text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
          Clean Living,
          <br />
          Made Simple.
        </h1>
        <p className="mt-6 text-lg font-semibold text-white/90">
          {brand.promise}
        </p>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/70">
          SPINLOOP BD provides affordable, hygienic, convenient coin, card and
          app-based self-service laundry for urban customers — a premium hub
          built for modern Dhaka living.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#why"
            className="rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-lift)] transition hover:bg-accent-dark"
          >
            Discover SPINLOOP
          </a>
          <a
            href="#how"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            How It Works
          </a>
        </div>

        <div className="mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {heroMetrics.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-md"
            >
              <p className="num text-lg font-extrabold tracking-tight">
                {item.value}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-white/55">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
