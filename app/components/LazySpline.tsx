"use client";

import { useEffect, useRef, useState } from "react";

const splineScriptId = "spline-viewer-script";
const splineScriptUrl = "https://unpkg.com/@splinetool/viewer@1.12.98/build/spline-viewer.js";
const sceneUrl = "https://prod.spline.design/NstUGB7T86MqYMi7/scene.splinecode";

type SplineViewerElement = HTMLElement & {
  app?: { dispose?: () => void };
  spline?: { dispose?: () => void };
  _spline?: { dispose?: () => void };
};

function disposeSplineViewer(viewer: SplineViewerElement | null) {
  const runtime = viewer?.spline ?? viewer?._spline ?? viewer?.app;
  runtime?.dispose?.();
}

export function LazySpline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<SplineViewerElement | null>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isAndroid] = useState(() =>
    typeof navigator !== "undefined" && /Android/i.test(navigator.userAgent),
  );
  const [isViewerReady, setIsViewerReady] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);
  const [renderAttempt, setRenderAttempt] = useState(0);
  const retryCountRef = useRef(0);
  const retryTimerRef = useRef<number | null>(null);
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
    if (!container || prefersReducedMotion || isAndroid) return;

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
  }, [prefersReducedMotion, isAndroid]);

  useEffect(() => {
    if (!isNearViewport || prefersReducedMotion || isAndroid) return;

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
  }, [isNearViewport, prefersReducedMotion, isAndroid]);

  useEffect(() => {
    if (!isViewerReady || prefersReducedMotion || isAndroid || hasFailed) return;

    const viewer = viewerRef.current;
    if (!viewer) return;

    const handleLoadComplete = () => {
      retryCountRef.current = 0;
      setHasFailed(false);
    };
    viewer.addEventListener("load-complete", handleLoadComplete);
    const handleContextLoss = () => {
      // Mobile GPUs can lose WebGL context once while the scene is starting.
      // Remount once so the animation can recover without a full page reload.
      if (retryCountRef.current >= 1) {
        setHasFailed(true);
        return;
      }

      retryCountRef.current += 1;
      setHasFailed(true);
      retryTimerRef.current = window.setTimeout(() => {
        setHasFailed(false);
        setRenderAttempt((attempt) => attempt + 1);
      }, 700);
    };
    viewer.addEventListener("context-loss", handleContextLoss);

    // Some mobile WebGL implementations fail silently. Never leave a blank
    // canvas covering the section when the scene cannot be rendered.
    const timeout = window.setTimeout(() => {
      const canvas = viewerRef.current?.shadowRoot?.querySelector("canvas");
      const canvasIsVisible = canvas && getComputedStyle(canvas).visibility !== "hidden";

      // Spline's load-complete event is not emitted consistently by every
      // mobile browser. Keep a scene whose canvas is already visible; only
      // switch to the fallback when rendering never became visible.
      if (!canvasIsVisible) setHasFailed(true);
    }, 12000);

    return () => {
      window.clearTimeout(timeout);
      viewer.removeEventListener("load-complete", handleLoadComplete);
      viewer.removeEventListener("context-loss", handleContextLoss);
    };
  }, [isViewerReady, prefersReducedMotion, isAndroid, hasFailed]);

  useEffect(() => {
    return () => {
      if (retryTimerRef.current !== null) {
        window.clearTimeout(retryTimerRef.current);
      }

      // The custom element owns its render loop and WebGL resources. On a
      // client-side route change React removes the element, but the viewer
      // runtime can otherwise keep working in the background. Dispose only
      // the viewer runtime (never force WebGL context loss) so returning to
      // Home starts a fresh, fluid scene without degrading the next mount.
      disposeSplineViewer(viewerRef.current);
      viewerRef.current = null;
    };
  }, []);

  return (
    <div ref={containerRef} className="home-v2-story__spline" aria-hidden="true">
      <div className="home-v2-story__spline-fallback" />
      {isViewerReady && !prefersReducedMotion && !isAndroid && !hasFailed && (
        <spline-viewer
          key={`${mountId}-${renderAttempt}`}
          ref={(node) => {
            if (!node) {
              // React invokes the callback with null whenever the viewer is
              // removed after a failed mount or a context-loss recovery.
              disposeSplineViewer(viewerRef.current);
              viewerRef.current = null;
              return;
            }

            viewerRef.current = node as SplineViewerElement;
            if (node) {
              // Keep the critical Viewer options as attributes as well as JSX
              // properties; this is more reliable in mobile custom-element
              // implementations that upgrade after React hydrates.
              node.setAttribute("url", sceneUrl);
              node.setAttribute("loading", "eager");
              node.setAttribute("loading-anim", "");
              node.setAttribute("loading-anim-type", "spinner-big-light");
              node.setAttribute("background", "transparent");
            }
          }}
          url={sceneUrl}
          loading="eager"
          loading-anim
          loading-anim-type="spinner-big-light"
          background="transparent"
        />
      )}
    </div>
  );
}
