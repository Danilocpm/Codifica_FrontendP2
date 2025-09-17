import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { ProductCardSkeleton } from "../../components/Skeleton/ProductCardSkeleton";

const CatalogGrid = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem;
  
  grid-template-columns: 1fr;

  @media (min-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export function Catalog({ products }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CatalogGrid>
      {loading
        ? Array.from({ length: 6 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))
        : products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </CatalogGrid>
  );
}