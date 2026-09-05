import { brand, footerNav } from "../data/content";
import { LogoMark } from "./ui/Icons";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8" />
            <span className="font-extrabold tracking-tight">{brand.name}</span>
          </div>
          <p className="mt-4 text-sm text-white/60">{brand.promise}</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70" aria-label="Footer">
          {footerNav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="text-sm text-white/70">
          <a href={`mailto:${brand.email}`} className="block hover:text-white">
            {brand.email}
          </a>
          <p className="mt-1">{brand.location}</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-white/40 lg:px-8">
        © {brand.name}
      </div>
    </footer>
  );
}
