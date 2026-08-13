import clsx from "clsx";

type ArcLineProps = {
  className?: string;
  color?: string;
  opacity?: number;
  strokeWidth?: number;
};

/** Arco/círculo parcial que sangra para fora da seção — profundidade editorial discreta. */
export function ArcLine({
  className,
  color = "#729bf0",
  opacity = 0.16,
  strokeWidth = 1,
}: ArcLineProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 800 800"
      className={clsx("pointer-events-none absolute", className)}
    >
      <circle
        cx="400"
        cy="400"
        r="380"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
      <circle
        cx="400"
        cy="400"
        r="300"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        opacity={opacity * 0.6}
      />
    </svg>
  );
}
