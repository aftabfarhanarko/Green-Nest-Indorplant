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
import Page404 from "../pages/Page404";
import Pricing from "../pages/Pricing";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import ExtraPage from "../pages/ExtraPage";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import MyOrders from "../pages/dashboard/MyOrders";
import Wishlist from "../pages/dashboard/Wishlist";
import ManageProfile from "../pages/dashboard/ManageProfile";
import AddressBook from "../pages/dashboard/AddressBook";
import SupportTickets from "../pages/dashboard/SupportTickets";
import Settings from "../pages/dashboard/Settings";

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
        path: "/pricing",
        element: <Pricing></Pricing>
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/extra",
        element: <ExtraPage></ExtraPage>
      },
      {
        path: "/",
        element: <GreenExpert></GreenExpert>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
    children: [
        {
            index: true,
            element: <DashboardHome></DashboardHome>
        },
        {
            path: "orders",
            element: <MyOrders></MyOrders>
        },
        {
            path: "wishlist",
            element: <Wishlist></Wishlist>
        },
        {
            path: "profile",
            element: <ManageProfile></ManageProfile>
        },
        {
            path: "address",
            element: <AddressBook></AddressBook>
        },
        {
            path: "support",
            element: <SupportTickets></SupportTickets>
        },
        {
            path: "settings",
            element: <Settings></Settings>
        }
    ]
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
    path:"/*",
    element:<Page404></Page404>
  }
]);


