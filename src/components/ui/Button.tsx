import clsx from "clsx";
import type { AnchorHTMLAttributes } from "react";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
  tone?: "dark" | "light";
  showIcon?: boolean;
};

export function Button({
  children,
  className,
  variant = "primary",
  tone = "dark",
  showIcon = true,
  ...props
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2.5 text-[13px] uppercase tracking-[0.18em] transition-all duration-500 ease-premium";

  const styles = {
    primary:
      tone === "dark"
        ? "bg-azure-800 text-bone-50 px-8 py-4 hover:bg-azure-600"
        : "bg-bone-50 text-ink-900 px-8 py-4 hover:bg-azure-300",
    secondary:
      tone === "dark"
        ? "border border-azure-800/25 text-ink-900 px-8 py-4 hover:border-azure-600 hover:text-azure-600"
        : "border border-azure-300/45 text-bone-50 px-8 py-4 hover:border-azure-300",
    ghost:
      tone === "dark"
        ? "text-ink-900 px-0 py-1 border-b border-azure-800/30 hover:border-azure-600 hover:text-azure-600"
        : "text-bone-50 px-0 py-1 border-b border-azure-300/45 hover:border-azure-300",
  } as const;

  return (
    <a className={clsx(base, styles[variant], className)} {...props}>
      {children}
      {showIcon && (
        <ArrowUpRight
          className="h-3.5 w-3.5 transition-transform duration-500 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.5}
        />
      )}
    </a>
  );
}
