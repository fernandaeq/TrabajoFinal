import React from "react";
import NavBar from "../../organisms/NavBar";
import { useMutation } from "@tanstack/react-query";

function AddCategory() {
  const registerMutation = useMutation({
    mutationFn: (data) => {
      return fetch("https://api.escuelajs.co/api/v1/categories/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      alert("Category added");
    },
  });
  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);

    let name = formData.get("name");
    let image = formData.get("image");

    let userData = { name, image };
    registerMutation.mutate(userData);
  }
  return (
    <div>
      <NavBar />
      <h1 style={{ textAlign: "center" }}>Add product</h1>
      <form className="centerForm" onSubmit={handleSubmit}>
        <label>Category Name</label>
        <input type="text" name="name" placeholder="A category" />
        <label>Image</label>
        <input type="text" name="image" placeholder="https://url.com" />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default AddCategory;
