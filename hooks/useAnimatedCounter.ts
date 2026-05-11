"use client";
import { useEffect, useState } from "react";

export function useAnimatedCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const tick = () => {
      const now = Date.now();
      const remaining = Math.max(endTime - now, 0);
      const elapsed = duration - remaining;
      const progress = elapsed / duration;

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setCount(current);

      if (remaining > 0) {
        requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(tick);
  }, [target, duration, start]);

  return count;
}
