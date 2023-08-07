import React, { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import ProductList from "../ProductList";
import NavBar from "../../organisms/NavBar";
import { fetchData } from "../../../helpers";
import Filters from "../../organisms/Filters";
import useAuth from "../../../customHooks/useAuth";
import { Link } from "react-router-dom";

/**
 *
 * @name CategorieList
 * @description componete in charge of render a list of categories
 */
function CategorieList() {
  const [displayProducts, setDisplayProducts] = useState(false);
  const [urlProducts, setUrlProducts] = useState("");
  const { isAdmin } = useAuth();
  const urlCategories = "https://api.escuelajs.co/api/v1/categories";
  const { isLoading, error, data } = useQuery({
    queryKey: ["fetchCategories"],
    queryFn: () => fetchData(urlCategories),
  });
  const categoryMutation = useMutation({
    mutationFn: (data) => {
      return fetch(`https://api.escuelajs.co/api/v1/categories/${data}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: () => {
      alert("Category deleted");
    },
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
            <li key={categorie.id}>
              <div className="btn row">
                <div className="col">
                  {isAdmin && (
                    <div className="row" style={{ justifyContent: "flex-end" }}>
                      <Link
                        to={`/editCategory/${categorie.id}`}
                        className="categoryAction"
                        style={{ padding: "0px 4px", margin: "0px" }}
                      >
                        edit
                      </Link>
                      <p
                        className="categoryAction"
                        style={{ padding: "0px 4px", margin: "0px" }}
                        onClick={() => categoryMutation.mutate(categorie.id)}
                      >
                        x
                      </p>
                    </div>
                  )}

                  <h3
                    className="categoryAction"
                    onClick={() => {
                      setUrlProducts(
                        `https://api.escuelajs.co/api/v1/categories/${categorie.id}/products`
                      );
                      setDisplayProducts(true);
                    }}
                    style={{ margin: "0px", padding: "0px 4px" }}
                  >
                    {categorie.name}
                  </h3>
                </div>
              </div>
            </li>
          );
        })}
        {isAdmin && (
          <li className="btn row" style={{ alignItems: "center" }}>
            <Link to={"/addCategory"} style={{ margin: "0px" }}>
              Add category
            </Link>
          </li>
        )}
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
