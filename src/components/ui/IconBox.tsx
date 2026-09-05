import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

export function IconBox({
  icon: Icon,
}: {
  icon: ComponentType<IconProps>;
}) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mist text-accent">
      <Icon className="h-6 w-6" />
    </div>
  );
}
