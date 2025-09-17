import React from "react";
import { useCart } from "../../context/CartContext";
import styles from "./ProductCard.module.css"

export function ProductCard({ product }) {
    const { addProduct } = useCart()

    return (
        <div className={styles['product-card']}>
            <img src={product.image} alt={product.title} className={styles['product-image']} />
            <div className={styles['product-info']}>
                <h3 className={styles['product-title']}>{product.title}</h3>
                <p className={styles['product-price']}>Preço: R$ {product.price.toFixed(2)}</p>
                <p className={styles['product-rating']}>Rating: {product.rating} ⭐</p>
                <p className={`${styles['product-tag']} ${styles[product.tag.toLowerCase()]}`}>{product.tag}</p>
                <button onClick={() => addProduct(product)} className={styles['product-button']}>
                    Adicionar ao carrinho
                </button>
            </div>
        </div>
    );
}
