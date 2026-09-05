import type { ComponentType, SVGProps } from "react";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="#0B1220" />
      <circle cx="18" cy="18" r="10" fill="none" stroke="#3EC6C9" strokeWidth="1.7" />
      <circle cx="18" cy="18" r="5.2" fill="none" stroke="#2B6CFF" strokeWidth="1.7" />
      <circle cx="18" cy="12.2" r="1.7" fill="#E8F4FF" />
    </svg>
  );
}

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

function I({ className = "h-6 w-6", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    />
  );
}

export function IconSparkle(p: IconProps) {
  return (
    <I {...p}>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6.2 6.2l2.1 2.1M15.7 15.7l2.1 2.1M17.8 6.2l-2.1 2.1M8.3 15.7l-2.1 2.1" />
      <circle cx="12" cy="12" r="3.2" />
    </I>
  );
}

export function IconShield(p: IconProps) {
  return (
    <I {...p}>
      <path d="M12 3.5 5 6.5v5.2c0 4.2 2.8 7.2 7 8.8 4.2-1.6 7-4.6 7-8.8V6.5L12 3.5Z" />
      <path d="m9 12 2 2 4-4" />
    </I>
  );
}

export function IconClock(p: IconProps) {
  return (
    <I {...p}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.2L14.5 14" />
    </I>
  );
}

export function IconLayers(p: IconProps) {
  return (
    <I {...p}>
      <path d="m4 8 8-4 8 4-8 4-8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 16 8 4 8-4" />
    </I>
  );
}

export function IconList(p: IconProps) {
  return (
    <I {...p}>
      <path d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01" />
    </I>
  );
}

export function IconChip(p: IconProps) {
  return (
    <I {...p}>
      <rect x="5" y="7" width="14" height="10" rx="2" />
      <path d="M9 7V4M15 7V4M9 20v-3M15 20v-3M5 10H3M5 14H3M21 10h-2M21 14h-2" />
    </I>
  );
}

export function IconMachine(p: IconProps) {
  return (
    <I {...p}>
      <rect x="4" y="3.5" width="16" height="17" rx="2.5" />
      <circle cx="12" cy="13" r="4.2" />
      <circle cx="8" cy="6.3" r=".7" fill="currentColor" />
      <circle cx="10.4" cy="6.3" r=".7" fill="currentColor" />
    </I>
  );
}

export function IconDrop(p: IconProps) {
  return (
    <I {...p}>
      <path d="M12 3.5S6.5 10 6.5 14.2A5.5 5.5 0 0 0 12 19.7a5.5 5.5 0 0 0 5.5-5.5C17.5 10 12 3.5 12 3.5Z" />
    </I>
  );
}

export function IconLock(p: IconProps) {
  return (
    <I {...p}>
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10" />
    </I>
  );
}

export function IconMap(p: IconProps) {
  return (
    <I {...p}>
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2" />
    </I>
  );
}

export function IconBuilding(p: IconProps) {
  return (
    <I {...p}>
      <rect x="4" y="8" width="16" height="13" rx="1.5" />
      <path d="M9 21v-6h6v6M8 4h8l1 4H7l1-4Z" />
    </I>
  );
}

export function IconBriefcase(p: IconProps) {
  return (
    <I {...p}>
      <rect x="3.5" y="8" width="17" height="12" rx="2" />
      <path d="M9 8V6.5A1.5 1.5 0 0 1 10.5 5h3A1.5 1.5 0 0 1 15 6.5V8M3.5 13h17" />
    </I>
  );
}

export const whyIcons: ComponentType<IconProps>[] = [
  IconSparkle,
  IconShield,
  IconClock,
  IconLayers,
  IconList,
  IconChip,
];

export const equipmentIcons: ComponentType<IconProps>[] = [
  IconMachine,
  IconDrop,
  IconLock,
];

export const gtmIcons: ComponentType<IconProps>[] = [
  IconMap,
  IconBuilding,
  IconBriefcase,
];
