import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  function addToCart(product) {
    const indice = cart.findIndex((x) => x.id === product.id);
    if (indice >= 0) {
      let newCart = [...cart];
      newCart[indice].amount = newCart[indice].amount + 1;
      setCart([...newCart]);
    } else {
      setCart([...cart, product]);
    }
  }
  function removeFromCart(params) {}
  function getCartState() {
    const total = cart.reduce((acc, item) => acc + item.price * item.amount, 0);
    return total;
  }
  const value = { addToCart, removeFromCart, getCartState };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
