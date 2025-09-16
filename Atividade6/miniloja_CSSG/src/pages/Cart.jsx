import React from "react";
import { useCart } from "../context/CartContext";
import { ProductCard } from "../components/ProductCard";

export function Cart() {
  const { cart, removeProduct } = useCart();

  return (
    <div className="cart-page">
      <h2>Meu Carrinho</h2>

      {cart.length === 0 ? (
        <p>Seu carrinho está vazio 😢</p>
      ) : (
        <div className="cart-list">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <ProductCard product={product} />
              <button
                onClick={() => removeProduct(product.id)}
                className="remove-button"
              >
                Remover
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
