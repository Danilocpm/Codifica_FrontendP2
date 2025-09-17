import React from "react";
import { useCart } from "../../context/CartContext";
import "./ProductCard.css"

export function ProductCard({ product }) {
    const { addProduct } = useCart()

    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">Preço: R$ {product.price.toFixed(2)}</p>
                <p className="product-rating">Rating: {product.rating} ⭐</p>
                <p className={`product-tag ${product.tag.toLowerCase()}`}>{product.tag}</p>
                <button onClick={() => addProduct(product)} className="product-button">
                    Adicionar ao carrinho
                </button>
            </div>
        </div>
    );
}
