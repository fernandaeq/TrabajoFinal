import React from "react";

function CartDetailItem({ title, price, amount, id, addItem, removeItem }) {
  return (
    <div
      className="col"
      style={{ justifyContent: "space-around", width: "200px" }}
    >
      <div className="row" style={{ justifyContent: "space-around" }}>
        <p>
          {title} ({amount})
        </p>
      </div>
      <div
        className="row"
        style={{ justifyContent: "space-around", alignItems: "center" }}
      >
        <button
          onClick={() => {
            if (amount > 0) {
              removeItem({ title, price, amount, id });
            }
          }}
          style={{ width: "35px", height: "25px" }}
        >
          -
        </button>
        <p>${price}</p>
        <button
          onClick={() => addItem({ title, price, amount, id })}
          style={{ width: "35px", height: "25px" }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartDetailItem;
