import { useEffect, useRef, useState } from "react";

/**
 * Intersection Observer–based count-up hook.
 * Respects prefers-reduced-motion: returns the final value immediately.
 *
 * @param {number} end      – target number
 * @param {number} duration – animation duration in ms (default 1800)
 * @returns [ref, displayValue]  attach `ref` to the element you want to observe
 */
export default function useCountUp(end, duration = 1800) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect user motion preference
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setValue(end);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);

        // easeOutQuart
        const ease = (t) => 1 - Math.pow(1 - t, 4);

        const animate = (timestamp) => {
          if (!startTimeRef.current) startTimeRef.current = timestamp;
          const elapsed = timestamp - startTimeRef.current;
          const progress = Math.min(elapsed / duration, 1);
          setValue(Math.round(ease(progress) * end));
          if (progress < 1) {
            rafRef.current = requestAnimationFrame(animate);
          }
        };

        rafRef.current = requestAnimationFrame(animate);
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, duration]);

  return [ref, value];
}
