import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductList from "../ProductList";
import NavBar from "../../organisms/NavBar";
import { fetchData } from "../../../helpers";
import Filters from "../../organisms/Filters";

/**
 *
 * @name CategorieList
 * @description componete in charge of render a list of categories
 */
function CategorieList() {
  const [displayProducts, setDisplayProducts] = useState(false);
  const [urlProducts, setUrlProducts] = useState("");
  const urlCategories = "https://api.escuelajs.co/api/v1/categories";
  const { isLoading, error, data } = useQuery({
    queryKey: ["fetchCategories"],
    queryFn: () => fetchData(urlCategories),
  });

  return (
    <div>
      <NavBar />
      <h1>Categorias</h1>

      <ul className="row" style={{ listStyle: "none" }}>
        {isLoading && <p>Cargando categorias...</p>}
        {error && <p>Ocurrio un error</p>}
        {data?.map((categorie) => {
          return (
            <li
              key={categorie.id}
              onClick={() => {
                setUrlProducts(
                  `https://api.escuelajs.co/api/v1/categories/${categorie.id}/products`
                );
                setDisplayProducts(true);
              }}
            >
              <h3 className="btn">{categorie.name}</h3>
            </li>
          );
        })}
      </ul>

      {displayProducts && (
        <div>
          <Filters setUrlProducts={setUrlProducts} />
          <ProductList url={urlProducts} />
        </div>
      )}
    </div>
  );
}

export default CategorieList;
