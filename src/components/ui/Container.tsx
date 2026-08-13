import type { ReactNode } from "react";
import clsx from "clsx";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("mx-auto w-full max-w-shell px-6 md:px-10 lg:px-16", className)}>
      {children}
    </div>
  );
}
