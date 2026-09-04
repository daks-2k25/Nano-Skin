"use client";

import { useEffect, useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { useSafeReducedMotion } from "./Reveal";

type CountUpProps = {
  value: number;
  decimals?: number;
  suffix?: string;
  className?: string;
  /** Controla quando a contagem começa. Sem essa prop, conta assim que monta. */
  start?: boolean;
};

function format(v: number, decimals: number, suffix: string) {
  return `${v.toFixed(decimals).replace(".", ",")}${suffix}`;
}

/**
 * Conta de 0 até o valor final — usa vírgula decimal (pt-BR).
 *
 * Recebe o "start" de um `whileInView`/`onViewportEnter` do componente pai
 * em vez de observar a própria viewport: com várias instâncias vizinhas,
 * cada uma com seu próprio `useInView`, o primeiro elemento de cada par
 * nunca recebia `isInView: true` (mesmo o segundo funcionando normalmente) —
 * uma instabilidade do IntersectionObserver do framer-motion com refs muito
 * próximos entre si. Delegar a detecção de scroll a um único observer no
 * pai elimina a corrida de vez.
 */
export function CountUp({ value, decimals = 0, suffix = "", className, start = true }: CountUpProps) {
  const reduceMotion = useSafeReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 28, stiffness: 90 });
  const [display, setDisplay] = useState(() => format(0, decimals, suffix));

  useEffect(() => {
    if (start) motionValue.set(value);
  }, [start, value, motionValue]);

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(format(value, decimals, suffix));
      return;
    }
    return spring.on("change", (v) => {
      setDisplay(format(v, decimals, suffix));
    });
  }, [spring, decimals, suffix, reduceMotion, value]);

  return <span className={className}>{display}</span>;
}
