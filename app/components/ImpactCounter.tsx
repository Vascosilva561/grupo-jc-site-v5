"use client";

import { useEffect, useRef, useState } from "react";

type ImpactCounterProps = {
  value: number;
  suffix?: string;
};

export function ImpactCounter({ value, suffix = "" }: ImpactCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      const frame = window.requestAnimationFrame(() => setDisplayValue(value));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      const startedAt = performance.now();
      const duration = 1500;
      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setDisplayValue(Math.round(value * eased));
        if (progress < 1) window.requestAnimationFrame(tick);
      };
      window.requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.35 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref} className="impact-counter">{displayValue.toLocaleString("pt-PT")}{suffix}</span>;
}
