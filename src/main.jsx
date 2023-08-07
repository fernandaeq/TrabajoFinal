import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./components/context/AuthContext.jsx";
import { CartProvider } from "./components/context/CartContext.jsx";
import App from "./App.jsx";
import AddCategory from "./components/screen/AddCategory/index.jsx";
import AddProduct from "./components/screen/AddProduct/index.jsx";
import CartDetail from "./components/screen/CartDetail/index.jsx";
import CategorieList from "./components/screen/CategorieList/index.jsx";
import EditCategory from "./components/screen/EditCategory/index.jsx";
import EditProduct from "./components/screen/EditProduct/index.jsx";
import Login from "./components/screen/Login/index.jsx";
import Signin from "./components/screen/Signin/index.jsx";

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
  {
    path: "/cartDetail",
    element: <CartDetail />,
  },
  //mas rutas...
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
