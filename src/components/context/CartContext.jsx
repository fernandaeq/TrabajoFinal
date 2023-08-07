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
  function removeFromCart(product) {
    const indice = cart.findIndex((x) => x.id === product.id);
    let newCart = [...cart];
    newCart[indice].amount = newCart[indice].amount - 1;
    setCart([...newCart]);
  }

  function getCartTotalPrice() {
    const total = cart.reduce((acc, item) => acc + item.price * item.amount, 0);

    return total;
  }
  const value = { cart, addToCart, removeFromCart, getCartTotalPrice };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
