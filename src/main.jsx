import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Categories from "./components/screen/Categories/index.jsx";
import Products from "./components/screen/Products/index.jsx";
import Categorie from "./components/screen/Categorie/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/categorie/:id",
    element: <Categorie />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  //mas rutas...
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
