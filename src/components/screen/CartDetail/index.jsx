import React, { useContext } from "react";
import NavBar from "../../organisms/NavBar";
import { CartContext } from "../../context/CartContext";
import CartDetailItem from "../../molecules/CartDetailItem";
import { useNavigate } from "react-router-dom";

function CartDetail() {
  const { cart, getCartTotalPrice, addToCart, removeFromCart } =
    useContext(CartContext);
  const totalPrice = getCartTotalPrice();
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div style={{ padding: "10px" }}>
        {cart.length > 0 ? (
          <>
            {cart.map((product) => {
              const { title, price, amount, id } = product;
              return (
                <div key={id}>
                  <CartDetailItem
                    addItem={addToCart}
                    removeItem={removeFromCart}
                    title={title}
                    price={price * amount}
                    amount={amount}
                    id={id}
                  />
                </div>
              );
            })}
            {}
            {totalPrice !== 0 && (
              <div>
                <p>Total price is: {totalPrice}</p>
                <button
                  onClick={() => {
                    alert("compra realizada");
                    navigate("/");
                  }}
                >
                  Pagar
                </button>
              </div>
            )}
          </>
        ) : (
          <p>Parece que no hay productos...</p>
        )}
      </div>
    </>
  );
}

export default CartDetail;
