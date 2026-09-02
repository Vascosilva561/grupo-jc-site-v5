"use client";

import { useEffect, useRef, useState } from "react";

const splineScriptId = "spline-viewer-script";
const splineScriptUrl = "https://unpkg.com/@splinetool/viewer@1.12.98/build/spline-viewer.js";
const sceneUrl = "https://prod.spline.design/NstUGB7T86MqYMi7/scene.splinecode";

export function LazySpline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLElement | null>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isViewerReady, setIsViewerReady] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);
  const [mountId] = useState(() => Date.now());

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion) return;

    if (!("IntersectionObserver" in window)) {
      setIsNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsNearViewport(true);
        observer.disconnect();
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!isNearViewport || prefersReducedMotion) return;

    if (customElements.get("spline-viewer")) {
      setIsViewerReady(true);
      return;
    }

    let script = document.getElementById(splineScriptId) as HTMLScriptElement | null;
    const onLoad = () => {
      void customElements.whenDefined("spline-viewer").then(() => setIsViewerReady(true));
    };
    const onError = () => setHasFailed(true);

    if (!script) {
      script = document.createElement("script");
      script.id = splineScriptId;
      script.type = "module";
      script.src = splineScriptUrl;
      script.addEventListener("load", onLoad, { once: true });
      script.addEventListener("error", onError, { once: true });
      document.head.appendChild(script);
      return () => {
        script?.removeEventListener("load", onLoad);
        script?.removeEventListener("error", onError);
      };
    }

    script.addEventListener("load", onLoad, { once: true });
    script.addEventListener("error", onError, { once: true });
    return () => {
      script?.removeEventListener("load", onLoad);
      script?.removeEventListener("error", onError);
    };
  }, [isNearViewport, prefersReducedMotion]);

  useEffect(() => {
    if (!isViewerReady || prefersReducedMotion || hasFailed) return;

    const viewer = viewerRef.current;
    if (!viewer) return;

    const handleLoadComplete = () => setHasFailed(false);
    const handleLoadError = () => setHasFailed(true);
    viewer.addEventListener("load-complete", handleLoadComplete);
    viewer.addEventListener("error", handleLoadError);
    viewer.addEventListener("context-loss", handleLoadError);

    // Some mobile WebGL implementations fail silently. Never leave a blank
    // canvas covering the section when the scene cannot be rendered.
    const timeout = window.setTimeout(() => setHasFailed(true), 12000);

    return () => {
      window.clearTimeout(timeout);
      viewer.removeEventListener("load-complete", handleLoadComplete);
      viewer.removeEventListener("error", handleLoadError);
      viewer.removeEventListener("context-loss", handleLoadError);
    };
  }, [isViewerReady, prefersReducedMotion, hasFailed]);

  useEffect(() => {
    const viewerEl = viewerRef.current;
    if (!viewerEl) return;

    return () => {
      try {
        const splineApp = (viewerEl as any).spline || (viewerEl as any)._spline || (viewerEl as any).app;
        if (splineApp && typeof splineApp.dispose === "function") {
          splineApp.dispose();
        }

        const shadowRoot = viewerEl.shadowRoot;
        if (shadowRoot) {
          const canvas = shadowRoot.querySelector("canvas");
          if (canvas) {
            const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
            if (gl) {
              gl.getExtension("WEBGL_lose_context")?.loseContext();
            }
          }
        }
      } catch (err) {
        // ignore cleanup errors
      }
    };
  }, [isViewerReady]);

  return (
    <div ref={containerRef} className="home-v2-story__spline" aria-hidden="true">
      <div className="home-v2-story__spline-fallback" />
      {isViewerReady && !prefersReducedMotion && !hasFailed && (
        <spline-viewer
          key={mountId}
          ref={(node) => {
            viewerRef.current = node;
          }}
          url={sceneUrl}
          loading="eager"
          loading-anim
          loading-anim-type="spinner-big-light"
          background="#111827"
        />
      )}
    </div>
  );
}
