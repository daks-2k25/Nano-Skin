import clsx from "clsx";
import type { ReactNode } from "react";

export function Eyebrow({
  children,
  className,
  tone = "dark",
}: {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={clsx(
        "flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest2",
        tone === "dark" ? "text-stone-700" : "text-bone-200/70",
        className
      )}
    >
      <span
        className={clsx(
          "h-px w-8",
          tone === "dark" ? "bg-azure-500" : "bg-azure-300"
        )}
      />
      {children}
    </span>
  );
}
