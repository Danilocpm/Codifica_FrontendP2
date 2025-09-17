import React from "react";
import { useCart } from "../../context/CartContext";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import styles from "./Cart.module.css"

export function Cart() {
  const { cart, removeProduct } = useCart();

  return (
    <div className={styles['cart-page']}>
      <h2>Meu Carrinho</h2>

      {cart.length === 0 ? (
        <p>Seu carrinho está vazio 😢</p>
      ) : (
        <div className={styles['cart-list']}>
          {cart.map((product) => (
            <div key={product.id} className={styles['cart-item']}>
              <ProductCard product={product} />
              <button
                onClick={() => removeProduct(product.id)}
                className={styles['remove-button']}
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
