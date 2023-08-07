import React from "react";
import NavBar from "../../organisms/NavBar";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../helpers";

function EditProduct() {
  const { id } = useParams();
  const urlProduct = `https://api.escuelajs.co/api/v1/products/${id}`;
  const { data } = useQuery({
    queryKey: ["fetchProduct"],
    queryFn: () => fetchData(urlProduct),
  });

  const registerMutation = useMutation({
    mutationFn: (data) => {
      return fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      alert("product updated");
    },
  });
  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);

    let title = formData.get("title") || data?.title;
    let price = formData.get("price") || data?.price;
    let images = [formData.get("image") || data?.images[0]];
    let description = formData.get("description") || data?.description;
    let categoryId = formData.get("category") || data?.category.id;

    let userData = { title, price, images, description, categoryId };
    registerMutation.mutate(userData);
  }
  return (
    <div>
      <NavBar />
      <h1 style={{ textAlign: "center" }}>Edit product</h1>
      <form className="centerForm" onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name="title" placeholder={data?.title} />
        <label>Price</label>
        <input type="number" name="price" placeholder={data?.price} />
        <label>Image</label>
        <input type="text" name="image" placeholder={data?.images[0]} />
        <label>Description</label>
        <input type="text" name="description" placeholder={data?.description} />
        <label>Category</label>
        <input type="text" name="category" placeholder={data?.category.id} />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default EditProduct;
