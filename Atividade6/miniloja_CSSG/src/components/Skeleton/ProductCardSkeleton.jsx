import React from "react";
import "./ProductCardSkeleton.css"

export function ProductCardSkeleton() {
  return (
    <div className="product-card skeleton">
      <div className="product-image skeleton-box"></div>
      <div className="product-info">
        <div className="skeleton-box title"></div>
        <div className="skeleton-box price"></div>
        <div className="skeleton-box rating"></div>
        <div className="skeleton-box tag"></div>
        <div className="skeleton-box button"></div>
      </div>
    </div>
  );
}
