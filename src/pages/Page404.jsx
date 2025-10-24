import React from "react";
import page from "../assets/bg-not-found.png";
import { Link } from "react-router";
import { IoHomeOutline } from "react-icons/io5";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Page404 = () => {
  return (
    <div>
      <header>
        <nav className="fixed w-full z-20  bg-gradient-to-r from-green-600 via-emerald-500 to-lime-400 shadow-lg">
          <Navbar></Navbar>
        </nav>
        <div className="h-[98px] bg-white"></div>
      </header>

      <div className="min-h-full py-15 -mt-16 flex justify-center items-center text-center">
        <div>
          <img className="max-w-[70%] mx-auto mt-16" src={page}></img>
          <Link
            to="/"
            className=" w-[150px] text-center  btn bg-gradient-to-r from-lime-400 via-emerald-500 to-green-400 shadow-lg text-whit text-white mt-4"
          >
            <IoHomeOutline /> Go Home
          </Link>
        </div>
      </div>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Page404;
