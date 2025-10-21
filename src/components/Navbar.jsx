import React from "react";
import logo from '../assets/logo.png'
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="  flex justify-between items-center w-11/12 mx-auto py-4 ">
      <img className="w-15 h-15 border-2 rounded-full" src={logo}></img>
      <div className="flex gap-7 text-xl text-white font-semibold items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink>My Profile</NavLink>
      </div>
      <div>
        <Link to="/auth/login" className="btn btn-soft btn-secondary">Login</Link>

      </div>
    </div>
  );
};

export default Navbar;
