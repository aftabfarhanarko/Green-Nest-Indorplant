import React from "react";
import page from "../assets/bg-not-found.png";
import { Link } from "react-router";
import { IoHomeOutline } from "react-icons/io5";

const Page404 = () => {
  return (
    <div className="min-h-full flex justify-center items-center text-center">
      <div>
        <img className="max-w-[70%] mx-auto mt-16" src={page}></img>
        <Link to="/" className=" w-[150px] text-center  btn bg-gradient-to-r from-lime-400 via-emerald-500 to-green-400 shadow-lg text-whit text-white mt-4">
         <IoHomeOutline />  Go Home
        </Link>
      </div>
    </div>
  );
};

export default Page404;
