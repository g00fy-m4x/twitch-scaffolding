"use client";

import { useState, useEffect, useCallback } from "react";
import { formatViewers } from "@/lib/mock-data";
import { COLORS } from "@/lib/colors";
import { FEATURED } from "@/lib/mock-data";

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % FEATURED.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + FEATURED.length) % FEATURED.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next, paused]);

  const stream = FEATURED[current];

  return (
    <div
      className="relative w-full overflow-hidden mb-8"
      style={{ height: "320px" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Full-width background art */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: COLORS.sidebarBg,
        }}
      />

      {/* Center video area */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[55%] flex items-stretch">
        <div
          className="flex-1 relative"
          style={{
            background: `linear-gradient(180deg, ${stream.videoFrom} 0%, ${stream.videoTo} 100%)`,
          }}
        >
          {/* LIVE badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-live-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide">
              Live
            </span>
          </div>

          {/* Stream info overlay — top right of video */}
          <div className="absolute top-3 right-3 flex items-start gap-2">
            <div
              className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-white text-sm font-bold select-none mt-0.5"
              style={{ backgroundColor: stream.avatarColor }}
            >
              {stream.avatarInitial}
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight">
                {stream.displayName}
              </p>
              <p className="text-xs text-text-muted leading-tight">{stream.game}</p>
              <p className="text-xs text-text-muted leading-tight mt-0.5">
                {formatViewers(stream.viewers)} viewers
              </p>
              <div className="flex gap-1 mt-1.5 flex-wrap">
                {stream.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-tag-overlay text-text-primary px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left arrow */}
      <button
        onClick={prev}
        className="absolute left-[22%] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors z-10"
        aria-label="Previous"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        className="absolute right-[22%] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors z-10"
        aria-label="Next"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </svg>
      </button>

      {/* Bottom dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {FEATURED.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              i === current
                ? "bg-white w-4"
                : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
