import Link from "next/link";
import { COLORS } from "@/lib/colors";

export function TopNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[50px] bg-nav-bg border-b border-border flex items-center px-2 gap-1">
      {/* Logo + nav links */}
      <div className="flex items-center gap-0.5 flex-shrink-0">
        <Link
          href="/"
          className="flex items-center justify-center w-[50px] h-[50px] hover:bg-white/10 transition-colors"
        >
          {/* Twitch Glitch logo — path scaled from official 2400×2800 viewBox */}
          <svg
            width="20"
            height="23"
            viewBox="0 0 40 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill={COLORS.purple}
              d="M8 0L0 8V38H12V46L20 38H27L40 25V0H8Z"
            />
            <rect fill="white" x="15" y="12" width="3" height="10" />
            <rect fill="white" x="23" y="12" width="3" height="10" />
          </svg>
        </Link>

        <nav className="flex items-center">
          <a className="px-3 h-[50px] flex items-center text-text-primary text-sm font-semibold hover:bg-white/10 transition-colors">
            Browse
          </a>
          <a className="px-3 h-[50px] flex items-center text-text-muted text-sm font-medium hover:bg-white/10 hover:text-text-primary transition-colors hidden lg:flex">
            Esports
          </a>
          <a className="px-3 h-[50px] flex items-center text-text-muted text-sm font-medium hover:bg-white/10 hover:text-text-primary transition-colors hidden lg:flex">
            Music
          </a>
          <a className="px-3 h-[50px] flex items-center text-text-muted text-sm font-medium hover:bg-white/10 hover:text-text-primary transition-colors hidden xl:flex">
            Creative
          </a>
        </nav>
      </div>

      {/* Search */}
      <div className="flex-1 flex justify-center px-4 max-w-xl mx-auto w-full">
        <div className="flex w-full h-[34px] rounded overflow-hidden border border-border focus-within:border-purple transition-colors">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-page-bg px-3 text-sm text-text-primary placeholder-text-muted outline-none"
          />
          <button className="bg-search-btn-bg border-l border-border px-3 flex items-center hover:bg-search-btn-bg-hover transition-colors">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke={COLORS.textMuted}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
