import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import GreenExpert from "../components/GreenExpert";
import Plant from "../components/Plant";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        loader: () => fetch("/plants.json"),
        element: <Home></Home>,
        hydrateFallbackElement: <h1>Loding....</h1>,
      },
      {
        path: "/",
        element: <GreenExpert></GreenExpert>,
      },
    ],
  },
  {
    path: "/plants",
    loader: () => fetch("/plants.json"),
    element: <Plant></Plant>,
    hydrateFallbackElement: <h1>Loding....</h1>,
  },
  {
    path:"/auth",
    element: <AuthLayout></AuthLayout>,
    children:[
        {
            path:"/auth/login",
            element:<Login></Login>
        },
        {
            path:"/auth/register",
            element:<Register></Register>
        }
    ]
  }
]);
