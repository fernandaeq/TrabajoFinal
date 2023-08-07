import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import CategorieList from "./components/screen/CategorieList/index.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Login from "./components/screen/Login/index.jsx";
import Signin from "./components/screen/Signin/index.jsx";
import { AuthProvider } from "./components/context/AuthContext.jsx";
import AddProduct from "./components/screen/AddProduct/index.jsx";
import EditProduct from "./components/screen/EditProduct/index.jsx";
import EditCategory from "./components/screen/EditCategory/index.jsx";
import AddCategory from "./components/screen/AddCategory/index.jsx";

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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/addProduct",
    element: <AddProduct />,
  },
  {
    path: "/addCategory",
    element: <AddCategory />,
  },
  {
    path: "/editProduct/:id",
    element: <EditProduct />,
  },
  {
    path: "/editCategory/:id",
    element: <EditCategory />,
  },
  //mas rutas...
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
