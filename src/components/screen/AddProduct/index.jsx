import React from "react";
import NavBar from "../../organisms/NavBar";
import { useMutation } from "@tanstack/react-query";

function AddProduct() {
  const registerMutation = useMutation({
    mutationFn: (data) => {
      return fetch("https://api.escuelajs.co/api/v1/products/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    onSuccess: (data) => {
      alert("product added");
    },
  });
  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let title = formData.get("title");
    let price = formData.get("price");
    let images = [formData.get("image")];
    let description = formData.get("description");
    let categoryId = formData.get("category");

    let userData = { title, price, images, description, categoryId };
    registerMutation.mutate(userData);
  }
  return (
    <div>
      <NavBar />
      <form className="centerForm" onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name="title" placeholder="person" />
        <label>Price</label>
        <input type="number" name="price" placeholder="249" />
        <label>Image</label>
        <input type="text" name="image" placeholder="http://url.com" />
        <label>Description</label>
        <input type="text" name="description" />
        <label>Category</label>
        <input type="text" name="category" />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default AddProduct;
