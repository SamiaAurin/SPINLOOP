import { brand } from "../data/content";
import { Reveal } from "./ui/Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy px-5 py-28 text-white lg:px-8 lg:py-36"
    >
      <img
        src="/images/lounge.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            Clean Living,
            <br />
            Made Simple.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">
            SPINLOOP BD — Premium self-service laundry for modern urban
            Bangladesh.
          </p>
          <a
            href={`mailto:${brand.email}`}
            className="mt-8 inline-flex rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white hover:bg-accent-dark"
          >
            Get in Touch
          </a>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-14 grid gap-6 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-white/45">Contact</p>
              <a className="mt-1 inline-block font-semibold" href={`mailto:${brand.email}`}>
                {brand.email}
              </a>
            </div>
            <div>
              <p className="text-white/45">Location</p>
              <p className="mt-1 font-semibold">{brand.location}</p>
            </div>
            <div>
              <p className="text-white/45">Website</p>
              <p className="mt-1 font-semibold">{brand.website}</p>
            </div>
            <div>
              <p className="text-white/45">Social</p>
              <p className="mt-1 font-semibold">{brand.social}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
