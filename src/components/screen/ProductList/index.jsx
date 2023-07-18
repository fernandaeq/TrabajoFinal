import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../helpers";
import ProductDetail from "../ProductDetail";

/**
 *
 * @name ProductList
 * @description this component render a list of products
 */
function ProductList({ url }) {
  const { isLoading, data } = useQuery({
    queryKey: ["fetchProducts", url],
    queryFn: () => fetchData(url),
  });

  return (
    <div>
      {data?.map((product) => {
        const { title, images, price, id } = product;

        return (
          <ProductDetail title={title} img={images[0]} price={price} key={id} />
        );
      })}
      {isLoading && <p>Cargando...</p>}
    </div>
  );
}

export default ProductList;
