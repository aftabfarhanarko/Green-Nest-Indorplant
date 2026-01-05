import React from "react";
import page from "../assets/bg-not-found.png";
import { Link } from "react-router";
import { IoHomeOutline } from "react-icons/io5";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Page404 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar></Navbar>
      
      <main className="flex-grow flex flex-col items-center justify-center pt-28 pb-20 text-center px-4">
        <div className="max-w-md w-full">
          <img className="w-full max-w-xs mx-auto mb-8 drop-shadow-xl" src={page} alt="404 Not Found"></img>
          
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-gray-800 mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-500 text-lg mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-white font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all transform hover:-translate-y-1"
          >
            <IoHomeOutline className="text-xl" /> Back to Home
          </Link>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Page404;
