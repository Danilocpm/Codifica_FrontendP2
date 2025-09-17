import React from "react";
import { useCart } from "../../context/CartContext";

export function ProductCard({ product }) {
    const { addProduct } = useCart()

    return (
        <div className="flex flex-col max-w-xs bg-[--color-surface] border border-[--color-border] rounded-xl shadow-sm overflow-hidden transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-md">
            <img src={product.image} alt={product.title} className="w-full aspect-video object-cover bg-[--color-surface-2]" />
            <div className="flex flex-col gap-2 p-4">
                <h3 className="text-lg font-semibold text-[--color-fg-strong] m-0 whitespace-nowrap overflow-hidden text-ellipsis">{product.title}</h3>
                <p className="text-xl font-bold text-[--color-accent] m-0">Preço: R$ {product.price.toFixed(2)}</p>
                <p className="text-sm text-[--color-fg] m-0">Rating: {product.rating} ⭐</p>
                <p className={`self-start py-1 px-2.5 rounded-full text-xs font-bold uppercase my-1 ${product.tag.toLowerCase() === 'novo' ? 'bg-[--color-accent] text-[--color-surface]' : product.tag.toLowerCase() === 'oferta' ? 'bg-[#e64a19] text-white' : product.tag.toLowerCase() === 'mais-vendido' ? 'bg-[--color-star] text-[--color-fg-strong]' : ''}`}>{product.tag}</p>
                <button onClick={() => addProduct(product)} className="w-full py-3 mt-2 text-white border-none rounded-lg text-base font-semibold text-center cursor-pointer transition-all duration-200 ease-in-out hover:brightness-110 active:scale-98 focus-visible:outline-3 focus-visible:outline-[--color-focus] focus-visible:outline-offset-2 bg-[var(--color-accent)]" >
                    Adicionar ao carrinho
                </button>
            </div>
        </div>
    );
}
