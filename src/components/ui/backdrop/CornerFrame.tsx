import clsx from "clsx";

type CornerFrameProps = {
  className?: string;
  color?: string;
  size?: number;
  inset?: number;
};

/** Marcas de canto tipo mira/precisão — moldura incompleta em vez de borda fechada. */
export function CornerFrame({
  className,
  color = "border-azure-500",
  size = 18,
  inset = -1,
}: CornerFrameProps) {
  const style = { width: size, height: size };
  const off = `${inset}px`;

  return (
    <div aria-hidden className={clsx("pointer-events-none absolute inset-0", className)}>
      <span
        className={clsx("absolute border-l border-t", color)}
        style={{ ...style, left: off, top: off }}
      />
      <span
        className={clsx("absolute border-r border-t", color)}
        style={{ ...style, right: off, top: off }}
      />
      <span
        className={clsx("absolute border-l border-b", color)}
        style={{ ...style, left: off, bottom: off }}
      />
      <span
        className={clsx("absolute border-r border-b", color)}
        style={{ ...style, right: off, bottom: off }}
      />
    </div>
  );
}
