import React, { useEffect, useState } from "react";
import NavBar from "../../organisms/NavBar";
import Products from "../Products";
import { getDataFromAPI } from "../../../helpers";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [urlProducts, setUrlProducts] = useState(
    "https://api.escuelajs.co/api/v1/products"
  );
  const urlCategories = "https://api.escuelajs.co/api/v1/categories";

  useEffect(() => {
    getDataFromAPI(urlCategories, setCategories);
  }, []);

  return (
    <div>
      <h1>Categorias</h1>
      <NavBar />
      <ul className="row" style={{ listStyle: "none" }}>
        <button
          onClick={() =>
            setUrlProducts("https://api.escuelajs.co/api/v1/products")
          }
        >
          clear
        </button>
        {categories?.map((categorie) => {
          return (
            <li
              key={categorie.id}
              onClick={() =>
                setUrlProducts(
                  `https://api.escuelajs.co/api/v1/categories/${categorie.id}/products`
                )
              }
            >
              <button>{categorie.name}</button>
            </li>
          );
        })}
      </ul>
      <Products url={urlProducts} />
    </div>
  );
}

export default Categories;
