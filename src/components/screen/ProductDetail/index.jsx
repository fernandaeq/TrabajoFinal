import React from "react";

/**
 *
 * @name  ProductDetail
 * @description component that shows the Product Card
 */
function ProductDetail({ title, img, price }) {
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
      </div>
    </div>
  );
}

export default ProductDetail;
