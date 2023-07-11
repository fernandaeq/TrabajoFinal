import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../organisms/NavBar";
import { getDataFromAPI } from "../../../helpers";

function Categorie() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const url = `https://api.escuelajs.co/api/v1/categories/${id}/products`;

  useEffect(() => {
    getDataFromAPI(url, setProducts);
  }, []);

  return (
    <div>
      Categorie
      <NavBar />
      {products?.map((product) => {
        return (
          <div className="inLineBlock card" key={product.id}>
            <p>{product.title}</p>
            <p>$ {product.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Categorie;
