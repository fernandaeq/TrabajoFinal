import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductList from "../ProductList";
import NavBar from "../../organisms/NavBar";
import { fetchData } from "../../../helpers";

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
      <h1>Categorias</h1>
      <NavBar />
      <ul className="row" style={{ listStyle: "none" }}>
        <button
          onClick={() => {
            setUrlProducts("https://api.escuelajs.co/api/v1/products");
          }}
        >
          clear
        </button>
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
              <button style={{ width: "200px", maxHeight: "30px" }}>
                {categorie.name}
              </button>
            </li>
          );
        })}
      </ul>
      {displayProducts && <ProductList url={urlProducts} />}
    </div>
  );
}

export default CategorieList;
