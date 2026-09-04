import type { Category } from "@/lib/mock-data";
import { formatViewers } from "@/lib/mock-data";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <a href="#" className="group flex-shrink-0 w-[144px] cursor-pointer">
      {/* Game art — portrait 3:4 ratio */}
      <div className="relative w-full aspect-[3/4] rounded-md overflow-hidden mb-2">
        <div
          className="w-full h-full transition-transform duration-200 group-hover:scale-105"
          style={{
            background: `linear-gradient(180deg, ${category.gradientFrom} 0%, ${category.gradientTo} 100%)`,
          }}
        />

        {/* Category name overlay */}
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent">
          <p className="text-white text-sm font-bold px-3 pb-3 leading-tight line-clamp-2">
            {category.name}
          </p>
        </div>
      </div>

      <p className="text-xs text-text-muted mb-1.5">
        {formatViewers(category.viewers)} viewers
      </p>

      <div className="flex flex-wrap gap-1">
        {category.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-sidebar-bg hover:bg-border text-text-primary px-2 py-0.5 rounded-full transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
