import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Router";
import ContextProvider from "./context/ContextProvider";
 import { ToastContainer } from 'react-toastify';
     import 'react-toastify/dist/ReactToastify.css';



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
        <ToastContainer position="top-center"  autoClose={5000}
            theme="colored" />
    </ContextProvider>
  </StrictMode>
);
