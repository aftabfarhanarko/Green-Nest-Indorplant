import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContex";
import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";
import { ScaleLoader } from "react-spinners";

const Navbar = () => {
  const { user, loding, signOutUser } = useContext(AuthContext);
  console.log(user, loding);

  const outUser = () => {
    signOutUser();
  };
  return (
    <div className="   flex justify-between items-center w-11/12 mx-auto py-4 ">
      <img className="w-20 h-20 border-2 rounded-full" src={logo}></img>
      <div className="flex gap-7 text-white font-semibold items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink>My Profile</NavLink>
      </div>
      <div>
        <div className="hidden  drawer drawer-end">
          <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-5"
              className="drawer-button btn btn-primary"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-5"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="dropdown dropdown-center z-10 ">
          <div
            tabIndex={0}
            role="button"
            className=" m-1 text-center flex flex-col"
          >
            <div className="">
              {loding ? (
                <ScaleLoader color="#FFFFFF " />
              ) : user ? (
                <img
                  className="w-[50px] rounded-full"
                  src={user.photoURL}
                ></img>
              ) : (
                <FaRegUserCircle className="w-10 text-black/80 h-10" />
              )}
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 space-y-3 rounded-box pt-5 z-1 w-52 p-2 shadow-sm"
          >
            <li className="text-center font-semibold">
              {user && user.displayName}
            </li>
            <li>
              {user ? (
                <button
                  onClick={outUser}
                  className="btn btn-soft btn-secondary"
                >
                  Sign Out
                </button>
              ) : (
                <Link to="/auth/login" className="btn btn-soft btn-secondary">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
        {/* <Link to="/auth/login" className="btn btn-soft btn-secondary">Login</Link> */}
      </div>
    </div>
  );
};

export default Navbar;
