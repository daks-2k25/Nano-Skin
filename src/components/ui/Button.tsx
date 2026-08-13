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
    "group inline-flex items-center justify-center gap-2.5 transition-all duration-500 ease-premium";

  const styles = {
    primary:
      "rounded-full bg-gradient-to-br from-[#ed2d32] via-[#e30c13] to-[#d4090f] px-8 py-4 text-[14px] font-medium tracking-[0.01em] text-bone-50 shadow-[0_16px_34px_-12px_rgba(227,12,19,0.55)] hover:from-[#ef5b5f] hover:to-[#c70a11] hover:shadow-[0_20px_42px_-10px_rgba(227,12,19,0.65)] active:scale-[0.98] md:px-9 md:py-[18px]",
    secondary:
      "rounded-full px-8 py-4 text-[13px] uppercase tracking-[0.18em] " +
      (tone === "dark"
        ? "border border-azure-800/25 text-ink-900 hover:border-azure-600 hover:text-azure-600"
        : "border border-azure-300/45 text-bone-50 hover:border-azure-300"),
    ghost:
      "px-0 py-1 text-[13px] uppercase tracking-[0.18em] border-b " +
      (tone === "dark"
        ? "text-ink-900 border-azure-800/30 hover:border-azure-600 hover:text-azure-600"
        : "text-bone-50 border-azure-300/45 hover:border-azure-300"),
  } as const;

  return (
    <a className={clsx(base, styles[variant], className)} {...props}>
      {children}
      {showIcon && variant !== "primary" && (
        <ArrowUpRight
          className="h-3.5 w-3.5 transition-transform duration-500 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.5}
        />
      )}
    </a>
  );
}
