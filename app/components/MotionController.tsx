"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const groupSelectors = [
  ".metrics-section",
  ".company-grid",
  ".area-cards",
  ".impact-grid",
  ".value-list",
  ".news-grid",
  ".simple-grid",
  ".capability-cloud",
  ".directory-grid",
  ".company-facts",
  ".impact-data-grid",
  ".benefit-grid",
  ".career-area-list",
  ".editorial-grid",
];

const singleSelectors = [
  ".content-grid",
  ".purpose-grid",
  ".leadership-note",
  ".area-directory > article",
  ".impact-pillars > article",
  ".young-talent > *",
  ".contact-section > *",
];

export function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const root = document.documentElement;
    root.classList.add("js-motion");

    const revealTargets = new Set<Element>();
    document.querySelectorAll(".reveal").forEach((element) => revealTargets.add(element));

    groupSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((group) => {
        Array.from(group.children).forEach((child, index) => {
          const element = child as HTMLElement;
          element.classList.add("motion-item");
          element.style.setProperty("--motion-delay", `${Math.min(index, 7) * 70}ms`);
          revealTargets.add(element);
        });
      });
    });

    document.querySelectorAll(singleSelectors.join(",")).forEach((element, index) => {
      const item = element as HTMLElement;
      item.classList.add("motion-item");
      item.style.setProperty("--motion-delay", `${(index % 3) * 70}ms`);
      revealTargets.add(item);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    revealTargets.forEach((target) => observer.observe(target));

    const progress = document.querySelector<HTMLElement>(".scroll-progress");
    let ticking = false;
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      progress?.style.setProperty("--scroll-progress", String(value));
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateProgress);
    };
    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });

    const stage = document.querySelector<HTMLElement>(".ecosystem-stage");
    const onPointerMove = (event: PointerEvent) => {
      if (!stage) return;
      const bounds = stage.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 14;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 14;
      stage.style.setProperty("--stage-x", `${x.toFixed(2)}px`);
      stage.style.setProperty("--stage-y", `${y.toFixed(2)}px`);
    };
    const resetStage = () => {
      stage?.style.setProperty("--stage-x", "0px");
      stage?.style.setProperty("--stage-y", "0px");
    };
    stage?.addEventListener("pointermove", onPointerMove);
    stage?.addEventListener("pointerleave", resetStage);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      stage?.removeEventListener("pointermove", onPointerMove);
      stage?.removeEventListener("pointerleave", resetStage);
      root.classList.remove("js-motion");
    };
  }, [pathname]);

  return <div className="scroll-progress" aria-hidden="true" />;
}
