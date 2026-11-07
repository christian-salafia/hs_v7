"use client";

import { useEffect, type RefObject } from "react";

/**
 * Fades in every `.reveal` element inside `ref` as it scrolls into view
 * (styles in globals.css). Reusable across home-page sections.
 */
export function useReveal(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = root.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    targets.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i, 4) * 80}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ref]);
}
