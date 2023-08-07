import React from "react";
import useAuth from "../../../customHooks/useAuth";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

/**
 *
 * @name  ProductDetail
 * @description component that shows the Product Card
 */
function ProductDetail({ title, img, price, id }) {
  const { isAdmin } = useAuth();
  const deleteMutation = useMutation({
    mutationFn: (data) => {
      return fetch(` https://api.escuelajs.co/api/v1/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      alert("product deleted");
    },
  });
  return (
    <div
      style={{
        display: "inline-flex",
      }}
    >
      <div className="card">
        <img
          onError={(e) => {
            e.target.src =
              "https://cdn4.wpbeginner.com/wp-content/uploads/2013/04/wp404error.jpg";
          }}
          src={img}
          alt={title}
          width="100%"
          height={100}
        />
        <p>{title}</p>
        <p
          style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "4px" }}
        >
          ${price}
        </p>
        {isAdmin && <Link to={`/editProduct/${id}`}>edit</Link>}
        {isAdmin && (
          <p className="btn" onClick={() => deleteMutation.mutate()}>
            delete
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
