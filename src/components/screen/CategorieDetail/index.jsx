import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

//TODO: remove this component
function CategorieDetail() {
  const { id } = useParams();
  const url = `https://api.escuelajs.co/api/v1/categories/${id}/products`;
  const { isLoading, data } = useQuery("repoData", () =>
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
            <div className="inlineBlock card" key={product.id}>
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
