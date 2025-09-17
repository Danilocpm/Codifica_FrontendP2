import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const SkeletonBox = styled.div`
  background-color: var(--color-skeleton);
  background-image: linear-gradient(
    90deg,
    transparent,
    var(--color-skeleton-highlight),
    transparent
  );
  background-size: 200% 100%;
  background-repeat: no-repeat;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 6px;
`;

const SkeletonCard = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 320px;

    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 12px;
    box-shadow: var(--shadow-sm);
    overflow: hidden;
`;

const SkeletonImage = styled(SkeletonBox)`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  background-color: var(--color-surface-2);
  border-bottom: 1px solid var(--color-border);
`;

const SkeletonInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
`;

const SkeletonTitle = styled(SkeletonBox)`
  height: 24px;
  width: 80%;
`;

const SkeletonPrice = styled(SkeletonBox)`
  height: 28px;
  width: 40%;
`;

const SkeletonRating = styled(SkeletonBox)`
  width: 60%;
  height: 18px;
`;

const SkeletonTag = styled(SkeletonBox)`
  width: 35%;
  height: 26px;
  border-radius: 20px;
`;

const SkeletonButton = styled(SkeletonBox)`
  height: 44px;
  border-radius: 8px;
`;

export function ProductCardSkeleton() {
  return (
    <SkeletonCard>
      <SkeletonImage />
      <SkeletonInfo>
        <SkeletonTitle />
        <SkeletonPrice />
        <SkeletonRating />
        <SkeletonTag />
        <SkeletonButton />
      </SkeletonInfo>
    </SkeletonCard>
  );
}