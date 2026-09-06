import { useEffect, useState } from "react";
import { nav } from "../data/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open
        ? "border-b border-white/10 bg-navy/90 backdrop-blur-xl"
        : "bg-transparent"
        }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 lg:px-8 ${scrolled ? "h-[68px]" : "h-[84px]"
          }`}
      >
        <a
          href="#home"
          className="flex items-center rounded-xl border border-white/20 bg-white/85 px-2 py-1 shadow-lg backdrop-blur-md"
        >
          <img
            src="/images/spinloop-logo.png"
            alt="SPINLOOP BD"
            className="h-9 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-white/70 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#how"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-[13px] font-semibold text-white shadow-[var(--shadow-lift)] transition hover:bg-accent-dark sm:inline-flex"
          >
            Explore SPINLOOP
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 h-0.5 w-4 bg-white transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-4 bg-white transition ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 h-0.5 w-4 bg-white transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`xl:hidden ${open ? "block" : "hidden"}`}
      >
        <nav
          className="border-t border-white/10 bg-navy px-5 py-5"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#how"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white"
          >
            Explore SPINLOOP
          </a>
        </nav>
      </div>
    </header>
  );
}
