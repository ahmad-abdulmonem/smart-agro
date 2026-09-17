"use client";

import { useEffect, useRef, useState } from "react";
import { createFieldAtmosphere } from "@/lib/field-atmosphere";

export default function HeroAtmosphere() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const paused = useRef(false);
  const [isPaused, setIsPaused] = useState(false);
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    const surface = canvas.current;
    const host = surface?.closest("section");
    if (!surface || !host) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let renderer: ReturnType<typeof createFieldAtmosphere> | null = null;
    let frame = 0;
    let visible = false;
    let elapsed = 0;
    let last = 0;
    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    function stop() { cancelAnimationFrame(frame); frame = 0; last = 0; }
    function render(now: number) {
      frame = 0;
      if (!renderer || !visible || document.hidden || paused.current || reduced.matches) return;
      if (!last) last = now;
      if (now - last >= 1000 / 30) {
        elapsed += Math.min(now - last, 100) / 1000;
        last = now;
        x += (targetX - x) * 0.05;
        y += (targetY - y) * 0.05;
        renderer.draw(elapsed, x, y);
      }
      frame = requestAnimationFrame(render);
    }
    function sync() {
      stop();
      if (renderer && visible && !document.hidden && !paused.current && !reduced.matches) frame = requestAnimationFrame(render);
    }
    function setup() {
      stop();
      renderer?.dispose();
      renderer = null;
      surface!.style.opacity = "0";
      if (!reduced.matches) {
        try { renderer = createFieldAtmosphere(surface!); } catch { renderer = null; }
      }
      if (renderer) { renderer.draw(elapsed, x, y); surface!.style.opacity = "1"; }
      setAvailable(Boolean(renderer));
      sync();
    }
    function pointer(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;
      const rect = host!.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      targetY = -((event.clientY - rect.top) / rect.height - 0.5) * 2;
    }
    function resetPointer() { targetX = 0; targetY = 0; }
    function lost(event: Event) {
      event.preventDefault();
      stop();
      renderer?.dispose();
      renderer = null;
      surface!.style.opacity = "0";
      setAvailable(false);
    }
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    const resize = new ResizeObserver(() => { renderer?.resize(); renderer?.draw(elapsed, x, y); });
    observer.observe(host);
    resize.observe(surface);
    host.addEventListener("pointermove", pointer, { passive: true });
    host.addEventListener("pointerleave", resetPointer);
    surface.addEventListener("webglcontextlost", lost);
    surface.addEventListener("webglcontextrestored", setup);
    document.addEventListener("visibilitychange", sync);
    reduced.addEventListener("change", setup);
    // The control signals the animation loop without rebuilding the GPU resources.
    surface.addEventListener("effects-toggle", sync);
    setup();
    return () => {
      stop();
      observer.disconnect();
      resize.disconnect();
      renderer?.dispose();
      host.removeEventListener("pointermove", pointer);
      host.removeEventListener("pointerleave", resetPointer);
      surface.removeEventListener("webglcontextlost", lost);
      surface.removeEventListener("webglcontextrestored", setup);
      surface.removeEventListener("effects-toggle", sync);
      document.removeEventListener("visibilitychange", sync);
      reduced.removeEventListener("change", setup);
    };
  }, []);

  return <>
    <canvas ref={canvas} aria-hidden="true" className="hero-atmosphere pointer-events-none absolute inset-0 h-full w-full" />
    {available && <button type="button" aria-pressed={isPaused} className="hero-effects-control absolute right-6 z-10 min-h-11 rounded-full border border-[#F7C35F]/60 bg-[#263C28]/80 px-4 text-xs text-white hover:bg-[#334B35]" onClick={() => {
      paused.current = !paused.current;
      setIsPaused(paused.current);
      canvas.current?.dispatchEvent(new Event("effects-toggle"));
    }}>{isPaused ? "Resume effects" : "Pause effects"}</button>}
  </>;
}
