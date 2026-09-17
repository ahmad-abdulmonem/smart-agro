"use client";
import { useRef, useState } from "react";
export default function AgricultureMatters() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState("");
  return <section aria-labelledby="agriculture-title" className="relative flex min-h-[400px] w-full items-center overflow-hidden sm:min-h-[440px]">
    <video id="agriculture-video" ref={video} loop muted playsInline preload="none" poster="/hero_section_image.png" aria-label="Rural farming and agriculture" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setError("The video could not load. Please try again later.")} className="absolute inset-0 h-full w-full object-cover"><source src="/VideoBannerStockVideos-RuralFarmingAgricultureNature.mp4" type="video/mp4" /></video>
    <div className="pointer-events-none absolute inset-0 bg-black/50" />
    <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-6 py-16 text-center sm:px-10 lg:flex-row lg:text-left">
      <h2 id="agriculture-title" className="max-w-xl font-livvic text-3xl font-bold leading-tight sm:text-4xl">Agriculture Matters to the Future</h2>
      <div className="flex flex-col items-center gap-3"><button type="button" aria-label={playing ? "Pause video" : "Play video"} aria-controls="agriculture-video" className="group flex flex-col items-center gap-4 rounded-2xl p-3 font-bold text-[#F7C35F]" onClick={async () => {
        if (!video.current) return;
        setError("");
        if (playing) video.current.pause();
        else { try { await video.current.play(); } catch { setError("The video could not play. Please try again."); } }
      }}>
        <span className="flex h-24 w-24 items-center justify-center rounded-full bg-[#F7C35F] text-[#263C28] shadow-lg transition-colors group-hover:bg-[#f8cf7c] sm:h-28 sm:w-28">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor">
            {playing ? <><rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" /></> : <path d="M8 5v14l11-7z" />}
          </svg>
        </span>
        <span className="min-w-28">{playing ? "Pause video" : "Play video"}</span>
      </button><p role="status" className="max-w-xs text-sm">{error}</p></div>
    </div>
  </section>;
}
