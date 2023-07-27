import React from "react";
import NavBar from "../../organisms/NavBar";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

function EditCategory() {
  const { id } = useParams();

  const categoryMutation = useMutation({
    mutationFn: (data) => {
      return fetch(`https://api.escuelajs.co/api/v1/categories/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      alert("Category updated");
    },
  });
  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let name = formData.get("name");
    let userData = { name };
    categoryMutation.mutate(userData);
  }
  return (
    <div>
      <NavBar />
      <h1 style={{ textAlign: "center" }}>Edit Category</h1>
      <form className="centerForm" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" placeholder="Other name" />
        <input type="submit" value="Apply" />
      </form>
    </div>
  );
}

export default EditCategory;
