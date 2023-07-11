import React, { useEffect, useState } from "react";
import { getDataFromAPI } from "../../../helpers";

function Products({ url }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getDataFromAPI(url, setProducts);
  }, [url]);
  return (
    <div>
      {products?.map((product) => {
        return (
          <div className="inLineBlock card" key={product.id}>
            <p>{product.title}</p>
            <p>$ {product.price}</p>
            <img
              src={product.images[0]}
              alt={product.title}
              width={100}
              height={100}
            />
            <p>{product.id}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
