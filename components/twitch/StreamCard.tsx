import type { Stream } from "@/lib/mock-data";
import { formatViewers } from "@/lib/mock-data";
import { COLORS } from "@/lib/colors";

export function StreamCard({ stream }: { stream: Stream }) {
  return (
    <div className="group cursor-pointer">
      {/* Thumbnail */}
      <div className="relative aspect-video rounded-md overflow-hidden mb-2">
        <div
          className="w-full h-full transition-transform duration-200 group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${stream.gradientFrom} 0%, ${stream.gradientTo} 100%)`,
          }}
        />

        {/* Overlay content */}
        <div className="absolute inset-0 pointer-events-none">
          {/* LIVE badge */}
          <div className="absolute top-2 left-2">
            <span className="bg-live-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide">
              Live
            </span>
          </div>

          {/* Viewer count */}
          <div className="absolute bottom-2 left-2">
            <span className="bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
              {formatViewers(stream.viewers)} viewers
            </span>
          </div>
        </div>
      </div>

      {/* Info row */}
      <div className="flex gap-2">
        {/* Avatar */}
        <a href="#" className="flex-shrink-0">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold select-none"
            style={{ backgroundColor: stream.avatarColor }}
          >
            {stream.displayName[0].toUpperCase()}
          </div>
        </a>

        <div className="flex-1 min-w-0">
          {/* Title */}
          <h3 className="text-sm font-semibold text-text-primary truncate group-hover:text-purple transition-colors leading-tight">
            {stream.title}
          </h3>
          {/* Channel name */}
          <a
            href="#"
            className="text-sm text-text-muted hover:text-text-primary truncate block leading-tight transition-colors"
          >
            {stream.displayName}
            {stream.isVerified && (
              <svg
                className="inline ml-1 mb-0.5"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill={COLORS.purple}
              >
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
              </svg>
            )}
          </a>
          {/* Game */}
          <a
            href="#"
            className="text-sm text-text-muted hover:text-text-primary truncate block leading-tight transition-colors"
          >
            {stream.game}
          </a>
          {/* Tags */}
          <div className="flex gap-1 mt-1.5 flex-wrap">
            {stream.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-sidebar-bg hover:bg-border text-text-primary px-2 py-0.5 rounded-full cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
