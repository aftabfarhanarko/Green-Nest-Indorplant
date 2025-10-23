import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import GreenExpert from "../components/GreenExpert";
import Plant from "../components/Plant";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import PrivetRoute from "../provider/PrivetRoute";
import Loder from "../components/Loder";
import PlantsDetails from "../pages/PlantsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    hydrateFallbackElement:<Loder></Loder>,
    children: [
      {
        index: true,
        loader: () => fetch("/plants.json"),
        element: <Home></Home>,
        hydrateFallbackElement: <Loder></Loder>
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
    hydrateFallbackElement: <Loder></Loder>,
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
  },
  {
    path:'/profile',
    element:<PrivetRoute>
      <MyProfile></MyProfile>
    </PrivetRoute>
  },
  {
    path:"/detlise/:plantId",
    loader:  () => fetch("/plants.json"),
    element: <PrivetRoute><PlantsDetails></PlantsDetails></PrivetRoute>
  },

  {
    path:"*",
    element:<h1>Not Pages FOundes path error</h1>
  }
]);


