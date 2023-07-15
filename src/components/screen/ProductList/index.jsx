import React from "react";
import { useQuery } from "@tanstack/react-query";

function ProductList({ url }) {
  const { isLoading, error, isFetched, isFetching, data } = useQuery({
    queryKey: ["fetchProducts", url],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  return (
    <div>
      {data?.map((product) => {
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
      {isLoading && <p>Cargando</p>}
    </div>
  );
}

export default ProductList;
