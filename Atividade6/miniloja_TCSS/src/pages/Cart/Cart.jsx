import React from "react";
import { useCart } from "../../context/CartContext";
import { ProductCard } from "../../components/ProductCard/ProductCard";

export function Cart() {
  const { cart, removeProduct } = useCart();

  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <h2 className="text-4xl text-[--color-fg-strong] mt-0 mb-8 border-b-2 border-[--color-border] pb-4">Meu Carrinho</h2>

      {cart.length === 0 ? (
        <p className="text-center text-xl p-16 px-8 bg-[--color-surface-2] border border-dashed border-[--color-border] rounded-xl text-[--color-fg]">Seu carrinho está vazio 😢</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cart.map((product) => (
            <div key={product.id} className="flex flex-col gap-3">
              <ProductCard product={product} />
              <button
                onClick={() => removeProduct(product.id)}
                className="w-11/12 p-2.5 rounded-lg text-sm font-semibold uppercase cursor-pointer bg-transparent border-2 border-red-600 text-red-600 transition-all duration-200 ease-in-out hover:bg-red-600 hover:text-white focus-visible:outline-3 focus-visible:outline-[--color-focus] focus-visible:outline-offset-2"
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
