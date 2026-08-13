import { useId } from "react";
import clsx from "clsx";

type GridTextureProps = {
  className?: string;
  color?: string;
  opacity?: number;
  size?: number;
  fade?: "none" | "bottom" | "edges";
};

/** Malha técnica quase invisível — sugere precisão/laboratório sem virar um grid de UI. */
export function GridTexture({
  className,
  color = "#477eeb",
  opacity = 0.07,
  size = 64,
  fade = "edges",
}: GridTextureProps) {
  const rawId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const patternId = `grid-${rawId}`;
  const maskId = `grid-mask-${rawId}`;

  const maskFill =
    fade === "bottom"
      ? `url(#${maskId})`
      : fade === "edges"
        ? `url(#${maskId})`
        : "white";

  return (
    <svg
      aria-hidden
      className={clsx("pointer-events-none absolute inset-0 h-full w-full", className)}
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id={patternId} width={size} height={size} patternUnits="userSpaceOnUse">
          <path
            d={`M ${size} 0 L 0 0 0 ${size}`}
            fill="none"
            stroke={color}
            strokeWidth="1"
          />
        </pattern>
        {fade === "bottom" && (
          <linearGradient id={maskId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>
        )}
        {fade === "edges" && (
          <radialGradient id={maskId} cx="50%" cy="50%" r="75%">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </radialGradient>
        )}
      </defs>
      {fade !== "none" && (
        <mask id={`mask-${rawId}`}>
          <rect width="100%" height="100%" fill={maskFill} />
        </mask>
      )}
      <rect
        width="100%"
        height="100%"
        fill={`url(#${patternId})`}
        opacity={opacity}
        mask={fade !== "none" ? `url(#mask-${rawId})` : undefined}
      />
    </svg>
  );
}
