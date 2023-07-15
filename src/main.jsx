import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import CategorieList from "./components/screen/CategorieList/index.jsx";
import Categorie from "./components/screen/CategorieDetail/index.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProductList from "./components/screen/ProductList/index.jsx";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/categorieList",
    element: <CategorieList />,
  },
  {
    path: "/categorieDetail/:id",
    element: <Categorie />,
  },
  {
    path: "/productList",
    element: <ProductList />,
  },
  //mas rutas...
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
