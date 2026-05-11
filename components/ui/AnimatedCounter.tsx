"use client";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
  valueClassName?: string;
  color?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  className,
  valueClassName,
  color,
}: AnimatedCounterProps) {
  const { ref, inView } = useInView(0.3);
  const count = useAnimatedCounter(value, 2200, inView);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={cn("text-center", className)}>
      <div
        className={cn("font-display font-bold tracking-tight leading-none", valueClassName)}
        style={color ? { color } : undefined}
      >
        {prefix}
        {count.toLocaleString("en-US")}
        {suffix}
      </div>
      <div className="text-surface/60 text-sm mt-2 font-sans uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}
