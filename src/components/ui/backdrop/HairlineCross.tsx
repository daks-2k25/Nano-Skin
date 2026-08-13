import clsx from "clsx";

type HairlineCrossProps = {
  className?: string;
  color?: string;
  size?: number;
  opacity?: number;
};

/** Pequena marca técnica em cruz — como um ponto de referência de precisão. */
export function HairlineCross({
  className,
  color = "#729bf0",
  size = 14,
  opacity = 0.35,
}: HairlineCrossProps) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 14 14"
      className={clsx("pointer-events-none absolute", className)}
      style={{ opacity }}
    >
      <line x1="7" y1="0" x2="7" y2="14" stroke={color} strokeWidth="1" />
      <line x1="0" y1="7" x2="14" y2="7" stroke={color} strokeWidth="1" />
    </svg>
  );
}
