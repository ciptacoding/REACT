import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";
import ErrorPage from "./Pages/error-page";
import IndexPage from "./Pages";
import ProductsPage from "./Pages/products";

const router = createBrowserRouter([
   {
      path: "/",
      element: <IndexPage />,
      errorElement: <ErrorPage />,
   },
   {
      path: "/login",
      element: <LoginPage />,
      errorElement: <ErrorPage />,
   },
   {
      path: "/register",
      element: <RegisterPage />,
      errorElement: <ErrorPage />,
   },
   {
      path: "/products",
      element: <ProductsPage />,
      errorElement: <ErrorPage />,
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
