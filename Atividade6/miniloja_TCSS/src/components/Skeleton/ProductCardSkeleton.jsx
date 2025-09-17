import React from "react";

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col max-w-xs bg-[--color-surface] border border-[--color-border] rounded-xl shadow-sm overflow-hidden">
      <div className="w-full aspect-video object-cover bg-[--color-surface-2] border-b border-[--color-border] skeleton-box"></div>
      <div className="flex flex-col gap-2 p-4">
        <div className="skeleton-box h-6 w-4/5"></div>
        <div className="skeleton-box h-7 w-2/5"></div>
        <div className="skeleton-box w-3/5 h-4.5"></div>
        <div className="skeleton-box w-7/20 h-6.5 rounded-full"></div>
        <div className="skeleton-box h-11 rounded-lg"></div>
      </div>
    </div>
  );
}
