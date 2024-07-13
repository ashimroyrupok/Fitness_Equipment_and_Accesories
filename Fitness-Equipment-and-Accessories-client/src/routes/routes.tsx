import App from "@/App";
import AddProduct from "@/components/Dashboard/AddProduct";
import AllProducts from "@/components/Dashboard/AllProducts";
import Dashboard from "@/components/Dashboard/Dashboard";
import DashboardHome from "@/components/Dashboard/DashboardHome";
import MyCarts from "@/components/Dashboard/MyCarts";
import Order from "@/components/Dashboard/Order";
import About from "@/pages/about/About";
import Cart from "@/pages/Cart/Cart";
import Checkout from "@/pages/checkout/Checkout";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Payment from "@/pages/payment/Payment";
import Products from "@/pages/products/Products";
import Register from "@/pages/register/Register";
import SingleProduct from "@/pages/singleProduct/SingleProduct";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
       
      },
      {
        path: "/product/:category",
        element: <Products />,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/api/v1/products?category=${params.category}`
          ),
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/products/${params.id}`),
      },
      {
        path: "/carts",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "my-dashboard",
        element: <DashboardHome />,
      },
      {
        path: "my-orders",
        element: <Order />,
      },
      {
        path: "my-carts",
        element: <MyCarts />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
      },
    ],
  },
]);
