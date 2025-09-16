import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
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

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}

// hook para usar no resto do app
export function useCart() {
  return useContext(CartContext);
}
