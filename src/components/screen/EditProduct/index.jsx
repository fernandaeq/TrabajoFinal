import React from "react";
import NavBar from "../../organisms/NavBar";
import { useParams } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();

  return (
    <div>
      <NavBar />
      <p>hola {id}</p>
    </div>
  );
}

export default EditProduct;
