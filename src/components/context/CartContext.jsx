import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const initialData = JSON.parse(localStorage.getItem("CartItems")) || [];
  const [cart, setCart] = useState(initialData);
  function addToCart(product) {
    const indice = cart.findIndex((x) => x.id === product.id);
    if (indice >= 0) {
      let newCart = [...cart];
      newCart[indice].amount = newCart[indice].amount + 1;
      setCart([...newCart]);
      localStorage.setItem("CartItems", JSON.stringify([...newCart]));
    } else {
      setCart([...cart, product]);
      localStorage.setItem("CartItems", JSON.stringify([...cart, product]));
    }
  }
  function removeFromCart(product) {
    const indice = cart.findIndex((x) => x.id === product.id);
    let newCart = [...cart];
    newCart[indice].amount = newCart[indice].amount - 1;
    setCart([...newCart]);
    localStorage.setItem("CartItems", JSON.stringify([...newCart]));
  }

  function getCartTotalPrice() {
    const total = cart.reduce((acc, item) => acc + item.price * item.amount, 0);
    return total;
  }
  function clearCart() {
    localStorage.removeItem("CartItems");
    setCart([]);
  }
  const value = {
    cart,
    addToCart,
    removeFromCart,
    getCartTotalPrice,
    clearCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
