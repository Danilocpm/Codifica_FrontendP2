import React from "react";
import styles from "./ProductCardSkeleton.module.css"

export function ProductCardSkeleton() {
  return (
    <div className={`${styles['product-card']} ${styles.skeleton}`}>
      <div className={`${styles['product-image']} ${styles['skeleton-box']}`}></div>
      <div className={styles['product-info']}>
        <div className={`${styles['skeleton-box']} ${styles.title}`}></div>
        <div className={`${styles['skeleton-box']} ${styles.price}`}></div>
        <div className={`${styles['skeleton-box']} ${styles.rating}`}></div>
        <div className={`${styles['skeleton-box']} ${styles.tag}`}></div>
        <div className={`${styles['skeleton-box']} ${styles.button}`}></div>
      </div>
    </div>
  );
}
