import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink, useParams } from "react-router";
import { AuthContext } from "../context/AuthContex";
import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";
import { ScaleLoader } from "react-spinners";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  const { user, loding, signOutUser } = useContext(AuthContext);
  const my = useParams();
  console.log(my);
  const [open, setOpen] = useState(false);

  const outUser = () => {
    signOutUser();
  };
  return (
    <div className="   flex justify-between items-center w-11/12 mx-auto py-2 ">
      <img className="w-20 h-20 border-2 rounded-full" src={logo}></img>
      <div className="hidden md:block md:flex gap-7 text-white font-semibold items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/profile">My Profile</NavLink>
      </div>

      <div>
        <div className="block  md:hidden relative ">
          {/* menu */}
          <button
            onClick={() => setOpen(!open)}
            className="btn-ghost text-[45px] fixed -mt-6 right-10 z-50 text-black hover:text-green-700 transition-colors"
          >
            {open ? <IoCloseOutline /> : <IoMenuOutline />}
          </button>

          <div
            className={`fixed top-0 left-0 w-full bg-base-200 shadow-xl rounded-b-2xl transition-all duration-500 ease-in-out z-40 ${
              open
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0 "
            }`}
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold  text-green-700">🌿 Menu</h2>
              <ul className="menu space-y-2">
                <li>
                  <NavLink
                    to="/"
                    className="text-lg font-medium hover:text-green-600 transition"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/plants"
                    className="text-lg font-medium hover:text-green-600 transition"
                  >
                    Plants
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profile"
                    className="text-lg font-medium hover:text-green-600 transition"
                  >
                    My Profile
                  </NavLink>
                </li>
                <div className="ml-2 mt-2">
                  <div className="flex flex-col items-center">
                    {user ? (
                      <img
                        className="w-[50px] rounded-full"
                        src={user.photoURL}
                      ></img>
                    ) : (
                      <FaRegUserCircle className="w-10 text-black/80 h-10" />
                    )}
                    {user ? (
                      <button
                        onClick={outUser}
                        className="btn mt-3 btn-soft btn-secondary"
                      >
                        Sign Out
                      </button>
                    ) : (
                      <div className="flex flex-col w-full items-center max-w-sm mx-auto space-y-4 mt-5">
                        <Link className="w-full" to="/auth/login">
                          <button className="btn bg-gradient-to-r from-lime-400 via-emerald-500 to-green-400 text-whit text-white  w-full">
                            Login
                          </button>
                        </Link>
                        <div className="divider">OR</div>

                        <Link
                          type="button"
                          to="/auth/register"
                          className="w-full"
                        >
                          <button className="btn bg-gradient-to-r from-lime-400 via-emerald-500 to-green-400 text-whit text-white  w-full">
                            Register
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </ul>
            </div>
          </div>

          {open && (
            <div
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 transition-opacity "
            ></div>
          )}
        </div>

        {/* Drop Down MD Sceen  */}
        <div className=" hidden md:block dropdown dropdown-center z-10 ">
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
                <div className="justify-between  ">
                  <Link
                    to="/auth/login"
                    className="btn  btn-soft btn-secondary"
                  >
                    Login
                  </Link>
                  <Link
                    to="/auth/register"
                    className="btn btn-soft btn-secondary"
                  >
                    Register
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
