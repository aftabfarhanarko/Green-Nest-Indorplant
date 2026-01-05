import React, { useContext, useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink, useLocation } from "react-router";
import { AuthContext } from "../context/AuthContex";
import {
  FaUserCircle,
  FaLeaf,
  FaSignOutAlt,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  const handleSignOut = () => {
    signOutUser();
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Plants", path: "/plants" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "About Us", path: "/about-us" },
    { name: "My Profile", path: "/profile" },
  ];

  return (
    <nav className="bg-white fixed top-0 w-full z-50 shadow-sm py-3">
      <div className="w-11/12 max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <img
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary"
              src={logo}
              alt="GreenNest Logo"
            />
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
              <FaLeaf className="text-primary text-xs" />
            </div>
          </div>
          <span className="text-2xl font-montserrat font-bold tracking-tight text-gray-800">
            Green<span className="text-primary">Nest</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive
                    ? "text-primary font-bold"
                    : "text-gray-600 hover:text-primary"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* User Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {user && (
            <Link
              to="/dashboard"
              className="btn btn-ghost btn-sm font-semibold text-primary"
            >
              Dashboard
            </Link>
          )}
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar ring ring-primary ring-offset-base-100 ring-offset-2"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User"
                    src={user?.photoURL || "https://i.ibb.co/Txcz8b0/user.png"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 border border-gray-100"
              >
                <li>
                  <Link
                    to="/dashboard"
                    className="justify-between font-semibold text-primary"
                  >
                    Dashboard
                  </Link>
                </li>

                <li>
                  <Link to="/settings">
                    <FaCog className="mr-2" /> Settings
                  </Link>
                </li>
                <li>
                  <Link to="/help">
                    <FaQuestionCircle className="mr-2" /> Help Center
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="text-red-500 hover:bg-red-50"
                  >
                    <FaSignOutAlt className="mr-2" /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/auth/login"
                className="font-semibold btn btn-primary btn-sm text-white px-6 rounded-lg shadow-md "
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="btn btn-primary btn-sm text-white px-6  rounded-lg shadow-md"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
        >
          {open ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Mobile Side Drawer */}
      {open && (
        <div className="fixed top-0 bg-white z-50 right-0 h-full w-[80%] max-w-[250px] shadow-2xl md:hidden">
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
              <span className="text-xl font-bold font-montserrat text-primary">
                Menu
              </span>
              <button
                onClick={() => setOpen(false)}
                className="text-2xl text-gray-500 hover:text-red-500"
              >
                <IoClose />
              </button>
            </div>

            <div className="flex flex-col gap-4 flex-grow">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-lg font-medium px-4 py-3 rounded-xl ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-gray-600 hover:bg-gray-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Mobile User Actions */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                {user ? (
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 px-4 mb-2">
                      <img
                        alt="User"
                        src={
                          user?.photoURL || "https://i.ibb.co/Txcz8b0/user.png"
                        }
                        className="w-10 h-10 rounded-full border border-gray-200"
                      />
                      <div>
                        <p className="font-semibold text-gray-800">
                          {user.displayName || "User"}
                        </p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    <Link
                      to="/dashboard"
                      className="text-lg font-medium px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-primary"
                    >
                      Dashboard
                    </Link>

                    <button
                      onClick={handleSignOut}
                      className="text-lg font-medium px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 text-left flex items-center gap-2"
                    >
                      <FaSignOutAlt /> Logout
                    </button>
                  </div>
                ) : (
                  ""
                  
                  // </div>
                )}
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-gray-100">
              {user ? (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 px-2">
                    <img
                      src={
                        user?.photoURL || "https://i.ibb.co/Txcz8b0/user.png"
                      }
                      alt="User"
                      className="w-12 h-12 rounded-full border border-gray-200"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">
                        {user.displayName || "User"}
                      </p>
                      <p className="text-xs text-gray-500 truncate max-w-[150px]">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-error btn-outline btn-block rounded-xl mt-2"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to="/auth/login"
                    className="btn btn-outline border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:text-primary"
                  >
                    Login
                  </Link>
                  <Link
                    to="/auth/register"
                    className="btn btn-primary text-white rounded-xl shadow-lg"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
