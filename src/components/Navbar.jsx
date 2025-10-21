import React from "react";
import logo from '../assets/logo.png'
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="  flex justify-between items-center w-11/12 mx-auto py-4 ">
      <img className="w-15 h-15 border-2 rounded-full" src={logo}></img>
      <div className="flex gap-7 font-semibold items-center">
        <NavLink>Home</NavLink>
        <NavLink>Plants</NavLink>
        <NavLink>My Profile</NavLink>
      </div>
      <div>
        <button className="btn btn-soft btn-secondary">Secondary</button>

      </div>
    </div>
  );
};

export default Navbar;
