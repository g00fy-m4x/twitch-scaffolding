import { STREAMS, formatViewers } from "@/lib/mock-data";

export function LeftSidebar() {
  const channels = STREAMS.slice(0, 8);

  return (
    <aside className="fixed left-0 top-[50px] bottom-0 w-[240px] bg-sidebar-bg border-r border-border overflow-y-auto flex flex-col">
      <div className="px-4 pt-5 pb-2">
        {/* Header */}
        <div className="flex items-center justify-start mb-3">
          <h2 className="text-sm font-semibold text-text-primary">Channels</h2>
        </div>

        {/* Channel list */}
        <div className="space-y-0.5">
          {channels.map((channel) => (
            <a
              key={channel.id}
              href="#"
              className="flex items-start justify-between gap-2 px-2 py-2 rounded hover:bg-white/10 group transition-colors"
            >
              {/* Avatar */}
              <div
                className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold select-none mt-0.5"
                style={{ backgroundColor: channel.avatarColor }}
              >
                {channel.displayName[0].toUpperCase()}
              </div>

              {/* Left: name + game */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-text-primary truncate leading-tight">
                  {channel.displayName}
                </p>
                <p className="text-xs text-text-muted truncate leading-tight mt-0.5">
                  {channel.game}
                </p>
              </div>

              {/* Right: live dot + viewer count */}
              <div className="flex items-center gap-1 flex-shrink-0 pt-0.5">
                <span className="w-2 h-2 rounded-full bg-live-red flex-shrink-0" />
                <span className="text-xs font-semibold text-text-primary tabular-nums">
                  {formatViewers(channel.viewers)}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
