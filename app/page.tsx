import { TopNav } from "@/components/twitch/TopNav";
import { LeftSidebar } from "@/components/twitch/LeftSidebar";
import { HeroCarousel } from "@/components/twitch/HeroCarousel";
import { StreamCard } from "@/components/twitch/StreamCard";
import { CategoryCard } from "@/components/twitch/CategoryCard";
import { STREAMS, CATEGORIES } from "@/lib/mock-data";

export default function HomePage() {
  const featuredStreams = STREAMS.slice(0, 3);
  const popularStreams = STREAMS.slice(3, 9);
  const moreStreams = STREAMS.slice(9, 12);

  return (
    <div className="min-h-screen bg-page-bg text-text-primary">
      <TopNav />

      <div className="flex pt-[50px] min-h-screen">
        <LeftSidebar />

        <main className="flex-1 ml-[240px] min-w-0">
          <div className="px-6 py-6">

            {/* Hero carousel */}
            <HeroCarousel />

            {/* Live channels section */}
            <section className="mb-10">
              <SectionHeader
                title="Live channels we think you'll like"
                href="#"
                showHref={false}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {featuredStreams.map((stream) => (
                  <StreamCard key={stream.id} stream={stream} />
                ))}
              </div>
            </section>

            <div className="border-t border-border mb-10" />

            {/* Categories section */}
            <section className="mb-10">
              <SectionHeader
                title="Categories we think you'll like"
                href="#"
                showHref={false}
              />
              <div className="flex gap-4 overflow-x-auto pb-2 -mx-6 px-6">
                {CATEGORIES.map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))}
              </div>
            </section>

            <div className="border-t border-border mb-10" />

            {/* Popular streams section */}
            <section className="mb-10">
              <SectionHeader title="Popular" href="#" showHref={false} />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {popularStreams.map((stream) => (
                  <StreamCard key={stream.id} stream={stream} />
                ))}
              </div>
            </section>

            <div className="border-t border-border mb-10" />

            {/* Up & coming section */}
            <section className="mb-10">
              <SectionHeader title="Up & Coming" href="#" showHref={false} />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {moreStreams.map((stream) => (
                  <StreamCard key={stream.id} stream={stream} />
                ))}
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}

function SectionHeader({ title, href, showHref }: { title: string; href: string; showHref: boolean }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold text-text-primary">{title}</h2>
      {showHref ? (
        <a
          href={href}
          className="text-sm font-semibold text-purple hover:text-purple-hover transition-colors"
        >
          Show more
        </a>
      ) : (
        <div />
      )}
    </div>
  );
}
