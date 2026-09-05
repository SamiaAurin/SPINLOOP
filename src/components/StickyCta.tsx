export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy/95 p-3 backdrop-blur sm:hidden">
      <a
        href="#how"
        className="flex h-12 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white"
      >
        Explore SPINLOOP
      </a>
    </div>
  );
}
