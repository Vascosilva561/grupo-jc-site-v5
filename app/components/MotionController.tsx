"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "./ArrowUpRight";

const groupSelectors = [
  ".metrics-section",
  ".company-grid",
  ".area-cards",
  ".impact-grid",
  ".value-list",
  ".news-grid",
  ".simple-grid",
  ".capability-cloud",
  ".company-facts",
  ".impact-data-grid",
  ".benefit-grid",
  ".career-area-list",
  ".editorial-grid",
  ".news-card-grid",
  ".home-v2-metrics",
  ".home-v2-area-grid",
  ".home-v2-impact__grid",
  ".sobre-values-grid",
  ".sobre-purpose-grid",
  ".areas-overview__grid",
];

const singleSelectors = [
  ".content-grid",
  ".purpose-grid",
  ".leadership-note",
  ".area-directory > article",
  ".impact-pillars > article",
  ".young-talent > *",
  ".contact-section > *",
  ".home-v2 .site-header",
  ".home-v2-hero__copy",
  ".home-v2-hero__image",
  ".home-v2-intro__copy",
  ".home-v2-intro__image",
  ".home-v2-section-title",
  ".home-v2-carousel",
  ".home-v2-areas__heading",
  ".home-v2-vision__heading",
  ".home-v2-vision__image",
  ".home-v2-impact__heading",
  ".home-v2-impact > .home-v2-text-link",
  ".home-v2-careers",
  ".sobre-hero-content",
  ".empresas-hero",
  ".sobre-history-inner > *",
  ".sobre-values-head",
  ".sobre-leadership-banner > .shell",
  ".sobre-leadership-photo",
  ".sobre-leadership-content",
  ".directory-grid .directory-card-content",
  ".news-listing__bar",
  ".news-article-header__copy",
  ".news-article-header .news-visual",
  ".news-article-details",
  ".news-article-body__content",
  ".news-article-body__content > section",
  ".next-news",
];

export function MotionController() {
  const pathname = usePathname();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [backToTopOnDark, setBackToTopOnDark] = useState(false);

  useEffect(() => {
    const updateBackToTop = () => {
      setShowBackToTop(window.scrollY > 500);

      const button = document.querySelector<HTMLElement>(".back-to-top");
      if (!button) return;

      const previousPointerEvents = button.style.pointerEvents;
      button.style.pointerEvents = "none";
      let element = document.elementFromPoint(window.innerWidth - 48, window.innerHeight - 48);
      button.style.pointerEvents = previousPointerEvents;

      while (element) {
        const background = window.getComputedStyle(element).backgroundColor;
        const match = background.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
        if (match && (match[4] === undefined || Number(match[4]) > 0.05)) {
          const [red, green, blue] = match.slice(1, 4).map(Number);
          setBackToTopOnDark((red * 0.2126 + green * 0.7152 + blue * 0.0722) < 120);
          return;
        }
        element = element.parentElement;
      }
    };

    updateBackToTop();
    window.addEventListener("scroll", updateBackToTop, { passive: true });
    window.addEventListener("resize", updateBackToTop);
    return () => {
      window.removeEventListener("scroll", updateBackToTop);
      window.removeEventListener("resize", updateBackToTop);
    };
  }, [pathname]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const root = document.documentElement;
    root.classList.add("js-motion");

    const revealTargets = new Set<Element>();
    const observedTargets = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observedTargets.delete(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    const registerTarget = (element: Element, delay: number) => {
      const item = element as HTMLElement;
      item.classList.add("motion-item");
      item.style.setProperty("--motion-delay", `${delay}ms`);
      revealTargets.add(item);

      if (item.classList.contains("is-visible")) return;

      const bounds = item.getBoundingClientRect();
      const isAlreadyVisible = bounds.top < window.innerHeight * 0.93 && bounds.bottom > 0;
      if (isAlreadyVisible) {
        item.classList.add("is-visible");
        observer.unobserve(item);
        observedTargets.delete(item);
        return;
      }

      if (!observedTargets.has(item)) {
        observer.observe(item);
        observedTargets.add(item);
      }
    };

    const registerTargets = () => {
      document.querySelectorAll(".reveal").forEach((element) => registerTarget(element, 0));

      groupSelectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((group) => {
          Array.from(group.children).forEach((child, index) => {
            registerTarget(child, Math.min(index, 7) * 70);
          });
        });
      });

      document.querySelectorAll(singleSelectors.join(",")).forEach((element, index) => {
        registerTarget(element, (index % 3) * 70);
      });
    };

    registerTargets();

    // Filters and client-side route changes can replace cards after this effect runs.
    // Register those nodes as soon as React commits them so they never remain hidden.
    const mutationObserver = new MutationObserver(() => {
      window.requestAnimationFrame(registerTargets);
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

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
      mutationObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      stage?.removeEventListener("pointermove", onPointerMove);
      stage?.removeEventListener("pointerleave", resetStage);
      root.classList.remove("js-motion");
    };
  }, [pathname]);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <button
        type="button"
        className={`back-to-top ${showBackToTop ? "is-visible" : ""} ${backToTopOnDark ? "is-over-dark" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
      >
        <ArrowUpRight size={20} />
      </button>
    </>
  );
}
