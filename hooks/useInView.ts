"use client";

import { useEffect, useRef, useState } from "react";

type Options = {
  /** Fraction of the element that must be visible. */
  threshold?: number;
  /** Shrink the viewport so a section animates slightly after it starts appearing. */
  rootMargin?: string;
  /** Keep the revealed state once triggered (default). Set false to re-animate on exit. */
  once?: boolean;
};

/**
 * Reveal-on-scroll trigger.
 *
 * Sections used to animate off a `mounted` flag, which fires at page load — so
 * everything below the fold finished animating before you ever scrolled to it.
 * This ties the reveal to the element actually entering the viewport instead.
 *
 * Falls back to visible when IntersectionObserver is unavailable, so content is
 * never left stuck at opacity 0.
 */
export function useInView<T extends HTMLElement = HTMLElement>({
  threshold = 0.1,
  rootMargin = "0px 0px -8% 0px",
  once = true,
}: Options = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
