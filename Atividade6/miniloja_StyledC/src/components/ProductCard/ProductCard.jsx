import React from "react";
import styled from "styled-components";
import { useCart } from "../../context/CartContext";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 320px;

    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 12px;
    box-shadow: var(--shadow-sm);
    overflow: hidden;

    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-md);
    }
`;

const ProductImage = styled.img`
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    background-color: var(--color-surface-2);
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
`;

const ProductTitle = styled.h3`
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-fg-strong);
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const ProductPrice = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--color-accent);
    margin: 0;
`;

const ProductRating = styled.p`
    font-size: 0.9rem;
    color: var(--color-fg);
    margin: 0;

    &::after {
        content: ' ⭐';
        color: var(--color-star);
    }
`;

const ProductTag = styled.p`
    align-self: flex-start;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    margin: 4px 0;

    &.novo {
        background-color: var(--color-accent);
        color: var(--color-surface);
    }

    &.promo {
        background-color: #e64a19;
        color: #ffffff;
    }

    &.mais-vendido {
        background-color: var(--color-star);
        color: var(--color-fg-strong);
    }
`;

const ProductButton = styled.button`
    width: 100%;
    padding: 12px;
    margin-top: 8px;

    background-color: var(--color-accent);
    color: #ffffff;
    border: none;
    border-radius: 8px;

    font-size: 1rem;
    font-weight: 600;
    text-align: center;

    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;

    &:hover {
        filter: brightness(1.1);
    }

    &:active {
        transform: scale(0.98);
    }

    &:focus-visible {
        outline: 3px solid var(--color-focus);
        outline-offset: 2px;
    }
`;

export function ProductCard({ product }) {
    const { addProduct } = useCart()

    return (
        <Card>
            <ProductImage src={product.image} alt={product.title} />
            <ProductInfo>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>Preço: R$ {product.price.toFixed(2)}</ProductPrice>
                <ProductRating>Rating: {product.rating}</ProductRating>
                <ProductTag className={product.tag.toLowerCase()}>{product.tag}</ProductTag>
                <ProductButton onClick={() => addProduct(product)}>
                    Adicionar ao carrinho
                </ProductButton>
            </ProductInfo>
        </Card>
    );
}