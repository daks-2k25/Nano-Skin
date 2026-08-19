"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useSafeReducedMotion } from "./Reveal";

type CountUpProps = {
  value: number;
  decimals?: number;
  suffix?: string;
  className?: string;
};

/** Conta de 0 até o valor final quando entra na viewport — usa vírgula decimal (pt-BR). */
export function CountUp({ value, decimals = 0, suffix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useSafeReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 28, stiffness: 90 });
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView) motionValue.set(reduceMotion ? value : value);
  }, [isInView, value, motionValue, reduceMotion]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduceMotion) {
      el.textContent = `${value.toFixed(decimals).replace(".", ",")}${suffix}`;
      return;
    }
    return spring.on("change", (v) => {
      el.textContent = `${v.toFixed(decimals).replace(".", ",")}${suffix}`;
    });
  }, [spring, decimals, suffix, reduceMotion, value]);

  return (
    <span ref={ref} className={className}>
      {`${(0).toFixed(decimals).replace(".", ",")}${suffix}`}
    </span>
  );
}
