import { useState, useEffect } from "react";

export function useCart() {
  const [cart, setCart] = useState(() => {
    
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  
  const addProduct = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((p) => p.id === product.id);
      if (exists) return prevCart; 
      return [...prevCart, product];
    });
  };

  
  const removeProduct = (productId) => {
    setCart((prevCart) => prevCart.filter((p) => p.id !== productId));
  };

  return { cart, addProduct, removeProduct };
}
