import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const AuthLayout = () => {
  return (
    <div className="font-open-sans">
       <Navbar />
      <main className="min-h-screen pt-20 bg-gray-50">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
