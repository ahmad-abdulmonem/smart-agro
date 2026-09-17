"use client";

import { useEffect } from "react";

/** Progressive enhancement: content is visible even without JavaScript. */
export default function SectionMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const sections = document.querySelectorAll("#main > section");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (reduced.matches || entry.target.contains(document.activeElement)) continue;
        // Animate content groups, never the section backgrounds or anchor positions.
        const groups = entry.target.querySelectorAll<HTMLElement>("[data-reveal]");
        const targets = groups.length ? Array.from(groups) : Array.from(entry.target.children).filter(
          (child): child is HTMLElement => child instanceof HTMLElement && getComputedStyle(child).position !== "absolute",
        );
        targets.forEach((target, index) => {
          const animation = target.animate([
            { opacity: 0.15, transform: "translateY(28px)" },
            { opacity: 1, transform: "translateY(0)" },
          ], { duration: 700, delay: Math.min(index * 50, 150), easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" });
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      }
    }, { threshold: 0, rootMargin: "0px 0px -40px 0px" });
    sections.forEach((section) => observer.observe(section));
    const cancel = () => { animations.forEach((animation) => animation.cancel()); animations.clear(); };
    const onPreference = () => { if (reduced.matches) cancel(); };
    // Keyboard navigation never lands on content still fading into view.
    document.addEventListener("focusin", cancel);
    reduced.addEventListener("change", onPreference);
    return () => {
      observer.disconnect();
      cancel();
      document.removeEventListener("focusin", cancel);
      reduced.removeEventListener("change", onPreference);
    };
  }, []);
  return null;
}
