import { useEffect, useRef, useState } from "react";

export function CountUp({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = useState(value);
  const match = value.match(/[\d.]+/)?.[0];

  useEffect(() => {
    if (!match) return;
    const el = ref.current;
    if (!el) return;
    const target = Number(match);
    if (Number.isNaN(target)) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1100;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - (1 - t) ** 3;
          const current = target * eased;
          const formatted = match.includes(".")
            ? current.toFixed(2)
            : Math.round(current).toString();
          setDisplay(value.replace(match, formatted));
          if (t < 1) requestAnimationFrame(tick);
          else setDisplay(value);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [match, value]);

  return (
    <p ref={ref} className={className}>
      {display}
    </p>
  );
}
