import React from "react";
import styled from "styled-components";
import { useCart } from "../../context/CartContext";
import { ProductCard } from "../../components/ProductCard/ProductCard";

const CartPage = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
`;

const Title = styled.h2`
    font-size: 2.5rem;
    color: var(--color-fg-strong);
    margin-top: 0;
    margin-bottom: 2rem;
    border-bottom: 2px solid var(--color-border);
    padding-bottom: 1rem;
`;

const EmptyCart = styled.p`
    text-align: center;
    font-size: 1.2rem;
    padding: 4rem 2rem;
    background-color: var(--color-surface-2);
    border: 1px dashed var(--color-border);
    border-radius: 12px;
    color: var(--color-fg);
`;

const CartList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
`;

const CartItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const RemoveButton = styled.button`
    width: 90%;
    padding: 10px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;

    background-color: transparent;
    border: 2px solid #e53e3e;
    color: #e53e3e;

    transition: all 0.2s ease-in-out;

    &:hover,
    &:focus-visible {
        background-color: #e53e3e;
        color: #ffffff;
    }

    &:focus-visible {
        outline: 3px solid var(--color-focus);
        outline-offset: 2px;
    }
`;

export function Cart() {
  const { cart, removeProduct } = useCart();

  return (
    <CartPage>
      <Title>Meu Carrinho</Title>

      {cart.length === 0 ? (
        <EmptyCart>Seu carrinho está vazio 😢</EmptyCart>
      ) : (
        <CartList>
          {cart.map((product) => (
            <CartItem key={product.id}>
              <ProductCard product={product} />
              <RemoveButton onClick={() => removeProduct(product.id)}>
                Remover
              </RemoveButton>
            </CartItem>
          ))}
        </CartList>
      )}
    </CartPage>
  );
}