import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function CategorieDetail() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const url = `https://api.escuelajs.co/api/v1/categories/${id}/products`;
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(url).then((res) => res.json())
  );

  return (
    <div>
      Categorie
      {isLoading ? (
        <p>Cargando categorias...</p>
      ) : (
        data?.map((product) => {
          return (
            <div className="inLineBlock card" key={product.id}>
              <p>{product.title}</p>
              <p>$ {product.price}</p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default CategorieDetail;
