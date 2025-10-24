import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const AuthLayout = () => {
  return (
    <div>
       <header className=" fixed w-full z-5 bg-gradient-to-r from-green-600 via-emerald-500 to-lime-400 shadow-lg">
        <Navbar></Navbar>
      </header>
      <div className="h-[98px] bg-white"></div>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AuthLayout;
