import { equipment } from "../data/content";
import { equipmentIcons } from "./ui/Icons";
import { IconBox } from "./ui/IconBox";
import { Reveal } from "./ui/Reveal";

export function Equipment() {
  return (
    <section className="bg-paper px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="/images/payment-kiosk.png"
              alt="Smart payment kiosk in a modern laundry hub"
              className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Infrastructure
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
              Built for Reliability
            </h2>
          </Reveal>
          <div className="mt-10 space-y-4">
            {equipment.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <article className="flex gap-4 rounded-[1.5rem] border border-line bg-white p-5">
                  <IconBox icon={equipmentIcons[i]} />
                  <div>
                    <h3 className="font-bold text-navy">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {item.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
